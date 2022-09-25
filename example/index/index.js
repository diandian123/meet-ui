/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
import { Categorys } from '../category/config.js';
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        pageStatus: 'loading', // loading(加载中) || normal(正常状态）|| empty(空状态）|| error(异常状态)
        // 空状态
        emptyStatus: {
            icon: '/example/images/empty.png',
            msg: ''
        },
        // 异常状态
        errorStatus: {
            icon: '/example/images/error.png',
            msg: '',
            traceId: ''
        },
        // 自定义导航条
        navBarStatus: {
            title: '',
            change: {
                title: 'MEET UI',
                background: '#fff',
                titleColor: '#333'
            }
        },
        Categorys
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.setData({
            pageStatus: 'normal'
        });
    },
    /**
     * 监听页面滚动
     */
    onPageScroll(e) {
        this.meetNavBar && this.meetNavBar.setOpacity(e.scrollTop);
    },
    /**
     * 挑战分类列表页
     */
    goCategory(e) {
        const path = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: path
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    }
});
