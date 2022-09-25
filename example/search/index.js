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
        compTitle: '' // 组件标题
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title),
            autoSearch: this.autoSearch.bind(this)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    /**
     * 自动搜索
     * @param {string} value 搜索内容
     */
    autoSearch: function (value) {
        console.log(value);
    },
    /**
     * 点击搜索操作
     * @param {object} e
     */
    handleSearch: function ({ detail }) {
        console.log(detail);
    }
});
