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
    // 定义和使用组件间关系
    relations: {
        '../collapse-group/index': {
            type: 'parent'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：preset
        type: {
            type: String,
            value: 'preset'
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 右侧箭头
        hasArrow: {
            type: Boolean,
            value: true
        },
        // 禁用
        disabled: {
            type: Boolean,
            value: false
        },
        // 是否展开
        isOpen: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 展开高度
        expandedHeight: 0
    },
    lifetimes: {
        ready() {
            const query = this.createSelectorQuery();
            query
                .select('.mt-collapse__detail')
                .boundingClientRect((res) => {
                    this.setData({
                        expandedHeight: res.height
                    });
                })
                .exec();
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 设置索引位置
        setIndex(index) {
            this.setData({
                index
            });
        },
        /**
         * 设置展开状态
         */
        setOpenStatus(flag) {
            this.setData({
                isOpen: flag
            });
        },
        /**
         * 展开处理
         */
        handleExpand: function () {
            if (this.data.disabled) {
                return;
            }
            const isOpen = this.data.isOpen;
            const parentNodes = this.getRelationNodes('../collapse-group/index');
            if (parentNodes.length > 0) {
                parentNodes.map((v, i) => {
                    parentNodes[i].handleChange(this.data.index);
                });
            } else {
                this.setData({
                    isOpen: !isOpen
                });
                this.triggerEvent('change', { isOpen: !isOpen });
            }
        }
    }
});
