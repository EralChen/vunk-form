import{V as u}from"./chunk-CfoF8apj.js";import{d,r as c,B as f,o as V,g,h as p,b as o,w as l,j as k,u as r,v as _,t as b,x,F as B,E as m}from"./chunk-B7yAMqV2.js";import"./chunk-cqKyegso.js";import"./chunk-BOrmlcyO.js";import"./chunk-Dd5vnLK-.js";import"./chunk-G9k4Bfeh.js";import"./chunk-gbA2XUGj.js";import"./chunk-Do5UraTm.js";import"./chunk-C4S8HXXU.js";import"./chunk-CSBu60xx.js";import"./chunk-B-mQUuBe.js";import"./chunk-CgG6sjkH.js";import"./chunk-C23FRrbX.js";import"./chunk-BYoL798h.js";import"./chunk-Dz3VIvDR.js";import"./chunk-zKPkODU6.js";import"./chunk-_-weVnNL.js";import"./chunk-BzeO1QqW.js";import"./chunk-CCMKujVa.js";import"./chunk-B7B6L9da.js";import"./chunk-1FfrhadM.js";import"./chunk-fEI7Cr-O.js";const L=d({__name:"prop",setup(C){const a=c(),e=f({users:[{name:"John",age:18},{name:"Doe",age:20}]}),s=[{prop:"name",label:"Name",templateType:"VkfInput",align:"center",templateProps:{required:!0}},{prop:"age",label:"Age",templateType:"VkfInputNumber"}],n=()=>{a.value?.validate().then(()=>{m.success("Validation passed")}).catch(()=>{m.error("Validation failed")})};return(E,t)=>(V(),g(B,null,[p("p",null,[o(r(_),{onClick:n},{default:l(()=>t[1]||(t[1]=[k(" 提交 ")])),_:1})]),p("p",null,b(e),1),o(r(x),{ref_key:"elFormRef",ref:a,model:e},{default:l(()=>[o(r(u),{modelValue:e.users,"onUpdate:modelValue":t[0]||(t[0]=i=>e.users=i),label:"Input Collection",columns:s,prop:"users"},null,8,["modelValue"])]),_:1},8,["model"])],64))}});export{L as default};