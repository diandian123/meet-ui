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
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        case_1: {
            commentCount: 0, // 评论数
            approveCount: 0, // 点赞数
            hasApprove: false, // 是否已点赞
            hasCollect: false // 是否已收藏
        },
        case_2: {
            commentCount: 8, // 评论数
            approveCount: 0, // 点赞数
            hasApprove: false, // 是否已点赞
            hasCollect: false // 是否已收藏
        },
        case_3: {
            commentCount: 0, // 评论数
            approveCount: 100, // 点赞数
            hasApprove: true, // 是否已点赞
            hasCollect: false // 是否已收藏
        },
        case_4: {
            commentCount: 0, // 评论数
            approveCount: 0, // 点赞数
            hasCollect: true // 是否已收藏
        },
        case_5: {
            commentCount: 10, // 评论数
            approveCount: 100, // 点赞数
            hasApprove: true, // 是否已点赞
            hasCollect: true // 是否已收藏
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    /**
     * 点赞操作
     */
    handleApprove1(e) {
        const { flag } = e.detail;
        this.setData({
            'case_1.hasApprove': flag,
            'case_1.approveCount': flag ? this.data.case_1.approveCount + 1 : this.data.case_1.approveCount - 1
        });
    },
    handleApprove2(e) {
        const { flag } = e.detail;
        this.setData({
            'case_2.hasApprove': flag,
            'case_2.approveCount': flag ? this.data.case_2.approveCount + 1 : this.data.case_2.approveCount - 1
        });
    },
    /**
     * 收藏操作
     */
    handleCollect1(e) {
        const { flag } = e.detail;
        this.setData({
            'case_1.hasCollect': flag
        });
    },
    handleCollect2(e) {
        const { flag } = e.detail;
        this.setData({
            'case_2.hasCollect': flag
        });
    },
    handleCollect3(e) {
        const { flag } = e.detail;
        this.setData({
            'case_3.hasCollect': flag
        });
    },
    handleCollect4(e) {
        const { flag } = e.detail;
        this.setData({
            'case_4.hasCollect': flag
        });
    }
});
