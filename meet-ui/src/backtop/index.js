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
        // 类型：preset 预设 || custom 自定义
        type: {
            type: String,
            value: 'preset'
        },
        // 使用场景: page || scroll-view
        scene: {
            type: String,
            value: 'page'
        },
        // 距离顶部高度
        offsetTop: {
            type: Number,
            value: 300
        },
        // 距离右侧位置
        right: {
            type: Number,
            value: 36
        },
        // 距离底部位置
        bottom: {
            type: Number,
            value: 100
        },
        // 图标颜色
        iconColor: {
            type: String,
            value: '#fff'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#07c16c'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        visible: false, // 显示状态
        scrollView: '' // scroll-view对象
    },
    attached() {
        // 页面自动挂载backtop组件实例
        const pages = getCurrentPages();
        const ctx = pages[pages.length - 1];
        ctx.meetBackTop = this;
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 设置滚动
         * @param {number} scrollTop 滚动距离
         * @param {string} scrollView scroll-view对象
         */
        setBackTop(scrollTop = 0, scrollView = '') {
            // 显示返回按钮
            if (scrollTop > this.data.offsetTop) {
                this.setData({
                    visible: true,
                    scrollView
                });
            }
            // 隐藏返回按钮
            if (scrollTop < this.data.offsetTop) {
                this.setData({
                    visible: false,
                    scrollView
                });
            }
        },
        /**
         * 回到顶部
         */
        handleBackTop() {
            if (this.data.scene === 'page') {
                // 返回页面顶部
                wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 200
                });
            } else {
                // 返回scroll-view顶部
                const scrollView = this.data.scrollView;
                if (scrollView) {
                    const pages = getCurrentPages();
                    const ctx = pages[pages.length - 1];
                    ctx.setData({
                        scrollAnimation: true,
                        [scrollView]: 0
                    });
                } else {
                    this.triggerEvent('backtop', { scrollTop: 0 });
                }
            }
        }
    }
});
