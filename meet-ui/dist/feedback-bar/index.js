Component({options:{addGlobalClass:!0,styleIsolation:"shared"},properties:{options:{type:Object,value:{commentCount:0,approveCount:0,hasApprove:!1,hasCollect:!1}},placeholder:{type:String,value:"发表我的评论..."},maxValue:{type:Number,value:99},hasComment:{type:Boolean,value:!0},hasApprove:{type:Boolean,value:!0},hasCollect:{type:Boolean,value:!0},hasShare:{type:Boolean,value:!0},shareType:{type:String,value:"card"}},data:{},methods:{handleComment(){this.triggerEvent("comment",{})},handleCommentList(){this.triggerEvent("list",{})},handleApprove(){var e=this.data.options["hasApprove"];this.triggerEvent("approve",{flag:!e})},handleCollect(){var e=this.data.options["hasCollect"];this.triggerEvent("collect",{flag:!e})},handleShare(){"card"!==this.data.shareType&&this.triggerEvent("share",{})}}});