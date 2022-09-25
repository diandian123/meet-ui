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
                }
            ]
        }
    },
    toHome() {
        wx.switchTab({
            url: '/example/index/index'
        });
    },
    goBack() {
        wx.navigateBack({
            delta: 1
        });
    }
});
