import{p as u,e as c,V as f,c as m,a as y}from"./chunk-0__ZOe37.js";import{d as k,c as b,J as g,h as n,aH as h,aI as V,H as v,W as E,l as S,o as i,n as B,b as I,a as $,m as U,a2 as A,ar as C}from"./chunk-Dw53j9Qa.js";import{u as P}from"./chunk-BZT5mSTd.js";const w={...u,type:{type:String,default:"textarea"},rows:{type:Number,default:4},label:{type:String,default:"回填地址"},placeholder:{type:String,default:"上传文件后, 将文件下载地址粘贴到此处"},readonly:{type:Boolean,default:void 0},uploadUrl:{type:String,default:"https://pan.baidu.com/disk/main#/index?category=all"},referenceUrl:{type:String,default:"https://pan.baidu.com/disk/main#/index?category=all"},referenceOnly:{type:Boolean,default:!1},referenceLabel:{type:String,default:"参考地址"},modelValue:{type:String,default:""}},L={...c},O=k({name:"VkfInputLink",components:{VkfInput:f},props:w,emits:L,setup(e,{emit:l}){const o=m(e),s=y(l),p=P(e),d=t=>()=>n(v,{onClick:()=>window.open(t),disabled:!t},()=>n(h,{class:"vkf-input-link-icon",size:16},()=>n(V))),a=b(()=>{const t=[{pattern:/^(http|https):\/\/([\w.]+\/?)\S*$/,message:"请输入正确的链接地址"}];return Array.isArray(e.rules)&&t.push(...e.rules),g(e.rules)&&t.push(e.rules),t});return{coreProps:o,coreEmits:s,createAppendEl:d,rules:a,readonly:p}}}),H={class:"vkf-form-item vkf-input-link"};function N(e,l,o,s,p,d){const a=S("VkfInput");return i(),B("div",H,[I(a,{label:e.referenceLabel,disabled:!0,"model-value":e.referenceUrl??e.uploadUrl,"input-slots":{append:e.createAppendEl(e.referenceUrl??e.uploadUrl)}},null,8,["label","model-value","input-slots"]),e.referenceOnly?C("",!0):(i(),$(a,U({key:0},e.coreProps,{rules:e.rules,readonly:e.readonly,type:e.readonly?"text":e.type,"input-slots":{append:e.readonly?e.createAppendEl(e.modelValue):void 0}},A(e.coreEmits)),null,16,["rules","readonly","type","input-slots"]))])}const r=E(O,[["render",N]]);r.install=e=>{e.component(r.name,r)};export{r as V};