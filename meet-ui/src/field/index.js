/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型: text || input || textarea || switch || checkbox || radio || picker || link(跳转页面) || image-picker
        type: {
            type: String,
            value: ''
        },
        // 排列方式: row(横向) || column（纵向）
        direction: {
            type: String,
            value: 'row'
        },
        // 字段名称
        label: {
            type: String,
            value: ''
        },
        // 当direction = row时，可设置字段名称宽度
        labelWidth: {
            type: Number,
            value: 180
        },
        // 是否必填项
        required: {
            type: Boolean,
            value: false
        },
        // 提示信息
        tips: {
            type: String,
            value: ''
        },
        // 错误信息
        error: {
            type: String,
            value: ''
        },
        // 是否有边距
        hasGap: {
            type: Boolean,
            value: false
        },
        // 是否有分割线
        hasDivider: {
            type: Boolean,
            value: false
        },
        // 输入内容对齐方式 left || right
        position: {
            type: String,
            value: 'left'
        }
    },
    observers: {}
});
