import{V as b}from"./chunk-B6YyK9y3.js";import{a as P}from"./chunk-DsBBj1p-.js";import{g,s as u}from"./chunk-B4hdL3T5.js";import{d as D,M as _,q as Y,o as i,a as d,w as c,m as T,I as y,r as R,e as t,f as $,h as F,t as I,b as p,u as m,F as C}from"./chunk-DxfIC8xT.js";import{V as N}from"./chunk-Cf_S2Ed9.js";import{V as U}from"./chunk-B6VBOvoE.js";import"./chunk-Dd5vnLK-.js";import"./chunk-Zpopvlea.js";import"./chunk-UADQAoLm.js";import"./chunk-D_gWQw3W.js";import"./chunk-Os4IqhMQ.js";import"./chunk-qb8RmcqJ.js";import"./chunk-DssxoOUq.js";import"./chunk-Cj5HS6bB.js";import"./chunk-dKU2nFqE.js";import"./chunk-BYxW8SGa.js";import"./chunk-zKPkODU6.js";import"./chunk-DcZCBNiu.js";import"./chunk-DWTU0c_A.js";import"./chunk-DCNRgwGJ.js";import"./chunk-DG4GYJ0w.js";import"./chunk-fEI7Cr-O.js";import"./chunk-CktGiYy0.js";const h={data:{type:Object,default:()=>({})}},w={setData:e=>e},B=D({name:"VkfTemplatesVariant",components:{VkfFormItemRendererTemplate:P,VkfDatePickerRange:N},props:h,emits:w,setup(){return{getValue:g}}});function E(e,a,f,V,r,n){const k=Y("VkfDatePickerRange"),M=Y("VkfFormItemRendererTemplate");return i(),d(M,{type:"VkfDatePickerRange"},{default:c(({data:o,templateIf:v})=>[v(e.data)?(i(),d(k,T({key:0},o,{"start-value":e.getValue(e.data,o.startProp),"end-value":e.getValue(e.data,o.endProp),"onUpdate:startValue":l=>e.$emit("setData",{k:o.startProp,v:l}),"onUpdate:endValue":l=>e.$emit("setData",{k:o.endProp,v:l})}),null,16,["start-value","end-value","onUpdate:startValue","onUpdate:endValue"])):y("",!0)]),_:1})}const s=_(B,[["render",E]]);s.install=e=>{e.component(s.name||"VkfTemplatesVariant",s)};const se=D({__name:"basic",setup(e){const a=R({name:"John Doe",start:"2021-01-01",end:"2021-01-31"}),f=[{templateType:"VkfInput",label:"Name",prop:"name"},{templateType:"ElDivider",label:"Divider",contentPosition:"left"},{templateType:"VkfDatePickerRange",label:"Date Range",startProp:"start",endProp:"end",valueFormat:"YYYY-MM-DD",selectOptions:[{label:"近三天",value:[t().subtract(3,"day").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一周",value:[t().subtract(1,"week").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一个月",value:[t().subtract(1,"month").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近半年",value:[t().subtract(6,"month").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一年",value:[t().subtract(1,"year").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]}]}];return(V,r)=>(i(),$(C,null,[F(I(a.value)+" ",1),p(m(U),{"form-items":f,data:a.value,onSetData:r[1]||(r[1]=n=>m(u)(a.value,n))},{rendererTemplate:c(()=>[p(m(b)),p(m(s),{data:a.value,onSetData:r[0]||(r[0]=n=>m(u)(a.value,n))},null,8,["data"])]),_:1},8,["data"])],64))}});export{se as default};