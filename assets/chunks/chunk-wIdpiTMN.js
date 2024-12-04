import{$ as n,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-Bn1Ae4Nb.js";import{X as g}from"./chunk-gTkEqzfc.js";import"./chunk-D6q83-eg.js";import"./chunk-lmOyQrer.js";import"./chunk-Dr2pd04r.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-DtZS8I9_.js";import"./chunk-BiR8mumT.js";import"./chunk-BVXsZAY-.js";import"./chunk-D5zmR9t2.js";import"./chunk-NA_grR83.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-BBgikler.js";import"./chunk-CSSJTn3I.js";import"./chunk-D35OKtXD.js";import"./chunk-9hMafM3G.js";import"./chunk-BYv-MwJB.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(p=>p.renderer!=null),r=this._commandsQueue.updateTracking.updating,e=this._updatingRequiredFieldsPromise!=null,o=!this._worker,s=this.dataUpdating,a=t&&(r||e||o||s);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${e}
  -> updatingProxy ${o}
  -> updatingPipeline ${s}
`),a}};i=n([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const C=i;export{C as default};
