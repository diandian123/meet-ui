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
        popoverData: [],
        placement: 'autoTB',
        list: [
            {
                title: '标题',
                desc: '描述信息',
                rightDesc: '',
                url: '/example/result/success'
            },
            {
                title: '标题',
                desc: '描述信息',
                rightDesc: '详细信息',
                url: '/example/result/success'
            },
            {
                title: '标题',
                desc: '描述信息',
                rightDesc: '•••',
                url: '/example/result/success'
            }
        ]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
        const popoverData = [
            { name: '操作项一', value: 1 },
            { name: '操作项二', value: 2 },
            { name: '操作项三', value: 3 }
        ];
        // 异步获取
        setTimeout(() => {
            this.setData({
                popoverData
            });
        }, 300);
    },
    onShareAppMessage() {
        return app.shareMessage();
    },
    setPopover(e) {
        const { id } = e.currentTarget;
        this.popoverComp = this.selectComponent('#popoverDemo');
        this.popoverComp.setPopover({ id });
    },
    handleClick(e) {
        console.log(e.detail.item);
    }
});
