import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-BRTsdaL7.js";import{X as g}from"./chunk-wQOGb-vY.js";import"./chunk-BxXr0pY4.js";import"./chunk-4avqd0lp.js";import"./chunk-CApvMCHp.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-Bme_k0-y.js";import"./chunk-BvSWX9l7.js";import"./chunk-Ch97OjzS.js";import"./chunk-D5zmR9t2.js";import"./chunk-DKZtbQAq.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-DEfe9-T7.js";import"./chunk-k4lbYU7S.js";import"./chunk-Cn9Bk8rF.js";import"./chunk-CrtuuysZ.js";import"./chunk-Cggw_M_9.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
