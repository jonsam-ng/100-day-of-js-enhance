if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const t=e=>n(e,r),d={module:{uri:r},exports:u,require:t};s[r]=Promise.all(l.map((e=>d[e]||t(e)))).then((e=>(i(...e),u)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/app.611392ef.js",revision:null},{url:"assets/chunks/_virtual_my-module.bfa622c8.js",revision:null},{url:"assets/chunks/vue.runtime.esm-bundler.09ccb080.js",revision:null},{url:"assets/chunks/vue3-pdf-embed.cbaaadfe.js",revision:null},{url:"assets/chunks/vue3-video-player.common.1de905ed.js",revision:null},{url:"assets/CS_开始上手.md.d468c0a1.js",revision:null},{url:"assets/CS_开始上手.md.d468c0a1.lean.js",revision:null},{url:"assets/CS_网络原理_计算机网络原理之概述.md.cbc641bb.js",revision:null},{url:"assets/CS_网络原理_计算机网络原理之概述.md.cbc641bb.lean.js",revision:null},{url:"assets/index.md.d4375d47.js",revision:null},{url:"assets/index.md.d4375d47.lean.js",revision:null},{url:"assets/style.9adc9e3d.css",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f787b74f5a7f224daf25d23c76054eb3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
