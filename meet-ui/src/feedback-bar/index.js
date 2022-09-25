/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        options: {
            type: Object,
            value: {
                commentCount: 0, // 评论数
                approveCount: 0, // 点赞数
                hasApprove: false, // 是否已点赞
                hasCollect: false // 是否已收藏
            }
        },
        // 占位符
        placeholder: {
            type: String,
            value: '发表我的评论...'
        },
        // 最大显示数值
        maxValue: {
            type: Number,
            value: 99
        },
        // 是否有评论
        hasComment: {
            type: Boolean,
            value: true
        },
        // 是否有点赞
        hasApprove: {
            type: Boolean,
            value: true
        },
        // 是否有收藏
        hasCollect: {
            type: Boolean,
            value: true
        },
        // 是否有分享
        hasShare: {
            type: Boolean,
            value: true
        },
        // 分享方式：card 小程序卡片 || poster 海报
        shareType: {
            type: String,
            value: 'card'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 评论
         */
        handleComment() {
            this.triggerEvent('comment', {});
        },
        /**
         * 跳转到评论列表
         */
        handleCommentList() {
            this.triggerEvent('list', {});
        },
        /**
         * 点赞
         */
        handleApprove() {
            const { hasApprove } = this.data.options;
            this.triggerEvent('approve', {
                flag: !hasApprove
            });
        },
        /**
         * 收藏
         */
        handleCollect() {
            const { hasCollect } = this.data.options;
            this.triggerEvent('collect', {
                flag: !hasCollect
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
        }
    }
});
