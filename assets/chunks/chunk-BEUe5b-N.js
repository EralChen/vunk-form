import{I as D,jN as G,jO as z,jP as S,em as m,jQ as y,eq as I,cN as c,jR as M,jS as O,jT as P}from"./chunk-Y-RRnlzY.js";import{i as b}from"./chunk-Jvmd89wA.js";var u;function Q(n){return T(n,u.Horizontal)}function T(n,r){const{hasZ:t,spatialReference:e}=n,a=b(e);let o=0;const s=S(a);if(s==null)return null;const p=r===u.Direct?N:H;for(const $ of n.paths){if($.length<2)continue;const q=$.length-1;for(let R=0;R<q;++R){const x=$[R];i[0]=x[0],i[1]=x[1],i[2]=t?x[2]:0;const g=$[R+1];l[0]=g[0],l[1]=g[1],l[2]=t?g[2]:0;const V=p(i,l,e);if(V==null)return null;o+=V.value}}return z(o,s)}function C(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,N(i,l,t)):null}function U(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,H(i,l,t)):null}function E(n,r){const{spatialReference:t}=n;return D(t,r.spatialReference)?(i[0]=n.x,i[1]=n.y,i[2]=n.hasZ?n.z:0,l[0]=r.x,l[1]=r.y,l[2]=r.hasZ?r.z:0,w(i,l,t)):null}function F(n){return n!=null?k(n.hasZ?n.z:0,n.spatialReference):null}function k(n,r){const t=G(r);return t!=null?z(n??0,t):null}function N(n,r,t){const e=d(n,r,t,u.Direct);return e!=null?z(e.direct,e.unit):null}function H(n,r,t){const e=d(n,r,t,u.Horizontal);return e!=null?z(e.horizontal,e.unit):null}function w(n,r,t){const e=d(n,r,t,u.Vertical);return e!=null?z(e.verticalSigned,e.unit):null}function d(n,r,t,e){const a=b(t),o=S(a);if(o==null)return null;const s=r[2]-n[2];if(e===u.Vertical)return{verticalSigned:s,unit:o};if(!m(n,t,v,a)||!m(r,t,Z,a))return null;if(e===u.Direct)return{direct:y(Z,v),unit:o};if(I(j,n[0],n[1],r[2]),!m(j,t,j,a))return null;const p=y(j,Z);return e===u.Horizontal?{horizontal:p,unit:o}:{direct:y(Z,v),horizontal:p,vertical:Math.abs(s),unit:o}}(function(n){n[n.Direct=0]="Direct",n[n.Horizontal=1]="Horizontal",n[n.Vertical=2]="Vertical"})(u||(u={}));const i=c(),l=c(),v=c(),Z=c(),j=c();function J(n){return M(n)??Q(n)}function K(n,r){return O(n,r)??U(n,r)}function L(n,r,t){return f[0]=n[0],f[1]=n[1],f[2]=n.length===3?n[2]:0,h[0]=r[0],h[1]=r[1],h[2]=r.length===3?r[2]:0,P(f,h,t)??H(f,h,t)}const f=c(),h=c();export{F as R,N as Z,C as a,J as c,w as g,K as m,L as u,k as v,E as y};