import{aM as a}from"./chunk-BW-F2k8C.js";import{glslifyDefineMap as p}from"./chunk-B4K34Pxs.js";const i=e=>{let t="";t+=e[0].toUpperCase();for(let r=1;r<e.length;r++){const s=e[r];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},l=e=>{const t={};for(const r in e)t[i(r)]=e[r];return p(t)},c=(e,t,r,s)=>{const o=e+e.substring(e.lastIndexOf("/")),f=t+t.substring(t.lastIndexOf("/")),n=l(s);return{attributes:r,shaders:{vertexShader:n+a(`${o}.vert`),fragmentShader:n+a(`${f}.frag`)}}};export{c as o};