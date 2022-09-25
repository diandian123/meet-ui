Component({options:{addGlobalClass:!0,multipleSlots:!0,styleIsolation:"shared"},properties:{options:{type:Object,value:{}},hasTopic:{type:Boolean,value:!0},hasCategory:{type:Boolean,value:!0},hasMore:{type:Boolean,value:!1},hasViews:{type:Boolean,value:!1},isRich:{type:Boolean,value:!1},hasLimit:{type:Boolean,value:!0},hasFooter:{type:Boolean,value:!0},hasShare:{type:Boolean,value:!0},hasComment:{type:Boolean,value:!0},hasApprove:{type:Boolean,value:!0},shareType:{type:String,value:"card"},albumWidth:{type:Number,value:678},imageRadius:{type:Number,value:12},imageMaxCount:{type:Number,value:-1},hasPreview:{type:Boolean,value:!0},imageRowGap:{type:Number,value:3},imageColumnGap:{type:Number,value:3},imageColumn:{type:Number,value:3},lazyLoad:{type:Boolean,value:!0},maxTagWidth:{type:Number,value:-1}},data:{initStatus:!1,publishTime:"",overflow:!1,approveAnim:!1},observers:{options(e){e.publishTime&&(e=this.formatBeforeTime(e.publishTime),this.setData({publishTime:e}))}},lifetimes:{ready(){if(this.data.options.approveAnim&&this.setData({approveAnim:!0}),0<this.data.hasLimit){const e=this.createSelectorQuery();let t;e.select(".mt-feed__content__wp").boundingClientRect(e=>{t=e.height}),e.select(".mt-feed__content__text").boundingClientRect(e=>{e.height>t?this.setData({overflow:!0}):this.setData({overflow:!1})}),e.exec()}}},methods:{handleUser(){var{userInfo:e,feedId:t}=this.data.options;this.triggerEvent("user",{userId:e.userId||"",feedId:t})},handleMore(){var e=this.data.options.isMe||!1;this.triggerEvent("more",{isMe:e,feedId:this.data.options.feedId})},handleDetail(){this.triggerEvent("detail",{feedId:this.data.options.feedId})},handleContent(){this.triggerEvent("detail",{feedId:this.data.options.feedId})},handleExpand(){this.triggerEvent("detail",{feedId:this.data.options.feedId})},handleMoreImage(){this.triggerEvent("detail",{feedId:this.data.options.feedId})},handleTopic(){this.triggerEvent("topic",{topicId:this.data.options.topic.id})},handleCategory(){this.triggerEvent("category",{id:this.data.options.category.id})},handleShare(){"card"!==this.data.shareType&&this.triggerEvent("share",{})},handleComment(){this.triggerEvent("comment",{feedId:this.data.options.feedId,commentCount:this.data.options.commentCount,toUserInfo:this.data.options.userInfo})},handleApprove(){var{feedId:e,hasApprove:t}=this.data.options;this.setData({approveAnim:!1}),this.triggerEvent("approve",{feedId:e,flag:t})},formatBeforeTime(e){e*=1e3;let t="";var a=(new Date).getTime()-e;if(a<0)return t="刚刚";var o=Math.floor(a/6e4),i=Math.floor(a/36e5),s=Math.floor(a/864e5),n=Math.floor(a/6048e5);if(1<=n&&n<=3)t=parseInt(n)+"周前";else if(1<=s&&s<=6)t=parseInt(s)+"天前";else if(1<=i&&i<=23)t=parseInt(i)+"小时前";else if(1<=o&&o<=60)t=parseInt(o)+"分钟前";else if(0<=a&&a<=6e4)t="刚刚";else{const r=new Date;r.setTime(e);n=r.getFullYear(),s=r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1,i=r.getDate()<10?"0"+r.getDate():r.getDate();t=n+`-${s}-`+i}return t}}});