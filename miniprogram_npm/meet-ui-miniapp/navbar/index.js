const defaultProps={statusBarColor:"#000000",statusBarBgColor:"#ffffff",textColor:"#333333",background:"#ffffff"};let systemInfo=null;function getSystemInfo(){if(systemInfo)return systemInfo;var t=wx.getSystemInfoSync(),e=wx.getMenuButtonBoundingClientRect();if(e&&e.height){const a={};return a.innerHeight=e.height+2*(e.top-t.statusBarHeight),a.rowGap=2*(t.windowWidth-e.right),a.height=t.statusBarHeight+a.innerHeight+4,{menuBtn:e,...t,navBar:a}}getSystemInfo()}Component({options:{addGlobalClass:!0},properties:{type:{type:String,value:"normal"},mode:{type:String,value:"static"},statusBarColor:{type:String,value:"#000000"},title:{type:String,value:""},titlePosition:{type:String,value:"auto"},textColor:{type:String,value:"#333333"},background:{type:String,value:"#fff"},transform:{type:Object,value:{}},home:{type:String,value:""},customEvent:{type:Boolean,value:!1}},data:{opacity:0,newProps:null},observers:{type(t){"auto"===t&&(getCurrentPages().length?this.setData({type:"back"}):this.setData({type:"home"}))},transform(t){0<Object.keys(t).length&&(t=Object.assign({},defaultProps,t),this.setData({newProps:t}))}},lifetimes:{attached(){this.init();var t=getCurrentPages();const e=t[t.length-1];e.meetNavBar=this}},methods:{init(){systemInfo=getSystemInfo(),this.setData({platform:systemInfo.platform,statusBarHeight:systemInfo.statusBarHeight,navBarInnerHeight:systemInfo.navBar.innerHeight,navBarColumnGap:systemInfo.navBar.rowGap,iosTitleWidth:systemInfo.windowWidth-2*(systemInfo.navBar.rowGap/2+systemInfo.menuBtn.width),androidTitleWidth:systemInfo.windowWidth-2*systemInfo.menuBtn.width})},handleBack(){this.data.customEvent?this.triggerEvent("back"):wx.navigateBack({delta:1})},handleHome(){this.data.customEvent?this.triggerEvent("home"):this.data.home&&wx.reLaunch({url:this.data.home})},lastSetData:Date.now(),setOpacity:function(e,a=110){var n=this.data.mode;if("fixed"===n){let t=0;n=this.data["navBarInnerHeight"];n<e-a&&1===this.data.opacity||e-a<=0&&0===this.data.opacity||(this.lastSetData=Date.now(),0<a&&(t=e-a<=0?0:n<e-a?1:(e-a)/n),this.setData({opacity:t}))}}}});