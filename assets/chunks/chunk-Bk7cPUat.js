import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-Y-RRnlzY.js";import{X as g}from"./chunk-Wxa28yUF.js";import"./chunk-0__ZOe37.js";import"./chunk-BZT5mSTd.js";import"./chunk-Dw53j9Qa.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-D9IGHSGj.js";import"./chunk-DgpeAQ-p.js";import"./chunk-DhUPA6pZ.js";import"./chunk-D5zmR9t2.js";import"./chunk-Clh34A2H.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-1fhwxuO0.js";import"./chunk--zq4ukAT.js";import"./chunk-CTXQUz6I.js";import"./chunk-C_v2T8kt.js";import"./chunk-FNUMTrPN.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
