import{bh as v,al as f,b1 as D,c as V,E,d as b,K as C,N as K,bi as U,am as w}from"./chunk-9eDQGDPh.js";import{d as k,g as P}from"./chunk-DyvYxXn8.js";const G=()=>{const e=v({});return f("vkTemplateInstances",e),e},h=()=>D("vkTemplateInstances",null),H=(e,n)=>{const a=V(()=>e.data),p={data:a,emitSetData:s=>{n.emit("setData",{intoUndefined:k,...s})},getDataValue:s=>P(a.value,s,k,!0)};return f("vkRendererData",p),p},$=()=>D("vkRendererData",{}),q={source:{type:Array,default:()=>[]},templateInstances:{type:Object,default:void 0},k:{type:Array,default:()=>[]}},J=(e,n={})=>{let a="";a+=n.prefix||"";for(const r in e)e[r].forEach(o=>{a+=o.message+";"});a+=n.suffix||"",E({type:"warning",message:a})},M=e=>{if(typeof e=="boolean"){const n=e;return()=>n}else{if(typeof e=="string")return new Function("data",e);if(typeof e=="function")return e}return()=>!0},F=b({name:"VkfFormItemRenderer",props:q,setup(e,n){const a=h(),{emitSetData:r,data:o,getDataValue:p}=$(),s=e.templateInstances??a??v({});f("vkTemplateInstances",s);const R=l=>C(F,{templateInstances:s,...l}),S=(l,_=[])=>l.reduce((u,t,j)=>{t.key=t.key??(Array.isArray(t.prop)?t.prop.join():t.prop);const y=[...e.k,..._,j],x=()=>{K(()=>{t.templateType&&!s[t.templateType]&&console.warn(t.templateType,"templateType不存在将跳过")})};if(t.templateType&&s[t.templateType]){const T=M(t.templateIf);if(!(o?T(o.value):!0))return u;const m={...t};Reflect.deleteProperty(m,"templateType"),Reflect.deleteProperty(m,"templateIf");const A=y.join(",")+"-"+t.templateType+"-"+(t.prop||"no-prop"),I=V({get:()=>t.prop&&p?.(t.prop),set:c=>r?.({k:t.prop,v:c})}),g=s[t.templateType].slots.default?.({data:m,raw:t,props:m,k:y,key:A,value:I.value,input:c=>I.value=c,templateIf:T,Renderer:R,getDataValue:p,emitSetData:r});g&&u.push(g)}else x();return u},[]);return()=>[n.slots.default?.(),S(e.source)]}}),i=F;i.install=e=>{e.component(i.name,i)};const N={type:{type:String,required:!0,default:""}},d=b({name:"VkfFormItemRendererTemplate",props:N,setup(e){const n=h();if(!n)throw new Error;const a=w(),r=n[e.type];return a&&n&&(n[e.type]=a),U(()=>{n[e.type]=r}),()=>null}});d.install=e=>{e.component(d.name,d)};export{i as _,d as a,H as b,M as g,G as i,h as u,J as v};