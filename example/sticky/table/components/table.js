/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
Component({
    /**
     * 组件样式隔离
     */
    options: {
        styleIsolation: 'isolated',
        multipleSlots: true // 支持多个slot
    },

    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Array,
            value: []
        },
        headers: {
            type: Array,
            value: []
        },
        // 顶部是否吸顶
        sticky: {
            type: Boolean,
            value: false
        },
        scrollTop: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        scrolWidth: '100%',
        container: null
    },

    /**
     * 组件的监听属性
     */
    observers: {
        // 在 numberA 或者 numberB 被设置时，执行这个函数
        headers: function headers(_headers) {
            const reducer = function reducer(accumulator, currentValue) {
                return accumulator + Number(currentValue.width);
            };
            const scrolWidth = _headers.reduce(reducer, 0);

            this.setData({
                scrolWidth: scrolWidth
            });
        }
    },
    lifetimes: {
        /**
         * 在组件在视图层布局完成后执行
         */
        ready: function () {
            const query = this.createSelectorQuery();
            if (this.data.sticky) {
                this.setData({
                    container: () => query.select('#container')
                });
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onRowClick: function onRowClick(e) {
            this.triggerEvent('rowClick', e, e.currentTarget.dataset.it);
        }
    }
});
