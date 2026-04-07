import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-BcF_wXIj.js";import{X as g}from"./chunk-BIz_Q9y_.js";import"./chunk-DwozKzir.js";import"./chunk-Duxj86L_.js";import"./chunk-Bw1FhX_e.js";import"./chunk-fEI7Cr-O.js";import"./chunk-M0_VewbO.js";import"./chunk-Ch0SDxT-.js";import"./chunk-C4cNgrOE.js";import"./chunk-CeFVCCqG.js";import"./chunk-C4-yqHwh.js";import"./chunk-D5zmR9t2.js";import"./chunk-D4pBhWyg.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-BmIE32cS.js";import"./chunk-CS7sNGsU.js";import"./chunk-COZe5IvN.js";import"./chunk-BO1Xzo9F.js";import"./chunk-MFPkReKF.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
