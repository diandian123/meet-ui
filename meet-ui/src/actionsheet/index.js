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
    properties: {
        // 类型 normal || confirm
        type: {
            type: String,
            value: 'normal'
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
        // 是否点击mask关闭：true || false
        maskClosable: {
            type: Boolean,
            value: true
        },
        // 层级
        zIndex: {
            type: Number,
            value: 9100
        },
        // 标题
        title: {
            type: String,
            value: ''
        },
        // 描述
        desc: {
            type: String,
            value: ''
        },
        // 选项
        items: {
            type: Array,
            value: []
        },
        // 默认选中项: -1表示没有选中项
        current: {
            type: Number,
            value: -1
        },
        // 选中颜色
        activeColor: {
            type: String,
            value: '#07c16c'
        },
        // 选项对齐方式: left || center
        itemPositon: {
            type: String,
            value: 'center'
        },
        // 是否有取消操作
        hasCancel: {
            type: Boolean,
            value: true
        },
        // 取消文本
        cancelText: {
            type: String,
            value: '取消'
        },
        // 确认文本
        confirmText: {
            type: String,
            value: '下一步'
        }
    },
    /**
     * 数据监听
     */
    observers: {
        type(val) {
            if (val === 'confirm') {
                this.setData({
                    itemPositon: 'left'
                });
            }
        }
    },
    data: {
        selectIndex: -1, // 选中项索引
        selectItem: null // 选中项
    },
    methods: {
        handleSelect(e) {
            const { index } = e.currentTarget.dataset;
            const { items } = this.data;
            const item = items[index];
            if (item.openType) {
                if (item.openType === 'getUserInfo') {
                    wx.getUserProfile({
                        desc: '获取微信用户信息',
                        complete: (userProfile) => {
                            this.triggerEvent('getuserinfo', {
                                data: userProfile
                            });
                        }
                    });
                }
                this.setData({
                    visible: false
                });
            } else {
                if (this.data.type === 'confirm') {
                    this.setData({
                        current: index
                    });
                    this.data.selectIndex = index;
                    this.data.selectItem = item;
                }
                this.triggerEvent('select', { current: index, item });
            }
        },
        handleCancel() {
            this.triggerEvent('cancel');
        },
        handleMask() {
            this.handleCancel();
        },
        // 下一步处理
        handleComfirm() {
            this.triggerEvent('confirm', {
                current: this.data.selectIndex,
                item: this.data.selectItem
            });
        },
        handleGetPhoneNumber(e) {
            this.triggerEvent('getphonenumber', {
                data: e.detail
            });
        },
        handleContact(e) {
            this.triggerEvent('contact', {
                data: e.detail
            });
        }
    }
});
