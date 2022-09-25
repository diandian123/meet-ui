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
        input1: {
            value: '',
            rule: []
        },
        input2: {
            value: '',
            rule: []
        },
        input3: {
            value: '',
            rule: []
        },
        input4: {
            value: '',
            rule: []
        },
        input5: {
            value: '只读内容',
            rule: []
        },
        input6: {
            value: '内容不能修改',
            rule: []
        },
        phoneNum: '', // 电话号码
        codeActive: true, // 获取验证码按钮是否可点击
        errorInfo: '手机号不能为空！' // 错误提示
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
    /**
     * 示例一
     * @param {object} e 事件对象
     */
    handleInput1({ detail }) {
        const value = detail.value;
        this.setData({
            'input1.value': value
        });
    },
    /**
     * 示例二
     * @param {object} e 事件对象
     */
    handleInput2({ detail }) {
        const value = detail.value;
        this.setData({
            'input2.value': value
        });
    },
    /**
     * 示例三
     * @param {object} e 事件对象
     */
    handleInput3({ detail }) {
        const value = detail.value;
        this.setData({
            'input3.value': value
        });
    },
    /**
     * 场景运用，框型示例
     * @param {object} e 事件对象
     */
    handlePhone({ detail }) {
        console.log(detail);
        this.setData({
            phoneNum: detail.value
        });
    },
    handleCode({ detail }) {
        console.log(detail);
    },
    /**
     * 场景运用，框型示例
     * 输入框失去焦点
     */
    blur() {
        this.setData({
            codeActive: false
        });
        const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
        if (!this.data.phoneNum.length) {
            this.setData({
                errorInfo: '手机号不能为空！',
                borderColor: '#FF3B30'
            });
        } else if (this.data.phoneNum.length !== 11) {
            this.setData({
                errorInfo: '手机号长度为11位，请核对后输入！',
                borderColor: '#FF3B30'
            });
        } else if (!reg.test(this.data.phoneNum)) {
            this.setData({
                errorInfo: '请输入有效手机号！',
                borderColor: '#FF3B30'
            });
        } else {
            this.setData({
                errorInfo: '',
                borderColor: '',
                codeActive: true
            });
        }
    },
    /**
     * 场景运用，框型示例
     * 点击获取验证码按钮
     */
    verify() {
        this.blur();
    }
});
