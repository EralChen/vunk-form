const __vite__fileDeps=["assets/chunks/chunk-B0V7Am2f.js","assets/chunks/chunk-BCy4u5kM.js","assets/chunks/chunk-fziB7CNt.js","assets/chunks/chunk-CSFIeiLH.js","assets/chunks/chunk-C7hCAWl2.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.g_EfqiEX.css","assets/static/index.BXUJy6tt.css","assets/chunks/chunk-Ch0SDxT-.js","assets/static/ShadedColorMaterial.GuYAk2ql.css","assets/chunks/chunk-DcgA5XHs.js","assets/chunks/chunk-B1Ogoqwm.js","assets/chunks/chunk-DXwrGIvr.js","assets/chunks/chunk-CQuetmw6.js","assets/chunks/chunk-eZWEAVQm.js","assets/chunks/chunk-JD3thPYq.js","assets/chunks/chunk-D97RzfIS.js","assets/chunks/chunk-OyM-tVfI.js","assets/chunks/chunk-BuzJ2Lbs.js","assets/chunks/chunk-zRiqN9Hy.js","assets/chunks/chunk-BePJpoiP.js","assets/chunks/chunk-DUli1Uy9.js","assets/chunks/chunk-BIzi6w1s.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as h}from"./chunk-fEI7Cr-O.js";import{$ as a,a0 as t,a2 as y,V as d,ja as w,ak as u,as as c,s as V,dY as p,ae as _,dZ as m,d_ as v,dd as A}from"./chunk-BCy4u5kM.js";import{n as f}from"./chunk-BoiaSrA4.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-Ch0SDxT-.js";const D=e=>{let s=class extends e{constructor(...i){super(...i),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(i){this.analysisView!=null&&(this.analysisView.interactive=i)}get results(){return this.analysisView!=null?this.analysisView.results:new d}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(i){this.analysisView!=null&&(this.analysisView.selectedDimension=i)}async createLengthDimensions(i){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(i)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends f(D(A)){constructor(e){super(e),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,e=>{this._destroyAnalysisView(),e!=null&&this._createAnalysisView(e)},c),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new V("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(e){const s=p(async i=>(this.analysisView=await this._createAnalysisViewPromise(e,i),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=m(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,s){let i=this._analysisModule;if(i==null){const r=await this._loadAnalysisModule();this._analysisModule=r,i=r}const l=new i.default({analysis:e,view:this.view,parent:this});if(await l.when(),v(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return h(()=>import("./chunk-B0V7Am2f.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]))}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const x=n;export{x as default};