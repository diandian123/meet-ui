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
        tabs: [
            { id: 'a', title: '标签一' },
            { id: 'b', title: '标签二' },
            { id: 'c', title: '标签三' }
        ],
        offsetTop: 0,
        scrollTop: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        wx.createSelectorQuery()
            .select('#searchBox')
            .boundingClientRect((rect) => {
                this.setData({
                    offsetTop: rect.height
                });
            })
            .exec();
    },
    // 滚动监听
    onPageScroll(e) {
        this.setData({ scrollTop: e.scrollTop });
    }
});
