import{l2 as g,kl as j,A1 as F,Ai as k,xM as v,mr as A,kp as C,l4 as O,kf as P,sZ as h}from"./chunk-XIlYN-8S.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";function p(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function b(r){let e="";for(const t in r){const o=r[t];if(typeof o=="boolean")o&&(e+=`#define ${t}
`);else if(typeof o=="number")e+=`#define ${t} ${o.toFixed()}
`;else if(typeof o=="object")if(p(o)){const{value:n,options:i,namespace:f}=o,s=f?`${f}_`:"";for(const a in i)e+=`#define ${s}${a} ${i[a].toFixed()}
`;e+=`#define ${t} ${s}${n}
`}else{const n=o.options;let i=0;for(const f in n)e+=`#define ${n[f]} ${(i++).toFixed()}
`;e+=`#define ${t} ${n[o.value]}
`}}return e}export{g as BufferObject,j as FramebufferObject,F as Program,k as ProgramCache,v as Renderbuffer,A as ShaderCompiler,C as Texture,O as VertexArrayObject,P as createContext,h as createProgram,b as glslifyDefineMap};
