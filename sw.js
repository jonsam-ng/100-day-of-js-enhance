if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>t[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-74eda642"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/app.a9b7ce08.js",revision:null},{url:"assets/chunks/index.cfa69757.js",revision:null},{url:"assets/chunks/virtual_search-data.09b09195.js",revision:null},{url:"assets/chunks/vue-codemirror.esm.f75a5b84.js",revision:null},{url:"assets/chunks/vue.runtime.esm-bundler.dac289b8.js",revision:null},{url:"assets/chunks/vue3-pdf-embed.379da766.js",revision:null},{url:"assets/chunks/vue3-video-player.common.5f4413a5.js",revision:null},{url:"assets/CS_开始上手.md.273134c5.js",revision:null},{url:"assets/CS_开始上手.md.273134c5.lean.js",revision:null},{url:"assets/CS_操作系统_0-开始阅读.md.983e357f.js",revision:null},{url:"assets/CS_操作系统_0-开始阅读.md.983e357f.lean.js",revision:null},{url:"assets/CS_操作系统_00-操作系统原理之概述.md.77e2ee68.js",revision:null},{url:"assets/CS_操作系统_00-操作系统原理之概述.md.77e2ee68.lean.js",revision:null},{url:"assets/CS_操作系统_01-操作系统原理之进程与线程.md.aee629e2.js",revision:null},{url:"assets/CS_操作系统_01-操作系统原理之进程与线程.md.aee629e2.lean.js",revision:null},{url:"assets/CS_操作系统_02-操作系统原理之CPU调度.md.7c74390c.js",revision:null},{url:"assets/CS_操作系统_02-操作系统原理之CPU调度.md.7c74390c.lean.js",revision:null},{url:"assets/CS_操作系统_03-操作系统原理之调度算法.md.63407273.js",revision:null},{url:"assets/CS_操作系统_03-操作系统原理之调度算法.md.63407273.lean.js",revision:null},{url:"assets/CS_网络原理_0-开始阅读.md.089804d8.js",revision:null},{url:"assets/CS_网络原理_0-开始阅读.md.089804d8.lean.js",revision:null},{url:"assets/CS_网络原理_00-计算机网络原理之概述.md.aa305553.js",revision:null},{url:"assets/CS_网络原理_00-计算机网络原理之概述.md.aa305553.lean.js",revision:null},{url:"assets/CS_网络原理_01-计算机网络原理之物理层.md.5e94979a.js",revision:null},{url:"assets/CS_网络原理_01-计算机网络原理之物理层.md.5e94979a.lean.js",revision:null},{url:"assets/CS_网络原理_02-计算机网络原理之数据链路层.md.938f8625.js",revision:null},{url:"assets/CS_网络原理_02-计算机网络原理之数据链路层.md.938f8625.lean.js",revision:null},{url:"assets/CS_网络原理_03-计算机网络原理之网络层.md.07b2e51d.js",revision:null},{url:"assets/CS_网络原理_03-计算机网络原理之网络层.md.07b2e51d.lean.js",revision:null},{url:"assets/CS_网络原理_04-计算机网络原理之传输层.md.8da2d584.js",revision:null},{url:"assets/CS_网络原理_04-计算机网络原理之传输层.md.8da2d584.lean.js",revision:null},{url:"assets/CS_网络原理_05-计算机网络原理之应用层.md.6a0121a3.js",revision:null},{url:"assets/CS_网络原理_05-计算机网络原理之应用层.md.6a0121a3.lean.js",revision:null},{url:"assets/DSA_开始上手.md.2f10279c.js",revision:null},{url:"assets/DSA_开始上手.md.2f10279c.lean.js",revision:null},{url:"assets/DSA_数据结构_0-开始阅读.md.255e04fe.js",revision:null},{url:"assets/DSA_数据结构_0-开始阅读.md.255e04fe.lean.js",revision:null},{url:"assets/DSA_数据结构_00-队列.md.823e9a51.js",revision:null},{url:"assets/DSA_数据结构_00-队列.md.823e9a51.lean.js",revision:null},{url:"assets/index.md.86cb3444.js",revision:null},{url:"assets/index.md.86cb3444.lean.js",revision:null},{url:"assets/style.4ccb5000.css",revision:null},{url:"assets/关于.md.d21da6fa.js",revision:null},{url:"assets/关于.md.d21da6fa.lean.js",revision:null},{url:"assets/示例.md.36e98fac.js",revision:null},{url:"assets/示例.md.36e98fac.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f787b74f5a7f224daf25d23c76054eb3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
