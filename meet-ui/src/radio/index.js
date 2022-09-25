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
    relations: {
        '../radio-group': {
            type: 'parent'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：dot(圆点) || check(勾选) || button(按钮)
        type: {
            type: String,
            value: 'dot'
        },
        // 选项值
        value: {
            type: String,
            value: ''
        },
        // 选项显示内容
        label: {
            type: String,
            value: ''
        },
        // 选项图标位置: left || right
        iconPosition: {
            type: String,
            value: 'left'
        },
        // 选中状态：false（未选中）|| true（选中）
        checked: {
            type: Boolean,
            value: false
        },
        // 选中颜色
        checkedColor: {
            type: String,
            value: '#07c16c'
        },
        // 禁用状态
        disabled: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * redio单击事件
         */
        handleToggle() {
            if (this.data.disabled || this.checked) {
                return;
            }
            this.triggerEvent('change', { checked: true, value: this.data.value });
        }
    }
});
