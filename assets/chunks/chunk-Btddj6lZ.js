import{E as v,d as S,a$ as I,B as E,C as d,H as _,b9 as h,aq as F}from"./chunk-CYWh0Wrq.js";const C={source:{type:Array,default:()=>[]},templateInstances:{type:Object,default:void 0},k:{type:Array,default:()=>[]}},g=Symbol("templateInstances"),T=Symbol("parentTemplateInstancesSymbol"),V=(e,n={})=>{let s="";s+=n.prefix||"";for(const a in e)e[a].forEach(p=>{s+=p.message+";"});s+=n.suffix||"",v({type:"warning",message:s})},j=e=>{if(typeof e=="boolean"){const n=e;return()=>n}else{if(typeof e=="string")return new Function("data",e);if(typeof e=="function")return e}return()=>!0},k=S({name:"VkfFormItemRenderer",props:C,setup(e,n){const s=I(T,null),a=e.templateInstances??s??E({});d(g,a),d(T,a);const p=k,c=(u,b=[])=>u.reduce((r,t,A)=>{t.key=t.key??(Array.isArray(t.prop)?t.prop.join():t.prop);const l=[...e.k,...b,A],y=()=>{_(()=>{t.templateType&&!a[t.templateType]&&console.warn(t.templateType,"templateType不存在将跳过")})};if(t.templateType&&a[t.templateType]){const o={...t};Reflect.deleteProperty(o,"templateType"),Reflect.deleteProperty(o,"templateSlots"),Reflect.deleteProperty(o,"templateIf");const i=a[t.templateType].slots.default?.({data:o,raw:t,Renderer:p,k:l,key:l.join(",")+"-"+t.templateType+"-"+t?.prop||"no-prop",templateIf:j(t.templateIf)});i&&r.push(i)}else if(t.templateSlots?.default){if(y(),l.push("templateSlots","default"),Array.isArray(t.templateSlots?.default)){const o=c(t.templateSlots.default,l);r=r.concat(o)}}else y();return r},[]);return()=>[n.slots.default?.(),c(e.source)]}}),m=k;m.install=e=>{e.component(m.name,m)};const x={type:{type:String,required:!0,default:""}},f=S({name:"VkfFormItemRendererTemplate",props:x,setup(e){const n=I(g);if(!n)throw new Error;const s=F(),a=n[e.type];return s&&n&&(n[e.type]=s),h(()=>{n[e.type]=a}),()=>null}});f.install=e=>{e.component(f.name,f)};export{g as S,m as _,f as a,j as g,T as p,V as v};