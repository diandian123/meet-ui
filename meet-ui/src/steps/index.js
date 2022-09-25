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
        // 类型 number || icon || image
        type: {
            type: String,
            value: 'number'
        },
        // 方向 row || column
        direction: {
            type: String,
            value: 'row'
        },
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 完成后的线段类型  solid || dashed
        doneLine: {
            type: String,
            value: 'solid'
        },
        // 未完成的线段类型  solid || dashed
        todoLine: {
            type: String,
            value: 'dashed'
        },
        // 已完成的连线颜色
        doneLineColor: {
            type: String,
            value: '#d8d8d8'
        },
        // 未开始的连线颜色
        todoLineColor: {
            type: String,
            value: '#d8d8d8'
        },
        // 完成状态icon
        doneIcon: {
            type: String,
            value: 'mt-icon--success'
        },
        // 完成状态icon颜色
        doneColor: {
            type: String,
            value: '#07c16c'
        },
        // 进行中状态icon
        doingIcon: {
            type: String,
            value: 'mt-icon--radio-b'
        },
        // 进行中状态icon颜色
        doingColor: {
            type: String,
            value: '#fec51d'
        },
        // 未完成状态icon
        todoIcon: {
            type: String,
            value: 'mt-icon--unselected'
        },
        // 未完成状态icon颜色
        todoColor: {
            type: String,
            value: '#cccccc'
        },
        // 错误状态icon
        errorIcon: {
            type: String,
            value: 'mt-icon--error'
        },
        // 错误状态icon颜色
        errorColor: {
            type: String,
            value: '#fa5151'
        },
        // 当前步骤
        current: {
            type: Number,
            value: 1
        },
        // 标题颜色
        titleColor: {
            type: String,
            value: '#333333'
        },
        // 描述信息颜色
        descColor: {
            type: String,
            value: '#808080'
        }
    }
});
