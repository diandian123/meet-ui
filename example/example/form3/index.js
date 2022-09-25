/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
Page({
    /**
     * 页面的初始数据
     */
    data: {
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        input1: '',
        input2: 'MEET UI, MEET YOU!',
        input3: '',
        radioList: [
            {
                checked: true,
                value: 1,
                label: '男'
            },
            {
                checked: false,
                value: 2,
                label: '女'
            }
        ],
        checkboxList: [
            {
                checked: true,
                value: 1,
                label: '旅游'
            },
            {
                checked: false,
                value: 2,
                label: '健身'
            },
            {
                checked: false,
                value: 3,
                label: '美食'
            }
        ],
        pickerItems: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选项三', value: '3' },
            { label: '选项四，长文本', value: '4' },
            { label: '选项五，长文本长文本', value: '5' }
        ],
        switchStatus: true, // 发布通知
        location: '', // 位置信息
        uaerName: '', // 用户姓名
        idCard: '', // 身份证号
        questionDesc: '', // 问题描述
        phone: '', // 电话号码
        gender: '男', // 性别
        like: [], // 爱好
        certificate: '', // 证件类型
        birthday: '', // 生日
        imageList: [] // 截图列表
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
        if (opts.value) {
            this.setData({
                location: opts.value
            });
        }
    },
    handleInput1(e) {
        console.log(e);
    },
    handleInput2(e) {
        console.log(e);
    },
    handleInput3(e) {
        console.log(e);
    },
    handleRadio(e) {
        console.log(e);
    },
    handleCheckbox(e) {
        console.log(e);
    },
    handleSwitch(e) {
        console.log(e);
    },
    handlePicker(e) {
        console.log(e);
    },
    handleDate(e) {
        console.log(e);
    },
    handleTextarea(e) {
        console.log(e);
    },
    handleImagePicker(e) {
        console.log(e);
    },
    handleLink() {
        console.log('link');
    },
    submit() {}
});
