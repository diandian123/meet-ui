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
        // 输入框内容
        value: {
            type: String,
            value: ''
        },
        // 占位符
        placeholder: {
            type: String,
            value: '请输入内容...'
        },
        // 最大输入长度，-1为不限制
        maxLength: {
            type: Number,
            value: -1
        },
        // 是否显示计数，与maxLength一起使用
        hasCount: {
            type: Boolean,
            value: false
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
        // 高度
        height: {
            type: Number,
            value: 150
        },
        // 高度是否自动撑开
        autoHeight: {
            type: Boolean,
            value: false
        },
        // 自动获得焦点
        focus: {
            type: Boolean,
            value: false
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
        // 指定光标与键盘的距离
        cursorSpacing: {
            type: Number,
            value: 100
        }
    },
    observers: {
        value(val) {
            this.setData({
                count: val.length || 0
            });
        },
        readonly(val) {
            if (val) {
                this.setData({
                    disabled: true
                });
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        count: 0, // 当前字数
        hasFocus: false, // 获得焦点
        inputValue: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 获得焦点
         */
        emitFocus() {
            this.setData({
                hasFocus: true
            });
            this.triggerEvent('focus');
        },
        /**
         * 失去焦点
         */
        emitBlur() {
            this.setData({
                hasFocus: false
            });
            this.triggerEvent('blur');
        },
        /**
         * 输入处理
         * @param {object} e 事件对象
         */
        emitInput(e) {
            const value = e.detail.value;
            if (value.length > 0) {
                this.setData({
                    inputValue: value,
                    count: value.length
                });
            } else {
                this.setData({
                    inputValue: '',
                    count: 0
                });
            }
            this.triggerEvent('input', { value });
        }
    }
});
