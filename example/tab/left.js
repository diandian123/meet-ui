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
        tabHeight: -1,
        tabItems: [
            { id: 'a', title: '标签一' },
            { id: 'b', title: '标签二' },
            { id: 'c', title: '标签三' },
            { id: 'd', title: '标签四' },
            { id: 'e', title: '标签五' }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.scrollTopCache = []; // 记录标签页滚动位置
        const windowHeight = wx.getSystemInfoSync().windowHeight; // 实时获取兼容自定义导航条情况
        this.setData({
            tabHeight: windowHeight
        });
    }
});
