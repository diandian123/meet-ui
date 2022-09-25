/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
Page({
    /**
     * 页面的初始数据
     */
    data: {},
    onLoad() {},
    /**
     * 页面滚动事件
     */
    onPageScroll({ scrollTop }) {
        this.meetBackTop && this.meetBackTop.setBackTop(scrollTop);
    }
});
