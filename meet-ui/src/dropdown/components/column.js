/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 选项数据
        items: {
            type: Array,
            value: []
        },
        // 默认选中的值
        current: {
            type: Array,
            optionalTypes: [String, Number],
            value: []
        },
        // 单选多选 'radio'||'checkbox'
        type: {
            type: String,
            value: 'radio'
        },
        // 显示状态
        visible: {
            type: Boolean,
            value: false
        },
        // 弹出层距离顶部的距离
        top: {
            type: Number,
            value: 0
        },
        // 标题是否改变
        changeTitle: {
            type: Boolean,
            value: true
        },
        // 向上弹出距离底部的极限距离
        bottomDistance: {
            type: Number,
            value: 200
        },
        // 场景：page（页面）|| tab（标签）
        scene: {
            type: String,
            value: 'page'
        },
        topClosable: {
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        columns: [], // 组件内部数据(用于渲染)
        position: 'top', // 弹出方向
        popupTarget: false,
        maskVisible: true,
        selectCurrent: []
    },
    observers: {
        items(value) {
            this.setData({ columns: value });
        },
        // 通过选中项处理需要渲染的数据
        current(val) {
            const { type, items } = this.data;
            if (type === 'checkbox') {
                this.checked = items.filter((item, index) => {
                    if (val.indexOf(index) >= 0) {
                        return item;
                    }
                });
            }
            this.setData({ selectCurrent: val });
        },
        selectCurrent(value) {
            const { items } = this.data;
            const columns = items.map((item, index) => {
                if (value.indexOf(index) >= 0) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
                return item;
            });
            this.setData({
                columns
            });
        },
        // 计算内容区域的展示位置
        top(value) {
            if (this.data.position === 'top') {
                this.setData({
                    menuStyle: `top:${value}px`
                });
            } else {
                this.setData({
                    menuStyle: `bottom:${value}px;top:0`
                });
            }
        }
    },
    lifetimes: {
        ready() {
            this.getWindowHeight();
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * type为radio情况下的数据处理
         * @param {*} e
         */
        handleRadio(e) {
            const { items, changeTitle, targetClick = false } = this.data;
            const { index } = e.target.dataset;
            const columns = [];
            columns.push(index);
            changeTitle && this.triggerEvent('setTitle', items[index].label);
            this.setData({
                selectCurrent: columns
            });
            this.closePopup();
            this.triggerEvent('click', {
                item: { value: items[index].value, label: items[index].label },
                columns,
                targetClick
            });
        },
        /**
         * type为checkbox情况下的数据处理
         * @param {*} e
         */
        handleCheckbox(e) {
            const { items } = this.data;
            const { value, checked } = e.detail;
            this.checked = checked.map((item) => {
                return item;
            });
            const selectCurrent = [];
            for (let i = 0; i <= items.length - 1; i++) {
                if (value.indexOf(items[i].value) >= 0) {
                    selectCurrent.push(i);
                }
            }
            this.setData({
                selectCurrent
            });
        },
        /**
         * 取消事件
         */
        reset() {
            this.checked = [];
            this.setData({
                selectCurrent: []
            });
            this.closePopup();
        },
        /**
         * 确认事件
         */
        confrim() {
            const { selectCurrent, targetClick = false } = this.data;
            this.closePopup();
            this.checked = this.checked.map((item) => {
                return { value: item.value, label: item.label };
            });
            this.triggerEvent('click', { item: this.checked, columns: selectCurrent, targetClick });
        },
        /**
         * 关闭弹窗
         */
        close() {
            this.triggerEvent('close');
            this.closePopup();
        },
        /**
         * 关闭下拉菜单
         */
        closePopup(delay = 300) {
            this.triggerEvent('resetActive');
            this.setData({
                popupTarget: false
            });
            // 关闭的动画
            setTimeout(() => {
                this.setData({
                    visible: false
                });
            }, delay);
        },
        /*
         *打开下拉菜单
         */
        setDropdown(target) {
            if (target) {
                // targetClick外部点击的标志
                const { id } = target;
                id.length > 0 && this.getTargetInfo(id);
                this.setData({
                    targetClick: true
                });
            }
            this.setData({
                popupTarget: true,
                visible: true
            });
        },
        /*
         *获取页面宽度
         */
        getWindowHeight() {
            const windowHeight = wx.getSystemInfoSync().windowHeight;
            if (this.data.scene === 'tab') {
                this.createSelectorQuery()
                    .select('#mask')
                    .boundingClientRect((rect) => {
                        this.maskTop = rect.top;
                        this.setData({
                            maskVisible: false
                        });
                    })
                    .exec();
            } else {
                this.setData({
                    maskVisible: false
                });
            }

            this.windowHeight = windowHeight;
        },
        /*
         *阻止滚动
         */
        stopEvent() {},
        /**
         * 获取targetId的元素信息
         */
        getTargetInfo(targetId) {
            if (targetId.length > 0) {
                const id = `#${targetId}`;
                const query = wx.createSelectorQuery();
                query
                    .select(id)
                    .boundingClientRect((rect) => {
                        this.setPosition(rect);
                    })
                    .exec();
            }
        },
        /**
         * 设置弹出位置
         */
        setPosition(rect) {
            const { bottomDistance } = this.data;
            const { bottom } = rect;
            let top = rect.top;
            let position = '';
            if (this.windowHeight - bottom < bottomDistance) {
                top = this.windowHeight - top;
                position = 'bottom';
            } else {
                top = bottom - (this.maskTop || 0);
                position = 'top';
            }
            this.setData({
                top,
                position
            });
        },
        /**
         * 点击蒙层关闭
         */
        maskClose() {
            this.data.topClosable && this.close();
        }
    }
});
