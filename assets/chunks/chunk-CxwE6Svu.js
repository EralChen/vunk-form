import{fv as i,$ as r,a2 as o}from"./chunk-XIlYN-8S.js";import s from"./chunk-WYwP2Haa.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";let e=class extends i(s){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,a)=>this.container.addChildAt(t.container,a))}};e=r([o("esri.views.2d.layers.GroupLayerView2D")],e);const C=e;export{C as default};