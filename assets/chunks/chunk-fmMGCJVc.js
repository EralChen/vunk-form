const __vite__fileDeps=["assets/chunks/chunk-BjHY-Dfr.js","assets/chunks/chunk-CUbaixCE.js","assets/chunks/chunk-BW-F2k8C.js","assets/chunks/chunk-By3pYRVZ.js","assets/chunks/chunk-CrV41Nja.js","assets/chunks/chunk-9eDQGDPh.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.BKJovWDz.css","assets/static/index.BXUJy6tt.css","assets/chunks/chunk-Ch0SDxT-.js","assets/static/ShadedColorMaterial.GuYAk2ql.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as N}from"./chunk-fEI7Cr-O.js";import{o1 as R,qM as V,qN as A,eq as q,cN as U,$ as s,a0 as a,a2 as m,a3 as O,er as j,ak as g,al as x,hA as k,_ as S,qO as W,at as L,a1 as D,c1 as J,Z as z,dW as Z,dZ as G,jx as B,gF as K,q as C,gK as Q,kO as Y,n6 as X,ct as ee,bc as te,cv as ie,qP as ne,qQ as se,gC as re,dh as $,gB as ae,pY as c,dG as oe,e2 as P,as as le,qR as de,dY as ue}from"./chunk-BW-F2k8C.js";import{o as pe,a as he}from"./chunk-6iI9SMYm.js";import{d as ce}from"./chunk-DSXnvZM9.js";import"./chunk-By3pYRVZ.js";import"./chunk-CrV41Nja.js";import"./chunk-9eDQGDPh.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DfbczrJD.js";function H(e,t){return V(t.extent,E),A(E,q(ye,e.x,e.y,0))}const E=R(),ye=U();let h=class extends O{get tiles(){const t=this.tilesCoveringView,i=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((r,n)=>H(i,r)-H(i,n)),t}_scaleEnabled(){return j(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:i}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:r}=i,n=[];for(const{row:o,colFrom:l,colTo:w}of t)for(let _=l;_<=w;_++){const f=i.normalizeCol(_),d=new k(null,r,o,f);this.tileInfo.updateTileInfo(d),n.push(d)}return n}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(g(()=>this.view?.state?.viewpoint,()=>this.notifyChange("tilesCoveringView"),x))}};s([a({readOnly:!0})],h.prototype,"tiles",null),s([a({readOnly:!0})],h.prototype,"_scaleEnabled",null),s([a({readOnly:!0})],h.prototype,"tilesCoveringView",null),s([a({readOnly:!0})],h.prototype,"tileInfo",null),s([a({readOnly:!0})],h.prototype,"tileSize",null),s([a({constructOnly:!0})],h.prototype,"view",void 0),s([a({constructOnly:!0})],h.prototype,"layer",void 0),s([a()],h.prototype,"pointOfInterest",void 0),h=s([m("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],h);let y=class extends O{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(t!=null){const i=e.map(r=>H(t,r));for(let r=1;r<i.length;r++)if(i[r-1]>i[r])return e.sort((n,o)=>H(t,n)-H(t,o)),e.slice()}return e}get tilesCoveringView(){return this._filterTiles(this.view.featureTiles?.tiles?.toArray()).map(fe)}get tileInfo(){return this.view.featureTiles?.tilingScheme?.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return e??this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(g(()=>this.view.featureTiles,e=>{this.removeHandles(M),e&&this.addHandles(e.addClient(),M)},S))}_filterTiles(e){return e==null?[]:e.filter(t=>{const i=t.measures;if(i.visibility===W.VISIBLE_ON_SURFACE){const r=i.screenRect;return Math.abs(r[3]-r[1])>ge}return!1})}};function fe({lij:[e,t,i],extent:r}){return new k(`${e}/${t}/${i}`,e,t,i,r)}s([a({readOnly:!0})],y.prototype,"tiles",null),s([a({readOnly:!0})],y.prototype,"tilesCoveringView",null),s([a({readOnly:!0})],y.prototype,"tileInfo",null),s([a({readOnly:!0})],y.prototype,"tileSize",null),s([a({constructOnly:!0})],y.prototype,"view",void 0),s([a()],y.prototype,"pointOfInterest",void 0),s([a()],y.prototype,"_effectivePointOfInterest",null),y=s([m("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],y);const ge=50,M="feature-tiles";let b=class extends ce{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(L(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(n=>{e.set(n.data.id,n.featureCount)}),this._debugInfo.pendingTiles.forEach(n=>{e.set(n.data.id,n.featureCount),t.set(n.data.id,n.state)});const i=n=>{const o=t.get(n),l=e.get(n)??"?";return o?`${o}:${l}
${n}`:`store:${l}
${n}`},r=new Map;return this._debugInfo.storedTiles.forEach(n=>{r.set(n.data.id,n.data)}),this._debugInfo.pendingTiles.forEach(n=>{r.set(n.data.id,n.data)}),Array.from(r.values()).map(n=>({lij:[n.level,n.row,n.col],geometry:D.fromExtent(J(n.extent,this.view.spatialReference)),label:i(n.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};s([a({constructOnly:!0})],b.prototype,"handle",void 0),b=s([m("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],b);let p=class extends O{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new z,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const i=[];for(const{points:r}of t.pointsInFeatures)for(const{z:n}of r)i.push(n);return{elevations:i,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=Z(async(t,i)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],i)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},i))})}destroy(){this._suspendController=G(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new _e(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){const i=this._serviceInfoFromLayer(e.layer);if(i==null)return;const r={configuration:this._convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",r,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:r,coordinateHelper:n}=e,o={...e,point:B(i[0],i[1],i[2],n.spatialReference.toJSON()),filter:r?.toJSON()};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){const i=this._editId++,r={id:i};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",r,t));const n=await this._updatingHandles.addPromise(K(e.result,t)),o={id:i,edits:{addedFeatures:n.addedFeatures?.map(({objectId:l})=>l).filter(C)??[],deletedFeatures:n.deletedFeatures?.map(({objectId:l,globalId:w})=>({objectId:l,globalId:w}))??[],updatedFeatures:n.updatedFeatures?.map(({objectId:l})=>l).filter(C)??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:Q.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}};s([a({constructOnly:!0})],p.prototype,"schedule",void 0),s([a({constructOnly:!0})],p.prototype,"hasZ",void 0),s([a({constructOnly:!0})],p.prototype,"elevationAlignPointsInFeatures",void 0),s([a({constructOnly:!0})],p.prototype,"queryForSymbologySnapping",void 0),s([a({readOnly:!0})],p.prototype,"updating",null),s([a({readOnly:!0})],p.prototype,"availability",void 0),s([a()],p.prototype,"_workerHandleUpdating",void 0),p=s([m("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],p);class _e extends Y{constructor(t,i){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:i})}}let v=class extends O{get tiles(){return[new k("0/0/0",0,0,0,X(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new ee({origin:new te({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new ie({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};s([a({readOnly:!0})],v.prototype,"tiles",null),s([a({readOnly:!0})],v.prototype,"tileInfo",null),s([a({readOnly:!0})],v.prototype,"tileSize",null),s([a({constructOnly:!0})],v.prototype,"layer",void 0),s([a()],v.prototype,"pointOfInterest",void 0),v=s([m("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],v);let u=class extends O{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find(e=>e.layer===this._layer)}get _isSuspended(){return ne(this._layer)&&!this.layerSource.sublayerSources.some(e=>e.enabled&&e.layer.visible)?!0:!!this.view&&(this._layerView?.suspended!==!1||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:i}=this,{layer:r}=i,{fieldsIndex:n,timeInfo:o,floorInfo:l,subtypeField:w}=r,_=t&&"filter"in t?t.filter:null,f=_?.where&&_.where!=="1=1"?this._getOrLoadWhereFields(_.where,n):[];if(_?.timeExtent&&o){const{startField:d,endField:I}=o,F=n.get(d)?.name??d,T=n.get(I)?.name??I;F&&f.push(F),T&&f.push(T)}if(e?.map&&se(e.map)&&e.map.utilityNetworks?.find(d=>d.isUtilityLayer(r))){const d=r.fieldsIndex.get("assetGroup")?.name,I=r.fieldsIndex.get("assetType")?.name;d&&I&&(f.push(d),f.push(I))}if(r&&l?.floorField&&e?.floors?.length){const d=n.get(l.floorField)?.name??l.floorField;d&&f.push(d)}if(w){const d=n.get(w)?.name??w;d&&f.push(d)}return new Set(f)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:i}=this._layer,r=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...i,token:t}:i,viewType:r}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new z,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=re(pe)}initialize(){let e;const t=this.view;if(t==null||t.destroyed)this._tilesOfInterest=new v({layer:this._layer}),e=this._workerHandle=new p;else switch(t.type){case"2d":this._tilesOfInterest=new h({view:t,layer:this._layer}),e=this._workerHandle=new p;break;case"3d":{const{resourceController:i}=t,r=this._layer;this._tilesOfInterest=new y({view:t}),e=this._workerHandle=new p({schedule:n=>i.immediate.schedule(n),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(n,o)=>{const l=await t.whenLayerView(r);return $(o),l.elevationAlignPointsInFeatures(n,o)},queryForSymbologySnapping:async(n,o)=>{const l=await t.whenLayerView(r);return $(o),l.queryForSymbologySnapping(n,o)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:n})=>{const{elevationInfo:o}=r;ae(n,o)&&c(e.notifyElevationSourceChange())}),g(()=>r.elevationInfo,()=>c(e.notifyElevationSourceChange()),S),g(()=>this._layerView?.processor?.renderer,()=>c(e.notifySymbologyChange()),S),g(()=>this._layerView?.symbologySnappingSupported??!1,n=>c(e.setSymbologySnappingSupported(n)),S),oe(()=>this._layerView?.layer,["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}this.addHandles([P(e)]),c(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>c(e.updateTiles(this._updateTilesParameters,null)),S),this.addHandles([g(()=>this.configuration,i=>c(e.configure(i,null)),x),g(()=>this._outFields,i=>c(e.updateOutFields(i)),S),g(()=>this._isSuspended,i=>c(e.setSuspended(i)),le)]),t!=null&&this.addHandles(g(()=>de.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,i=>{i&&!this._debug?(this._debug=new b({view:t,handle:e}),this.addHandles(P(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")},S)),this.addHandles(this.layerSource.layer.on("apply-edits",i=>{c(e.applyEdits(i,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:r}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(r);const n=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(o=>he(o,n))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const r=ue(async()=>{const n=await N(()=>import("./chunk-BjHY-Dfr.js").then(o=>o.W),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]));return this._whereModule=n.WhereClause,this._whereModule});return this._loadWhereModuleTask=r,this._updatingHandles.addPromise(r.promise),[]}if(!i)return[];try{return i.create(e,t).fieldNames}catch{return[]}}};s([a({constructOnly:!0})],u.prototype,"spatialReference",void 0),s([a({constructOnly:!0})],u.prototype,"layerSource",void 0),s([a({constructOnly:!0})],u.prototype,"view",void 0),s([a()],u.prototype,"_tilesOfInterest",void 0),s([a({readOnly:!0})],u.prototype,"_updateTilesParameters",null),s([a()],u.prototype,"_layerView",null),s([a()],u.prototype,"_isSuspended",null),s([a({readOnly:!0})],u.prototype,"updating",null),s([a()],u.prototype,"_outFields",null),s([a({readOnly:!0})],u.prototype,"configuration",null),s([a({readOnly:!0})],u.prototype,"availability",null),s([a()],u.prototype,"_loadWhereModuleTask",void 0),s([a()],u.prototype,"_whereModule",void 0),u=s([m("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],u);export{u as FeatureServiceSnappingSource};