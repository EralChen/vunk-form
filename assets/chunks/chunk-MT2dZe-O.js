const __vite__fileDeps=["assets/chunks/chunk-DXQtZA-u.js","assets/chunks/chunk-XIlYN-8S.js","assets/chunks/chunk-gbA2XUGj.js","assets/chunks/chunk-cqKyegso.js","assets/chunks/chunk-B7yAMqV2.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.Du-s0VC3.css","assets/static/index.BXUJy6tt.css","assets/chunks/chunk-Ch0SDxT-.js","assets/chunks/chunk-DBIPdCjN.js","assets/static/ShadedColorMaterial.GuYAk2ql.css","assets/chunks/chunk-Wa8cmqdu.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as d}from"./chunk-fEI7Cr-O.js";import{cl as h,cm as m,cn as p,co as g,cp as y,cq as w,cr as _,cs as a}from"./chunk-XIlYN-8S.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(t){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function u(n){return new b(n)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function A(n){return new q(n)}const c=new Set;function F(n,t,e,f=!1){c.clear();for(const s in e){const r=n.get(s);if(!r)continue;const o=P(r,e[s]);if(c.add(r.name),r&&(f||r.editable)){const l=h(r,o);if(l)return u(m(l,r,o));t[r.name]=o}}for(const s of n?.requiredFields??[])if(!c.has(s.name))return u(`missing required field "${s.name}"`);return null}function P(n,t){let e=t;return p(n)&&typeof t=="string"?e=parseFloat(t):g(n)&&t!=null&&typeof t!="string"?e=String(t):y(n)&&typeof t=="string"&&(e=w(t)),_(e)}let i;function G(n,t){if(!n||!a(t))return n;if("rings"in n||"paths"in n){if(i==null)throw new TypeError("geometry engine not loaded");return i.simplify(t,n)}return n}async function j(){return i==null&&(i=await d(()=>import("./chunk-DXQtZA-u.js").then(n=>n.g),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),i}async function S(n,t){!a(n)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await j()}export{A as d,u as f,S as j,F as p,G as y};