import{dc as g,fv as d,dd as m,fw as l,aj as u,z as c,fC as f,de as y,ak as _,$ as p,a0 as o,a2 as w}from"./chunk-XIlYN-8S.js";import{$ as H}from"./chunk-Bnq9Boqe.js";import{h as v}from"./chunk-Ioc8C0d-.js";import{v as $}from"./chunk-CEckz8D0.js";import{p as x}from"./chunk-DoZtXxjm.js";import{U}from"./chunk-B19TMiE6.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-vvK82R2_.js";import"./chunk-D_dJ-k-D.js";import"./chunk-BOq1d5Jn.js";import"./chunk-D5zmR9t2.js";import"./chunk-DZZ3gm0x.js";import"./chunk-CvgiXnaQ.js";import"./chunk-CTVUOj4N.js";import"./chunk-Wa8cmqdu.js";import"./chunk-C4JwIhqq.js";import"./chunk-BKUlhklj.js";import"./chunk-SNGs5P6P.js";import"./chunk-sfr1nPUB.js";import"./chunk-BAH7rk2C.js";import"./chunk-DCeSVscq.js";let r=class extends x(g(d(m))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{u(e)||c.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,a=e>=10.3,n=e>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new H({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(h,s)=>y(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{this._highlightView.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new $({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(_(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,a){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,i,e,a){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};p([o()],r.prototype,"strategy",void 0),p([o()],r.prototype,"updating",void 0),r=p([w("esri.views.2d.layers.MapImageLayerView2D")],r);const X=r;export{X as default};