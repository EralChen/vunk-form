import{m as a}from"./chunk-Cs6emC-T.js";import"./chunk-CrV41Nja.js";import"./chunk-9eDQGDPh.js";import"./chunk-fEI7Cr-O.js";import"./chunk-DBKuQZj8.js";import"./chunk-GB91i2a_.js";import"./chunk-zKPkODU6.js";import"./chunk-SFMK0eOr.js";import"./chunk-DyvYxXn8.js";import"./chunk-6RANyLHh.js";import"./chunk-By3pYRVZ.js";import"./chunk-B6wX9VKk.js";import"./chunk-DY7ba3PM.js";import"./chunk-1cWUYT_U.js";import"./chunk-CaCyDyWa.js";import"./chunk-BvKd6roE.js";import"./chunk-iKnkX29l.js";import"./chunk-lfOq2O_2.js";import"./chunk-X_W1x-jA.js";import"./chunk-4fDyzd8m.js";import"./chunk-BOhFrD_H.js";import"./chunk-D5z-H5UG.js";import"./chunk-1Lda8Zo8.js";import"./chunk-DEzQhqpj.js";import"./chunk-CHVJJ-_P.js";/* empty css              *//*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,d=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of c(e))!l.call(t,o)&&o!==n&&m(t,o,{get:()=>e[o],enumerable:!(r=p(e,o))||r.enumerable});return t},s=(t,e,n)=>(d(t,e,"default"),n),i={};s(i,a);var F={comments:{blockComment:["<!--","-->"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.languages.IndentAction.Indent}}]},G={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};export{F as conf,G as language};