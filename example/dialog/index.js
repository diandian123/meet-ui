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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    onShow() {
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.writePhotosAlbum']) {
                    wx.setStorageSync('allowSave', true);
                }
            }
        });
    },
    // 普通对话框
    normalDialog() {
        wx.meetDialog({
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 成功对话框
    successDialog() {
        wx.meetDialog({
            type: 'success',
            title: '操作成功',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 失败对话框
    failDialog() {
        wx.meetDialog({
            type: 'fail',
            title: '操作失败',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 警告对话框
    alertDialog() {
        wx.meetDialog({
            type: 'alert',
            title: '警告操作',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 确认对话框
    confirmDialog() {
        wx.meetDialog({
            type: 'confirm',
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            onConfirm(res) {
                console.log(res);
                // TODO...
                wx.meetToast({
                    message: `点击了确定按钮`
                });
                // 关闭对话框
                wx.meetDialog.close();
            }
        });
    },
    // 输入对话框
    promptDialog() {
        wx.meetDialog({
            type: 'prompt',
            title: '标题',
            placeholder: '请输入内容...',
            onConfirm(res) {
                console.log(res);
                wx.meetToast({
                    message: `输入内容为：${res.inputVal}`
                });
                // todo
                wx.meetDialog.close();
            }
        });
    },
    // 不显示标题
    noTitleDialog() {
        wx.meetDialog({
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 定义顶部图标
    customIconDialog() {
        wx.meetDialog({
            icon: '/example/images/tab1_a.png',
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 定义按钮内容
    customBtnDialog() {
        wx.meetDialog({
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            confirmText: '确定按钮',
            cancelText: '取消按钮'
        });
    },
    // 定义按钮事件
    customBtnEventDialog() {
        wx.meetDialog({
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            onConfirm(res) {
                console.log(res);
                // todo
                wx.meetToast({
                    type: 'success',
                    message: `点击了确定`
                });
                wx.meetDialog.close();
            },
            onCancel(res) {
                console.log(res);
                // todo
                wx.meetToast({
                    type: 'fail',
                    message: `点击了取消`
                });
                wx.meetDialog.close();
            }
        });
    },
    // 定义按钮排列方式
    columnConfirmDialog() {
        wx.meetDialog({
            type: 'success',
            title: '操作成功',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            btnDirection: 'column',
            confirmText: '长文本按钮',
            cancelText: '长文本按钮'
        });
    },
    // 定义微信特性按钮
    openTypeDialog() {
        wx.meetDialog({
            type: 'success',
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            btnDirection: 'column',
            buttons: [{ text: '分享到朋友圈', openType: 'share' }, { text: '暂不分享' }]
        });
    },
    // 显示底部关闭图标
    showCloseDialog() {
        wx.meetDialog({
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            hasClose: true
        });
    },
    // 显示超长内容
    longTextDialog() {
        wx.meetDialog({
            title: '标题',
            content:
                '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
        });
    },
    // 显示三个按钮
    moreBtnsDialog() {
        wx.meetDialog({
            type: 'success',
            title: '操作成功',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            btnDirection: 'column',
            buttons: [
                { text: '主要操作', onClick: this._demoClick },
                { text: '次要操作一', onClick: this._demoClick },
                { text: '次要操作二', onClick: this._demoClick }
            ]
        });
    },
    // 定义顶部情景图
    headImgDialog() {
        wx.meetDialog({
            headImg: '/example/images/poster.jpg',
            title: '标题信息',
            content:
                '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            btnDirection: 'column',
            confirmText: '主要操作',
            cancelText: '次要操作'
        });
    },
    // 定义显示动画
    fadeInDownDialog() {
        wx.meetDialog({
            hasClose: true,
            headImg: '/example/images/poster.jpg',
            title: '标题信息',
            content:
                '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            btnDirection: 'column',
            confirmText: '主要操作',
            cancelText: '次要操作',
            animation: 'fadeInDown'
        });
    },
    // 自定义对话框样式
    extClassDialog() {
        wx.meetDialog({
            title: '标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            confirmText: '确定',
            cancelText: '取消',
            extClass: 'ext-class'
        });
    },
    // 自定义对话框内容
    customDialog() {
        wx.meetDialog({
            type: 'custom',
            id: '#customDialog'
        });
    },
    _demoClick(res) {
        console.log(res, this.data);
        wx.meetToast({
            message: `点击了${res.text}`
        });
        wx.meetDialog.close();
    },
    // 自定义按钮事件
    doAction() {
        // todo
        wx.meetToast({
            message: `点击了确定`
        });
        // 关闭对话框
        wx.meetDialog.close();
    },
    // 关闭任务弹框
    closeCustomDialog() {
        wx.meetDialog.close('#customDialog');
    }
});
