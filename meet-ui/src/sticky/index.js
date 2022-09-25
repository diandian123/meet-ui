/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    options: {
        // 多slot支持
        multipleSlots: true,
        addGlobalClass: true
    },
    properties: {
        // 距离顶部高度
        offsetTop: {
            type: Number,
            value: 0
        },
        // 页面滚动距离
        scrollTop: {
            type: Number,
            value: 0
        },
        // 容器支持函数类型和容器id
        container: {
            type: null,
            optionalTypes: [String],
            value: null
        },
        // 层级
        zIndex: {
            type: Number,
            value: 1000
        }
    },
    /**
     * 数据监听
     */
    observers: {
        container(value) {
            if (typeof value === 'function') {
                this.getContainerRect().then((val) => {
                    this.setData({
                        containerHeight: val.height,
                        containerWidth: val.width
                    });
                });
            }
        },
        scrollTop(value) {
            this.onScroll({ scrollTop: value });
        }
    },
    lifetimes: {
        ready() {
            const { container } = this.data;
            if (typeof container === 'string' && container.length > 0) {
                const targetId = `#${container}`;
                wx.createSelectorQuery()
                    .select(targetId)
                    .boundingClientRect((rect) => {
                        this.setData({
                            containerHeight: rect.height,
                            containerWidth: rect.width
                        });
                    })
                    .exec();
            }
        }
    },
    data: {
        height: 0, // 吸顶元素的高度
        fixedStatus: false, // 吸附状态
        containerStyle: '', // 外部容器的样式
        contentStyle: '', // 内容的样式
        containerWidth: 0, // 容器宽度
        containerHeight: 0 // 容器高度
    },
    methods: {
        /**
         * 滚动监听
         * @param {number} 滚动距离
         */
        onScroll() {
            const { container, offsetTop, containerHeight, containerWidth } = this.data;
            // 容器内部吸顶
            if (typeof container === 'function' || typeof container === 'string') {
                this.getRect(this, '.mt-sticky').then((rect) => {
                    if (offsetTop > containerHeight + rect.top) {
                        // 超出容器
                        this.setDataThrottle({
                            fixedStatus: false
                        });
                    } else if (offsetTop >= rect.top) {
                        // 容器内
                        this.setDataThrottle({
                            fixedStatus: true,
                            width: containerWidth,
                            height: rect.height
                        });
                    } else {
                        // 其他情况
                        this.setDataThrottle({ fixedStatus: false });
                    }
                });
            } else {
                // 页面内容吸顶
                this.getRect(this, '.mt-sticky').then((ele) => {
                    if (offsetTop >= ele.top) {
                        this.setDataThrottle({ fixedStatus: true, height: ele.height });
                    } else {
                        this.setDataThrottle({ fixedStatus: false });
                    }
                });
            }
        },
        /**
         * 优化setData次数
         * @param {object}
         */
        setDataThrottle(data) {
            const { fixedStatus: prevFixedStatus, zIndex } = this.data;
            const { fixedStatus, height } = data;
            const { offsetTop } = this.properties;
            // 二次状态一致
            if (prevFixedStatus === fixedStatus) {
                return;
            }
            wx.nextTick(() => {
                let containerStyle = '';
                let contentStyle = '';
                if (fixedStatus) {
                    containerStyle += `height: ${height}px;`;
                    contentStyle += `position: fixed; top: ${offsetTop}px; left: 0; right: 0; z-index: ${zIndex}; `;
                }
                this.setData({ fixedStatus, containerStyle, contentStyle });
            });
        },
        /**
         * 获取mt-sticky的位置信息
         */
        getRect(context, selector) {
            return new Promise((resolve) => {
                wx.createSelectorQuery()
                    .in(context)
                    .select(selector)
                    .boundingClientRect()
                    .exec((rect = []) => resolve(rect[0]));
            });
        },
        /**
         * 获取指定容器的位置信息
         */
        getContainerRect() {
            const containerRef = this.data.container();
            return new Promise((resolve) => containerRef.boundingClientRect(resolve).exec());
        }
    }
});
