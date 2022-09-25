/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
// demo/stateswitch/index.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        switchList1: [
            { label: '最新', value: 0 },
            { label: '热门', value: 1 }
        ],
        switchList2: [
            { label: '最新', value: 0 },
            { label: '热门', value: 1 },
            { label: '关注', value: 2 }
        ],
        switchList3: [
            { label: '最新', value: 0 },
            { label: '热门', value: 1 },
            { label: '关注', value: 2 }
        ],
        switchList4: [
            { label: '最新', value: 0 },
            { label: '热门', value: 1 },
            { label: '关注', value: 2, hasNew: true }
        ]
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
    handleChange1({ detail }) {
        console.log(detail);
    },
    handleChange2({ detail }) {
        console.log(detail);
    },
    handleChange3({ detail }) {
        console.log(detail);
    },
    handleChange4({ detail }) {
        const { index } = detail;
        this.setData({
            [`switchList4[${index}].hasNew`]: false
        });
        console.log(detail);
    }
});
