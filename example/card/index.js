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
        case_1: [
            {
                image: '/example/images/poster.jpg',
                title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                desc: '描述信息'
            },
            {
                image: '/example/images/poster.jpg',
                title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                desc: '描述信息'
            },
            {
                image: '/example/images/poster.jpg',
                title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                desc: '描述信息'
            },
            {
                image: '/example/images/poster.jpg',
                title: '标题标题标题标题标题标题标题标题标题标题标题标题',
                desc: '描述信息'
            }
        ],
        case_2: [
            {
                image: '/example/images/poster.jpg',
                subscript: '12:50',
                title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                desc: '描述信息'
            },
            {
                image: '/example/images/poster.jpg',
                subscript: '12:50',
                title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                desc: '描述信息'
            }
        ],
        case_3: [
            {
                ranking: 1,
                image: '/example/images/poster.jpg',
                subscript: '全40集',
                title: '标题标题标题标题标题标题标题标题标题标题标题',
                tags: [{ text: '标签一' }, { text: '标签二' }],
                desc: '描述信息'
            },
            {
                ranking: 2,
                image: '/example/images/poster.jpg',
                subscript: '全40集',
                title: '标题标题标题标题标题标题标题标题标题标题标题',
                tags: [{ text: '标签一' }, { text: '标签二' }],
                desc: '描述信息'
            },
            {
                ranking: 3,
                image: '/example/images/poster.jpg',
                subscript: '全40集',
                title: '标题标题标题标题标题标题标题标题标题标题标题',
                tags: [{ text: '标签一' }, { text: '标签二' }],
                desc: '描述信息'
            },
            {
                ranking: 4,
                image: '/example/images/poster.jpg',
                subscript: '全40集',
                title: '标题标题标题标题标题标题标题标题标题标题标题',
                tags: [{ text: '标签一' }, { text: '标签二' }],
                desc: '描述信息'
            }
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
    }
});
