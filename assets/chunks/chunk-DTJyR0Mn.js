import{$ as l,j as c}from"./chunk-CdxHpgp6.js";import{gX as s,n as y,l as f,j as d,k as v}from"./chunk-B1N8G8sW.js";import"./chunk-CyiLY1__.js";import"./chunk-CAS0iGZj.js";import"./chunk-C7ZeX_9O.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";const n="Media Layer",x="media-layer-save",N="media-layer-save-as",o=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return e.layerJSON}async function A(e,r){const{title:a,fullExtent:t}=e;r.title||=a,r.extent=t?await f(t):null,d(r,v.METADATA)}async function J(e,r){return l({layer:e,itemType:n,validateLayer:i,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:x,supplementalUnsupportedErrors:o,saveResources:(a,t)=>s(e.resourceReferences,t)},r)}async function M(e,r,a){return c({layer:e,itemType:n,validateLayer:i,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:N,supplementalUnsupportedErrors:o,newItem:r,setItemProperties:A,saveResources:(t,u)=>s(e.resourceReferences,u)},a)}export{J as save,M as saveAs};