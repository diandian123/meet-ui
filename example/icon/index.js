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
        group_1: {
            title: '线性图标',
            items: [
                {
                    name: 'mt-icon--wx',
                    title: '微信'
                },
                {
                    name: 'mt-icon--qq',
                    title: 'QQ'
                },
                {
                    name: 'mt-icon--approve',
                    title: '点赞'
                },
                {
                    name: 'mt-icon--comment',
                    title: '评论'
                },
                {
                    name: 'mt-icon--share',
                    title: '转发'
                },
                {
                    name: 'mt-icon--collect',
                    title: '收藏'
                },
                {
                    name: 'mt-icon--success',
                    title: '成功'
                },
                {
                    name: 'mt-icon--error',
                    title: '错误'
                },
                {
                    name: 'mt-icon--warning',
                    title: '警告'
                },
                {
                    name: 'mt-icon--add',
                    title: '新增'
                },
                {
                    name: 'mt-icon--edit',
                    title: '修改'
                },
                {
                    name: 'mt-icon--delete',
                    title: '删除'
                },
                {
                    name: 'mt-icon--like',
                    title: '喜欢'
                },
                {
                    name: 'mt-icon--more',
                    title: '更多'
                },
                {
                    name: 'mt-icon--unselected',
                    title: '未选一'
                },
                {
                    name: 'mt-icon--unchecked',
                    title: '未选二'
                },
                // {
                //     name: 'mt-icon--checked',
                //     title: '选中'
                // },
                {
                    name: 'mt-icon--search',
                    title: '搜索'
                },
                {
                    name: 'mt-icon--up',
                    title: '上箭头'
                },
                {
                    name: 'mt-icon--right',
                    title: '右箭头'
                },
                {
                    name: 'mt-icon--plus',
                    title: '添加'
                },
                {
                    name: 'mt-icon--top',
                    title: '返回'
                },
                {
                    name: 'mt-icon--notice',
                    title: '通知'
                },
                {
                    name: 'mt-icon--home',
                    title: '主页'
                },
                {
                    name: 'mt-icon--left',
                    title: '返回'
                }
            ]
        },
        group_2: {
            title: '面性图标',
            items: [
                {
                    name: 'mt-icon--success-b',
                    title: '成功'
                },
                {
                    name: 'mt-icon--error-b',
                    title: '错误'
                },
                {
                    name: 'mt-icon--warning-b',
                    title: '警告'
                },
                {
                    name: 'mt-icon--wx-b',
                    title: '微信'
                },
                {
                    name: 'mt-icon--qq-b',
                    title: 'QQ'
                },
                {
                    name: 'mt-icon--radio-b',
                    title: '选中一'
                },
                {
                    name: 'mt-icon--checkbox-b',
                    title: '选中二'
                },
                {
                    name: 'mt-icon--approve-b',
                    title: '点赞'
                },
                {
                    name: 'mt-icon--collect-b',
                    title: '收藏'
                }
            ]
        },
        group_3: {
            title: '数字图标',
            items: [
                {
                    name: 'mt-icon--num-1',
                    title: '1'
                },
                {
                    name: 'mt-icon--num-2',
                    title: '2'
                },
                {
                    name: 'mt-icon--num-3',
                    title: '3'
                },
                {
                    name: 'mt-icon--num-4',
                    title: '4'
                },
                {
                    name: 'mt-icon--num-5',
                    title: '5'
                },
                {
                    name: 'mt-icon--num-6',
                    title: '6'
                },
                {
                    name: 'mt-icon--num-7',
                    title: '7'
                },
                {
                    name: 'mt-icon--num-8',
                    title: '8'
                },
                {
                    name: 'mt-icon--num-9',
                    title: '9'
                },
                {
                    name: 'mt-icon--num-10',
                    title: '10'
                }
            ]
        }
    },
    onLoad(opts) {
        this.setData({
            compIcon: decodeURIComponent(opts.icon),
            compTitle: decodeURIComponent(opts.title)
        });
    },
    onShareAppMessage() {
        return app.shareMessage();
    }
});
