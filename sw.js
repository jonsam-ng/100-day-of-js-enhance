if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let a={};const u=s=>l(s,i),t={module:{uri:i},exports:a,require:u};e[i]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-74eda642"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/app.bfd1dd4d.js",revision:null},{url:"assets/chunks/gitalk.406f7be7.js",revision:null},{url:"assets/chunks/index.cfa69757.js",revision:null},{url:"assets/chunks/virtual_search-data.dcb9e54b.js",revision:null},{url:"assets/chunks/vue-codemirror.esm.742bf053.js",revision:null},{url:"assets/chunks/vue.runtime.esm-bundler.9697c5be.js",revision:null},{url:"assets/chunks/vue3-pdf-embed.bfec0c1b.js",revision:null},{url:"assets/chunks/vue3-video-player.common.c188f438.js",revision:null},{url:"assets/CS_0-开始上手.md.e466e085.js",revision:null},{url:"assets/CS_0-开始上手.md.e466e085.lean.js",revision:null},{url:"assets/CS_01-VIM操作表.md.6cbdcb00.js",revision:null},{url:"assets/CS_01-VIM操作表.md.6cbdcb00.lean.js",revision:null},{url:"assets/CS_02-Emoji For Markdown.md.df219ca3.js",revision:null},{url:"assets/CS_02-Emoji For Markdown.md.df219ca3.lean.js",revision:null},{url:"assets/CS_Linux Kernel_0-开始阅读.md.61ff3b86.js",revision:null},{url:"assets/CS_Linux Kernel_0-开始阅读.md.61ff3b86.lean.js",revision:null},{url:"assets/CS_操作系统_0-开始阅读.md.6723a637.js",revision:null},{url:"assets/CS_操作系统_0-开始阅读.md.6723a637.lean.js",revision:null},{url:"assets/CS_操作系统_00-操作系统原理之概述.md.470ac41a.js",revision:null},{url:"assets/CS_操作系统_00-操作系统原理之概述.md.470ac41a.lean.js",revision:null},{url:"assets/CS_操作系统_01-操作系统原理之进程与线程.md.90916011.js",revision:null},{url:"assets/CS_操作系统_01-操作系统原理之进程与线程.md.90916011.lean.js",revision:null},{url:"assets/CS_操作系统_02-操作系统原理之CPU调度.md.7dd27c2b.js",revision:null},{url:"assets/CS_操作系统_02-操作系统原理之CPU调度.md.7dd27c2b.lean.js",revision:null},{url:"assets/CS_操作系统_03-操作系统原理之调度算法.md.12cc192c.js",revision:null},{url:"assets/CS_操作系统_03-操作系统原理之调度算法.md.12cc192c.lean.js",revision:null},{url:"assets/CS_操作系统_04-操作系统原理之进程同步.md.7f9d1b3e.js",revision:null},{url:"assets/CS_操作系统_04-操作系统原理之进程同步.md.7f9d1b3e.lean.js",revision:null},{url:"assets/CS_操作系统_05-操作系统原理之死锁.md.b30f76cb.js",revision:null},{url:"assets/CS_操作系统_05-操作系统原理之死锁.md.b30f76cb.lean.js",revision:null},{url:"assets/CS_操作系统_06-操作系统原理之内存管理.md.0d30a131.js",revision:null},{url:"assets/CS_操作系统_06-操作系统原理之内存管理.md.0d30a131.lean.js",revision:null},{url:"assets/CS_操作系统_07-操作系统原理之文件系统.md.538dca80.js",revision:null},{url:"assets/CS_操作系统_07-操作系统原理之文件系统.md.538dca80.lean.js",revision:null},{url:"assets/CS_操作系统_08-操作系统原理之磁盘调度.md.ecd47d8e.js",revision:null},{url:"assets/CS_操作系统_08-操作系统原理之磁盘调度.md.ecd47d8e.lean.js",revision:null},{url:"assets/CS_网络原理_0-开始阅读.md.cb098214.js",revision:null},{url:"assets/CS_网络原理_0-开始阅读.md.cb098214.lean.js",revision:null},{url:"assets/CS_网络原理_00-计算机网络原理之概述.md.f57754ff.js",revision:null},{url:"assets/CS_网络原理_00-计算机网络原理之概述.md.f57754ff.lean.js",revision:null},{url:"assets/CS_网络原理_01-计算机网络原理之物理层.md.469ce3e2.js",revision:null},{url:"assets/CS_网络原理_01-计算机网络原理之物理层.md.469ce3e2.lean.js",revision:null},{url:"assets/CS_网络原理_02-计算机网络原理之数据链路层.md.48f0f915.js",revision:null},{url:"assets/CS_网络原理_02-计算机网络原理之数据链路层.md.48f0f915.lean.js",revision:null},{url:"assets/CS_网络原理_03-计算机网络原理之网络层.md.e12b0e62.js",revision:null},{url:"assets/CS_网络原理_03-计算机网络原理之网络层.md.e12b0e62.lean.js",revision:null},{url:"assets/CS_网络原理_04-计算机网络原理之传输层.md.6ab3def2.js",revision:null},{url:"assets/CS_网络原理_04-计算机网络原理之传输层.md.6ab3def2.lean.js",revision:null},{url:"assets/CS_网络原理_05-计算机网络原理之应用层.md.45363615.js",revision:null},{url:"assets/CS_网络原理_05-计算机网络原理之应用层.md.45363615.lean.js",revision:null},{url:"assets/DSA_0-开始上手.md.86c9a425.js",revision:null},{url:"assets/DSA_0-开始上手.md.86c9a425.lean.js",revision:null},{url:"assets/DSA_数据结构_0-开始阅读.md.de14b45f.js",revision:null},{url:"assets/DSA_数据结构_0-开始阅读.md.de14b45f.lean.js",revision:null},{url:"assets/DSA_数据结构_00-队列.md.0f32ef07.js",revision:null},{url:"assets/DSA_数据结构_00-队列.md.0f32ef07.lean.js",revision:null},{url:"assets/index.md.3279498c.js",revision:null},{url:"assets/index.md.3279498c.lean.js",revision:null},{url:"assets/Interview_0-开始上手.md.55af2737.js",revision:null},{url:"assets/Interview_0-开始上手.md.55af2737.lean.js",revision:null},{url:"assets/Interview_CS_part01.md.d96e46aa.js",revision:null},{url:"assets/Interview_CS_part01.md.d96e46aa.lean.js",revision:null},{url:"assets/Interview_CSS_part01.md.ac630c21.js",revision:null},{url:"assets/Interview_CSS_part01.md.ac630c21.lean.js",revision:null},{url:"assets/Interview_DSA_part01.md.1c251f99.js",revision:null},{url:"assets/Interview_DSA_part01.md.1c251f99.lean.js",revision:null},{url:"assets/Interview_HTML_part01.md.4afb441e.js",revision:null},{url:"assets/Interview_HTML_part01.md.4afb441e.lean.js",revision:null},{url:"assets/Interview_JavaScript_part01.md.f837011e.js",revision:null},{url:"assets/Interview_JavaScript_part01.md.f837011e.lean.js",revision:null},{url:"assets/Interview_Linux_part01.md.bf9547bb.js",revision:null},{url:"assets/Interview_Linux_part01.md.bf9547bb.lean.js",revision:null},{url:"assets/Interview_Node_part01.md.ec42570c.js",revision:null},{url:"assets/Interview_Node_part01.md.ec42570c.lean.js",revision:null},{url:"assets/Interview_React_part01.md.b1e21f90.js",revision:null},{url:"assets/Interview_React_part01.md.b1e21f90.lean.js",revision:null},{url:"assets/Interview_ToolChain_part01.md.023bd89f.js",revision:null},{url:"assets/Interview_ToolChain_part01.md.023bd89f.lean.js",revision:null},{url:"assets/Interview_TypeScript _part01.md.de67bddd.js",revision:null},{url:"assets/Interview_TypeScript _part01.md.de67bddd.lean.js",revision:null},{url:"assets/Interview_Vue_part01.md.93d5d925.js",revision:null},{url:"assets/Interview_Vue_part01.md.93d5d925.lean.js",revision:null},{url:"assets/Interview_设计模式_part01.md.2945220e.js",revision:null},{url:"assets/Interview_设计模式_part01.md.2945220e.lean.js",revision:null},{url:"assets/style.a38ded39.css",revision:null},{url:"assets/WEB_0-开始上手.md.63a97c05.js",revision:null},{url:"assets/WEB_0-开始上手.md.63a97c05.lean.js",revision:null},{url:"assets/WEB_01-前端源码研读.md.8ad8edfe.js",revision:null},{url:"assets/WEB_01-前端源码研读.md.8ad8edfe.lean.js",revision:null},{url:"assets/WEB_02-浏览器渲染原理.md.6ed64f37.js",revision:null},{url:"assets/WEB_02-浏览器渲染原理.md.6ed64f37.lean.js",revision:null},{url:"assets/WEB_V8档案馆_0-开始阅读.md.e4d6fe72.js",revision:null},{url:"assets/WEB_V8档案馆_0-开始阅读.md.e4d6fe72.lean.js",revision:null},{url:"assets/WEB_V8档案馆_1-关于.md.5c843d5a.js",revision:null},{url:"assets/WEB_V8档案馆_1-关于.md.5c843d5a.lean.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition_V8解释器.md.6da201b1.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition_V8解释器.md.6da201b1.lean.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition_寄存器等值优化.md.971d35ca.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition_寄存器等值优化.md.971d35ca.lean.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition_快速启动的V8解释器.md.8c07a626.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition_快速启动的V8解释器.md.8c07a626.lean.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition设计文档.md.c862e00e.js",revision:null},{url:"assets/WEB_V8档案馆_Ignition设计文档.md.c862e00e.lean.js",revision:null},{url:"assets/WEB_V8档案馆_TurboFan的故事.md.6f2ee973.js",revision:null},{url:"assets/WEB_V8档案馆_TurboFan的故事.md.6f2ee973.lean.js",revision:null},{url:"assets/WEB_V8档案馆_V8_连接Ignition与Turbofan.md.9af9bbec.js",revision:null},{url:"assets/WEB_V8档案馆_V8_连接Ignition与Turbofan.md.9af9bbec.lean.js",revision:null},{url:"assets/WEB_V8档案馆_V8性能优化杀手.md.7054dba5.js",revision:null},{url:"assets/WEB_V8档案馆_V8性能优化杀手.md.7054dba5.lean.js",revision:null},{url:"assets/WEB_V8档案馆_理解V8的字节码.md.e8bdd44d.js",revision:null},{url:"assets/WEB_V8档案馆_理解V8的字节码.md.e8bdd44d.lean.js",revision:null},{url:"assets/WEB_图解JavaScript_0-开始阅读.md.33351161.js",revision:null},{url:"assets/WEB_图解JavaScript_0-开始阅读.md.33351161.lean.js",revision:null},{url:"assets/WEB_图解JavaScript_00-事件循环和Hoisting.md.49219738.js",revision:null},{url:"assets/WEB_图解JavaScript_00-事件循环和Hoisting.md.49219738.lean.js",revision:null},{url:"assets/WEB_图解JavaScript_01-Scope和JavaScript引擎.md.7d991f4d.js",revision:null},{url:"assets/WEB_图解JavaScript_01-Scope和JavaScript引擎.md.7d991f4d.lean.js",revision:null},{url:"assets/WEB_图解JavaScript_02-原型继承.md.e787375c.js",revision:null},{url:"assets/WEB_图解JavaScript_02-原型继承.md.e787375c.lean.js",revision:null},{url:"assets/WEB_图解JavaScript_03-生成器和迭代器.md.b542b3cd.js",revision:null},{url:"assets/WEB_图解JavaScript_03-生成器和迭代器.md.b542b3cd.lean.js",revision:null},{url:"assets/WEB_图解JavaScript_04-Promises和Async_Await.md.66564300.js",revision:null},{url:"assets/WEB_图解JavaScript_04-Promises和Async_Await.md.66564300.lean.js",revision:null},{url:"assets/WEB_进击的V8_0-开始阅读.md.346af854.js",revision:null},{url:"assets/WEB_进击的V8_0-开始阅读.md.346af854.lean.js",revision:null},{url:"assets/WEB_进击的V8_00-深入了解V8.md.9fdd2815.js",revision:null},{url:"assets/WEB_进击的V8_00-深入了解V8.md.9fdd2815.lean.js",revision:null},{url:"assets/WEB_进击的V8_01-清晰易懂的现代编程语言内存管理.md.c4fefa71.js",revision:null},{url:"assets/WEB_进击的V8_01-清晰易懂的现代编程语言内存管理.md.c4fefa71.lean.js",revision:null},{url:"assets/WEB_进击的V8_02-可视化讲解V8引擎中内存管理.md.41259d59.js",revision:null},{url:"assets/WEB_进击的V8_02-可视化讲解V8引擎中内存管理.md.41259d59.lean.js",revision:null},{url:"assets/WEB_进击的V8_03-V8 之旅_Full Compiler.md.799e523e.js",revision:null},{url:"assets/WEB_进击的V8_03-V8 之旅_Full Compiler.md.799e523e.lean.js",revision:null},{url:"assets/WEB_进击的V8_04-V8 之旅_对象表示.md.1b362a14.js",revision:null},{url:"assets/WEB_进击的V8_04-V8 之旅_对象表示.md.1b362a14.lean.js",revision:null},{url:"assets/WEB_进击的V8_05-V8 之旅_优化编译器Crankshaft.md.ac9df822.js",revision:null},{url:"assets/WEB_进击的V8_05-V8 之旅_优化编译器Crankshaft.md.ac9df822.lean.js",revision:null},{url:"assets/WEB_进击的V8_06-V8 之旅_垃圾回收器.md.ffcbeec9.js",revision:null},{url:"assets/WEB_进击的V8_06-V8 之旅_垃圾回收器.md.ffcbeec9.lean.js",revision:null},{url:"assets/WEB_进击的V8_07-JavaScript工作原理_优化解析效率.md.813c8c86.js",revision:null},{url:"assets/WEB_进击的V8_07-JavaScript工作原理_优化解析效率.md.813c8c86.lean.js",revision:null},{url:"assets/WEB_进击的V8_08-JavaScript工作原理_V8编译器的优化提效.md.4f8c307c.js",revision:null},{url:"assets/WEB_进击的V8_08-JavaScript工作原理_V8编译器的优化提效.md.4f8c307c.lean.js",revision:null},{url:"assets/关于.md.36a168bb.js",revision:null},{url:"assets/关于.md.36a168bb.lean.js",revision:null},{url:"assets/示例.md.f540fa5c.js",revision:null},{url:"assets/示例.md.f540fa5c.lean.js",revision:null},{url:"browser-internal/assets/player/pdfjs/pdf_worker.js",revision:"8340eae5ed4206855c68f0324ffcee09"},{url:"browser-internal/index.html",revision:"8790e88f802298cfd73e23a62e2e1d41"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f787b74f5a7f224daf25d23c76054eb3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
