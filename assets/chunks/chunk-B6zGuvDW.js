import{dT as l,ae as h,s as c,ah as d,dl as u,$ as i,a0 as t,a2 as m,dd as y}from"./chunk-B1N8G8sW.js";import{n as g}from"./chunk-ChyVnfdE.js";import{m as b,r as f}from"./chunk-BSpQwSmu.js";import{O as v}from"./chunk-KM7g3ncK.js";import{l as S}from"./chunk-B_2QCGU9.js";import"./chunk-CyiLY1__.js";import"./chunk-CAS0iGZj.js";import"./chunk-C7ZeX_9O.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-Cc_Ohmuf.js";import"./chunk-CQlnmTN-.js";import"./chunk-BJzc54cX.js";import"./chunk-CvgiXnaQ.js";import"./chunk-CwlqJ2mx.js";let r=class extends g(y){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new v({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",e=>this.processor.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(S(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.addHandles(l(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",h(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideScaleRange=this.processor?.scaleVisibilitySuspended??!1,e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,s){return this.processor.whenGraphicBounds(e,s)}computeAttachmentOrigin(e,s){return this.processor?.computeAttachmentOrigin(e,s)}getSymbolLayerSize(e,s){return this.processor.getSymbolLayerSize(e,s)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,s){const{processor:o}=this;if(o?.graphics3DGraphics==null)throw new c("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:n}=o,p=a=>typeof a=="number"?n.get(a):void 0;return b(this.view,this.layer,p,e,s)}async queryForSymbologySnapping(e,s){return f(this.processor,e,s)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||d.SYNC}canResume(){return super.canResume()&&!this.processor?.scaleVisibilitySuspended}isUpdating(){return this.view&&this.layer&&!(!this.processor?.updating&&(this.layer.internal||this.view.basemapTerrain?.ready))}get performanceInfo(){return new u(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return this.processor?.graphicsCore?.unprocessedMemoryEstimate}};i([t()],r.prototype,"loadedGraphics",null),i([t({readOnly:!0})],r.prototype,"legendEnabled",null),i([t()],r.prototype,"layer",void 0),i([t({readOnly:!0})],r.prototype,"processor",void 0),i([t()],r.prototype,"_slicePlaneEnabled",void 0),i([t({type:Boolean})],r.prototype,"slicePlaneEnabled",null),r=i([m("esri.views.3d.layers.GraphicsLayerView3D")],r);const x=r;export{x as default};