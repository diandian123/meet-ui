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
        picker1: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ]
        },
        picker2: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ],
            selectedIndex: 1
        },
        picker3: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ],
            selectedValue: '2'
        },
        picker4: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ],
            selectedIndex: 2
        },
        picker5: {
            items: []
        },
        picker6: {
            items: [
                { label: '身份证', value: '1' },
                { label: '华侨护照', value: '2' },
                { label: '港澳居民来往内地通行证', value: '3' },
                { label: '台湾居民来往大陆通行证', value: '4' },
                { label: '国外用户永久居留身份证', value: '5' }
            ]
        },
        picker7: {
            items: [
                { label: '深圳小学', value: '00001' },
                { label: '深圳中学', value: '00002' },
                { label: '深圳高中', value: '00003' },
                { label: '深圳大学', value: '00004' }
            ]
        },
        picker8: {
            items: [],
            selectedIndex: []
        },
        picker9: {
            items: [
                { label: '深圳小学', value: '0001' },
                { label: '深圳中学', value: '0002' },
                { label: '深圳高中', value: '0003' },
                { label: '深圳大学', value: '0004' }
            ],
            selectedValue: '0002'
        },
        picker10: {
            items: [
                { label: '初一', value: '1' },
                { label: '初二', value: '2' },
                { label: '初三', value: '3' }
            ],
            selectedValue: '1'
        },
        picker11: {
            items: [
                [
                    { label: '2022年', value: '2022' },
                    { label: '2021年', value: '2021' },
                    { label: '2020年', value: '2020' },
                    { label: '2019年', value: '2019' },
                    { label: '2018年', value: '2018' },
                    { label: '2017年', value: '2017' }
                ],
                [
                    { label: '春天', value: '1' },
                    { label: '夏天', value: '2' },
                    { label: '秋天', value: '3' },
                    { label: '冬天', value: '4' }
                ]
            ]
        },
        picker12: {
            items: [
                [
                    { label: '2022年', value: '2022' },
                    { label: '2021年', value: '2021' },
                    { label: '2020年', value: '2020' },
                    { label: '2019年', value: '2019' },
                    { label: '2018年', value: '2018' },
                    { label: '2017年', value: '2017' }
                ],
                [
                    { label: '北京', value: '1' },
                    { label: '上海', value: '2' },
                    { label: '广州', value: '3' },
                    { label: '深圳', value: '4' }
                ],
                [
                    { label: '春天', value: '1' },
                    { label: '夏天', value: '2' },
                    { label: '秋天', value: '3' },
                    { label: '冬天', value: '4' }
                ]
            ]
        },
        picker13: {
            items: [
                [
                    {
                        label: '广东',
                        value: '1',
                        children: [
                            { label: '广州', value: '01' },
                            { label: '深圳', value: '02' },
                            { label: '东莞', value: '03' },
                            { label: '佛山', value: '04' },
                            { label: '中山', value: '05' }
                        ]
                    },
                    {
                        label: '湖南',
                        value: '2',
                        children: [
                            { label: '长沙', value: '01' },
                            { label: '株洲', value: '02' },
                            { label: '湘潭', value: '03' },
                            { label: '衡阳', value: '04' },
                            { label: '永州', value: '05' }
                        ]
                    },
                    {
                        label: '浙江',
                        value: '3',
                        children: [
                            { label: '杭州', value: '01' },
                            { label: '宁波', value: '02' },
                            { label: '温州', value: '03' },
                            { label: '嘉兴', value: '04' },
                            { label: '湖州', value: '05' }
                        ]
                    }
                ]
            ]
        },
        picker14: {
            items: [
                [
                    {
                        label: '广东省',
                        value: '1',
                        children: [
                            {
                                label: '广州市',
                                value: '01',
                                children: [
                                    { label: '荔湾区', value: '001' },
                                    { label: '越秀区', value: '001' },
                                    { label: '海珠区', value: '002' },
                                    { label: '天河区', value: '003' },
                                    { label: '白云区', value: '004' }
                                ]
                            },
                            {
                                label: '深圳市',
                                value: '02',
                                children: [
                                    { label: '罗湖区', value: '001' },
                                    { label: '福田区', value: '002' },
                                    { label: '南山区', value: '003' },
                                    { label: '宝安区', value: '004' }
                                ]
                            },
                            {
                                label: '东莞市',
                                value: '03',
                                children: [
                                    { label: '东城街道', value: '001' },
                                    { label: '南城街道', value: '002' },
                                    { label: '万江街道', value: '003' },
                                    { label: '莞城街道', value: '004' }
                                ]
                            }
                        ]
                    },
                    {
                        label: '湖南省',
                        value: '2',
                        children: [
                            {
                                label: '长沙市',
                                value: '01',
                                children: [
                                    { label: '芙蓉区', value: '001' },
                                    { label: '天心区', value: '002' },
                                    { label: '岳麓区', value: '003' },
                                    { label: '开福区', value: '004' }
                                ]
                            },
                            {
                                label: '株洲市',
                                value: '02',
                                children: [
                                    { label: '荷塘区', value: '001' },
                                    { label: '芦淞区', value: '002' },
                                    { label: '石峰区', value: '003' },
                                    { label: '天元区', value: '004' }
                                ]
                            },
                            {
                                label: '湘潭市',
                                value: '03',
                                children: [
                                    { label: '雨湖区', value: '001' },
                                    { label: '岳塘区', value: '002' },
                                    { label: '湘潭县', value: '003' },
                                    { label: '湘乡市', value: '004' }
                                ]
                            }
                        ]
                    }
                ]
            ]
        },
        picker15: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ]
        },
        picker16: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ],
            selectedValue: '2'
        },
        picker17: {
            items: [
                { label: '选项一', value: '1' },
                { label: '选项二', value: '2' },
                { label: '选项三', value: '3' },
                { label: '选项四，长文本', value: '4' },
                { label: '选项五，长文本长文本', value: '5' }
            ],
            selectedValue: '2'
        },
        target: false,
        showPicker: false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    changDate() {
        const items = !this.data.target
            ? [
                  { label: '选项六', value: '6' },
                  { label: '选项七', value: '7' },
                  { label: '选项八', value: '8' },
                  { label: '选项九，长文本', value: '9' },
                  { label: '选项十，长文本长文本', value: '10' }
              ]
            : [
                  { label: '选项一', value: '1' },
                  { label: '选项二', value: '2' },
                  { label: '选项三', value: '3' },
                  { label: '选项四，长文本', value: '4' },
                  { label: '选项五，长文本长文本', value: '5' }
              ];
        const selectedValue = !this.data.target ? '6' : '2';
        this.setData({
            picker16: {
                items,
                selectedValue
            },
            target: !this.data.target
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    /**
     * 确定操作
     * @param {object} e
     */
    handleConfirm(e) {
        const { value } = e.detail;
        if (value[0]?.value === '0001') {
            this.setData({
                picker10: {
                    items: [
                        { label: '一年级', value: '1' },
                        { label: '二年级', value: '2' },
                        { label: '三年级', value: '3' },
                        { label: '四年级', value: '4' },
                        { label: '五年级', value: '5' },
                        { label: '六年级', value: '6' }
                    ],
                    selectedValue: '3'
                }
            });
        } else if (value[0]?.value === '0002') {
            this.setData({
                picker10: {
                    items: [
                        { label: '初一', value: '1' },
                        { label: '初二', value: '2' },
                        { label: '初三', value: '3' }
                    ],
                    selectedValue: '1'
                }
            });
        } else if (value[0]?.value === '0003') {
            this.setData({
                picker10: {
                    items: [
                        { label: '高一', value: '1' },
                        { label: '高二', value: '2' },
                        { label: '高三', value: '3' }
                    ],
                    selectedValue: '2'
                }
            });
        } else if (value[0]?.value === '0004') {
            this.setData({
                picker10: {
                    items: [
                        { label: '大一', value: '1' },
                        { label: '大二', value: '2' },
                        { label: '大三', value: '3' },
                        { label: '大四', value: '4' }
                    ],
                    selectedValue: '1'
                }
            });
        } else if (value[0]?.value === '00001') {
            this.setData({
                picker8: {
                    items: [
                        { label: '一年级', value: '1' },
                        { label: '二年级', value: '2' },
                        { label: '三年级', value: '3' },
                        { label: '四年级', value: '4' },
                        { label: '五年级', value: '5' },
                        { label: '六年级', value: '6' }
                    ],
                    selectedIndex: 0
                }
            });
        } else if (value[0]?.value === '00002') {
            this.setData({
                picker8: {
                    items: [
                        { label: '初一', value: '1' },
                        { label: '初二', value: '2' },
                        { label: '初三', value: '3' }
                    ],
                    selectedIndex: 0
                }
            });
        } else if (value[0]?.value === '00003') {
            this.setData({
                picker8: {
                    items: [
                        { label: '高一', value: '1' },
                        { label: '高二', value: '2' },
                        { label: '高三', value: '3' }
                    ],
                    selectedIndex: 0
                }
            });
        } else if (value[0]?.value === '00004') {
            this.setData({
                picker8: {
                    items: [
                        { label: '大一', value: '1' },
                        { label: '大二', value: '2' },
                        { label: '大三', value: '3' },
                        { label: '大四', value: '4' }
                    ],
                    selectedIndex: 0
                }
            });
        }
        console.log(e.detail);
    },
    /**
     * 选项改变
     */
    handleChange(e) {
        console.log(e.detail);
    },
    showPicker() {
        const picker = this.selectComponent('#btnPicker');
        picker.setVisible();
    },
    btnPickerConfirm(e) {
        console.log(e);
    },
    handleDisable1() {
        wx.meetToast({
            type: 'warning',
            message: '选项已禁用'
        });
    },
    handleDisable2() {
        wx.meetToast({
            type: 'warning',
            message: '请先选择学校'
        });
    }
});
