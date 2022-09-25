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
 * 显示Dialog
 * @param {object} options 配置对象
 */
function Dialog(options) {
    const { id = '#meetDialog', context = null } = options;
    const ctx = getCtx(id, context);
    ctx?.show(options);
}

Dialog.close = function (options = {}) {
    // 支持直接传递id
    if (typeof options === 'string') {
        options = {
            id: options
        };
    }
    const { id = '#meetDialog', context = null } = options;
    const ctx = getCtx(id, context);
    ctx?.close();
};

Dialog.alert = function (options) {
    options.type = 'alert';
    Dialog(options);
};

Dialog.confirm = function (options) {
    options.type = 'confirm';
    Dialog(options);
};

Dialog.prompt = function (options) {
    options.type = 'prompt';
    Dialog(options);
};

wx.meetDialog = Dialog;

export { Dialog as meetDialog };
