/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
let MENU_ITEM = [];
let MENU_INDEX = 0; // 选中的索引
Component({
    /**
     * 组件的属性列表
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    properties: {
        // 场景：page（页面）|| tab（标签页）
        scene: {
            type: String,
            value: 'page'
        },
        // 下拉菜单类型： radio || checkbox || custom ||relation
        type: {
            type: String,
            value: 'radio'
        },
        // 菜单标题
        title: {
            type: Array,
            value: []
        },
        // 标题位置: left || center || right
        position: {
            type: String,
            value: 'left'
        },
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 当前选中的值
        current: {
            type: Array,
            optionalTypes: [Number],
            value: []
        },
        // 选中后是否改变标题
        changeTitle: {
            type: Boolean,
            value: true
        },
        // 点击顶部透明层是否关闭
        topClosable: {
            type: Boolean,
            value: true
        },
        // 距离底部的极限距离，超出反方向显示
        bottomDistance: {
            type: Number,
            value: 100
        },
        // 是否禁用下拉菜单
        disabled: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        activeIndex: -1, // 当前选中的索引
        formatValue: [],
        formatcurrent: []
    },
    observers: {
        items(value) {
            const formatValue = this.formatValue(value);
            this.setData({ formatValue }, () => {
                this.getAllItems();
            });
        },
        current(value) {
            const formatcurrent = this.formatCurrent(value);
            const { formatValue, changeTitle, type, title } = this.data;
            if (changeTitle && (type === 'radio' || type === 'relation')) {
                const compTitle = formatcurrent.map((item, index) => {
                    return formatValue[index][item]?.label || title[index];
                });
                this.setData({ title: compTitle });
            }
            this.setData({ formatcurrent });
        },
        type(value) {
            if (value === 'custom') {
                // 自定义情况下 优化掉items,利用title去循环
                this.setData({
                    formatValue: this.data.title
                });
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 显示下拉菜单
         * @param {*} e
         */
        showPopup(e) {
            const { disabled } = this.data;
            if (disabled) {
                return;
            }
            const { index } = e.currentTarget.dataset;
            // 点击其他下拉菜单的标题关闭当前弹出
            MENU_ITEM.forEach((menuItem) => {
                if (menuItem && menuItem !== this) {
                    menuItem.data.nodes[MENU_INDEX]?.closePopup(0);
                }
            });
            MENU_INDEX = index;
            this.getPostation(index);
        },
        /**
         * 控制弹出层的显影
         * @param {*} index 将要展开的索引
         * @param {*} rect 标题位置信息
         */
        targetPopup(index = 0, rect) {
            const { activeIndex } = this.data;
            const prevItem = this.data.nodes[activeIndex]; // 当前展开项
            const currItem = this.data.nodes[index]; // 将要展开项
            this.currItem = currItem;
            if (activeIndex !== -1 && activeIndex !== index) {
                this.setData({
                    activeIndex: -1
                });
                // 关闭当前打开的下拉菜单
                prevItem.closePopup(0);
            }
            if (activeIndex === index) {
                // 相同则关闭
                currItem.closePopup();
            } else {
                // 打开对应的下拉菜单
                this.setData({ activeIndex: index });
                currItem.setDropdown();
                currItem.setPosition(rect);
            }
        },
        /**
         * 获取弹出层位置信息
         */
        getPostation(index) {
            const query = this.createSelectorQuery();
            query
                .select('.mt-dropdown')
                .boundingClientRect((rect) => {
                    this.targetPopup(index, rect);
                })
                .exec();
        },
        /**
         * 重置当前选中的索引
         */
        resetActive() {
            this.setData({
                activeIndex: -1
            });
        },
        /**
         * 点击底部蒙层关闭
         */
        handleClose() {
            MENU_INDEX = 0;
            this.triggerEvent('close');
        },
        /*
         *选中事件
         */
        handleClick(e) {
            const { item, targetClick } = e.detail;
            if (targetClick) {
                MENU_INDEX = 0;
            }
            this.selectList[MENU_INDEX] = item;
            if (this.data.type === 'relation') {
                this.triggerEvent('click', { item: this.selectList[MENU_INDEX], MENU_INDEX });
                return;
            }
            this.triggerEvent('click', { item: this.selectList, MENU_INDEX });
        },
        /*
         *阻止滚动
         */
        stopEvent() {},
        /**
         * 获取子节点
         */
        getAllItems() {
            const nodes = this.selectAllComponents('.mt-dropdown__menu');
            const { formatValue, formatcurrent, type } = this.data;
            this.selectList = formatValue.map((item, index) => {
                if (formatcurrent.length === 0) {
                    return null;
                } else if (formatcurrent[index].length === 1) {
                    if (type === 'checkbox') {
                        return [item[formatcurrent[index]]];
                    } else {
                        return item[formatcurrent[index]];
                    }
                } else {
                    const arr = formatcurrent[index].map((items) => {
                        return item[items];
                    });
                    return arr;
                }
            });
            this.setData({
                nodes
            });
        },
        /*
         *设置group标题
         */
        setTitle(e) {
            const { activeIndex } = this.data;
            const value = e.detail;
            if (activeIndex === -1) {
                return;
            }
            this.setData({
                [`title[${activeIndex}]`]: value
            });
        },
        /**
         * 兼容单列情况下的[]格式
         * @param {*} val
         */
        formatValue(value) {
            let formatValue = [];
            if (value.length === 0 || !Array.isArray(value[0])) {
                formatValue.push(value);
            } else {
                formatValue = value;
            }
            return formatValue;
        },
        formatCurrent(value) {
            const { type, title } = this.data;
            let formatValue = [];
            if ((type === 'radio' || type === 'relation') && title.length > 1) {
                // 单选多列
                formatValue = value.map((item) => {
                    return [item];
                });
            } else if (type === 'radio' || type === 'relation') {
                // 单选单列
                formatValue.push([value]);
            } else {
                formatValue = value;
            }

            return formatValue;
        }
    },
    lifetimes: {
        created() {
            MENU_ITEM.push(this);
        },
        detached() {
            MENU_ITEM = MENU_ITEM.filter((item) => item !== this);
        },
        ready() {
            this.selectList = [];
            this.getAllItems();
        }
    }
});
