/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
const app = getApp();
Page({
    data: {
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        container: null,
        scrollTop: 0,
        offsetTop: 0
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
    onReady() {
        this.setData({
            container: () => wx.createSelectorQuery().select('#container')
        });
    },
    onScroll(event) {
        wx.createSelectorQuery()
            .select('#scroller')
            .boundingClientRect((res) => {
                console.log(res.top, event.detail.scrollTop);
                this.setData({
                    scrollTop: event.detail.scrollTop,
                    offsetTop: res.top
                });
            })
            .exec();
    },
    scroll({ detail } = {}) {
        console.log(detail);
    },
    // 标题栏吸顶
    titleSticky() {
        wx.navigateTo({
            url: '/example/sticky/base/index'
        });
    },
    // 指定吸顶位置
    offsetSticky() {
        wx.navigateTo({
            url: '/example/sticky/offset/index'
        });
    },
    // 容器内部吸顶
    innerSticky() {
        wx.navigateTo({
            url: '/example/sticky/container/index'
        });
    },
    // 多个吸顶容器
    manySticky() {},
    // scroll-view中使用
    scrollViewSticky() {
        wx.navigateTo({
            url: '/example/sticky/scroll-view/index'
        });
    },
    // 吸顶tabs选项
    tabsSticky() {
        wx.navigateTo({
            url: '/example/sticky/tabs/index'
        });
    },
    // 吸顶table表头
    tableSticky() {
        wx.navigateTo({
            url: '/example/sticky/table/index'
        });
    },
    // 复合使用
    complexSticky() {
        wx.navigateTo({
            url: '/example/sticky/complex/index'
        });
    }
});
