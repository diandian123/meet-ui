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
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_003', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'Meet',
                    avatar: '/example/images/meet.png',
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 10, // 点赞数
                replyCount: 0, // 评论数
                hasApprove: false, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: []
            }
        ],
        case_2: [
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_003', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'Meet',
                    avatar: '/example/images/meet.png',
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 20, // 点赞数
                replyCount: 0, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: true, // 是否自己评论
                // 默认外显2条回复
                replyList: []
            }
        ],
        case_3: [
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_001', // 评论id
                commentTime: 1646056077, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_001',
                    userRole: '', // 角色
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。从明天起，和每一个亲人通信；告诉他们我的幸福；那幸福的闪电告诉我的；我将告诉每一个人。给每一条河每一座山取一个温暖的名字；陌生人，我也为你祝福；愿你有一个灿烂的前程；愿你有情人终成眷属；愿你在尘世获得幸福；我只愿面朝大海，春暖花开。', // 评论内容
                approveCount: 20, // 点赞数
                replyCount: 0, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: []
            }
        ],
        case_4: [
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_003', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'Meet',
                    avatar: '/example/images/meet.png',
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 20, // 点赞数
                replyCount: 0, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: []
            }
        ],
        case_5: [
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_001', // 评论id
                commentTime: 1646056077, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_001',
                    userRole: '', // 角色
                    userName: 'Meet',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {}
                },
                quality: true, // 优质标识
                content: `从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。`, // 评论内容
                approveCount: 20, // 点赞数
                replyCount: 20, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: [
                    {
                        state: 1,
                        commentId: 'R_001',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_002',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        content: '给每一条河每一座山取一个温暖的名字；陌生人，我也为你祝福；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    },
                    {
                        state: 1,
                        commentId: 'R_002',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_003',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有一个灿烂的前程；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
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
    handleReply(e) {
        wx.meetToast({
            message: '点击了回复图标'
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
