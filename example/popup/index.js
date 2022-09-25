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
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        popup1Status: false,
        popup2Status: false,
        popup3Status: false,
        popup4Status: false,
        popup5Status: false,
        popup6Status: false,
        caseDate: {
            name: '图标列表',
            list: [
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    url: '/example/result/success'
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    url: '/example/result/success'
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    url: '/example/result/success'
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    url: '/example/result/success'
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    url: '/example/result/success'
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    url: '/example/result/success'
                }
            ]
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    _toggle(status) {
        this.setData({
            [status]: !this.data[status]
        });
    },
    togglePopup1() {
        this._toggle('popup1Status');
    },
    togglePopup2() {
        this._toggle('popup2Status');
    },
    togglePopup3() {
        this._toggle('popup3Status');
    },
    togglePopup4() {
        this._toggle('popup4Status');
    },
    togglePopup5() {
        this._toggle('popup5Status');
    },
    togglePopup6() {
        this._toggle('popup6Status');
    },
    toComment() {
        wx.navigateTo({
            url: '/example/example/comment/index'
        });
    },
    haldLoadMore() {
        console.log('触底事件');
    }
});
