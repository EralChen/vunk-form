import{V as n}from"./chunk-Cn2Z79B6.js";import{h as m,d as i,N as s,g as d,W as u,l as a,o as f,n as c,q as b,f as p,w as k,G as y,F as V}from"./chunk-C7hCAWl2.js";import{s as T}from"./chunk-DyvYxXn8.js";import"./chunk-Cy-QB2Eg.js";import"./chunk-CSFIeiLH.js";import"./chunk-zKPkODU6.js";import"./chunk-CsCbVIPo.js";import"./chunk-vjpQnoJ0.js";import"./chunk-fziB7CNt.js";import"./chunk-C_pCzuuC.js";import"./chunk-C4hgKrpu.js";import"./chunk-C40iBw0I.js";import"./chunk-B8uROixY.js";import"./chunk-88KJLNH2.js";import"./chunk-2IrP2epe.js";import"./chunk-DVEoTv95.js";import"./chunk-DYP5Jm2f.js";import"./chunk-rZ9kANyF.js";import"./chunk-D5iTdERt.js";import"./chunk-B2eZl6J6.js";import"./chunk-BV6Aturx.js";import"./chunk-BNL6fRHT.js";import"./chunk-fEI7Cr-O.js";const v=[{templateType:"VkfInput",prop:"input",label:"input"},{templateType:"VkfSelect",prop:"select",label:"select",options:[{value:1,label:"男"}]},{templateType:"VkfSwitch",prop:"switch",label:"switch",defaultModelValue:!0},{templateType:"VkfDatePicker",prop:"datePick",label:"date-pick"},{templateType:"VkfInputNumber",prop:"inputNumber",label:"input-number"},{prop:"radia",label:"radia",templateType:"VkfRadio",type:"button",options:[{value:1,label:"男"},{value:0,label:"女"}]},{prop:"checkbox",label:"checkbox",templateType:"VkfCheckbox",options:[{value:1,label:"男"},{value:0,label:"女"}],defaultModelValue:[1]},{prop:"upload",label:"upload",templateType:"VkfUpload",listType:"picture-card"},{templateType:"VkfCascader",prop:"cascader",label:"cascader"},{templateType:"Component",is:()=>m("div",null,"component")},{templateType:"VkfSlider",prop:"slider"},{templateType:"VkfButton",buttonLabel:"提交"}],C=i({components:{VkfForm:n},setup(){const e=s({checkbox:[1],input:"111",select:1,datePick:"2022-09-19T16:00:00.000Z",inputNumber:3,radia:1,upload:[{name:"yzq.sbx",url:"/images/element-demo.jpeg"}],slider:1}),t=d(!1);return{data:e,formItems:v,setData:T,readonly:t}}});function N(e,t,B,w,F,$){const l=a("ElButton"),r=a("VkfForm");return f(),c(V,null,[b("p",null,[p(l,{onClick:t[0]||(t[0]=o=>e.readonly=!e.readonly)},{default:k(()=>t[2]||(t[2]=[y(" !readonly ")])),_:1})]),p(r,{data:e.data,readonly:e.readonly,"form-items":e.formItems,onSetData:t[1]||(t[1]=o=>e.setData(e.data,o))},null,8,["data","readonly","form-items"])],64)}const Q=u(C,[["render",N]]);export{Q as default};