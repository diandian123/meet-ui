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
        // 是否有更多内容
        hasMore: {
            type: Boolean,
            value: true
        },
        // loading颜色
        loadingColor: {
            type: String,
            value: '#07c16c'
        },
        // loading文本
        loadingText: {
            type: String,
            value: ''
        },
        // 线条类型 solid || dotted || dashed
        dividerType: {
            type: String,
            value: 'dashed'
        },
        // 分割线颜色
        dividerLineColor: {
            type: String,
            value: ''
        },
        // 分割文本
        dividerText: {
            type: String,
            value: '到底了哦'
        },
        // 分割文本颜色
        dividerTextColor: {
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
            value: 50
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
