/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
Component({
    /**
     * 组件的属性列表
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        // 弹出位置: left || right || top || bottom || bottomRight || autoLR || autoTB
        placement: {
            type: String,
            value: 'autoTB'
        },
        // 数据项
        items: {
            type: Array,
            value: []
        },
        // 文本颜色
        textColor: {
            type: String,
            value: '#fff'
        },
        // 背景颜色
        bgColor: {
            type: String,
            value: '#333333'
        },
        // 蒙层颜色
        maskColor: {
            type: String,
            value: 'transparent'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        visible: false,
        triangleStyle: '',
        labelStyle: '',
        trianglePosition: 'bottom',
        triangleColor: '',
        comPlacement: ''
    },
    observers: {
        placement(val) {
            this.setData({ comPlacement: val });
        },
        comPlacement(val) {
            const { bgColor } = this.data;
            if (val.indexOf('top') > -1) {
                this.setData({
                    trianglePosition: 'top',
                    triangleColor: `border-top-color:${bgColor}`
                });
            } else if (val.indexOf('left') > -1) {
                this.setData({
                    trianglePosition: 'left',
                    triangleColor: `border-left-color:${bgColor}`
                });
            } else if (val.indexOf('right') > -1) {
                this.setData({
                    trianglePosition: 'right',
                    triangleColor: `border-right-color:${bgColor}`
                });
            } else {
                this.setData({
                    trianglePosition: 'bottom',
                    triangleColor: `border-bottom-color:${bgColor}`
                });
            }
        },
        bgColor(value) {
            const { trianglePosition } = this.data;
            this.setData({
                triangleColor: `border-${trianglePosition}-color:${value}`
            });
        }
    },
    lifetimes: {
        attached() {
            this.windowHeight = wx.getSystemInfoSync().windowHeight;
            this.windowWidth = wx.getSystemInfoSync().windowWidth;
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onClick(e, targetId) {
            const { placement } = this.data;
            const id = targetId || '#targetId';
            const query = targetId?.length > 0 ? wx.createSelectorQuery() : this.createSelectorQuery();
            query.select(id).boundingClientRect();
            query.in(this).select('.mt-popover__label').boundingClientRect();
            query.in(this).select('.mt-popover__triangle').boundingClientRect();
            query.exec((rects) => {
                if (placement === 'autoTB') {
                    this.autoTBSetPosition(rects);
                } else if (placement === 'autoLR') {
                    this.autoLRSetPosition(rects);
                } else {
                    this.setPosition(rects);
                }
            });
        },
        /**
         * 设置气泡框的弹出位置
         * @param {*} rect 目标元素的信息
         */
        setPosition(rect) {
            const { left, bottom, top, right, width } = rect[0]; // 点击的图标信息
            const labelWidth = rect[1].width; // 内容的宽度
            const labelHeight = rect[1].height; // 内容的高度
            const triangleWidth = rect[2].width; // 三角形的宽度
            const triangleHeight = rect[2].height; // 三角形的高度
            const { comPlacement } = this.data; // 弹出位置
            let translateX = `${width / 2}px`;
            if (width < 40) {
                // 左(右)下方（上方）显示时 内容区域和点击图标为左(右)对齐。当图标区域为比较小时 不是很美观，单独处理一下
                translateX = `${width / 2 + triangleWidth / 2}px`;
            }
            switch (comPlacement) {
                // 顶部弹出
                case 'top':
                    this.setData({
                        triangleStyle: `left:${left + width / 2 - triangleWidth / 2}px;top:${top - triangleHeight}px`,
                        labelStyle: `left:${left + width / 2}px;top:${
                            +top - labelHeight - triangleHeight
                        }px;transform: translateX(-50%);`,
                        visible: true
                    });
                    return;
                // 右上角
                case 'topRight':
                    this.setData({
                        triangleStyle: `left:${left + width / 2 - triangleWidth / 2}px;top:${top - triangleHeight}px`,
                        labelStyle: `left:${left + width / 2 - labelWidth}px;top:${
                            top - labelHeight - triangleHeight
                        }px;transform: translateX(${translateX});`,
                        visible: true
                    });
                    return;
                // 左上角
                case 'topLeft':
                    this.setData({
                        triangleStyle: `left:${left + width / 2 - triangleWidth / 2}px;top:${top - triangleHeight}px`,
                        labelStyle: `left:${left + width / 2}px;top:${
                            top - labelHeight - triangleHeight
                        }px;transform: translateX(-${translateX});`,
                        visible: true
                    });
                    return;
                // 靠右弹出
                case 'right':
                    this.setData({
                        triangleStyle: `left:${right}px;top:${top + (rect[0].height - triangleHeight) / 2}px;`,
                        labelStyle: `left:${right + triangleWidth}px;top:${
                            top + rect[0].height / 2 - labelHeight / 2
                        }px;`,
                        visible: true
                    });
                    return;
                case 'rightBottom':
                    this.setData({
                        triangleStyle: `left:${right}px;top:${top + (rect[0].height - triangleHeight) / 2}px;`,
                        labelStyle: `left:${right + triangleWidth}px;top:${top - labelHeight / 2 + 32}px;`,
                        visible: true
                    });
                    return;
                case 'rightTop':
                    this.setData({
                        triangleStyle: `left:${right}px;top:${top + (rect[0].height - triangleHeight) / 2}px;`,
                        labelStyle: `left:${right + triangleWidth}px;top:${top - labelHeight / 2 - 8}px;`,
                        visible: true
                    });
                    return;
                case 'bottom':
                    // 底部居中
                    this.setData({
                        triangleStyle: `left:${left + width / 2 - triangleWidth / 2}px;top:${bottom}px`,
                        labelStyle: `left:${left + width / 2}px;top:${
                            bottom + triangleHeight
                        }px;transform: translateX(-50%);`,
                        visible: true
                    });
                    return;
                case 'bottomLeft':
                    // 左下角
                    this.setData({
                        triangleStyle: `left:${left + width / 2 - triangleWidth / 2}px;top:${bottom}px`,
                        labelStyle: `left:${left + width / 2}px;top:${
                            bottom + triangleHeight
                        }px;transform: translateX(-${translateX});`,
                        visible: true
                    });
                    return;
                case 'bottomRight':
                    // 右下角
                    this.setData({
                        triangleStyle: `left:${left + width / 2 - triangleWidth / 2}px;top:${bottom}px`,
                        labelStyle: `left:${left + width / 2 - labelWidth}px; top:${
                            bottom + triangleHeight
                        }px;transform: translateX(${translateX});`,
                        visible: true
                    });
                    return;
                // 靠左弹出
                case 'left':
                    this.setData({
                        triangleStyle: `left:${left - triangleWidth}px;top:${
                            top + (rect[0].height - triangleHeight) / 2
                        }px;`,
                        labelStyle: `left:${left - labelWidth - triangleWidth}px;top:${
                            top + rect[0].height / 2 - labelHeight / 2
                        }px;`,
                        visible: true
                    });
                    return;
                case 'leftTop':
                    this.setData({
                        triangleStyle: `left:${left - triangleWidth}px;top:${
                            top + (rect[0].height - triangleHeight) / 2
                        }px;`,
                        labelStyle: `left:${left - labelWidth - triangleWidth}px;top:${top - labelHeight / 2 - 8}px;`,
                        visible: true
                    });
                    return;
                case 'leftBottom':
                    this.setData({
                        triangleStyle: `left:${left - triangleWidth}px;top:${
                            top + (rect[0].height - triangleHeight) / 2
                        }px;`,
                        labelStyle: `left:${left - labelWidth - triangleWidth}px;top:${top - labelHeight / 2 + 32}px;`,
                        visible: true
                    });
                    return;
                default:
                    return;
            }
        },
        /**
         * 自动计算气泡框的弹出位置(未传参数时)
         * 上下弹出
         * @param {*} rect 目标元素的信息
         */
        autoTBSetPosition(rect) {
            const { left, bottom } = rect[0]; // 点击的图标信息
            const { width } = rect[1]; // 内容区域图标的宽度
            let comPlacement = '';
            // 自动向上弹出
            if (this.windowHeight - bottom < 150) {
                // 屏幕宽度减去图标中心位置得到剩余的宽度 与内容宽度作比较
                if (this.windowWidth - left + rect[0].width / 2 > width) {
                    // 剩余宽度的一半如果大于内容宽度则居中展示
                    if ((left + rect[0].width / 2) / 2 > width) {
                        comPlacement = 'top';
                    } else {
                        comPlacement = 'topLeft';
                    }
                } else {
                    comPlacement = 'topRight';
                }
            } else {
                // 自动向下弹出 屏幕宽度减去图标中心位置得到剩余的宽度 与内容宽度作比较
                if (this.windowWidth - left + rect[0].width / 2 > width) {
                    if ((left + rect[0].width / 2) / 2 > width) {
                        comPlacement = 'bottom';
                    } else {
                        comPlacement = 'bottomLeft';
                    }
                } else {
                    comPlacement = 'bottomRight';
                }
            }
            this.setData(
                {
                    comPlacement
                },
                () => {
                    this.setPosition(rect);
                }
            );
        },
        /**
         * 自动计算气泡框的弹出位置(未传参数时)
         * 左右弹出
         * @param {*} rect 目标元素的信息
         */
        autoLRSetPosition(rect) {
            const { right } = rect[0]; // 点击的图标信息
            let comPlacement = '';
            if (this.windowWidth - right > 40) {
                // 向右弹出
                comPlacement = 'right';
            } else {
                // 向左弹出
                comPlacement = 'left';
            }
            this.setData(
                {
                    comPlacement
                },
                () => {
                    this.setPosition(rect);
                }
            );
        },
        /**
         * popover点击事件
         * @param {*} e
         */
        clickPopover(e) {
            this.setData({ visible: false });
            this.triggerEvent('click', { item: e.target.dataset.value });
        },
        /**
         * 关闭popover
         */
        closeMask() {
            this.setData({ visible: false });
        },
        stopEvent() {},
        setPopover(target) {
            if (target) {
                const { id } = target;
                id.length > 0 && this.onClick(target, `#${id}`);
            } else {
                return;
            }
        }
    }
});
