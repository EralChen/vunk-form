import{p as l,V as p,C as m,D as f,c as u,u as y}from"./chunk-DC95vdEF.js";import{aI as C,aJ as P,r as B,ay as V,c as v,d as h,aK as k,M as E,f as d,o as U,a as I,w as O,b as _,m as $,U as b,X as g,Y as F}from"./chunk-CYWh0Wrq.js";const w={...C,...l,optionsUrl:{type:String,default:""},readonly:{type:Boolean,default:void 0}},R={...P},j=(o,n)=>{const e=B([]),t=s=>{s?fetch(s).then(a=>a.json()).then(a=>{e.value=a}):e.value=[]};return o.optionsUrl&&t(o.optionsUrl),V(()=>o.optionsUrl,s=>{n("update:modelValue",void 0),s&&t(s)}),v(()=>e.value.length?e.value:o.options)},z=h({name:"VkfCascader",components:{ElCascader:k,VkfFormItem:p},props:w,emits:R,setup(o,{emit:n}){const e=m(o,["options"]),t=f(n),r=u(o),s=y(o),a=j(o,n);return{coreBindProps:e,coreOnEmits:t,formItemBindProps:r,readonly:s,options:a}}});function D(o,n,e,t,r,s){const a=d("ElCascader"),i=d("VkfFormItem");return U(),I(i,g(F(o.formItemBindProps)),{default:O(()=>[_(a,$(o.coreBindProps,{readonly:o.readonly,disabled:o.readonly||o.disabled,options:o.options,class:{"is-readonly":o.readonly}},b(o.coreOnEmits)),null,16,["readonly","disabled","options","class"])]),_:1},16)}const c=E(z,[["render",D]]);c.install=o=>{o.component(c.name,c)};export{c as V,R as e,w as p,j as u};