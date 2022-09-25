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
        ]
    },
    onLoad() {
        setTimeout(() => {
            this.setData({
                pageStatus: 'normal'
            });
        }, 500);
    }
});
