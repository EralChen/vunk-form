import{p as x,V as ee,b as te}from"./chunk-CAS0iGZj.js";import{be as re,d as ne,a3 as se,aY as ae,H as oe,aG as ue,bM as k,bN as ie,b0 as G,aZ as le,as as fe,g as M,c as de,a_ as he,bO as pe,k as V,b1 as X,W as ce,l as E,bP as ge,o as B,a as R,w as L,q as T,b as q,b2 as O,n as N,al as W,F as ye,R as me,b3 as Y,aI as ve,y as $,m as be}from"./chunk-C7ZeX_9O.js";import{R as Se}from"./chunk-zKPkODU6.js";import{g as Z,a as J}from"./chunk-lpDqIA_h.js";import{a as K}from"./chunk-Bj7xbVzV.js";import{T as _e}from"./chunk-Ch0SDxT-.js";const we={...x,chunkSize:{type:Number,default:1024/(16*16)*1024*1024},dictId:{type:String,default:""},url:{type:String,default:""},accept:{type:String,default:""},fileServiceType:{type:String,default:void 0},file:{type:Object,default:void 0},fileStatus:{type:String,default:void 0}},Ae={"update:file":null,"update:fileStatus":null,success:o=>o};var g=(o=>(o.wait="wait",o.doPause="doPause",o.pause="pause",o.doUpload="doUpload",o.uploading="uploading",o.error="error",o.done="done",o))(g||{}),Q={exports:{}};(function(o,u){(function(p){o.exports=p()})(function(p){var m=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function l(a,s){var t=a[0],e=a[1],n=a[2],r=a[3];t+=(e&n|~e&r)+s[0]-680876936|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&n)+s[1]-389564586|0,r=(r<<12|r>>>20)+t|0,n+=(r&t|~r&e)+s[2]+606105819|0,n=(n<<17|n>>>15)+r|0,e+=(n&r|~n&t)+s[3]-1044525330|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&r)+s[4]-176418897|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&n)+s[5]+1200080426|0,r=(r<<12|r>>>20)+t|0,n+=(r&t|~r&e)+s[6]-1473231341|0,n=(n<<17|n>>>15)+r|0,e+=(n&r|~n&t)+s[7]-45705983|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&r)+s[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&n)+s[9]-1958414417|0,r=(r<<12|r>>>20)+t|0,n+=(r&t|~r&e)+s[10]-42063|0,n=(n<<17|n>>>15)+r|0,e+=(n&r|~n&t)+s[11]-1990404162|0,e=(e<<22|e>>>10)+n|0,t+=(e&n|~e&r)+s[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&n)+s[13]-40341101|0,r=(r<<12|r>>>20)+t|0,n+=(r&t|~r&e)+s[14]-1502002290|0,n=(n<<17|n>>>15)+r|0,e+=(n&r|~n&t)+s[15]+1236535329|0,e=(e<<22|e>>>10)+n|0,t+=(e&r|n&~r)+s[1]-165796510|0,t=(t<<5|t>>>27)+e|0,r+=(t&n|e&~n)+s[6]-1069501632|0,r=(r<<9|r>>>23)+t|0,n+=(r&e|t&~e)+s[11]+643717713|0,n=(n<<14|n>>>18)+r|0,e+=(n&t|r&~t)+s[0]-373897302|0,e=(e<<20|e>>>12)+n|0,t+=(e&r|n&~r)+s[5]-701558691|0,t=(t<<5|t>>>27)+e|0,r+=(t&n|e&~n)+s[10]+38016083|0,r=(r<<9|r>>>23)+t|0,n+=(r&e|t&~e)+s[15]-660478335|0,n=(n<<14|n>>>18)+r|0,e+=(n&t|r&~t)+s[4]-405537848|0,e=(e<<20|e>>>12)+n|0,t+=(e&r|n&~r)+s[9]+568446438|0,t=(t<<5|t>>>27)+e|0,r+=(t&n|e&~n)+s[14]-1019803690|0,r=(r<<9|r>>>23)+t|0,n+=(r&e|t&~e)+s[3]-187363961|0,n=(n<<14|n>>>18)+r|0,e+=(n&t|r&~t)+s[8]+1163531501|0,e=(e<<20|e>>>12)+n|0,t+=(e&r|n&~r)+s[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,r+=(t&n|e&~n)+s[2]-51403784|0,r=(r<<9|r>>>23)+t|0,n+=(r&e|t&~e)+s[7]+1735328473|0,n=(n<<14|n>>>18)+r|0,e+=(n&t|r&~t)+s[12]-1926607734|0,e=(e<<20|e>>>12)+n|0,t+=(e^n^r)+s[5]-378558|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^n)+s[8]-2022574463|0,r=(r<<11|r>>>21)+t|0,n+=(r^t^e)+s[11]+1839030562|0,n=(n<<16|n>>>16)+r|0,e+=(n^r^t)+s[14]-35309556|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^r)+s[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^n)+s[4]+1272893353|0,r=(r<<11|r>>>21)+t|0,n+=(r^t^e)+s[7]-155497632|0,n=(n<<16|n>>>16)+r|0,e+=(n^r^t)+s[10]-1094730640|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^r)+s[13]+681279174|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^n)+s[0]-358537222|0,r=(r<<11|r>>>21)+t|0,n+=(r^t^e)+s[3]-722521979|0,n=(n<<16|n>>>16)+r|0,e+=(n^r^t)+s[6]+76029189|0,e=(e<<23|e>>>9)+n|0,t+=(e^n^r)+s[9]-640364487|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^n)+s[12]-421815835|0,r=(r<<11|r>>>21)+t|0,n+=(r^t^e)+s[15]+530742520|0,n=(n<<16|n>>>16)+r|0,e+=(n^r^t)+s[2]-995338651|0,e=(e<<23|e>>>9)+n|0,t+=(n^(e|~r))+s[0]-198630844|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~n))+s[7]+1126891415|0,r=(r<<10|r>>>22)+t|0,n+=(t^(r|~e))+s[14]-1416354905|0,n=(n<<15|n>>>17)+r|0,e+=(r^(n|~t))+s[5]-57434055|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~r))+s[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~n))+s[3]-1894986606|0,r=(r<<10|r>>>22)+t|0,n+=(t^(r|~e))+s[10]-1051523|0,n=(n<<15|n>>>17)+r|0,e+=(r^(n|~t))+s[1]-2054922799|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~r))+s[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~n))+s[15]-30611744|0,r=(r<<10|r>>>22)+t|0,n+=(t^(r|~e))+s[6]-1560198380|0,n=(n<<15|n>>>17)+r|0,e+=(r^(n|~t))+s[13]+1309151649|0,e=(e<<21|e>>>11)+n|0,t+=(n^(e|~r))+s[4]-145523070|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~n))+s[11]-1120210379|0,r=(r<<10|r>>>22)+t|0,n+=(t^(r|~e))+s[2]+718787259|0,n=(n<<15|n>>>17)+r|0,e+=(r^(n|~t))+s[9]-343485551|0,e=(e<<21|e>>>11)+n|0,a[0]=t+a[0]|0,a[1]=e+a[1]|0,a[2]=n+a[2]|0,a[3]=r+a[3]|0}function i(a){var s=[],t;for(t=0;t<64;t+=4)s[t>>2]=a.charCodeAt(t)+(a.charCodeAt(t+1)<<8)+(a.charCodeAt(t+2)<<16)+(a.charCodeAt(t+3)<<24);return s}function f(a){var s=[],t;for(t=0;t<64;t+=4)s[t>>2]=a[t]+(a[t+1]<<8)+(a[t+2]<<16)+(a[t+3]<<24);return s}function d(a){var s=a.length,t=[1732584193,-271733879,-1732584194,271733878],e,n,r,y,S,c;for(e=64;e<=s;e+=64)l(t,i(a.substring(e-64,e)));for(a=a.substring(e-64),n=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)r[e>>2]|=a.charCodeAt(e)<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(l(t,r),e=0;e<16;e+=1)r[e]=0;return y=s*8,y=y.toString(16).match(/(.*?)(.{0,8})$/),S=parseInt(y[2],16),c=parseInt(y[1],16)||0,r[14]=S,r[15]=c,l(t,r),t}function v(a){var s=a.length,t=[1732584193,-271733879,-1732584194,271733878],e,n,r,y,S,c;for(e=64;e<=s;e+=64)l(t,f(a.subarray(e-64,e)));for(a=e-64<s?a.subarray(e-64):new Uint8Array(0),n=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<n;e+=1)r[e>>2]|=a[e]<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(l(t,r),e=0;e<16;e+=1)r[e]=0;return y=s*8,y=y.toString(16).match(/(.*?)(.{0,8})$/),S=parseInt(y[2],16),c=parseInt(y[1],16)||0,r[14]=S,r[15]=c,l(t,r),t}function w(a){var s="",t;for(t=0;t<4;t+=1)s+=m[a>>t*8+4&15]+m[a>>t*8&15];return s}function A(a){var s;for(s=0;s<a.length;s+=1)a[s]=w(a[s]);return a.join("")}A(d("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function a(s,t){return s=s|0||0,s<0?Math.max(s+t,0):Math.min(s,t)}ArrayBuffer.prototype.slice=function(s,t){var e=this.byteLength,n=a(s,e),r=e,y,S,c,F;return t!==p&&(r=a(t,e)),n>r?new ArrayBuffer(0):(y=r-n,S=new ArrayBuffer(y),c=new Uint8Array(S),F=new Uint8Array(this,n,y),c.set(F),S)}}();function U(a){return/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a))),a}function C(a,s){var t=a.length,e=new ArrayBuffer(t),n=new Uint8Array(e),r;for(r=0;r<t;r+=1)n[r]=a.charCodeAt(r);return s?n:e}function z(a){return String.fromCharCode.apply(null,new Uint8Array(a))}function b(a,s,t){var e=new Uint8Array(a.byteLength+s.byteLength);return e.set(new Uint8Array(a)),e.set(new Uint8Array(s),a.byteLength),e}function P(a){var s=[],t=a.length,e;for(e=0;e<t-1;e+=2)s.push(parseInt(a.substr(e,2),16));return String.fromCharCode.apply(String,s)}function h(){this.reset()}return h.prototype.append=function(a){return this.appendBinary(U(a)),this},h.prototype.appendBinary=function(a){this._buff+=a,this._length+=a.length;var s=this._buff.length,t;for(t=64;t<=s;t+=64)l(this._hash,i(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},h.prototype.end=function(a){var s=this._buff,t=s.length,e,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(e=0;e<t;e+=1)n[e>>2]|=s.charCodeAt(e)<<(e%4<<3);return this._finish(n,t),r=A(this._hash),a&&(r=P(r)),this.reset(),r},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},h.prototype.setState=function(a){return this._buff=a.buff,this._length=a.length,this._hash=a.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(a,s){var t=s,e,n,r;if(a[t>>2]|=128<<(t%4<<3),t>55)for(l(this._hash,a),t=0;t<16;t+=1)a[t]=0;e=this._length*8,e=e.toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(e[2],16),r=parseInt(e[1],16)||0,a[14]=n,a[15]=r,l(this._hash,a)},h.hash=function(a,s){return h.hashBinary(U(a),s)},h.hashBinary=function(a,s){var t=d(a),e=A(t);return s?P(e):e},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(a){var s=b(this._buff.buffer,a),t=s.length,e;for(this._length+=a.byteLength,e=64;e<=t;e+=64)l(this._hash,f(s.subarray(e-64,e)));return this._buff=e-64<t?new Uint8Array(s.buffer.slice(e-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(a){var s=this._buff,t=s.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n,r;for(n=0;n<t;n+=1)e[n>>2]|=s[n]<<(n%4<<3);return this._finish(e,t),r=A(this._hash),a&&(r=P(r)),this.reset(),r},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var a=h.prototype.getState.call(this);return a.buff=z(a.buff),a},h.ArrayBuffer.prototype.setState=function(a){return a.buff=C(a.buff,!0),h.prototype.setState.call(this,a)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(a,s){var t=v(new Uint8Array(a)),e=A(t);return s?P(e):e},h})})(Q);var Fe=Q.exports;const Be=re(Fe);function Ce(o,u){const p=[];let m=0;const l=parseInt(u+"");for(;m<o.size;)p.push(o.slice(m,m+l)),m+=l;return p}function Ie(o){return new Promise(u=>{const p=new Be.ArrayBuffer,m=new FileReader,l=o.size,i=2*1024*1024,f=[o.slice(0,i)];let d=i;for(;d<l;){if(d+i>=l)f.push(o.slice(d,d+i));else{const v=d+i/2,w=d+i;f.push(o.slice(d,d+2)),f.push(o.slice(v,v+2)),f.push(o.slice(w-2,w))}d+=i}m.readAsArrayBuffer(new Blob(f)),m.onload=v=>{p.append(v.target?.result),u(p.end())}})}const D=new Se({baseURL:K.baseURL,presetRequestInit:o=>{const u=o.headers,p=Z();return p&&u.set("Token",p),o}}),Ue=async o=>D.request({method:"POST",url:"/file/chunk/verify",data:o,setRequestInit(u){return J(u),u}}).then(u=>{if(u.code!==200)throw u;return u.datas??u.data}).then(u=>({uploadedList:u.chunkList.map(p=>p.identifier+"-"+(p.chunkNumber-1)),uploaded:u.alreadyUploaded,mergedFile:u.mergedFile})),Ee=async(o,u,p)=>new Promise((m,l)=>{const i=new XMLHttpRequest;i.upload.onprogress=p?.onprogress||null,i.open("post",D.baseURL+"/file/chunk/upload"),i.setRequestHeader("Tenant","default"),i.setRequestHeader("Application","platform"),i.setRequestHeader("Token",Z());const f=new FormData;f.append("file",o.chunk),f.append("identifier",o.fileHash),f.append("filename",o.fileName),f.append("chunkNumber",o.index+1+""),f.append("chunkIdentifier",o.hash+""),f.append("totalChunk",o.chunksLength+""),f.append("chunkSize",o.sliceSize+""),f.append("currentChunkSize",o.chunk.size+""),f.append("totalSize",o.fileSize+""),u&&f.append("fileServiceType",u),i.onerror=d=>{l(d)},i.send(f),i.onreadystatechange=d=>{const v=d.target;if(i.readyState===4)if(i.status===200){if(p?.xhrs){const w=p.xhrs.findIndex(A=>A===i);p.xhrs.splice(w,1)}m({data:v.response})}else i.status===500&&l(v.response)},i.timeout=5*1e3,i.ontimeout=d=>{l(d)},p?.xhrs?.push(i)}),Le=async o=>D.request({method:"POST",url:"/file/chunk/merge",data:o,setRequestInit:J}).then(u=>{if(u.code!==200)throw new Error(u.message);return u.datas??u.data}),Pe=ne({name:"VkfUploadPlus",components:{VkfFormItem:ee,ElInput:se,ElButtonGroup:ae,ElButton:oe,ElIcon:ue,SuccessFilled:k},directives:{loading:ie},props:we,emits:Ae,setup(o,{emit:u}){const p=te(o),m=Math.random().toString(36).slice(-8),l=G({default:null,key:"file"},o,u),i=G({default:g.wait,key:"fileStatus"},o,u);le(()=>{D.baseURL=o.url||K.baseURL}),fe(()=>i.value,(s,t)=>{s===g.doUpload&&U(),s===g.doPause&&(t===g.uploading?C():i.value=t)});const f=M(""),d=M([]),v=M([]),w=de(()=>i.value===g.done?k:i.value===g.error?he:pe),A=s=>{C();const e=s.target.files?.[0];e&&(l.value=e,i.value=g.wait)},U=async()=>{if(!l.value)return;i.value=g.uploading;const s=Ce(l.value,o.chunkSize),t=await Ie(l.value);f.value=t;let e=[],n=!1,r;try{const c=await Ue({identifier:t});e=c.uploadedList,n=c.uploaded,r=c.mergedFile}catch{i.value=g.error,V({type:"error",message:"上传失败"});return}if(n){V({type:"success",message:"上传成功"}),u("success",r),i.value=g.done;return}const y=s[0].size;d.value=s.map((c,F)=>{const I=f.value+"-"+F;return{fileName:l.value.name,fileHash:f.value,fileSize:l.value.size,chunk:c,hash:I,index:F,progress:e.indexOf(I)>-1?100:0,chunksLength:s.length,sliceSize:y,status:g.wait}});const S=d.value.filter(c=>e.indexOf(c.hash)===-1);z(S).then(()=>P()).then(()=>{i.value=g.done}).catch(()=>{i.value=g.error,V({type:"error",message:"上传失败"})})},C=()=>{v.value.forEach(s=>{s.abort()}),v.value=[],i.value=g.pause};async function z(s,t=4,e=10){return new Promise((n,r)=>{const y=s.length;let S=0;const c=[],F=async()=>{for(;S<y&&t>0;){t--;const I=s.findIndex(_=>_.status===g.wait||_.status===g.error),H=s[I];H&&(H.status=g.uploading,Ee(H,o.fileServiceType,{onprogress(_){d.value[H.index].progress=parseInt(_.loaded/_.total*100+"")},xhrs:v.value}).then(()=>{s[I].status=g.done,t++,S++}).then(()=>{S===y?n(void 0):F()}).catch(()=>{const _=s[I].index;if(s[I].status=g.error,typeof c[_]!="number"&&(c[_]=0),c[_]++,console.warn(_,s[I],c[_],"次报错"),d.value[_].progress=-1,c[_]>=e)return r();t++,F()}))}};F()})}const b=M(!1);function P(){if(l.value&&f.value)return b.value=!0,Le({filename:l.value.name,identifier:f.value,fileServiceType:o.fileServiceType,dictId:o.dictId,totalChunk:d.value.length}).then(s=>{u("success",s)}).catch(s=>{throw console.error("合并失败",s),V({type:"error",message:"合并失败"}),s}).finally(()=>{b.value=!1})}X(()=>{C()});class h extends _e{listener;constructor(t){super(),this.listener=t}add(){window.addEventListener("online",this.listener),this.removeHandler=()=>{window.removeEventListener("online",this.listener)}}}const a=new h(()=>{i.value===g.error&&(i.value=g.doUpload)});return a.add(),X(()=>{a.remove()}),{formItemBindProps:p,handleFileChange:A,uuid:m,containerFile:l,handleUpload:U,fileStatus:i,chunks:d,Status:g,filePrefixIcon:w,handlePause:C,merging:b}}}),ze={class:"vkf-upload-plus-main"},Re=["for"],Te={key:0,class:"vkf-upload-plus-msg-x"},He={key:1,class:"vkf-upload-plus-cube-x"},Me=["id","accept"];function Ve(o,u,p,m,l,i){const f=E("ElInput"),d=E("SuccessFilled"),v=E("ElIcon"),w=E("ElButton"),A=E("el-button"),U=E("el-button-group"),C=E("VkfFormItem"),z=ge("loading");return B(),R(C,be(o.formItemBindProps,{class:"vkf-upload-plus"}),{default:L(()=>[T("div",ze,[T("label",{for:o.uuid,class:"vkf-upload-plus-label"},[q(f,{class:O({"is-success":o.fileStatus===o.Status.done,"is-error":o.fileStatus===o.Status.error}),"model-value":o.containerFile?.name,"prefix-icon":o.filePrefixIcon,placeholder:"请选择文件"},null,8,["class","model-value","prefix-icon"]),o.fileStatus===o.Status.done?(B(),N("div",Te,[q(v,null,{default:L(()=>[q(d)]),_:1}),u[1]||(u[1]=T("span",{class:"vkf-upload-plus-msg"}," 上传成功 ",-1))])):W("",!0),o.fileStatus===o.Status.uploading||o.fileStatus===o.Status.pause?(B(),N("div",He,[(B(!0),N(ye,null,me(o.chunks,b=>(B(),N("div",{key:b.hash,class:O(["vkf-upload-plus-cube",{error:b.status==o.Status.error}]),style:Y({width:100/b.chunksLength+"%"})},[T("div",{class:O({uploading:b.progress>0&&b.progress<100,success:b.progress==100}),style:Y({height:b.progress+"%"})},null,6)],6))),128))])):W("",!0)],8,Re),T("input",{id:o.uuid,type:"file",class:"vkf-upload-plus-input",accept:o.accept,onChange:u[0]||(u[0]=(...b)=>o.handleFileChange&&o.handleFileChange(...b))},null,40,Me),q(U,{class:"vkf-upload-plus-btng"},{default:L(()=>[o.merging?ve((B(),R(w,{key:0,type:"success"},{default:L(()=>u[2]||(u[2]=[$(" 合并 ")])),_:1})),[[z,o.merging]]):o.fileStatus===o.Status.uploading?(B(),R(w,{key:1,type:"danger",onClick:o.handlePause},{default:L(()=>u[3]||(u[3]=[$(" 暂停 ")])),_:1},8,["onClick"])):o.fileStatus===o.Status.done?(B(),R(w,{key:2,type:"success",disabled:""},{default:L(()=>u[4]||(u[4]=[$(" 已传 ")])),_:1})):(B(),R(A,{key:3,type:"primary",disabled:!o.containerFile,onClick:o.handleUpload},{default:L(()=>u[5]||(u[5]=[$(" 上传 ")])),_:1},8,["disabled","onClick"]))]),_:1})])]),_:1},16)}const j=ce(Pe,[["render",Ve]]);j.install=o=>{o.component(j.name,j)};export{g as S,j as V};