if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),d={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>d[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-74eda642"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/app.c72ebbf3.js",revision:null},{url:"assets/chunks/gitalk.5e5d8ce2.js",revision:null},{url:"assets/chunks/index.cfa69757.js",revision:null},{url:"assets/chunks/virtual_search-data.bd2b3153.js",revision:null},{url:"assets/chunks/vue-codemirror.esm.94e32a11.js",revision:null},{url:"assets/chunks/vue.runtime.esm-bundler.f2fbfbba.js",revision:null},{url:"assets/chunks/vue3-pdf-embed.0f4125d0.js",revision:null},{url:"assets/chunks/vue3-video-player.common.48343342.js",revision:null},{url:"assets/CS_开始上手.md.93a2c9d1.js",revision:null},{url:"assets/CS_开始上手.md.93a2c9d1.lean.js",revision:null},{url:"assets/CS_操作系统_0-开始阅读.md.ae5f812d.js",revision:null},{url:"assets/CS_操作系统_0-开始阅读.md.ae5f812d.lean.js",revision:null},{url:"assets/CS_操作系统_00-操作系统原理之概述.md.10510732.js",revision:null},{url:"assets/CS_操作系统_00-操作系统原理之概述.md.10510732.lean.js",revision:null},{url:"assets/CS_操作系统_01-操作系统原理之进程与线程.md.a501bbfe.js",revision:null},{url:"assets/CS_操作系统_01-操作系统原理之进程与线程.md.a501bbfe.lean.js",revision:null},{url:"assets/CS_操作系统_02-操作系统原理之CPU调度.md.4e0be660.js",revision:null},{url:"assets/CS_操作系统_02-操作系统原理之CPU调度.md.4e0be660.lean.js",revision:null},{url:"assets/CS_操作系统_03-操作系统原理之调度算法.md.1e95e8f1.js",revision:null},{url:"assets/CS_操作系统_03-操作系统原理之调度算法.md.1e95e8f1.lean.js",revision:null},{url:"assets/CS_操作系统_04-操作系统原理之进程同步.md.e1da36d5.js",revision:null},{url:"assets/CS_操作系统_04-操作系统原理之进程同步.md.e1da36d5.lean.js",revision:null},{url:"assets/CS_网络原理_0-开始阅读.md.9d8e51ad.js",revision:null},{url:"assets/CS_网络原理_0-开始阅读.md.9d8e51ad.lean.js",revision:null},{url:"assets/CS_网络原理_00-计算机网络原理之概述.md.470a0b0a.js",revision:null},{url:"assets/CS_网络原理_00-计算机网络原理之概述.md.470a0b0a.lean.js",revision:null},{url:"assets/CS_网络原理_01-计算机网络原理之物理层.md.c83b6cbb.js",revision:null},{url:"assets/CS_网络原理_01-计算机网络原理之物理层.md.c83b6cbb.lean.js",revision:null},{url:"assets/CS_网络原理_02-计算机网络原理之数据链路层.md.2c9568a2.js",revision:null},{url:"assets/CS_网络原理_02-计算机网络原理之数据链路层.md.2c9568a2.lean.js",revision:null},{url:"assets/CS_网络原理_03-计算机网络原理之网络层.md.38cc12a0.js",revision:null},{url:"assets/CS_网络原理_03-计算机网络原理之网络层.md.38cc12a0.lean.js",revision:null},{url:"assets/CS_网络原理_04-计算机网络原理之传输层.md.8dd24cbe.js",revision:null},{url:"assets/CS_网络原理_04-计算机网络原理之传输层.md.8dd24cbe.lean.js",revision:null},{url:"assets/CS_网络原理_05-计算机网络原理之应用层.md.80480372.js",revision:null},{url:"assets/CS_网络原理_05-计算机网络原理之应用层.md.80480372.lean.js",revision:null},{url:"assets/DSA_开始上手.md.34d3766f.js",revision:null},{url:"assets/DSA_开始上手.md.34d3766f.lean.js",revision:null},{url:"assets/DSA_数据结构_0-开始阅读.md.b5d83273.js",revision:null},{url:"assets/DSA_数据结构_0-开始阅读.md.b5d83273.lean.js",revision:null},{url:"assets/DSA_数据结构_00-队列.md.e00141c6.js",revision:null},{url:"assets/DSA_数据结构_00-队列.md.e00141c6.lean.js",revision:null},{url:"assets/index.md.3cd927a2.js",revision:null},{url:"assets/index.md.3cd927a2.lean.js",revision:null},{url:"assets/style.8922b00e.css",revision:null},{url:"assets/关于.md.cab79b6d.js",revision:null},{url:"assets/关于.md.cab79b6d.lean.js",revision:null},{url:"assets/示例.md.d75d8d4e.js",revision:null},{url:"assets/示例.md.d75d8d4e.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f787b74f5a7f224daf25d23c76054eb3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
