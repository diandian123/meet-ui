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
        pageStatus: 'loading', // loading(加载中) || normal(正常状态）|| empty(空状态）|| error(异常状态)
        // 页面空状态
        emptyStatus: {
            icon: '',
            text: ''
        },
        // 页面异常状态
        errorStatus: {
            icon: '',
            text: '',
            traceId: ''
        },
        // 自定义导航栏
        navBarStatus: {
            title: '',
            transform: {
                title: '动态标题'
            }
        },
        switchItems: [
            { label: '最新', value: 0 },
            { label: '热门', value: 1 }
        ],
        feedList: [
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'MEET',
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
            },
            {
                feedId: 'F002',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U002',
                    userName: 'MEET',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V
                    userType: {
                        icon: '',
                        width: 48,
                        height: 48
                    }
                },
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
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
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: false, // 是否已点赞
                category: {
                    id: 'C002',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T002',
                    name: '#春暖花开'
                }
            },
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'MEET',
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
            },
            {
                feedId: 'F002',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U002',
                    userName: 'MEET',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V
                    userType: {
                        icon: '',
                        width: 48,
                        height: 48
                    }
                },
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
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
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: false, // 是否已点赞
                category: {
                    id: 'C002',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T002',
                    name: '#春暖花开'
                }
            },
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'MEET',
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
            },
            {
                feedId: 'F002',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U002',
                    userName: 'MEET',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V
                    userType: {
                        icon: '',
                        width: 48,
                        height: 48
                    }
                },
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
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
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: false, // 是否已点赞
                category: {
                    id: 'C002',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T002',
                    name: '#春暖花开'
                }
            },
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'MEET',
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
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oS4ykSFhIVibnIzBic5hOXIxnEAk4mAUlbXCSQLianB72pYmCRTiaxLCaWn3WJJqCndY0P5g8BcwVUAuw/0?wx_fmt=jpeg',
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
            },
            {
                feedId: 'F002',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U002',
                    userName: 'MEET',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V
                    userType: {
                        icon: '',
                        width: 48,
                        height: 48
                    }
                },
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
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
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oS4ykSFhIVibnIzBic5hOXIxnEAk4mAUlbXCSQLianB72pYmCRTiaxLCaWn3WJJqCndY0P5g8BcwVUAuw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibQYEOAGe2c9ZuMugbUx1GE95RdRnvY3s4YZYRQlO8TMjE4bQDYeWZUw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    }
                ],
                commentCount: 32,
                approveCount: 80,
                hasApprove: false, // 是否已点赞
                category: {
                    id: 'C002',
                    name: '现代诗歌'
                },
                topic: {
                    id: 'T002',
                    name: '#春暖花开'
                }
            },
            {
                feedId: 'F001',
                publishTime: 1646056077, // 发布时间 时间戳s
                userInfo: {
                    userId: 'U001',
                    userName: 'MEET',
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
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oS4ykSFhIVibnIzBic5hOXIxnEAk4mAUlbXCSQLianB72pYmCRTiaxLCaWn3WJJqCndY0P5g8BcwVUAuw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibQYEOAGe2c9ZuMugbUx1GE95RdRnvY3s4YZYRQlO8TMjE4bQDYeWZUw/0?wx_fmt=jpeg',
                        width: '600',
                        height: '600'
                    },
                    {
                        url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTh8PmA5DxCJfj3jrFyX2PPhXFGntHrmva1mQckrkRCOgorKF5ncdgO0nwcIa9wnicXVYrOYSSfE6A/0?wx_fmt=jpeg',
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
    onLoad() {
        setTimeout(() => {
            this.setData({
                pageStatus: 'normal'
            });
        }, 500);
    },
    /**
     * 监听页面滚动
     */
    onPageScroll(e) {
        this.meetNavBar && this.meetNavBar.setOpacity(e.scrollTop);
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
        const { index } = e.currentTarget.dataset;
        const { flag } = e.detail;
        const feedList = this.data.feedList;
        const count = feedList[index].approveCount;
        feedList[index].hasApprove = !flag;
        feedList[index].approveAnim = !flag;
        feedList[index].approveCount = !flag ? count + 1 : count - 1;
        this.setData({
            [`feedList[${index}]`]: feedList[index]
        });
    }
});
