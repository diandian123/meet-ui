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
        // 图标类型：meet（预设字体库）|| image（图片）|| custom（自定义字体库）
        type: {
            type: String,
            value: 'meet'
        },
        // 字体图标名称
        name: {
            type: String,
            value: ''
        },
        // 字体图标颜色
        color: {
            type: String,
            value: ''
        },
        // 图标尺寸
        size: {
            type: Number,
            value: 48
        },
        // 图片图标地址
        src: {
            type: String,
            value: ''
        }
    },
    /**
     * 数据监听
     */
    observers: {
        src(value) {
            if (!value) {
                this.setData({
                    type: 'image'
                });
            }
        }
    }
});
