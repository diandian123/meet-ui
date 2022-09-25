import "meet-ui-miniapp/toast/init"; // 注入wx.meetToast、wx.meetLoading方法
import "meet-ui-miniapp/dialog/init"; // 注入wx.meetDialog方法

const themeListeners = [];

App({
    globalData: {
        theme: "light",
    },
    onLaunch(options) {
        console.log(options);
    },
    themeChanged(theme) {
        this.globalData.theme = theme;
        themeListeners.forEach((listener) => {
            listener(theme);
        });
    },
    watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
            themeListeners.push(listener);
        }
    },
    unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener);
        if (index > -1) {
            themeListeners.splice(index, 1);
        }
    },
    shareMessage() {
        return {
            title:
                "MEET UI 一套简约、清新、高可用微信小程序组件库。重新定义用户界面、用户交互、用户体验！",
            imageUrl: "/demo/images/poster.jpg",
        };
    },
});
