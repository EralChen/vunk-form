import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-DfTZZpt0.js";import{X as g}from"./chunk-CtgYlCvo.js";import"./chunk-wXzftp25.js";import"./chunk-CjzDLHuf.js";import"./chunk-DkhztfFA.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-BqSsjcSJ.js";import"./chunk-DYh1AX_g.js";import"./chunk-BcbHrfVt.js";import"./chunk-D5zmR9t2.js";import"./chunk-CGDmfgRt.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-JxlK0Ydp.js";import"./chunk-CZ7480fB.js";import"./chunk-DODQBCAp.js";import"./chunk-DZR5I2wx.js";import"./chunk-DZufO9oG.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
