import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-BW-F2k8C.js";import{X as g}from"./chunk-duSnpOCG.js";import"./chunk-By3pYRVZ.js";import"./chunk-CrV41Nja.js";import"./chunk-9eDQGDPh.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-CyKARwNQ.js";import"./chunk-DfJZVZmA.js";import"./chunk-4M-oc6v-.js";import"./chunk-D5zmR9t2.js";import"./chunk-DtPiyWav.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-Ce67AsDq.js";import"./chunk-Dd7M9D9J.js";import"./chunk-QX8aAM0A.js";import"./chunk-DlNxQzIl.js";import"./chunk-CVl4zJ4c.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
