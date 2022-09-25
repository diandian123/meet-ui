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
        // 图像地址
        src: {
            type: String,
            value: ''
        },
        // 圆角
        radius: {
            type: String,
            value: '50%'
        },
        // 预设尺寸: l || m || s || xs
        size: {
            type: String,
            value: 'l'
        },
        // 宽度
        width: {
            type: Number,
            value: 100
        },
        // 高度
        height: {
            type: Number,
            value: 100
        },
        // 描边
        bdColor: {
            type: String,
            value: ''
        },
        // 是否有阴影
        hasShadow: {
            type: Boolean,
            value: false
        },
        // 标识: qq || wx || V || role
        mark: {
            type: String,
            value: ''
        },
        // 标识内容
        markText: {
            type: String,
            value: '队长'
        },
        // 懒加载
        lazyLoad: {
            type: Boolean,
            value: true
        }
    },
    data: {
        imgRadius: '50%'
    },
    /**
     * 数据监听
     */
    observers: {
        size(value) {
            switch (value) {
                case 'l':
                    this.setData({
                        width: 100,
                        height: 100
                    });
                    break;
                case 'm':
                    this.setData({
                        width: 74,
                        height: 74
                    });
                    break;
                case 's':
                    this.setData({
                        width: 48,
                        height: 48
                    });
                    break;
                case 'xs':
                    this.setData({
                        width: 36,
                        height: 36
                    });
                    break;
            }
        },
        radius(value) {
            if (isNaN(Number(value))) {
                this.setData({
                    imgRadius: '50%'
                });
            } else {
                this.setData({
                    imgRadius: `${value}rpx`
                });
            }
        }
    }
});
