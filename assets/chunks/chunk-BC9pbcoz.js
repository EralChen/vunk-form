import{ad as i,ae as p,$ as s,a0 as t,af as a,a2 as c,a3 as h}from"./chunk-BCy4u5kM.js";import{O as n}from"./chunk-DYytIMrp.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-rXXwNZ1K.js";import"./chunk-BoT0b5RT.js";import"./chunk-DY74bCrO.js";import"./chunk-CvgiXnaQ.js";import"./chunk-B0w61Pr2.js";let e=class extends i(h){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new d,this.suspended=!1}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){return this.view?.graphics}get loadedGraphics(){return this.graphics}get updating(){return!!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,o){return this.processor.whenGraphicBounds(r,o)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};s([t({readOnly:!0})],e.prototype,"graphics",null),s([t()],e.prototype,"loadedGraphics",null),s([t({readOnly:!0})],e.prototype,"updating",null),s([t({constructOnly:!0})],e.prototype,"view",void 0),s([t()],e.prototype,"processor",void 0),s([t({type:Boolean})],e.prototype,"slicePlaneEnabled",void 0),s([t()],e.prototype,"layer",void 0),s([t()],e.prototype,"suspended",void 0),e=s([c("esri.views.3d.layers.GraphicsView3D")],e);class d extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const P=e;export{P as default};