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
        popupStatus: false
    },
    handleMeetYou() {
        this.setData({
            popupStatus: true
        });
    },
    hidePopup() {
        this.setData({
            popupStatus: false
        });
    },
    closeCustomDialog() {
        wx.meetDialog.close('#customDialog');
    },
    copyGithubLink() {
        wx.setClipboardData({
            data: 'https://github.com/diandian123/meet-ui',
            success() {}
        });
    },
    copyDocsLink() {
        wx.setClipboardData({
            data: 'https://github.com/diandian123/meet-ui#readme',
            success() {}
        });
    },
    handleContact(e) {
        console.log(e);
    },
    previewImage() {
        wx.previewImage({
            urls: [
                'https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oQKpZpdELhcN5EfcvjJ4Xvdc6n5RulvvpzpYrtnByGhum3vTHo91O4jPbqpEOluG4YFME1hbw178w/0?wx_fmt=jpeg'
            ]
        });
    }
});
