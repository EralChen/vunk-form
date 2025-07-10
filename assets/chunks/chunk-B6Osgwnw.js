import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-DxztVFu6.js";import{X as g}from"./chunk-Dle1cQd0.js";import"./chunk-B3hCY0bs.js";import"./chunk-LV65SfHG.js";import"./chunk-D04XgwEW.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-CI3ydvMN.js";import"./chunk-RP5Ke5ji.js";import"./chunk-CRja4Cze.js";import"./chunk-D5zmR9t2.js";import"./chunk-CKycsx7w.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-CzUqL8Y4.js";import"./chunk-zGPiTdGn.js";import"./chunk-CsnxmQf_.js";import"./chunk-ByRCH52w.js";import"./chunk-CfT1Y4i5.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const z=i;export{z as default};
