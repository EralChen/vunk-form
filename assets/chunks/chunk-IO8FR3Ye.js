import{ak as l,s as p,e1 as u,at as m,bN as h,$ as i,a0 as a,a2 as d}from"./chunk-XIlYN-8S.js";import{n as y,X as _}from"./chunk-D2CU_pR7.js";import{r as f}from"./chunk-DsmIW7lF.js";import"./chunk-gbA2XUGj.js";import"./chunk-cqKyegso.js";import"./chunk-B7yAMqV2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-BAH7rk2C.js";import"./chunk-D_dJ-k-D.js";import"./chunk-BOq1d5Jn.js";import"./chunk-D5zmR9t2.js";import"./chunk-DCeSVscq.js";import"./chunk-B7X19rIS.js";import"./chunk-Caulfaw_.js";import"./chunk-C6eAbF8R.js";import"./chunk-C4JwIhqq.js";import"./chunk-BKUlhklj.js";import"./chunk-BtlkcFBa.js";import"./chunk-a98oLVOt.js";let r=class extends f(_){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([l(()=>this.layer.customParameters,e=>this._worker.streamMessenger.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._worker.streamMessenger.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),l(()=>this.layer.purgeOptions,()=>this._update()),l(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new p("stream-controller",this.pipelineErrorString):null}on(e,s){if(Array.isArray(e))return u(e.map(c=>this.on(c,s)));const t=["data-received","message-received"].includes(e);t&&this._worker.streamMessenger.enableEvent(e,!0);const o=super.on(e,s),n=this;return m(()=>{o.remove(),t&&(n._worker.closed||n.hasEventListener(e)||n._worker.streamMessenger.enableEvent(e,!1))})}queryLatestObservations(e,s){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new p("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return y(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),s).then(t=>{const o=h.fromJSON(t);return o.features.forEach(n=>{n.layer=this.layer,n.sourceLayer=this.layer}),o}),new h({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause()}_doConnect(){this._worker.streamMessenger.connect(),this.resume()}_doClear(){this._worker.streamMessenger.clear(),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),s=this;return{...e,get container(){return s.featureContainer},setProperty:t=>{this.set(t.propertyName,t.value)}}}};i([a()],r.prototype,"pipelineConnectionStatus",void 0),i([a()],r.prototype,"pipelineErrorString",void 0),i([a({readOnly:!0})],r.prototype,"connectionError",null),i([a({readOnly:!0})],r.prototype,"_streamConnectionStatus",null),r=i([d("esri.views.2d.layers.StreamLayerView2D")],r);const A=r;export{A as default};