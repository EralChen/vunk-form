import{fB as r}from"./chunk-B1N8G8sW.js";class l{constructor(){this._idToCounters=new Map}get empty(){return this._idToCounters.size===0}addReason(o,t){for(const s of o){let e=this._idToCounters.get(s);e||(e=new Map,this._idToCounters.set(s,e)),e.set(t,(e.get(t)||0)+1)}}deleteReason(o,t){for(const s of o){const e=this._idToCounters.get(s);if(!e)continue;let n=e.get(t);if(n==null)return;n--,n>0?e.set(t,n):e.delete(t),e.size===0&&this._idToCounters.delete(s)}}getHighestReason(o){const t=this._idToCounters.get(o);if(!t)return null;let s=null;for(const e of r)t.get(e)&&(s=e);return s||null}ids(){return this._idToCounters.keys()}}export{l as t};