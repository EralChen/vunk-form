import{dc as w,fv as y,dd as I,fw as V,fx as v,fy as H,fz as T,de as q,at as U,I as S,aj as n,fA as g,z as b,$ as o,a0 as f,a2 as C}from"./chunk-XIlYN-8S.js";import"./chunk-gpzq6CU_.js";import"./chunk-C4JwIhqq.js";import{$ as Q}from"./chunk-Bnq9Boqe.js";import{r as L,o as m,n as d}from"./chunk-gEcv2wB5.js";import{h as P}from"./chunk-Ioc8C0d-.js";import{S as k,U as z}from"./chunk-B19TMiE6.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-DfLrgW_-.js";import"./chunk-vvK82R2_.js";import"./chunk-D_dJ-k-D.js";import"./chunk-BOq1d5Jn.js";import"./chunk-D5zmR9t2.js";import"./chunk-DZZ3gm0x.js";import"./chunk-CvgiXnaQ.js";import"./chunk-CTVUOj4N.js";import"./chunk-Wa8cmqdu.js";import"./chunk-BKUlhklj.js";import"./chunk-SNGs5P6P.js";import"./chunk-DCeSVscq.js";import"./chunk-sfr1nPUB.js";import"./chunk-BAH7rk2C.js";const F=[0,0];let r=class extends w(L(y(I))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new V,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new v(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new H({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(i,h)=>this.fetchTile(i,h)}),this._tileStrategy=new T({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),k(this,this.layer)){const i=this._highlightView=new Q({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new P(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new z({createFetchPopupFeaturesQueryGeometry:(h,s)=>q(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{i.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):U()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return S(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(F,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:h,resamplingLevel:s=0}=t;if(!i)try{return await this._fetchImage(e,h)}catch(a){if(!n(a)&&!this.resampling)return m(this._tileInfoView.tileInfo.size);if(s<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const u=new g(c),_=await this.fetchTile(u,{...t,resamplingLevel:s+1});return d(this._tileInfoView,_,u,e)}}throw a}const l=new g(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:h}),l.level!==e.level&&!this.resampling)return m(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,h)}catch(a){if(n(a))throw a;p=await this._fetchImage(e,h)}return this.resampling?d(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){n(t)||b.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};o([f()],r.prototype,"resampling",null),o([f()],r.prototype,"tilemapCache",null),r=o([C("esri.views.2d.layers.TileLayerView2D")],r);const ne=r;export{ne as default};