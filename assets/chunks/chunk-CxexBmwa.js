import{p as o,H as n,aE as l,h as e,a as c}from"./chunk-BCy4u5kM.js";import{c as r}from"./chunk-C_Aj7jWi.js";import{s as d,a as u,c as h}from"./chunk-Zkd48ipV.js";import{d as m,V as p}from"./chunk-trk0IHtT.js";import{d as g}from"./chunk-CgqhHaY-.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-DQWBvDpo.js";import"./chunk-B-ELQbAb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const f={itemWrapper:"item-wrapper"},b=":host{display:flex;flex-direction:column}:host>.item-wrapper{display:flex;max-inline-size:100vw}:host([layout=horizontal])>.item-wrapper{flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s])>.item-wrapper{column-gap:1rem}:host([layout=horizontal][scale=m])>.item-wrapper{column-gap:1.25rem}:host([layout=horizontal][scale=l])>.item-wrapper{column-gap:1.5rem}:host([layout=vertical])>.item-wrapper{flex-direction:column}:host([scale=s]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-xxs) * -1)}:host([scale=m]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-sm) * -1)}:host([scale=l]) calcite-input-message{--calcite-input-message-spacing-value:calc(var(--calcite-spacing-md) * -1)}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}:host([hidden]){display:none}[hidden]{display:none}",C=b,s=o(class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRadioButtonGroupChange=l(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=r("mutation",()=>this.passPropsToRadioButtons()),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find(t=>t.checked)||null,this.radioButtons.length>0&&this.radioButtons.forEach(t=>{t.disabled=this.disabled||t.disabled,t.hidden=this.el.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale})},this.disabled=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.status="idle",this.validationMessage=void 0,this.validationIcon=void 0,this.radioButtons=[]}handleHiddenChange(){this.passPropsToRadioButtons()}onDisabledChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){this.passPropsToRadioButtons(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){d(this)}componentDidLoad(){u(this)}disconnectedCallback(){this.mutationObserver?.disconnect()}getFocusableRadioButton(){return this.radioButtons.find(t=>!t.disabled)??null}async setFocus(){if(await h(this),this.selectedItem&&!this.selectedItem.disabled)return this.selectedItem.setFocus();if(this.radioButtons.length>0)return this.getFocusableRadioButton()?.setFocus()}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return e(c,{key:"2fb0413488832f3bd449c5bb41d31e088c82ab11",role:"radiogroup"},e("div",{key:"92b23646b20efa340d8368455bc2c2e2c3dce0f5",class:f.itemWrapper},e("slot",{key:"19f6211227d8d4fb003a1535a1948b7da2b4810e"})),this.validationMessage&&this.status==="invalid"?e(p,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null)}get el(){return this}static get watchers(){return{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return C}},[1,"calcite-radio-button-group",{disabled:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],status:[513],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]],{hidden:["handleHiddenChange"],disabled:["onDisabledChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}]);function a(){if(typeof customElements>"u")return;["calcite-radio-button-group","calcite-icon","calcite-input-message"].forEach(t=>{switch(t){case"calcite-radio-button-group":customElements.get(t)||customElements.define(t,s);break;case"calcite-icon":customElements.get(t)||g();break;case"calcite-input-message":customElements.get(t)||m();break}})}a();const F=s,P=a;export{F as CalciteRadioButtonGroup,P as defineCustomElement};