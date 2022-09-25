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
        // 属性内容
        options: {
            type: Object,
            value: {}
        },
        // 是否显示话题
        hasTopic: {
            type: Boolean,
            value: true
        },
        // 是否显示分类
        hasCategory: {
            type: Boolean,
            value: true
        },
        // 是否显示更多操作
        hasMore: {
            type: Boolean,
            value: false
        },
        // 是否显示浏览数
        hasViews: {
            type: Boolean,
            value: false
        },
        // 是否富文本
        isRich: {
            type: Boolean,
            value: false
        },
        // 是否显示部分内容
        hasLimit: {
            type: Boolean,
            value: true
        },
        // 是否显示底部栏
        hasFooter: {
            type: Boolean,
            value: true
        },
        // 是否可以分享
        hasShare: {
            type: Boolean,
            value: true
        },
        // 是否可以评论
        hasComment: {
            type: Boolean,
            value: true
        },
        // 是否可以点赞
        hasApprove: {
            type: Boolean,
            value: true
        },
        // 分享方式：card || nav
        shareType: {
            type: String,
            value: 'card'
        },
        // 相册宽度: 单位 rpx
        albumWidth: {
            type: Number,
            value: 678
        },
        // 图片圆角
        imageRadius: {
            type: Number,
            value: 12
        },
        // 图片显示数量
        imageMaxCount: {
            type: Number,
            value: -1
        },
        // 点击图片是否可预览
        hasPreview: {
            type: Boolean,
            value: true
        },
        // 图片行间隙
        imageRowGap: {
            type: Number,
            value: 3
        },
        // 图片列间隙
        imageColumnGap: {
            type: Number,
            value: 3
        },
        // 单行展示图片数量
        imageColumn: {
            type: Number,
            value: 3
        },
        // 图像懒加载
        lazyLoad: {
            type: Boolean,
            value: true
        },
        // tag最大宽度，-1为不限制
        maxTagWidth: {
            type: Number,
            value: -1
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        initStatus: false,
        publishTime: '', // 发布时间
        overflow: false, // 是否超过最大显示行数
        approveAnim: false // 是否显示点赞动画
    },
    observers: {
        options(value) {
            if (value.publishTime) {
                const publishTime = this.formatBeforeTime(value.publishTime);
                this.setData({
                    publishTime
                });
            }
        }
    },
    lifetimes: {
        ready() {
            if (this.data.options.approveAnim) {
                this.setData({
                    approveAnim: true
                });
            }
            if (this.data.hasLimit > 0) {
                const query = this.createSelectorQuery();
                let contentHeight;
                query.select('.mt-feed__content__wp').boundingClientRect((res) => {
                    contentHeight = res.height;
                });
                query.select('.mt-feed__content__text').boundingClientRect((res) => {
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
            const { userInfo, feedId } = this.data.options;
            this.triggerEvent('user', {
                userId: userInfo.userId || '',
                feedId: feedId
            });
        },
        /**
         * 更多操作
         */
        handleMore() {
            const isMe = this.data.options.isMe || false;
            this.triggerEvent('more', { isMe, feedId: this.data.options.feedId });
        },
        // 点击详情
        handleDetail() {
            this.triggerEvent('detail', { feedId: this.data.options.feedId });
        },
        // 点击内容
        handleContent() {
            this.triggerEvent('detail', { feedId: this.data.options.feedId });
        },
        /**
         * 点击全文
         */
        handleExpand() {
            this.triggerEvent('detail', { feedId: this.data.options.feedId });
        },
        /**
         * 点击图片最大展示最后一张
         */
        handleMoreImage() {
            this.triggerEvent('detail', { feedId: this.data.options.feedId });
        },
        /**
         * 点击话题
         */
        handleTopic() {
            this.triggerEvent('topic', { topicId: this.data.options.topic.id });
        },
        /**
         * 点击分类
         */
        handleCategory() {
            this.triggerEvent('category', { id: this.data.options.category.id });
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
         * 评论操作
         */
        handleComment() {
            this.triggerEvent('comment', {
                feedId: this.data.options.feedId,
                commentCount: this.data.options.commentCount,
                toUserInfo: this.data.options.userInfo
            });
        },
        /**
         * 点赞
         */
        handleApprove() {
            const { feedId, hasApprove } = this.data.options;
            // 有点赞操作开启动画
            this.setData({
                approveAnim: false
            });
            this.triggerEvent('approve', {
                feedId,
                flag: hasApprove
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
