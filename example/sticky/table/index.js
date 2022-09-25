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
        tableHeader: [
            {
                prop: 'datetime',
                width: 250,
                label: '日期'
            },
            {
                prop: 'miniprogram',
                width: 250,
                label: '小程序'
            },
            {
                prop: 'statusText',
                width: 250,
                label: '状态'
            }
        ],
        tableRows: [],
        container: null,
        scrollTop: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        const tableRows = [];
        for (let i = 0; i < 100; i++) {
            tableRows.push({
                id: i + 1,
                datetime: '2022-09-01',
                miniprogram: 'MEET UI',
                statusText: 'ok'
            });
        }
        this.setData({
            tableRows
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        const query = this.createSelectorQuery();
        if (this.data.sticky) {
            this.setData({
                container: () => query.select('#container')
            });
        }
    },
    // 滚动监听
    onPageScroll(e) {
        this.setData({ scrollTop: e.scrollTop });
    }
});
