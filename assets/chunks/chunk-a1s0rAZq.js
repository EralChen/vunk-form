import{s as f,fp as m,fG as n,fH as c,U as u}from"./chunk-BCy4u5kM.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";async function v(i,s,o,r){if(!s)throw new f("post:missing-guid","guid for version is missing");const t=m(i),e=o.toJSON(),a=n(t.query,{query:c({...e,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const p=`${t.path}/versions/${s}/deleteForwardEdits`,{data:d}=await u(p,a);return d.success}export{v as deleteForwardEdits};