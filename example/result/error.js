/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
// demo/result/error.js
Page({
    /**
     * 页面的初始数据
     */
    data: {},
    redirectTo() {
        wx.redirectTo({
            url: '/example/result/error'
        });
    },
    goBack() {
        wx.navigateBack({
            delta: 1
        });
    }
});
