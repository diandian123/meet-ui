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
        case_1: {
            checked: false,
            value: 1,
            label: '选项内容'
        },
        case_2: {
            checked: true,
            value: 2,
            label: '选项内容'
        },
        case_3: {
            checked: false,
            value: 1,
            label: '选项内容'
        },
        case_4: {
            checked: true,
            value: 2,
            label: '选项内容'
        },
        case_5: {
            checked: false,
            value: 1,
            label: '选项内容'
        },
        case_6: {
            checked: true,
            value: 2,
            label: '选项内容'
        },
        case_7: {
            checked: false,
            value: 1
        },
        case_8: {
            checked: true,
            value: 1
        },
        case_9: {
            checked: true,
            value: 1
        },
        case_10: {
            checked: true,
            value: 1
        },
        group_1: {
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                },
                {
                    checked: false,
                    value: 5,
                    label: '选项五'
                },
                {
                    checked: false,
                    value: 6,
                    label: '选项六'
                },
                {
                    checked: false,
                    value: 7,
                    label: '选项七'
                },
                {
                    checked: false,
                    value: 8,
                    label: '选项八'
                }
            ]
        },
        group_2: {
            title: '1、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                }
            ]
        },
        group_3: {
            title: '2、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                }
            ]
        },
        group_4: {
            title: '1、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                }
            ]
        },
        group_5: {
            title: '2、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                }
            ]
        },
        group_6: {
            title: '1、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                }
            ]
        },
        group_7: {
            title: '2、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
                },
                {
                    checked: false,
                    value: 4,
                    label: '选项四'
                }
            ]
        },
        group_8: {
            title: '1、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                }
            ]
        },
        group_9: {
            title: '2、标题标题标题标题标题标题标题？',
            items: [
                {
                    checked: false,
                    value: 1,
                    label: '选项一'
                },
                {
                    checked: false,
                    value: 2,
                    label: '选项二'
                },
                {
                    checked: false,
                    value: 3,
                    label: '选项三'
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
    case1Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_1.checked']: checked
        });
    },
    case2Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_2.checked']: checked
        });
    },
    case3Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_3.checked']: checked
        });
    },
    case4Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_4.checked']: checked
        });
    },
    case5Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_5.checked']: checked
        });
    },
    case6Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_6.checked']: checked
        });
    },
    case7Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_7.checked']: checked
        });
    },
    case8Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_8.checked']: checked
        });
    },
    case9Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_9.checked']: checked
        });
    },
    case10Change(e) {
        const checked = e.detail.checked;
        this.setData({
            ['case_10.checked']: checked
        });
    },
    group1Change({ detail }) {
        console.log(detail);
    },
    group2Change({ detail }) {
        console.log(detail);
    },
    group3Change({ detail }) {
        console.log(detail);
    },
    group4Change({ detail }) {
        console.log(detail);
    },
    group5Change({ detail }) {
        console.log(detail);
    },
    group6Change({ detail }) {
        console.log(detail);
    },
    group7Change({ detail }) {
        console.log(detail);
    },
    group8Change({ detail }) {
        console.log(detail);
    },
    group9Change({ detail }) {
        console.log(detail);
    }
});
