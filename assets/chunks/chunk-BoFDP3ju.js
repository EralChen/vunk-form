const __vite__fileDeps=["assets/chunks/chunk-pu-YH9sW.js","assets/chunks/chunk-BCy4u5kM.js","assets/chunks/chunk-fziB7CNt.js","assets/chunks/chunk-CSFIeiLH.js","assets/chunks/chunk-C7hCAWl2.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.g_EfqiEX.css","assets/static/index.BXUJy6tt.css","assets/chunks/chunk-Ch0SDxT-.js","assets/static/ShadedColorMaterial.GuYAk2ql.css","assets/chunks/chunk-Wa8cmqdu.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as F}from"./chunk-fEI7Cr-O.js";import{q3 as L,az as p,q4 as w,q5 as H,q6 as Y,q7 as Q,pS as G,pR as X,kw as ee,q8 as te,I as b,x as ne,q9 as j,K as v,kx as O,q as ie,gI as re,cs as R,hc as se,pg as ae,R as oe,bd as le,aI as m,aV as g,aW as ue,bC as ce,n5 as fe,G as me,cj as q,qa as pe,qb as he,bQ as N,qc as ye,qd as Re,s as d,ft as ge}from"./chunk-BCy4u5kM.js";import{t as U}from"./chunk-Wa8cmqdu.js";const T=new p,Se=new p,I=new p,$={esriGeometryPoint:w,esriGeometryPolyline:H,esriGeometryPolygon:Y,esriGeometryMultipoint:Q};function Ve(e,t,n,i=e.hasZ,r=e.hasM){if(t==null)return null;const s=e.hasZ&&i,a=e.hasM&&r;if(n){const o=G(I,t,e.hasZ,e.hasM,"esriGeometryPoint",n,i,r);return w(o,s,a)}return w(t,s,a)}function y(e,t,n,i,r,s,a=t,o=n){const u=t&&a,l=n&&o,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(r){let f=X(Se,c,t,n,e,r,a,o);return s&&(f=G(I,f,u,l,e,s)),$[e]?.(f,u,l)??null}if(s){const f=G(I,c,t,n,e,s,a,o);return $[e]?.(f,u,l)??null}return L(T,c,t,n,a,o),$[e]?.(T,u,l)??null}function De(e){return e&&Z in e?JSON.parse(JSON.stringify(e,de)):e}const Z="_geVersion",de=(e,t)=>e!==Z?t:void 0,x=[0,0];function z(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,x),t.z!=null&&(n.z=t.z),t.m!=null&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,x),[n.xmax,n.ymax]=e(t.xmax,t.ymax,x),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:A(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:A(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:C(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function A(e,t){const n=[];for(const i of e)n.push(C(i,t));return n}function C(e,t){const n=[];for(const i of e){const r=t(i[0],i[1],[0,0]);n.push(r),i.length>2&&r.push(i[2]),i.length>3&&r.push(i[3])}return n}async function M(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map(i=>i.geometry!=null?i.geometry.spatialReference:null).filter(ie):[e];await re(n.map(i=>({source:i,dest:t})))}const V=z.bind(null,ee),D=z.bind(null,te);function J(e,t,n,i){if(!e||(n||(n=t,t=e.spatialReference),!R(t)||!R(n)||b(t,n)))return e;if(j(t,n)){const r=v(n)?V(e):D(e);return r.spatialReference=n,r}return O(U,[e],t,n,null,i)[0]}class $e{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,i,r){if(!t?.length||!n||!i||b(n,i))return t;const s={geometries:t,inSpatialReference:n,outSpatialReference:i,geographicTransformation:r,resolve:ne()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:i,outSpatialReference:r,resolve:s,geographicTransformation:a}=t;j(i,r)?v(r)?s(n.map(V)):s(n.map(D)):s(O(U,n,i,r,a,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const xe=new $e;function Je(e,t,n,i){return xe.push(e,t,n,i)}const _e=new se({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),E=Object.freeze({});async function We(e,t,n){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(r)for(let o=0;o<r.length;o++)r[o]=r[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),we(e,t,n)}async function we(e,t,n){if(!e)return null;let{where:i}=e;if(e.where=i=i?.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let r=await Ie(e);if(e.distance=0,e.units=null,e.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:s}=e.geometry;r=ae(r),r.spatialReference=s}if(r){await M(r.spatialReference,n),r=Ge(r,n);const s=(await oe(le(r)))[0];if(s==null)throw E;const a="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=a&&W(r,n)?{densificationStep:8*a}:void 0,u=s.toJSON(),l=J(u,u.spatialReference,n,o);if(!l)throw E;l.spatialReference=n,e.geometry=l}return e}function W(e,t){if(!e)return!1;const n=e.spatialReference;return(m(e)||g(e)||ue(e))&&!b(n,t)&&!ce(n,t)}function Ge(e,t){const n=e.spatialReference;return W(e,t)&&m(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function Ie(e){const{distance:t,units:n}=e,i=e.geometry;if(t==null||"vertexAttributes"in i)return i;const r=i.spatialReference,s=n?_e.fromJSON(n):fe(r),a=r&&(me(r)||v(r))?i:await M(r,q).then(()=>J(i,q));return(await be())(a.spatialReference,a,t,s)}async function be(){return(await F(()=>import("./chunk-pu-YH9sW.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))).geodesicBuffer}function ve(e){return e==="mesh"?pe:he(e)}function k(e,t){return e?t?4:3:t?3:2}function Me(e,t,n,i){return B(e,t,n,i.coords[0],i.coords[1])}function Pe(e,t,n,i,r,s){const a=k(r,s),{coords:o,lengths:u}=i;if(!u)return!1;for(let l=0,c=0;l<u.length;l++,c+=a)if(!B(e,t,n,o[c],o[c+1]))return!1;return!0}function B(e,t,n,i,r){if(!e)return!1;const s=k(t,n),{coords:a,lengths:o}=e;let u=!1,l=0;for(const c of o)u=qe(u,a,s,l,c,i,r),l+=c*s;return u}function qe(e,t,n,i,r,s,a){let o=e,u=i;for(let l=i,c=i+r*n;l<c;l+=n){u=l+n,u===c&&(u=i);const f=t[l],h=t[l+1],K=t[u],S=t[u+1];(h<a&&S>=a||S<a&&h>=a)&&f+(a-h)/(S-h)*(K-f)<s&&(o=!o)}return o}const _="unsupported-query",Ne={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},P={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Te(e){return e!=null&&P.spatialRelationship[e]===!0}function Ae(e){return e!=null&&P.queryGeometry[ge(e)]===!0}function Ee(e){return e!=null&&P.layerGeometry[e]===!0}function Fe(){return F(()=>import("./chunk-pu-YH9sW.js").then(e=>e.g),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))}function ke(e,t,n,i,r){if(g(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const s=N(new p,t,!1,!1);return Promise.resolve(a=>Me(s,!1,!1,a))}if(g(t)&&n==="esriGeometryMultipoint"){const s=N(new p,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(a=>Pe(s,!1,!1,a,i,r))}if(m(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(s=>ye(t,y(n,i,r,s)));if(m(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(s=>Re(t,y(n,i,r,s)));if(m(t)&&e==="esriSpatialRelIntersects"){const s=ve(n);return Promise.resolve(a=>s(t,y(n,i,r,a)))}return Fe().then(s=>{const a=s[Ne[e]].bind(null,t.spatialReference,t);return o=>a(y(n,i,r,o))})}async function Be(e,t,n){const{spatialRel:i,geometry:r}=e;if(r){if(!Te(i))throw new d(_,"Unsupported query spatial relationship",{query:e});if(R(r.spatialReference)&&R(n)){if(!Ae(r))throw new d(_,"Unsupported query geometry type",{query:e});if(!Ee(t))throw new d(_,"Unsupported layer geometry type",{query:e});if(e.outSR)return M(e.geometry?.spatialReference,e.outSR)}}}function Ke(e){if(m(e))return!0;if(g(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function Le(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:r}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&r)await t.forEach(o=>{const u=n.getAttribute(o,i),l=n.getAttribute(o,r);u==null||isNaN(u)||(s=Math.min(s,u)),l==null||isNaN(l)||(a=Math.max(a,l))});else{const o=i||r;await t.forEach(u=>{const l=n.getAttribute(u,o);l==null||isNaN(l)||(s=Math.min(s,l),a=Math.max(a,l))})}return{start:s,end:a}}function He(e,t,n){if(!t||!e)return null;const{startTimeField:i,endTimeField:r}=e;if(!i&&!r)return null;const{start:s,end:a}=t;if(s===null&&a===null)return null;if(s===void 0&&a===void 0)return Ue();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return i&&r?je(o,i,r,s,a):Oe(o,i||r,s,a)}function je(e,t,n,i,r){return i!=null&&r!=null?s=>{const a=e(s,t),o=e(s,n);return(a==null||a<=r)&&(o==null||o>=i)}:i!=null?s=>{const a=e(s,n);return a==null||a>=i}:r!=null?s=>{const a=e(s,t);return a==null||a<=r}:void 0}function Oe(e,t,n,i){return n!=null&&i!=null&&n===i?r=>e(r,t)===n:n!=null&&i!=null?r=>{const s=e(r,t);return s!=null&&s>=n&&s<=i}:n!=null?r=>{const s=e(r,t);return s!=null&&s>=n}:i!=null?r=>{const s=e(r,t);return s!=null&&s<=i}:void 0}function Ue(){return()=>!1}export{Ke as I,Be as P,We as S,y as a,we as b,Je as c,E as g,De as h,J as j,Le as n,He as t,ke as v,M as x,Ve as y};