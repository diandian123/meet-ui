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
        areaData: [
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    /**
     * 确定操作
     * @param {object} e
     */
    handleConfirm(event) {
        console.log(event.detail);
    },
    showAreaPicker() {
        const datePicker = this.selectComponent('#areaPicker');
        datePicker.setVisible();
    }
});
