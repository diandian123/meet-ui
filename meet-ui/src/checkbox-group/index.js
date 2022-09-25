/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    relations: {
        '../checkbox': {
            type: 'child'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 选项标题
        title: {
            type: String,
            value: ''
        },
        // 类型：check(勾选)|| square(框选) || button(按钮)
        type: {
            type: String,
            value: 'check'
        },
        // 选项显示列数
        column: {
            type: Number,
            value: 1
        },
        // 选项数据
        items: {
            type: Array,
            value: []
        },
        // 选中颜色
        checkedColor: {
            type: String,
            value: '#07c16c'
        },
        // 选项排列方式:  row || column
        direction: {
            type: String,
            value: 'column'
        },
        // 列间距
        columnGap: {
            type: Number,
            value: 30
        },
        // 行间距
        rowGap: {
            type: Number,
            value: 30
        },
        // 是否显示分割线
        hasDivider: {
            type: String,
            optionalTypes: [Boolean],
            value: 'true'
        },
        // 选项图标位置：left || right
        iconPosition: {
            type: String,
            value: 'left'
        },
        // 最大可选项: -1代表不限
        maxCount: {
            type: Number,
            value: -1
        }
    },
    /**
     * 数据监听
     */
    observers: {},
    data: {},
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * checkbox选择事件处理
         * @param {object} e event 对象
         */
        checkboxChange(e) {
            const items = this.data.items;
            const maxCount = this.data.maxCount;
            const dataset = e.currentTarget.dataset;
            const detail = e.detail;
            const index = dataset.index;
            const checked = detail.checked;
            if (checked && maxCount !== -1) {
                if (this.checkedNum(items) >= maxCount) {
                    this.triggerEvent('error', { maxCount });
                    return;
                }
            }
            this.setData(
                {
                    [`items[${index}].checked`]: checked
                },
                () => {
                    this.getCheckedValue(this.data.items);
                }
            );
        },
        /**
         * 已选中数
         */
        checkedNum(items) {
            const checked = items.filter((item) => item.checked);
            return checked.length;
        },
        /**
         * 获取选中项
         */
        getCheckedValue(items) {
            const checked = items.filter((item) => item.checked);
            const value = checked.map((item) => item.value);
            this.triggerEvent('change', { value, checked });
        }
    }
});
