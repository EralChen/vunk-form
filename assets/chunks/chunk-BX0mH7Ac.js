import{E as b,d,b1 as T,C as A,D as h,G as v,I as E,bb as _,al as F}from"./chunk-B7yAMqV2.js";const C={source:{type:Array,default:()=>[]},templateInstances:{type:Object,default:void 0},k:{type:Array,default:()=>[]}},I=Symbol("templateInstances"),j=Symbol("parentTemplateInstancesSymbol"),N=(e,n={})=>{let s="";s+=n.prefix||"";for(const a in e)e[a].forEach(m=>{s+=m.message+";"});s+=n.suffix||"",b({type:"warning",message:s})},x=e=>{if(typeof e=="boolean"){const n=e;return()=>n}else{if(typeof e=="string")return new Function("data",e);if(typeof e=="function")return e}return()=>!0},S=d({name:"VkfFormItemRenderer",props:C,setup(e,n){const s=T(j,null),a=e.templateInstances??s??A({});h(I,a);const m=r=>v(S,{templateInstances:a,...r}),c=(r,g=[])=>r.reduce((l,t,k)=>{t.key=t.key??(Array.isArray(t.prop)?t.prop.join():t.prop);const p=[...e.k,...g,k],y=()=>{E(()=>{t.templateType&&!a[t.templateType]&&console.warn(t.templateType,"templateType不存在将跳过")})};if(t.templateType&&a[t.templateType]){const o={...t};Reflect.deleteProperty(o,"templateType"),Reflect.deleteProperty(o,"templateSlots"),Reflect.deleteProperty(o,"templateIf");const i=a[t.templateType].slots.default?.({data:o,raw:t,Renderer:m,k:p,key:p.join(",")+"-"+t.templateType+"-"+t?.prop||"no-prop",templateIf:x(t.templateIf)});i&&l.push(i)}else if(t.templateSlots?.default){if(y(),p.push("templateSlots","default"),Array.isArray(t.templateSlots?.default)){const o=c(t.templateSlots.default,p);l=l.concat(o)}}else y();return l},[]);return()=>[n.slots.default?.(),c(e.source)]}}),f=S;f.install=e=>{e.component(f.name,f)};const P={type:{type:String,required:!0,default:""}},u=d({name:"VkfFormItemRendererTemplate",props:P,setup(e){const n=T(I);if(!n)throw new Error;const s=F(),a=n[e.type];return s&&n&&(n[e.type]=s),_(()=>{n[e.type]=a}),()=>null}});u.install=e=>{e.component(u.name,u)};export{I as S,f as _,u as a,x as g,j as p,N as v};