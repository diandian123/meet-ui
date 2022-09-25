/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 搜索类型：normal || trigger
        type: {
            type: String,
            value: 'normal'
        },
        // 输入框内容
        value: {
            type: String,
            optionalTypes: [null],
            value: ''
        },
        // 占位符
        placeholder: {
            type: String,
            value: '请输入关键字'
        },
        // 自动获得焦点
        focus: {
            type: Boolean,
            value: false
        },
        // 右侧按钮文字
        btnText: {
            type: String,
            value: '搜索'
        },
        // 输入最大内容： -1为不限
        maxLength: {
            type: Number,
            value: -1
        },
        // 自动搜索函数
        autoSearch: {
            type: null, // type: Function 等价 null
            value: null
        },
        // 节流设置
        throttle: {
            type: Number,
            value: 500
        }
    },
    /**
     * 数据监听
     */
    observers: {
        type(val) {
            if (val === 'simple') {
                this.setData({
                    labelText: '搜索'
                });
            }
        },
        autoSearch(val) {
            if (typeof val === 'function') {
                this.setData({
                    btnText: '取消'
                });
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        actived: false, // 搜索激活
        showClear: false // 显示清除按钮
    },
    lastSearch: Date.now(),
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 激活输入
         */
        handleActive() {
            this.setData({
                focus: true,
                actived: true
            });
        },
        /**
         * 获得焦点
         */
        handleFocus() {
            this.setData({
                actived: true
            });
            if (this.data.value?.length > 0) {
                this.setData({
                    showClear: true
                });
            }
        },
        /**
         * 失去焦点
         */
        handleBlur() {
            if (this.data.type === 'trigger' && this.data.value) {
                return;
            } else {
                this.setData({
                    actived: false,
                    showClear: false
                });
            }
        },
        /**
         * 清除图标
         */
        handleClear() {
            // ios无法清除输入值；将设置成""改为null
            this.setData(
                {
                    value: null,
                    focus: false,
                    actived: false,
                    showClear: false
                },
                () => {
                    this.triggerEvent('clear', { value: '' });
                }
            );
            if (typeof this.data.autoSearch === 'function') {
                this.autoSearch();
            }
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
            // 自动搜索提示
            if (typeof this.data.autoSearch === 'function') {
                this.autoSearch();
            }
        },
        /**
         * 点击键盘搜索按钮时触发
         */
        handleConfirm(e) {
            const value = e.detail.value;
            this.triggerEvent('confirm', { value });
        },
        /**
         * 搜索与节流
         */
        autoSearch() {
            if (Date.now() - this.lastSearch < this.data.throttle) {
                return;
            }
            this.lastSearch = Date.now();
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => {
                this.data.autoSearch(this.data.value);
            }, this.data.throttle);
        },
        /**
         * 按钮操作
         */
        handlSearch() {
            if (typeof this.data.autoSearch === 'function') {
                this.handleCancel();
            } else {
                this.triggerEvent('search', { value: this.data.value });
            }
        },
        /**
         * 取消按钮
         */
        handleCancel() {
            this.setData({
                value: '',
                actived: false,
                showClear: false
            });
            this.timerId && clearTimeout(this.timerId);
            if (typeof this.data.autoSearch === 'function') {
                this.autoSearch();
            }
        }
    }
});
