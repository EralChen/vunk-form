import{fp as m,fq as e,br as s}from"./chunk-Y-RRnlzY.js";import{d as p}from"./chunk-0H2xFwiD.js";import"./chunk-0__ZOe37.js";import"./chunk-BZT5mSTd.js";import"./chunk-Dw53j9Qa.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";async function l(o,i,n){const r=m(o),a=await p(r,e.from(i),{...n}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:s.fromJSON(t)}}export{l as executeForTopExtents};