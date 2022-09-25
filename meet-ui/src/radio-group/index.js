/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    relations: {
        '../radio': {
            type: 'child'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 单选组标题
        title: {
            type: String,
            value: ''
        },
        // 类型：check(勾选)|| dot(圆点) || button(按钮)
        type: {
            type: String,
            value: 'dot'
        },
        // 每行显示列数
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
        // 图标显示位置：left || right
        iconPosition: {
            type: String,
            value: 'left'
        },
        // 是否显示分割线
        hasDivider: {
            type: Boolean,
            value: true
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 单选事件处理
         * @param {object} e event 对象
         */
        radioChange(e) {
            const { index } = e.currentTarget.dataset;
            const items = this.data.items;
            items.forEach((item, i) => {
                if (i === index) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
            this.setData(
                {
                    items: items
                },
                () => {
                    this.triggerEvent('change', { index, item: items[index] });
                }
            );
        }
    }
});
