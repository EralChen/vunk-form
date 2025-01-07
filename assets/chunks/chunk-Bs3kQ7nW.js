import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-B1N8G8sW.js";import{X as g}from"./chunk-CHu2fGuZ.js";import"./chunk-CyiLY1__.js";import"./chunk-CAS0iGZj.js";import"./chunk-C7ZeX_9O.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-C89i9IZe.js";import"./chunk-DTDo0ltP.js";import"./chunk-CnmqGxaJ.js";import"./chunk-D5zmR9t2.js";import"./chunk-B1zzzMr4.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-D2hQjnBV.js";import"./chunk-DDfI0Ei6.js";import"./chunk-WtrH2DYM.js";import"./chunk-BT3wPvaX.js";import"./chunk-3u2mKX1B.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
