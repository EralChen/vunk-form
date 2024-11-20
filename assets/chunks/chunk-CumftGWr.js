import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-BCtBXoS3.js";import{X as g}from"./chunk-yQ9uiLpc.js";import"./chunk-Zpopvlea.js";import"./chunk-UADQAoLm.js";import"./chunk-DxfIC8xT.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-BPLJRe57.js";import"./chunk-BpCUA3-i.js";import"./chunk-Cz8Ecyqy.js";import"./chunk-D5zmR9t2.js";import"./chunk-Cr7LKldl.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-CaVGw1yK.js";import"./chunk-Cj6NV_uF.js";import"./chunk-BICGrLci.js";import"./chunk-C28FqNBs.js";import"./chunk-BIr7VBeX.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
