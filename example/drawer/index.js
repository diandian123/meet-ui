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
        drawer1Status: false,
        drawer2Status: false,
        drawer3Status: false,
        drawer4Status: false,
        case_1: {
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
    toggleDrawer1() {
        this._toggle('drawer1Status');
    },
    toggleDrawer2() {
        this._toggle('drawer2Status');
    },
    toggleDrawer3() {
        this._toggle('drawer3Status');
    },
    toggleDrawer4() {
        this._toggle('drawer4Status');
    },
    haldLoadMore() {
        console.log('触底事件');
    }
});
