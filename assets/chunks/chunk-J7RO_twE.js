import{V as r}from"./chunk-CO-KMnog.js";import{d as v,g as d,o as f,n as V,b as l,u as a,w as i,s as b,v as m,x as g,F as k}from"./chunk-Dw53j9Qa.js";const E=v({__name:"table-select",props:{modelValue:{type:String,default:void 0}},emits:["update:modelValue"],setup(u){const t=d(!1),n=d([]);s();function s(){n.value=[{value:"1",label:"Option1"}]}return(p,e)=>(f(),V(k,null,[l(a(r),{"model-value":u.modelValue,readonly:!0,options:n.value,onClick:e[0]||(e[0]=o=>t.value=!0)},null,8,["model-value","options"]),l(a(g),{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value=o),title:"Select"},{default:i(()=>[l(a(b),{"model-value":{id:u.modelValue},"value-key":"id","onUpdate:modelValue":e[1]||(e[1]=o=>p.$emit("update:modelValue",o.id))},{default:i(()=>[l(a(m),{label:"Option1",value:{id:"1",name:"Option1"}}),l(a(m),{label:"Option2",value:{id:"2",name:"2"}})]),_:1},8,["model-value"])]),_:1},8,["modelValue"])],64))}});export{E as _};