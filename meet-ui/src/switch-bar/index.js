/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 选中项
        current: {
            type: Number,
            value: 0
        },
        // 选项宽度
        itemWidth: {
            type: Number,
            value: 106
        }
    },
    observers: {
        current(val) {
            if (val > this.data.items.length) {
                this.setData({
                    current: 0
                });
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {},
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 点击每一项
         */
        handleChange(e) {
            const { index } = e.currentTarget.dataset;
            this.setData(
                {
                    current: index
                },
                () => {
                    this.triggerEvent('change', { index, item: this.data.items[index] });
                }
            );
        }
    }
});
