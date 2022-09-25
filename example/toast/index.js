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
     * 普通提示
     */
    normalToast() {
        wx.meetToast({
            message: '提示信息'
        });
    },
    /**
     * 成功提示
     */
    successToast() {
        wx.meetToast({
            type: 'success',
            message: '操作成功'
        });
    },
    /**
     * 失败提示
     */
    failToast() {
        wx.meetToast({
            type: 'fail',
            message: '操作失败'
        });
    },
    /**
     * 警告提示
     */
    warningToast() {
        wx.meetToast({
            type: 'warning',
            message: '警告操作'
        });
    },
    /**
     * 加载提示
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
    /**
     * 超长文本提示
     */
    longTextToast() {
        wx.meetToast({
            message: 'MEET UI, MEET YOU！做对产品、业务真正有帮助的“实用”技术研发！',
            duration: 5000
        });
    },
    /**
     * 自定义图标提示
     */
    iconToast() {
        wx.meetToast({
            icon: '/example/images/about_b.png',
            message: '提示信息'
        });
    },
    /**
     * 自定义提示时长
     */
    timeToast() {
        wx.meetToast({
            message: '5秒后提示消失',
            duration: 5000
        });
    },
    /**
     * 手动关闭Toast
     */
    closeToast() {
        wx.meetToast({
            message: '5秒后手动关闭',
            duration: 0
        });
        setTimeout(() => {
            wx.meetToast.hide();
        }, 5000);
    },
    /**
     * 提示消失后回调方法
     */
    callbackToast() {
        wx.meetToast({
            message: '3秒后消失，执行回调...',
            onClose() {
                // 提示消失后执行回调
                wx.meetToast({
                    type: 'success',
                    message: '回调成功',
                    direction: 'column'
                });
            }
        });
    },
    /**
     * 成功提示
     */
    columnSuccessToast() {
        wx.meetToast({
            type: 'success',
            message: '操作成功',
            direction: 'column'
        });
    },
    /**
     * 失败提示
     */
    columnFailToast() {
        wx.meetToast({
            type: 'fail',
            message: '操作失败',
            direction: 'column'
        });
    },
    /**
     * 警告提示
     */
    columnWarningToast() {
        wx.meetToast({
            type: 'warning',
            message: '警告操作',
            direction: 'column'
        });
    }
});
