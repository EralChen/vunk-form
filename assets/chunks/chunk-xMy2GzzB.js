import{p as O,V as G,b as X}from"./chunk-CAS0iGZj.js";import{r as W}from"./chunk-vBjfAdQv.js";import{a as z}from"./chunk-Bj7xbVzV.js";import{R as Y}from"./chunk-zKPkODU6.js";import{g as N}from"./chunk-lpDqIA_h.js";import{d as Z,aY as j,H as J,a3 as K,aZ as Q,g as P,as as _,c as ee,a_ as te,a$ as oe,b0 as se,b1 as D,k as ne,W as ae,l as S,o as k,a as E,w as R,q as L,b as H,b2 as B,n as F,F as re,R as le,b3 as U,al as de,y as q,m as ie}from"./chunk-C7ZeX_9O.js";import{T as ue}from"./chunk-Ch0SDxT-.js";const fe={...O,fileId:{type:String,default:""},url:{type:String,default:void 0},chunkSize:{type:Number,default:1024*1024*10},fileServiceType:{type:String,default:void 0},fileStatus:{type:String,default:void 0}},ce={"update:fileStatus":null};var o=(e=>(e.wait="wait",e.doPause="doPause",e.pause="pause",e.doDownload="doDownload",e.downloading="downloading",e.error="error",e.done="done",e))(o||{});const M=new Y({baseURL:z.baseURL,presetRequestInit:e=>{const n=e.headers,w=N();return w&&n.set("Token",w),e}}),pe=(e,n)=>new Promise((w,i)=>{const t=new XMLHttpRequest;let b=`${M.baseURL}/file/downloadByRange?fileId=${e.fileId}`;e.fileServiceType&&(b+=`&fileServiceType=${e.fileServiceType}`,t.setRequestHeader("fileServiceType",e.fileServiceType)),n?.onprogress&&(t.onprogress=n?.onprogress),t.open("GET",b,!0),t.responseType="blob",t.setRequestHeader("Token",N()),t.setRequestHeader("tenant","default"),t.setRequestHeader("application","platform"),t.setRequestHeader("Content-Range",`bytes=${e.start}-${e.end}`),t.setRequestHeader("Accept-Ranges","bytes"),t.onreadystatechange=a=>{const c=a.target;if(t.readyState===4)if(t.status===200||t.status===206){if(n?.xhrs){const l=n.xhrs.findIndex(g=>g===t);n.xhrs.splice(l,1)}w({data:c.response})}else t.status===500&&i(c.response)},t.onerror=()=>{i(t.response)};try{t.send()}catch(a){i(a)}n?.xhrs?.push(t)}),me=Z({name:"VkfDownloadPlus",components:{VkfFormItem:G,ElButtonGroup:j,ElButton:J,ElInput:K},props:fe,emits:ce,setup(e,{emit:n}){const w=X(e);Q(()=>{M.baseURL=e.url||z.baseURL});const i=P();t(),_(()=>e.fileId,t);function t(){e.fileId&&W({fileId:e.fileId}).then(r=>{i.value=r})}const b=ee(()=>l.value===o.error?te:oe),a=P([]),c=P([]),l=se({default:o.wait,key:"fileStatus"},e,n),g=()=>{if(!i.value)return;const r=i.value.size,v=i.value.id,C=Math.ceil(r/e.chunkSize);a.value=Array.from({length:C},(m,s)=>{const u=s*e.chunkSize,h=Math.min(u+e.chunkSize,r)-1;let y={};return a.value[s]&&a.value[s].start===u&&a.value[s].end===h&&a.value[s].status===o.done&&(y=a.value[s]),{start:u,end:h,index:s,status:o.wait,fileId:v,fileServiceType:e.fileServiceType,progress:0,...y}}),l.value=o.downloading;const I=a.value.filter(m=>m.status===o.wait||m.status===o.error);p(I).then(()=>{const m=a.value.map(s=>s.data);return new Blob(m,{type:"application/octet-stream"})}).then(m=>{const s=URL.createObjectURL(m),u=document.createElement("a");u.href=s,u.download=i.value?.realName||"未知文件",u.click(),URL.revokeObjectURL(s)}).then(()=>{l.value=o.done}).catch(()=>{l.value=o.error,ne.error("下载失败")})};_(()=>l.value,r=>{r===o.doDownload&&g()});function p(r,v=4,C=10){return new Promise((I,m)=>{const s=r.length;let u=0;if(s===0)return I(void 0);const h=[],y=async()=>{for(;u<s&&v>0;){v--;const A=r.findIndex(d=>d.status===o.wait||d.status===o.error),f=r[A];f&&(f.status=o.downloading,pe(f,{onprogress(d){f.progress=parseInt(d.loaded/d.total*100+"")},xhrs:c.value}).then(d=>{f.status=o.done,f.data=d.data,v++,u++}).then(()=>{u===s?I(void 0):y()}).catch(()=>{f.status=o.error;const d=f.index;if(typeof h[d]!="number"&&(h[d]=0),h[d]++,console.warn(d,f,h[d],"次报错"),f.progress=-1,h[d]>=C)return m();v++,y()}))}};y()})}const T=()=>{c.value.forEach(r=>{r.abort()}),c.value=[],l.value=o.pause};_(()=>l.value,r=>{r===o.doPause&&T()}),D(()=>{T()});class x extends ue{listener;constructor(v){super(),this.listener=v}add(){window.addEventListener("online",this.listener),this.removeHandler=()=>{window.removeEventListener("online",this.listener)}}}const $=new x(()=>{l.value===o.error&&(l.value=o.doDownload)});return $.add(),D(()=>{$.remove()}),{formItemBindProps:w,fileInfo:i,handleDownload:g,handlePause:T,Status:o,chunks:a,fileStatus:l,filePrefixIcon:b}}}),ve={class:"vkf-download-plus-main"},he={class:"vkf-download-plus-label"},we={key:0,class:"vkf-download-plus-cube-x"};function ge(e,n,w,i,t,b){const a=S("ElInput"),c=S("el-button"),l=S("el-button-group"),g=S("VkfFormItem");return k(),E(g,ie(e.formItemBindProps,{class:"vkf-download-plus"}),{default:R(()=>[L("div",ve,[L("label",he,[H(a,{class:B({"is-error":e.fileStatus===e.Status.error}),"prefix-icon":e.filePrefixIcon,"model-value":e.fileInfo?.realName,readonly:""},null,8,["class","prefix-icon","model-value"]),e.fileStatus===e.Status.downloading||e.fileStatus===e.Status.pause?(k(),F("div",we,[(k(!0),F(re,null,le(e.chunks,p=>(k(),F("div",{key:p.fileId+"-"+p.index,class:B(["vkf-download-plus-cube",{error:p.status==e.Status.error}]),style:U({width:100/e.chunks.length+"%"})},[L("div",{class:B({uploading:p.progress>0&&p.progress<100,success:p.progress==100}),style:U({height:p.progress+"%"})},null,6)],6))),128))])):de("",!0)]),H(l,{class:"vkf-download-plus-btng"},{default:R(()=>[e.fileStatus===e.Status.downloading?(k(),E(c,{key:0,type:"danger",onClick:e.handlePause},{default:R(()=>n[0]||(n[0]=[q(" 暂停 ")])),_:1},8,["onClick"])):(k(),E(c,{key:1,type:"primary",onClick:e.handleDownload},{default:R(()=>n[1]||(n[1]=[q(" 下载 ")])),_:1},8,["onClick"]))]),_:1})])]),_:1},16)}const V=ae(me,[["render",ge]]);V.install=e=>{e.component(V.name||"VkfDownloadPlus",V)};export{V};