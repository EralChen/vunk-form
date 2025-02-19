import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-Bllimcp5.js";import{X as g}from"./chunk-Bd50BZcs.js";import"./chunk-DmcDS0GM.js";import"./chunk-1Gzg5Kr5.js";import"./chunk-Bm-AhfTS.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-qK-be9TX.js";import"./chunk-D5tyGtxJ.js";import"./chunk-BPRYJgPr.js";import"./chunk-D5zmR9t2.js";import"./chunk-ByjZimi_.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-Dib5brtE.js";import"./chunk-Bzu8hPlw.js";import"./chunk-Cgu5YW67.js";import"./chunk-CkzTPCsP.js";import"./chunk-6niAtoA3.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
