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
        // 类型： success || error
        type: {
            type: String,
            value: ''
        },
        // 图标：url地址
        icon: {
            type: String,
            value: ''
        },
        // 图标大小
        iconSize: {
            type: String,
            value: '140'
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 描述
        desc: {
            type: String,
            value: ''
        },
        // 按钮文字
        btnText: {
            type: String,
            value: '返回'
        },
        // 按钮类型
        btnType: {
            type: String,
            value: 'primary'
        },
        btnSize: {
            type: String,
            value: 'm'
        }
    },
    observers: {
        type(val) {
            if (val === 'success') {
                this.setData({
                    iconFont: 'mt-icon--success',
                    iconColor: '#07c16c'
                });
            } else if (val === 'error') {
                this.setData({
                    iconFont: 'mt-icon--error',
                    iconColor: '#fa5151',
                    btnType: 'warning'
                });
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        iconFont: '',
        iconColor: ''
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handleClick() {
            this.triggerEvent('click');
        }
    }
});
