/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    properties: {
        // 场景：page（页面）|| tab（标签）
        scene: {
            type: String,
            value: 'page'
        },
        // 类型: 500 || 404 || 403 || offline || custom
        type: {
            type: String,
            value: '500'
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
            value: '服务出问题了，请稍后再试～'
        },
        // 跟踪 ID
        traceId: {
            type: String,
            value: ''
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
            value: '再试一次'
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

    /**
     * 数据监听
     */
    observers: {
        type(value) {
            switch (value) {
                case '404':
                    this.setData({
                        text: '访问地址不存在～',
                        btnText: '进入首页'
                    });
                    break;
                case '403':
                    this.setData({
                        text: '没有访问权限哦～',
                        btnText: '返回'
                    });
                    break;
                case 'offline':
                    this.setData({
                        icon: './images/offline.png',
                        text: '网络连接失败～',
                        btnText: '刷新'
                    });
                    break;
            }
        }
    },
    ready() {
        wx.getNetworkType({
            success: (res) => {
                const networkType = res.networkType;
                // 自动检查网络
                if (this.data.type !== 'offline' && networkType === 'none') {
                    this.setData({
                        icon: './images/offline.png',
                        text: '网络连接失败～',
                        btnText: '刷新',
                        btnEvent: ''
                    });
                }
            }
        });
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
                ctx[this.data.btnEvent]();
            } else {
                const route = ctx.route;
                const options = ctx.options;

                const paramsArr = [];
                for (const i in options) {
                    paramsArr.push(`${i}=${options[i]}`);
                }

                const params = paramsArr.join('&');

                if (this.data.scene === 'tab') {
                    // 如果是Tab页面需要重启应用
                    wx.reLaunch({
                        url: `/${route}?${params}`
                    });
                } else {
                    if (this.data.home) {
                        // 进入首页
                        wx.reLaunch({
                            url: this.data.home
                        });
                    } else {
                        // 刷新当前页
                        wx.redirectTo({
                            url: `/${route}?${params}`
                        });
                    }
                }
            }
        }
    }
});
