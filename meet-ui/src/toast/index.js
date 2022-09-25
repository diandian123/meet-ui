/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
const DEFAULT_PROPS = {
    visible: true, // 显示状态：true || false
    mask: false, // 是否显示透明蒙层，防止触摸穿透
    type: 'custom', // 提示类型：custom（自定义）|| success(成功) || fail（失败）|| warning(警告) || loading(加载中)
    iconfont: '', // 字体图标
    iconsize: 52, // 字体图标大小
    icon: '', // 图标：success || fail || alert
    message: '', // 提示信息
    duration: 1500, // 展示时长(ms)，值为 -1 时，toast 不会消失
    direction: 'row', // 显示方式: row(水平) || column(纵向)
    onClose: null // 关闭提示执行回调
};
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared' // 自定义组件 wxss 中指定的样式也会影响其他自定义组件
    },
    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        show(props) {
            const options = Object.assign({}, DEFAULT_PROPS, props);
            switch (options.type) {
                case 'success':
                    options.iconfont = 'mt-icon--success';
                    options.direction = options.direction || 'row';
                    break;
                case 'fail':
                    options.iconfont = 'mt-icon--error';
                    options.direction = options.direction || 'row';
                    options.duration = 2500;
                    break;
                case 'warning':
                    options.iconfont = 'mt-icon--warning';
                    options.direction = options.direction || 'row';
                    options.duration = 2500;
                    break;
                case 'loading':
                    options.icon = options.icon ? options.icon : 'loading';
                    options.direction = options.direction || 'row';
                    options.duration = options.duration === -1 ? options.duration : 10000;
                    break;
                default:
                    options.icon = options.icon || '';
            }
            if (options.direction === 'column') {
                options.iconsize = 80;
            }
            if (this.timer) {
                // 结束上次提示
                this.hide();
            }
            this.setData(
                {
                    ...options
                },
                () => {
                    if (this.data.duration > 0) {
                        this.timer = setTimeout(() => {
                            this.hide();
                        }, this.data.duration);
                    }
                }
            );
        },
        hide() {
            this.clearTimer();
            this.setData({
                visible: false
            });
            if (typeof this.data.onClose === 'function') {
                const pages = getCurrentPages();
                const ctx = pages[pages.length - 1];
                this.data.onClose.bind(ctx)();
            }
        },
        clearTimer() {
            this.timer = this.timer ? clearTimeout(this.timer) : null;
        },
        /**
         * 阻止冒泡滚动
         */
        stopEvent() {}
    }
});
