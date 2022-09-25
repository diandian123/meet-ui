/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 按钮类型：primary || warning || plain || secondary || link || custom
        type: {
            type: String,
            value: 'primary'
        },
        // 边框颜色
        bdColor: {
            type: String,
            value: '#07c16c'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#07c16c'
        },
        // 文本颜色
        textColor: {
            type: String,
            value: '#ffffff'
        },
        // 按钮字号
        textSize: {
            type: Number,
            value: 32
        },
        // 图标
        icon: {
            type: String,
            value: ''
        },
        // 预设尺寸： l || m || s
        size: {
            type: String,
            value: ''
        },
        // 宽度：当size为 l || m || s 将会覆盖该值，横屏适配采用vmin单位
        width: {
            type: String,
            optionalTypes: [Number],
            value: '100%'
        },
        // 高度：当size为 l || m || s 将会覆盖该值
        height: {
            type: String,
            optionalTypes: [Number],
            value: '88rpx'
        },
        // 圆角
        radius: {
            type: String,
            optionalTypes: [Number],
            value: '44rpx'
        },
        // 禁用状态：true || false
        disabled: {
            type: Boolean,
            value: false
        },
        // 启用hover： true || false
        enableHover: {
            type: Boolean,
            value: true
        },
        // 微信特征
        openType: {
            type: String,
            value: ''
        }
    },
    /**
     * 数据监听
     */
    observers: {
        type(value) {
            switch (value) {
                case 'plain':
                    this.setData({
                        bdColor: '#07c16c',
                        bgColor: '#ffffff',
                        textColor: '#07c16c'
                    });
                    break;
                case 'secondary':
                    this.setData({
                        bdColor: '#d8d8d8',
                        bgColor: '#ffffff',
                        textColor: '#808080'
                    });
                    break;
                case 'link':
                    this.setData({
                        bdColor: 'transparent',
                        bgColor: 'transparent',
                        textColor: '#07c16c'
                    });
                    break;
                case 'warning':
                    this.setData({
                        bdColor: '#fa5151',
                        bgColor: '#fa5151',
                        textColor: '#ffffff'
                    });
                    break;
            }
        },
        size(value) {
            switch (value) {
                case 'l':
                    this.setData({
                        width: 576,
                        height: 88,
                        radius: 44
                    });
                    break;
                case 'm':
                    this.setData({
                        width: 420,
                        height: 88,
                        radius: 44
                    });
                    break;
                case 's':
                    this.setData({
                        width: 320,
                        height: 88,
                        radius: 44
                    });
                    break;
            }
        },
        width(value) {
            this.formatUnits('width', value);
        },
        height(value) {
            this.formatUnits('height', value);
        },
        radius(value) {
            this.formatUnits('radius', value);
        }
    },
    /**
     * 组件的初始数据
     */
    data: {},
    methods: {
        handlePhoneNumber(res) {
            this.triggerEvent('getphonenumber', res);
        },
        handleContact(res) {
            this.triggerEvent('contact', res);
        },
        formatUnits(name, value) {
            // +号是为了兼容传入字符串但未加单位的情况：例如'36'
            if (typeof value === 'number' || +value) {
                this.setData({
                    [name]: `${value}rpx`
                });
            }
        }
    }
});
