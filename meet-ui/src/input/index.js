/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        // 多slot支持
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        // 类型：text || number || idcard || digit || nickname || password（密码） || code（验证码）
        type: {
            type: String,
            value: 'text'
        },
        // 图标
        icon: {
            type: String,
            value: ''
        },
        // 输入值
        value: {
            type: String,
            value: ''
        },
        // 占位符
        placeholder: {
            type: String,
            value: '请输入内容...'
        },
        // 最大输入长度，-1 的时候不限制
        maxLength: {
            type: Number,
            value: -1
        },
        // 只读
        readonly: {
            type: Boolean,
            value: false
        },
        // 禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 自动获得焦点
        focus: {
            type: Boolean,
            value: false
        },
        // 显示密码内容
        eye: {
            type: String,
            optionalTypes: [Boolean],
            value: 'false'
        },
        // 内容的校验规则（预留）
        rules: {
            type: String,
            value: ''
        },
        // 边框颜色：null（无边框）
        bdColor: {
            type: String,
            value: '#d8d8d8'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#ffffff'
        },
        // 是否有误
        hasError: {
            type: String,
            optionalTypes: [Boolean],
            value: 'false'
        },
        // 是否需要清除按钮
        hasClear: {
            type: Boolean,
            value: true
        },
        // 配合type=code使用，获取验证码按钮是否操作
        enableCode: {
            type: Boolean,
            value: false
        },
        // 指定光标与键盘的距离
        cursorSpacing: {
            type: Number,
            value: 20
        }
    },
    observers: {
        type(val) {
            switch (val) {
                case 'password':
                    this.setData({
                        type: 'text',
                        showPassword: true
                    });
                    break;
                case 'code':
                    this.setData({
                        type: 'text',
                        showCode: true
                    });
                    break;
            }
        },
        readonly(val) {
            if (val) {
                this.setData({
                    disabled: true
                });
            }
        }
    },
    data: {
        showClear: false, // 显示清除按钮
        showPassword: false, // 显示密码内容
        showCode: false, // 显示验证码
        countdown: 0, // 倒计时时间(s)
        actived: false // 激活状态
    },
    methods: {
        /**
         * 获得焦点
         */
        handleFocus() {
            this.setData({
                actived: true
            });
            if (this.data.value.length > 0) {
                this.setData({
                    showClear: true
                });
            }
            this.triggerEvent('focus');
        },
        /**
         * 失去焦点
         */
        handleBlur() {
            this.setData({
                showClear: false,
                actived: false
            });
            this.triggerEvent('blur');
        },
        /**
         * 输入处理
         * @param {object} e 事件对象
         */
        handleInput(e) {
            const value = e.detail.value;
            if (value.length > 0) {
                this.setData({
                    value: value,
                    showClear: true
                });
            } else {
                this.setData({
                    value: value,
                    showClear: false
                });
            }
            this.triggerEvent('input', { value });
        },
        /**
         * 清除
         */
        handleClear() {
            // ios无法清除输入值；将设置成""改为null
            this.setData(
                {
                    value: null
                },
                () => {
                    this.triggerEvent('input', { value: '' });
                }
            );
        },
        /**
         * 显示密码
         */
        handlePassword() {
            if (this.data.showPassword) {
                this.setData({
                    showPassword: false
                });
            } else {
                this.setData({
                    showPassword: true
                });
            }
        },
        /**
         * 获取手机验证码
         */
        handleVerify() {
            if (!this.data.enableCode) {
                this.triggerEvent('verify', { enableCode: false });
                return;
            } else {
                this.setData(
                    {
                        countdown: 60
                    },
                    () => {
                        const timer = setInterval(() => {
                            if (this.data.countdown > 0) {
                                this.setData({
                                    countdown: this.data.countdown - 1
                                });
                            } else {
                                clearInterval(timer);
                                this.setData({
                                    countdown: 0
                                });
                            }
                        }, 1000);
                    }
                );
                this.triggerEvent('verify', { enableCode: true });
            }
        }
    }
});
