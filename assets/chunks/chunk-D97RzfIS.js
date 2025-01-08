import{Ak as I,Al as $,Am as O,e5 as l,An as c,Ao as S,Ap as b,Aq as x,Ar as C,As as p,ta as P,At as D,Au as u,Av as w,kU as y,$ as i,Aw as o,jZ as g,Ax as N,Ay as R,Az as V,AA as M,AB as L,AC as F,AD as U,AE as z,AF as B,AG as j,AH as G,AI as W,AJ as H,AK as k,AL as q,AM as Q,mc as f,AN as m,AO as J,AP as K,AQ as Z,AR as X,AS as Y,A0 as ee,AT as te,AU as se,np as ae,AV as re}from"./chunk-BCy4u5kM.js";import{_ as ie}from"./chunk-fEI7Cr-O.js";function E(s){const e=new I,{vertex:t,fragment:a}=e;return $(t,s),e.include(O,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(S,s),e.include(b,s),a.uniforms.add(new x("tex",n=>n.texture),new C("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(P)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(D),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(P)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));class _ extends V{initializeProgram(e){return new M(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,t){const a=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return L({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?ne:F(e),culling:U(a.cullFace),depthTest:{func:z(e)},depthWrite:n?a.writeDepth?B:null:j(e),colorWrite:G,stencilWrite:a.hasOccludees?W:null,stencilTest:a.hasOccludees?t?H:k:null,polygonOffset:n||d?null:q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new N(oe,()=>ie(()=>Promise.resolve().then(()=>ue),void 0));const ne=w(y.ONE,y.ONE_MINUS_SRC_ALPHA);class r extends R{constructor(){super(...arguments),this.output=p.Color,this.cullFace=g.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:p.COUNT})],r.prototype,"output",void 0),i([o({count:g.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:u.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const T=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class Ae extends Q{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===p.Highlight||m(t)&&!this.parameters.transparent],[f.TRANSPARENT_MATERIAL,t=>m(t)&&this.parameters.transparent&&this.parameters.writeDepth],[f.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>m(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>J(t)]]),this._vertexAttributeLocations=T,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<K,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=Z.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends X{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends Y{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const A=a.attributes.get(h);if(A)if(h===l.PERSPECTIVEDIVIDE){ee(A.size===1);const v=n.getField(h,te);v&&se(A,v,d)}else ae(h,A,e,t,n,d)}}}class ce extends re{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=g.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));export{Ae as T};
