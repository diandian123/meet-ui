Component({options:{addGlobalClass:!0,styleIsolation:"shared"},relations:{"../radio":{type:"child"}},properties:{title:{type:String,value:""},type:{type:String,value:"dot"},column:{type:Number,value:1},items:{type:Array,value:[]},checkedColor:{type:String,value:"#07c16c"},direction:{type:String,value:"column"},columnGap:{type:Number,value:30},rowGap:{type:Number,value:30},iconPosition:{type:String,value:"left"},hasDivider:{type:Boolean,value:!0}},methods:{radioChange(e){const a=e.currentTarget.dataset["index"],t=this.data.items;t.forEach((e,t)=>{t===a?e.checked=!0:e.checked=!1}),this.setData({items:t},()=>{this.triggerEvent("change",{index:a,item:t[a]})})}}});