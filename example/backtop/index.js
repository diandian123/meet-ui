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
    goPageBackTop() {
        wx.navigateTo({
            url: '/example/backtop/page'
        });
    },
    goPageBackTop2() {
        wx.navigateTo({
            url: '/example/backtop/page2'
        });
    },
    goScrollViewbacktop() {
        wx.navigateTo({
            url: '/example/example/tabs/index'
        });
    }
});