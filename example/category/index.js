/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
import { Categorys } from './config.js';
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        category: {
            title: '',
            items: []
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        const index = Number(opts.index);
        this.setData({
            category: Categorys[index]
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    }
});
