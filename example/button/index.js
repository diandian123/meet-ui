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
        compTitle: '' // 组件标题
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    // 显示对话框
    handleDialog() {
        wx.meetDialog({
            type: 'success',
            title: 'MEET UI',
            content: '重新定义用户界面、用户交互、用户体验',
            onConfirm(res) {
                console.log(res);
                // TODO...
                // 关闭对话框
                wx.meetDialog.close();
            }
        });
    },
    // 获取用户信息
    getUserInfo() {
        wx.getUserProfile({
            desc: '获取用户信息',
            success(res) {
                console.log(res);
            },
            fail(err) {
                console.log(err);
            }
        });
    },
    // 获取手机号
    getPhoneNumber(res) {
        console.log(res);
    },
    // 处理客服会话
    handleContact(res) {
        console.log(res);
    },
    onShareAppMessage() {
        return app.shareMessage();
    }
});
