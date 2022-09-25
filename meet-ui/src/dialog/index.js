/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
const DEFAULT_PROPS = {
    visible: false, // 显示状态：true || false
    width: 600, // 对话框宽度：单位rpx
    type: 'normal', // 对话框类型：normal(普通) || success(成功) || fail（失败) || alert(警告框) || confirm(确认框) || prompt(输入框) || custom(自定义)
    headImg: '', // 情感化头图
    iconfont: '', // 字体图标
    iconsize: 112, // 字体图标大小
    icon: '', // 图标（图片）
    iconOffset: 0, // 图标偏移
    title: '', // 标题
    content: '', // 内容，支持通过\n换行
    placeholder: '', // prompt输入框占位符
    buttons: [], // 按钮
    btnDirection: 'row', // 按钮排列方式: row(横向) || column(纵向)
    mask: true, // 是否显示遮罩层：true || false
    maskClosable: false, // 是否点击mask关闭：true || false
    hasClose: false, // 是否显示关闭图标 true || false,
    inputType: 'text', // input 的类型
    inputMaxLen: 140, // input 最大输入长度
    animation: 'fadeIn', // 动画: fadeIn || fadeInDown
    extClass: '' // 扩展样式
};
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
        props: {
            type: Object,
            value() {
                return {};
            }
        }
    },
    /**
     * 数据监听
     */
    observers: {
        props(props) {
            if (props.visible) {
                this.show(props);
            } else {
                this.close();
            }
        }
    },
    data: {},
    methods: {
        /**
         * 显示弹窗
         * @param {object} props 配置选项
         */
        show(props) {
            if (!props.buttons || props.buttons.length === 0) {
                if (props.type === 'confirm' || props.type === 'prompt') {
                    this._setPresetBtns(props);
                } else {
                    this._setBtns(props);
                }
            }

            const options = Object.assign({}, DEFAULT_PROPS, props);

            this._init(options);

            this.setData({
                visible: true,
                type: options.type,
                icon: options.icon,
                iconOffset: options.iconOffset,
                title: options.title,
                content: options.content,
                btnDirection: options.btnDirection,
                mask: options.mask,
                maskClosable: options.maskClosable,
                hasClose: options.hasClose,
                headImg: options.headImg,
                placeholder: options.placeholder,
                inputType: options.inputType,
                inputMaxLen: options.inputMaxLen,
                animation: options.animation,
                extClass: options.extClass
            });
        },
        /**
         * 初始化
         * @param {object} options 配置
         */
        _init({ type, buttons, btnDirection }) {
            let iconfont = '';
            const iconsize = DEFAULT_PROPS.iconsize;
            const singleBtn = [
                {
                    text: '确定',
                    confirm: true
                }
            ];
            const doubleBtns = [
                {
                    text: '取消',
                    cancel: true
                },
                {
                    text: '确定',
                    confirm: true
                }
            ];
            switch (type) {
                case 'success':
                    iconfont = 'mt-icon--success-b';
                    if (buttons.length === 0) {
                        buttons = singleBtn;
                    }
                    break;
                case 'fail':
                    iconfont = 'mt-icon--error-b';
                    if (buttons.length === 0) {
                        buttons = singleBtn;
                    }
                    break;
                case 'alert':
                    iconfont = 'mt-icon--warning-b';
                    if (buttons.length === 0) {
                        buttons = singleBtn;
                    }
                    break;
                case 'confirm':
                    if (buttons.length === 0) {
                        buttons = doubleBtns;
                    }
                    break;
                case 'prompt':
                    if (buttons.length === 0) {
                        buttons = doubleBtns;
                    }
                    break;
                case 'custom':
                    buttons = [];
                    break;
                default:
                    if (buttons.length === 0) {
                        buttons = singleBtn;
                    }
            }
            this._initBtnsProps(buttons, btnDirection);
            this.setData({
                iconfont,
                iconsize,
                buttons
            });
        },
        _initBtnsProps(buttons, btnDirection) {
            const btnLen = buttons.length;
            buttons.forEach((btn, index) => {
                if (btnLen === 1) {
                    btn.type = 'primary';
                    btn.width = 468;
                    btn.height = 78;
                    btn.radius = 40;
                } else if (btnLen === 2) {
                    if (btnDirection === 'row') {
                        btn.width = 220;
                        btn.height = 78;
                        btn.radius = 40;
                        if (index === 0) {
                            btn.type = 'secondary';
                        } else {
                            btn.type = 'primary';
                        }
                    } else {
                        btn.width = 468;
                        btn.height = 82;
                        btn.radius = 42;
                        if (index === 0) {
                            btn.type = 'primary';
                        } else {
                            btn.type = 'link';
                        }
                    }
                } else {
                    btn.width = 468;
                    btn.height = 82;
                    btn.radius = 42;
                    btn.type = index === 0 ? 'primary' : 'secondary';
                }
            });
        },
        /**
         * 内置遮罩处理
         */
        handleMask() {
            const data = this.data;
            if (!data.maskClosable) {
                return;
            }
            this.close();
        },
        /**
         * 内置prompt（输入框）输入
         * @param {object} e event 对象
         */
        handleInput(e) {
            const { detail } = e;
            this.setData({
                inputVal: detail.value
            });
        },
        /**
         * 内置按钮事件处理
         * @param {object} e event 对象
         */
        handleButton(e) {
            const { index } = e.currentTarget.dataset;
            const button = this.data.buttons[index];
            const data = {
                ...button
            };
            if (this.data.type === 'prompt') {
                data.inputVal = this.data.inputVal;
            }

            if (!button.onClick) {
                // 默认关闭弹窗
                this.setData({
                    visible: false
                });
            } else {
                const pages = getCurrentPages();
                const ctx = pages[pages.length - 1];
                // 默认关闭弹窗
                button.onClick.bind(ctx)(data);
                // this.triggerEvent('buttontap', data, {});
            }
        },
        /**
         * 设置预设类型按钮
         */
        _setPresetBtns(props) {
            if (props.btnDirection) {
                props.buttons = [
                    {
                        text: props.confirmText || '确定',
                        onClick: props.onConfirm
                    },
                    {
                        text: props.cancelText || '取消',
                        onClick: props.onCancel
                    }
                ];
            } else {
                props.buttons = [
                    {
                        text: props.cancelText || '取消',
                        onClick: props.onCancel
                    },
                    {
                        text: props.confirmText || '确定',
                        onClick: props.onConfirm
                    }
                ];
            }
        },
        /**
         * 设置按钮
         * @param {object} props
         */
        _setBtns(props) {
            props.buttons = [];
            if (props.btnDirection) {
                if (props.confirmText || props.onConfirm) {
                    props.buttons.push({
                        text: props.confirmText || '确定',
                        onClick: props.onConfirm
                    });
                }
                if (props.cancelText || props.onCancel) {
                    props.buttons.push({
                        text: props.cancelText || '取消',
                        onClick: props.onCancel
                    });
                }
            } else {
                if (props.cancelText || props.onCancel) {
                    props.buttons.push({
                        text: props.cancelText || '取消',
                        onClick: props.onCancel
                    });
                }
                if (props.confirmText || props.onConfirm) {
                    props.buttons.push({
                        text: props.confirmText || '确定',
                        onClick: props.onConfirm
                    });
                }
            }
        },
        /**
         * 关闭弹窗
         */
        close() {
            if (this.data.animation === 'fadeInDown') {
                this.setData({
                    animation: 'fadeOutUp'
                });
                setTimeout(() => {
                    this.setData({
                        visible: false
                    });
                }, 600);
            } else {
                this.setData({
                    visible: false
                });
            }

            // this.triggerEvent('close');
        },
        /**
         * 阻止冒泡滚动
         */
        stopEvent() {}
    }
});
