import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-C6_JAUe5.js";import{X as g}from"./chunk-o3YquVDV.js";import"./chunk-CUPffv_6.js";import"./chunk-CBfavJJp.js";import"./chunk-BPlwv3NH.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-sqScOLs1.js";import"./chunk-DPtlGMm8.js";import"./chunk-CI--C5uy.js";import"./chunk-D5zmR9t2.js";import"./chunk-COCbLoWr.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-CUz-y3Z-.js";import"./chunk-BfeQ6FU1.js";import"./chunk-EOW8Xj5j.js";import"./chunk-C4Iesyvi.js";import"./chunk-Cur6kSbg.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
