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
        // 类型: preset || slot（插槽） || scope(作用域插槽)
        type: {
            type: String,
            value: 'preset'
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#fff'
        },
        // 圆角
        radius: {
            type: Number,
            value: 0
        },
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 列数
        column: {
            type: Number,
            value: 3
        },
        // 图文排列: row（横向） || column（竖向）
        direction: {
            type: String,
            value: 'column'
        },
        // 图标宽度
        iconWidth: {
            type: Number,
            value: 100
        },
        // 图标高度
        iconHeight: {
            type: Number,
            value: 100
        },
        // 图标圆角
        iconRadius: {
            type: String,
            value: '0'
        },
        // 标题字号
        titleSize: {
            type: Number,
            value: 30
        },
        // 边框类型: all（全边框） || inner（内边框） || innerRow（仅内部水平边框） || none（无边框）
        bdType: {
            type: String,
            value: 'none'
        }
    },

    /**
     * 数据监听
     */
    observers: {
        items(val) {
            this.setData({
                itemsLen: val.length
            });
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
        // 点击跳转
        handleTap(e) {
            const index = e.currentTarget.dataset.index;
            const url = this.data.items[index].url;
            if (url) {
                wx.navigateTo({
                    url: url
                });
            } else {
                this.triggerEvent('click', {
                    index,
                    item: this.data.items[index]
                });
            }
        }
    }
});
