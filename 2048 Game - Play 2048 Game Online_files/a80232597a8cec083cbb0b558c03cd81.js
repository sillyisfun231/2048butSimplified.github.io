(function(){'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");}var n=ca(this);function p(a,b){if(b)a:{var d=n;a=a.split(".");for(var c=0;c<a.length-1;c++){var f=a[c];if(!(f in d))break a;d=d[f]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&ba(d,a,{configurable:!0,writable:!0,value:b})}}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var da="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},u;if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var v;a:{var ea={a:!0},w={};try{w.__proto__=ea;v=w.a;break a}catch(a){}v=!1}u=v?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var x=u;
function y(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(x)x(a,b);else for(var d in b)if("prototype"!=d)if(Object.defineProperties){var c=Object.getOwnPropertyDescriptor(b,d);c&&Object.defineProperty(a,d,c)}else a[d]=b[d];a.T=b.prototype}
p("Promise",function(a){function b(e){this.j=0;this.l=void 0;this.i=[];this.G=!1;var g=this.v();try{e(g.resolve,g.reject)}catch(k){g.reject(k)}}function d(){this.i=null}function c(e){return e instanceof b?e:new b(function(g){g(e)})}if(a)return a;d.prototype.j=function(e){if(null==this.i){this.i=[];var g=this;this.l(function(){g.A()})}this.i.push(e)};var f=n.setTimeout;d.prototype.l=function(e){f(e,0)};d.prototype.A=function(){for(;this.i&&this.i.length;){var e=this.i;this.i=[];for(var g=0;g<e.length;++g){var k=
e[g];e[g]=null;try{k()}catch(l){this.v(l)}}}this.i=null};d.prototype.v=function(e){this.l(function(){throw e;})};b.prototype.v=function(){function e(l){return function(m){k||(k=!0,l.call(g,m))}}var g=this,k=!1;return{resolve:e(this.M),reject:e(this.A)}};b.prototype.M=function(e){if(e===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.O(e);else{a:switch(typeof e){case "object":var g=null!=e;break a;case "function":g=!0;break a;default:g=!1}g?this.L(e):this.F(e)}};
b.prototype.L=function(e){var g=void 0;try{g=e.then}catch(k){this.A(k);return}"function"==typeof g?this.P(g,e):this.F(e)};b.prototype.A=function(e){this.H(2,e)};b.prototype.F=function(e){this.H(1,e)};b.prototype.H=function(e,g){if(0!=this.j)throw Error("Cannot settle("+e+", "+g+"): Promise already settled in state"+this.j);this.j=e;this.l=g;2===this.j&&this.N();this.J()};b.prototype.N=function(){var e=this;f(function(){if(e.K()){var g=n.console;"undefined"!==typeof g&&g.error(e.l)}},1)};b.prototype.K=
function(){if(this.G)return!1;var e=n.CustomEvent,g=n.Event,k=n.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof g?e=new g("unhandledrejection",{cancelable:!0}):(e=n.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.l;return k(e)};b.prototype.J=function(){if(null!=this.i){for(var e=0;e<this.i.length;++e)h.j(this.i[e]);this.i=null}};var h=new d;b.prototype.O=
function(e){var g=this.v();e.B(g.resolve,g.reject)};b.prototype.P=function(e,g){var k=this.v();try{e.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,g){function k(t,q){return"function"==typeof t?function(N){try{l(t(N))}catch(O){m(O)}}:q}var l,m,z=new b(function(t,q){l=t;m=q});this.B(k(e,l),k(g,m));return z};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.B=function(e,g){function k(){switch(l.j){case 1:e(l.l);break;case 2:g(l.l);break;default:throw Error("Unexpected state: "+
l.j);}}var l=this;null==this.i?h.j(k):this.i.push(k);this.G=!0};b.resolve=c;b.reject=function(e){return new b(function(g,k){k(e)})};b.race=function(e){return new b(function(g,k){for(var l=r(e),m=l.next();!m.done;m=l.next())c(m.value).B(g,k)})};b.all=function(e){var g=r(e),k=g.next();return k.done?c([]):new b(function(l,m){function z(N){return function(O){t[N]=O;q--;0==q&&l(t)}}var t=[],q=0;do t.push(void 0),q++,c(k.value).B(z(t.length-1),m),k=g.next();while(!k.done)})};return b});
p("Array.prototype.fill",function(a){return a?a:function(b,d,c){var f=this.length||0;0>d&&(d=Math.max(0,f+d));if(null==c||c>f)c=f;c=Number(c);0>c&&(c=Math.max(0,f+c));for(d=Number(d||0);d<c;d++)this[d]=b;return this}});function A(a){return a?a:Array.prototype.fill}p("Int8Array.prototype.fill",A);p("Uint8Array.prototype.fill",A);p("Uint8ClampedArray.prototype.fill",A);p("Int16Array.prototype.fill",A);p("Uint16Array.prototype.fill",A);p("Int32Array.prototype.fill",A);
p("Uint32Array.prototype.fill",A);p("Float32Array.prototype.fill",A);p("Float64Array.prototype.fill",A);/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var fa=this||self;function B(a,b){a=a.split(".");var d=fa;a[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===b?d[c]&&d[c]!==Object.prototype[c]?d=d[c]:d=d[c]={}:d[c]=b};var ha=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var d=a.length,c=Array(d),f="string"===typeof a?a.split(""):a,h=0;h<d;h++)h in f&&(c[h]=b.call(void 0,f[h],h,a));return c};var ia={},C=null;var ja="undefined"!==typeof Uint8Array;
function ka(a){var b;void 0===b&&(b=0);if(!C){C={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var h=d.concat(c[f].split(""));ia[f]=h;for(var e=0;e<h.length;e++){var g=h[e];void 0===C[g]&&(C[g]=e)}}}b=ia[b];d=Array(Math.floor(a.length/3));c=b[64]||"";for(f=h=0;h<a.length-2;h+=3){var k=a[h],l=a[h+1];g=a[h+2];e=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|g>>6];g=b[g&63];d[f++]=e+k+l+g}e=0;g=c;switch(a.length-h){case 2:e=
a[h+1],g=b[(e&15)<<2]||c;case 1:a=a[h],d[f]=b[a>>2]+b[(a&3)<<4|e>>4]+g+c}return d.join("")}var la={};var ma;function D(a){if(la!==la)throw Error("illegal external caller");this.I=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");};var E="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function F(a,b){if(E)return a[E]|=b;if(void 0!==a.u)return a.u|=b;Object.defineProperties(a,{u:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function G(a){var b;E?b=a[E]:b=a.u;return null==b?0:b}function H(a,b){E?a[E]=b:void 0!==a.u?a.u=b:Object.defineProperties(a,{u:{value:b,configurable:!0,writable:!0,enumerable:!1}})}function na(a){F(a,16);return a}function oa(a,b){H(b,(a|0)&-51)}
function I(a,b){H(b,(a|18)&-41)};var J={};function K(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var L,pa=[];H(pa,23);L=Object.freeze(pa);function qa(a){if(G(a.m)&2)throw Error("Cannot mutate an immutable Message");}function M(a){var b=a.length;(b=b?a[b-1]:void 0)&&K(b)?b.g=1:(b={},a.push((b.g=1,b)))};function ra(a){var b=a.j+a.s;return a.o||(a.o=a.m[b]={})}function P(a,b,d,c){a.l&&(a.l=void 0);b>=a.j||c?ra(a)[b]=d:(a.m[b+a.s]=d,(a=a.o)&&b in a&&delete a[b])}
function Q(a,b,d){var c=void 0===c?!1:c;a:if(-1===d)var f=null;else if(d>=a.j)f=a.o?a.o[d]:void 0;else{if(c&&a.o&&(f=a.o[d],null!=f))break a;f=a.m[d+a.s]}var h=!1;var e=null==f||"object"!==typeof f||(h=Array.isArray(f))||f.C!==J?h?new b(f):void 0:f;e!==f&&null!=e&&(P(a,d,e,c),F(e.m,G(a.m)&18));b=e;if(null==b)return b;G(a.m)&2||(f=b,G(f.m)&2&&(e=sa(f,!1),e.l=f,f=e),f!==b&&(b=f,P(a,d,b,c)));return b};var R;function ta(a,b){R=b;a=new a(b);R=void 0;return a};function ua(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(G(a)&128))return a=Array.prototype.slice.call(a),M(a),a}else{if(ja&&null!=a&&a instanceof Uint8Array)return ka(a);if(a instanceof D){var b=a.I;return null==b?"":"string"===typeof b?b:a.I=ka(b)}}}return a};function va(a,b,d,c){if(null!=a){if(Array.isArray(a))a=S(a,b,d,void 0!==c);else if(K(a)){var f={},h;for(h in a)f[h]=va(a[h],b,d,c);a=f}else a=b(a,c);return a}}function S(a,b,d,c){var f=G(a);c=c?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=va(a[h],b,d,c);d(f,a);return a}function wa(a){return a.C===J?a.toJSON():ua(a)}function xa(a,b){a&128&&M(b)};function ya(a,b,d){d=void 0===d?I:d;if(null!=a){if(ja&&a instanceof Uint8Array)return a.length?new D(new Uint8Array(a)):ma||(ma=new D(null));if(Array.isArray(a)){var c=G(a);if(c&2)return a;if(b&&!(c&32)&&(c&16||0===c))return H(a,c|2),a;a=S(a,ya,c&4?I:d,!0);b=G(a);b&4&&b&2&&Object.freeze(a);return a}return a.C===J?za(a):a}}
function Aa(a,b,d,c,f,h,e){if(a=a.i&&a.i[d]){c=G(a);c&2?c=a:(h=ha(a,za),I(c,h),Object.freeze(h),c=h);qa(b);null==c?h=L:(h=[],F(h,1));e=h;if(null!=c){h=!!c.length;for(a=0;a<c.length;a++){var g=c[a];h=h&&!(G(g.m)&2);e[a]=g.m}h=(h?8:0)|1;a=G(e);(a&h)!==h&&(Object.isFrozen(e)&&(e=Array.prototype.slice.call(e)),H(e,a|h));b.i||(b.i={});b.i[d]=c}else b.i&&(b.i[d]=void 0);P(b,d,e,f)}else c=ya(c,h,e),qa(b),P(b,d,c,f)}function za(a){if(G(a.m)&2)return a;a=sa(a,!0);F(a.m,2);return a}
function sa(a,b){var d=a.m,c=na([]),f=a.constructor.i;f&&c.push(f);f=a.o;if(f){c.length=d.length;c.fill(void 0,c.length,d.length);var h={};c[c.length-1]=h}0!==(G(d)&128)&&M(c);b=b||G(a.m)&2?I:oa;c=ta(a.constructor,c);a.D&&(c.D=a.D.slice());h=!!(G(d)&16);for(var e=f?d.length-1:d.length,g=0;g<e;g++)Aa(a,c,g-a.s,d[g],!1,h,b);if(f)for(var k in f)Aa(a,c,+k,f[k],!0,h,b);return c};function T(a,b,d){null==a&&(a=R);R=void 0;var c=this.constructor.j||0,f=0<c,h=this.constructor.i,e=!1;if(null==a){a=h?[h]:[];var g=48;var k=!0;f&&(c=0,g|=128);H(a,g)}else{if(!Array.isArray(a))throw Error();if(h&&h!==a[0])throw Error();var l=g=F(a,0);if(k=0!==(16&l))(e=0!==(32&l))||(l|=32);if(f)if(128&l)c=0;else{if(0<a.length){var m=a[a.length-1];if(K(m)&&"g"in m){c=0;l|=128;delete m.g;var z=!0,t;for(t in m){z=!1;break}z&&a.pop()}}}else if(128&l)throw Error();g!==l&&H(a,l)}this.s=(h?0:-1)-c;this.i=
void 0;this.m=a;a:{h=this.m.length;c=h-1;if(h&&(h=this.m[c],K(h))){this.o=h;this.j=c-this.s;break a}void 0!==b&&-1<b?(this.j=Math.max(b,c+1-this.s),this.o=void 0):this.j=Number.MAX_VALUE}if(!f&&this.o&&"g"in this.o)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(d){b=k&&!e&&!0;f=this.j;var q;for(k=0;k<d.length;k++)e=d[k],e<f?(e+=this.s,(c=a[e])?Ba(c,b):a[e]=L):(q||(q=ra(this)),(c=q[e])?Ba(c,b):q[e]=L)}}T.prototype.toJSON=function(){return S(this.m,wa,xa)};
function Ca(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);return ta(a,na(b))}function Ba(a,b){if(Array.isArray(a)){var d=G(a),c=1;!b||d&2||(c|=16);(d&c)!==c&&H(a,d|c)}}T.prototype.C=J;T.prototype.toString=function(){return this.m.toString()};function U(a){T.call(this,a,-1,Da)}y(U,T);var Da=[8];function V(a){T.call(this,a,-1,Ea)}y(V,T);var Ea=[17];function W(a){T.call(this,a,-1,Fa)}y(W,T);var Fa=[27];function Ga(a){T.call(this,a)}y(Ga,T);function Ha(a){T.call(this,a,-1,Ia)}y(Ha,T);var Ia=[1,2,3];function X(a,b){a=a.getElementsByTagName("META");for(var d=0;d<a.length;++d)if(a[d].getAttribute("name")===b)return a[d].getAttribute("content")||"";return""};function Ja(a,b){this.head=a;this.body=b;this.i=[];X(b,"sampling_mod");a=X(b,"namespace");if(!a){a=Math.random;a="ns-"+a().toString(36).substr(2,5);a:{var d=void 0===d?0:d;for(var c=b.getElementsByTagName("META"),f=0;f<c.length;++f)if("namespace"===c[f].getAttribute("name")&&c[f].getAttribute("index")===d.toString()){c[f].setAttribute("content",a);break a}c=b.querySelector("#mys-meta");c||(c=document.createElement("div"),c.id="mys-meta",c.style.position="absolute",c.style.display="none",b.appendChild(c));
b=document.createElement("META");b.setAttribute("name","namespace");b.setAttribute("content",a);b.setAttribute("index",d.toString());c.appendChild(b)}}if(!(0<this.i.length))for(d=X(this.body,"environment"),d=r(d.split("|")),b=d.next();!b.done;b=d.next())(b=b.value)&&this.i.push(b)}
function Y(a,b){a=a.body;var d={detail:void 0};d=void 0===d?{}:d;if("function"===typeof window.CustomEvent)var c=new CustomEvent(b,d);else c=document.createEvent("CustomEvent"),c.initCustomEvent(b,!!d.bubbles,!!d.cancelable,d.detail);a.dispatchEvent(c)}Ja.prototype.addEventListener=function(a,b){this.body.addEventListener(a,b)};function Ka(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function La(a){this.context=a;this.l={S:!1,R:100};this.j=Ka("SPAN");this.i=Ka("DIV");this.j.style.fontSize="6px";this.j.textContent="go";this.i.style.position="absolute";this.i.style.top="100%";this.i.style.left="100%";this.i.style.width="1px";this.i.style.height="0";this.i.style.overflow="hidden";this.i.style.visibility="hidden";this.i.appendChild(this.j)}
La.prototype.wait=function(){var a=this;if(!this.l.S&&(Y(this.context,"spanStart"),this.context.body.appendChild(this.i),!Ma(this)))return new Promise(function(b){var d=setInterval(function(){Ma(a)&&(clearInterval(d),b())},a.l.R)})};function Ma(a){if(1>=a.j.offsetWidth||1>=a.j.offsetHeight)return!1;a.i.remove();Y(a.context,"spanReady");return!0};function Na(a,b){this.context=a;this.i=Q(b,W,1)||new W;Q(b,U,12)||new U;Q(this.i,V,10)||new V};function Oa(){this.j=this.i=!1;this.l=[]}function Pa(a){a.l.length=0;a.j=!0}function Qa(a,b){function d(){a.j=!1;var c=a.l.shift();return void 0===c?(a.i=!1,Promise.resolve()):Qa(a,c())}a.i=!0;return b?b.then(d,function(){if(a.j)return d();a.i=!1;return Promise.reject()}):d()}function Ra(a,b){b=r(b);for(var d=b.next();!d.done;d=b.next())a.l.push(d.value);if(!a.i)return Qa(a)};function Sa(a,b){this.l=new Oa;this.i=0;this.context=new Ja(a,b)}function Ta(a){var b=X(a.context.body,"render_config")||"[]";b=Ca(Ga,b);return new Na(a.context,b)}
function Ua(a){Pa(a.l);return Ra(a.l,[function(){a.j||(a.j=Ta(a));var b=(new La(a.context)).wait();Y(a.context,"browserStart");Y(a.context,"browserStartEnd");a.i&=-31;a.i|=2;return b},function(){Y(a.context,"browserReady");Y(a.context,"browserReadyEnd");a.i|=4;Y(a.context,"overallReady")},function(){Y(a.context,"browserQuiet");Y(a.context,"browserQuietEnd");a.i|=8}])}
function Va(){var a=Z;a.i&=-31;a.i|=1;var b=0,d=a.context.body;d.addEventListener("browserRender",function(){++b;if(1===b)Y(a.context,"overallStart"),Wa(a).then(function(){Y(a.context,"overallQuiet")});else{var c=d.clientHeight;d.clientWidth&&c&&(a.j||(a.j=Ta(a)),Wa(a))}})}function Wa(a){var b=X(a.context.body,"engine_msg")||"[]";Ca(Ha,b);return Ua(a)||Promise.resolve()};var Z;B("mys.engine.init",function(a,b){Z=new Sa(a,b);Va()});B("mys.engine.stage",function(){var a;return(null==(a=Z)?void 0:a.i)||0});}).call(this);
