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
        case_1: {
            title: '徽章网格',
            list: [
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: '0'
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: ''
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: '9'
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: '100'
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: '0'
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: ''
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: '9'
                },
                {
                    src: '/example/images/meet.png',
                    title: '标题',
                    badgeVal: '100'
                }
            ]
        },
        case_2: {
            title: '用户消息列表',
            list: [
                {
                    image: '/example/images/meet.png',
                    title: '标题',
                    desc: '描述信息',
                    badge: ''
                },
                {
                    image: '/example/images/meet.png',
                    title: '标题',
                    desc: '描述信息',
                    badge: '9'
                },
                {
                    image: '/example/images/meet.png',
                    title: '标题',
                    desc: '描述信息',
                    badge: '36'
                },
                {
                    image: '/example/images/meet.png',
                    title: '标题',
                    desc: '描述信息',
                    badge: '100'
                }
            ]
        }
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    }
});
