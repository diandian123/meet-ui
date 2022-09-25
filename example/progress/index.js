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
        compIcon: '', // 组件图标
        compTitle: '', // 组件标题
        number1: 70,
        number2: 50,
        number3: 30,
        number4: 70,
        number5: 50,
        number6: 30,
        number7: 70,
        number8: 50,
        number9: 30,
        number10: 70,
        number11: 50,
        number12: 30,
        number13: 70,
        number14: 50,
        number15: 30,
        number16: 30,
        number17: 50,
        number18: 70
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return getApp().shareMessage();
    },
    increase(e) {
        const { index } = e.currentTarget.dataset;
        if (index === 0) {
            this.setData({
                number1: this.data.number1 + 10 > 100 ? 100 : this.data.number1 + 10,
                number2: this.data.number2 + 10 > 100 ? 100 : this.data.number2 + 10,
                number3: this.data.number3 + 10 > 100 ? 100 : this.data.number3 + 10
            });
        } else if (index === 1) {
            this.setData({
                number4: this.data.number4 + 10 > 100 ? 100 : this.data.number4 + 10,
                number5: this.data.number5 + 10 > 100 ? 100 : this.data.number5 + 10,
                number6: this.data.number6 + 10 > 100 ? 100 : this.data.number6 + 10
            });
        } else if (index === 2) {
            this.setData({
                number7: this.data.number7 + 10 > 100 ? 100 : this.data.number7 + 10,
                number8: this.data.number8 + 10 > 100 ? 100 : this.data.number8 + 10,
                number9: this.data.number9 + 10 > 100 ? 100 : this.data.number9 + 10
            });
        } else if (index === 3) {
            this.setData({
                number10: this.data.number10 + 10 > 100 ? 100 : this.data.number10 + 10,
                number11: this.data.number11 + 10 > 100 ? 100 : this.data.number11 + 10,
                number12: this.data.number12 + 10 > 100 ? 100 : this.data.number12 + 10
            });
        } else if (index === 4) {
            this.setData({
                number13: this.data.number13 + 10 > 100 ? 100 : this.data.number13 + 10,
                number14: this.data.number14 + 10 > 100 ? 100 : this.data.number14 + 10,
                number15: this.data.number15 + 10 > 100 ? 100 : this.data.number15 + 10
            });
        } else if (index === 5) {
            this.setData({
                number16: this.data.number16 + 10 > 100 ? 100 : this.data.number16 + 10,
                number17: this.data.number17 + 10 > 100 ? 100 : this.data.number17 + 10,
                number18: this.data.number18 + 10 > 100 ? 100 : this.data.number18 + 10
            });
        }
    },
    decrease(e) {
        const { index } = e.currentTarget.dataset;
        if (index === 0) {
            this.setData({
                number1: this.data.number1 - 10 < 0 ? 0 : this.data.number1 - 10,
                number2: this.data.number2 - 10 < 0 ? 0 : this.data.number2 - 10,
                number3: this.data.number3 - 10 < 0 ? 0 : this.data.number3 - 10
            });
        } else if (index === 1) {
            this.setData({
                number4: this.data.number4 - 10 < 0 ? 0 : this.data.number4 - 10,
                number5: this.data.number5 - 10 < 0 ? 0 : this.data.number5 - 10,
                number6: this.data.number6 - 10 < 0 ? 0 : this.data.number6 - 10
            });
        } else if (index === 2) {
            this.setData({
                number7: this.data.number7 - 10 < 0 ? 0 : this.data.number7 - 10,
                number8: this.data.number8 - 10 < 0 ? 0 : this.data.number8 - 10,
                number9: this.data.number9 - 10 < 0 ? 0 : this.data.number9 - 10
            });
        } else if (index === 3) {
            this.setData({
                number10: this.data.number10 - 10 < 0 ? 0 : this.data.number10 - 10,
                number11: this.data.number11 - 10 < 0 ? 0 : this.data.number11 - 10,
                number12: this.data.number12 - 10 < 0 ? 0 : this.data.number12 - 10
            });
        } else if (index === 4) {
            this.setData({
                number13: this.data.number13 - 10 < 0 ? 0 : this.data.number13 - 10,
                number14: this.data.number14 - 10 < 0 ? 0 : this.data.number14 - 10,
                number15: this.data.number15 - 10 < 0 ? 0 : this.data.number15 - 10
            });
        } else if (index === 5) {
            this.setData({
                number16: this.data.number16 - 10 < 0 ? 0 : this.data.number16 - 10,
                number17: this.data.number17 - 10 < 0 ? 0 : this.data.number17 - 10,
                number18: this.data.number18 - 10 < 0 ? 0 : this.data.number18 - 10
            });
        }
    }
});
