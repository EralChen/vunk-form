import{V as b}from"./chunk-BSIgZ0SB.js";import{a as g}from"./chunk-BX0mH7Ac.js";import{g as P,s as u}from"./chunk-B-mQUuBe.js";import{d as D,N as _,f as Y,o as i,a as d,w as c,m as T,i as y,r as R,e as t,g as $,j as F,t as I,b as p,u as m,F as N}from"./chunk-B7yAMqV2.js";import{V as C}from"./chunk-CIKVDVZg.js";import{V as U}from"./chunk-DKp1oj4K.js";import"./chunk-fEI7Cr-O.js";import"./chunk-CSBu60xx.js";import"./chunk-cqKyegso.js";import"./chunk-Dd5vnLK-.js";import"./chunk-DrHEUj93.js";import"./chunk-gbA2XUGj.js";import"./chunk-Do5UraTm.js";import"./chunk-C4S8HXXU.js";import"./chunk-CgG6sjkH.js";import"./chunk-C23FRrbX.js";import"./chunk-BYoL798h.js";import"./chunk-Dz3VIvDR.js";import"./chunk-zKPkODU6.js";import"./chunk-_-weVnNL.js";import"./chunk-BzeO1QqW.js";import"./chunk-CCMKujVa.js";import"./chunk-B7B6L9da.js";import"./chunk-DihJ_1FE.js";const j={data:{type:Object,default:()=>({})}},w={setData:e=>e},B=D({name:"VkfTemplatesVariant",components:{VkfFormItemRendererTemplate:g,VkfDatePickerRange:C},props:j,emits:w,setup(){return{getValue:P}}});function E(e,a,f,V,r,n){const k=Y("VkfDatePickerRange"),M=Y("VkfFormItemRendererTemplate");return i(),d(M,{type:"VkfDatePickerRange"},{default:c(({data:o,templateIf:v})=>[v(e.data)?(i(),d(k,T({key:0},o,{"start-value":e.getValue(e.data,o.startProp),"end-value":e.getValue(e.data,o.endProp),"onUpdate:startValue":l=>e.$emit("setData",{k:o.startProp,v:l}),"onUpdate:endValue":l=>e.$emit("setData",{k:o.endProp,v:l})}),null,16,["start-value","end-value","onUpdate:startValue","onUpdate:endValue"])):y("",!0)]),_:1})}const s=_(B,[["render",E]]);s.install=e=>{e.component(s.name||"VkfTemplatesVariant",s)};const le=D({__name:"basic",setup(e){const a=R({name:"John Doe",start:"2021-01-01",end:"2021-01-31"}),f=[{templateType:"VkfInput",label:"Name",prop:"name"},{templateType:"ElDivider",label:"Divider",contentPosition:"left"},{templateType:"VkfDatePickerRange",label:"Date Range",startProp:"start",endProp:"end",valueFormat:"YYYY-MM-DD",selectOptions:[{label:"近三天",value:[t().subtract(3,"day").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一周",value:[t().subtract(1,"week").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一个月",value:[t().subtract(1,"month").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近半年",value:[t().subtract(6,"month").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]},{label:"近一年",value:[t().subtract(1,"year").format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]}]}];return(V,r)=>(i(),$(N,null,[F(I(a.value)+" ",1),p(m(U),{"form-items":f,data:a.value,onSetData:r[1]||(r[1]=n=>m(u)(a.value,n))},{rendererTemplate:c(()=>[p(m(b)),p(m(s),{data:a.value,onSetData:r[0]||(r[0]=n=>m(u)(a.value,n))},null,8,["data"])]),_:1},8,["data"])],64))}});export{le as default};