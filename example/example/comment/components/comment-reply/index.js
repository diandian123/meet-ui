/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：article || pk || qa
        type: {
            type: String,
            value: 'article'
        },
        options: {
            type: Object,
            value: {}
        }
    },
    observers: {
        options() {
            // TODO 结合type与评论id，请求接口数据
            // mock数据
            this.setData({
                replyList: [
                    {
                        state: 1,
                        commentId: '1001_1',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: '001',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        content: '从明天起，做一个幸福的人!',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: true, // 是否已点赞
                        isMe: false // 是否自己评论
                    },
                    {
                        state: 1,
                        commentId: '1001_2',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: '002',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: 'U_001',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        content: '从明天起，关心粮食和蔬菜；我有一所房子，面朝大海，春暖花开。',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    },
                    {
                        state: 1,
                        commentId: '1001_3',
                        commentTime: 1644406946,
                        userInfo: {
                            userId: '003',
                            userName: '诗和远方',
                            avatar: '/example/images/meet.png'
                        },
                        toUserInfo: {
                            userId: '002',
                            userName: 'Meet',
                            avatar: '/example/images/meet.png'
                        },
                        content: '愿你有一个灿烂的前程！',
                        approveCount: 10, // 点赞数
                        replyCount: 20, // 评论数
                        hasApprove: false, // 是否已点赞
                        isMe: false // 是否自己评论
                    }
                ]
            });
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        // 回复列表
        replyList: [],
        // 回复输入弹层
        inputPopup: {
            visible: false,
            placeholder: ''
        },
        // 删除动作
        deleteActionSheet: {
            visible: false,
            desc: '若删除这条评论，该评论下的所有回复都会被删除',
            items: [{ label: '确认删除', value: 1, color: '#fa5151' }],
            cancelText: '我再想想'
        }
    },

    lifetimes: {},
    /**
     * 组件的方法列表
     */
    methods: {
        // 关闭弹层
        handleClose() {
            this.setData({
                'options.visible': false
            });
        },
        // 加载更多评论
        handleLoadmore() {
            // TODO 结合type处理分页
            console.log('加载更多');
        },
        // 删除评论
        handleDelete(e) {
            this.delCommentId = e.detail.commentId;
            this.setData({
                'deleteActionSheet.visible': true
            });
        },
        // 确认删除
        selectDeleteActionSheet(e) {
            const { item } = e.detail;
            if (item.value === 1) {
                wx.meetToast({
                    type: 'success',
                    message: '删除成功'
                });
                // TODO 调用删除接口
                // 删除成功通知外部更新数据
                this.triggerEvent('update', {
                    action: 'delete',
                    commentId: this.delCommentId
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
        // 评论处理
        handleReply(e) {
            console.log(e);
            const { index } = e.currentTarget.dataset;
            let commentId = null;
            let toUserInfo = null;
            if (parseInt(index) > -1) {
                commentId = this.data.replyList[index].commentId;
                toUserInfo = this.data.replyList[index].userInfo;
            } else {
                commentId = this.data.options.comment.commentId;
                toUserInfo = this.data.options.comment.userInfo;
            }

            this.setData({
                'inputPopup.visible': true,
                'inputPopup.commentId': commentId,
                'inputPopup.placeholder': `回复${toUserInfo.userName}：`
            });
        },
        // 新增评论
        handleInput() {
            // TODO 调用新增评论接口
            // 评论成功通知外部更新数据
            this.triggerEvent('update', {
                action: 'add',
                item: {}
            });
        },
        // 点赞操作
        handleApprove(e) {
            const { index } = e.currentTarget.dataset;
            const { flag } = e.detail;
            const { comment } = this.properties.options;
            console.log('comment', comment);
            const { replyList } = this.data;
            let count = 0;
            if (index === -1) {
                count = comment.approveCount;
                comment.approveCount = !flag ? count + 1 : count - 1;
                comment.approveAnim = !flag ? true : false;
                comment.hasApprove = !flag;
                this.setData({
                    'options.comment': comment
                });
                // TODO 调用点赞接口
                this.triggerEvent('update', {
                    action: 'approve',
                    commentId: comment.comment,
                    approveCount: comment.approveCount
                });
            } else {
                count = replyList[index].approveCount;
                replyList[index].approveCount = !flag ? count + 1 : count - 1;
                replyList[index].approveAnim = !flag ? true : false;
                replyList[index].hasApprove = !flag;
                this.setData({
                    replyList
                });
                // TODO 调用点赞接口
            }
        }
    }
});
