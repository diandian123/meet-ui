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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    /**
     * 确定操作
     * @param {object} e
     */
    handleConfirm(event) {
        console.log(event.detail);
    },
    showDatePicker() {
        const datePicker = this.selectComponent('#datePicker');
        datePicker.setVisible();
    }
});
