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
        tab_1: [{ title: '标签一' }, { title: '标签二' }, { title: '标签三' }],
        tab_2: [
            { id: 'a', title: '标签一' },
            { id: 'b', title: '标签二' },
            { id: 'c', title: '标签三' }
        ],
        tab_3: [
            { id: 'a', title: '标签一' },
            { id: 'b', title: '标签二' },
            { id: 'c', title: '标签三' },
            { id: 'd', title: '标签四' },
            { id: 'e', title: '标签五' },
            { id: 'f', title: '标签六' },
            { id: 'g', title: '标签七' }
        ]
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    goLeftTab() {
        wx.navigateTo({
            url: '/example/tab/left'
        });
    },
    goStickyTab() {
        wx.navigateTo({
            url: '/example/sticky/tabs/index'
        });
    },
    goSwipeList() {
        wx.navigateTo({
            url: '/example/example/tabs/index'
        });
    },
    // 设置tab项
    setTabIndex() {
        const tabCom = this.selectComponent('#asyncTab');
        tabCom.setTabIndex(3);
    }
});
