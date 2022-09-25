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
        '../checkbox-group': {
            type: 'parent'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：check(勾选)|| square(框选) || button(按钮)
        type: {
            type: String,
            value: 'check'
        },
        // 选项值
        value: {
            type: String,
            value: ''
        },
        // 选项内容
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
     * 组件的方法列表
     */
    methods: {
        /**
         * checkbox点击事件
         */
        handleToggle() {
            const checked = !this.data.checked;
            if (this.data.disabled) {
                return;
            }
            this.triggerEvent('change', { checked, value: this.data.value });
        }
    }
});
