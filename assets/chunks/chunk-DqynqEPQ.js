const __vite__fileDeps=["assets/chunks/chunk-DAhSGSgL.js","assets/chunks/chunk-Bn1Ae4Nb.js","assets/chunks/chunk-D6q83-eg.js","assets/chunks/chunk-lmOyQrer.js","assets/chunks/chunk-Dr2pd04r.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.Bk2nDaRX.css","assets/static/index.D4havbC8.css","assets/chunks/chunk-Ch0SDxT-.js","assets/chunks/chunk-DBIPdCjN.js","assets/static/ShadedColorMaterial.GuYAk2ql.css","assets/chunks/chunk-BZ2xCvB5.js","assets/chunks/chunk-yTDHGrkM.js","assets/chunks/chunk-DIPfvLPa.js","assets/chunks/chunk-Bs4i81rQ.js","assets/chunks/chunk-D0dhBDsF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as h}from"./chunk-fEI7Cr-O.js";import{ak as w,as as d,s as y,dY as _,ae as V,dZ as c,d_ as p,$ as e,a0 as n,a2 as u,dd as A}from"./chunk-Bn1Ae4Nb.js";import{n as f}from"./chunk-BAQ_ncyc.js";import"./chunk-D6q83-eg.js";import"./chunk-lmOyQrer.js";import"./chunk-Dr2pd04r.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";const o="analysis-view-handles";let i=class extends f(A){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(w(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},d),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new y("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=_(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const r=await this._loadAnalysisModule();this._analysisModule=r,a=r}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),p(t))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return h(()=>import("./chunk-DAhSGSgL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([u("esri.views.3d.layers.LineOfSightLayerView3D")],i);const O=i;export{O as default};