import{hI as w,V as _,P as T,U as I,$ as o,a0 as s,a2 as f,hV as $,cw as L,bk as O,bl as b,bm as x,bn as M,cx as N,cy as A,dG as P,al as V,hW as j,bo as J,hX as h,s as l,cJ as m,cK as U,z as u,cL as D,hY as K,hZ as E,h_ as z,h$ as R,bz as C,bq as Z,cM as k,ao as q}from"./chunk-XIlYN-8S.js";import{f as d}from"./chunk-DKYIzjf_.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";var a;let n=a=class extends w(_.ofType(d)){constructor(e){super(e),this.url=null}clone(){return new a({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const r=new a;for(const p of e)r.add(d.fromJSON(p,t));return r}static async fromUrl(e,t,r){const p={url:T(e),origin:"service"},g=await I(e,{responseType:"json",signal:r?.signal}),S=t.toJSON(),y=[];for(const c of g.data)y.push(d.fromJSON({...c,geometry:{...c.geometry,spatialReference:S}},p));return new a({url:e,items:y})}};o([s({type:String})],n.prototype,"url",void 0),n=a=o([f("esri.layers.support.SceneModifications")],n);const v=n;let i=class extends $(L(O(b(x(M(N(A(q)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles(P(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,V))}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:j(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){J(r)}if(await this._fetchService(t),this._modificationsSource!=null){const r=await v.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(h.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(h.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new l("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";m(u.getLogger(this),U(t,"absolute-height",e)),m(u.getLogger(this),D(t,e))}};o([s({type:String,readOnly:!0})],i.prototype,"geometryType",void 0),o([s({type:["show","hide"]})],i.prototype,"listMode",void 0),o([s({type:["IntegratedMeshLayer"]})],i.prototype,"operationalLayerType",void 0),o([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),o([s({type:K,readOnly:!0})],i.prototype,"nodePages",void 0),o([s({type:[E],readOnly:!0})],i.prototype,"materialDefinitions",void 0),o([s({type:[z],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),o([s({type:[R],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),o([s({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),o([s({type:v}),C({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],i.prototype,"modifications",void 0),o([Z(["web-scene","portal-item"],"modifications")],i.prototype,"readModifications",null),o([s(k)],i.prototype,"elevationInfo",null),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),i=o([f("esri.layers.IntegratedMeshLayer")],i);const ee=i;export{ee as default};