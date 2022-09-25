/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        // 分隔类型: solid || dotted || dashed
        type: {
            type: String,
            value: 'solid'
        },
        // 线条颜色
        lineColor: {
            type: String,
            value: ''
        },
        // 文本颜色
        textColor: {
            type: String,
            value: ''
        },
        // 文本大小
        textSize: {
            type: String,
            value: ''
        },
        // 左右间距
        rowGap: {
            type: Number,
            value: 36
        },
        // 上下间距
        columnGap: {
            type: Number,
            value: 60
        }
    }
});
