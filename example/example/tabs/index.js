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
            { id: 'a', title: '标签一', loaded: false },
            { id: 'b', title: '标签二', loaded: false },
            { id: 'c', title: '标签三', loaded: false }
        ],
        tabHeight: 0
    },
    onLoad() {
        this.scrollTopCache = []; // 记录标签页滚动位置
        const windowHeight = wx.getSystemInfoSync().windowHeight; // 实时获取兼容自定义导航条情况
        this.setData({
            tabHeight: windowHeight
        });
    },
    // 下拉刷新
    handleRefresh() {
        // TODO
        setTimeout(() => {
            this.setData({
                refreshFlag: false
            });
        }, 1000);
    },
    // 加载更多
    handleLoadmore() {
        console.log('加载更多');
    },
    handleScroll(e) {
        const index = Number(e.currentTarget.dataset.index);
        const { scrollTop } = e.detail;
        this.scrollTopCache[index] = scrollTop;
        this.meetBackTop.setBackTop(scrollTop, `scrollTop[${index}]`);
    },
    handleChange(e) {
        const index = e.detail.index || 0;
        if (!this.data.tabs[index].loaded) {
            // 模拟请求
            setTimeout(() => {
                this.setData({
                    [`tabs[${index}].loaded`]: true
                });
            }, 300);
        }
        this.meetBackTop.setBackTop(this.scrollTopCache[index], `scrollTop[${index}]`);
    }
});
