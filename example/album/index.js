/**
 * Meet UI, Meet You!
 * @author jayen
 * @version v1.0.1
 */
// demo/album/index.js
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        case_1: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: 1080,
                height: 720
            }
        ],
        case_2: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: 1080,
                height: 1620
            }
        ],
        case_3: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_4: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_5: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_6: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_7: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_8: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibOv9N4TzeMSp5JRNZ9LMT3bc1Ut1NibMibjiaBmUqlxlnHBgLzibr9Uj48g/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_9: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibOv9N4TzeMSp5JRNZ9LMT3bc1Ut1NibMibjiaBmUqlxlnHBgLzibr9Uj48g/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibQYEOAGe2c9ZuMugbUx1GE95RdRnvY3s4YZYRQlO8TMjE4bQDYeWZUw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            }
        ],
        case_10: [
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajKR6I47uRpgoO9vfqCLXlC9ibbqVcsfUmabViaWSVIJjRVwru33oO7iaVw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajS3iceE9NYiaX2tRVHpMibYr1bZvWiaYiadMiaXPwVQtiaeGk0NViahaicHFXTDw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajP6Ekc4SiajBXzb9nC7wdAz8iaWWiagwDAMVJ815h3ltHR7MOBz4yziaCGQ/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajFqDA0AKfQDTbgvI96VQ7LPKILVZyR13KuCJ8AP9gFw8HtNibxFypY1w/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiaj5S43icoOSEtfkibjMbicoxYRQX9mXVpzDYicHAlJzMleZymLLm0ic3HqBqw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oRYhSeyqOJW5A54XnsibSkiajw28lVTjiat0U5YpgsyQYjCKfnO2cc3Uzb6x9Bssq3Vfqv5WlpVSlLeA/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibOv9N4TzeMSp5JRNZ9LMT3bc1Ut1NibMibjiaBmUqlxlnHBgLzibr9Uj48g/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTnIG6ewWMqRMLgnO1CPeuibQYEOAGe2c9ZuMugbUx1GE95RdRnvY3s4YZYRQlO8TMjE4bQDYeWZUw/0?wx_fmt=jpeg',
                width: '600',
                height: '600'
            },
            {
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oTh8PmA5DxCJfj3jrFyX2PPhXFGntHrmva1mQckrkRCOgorKF5ncdgO0nwcIa9wnicXVYrOYSSfE6A/0?wx_fmt=jpeg',
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
    handleMore() {
        wx.meetToast({
            message: '点击了更多操作'
        });
    }
});
