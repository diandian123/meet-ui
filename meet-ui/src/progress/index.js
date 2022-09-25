/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    /**
     * 组件的属性列表
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        // 类型 line || image || circle
        type: {
            type: String,
            value: 'line'
        },
        // 进度值
        value: {
            type: Number,
            value: 0
        },
        // 高度
        height: {
            type: Number,
            value: 30
        },
        // 底层背景
        bgColor: {
            type: String,
            value: '#e9e9e9'
        },
        // 进度颜色
        curColor: {
            type: String,
            value: '#07c16c'
        },
        // 圆角
        radius: {
            type: Number,
            value: 0
        },
        // 是否显示进度值
        showValue: {
            type: Boolean,
            value: false
        },
        // 进度值内置在进度条内
        valueInside: {
            type: Boolean,
            value: false
        },
        // 显示进度的文字颜色
        fontColor: {
            type: String,
            value: '#fff'
        },
        // 是否显示条纹
        stripe: {
            type: Boolean,
            value: false
        },
        // 进度图片地址
        image: {
            type: String,
            val: ''
        },
        // 圆环直径
        circleDiam: {
            type: Number,
            value: 100
        },
        // 中心圆直径
        cententDiam: {
            type: Number,
            value: 80
        },
        // 圆环中心区域背景
        circleCenterColor: {
            type: String,
            value: '#fff'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        widthAnimation: null,
        backgroundRight: '', // 左边元素默认背景色
        durationRight: '0.25s' // 默认动画时长
    },

    observers: {
        value(value) {
            this.animationEvent(value);
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        animationEvent(value) {
            if (this.data.type === 'line') {
                const animation = wx.createAnimation();
                animation.width(`${value}%`).step({ duration: 400 });
                this.setData({
                    widthAnimation: animation.export()
                });
            } else if (this.data.type === 'circle') {
                this.rotateCircle(value);
            }
        },
        rotateCircle(value) {
            let rotateLeft = '';
            let rotateRight = '';
            let backgroundRight = '';
            let durationLeft = '0s';
            let durationRight = '0s';

            if (value >= 50) {
                rotateLeft = `rotate(${((value - 50) / 100) * 360}deg)`;
                rotateRight = `rotate(0deg)`;
                backgroundRight = 'inherit';
                durationLeft = '0.25s';
                durationRight = '0s';
            } else {
                rotateLeft = 'rotate(0deg)';
                rotateRight = `rotate(${(value / 100) * 360}deg)`;
                backgroundRight = this.data.bgColor;
                durationLeft = '0';
                durationRight = '0.25s';
                if (this.oldValue >= 50) {
                    durationRight = '0s';
                }
            }
            // 记录上次的值
            this.oldValue = value;
            this.setData({
                rotateLeft,
                rotateRight,
                backgroundRight,
                durationLeft,
                durationRight
            });
        }
    }
});
