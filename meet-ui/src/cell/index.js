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
    properties: {
        // 类型 normal（无分隔线）|| list（带分隔线） || card（卡片）
        type: {
            type: String,
            value: 'normal'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#fff'
        },
        // 卡片圆角
        radius: {
            type: String,
            value: '0'
        },
        // 左侧图标地址
        icon: {
            type: String,
            value: ''
        },
        // 标题内容
        title: {
            type: String,
            value: ''
        },
        // 描述信息
        desc: {
            type: String,
            value: ''
        },
        // 右侧说明
        rightDesc: {
            type: String,
            value: ''
        },
        // 扩展说明
        extDesc: {
            type: String,
            value: ''
        },
        // 是否显示箭头
        hasArrow: {
            type: String,
            optionalTypes: [Boolean],
            value: 'false'
        },
        // 点击跳转地址
        url: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../form/form': {
            type: 'ancestor'
        },
        '../cell-group': {
            type: 'ancestor'
        }
    },
    /**
     * 数据监听
     */
    observers: {},
    methods: {
        // 点击跳转
        handleTap() {
            if (this.data.url) {
                wx.navigateTo({
                    url: this.data.url
                });
            }
        }
    }
});
