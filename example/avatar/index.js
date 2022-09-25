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
            title: '头像列表',
            list: [
                {
                    image: '/example/images/avatar.png',
                    badge: '0',
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    image: '/example/images/avatar.png',
                    badge: '',
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    image: '/example/images/avatar.png',
                    badge: '9',
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    image: '/example/images/avatar.png',
                    badge: '36',
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    image: '/example/images/avatar.png',
                    badge: '100',
                    title: '标题',
                    desc: '描述信息'
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
