import{r as c,a,c as l,b as e,o as d}from"./vendor.a13852a4.js";const i={components:{},setup:()=>({data:[{id:"a",label:"a",children:[{id:"aa",label:"aa"},{id:"ab",label:"ab",children:[{id:"ccc",label:"ccc"},{id:"ccc2",label:"ccc"},{id:"ccc3",label:"ccc"},{id:"ccc4",label:"ccc"}]},{id:"ac",label:"ac"}]},{id:"b",label:"b"},{id:"c",label:"c"}],value:c("b"),click:(c,a)=>{if(console.log(c),c.open&&!c.lazy){const c=[{id:"dd",label:"dd"}];setTimeout((()=>{a&&a(c)}),500)}}})};i.render=function(c,i,o,b,n,t){const s=a("ak-tree");return d(),l("div",null,[e(s,{data:b.data,"show-checkbox":!0,onClick:b.click},null,8,["data","onClick"])])};export default i;