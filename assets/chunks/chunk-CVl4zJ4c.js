import{$ as u,a0 as d,dD as O,dE as $,dF as A,a2 as j,ak as N,as as S,dG as E,dH as x,dI as b,z as m,ar as v,dJ as R,cZ as Q,dK as _,dL as L,dM as q,dN as G,dO as M,dP as c,dQ as g,s as F,dR as w,cV as T,dh as I,dS as B}from"./chunk-BW-F2k8C.js";const D=P=>{let l=class extends P{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([N(()=>{const e=this.layer;return[e&&"elevationInfo"in e?e.elevationInfo?.featureExpressionInfo:null,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),S),E(()=>this.view?.floors,"change",()=>this._handleRequiredFieldsChange()),E(()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?x(t,[...b(t,e.outFields),...r]):x(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){m.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=this.filter!=null?this.filter.createQuery(e):new v(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const r=R(this);r!=null&&(t.where=t.where?`(${t.where}) AND (${r})`:r)}return this.timeExtent!=null&&(t.timeExtent=t.timeExtent!=null?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new v(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,t){return this._validateFetchPopupFeatures(e,t),this._fetchPopupFeatures(e,t)}_loadArcadeModules(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some(t=>t.type==="expression")?Q():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e=this.view.type==="3d",{layer:t,layer:{fieldsIndex:r,objectIdField:s}}=this,a="renderer"in t&&t.renderer,o="orderBy"in t&&t.orderBy,n="featureReduction"in t?t.featureReduction:null,i=new Set,h=await Promise.allSettled([a?a.collectRequiredFields(i,r):null,_(i,t),e&&"elevationInfo"in t?L(i,t):null,this.filter!=null?q(i,t,this.filter):null,e||this.featureEffect==null?null:q(i,t,this.featureEffect.filter),!e&&n?G(i,t,n):null,!e&&o?M(i,t,o):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&c(i,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"floorInfo"in t&&t.floorInfo&&c(i,t.fieldsIndex,[t.floorInfo.floorField]),t.type==="feature"&&e&&t.infoFor3D!=null&&(t.globalIdField==null&&m.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),c(i,t.fieldsIndex,[t.globalIdField])),t.type==="subtype-group"){g(i,r,t.subtypeField);const f=t.sublayers.map(y=>Promise.all([y.renderer?.collectRequiredFields(i,r),_(i,y)]));await Promise.allSettled(f)}t.type==="catalog-footprint"&&c(i,r,[t.parent.itemSourceField,t.parent.itemTypeField]);for(const f of h)f.status==="rejected"&&m.getLogger(this).error(f.reason);g(i,r,s),e&&"displayField"in t&&t.displayField&&g(i,r,t.displayField);const p=Array.from(i).sort();this._set("requiredFields",p)}_validateFetchPopupFeatures(e,t){if(t!=null)for(const r of e){const s=r.origin&&"layer"in r.origin?r.origin.layer:r.layer;if("popupEnabled"in s&&!s.popupEnabled)throw new F("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:s});if(r.isAggregate){const a="featureReduction"in s?s.featureReduction:null;if(!(a&&"popupTemplate"in a&&a.popupEnabled&&a.popupTemplate))throw new F("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:s})}else if("popupTemplate"in s&&!w(s,t))throw new F("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}}_popupFeatureHasRequiredFields(e,t){return T(t,e)}async _fetchPopupFeatures(e,t){const r=new Array(e.length),s=new Map,a=await this._createPopupQuery(e.map(o=>o.origin?.layer??o.layer),t);for(let o=0;o<e.length;o++){const n=e[o];if(n.isAggregate){r[o]=n;continue}const i=n.origin?.layer??n.layer;if(!i||!("popupEnabled"in i))continue;const h=b(this.layer.fieldsIndex,a.outFields),p=w(i,t);if(p==null)continue;const f=await this._loadArcadeModules(p);I(t),f&&f.arcadeUtils.hasGeometryOperations(p)||!this._popupFeatureHasRequiredFields(n,h)?s.set(n.getObjectId(),{graphic:n,index:o}):r[o]=n}if(this.layer.type==="stream"||s.size===0)return r.filter(Boolean);a.objectIds=Array.from(s.keys());try{const o=await this.layer.queryFeatures(a,t);for(const n of o.features){const{graphic:{geometry:i,origin:h},index:p}=s.get(n.getObjectId());n.geometry||=i,n.origin=h,r[p]=n}}catch{}return r.filter(Boolean)}async _createPopupQuery(e,t){const r=this.layer.createQuery(),s=new Set;let a=!1;const o=e??[this.layer];for(const n of o){if(!("popupEnabled"in n))continue;const i=w(n,t);if(i==null)continue;const h=await this._loadArcadeModules(i);I(t);const p=h&&h.arcadeUtils.hasGeometryOperations(i);a=!(this.layer.geometryType!=="point"&&!p);const f=await B(this.layer,i);I(t);for(const y of f)s.add(y)}if(r.returnGeometry=a,r.returnZ=a,r.returnM=a,r.outFields=Array.from(s),r.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const n=R(this);n!=null&&(r.where=r.where?`(${r.where}) AND (${n})`:n)}return r}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}getTest(){return{createPopupQuery:e=>this._createPopupQuery(void 0,e)}}get test(){return this.getTest()}};return u([d()],l.prototype,"_updatingRequiredFieldsPromise",void 0),u([d({readOnly:!0})],l.prototype,"availableFields",null),u([d({readOnly:!0})],l.prototype,"dataUpdating",void 0),u([d({type:O})],l.prototype,"featureEffect",null),u([d({type:$})],l.prototype,"filter",void 0),u([d(A)],l.prototype,"timeExtent",void 0),u([d()],l.prototype,"layer",void 0),u([d({type:Number})],l.prototype,"maximumNumberOfFeatures",null),u([d({readOnly:!0,type:Boolean})],l.prototype,"maximumNumberOfFeaturesExceeded",null),u([d({readOnly:!0})],l.prototype,"requiredFields",void 0),u([d()],l.prototype,"suspended",void 0),u([d()],l.prototype,"view",void 0),l=u([j("esri.views.layers.FeatureLayerView")],l),l};export{D as j};