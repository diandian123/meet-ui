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
        // 是否选中
        checked: {
            type: Boolean,
            value: false
        },
        // 选中颜色
        checkedColor: {
            type: String,
            value: '#07c16c'
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 是否异步切换
        async: {
            type: Boolean,
            value: false
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handleToggle() {
            if (this.data.disabled) {
                return;
            }
            const checked = !this.data.checked;
            if (!this.data.async) {
                this.setData({
                    checked
                });
            }
            this.triggerEvent('change', { checked });
        }
    }
});
