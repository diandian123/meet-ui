/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        compIcon: '', // 组件图标
        compTitle: '' // 组件标题
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    toPage500() {
        wx.navigateTo({
            url: '/example/error/500'
        });
    },
    toPage404() {
        wx.navigateTo({
            url: '/example/error/404'
        });
    },
    toPage403() {
        wx.navigateTo({
            url: '/example/error/403'
        });
    },
    toPageOffline() {
        wx.navigateTo({
            url: '/example/error/offline'
        });
    },
    toPageLocal() {
        wx.navigateTo({
            url: '/example/error/local'
        });
    }
});
