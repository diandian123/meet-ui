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
        // 类型：preset 预设 || splash 闪屏 || fullpage 整屏滑动 || card 卡片类型，卡片类型不支持title
        type: {
            type: String,
            value: 'preset'
        },
        // 宽度
        width: {
            type: String,
            value: '750'
        },
        // 高度
        height: {
            type: String,
            value: '270'
        },
        // 圆角
        radius: {
            type: Number,
            value: 16
        },
        // 数据
        items: {
            type: Array,
            value: []
        },
        // 是否显示标题
        hasTitle: {
            type: Boolean,
            value: false
        },
        // 是否自动切换
        autoplay: {
            type: Boolean,
            value: true
        },
        // 当前显示位置index
        current: {
            type: Number,
            value: 0
        },
        // 自动切换时间间隔
        interval: {
            type: Number,
            value: 3000
        },
        // 滑动动画时长
        duration: {
            type: Number,
            value: 500
        },
        // 指定 swiper 切换缓动动画类型
        easingFunction: {
            type: String,
            value: 'default'
        },
        // 是否采用衔接滑动
        circular: {
            type: Boolean,
            value: true
        },
        // 滑动方向是否为纵向
        vertical: {
            type: Boolean,
            value: false
        },
        // 是否需要指示点
        indicatorDots: {
            type: Boolean,
            value: true
        },
        // 指示点颜色
        indicatorColor: {
            type: String,
            value: 'rgba(255,255,255,0.6)'
        },
        // 当前选中的指示点颜色
        indicatorActiveColor: {
            type: String,
            value: 'rgba(255,255,255)'
        }
    },
    /**
     * 数据监听
     */
    observers: {
        current(value) {
            this.setData({
                activeIndex: value
            });
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        activeIndex: 0 // 当前位置
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 点击操作
         * @param {*} e
         */
        handleTap(e) {
            const index = e.currentTarget.dataset.index;
            const items = this.data.items;
            const url = items[index].url;
            if (url) {
                wx.navigateTo({
                    url
                });
            }
            this.triggerEvent('click', { current: index });
        },
        /**
         * current 改变时会触发
         * @param {*} e
         */
        handleChange(e) {
            this.setData({
                activeIndex: e.detail.current
            });
            this.triggerEvent('change', {
                current: e.detail.current
            });
        },
        /**
         * 动画结束时会触发
         * @param {*} e
         */
        handleAnimationfinish(e) {
            this.triggerEvent('animationfinish', {
                current: e.detail.current
            });
        },
        /**
         * swiper-item 的位置发生改变时会触发
         * @param {*} e
         */
        handleTransition(e) {
            this.triggerEvent('transition', {
                current: e.detail.current
            });
        }
    }
});
