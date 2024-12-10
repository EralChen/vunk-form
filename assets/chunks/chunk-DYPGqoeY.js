import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-COS73Icn.js";import{X as g}from"./chunk-C7evpJMw.js";import"./chunk-MvqiMl48.js";import"./chunk-CwIodqNZ.js";import"./chunk-BAtEUBju.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-BCWpjJ1Q.js";import"./chunk-DN5H3Exp.js";import"./chunk-ghf5mNd9.js";import"./chunk-D5zmR9t2.js";import"./chunk-C-aScSRO.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-y0IYrsfO.js";import"./chunk-CliRT7V0.js";import"./chunk-GtPY3b3i.js";import"./chunk-BYIE1JF9.js";import"./chunk-zZ9X4diy.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
