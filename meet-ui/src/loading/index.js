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
        // 场景：page（全局）|| local（局部）|| auto（自动）
        scene: {
            type: String,
            value: 'local'
        },
        // 类型：circle(圆型) || line(线条) || image(图片) || launch
        type: {
            type: String,
            value: 'circle'
        },
        // 高度：-1表示不限
        height: {
            type: Number,
            value: -1
        },
        // 动画图标
        icon: {
            type: String,
            value: ''
        },
        // 提示信息
        text: {
            type: String,
            value: ''
        },
        // 排列方式: row(横向) || column（纵向）
        direction: {
            type: String,
            value: 'row'
        },
        // 颜色
        color: {
            type: String,
            value: '#07c16c'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: 'transparent'
        },
        // 延迟显示时间(ms)
        delay: {
            type: Number,
            value: 600
        }
    },
    /**
     * 数据监听
     */
    observers: {
        scene(val) {
            if (val === 'page') {
                this.setData({
                    direction: 'column',
                    text: '正在加载'
                });
            }
        },
        icon(val) {
            if (val.length > 0) {
                this.setData({
                    type: 'image'
                });
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {},
    /**
     * 组件的方法列表
     */
    methods: {}
});
