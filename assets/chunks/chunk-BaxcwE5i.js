import{V as i}from"./chunk-D8T-XjYz.js";import{d as p,e as u,o as m,a as f,w as r,b as n,u as l,z as v,n as s,t as d,A as c}from"./chunk-9eDQGDPh.js";import"./chunk-1cWUYT_U.js";import"./chunk-CrV41Nja.js";import"./chunk-fEI7Cr-O.js";const B=p({__name:"basic",setup(k){const o=u(),e=u({startValue:"",endValue:""});function V(){o.value?.validate().then(()=>{console.log("validate success",e.value)}).catch(()=>{console.log("validate failed")})}return(_,a)=>(m(),f(l(c),{ref_key:"elFormNode",ref:o,model:e.value},{default:r(()=>[n(l(v),{onClick:V},{default:r(()=>a[2]||(a[2]=[s(" Validate ")])),_:1}),s(" value | "+d(e.value.startValue)+" - "+d(e.value.endValue)+" ",1),n(l(i),{startValue:e.value.startValue,"onUpdate:startValue":a[0]||(a[0]=t=>e.value.startValue=t),endValue:e.value.endValue,"onUpdate:endValue":a[1]||(a[1]=t=>e.value.endValue=t),"start-prop":"startValue","end-prop":"endValue","value-format":"YYYY-MM-DD",required:!0},null,8,["startValue","endValue"])]),_:1},8,["model"]))}});export{B as default};