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
        actionsheet1: {
            visible: false,
            desc: '一段描述信息',
            items: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3 },
                { label: '选项四', value: 4 }
            ]
        },
        actionsheet2: {
            visible: false,
            desc: '一段描述信息',
            current: 1,
            items: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3 },
                { label: '选项四', value: 4 }
            ]
        },
        actionsheet3: {
            visible: false,
            desc: '一段描述信息',
            items: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3, color: '#4876ff' },
                { label: '选项四', value: 4, color: '#fa5151' }
            ]
        },
        actionsheet4: {
            visible: false,
            desc: '一段描述信息',
            items: [
                { icon: '/example/images/about_a.png', label: '选项一', value: 1 },
                { icon: '/example/images/about_b.png', label: '选项二', value: 2 },
                { icon: '/example/images/about_a.png', label: '选项三', value: 3 },
                { icon: '/example/images/about_b.png', label: '选项四', value: 4 }
            ]
        },
        actionsheet5: {
            visible: false,
            desc: '一段描述信息',
            items: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3 },
                { label: '选项四', value: 4 }
            ]
        },
        actionsheet6: {
            visible: false,
            desc: '一段描述信息',
            current: 2,
            items: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3 },
                { label: '选项四', value: 4 },
                { label: '选项五', value: 5 },
                { label: '选项六', value: 6 },
                { label: '选项七', value: 7 },
                { label: '选项八', value: 8 },
                { label: '选项九', value: 9 },
                { label: '选项十', value: 10 }
            ]
        },
        actionsheet7: {
            visible: false,
            desc: '一段描述信息',
            items: [
                { openType: 'getUserInfo', label: '获取用户信息' },
                { openType: 'share', label: '分享到微信群', color: '#07c16c' },
                { openType: 'contact', label: '打开客服会话', color: '#fa5151' }
            ]
        },
        actionsheet8: {
            visible: false,
            desc: '一段描述信息',
            current: 0,
            items: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3 },
                { label: '选项四', value: 4 }
            ]
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
    onShareAppMessage() {
        return app.shareMessage();
    },
    _toggle(actionsheet) {
        this.setData({
            [`${actionsheet}.visible`]: !this.data[actionsheet].visible
        });
    },
    toggleActionSheet1() {
        this._toggle('actionsheet1');
    },
    toggleActionSheet2() {
        this._toggle('actionsheet2');
    },
    toggleActionSheet3() {
        this._toggle('actionsheet3');
    },
    toggleActionSheet4() {
        this._toggle('actionsheet4');
    },
    toggleActionSheet5() {
        this._toggle('actionsheet5');
    },
    toggleActionSheet6() {
        this._toggle('actionsheet6');
    },
    toggleActionSheet7() {
        this._toggle('actionsheet7');
    },
    toggleActionSheet8() {
        this._toggle('actionsheet8');
    },
    handleSelect1() {
        this._toggle('actionsheet1');
    },
    handleSelect2({ detail }) {
        this.setData({
            ['actionsheet2.visible']: !this.data.actionsheet2.visible,
            ['actionsheet2.current']: detail.current
        });
    },
    handleSelect3() {
        this._toggle('actionsheet3');
    },
    handleSelect4() {
        this._toggle('actionsheet4');
    },
    handleSelect5() {
        this._toggle('actionsheet5');
    },
    handleSelect6({ detail }) {
        this.setData({
            'actionsheet6.visible': !this.data.actionsheet6.visible,
            'actionsheet6.current': detail.current
        });
    },
    handleSelect7() {
        this._toggle('actionsheet7');
    },
    handleSelect8() {
        this._toggle('actionsheet8');
    },
    confirmActionSheet(e) {
        // TODO
        console.log(e);
        this.setData({
            'actionsheet8.visible': !this.data.actionsheet8.visible
        });
    },
    getUserInfo(e) {
        console.log(e.detail);
    },
    getPhoneNumber(e) {
        console.log(e.detail);
    }
});
