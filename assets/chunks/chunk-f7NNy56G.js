import{o as En,gR as Me}from"./chunk-Y-RRnlzY.js";import"./chunk-0__ZOe37.js";import"./chunk-BZT5mSTd.js";import"./chunk-Dw53j9Qa.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";var Pr,oe,Ar,Wr={exports:{}};Pr=Wr,oe=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,typeof __filename<"u"&&(oe=oe||__filename),Ar=function(ae){var Ve,He,i=(ae=ae||{})!==void 0?ae:{};i.ready=new Promise(function(e,r){Ve=e,He=r});var O,L={};for(O in i)i.hasOwnProperty(O)&&(L[O]=i[O]);var ue=!1,x=!1,we=!1,ze=!1;ue=typeof window=="object",x=typeof importScripts=="function",we=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",ze=!ue&&!we&&!x;var se,X,Te,_e,w="";function Er(e){return i.locateFile?i.locateFile(e,w):w+e}we?(w=x?require("path").dirname(w)+"/":__dirname+"/",se=function(e,r){return Te||(Te=require("fs")),_e||(_e=require("path")),e=_e.normalize(e),Te.readFileSync(e,r?null:"utf8")},X=function(e){var r=se(e,!0);return r.buffer||(r=new Uint8Array(r)),Pe(r.buffer),r},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof An))throw e}),process.on("unhandledRejection",H),i.inspect=function(){return"[Emscripten Module object]"}):ze?(typeof read<"u"&&(se=function(e){return read(e)}),X=function(e){var r;return typeof readbuffer=="function"?new Uint8Array(readbuffer(e)):(Pe(typeof(r=read(e,"binary"))=="object"),r)},typeof scriptArgs<"u"&&scriptArgs,typeof print<"u"&&(typeof console>"u"&&(console={}),console.log=print,console.warn=console.error=typeof printErr<"u"?printErr:print)):(ue||x)&&(x?w=self.location.href:document.currentScript&&(w=document.currentScript.src),oe&&(w=oe),w=w.indexOf("blob:")!==0?w.substr(0,w.lastIndexOf("/")+1):"",se=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},x&&(X=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var J,Y,Sr=i.print||console.log.bind(console),M=i.printErr||console.warn.bind(console);for(O in L)L.hasOwnProperty(O)&&(i[O]=L[O]);L=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(J=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,typeof WebAssembly!="object"&&H("no native wasm support detected");var Or=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),qe=!1;function Pe(e,r){e||H("Assertion failed: "+r)}var Be=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Ne(e,r,t){for(var n=r+t,o=r;e[o]&&!(o>=n);)++o;if(o-r>16&&e.subarray&&Be)return Be.decode(e.subarray(r,o));for(var a="";r<o;){var s=e[r++];if(128&s){var u=63&e[r++];if((224&s)!=192){var c=63&e[r++];if((s=(240&s)==224?(15&s)<<12|u<<6|c:(7&s)<<18|u<<12|c<<6|63&e[r++])<65536)a+=String.fromCharCode(s);else{var l=s-65536;a+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else a+=String.fromCharCode((31&s)<<6|u)}else a+=String.fromCharCode(s)}return a}function Ge(e,r){return e?Ne($,e,r):""}function jr(e,r,t,n){if(!(n>0))return 0;for(var o=t,a=t+n-1,s=0;s<e.length;++s){var u=e.charCodeAt(s);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++s)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-o}function kr(e,r,t){return jr(e,$,r,t)}function Fr(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++t)),n<=127?++r:r+=n<=2047?2:n<=65535?3:4}return r}var Le=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Rr(e,r){for(var t=e,n=t>>1,o=n+r/2;!(n>=o)&&Z[n];)++n;if((t=n<<1)-e>32&&Le)return Le.decode($.subarray(e,t));for(var a=0,s="";;){var u=D[e+2*a>>1];if(u==0||a==r/2)return s;++a,s+=String.fromCharCode(u)}}function xr(e,r,t){if(t===void 0&&(t=2147483647),t<2)return 0;for(var n=r,o=(t-=2)<2*e.length?t/2:e.length,a=0;a<o;++a){var s=e.charCodeAt(a);D[r>>1]=s,r+=2}return D[r>>1]=0,r-n}function Dr(e){return 2*e.length}function Ir(e,r){for(var t=0,n="";!(t>=r/4);){var o=g[e+4*t>>2];if(o==0)break;if(++t,o>=65536){var a=o-65536;n+=String.fromCharCode(55296|a>>10,56320|1023&a)}else n+=String.fromCharCode(o)}return n}function Ur(e,r,t){if(t===void 0&&(t=2147483647),t<4)return 0;for(var n=r,o=n+t-4,a=0;a<e.length;++a){var s=e.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++a)),g[r>>2]=s,(r+=4)+4>o)break}return g[r>>2]=0,r-n}function Mr(e){for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r}var V,ce,$,D,Z,g,_,Xe,Je,Ye=65536;function Vr(e,r){return e%r>0&&(e+=r-e%r),e}function Ze(e){V=e,i.HEAP8=ce=new Int8Array(e),i.HEAP16=D=new Int16Array(e),i.HEAP32=g=new Int32Array(e),i.HEAPU8=$=new Uint8Array(e),i.HEAPU16=Z=new Uint16Array(e),i.HEAPU32=_=new Uint32Array(e),i.HEAPF32=Xe=new Float32Array(e),i.HEAPF64=Je=new Float64Array(e)}var Hr=5565536,zr=322496,Ke=i.INITIAL_MEMORY||16777216;function le(e){for(;e.length>0;){var r=e.shift();if(typeof r!="function"){var t=r.func;typeof t=="number"?r.arg===void 0?i.dynCall_v(t):i.dynCall_vi(t,r.arg):t(r.arg===void 0?null:r.arg)}else r(i)}}(Y=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:Ke/Ye,maximum:2147483648/Ye}))&&(V=Y.buffer),Ke=V.byteLength,Ze(V),g[zr>>2]=Hr;var Qe=[],er=[],qr=[],rr=[];function Br(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Xr(i.preRun.shift());le(Qe)}function Nr(){le(er)}function Gr(){le(qr)}function Lr(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Jr(i.postRun.shift());le(rr)}function Xr(e){Qe.unshift(e)}function Jr(e){rr.unshift(e)}var Yr=Math.ceil,Zr=Math.floor,I=0,K=null;function Kr(e){I++,i.monitorRunDependencies&&i.monitorRunDependencies(I)}function Qr(e){if(I--,i.monitorRunDependencies&&i.monitorRunDependencies(I),I==0&&K){var r=K;K=null,r()}}function H(e){i.onAbort&&i.onAbort(e),M(e+=""),qe=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(e);throw He(r),r}function tr(e,r){return String.prototype.startsWith?e.startsWith(r):e.indexOf(r)===0}i.preloadedImages={},i.preloadedAudios={};var et="data:application/octet-stream;base64,";function nr(e){return tr(e,et)}var rt="file://";function ir(e){return tr(e,rt)}var P="basis_transcoder.wasm";function or(){try{if(J)return new Uint8Array(J);if(X)return X(P);throw"both async and sync fetching of the wasm failed"}catch(e){H(e)}}function tt(){return J||!ue&&!x||typeof fetch!="function"||ir(P)?new Promise(function(e,r){e(or())}):fetch(P,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+P+"'";return e.arrayBuffer()}).catch(function(){return or()})}function nt(){var e={a:Pn};function r(a,s){var u=a.exports;i.asm=u,Qr()}function t(a){r(a.instance)}function n(a){return tt().then(function(s){return WebAssembly.instantiate(s,e)}).then(a,function(s){M("failed to asynchronously prepare wasm: "+s),H(s)})}function o(){if(J||typeof WebAssembly.instantiateStreaming!="function"||nr(P)||ir(P)||typeof fetch!="function")return n(t);fetch(P,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(t,function(s){return M("wasm streaming compile failed: "+s),M("falling back to ArrayBuffer instantiation"),n(t)})})}if(Kr(),i.instantiateWasm)try{return i.instantiateWasm(e,r)}catch(a){return M("Module.instantiateWasm callback failed with error: "+a),!1}return o(),{}}nr(P)||(P=Er(P)),er.push({func:function(){br()}});var fe={};function pe(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function Q(e){return this.fromWireType(_[e>>2])}var z={},U={},de={},it=48,ot=57;function ar(e){if(e===void 0)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=it&&r<=ot?"_"+e:e}function Ae(e,r){return e=ar(e),function(){return r.apply(this,arguments)}}function We(e,r){var t=Ae(r,function(n){this.name=r,this.message=n;var o=new Error(n).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},t}var ur=void 0;function ye(e){throw new ur(e)}function j(e,r,t){function n(u){var c=t(u);c.length!==e.length&&ye("Mismatched type converter count");for(var l=0;l<e.length;++l)A(e[l],c[l])}e.forEach(function(u){de[u]=r});var o=new Array(r.length),a=[],s=0;r.forEach(function(u,c){U.hasOwnProperty(u)?o[c]=U[u]:(a.push(u),z.hasOwnProperty(u)||(z[u]=[]),z[u].push(function(){o[c]=U[u],++s===a.length&&n(o)}))}),a.length===0&&n(o)}function at(e){var r=fe[e];delete fe[e];var t=r.rawConstructor,n=r.rawDestructor,o=r.fields;j([e],o.map(function(a){return a.getterReturnType}).concat(o.map(function(a){return a.setterArgumentType})),function(a){var s={};return o.forEach(function(u,c){var l=u.fieldName,f=a[c],m=u.getter,d=u.getterContext,h=a[c+o.length],b=u.setter,y=u.setterContext;s[l]={read:function(F){return f.fromWireType(m(d,F))},write:function(F,R){var N=[];b(y,F,h.toWireType(N,R)),pe(N)}}}),[{name:r.name,fromWireType:function(u){var c={};for(var l in s)c[l]=s[l].read(u);return n(u),c},toWireType:function(u,c){for(var l in s)if(!(l in c))throw new TypeError('Missing field:  "'+l+'"');var f=t();for(l in s)s[l].write(f,c[l]);return u!==null&&u.push(n,f),f},argPackAdvance:8,readValueFromPointer:Q,destructorFunction:n}]})}function me(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function ut(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);sr=e}var sr=void 0;function v(e){for(var r="",t=e;$[t];)r+=sr[$[t++]];return r}var q=void 0;function p(e){throw new q(e)}function A(e,r,t){if(t=t||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=r.name;if(e||p('type "'+n+'" must have a positive integer typeid pointer'),U.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;p("Cannot register type '"+n+"' twice")}if(U[e]=r,delete de[e],z.hasOwnProperty(e)){var o=z[e];delete z[e],o.forEach(function(a){a()})}}function st(e,r,t,n,o){var a=me(t);A(e,{name:r=v(r),fromWireType:function(s){return!!s},toWireType:function(s,u){return u?n:o},argPackAdvance:8,readValueFromPointer:function(s){var u;if(t===1)u=ce;else if(t===2)u=D;else{if(t!==4)throw new TypeError("Unknown boolean type size: "+r);u=g}return this.fromWireType(u[s>>a])},destructorFunction:null})}function ct(e){if(!(this instanceof k)||!(e instanceof k))return!1;for(var r=this.$$.ptrType.registeredClass,t=this.$$.ptr,n=e.$$.ptrType.registeredClass,o=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return r===n&&t===o}function lt(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Ee(e){function r(t){return t.$$.ptrType.registeredClass.name}p(r(e)+" instance already deleted")}var Se=!1;function cr(e){}function ft(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function lr(e){e.count.value-=1,e.count.value===0&&ft(e)}function ee(e){return typeof FinalizationGroup>"u"?(ee=function(r){return r},e):(Se=new FinalizationGroup(function(r){for(var t=r.next();!t.done;t=r.next()){var n=t.value;n.ptr?lr(n):console.warn("object already deleted: "+n.ptr)}}),ee=function(r){return Se.register(r,r.$$,r.$$),r},cr=function(r){Se.unregister(r.$$)},ee(e))}function pt(){if(this.$$.ptr||Ee(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ee(Object.create(Object.getPrototypeOf(this),{$$:{value:lt(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function dt(){this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),cr(this),lr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function yt(){return!this.$$.ptr}var re=void 0,te=[];function Oe(){for(;te.length;){var e=te.pop();e.$$.deleteScheduled=!1,e.delete()}}function mt(){return this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&p("Object already scheduled for deletion"),te.push(this),te.length===1&&re&&re(Oe),this.$$.deleteScheduled=!0,this}function ht(){k.prototype.isAliasOf=ct,k.prototype.clone=pt,k.prototype.delete=dt,k.prototype.isDeleted=yt,k.prototype.deleteLater=mt}function k(){}var fr={};function pr(e,r,t){if(e[r].overloadTable===void 0){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||p("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}}function je(e,r,t){i.hasOwnProperty(e)?((t===void 0||i[e].overloadTable!==void 0&&i[e].overloadTable[t]!==void 0)&&p("Cannot register public name '"+e+"' twice"),pr(i,e,e),i.hasOwnProperty(t)&&p("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),i[e].overloadTable[t]=r):(i[e]=r,t!==void 0&&(i[e].numArguments=t))}function vt(e,r,t,n,o,a,s,u){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=o,this.getActualType=a,this.upcast=s,this.downcast=u,this.pureVirtualFunctions=[]}function ke(e,r,t){for(;r!==t;)r.upcast||p("Expected null or instance of "+t.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function gt(e,r){if(r===null)return this.isReference&&p("null is not a valid "+this.name),0;r.$$||p('Cannot pass "'+B(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name);var t=r.$$.ptrType.registeredClass;return ke(r.$$.ptr,t,this.registeredClass)}function $t(e,r){var t;if(r===null)return this.isReference&&p("null is not a valid "+this.name),this.isSmartPointer?(t=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,t),t):0;r.$$||p('Cannot pass "'+B(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);var n=r.$$.ptrType.registeredClass;if(t=ke(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(r.$$.smartPtr===void 0&&p("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:p("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var o=r.clone();t=this.rawShare(t,E(function(){o.delete()})),e!==null&&e.push(this.rawDestructor,t)}break;default:p("Unsupporting sharing policy")}return t}function bt(e,r){if(r===null)return this.isReference&&p("null is not a valid "+this.name),0;r.$$||p('Cannot pass "'+B(r)+'" as a '+this.name),r.$$.ptr||p("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&p("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name);var t=r.$$.ptrType.registeredClass;return ke(r.$$.ptr,t,this.registeredClass)}function Ct(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function wt(e){this.rawDestructor&&this.rawDestructor(e)}function Tt(e){e!==null&&e.delete()}function dr(e,r,t){if(r===t)return e;if(t.baseClass===void 0)return null;var n=dr(e,r,t.baseClass);return n===null?null:t.downcast(n)}function _t(){return Object.keys(ne).length}function Pt(){var e=[];for(var r in ne)ne.hasOwnProperty(r)&&e.push(ne[r]);return e}function At(e){re=e,te.length&&re&&re(Oe)}function Wt(){i.getInheritedInstanceCount=_t,i.getLiveInheritedInstances=Pt,i.flushPendingDeletes=Oe,i.setDelayFunction=At}var ne={};function Et(e,r){for(r===void 0&&p("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}function St(e,r){return r=Et(e,r),ne[r]}function he(e,r){return r.ptrType&&r.ptr||ye("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&ye("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ee(Object.create(e,{$$:{value:r}}))}function Ot(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=St(this.registeredClass,r);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var n=t.clone();return this.destructor(e),n}function o(){return this.isSmartPointer?he(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):he(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var a,s=this.registeredClass.getActualType(r),u=fr[s];if(!u)return o.call(this);a=this.isConst?u.constPointerType:u.pointerType;var c=dr(r,this.registeredClass,a.registeredClass);return c===null?o.call(this):this.isSmartPointer?he(a.registeredClass.instancePrototype,{ptrType:a,ptr:c,smartPtrType:this,smartPtr:e}):he(a.registeredClass.instancePrototype,{ptrType:a,ptr:c})}function jt(){W.prototype.getPointee=Ct,W.prototype.destructor=wt,W.prototype.argPackAdvance=8,W.prototype.readValueFromPointer=Q,W.prototype.deleteObject=Tt,W.prototype.fromWireType=Ot}function W(e,r,t,n,o,a,s,u,c,l,f){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=n,this.isSmartPointer=o,this.pointeeType=a,this.sharingPolicy=s,this.rawGetPointee=u,this.rawConstructor=c,this.rawShare=l,this.rawDestructor=f,o||r.baseClass!==void 0?this.toWireType=$t:n?(this.toWireType=gt,this.destructorFunction=null):(this.toWireType=bt,this.destructorFunction=null)}function yr(e,r,t){i.hasOwnProperty(e)||ye("Replacing nonexistant public symbol"),i[e].overloadTable!==void 0&&t!==void 0?i[e].overloadTable[t]=r:(i[e]=r,i[e].argCount=t)}function T(e,r){function t(o){var a=[r];return function(){a.length=arguments.length+1;for(var s=0;s<arguments.length;s++)a[s+1]=arguments[s];return o.apply(null,a)}}e=v(e);var n=t(i["dynCall_"+e]);return typeof n!="function"&&p("unknown function pointer with signature "+e+": "+r),n}var mr=void 0;function hr(e){var r=Cr(e),t=v(r);return S(r),t}function ve(e,r){var t=[],n={};function o(a){n[a]||U[a]||(de[a]?de[a].forEach(o):(t.push(a),n[a]=!0))}throw r.forEach(o),new mr(e+": "+t.map(hr).join([", "]))}function kt(e,r,t,n,o,a,s,u,c,l,f,m,d){f=v(f),a=T(o,a),u&&(u=T(s,u)),l&&(l=T(c,l)),d=T(m,d);var h=ar(f);je(h,function(){ve("Cannot construct "+f+" due to unbound types",[n])}),j([e,r,t],n?[n]:[],function(b){var y,F;b=b[0],F=n?(y=b.registeredClass).instancePrototype:k.prototype;var R=Ae(h,function(){if(Object.getPrototypeOf(this)!==N)throw new q("Use 'new' to construct "+f);if(G.constructor_body===void 0)throw new q(f+" has no accessible constructor");var _r=G.constructor_body[arguments.length];if(_r===void 0)throw new q("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(G.constructor_body).toString()+") parameters instead!");return _r.apply(this,arguments)}),N=Object.create(F,{constructor:{value:R}});R.prototype=N;var G=new vt(f,R,N,d,y,a,u,l),Wn=new W(f,G,!0,!1,!1),wr=new W(f+"*",G,!1,!1,!1),Tr=new W(f+" const*",G,!1,!0,!1);return fr[e]={pointerType:wr,constPointerType:Tr},yr(h,R),[Wn,wr,Tr]})}function Fe(e,r){for(var t=[],n=0;n<e;n++)t.push(g[(r>>2)+n]);return t}function Ft(e,r,t,n,o,a){Pe(r>0);var s=Fe(r,t);o=T(n,o);var u=[a],c=[];j([],[e],function(l){var f="constructor "+(l=l[0]).name;if(l.registeredClass.constructor_body===void 0&&(l.registeredClass.constructor_body=[]),l.registeredClass.constructor_body[r-1]!==void 0)throw new q("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+l.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return l.registeredClass.constructor_body[r-1]=function(){ve("Cannot construct "+l.name+" due to unbound types",s)},j([],s,function(m){return l.registeredClass.constructor_body[r-1]=function(){arguments.length!==r-1&&p(f+" called with "+arguments.length+" arguments, expected "+(r-1)),c.length=0,u.length=r;for(var d=1;d<r;++d)u[d]=m[d].toWireType(c,arguments[d-1]);var h=o.apply(null,u);return pe(c),m[0].fromWireType(h)},[]}),[]})}function vr(e,r,t,n,o){var a=r.length;a<2&&p("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=r[1]!==null&&t!==null,u=!1,c=1;c<r.length;++c)if(r[c]!==null&&r[c].destructorFunction===void 0){u=!0;break}var l=r[0].name!=="void",f=a-2,m=new Array(f),d=[],h=[];return function(){var b;arguments.length!==f&&p("function "+e+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,d.length=s?2:1,d[0]=o,s&&(b=r[1].toWireType(h,this),d[1]=b);for(var y=0;y<f;++y)m[y]=r[y+2].toWireType(h,arguments[y]),d.push(m[y]);var F=n.apply(null,d);if(u)pe(h);else for(y=s?1:2;y<r.length;y++){var R=y===1?b:m[y-2];r[y].destructorFunction!==null&&r[y].destructorFunction(R)}if(l)return r[0].fromWireType(F)}}function Rt(e,r,t,n,o,a,s,u){var c=Fe(t,n);r=v(r),a=T(o,a),j([],[e],function(l){var f=(l=l[0]).name+"."+r;function m(){ve("Cannot call "+f+" due to unbound types",c)}u&&l.registeredClass.pureVirtualFunctions.push(r);var d=l.registeredClass.instancePrototype,h=d[r];return h===void 0||h.overloadTable===void 0&&h.className!==l.name&&h.argCount===t-2?(m.argCount=t-2,m.className=l.name,d[r]=m):(pr(d,r,f),d[r].overloadTable[t-2]=m),j([],c,function(b){var y=vr(f,b,l,a,s);return d[r].overloadTable===void 0?(y.argCount=t-2,d[r]=y):d[r].overloadTable[t-2]=y,[]}),[]})}function xt(e,r,t){e=v(e),j([],[r],function(n){return n=n[0],i[e]=n.fromWireType(t),[]})}var Re=[],C=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function xe(e){e>4&&--C[e].refcount==0&&(C[e]=void 0,Re.push(e))}function Dt(){for(var e=0,r=5;r<C.length;++r)C[r]!==void 0&&++e;return e}function It(){for(var e=5;e<C.length;++e)if(C[e]!==void 0)return C[e];return null}function Ut(){i.count_emval_handles=Dt,i.get_first_emval=It}function E(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=Re.length?Re.pop():C.length;return C[r]={refcount:1,value:e},r}}function Mt(e,r){A(e,{name:r=v(r),fromWireType:function(t){var n=C[t].value;return xe(t),n},toWireType:function(t,n){return E(n)},argPackAdvance:8,readValueFromPointer:Q,destructorFunction:null})}function Vt(e,r,t){switch(r){case 0:return function(n){var o=t?ce:$;return this.fromWireType(o[n])};case 1:return function(n){var o=t?D:Z;return this.fromWireType(o[n>>1])};case 2:return function(n){var o=t?g:_;return this.fromWireType(o[n>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function Ht(e,r,t,n){var o=me(t);function a(){}r=v(r),a.values={},A(e,{name:r,constructor:a,fromWireType:function(s){return this.constructor.values[s]},toWireType:function(s,u){return u.value},argPackAdvance:8,readValueFromPointer:Vt(r,o,n),destructorFunction:null}),je(r,a)}function ge(e,r){var t=U[e];return t===void 0&&p(r+" has unknown type "+hr(e)),t}function zt(e,r,t){var n=ge(e,"enum");r=v(r);var o=n.constructor,a=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:Ae(n.name+"_"+r,function(){})}});o.values[t]=a,o[r]=a}function B(e){if(e===null)return"null";var r=typeof e;return r==="object"||r==="array"||r==="function"?e.toString():""+e}function qt(e,r){switch(r){case 2:return function(t){return this.fromWireType(Xe[t>>2])};case 3:return function(t){return this.fromWireType(Je[t>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Bt(e,r,t){var n=me(t);A(e,{name:r=v(r),fromWireType:function(o){return o},toWireType:function(o,a){if(typeof a!="number"&&typeof a!="boolean")throw new TypeError('Cannot convert "'+B(a)+'" to '+this.name);return a},argPackAdvance:8,readValueFromPointer:qt(r,n),destructorFunction:null})}function Nt(e,r,t,n,o,a){var s=Fe(r,t);e=v(e),o=T(n,o),je(e,function(){ve("Cannot call "+e+" due to unbound types",s)},r-1),j([],s,function(u){var c=[u[0],null].concat(u.slice(1));return yr(e,vr(e,c,null,o,a),r-1),[]})}function Gt(e,r,t){switch(r){case 0:return t?function(n){return ce[n]}:function(n){return $[n]};case 1:return t?function(n){return D[n>>1]}:function(n){return Z[n>>1]};case 2:return t?function(n){return g[n>>2]}:function(n){return _[n>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function Lt(e,r,t,n,o){r=v(r),o===-1&&(o=4294967295);var a=me(t),s=function(l){return l};if(n===0){var u=32-8*t;s=function(l){return l<<u>>>u}}var c=r.indexOf("unsigned")!=-1;A(e,{name:r,fromWireType:s,toWireType:function(l,f){if(typeof f!="number"&&typeof f!="boolean")throw new TypeError('Cannot convert "'+B(f)+'" to '+this.name);if(f<n||f>o)throw new TypeError('Passing a number "'+B(f)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+n+", "+o+"]!");return c?f>>>0:0|f},argPackAdvance:8,readValueFromPointer:Gt(r,a,n!==0),destructorFunction:null})}function Xt(e,r,t){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(a){var s=_,u=s[a>>=2],c=s[a+1];return new n(V,c,u)}A(e,{name:t=v(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Jt(e,r){var t=(r=v(r))==="std::string";A(e,{name:r,fromWireType:function(n){var o,a=_[n>>2];if(t)for(var s=n+4,u=0;u<=a;++u){var c=n+4+u;if(u==a||$[c]==0){var l=Ge(s,c-s);o===void 0?o=l:(o+="\0",o+=l),s=c+1}}else{var f=new Array(a);for(u=0;u<a;++u)f[u]=String.fromCharCode($[n+4+u]);o=f.join("")}return S(n),o},toWireType:function(n,o){o instanceof ArrayBuffer&&(o=new Uint8Array(o));var a=typeof o=="string";a||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||p("Cannot pass non-string to std::string");var s=(t&&a?function(){return Fr(o)}:function(){return o.length})(),u=Ie(4+s+1);if(_[u>>2]=s,t&&a)kr(o,u+4,s+1);else if(a)for(var c=0;c<s;++c){var l=o.charCodeAt(c);l>255&&(S(u),p("String has UTF-16 code units that do not fit in 8 bits")),$[u+4+c]=l}else for(c=0;c<s;++c)$[u+4+c]=o[c];return n!==null&&n.push(S,u),u},argPackAdvance:8,readValueFromPointer:Q,destructorFunction:function(n){S(n)}})}function Yt(e,r,t){var n,o,a,s,u;t=v(t),r===2?(n=Rr,o=xr,s=Dr,a=function(){return Z},u=1):r===4&&(n=Ir,o=Ur,s=Mr,a=function(){return _},u=2),A(e,{name:t,fromWireType:function(c){for(var l,f=_[c>>2],m=a(),d=c+4,h=0;h<=f;++h){var b=c+4+h*r;if(h==f||m[b>>u]==0){var y=n(d,b-d);l===void 0?l=y:(l+="\0",l+=y),d=b+r}}return S(c),l},toWireType:function(c,l){typeof l!="string"&&p("Cannot pass non-string to C++ string type "+t);var f=s(l),m=Ie(4+f+r);return _[m>>2]=f>>u,o(l,m+4,f+r),c!==null&&c.push(S,m),m},argPackAdvance:8,readValueFromPointer:Q,destructorFunction:function(c){S(c)}})}function Zt(e,r,t,n,o,a){fe[e]={name:v(r),rawConstructor:T(t,n),rawDestructor:T(o,a),fields:[]}}function Kt(e,r,t,n,o,a,s,u,c,l){fe[e].fields.push({fieldName:v(r),getterReturnType:t,getter:T(n,o),getterContext:a,setterArgumentType:s,setter:T(u,c),setterContext:l})}function Qt(e,r){A(e,{isVoid:!0,name:r=v(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})}function ie(e){return e||p("Cannot use deleted val. handle = "+e),C[e].value}function en(e,r,t){e=ie(e),r=ge(r,"emval::as");var n=[],o=E(n);return g[t>>2]=o,r.toWireType(n,e)}var rn={};function $e(e){var r=rn[e];return r===void 0?v(e):r}var De=[];function tn(e,r,t,n){(e=De[e])(r=ie(r),t=$e(t),null,n)}function gr(){if(typeof globalThis=="object")return globalThis;function e(r){r.$$$embind_global$$$=r;var t=typeof $$$embind_global$$$=="object"&&r.$$$embind_global$$$===r;return t||delete r.$$$embind_global$$$,t}if(typeof $$$embind_global$$$=="object"||(typeof Me=="object"&&e(Me)?$$$embind_global$$$=Me:typeof self=="object"&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")}function nn(e){return e===0?E(gr()):(e=$e(e),E(gr()[e]))}function on(e){var r=De.length;return De.push(e),r}function an(e,r){for(var t=new Array(e),n=0;n<e;++n)t[n]=ge(g[(r>>2)+n],"parameter "+n);return t}function un(e,r){var t=an(e,r),n=t[0],o=new Array(e-1);return on(function(a,s,u,c){for(var l=0,f=0;f<e-1;++f)o[f]=t[f+1].readValueFromPointer(c+l),l+=t[f+1].argPackAdvance;var m=a[s].apply(a,o);for(f=0;f<e-1;++f)t[f+1].deleteObject&&t[f+1].deleteObject(o[f]);if(!n.isVoid)return n.toWireType(u,m)})}function sn(e){return e=$e(e),E(i[e])}function cn(e,r){return E((e=ie(e))[r=ie(r)])}function ln(e){e>4&&(C[e].refcount+=1)}function fn(e){var r=new Array(e+1);return function(t,n,o){r[0]=t;for(var a=0;a<e;++a){var s=ge(g[(n>>2)+a],"parameter "+a);r[a+1]=s.readValueFromPointer(o),o+=s.argPackAdvance}return E(new(t.bind.apply(t,r)))}}var $r={};function pn(e,r,t,n){e=ie(e);var o=$r[r];return o||(o=fn(r),$r[r]=o),o(e,t,n)}function dn(e){return E($e(e))}function yn(e){pe(C[e].value),xe(e)}function mn(){H()}function hn(e,r,t){$.copyWithin(e,r,r+t)}function vn(){return $.length}function gn(e){try{return Y.grow(e-V.byteLength+65535>>>16),Ze(Y.buffer),1}catch{}}function $n(e){e>>>=0;var r=vn(),t=65536,n=2147483648;if(e>n)return!1;for(var o=16777216,a=1;a<=4;a*=2){var s=r*(1+.2/a);if(s=Math.min(s,e+100663296),gn(Math.min(n,Vr(Math.max(o,e,s),t))))return!0}return!1}var be={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var t=be.buffers[e];r===0||r===10?((e===1?Sr:M)(Ne(t,0)),t.length=0):t.push(r)},varargs:void 0,get:function(){return be.varargs+=4,g[be.varargs-4>>2]},getStr:function(e){return Ge(e)},get64:function(e,r){return e}};function bn(e){return 0}function Cn(e,r,t,n,o){}function wn(e,r,t,n){for(var o=0,a=0;a<t;a++){for(var s=g[r+8*a>>2],u=g[r+(8*a+4)>>2],c=0;c<u;c++)be.printChar(e,$[s+c]);o+=u}return g[n>>2]=o,0}function Tn(e){return(e=+e)>=0?+Zr(e+.5):+Yr(e-.5)}function _n(e){}ur=i.InternalError=We(Error,"InternalError"),ut(),q=i.BindingError=We(Error,"BindingError"),ht(),jt(),Wt(),mr=i.UnboundTypeError=We(Error,"UnboundTypeError"),Ut();var Pn={u:at,J:st,y:kt,x:Ft,d:Rt,k:xt,I:Mt,n:Ht,a:zt,B:Bt,i:Nt,j:Lt,h:Xt,C:Jt,w:Yt,v:Zt,c:Kt,K:Qt,m:en,s:tn,b:xe,z:nn,t:un,r:sn,e:cn,g:ln,q:pn,f:dn,l:yn,p:mn,F:hn,G:$n,H:bn,D:Cn,A:wn,memory:Y,o:Tn,E:_n,table:Or};nt();var Ce,br=i.___wasm_call_ctors=function(){return(br=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},Ie=i._malloc=function(){return(Ie=i._malloc=i.asm.M).apply(null,arguments)},S=i._free=function(){return(S=i._free=i.asm.N).apply(null,arguments)},Cr=i.___getTypeName=function(){return(Cr=i.___getTypeName=i.asm.O).apply(null,arguments)};function An(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Ue(e){function r(){Ce||(Ce=!0,i.calledRun=!0,qe||(Nr(),Gr(),Ve(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),Lr()))}I>0||(Br(),I>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),r()},1)):r()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},K=function e(){Ce||Ue(),Ce||(K=e)},i.run=Ue,i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ue(),ae.ready},Pr.exports=Ar;const Sn=En(Wr.exports),Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"}));export{Dn as b};