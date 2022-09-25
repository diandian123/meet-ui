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
        compIcon: '',
        compTitle: '',
        case_1: {
            title: ['筛选条件'],
            items: [
                {
                    value: 1,
                    label: '菜单选项一'
                },
                {
                    value: 2,
                    label: '菜单选项二'
                },
                {
                    value: 3,
                    label: '菜单选项三'
                }
            ],
            current: 0
        },
        case_2: {
            title: ['条件一', '条件二'],
            items: [
                [
                    {
                        value: 1,
                        label: '[1]选项一'
                    },
                    {
                        value: 2,
                        label: '[1]选项二'
                    },
                    {
                        value: 3,
                        label: '[1]选项三'
                    }
                ],
                [
                    {
                        value: 1,
                        label: '[2]选项一'
                    },
                    {
                        value: 2,
                        label: '[2]选项二'
                    },
                    {
                        value: 3,
                        label: '[2]选项三'
                    }
                ]
            ],
            current: [0, 1]
        },
        case_3: {
            title: ['条件一', '条件二', '条件三'],
            items: [
                [
                    {
                        value: 1,
                        label: '[1]选项一'
                    },
                    {
                        value: 2,
                        label: '[1]选项二'
                    },
                    {
                        value: 3,
                        label: '[1]选项三'
                    }
                ],
                [
                    {
                        value: 1,
                        label: '[2]选项一'
                    },
                    {
                        value: 2,
                        label: '[2]选项二'
                    },
                    {
                        value: 3,
                        label: '[2]选项三'
                    }
                ],
                [
                    {
                        value: 1,
                        label: '[3]选项一'
                    },
                    {
                        value: 2,
                        label: '[3]选项二'
                    },
                    {
                        value: 3,
                        label: '[3]选项三'
                    }
                ]
            ],
            current: [0, 1, 2]
        },
        case_4: {
            title: ['多选菜单', '多选菜单'],
            items: [
                [
                    {
                        value: 1,
                        label: '选项一'
                    },
                    {
                        value: 2,
                        label: '选项二'
                    },
                    {
                        value: 3,
                        label: '选项三'
                    },
                    {
                        value: 4,
                        label: '选项四'
                    },
                    {
                        value: 5,
                        label: '选项五'
                    },
                    {
                        value: 6,
                        label: '选项六'
                    },
                    {
                        value: 7,
                        label: '选项七'
                    },
                    {
                        value: 8,
                        label: '选项八'
                    }
                ],
                [
                    {
                        value: 1,
                        label: '选项一'
                    },
                    {
                        value: 2,
                        label: '选项二'
                    },
                    {
                        value: 3,
                        label: '选项三'
                    },
                    {
                        value: 4,
                        label: '选项四'
                    },
                    {
                        value: 5,
                        label: '选项五'
                    },
                    {
                        value: 6,
                        label: '选项六'
                    }
                ]
            ],
            current: [[2, 4], [1]]
        },
        case_5: {
            title: ['自定义一', '自定义二']
        },
        case_6: {
            title: ['条件一', '条件一一'],
            items: [
                [
                    {
                        value: 1,
                        label: '条件一'
                    },
                    {
                        value: 2,
                        label: '条件二'
                    },
                    {
                        value: 3,
                        label: '条件三'
                    }
                ],
                [
                    {
                        value: 1,
                        label: '条件一[1]'
                    },
                    {
                        value: 2,
                        label: '条件一[2]'
                    },
                    {
                        value: 3,
                        label: '条件一[3]'
                    }
                ]
            ],
            current: [0, 0]
        },
        case_7: {
            title: [],
            items: [],
            current: []
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });

        setTimeout(() => {
            const case_7 = this.data.case_2;
            this.setData({
                case_7
            });
        }, 300);
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    handleClick(e) {
        const { item } = e.detail;
        console.log('点击项为:', item);
    },
    handleClose() {
        console.log('点击蒙层关闭');
    },
    handleLinkage(e) {
        const { item, MENU_INDEX } = e.detail;
        const { case_6 } = this.data;
        const { items } = case_6;
        if (MENU_INDEX === 0 && item.value === 2) {
            case_6.items[1] = [
                {
                    value: 1,
                    label: '条件二[1]'
                },
                {
                    value: 2,
                    label: '条件二[2]'
                },
                {
                    value: 3,
                    label: '条件二[3]'
                }
            ];
            case_6.current = [1, 0];
            case_6.title = ['条件二', '条件二一'];
            this.setData({
                case_6
            });
        } else if (MENU_INDEX === 0 && item.value === 3) {
            items[1] = [
                {
                    value: 1,
                    label: '条件三[1]'
                },
                {
                    value: 2,
                    label: '条件三[2]'
                },
                {
                    value: 3,
                    label: '条件三[3]'
                }
            ];
            case_6.current = [2, 0];
            case_6.title = ['条件三', '条件三一'];
            this.setData({
                case_6
            });
        } else if (MENU_INDEX === 0 && item.value === 1) {
            case_6.items[1] = [
                {
                    value: 1,
                    label: '条件一[1]'
                },
                {
                    value: 2,
                    label: '条件一[2]'
                },
                {
                    value: 3,
                    label: '条件一[3]'
                }
            ];
            case_6.current = [0, 0];
            case_6.title = ['条件一', '条件一一'];
            this.setData({
                case_6
            });
        }
        console.log('联动数据用户自己处理,当前点击项为:', item, '点击项索引为:', MENU_INDEX);
    },
    setDropdown() {
        const dropDown = this.selectComponent('#dropdownDemo');
        dropDown.data.nodes[0].setDropdown({
            id: 'showbutton'
        });
    }
});
