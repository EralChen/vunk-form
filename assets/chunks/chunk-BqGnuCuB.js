import{l2 as j,kl as F,A1 as k,Ai as v,xM as A,mr as C,kp as O,l4 as P,kf as h,sZ as M}from"./chunk-BKRLg-wp.js";import"./chunk-BfBhBPg6.js";import"./chunk-BDgnW6u3.js";import"./chunk-ByQqi7vx.js";import"./chunk-fEI7Cr-O.js";import"./chunk-BMJW1KAv.js";import"./chunk-DyvYxXn8.js";import"./chunk-Ch0SDxT-.js";function p(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function x(r){let e="";for(const t in r){const o=r[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:n,options:i,namespace:f}=o,s=f?`${f}_`:"";for(const a in i)e+=`#define ${s}${a} ${i[a].toFixed()}
`;e+=`#define ${t} ${s}${n}
`}else{const n=o.options;let i=0;for(const f in n)e+=`#define ${n[f]} ${(i++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{j as BufferObject,F as FramebufferObject,k as Program,v as ProgramCache,A as Renderbuffer,C as ShaderCompiler,O as Texture,P as VertexArrayObject,h as createContext,M as createProgram,x as glslifyDefineMap};
