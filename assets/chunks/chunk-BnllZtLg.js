import{r as w}from"./chunk-cqil-AeH.js";import{_}from"./chunk-g5ML6rhb.js";import{d as g,o as y,f as k,b as m,w as B,h as R,u as E,s as x,F as C}from"./chunk-DxfIC8xT.js";import"./chunk-BfiZjFmg.js";import"./chunk-C6QB_GOf.js";import"./chunk-zKPkODU6.js";import"./chunk-Cz-DUOGK.js";import"./chunk-Zpopvlea.js";import"./chunk-UADQAoLm.js";import"./chunk-B4hdL3T5.js";import"./chunk-Dd5vnLK-.js";import"./chunk-DsBBj1p-.js";import"./chunk-D_gWQw3W.js";import"./chunk-Os4IqhMQ.js";import"./chunk-qb8RmcqJ.js";import"./chunk-DssxoOUq.js";import"./chunk-Cj5HS6bB.js";import"./chunk-dKU2nFqE.js";import"./chunk-BYxW8SGa.js";import"./chunk-DcZCBNiu.js";import"./chunk-DWTU0c_A.js";import"./chunk-DCNRgwGJ.js";import"./chunk-DG4GYJ0w.js";import"./chunk-B6VBOvoE.js";import"./chunk-CktGiYy0.js";import"./chunk-fEI7Cr-O.js";const p="65d59a930e288e5add131790",F="c6f7ee1b3d995c2cacf9919b09b68a61",L="/file/downloadByRange",s=200*1024*1024,nt=g({__name:"download",setup(T){const l=async()=>{d()},d=async()=>{const{size:n,realName:o}=await w({fileId:p});let e=Math.ceil(n/s);const t=Array.from({length:e},(I,c)=>{const h=c*s,b=Math.min((c+1)*s-1,n-1);return u(h,b)}),a=await Promise.all(t);console.log(a);const i=new Blob(a);console.log(i.size);const r=document.createElement("a"),f=window.URL.createObjectURL(i);r.href=f,r.download=o,r.click()};function u(n,o){return restFetch.response({url:L,method:"GET",params:{fileId:p},setRequestInit(e){const t=e.headers;return t.set("Range",`bytes=${n}-${o}`),t.set("Accept-Ranges","bytes"),t.set("fileServiceType","mongodb"),t.set("tenant","default"),t.set("application","platform"),t.set("token",F),e},responseThen(e){return e.json().then(t=>{console.log(t)}),e.blob()}}).then(e=>e)}return(n,o)=>(y(),k(C,null,[m(_),m(E(x),{type:"primary",onClick:l},{default:B(()=>o[0]||(o[0]=[R(" 下载 ")])),_:1})],64))}});export{nt as default};