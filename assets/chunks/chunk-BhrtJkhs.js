import{V as M}from"./chunk-B6VBOvoE.js";import{N as b,r as k,c as f,u,d as V,A as v,o as x,f as K,h as R,t as C,b as _,F as j}from"./chunk-DxfIC8xT.js";import{s as h}from"./chunk-B4hdL3T5.js";import"./chunk-Dd5vnLK-.js";import"./chunk-DsBBj1p-.js";import"./chunk-UADQAoLm.js";import"./chunk-CktGiYy0.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Zpopvlea.js";import"./chunk-D_gWQw3W.js";import"./chunk-Os4IqhMQ.js";import"./chunk-qb8RmcqJ.js";import"./chunk-DssxoOUq.js";import"./chunk-Cj5HS6bB.js";import"./chunk-dKU2nFqE.js";import"./chunk-BYxW8SGa.js";import"./chunk-zKPkODU6.js";import"./chunk-DcZCBNiu.js";import"./chunk-DWTU0c_A.js";import"./chunk-DCNRgwGJ.js";import"./chunk-DG4GYJ0w.js";const A=(a,o={})=>{b(a)||(a=k(a));const m={...o,slotsChildren:["default"]};o.slotsChildren&&m.slotsChildren.push(...o.slotsChildren);const n=f(()=>{const t={},r={},c={};function l(g,y=[]){g.forEach((e,i)=>{const p=[...y,i],I={source:e,key:p,nextKey:[...y,i+1],prop:e.prop,id:e.id};t[p.join()]=I,e.prop&&(r[e.prop]=I),e.id&&(c[e.id]=I),e.templateSlots&&(Array.isArray(e.templateSlots)&&(p.push("templateSlots"),l(e.templateSlots,p)),m.slotsChildren.forEach(S=>{Array.isArray(e.templateSlots[S])&&(p.push("templateSlots",S),l(e.templateSlots[S],p))}))})}return l(u(a)),{keyRecord:t,propRecord:r,idRecord:c}});return[a,{manager:n,getManagerInfoByProp:t=>n.value.propRecord[t],getManagerInfoByKey:t=>n.value.keyRecord[t.join()],getManagerInfoById:t=>n.value.idRecord[t]}]},ee=V({__name:"manager",setup(a){const o=v({r:0,pi:3.14}),m=k([{templateType:"VkfInput",prop:"r",type:"number",label:"圆的半径"},{templateType:"VkfInput",prop:"pi",type:"number",label:"派的取值"},{prop:"name",templateType:"VkfSelect",label:"名称",id:"cxName"}]),n=f(()=>m.value),[s,{getManagerInfoByProp:d,getManagerInfoByKey:B,getManagerInfoById:t}]=A(n);console.log(s);const r=d("pi");console.log(r),r.source.disabled=!0;const c=f(()=>o.r?o.pi*o.r*o.r:0);console.log(s.value,r.nextKey),h(s.value,{k:r.nextKey,v:{prop:"mj",templateType:"VkfInput",disabled:!0,label:"面积",modelValue:c},insert:!0}),d("mj"),f(()=>o.r?2*o.pi*o.r:0);const l=B([0]);console.log(l);const g=t("cxName");return console.log(g),(y,e)=>(x(),K(j,null,[R(C(o)+" ",1),_(u(M),{formItems:u(s),data:o,onSetData:e[0]||(e[0]=i=>u(h)(o,i))},null,8,["formItems","data"])],64))}});export{ee as default};