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
        // 类型：normal（正常） || dot（小红点）
        type: {
            type: String,
            value: 'dot'
        },
        // 内容
        value: {
            type: String,
            optionalTypes: [Number],
            value: ''
        },
        // 阈值，超出显示 +
        maxCount: {
            type: Number,
            value: 99
        },
        // 角标位置 top（右上角） || center（居中）
        position: {
            type: String,
            value: 'center'
        }
    },
    /**
     * 数据监听
     */
    observers: {
        value(val) {
            if (val === '') {
                this.setData({
                    type: 'dot'
                });
            } else {
                const content = Number(val);
                if (!isNaN(content) && content > this.data.maxCount) {
                    this.setData({
                        type: 'normal',
                        content: `${this.data.maxCount}+`
                    });
                } else {
                    this.setData({
                        type: 'normal',
                        content: val
                    });
                }
            }
        }
    }
});
