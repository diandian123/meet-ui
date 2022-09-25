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
    properties: {
        // 类型: preset（预设） || custom（自定义）
        type: {
            type: String,
            value: 'preset'
        },
        // 高度：-1表示不限
        height: {
            type: Number,
            value: -1
        },
        // 图标
        icon: {
            type: String,
            value: './images/default.png'
        },
        // 文案
        text: {
            type: String,
            value: '暂无数据～'
        },
        // 背景色
        bgColor: {
            type: String,
            value: '#ffffff'
        },
        // 是否显示按钮
        hasBtn: {
            type: Boolean,
            value: true
        },
        // 按钮文本
        btnText: {
            type: String,
            value: '返回'
        },
        // 按钮事件名称
        btnEvent: {
            type: String,
            value: ''
        },
        // 主页地址
        home: {
            type: String,
            value: ''
        }
    },
    observers: {
        height(value) {
            if (value > 0 && this.data.btnText === '返回') {
                this.setData({
                    hasBtn: false
                });
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handleButton() {
            // 获取页面实例
            const pages = getCurrentPages();
            const ctx = pages[pages.length - 1];
            if (this.data.btnEvent) {
                // 事件处理
                ctx[this.data.btnEvent]();
            } else {
                if (pages.length > 1) {
                    // 返回
                    wx.navigateBack({
                        delta: 0
                    });
                } else {
                    if (this.data.home) {
                        wx.reLaunch({
                            url: this.data.home
                        });
                    }
                }
            }
        }
    }
});
