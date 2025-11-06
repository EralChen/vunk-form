import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-BKRLg-wp.js";import{X as g}from"./chunk-BgePheeT.js";import"./chunk-BfBhBPg6.js";import"./chunk-BDgnW6u3.js";import"./chunk-ByQqi7vx.js";import"./chunk-fEI7Cr-O.js";import"./chunk-BMJW1KAv.js";import"./chunk-DyvYxXn8.js";import"./chunk-Ch0SDxT-.js";import"./chunk-Dy6WErnl.js";import"./chunk-BYtgFB7D.js";import"./chunk-xGNIEE1z.js";import"./chunk-D5zmR9t2.js";import"./chunk-CaDYLtie.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-DOJW-rhJ.js";import"./chunk-DiASDm8A.js";import"./chunk-CZGf3__G.js";import"./chunk-z-3oSTpK.js";import"./chunk-B5tAEqJs.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const G=i;export{G as default};
