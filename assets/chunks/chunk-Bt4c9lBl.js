import{V as u}from"./chunk-cL7z3jf8.js";import{d,r as c,A as f,o as V,g,h as p,b as o,w as l,i as k,u as r,s as _,t as b,v as C,F as E,E as m}from"./chunk-CYWh0Wrq.js";import"./chunk-DC95vdEF.js";import"./chunk-xotXDcNP.js";import"./chunk-Dd5vnLK-.js";import"./chunk-Btddj6lZ.js";import"./chunk-JyTIT74I.js";import"./chunk-Bk8DZYL2.js";import"./chunk-D87gw9x3.js";import"./chunk-BAy4p8G4.js";import"./chunk-B-mQUuBe.js";import"./chunk-Dc2PGHKW.js";import"./chunk-B4R55XNf.js";import"./chunk-CEj2M7D-.js";import"./chunk-DgHbFYun.js";import"./chunk-zKPkODU6.js";import"./chunk-0hEpk0Wu.js";import"./chunk-BNymWNOx.js";import"./chunk-B_wVeFXP.js";import"./chunk-DQtfApPz.js";import"./chunk-CnpeguZj.js";import"./chunk-fEI7Cr-O.js";const L=d({__name:"prop",setup(F){const a=c(),e=f({users:[{name:"John",age:18},{name:"Doe",age:20}]}),s=[{prop:"name",label:"Name",templateType:"VkfInput",align:"center",templateProps:{required:!0}},{prop:"age",label:"Age",templateType:"VkfInputNumber"}],i=()=>{a.value?.validate().then(()=>{m.success("Validation passed")}).catch(()=>{m.error("Validation failed")})};return(N,t)=>(V(),g(E,null,[p("p",null,[o(r(_),{onClick:i},{default:l(()=>t[1]||(t[1]=[k(" 提交 ")])),_:1})]),p("p",null,b(e),1),o(r(C),{ref_key:"elFormRef",ref:a,model:e},{default:l(()=>[o(r(u),{modelValue:e.users,"onUpdate:modelValue":t[0]||(t[0]=n=>e.users=n),label:"Input Collection",columns:s,prop:"users"},null,8,["modelValue"])]),_:1},8,["model"])],64))}});export{L as default};