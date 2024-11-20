import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-Ceac9yqH.js";import{X as g}from"./chunk-5_EQdXfe.js";import"./chunk-Defr39CA.js";import"./chunk-BvwBNQlH.js";import"./chunk-Isw0PHqr.js";import"./chunk-DsEj1cS7.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-CV9sOQot.js";import"./chunk-0eXTxGxr.js";import"./chunk-Ct8LlJHt.js";import"./chunk-D5zmR9t2.js";import"./chunk-BGgtXes0.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-DuHpVryY.js";import"./chunk-Dwrs0Egq.js";import"./chunk-D91ktwrC.js";import"./chunk-D_9kPc_W.js";import"./chunk-C82wiWpr.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
