import{e as V,p as y,V as k,c as v,a as T}from"./chunk-CYI4czFf.js";import{p as z,d as b,aT as A,g as u,N as D,as as c,W as $,l as f,o as g,e as F,w as P,f as S,r as R,m as B,a4 as q,n as E,G,t as I,u as h,F as C}from"./chunk-C7hCAWl2.js";import{V as N}from"./chunk-Cn2Z79B6.js";import"./chunk-CsCbVIPo.js";import"./chunk-B2eZl6J6.js";import"./chunk-CHVJJ-_P.js";import{s as U}from"./chunk-DyvYxXn8.js";import"./chunk-vjpQnoJ0.js";import"./chunk-fziB7CNt.js";import"./chunk-B8uROixY.js";import"./chunk-C4hgKrpu.js";import"./chunk-88KJLNH2.js";import"./chunk-2IrP2epe.js";import"./chunk-C_pCzuuC.js";import"./chunk-DVEoTv95.js";import"./chunk-Cy-QB2Eg.js";import"./chunk-C40iBw0I.js";import"./chunk-DYP5Jm2f.js";import"./chunk-rZ9kANyF.js";import"./chunk-D810R0as.js";import"./chunk-CSFIeiLH.js";import"./chunk-fEI7Cr-O.js";import"./chunk-BV6Aturx.js";import"./chunk-BNL6fRHT.js";import"./chunk-D5iTdERt.js";import"./chunk-zKPkODU6.js";const j=z(y,{excludes:["currentPage","pageSize","total","data","start"]}),O={...j,readApi:{type:Function,default:()=>({rows:[],total:0})},getRows:{type:Function,default:void 0},queryItems:{type:Array,default:()=>[]},inheritTemplates:{type:Boolean,default:!1}};({...V});const H=b({name:"VkfApiTablesSelect",components:{VkfTablesSelect:k,VkfForm:N},props:O,setup(e,{emit:s}){const l=A(a,300),i=v(e,["getRows"]),n=T(s),r=u({}),o=D({data:[],total:0}),t=u({pageSize:10,start:0});c(t,l,{deep:!0,immediate:!0}),c(r,l,{deep:!0});async function a(){const m=await e.readApi(r.value,{...t.value,currentPage:t.value.start/t.value.pageSize+1});o.data=m.rows,o.total=m.total}return{pagination:t,tableState:o,setData:U,queryData:r,coreProps:i,coreEmits:n,defaultGetRows:async m=>{const{rows:w}=await e.readApi({ids:m.join(",")});return w}}}});function W(e,s,l,i,n,r){const o=f("VkfForm"),t=f("VkfTablesSelect");return g(),F(t,B({start:e.pagination.start,"onUpdate:start":s[1]||(s[1]=a=>e.pagination.start=a),"page-size":e.pagination.pageSize,"onUpdate:pageSize":s[2]||(s[2]=a=>e.pagination.pageSize=a),data:e.tableState.data,total:e.tableState.total,"get-rows":e.getRows||e.defaultGetRows},e.coreProps,q(e.coreEmits)),{dialog:P(()=>[S(o,{"form-items":e.queryItems,inline:!0,data:e.queryData,"inherit-templates":e.inheritTemplates,onSetData:s[0]||(s[0]=a=>e.setData(e.queryData,a))},null,8,["form-items","data","inherit-templates"]),R(e.$slots,"dialog")]),_:3},16,["start","page-size","data","total","get-rows"])}const d=$(H,[["render",W]]);d.install=e=>{e.component(d.name||"VkfApiTablesSelect",d)};const ge=b({__name:"basic",setup(e){const s=Array.from({length:100}).map((o,t)=>({id:t,label:`label${t}`})),l=async(o,t)=>{let a=[...s];return o.ids&&(a=a.filter(p=>o.ids.includes(p.id))),o.label&&(a=a.filter(p=>p.label.includes(o.label))),t&&(a=a.slice(t.start,t.start+t.pageSize)),{rows:a,total:a.length}},i=[{prop:"id",label:"id"},{prop:"label",label:"label"}],n=[{templateType:"VkfInput",label:"label",prop:"label"}],r=u([]);return(o,t)=>(g(),E(C,null,[G(I(r.value)+" ",1),S(h(d),{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),"read-api":l,columns:i,"query-items":n},null,8,["modelValue"])],64))}});export{ge as default};