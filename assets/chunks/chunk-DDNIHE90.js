import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-DxFgPIeX.js";import{X as g}from"./chunk-DY_VAUU6.js";import"./chunk-CoG1mjZF.js";import"./chunk-XOR1zYep.js";import"./chunk-BADNwhyi.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DehnR-kD.js";import"./chunk-BIccxQIv.js";import"./chunk-BxaZcYU1.js";import"./chunk-D5zmR9t2.js";import"./chunk-D_KTgqph.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-DT46WfVT.js";import"./chunk-DyMoubXY.js";import"./chunk-b4IhNcMg.js";import"./chunk-BeUHwArT.js";import"./chunk-DY9HrtIT.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
