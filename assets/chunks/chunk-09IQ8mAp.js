import{s as i}from"./chunk-B-mQUuBe.js";import{d as s,r as n,c as u,o as f,g as d,h as c,t as b,b as y,u as o,F as V}from"./chunk-CYWh0Wrq.js";import{V as k}from"./chunk-CDMxM4cd.js";import"./chunk-Btddj6lZ.js";import"./chunk-qEN6DhVs.js";import"./chunk-CHVJJ-_P.js";import"./chunk-xotXDcNP.js";import"./chunk-JyTIT74I.js";import"./chunk-Dc2PGHKW.js";import"./chunk-D87gw9x3.js";import"./chunk-B4R55XNf.js";import"./chunk-CEj2M7D-.js";import"./chunk-Bk8DZYL2.js";import"./chunk-0hEpk0Wu.js";import"./chunk-DgHbFYun.js";import"./chunk-BAy4p8G4.js";import"./chunk-BNymWNOx.js";import"./chunk-B_wVeFXP.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Dd5vnLK-.js";import"./chunk-DC95vdEF.js";import"./chunk-DQtfApPz.js";import"./chunk-zKPkODU6.js";const L=s({__name:"dynamic-form",setup(v){const e=n({type:"username"}),p=[{label:"邮箱",prop:"email",required:!0,templateType:"VkfInput"},{label:"密码",prop:"password",templateType:"VkfInput"}],r=[{label:"手机号",prop:"phone",required:!0,templateType:"VkfInput"},{label:"验证码",prop:"code",templateType:"VkfInput"}],a={username:userFormItems,email:p,phone:r},m=u(()=>[{prop:"type",label:"登录方式",templateType:"VkfRadio",options:[{label:"用户名",value:"username"},{label:"邮箱",value:"email"},{label:"手机号",value:"phone"}]},...a[e.value.type]??[]]);return(I,t)=>(f(),d(V,null,[c("p",null,b(e.value),1),y(o(k),{"label-width":120,data:e.value,"form-items":m.value,onSetData:t[0]||(t[0]=l=>o(i)(e.value,l))},null,8,["data","form-items"])],64))}});export{L as default};