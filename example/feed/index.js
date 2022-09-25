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
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                content: `从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。`,
                imageList: [
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                        width: 1080,
                        height: 720
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: true, // 是否已点赞
                category: {
                    id: 'C001',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T001',
                    name: '#春暖花开'
                }
            }
        ],
        case_2: [
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                content: `从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。`,
                imageList: [
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                        width: 1080,
                        height: 1619
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: true, // 是否已点赞
                category: {
                    id: 'C001',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T001',
                    name: '#春暖花开'
                }
            }
        ],
        case_3: [
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                content: `从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。`,
                imageList: [
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: true, // 是否已点赞
                category: {
                    id: 'C001',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T001',
                    name: '#春暖花开'
                }
            }
        ],
        case_4: [
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                content: `从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。`,
                imageList: [
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibOv9N4TzeMSp5JRNZ9LMT3bc1Ut1NibMibjiaBmUqlxlnHBgLzibr9Uj48g/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: true, // 是否已点赞
                category: {
                    id: 'C001',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T001',
                    name: '#春暖花开'
                }
            }
        ],
        case_5: [
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。从明天起，和每一个亲人通信；告诉他们我的幸福；那幸福的闪电告诉我的；我将告诉每一个人。给每一条河每一座山取一个温暖的名字；陌生人，我也为你祝福；愿你有一个灿烂的前程；愿你有情人终成眷属；愿你在尘世获得幸福；我只愿面朝大海，春暖花开。', // 评论内容
                imageList: [
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: true, // 是否已点赞
                category: {
                    id: 'C001',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T001',
                    name: '#春暖花开'
                }
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
    },
    handleUser(e) {
        wx.meetToast({
            message: '点击了用户头像'
        });
        console.log(e);
    },
    handleMore(e) {
        wx.meetToast({
            message: '点击了更多图标'
        });
        console.log(e);
    },
    handleDetail(e) {
        wx.meetToast({
            message: '点击了详情'
        });
        console.log(e);
    },
    handleShare(e) {
        wx.meetToast({
            message: '点击了转发图标'
        });
        console.log(e);
    },
    handleComment(e) {
        wx.meetToast({
            message: '点击了评论图标'
        });
        console.log(e);
    },
    handleApprove(e) {
        wx.meetToast({
            message: '点击了点赞图标'
        });
        console.log(e);
    }
});
