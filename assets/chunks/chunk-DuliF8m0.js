import{fv as o,dd as g,ae as n,D as l,V as c,q as d,at as a,$ as p,a0 as m,a2 as u,fF as w}from"./chunk-Bn1Ae4Nb.js";import{t as y}from"./chunk-D1rDT3c7.js";import{$ as V}from"./chunk-7nwXNjgB.js";import{t as f}from"./chunk-9hMafM3G.js";import"./chunk-D6q83-eg.js";import"./chunk-lmOyQrer.js";import"./chunk-Dr2pd04r.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-BDkeTHsB.js";import"./chunk-DtZS8I9_.js";import"./chunk-BiR8mumT.js";import"./chunk-BVXsZAY-.js";import"./chunk-D5zmR9t2.js";import"./chunk-NA_grR83.js";import"./chunk-CSSJTn3I.js";import"./chunk-D35OKtXD.js";import"./chunk--aZ6mIWe.js";import"./chunk-DQOuDBkG.js";import"./chunk-CvgiXnaQ.js";import"./chunk-BfJcTM-c.js";import"./chunk-Wa8cmqdu.js";import"./chunk-Cv5v7SE0.js";let s=class extends o(g){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=n(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let e;typeof i=="number"?e=[i]:i instanceof l?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(r=>r&&r.uid):c.isCollection(i)&&i.length>0&&(e=i.map(r=>r&&r.uid).toArray());const h=e?.filter(d);return h?.length?(this._addHighlight(h,t),a(()=>this._removeHighlight(h,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),h=w(e);i.push({objectId:t,highlightFlags:h})}this.graphicsView?.setHighlight(i)}};p([m()],s.prototype,"graphicsView",void 0),s=p([u("esri.views.2d.layers.GraphicsLayerView2D")],s);const J=s;export{J as default};