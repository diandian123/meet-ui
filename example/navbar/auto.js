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
        pageStatus: 'loading', // loading(加载中) || normal(正常状态）|| empty(空状态）|| error(异常状态)
        // 页面空状态
        emptyStatus: {
            icon: '',
            text: ''
        },
        // 页面异常状态
        errorStatus: {
            icon: '',
            text: '',
            traceId: ''
        },
        refreshStatus: false, // 刷新状态
        swiperItems: [
            {
                image: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                url: '/example/list/index',
                title: 'MEET UI，重新定义用户界面、用户交互、用户体验'
            },
            {
                image: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                url: '/example/list/index',
                title: 'MEET UI，重新定义用户界面、用户交互、用户体验'
            },
            {
                image: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                url: '/example/list/index',
                title: 'MEET UI，重新定义用户界面、用户交互、用户体验'
            }
        ],
        gridItems: [
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            }
        ]
    },
    onLoad() {
        setTimeout(() => {
            this.setData({
                pageStatus: 'normal'
            });
        }, 500);
    },
    /**
     * 下拉刷新
     */
    handleRefresh() {
        setTimeout(() => {
            this.setData({
                refreshStatus: false
            });
            wx.meetToast({
                type: 'success',
                message: '刷新成功'
            });
        }, 500);
    }
});
