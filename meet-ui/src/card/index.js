/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 卡片类型：image(图片) || video(视频)
        type: {
            type: String,
            value: 'left'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#fff'
        },
        // 圆角
        radius: {
            type: Number,
            value: 0
        },
        // 是否显示分割线
        hasDivider: {
            type: Boolean,
            value: false
        },
        // 图片地址
        image: {
            type: String,
            value: ''
        },
        // 图片位置：left(左图右文) || right(左文右图) || top(上图下文）|| bottom(上文下图）
        imagePosition: {
            type: String,
            value: 'left'
        },
        // 图片宽度
        imageWidth: {
            type: String,
            value: ''
        },
        // 图片宽度
        imageHeight: {
            type: String,
            value: '135'
        },
        // 图片圆角
        imageRadius: {
            type: String,
            value: '16'
        },
        // 角标
        subscript: {
            type: String,
            value: ''
        },
        // 排行榜：最大top 20
        ranking: {
            type: Number,
            value: 0
        },
        // 是否富文本
        isRich: {
            type: Boolean,
            value: false
        },
        // 重点
        keypoint: {
            type: String,
            value: ''
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 标题字号
        titleSize: {
            type: Number,
            value: 32
        },
        // 标题加粗
        titleBold: {
            type: Boolean,
            value: false
        },
        // 最大显示行数
        maxLine: {
            type: Number,
            value: 2
        },
        // 标签列表
        tags: {
            type: Array,
            value: []
        },
        // 描述
        desc: {
            type: String,
            value: ''
        }
    },
    /**
     * 数据监听
     */
    observers: {},
    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {}
});
