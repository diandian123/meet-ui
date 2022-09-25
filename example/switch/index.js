/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        switch1: {
            checked: false,
            value: '1'
        },
        switch2: {
            checked: true,
            value: '2'
        },
        switch3: {
            disabled: true,
            checked: false,
            value: '3'
        },
        switch4: {
            disabled: true,
            checked: true,
            value: '4'
        },
        switch5: {
            checked: false,
            value: '5'
        },
        switch6: {
            checked: false,
            value: '6'
        },
        switch7: {
            checked: true,
            value: '7'
        },
        case_1: {
            name: '开关列表',
            list: [
                {
                    title: '标题名称',
                    checked: false,
                    extDesc: '做对产品、业务真正有帮助的“实用”技术研发！'
                },
                {
                    title: '标题名称',
                    checked: true,
                    extDesc: '做对产品、业务真正有帮助的“实用”技术研发！'
                },
                {
                    title: '标题名称',
                    checked: true,
                    extDesc: '做对产品、业务真正有帮助的“实用”技术研发！'
                }
            ]
        }
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    handleSwitch1({ detail }) {
        this.setData({
            'switch1.checked': detail.checked
        });
    },
    handleSwitch2({ detail }) {
        this.setData({
            'switch2.checked': detail.checked
        });
    },
    handleSwitch6({ detail }) {
        this.setData({
            'switch6.checked': detail.checked
        });
    },
    handleSwitch7({ detail }) {
        this.setData({
            'switch7.checked': detail.checked
        });
    },
    /**
     * 异步开关处理
     * @param {object} e 事件对象
     */
    handleAsyncSwitch({ detail }) {
        wx.meetToast({
            type: 'loading',
            direction: 'column',
            message: '处理中...'
        });

        setTimeout(() => {
            if (detail.checked) {
                wx.meetToast({
                    type: 'success',
                    direction: 'column',
                    message: '已开启'
                });
            } else {
                wx.meetToast({
                    type: 'success',
                    direction: 'column',
                    message: '已关闭'
                });
            }

            this.setData({
                'switch5.checked': detail.checked
            });
        }, 2000);
    },
    handleSwitch({ detail }) {
        console.log(detail);
    }
});
