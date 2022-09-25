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
                icon: '/example/images/meet.png',
                title: '标题',
                desc: '描述信息',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                desc: '描述信息'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                desc: '描述信息',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                desc: '描述信息',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                desc: '描述信息',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                desc: '描述信息',
                url: '/example/list/index'
            }
        ],
        case_2: [
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            }
        ],
        case_3: [
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            }
        ],
        case_4: [
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            }
        ],
        case_5: [
            {
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: '',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: '',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: '9',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: '30',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: '100',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: 'How',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: 'New',
                icon: '/example/images/meet.png',
                title: '标题'
            },
            {
                badge: '新',
                icon: '/example/images/meet.png',
                title: '标题'
            }
        ],
        case_6: [
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
            },
            {
                icon: '/example/images/meet.png',
                title: '标题',
                url: '/example/list/index'
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
    handleClick({ detail }) {
        console.log(detail);
    }
});
