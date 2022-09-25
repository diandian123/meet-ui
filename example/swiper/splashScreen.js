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
        pageStatus: 'loading', // loading(加载中) || normal(正常状态）|| empty(空状态）|| error(异常状态)
        // 页面空状态
        emptyStatus: {
            icon: '',
            text: ''
        },
        // 页面异常状态
        errorStatus: {
            icon: '',
            text: '',
            traceId: ''
        },
        items: [
            {
                image: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg'
            },
            {
                image: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg'
            },
            {
                image: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg'
            }
        ],
        agreement: {
            checked: false,
            value: 1
        }
    },
    onLoad() {
        setTimeout(() => {
            this.setData({
                pageStatus: 'normal'
            });
        }, 500);
    },
    handleSplashChange(e) {
        console.log(e);
    },
    agreenmentChange(e) {
        const checked = e.detail.checked;
        this.setData({
            ['agreement.checked']: checked
        });
    },
    /**
     * 点击同意协议按钮
     */
    handleBtn() {
        if (!this.data.agreement.checked) {
            wx.meetToast({
                type: 'warning',
                message: '请勾选服务协议'
            });
        } else {
            wx.switchTab({
                url: '/example/index/index'
            });
        }
    }
});
