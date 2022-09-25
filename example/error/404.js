/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
Page({
    /**
     * 页面的初始数据
     */
    data: {},
    goHome() {
        wx.reLaunch({
            url: '/example/index/index'
        });
    }
});
