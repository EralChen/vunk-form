const __vite__fileDeps=["assets/chunks/chunk-B2z5W1yp.js","assets/chunks/chunk-NLnPBiTG.js","assets/chunks/chunk-974c_ewH.js","assets/chunks/chunk-JyTIT74I.js","assets/chunks/chunk-DC95vdEF.js","assets/chunks/chunk-CYWh0Wrq.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.Do_lUacu.css","assets/static/index.D4havbC8.css","assets/chunks/chunk-Ch0SDxT-.js","assets/chunks/chunk-DBIPdCjN.js","assets/static/ShadedColorMaterial.GuYAk2ql.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as u}from"./chunk-fEI7Cr-O.js";import{bi as v,bm as c,bk as m,bl as f,hM as _,hN as w,bn as g,es as I,hO as L,dW as O,ak as h,hP as S,hQ as A,S as V,hR as $,c as P,bo as M,hS as E,hT as d,hU as C,$ as r,a0 as l,bA as p,bq as T,as as x,dG as G,al as b,a2 as R,ao as j,z as H}from"./chunk-974c_ewH.js";import"./chunk-JyTIT74I.js";import"./chunk-DC95vdEF.js";import"./chunk-CYWh0Wrq.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";const k=Symbol("WebScene");let s=class extends v(c(m(f(_(w(g(j))))))){constructor(e){super(e),this.allLayers=new I({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=L(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=O(async(i,t,a)=>{const{save:o,saveAs:n}=await u(()=>import("./chunk-B2z5W1yp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));switch(i){case d.SAVE:return o(this,t);case d.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([h(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&k in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(G(()=>this.tables,"before-add",t=>{t.preventDefault(),H.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},x),h(()=>this.visible,this._onVisibilityChange.bind(this),b)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===S.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const y=A(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);y?.layerType&&o.push(y)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new V({id:a,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return $(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:P},e).catch(t=>{if(M(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return E(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(d.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(d.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(h(()=>e.visible,i=>this._onChildVisibilityChange(e,i),b),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!C(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([p("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:e?.type==="Group Layer"&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([T("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([p("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([R("esri.layers.GroupLayer")],s);const J=s;export{J as default};