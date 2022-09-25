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
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型：normal || picker || actionsheet || drawer
        type: {
            type: String,
            value: 'normal'
        },
        // 显示位置
        position: {
            type: String,
            value: 'bottom'
        },
        // 显示状态：true || false
        visible: {
            type: Boolean,
            value: false
        },
        // 是否显示遮罩层：true || false
        mask: {
            type: Boolean,
            value: true
        },
        // 点击mask是否关闭：true || false
        maskClosable: {
            type: Boolean,
            value: true
        },
        // 宽度
        width: {
            type: String,
            value: '100%'
        },
        // 高度
        height: {
            type: String,
            value: 'auto'
        },
        // 滚动区最大高度
        maxHeight: {
            type: String,
            value: '75vh'
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 层级
        zIndex: {
            type: Number,
            value: 9000
        },
        // 是否开启手势关闭
        hasGesture: {
            type: Boolean,
            value: false
        },
        // 是否有动画效果
        hasAnimation: {
            type: Boolean,
            value: true
        },
        // 是否有圆角
        hasRadius: {
            type: Boolean,
            value: true
        },
        // 顶部关闭图标
        hasTopClose: {
            type: Boolean,
            value: true
        },
        // 底部关闭图标
        hasBottomClose: {
            type: Boolean,
            value: false
        },
        maskColor: {
            type: String,
            value: 'rgba(0, 0, 0, 0.5)'
        }
    },
    observers: {
        type(val) {
            if (val === 'drawer') {
                this.setData({
                    hasRadius: false,
                    hasTopClose: false
                });
            }
        },
        position(val) {
            if (val === 'left' || val === 'right') {
                this.setData({
                    width: this.properties.width === '100%' ? '82%' : this.properties.width,
                    height: '100%',
                    maxHeight: '100%'
                });
            }
        },
        visible(val) {
            // 切换动画样式
            if (this.enableAnimation) {
                this.setData({
                    toggleAnimation: val ? 'show' : 'hidden'
                });
            }
        }
    },
    /**
     * 组件内置属性
     */
    data: {
        toggleAnimation: 'out', // 动画过程弹层状态
        noMove: false, // 是否禁止移动
        hiddenPop: false, // 弹层隐藏
        popStyle: '', // 弹层附加样式
        watchMask: false // 是否监听遮罩层touch事件 左右滑动需要监听mask
    },
    lifetimes: {
        attached() {
            const { hasGesture, position } = this.data;
            this.i = 0;
            this.scrollTop = 0;
            // 避免组件初始化产生动画
            this.enableAnimation = true;
            if (hasGesture && (position === 'right' || position === 'left')) {
                this.setData({ watchMask: true });
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        handleMask() {
            this.handleClose();
        },
        handleClose() {
            this.triggerEvent('close');
        },
        /**
         * 阻止冒泡滚动
         */
        stopEvent() {},
        /**
         * 滑动开始
         * @param {object} e
         */
        onTouchStart(e) {
            this.setData({
                startY: e.touches[0].clientY,
                startX: e.touches[0].clientX
            });
        },
        onTouchMove(e) {
            const { startY, position, startX } = this.data;
            let popStyle = '';
            const deltaX = e.touches[0].clientX - startX; // 水平滑动距离
            const deltaY = e.touches[0].clientY - startY; // 垂直滑动距离
            const judgeMove = this.judgeMove(deltaX, deltaY);
            if (judgeMove && position === 'bottom') {
                // 底部弹层
                popStyle = `${position}:${-deltaY}px`;
                this.judgeBack(deltaY, popStyle);
            } else if (judgeMove && position === 'top') {
                // 顶部弹层
                popStyle = `${position}:${deltaY}px`;
                this.judgeBack(deltaY, popStyle);
            } else if (judgeMove && position === 'left') {
                // 左侧弹层
                popStyle = `${position}:${deltaX}px`;
                this.judgeBack(deltaX, popStyle);
            } else if (judgeMove && position === 'right') {
                // 右侧弹层
                popStyle = `${position}:${-deltaX}px`;
                this.judgeBack(deltaX, popStyle);
            }
        },
        /**
         * 滑动结束
         */
        onTouchEnd(e) {
            const { startY, hiddenPop, position, startX } = this.data;
            const distanceY = e.changedTouches[0].clientY - startY;
            const distanceX = e.changedTouches[0].clientX - startX;
            const judgeMove = this.judgeMove(distanceX, distanceY);
            this.i = 0;
            if (judgeMove && hiddenPop) {
                this.handleMask();
                // 关闭后, popup回到原位置
                setTimeout(() => {
                    this.setData({
                        popStyle: `${position}: 0;`
                    });
                }, 400);
            } else {
                // 回到原位
                this.setData({
                    popStyle: `${position}: 0;`,
                    hiddenPop: false,
                    noMove: false
                });
            }
        },
        /**
         * 判断是否返回原位
         * @param {*} distant 移动的距离
         * @param {*} popStyle pop样式
         */
        judgeBack(distant, popStyle) {
            // 移动小于100px则回到原处，不隐藏
            if (Math.abs(distant) < 100) {
                this.setData({
                    popStyle,
                    hiddenPop: false
                });
            } else {
                this.setData({
                    popStyle,
                    hiddenPop: true
                });
            }
        },
        /**
         * 判断移动方向是否正确
         * @param {*} distanceX 横向移动距离
         * @param {*} distanceY 纵向移动距离
         */
        judgeMove(distanceX, distanceY) {
            const { position, noMove } = this.data;
            // 禁止移动 直接返回
            if (noMove) {
                return false;
            }
            // 上下滑动改为判断scrollTop是否为0
            if (distanceY > 0 && position === 'bottom' && this.scrollTop === 0) {
                // 底部弹出 向下拉隐藏
                return true;
            } else if (distanceY < 0 && position === 'top' && this.scrollTop === 0) {
                // 顶部弹出 向上推隐藏
                return true;
            }
            if (distanceX > 0 && position === 'right') {
                // 处理右滑误差
                this.i++;
                if (Math.abs(distanceY) > 10 && this.i < 2) {
                    this.setData({
                        noMove: true
                    });
                    return false;
                }
                // 右侧弹出 向右滑动隐藏
                return true;
            } else if (distanceX < 0 && position === 'left') {
                // 处理左滑误差
                this.i++;
                if (Math.abs(distanceY) > 10 && this.i < 2) {
                    this.setData({
                        noMove: true
                    });
                    return false;
                }
                // 左侧弹出 向左滑动隐藏
                return true;
            } else {
                return false;
            }
        },
        /**
         * 触底函数
         */
        handleLoadmore() {
            this.triggerEvent('loadMore');
        },
        /**
         * 滚动监听
         */
        handleScroll(e) {
            this.scrollTop = e.detail.scrollTop;
        },
        /**
         * 动画结束的监听
         */
        animationEnd() {
            this.setData({
                toggleAnimation: this.data.visible ? 'in' : 'out'
            });
        }
    }
});
