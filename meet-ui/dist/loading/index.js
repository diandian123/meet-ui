Component({options:{addGlobalClass:!0},properties:{scene:{type:String,value:"local"},type:{type:String,value:"circle"},height:{type:Number,value:-1},icon:{type:String,value:""},text:{type:String,value:""},direction:{type:String,value:"row"},color:{type:String,value:"#07c16c"},bgColor:{type:String,value:"transparent"},delay:{type:Number,value:600}},observers:{scene(e){"page"===e&&this.setData({direction:"column",text:"正在加载"})},icon(e){0<e.length&&this.setData({type:"image"})}},data:{},methods:{}});