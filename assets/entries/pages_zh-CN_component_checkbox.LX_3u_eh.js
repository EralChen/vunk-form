const __vite__fileDeps=["assets/chunks/chunk-DOzquK1h.js","assets/chunks/chunk-DEoM8OXg.js","assets/chunks/chunk-lmOyQrer.js","assets/chunks/chunk-Dr2pd04r.js","assets/chunks/chunk-fEI7Cr-O.js","assets/static/index.Bk2nDaRX.css","assets/static/index.D4havbC8.css","assets/static/index.CFZXTROD.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as E,g as n,h as i,j as a,b as p,w as l,u as h,k as C,l as k,n as r,q as A,s as o,_ as d}from"../chunks/chunk-Dr2pd04r.js";import{_ as F}from"../chunks/chunk-fEI7Cr-O.js";import{u as D,_ as B}from"../chunks/chunk-D2etzhqQ.js";const c={class:"vp-doc VPDoc doc-content"},y="Checkbox 多选框",g="zh-CN",u={__name:"+Page",setup(f,{expose:t}){t({frontmatter:{title:"Checkbox 多选框",lang:"zh-CN"}});const e={"checkbox/basic.vue":k(()=>F(()=>import("../chunks/chunk-DOzquK1h.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])))};return D(),(x,s)=>(E(),n("div",c,[s[1]||(s[1]=i("h1",{id:"checkbox-多选框",tabindex:"-1"},[a("Checkbox 多选框 "),i("a",{class:"header-anchor",href:"#checkbox-多选框","aria-label":'Permalink to "Checkbox 多选框"'},"​")],-1)),s[2]||(s[2]=i("p",null,"Checkbox 多选框",-1)),s[3]||(s[3]=i("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),i("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),p(h(B),{subsources:"%7B%7D",demos:e,source:"%3Cdiv%20class%3D%22language-vue%20%22%3E%3Cbutton%20class%3D%22copy%22%3E%3C%2Fbutton%3E%3Cspan%20class%3D%22lang%22%3Evue%3C%2Fspan%3E%3Cpre%20class%3D%22shiki%20shiki-themes%20github-dark%20github-light%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%7B%20VkfCheckbox%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%20'%40vunk%2Fform%2Fcomponents%2Fcheckbox'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%7B%20VueComponentPropsType%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%20'%40vunk%2Fcore'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%20'vue'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2379B8FF%3B--shiki-light%3A%23005CC5%22%3E%20data%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E()%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2379B8FF%3B--shiki-light%3A%23005CC5%22%3E%20options%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3E%20VueComponentPropsType%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Etypeof%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20VkfCheckbox%3E%5B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E'options'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%5D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%20%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E'1'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%20%20border%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2379B8FF%3B--shiki-light%3A%23005CC5%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%20%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E'2'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%20%20border%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2379B8FF%3B--shiki-light%3A%23005CC5%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%5D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3Evalue%3A%20%7B%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23F97583%3B--shiki-light%3A%23D73A49%22%3Etypeof%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20data%20%7D%7D%20%7C%20%7B%7B%20data%20%7D%7D%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3EVkfCheckbox%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%22'button'%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3E%20%20%20%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23B392F0%3B--shiki-light%3A%236F42C1%22%3Eoptions%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3Eoptions%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%239ECBFF%3B--shiki-light%3A%23032F62%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3EVkfCheckbox%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%2385E89D%3B--shiki-light%3A%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-dark%3A%23E1E4E8%3B--shiki-light%3A%2324292E%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%0A%3C%2Fdiv%3E",path:"checkbox/basic","raw-source":"%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20VkfCheckbox%20%7D%20from%20'%40vunk%2Fform%2Fcomponents%2Fcheckbox'%0Aimport%20%7B%20VueComponentPropsType%20%7D%20from%20'%40vunk%2Fcore'%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0Aconst%20data%20%3D%20ref()%0Aconst%20options%3A%20VueComponentPropsType%3Ctypeof%20VkfCheckbox%3E%5B'options'%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20value%3A%20'1'%2C%0A%20%20%20%20border%3A%20true%2C%0A%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20value%3A%20'2'%2C%0A%20%20%20%20border%3A%20true%2C%0A%20%20%7D%2C%0A%0A%5D%0A%3C%2Fscript%3E%0A%3Ctemplate%3E%0A%20%20%3Cp%3Evalue%3A%20%7B%7B%20typeof%20data%20%7D%7D%20%7C%20%7B%7B%20data%20%7D%7D%3C%2Fp%3E%0A%20%20%3CVkfCheckbox%0A%20%20%20%20%3Atype%3D%22'button'%22%0A%20%20%20%20v-model%3D%22data%22%0A%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%3E%0A%0A%20%20%3C%2FVkfCheckbox%3E%0A%3C%2Ftemplate%3E",description:""},{default:l(()=>s[0]||(s[0]=[i("p",null,"checkbox/basic",-1)])),_:1}),s[4]||(s[4]=C('<h2 id="checkbox-props" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props" aria-label="Permalink to &quot;Checkbox Props&quot;">​</a></h2><table><thead><tr><th>prop</th><th>type</th><th>default</th><th>description</th></tr></thead><tbody><tr><td><a href="https://element-plus.org/zh-CN/component/checkbox.html#checkbox-group-%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">ElCheckboxGroup</a></td><td>-</td><td>-</td><td>见 ElCheckboxGroup 可用 props</td></tr><tr><td>:options</td><td>Array</td><td>[]</td><td>CheckboxItem</td></tr><tr><td>:type</td><td>‘button’|‘default’</td><td>‘default’</td><td>选择项类型</td></tr><tr><td>defaultModelValue</td><td>Array</td><td>-</td><td>默认选择</td></tr></tbody></table><h2 id="checkbox-props-1" tabindex="-1">Checkbox Props <a class="header-anchor" href="#checkbox-props-1" aria-label="Permalink to &quot;Checkbox Props&quot;">​</a></h2><table><thead><tr><th>name</th><th>arguments</th><th>description</th></tr></thead><tbody><tr><td><a href="https://element-plus.org/zh-CN/component/checkbox.html#checkbox-group-%E4%BA%8B%E4%BB%B6" target="_blank" rel="noreferrer">ElCheckboxGroup</a></td><td>-</td><td>见 ElCheckboxGroup 可用 emits</td></tr></tbody></table>',4))]))}},b=Object.freeze(Object.defineProperty({__proto__:null,default:u,lang:g,title:y},Symbol.toStringTag,{value:"Module"})),S={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@vunk/shared/vike/vue/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+config.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},lang:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+lang.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}},onCreateApp:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/+onCreateApp.ts",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:o}]},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/src/layouts/default/index.vue",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:d}]},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/zh-CN/component/checkbox/+Page.md",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}}};export{S as configValuesSerialized};