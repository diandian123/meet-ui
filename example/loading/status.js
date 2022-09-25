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
    /**
     * 横向加载提示
     */
    loadingToast() {
        wx.meetLoading();
        setTimeout(() => {
            wx.meetLoading.hide();
        }, 3000);
    },
    /**
     * 纵向加载提示
     */
    columnLoadingToast() {
        wx.meetLoading({
            direction: 'column'
        });
        setTimeout(() => {
            wx.meetLoading.hide();
        }, 3000);
    },
    /**
     * 定义加载图标
     */
    columnLoadingIconToast() {
        wx.meetLoading({
            direction: 'column',
            icon: '/example/images/meet.png',
            message: '处理中...'
        });
        setTimeout(() => {
            wx.meetLoading.hide();
        }, 3000);
    },
    toFullPage() {
        wx.navigateTo({
            url: '/example/loading/global'
        });
    },
    toLaunchPage() {
        wx.navigateTo({
            url: '/example/loading/launch'
        });
    }
});
