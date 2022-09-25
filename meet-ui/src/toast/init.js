/**
 * Meet UI, Meet You!
 * @author jayen, 309558639@qq.com
 * @version v1.0.2
 */
/**
 * 获取组件实例
 * @param {string} id 组件id
 */
function getCtx(id, context = null) {
    const pages = getCurrentPages();
    const ctx = context || pages[pages.length - 1];

    const componentCtx = ctx.selectComponent(id);

    if (!componentCtx) {
        console.warn('没有找到对应的组件');
        return null;
    }
    return componentCtx;
}
/**
 * 显示Toast
 * @param {object} options 配置对象
 */
function Toast(options) {
    const { id = '#meetToast', context = null } = options;
    const ctx = getCtx(id, context);
    ctx?.show(options);
}

Toast.hide = function (options = {}) {
    // 支持直接传递id
    if (typeof options === 'string') {
        options = {
            id: options
        };
    }
    const { id = '#meetToast', context = null } = options;
    const ctx = getCtx(id, context);
    ctx?.hide();
};

wx.meetToast = Toast;

wx.meetLoading = function (options = {}) {
    const opts = Object.assign(
        {
            type: 'loading',
            mask: true,
            message: '加载中...'
        },
        options
    );
    Toast(opts);
};

wx.meetLoading.hide = Toast.hide;

export { Toast as meetToast };
