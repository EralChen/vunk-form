import{p as l,V as p,C as m,D as f,b as u,u as C}from"./chunk-CSFIeiLH.js";import{aU as y,aV as P,g as V,as as B,c as v,d as h,aW as k,W as E,l as d,o as U,e as g,w as I,f as O,m as _,a4 as $,P as b,Q as F}from"./chunk-C7hCAWl2.js";const w={...y,...l,optionsUrl:{type:String,default:""},readonly:{type:Boolean,default:void 0}},R={...P},W=(o,n)=>{const e=V([]),t=s=>{s?fetch(s).then(a=>a.json()).then(a=>{e.value=a}):e.value=[]};return o.optionsUrl&&t(o.optionsUrl),B(()=>o.optionsUrl,s=>{n("update:modelValue",void 0),s&&t(s)}),v(()=>e.value.length?e.value:o.options)},j=h({name:"VkfCascader",components:{ElCascader:k,VkfFormItem:p},props:w,emits:R,setup(o,{emit:n}){const e=m(o,["options"]),t=f(n),r=u(o),s=C(o),a=W(o,n);return{coreBindProps:e,coreOnEmits:t,formItemBindProps:r,readonly:s,options:a}}});function z(o,n,e,t,r,s){const a=d("ElCascader"),i=d("VkfFormItem");return U(),g(i,b(F(o.formItemBindProps)),{default:I(()=>[O(a,_(o.coreBindProps,{readonly:o.readonly,disabled:o.readonly||o.disabled,options:o.options,class:{"is-readonly":o.readonly}},$(o.coreOnEmits)),null,16,["readonly","disabled","options","class"])]),_:1},16)}const c=E(j,[["render",z]]);c.install=o=>{o.component(c.name,c)};export{c as V,R as e,w as p,W as u};