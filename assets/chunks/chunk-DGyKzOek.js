import{V as b}from"./chunk-CboEMYVS.js";import{a as g}from"./chunk-CdeRgiLc.js";import{g as P,s as u}from"./chunk-B-mQUuBe.js";import{d as D,M as _,f as Y,o as i,a as d,w as c,m as T,i as y,r as R,e as t,g as $,j as F,t as I,b as p,u as m,F as C}from"./chunk-Dr2pd04r.js";import{V as N}from"./chunk-B0utt4eW.js";import{V as U}from"./chunk-DLKXcf2W.js";import"./chunk-fEI7Cr-O.js";import"./chunk-yP-qv9L4.js";import"./chunk-lmOyQrer.js";import"./chunk-Dd5vnLK-.js";import"./chunk-Z3iUL4cx.js";import"./chunk-D6q83-eg.js";import"./chunk-BSGw2A-_.js";import"./chunk-CTeTV8H_.js";import"./chunk-DY-nqMfY.js";import"./chunk-D8MIq6ce.js";import"./chunk-DEoM8OXg.js";import"./chunk-3gErALKq.js";import"./chunk-zKPkODU6.js";import"./chunk-HLIIT8bT.js";import"./chunk-Cy4PRPPL.js";import"./chunk-Dy910uqj.js";import"./chunk-PRHipl_T.js";import"./chunk-BMAFDzXW.js";const j={data:{type:Object,default:()=>({})}},w={setData:e=>e},B=D({name:"VkfTemplatesVariant",components:{VkfFormItemRendererTemplate:g,VkfDatePickerRange:N},props:j,emits:w,setup(){return{getValue:P}}});function E(e,a,f,V,r,n){const k=Y("VkfDatePickerRange"),M=Y("VkfFormItemRendererTemplate");return i(),d(M,{type:"VkfDatePickerRange"},{default:c(({data:o,templateIf:v})=>[v(e.data)?(i(),d(k,T({key:0},o,{"start-value":e.getValue(e.data,o.startProp),"end-value":e.getValue(e.data,o.endProp),"onUpdate:startValue":l=>e.$emit("setData",{k:o.startProp,v:l}),"onUpdate:endValue":l=>e.$emit("setData",{k:o.endProp,v:l})}),null,16,["start-value","end-value","onUpdate:startValue","onUpdate:endValue"])):y("",!0)]),_:1})}const s=_(B,[["render",E]]);s.install=e=>{e.component(s.name||"VkfTemplatesVariant",s)};const le=D({__name:"basic",setup(e){const a=R({name:"John Doe",start:"2021-01-01",end:"2021-01-31"}),f=[{templateType:"VkfInput",label:"Name",prop:"name"},{templateType:"ElDivider",label:"Divider",contentPosition:"left"},{templateType:"VkfDatePickerRange",label:"Date Range",startProp:"start",endProp:"end",valueFormat:"YYYY-MM-DD",selectOptions:[{label:"近三天",value:[t().subtract(3,"day").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一周",value:[t().subtract(1,"week").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一个月",value:[t().subtract(1,"month").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近半年",value:[t().subtract(6,"month").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一年",value:[t().subtract(1,"year").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]}]}];return(V,r)=>(i(),$(C,null,[F(I(a.value)+" ",1),p(m(U),{"form-items":f,data:a.value,onSetData:r[1]||(r[1]=n=>m(u)(a.value,n))},{rendererTemplate:c(()=>[p(m(b)),p(m(s),{data:a.value,onSetData:r[0]||(r[0]=n=>m(u)(a.value,n))},null,8,["data"])]),_:1},8,["data"])],64))}});export{le as default};