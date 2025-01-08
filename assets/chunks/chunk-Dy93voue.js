import{l2 as y,kl as g,A1 as j,Ai as F,xM as k,mr as v,kp as A,l4 as C,kf as O,sZ as P}from"./chunk-BCy4u5kM.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";function p(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function d(r){let e="";for(const t in r){const o=r[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:n,options:i,namespace:f}=o,s=f?`${f}_`:"";for(const a in i)e+=`#define ${s}${a} ${i[a].toFixed()}
`;e+=`#define ${t} ${s}${n}
`}else{const n=o.options;let i=0;for(const f in n)e+=`#define ${n[f]} ${(i++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{y as BufferObject,g as FramebufferObject,j as Program,F as ProgramCache,k as Renderbuffer,v as ShaderCompiler,A as Texture,C as VertexArrayObject,O as createContext,P as createProgram,d as glslifyDefineMap};
