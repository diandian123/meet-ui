<img width="100%" src="https://mmbiz.qpic.cn/mmbiz_png/1rqkHu5x3oQKpZpdELhcN5EfcvjJ4Xvd3ReDBicgZSKUxz5lNE8P8iar9tCvaEUMktEkzu52l2HQueyEks5hcyUg/0?wx_fmt=png" />

### [MEET UI](https://github.com/diandian123/meet-ui) 一套简约、清新、高可用微信小程序组件库。

#### 重新定义用户界面、用户交互、用户体验！

## 特性

-   🍭 注重体验，重新定义组件 40+，覆盖多种应用场景，严格控制代码包体积；
-   🍭 使用小程序原生语言编写，rpx 适配，支持官方最新特性；
-   🍭 细分组件颗粒，加强组件间复用，自由组合，方便业务二次扩展；
-   🍭 关注页面载入生命周期（loading 加载中 || normal 正常状态 || empty 空状态 || error 异常状态），规范页面载入模板，组件层面确保页面稳定性；
-   🍭 抽象 Popup 能力，统一弹层动画、手势操作，支持各类弹层场景组件扩展（Actionsheet、Picker、Drawer、Dropdown、Popover...）；
-   🍭 优化 Dialog、Toast、Loading 组件使用方式，支持全局函数调用，维持单例特性，减少资源开销；
-   🍭 丰富 Picker 选择器能力，支持二级联动、三级联动、多 picker 间数据级联，支持日期、地区等任意特性数据渲染；
-   🍭 加强 imagePicker 图片选择能力，支持选图拖动排序；
-   🍭 重视用户输入体验，多种样式满足各类表单场景需求；
-   🍭 坚持实用性，场景化演示，开箱即用；

## 预览

请使用微信扫码预览小程序组件示例 ↓
<br/>

<img width="260" src="https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oQKpZpdELhcN5EfcvjJ4XvdRYp3Ficzgae8lr2w84zzll4ia4jiacC15gNRBHA8Vto7fP6ictrI1TiacDA/0?wx_fmt=jpeg" />

## 如何使用

### 一、npm 安装

```bash
npm i meet-ui-miniapp -S
```

### 二、构建 npm

```html
点击开发者工具中的菜单栏：工具 --> 构建 npm
```

### 三、在页面中使用组件

#### 1、在页面.json 文件中定义组件路径

```json
"usingComponents": {
    "mt-button": "meet-ui-miniapp/button",
    "mt-dialog": "meet-ui-miniapp/dialog"
}
```

#### 2、在页面.wxml 文件中加入组件标签

```html
<!-- 按钮组件 -->
<mt-button type="primary" size="l" bindtap="handleDialog">主要按钮</mt-button>

<mt-button type="plain" size="l" bindtap="handleDialog">次要按钮</mt-button>

<mt-button type="warning" size="l" bindtap="handleDialog">警告按钮</mt-button>

<!-- 对话框组件 -->
<mt-dialog id="meetDialog"></mt-dialog>
```

#### 3、在页面.js 文件中加入事件代码

```js
// 显示对话框
handleDialog() {
    wx.meetDialog({
        type: "success",
        title: "MEET UI",
        content: '重新定义用户界面、用户交互、用户体验',
        onConfirm(res) {
            console.log(res);
            // TODO...
            // 关闭对话框
            wx.meetDialog.close();
        }
    });
}
```

## 注意事项：

#### 1、Dialog、Toast、Loading 支持页面内全局调用，建议提前在 app.js 中引入如下代码进行全局挂载；

```js
import "meet-ui-miniapp/toast/init"; // 注入wx.meetToast、wx.meetLoading方法
import "meet-ui-miniapp/dialog/init"; // 注入wx.meetDialog方法
```

#### 2、由于小程序在自定义组件中使用标签名选择器会引发告警，建议在 app.wxss 中引入如下代码进行全局组件样式设置；

```css
@import "miniprogram_npm/meet-ui-miniapp/ui.wxss";
```

## 帮助

#### 更多应用示例，请下载源码，打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，导入项目，打开`example` 目录即可查看所有示例代码。

#### 使用过程中遇到任何问题或意见，欢迎扫码加入 QQ 群，一起交流 ↓ ↓ ↓

<img width="260" src="https://mmbiz.qpic.cn/mmbiz_jpg/1rqkHu5x3oQKpZpdELhcN5EfcvjJ4Xvdc6n5RulvvpzpYrtnByGhum3vTHo91O4jPbqpEOluG4YFME1hbw178w/0?wx_fmt=jpeg" />
