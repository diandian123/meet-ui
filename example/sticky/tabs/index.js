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
        scrollTop: 0
    },
    onPageScroll(e) {
        this.setData({ scrollTop: e.scrollTop });
    }
});
