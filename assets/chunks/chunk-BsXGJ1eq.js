import{p as k,V as y,b as C,y as h,z as v,u as V,x as P}from"./chunk-CAS0iGZj.js";import{ay as B,az as E,d as x,aA as _,aB as G,aC as R,c as g,p as F,W as I,l as m,o as l,a as f,w as r,b as $,m as b,a4 as A,n as O,F as z,R as M,a6 as j,y as w,t as D,P as N,Q as S}from"./chunk-C7ZeX_9O.js";const H={...k,...B,options:{type:Array,default:()=>[]},type:{type:String,default:"default"},defaultModelValue:{type:Array,default:void 0},modelValue:{type:Array,default:void 0}},L={...E},Q=x({name:"VkfCheckbox",components:{VkfFormItem:y,ElCheckbox:_,ElCheckboxGroup:G,ElCheckboxButton:R},props:H,emits:L,setup(e,{emit:a}){const c=C(e),d=h(e,["disabled"]),u=v(a),p=g(()=>e.options.filter(o=>o.value!==void 0&&o.value!==null));!e.modelValue&&e.defaultModelValue&&a("update:modelValue",e.defaultModelValue);const s=V(e);return{formItemBindProps:c,coreBindProps:d,coreOnEmits:u,options:p,readonly:s,pickRadioProps:o=>{const t=F(o,{excludes:["label","value"]});return P?t.value=o.value:t.label=o.value,t}}}});function T(e,a,c,d,u,p){const s=m("ElCheckboxGroup"),i=m("VkfFormItem");return l(),f(i,N(S(e.formItemBindProps)),{default:r(()=>[$(s,b({class:{"is-readonly":e.readonly}},e.coreBindProps,{disabled:e.readonly||e.disabled},A(e.coreOnEmits)),{default:r(()=>[(l(!0),O(z,null,M(e.options,o=>(l(),f(j(e.type==="button"?"ElCheckboxButton":"ElCheckbox"),b({key:o.value,label:o.value,ref_for:!0},e.pickRadioProps(o)),{default:r(()=>[w(D(o.label??o.value),1)]),_:2},1040,["label"]))),128))]),_:1},16,["class","disabled"])]),_:1},16)}const n=I(Q,[["render",T]]);n.install=e=>{e.component(n.name,n)};export{n as V};