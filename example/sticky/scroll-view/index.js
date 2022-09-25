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
        offsetTop: 0,
        scrollTop: 0
    },
    onReady() {
        // 获取scroll-view容器距离顶部高度
        wx.createSelectorQuery()
            .select('#scrollView')
            .boundingClientRect((rect) => {
                this.setData({
                    offsetTop: rect.top
                });
            })
            .exec();
    },
    // scroll-view滚动事件
    onScrollViewScroll(e) {
        this.setData({
            scrollTop: e.detail.scrollTop
        });
    }
});
