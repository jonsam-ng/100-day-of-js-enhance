if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const t=e=>n(e,r),d={module:{uri:r},exports:u,require:t};s[r]=Promise.all(l.map((e=>d[e]||t(e)))).then((e=>(i(...e),u)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/app.fc5d7320.js",revision:null},{url:"assets/chunks/_virtual_my-module.9526d2e3.js",revision:null},{url:"assets/chunks/vue.runtime.esm-bundler.5de4ae89.js",revision:null},{url:"assets/chunks/vue3-pdf-embed.13c9d342.js",revision:null},{url:"assets/chunks/vue3-video-player.common.25e902f4.js",revision:null},{url:"assets/CS_开始上手.md.1adbfdaf.js",revision:null},{url:"assets/CS_开始上手.md.1adbfdaf.lean.js",revision:null},{url:"assets/CS_网络原理_计算机网络原理之概述.md.4ad203f7.js",revision:null},{url:"assets/CS_网络原理_计算机网络原理之概述.md.4ad203f7.lean.js",revision:null},{url:"assets/index.md.03116e44.js",revision:null},{url:"assets/index.md.03116e44.lean.js",revision:null},{url:"assets/style.aadbec09.css",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f787b74f5a7f224daf25d23c76054eb3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
