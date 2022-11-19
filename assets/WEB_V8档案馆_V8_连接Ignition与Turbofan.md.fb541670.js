import{_ as e,c as t,d as n,a,o as l,r}from"./app.55f0a5db.js";const y=JSON.parse('{"title":"V8:\u8FDE\u63A5Ignition\u4E0ETurbofan","description":"","frontmatter":{},"headers":[],"relativePath":"WEB/V8\u6863\u6848\u9986/V8:\u8FDE\u63A5Ignition\u4E0ETurbofan.md","lastUpdated":1668844148000}'),o={name:"WEB/V8\u6863\u6848\u9986/V8:\u8FDE\u63A5Ignition\u4E0ETurbofan.md"},s=a('<h1 id="v8-\u8FDE\u63A5ignition\u4E0Eturbofan" tabindex="-1">V8: \u8FDE\u63A5 Ignition \u4E0E Turbofan <a class="header-anchor" href="#v8-\u8FDE\u63A5ignition\u4E0Eturbofan" aria-hidden="true">#</a></h1><h2 id="\u76EE\u5F55" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a></h2><nav class="table-of-contents"><ul><li><a href="#\u76EE\u5F55">\u76EE\u5F55</a></li><li><a href="#\u539F\u6587">\u539F\u6587</a></li><li><a href="#ignition-turbofan-pipeline">Ignition + Turbofan pipeline</a><ul><li><a href="#compiler-pipeline-2008">Compiler Pipeline (2008)</a></li><li><a href="#compiler-pipeline-2010">Compiler Pipeline (2010)</a></li><li><a href="#compiler-pipeline-2015">Compiler Pipeline (2015)</a></li><li><a href="#compiler-pipeline-2016">Compiler Pipeline (2016)</a></li><li><a href="#compiler-pipeline-svelte-devices">Compiler Pipeline (Svelte Devices)</a></li><li><a href="#compiler-pipeline-2017">Compiler Pipeline (2017)</a></li></ul></li><li><a href="#bytecode-\u5230-graph">Bytecode \u5230 graph</a><ul><li><a href="#ignition-\u5230-turbofan">Ignition \u5230 Turbofan</a></li><li><a href="#\u5B57\u8282\u7801\u5BF9\u7B80\u5316\u8282\u70B9\u56FE\u6784\u5EFA\u7684\u9650\u5236">\u5B57\u8282\u7801\u5BF9\u7B80\u5316\u8282\u70B9\u56FE\u6784\u5EFA\u7684\u9650\u5236</a></li><li><a href="#\u5B57\u8282\u7801\u7684\u9759\u6001\u5206\u6790">\u5B57\u8282\u7801\u7684\u9759\u6001\u5206\u6790</a></li><li><a href="#\u6D3B\u6027\u5206\u6790">\u6D3B\u6027\u5206\u6790</a></li><li><a href="#\u89E3\u51B3\u590D\u6742\u63A7\u5236-\u751F\u6210\u5668">\u89E3\u51B3\u590D\u6742\u63A7\u5236(\u751F\u6210\u5668)</a></li><li><a href="#\u89E3\u51B3\u590D\u6742\u63A7\u5236-try-finally">\u89E3\u51B3\u590D\u6742\u63A7\u5236(try-finally)</a></li></ul></li><li><a href="#\u6027\u80FD\u7ED3\u679C">\u6027\u80FD\u7ED3\u679C</a><ul><li><a href="#\u4EE3\u7801\u5185\u5B58\u4F7F\u7528\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09">\u4EE3\u7801\u5185\u5B58\u4F7F\u7528\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09</a></li><li><a href="#ignition-vs-full-codegen">Ignition vs Full-Codegen</a></li><li><a href="#octane-performance">Octane Performance</a></li><li><a href="#\u65F6\u95F4\u82B1\u5728\u4E86\u54EA\u91CC\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09">\u65F6\u95F4\u82B1\u5728\u4E86\u54EA\u91CC\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09</a></li></ul></li><li><a href="#\u603B\u7ED3">\u603B\u7ED3</a></li><li><a href="#\u53C2\u8003">\u53C2\u8003</a></li></ul></nav><h2 id="\u539F\u6587" tabindex="-1">\u539F\u6587 <a class="header-anchor" href="#\u539F\u6587" aria-hidden="true">#</a></h2>',4),h=a('<h2 id="ignition-turbofan-pipeline" tabindex="-1">Ignition + Turbofan pipeline <a class="header-anchor" href="#ignition-turbofan-pipeline" aria-hidden="true">#</a></h2><p>\u4E3A\u4EC0\u4E48\u505A\u4E2A\u65B0\u7684 pipeline\uFF1F</p><ul><li>\u51CF\u5C11\u5185\u5B58\u4F7F\u7528\u91CF</li></ul><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.6g6x5se4frw0.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.6g6x5se4frw0.webp"></p><ul><li>\u51CF\u5C11\u542F\u52A8\u65F6\u95F4</li></ul><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.lki4m6ephow.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.lki4m6ephow.webp"></p><p>parsing \u548C compiling \u603B\u5171\u5360\u7528\u603B\u65F6\u95F4\u7684 33%\u3002</p><ul><li>\u964D\u4F4E\u590D\u6742\u6027</li></ul><h3 id="compiler-pipeline-2008" tabindex="-1">Compiler Pipeline (2008) <a class="header-anchor" href="#compiler-pipeline-2008" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.20cza8gv1r40.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.20cza8gv1r40.webp"></p><p>2008 Full-Codegen\uFF1A</p><ul><li>\u5177\u6709\u9690\u85CF\u7C7B\uFF08hidden classes\uFF09\u548C\u5185\u8054\u7F13\u5B58\uFF08inline caching\uFF09\uFF0C\u5FEB\u901F\u904D\u5386 AST \u7684 JIT \u7F16\u8BD1\u5668\uFF08AST-walking JIT compiler \uFF09</li><li>\u7F3A\u70B9\uFF1A\u65E0\u4F18\u5316\u7684\u5373\u65F6\u7F16\u8BD1\uFF08non-optimizing JIT\uFF09</li></ul><p>2008 \u5E74\uFF0C\u6B64\u65F6\u662F\u5C06\u6E90\u4EE3\u7801\u76F4\u63A5\u7F16\u8BD1\u4E3A\u673A\u5668\u7801\uFF0C\u56E0\u6B64\u79F0\u4E4B\u4E3A <code>Full-Codegen</code> \uFF1BJIT \u7F16\u8BD1\u5668\u8FD8\u4E0D\u591F\u6210\u719F\uFF0C\u6CA1\u6709\u4F18\u5316\u7684\u53CA\u65F6\u7F16\u8BD1\uFF0C\u751F\u6210\u534A\u4F18\u5316\u7684\u4EE3\u7801\u3002</p><h3 id="compiler-pipeline-2010" tabindex="-1">Compiler Pipeline (2010) <a class="header-anchor" href="#compiler-pipeline-2010" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.7l5wtuczsb40.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.7l5wtuczsb40.webp"></p><p>2010 \u2013 Crankshaft\uFF1A</p><ul><li>\u4F7F\u7528\u7C7B\u578B\u53CD\u9988\u548C\u53BB\u4F18\u5316\uFF08deoptimization\uFF09\uFF0C\u4F18\u5316\u5373\u65F6\u7F16\u8BD1\u5668\uFF08Optimizing JIT compiler\uFF09\u3002</li><li>\u7F3A\u70B9\uFF1A\u4E0D\u80FD\u6269\u5C55\u5230\u73B0\u4EE3 JavaScript\uFF0C\u4E25\u91CD\u4F9D\u8D56\u53BB\u4F18\u5316\uFF0C\u6709\u9650\u7684\u9759\u6001\u7C7B\u578B\u5206\u6790\uFF08limited static type analysis\uFF09\uFF0C\u4E0E Codegen \u7D27\u5BC6\u8026\u5408\uFF08tightly coupled to Codegen\uFF09\uFF0C\u9AD8\u79FB\u690D\u5F00\u9500\uFF08high porting overhead\uFF09\u3002</li></ul><p>2010 \u5E74\u4F7F\u7528 Crankshaft \u7684 V8 \u6709\u4E86\u4F18\u5316\u7F16\u8BD1\u5668\uFF0C\u540C\u65F6\u6709\u4E86\u53BB\u4F18\u5316\u7684\u6982\u5FF5\uFF0C\u4F46\u662F Crankshaft \u7684\u4F18\u5316\u5B58\u5728\u4E00\u5B9A\u7684\u5C40\u9650\u6027\u3002</p><h3 id="compiler-pipeline-2015" tabindex="-1">Compiler Pipeline (2015) <a class="header-anchor" href="#compiler-pipeline-2015" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.11l0dcuuyrv4.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.11l0dcuuyrv4.webp"></p><p>2015 \u2013 TurboFan</p><p>\u7528\u7C7B\u578B\u548C\u8303\u56F4\u5206\u6790\uFF08type-and-range analysis\uFF09\u4F18\u5316\u5373\u65F6\u7F16\u8BD1\u5668\uFF0C\u8282\u70B9\u6D77\uFF08sea of nodes\uFF09\u3002</p><h3 id="compiler-pipeline-2016" tabindex="-1">Compiler Pipeline (2016) <a class="header-anchor" href="#compiler-pipeline-2016" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.2ntl6lqyw3k.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.2ntl6lqyw3k.webp"></p><p>2016 \u5E74\uFF0C\u5728 Crankshaft \u548C TurboFan\uFF08\u6DA1\u8F6E\u589E\u538B\u5668\u98CE\u6247\uFF09\u7684\u57FA\u7840\u4E0A\uFF0C\u51FA\u73B0\u4E86 Ignition\uFF08\u70B9\u706B\uFF0C\u70B9\u71C3\uFF09 \uFF0C\u5176\u4E2D Ignition \u5C06\u4E0D\u540C\u4E8E Full-codegen\uFF0CIgnition \u5C06 AST \u8F6C\u6362\u4E3A\u5B57\u8282\u7801\uFF0C\u800C TurboFan \u5C06\u5B57\u8282\u7801\u8F6C\u6362\u4E3A\u673A\u5668\u7801\u3002</p><h3 id="compiler-pipeline-svelte-devices" tabindex="-1">Compiler Pipeline (Svelte Devices) <a class="header-anchor" href="#compiler-pipeline-svelte-devices" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.1zts2eu7t9og.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.1zts2eu7t9og.webp"></p><h3 id="compiler-pipeline-2017" tabindex="-1">Compiler Pipeline (2017) <a class="header-anchor" href="#compiler-pipeline-2017" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.5d83rdxwgko0.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.5d83rdxwgko0.webp"></p><p>\u663E\u7136\u5728 2017 \u5E74\u4E4B\u540E\uFF0CIgnition \u548C TurboFan \u6210\u4E3A\u4E86\u4E3B\u7EBF\uFF0C\u800C Full-codegen \u548C Crankshaft \u5219\u88AB\u6DD8\u6C70\u3002\u5728 Parser \u5C06 source code \u8F6C\u6362\u4E3A AST \u4E4B\u540E\uFF0C\u968F\u540E\u7684 Compiler \u5DE5\u4F5C\u5C31\u4EA4\u7ED9\u4E86 Ignition \u548C TurboFan\uFF0CIgnition \u5C06 AST \u8F6C\u5316\u4E3A Bytecode\uFF0CBytecode \u5C06\u88AB\u4F18\u5316\uFF0C\u968F\u540E TurboFan \u5C06 Bytecode \u8F6C\u5316\u4E3A Native Code\u3002</p><h2 id="bytecode-\u5230-graph" tabindex="-1">Bytecode \u5230 graph <a class="header-anchor" href="#bytecode-\u5230-graph" aria-hidden="true">#</a></h2><h3 id="ignition-\u5230-turbofan" tabindex="-1">Ignition \u5230 Turbofan <a class="header-anchor" href="#ignition-\u5230-turbofan" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.3t94xnsttby0.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.3t94xnsttby0.webp"></p><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6E90\u4EE3\u7801\u6587\u672C\u5728\u7ECF\u8FC7 Ignition \u7684\u7F16\u8BD1\u4E0B\u53D8\u6210\u5B57\u8282\u7801\uFF0C\u5E76\u4E14\u5B50\u8282\u70B9\u5728 TurboFan \u4E2D\u88AB\u6784\u5EFA\u4E3A \u201C\u8282\u70B9\u6D77\u201D\u3002</p><h3 id="\u5B57\u8282\u7801\u5BF9\u7B80\u5316\u8282\u70B9\u56FE\u6784\u5EFA\u7684\u9650\u5236" tabindex="-1">\u5B57\u8282\u7801\u5BF9\u7B80\u5316\u8282\u70B9\u56FE\u6784\u5EFA\u7684\u9650\u5236 <a class="header-anchor" href="#\u5B57\u8282\u7801\u5BF9\u7B80\u5316\u8282\u70B9\u56FE\u6784\u5EFA\u7684\u9650\u5236" aria-hidden="true">#</a></h3><ul><li>\u59CB\u7EC8\u9009\u62E9\u5B57\u8282\u7801</li><li>\u4F5C\u7528\u57DF\u826F\u597D\u7684\u57FA\u672C\u5757 <ul><li>\u5F02\u5E38\u5904\u7406\u7A0B\u5E8F\u8986\u76D6\u5355\u4E2A\u7EBF\u6027\u8303\u56F4\u7684\u5B57\u8282\u7801</li></ul></li><li>\u6CA1\u6709\u4E0D\u53EF\u7EA6\uFF08irreducible\uFF09\u63A7\u5236\u6D41</li><li>\u5355\u4E2A\u53CD\u5411\u5206\u652F\u5230\u5FAA\u73AF\u62A5\u5934</li><li>\u4EE5\u5FAA\u73AF\u95ED\u5408\u5F62\u5F0F\u5BC4\u5B58\u5668</li></ul><h3 id="\u5B57\u8282\u7801\u7684\u9759\u6001\u5206\u6790" tabindex="-1">\u5B57\u8282\u7801\u7684\u9759\u6001\u5206\u6790 <a class="header-anchor" href="#\u5B57\u8282\u7801\u7684\u9759\u6001\u5206\u6790" aria-hidden="true">#</a></h3><ul><li>\u6784\u5EFA\u56FE\u4E4B\u524D\u7684\u5B57\u8282\u7801\u9884\u5206\u6790 <ul><li>\u6D3B\u6027\u5206\u6790 (\u7528\u4E8E\u53BB\u4F18\u5316\u6846\u67B6\u72B6\u6001)</li><li>\u73AF\u8DEF\u5206\u914D\u5206\u6790 (\u5BF9\u4E8E\u73AF\u8DEF\u7684\u7F3A\u9677)</li></ul></li><li>\u4E0D\u8981\u751F\u6210\u65E0\u7528\u8282\u70B9 <ul><li>\u907F\u514D\u5185\u5B58\u8FC7\u8F7D\uFF08\u6BCF\u4E2A\u8282\u70B9 40 + \u5B57\u8282\uFF09</li><li>\u907F\u514D\u8282\u70B9\u904D\u5386</li></ul></li></ul><h3 id="\u6D3B\u6027\u5206\u6790" tabindex="-1">\u6D3B\u6027\u5206\u6790 <a class="header-anchor" href="#\u6D3B\u6027\u5206\u6790" aria-hidden="true">#</a></h3><ul><li>\u57FA\u672C\u5757\u7684\u9884\u5148\u8FED\u4EE3\u904D\u5386 <ul><li>\u5728\u56FE\u5F62\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u521B\u5EFA\u6D3B\u52A8\u6620\u5C04\u548C\u72B6\u6001\u503C\u8282\u70B9</li><li>\u4E4B\u540E\u57FA\u4E8E\u6D3B\u6027\u91CD\u65B0\u521B\u5EFA\u72B6\u6001\u503C\u8282\u70B9</li></ul></li><li>\u73B0\u5728\u8FED\u4EE3\u904D\u5386\u5B57\u8282\u7801\u6570\u7EC4 <ul><li>\u53EA\u521B\u5EFA\u4E00\u6B21\u72B6\u6001\u503C\u8282\u70B9</li></ul></li></ul><h3 id="\u89E3\u51B3\u590D\u6742\u63A7\u5236-\u751F\u6210\u5668" tabindex="-1">\u89E3\u51B3\u590D\u6742\u63A7\u5236 (\u751F\u6210\u5668) <a class="header-anchor" href="#\u89E3\u51B3\u590D\u6742\u63A7\u5236-\u751F\u6210\u5668" aria-hidden="true">#</a></h3><ul><li>Javascript \u751F\u6210\u5668\u53EF\u4EE5\u5728\u4EFB\u610F\u70B9\u751F\u6210\uFF08yield\uFF09\u8868\u8FBE\u5F0F <ul><li>\u4F1A\u5F15\u5165\u4E0D\u53EF\u7EA6\u63A7\u5236\u6D41</li><li>\u89E3\u51B3\u65B9\u6848\uFF1A\u5728\u5F00\u5934\u548C\u5FAA\u73AF\u5934\u7684\u9690\u85CF tokens \u4E0A\u8F6C\u6362\u4E3A switch \u8BED\u53E5</li><li>\u7ED3\u679C\uFF1ATurbofan \u4E0D\u9700\u8981\u77E5\u9053\u4EFB\u4F55\u5173\u4E8E generator \u63A7\u5236\u6D41\u7A0B\u7684\u77E5\u8BC6</li></ul></li></ul><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.6ytglgjefcg0.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.6ytglgjefcg0.webp"></p><h3 id="\u89E3\u51B3\u590D\u6742\u63A7\u5236-try-finally" tabindex="-1">\u89E3\u51B3\u590D\u6742\u63A7\u5236 (try-finally) <a class="header-anchor" href="#\u89E3\u51B3\u590D\u6742\u63A7\u5236-try-finally" aria-hidden="true">#</a></h3><ul><li>try-finally \u5F02\u5E38\u5904\u7406\u5668 <ul><li>\u6839\u636E\u89E6\u53D1 finally \u5757\u7684\u5185\u5BB9\u4E0D\u540C\uFF0C\u4EE5\u4E0D\u540C\u65B9\u5F0F\u9000\u51FA (fall-through, return \u6216 throw)</li><li>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5728 finally \u5757\u7684\u672B\u5C3E\u7684 switch \u8BED\u53E5</li><li>\u7ED3\u679C\uFF1ATurbofan \u4E0D\u9700\u8981\u77E5\u9053\u4EFB\u4F55\u5173\u4E8E try-finally \u63A7\u5236\u6D41\u7684\u4FE1\u606F</li></ul></li></ul><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.12gwuscc9wow.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.12gwuscc9wow.webp"></p><h2 id="\u6027\u80FD\u7ED3\u679C" tabindex="-1">\u6027\u80FD\u7ED3\u679C <a class="header-anchor" href="#\u6027\u80FD\u7ED3\u679C" aria-hidden="true">#</a></h2><h3 id="\u4EE3\u7801\u5185\u5B58\u4F7F\u7528\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09" tabindex="-1">\u4EE3\u7801\u5185\u5B58\u4F7F\u7528\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09 <a class="header-anchor" href="#\u4EE3\u7801\u5185\u5B58\u4F7F\u7528\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.26j7ojd6vhds.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.26j7ojd6vhds.webp"></p><h3 id="ignition-vs-full-codegen" tabindex="-1">Ignition vs Full-Codegen <a class="header-anchor" href="#ignition-vs-full-codegen" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.18u1dqriv9b4.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.18u1dqriv9b4.webp"></p><h3 id="octane-performance" tabindex="-1">Octane Performance <a class="header-anchor" href="#octane-performance" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.7bqi8f08iug0.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.7bqi8f08iug0.webp"></p><h3 id="\u65F6\u95F4\u82B1\u5728\u4E86\u54EA\u91CC\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09" tabindex="-1">\u65F6\u95F4\u82B1\u5728\u4E86\u54EA\u91CC\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09 <a class="header-anchor" href="#\u65F6\u95F4\u82B1\u5728\u4E86\u54EA\u91CC\uFF08\u771F\u5B9E\u7684\u7F51\u7AD9\uFF09" aria-hidden="true">#</a></h3><p><img data-zooming src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.4ctg7c5pona0.webp" alt="image" data-src="https://cdn.staticaly.com/gh/jonsam-ng/image-hosting@master/2022/image.4ctg7c5pona0.webp"></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>Ignition + Turbofan \u662F V8 \u7684\u672A\u6765</li><li>\u5BF9\u5B57\u8282\u7801\u7684\u9650\u5236\u53EF\u4EE5\u7B80\u5316\u4F18\u5316\u7684\u56FE\u521B\u5EFA</li><li>\u9488\u5BF9\u73B0\u5B9E\u4E16\u754C\u7684\u4F18\u5316\u66B4\u9732\u4E86\u4E0D\u540C\u7684\u6743\u8861</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://docs.google.com/presentation/d/1chhN90uB8yPaIhx_h2M3lPyxPgdPmkADqSNAoXYQiVE/edit#slide=id.g1357e6d1a4_0_58" target="_blank" rel="noreferrer">V8: Hooking up the Ignition to the Turbofan - Google Slides</a></li></ul>',59);function g(c,d,m,p,u,f){const i=r("Pdf");return l(),t("div",null,[s,n(i,{src:"/v8/V8_ Hooking up the Ignition to the Turbofan.pdf"}),h])}const w=e(o,[["render",g]]);export{y as __pageData,w as default};
