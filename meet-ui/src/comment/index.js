/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        //  类型：preset
        type: {
            type: String,
            value: 'preset'
        },
        // 评论信息
        options: {
            type: Object,
            value: {}
        },
        // 是否显示部分内容
        hasLimit: {
            type: Boolean,
            value: true
        },
        // 是否有更多操作
        hasMore: {
            type: Boolean,
            value: false
        },
        // 是否可以分享
        hasShare: {
            type: Boolean,
            value: false
        },
        // 分享方式：card || nav
        shareType: {
            type: String,
            value: 'card'
        },
        // 是否外显回复
        hasReply: {
            type: Boolean,
            value: true
        },
        // 显示回复关系
        hasRelation: {
            type: Boolean,
            value: false
        }
    },
    observers: {
        options(value) {
            if (value.commentTime) {
                const commentTime = this.formatBeforeTime(value.commentTime);
                this.setData({
                    commentTime
                });
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        commentTime: '', // 评论时间
        expandState: false, // 展开状态
        overflow: false // 是否超过最大显示行数
    },
    lifetimes: {
        ready() {
            if (this.data.hasLimit > 0) {
                const query = this.createSelectorQuery();
                let contentHeight;
                query.select('.mt-comment__content__wp').boundingClientRect((res) => {
                    contentHeight = res.height;
                });
                query.select('.mt-comment__content__bd').boundingClientRect((res) => {
                    if (res.height > contentHeight) {
                        this.setData({
                            overflow: true
                        });
                    } else {
                        this.setData({
                            overflow: false
                        });
                    }
                });
                query.exec();
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 点击头像
        handleUser() {
            this.triggerEvent('user', {
                userId: this.data.options.userInfo.userId
            });
        },
        /**
         * 更多操作
         */
        handleMore() {
            const isMe = this.data.options.isMe || false;
            this.triggerEvent('more', {
                isMe,
                commentId: this.data.options.commentId
            });
        },
        /**
         * 转发
         */
        handleShare() {
            if (this.data.shareType === 'card') {
                return;
            }
            this.triggerEvent('share', {});
        },
        /**
         * 点赞
         */
        handleApprove() {
            const { commentId, hasApprove } = this.data.options;
            this.triggerEvent('approve', {
                commentId,
                flag: hasApprove
            });
        },
        /**
         * 删除操作
         */
        handleDelete() {
            this.triggerEvent('delete', {
                commentId: this.data.options.commentId
            });
        },
        /**
         * 回复评论操作
         */
        handleReply() {
            this.triggerEvent('reply', {
                commentId: this.data.options.commentId,
                replyCount: this.data.options.replyCount,
                toUserInfo: this.data.options.userInfo
            });
        },
        /**
         * 展开收起操作
         */
        handleExpand() {
            this.setData({
                expandState: !this.data.expandState
            });
        },
        /**
         * 时间处理,格式化xx之前时间
         * @param {*} dateTimeStamp
         */
        formatBeforeTime(dateTimeStamp) {
            dateTimeStamp = dateTimeStamp * 1000;
            let result = '';
            const minute = 1000 * 60; // 把分，时，天，周，半个月，一个月用毫秒表示
            const hour = minute * 60;
            const day = hour * 24;
            const week = day * 7;
            // const month = day * 30;
            const now = new Date().getTime(); // 获取当前时间毫秒
            const diffValue = now - dateTimeStamp; // 时间差
            if (diffValue < 0) {
                // 大于当前时间显示“刚刚”
                result = '刚刚';
                return result;
            }
            const minC = Math.floor(diffValue / minute); // 计算时间差的分，时，天，周，月
            const hourC = Math.floor(diffValue / hour);
            const dayC = Math.floor(diffValue / day);
            const weekC = Math.floor(diffValue / week);
            // const monthC = Math.floor(diffValue / month);
            if (weekC >= 1 && weekC <= 3) {
                result = `${parseInt(weekC)}周前`;
            } else if (dayC >= 1 && dayC <= 6) {
                result = `${parseInt(dayC)}天前`;
            } else if (hourC >= 1 && hourC <= 23) {
                result = `${parseInt(hourC)}小时前`;
            } else if (minC >= 1 && minC <= 60) {
                result = `${parseInt(minC)}分钟前`;
            } else if (diffValue >= 0 && diffValue <= minute) {
                result = '刚刚';
            } else {
                const datetime = new Date();
                datetime.setTime(dateTimeStamp);
                const Nyear = datetime.getFullYear();
                const Nmonth = datetime.getMonth() + 1 < 10 ? `0${datetime.getMonth() + 1}` : datetime.getMonth() + 1;
                const Ndate = datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate();
                result = `${Nyear}-${Nmonth}-${Ndate}`;
            }
            return result;
        }
    }
});
