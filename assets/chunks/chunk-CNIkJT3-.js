import{q as S,h5 as d,cD as p,cE as r,cC as u,a1 as m,$ as h,a0 as c,a2 as b,h6 as g,cN as v}from"./chunk-Bn1Ae4Nb.js";import{d as j}from"./chunk-tH-rlikO.js";import"./chunk-D6q83-eg.js";import"./chunk-lmOyQrer.js";import"./chunk-Dr2pd04r.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";let o=class extends j{constructor(a){super(a)}getTiles(){const a=this.lv.getVisibleNodes(),i=this.view.renderSpatialReference,l=this.nodeSR;return a.map(t=>y(t,i,l)).filter(S).sort((t,s)=>t.lij[0]===s.lij[0]?t.label>s.label?-1:1:t.lij[0]-s.lij[0])}};function y(a,i,l){const t=a.serviceObbInIndexSR;if(t==null||i==null)return null;d(n,t.quaternion),p(e,t.center),r(e,l,0,e,i,0,1),n[12]=e[0],n[13]=e[1],n[14]=e[2];const s=[[],[],[]];u(e,t.halfSize,n),r(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),p(e,t.halfSize),e[0]=-e[0],u(e,e,n),r(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),p(e,t.halfSize),e[0]=-e[0],e[1]=-e[1],u(e,e,n),r(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),p(e,t.halfSize),e[1]=-e[1],u(e,e,n),r(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),p(e,t.halfSize),e[0]=-e[0],e[2]=-e[2],u(e,e,n),r(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),p(e,t.halfSize),e[2]=-e[2],u(e,e,n),r(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),p(e,t.halfSize),e[1]=-e[1],e[2]=-e[2],u(e,e,n),r(e,i,0,e,l,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new m({rings:s,spatialReference:l});return{lij:[a.level,a.childCount,0],label:a.id,geometry:f}}h([c({constructOnly:!0})],o.prototype,"lv",void 0),h([c({constructOnly:!0})],o.prototype,"nodeSR",void 0),o=h([b("esri.views.3d.layers.support.I3STreeDebugger")],o);const n=g(),e=v();export{o as I3STreeDebugger};