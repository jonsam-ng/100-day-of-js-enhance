if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let u={};const t=e=>n(e,r),o={module:{uri:r},exports:u,require:t};s[r]=Promise.all(l.map((e=>o[e]||t(e)))).then((e=>(i(...e),u)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/app.ce53eea4.js",revision:null},{url:"assets/chunks/_virtual_my-module.8a6376ae.js",revision:null},{url:"assets/chunks/vue.runtime.esm-bundler.8741f3e0.js",revision:null},{url:"assets/chunks/vue3-pdf-embed.a0a02cea.js",revision:null},{url:"assets/chunks/vue3-video-player.common.b3a14c9c.js",revision:null},{url:"assets/CS_开始上手.md.ef9ee13c.js",revision:null},{url:"assets/CS_开始上手.md.ef9ee13c.lean.js",revision:null},{url:"assets/CS_网络原理_计算机网络原理之概述.md.fe4d6c27.js",revision:null},{url:"assets/CS_网络原理_计算机网络原理之概述.md.fe4d6c27.lean.js",revision:null},{url:"assets/index.md.0b9d69ce.js",revision:null},{url:"assets/index.md.0b9d69ce.lean.js",revision:null},{url:"assets/style.02720902.css",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f787b74f5a7f224daf25d23c76054eb3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
