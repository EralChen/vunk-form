import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-BCy4u5kM.js";import{X as g}from"./chunk-16XYI6af.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DENPJjB2.js";import"./chunk-R688eq6W.js";import"./chunk-DZewlYUF.js";import"./chunk-D5zmR9t2.js";import"./chunk-D2SlvICT.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-she_1GAw.js";import"./chunk-DIs-fmJd.js";import"./chunk-BX5V9A8V.js";import"./chunk-C8NMugo9.js";import"./chunk-4prteRLr.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
