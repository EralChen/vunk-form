import{N as g,V as T}from"./chunk-GB91i2a_.js";import{v as L,a as j}from"./chunk-SFMK0eOr.js";import{V as w}from"./chunk-By3pYRVZ.js";import{V as x}from"./chunk-B6wX9VKk.js";import{V as z}from"./chunk-DY7ba3PM.js";import{V as H}from"./chunk-1cWUYT_U.js";import{bf as J,bg as M,d as P,z as Y,b1 as q,R as h,g as s,o as i,a as C,w as m,b as t,m as d,Y as A,a1 as G,r as K,n as Q,t as W,M as X,a2 as I,I as y,J as B,p as Z,h as ee,F as te}from"./chunk-9eDQGDPh.js";import{V as oe}from"./chunk-CaCyDyWa.js";import{V as ae}from"./chunk-BvKd6roE.js";import{V as ne}from"./chunk-iKnkX29l.js";import{V as le}from"./chunk-lfOq2O_2.js";import{p as me,V as se,E as de,F as re,c as pe}from"./chunk-CrV41Nja.js";import{V as ue}from"./chunk-X_W1x-jA.js";import{V as fe}from"./chunk-4fDyzd8m.js";import{V as ce}from"./chunk-BOhFrD_H.js";const ie=()=>g,Ve={data:{type:Object,default:()=>({})},createIntoUndefined:{type:Function,default:ie}},ke={setData:n=>n},_e={...me,...J,buttonSlots:{type:Object,default:()=>({})},buttonLabel:{type:String,default:""},validate:{type:Boolean,default:!0}},ve={...M},Ue=P({name:"VkfButton",components:{VkfFormItem:se,ElButton:Y},emits:ve,props:_e,setup(n,{emit:r}){const V=de(n),k=re(r,["click"]),_=pe(n),u=q("elFormRef",null);return{formBindProps:_,coreBindProps:V,coreOnEmits:k,handleClick:l=>{if(!u||!n.validate)return r("click",l);u.value.validate().then(p=>{p&&r("click",l)}).catch(L)}}}});function be(n,r,V,k,_,u){const f=s("ElButton"),l=s("VkfFormItem");return i(),C(l,y(B(n.formBindProps)),{default:m(()=>[t(f,d(n.coreBindProps,A(n.coreOnEmits),{onClick:n.handleClick}),G({default:m(()=>[K(n.$slots,"default",{},()=>[Q(W(n.buttonLabel),1)])]),_:2},[X(n.buttonSlots,(p,v)=>({name:v,fn:m(U=>[(i(),C(I(p?.(U))))])}))]),1040,["onClick"])]),_:3},16)}const c=h(Ue,[["render",be]]);c.install=n=>{n.component(c.name,c)};const Ce=P({name:"VkfTemplatesDefault",components:{VkfFormItemRendererTemplate:j,VkfInput:w,VkfSwitch:x,VkfSelect:z,VkfDatePicker:H,VkfInputNumber:oe,VkfRadio:ae,VkfCheckbox:ne,VkfUpload:T,VkfColorPicker:le,VkfButton:c,VkfCascader:ue,VkfInputLink:fe,VkfSlider:ce},props:Ve,emits:ke,setup(){return{pickObject:Z}}});function ye(n,r,V,k,_,u){const f=s("VkfButton"),l=s("VkfFormItemRendererTemplate"),p=s("VkfColorPicker"),v=s("VkfUpload"),U=s("VkfCheckbox"),S=s("VkfRadio"),$=s("VkfInput"),F=s("VkfSwitch"),R=s("VkfSelect"),D=s("VkfDatePicker"),E=s("VkfInputNumber"),O=s("VkfCascader"),N=s("VkfSlider");return i(),ee(te,null,[t(l,{type:"VkfButton"},{default:m(({props:o})=>[t(f,y(B(o)),null,16)]),_:1}),t(l,{type:"VkfColorPicker"},{default:m(({props:o,input:e,value:a})=>[t(p,d({"model-value":a},o,{"onUpdate:modelValue":e}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfUpload"},{default:m(({props:o,value:e,input:a})=>[t(v,d({"file-list":e},o,{"onUpdate:fileList":a}),null,16,["file-list","onUpdate:fileList"])]),_:1}),t(l,{type:"VkfCheckbox"},{default:m(({props:o,value:e,input:a})=>[t(U,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfRadio"},{default:m(({props:o,value:e,input:a})=>[t(S,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfInput"},{default:m(({props:o,value:e,input:a})=>[t($,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfSwitch"},{default:m(({props:o,value:e,input:a})=>[t(F,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfSelect"},{default:m(({props:o,value:e,input:a})=>[t(R,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfDatePicker"},{default:m(({props:o,value:e,input:a})=>[t(D,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfInputNumber"},{default:m(({props:o,value:e,input:a})=>[t(E,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfCascader"},{default:m(({props:o,value:e,input:a})=>[t(O,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"VkfSlider"},{default:m(({props:o,value:e,input:a})=>[t(N,d({"model-value":e},o,{"onUpdate:modelValue":a}),null,16,["model-value","onUpdate:modelValue"])]),_:1}),t(l,{type:"Component"},{default:m(({data:o,raw:e})=>[(i(),C(I(typeof e.is=="function"?e.is(e):e.is),y(B(n.pickObject(o,{excludes:["is"]}))),null,16))]),_:1})],64)}const b=h(Ce,[["render",ye]]);b.install=n=>{n.component(b.name||"VkfTemplatesDefault",b)};export{b as V};