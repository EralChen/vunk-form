import{p as u,H as x,aE as l,h as t,fk as v,a as b}from"./chunk-BCy4u5kM.js";import{c as y,d as k}from"./chunk-D8-Er28T.js";import{d as h,g as S,t as I,c as p}from"./chunk-DQWBvDpo.js";import{g as s}from"./chunk-vh22aetv.js";import{d as E}from"./chunk-CgqhHaY-.js";import"./chunk-fziB7CNt.js";import"./chunk-CSFIeiLH.js";import"./chunk-C7hCAWl2.js";import"./chunk-fEI7Cr-O.js";import"./chunk-Ch0SDxT-.js";import"./chunk-C_Aj7jWi.js";import"./chunk-B-ELQbAb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.8.0
 */const a={actionsStart:"actions-start",actionsEnd:"actions-end"},i={icon:"icon",header:"header",headerContent:"header-content",actionsStart:"actions-start",actionsEnd:"actions-end",headerText:"header-text",heading:"heading",description:"description",expandIcon:"expand-icon",content:"content",iconStart:"icon--start",iconEnd:"icon--end",headerContainer:"header-container"},r={section:"section",sectionToggle:"section-toggle"},C=`.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-color-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-color-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([expanded]){color:var(--calcite-color-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-color-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-color-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-color-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-color-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-color-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-color-text-3);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-color-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-color-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-color-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-color-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-color-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-color-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-color-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-color-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}:host([hidden]){display:none}[hidden]{display:none}`,w=C,m=u(class extends x{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=l(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=l(this,"calciteInternalAccordionItemClose",6),this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconPosition=void 0,this.iconType=void 0,this.accordionParent=void 0,this.scale=void 0}connectedCallback(){y(this)}disconnectedCallback(){k(this)}renderActionsStart(){const{el:e}=this;return h(e,a.actionsStart)?t("div",{class:i.actionsStart},t("slot",{name:a.actionsStart})):null}renderActionsEnd(){const{el:e}=this;return h(e,a.actionsEnd)?t("div",{class:i.actionsEnd},t("slot",{name:a.actionsEnd})):null}render(){const{iconFlipRtl:e}=this,c=S(this.el),o=this.iconStart?t("calcite-icon",{class:i.iconStart,flipRtl:e==="both"||e==="start",icon:this.iconStart,key:"icon-start",scale:s(this.scale)}):null,d=this.iconEnd?t("calcite-icon",{class:i.iconEnd,flipRtl:e==="both"||e==="end",icon:this.iconEnd,key:"icon-end",scale:s(this.scale)}):null,{description:n}=this;return t(b,{key:"2a8a9685457badba7f65ffdfd19af5b70cf34643"},t("div",{key:"8292e5656cbf6988a393feda67b5ce2d58972470",class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},t("div",{key:"f4d599c5b507eb96665e7a78da9442784b2fad98",class:{[i.header]:!0,[v.rtl]:c==="rtl"}},this.renderActionsStart(),t("div",{key:"1cd561a12f82b7f74902bc408fc7f7c71425d269","aria-controls":r.section,"aria-expanded":I(this.expanded),class:i.headerContent,id:r.sectionToggle,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},t("div",{key:"8e7d9d5eebc91cc7295a02b7c83ae432071d753b",class:i.headerContainer},o,t("div",{key:"da5293604951860def82dd6267d21c3ef35470b0",class:i.headerText},t("span",{key:"4332fceb39f2523a027e7840eb1b343a72677701",class:i.heading},this.heading),n?t("span",{class:i.description},n):null),d),t("calcite-icon",{key:"c736b96c135d2cd9b55e65c88f91ed4e02a8fc2b",class:i.expandIcon,icon:this.iconType==="chevron"?"chevronDown":this.iconType==="caret"?"caretDown":this.expanded?"minus":"plus",scale:s(this.scale)})),this.renderActionsEnd()),t("section",{key:"b0dd6748d5d9397246c48467d143a84c2d232b50","aria-labelledby":r.sectionToggle,class:i.content,id:r.section},t("slot",{key:"4494db9599ecd2ec4dce7c34a54c445572954842"}))))}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.emitRequestedItem(),e.preventDefault();break}}updateActiveItemOnChange(e){const[c]=e.composedPath(),o=p(this.el,"calcite-accordion");c===o&&(this.determineActiveItem(o.selectionMode,e.detail.requestedAccordionItem),e.stopPropagation())}accordionItemSyncHandler(e){const[c]=e.composedPath(),o=this.el;if(o.parentElement===c)return;const n=p(o,"calcite-accordion");c===n&&(o.iconPosition=n.iconPosition,o.iconType=n.iconType,o.scale=n.scale,e.stopPropagation())}determineActiveItem(e,c){switch(e){case"multiple":this.el===c&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===c?!this.expanded:!1;break;case"single-persist":this.expanded=this.el===c;break}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}get el(){return this}static get style(){return w}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconPosition:[1,"icon-position"],iconType:[1,"icon-type"],accordionParent:[16],scale:[1]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"],[4,"calciteInternalAccordionItemsSync","accordionItemSyncHandler"]]]);function f(){if(typeof customElements>"u")return;["calcite-accordion-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-accordion-item":customElements.get(e)||customElements.define(e,m);break;case"calcite-icon":customElements.get(e)||E();break}})}f();const L=m,M=f;export{L as CalciteAccordionItem,M as defineCustomElement};