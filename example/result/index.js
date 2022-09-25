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
    toPageSuccess() {
        wx.navigateTo({
            url: '/example/result/success'
        });
    },
    toPageError() {
        wx.navigateTo({
            url: '/example/result/error'
        });
    },
    toPageNullIcon() {
        wx.navigateTo({
            url: '/example/result/nullIcon'
        });
    },
    toPageCustom() {
        wx.navigateTo({
            url: '/example/result/custom'
        });
    },
    toPageCustomBtn() {
        wx.navigateTo({
            url: '/example/result/custom-btn'
        });
    }
});
