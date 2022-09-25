/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        addGlobalClass: true
    },
    // 定义和使用组件间关系
    relations: {
        '../collapse/index': {
            type: 'child'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 手风琴模式
        accordion: {
            type: Boolean,
            value: false
        },
        // 默认展开项
        current: {
            type: Number,
            optionalTypes: [Array, String],
            value: -1
        }
    },
    observers: {
        current(val) {
            if (val !== -1) {
                this.handleStatus();
            }
        }
    },
    /**
     * 组件的初始数据
     */
    data: {},
    ready() {
        this.handleStatus(true);
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 处理显示状态
         */
        handleStatus(flag) {
            let current = this.data.current;
            const nodes = this.getRelationNodes('../collapse/index');
            nodes.map((v, i) => {
                if (current !== -1) {
                    let status = false;
                    if (this.data.accordion) {
                        // 手风琴模式
                        if (typeof current === 'object') {
                            current = current[current.length - 1];
                        }
                        status = parseInt(current) === i ? true : false;
                    } else {
                        // 非手风琴模式
                        if (typeof current === 'string' || typeof current === 'number') {
                            current = [parseInt(current)];
                        }
                        status = current.indexOf(i) > -1 ? true : false;
                    }
                    nodes[i].setOpenStatus(status);
                }
                flag ? nodes[i].setIndex(i) : '';
            });
        },
        /**
         * 处理点击
         */
        handleChange(index) {
            let current = this.data.current;
            const accordion = this.data.accordion;
            if (accordion) {
                // 手风琴模式
                if (parseInt(current) === index) {
                    current = '';
                } else {
                    current = index;
                }
            } else {
                // 非手风琴模式
                if (current === -1) {
                    current = [];
                }
                if (typeof current === 'string' || typeof current === 'number') {
                    current = [parseInt(current)];
                }
                if (current.indexOf(index) > -1) {
                    current.splice(current.indexOf(index), 1);
                } else {
                    current.push(index);
                }
            }
            this.setData({
                current: current
            });
            this.triggerEvent('change', { current });
        }
    }
});
