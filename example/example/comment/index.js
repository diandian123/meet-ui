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
        switchList1: [
            { label: '最新', value: 0 },
            { label: '热门', value: 1 }
        ],
        // 评论列表
        commentList: [
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_001', // 评论id
                commentTime: 1646056077, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_001',
                    userRole: '', // 角色
                    userName: 'MEET',
                    avatar: '/example/images/meet.png', // 用户头像
                    // 用户类型：大V、特邀专家
                    userType: {}
                },
                quality: true, // 优质标识
                content: `从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。`, // 评论内容
                approveCount: 100, // 点赞数
                replyCount: 20, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: true, // 是否自己评论
                // 默认外显2条回复
                replyList: [
                    {
                        state: 1,
                        commentId: 'R_001',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_002',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'MEET',
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
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有一个灿烂的前程；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_002', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_002',
                    userRole: '', // 角色
                    userName: 'MEET',
                    avatar: '/example/images/meet.png',
                    userType: {
                        icon: '/example/images/v.png',
                        width: 48,
                        height: 48
                    }
                },
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 20, // 点赞数
                replyCount: 1, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: [
                    {
                        state: 1,
                        commentId: 'U_003',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_003',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_005',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有情人终成眷属；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_003', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'MEET',
                    avatar: '/example/images/meet.png',
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 10, // 点赞数
                replyCount: 0, // 评论数
                hasApprove: true, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: []
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_004', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'MEET',
                    avatar: '/example/images/meet.png',
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 10, // 点赞数
                replyCount: 10, // 评论数
                hasApprove: false, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: [
                    {
                        state: 1,
                        commentId: 'R_001',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_002',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'MEET',
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
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有一个灿烂的前程；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_005', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'MEET',
                    avatar: '/example/images/meet.png',
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 10, // 点赞数
                replyCount: 1, // 评论数
                hasApprove: false, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: [
                    {
                        state: 1,
                        commentId: 'U_003',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_003',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_005',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有情人终成眷属；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_006', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'MEET',
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
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_007', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'MEET',
                    avatar: '/example/images/meet.png',
                    userType: {}
                },
                quality: false, // 优质标识
                content:
                    '从明天起，做一个幸福的人；喂马，劈柴，周游世界。从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。', // 评论内容
                approveCount: 10, // 点赞数
                replyCount: 3, // 评论数
                hasApprove: false, // 是否已点赞
                isMe: false, // 是否自己评论
                // 默认外显2条回复
                replyList: [
                    {
                        state: 1,
                        commentId: 'R_001',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: 'U_002',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'MEET',
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
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'MEET',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有一个灿烂的前程；',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
            },
            {
                state: 1, // 1 已审核 || 0 待审核
                commentId: 'C_008', // 评论id
                commentTime: 1644912795, // 评论时间 时间戳 s
                userInfo: {
                    userId: 'U_003',
                    userRole: '', // 角色
                    userName: 'MEET',
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
        hasMore: false,
        // 底部反馈条
        feedbackBar: {
            commentCount: 10, // 评论数
            approveCount: 8, // 点赞数
            hasApprove: true, // 是否已点赞
            hasCollect: false // 是否已收藏
        },
        // 输入评论弹层
        inputPopup: {
            visible: false,
            placeholder: ''
        },
        // 回复弹层
        replyPopup: {
            visible: false
        },
        // 删除评论面板
        deleteActionSheet: {
            visible: false,
            desc: '若删除这条评论，该评论下的所有回复都会被删除',
            items: [{ label: '确认删除', value: 1, color: '#fa5151' }],
            cancelText: '我再想想'
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {},
    // 分享
    onShareAppMessage() {
        return app.shareMessage();
    },
    // 下拉刷新
    handleRefresh() {
        // TODO
        setTimeout(() => {
            this.setData({
                refreshFlag: false
            });
        }, 1000);
    },
    // 加载更多
    handleLoadmore() {
        // TODO
    },
    // 添加评论
    handleAddComment() {
        this.setData({
            'inputPopup.visible': true,
            'inputPopup.placeholder': `发表我的评论...`
        });
    },
    // 跳转到评论列表
    handleToComment() {},
    // 底部点赞
    handleDoApprove() {},
    // 底部收藏
    handleDoCollect() {},
    // 底部分享
    handleDoShare() {},
    // 点击用户头像
    handleUser(e) {
        wx.meetToast({
            message: '点击了用户头像'
        });
        console.log(e);
    },
    // 删除评论
    handleMore(e) {
        this.delCommentId = e.detail.commentId;
        this.setData({
            'deleteActionSheet.visible': true
        });
    },
    // 确认删除
    selectDeleteActionSheet(e) {
        const { item } = e.detail;
        if (item.value === 1) {
            // TODO
            wx.meetToast({
                type: 'success',
                message: '删除成功'
            });
        }
        this.closeDeleteActionSheet();
    },
    // 取消删除
    closeDeleteActionSheet() {
        this.delCommentId = null;
        this.setData({
            'deleteActionSheet.visible': false
        });
    },
    // 点击回复弹层
    handleReply(e) {
        console.log(e);
        const index = e.currentTarget.dataset.index;
        const { popup, commentId, replyCount, toUserInfo } = e.detail;
        if (!popup && replyCount > 0) {
            // 有回复
            this.setData({
                'replyPopup.visible': true,
                'replyPopup.comment': this.data.commentList[index],
                'replyPopup.placeholder': `回复${toUserInfo.userName}：`
            });
        } else {
            this.setData({
                'inputPopup.visible': true,
                'inputPopup.commentId': commentId,
                'inputPopup.placeholder': `回复${toUserInfo.userName}：`
            });
        }
    },
    // 点赞评论
    handleApproveComment(e) {
        const { index } = e.currentTarget.dataset;
        const { flag } = e.detail;
        const commentList = this.data.commentList;
        const count = commentList[index].approveCount;
        commentList[index].hasApprove = !flag;
        commentList[index].approveCount = !flag ? count + 1 : count - 1;
        commentList[index].approveAnim = !flag ? true : false;
        this.setData({
            commentList
        });
    },
    // 更新页面内容
    handleUpdate(e) {
        console.log(e);
        // TODO
    }
});
