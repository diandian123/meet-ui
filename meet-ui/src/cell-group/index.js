/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        multipleSlots: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    properties: {
        // 类型 list || card || avatar
        type: {
            type: String,
            value: 'list'
        },
        // 分组标题
        title: {
            type: String,
            value: ''
        },
        // 清理最后一个元素样式
        clean: {
            type: Boolean,
            value: true
        }
    },
    relations: {
        '../cell': {
            type: 'descendant'
        }
    }
});
