import{dW as o,dT as m,$ as l,a2 as h}from"./chunk-XIlYN-8S.js";import{N as p}from"./chunk-BhK9iSRX.js";import{u}from"./chunk-BWJepCTf.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-Czonj_AH.js";import"./chunk-DaYkdXcI.js";import"./chunk-DtOrGZD2.js";let r=class extends u(p){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=o(async e=>{this.redraw((t,a)=>this._redrawImage(t,a),e)},2e3)}initialize(){this.addHandles([m(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>this.layer?.exportImageServiceParameters?.version,()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.layer?.renderer,()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||e.pixelData==null)throw new Error;const a=e.image,s=a.getContext("2d"),d=await this.layer.applyRenderer(e.pixelData,{signal:t}),i=this.layer.applyFilter(d).pixelBlock;if(i==null)throw new Error;a.width=i.width,a.height=i.height;const n=s.createImageData(i.width,i.height);n.data.set(i.getAsRGBA()),s.putImageData(n,0,0)}};r=l([h("esri.views.3d.layers.ImageryLayerView3D")],r);const R=r;export{R as default};