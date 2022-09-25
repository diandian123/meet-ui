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
    toPageNormal() {
        wx.navigateTo({
            url: '/example/navbar/normal'
        });
    },
    toPageBack() {
        wx.navigateTo({
            url: '/example/navbar/back'
        });
    },
    toPageTitle() {
        wx.navigateTo({
            url: '/example/navbar/title'
        });
    },
    toPageCustom() {
        wx.navigateTo({
            url: '/example/navbar/custom'
        });
    },
    toPageAuto() {
        wx.navigateTo({
            url: '/example/navbar/auto'
        });
    }
});
