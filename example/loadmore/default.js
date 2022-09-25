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
        hasMore: true,
        items: []
    },
    onLoad() {
        this.page = 1;
        this.setData({
            items: this.mockData()
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    mockData() {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                avatar: '/example/images/avatar.png',
                title: `标题`,
                desc: `描述信息`
            });
        }
        return items;
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if (this.data.hasMore) {
            setTimeout(() => {
                const items = [...this.data.items, ...this.mockData()];
                this.page++;
                // 模拟加载3页
                const hasMore = this.page === 3 ? false : true;
                this.setData({
                    items,
                    hasMore
                });
            }, 600);
        }
    }
});
