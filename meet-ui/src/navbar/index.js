/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
// 默认属性
const defaultProps = {
    statusBarColor: '#000000',
    statusBarBgColor: '#ffffff',
    textColor: '#333333',
    background: '#ffffff'
};
// 系统信息
let systemInfo = null;
// 获取系统信息
function getSystemInfo() {
    if (systemInfo) {
        return systemInfo;
    }
    const system = wx.getSystemInfoSync();
    const menuBtn = wx.getMenuButtonBoundingClientRect();
    if (menuBtn && menuBtn.height) {
        const navBar = {};
        navBar.innerHeight = menuBtn.height + (menuBtn.top - system.statusBarHeight) * 2;
        navBar.rowGap = (system.windowWidth - menuBtn.right) * 2;
        navBar.height = system.statusBarHeight + navBar.innerHeight + 4;
        return {
            menuBtn,
            ...system,
            navBar
        };
    } else {
        // 获取失败，重试
        getSystemInfo();
    }
}
Component({
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：normal 常规 || back 返回 || home 主页 || auto（自动）
        type: {
            type: String,
            value: 'normal'
        },
        // 模式：fixed 固定顶部不占位 || static常规流
        mode: {
            type: String,
            value: 'static'
        },
        // 状态栏文本颜色
        statusBarColor: {
            type: String,
            value: '#000000'
        },
        // 导航标题
        title: {
            type: String,
            value: ''
        },
        // 标题显示位置：auto 根据系统自动 || center 居中
        titlePosition: {
            type: String,
            value: 'auto'
        },
        // 文本颜色
        textColor: {
            type: String,
            value: '#333333'
        },
        // 背景
        background: {
            type: String,
            value: '#fff'
        },
        // 变化属性
        transform: {
            type: Object,
            value: {}
        },
        // 主页地址
        home: {
            type: String,
            value: ''
        },
        // 自定义事件
        customEvent: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        opacity: 0,
        newProps: null
    },
    observers: {
        type(val) {
            if (val === 'auto') {
                const pages = getCurrentPages();
                if (pages.length) {
                    this.setData({
                        type: 'back'
                    });
                } else {
                    this.setData({
                        type: 'home'
                    });
                }
            }
        },
        transform(val) {
            if (Object.keys(val).length > 0) {
                const newProps = Object.assign({}, defaultProps, val);
                this.setData({
                    newProps
                });
            }
        }
    },
    lifetimes: {
        attached() {
            this.init();
            // 页面自动挂载navBar组件实例
            const pages = getCurrentPages();
            const pageContext = pages[pages.length - 1];
            pageContext.meetNavBar = this;
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            systemInfo = getSystemInfo();
            this.setData({
                platform: systemInfo.platform,
                statusBarHeight: systemInfo.statusBarHeight,
                navBarInnerHeight: systemInfo.navBar.innerHeight,
                navBarColumnGap: systemInfo.navBar.rowGap,
                iosTitleWidth: systemInfo.windowWidth - (systemInfo.navBar.rowGap / 2 + systemInfo.menuBtn.width) * 2,
                androidTitleWidth: systemInfo.windowWidth - systemInfo.menuBtn.width * 2
            });
        },
        /**
         * 返回
         */
        handleBack() {
            if (this.data.customEvent) {
                this.triggerEvent('back');
            } else {
                wx.navigateBack({
                    delta: 1
                });
            }
        },
        // 主页
        handleHome() {
            if (this.data.customEvent) {
                this.triggerEvent('home');
            } else {
                if (this.data.home) {
                    wx.reLaunch({
                        url: this.data.home
                    });
                } else {
                    console.error('缺少home配置！');
                }
            }
        },
        lastSetData: Date.now(),
        /**
         * 导航栏变化
         * @param {*} scrollTop 滚动高度
         * @param {*} distY 渐变距离
         */
        setOpacity: function (scrollTop, distY = 110) {
            const mode = this.data.mode;
            if (mode !== 'fixed') {
                return;
            }

            let opacity = 0;
            const { navBarInnerHeight } = this.data;

            if (scrollTop - distY > navBarInnerHeight && this.data.opacity === 1) {
                return;
            }

            if (scrollTop - distY <= 0 && this.data.opacity === 0) {
                return;
            }

            // if (Date.now() - this.lastSetData < 50) {
            //     return;
            // }

            this.lastSetData = Date.now();

            if (distY > 0) {
                if (scrollTop - distY <= 0) {
                    opacity = 0;
                } else if (scrollTop - distY > navBarInnerHeight) {
                    opacity = 1;
                } else {
                    opacity = (scrollTop - distY) / navBarInnerHeight;
                }
            }

            this.setData({
                opacity: opacity
            });
        }
    }
});
