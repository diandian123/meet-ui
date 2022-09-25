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
        // 边框颜色
        bdColor: {
            type: String,
            value: 'transparent'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#f5f6f8'
        },
        // 文本颜色
        textColor: {
            type: String,
            value: '#808080'
        },
        // 文本大小
        textSize: {
            type: Number,
            value: 22
        },
        // 文本间距
        padding: {
            type: String,
            value: '10rpx'
        },
        // 圆角
        radius: {
            type: Number,
            value: 8
        },
        // 最大显示宽度，-1为不限制
        maxWidth: {
            type: Number,
            value: -1
        }
    }
});
