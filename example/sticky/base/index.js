/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
Page({
    /**
     * 页面的初始数据
     */
    data: {
        scrollTop: 0
    },

    // 滚动监听
    onPageScroll(e) {
        this.setData({ scrollTop: e.scrollTop });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {}
});
