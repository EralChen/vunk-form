import{V as y}from"./chunk-B6VBOvoE.js";import{V as I}from"./chunk-Ci0p3MOE.js";import{a as b}from"./chunk-DsBBj1p-.js";import{g as $,s as l}from"./chunk-B4hdL3T5.js";import{d,M as g,q as f,o as n,a as s,w as u,m as v,I as C,A as D,c as E,b as F,u as r}from"./chunk-DxfIC8xT.js";import{E as G}from"./chunk-CzuHD5Uw.js";import"./chunk-Dd5vnLK-.js";import"./chunk-UADQAoLm.js";import"./chunk-CktGiYy0.js";import"./chunk-D8_IgwPV.js";import"./chunk-Zpopvlea.js";import"./chunk-8sjvu-bb.js";import"./chunk-7f9y_sjO.js";import"./chunk-DBIPdCjN.js";import"./chunk-D_gWQw3W.js";import"./chunk-Os4IqhMQ.js";import"./chunk-qb8RmcqJ.js";import"./chunk-DssxoOUq.js";import"./chunk-Cj5HS6bB.js";import"./chunk-dKU2nFqE.js";import"./chunk-BYxW8SGa.js";import"./chunk-zKPkODU6.js";import"./chunk-DcZCBNiu.js";import"./chunk-DWTU0c_A.js";import"./chunk-DCNRgwGJ.js";import"./chunk-DG4GYJ0w.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";const M={data:{type:Object,default:()=>({})}},R={setData:e=>e},w=d({name:"VkfTemplatesMapbox",components:{VkfGeoinput:I,VkfFormItemRendererTemplate:b},emits:R,props:M,setup(){return{getValue:$}}});function x(e,t,i,c,o,a){const V=f("VkfGeoinput"),_=f("VkfFormItemRendererTemplate");return n(),s(_,{type:"VkfGeoinput"},{default:u(({data:p,templateIf:k})=>[k(e.data)?(n(),s(V,v({key:0},p,{"model-value":e.getValue(e.data,p.prop),"onUpdate:modelValue":T=>e.$emit("setData",{k:p.prop,v:T})}),null,16,["model-value","onUpdate:modelValue"])):C("",!0)]),_:1})}const m=g(w,[["render",x]]);m.install=e=>{e.component(m.name,m)};const se=d({__name:"basic",setup(e){const t=D({geo:G,readonly:!1}),i=E(()=>[{templateType:"VkfSwitch",prop:"readonly",label:"只读"},{templateType:"VkfGeoinput",label:"地理位置",prop:"geo",readonly:t.readonly}]);return(c,o)=>(n(),s(r(y),{data:t,onSetData:o[1]||(o[1]=a=>r(l)(t,a)),formItems:i.value},{rendererTemplate:u(()=>[F(r(m),{data:t,onSetData:o[0]||(o[0]=a=>r(l)(t,a))},null,8,["data"])]),_:1},8,["data","formItems"]))}});export{se as default};