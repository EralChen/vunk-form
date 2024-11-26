import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-974c_ewH.js";import{X as g}from"./chunk-DEEpRnEE.js";import"./chunk-JyTIT74I.js";import"./chunk-DC95vdEF.js";import"./chunk-CYWh0Wrq.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-DWykZ42v.js";import"./chunk-C906HwJN.js";import"./chunk-CAIkrLZf.js";import"./chunk-D5zmR9t2.js";import"./chunk-BvBIUSEN.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-DvloposM.js";import"./chunk-wHV8ZvWP.js";import"./chunk-BU-q5rcS.js";import"./chunk-DmysshKm.js";import"./chunk-B5vHxLg5.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
