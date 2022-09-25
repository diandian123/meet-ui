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
        compIcon: '',
        compTitle: '',
        case_1: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二' },
                { title: '步骤三', desc: '描述信息三' },
                { title: '步骤四', desc: '描述信息四' }
            ],
            current: 2
        },
        case_2: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二' },
                { title: '步骤三', desc: '描述信息三' },
                { title: '步骤四', desc: '描述信息四' }
            ],
            current: 2
        },
        case_3: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二' },
                { title: '步骤三', desc: '描述信息三' },
                { title: '步骤四', desc: '描述信息四' }
            ],
            current: 2,
            doneIcon: '/example/steps/images/done.png',
            doingIcon: '/example/steps/images/doing.png',
            todoIcon: '/example/steps/images/todo.png',
            errorIcon: '/example/steps/images/error.png'
        },
        case_4: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二' },
                { title: '步骤三', desc: '描述信息三', status: 0 },
                { title: '步骤四', desc: '描述信息四' }
            ],
            current: 3,
            doneIcon: '/example/steps/images/done.png',
            doingIcon: '/example/steps/images/doing.png',
            todoIcon: '/example/steps/images/todo.png',
            errorIcon: '/example/steps/images/error.png'
        },
        case_5: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二' },
                { title: '步骤三', desc: '描述信息三' },
                { title: '步骤四', desc: '描述信息四' }
            ],
            current: 2
        },
        case_6: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二' },
                { title: '步骤三', desc: '描述信息三' },
                { title: '步骤四', desc: '描述信息四' }
            ],
            current: 2
        },
        case_7: {
            item: [
                { title: '步骤一', desc: '描述信息一' },
                { title: '步骤二', desc: '描述信息二\n描述信息二' },
                { title: '步骤三', desc: '描述信息三\n描述信息三\n描述信息三' },
                { title: '步骤四', desc: '描述信息四\n描述信息四\n描述信息四\n描述信息四' }
            ],
            current: 2,
            doneIcon: '/example/steps/images/done.png',
            doingIcon: '/example/steps/images/doing.png',
            todoIcon: '/example/steps/images/todo.png',
            errorIcon: '/example/steps/images/error.png'
        }
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
    onclick(e) {
        const { index } = e.currentTarget.dataset;
        let { current } = this.data[`case_${index}`];
        ++current;
        if (current > 5) {
            return;
        }
        const currentString = `case_${index}.current`;
        this.setData({
            [currentString]: current
        });
        console.log(this.data[`case_${index}`]);
    }
});
