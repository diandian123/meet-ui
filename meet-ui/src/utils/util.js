/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
// rpx转px
function rpx2px(rpx) {
    const system = wx.getSystemInfoSync();
    return (rpx / 750) * system.screenWidth;
}
// px转rpx
function px2rpx(px) {
    const system = wx.getSystemInfoSync();
    return (px * 750) / system.screenWidth;
}

export default {
    rpx2px,
    px2rpx
};
