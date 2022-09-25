/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：click 点击切换 || swiper 滑动切换
        type: {
            type: String,
            value: 'click'
        },
        // 数据
        items: {
            type: Array,
            value: []
        },
        // 标签头显示位置： top 顶部 || left 左侧
        position: {
            type: String,
            value: 'top'
        },
        // 高度: -1为自适应内容高度，swiper时需要明确指定高度
        tabHeight: {
            type: Number,
            value: -1
        },
        // 默认选中项
        current: {
            type: Number,
            value: 0
        },
        // 切换动画
        animation: {
            type: Boolean,
            value: true
        },
        // 选中长度为标题一半
        miniBar: {
            type: Boolean,
            value: false
        },
        // 标签头吸顶
        sticky: {
            type: Boolean,
            value: false
        },
        // 吸顶距离
        offsetTop: {
            type: Number,
            value: 0
        },
        // 滚动距离
        scrollTop: {
            type: Number,
            value: 0
        }
    },
    /**
     * 数据监听
     */
    observers: {
        current(value) {
            this.setData({
                selectedIndex: value
            });
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        status: 0, // 组件状态 0：unready 1: ready
        opacity: 0,
        selectedIndex: 0, // 当前tab位置
        selectedTitleWidth: 0, // 当前tab项标题宽度
        headerData: {}, // 标签头Dom数据
        tabItemData: [], // 标签项Dom数据
        tabTitleData: [], // 标签项内容Dom数据
        tabScrollLeft: 0, // 横向滚动条位置
        tabScrollTop: 0, // 竖向滚动条位置
        container: null, // 吸顶容器对象
        blurEffect: false, // 显示虚化效果
        activeLeft: 0 // 底部选中样式偏移量
    },
    lifetimes: {
        ready() {
            this.data.status = 1;
            const query = this.createSelectorQuery();
            if (this.data.sticky) {
                this.setData({
                    container: () => query.select('.mt-tab')
                });
            }
            query.select('.mt-tab__hd').boundingClientRect();
            query.selectAll('.mt-tab__item').boundingClientRect();
            query.selectAll('.mt-tab__item-text').boundingClientRect();
            query.exec((res) => {
                this.setData(
                    {
                        headerData: res[0],
                        contentHeight:
                            this.data.position === 'left'
                                ? this.data.tabHeight
                                : this.data.tabHeight > 0
                                ? this.data.tabHeight - res[0].height
                                : -1,
                        opacity: 1,
                        tabItemData: res[1],
                        tabTitleData: res[2]
                    },
                    () => {
                        this.showMask();
                        this.handleTab({
                            currentTarget: {
                                dataset: { index: this.data.selectedIndex }
                            }
                        });
                    }
                );
            });
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 切换tab
         */
        handleTab(e) {
            const currentTarget = e.currentTarget;
            const index = Number(currentTarget.dataset.index);
            const offsetLeft = e.currentTarget.offsetLeft || 0;
            const offsetTop = e.currentTarget.offsetTop || 0;
            const headerDataWidth = this.data.headerData.width;
            const headerDataHeight = this.data.headerData.height;
            const selectedTabWidth = this.data.tabItemData[index] && this.data.tabItemData[index].width;
            const selectedTabHeight = this.data.tabItemData[index] && this.data.tabItemData[index].height;
            let selectedTitleWidth = this.data.tabTitleData[index]?.width;
            if (this.data.miniBar) {
                selectedTitleWidth = this.data.tabTitleData[index]?.width / 2;
            } else {
                selectedTitleWidth -= 4;
            }
            const lineOffset = (this.data.tabItemData[index]?.width - selectedTitleWidth) / 2;
            const activeLeft = this.data.tabItemData[index]?.left + lineOffset - this.data.headerData.left;
            this.setData(
                {
                    selectedIndex: index,
                    tabScrollLeft: offsetLeft - (headerDataWidth - selectedTabWidth) / 2,
                    tabScrollTop: offsetTop - (headerDataHeight - selectedTabHeight) / 2,
                    selectedTitleWidth,
                    activeLeft
                },
                () => {
                    this.showMask();
                    this.triggerEvent('change', { index });
                }
            );
        },
        /**
         * 滑动swiper
         */
        handleSwiper(e) {
            const { current, source } = e.detail;
            const offsetLeft = this.data.tabItemData[current]?.left;
            if (source === 'touch') {
                this.handleTab({
                    currentTarget: {
                        dataset: { index: current },
                        offsetLeft
                    }
                });
            }
        },
        /**
         * showmask处理
         */
        showMask() {
            if (this.data.position === 'top') {
                const headerDataWidth = this.data.headerData.width;
                const selectedIndex = this.data.selectedIndex;
                const tabLen = this.data.items.length;
                let tabWidth = 0;
                this.data.tabItemData.forEach((item) => {
                    tabWidth += item.width;
                });
                if (tabWidth.toFixed() > headerDataWidth.toFixed() && selectedIndex !== tabLen - 1) {
                    this.setData({
                        blurEffect: true
                    });
                } else {
                    this.setData({
                        blurEffect: false
                    });
                }
            }
        },
        /**
         * 设置tab选项
         * @param {number} index
         */
        setTabIndex(index) {
            if (this.data.status) {
                const offsetLeft = this.data.tabItemData[index]?.left;
                this.handleTab({
                    currentTarget: {
                        dataset: { index },
                        offsetLeft
                    }
                });
            } else {
                this.setData({
                    selectedIndex: index
                });
            }
        },
        /**
         * 获取tab位置
         */
        getTabIndex() {
            return this.data.selectedIndex;
        }
    }
});
