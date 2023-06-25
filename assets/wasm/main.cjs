"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("fs"),e=require("path"),n=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},r=n(t),i=n(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function o(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))}var a,s,c,u={exports:{}};a=u,s="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(s=s||__filename),c=function(t){var e,n,o=t||{},a=void 0!==o?o:{};a.ready=new Promise((function(t,r){e=t,n=r}));var c,u,_,f=Object.assign({},a),l="object"==typeof window,A="function"==typeof importScripts,h="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="";if(h){var d=r.default,m=i.default;p=A?m.dirname(p)+"/":__dirname+"/",c=(t,e)=>(t=x(t)?new URL(t):m.normalize(t),d.readFileSync(t,e?void 0:"utf8")),_=t=>{var e=c(t,!0);return e.buffer||(e=new Uint8Array(e)),e},u=(t,e,n)=>{t=x(t)?new URL(t):m.normalize(t),d.readFile(t,(function(t,r){t?n(t):e(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof H))throw t})),process.on("unhandledRejection",(function(t){throw t})),a.inspect=function(){return"[Emscripten Module object]"}}else(l||A)&&(A?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),s&&(p=s),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",c=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},A&&(_=t=>{var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),u=(t,e,n)=>{var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?e(r.response):n()},r.onerror=n,r.send(null)});var R,y,B=a.print||console.log.bind(console),g=a.printErr||console.warn.bind(console);Object.assign(a,f),f=null,a.arguments&&a.arguments,a.thisProgram&&a.thisProgram,a.quit&&a.quit,a.wasmBinary&&(R=a.wasmBinary),a.noExitRuntime,"object"!=typeof WebAssembly&&D("no native wasm support detected");var E,Z,I=!1,v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function S(){var t=y.buffer;a.HEAP8=new Int8Array(t),a.HEAP16=new Int16Array(t),a.HEAP32=new Int32Array(t),a.HEAPU8=E=new Uint8Array(t),a.HEAPU16=new Uint16Array(t),a.HEAPU32=Z=new Uint32Array(t),a.HEAPF32=new Float32Array(t),a.HEAPF64=new Float64Array(t)}a.INITIAL_MEMORY;var C,b,w=[],N=[],T=[],P=0,O=null;function D(t){a.onAbort&&a.onAbort(t),g(t="Aborted("+t+")"),I=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function F(t){return t.startsWith("data:application/octet-stream;base64,")}function x(t){return t.startsWith("file://")}function U(t){try{if(t==C&&R)return new Uint8Array(R);if(_)return _(t);throw"both async and sync fetching of the wasm failed"}catch(t){D(t)}}function H(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function G(t){for(;t.length>0;)t.shift()(a)}function M(t){var e=y.buffer;try{return y.grow(t-e.byteLength+65535>>>16),S(),1}catch(t){}}F(C="zbar.wasm")||(b=C,C=a.locateFile?a.locateFile(b,p):p+b);var L=[null,[],[]];function W(t,e){var n=L[t];0===e||10===e?((1===t?B:g)(function(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.buffer&&v)return v.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var c=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|c:(7&a)<<18|s<<12|c<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var u=a-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}(n,0)),n.length=0):n.push(e)}var k,Y={d:function(){return!0},e:function(){return Date.now()},c:function(t){var e,n,r=E.length,i=2147483648;if((t>>>=0)>i)return!1;for(var o=1;o<=4;o*=2){var a=r*(1+.2/o);if(a=Math.min(a,t+100663296),M(Math.min(i,(e=Math.max(t,a))+((n=65536)-e%n)%n)))return!0}return!1},f:function(t){return 52},b:function(t,e,n,r,i){return 70},a:function(t,e,n,r){for(var i=0,o=0;o<n;o++){var a=Z[e>>2],s=Z[e+4>>2];e+=8;for(var c=0;c<s;c++)W(t,E[a+c]);i+=s}return Z[r>>2]=i,0}};function j(t){function n(){k||(k=!0,a.calledRun=!0,I||(G(N),e(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)t=a.postRun.shift(),T.unshift(t);var t;G(T)}()))}P>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)t=a.preRun.shift(),w.unshift(t);var t;G(w)}(),P>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),n()}),1)):n()))}if(function(){var t={a:Y};function e(t,e){var n,r=t.exports;a.asm=r,y=a.asm.g,S(),a.asm.s,n=a.asm.h,N.unshift(n),function(t){if(P--,a.monitorRunDependencies&&a.monitorRunDependencies(P),0==P&&O){var e=O;O=null,e()}}()}function r(t){e(t.instance)}function i(e){return function(){if(!R&&(l||A)){if("function"==typeof fetch&&!x(C))return fetch(C,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+C+"'";return t.arrayBuffer()})).catch((function(){return U(C)}));if(u)return new Promise((function(t,e){u(C,(function(e){t(new Uint8Array(e))}),e)}))}return Promise.resolve().then((function(){return U(C)}))}().then((function(e){return WebAssembly.instantiate(e,t)})).then((function(t){return t})).then(e,(function(t){g("failed to asynchronously prepare wasm: "+t),D(t)}))}if(P++,a.monitorRunDependencies&&a.monitorRunDependencies(P),a.instantiateWasm)try{return a.instantiateWasm(t,e)}catch(t){g("Module.instantiateWasm callback failed with error: "+t),n(t)}(R||"function"!=typeof WebAssembly.instantiateStreaming||F(C)||x(C)||h||"function"!=typeof fetch?i(r):fetch(C,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(r,(function(t){return g("wasm streaming compile failed: "+t),g("falling back to ArrayBuffer instantiation"),i(r)}))}))).catch(n)}(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.h).apply(null,arguments)},a._ImageScanner_create=function(){return(a._ImageScanner_create=a.asm.i).apply(null,arguments)},a._ImageScanner_destory=function(){return(a._ImageScanner_destory=a.asm.j).apply(null,arguments)},a._ImageScanner_set_config=function(){return(a._ImageScanner_set_config=a.asm.k).apply(null,arguments)},a._ImageScanner_enable_cache=function(){return(a._ImageScanner_enable_cache=a.asm.l).apply(null,arguments)},a._ImageScanner_recycle_image=function(){return(a._ImageScanner_recycle_image=a.asm.m).apply(null,arguments)},a._ImageScanner_get_results=function(){return(a._ImageScanner_get_results=a.asm.n).apply(null,arguments)},a._ImageScanner_scan=function(){return(a._ImageScanner_scan=a.asm.o).apply(null,arguments)},a._Image_create=function(){return(a._Image_create=a.asm.p).apply(null,arguments)},a._Image_destory=function(){return(a._Image_destory=a.asm.q).apply(null,arguments)},a._Image_get_symbols=function(){return(a._Image_get_symbols=a.asm.r).apply(null,arguments)},a._free=function(){return(a._free=a.asm.t).apply(null,arguments)},a._malloc=function(){return(a._malloc=a.asm.u).apply(null,arguments)},O=function t(){k||j(),k||(O=t)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return j(),o.ready},a.exports=c;const _=u.exports;let f;const l=o(void 0,void 0,void 0,(function*(){if(f=yield _(),!f)throw Error("WASM was not loaded");return f})),A=()=>o(void 0,void 0,void 0,(function*(){return yield l}));var h,p,d;exports.ZBarSymbolType=void 0,(h=exports.ZBarSymbolType||(exports.ZBarSymbolType={}))[h.ZBAR_NONE=0]="ZBAR_NONE",h[h.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",h[h.ZBAR_EAN2=2]="ZBAR_EAN2",h[h.ZBAR_EAN5=5]="ZBAR_EAN5",h[h.ZBAR_EAN8=8]="ZBAR_EAN8",h[h.ZBAR_UPCE=9]="ZBAR_UPCE",h[h.ZBAR_ISBN10=10]="ZBAR_ISBN10",h[h.ZBAR_UPCA=12]="ZBAR_UPCA",h[h.ZBAR_EAN13=13]="ZBAR_EAN13",h[h.ZBAR_ISBN13=14]="ZBAR_ISBN13",h[h.ZBAR_COMPOSITE=15]="ZBAR_COMPOSITE",h[h.ZBAR_I25=25]="ZBAR_I25",h[h.ZBAR_DATABAR=34]="ZBAR_DATABAR",h[h.ZBAR_DATABAR_EXP=35]="ZBAR_DATABAR_EXP",h[h.ZBAR_CODABAR=38]="ZBAR_CODABAR",h[h.ZBAR_CODE39=39]="ZBAR_CODE39",h[h.ZBAR_PDF417=57]="ZBAR_PDF417",h[h.ZBAR_QRCODE=64]="ZBAR_QRCODE",h[h.ZBAR_SQCODE=80]="ZBAR_SQCODE",h[h.ZBAR_CODE93=93]="ZBAR_CODE93",h[h.ZBAR_CODE128=128]="ZBAR_CODE128",h[h.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",h[h.ZBAR_ADDON2=512]="ZBAR_ADDON2",h[h.ZBAR_ADDON5=1280]="ZBAR_ADDON5",h[h.ZBAR_ADDON=1792]="ZBAR_ADDON",exports.ZBarConfigType=void 0,(p=exports.ZBarConfigType||(exports.ZBarConfigType={}))[p.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",p[p.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",p[p.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",p[p.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",p[p.ZBAR_CFG_BINARY=4]="ZBAR_CFG_BINARY",p[p.ZBAR_CFG_NUM=5]="ZBAR_CFG_NUM",p[p.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",p[p.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",p[p.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",p[p.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",p[p.ZBAR_CFG_TEST_INVERTED=129]="ZBAR_CFG_TEST_INVERTED",p[p.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",p[p.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY",exports.ZBarOrientation=void 0,(d=exports.ZBarOrientation||(exports.ZBarOrientation={}))[d.ZBAR_ORIENT_UNKNOWN=-1]="ZBAR_ORIENT_UNKNOWN",d[d.ZBAR_ORIENT_UP=0]="ZBAR_ORIENT_UP",d[d.ZBAR_ORIENT_RIGHT=1]="ZBAR_ORIENT_RIGHT",d[d.ZBAR_ORIENT_DOWN=2]="ZBAR_ORIENT_DOWN",d[d.ZBAR_ORIENT_LEFT=3]="ZBAR_ORIENT_LEFT";class m{constructor(t,e){this.ptr=t,this.inst=e}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}class R{constructor(t,e){this.ptr=t,this.ptr32=t>>2,this.buf=e,this.HEAP8=new Int8Array(e),this.HEAPU32=new Uint32Array(e),this.HEAP32=new Int32Array(e)}}class y extends R{get type(){return this.HEAPU32[this.ptr32]}get data(){const t=this.HEAPU32[this.ptr32+4],e=this.HEAPU32[this.ptr32+5];return Int8Array.from(this.HEAP8.subarray(e,e+t))}get points(){const t=this.HEAPU32[this.ptr32+7],e=this.HEAPU32[this.ptr32+8]>>2,n=[];for(let r=0;r<t;++r){const t=this.HEAP32[e+2*r],i=this.HEAP32[e+2*r+1];n.push({x:t,y:i})}return n}get orientation(){return this.HEAP32[this.ptr32+9]}get next(){const t=this.HEAPU32[this.ptr32+11];return t?new y(t,this.buf):null}get time(){return this.HEAPU32[this.ptr32+13]}get cacheCount(){return this.HEAP32[this.ptr32+14]}get quality(){return this.HEAP32[this.ptr32+15]}}class B extends R{get head(){const t=this.HEAPU32[this.ptr32+2];return t?new y(t,this.buf):null}}class g{constructor(t){this.type=t.type,this.typeName=exports.ZBarSymbolType[this.type],this.data=t.data,this.points=t.points,this.orientation=t.orientation,this.time=t.time,this.cacheCount=t.cacheCount,this.quality=t.quality}static createSymbolsFromPtr(t,e){if(0==t)return[];let n=new B(t,e).head;const r=[];for(;null!==n;)r.push(new g(n)),n=n.next;return r}decode(t){return new TextDecoder(t).decode(this.data)}}class E extends m{static createFromGrayBuffer(t,e,n,r=0){return o(this,void 0,void 0,(function*(){const i=yield A(),o=new Uint8Array(n),a=t*e;if(a!==o.byteLength)throw Error("dataBuf does not match width and height");const s=i._malloc(a);i.HEAPU8.set(o,s);return new this(i._Image_create(t,e,808466521,s,a,r),i)}))}static createFromRGBABuffer(t,e,n,r=0){return o(this,void 0,void 0,(function*(){const i=yield A(),o=new Uint8Array(n),a=t*e;if(4*a!==o.byteLength)throw Error("dataBuf does not match width and height");const s=i._malloc(a),c=s+a,u=i.HEAPU8;for(let t=s,e=0;t<c;t++,e+=4)u[t]=19595*o[e]+38469*o[e+1]+7472*o[e+2]>>16;return new this(i._Image_create(t,e,808466521,s,a,r),i)}))}destroy(){this.checkAlive(),this.inst._Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const t=this.inst._Image_get_symbols(this.ptr);return g.createSymbolsFromPtr(t,this.inst.HEAPU8.buffer)}}class Z extends m{static create(){return o(this,void 0,void 0,(function*(){const t=yield A();return new this(t._ImageScanner_create(),t)}))}destroy(){this.checkAlive(),this.inst._ImageScanner_destory(this.ptr),this.ptr=0}setConfig(t,e,n){return this.checkAlive(),this.inst._ImageScanner_set_config(this.ptr,t,e,n)}enableCache(t=!0){this.checkAlive(),this.inst._ImageScanner_enable_cache(this.ptr,t)}recycleImage(t){this.checkAlive(),this.inst._ImageScanner_recycle_image(this.ptr,t.getPointer())}getResults(){this.checkAlive();const t=this.inst._ImageScanner_get_results(this.ptr);return g.createSymbolsFromPtr(t,this.inst.HEAPU8.buffer)}scan(t){return this.checkAlive(),this.inst._ImageScanner_scan(this.ptr,t.getPointer())}}const I=Z.create(),v=(t,e)=>o(void 0,void 0,void 0,(function*(){void 0===e&&(e=yield I);const n=e.scan(t);if(n<0)throw Error("Scan Failed");return 0===n?[]:t.getSymbols()})),S=(t,e,n,r)=>o(void 0,void 0,void 0,(function*(){const i=yield E.createFromRGBABuffer(e,n,t),o=yield v(i,r);return i.destroy(),o}));exports.ZBarImage=E,exports.ZBarScanner=Z,exports.ZBarSymbol=g,exports.getDefaultScanner=()=>o(void 0,void 0,void 0,(function*(){return yield I})),exports.getInstance=A,exports.scanGrayBuffer=(t,e,n,r)=>o(void 0,void 0,void 0,(function*(){const i=yield E.createFromGrayBuffer(e,n,t),o=yield v(i,r);return i.destroy(),o})),exports.scanImageData=(t,e)=>o(void 0,void 0,void 0,(function*(){return yield S(t.data.buffer,t.width,t.height,e)})),exports.scanRGBABuffer=S;
//# sourceMappingURL=main.cjs.map
