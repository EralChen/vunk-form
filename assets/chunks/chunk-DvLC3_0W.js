import{a as C}from"./chunk-G9k4Bfeh.js";import{d as E,am as V,an as b,p as v,N as x,f as i,o as t,g as _,b as f,w as r,a as m,Y as y,m as u,a3 as d,i as p,F as R}from"./chunk-B7yAMqV2.js";const j={data:{type:Object,default:()=>({})}},F=E({name:"VkfTemplatesLayout",components:{ElRow:V,ElCol:b,VkfFormItemRendererTemplate:C},props:j,setup(){return{pickObject:v}}});function S(a,h,T,$,B,I){const w=i("ElRow"),c=i("VkfFormItemRendererTemplate"),g=i("ElCol");return t(),_(R,null,[f(c,{type:"ElRow"},{default:r(({data:e,Renderer:o,raw:l,k:s,templateIf:n})=>[n(a.data)?(t(),m(w,y(u({key:0},e)),{default:r(()=>[(t(),m(d(o),{source:l.templateSlots,k:[...s,"templateSlots"]},null,8,["source","k"]))]),_:2},1040)):p("",!0)]),_:1}),f(c,{type:"ElCol"},{default:r(({data:e,Renderer:o,raw:l,k:s,templateIf:n})=>[n(a.data)?(t(),m(g,y(u({key:0},e)),{default:r(()=>[(t(),m(d(o),{source:l.templateSlots,k:[...s,"templateSlots"]},null,8,["source","k"]))]),_:2},1040)):p("",!0)]),_:1}),f(c,{type:"VkfFlex"},{default:r(({data:e,Renderer:o,raw:l,k:s,templateIf:n})=>[n(a.data)?(t(),_("div",u({key:0,class:"vkf-flex",style:{"justify-content":e.justify,"flex-direction":e.direction,"align-items":e.align,overflow:e.overflow,"flex-grow":e.grow,"flex-shrink":e.shrink,"flex-basis":e.basis}},a.pickObject(e,{excludes:["justify","direction","align","overflow","grow","shrink","basis"]})),[(t(),m(d(o),{source:l.templateSlots,k:[...s,"templateSlots"]},null,8,["source","k"]))],16)):p("",!0)]),_:1})],64)}const k=x(F,[["render",S]]);k.install=a=>{a.component(k.name,k)};export{k as V};