Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{type:{type:String,value:"normal"},position:{type:String,value:"bottom"},visible:{type:Boolean,value:!1},mask:{type:Boolean,value:!0},maskClosable:{type:Boolean,value:!0},width:{type:String,value:"100%"},height:{type:String,value:"auto"},maxHeight:{type:String,value:"75vh"},title:{type:String,value:""},zIndex:{type:Number,value:9e3},hasGesture:{type:Boolean,value:!1},hasAnimation:{type:Boolean,value:!0},hasRadius:{type:Boolean,value:!0},hasTopClose:{type:Boolean,value:!0},hasBottomClose:{type:Boolean,value:!1},maskColor:{type:String,value:"rgba(0, 0, 0, 0.5)"}},observers:{type(t){"drawer"===t&&this.setData({hasRadius:!1,hasTopClose:!1})},position(t){"left"!==t&&"right"!==t||this.setData({width:"100%"===this.properties.width?"82%":this.properties.width,height:"100%",maxHeight:"100%"})},visible(t){this.enableAnimation&&this.setData({toggleAnimation:t?"show":"hidden"})}},data:{toggleAnimation:"out",noMove:!1,hiddenPop:!1,popStyle:"",watchMask:!1},lifetimes:{attached(){var{hasGesture:t,position:e}=this.data;this.i=0,this.scrollTop=0,this.enableAnimation=!0,!t||"right"!==e&&"left"!==e||this.setData({watchMask:!0})}},methods:{handleMask(){this.handleClose()},handleClose(){this.triggerEvent("close")},stopEvent(){},onTouchStart(t){this.setData({startY:t.touches[0].clientY,startX:t.touches[0].clientX})},onTouchMove(t){var{startY:e,position:a,startX:o}=this.data;let i="";o=t.touches[0].clientX-o,t=t.touches[0].clientY-e,e=this.judgeMove(o,t);e&&"bottom"===a?(i=a+`:${-t}px`,this.judgeBack(t,i)):e&&"top"===a?(i=a+`:${t}px`,this.judgeBack(t,i)):e&&"left"===a?(i=a+`:${o}px`,this.judgeBack(o,i)):e&&"right"===a&&(i=a+`:${-o}px`,this.judgeBack(o,i))},onTouchEnd(t){const{startY:e,hiddenPop:a,position:o,startX:i}=this.data;var s=t.changedTouches[0].clientY-e,t=t.changedTouches[0].clientX-i,t=this.judgeMove(t,s);this.i=0,t&&a?(this.handleMask(),setTimeout(()=>{this.setData({popStyle:o+": 0;"})},400)):this.setData({popStyle:o+": 0;",hiddenPop:!1,noMove:!1})},judgeBack(t,e){Math.abs(t)<100?this.setData({popStyle:e,hiddenPop:!1}):this.setData({popStyle:e,hiddenPop:!0})},judgeMove(t,e){var{position:a,noMove:o}=this.data;return!o&&(0<e&&"bottom"===a&&0===this.scrollTop||(e<0&&"top"===a&&0===this.scrollTop||(0<t&&"right"===a||t<0&&"left"===a)&&(this.i++,!(10<Math.abs(e)&&this.i<2)||(this.setData({noMove:!0}),!1))))},handleLoadmore(){this.triggerEvent("loadMore")},handleScroll(t){this.scrollTop=t.detail.scrollTop},animationEnd(){this.setData({toggleAnimation:this.data.visible?"in":"out"})}}});