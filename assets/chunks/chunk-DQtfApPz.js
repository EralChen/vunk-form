import{p,V as c,c as u,u as f,j as V,k as P}from"./chunk-DC95vdEF.js";import{a6 as k,a7 as S,d as E,a8 as B,M as $,f as d,o as b,a as y,w as t,b as I,m as _,U as v,W as C,X as F,Y as M}from"./chunk-CYWh0Wrq.js";const g={...p,...k,modelValue:null,defaultModelValue:null},h={...S},w=E({name:"VkfSlider",components:{ElSlider:B,VkfFormItem:c},props:g,emits:h,setup(e,{emit:s}){const a=u(e),r=f(e),l=V(e,["modelValue","disabled"]),n=P(s);return{readonly:r,formItemBindProps:a,coreProps:l,coreEmits:n}}});function R(e,s,a,r,l,n){const m=d("ElSlider"),i=d("VkfFormItem");return b(),y(i,F(M(e.formItemBindProps)),{default:t(()=>[I(m,_({class:{"is-readonly":e.readonly}},e.coreProps,{"model-value":e.modelValue??e.defaultModelValue,disabled:e.readonly||e.disabled},v(e.coreEmits)),{default:t(()=>[C(e.$slots,"default")]),_:3},16,["class","model-value","disabled"])]),_:3},16)}const o=$(w,[["render",R]]);o.install=e=>{e.component(o.name,o)};export{o as V};