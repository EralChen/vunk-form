import{m as a}from"./chunk-B3rxsnPA.js";import"./chunk-BZT5mSTd.js";import"./chunk-Dw53j9Qa.js";import"./chunk-fEI7Cr-O.js";import"./chunk-CvLQ7u75.js";import"./chunk-B6ckpD1m.js";import"./chunk-zKPkODU6.js";import"./chunk-DVj1gyv_.js";import"./chunk-DyvYxXn8.js";import"./chunk-Bi1EyO-G.js";import"./chunk-0__ZOe37.js";import"./chunk-Doz9nK84.js";import"./chunk-CO-KMnog.js";import"./chunk-DcWd5m-h.js";import"./chunk-BffrHnr5.js";import"./chunk-C7RSGgB-.js";import"./chunk--kFKIgW7.js";import"./chunk-LkM9zYT9.js";import"./chunk-CSZh4-JH.js";import"./chunk-DsHnId_v.js";import"./chunk-BvqRMVj4.js";import"./chunk-CG18FGfN.js";import"./chunk-DrIIi3Cp.js";import"./chunk-bcUd3NzG.js";import"./chunk-CHVJJ-_P.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,d=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of c(e))!l.call(t,o)&&o!==n&&m(t,o,{get:()=>e[o],enumerable:!(r=p(e,o))||r.enumerable});return t},s=(t,e,n)=>(d(t,e,"default"),n),i={};s(i,a);var B={comments:{blockComment:["<!--","-->"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.languages.IndentAction.Indent}}]},F={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};export{B as conf,F as language};