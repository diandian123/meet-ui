/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
const ITEMSKEYS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'W',
    'X',
    'Y',
    'Z'
];
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    properties: {
        // 类型：list || card
        type: {
            type: String,
            value: 'list'
        },
        // 标题内容
        title: {
            type: String,
            value: ''
        },
        // 列表数据
        items: {
            type: Array,
            value: []
        },
        // 索引吸顶
        hasSticky: {
            type: Boolean,
            value: true
        },
        // 底部安全距离
        hasSafe: {
            type: Boolean,
            value: true
        },
        // 头像尺寸
        avatarSize: {
            type: String,
            value: 'l'
        },
        // 选项可删除
        hasDelete: {
            type: Boolean,
            value: false
        },
        // 选项可选择
        hasSelect: {
            type: Boolean,
            value: false
        }
    },
    data: {
        /* 未渲染数据 */
        treeInfo: {
            // 索引树节点信息
            treeTop: 0,
            treeBottom: 0,
            itemHeight: 0,
            itemMount: 0
        },
        formatItems: [], // 组件内部渲染数据
        maxScrollTop: 0, // 最大滚动高度
        blocks: [], // 节点组信息
        /* 渲染数据 */
        treeItemCur: 0, // 索引树的聚焦项
        listItemCur: 0, // 节点树的聚焦项
        touching: false, // 是否在触摸索引树中
        scrollTop: 0, // 节点树滚动高度
        treeKeyTran: false, // 指示器消失动画
        lastScrollTop: 0 // 页面上次滚动的高度
    },
    observers: {
        items(value) {
            // 没有值的时候直接return
            if (value.length === 0) {
                return;
            }
            // 格式化items
            this.formatItems(value);
            this.init();
        }
    },
    methods: {
        /**
         * 格式化外部传入的items
         */
        formatItems(value) {
            const formatItems = [];
            ITEMSKEYS.forEach((KEY) => {
                const formatObj = {};
                formatObj.key = KEY;
                formatObj.data = value
                    .map((item, index) => {
                        return { index, ...item };
                    })
                    .filter((item) => item.key === KEY);

                if (formatObj.data && formatObj.data.length > 0) {
                    formatItems.push(formatObj);
                }
            });
            this.setData({
                formatItems
            });
        },
        /**
         *  初始化
         */
        init() {
            // 可操作时需要记录上次滚动的值
            if (this.data.hasDelete || this.data.hasSelect) {
                this.getScrollTop();
            } else {
                this.clearData();
            }
            // 避免获取不到节点信息报错问题
            if (this.data.formatItems.length === 0) {
                return;
            }
            this.initDom();
        },
        /**
         *  初始化获取 dom 信息
         */
        initDom() {
            const query = this.createSelectorQuery();
            // 右侧列表树信息
            query.select('.mt-indexlist__tree').boundingClientRect();
            // 内容列表信息
            query.select('.mt-indexlist__content').boundingClientRect();
            query.select('.mt-indexlist__main').boundingClientRect();
            // 每一个区块内容
            query.selectAll('.mt-indexlist__groups').boundingClientRect();
            query.exec((rect) => {
                // 最大滚动的index
                let maxScrollIndex = -1;
                const treeTop = rect[0].top; // 索引树顶部位置
                const treeBottom = rect[0].top + rect[0].height; // 索引树底部位置
                const itemHeight = rect[0].height / this.data.formatItems.length; // 索引树每一项的高度
                const itemMount = this.data.formatItems.length; // 索引树长度
                const { bottom } = rect[1];
                const { top } = rect[2];
                // 计算出页面最大的滚动距离
                const maxScrollTop = rect[2].height + rect[2].top - bottom + this.data.lastScrollTop;
                // 获取节点信息
                const blocks = rect[3].map((item, index) => {
                    // Math.ceil 向上取整, 防止索引树切换列表时候造成真机固定头部上边线显示过粗问题
                    const itemTop = Math.ceil(item.top - top),
                        itemBottom = Math.ceil(itemTop + item.height);
                    if (maxScrollTop >= itemTop && maxScrollTop < itemBottom) {
                        maxScrollIndex = index;
                    }
                    // 每一块节点的详细信息
                    return {
                        itemTop: itemTop,
                        itemBottom: itemBottom,
                        scrollTop: itemTop >= maxScrollTop ? maxScrollTop : itemTop,
                        scrollIndex: maxScrollIndex === -1 ? index : maxScrollIndex
                    };
                });
                this.setData({
                    maxScrollTop: maxScrollTop,
                    blocks: blocks,
                    treeInfo: {
                        treeTop: treeTop, // 索引树顶部位置
                        treeBottom: treeBottom, // 索引树底部位置
                        itemHeight: itemHeight, // 索引树每一项的高度
                        itemMount: itemMount // 索引树长度
                    }
                });
            });
        },
        /**
         * 点击列表项
         */
        handleClick(e) {
            const { index } = e.currentTarget.dataset;
            const item = this.data.items[index];
            if (this.data.hasSelect) {
                this.triggerEvent('select', { index, item });
            } else {
                this.triggerEvent('click', { index, item });
            }
        },
        // 移除列表项
        handleDelete(e) {
            const { index } = e.currentTarget.dataset;
            const item = this.data.items[index];
            this.triggerEvent('delete', { index, item });
        },
        /**
         * scroll-view 滚动监听
         */
        handleScroll(e) {
            if (this.data.touching) {
                return;
            }
            const scrollTop = e.detail.scrollTop;
            if (scrollTop > this.data.maxScrollTop) {
                return;
            }
            const blocks = this.data.blocks;
            for (let i = blocks.length - 1; i >= 0; i--) {
                const block = blocks[i];
                this.scrollTop = scrollTop;
                // 判断当前滚动值 scrollTop 所在区间, 以得到当前聚焦项
                if (scrollTop >= block.itemTop && scrollTop < block.itemBottom) {
                    this.setData({
                        treeItemCur: i,
                        listItemCur: i
                    });
                }
            }
        },
        /**
         * tree 触摸开始
         */
        touchStart(e) {
            // 获取触摸点信息
            const startTouch = e.changedTouches[0];
            if (!startTouch) {
                return;
            }
            this.setData({ touching: true });
            const treeItemCur = this.getCurrentTreeItem(startTouch.clientY);
            this.setValue(treeItemCur);
            // 抖一下提升体验
            wx.vibrateShort();
        },
        /**
         * tree 触摸移动
         */
        touchMove(e) {
            // 获取触摸点信息
            const currentTouch = e.changedTouches[0];
            if (!currentTouch) {
                return;
            }
            // 滑动结束后迅速开始第二次滑动时候 touching 为 false 造成不显示 indicator 问题
            if (!this.data.touching) {
                this.setData({
                    touching: true
                });
            }
            const treeItemCur = this.getCurrentTreeItem(currentTouch.clientY);
            this.setValue(treeItemCur);
        },
        /**
         * tree 触摸结束
         */
        touchEnd() {
            const { treeItemCur, listItemCur } = this.data;
            // 移动前后的树节点index不一致时更新
            if (treeItemCur !== listItemCur) {
                this.setData({
                    treeItemCur: listItemCur
                });
            }
            this.setData({
                treeKeyTran: true
            });
            setTimeout(() => {
                this.setData({
                    touching: false,
                    treeKeyTran: false
                });
            }, 300);
        },
        /**
         * 获取当前触摸的 tree-item
         * @param pageY: 当前触摸点pageY
         */
        getCurrentTreeItem(pageY) {
            const { treeTop, treeBottom, itemHeight, itemMount } = this.data.treeInfo;
            if (pageY < treeTop) {
                // 触摸点在tree上方
                return 0;
            } else if (pageY >= treeBottom) {
                // 触摸点在tree下方
                return itemMount - 1;
            } else {
                return Math.floor((pageY - treeTop) / itemHeight);
            }
        },
        /**
         * 触摸之后后设置对应value
         */
        setValue(treeItemCur) {
            // 防止滑动过程中多次刷新
            if (treeItemCur === this.data.treeItemCur) {
                return;
            }
            const block = this.data.blocks[treeItemCur];
            // 找不到直接返回
            if (!block) {
                return;
            }
            const { scrollTop, scrollIndex } = block;
            this.setData(
                {
                    treeItemCur: treeItemCur,
                    scrollTop: scrollTop,
                    listItemCur: scrollIndex
                },
                () => {
                    // 抖一下提升体验
                    wx.vibrateShort();
                }
            );
        },
        /**
         * 清除参数
         */
        clearData() {
            this.setData({
                treeItemCur: 0, // 索引树的聚焦项
                listItemCur: 0, // 节点树的聚焦项
                touching: false, // 是否在触摸索引树中
                scrollTop: 0, // 节点树滚动高度
                treeKeyTran: false // 指示器
            });
        },
        /**
         * 删除情况保留页面参数
         */
        getScrollTop() {
            this.setData({
                lastScrollTop: this.scrollTop || 0
            });
        }
    }
});
