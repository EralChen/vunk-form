import{s as m,br as h,$ as d,a2 as c}from"./chunk-BW-F2k8C.js";import{N as l}from"./chunk-DM5DfaBP.js";import{m as u}from"./chunk-b2onucMk.js";import"./chunk-By3pYRVZ.js";import"./chunk-CrV41Nja.js";import"./chunk-9eDQGDPh.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-BUKVWVUh.js";import"./chunk-B206a_xX.js";import"./chunk-BCJPSr_Z.js";let r=class extends u(l){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>this.exportImageParameters?.version,()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(i){const s=this.findExtentInfoAt(i),e=s.extent,t=new h(e[0],e[1],e[2],e[3],this._spatialReference),a=s.imageSize,n=a.width,p=a.height,o=t.width/n;return{extent:t,width:n,height:p,x:Math.round((i.x-t.xmin)/o),y:Math.round((t.ymax-i.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=d([c("esri.views.3d.layers.WMSLayerView3D")],r);const E=r;export{E as default};