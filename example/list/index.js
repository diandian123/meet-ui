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
            name: '基础使用',
            list: [
                {
                    title: '标题',
                    url: '/example/result/success',
                    hasArrow: true
                },
                {
                    title: '标题',
                    url: '/example/result/success',
                    hasArrow: true
                },
                {
                    title: '标题',
                    url: '/example/result/success',
                    hasArrow: true
                }
            ]
        },
        case_2: {
            name: '显示图标',
            list: [
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    rightDesc: '',
                    url: '/example/result/success'
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    rightDesc: '',
                    url: '/example/result/success',
                    hasArrow: true
                },
                {
                    icon: '/example/images/meet.png',
                    title: '标题',
                    rightDesc: '更多',
                    url: '/example/result/success',
                    hasArrow: true
                }
            ]
        },
        case_3: {
            name: '显示描述信息',
            list: [
                {
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '',
                    url: '/example/result/success'
                },
                {
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '',
                    url: '/example/result/success',
                    hasArrow: true
                },
                {
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '更多',
                    url: '/example/result/success',
                    hasArrow: true
                }
            ]
        },
        case_4: {
            name: '显示扩展信息',
            list: [
                {
                    title: '标题',
                    rightDesc: '',
                    url: '/example/result/success',
                    extDesc: '做对产品、业务真正有帮助的“实用”技术研发！',
                    hasArrow: false
                },
                {
                    title: '标题',
                    rightDesc: '',
                    url: '/example/result/success',
                    extDesc: '做对产品、业务真正有帮助的“实用”技术研发！',
                    hasArrow: true
                },
                {
                    title: '标题',
                    rightDesc: '更多',
                    url: '/example/result/success',
                    extDesc: '做对产品、业务真正有帮助的“实用”技术研发！',
                    hasArrow: true
                }
            ]
        },
        case_5: {
            name: '开关列表',
            list: [
                {
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    title: '标题',
                    desc: '描述信息'
                }
            ]
        },
        case_6: {
            name: '头像列表',
            list: [
                {
                    avatar: '/example/images/avatar.png',
                    mark: '',
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: ''
                },
                {
                    avatar: '/example/images/avatar.png',
                    mark: 'wx',
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '',
                    hasArrow: true
                },
                {
                    avatar: '/example/images/avatar.png',
                    mark: 'role',
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '更多',
                    hasArrow: true
                }
            ]
        },
        case_7: {
            name: '消息提醒',
            list: [
                {
                    avatar: '/example/images/avatar.png',
                    badge: '',
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '',
                    hasArrow: true
                },
                {
                    avatar: '/example/images/avatar.png',
                    badge: '9',
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '',
                    hasArrow: true
                },
                {
                    avatar: '/example/images/avatar.png',
                    badge: '1000',
                    title: '标题',
                    desc: '描述信息',
                    rightDesc: '更多',
                    hasArrow: true
                }
            ]
        },
        case_8: {
            name: '显示右侧配图',
            list: [
                {
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    title: '标题',
                    desc: '描述信息'
                },
                {
                    title: '标题',
                    desc: '描述信息'
                }
            ]
        },
        case_9: {
            name: '卡片列表（一）',
            list: [
                {
                    title: '标题',
                    rightDesc: '详情',
                    url: '/example/result/success',
                    hasArrow: true
                },
                {
                    title: '标题',
                    rightDesc: '详情',
                    url: '/example/result/success',
                    hasArrow: true
                },
                {
                    title: '标题',
                    rightDesc: '详情',
                    url: '/example/result/success',
                    hasArrow: true
                }
            ]
        },
        case_10: {
            name: '卡片列表（二）',
            list: [
                {
                    avatar: '/example/images/avatar.png',
                    mark: '',
                    title: '标题',
                    desc: '描述信息',
                    hasArrow: true
                },
                {
                    avatar: '/example/images/avatar.png',
                    mark: 'wx',
                    title: '标题',
                    desc: '描述信息',
                    hasArrow: true
                },
                {
                    avatar: '/example/images/avatar.png',
                    mark: 'qq',
                    title: '标题',
                    desc: '描述信息',
                    hasArrow: true
                }
            ]
        }
    },
    onLoad(opts) {
        Object.assign(opts, {
            icon: 'icon-comp--list',
            title: 'List%20%E5%88%97%E8%A1%A8'
        });
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    handleSwitch(e) {
        console.log(e);
    }
});
