import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-DndI2lsb.js";import{X as g}from"./chunk-Tp024vfn.js";import"./chunk-DejJyM_L.js";import"./chunk-BYadWzQA.js";import"./chunk-CoNX68_w.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-Bg_KUpVw.js";import"./chunk-BmUvB2E0.js";import"./chunk-rzlFI7-i.js";import"./chunk-D5zmR9t2.js";import"./chunk-Cb-5lF4c.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-BcoAweB9.js";import"./chunk-CNC2touE.js";import"./chunk-ka3VyQQs.js";import"./chunk-Cvyl0N7z.js";import"./chunk-Dbq773yN.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
