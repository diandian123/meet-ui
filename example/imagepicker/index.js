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
        case_1: [],
        case_2: [
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '500',
                height: '500'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_3: [
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_4: [
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oS4ykSFhIVibnIzBic5hOXIxnEAk4mAUlbXCSQLianB72pYmCRTiaxLCaWn3WJJqCndY0P5g8BcwVUAuw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_5: [
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oS4ykSFhIVibnIzBic5hOXIxnEAk4mAUlbXCSQLianB72pYmCRTiaxLCaWn3WJJqCndY0P5g8BcwVUAuw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibQYEOAGe2c9ZuMugbUx1GE95RdRnvY3s4YZYRQlO8TMjE4bQDYeWZUw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTh8PmA5DxCJfj3jrFyX2PPhXFGntHrmva1mQckrkRCOgorKF5ncdgO0nwcIa9wnicXVYrOYSSfE6A/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_6: [
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oS4ykSFhIVibnIzBic5hOXIxnEAk4mAUlbXCSQLianB72pYmCRTiaxLCaWn3WJJqCndY0P5g8BcwVUAuw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibQYEOAGe2c9ZuMugbUx1GE95RdRnvY3s4YZYRQlO8TMjE4bQDYeWZUw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                src: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTh8PmA5DxCJfj3jrFyX2PPhXFGntHrmva1mQckrkRCOgorKF5ncdgO0nwcIa9wnicXVYrOYSSfE6A/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ]
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
    handleChange(e) {
        console.log(e.detail.imageList);
    }
});
