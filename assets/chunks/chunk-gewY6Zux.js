import{fv as g,dd as w,ak as h,_ as n,bN as f,V as d,bP as u,bO as b,fE as m,$ as V,a2 as S}from"./chunk-Y-RRnlzY.js";import{t as _}from"./chunk-CAqyGV9E.js";import{$ as T}from"./chunk-2VXofnqS.js";import"./chunk-0__ZOe37.js";import"./chunk-BZT5mSTd.js";import"./chunk-Dw53j9Qa.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-t0nSLKTB.js";import"./chunk-D9IGHSGj.js";import"./chunk-DgpeAQ-p.js";import"./chunk-DhUPA6pZ.js";import"./chunk-D5zmR9t2.js";import"./chunk-Clh34A2H.js";import"./chunk--zq4ukAT.js";import"./chunk-CTXQUz6I.js";import"./chunk-Cif2ivca.js";import"./chunk-D3HFqW6v.js";import"./chunk-CvgiXnaQ.js";import"./chunk-CNcOBB1L.js";import"./chunk-Wa8cmqdu.js";import"./chunk-Bmeg9MNJ.js";let y=class extends g(w){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const o of p)o.layer=s,o.sourceLayer=s,o.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:s,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([h(()=>this.layer?.featureCollections,e=>{this._clear();for(const{popupInfo:r,featureSet:s,layerDefinition:i}of e){const t=f.fromJSON(s),p=new d(t.features),o=i.drawingInfo,c=r?u.fromJSON(r):null,a=b(o.renderer),l=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=l,this._popupTemplates.set(l,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(l),this.container.addChild(l.container)}},n),h(()=>this.layer?.polygonSymbol,e=>{this._graphicsViewMap.polygon.renderer=new m({symbol:e})},n),h(()=>this.layer?.lineSymbol,e=>{this._graphicsViewMap.polyline.renderer=new m({symbol:e})},n),h(()=>this.layer?.pointSymbol,e=>{this._graphicsViewMap.point.renderer=new m({symbol:e})},n)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=V([S("esri.views.2d.layers.GeoRSSLayerView2D")],y);const B=y;export{B as default};