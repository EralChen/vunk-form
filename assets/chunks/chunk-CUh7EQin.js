import{g5 as i,g6 as n,g7 as c,g8 as m,br as a,g9 as f,ga as u,bc as p,gb as S,gc as g,gd as d,ge as x,gf as O,gg as h,gh as y,gi as J,gj as N,gk as b,gl as B,gm as k,gn as P}from"./chunk-BW-F2k8C.js";import"./chunk-By3pYRVZ.js";import"./chunk-CrV41Nja.js";import"./chunk-9eDQGDPh.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";class R{convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=n(t,e.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(e){const t=i.fromJSON(e.pixelBlock),s=c(t);return Promise.resolve(s)}async decode(e){const t=await m(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(t!=null?t.toJSON():null)}async updateSymbolizer(e){this.symbolizer=f.fromJSON(e.symbolizerJSON),e.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=u(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:a.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map(s=>s!=null?i.fromJSON(s):null),primaryPixelSizes:e.primaryPixelSizes?.map(s=>s!=null?p.fromJSON(s):null),primaryRasterIds:e.primaryRasterIds});return t!=null?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(e){const t=S(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=g(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,e.useBilinear===!1);return t&&t.forEach((s,o)=>{t.set(o,s?.toJSON())}),Promise.resolve(t)}clipTile(e){const t=i.fromJSON(e.pixelBlock),s=d({...e,pixelBlock:t});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(l=>l?new i(l):null),s=x(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,r=s;return e.coefs&&(r=O(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=h(e.destDimension,e.gcsGrid),r=y(r,e.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r?.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await J(e.meshType,e.simulationSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=a.fromJSON(e.projectedExtent),s=a.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new N({steps:e.datumTransformationSteps})),(e.includeGCSGrid||b(t.spatialReference,s.spatialReference,o))&&await B();const r=e.rasterTransform?k(e.rasterTransform):null;return P({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{R as default};