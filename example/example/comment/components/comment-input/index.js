/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
let cursorSpacing = 360;
Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true,
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        // 类型 pk || qa || article
        type: {
            type: String,
            value: 'pk'
        },
        options: {
            type: Object,
            value: {
                visible: false,
                placeholder: '',
                commentId: ''
            }
        }
    },
    /**
     * 数据监听
     */
    observers: {},
    /**
     * 组件的初始数据
     */
    data: {
        inputVal: '', // 发布内容
        cursorSpacing: cursorSpacing // 光标距离键盘的高度,ios在重新赋值的时候不能生效
    },
    lifetimes: {
        ready() {
            const system = wx.getSystemInfoSync();
            if (system.platform === 'ios') {
                return;
            } else {
                const query = this.createSelectorQuery();
                query.select('.input-popup').boundingClientRect((res) => {
                    console.log(res);
                    cursorSpacing = res.height;
                });
                query.exec();
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 关闭弹层
        handleClose() {
            this.setData({
                'options.visible': false
            });
        },
        // 输入内容
        handleInput(e) {
            const { value } = e.detail;
            this.setData({
                inputVal: value
            });
        },
        byteLength(str) {
            let b = 0;
            const len = str.length;
            if (len) {
                for (let i = 0; i < len; i++) {
                    if (str.charCodeAt(i) > 255) {
                        // 字符编码大于255，说明是双字节字符
                        b += 2; // 则累加2个
                    } else {
                        b++;
                    }
                }
                return b;
            } else {
                return 0;
            }
        },
        // 发布
        handlePublish() {
            if (this.data.inputVal.trim().length < 3) {
                wx.meetToast({
                    type: 'warning',
                    message: '不能少于3个字符'
                });
                return;
            }
            // TODO 根据type类型 commentId 处理发布
            setTimeout(() => {
                this.handleClose();
                this.setData({
                    inputVal: ''
                });
            }, 200);

            // 新增成功，通知外部更新
            this.triggerEvent('update', {
                action: 'add'
            });
        }
    }
});
