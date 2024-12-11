import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-XIlYN-8S.js";import{X as g}from"./chunk-D2CU_pR7.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-BAH7rk2C.js";import"./chunk-D_dJ-k-D.js";import"./chunk-BOq1d5Jn.js";import"./chunk-D5zmR9t2.js";import"./chunk-DCeSVscq.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-C6eAbF8R.js";import"./chunk-C4JwIhqq.js";import"./chunk-BKUlhklj.js";import"./chunk-BtlkcFBa.js";import"./chunk-a98oLVOt.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
