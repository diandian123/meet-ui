Component({options:{addGlobalClass:!0},properties:{type:{type:String,value:"preset"},width:{type:String,value:"750"},height:{type:String,value:"270"},radius:{type:Number,value:16},items:{type:Array,value:[]},hasTitle:{type:Boolean,value:!1},autoplay:{type:Boolean,value:!0},current:{type:Number,value:0},interval:{type:Number,value:3e3},duration:{type:Number,value:500},easingFunction:{type:String,value:"default"},circular:{type:Boolean,value:!0},vertical:{type:Boolean,value:!1},indicatorDots:{type:Boolean,value:!0},indicatorColor:{type:String,value:"rgba(255,255,255,0.6)"},indicatorActiveColor:{type:String,value:"rgba(255,255,255)"}},observers:{current(e){this.setData({activeIndex:e})}},data:{activeIndex:0},methods:{handleTap(e){var e=e.currentTarget.dataset.index,t=this.data.items[e].url;t&&wx.navigateTo({url:t}),this.triggerEvent("click",{current:e})},handleChange(e){this.setData({activeIndex:e.detail.current}),this.triggerEvent("change",{current:e.detail.current})},handleAnimationfinish(e){this.triggerEvent("animationfinish",{current:e.detail.current})},handleTransition(e){this.triggerEvent("transition",{current:e.detail.current})}}});