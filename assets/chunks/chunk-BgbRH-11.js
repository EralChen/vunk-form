import{b4 as q,kR as J,f5 as K,ak as A,_ as $,kT as j,dT as ee,m4 as te,z as B,s as se,kk as re,eb as ie,kp as I,l2 as U,l3 as z,l4 as ne,i8 as ae,ec as oe,a$ as le,fh as he,kS as de,m5 as ce,aF as me,kX as ue,kY as pe,i9 as fe,kZ as ye,k_ as _e,k$ as ve,l0 as ge,l1 as we,aQ as Re,m6 as xe,fv as $e,dd as Me,V as be,dG as L,fy as Ee,fz as Te,m7 as Ve,aj as Se,br as Ce,dw as qe,$ as P,a0 as W,a2 as Ae,aP as Pe,m8 as ke}from"./chunk-974c_ewH.js";import{j as Ge,m as Q}from"./chunk-DuiORwuV.js";import"./chunk-CkRbeiDL.js";import"./chunk-wHV8ZvWP.js";import"./chunk-D1agVBM_.js";import{f as De}from"./chunk-D9xoT1YZ.js";import"./chunk-JyTIT74I.js";import"./chunk-DC95vdEF.js";import"./chunk-CYWh0Wrq.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DBIPdCjN.js";import"./chunk-ws5xlSK8.js";import"./chunk-DfLrgW_-.js";import"./chunk-Bv6weBid.js";import"./chunk-C906HwJN.js";import"./chunk-CAIkrLZf.js";import"./chunk-D5zmR9t2.js";import"./chunk-BicE40iC.js";import"./chunk-CvgiXnaQ.js";import"./chunk-CnsdHhEy.js";import"./chunk-Wa8cmqdu.js";import"./chunk-BU-q5rcS.js";const y=oe(),Oe={none:q.None,loop:q.Loop,oscillate:q.Oscillate};function He(s){return s?{...s,playAnimation:s.playing,repeatType:s.repeatType?Oe[s.repeatType]:void 0}:{}}class je extends J{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=K(),this._playHandle=null,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(A(()=>this.elementView.element.opacity,t=>this.opacity=t,$),A(()=>[this.elementView.coords],()=>{this.requestRender()},$),A(()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions],()=>{this._playHandle?.remove(),this.texture=j(this.texture),this.requestRender()},$),ee(()=>this.elementView.element.loaded,()=>{const t=this.elementView.element;this.ready(),t.type==="video"&&t.content!=null&&this._handles.push(te(t.content,"play",()=>this.requestRender()))},$)),e.element.load().catch(t=>{B.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new se("element-load-error","Element cannot be displayed",{element:e,error:t}))})}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._playHandle?.remove(),this._handles.forEach(e=>e.remove()),this.texture=j(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,r=this.elementView.element.content;if(r!=null){const n=r instanceof HTMLImageElement,i=r instanceof HTMLVideoElement,a=n?r.naturalWidth:i?r.videoWidth:r.width,h=n?r.naturalHeight:i?r.videoHeight:r.height;if(this._updatePerspectiveTransform(a,h),this.texture)i&&!r.paused&&(this.texture.setData(r),this.requestRender(),this.texture.generateMipmap());else{const d=new re;if(d.wrapMode=ie.CLAMP_TO_EDGE,d.preMultiplyAlpha=!0,d.width=a,d.height=h,"getFrame"in r){const l=o=>{this.texture?this.texture.setData(o):this.texture=new I(t,d,o),this.requestRender()};"animationOptions"in this.elementView.element&&(this._playHandle=De(r,He(this.elementView.element.animationOptions),null,l))}else this.texture=new I(t,d,r);this.texture.generateMipmap(),i&&!r.paused&&this.requestRender()}}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const r=this.elementView.coords;if(r==null)return;const[n,i,a,h]=r.rings[0],d=this._vertices,{x:l,y:o}=e,u=t!==0;u?d.set([i[0]-l,i[1]-o,n[0]-l,n[1]-o,a[0]-l,a[1]-o,h[0]-l,h[1]-o,h[0]-l,h[1]-o,i[0]+t-l,i[1]-o,i[0]+t-l,i[1]-o,n[0]+t-l,n[1]-o,a[0]+t-l,a[1]-o,h[0]+t-l,h[1]-o]):d.set([i[0]-l,i[1]-o,n[0]-l,n[1]-o,a[0]-l,a[1]-o,h[0]-l,h[1]-o]),this.isWrapAround=u}getVAO(e,t,r){if(this.elementView.coords==null)return null;const n=this._vertices;if(this._vao)this._geometryVbo.setData(n);else{this._geometryVbo=U.createVertex(e,z.DYNAMIC_DRAW,n);const i=U.createVertex(e,z.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new ne(e,r,t,{geometry:this._geometryVbo,tex:i})}return this._vao}_updatePerspectiveTransform(e,t){const r=this._vertices;Ge(y,[0,0,e,0,0,t,e,t],[r[0],r[1],r[4],r[5],r[2],r[3],r[6],r[7]]),ae(this.perspectiveTransform,y[6]/y[8]*e,y[7]/y[8]*t)}}class Ie extends le{constructor(){super(...arguments),this._localOrigin=he(0,0),this._viewStateId=-1,this._dvsMat3=de()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[ce.overlay],target:()=>this.children,drawPhase:me.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:r,size:n,pixelRatio:i,resolution:a,rotation:h,viewpoint:d,displayMat3:l}=t;if(this._viewStateId===r)return;const o=Math.PI/180*h,u=i*n[0],f=i*n[1],{x:M,y:g}=d.targetGeometry,b=ue(M,t.spatialReference);this._localOrigin.x=b,this._localOrigin.y=g;const E=a*u,w=a*f,c=pe(this._dvsMat3);fe(c,c,l),ye(c,c,_e(u/2,f/2)),ve(c,c,ge(u/E,-f/w,1)),we(c,c,-o),this._viewStateId=r}_updateOverlays(e,t){const{state:r}=e,{rotation:n,spatialReference:i,worldScreenWidth:a,size:h,viewpoint:d}=r,l=this._localOrigin;let o=0;const u=Re(i);if(u&&i.isWrappable){const f=h[0],M=h[1],g=180/Math.PI*n,b=Math.abs(Math.cos(g)),E=Math.abs(Math.sin(g)),w=Math.round(f*b+M*E),[c,T]=u.valid,p=xe(i),{x:k,y:N}=d.targetGeometry,Y=[k,N],V=[0,0];r.toScreen(V,Y);const R=[0,0];let S;S=w>a?.5*a:.5*w;const G=Math.floor((k+.5*p)/p),X=c+G*p,Z=T+G*p,C=[V[0]+S,0];r.toMap(R,C),R[0]>Z&&(o=p),C[0]=V[0]-S,r.toMap(R,C),R[0]<X&&(o=-p);for(const x of t){const D=x.elementView.bounds;if(D==null)continue;const[O,,H]=D;O<c&&H>c?x.updateDrawCoords(l,p):H>T&&O<T?x.updateDrawCoords(l,-p):x.updateDrawCoords(l,o)}}else for(const f of t)f.updateDrawCoords(l,o)}}let v=class extends $e(Me){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new be}attach(){this.addAttachHandles([L(()=>this.layer.effectiveSource,"refresh",()=>{this._tileStrategy.refresh(s=>this._updateTile(s)),this.requestUpdate()}),L(()=>this.layer.effectiveSource,"change",({element:s})=>this._elementUpdateHandler(s))]),this._overlayContainer=new Ie,this.container.addChild(this._overlayContainer),this._fetchQueue=new Ee({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(s,e)=>this._queryElements(s,e)}),this._tileStrategy=new Te({cachePolicy:"purge",resampling:!0,acquireTile:s=>this._acquireTile(s),releaseTile:s=>this._releaseTile(s),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(s){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(s){this._tileStrategy.update(s),this._debugGraphicsView?.update(s)}async hitTest(s,e){const t=[],r=s.normalize(),n=[r.x,r.y];for(const{projectedElement:{normalizedCoords:i,element:a}}of this._elementReferences.values())i!=null&&Ve(i.rings,n)&&t.push({type:"media",element:a,layer:this.layer,mapPoint:s,sourcePoint:a.toSource(s)});return t.reverse()}canResume(){return this.layer.source!=null&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh(s=>this._updateTile(s))}_acquireTile(s){const e=new Ue(s.clone());return this._updateTile(e),e}_updateTile(s){this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then(e=>{const[t,r]=s.setElements(e);this._referenceElements(s,t),this._dereferenceElements(s,r),this.requestUpdate()},e=>{Se(e)||B.getLogger(this).error(e)}))}_releaseTile(s){this._fetchQueue.abort(s.key.id),s.elements&&this._dereferenceElements(s,s.elements),this.requestUpdate()}async _queryElements(s,e){const t=this.layer.effectiveSource;if(t==null)return[];this.view.featuresTilingScheme.getTileBounds(m,s,!0);const r=new Ce({xmin:m[0],ymin:m[1],xmax:m[2],ymax:m[3],spatialReference:this.view.spatialReference});return t.queryElements(r,e)}_referenceElements(s,e){if(this.layer.source!=null)for(const t of e)this._referenceElement(s,t)}_referenceElement(s,e){qe(this._elementReferences,e.uid,()=>{const t=new Q({element:e,spatialReference:this.view.spatialReference}),r=new je(t);return this._overlayContainer.addChild(r),this.elements.add(e),{tiles:new Set,projectedElement:t,overlay:r,debugGraphic:null}}).tiles.add(s)}_dereferenceElements(s,e){for(const t of e)this._dereferenceElement(s,t)}_dereferenceElement(s,e){const t=this._elementReferences.get(e.uid);t.tiles.delete(s),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),this._debugGraphicsView?.graphics.remove(t.debugGraphic))}_elementUpdateHandler(s){let e=this._elementReferences.get(s.uid);if(e){const r=e.projectedElement.normalizedCoords;if(r==null)return this._overlayContainer.removeChild(e.overlay),e.overlay.destroy(),e.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s),void this._debugGraphicsView?.graphics.remove(e.debugGraphic);const n=[],i=[];for(const a of this._tileStrategy.tiles){const h=F(this.view.featuresTilingScheme,a,r);e.tiles.has(a)?h||i.push(a):h&&n.push(a)}for(const a of n)this._referenceElement(a,s);for(const a of i)this._dereferenceElement(a,s);return e=this._elementReferences.get(s.uid),void(e?.debugGraphic&&(e.debugGraphic.geometry=e.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:e.debugGraphic,property:"geometry"})))}const t=new Q({element:s,spatialReference:this.view.spatialReference}).normalizedCoords;if(t!=null)for(const r of this._tileStrategy.tiles)F(this.view.featuresTilingScheme,r,t)&&this._referenceElement(r,s)}};P([W()],v.prototype,"layer",void 0),P([W({readOnly:!0})],v.prototype,"elements",void 0),v=P([Ae("esri.views.2d.layers.MediaLayerView2D")],v);const m=Pe(),_={xmin:0,ymin:0,xmax:0,ymax:0};function F(s,e,t){return s.getTileBounds(m,e.key,!0),_.xmin=m[0],_.ymin=m[1],_.xmax=m[2],_.ymax=m[3],ke(_,t)}class Ue{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],r=new Set(this.elements);this.elements=e;for(const n of e)r.has(n)?r.delete(n):t.push(n);return this.isReady=!0,[t,Array.from(r)]}destroy(){}}const ct=v;export{ct as default};