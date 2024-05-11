(self["webpackChunkmy_note_app"]=self["webpackChunkmy_note_app"]||[]).push([[504],{1274:function(e,t,n){"use strict";n.d(t,{Dc:function(){return _i},rJ:function(){return ph},kd:function(){return md},H9:function(){return gh},x7:function(){return hd},GG:function(){return fd},aU:function(){return yh},P:function(){return Zh},BN:function(){return pd},mZ:function(){return gd}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r,i=n(3405),s=n(852),o=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function y(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,w.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function k(){this.s=this.s,this.o=this.o}var E=0;k.prototype.s=!1,k.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==E)||p(this)},k.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function I(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function C(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};h.addEventListener("test",e,t),h.removeEventListener("test",e,t)}catch(n){}return e}();function A(e){return/^[\s\xa0]*$/.test(e)}function D(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function R(e){return-1!=D().indexOf(e)}function O(e){return O[" "](e),e}function M(e,t){var n=br;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}O[" "]=function(){};var P,N,L=R("Opera"),F=R("Trident")||R("MSIE"),j=R("Edge"),$=j||F,U=R("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!R("Edge"))&&!(R("Trident")||R("MSIE"))&&!R("Edge"),V=-1!=D().toLowerCase().indexOf("webkit")&&!R("Edge");function B(){var e=h.document;return e?e.documentMode:void 0}e:{var W="",z=function(){var e=D();return U?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):V?/WebKit\/(\S+)/.exec(e):L?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(W=z?z[1]:""),F){var Y=B();if(null!=Y&&Y>parseFloat(W)){P=String(Y);break e}}P=W}if(h.document&&F){var q=B();N=q||(parseInt(P,10)||void 0)}else N=void 0;var H=N;function K(e,t){if(C.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{O(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&K.$.h.call(this)}}_(K,C);var G={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function Z(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function J(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=T(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(J(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Z(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=be(n),e&&e[Q]?e.O(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=ye(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)x||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ve;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=be(n),e&&e[Q]?e.P(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=be(n),e&&e[Q]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(J(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):J(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ve(e,t){if(e.fa)e=!0;else{t=new K(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function ye(e){return e=e[ce],e instanceof se?e:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function be(e){return"function"===typeof e?e:(e[we]||(e[we]=function(t){return e.handleEvent(t)}),e[we])}function _e(){k.call(this),this.i=new se(this),this.S=this,this.J=null}function ke(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new C(t,e);else if(t instanceof C)t.target=t.target||e;else{var i=t;t=new C(r,e),ie(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ee(o,r,!0,t)&&i}if(o=t.g=e,i=Ee(o,r,!0,t)&&i,i=Ee(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ee(o,r,!1,t)&&i}function Ee(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(_e,k),_e.prototype[Q]=!0,_e.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},_e.prototype.N=function(){if(_e.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)J(n[r]);delete t.g[e],t.h--}}this.J=null},_e.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},_e.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Te=h.JSON.stringify;class Se{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ie(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ce{constructor(){this.h=this.g=null}add(e,t){const n=xe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe=new Se((()=>new Ae),(e=>e.reset()));class Ae{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function De(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Re(e){h.setTimeout((()=>{throw e}),0)}let Oe,Me=!1,Pe=new Ce,Ne=()=>{const e=h.Promise.resolve(void 0);Oe=()=>{e.then(Le)}};var Le=()=>{for(var e;e=Ie();){try{e.h.call(e.g)}catch(n){Re(n)}var t=xe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1};function Fe(e,t){_e.call(this),this.h=e||1,this.g=t||h,this.j=w(this.qb,this),this.l=Date.now()}function je(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function $e(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ue(e){e.g=$e((()=>{e.g=null,e.i&&(e.i=!1,Ue(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}_(Fe,_e),r=Fe.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ke(this,"tick"),this.ga&&(je(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Fe.$.N.call(this),je(this),delete this.g};class Ve extends k{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(e){k.call(this),this.h=e,this.g={}}_(Be,k);var We=[];function ze(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ye(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function qe(){this.g=!0}function He(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Ke(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ge(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Xe(e,n)+(r?" "+r:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Xe(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Te(n)}catch(a){return t}}Be.prototype.N=function(){Be.$.N.call(this),Ye(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qe.prototype.Ea=function(){this.g=!1},qe.prototype.info=function(){};var Ze={},Je=null;function et(){return Je=Je||new _e}function tt(e){C.call(this,Ze.Ta,e)}function nt(e){const t=et();ke(t,new tt(t))}function rt(e,t){C.call(this,Ze.STAT_EVENT,e),this.stat=t}function it(e){const t=et();ke(t,new rt(t,e))}function st(e,t){C.call(this,Ze.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Ze.Ta="serverreachability",_(tt,C),Ze.STAT_EVENT="statevent",_(rt,C),Ze.Ua="timingevent",_(st,C);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function lt(e){return e.h||(e.h=e.i())}function ht(){}ut.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){C.call(this,"d")}function gt(){C.call(this,"c")}function mt(){}function vt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Be(this),this.P=wt,e=$?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}_(pt,C),_(gt,C),_(mt,ut),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},dt=new mt;var wt=45e3,bt={},_t={};function kt(e,t,n){e.L=1,e.A=zt($t(t)),e.u=n,e.S=!0,Et(e,null)}function Et(e,t){e.G=Date.now(),Ct(e),e.B=$t(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.o=0,n=e.l.J,e.h=new yt,e.g=ur(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Ve(w(e.Pa,e,e.g),e.O)),ze(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),nt(),He(e.j,e.v,e.B,e.m,e.W,e.u)}function Tt(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function St(e,t,n){let r,i=!0;for(;!e.J&&e.o<n.length;){if(r=It(e,n),r==_t){4==t&&(e.s=4,it(14),i=!1),Ge(e.j,e.m,null,"[Incomplete Response]");break}if(r==bt){e.s=4,it(15),Ge(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ge(e.j,e.m,r,null),Ot(e,r)}Tt(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,it(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,it(11))):(Ge(e.j,e.m,n,"[Invalid Chunked Response]"),Rt(e),Dt(e))}function It(e,t){var n=e.o,r=t.indexOf("\n",n);return-1==r?_t:(n=Number(t.substring(n,r)),isNaN(n)?bt:(r+=1,r+n>t.length?_t:(t=t.slice(r,r+n),e.o=r+n,t)))}function Ct(e){e.Y=Date.now()+e.P,xt(e,e.P)}function xt(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=ot(w(e.lb,e),t)}function At(e){e.C&&(h.clearTimeout(e.C),e.C=null)}function Dt(e){0==e.l.H||e.J||ir(e.l,e)}function Rt(e){At(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,je(e.V),Ye(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ot(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),qn(n)}er(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((e.K||n.g==e)&&rr(n),!A(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Wt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(At(a),Ct(a)),r.g=o}else Jn(r);0<n.j.length&&Kn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Yn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}nt(4)}catch(u){}}function Mt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Pt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Nt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pt(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=vt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==jn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=jn(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=l||7==t||nt(8==t||0>=d?3:2),At(this);var n=this.g.da();this.ca=n;t:if(Tt(this)){var r=$n(this.g);e="";var i=r.length,s=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Rt(this),Dt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ke(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.s=3,it(12),Rt(this),Dt(this);break e}Ge(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,n)}this.S?(St(this,l,o),$&&this.i&&3==l&&(ze(this.U,this.V,"tick",this.mb),this.V.start())):(Ge(this.j,this.m,o,null),Ot(this,o)),4==l&&Rt(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,Ct(this)))}else Un(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Rt(this),Dt(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=jn(this.g),t=this.g.ja();this.o<t.length&&(At(this),St(this,e,t),this.i&&4!=e&&Ct(this))}},r.cancel=function(){this.J=!0,Rt(this)},r.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Qe(this.j,this.B),2!=this.L&&(nt(),it(17)),Rt(this),this.s=2,Dt(this)):xt(this,this.Y-e)};var Lt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=e.h,Ut(this,e.j),this.s=e.s,this.g=e.g,Vt(this,e.m),this.l=e.l;var t=e.i,n=new Jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bt(this,n),this.o=e.o}else e&&(t=String(e).match(Lt))?(this.h=!1,Ut(this,t[1]||"",!0),this.s=Yt(t[2]||""),this.g=Yt(t[3]||"",!0),Vt(this,t[4]),this.l=Yt(t[5]||"",!0),Bt(this,t[6]||"",!0),this.o=Yt(t[7]||"")):(this.h=!1,this.i=new Jt(null,this.h))}function $t(e){return new jt(e)}function Ut(e,t,n){e.j=n?Yt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Vt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bt(e,t,n){t instanceof Jt?(e.i=t,on(e.i,e.h)):(n||(t=qt(t,Xt)),e.i=new Jt(t,e.h))}function Wt(e,t,n){e.i.set(t,n)}function zt(e){return Wt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ht(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(qt(t,Kt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(qt(t,Kt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(qt(n,"/"==n.charAt(0)?Qt:Gt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",qt(n,Zt)),e.join("")};var Kt=/[#\/\?@]/g,Gt=/[#\?:]/g,Qt=/[#\?]/g,Xt=/[#\?@]/g,Zt=/#/g;function Jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),S(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Jt.prototype,r.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||un,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return S(e.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function vn(){this.g=new mn}function yn(e,t,n){const r=n||"";try{Nt(e,(function(e,n){let i=e;f(e)&&(i=Te(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(e,t){const n=new qe;if(h.Image){const r=new Image;r.onload=b(bn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(bn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(bn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(bn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function bn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function _n(e){this.l=e.ec||null,this.j=e.ob||!1}function kn(e,t){_e.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=En,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,ut),_n.prototype.g=function(){return new kn(this.l,this.j)},_n.prototype.i=function(e){return function(){return e}}({}),_(kn,_e);var En=0;function Tn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,In(e)}function In(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=En)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,In(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=En},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Sn(this):In(this),3==this.readyState&&Tn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Sn(this))},r.Ya=function(e){this.g&&(this.response=e,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Cn=h.JSON.parse;function xn(e){_e.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=An,this.L=this.M=!1}_(xn,_e);var An="",Dn=/^https?$/i,Rn=["POST","PUT"];function On(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pn(e),Ln(e)}function Pn(e){e.F||(e.F=!0,ke(e,"complete"),ke(e,"error"))}function Nn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=jn(e)||2!=e.da()))if(e.v&&4==jn(e))$e(e.La,0,e);else if(ke(e,"readystatechange"),4==jn(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Lt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!Dn.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var s=2<jn(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Pn(e)}}finally{Ln(e)}}}function Ln(e,t){if(e.g){Fn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function $n(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case An:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Qr){return null}}function Un(e){const t={};e=(e.g&&2<=jn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(A(e[r]))continue;var n=De(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function Vn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Bn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Vn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Wt(e,t,n))}function Wn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ga=0,this.j=[],this.l=new qe,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wn("baseRetryDelayMs",5e3,e),this.hb=Wn("retryDelaySeedMs",1e4,e),this.eb=Wn("forwardChannelMaxRetries",2,e),this.xa=Wn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new vn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Yn(e){if(Hn(e),3==e.H){var t=e.W++,n=$t(e.I);if(Wt(n,"SID",e.K),Wt(n,"RID",t),Wt(n,"TYPE","terminate"),Xn(e,n),t=new vt(e,e.l,t),t.L=2,t.A=zt($t(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=t.A,n=!0),n||(t.g=ur(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ct(t)}ar(e)}function qn(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function Hn(e){qn(e),e.u&&(h.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Kn(e){if(!ln(e.i)&&!e.m){e.m=!0;var t=e.Na;Oe||Ne(),Me||(Oe(),Me=!0),Pe.add(t,e),e.C=0}}function Gn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(w(e.Na,e,t),sr(e,e.C)),e.C++,!0))}function Qn(e,t){var n;n=t?t.m:e.W++;const r=$t(e.I);Wt(r,"SID",e.K),Wt(r,"RID",n),Wt(r,"AID",e.V),Xn(e,r),e.o&&e.s&&Bn(r,e.o,e.s),n=new vt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Zn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),kt(n,r,t)}function Xn(e,t){e.na&&ee(e.na,(function(e,n){Wt(t,n,e)})),e.h&&Nt({},(function(e,n){Wt(t,n,e)}))}function Zn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?w(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{yn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Jn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Oe||Ne(),Me||(Oe(),Me=!0),Pe.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(w(e.Ma,e),sr(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new vt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=$t(e.wa);Wt(t,"RID","rpc"),Wt(t,"SID",e.K),Wt(t,"AID",e.V),Wt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Wt(t,"TO",e.qa),Wt(t,"TYPE","xmlhttp"),Xn(e,t),e.o&&e.s&&Bn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=zt($t(t)),n.u=null,n.S=!0,Et(n,e)}function rr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ir(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=et(),ke(r,new st(r,n)),Kn(e)}else Jn(e);else if(i=t.s,3==i||0==i&&0<t.ca||!(1==r&&Gn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:or(e,5);break;case 4:or(e,10);break;case 3:or(e,6);break;default:or(e,2)}}function sr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function or(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=w(e.pb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ut(n,"https"),zt(n)),wn(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),ar(e),Hn(e)}function ar(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(I(e.ma,t),I(e.ma,e.j),e.i.i.length=0,S(e.j),e.j.length=0),e.h.ya()}}function cr(e,t,n){var r=n instanceof jt?$t(n):new jt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Vt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new jt(null);r&&Ut(s,r),t&&(s.g=t),i&&Vt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&Wt(r,n,t),Wt(r,"VER",e.ra),Xn(e,r),r}function ur(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new xn(new _n({ob:n})):new xn(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(F&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function dr(e,t){_e.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!A(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function fr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){gt.call(this),this.status=1}function gr(e){this.g=e}function mr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function wr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=xn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?lt(this.u):lt(dt),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=T(Rn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=On(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=$e(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),Ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),xn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Nn(this):this.kb())},r.kb=function(){Nn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Cn(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new vt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),ie(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zn(this,i,t),n=$t(this.I),Wt(n,"RID",e),Wt(n,"CVER",22),this.F&&Wt(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Vn(s)))+"&"+t:this.o&&Bn(n,this.o,s)),fn(this.i,i),this.bb&&Wt(n,"TYPE","init"),this.P?(Wt(n,"$req",t),Wt(n,"SID","null"),i.aa=!0,kt(i,n,null)):kt(i,n,t),this.H=2}}else 3==this.H&&(e?Qn(this,e):0==this.j.length||ln(this.i)||Qn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(w(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),qn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,qn(this),er(this),it(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new dr(e,t)},_(dr,_e),dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cr(e,null,e.Y),Kn(e)},dr.prototype.close=function(){Yn(this.g)},dr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Te(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Kn(t)},dr.prototype.N=function(){this.g.h=null,delete this.j,Yn(this.g),delete this.g,dr.$.N.call(this)},_(fr,pt),_(pr,gt),_(gr,lr),gr.prototype.Ba=function(){ke(this.g,"a")},gr.prototype.Aa=function(e){ke(this.g,new fr(e))},gr.prototype.za=function(e){ke(this.g,new pr)},gr.prototype.ya=function(){ke(this.g,"b")},_(vr,mr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)yr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=t},vr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var br={};function _r(e){return-128<=e&&128>e?M(e,(function(e){return new wr([0|e],0>e?-1:0)})):new wr([0|e],0>e?-1:0)}function kr(e){if(isNaN(e)||!isFinite(e))return Sr;if(0>e)return Dr(kr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Tr;return new wr(t,0)}function Er(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Dr(Er(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=kr(Math.pow(t,8)),r=Sr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=kr(Math.pow(t,s)),r=r.R(s).add(kr(o))):(r=r.R(n),r=r.add(kr(o)))}return r}var Tr=4294967296,Sr=_r(0),Ir=_r(1),Cr=_r(16777216);function xr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Ar(e){return-1==e.h}function Dr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new wr(n,~e.h).add(Ir)}function Rr(e,t){return e.add(Dr(t))}function Or(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Mr(e,t){this.g=e,this.h=t}function Pr(e,t){if(xr(t))throw Error("division by zero");if(xr(e))return new Mr(Sr,Sr);if(Ar(e))return t=Pr(Dr(e),t),new Mr(Dr(t.g),Dr(t.h));if(Ar(t))return t=Pr(e,Dr(t)),new Mr(Dr(t.g),t.h);if(30<e.g.length){if(Ar(e)||Ar(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=t;0>=r.X(e);)n=Nr(n),r=Nr(r);var i=Lr(n,1),s=Lr(r,1);for(r=Lr(r,2),n=Lr(n,2);!xr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Lr(r,1),n=Lr(n,1)}return t=Rr(e,i.R(t)),new Mr(i,t)}for(i=Sr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=kr(n),o=s.R(t);Ar(o)||0<o.X(e);)n-=r,s=kr(n),o=s.R(t);xr(s)&&(s=Ir),i=i.add(s),e=Rr(e,o)}return new Mr(i,e)}function Nr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new wr(n,e.h)}function Lr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new wr(i,e.h)}r=wr.prototype,r.ea=function(){if(Ar(this))return-Dr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Tr+r)*t,t*=Tr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(xr(this))return"0";if(Ar(this))return"-"+Dr(this).toString(e);for(var t=kr(Math.pow(e,6)),n=this,r="";;){var i=Pr(n,t).g;n=Rr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,xr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Rr(this,e),Ar(e)?-1:xr(e)?0:1},r.abs=function(){return Ar(this)?Dr(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(xr(this)||xr(e))return Sr;if(Ar(this))return Ar(e)?Dr(this).R(Dr(e)):Dr(Dr(this).R(e));if(Ar(e))return Dr(this.R(Dr(e)));if(0>this.X(Cr)&&0>e.X(Cr))return kr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Or(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Or(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Or(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Or(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new wr(n,0)},r.gb=function(e){return Pr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new wr(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new wr(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new wr(n,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,dr.prototype.send=dr.prototype.u,dr.prototype.open=dr.prototype.m,dr.prototype.close=dr.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",_e.prototype.listen=_e.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=kr,wr.fromString=Er;var Fr=u.createWebChannelTransport=function(){return new hr},jr=u.getStatEventTarget=function(){return et()},$r=u.ErrorCode=at,Ur=u.EventType=ct,Vr=u.Event=Ze,Br=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wr=u.FetchXmlHttpFactory=_n,zr=u.WebChannel=ht,Yr=u.XhrIo=xn,qr=u.Md5=vr,Hr=u.Integer=wr;const Kr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Gr.UNAUTHENTICATED=new Gr(null),Gr.GOOGLE_CREDENTIALS=new Gr("google-credentials-uid"),Gr.FIRST_PARTY=new Gr("first-party-uid"),Gr.MOCK_USER=new Gr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.11.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new o.Vy("@firebase/firestore");function Zr(){return Xr.logLevel}function Jr(e,...t){if(Xr.logLevel<=o.$b.DEBUG){const n=t.map(ni);Xr.debug(`Firestore (${Qr}): ${e}`,...n)}}function ei(e,...t){if(Xr.logLevel<=o.$b.ERROR){const n=t.map(ni);Xr.error(`Firestore (${Qr}): ${e}`,...n)}}function ti(e,...t){if(Xr.logLevel<=o.$b.WARN){const n=t.map(ni);Xr.warn(`Firestore (${Qr}): ${e}`,...n)}}function ni(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e="Unexpected state"){const t=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+e;throw ei(t),new Error(t)}function ii(e,t){e||ri()}function si(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Gr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class di{constructor(e){this.t=e,this.currentUser=Gr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Jr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Jr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Jr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ii("string"==typeof t.accessToken),new ui(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ii(null===e||"string"==typeof e),new Gr(e)}}class fi{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Gr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pi{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new fi(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Gr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mi{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Jr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Jr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Jr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Jr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ii("string"==typeof e.token),this.R=e.token,new gi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=vi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function wi(e,t){return e<t?-1:e>t?1:0}function bi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _i.fromMillis(Date.now())}static fromDate(e){return _i.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new _i(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?wi(this.nanoseconds,e.nanoseconds):wi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ki(e)}static min(){return new ki(new _i(0,0))}static max(){return new ki(new _i(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,n){void 0===t?t=0:t>e.length&&ri(),void 0===n?n=e.length-t:n>e.length-t&&ri(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ei.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Ei{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ii extends Ei{construct(e,t,n){return new Ii(e,t,n)}static isValidIdentifier(e){return Si.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ii.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ii(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ii(t)}static emptyPath(){return new Ii([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.path=e}static fromPath(e){return new Ci(Ti.fromString(e))}static fromName(e){return new Ci(Ti.fromString(e).popFirst(5))}static empty(){return new Ci(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ci(new Ti(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}xi.UNKNOWN_ID=-1;function Ai(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ki.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new Ri(i,Ci.empty(),t)}function Di(e){return new Ri(e.readTime,e.key,-1)}class Ri{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ri(ki.min(),Ci.empty(),-1)}static max(){return new Ri(ki.max(),Ci.empty(),-1)}}function Oi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ci.comparator(e.documentKey,t.documentKey),0!==n?n:wi(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Mi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(e){if(e.code!==oi.FAILED_PRECONDITION||e.message!==Mi)throw e;Jr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Li(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Li?t:Li.resolve(t)}catch(e){return Li.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.reject(t)}static resolve(e){return new Li(((t,n)=>{t(e)}))}static reject(e){return new Li(((t,n)=>{n(e)}))}static waitFor(e){return new Li(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Li.resolve(!1);for(const n of e)t=t.next((e=>e?Li.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Li(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Li(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ji(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Ui(e){return null==e}function Vi(e){return 0===e&&1/e==-1/0}function Bi(e){return"number"==typeof e&&Number.isInteger(e)&&!Vi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$i.oe=-1;const Wi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Yi=zi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Hi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ki(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){this.comparator=e,this.root=t||Xi.EMPTY}insert(e,t){return new Gi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xi.BLACK,null,null))}remove(e){return new Gi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Xi.RED,this.left=null!=r?r:Xi.EMPTY,this.right=null!=i?i:Xi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Xi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Xi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const e=this.left.check();if(e!==this.right.check())throw ri();return e+(this.isRed()?0:1)}}Xi.EMPTY=null,Xi.RED=!0,Xi.BLACK=!1,Xi.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Xi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(e){this.comparator=e,this.data=new Gi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ji(this.data.getIterator())}getIteratorFrom(e){return new Ji(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Zi))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Zi(this.comparator);return t.data=e,t}}class Ji{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e){this.fields=e,e.sort(Ii.comparator)}static empty(){return new es([])}unionWith(e){let t=new Zi(Ii.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new es(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ts("Invalid base64 string: "+e):e}}(e);return new ns(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ns(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return wi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ns.EMPTY_BYTE_STRING=new ns("");const rs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(e){if(ii(!!e),"string"==typeof e){let t=0;const n=rs.exec(e);if(ii(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ss(e.seconds),nanos:ss(e.nanos)}}function ss(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function os(e){return"string"==typeof e?ns.fromBase64String(e):ns.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function cs(e){const t=e.mapValue.fields.__previous_value__;return as(t)?cs(t):t}function us(e){const t=is(e.mapValue.fields.__local_write_time__.timestampValue);return new _i(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class hs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof hs&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?as(e)?4:Cs(e)?9007199254740991:10:ri()}function ps(e,t){if(e===t)return!0;const n=fs(e);if(n!==fs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return us(e).isEqual(us(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=is(e.timestampValue),r=is(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return os(e.bytesValue).isEqual(os(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ss(e.geoPointValue.latitude)===ss(t.geoPointValue.latitude)&&ss(e.geoPointValue.longitude)===ss(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ss(e.integerValue)===ss(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ss(e.doubleValue),r=ss(t.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return bi(e.arrayValue.values||[],t.arrayValue.values||[],ps);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(qi(n)!==qi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ps(n[i],r[i])))return!1;return!0}(e,t);default:return ri()}}function gs(e,t){return void 0!==(e.values||[]).find((e=>ps(e,t)))}function ms(e,t){if(e===t)return 0;const n=fs(e),r=fs(t);if(n!==r)return wi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ss(e.integerValue||e.doubleValue),r=ss(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return vs(e.timestampValue,t.timestampValue);case 4:return vs(us(e),us(t));case 5:return wi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=os(e),r=os(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=wi(n[i],r[i]);if(0!==e)return e}return wi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=wi(ss(e.latitude),ss(t.latitude));return 0!==n?n:wi(ss(e.longitude),ss(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ms(n[i],r[i]);if(e)return e}return wi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ds.mapValue&&t===ds.mapValue)return 0;if(e===ds.mapValue)return 1;if(t===ds.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=wi(r[o],s[o]);if(0!==e)return e;const t=ms(n[r[o]],i[s[o]]);if(0!==t)return t}return wi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ri()}}function vs(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return wi(e,t);const n=is(e),r=is(t),i=wi(n.seconds,r.seconds);return 0!==i?i:wi(n.nanos,r.nanos)}function ys(e){return ws(e)}function ws(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=is(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return os(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ci.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ws(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ws(e.fields[i])}`;return n+"}"}(e.mapValue):ri()}function bs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function _s(e){return!!e&&"integerValue"in e}function ks(e){return!!e&&"arrayValue"in e}function Es(e){return!!e&&"nullValue"in e}function Ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ss(e){return!!e&&"mapValue"in e}function Is(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Hi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Is(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Is(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Cs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(e){this.value=e}static empty(){return new xs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(t)}setAll(e){let t=Ii.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Is(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ps(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Hi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new xs(Is(this.value))}}function As(e){const t=[];return Hi(e.fields,((e,n)=>{const r=new Ii([e]);if(Ss(n)){const e=As(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new es(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ds{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ds(e,0,ki.min(),ki.min(),ki.min(),xs.empty(),0)}static newFoundDocument(e,t,n,r){return new Ds(e,1,t,ki.min(),n,r,0)}static newNoDocument(e,t){return new Ds(e,2,t,ki.min(),ki.min(),xs.empty(),0)}static newUnknownDocument(e,t){return new Ds(e,3,t,ki.min(),ki.min(),xs.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ki.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ki.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ds&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ds(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.position=e,this.inclusive=t}}function Os(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ci.comparator(Ci.fromName(o.referenceValue),n.key):ms(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ms(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ps(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ns(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{}class Fs extends Ls{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ys(e,t,n):"array-contains"===t?new Gs(e,n):"in"===t?new Qs(e,n):"not-in"===t?new Xs(e,n):"array-contains-any"===t?new Zs(e,n):new Fs(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new qs(e,n):new Hs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ms(t,this.value)):null!==t&&fs(this.value)===fs(t)&&this.matchesComparison(ms(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class js extends Ls{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new js(e,t)}matches(e){return $s(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $s(e){return"and"===e.op}function Us(e){return Vs(e)&&$s(e)}function Vs(e){for(const t of e.filters)if(t instanceof js)return!1;return!0}function Bs(e){if(e instanceof Fs)return e.field.canonicalString()+e.op.toString()+ys(e.value);if(Us(e))return e.filters.map((e=>Bs(e))).join(",");{const t=e.filters.map((e=>Bs(e))).join(",");return`${e.op}(${t})`}}function Ws(e,t){return e instanceof Fs?function(e,t){return t instanceof Fs&&e.op===t.op&&e.field.isEqual(t.field)&&ps(e.value,t.value)}(e,t):e instanceof js?function(e,t){return t instanceof js&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Ws(n,t.filters[r])),!0)}(e,t):void ri()}function zs(e){return e instanceof Fs?function(e){return`${e.field.canonicalString()} ${e.op} ${ys(e.value)}`}(e):e instanceof js?function(e){return e.op.toString()+" {"+e.getFilters().map(zs).join(" ,")+"}"}(e):"Filter"}class Ys extends Fs{constructor(e,t,n){super(e,t,n),this.key=Ci.fromName(n.referenceValue)}matches(e){const t=Ci.comparator(e.key,this.key);return this.matchesComparison(t)}}class qs extends Fs{constructor(e,t){super(e,"in",t),this.keys=Ks("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Hs extends Fs{constructor(e,t){super(e,"not-in",t),this.keys=Ks("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ks(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ci.fromName(e.referenceValue)))}class Gs extends Fs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ks(t)&&gs(t.arrayValue,this.value)}}class Qs extends Fs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&gs(this.value.arrayValue,t)}}class Xs extends Fs{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!gs(this.value.arrayValue,t)}}class Zs extends Fs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ks(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>gs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function eo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Js(e,t,n,r,i,s,o)}function to(e){const t=si(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Bs(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ys(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ys(e))).join(",")),t.ue=e}return t.ue}function no(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ns(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ws(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ms(e.startAt,t.startAt)&&Ms(e.endAt,t.endAt)}function ro(e){return Ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function so(e,t,n,r,i,s,o,a){return new io(e,t,n,r,i,s,o,a)}function oo(e){return new io(e)}function ao(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function co(e){return null!==e.collectionGroup}function uo(e){const t=si(e);if(null===t.ce){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new Zi(Ii.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new Ps(r,n))})),e.has(Ii.keyField().canonicalString())||t.ce.push(new Ps(Ii.keyField(),n))}return t.ce}function lo(e){const t=si(e);return t.le||(t.le=ho(t,uo(e))),t.le}function ho(e,t){if("F"===e.limitType)return eo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new Ps(e.field,t)}));const n=e.endAt?new Rs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Rs(e.startAt.position,e.startAt.inclusive):null;return eo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function fo(e,t){const n=e.filters.concat([t]);return new io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function po(e,t,n){return new io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function go(e,t){return no(lo(e),lo(t))&&e.limitType===t.limitType}function mo(e){return`${to(lo(e))}|lt:${e.limitType}`}function vo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>zs(e))).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ys(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ys(e))).join(",")),`Target(${t})`}(lo(e))}; limitType=${e.limitType})`}function yo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ci.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of uo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Os(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,uo(e),t))&&!(e.endAt&&!function(e,t,n){const r=Os(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,uo(e),t))}(e,t)}function wo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function bo(e){return(t,n)=>{let r=!1;for(const i of uo(e)){const e=_o(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function _o(e,t,n){const r=e.field.isKeyField()?Ci.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ms(r,i):ri()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ki(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Gi(Ci.comparator);function To(){return Eo}const So=new Gi(Ci.comparator);function Io(...e){let t=So;for(const n of e)t=t.insert(n.key,n);return t}function Co(e){let t=So;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function xo(){return Do()}function Ao(){return Do()}function Do(){return new ko((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ro=new Gi(Ci.comparator),Oo=new Zi(Ci.comparator);function Mo(...e){let t=Oo;for(const n of e)t=t.add(n);return t}const Po=new Zi(wi);function No(){return Po}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(t)?"-0":t}}function Fo(e){return{integerValue:""+e}}function jo(e,t){return Bi(t)?Fo(t):Lo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this._=void 0}}function Uo(e,t,n){return e instanceof Wo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&as(t)&&(t=cs(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof zo?Yo(e,t):e instanceof qo?Ho(e,t):function(e,t){const n=Bo(e,t),r=Go(n)+Go(e.Pe);return _s(n)&&_s(e.Pe)?Fo(r):Lo(e.serializer,r)}(e,t)}function Vo(e,t,n){return e instanceof zo?Yo(e,t):e instanceof qo?Ho(e,t):n}function Bo(e,t){return e instanceof Ko?function(e){return _s(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Wo extends $o{}class zo extends $o{constructor(e){super(),this.elements=e}}function Yo(e,t){const n=Qo(t);for(const r of e.elements)n.some((e=>ps(e,r)))||n.push(r);return{arrayValue:{values:n}}}class qo extends $o{constructor(e){super(),this.elements=e}}function Ho(e,t){let n=Qo(t);for(const r of e.elements)n=n.filter((e=>!ps(e,r)));return{arrayValue:{values:n}}}class Ko extends $o{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Go(e){return ss(e.integerValue||e.doubleValue)}function Qo(e){return ks(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof zo&&t instanceof zo||e instanceof qo&&t instanceof qo?bi(e.elements,t.elements,ps):e instanceof Ko&&t instanceof Ko?ps(e.Pe,t.Pe):e instanceof Wo&&t instanceof Wo}(e.transform,t.transform)}class Zo{constructor(e,t){this.version=e,this.transformResults=t}}class Jo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jo}static exists(e){return new Jo(void 0,e)}static updateTime(e){return new Jo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ta{}function na(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new da(e.key,Jo.none()):new aa(e.key,e.data,Jo.none());{const n=e.data,r=xs.empty();let i=new Zi(Ii.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ca(e.key,r,new es(i.toArray()),Jo.none())}}function ra(e,t,n){e instanceof aa?function(e,t,n){const r=e.value.clone(),i=la(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ca?function(e,t,n){if(!ea(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=la(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ua(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ia(e,t,n,r){return e instanceof aa?function(e,t,n,r){if(!ea(e.precondition,t))return n;const i=e.value.clone(),s=ha(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ca?function(e,t,n,r){if(!ea(e.precondition,t))return n;const i=ha(e.fieldTransforms,r,t),s=t.data;return s.setAll(ua(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ea(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function sa(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Bo(r.transform,e||null);null!=i&&(null===n&&(n=xs.empty()),n.set(r.field,i))}return n||null}function oa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&bi(e,t,((e,t)=>Xo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class aa extends ta{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ca extends ta{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ua(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function la(e,t,n){const r=new Map;ii(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Vo(o,a,n[i]))}return r}function ha(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Uo(e,s,t))}return r}class da extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fa extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ra(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ia(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ia(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ao();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=na(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ki.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Mo())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,((e,t)=>oa(e,t)))&&bi(this.baseMutations,e.baseMutations,((e,t)=>oa(e,t)))}}class ga{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ii(e.mutations.length===n.length);let r=function(){return Ro}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ga(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya,wa;function ba(e){switch(e){default:return ri();case oi.CANCELLED:case oi.UNKNOWN:case oi.DEADLINE_EXCEEDED:case oi.RESOURCE_EXHAUSTED:case oi.INTERNAL:case oi.UNAVAILABLE:case oi.UNAUTHENTICATED:return!1;case oi.INVALID_ARGUMENT:case oi.NOT_FOUND:case oi.ALREADY_EXISTS:case oi.PERMISSION_DENIED:case oi.FAILED_PRECONDITION:case oi.ABORTED:case oi.OUT_OF_RANGE:case oi.UNIMPLEMENTED:case oi.DATA_LOSS:return!0}}function _a(e){if(void 0===e)return ei("GRPC error has no .code"),oi.UNKNOWN;switch(e){case ya.OK:return oi.OK;case ya.CANCELLED:return oi.CANCELLED;case ya.UNKNOWN:return oi.UNKNOWN;case ya.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ya.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ya.INTERNAL:return oi.INTERNAL;case ya.UNAVAILABLE:return oi.UNAVAILABLE;case ya.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ya.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ya.NOT_FOUND:return oi.NOT_FOUND;case ya.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ya.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ya.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ya.ABORTED:return oi.ABORTED;case ya.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ya.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ya.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(wa=ya||(ya={}))[wa.OK=0]="OK",wa[wa.CANCELLED=1]="CANCELLED",wa[wa.UNKNOWN=2]="UNKNOWN",wa[wa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wa[wa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wa[wa.NOT_FOUND=5]="NOT_FOUND",wa[wa.ALREADY_EXISTS=6]="ALREADY_EXISTS",wa[wa.PERMISSION_DENIED=7]="PERMISSION_DENIED",wa[wa.UNAUTHENTICATED=16]="UNAUTHENTICATED",wa[wa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wa[wa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wa[wa.ABORTED=10]="ABORTED",wa[wa.OUT_OF_RANGE=11]="OUT_OF_RANGE",wa[wa.UNIMPLEMENTED=12]="UNIMPLEMENTED",wa[wa.INTERNAL=13]="INTERNAL",wa[wa.UNAVAILABLE=14]="UNAVAILABLE",wa[wa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ka=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new Hr([4294967295,4294967295],0);function Sa(e){const t=Ea().encode(e),n=new qr;return n.update(t),new Uint8Array(n.digest())}function Ia(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class Ca{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new xa(`Invalid padding: ${t}`);if(n<0)throw new xa(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new xa(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new xa(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Hr.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Hr.fromNumber(n)));return 1===r.compare(Ta)&&(r=new Hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Sa(e),[n,r]=Ia(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Ca(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Sa(e),[n,r]=Ia(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Da.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Aa(ki.min(),r,new Gi(wi),To(),Mo())}}class Da{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Da(n,t,Mo(),Mo(),Mo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class Oa{constructor(e,t){this.targetId=e,this.me=t}}class Ma{constructor(e,t,n=ns.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Pa{constructor(){this.fe=0,this.ge=Fa(),this.pe=ns.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Mo(),t=Mo(),n=Mo();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new Da(this.pe,this.ye,e,t,n)}ve(){this.we=!1,this.ge=Fa()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ii(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Na{constructor(e){this.Le=e,this.Be=new Map,this.ke=To(),this.qe=La(),this.Qe=new Gi(wi)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:ri()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(ro(i))if(0===n){const e=new Ci(i.path);this.Ue(t,e,Ds.newNoDocument(e,ki.min()))}else ii(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}null==ka||ka.et(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.me,this.Le.tt(),n,i))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=os(n).toUint8Array()}catch(e){if(e instanceof ts)return ti("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new Ca(s,r,i)}catch(e){return ti(e instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ie?null:o}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&ro(i.target)){const t=new Ci(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,Ds.newNoDocument(t,e))}n.be&&(t.set(r,n.Ce()),n.ve())}}));let n=Mo();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new Aa(e,t,this.Qe,this.ke,n);return this.ke=To(),this.qe=La(),this.Qe=new Gi(wi),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pa,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Zi(wi),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||Jr("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pa),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function La(){return new Gi(Ci.comparator)}function Fa(){return new Gi(Ci.comparator)}const ja=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),$a=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ua=(()=>{const e={and:"AND",or:"OR"};return e})();class Va{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ba(e,t){return e.useProto3Json||Ui(t)?t:{value:t}}function Wa(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function za(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ya(e,t){return Wa(e,t.toTimestamp())}function qa(e){return ii(!!e),ki.fromTimestamp(function(e){const t=is(e);return new _i(t.seconds,t.nanos)}(e))}function Ha(e,t){return Ka(e,t).canonicalString()}function Ka(e,t){const n=function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function Ga(e){const t=Ti.fromString(e);return ii(yc(t)),t}function Qa(e,t){return Ha(e.databaseId,t.path)}function Xa(e,t){const n=Ga(t);if(n.get(1)!==e.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ci(tc(n))}function Za(e,t){return Ha(e.databaseId,t)}function Ja(e){const t=Ga(e);return 4===t.length?Ti.emptyPath():tc(t)}function ec(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tc(e){return ii(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function nc(e,t,n){return{name:Qa(e,t),fields:n.value.mapValue.fields}}function rc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ri()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ii(void 0===t||"string"==typeof t),ns.fromBase64String(t||"")):(ii(void 0===t||t instanceof Buffer||t instanceof Uint8Array),ns.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?oi.UNKNOWN:_a(e.code);return new ai(t,e.message||"")}(o);n=new Ma(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xa(e,r.document.name),s=qa(r.document.updateTime),o=r.document.createTime?qa(r.document.createTime):ki.min(),a=new xs({mapValue:{fields:r.document.fields}}),c=Ds.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ra(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Xa(e,r.document),s=r.readTime?qa(r.readTime):ki.min(),o=Ds.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ra([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Xa(e,r.document),s=r.removedTargetIds||[];n=new Ra([],s,i,null)}else{if(!("filter"in t))return ri();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new va(r,i),o=e.targetId;n=new Oa(o,s)}}return n}function ic(e,t){let n;if(t instanceof aa)n={update:nc(e,t.key,t.value)};else if(t instanceof da)n={delete:Qa(e,t.key)};else if(t instanceof ca)n={update:nc(e,t.key,t.data),updateMask:vc(t.fieldMask)};else{if(!(t instanceof fa))return ri();n={verify:Qa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Wo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof qo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ko)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw ri()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ya(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ri()}(e,t.precondition)),n}function sc(e,t){return e&&e.length>0?(ii(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?qa(e.updateTime):qa(t);return n.isEqual(ki.min())&&(n=qa(t)),new Zo(n,e.transformResults||[])}(e,t)))):[]}function oc(e,t){return{documents:[Za(e,t.path)]}}function ac(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Za(e,i);const s=function(e){if(0!==e.length)return mc(js.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:pc(e.field),direction:hc(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ba(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i}}function cc(e){let t=Ja(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=lc(e);return t instanceof js&&Us(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Ps(gc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ui(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Rs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Rs(n,t)}(n.endAt)),so(t,i,o,s,a,"F",c,u)}function uc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function lc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gc(e.unaryFilter.field);return Fs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gc(e.unaryFilter.field);return Fs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gc(e.unaryFilter.field);return Fs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=gc(e.unaryFilter.field);return Fs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(e):void 0!==e.fieldFilter?function(e){return Fs.create(gc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return js.create(e.compositeFilter.filters.map((e=>lc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ri()}}(e.compositeFilter.op))}(e):ri()}function hc(e){return ja[e]}function dc(e){return $a[e]}function fc(e){return Ua[e]}function pc(e){return{fieldPath:e.canonicalString()}}function gc(e){return Ii.fromServerFormat(e.fieldPath)}function mc(e){return e instanceof Fs?function(e){if("=="===e.op){if(Ts(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NAN"}};if(Es(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ts(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NOT_NAN"}};if(Es(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pc(e.field),op:dc(e.op),value:e.value}}}(e):e instanceof js?function(e){const t=e.getFilters().map((e=>mc(e)));return 1===t.length?t[0]:{compositeFilter:{op:fc(e.op),filters:t}}}(e):ri()}function vc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function yc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t,n,r,i=ki.min(),s=ki.min(),o=ns.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new wc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.ut=e}}function _c(e){const t=cc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?po(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(ss(e.integerValue));else if("doubleValue"in e){const n=ss(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),Vi(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Tt(t,20),"string"==typeof n&&(n=is(n)),t.dt(`${n.seconds||""}`),t.Et(n.nanos||0)}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(os(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?Cs(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):ri()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const n=e.fields||{};this.Tt(t,55);for(const r of Object.keys(n))this.At(r,t),this.Pt(n[r],t)}yt(e,t){const n=e.values||[];this.Tt(t,50);for(const r of n)this.Pt(r,t)}ft(e,t){this.Tt(t,37),Ci.fromName(e).path.forEach((e=>{this.Tt(t,60),this.wt(e,t)}))}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}kc.St=new kc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(){this.on=new Tc}addToCollectionParentIndex(e,t){return this.on.add(t),Li.resolve()}getCollectionParents(e,t){return Li.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return Li.resolve()}deleteFieldIndex(e,t){return Li.resolve()}deleteAllFieldIndexes(e){return Li.resolve()}createTargetIndexes(e,t){return Li.resolve()}getDocumentsMatchingTarget(e,t){return Li.resolve(null)}getIndexType(e,t){return Li.resolve(0)}getFieldIndexes(e,t){return Li.resolve([])}getNextCollectionGroupToUpdate(e){return Li.resolve(null)}getMinOffset(e,t){return Li.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return Li.resolve(Ri.min())}updateCollectionGroup(e,t,n){return Li.resolve()}updateIndexEntries(e,t){return Li.resolve()}}class Tc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Zi(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Zi(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Sc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Sc(e,Sc.DEFAULT_COLLECTION_PERCENTILE,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sc.DEFAULT_COLLECTION_PERCENTILE=10,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Sc.DEFAULT=new Sc(41943040,Sc.DEFAULT_COLLECTION_PERCENTILE,Sc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Sc.DISABLED=new Sc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ic(0)}static Nn(){return new Ic(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(){this.changes=new ko((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ds.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Li.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ia(n.mutation,e,es.empty(),_i.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Mo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Mo()){const r=xo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Io();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=xo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Mo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=To();const s=Do(),o=function(){return Do()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ca)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ia(o.mutation,t,o.mutation.getFieldMask(),_i.now())):s.set(t.key,es.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new xc(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Do();let r=new Gi(((e,t)=>e-t)),i=Mo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||es.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Mo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Ao();c.forEach((e=>{if(!i.has(e)){const r=na(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):co(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Li.resolve(xo());let o=-1,a=i;return s.next((t=>Li.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Li.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Mo()))).next((e=>({batchId:o,changes:Co(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ci(t)).next((e=>{let t=Io();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Io();return this.indexManager.getCollectionParents(e,i).next((o=>Li.forEach(o,(o=>{const a=function(e,t){return new io(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Ds.newInvalidDocument(r)))}));let n=Io();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&ia(s.mutation,r,es.empty(),_i.now()),yo(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return Li.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(e){return{id:e.id,version:e.version,createTime:qa(e.createTime)}}(t)),Li.resolve()}getNamedQuery(e,t){return Li.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(e){return{name:e.name,query:_c(e.bundledQuery),readTime:qa(e.readTime)}}(t)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.overlays=new Gi(Ci.comparator),this.lr=new Map}getOverlay(e,t){return Li.resolve(this.overlays.get(t))}getOverlays(e,t){const n=xo();return Li.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.lt(e,t,r)})),Li.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.lr.delete(n)),Li.resolve()}getOverlaysForCollection(e,t,n){const r=xo(),i=t.length+1,s=new Ci(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Li.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Gi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=xo(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=xo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Li.resolve(o)}lt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ma(t,n));let i=this.lr.get(t);void 0===i&&(i=Mo(),this.lr.set(t,i)),this.lr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.hr=new Zi(Mc.Pr),this.Ir=new Zi(Mc.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const n=new Mc(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.dr(new Mc(e,t))}Ar(e,t){e.forEach((e=>this.removeReference(e,t)))}Rr(e){const t=new Ci(new Ti([])),n=new Mc(t,e),r=new Mc(t,e+1),i=[];return this.Ir.forEachInRange([n,r],(e=>{this.dr(e),i.push(e.key)})),i}Vr(){this.hr.forEach((e=>this.dr(e)))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new Ci(new Ti([])),n=new Mc(t,e),r=new Mc(t,e+1);let i=Mo();return this.Ir.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Mc(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Mc{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return Ci.comparator(e.key,t.key)||wi(e.gr,t.gr)}static Tr(e,t){return wi(e.gr,t.gr)||Ci.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Zi(Mc.Pr)}checkEmpty(e){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pa(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.yr=this.yr.add(new Mc(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(e,t){return Li.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Sr(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Mc(t,0),r=new Mc(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],(e=>{const t=this.wr(e.gr);i.push(t)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Zi(wi);return t.forEach((e=>{const t=new Mc(e,0),r=new Mc(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,r],(e=>{n=n.add(e.gr)}))})),Li.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const s=new Mc(new Ci(i),0);let o=new Zi(wi);return this.yr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.gr)),!0)}),s),Li.resolve(this.br(o))}br(e){const t=[];return e.forEach((e=>{const n=this.wr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ii(0===this.Dr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Li.forEach(t.mutations,(r=>{const i=new Mc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.yr=n}))}Fn(e){}containsKey(e,t){const n=new Mc(t,0),r=this.yr.firstAfterOrEqual(n);return Li.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Li.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.Cr=e,this.docs=function(){return new Gi(Ci.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Li.resolve(n?n.document.mutableCopy():Ds.newInvalidDocument(t))}getEntries(e,t){let n=To();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ds.newInvalidDocument(e))})),Li.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=To();const s=t.path,o=new Ci(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Oi(Di(o),n)<=0||(r.has(o.key)||yo(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ri()}vr(e,t){return Li.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Lc(this)}getSize(e){return Li.resolve(this.size)}}class Lc extends Cc{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this._r.addEntry(e,r)):this._r.removeEntry(n)})),Li.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.persistence=e,this.Fr=new ko((e=>to(e)),no),this.lastRemoteSnapshotVersion=ki.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Oc,this.targetCount=0,this.Nr=Ic.On()}forEachTarget(e,t){return this.Fr.forEach(((e,n)=>t(n))),Li.resolve()}getLastRemoteSnapshotVersion(e){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Li.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),Li.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Ic(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,Li.resolve()}updateTargetData(e,t){return this.kn(t),Li.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,Li.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(e){return Li.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fr.get(t)||null;return Li.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),Li.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Li.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),Li.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Or.mr(t);return Li.resolve(n)}containsKey(e,t){return Li.resolve(this.Or.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.Lr={},this.overlays={},this.Br=new $i(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Fc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(e){return new Nc(e)}((e=>this.referenceDelegate.Qr(e))),this.serializer=new bc(t),this.Kr=new Dc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new Pc(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){Jr("MemoryPersistence","Starting transaction:",e);const r=new $c(this.Br.next());return this.referenceDelegate.$r(),n(r).next((e=>this.referenceDelegate.Ur(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Wr(e,t){return Li.or(Object.values(this.Lr).map((n=>()=>n.containsKey(e,t))))}}class $c extends Pi{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.Gr=new Oc,this.zr=null}static jr(e){return new Uc(e)}get Hr(){if(this.zr)return this.zr;throw ri()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),Li.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),Li.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach((e=>this.Hr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Hr,(n=>{const r=Ci.fromPath(n);return this.Jr(e,r).next((e=>{e||t.removeEntry(r,ki.min())}))})).next((()=>(this.zr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Jr(e,t).next((e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())}))}Qr(e){return 0}Jr(e,t){return Li.or([()=>Li.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=r}static Qi(e,t){let n=Mo(),r=Mo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Vc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return(0,a.nr)()?8:Fi((0,a.ZQ)())>0?6:4}()}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.zi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.ji(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new Bc;return this.Hi(e,t,n).next((r=>{if(i.result=r,this.$i)return this.Ji(e,t,n,r.size)}))})).next((()=>i.result))}Ji(e,t,n,r){return n.documentReadCount<this.Ui?(Zr()<=o.$b.DEBUG&&Jr("QueryEngine","SDK will not create cache indexes for query:",vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Li.resolve()):(Zr()<=o.$b.DEBUG&&Jr("QueryEngine","Query:",vo(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(Zr()<=o.$b.DEBUG&&Jr("QueryEngine","The SDK decides to create cache indexes for query:",vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lo(t))):Li.resolve())}zi(e,t){if(ao(t))return Li.resolve(null);let n=lo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=po(t,null,"F"),n=lo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Mo(...r);return this.Gi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Yi(t,r);return this.Zi(t,s,i,n.readTime)?this.zi(e,po(t,null,"F")):this.Xi(e,s,t,n)}))))})))))}ji(e,t,n,r){return ao(t)||r.isEqual(ki.min())?Li.resolve(null):this.Gi.getDocuments(e,n).next((i=>{const s=this.Yi(t,i);return this.Zi(t,s,n,r)?Li.resolve(null):(Zr()<=o.$b.DEBUG&&Jr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vo(t)),this.Xi(e,s,t,Ai(r,-1)).next((e=>e)))}))}Yi(e,t){let n=new Zi(bo(e));return t.forEach(((t,r)=>{yo(e,r)&&(n=n.add(r))})),n}Zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(e,t,n){return Zr()<=o.$b.DEBUG&&Jr("QueryEngine","Using full collection scan to execute query:",vo(t)),this.Gi.getDocumentsMatchingQuery(e,t,Ri.min(),n)}Xi(e,t,n,r){return this.Gi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,n,r){this.persistence=e,this.es=t,this.serializer=r,this.ts=new Gi(wi),this.ns=new ko((e=>to(e)),no),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ac(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ts)))}}function Yc(e,t,n,r){return new zc(e,t,n,r)}async function qc(e,t){const n=si(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.os(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Mo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({_s:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Hc(e,t){const n=si(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Li.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ii(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Mo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Kc(e){const t=si(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.qr.getLastRemoteSnapshotVersion(e)))}function Gc(e,t){const n=si(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(ns.EMPTY_BYTE_STRING,ki.min()).withLastLimboFreeSnapshotVersion(ki.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.qr.updateTargetData(e,u))}));let a=To(),c=Mo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Qc(e,s,t.documentUpdates).next((e=>{a=e.us,c=e.cs}))),!r.isEqual(ki.min())){const t=n.qr.getLastRemoteSnapshotVersion(e).next((t=>n.qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Li.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ts=i,e)))}function Qc(e,t,n){let r=Mo(),i=Mo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=To();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ki.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Jr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:r,cs:i}}))}function Xc(e,t){const n=si(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Zc(e,t){const n=si(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.qr.getTargetData(e,t).next((i=>i?(r=i,Li.resolve(r)):n.qr.allocateTargetId(e).next((i=>(r=new wc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(t,e.targetId)),e}))}async function Jc(e,t,n){const r=si(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!ji(e))throw e;Jr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function eu(e,t,n){const r=si(e);let i=ki.min(),s=Mo();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=si(e),i=r.ns.get(n);return void 0!==i?Li.resolve(r.ts.get(i)):r.qr.getTargetData(t,n)}(r,e,lo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.es.getDocumentsMatchingQuery(e,t,n?i:ki.min(),n?s:Mo()))).next((e=>(tu(r,wo(t),e),{documents:e,ls:s})))))}function tu(e,t,n){let r=e.rs.get(t)||ki.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.rs.set(t,r)}class nu{constructor(){this.activeTargetIds=No()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ru{constructor(){this.eo=new nu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new nu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{ro(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Jr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Jr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou=null;function au(){return null===ou?ou=function(){return 268435456+Math.round(2147483648*Math.random())}():ou++,"0x"+ou.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const cu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="WebChannelConnection";class hu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.yo=t+"://"+e.host,this.wo=`projects/${n}/databases/${r}`,this.So="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get bo(){return!1}Do(e,t,n,r,i){const s=au(),o=this.Co(e,t.toUriEncodedString());Jr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(a,r,i),this.Fo(e,o,a,n).then((t=>(Jr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ti("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Mo(e,t,n,r,i,s){return this.Do(e,t,n,r,i)}vo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Co(e,t){const n=cu[e];return`${this.yo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,t,n,r){const i=au();return new Promise(((s,o)=>{const a=new Yr;a.setWithCredentials(!0),a.listenOnce(Ur.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case $r.NO_ERROR:const t=a.getResponseJson();Jr(lu,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case $r.TIMEOUT:Jr(lu,`RPC '${e}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const n=a.getStatus();if(Jr(lu,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(t)>=0?t:oi.UNKNOWN}(t.status);o(new ai(e,t.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Jr(lu,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Jr(lu,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}xo(e,t,n){const r=au(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fr(),o=jr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Wr({})),this.vo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Jr(lu,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new uu({co:t=>{d?Jr(lu,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Jr(lu,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Jr(lu,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},lo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,zr.EventType.OPEN,(()=>{d||(Jr(lu,`RPC '${e}' stream ${r} transport opened.`),f.Vo())})),p(l,zr.EventType.CLOSE,(()=>{d||(d=!0,Jr(lu,`RPC '${e}' stream ${r} transport closed`),f.fo())})),p(l,zr.EventType.ERROR,(t=>{d||(d=!0,ti(lu,`RPC '${e}' stream ${r} transport errored:`,t),f.fo(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),p(l,zr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Jr(lu,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ya[e];if(void 0!==t)return _a(t)}(t),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.fo(new ai(n,i)),l.close()}else Jr(lu,`RPC '${e}' stream ${r} received:`,i),f.po(i)}})),p(o,Vr.STAT_EVENT,(t=>{t.stat===Br.PROXY?Jr(lu,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Br.NOPROXY&&Jr(lu,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.mo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e){return new Va(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n=1e3,r=1.5,i=6e4){this.si=e,this.timerId=t,this.Oo=n,this.No=r,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const t=Math.floor(this.Bo+this.$o()),n=Math.max(0,Date.now()-this.qo),r=Math.max(0,t-n);r>0&&Jr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.qo=Date.now(),e()))),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){null!==this.ko&&(this.ko.skipDelay(),this.ko=null)}cancel(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t,n,r,i,s,o,a){this.si=e,this.Wo=n,this.Go=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new pu(e,t)}Yo(){return 1===this.state||5===this.state||this.Zo()}Zo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&null===this.jo&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,(()=>this.n_())))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,t){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,4!==e?this.Jo.reset():t&&t.code===oi.RESOURCE_EXHAUSTED?(ei(t.toString()),ei("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):t&&t.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}o_(){}auth(){this.state=1;const e=this.__(this.zo),t=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.zo===t&&this.a_(e,n)}),(t=>{e((()=>{const e=new ai(oi.UNKNOWN,"Fetching auth token failed: "+t.message);return this.u_(e)}))}))}a_(e,t){const n=this.__(this.zo);this.stream=this.c_(e,t),this.stream.ho((()=>{n((()=>this.listener.ho()))})),this.stream.Io((()=>{n((()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,(()=>(this.Zo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((e=>{n((()=>this.u_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Xo(){this.state=5,this.Jo.Ko((async()=>{this.state=0,this.start()}))}u_(e){return Jr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return t=>{this.si.enqueueAndForget((()=>this.zo===e?t():(Jr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mu extends gu{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}c_(e,t){return this.connection.xo("Listen",e,t)}onMessage(e){this.Jo.reset();const t=rc(this.serializer,e),n=function(e){if(!("targetChange"in e))return ki.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ki.min():t.readTime?qa(t.readTime):ki.min()}(e);return this.listener.l_(t,n)}h_(e){const t={};t.database=ec(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ro(r)?{documents:oc(e,r)}:{query:ac(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=za(e,t.resumeToken);const r=Ba(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ki.min())>0){n.readTime=Wa(e,t.snapshotVersion.toTimestamp());const r=Ba(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=uc(this.serializer,e);n&&(t.labels=n),this.r_(t)}P_(e){const t={};t.database=ec(this.serializer),t.removeTarget=e,this.r_(t)}}class vu extends gu{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,t){return this.connection.xo("Write",e,t)}onMessage(e){if(ii(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const t=sc(e.writeResults,e.commitTime),n=qa(e.commitTime);return this.listener.d_(n,t)}return ii(!e.writeResults||0===e.writeResults.length),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=ec(this.serializer),this.r_(e)}E_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ic(this.serializer,e)))};this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.V_=!1}m_(){if(this.V_)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,t,n,r){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Do(e,Ka(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(oi.UNKNOWN,e.toString())}))}Mo(e,t,n,r,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Mo(e,Ka(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ai(oi.UNKNOWN,e.toString())}))}terminate(){this.V_=!0,this.connection.terminate()}}class wu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(e){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,"Online"===e&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ei(t),this.y_=!1):Jr("OnlineStateTracker",t)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro((e=>{n.enqueueAndForget((async()=>{Au(this)&&(Jr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=si(e);t.M_.add(4),await ku(t),t.N_.set("Unknown"),t.M_.delete(4),await _u(t)}(this))}))})),this.N_=new wu(n,r)}}async function _u(e){if(Au(e))for(const t of e.x_)await t(!0)}async function ku(e){for(const t of e.x_)await t(!1)}function Eu(e,t){const n=si(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),xu(n)?Cu(n):Ku(n).Zo()&&Su(n,t))}function Tu(e,t){const n=si(e),r=Ku(n);n.F_.delete(t),r.Zo()&&Iu(n,t),0===n.F_.size&&(r.Zo()?r.t_():Au(n)&&n.N_.set("Unknown"))}function Su(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ki.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ku(e).h_(t)}function Iu(e,t){e.L_.xe(t),Ku(e).P_(t)}function Cu(e){e.L_=new Na({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),Ku(e).start(),e.N_.w_()}function xu(e){return Au(e)&&!Ku(e).Yo()&&e.F_.size>0}function Au(e){return 0===si(e).M_.size}function Du(e){e.L_=void 0}async function Ru(e){e.N_.set("Online")}async function Ou(e){e.F_.forEach(((t,n)=>{Su(e,t)}))}async function Mu(e,t){Du(e),xu(e)?(e.N_.D_(t),Cu(e)):e.N_.set("Unknown")}async function Pu(e,t,n){if(e.N_.set("Online"),t instanceof Ma&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.F_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.F_.delete(r),e.L_.removeTarget(r))}(e,t)}catch(n){Jr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Nu(e,n)}else if(t instanceof Ra?e.L_.Ke(t):t instanceof Oa?e.L_.He(t):e.L_.We(t),!n.isEqual(ki.min()))try{const t=await Kc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.L_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.F_.get(r);i&&e.F_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.F_.get(t);if(!r)return;e.F_.set(t,r.withResumeToken(ns.EMPTY_BYTE_STRING,r.snapshotVersion)),Iu(e,t);const i=new wc(r.target,t,n,r.sequenceNumber);Su(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Jr("RemoteStore","Failed to raise snapshot:",t),await Nu(e,t)}}async function Nu(e,t,n){if(!ji(t))throw t;e.M_.add(1),await ku(e),e.N_.set("Offline"),n||(n=()=>Kc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Jr("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await _u(e)}))}function Lu(e,t){return t().catch((n=>Nu(e,n,t)))}async function Fu(e){const t=si(e),n=Gu(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;ju(t);)try{const e=await Xc(t.localStore,r);if(null===e){0===t.v_.length&&n.t_();break}r=e.batchId,$u(t,e)}catch(e){await Nu(t,e)}Uu(t)&&Vu(t)}function ju(e){return Au(e)&&e.v_.length<10}function $u(e,t){e.v_.push(t);const n=Gu(e);n.Zo()&&n.T_&&n.E_(t.mutations)}function Uu(e){return Au(e)&&!Gu(e).Yo()&&e.v_.length>0}function Vu(e){Gu(e).start()}async function Bu(e){Gu(e).R_()}async function Wu(e){const t=Gu(e);for(const n of e.v_)t.E_(n.mutations)}async function zu(e,t,n){const r=e.v_.shift(),i=ga.from(r,t,n);await Lu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Fu(e)}async function Yu(e,t){t&&Gu(e).T_&&await async function(e,t){if(function(e){return ba(e)&&e!==oi.ABORTED}(t.code)){const n=e.v_.shift();Gu(e).e_(),await Lu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Fu(e)}}(e,t),Uu(e)&&Vu(e)}async function qu(e,t){const n=si(e);n.asyncQueue.verifyOperationInProgress(),Jr("RemoteStore","RemoteStore received new credentials");const r=Au(n);n.M_.add(3),await ku(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await _u(n)}async function Hu(e,t){const n=si(e);t?(n.M_.delete(2),await _u(n)):t||(n.M_.add(2),await ku(n),n.N_.set("Unknown"))}function Ku(e){return e.B_||(e.B_=function(e,t,n){const r=si(e);return r.m_(),new mu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{ho:Ru.bind(null,e),Io:Ou.bind(null,e),Eo:Mu.bind(null,e),l_:Pu.bind(null,e)}),e.x_.push((async t=>{t?(e.B_.e_(),xu(e)?Cu(e):e.N_.set("Unknown")):(await e.B_.stop(),Du(e))}))),e.B_}function Gu(e){return e.k_||(e.k_=function(e,t,n){const r=si(e);return r.m_(),new vu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{ho:()=>Promise.resolve(),Io:Bu.bind(null,e),Eo:Yu.bind(null,e),A_:Wu.bind(null,e),d_:zu.bind(null,e)}),e.x_.push((async t=>{t?(e.k_.e_(),await Fu(e)):(await e.k_.stop(),e.v_.length>0&&(Jr("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))}))),e.k_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qu{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Qu(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xu(e,t){if(ei("AsyncQueue",`${t}: ${e}`),ji(e))return new ai(oi.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ci.comparator(t.key,n.key):(e,t)=>Ci.comparator(e.key,t.key),this.keyedMap=Io(),this.sortedSet=new Gi(this.comparator)}static emptySet(e){return new Zu(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zu))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Zu;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.q_=new Gi(Ci.comparator)}track(e){const t=e.doc.key,n=this.q_.get(t);n?0!==e.type&&3===n.type?this.q_=this.q_.insert(t,e):3===e.type&&1!==n.type?this.q_=this.q_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.q_=this.q_.remove(t):1===e.type&&2===n.type?this.q_=this.q_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):ri():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class el{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new el(e,t,Zu.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some((e=>e.G_()))}}class nl{constructor(){this.queries=new ko((e=>mo(e)),go),this.onlineState="Unknown",this.z_=new Set}}async function rl(e,t){const n=si(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.W_()&&t.G_()&&(r=2):(s=new tl,r=t.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(e){const n=Xu(e,`Initialization of query '${vo(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&al(n)}async function il(e,t){const n=si(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.U_.indexOf(t);e>=0&&(s.U_.splice(e,1),0===s.U_.length?i=t.G_()?0:1:!s.W_()&&t.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sl(e,t){const n=si(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.U_)e.H_(i)&&(r=!0);t.K_=i}}r&&al(n)}function ol(e,t,n){const r=si(e),i=r.queries.get(t);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(t)}function al(e){e.z_.forEach((e=>{e.next()}))}var cl,ul;(ul=cl||(cl={})).J_="default",ul.Cache="cache";class ll{constructor(e,t,n){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new el(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache)return!0;if(!this.G_())return!0;const n="Offline"!==t;return(!this.options.ra||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}na(e){e=el.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==cl.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(e){this.key=e}}class dl{constructor(e){this.key=e}}class fl{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Mo(),this.mutatedKeys=Mo(),this.Ia=bo(e),this.Ta=new Zu(this.Ia)}get Ea(){return this.la}da(e,t){const n=t?t.Aa:new Ju,r=t?t.Ta:this.Ta;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=yo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ra(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ia(l,a)>0||c&&this.Ia(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ta:s,Aa:n,Zi:o,mutatedKeys:i}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const s=e.Aa.Q_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ia(e.doc,t.doc))),this.Va(n),r=null!=r&&r;const o=t&&!r?this.ma():[],a=0===this.Pa.size&&this.current&&!r?1:0,c=a!==this.ha;return this.ha=a,0!==s.length||c?{snapshot:new el(this.query,e.Ta,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:o}:{fa:o}}j_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ju,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach((e=>this.la=this.la.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.la=this.la.delete(e))),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Mo(),this.Ta.forEach((e=>{this.ga(e.key)&&(this.Pa=this.Pa.add(e.key))}));const t=[];return e.forEach((e=>{this.Pa.has(e)||t.push(new dl(e))})),this.Pa.forEach((n=>{e.has(n)||t.push(new hl(n))})),t}pa(e){this.la=e.ls,this.Pa=Mo();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return el.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,0===this.ha,this.hasCachedResults)}}class pl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class gl{constructor(e){this.key=e,this.wa=!1}}class ml{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new ko((e=>mo(e)),go),this.Da=new Map,this.Ca=new Set,this.va=new Gi(Ci.comparator),this.Fa=new Map,this.Ma=new Oc,this.xa={},this.Oa=new Map,this.Na=Ic.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function vl(e,t,n=!0){const r=$l(e);let i;const s=r.ba.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await wl(r,t,n,!0),i}async function yl(e,t){const n=$l(e);await wl(n,t,!0,!1)}async function wl(e,t,n,r){const i=await Zc(e.localStore,lo(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await bl(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Eu(e.remoteStore,i),a}async function bl(e,t,n,r,i){e.Ba=(t,n,r)=>async function(e,t,n,r){let i=t.view.da(n);i.Zi&&(i=await eu(e.localStore,t.query,!1).then((({documents:e})=>t.view.da(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return Ml(e,t.targetId,a.fa),a.snapshot}(e,t,n,r);const s=await eu(e.localStore,t,!0),o=new fl(t,s.ls),a=o.da(s.documents),c=Da.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Ml(e,n,u.fa);const l=new pl(t,n,o);return e.ba.set(t,l),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot}async function _l(e,t,n){const r=si(e),i=r.ba.get(t),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter((e=>!go(e,t)))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jc(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tu(r.remoteStore,i.targetId),Rl(r,i.targetId)})).catch(Ni)):(Rl(r,i.targetId),await Jc(r.localStore,i.targetId,!0))}async function kl(e,t){const n=si(e),r=n.ba.get(t),i=n.Da.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tu(n.remoteStore,r.targetId))}async function El(e,t,n){const r=Ul(e);try{const e=await function(e,t){const n=si(e),r=_i.now(),i=t.reduce(((e,t)=>e.add(t.key)),Mo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=To(),c=Mo();return n.ss.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=sa(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new ca(e.key,t,As(t.value.mapValue),Jo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Co(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.xa[e.currentUser.toKey()];r||(r=new Gi(wi)),r=r.insert(t,n),e.xa[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ll(r,e.changes),await Fu(r.remoteStore)}catch(e){const t=Xu(e,"Failed to persist write");n.reject(t)}}async function Tl(e,t){const n=si(e);try{const e=await Gc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fa.get(t);r&&(ii(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.wa=!0:e.modifiedDocuments.size>0?ii(r.wa):e.removedDocuments.size>0&&(ii(r.wa),r.wa=!1))})),await Ll(n,e,t)}catch(e){await Ni(e)}}function Sl(e,t,n){const r=si(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ba.forEach(((n,r)=>{const i=r.view.j_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=si(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.U_)i.j_(t)&&(r=!0)})),r&&al(n)}(r.eventManager,t),e.length&&r.Sa.l_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Il(e,t,n){const r=si(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fa.get(t),s=i&&i.key;if(s){let e=new Gi(Ci.comparator);e=e.insert(s,Ds.newNoDocument(s,ki.min()));const n=Mo().add(s),i=new Aa(ki.min(),new Map,new Gi(wi),e,n);await Tl(r,i),r.va=r.va.remove(s),r.Fa.delete(t),Nl(r)}else await Jc(r.localStore,t,!1).then((()=>Rl(r,t,n))).catch(Ni)}async function Cl(e,t){const n=si(e),r=t.batch.batchId;try{const e=await Hc(n.localStore,t);Dl(n,r,null),Al(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ll(n,e)}catch(e){await Ni(e)}}async function xl(e,t,n){const r=si(e);try{const e=await function(e,t){const n=si(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ii(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Dl(r,t,n),Al(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ll(r,e)}catch(n){await Ni(n)}}function Al(e,t){(e.Oa.get(t)||[]).forEach((e=>{e.resolve()})),e.Oa.delete(t)}function Dl(e,t,n){const r=si(e);let i=r.xa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function Rl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Da.get(t))e.ba.delete(r),n&&e.Sa.ka(r,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Rr(t).forEach((t=>{e.Ma.containsKey(t)||Ol(e,t)}))}function Ol(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);null!==n&&(Tu(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),Nl(e))}function Ml(e,t,n){for(const r of n)r instanceof hl?(e.Ma.addReference(r.key,t),Pl(e,r)):r instanceof dl?(Jr("SyncEngine","Document no longer in limbo: "+r.key),e.Ma.removeReference(r.key,t),e.Ma.containsKey(r.key)||Ol(e,r.key)):ri()}function Pl(e,t){const n=t.key,r=n.path.canonicalString();e.va.get(n)||e.Ca.has(r)||(Jr("SyncEngine","New document in limbo: "+n),e.Ca.add(r),Nl(e))}function Nl(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new Ci(Ti.fromString(t)),r=e.Na.next();e.Fa.set(r,new gl(n)),e.va=e.va.insert(n,r),Eu(e.remoteStore,new wc(lo(oo(n.path)),r,"TargetPurposeLimboResolution",$i.oe))}}async function Ll(e,t,n){const r=si(e),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach(((e,a)=>{o.push(r.Ba(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Vc.Qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Sa.l_(i),await async function(e,t){const n=si(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Li.forEach(t,(t=>Li.forEach(t.ki,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Li.forEach(t.qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!ji(e))throw e;Jr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(e,i)}}}(r.localStore,s))}async function Fl(e,t){const n=si(e);if(!n.currentUser.isEqual(t)){Jr("SyncEngine","User change. New user:",t.toKey());const e=await qc(n.localStore,t);n.currentUser=t,function(e,t){e.Oa.forEach((e=>{e.forEach((e=>{e.reject(new ai(oi.CANCELLED,t))}))})),e.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ll(n,e._s)}}function jl(e,t){const n=si(e),r=n.Fa.get(t);if(r&&r.wa)return Mo().add(r.key);{let e=Mo();const r=n.Da.get(t);if(!r)return e;for(const t of r){const r=n.ba.get(t);e=e.unionWith(r.view.Ea)}return e}}function $l(e){const t=si(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Il.bind(null,t),t.Sa.l_=sl.bind(null,t.eventManager),t.Sa.ka=ol.bind(null,t.eventManager),t}function Ul(e){const t=si(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xl.bind(null,t),t}class Vl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Yc(this.persistence,new Wc,e.initialUser,this.serializer)}createPersistence(e){return new jc(Uc.jr,this.serializer)}createSharedClientState(e){return new ru}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Bl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fl.bind(null,this.syncEngine),await Hu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nl}()}createDatastore(e){const t=fu(e.databaseInfo.databaseId),n=function(e){return new hu(e)}(e.databaseInfo);return function(e,t,n,r){return new yu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new bu(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>Sl(this.syncEngine,e,0)),function(){return su.D()?new su:new iu}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new ml(e,t,n,r,i,s);return o&&(a.La=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=si(e);Jr("RemoteStore","RemoteStore shutting down."),t.M_.add(5),await ku(t),t.O_.shutdown(),t.N_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ei("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Gr.UNAUTHENTICATED,this.clientId=yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Jr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Jr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xu(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Yl(e,t){e.asyncQueue.verifyOperationInProgress(),Jr("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await qc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function ql(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kl(e);Jr("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>qu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>qu(t.remoteStore,n))),e._onlineComponents=t}function Hl(e){return"FirebaseError"===e.name?e.code===oi.FAILED_PRECONDITION||e.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Kl(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Jr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yl(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Hl(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Yl(e,new Vl)}}else Jr("FirestoreClient","Using default OfflineComponentProvider"),await Yl(e,new Vl);return e._offlineComponents}async function Gl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Jr("FirestoreClient","Using user provided OnlineComponentProvider"),await ql(e,e._uninitializedComponentsProvider._online)):(Jr("FirestoreClient","Using default OnlineComponentProvider"),await ql(e,new Bl))),e._onlineComponents}function Ql(e){return Gl(e).then((e=>e.syncEngine))}async function Xl(e){const t=await Gl(e),n=t.eventManager;return n.onListen=vl.bind(null,t.syncEngine),n.onUnlisten=_l.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=yl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=kl.bind(null,t.syncEngine),n}function Zl(e,t,n={}){const r=new ci;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Wl({next:s=>{t.enqueueAndForget((()=>il(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ai(oi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new ll(oo(n.path),s,{includeMetadataChanges:!0,ra:!0});return rl(e,o)}(await Xl(e),e.asyncQueue,t,n,r))),r.promise}function Jl(e,t,n={}){const r=new ci;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Wl({next:n=>{t.enqueueAndForget((()=>il(e,o))),n.fromCache&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new ll(n,s,{includeMetadataChanges:!0,ra:!0});return rl(e,o)}(await Xl(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eh(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const th=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e,t,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rh(e,t,n,r){if(!0===t&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ih(e){if(!Ci.isDocumentKey(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sh(e){if(Ci.isDocumentKey(e))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ri()}function ah(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(e);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eh(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ch({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ch(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new li;switch(e.type){case"firstParty":return new pi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=th.get(e);t&&(Jr("ComponentProvider","Removing Datastore"),th.delete(e),t.terminate())}(this),Promise.resolve()}}function lh(e,t,n,r={}){var i;const s=(e=ah(e,uh))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Gr.MOCK_USER;else{t=(0,a.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Gr(s)}e._authCredentials=new hi(new ui(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hh(this.firestore,e,this._query)}}class dh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dh(this.firestore,e,this._key)}}class fh extends hh{constructor(e,t,n){super(e,t,oo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dh(this.firestore,null,new Ci(e))}withConverter(e){return new fh(this.firestore,e,this._path)}}function ph(e,t,...n){if(e=(0,a.Ku)(e),nh("collection","path",t),e instanceof uh){const r=Ti.fromString(t,...n);return sh(r),new fh(e,null,r)}{if(!(e instanceof dh||e instanceof fh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return sh(r),new fh(e.firestore,null,r)}}function gh(e,t,...n){if(e=(0,a.Ku)(e),1===arguments.length&&(t=yi.newId()),nh("doc","path",t),e instanceof uh){const r=Ti.fromString(t,...n);return ih(r),new dh(e,null,new Ci(r))}{if(!(e instanceof dh||e instanceof fh))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return ih(r),new dh(e.firestore,e instanceof fh?e.converter:null,new Ci(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new pu(this,"async_queue_retry"),this.hu=()=>{const e=du();e&&Jr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Jo.Uo()};const e=du();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=du();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise((()=>{}));const t=new ci;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.su.push(e),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!ji(e))throw e;Jr("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko((()=>this.Tu()))}}Iu(e){const t=this.iu.then((()=>(this.uu=!0,e().catch((e=>{this.au=e,this.uu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw ei("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.uu=!1,e))))));return this.iu=t,t}enqueueAfterDelay(e,t,n){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const r=Qu.createAndSchedule(this,e,t,n,(e=>this.Eu(e)));return this._u.push(r),r}Pu(){this.au&&ri()}verifyOperationInProgress(){}async du(){let e;do{e=this.iu,await e}while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then((()=>{this._u.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._u)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.du()}))}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class vh extends uh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new mh}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bh(this),this._firestoreClient.terminate()}}function yh(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.yU)("firestore");e&&lh(s,...e)}return s}function wh(e){return e._firestoreClient||bh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bh(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new ls(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,eh(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new zl(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _h(ns.fromBase64String(e))}catch(e){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new _h(ns.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ii(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return wi(this._lat,e._lat)||wi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=/^__.*__$/;class Ih{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ca(e,this.data,this.fieldMask,t,this.fieldTransforms):new aa(e,this.data,t,this.fieldTransforms)}}class Ch{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ca(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ri()}}class Ah{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.wu(e),r}Su(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.gu({path:n,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return zh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(0===e.length)throw this.Du("Document fields must not be empty");if(xh(this.fu)&&Sh.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Dh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||fu(e)}Fu(e,t,n,r=!1){return new Ah({fu:e,methodName:t,vu:n,path:Ii.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rh(e){const t=e._freezeSettings(),n=fu(e._databaseId);return new Dh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Oh(e,t,n,r,i,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,i);Uh("Data must be an object, but it was:",o,r);const a=jh(r,o);let c,u;if(s.merge)c=new es(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Vh(t,r,n);if(!o.contains(i))throw new ai(oi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yh(e,i)||e.push(i)}c=new es(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ih(new xs(a),c,u)}class Mh extends Eh{_toFieldTransform(e){if(2!==e.fu)throw 1===e.fu?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mh}}function Ph(e,t,n,r){const i=e.Fu(1,t,n);Uh("Data must be an object, but it was:",i,r);const s=[],o=xs.empty();Hi(r,((e,r)=>{const c=Wh(t,e,n);r=(0,a.Ku)(r);const u=i.Su(c);if(r instanceof Mh)s.push(c);else{const e=Fh(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new es(s);return new Ch(o,c,i.fieldTransforms)}function Nh(e,t,n,r,i,s){const o=e.Fu(1,t,n),c=[Vh(t,r,n)],u=[i];if(s.length%2!=0)throw new ai(oi.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Vh(t,s[a])),u.push(s[a+1]);const l=[],h=xs.empty();for(let f=c.length-1;f>=0;--f)if(!Yh(l,c[f])){const e=c[f];let t=u[f];t=(0,a.Ku)(t);const n=o.Su(e);if(t instanceof Mh)l.push(e);else{const r=Fh(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new es(l);return new Ch(h,d,o.fieldTransforms)}function Lh(e,t,n,r=!1){return Fh(n,e.Fu(r?4:3,t))}function Fh(e,t){if($h(e=(0,a.Ku)(e)))return Uh("Unsupported field value:",t,e),jh(e,t);if(e instanceof Eh)return function(e,t){if(!xh(t.fu))throw t.Du(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Du(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&4!==t.fu)throw t.Du("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fh(i,t.bu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return jo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=_i.fromDate(e);return{timestampValue:Wa(t.serializer,n)}}if(e instanceof _i){const n=new _i(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wa(t.serializer,n)}}if(e instanceof Th)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof _h)return{bytesValue:za(t.serializer,e._byteString)};if(e instanceof dh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Du(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ha(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Du(`Unsupported field value: ${oh(e)}`)}(e,t)}function jh(e,t){const n={};return Ki(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hi(e,((e,r)=>{const i=Fh(r,t.pu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function $h(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof _i||e instanceof Th||e instanceof _h||e instanceof dh||e instanceof Eh)}function Uh(e,t,n){if(!$h(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=oh(n);throw"an object"===r?t.Du(e+" a custom object"):t.Du(e+" "+r)}}function Vh(e,t,n){if((t=(0,a.Ku)(t))instanceof kh)return t._internalPath;if("string"==typeof t)return Wh(e,t);throw zh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Bh=new RegExp("[~\\*/\\[\\]]");function Wh(e,t,n){if(t.search(Bh)>=0)throw zh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kh(...t.split("."))._internalPath}catch(_){throw zh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ai(oi.INVALID_ARGUMENT,a+e+c)}function Yh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Hh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Hh extends qh{data(){return super.data()}}function Kh(e,t){return"string"==typeof t?Wh(e,t):t instanceof kh?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qh{}class Xh extends Qh{}function Zh(e,t,...n){let r=[];t instanceof Qh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof ed)).length,n=e.filter((e=>e instanceof Jh)).length;if(t>1||t>0&&n>0)throw new ai(oi.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Jh extends Xh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Jh(e,t,n)}_apply(e){const t=this._parse(e);return rd(e._query,t),new hh(e.firestore,e.converter,fo(e._query,t))}_parse(e){const t=Rh(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ai(oi.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){nd(o,s);const t=[];for(const n of o)t.push(td(r,e,n));a={arrayValue:{values:t}}}else a=td(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||nd(o,s),a=Lh(n,t,o,"in"===s||"not-in"===s);return Fs.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class ed extends Qh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ed(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:js.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)rd(n,i),n=fo(n,i)}(e._query,t),new hh(e.firestore,e.converter,fo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function td(e,t,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new ai(oi.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!co(t)&&-1!==n.indexOf("/"))throw new ai(oi.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!Ci.isDocumentKey(r))throw new ai(oi.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bs(e,new Ci(r))}if(n instanceof dh)return bs(e,n._key);throw new ai(oi.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function nd(e,t){if(!Array.isArray(e)||0===e.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function rd(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ai(oi.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ai(oi.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class id{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ss(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ri()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Hi(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Th(ss(e.latitude),ss(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=cs(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(us(e));default:return null}}convertTimestamp(e){const t=is(e);return new _i(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);ii(yc(n));const r=new hs(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(t)||ei(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ad extends qh{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Kh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class cd extends ad{data(e={}){return super.data(e)}}class ud{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new od(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new cd(this._firestore,this._userDataWriter,n.key,n,new od(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new cd(e._firestore,e._userDataWriter,n.doc.key,n.doc,new od(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new cd(e._firestore,e._userDataWriter,t.doc.key,t.doc,new od(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:ld(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ld(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hd(e){e=ah(e,dh);const t=ah(e.firestore,vh);return Zl(wh(t),e._key).then((n=>yd(t,e,n)))}class dd extends id{constructor(e){super(),this.firestore=e}convertBytes(e){return new _h(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dh(this.firestore,null,t)}}function fd(e){e=ah(e,hh);const t=ah(e.firestore,vh),n=wh(t),r=new dd(t);return Gh(e._query),Jl(n,e._query).then((n=>new ud(t,r,e,n)))}function pd(e,t,n){e=ah(e,dh);const r=ah(e.firestore,vh),i=sd(e.converter,t,n);return vd(r,[Oh(Rh(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Jo.none())])}function gd(e,t,n,...r){e=ah(e,dh);const i=ah(e.firestore,vh),s=Rh(i);let o;return o="string"==typeof(t=(0,a.Ku)(t))||t instanceof kh?Nh(s,"updateDoc",e._key,t,n,r):Ph(s,"updateDoc",e._key,t),vd(i,[o.toMutation(e._key,Jo.exists(!0))])}function md(e){return vd(ah(e.firestore,vh),[new da(e._key,Jo.none())])}function vd(e,t){return function(e,t){const n=new ci;return e.asyncQueue.enqueueAndForget((async()=>El(await Ql(e),t,n))),n.promise}(wh(e),t)}function yd(e,t,n){const r=n.docs.get(t._key),i=new dd(e);return new ad(e,i,t._key,r,new od(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Qr=e}(i.MF),(0,i.om)(new s.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new vh(new di(e.getProvider("auth-internal")),new mi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hs(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Kr,"4.6.1",e),(0,i.KO)(Kr,"4.6.1","esm2017")}()},4046:function(e,t,n){"use strict";n.d(t,{Am:function(){return j},FA:function(){return O},Fy:function(){return b},I9:function(){return $},Im:function(){return N},Ku:function(){return Y},T9:function(){return v},Tj:function(){return g},Uj:function(){return c},XA:function(){return y},ZQ:function(){return _},bD:function(){return L},cY:function(){return w},eX:function(){return A},g:function(){return R},hp:function(){return U},jZ:function(){return k},lT:function(){return I},lV:function(){return S},nr:function(){return C},sr:function(){return T},tD:function(){return V},u:function(){return u},yU:function(){return m},zW:function(){return x}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function k(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function E(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function T(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(e){return!1}}function A(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=D,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?M(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function M(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(F(n)&&F(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=W(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){"use strict";n.d(t,{C4:function(){return v},EW:function(){return xe},Gc:function(){return me},IG:function(){return Te},IJ:function(){return Me},KR:function(){return Oe},Kh:function(){return ge},Pr:function(){return je},QW:function(){return $e},R1:function(){return Le},X2:function(){return u},bl:function(){return y},fE:function(){return _e},g8:function(){return we},hZ:function(){return A},i9:function(){return Re},ju:function(){return ke},lW:function(){return Be},o5:function(){return c},u4:function(){return x},ux:function(){return Ee},yC:function(){return o}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}class u{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,v();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(l(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),y()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=p,t=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,s=t,p=e}}stop(){this.active&&(h(this),d(this),this.onStop&&this.onStop(),this.active=!1)}}function l(e){return e.value}function h(e){e._trackId++,e._depsLength=0}function d(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f(e.deps[t],e);e.deps.length=e._depsLength}}function f(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let p=!0,g=0;const m=[];function v(){m.push(p),p=!1}function y(){const e=m.pop();p=void 0===e||e}function w(){g++}function b(){g--;while(!g&&k.length)k.shift()()}function _(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&f(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const k=[];function E(e,t,n){w();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&k.push(r.scheduler)))}b()}const T=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},S=new WeakMap,I=Symbol(""),C=Symbol("");function x(e,t,n){if(p&&s){let t=S.get(e);t||S.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=T((()=>t.delete(n)))),_(s,r,void 0)}}function A(e,t,n,i,s,o){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(I)),(0,r.CE)(e)&&c.push(a.get(C)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(I)),(0,r.CE)(e)&&c.push(a.get(C)));break;case"set":(0,r.CE)(e)&&c.push(a.get(I));break}w();for(const r of c)r&&E(r,4,void 0);b()}function D(e,t){const n=S.get(e);return n&&n.get(t)}const R=(0,r.pD)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),M=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,i=this.length;t<i;t++)x(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){v(),w();const n=Ee(this)[t].apply(this,e);return b(),y(),n}})),e}function N(e){(0,r.Bm)(e)||(e=String(e));const t=Ee(this);return x(t,"has",e),t.hasOwnProperty(e)}class L{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?de:he:s?le:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){if(o&&(0,r.$3)(M,t))return Reflect.get(M,t,n);if("hasOwnProperty"===t)return N}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?O.has(t):R(t))?a:(i||x(e,"get",t),s?a:Re(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?ve(a):ge(a):a)}}class F extends L{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=be(s);if(_e(n)||be(n)||(s=Ee(s),n=Ee(n)),!(0,r.cy)(e)&&Re(s)&&!Re(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Ee(i)&&(o?(0,r.$H)(n,s)&&A(e,"set",t,n,s):A(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&O.has(t)||x(e,"has",t),n}ownKeys(e){return x(e,"iterate",(0,r.cy)(e)?"length":I),Reflect.ownKeys(e)}}class j extends L{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const $=new F,U=new j,V=new F(!0),B=e=>e,W=e=>Reflect.getPrototypeOf(e);function z(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ee(e),o=Ee(t);n||((0,r.$H)(t,o)&&x(s,"get",t),x(s,"get",o));const{has:a}=W(s),c=i?B:n?Ie:Se;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],i=Ee(n),s=Ee(e);return t||((0,r.$H)(e,s)&&x(i,"has",e),x(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function q(e,t=!1){return e=e["__v_raw"],!t&&x(Ee(e),"iterate",I),Reflect.get(e,"size",e)}function H(e){e=Ee(e);const t=Ee(this),n=W(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function K(e,t){t=Ee(t);const n=Ee(this),{has:i,get:s}=W(n);let o=i.call(n,e);o||(e=Ee(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.$H)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function G(e){const t=Ee(this),{has:n,get:r}=W(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function Q(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function X(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ee(s),a=t?B:e?Ie:Se;return!e&&x(o,"iterate",I),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Z(e,t,n){return function(...i){const s=this["__v_raw"],o=Ee(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?B:t?Ie:Se;return!t&&x(o,"iterate",u?C:I),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function J(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ee(){const e={get(e){return z(this,e)},get size(){return q(this)},has:Y,add:H,set:K,delete:G,clear:Q,forEach:X(!1,!1)},t={get(e){return z(this,e,!1,!0)},get size(){return q(this)},has:Y,add:H,set:K,delete:G,clear:Q,forEach:X(!1,!0)},n={get(e){return z(this,e,!0)},get size(){return q(this,!0)},has(e){return Y.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!1)},r={get(e){return z(this,e,!0,!0)},get size(){return q(this,!0)},has(e){return Y.call(this,e,!0)},add:J("add"),set:J("set"),delete:J("delete"),clear:J("clear"),forEach:X(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=Z(i,!1,!1),n[i]=Z(i,!0,!1),t[i]=Z(i,!1,!0),r[i]=Z(i,!0,!0)})),[e,n,t,r]}const[te,ne,re,ie]=ee();function se(e,t){const n=t?e?ie:re:e?ne:te;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const oe={get:se(!1,!1)},ae={get:se(!1,!0)},ce={get:se(!0,!1)};const ue=new WeakMap,le=new WeakMap,he=new WeakMap,de=new WeakMap;function fe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:fe((0,r.Zf)(e))}function ge(e){return be(e)?e:ye(e,!1,$,oe,ue)}function me(e){return ye(e,!1,V,ae,le)}function ve(e){return ye(e,!0,U,ce,he)}function ye(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=pe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function we(e){return be(e)?we(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function be(e){return!(!e||!e["__v_isReadonly"])}function _e(e){return!(!e||!e["__v_isShallow"])}function ke(e){return!!e&&!!e["__v_raw"]}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Te(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Se=e=>(0,r.Gv)(e)?ge(e):e,Ie=e=>(0,r.Gv)(e)?ve(e):e;class Ce{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>De(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||De(e,4),Ae(e),e.effect._dirtyLevel>=2&&De(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function xe(e,t,n=!1){let i,s;const o=(0,r.Tn)(e);o?(i=e,s=r.tE):(i=e.get,s=e.set);const a=new Ce(i,s,o||!s,n);return a}function Ae(e){var t;p&&s&&(e=Ee(e),_(s,null!=(t=e.dep)?t:e.dep=T((()=>e.dep=void 0),e instanceof Ce?e:void 0),void 0))}function De(e,t=4,n){e=Ee(e);const r=e.dep;r&&E(r,t,void 0)}function Re(e){return!(!e||!0!==e.__v_isRef)}function Oe(e){return Pe(e,!1)}function Me(e){return Pe(e,!0)}function Pe(e,t){return Re(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Se(e)}get value(){return Ae(this),this._value}set value(e){const t=this.__v_isShallow||_e(e)||be(e);e=t?e:Ee(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Se(e),De(this,4,e))}}function Le(e){return Re(e)?e.value:e}const Fe={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return we(e)?e:new Proxy(e,Fe)}function $e(e){const t=(0,r.cy)(e)?new Array(e.length):{};for(const n in e)t[n]=We(e,n);return t}class Ue{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return D(Ee(this._object),this._key)}}class Ve{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Be(e,t,n){return Re(e)?e:(0,r.Tn)(e)?new Ve(e):(0,r.Gv)(e)&&arguments.length>1?We(e,t,n):Oe(e)}function We(e,t,n){const r=e[t];return Re(r)?r:new Ue(e,t,n)}},6768:function(e,t,n){"use strict";n.d(t,{$u:function(){return $e},$y:function(){return K},CE:function(){return hn},Df:function(){return Ee},EW:function(){return Xn},FK:function(){return Jt},Gt:function(){return bt},Gy:function(){return fe},K9:function(){return zt},Lk:function(){return vn},MZ:function(){return ke},Ng:function(){return bn},OW:function(){return we},Q3:function(){return En},QP:function(){return ge},Qi:function(){return N},RG:function(){return He},Tb:function(){return Ge},WQ:function(){return _t},Wv:function(){return dn},bF:function(){return yn},bo:function(){return ue},dY:function(){return y},eW:function(){return kn},g2:function(){return q},gN:function(){return G},h:function(){return Zn},hi:function(){return Ve},jt:function(){return L},k6:function(){return F},nI:function(){return Mn},nT:function(){return ne},pI:function(){return qe},pM:function(){return Te},pR:function(){return ve},qL:function(){return o},sV:function(){return Fe},uX:function(){return on},v6:function(){return Cn},wB:function(){return ie}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}if((0,i.cy)(e)){const i=[];for(let s=0;s<e.length;s++)i.push(o(e[s],t,n,r));return i}}function a(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;i=i.parent}const c=t.appContext.config.errorHandler;if(c)return(0,r.C4)(),s(c,null,10,[e,o,a]),void(0,r.bl)()}c(e,n,o,i)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=I(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){u||l||(l=!0,v=m.then(x))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),_()}function T(e,t,n=(u?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function S(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>I(e)-I(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++)p[g]();p=null,g=0}}const I=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=I(e)-I(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){l=!1,u=!0,h.sort(C);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,v=null,(h.length||f.length)&&x(e)}}function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.MZ;o&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),t&&(s=n.map(i.bB))}let u;let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function D(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=D(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}let O=null,M=null;function P(e){const t=O;return O=e,M=e&&e.type.__scopeId||null,t}function N(e){M=e}function L(){M=null}function F(e,t=O,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&un(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&un(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function j(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=P(e);let w,b;try{if(4&n.shapeFlag){const e=s||r,t=e;w=Tn(h.call(t,e,d,f,g,p,m)),b=u}else{const e=t;0,w=Tn(e.length>1?e(f,{attrs:u,slots:c,emit:l}):e(f,null)),b=t.props?u:$(u)}}catch(k){rn.length=0,a(k,e,1),w=yn(tn)}let _=w;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(o&&e.some(i.CP)&&(b=U(b,o)),_=_n(_,b,!1,!0))}return n.dirs&&(_=_n(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),w=_,P(y),w}const $=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},U=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function V(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?B(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!R(u,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!R(n,s))return!0}return!1}function W({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const z="components",Y="directives";function q(e,t){return Q(z,e,!0,t)||e}const H=Symbol.for("v-ndc");function K(e){return(0,i.Kg)(e)?Q(z,e,!1)||e:e||H}function G(e){return Q(Y,e)}function Q(e,t,n=!0,r=!1){const s=O||On;if(s){const n=s.type;if(e===z){const e=Gn(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=X(s[e]||n[e],t)||X(s.appContext[e],t);return!o&&r?n:o}}function X(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const Z=e=>e.__isSuspense;function J(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):E(e)}const ee=Symbol.for("v-scx"),te=()=>{{const e=_t(ee);return e}};function ne(e,t){return se(e,null,t)}const re={};function ie(e,t,n){return se(e,t,n)}function se(e,t,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),I()}}const d=On,f=e=>!0===a?e:ce(e,!1===a?1:void 0);let p,g,m=!1,v=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,i.cy)(e)?(v=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,i.Tn)(e)?s(e,d,2):void 0))):p=(0,i.Tn)(e)?t?()=>s(e,d,2):()=>(g&&g(),o(e,d,3,[w])):i.tE,t&&a){const e=p;p=()=>ce(e())}let y,w=e=>{g=T.onStop=()=>{s(e,d,4),g=T.onStop=void 0}};if(Vn){if(w=i.tE,t?n&&o(t,d,3,[p(),v?[]:void 0,w]):p(),"sync"!==c)return i.tE;{const e=te();y=e.__watcherHandles||(e.__watcherHandles=[])}}let _=v?new Array(e.length).fill(re):re;const k=()=>{if(T.active&&T.dirty)if(t){const e=T.run();(a||m||(v?e.some(((e,t)=>(0,i.$H)(e,_[t]))):(0,i.$H)(e,_)))&&(g&&g(),o(t,d,3,[e,_===re?void 0:v&&_[0]===re?[]:_,w]),_=e)}else T.run()};let E;k.allowRecurse=!!t,"sync"===c?E=k:"post"===c?E=()=>Wt(k,d&&d.suspense):(k.pre=!0,d&&(k.id=d.uid),E=()=>b(k));const T=new r.X2(p,i.tE,E),S=(0,r.o5)(),I=()=>{T.stop(),S&&(0,i.TF)(S.effects,T)};return t?n?k():_=T.run():"post"===c?Wt(T.run.bind(T),d&&d.suspense):T.run(),y&&y.push(I),I}function oe(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?ae(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=Ln(this),c=se(s,o.bind(r),n);return a(),c}function ae(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ce(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,(0,r.i9)(e))ce(e.value,t,n);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)ce(e[r],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{ce(e,t,n)}));else if((0,i.Qd)(e))for(const r in e)ce(e[r],t,n);return e}function ue(e,t){if(null===O)return e;const n=Kn(O)||O.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&ce(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function le(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const he=Symbol("_leaveCb"),de=Symbol("_enterCb");function fe(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fe((()=>{e.isMounted=!0})),Ue((()=>{e.isUnmounting=!0})),e}const pe=[Function,Array],ge={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pe,onEnter:pe,onAfterEnter:pe,onEnterCancelled:pe,onBeforeLeave:pe,onLeave:pe,onAfterLeave:pe,onLeaveCancelled:pe,onBeforeAppear:pe,onAppear:pe,onAfterAppear:pe,onAppearCancelled:pe},me={name:"BaseTransition",props:ge,setup(e,{slots:t}){const n=Mn(),i=fe();return()=>{const s=t.default&&Ee(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==tn){0,o=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return be(o);const u=_e(o);if(!u)return be(o);const l=we(u,a,i,n);ke(u,l);const h=n.subTree,d=h&&_e(h);if(d&&d.type!==tn&&!pn(u,d)){const e=we(d,a,i,n);if(ke(d,e),"out-in"===c&&u.type!==tn)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},be(o);"in-out"===c&&u.type!==tn&&(e.delayLeave=(e,t,n)=>{const r=ye(i,d);r[String(d.key)]=d,e[he]=()=>{t(),e[he]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},ve=me;function ye(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function we(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),k=ye(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=v||u}t[he]&&t[he](!0);const i=k[_];i&&pn(e,i)&&i.el[he]&&i.el[he](),E(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||l,r=w||h,i=b||d}let o=!1;const a=e[de]=t=>{o||(o=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e[de]=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[de]&&t[de](!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t[he]=n=>{s||(s=!0,r(),E(n?m:g,[t]),t[he]=void 0,k[i]===e&&delete k[i])};k[i]=e,p?T(p,[t,o]):o()},clone(e){return we(e,t,n,r)}};return S}function be(e){if(Ie(e))return e=_n(e),e.children=null,e}function _e(e){if(!Ie(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,i.Tn)(n.default))return n.default()}}function ke(e,t){6&e.shapeFlag&&e.component?ke(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ee(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Jt?(128&o.patchFlag&&i++,r=r.concat(Ee(o.children,t,a))):(t||o.type!==tn)&&r.push(null!=a?_n(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Te(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const Se=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Ie=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ce(e,t){return(0,i.cy)(e)?e.some((e=>Ce(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function xe(e,t){De(e,"a",t)}function Ae(e,t){De(e,"da",t)}function De(e,t,n=On){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Pe(t,r,n),n){let e=n.parent;while(e&&e.parent)Ie(e.parent.vnode)&&Re(r,t,n,e),e=e.parent}}function Re(e,t,n,r){const s=Pe(t,e,r,!0);Ve((()=>{(0,i.TF)(r[t],s)}),n)}function Oe(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Me(e){return 128&e.shapeFlag?e.ssContent:e}function Pe(e,t,n=On,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const s=Ln(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const Ne=e=>(t,n=On)=>(!Vn||"sp"===e)&&Pe(e,((...e)=>t(...e)),n),Le=Ne("bm"),Fe=Ne("m"),je=Ne("bu"),$e=Ne("u"),Ue=Ne("bum"),Ve=Ne("um"),Be=Ne("sp"),We=Ne("rtg"),ze=Ne("rtc");function Ye(e,t=On){Pe("ec",e,t)}function qe(e,t,n,r){let s;const o=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function He(e,t,n={},r,i){if(O.isCE||O.parent&&Se(O.parent)&&O.parent.isCE)return"default"!==t&&(n.name=t),yn("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),on();const o=s&&Ke(s(n)),a=dn(Jt,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ke(e){return e.some((e=>!fn(e)||e.type!==tn&&!(e.type===Jt&&!Ke(e.children))))?e:null}function Ge(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.rU)(r)]=e[r];return n}const Qe=e=>e?jn(e)?Kn(e)||e.proxy:Qe(e.parent):null,Xe=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qe(e.parent),$root:e=>Qe(e.root),$emit:e=>e.emit,$options:e=>ot(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,b(e.update)}),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>oe.bind(e)}),Ze=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),Je={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ze(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];tt&&(c[t]=0)}}const d=Xe[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Ze(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||Ze(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(Xe,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function et(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let tt=!0;function nt(e){const t=ot(e),n=e.proxy,s=e.ctx;tt=!1,t.beforeCreate&&it(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:k,render:E,renderTracked:T,renderTriggered:S,errorCaptured:I,serverPrefetch:C,expose:x,inheritAttrs:A,components:D,directives:R,filters:O}=t,M=null;if(h&&rt(h,s,M),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(tt=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=Xn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)st(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{bt(t,e[t])}))}function P(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&it(d,e,"c"),P(Le,f),P(Fe,p),P(je,g),P($e,m),P(xe,v),P(Ae,y),P(Ye,I),P(ze,T),P(We,S),P(Ue,b),P(Ve,k),P(Be,C),(0,i.cy)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.tE&&(e.render=E),null!=A&&(e.inheritAttrs=A),D&&(e.components=D),R&&(e.directives=R)}function rt(e,t,n=i.tE){(0,i.cy)(e)&&(e=ht(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?_t(n.from||s,n.default,!0):_t(n.from||s):_t(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function it(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function st(e,t,n,r){const s=r.includes(".")?ae(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&ie(s,n)}else if((0,i.Tn)(e))ie(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>st(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&ie(s,r,e)}else 0}function ot(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>at(u,e,a,!0))),at(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function at(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&at(e,s,n,!0),i&&i.forEach((t=>at(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ct[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ct={data:ut,props:pt,emits:pt,methods:ft,computed:ft,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:ft,directives:ft,watch:gt,provide:ut,inject:lt};function ut(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function lt(e,t){return ft(ht(e),ht(t))}function ht(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function dt(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function pt(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),et(e),et(null!=t?t:{})):t}function gt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=dt(e[r],t[r]);return n}function mt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vt=0;function yt(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=mt(),o=new WeakSet;let a=!1;const c=s.app={_uid:vt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Jn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=yn(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Kn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=wt;wt=c;try{return e()}finally{wt=t}}};return c}}let wt=null;function bt(e,t){if(On){let n=On.provides;const r=On.parent&&On.parent.provides;r===n&&(n=On.provides=Object.create(r)),n[e]=t}else 0}function _t(e,t,n=!1){const r=On||O;if(r||wt){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:wt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}const kt={},Et=()=>Object.create(kt),Tt=e=>Object.getPrototypeOf(e)===kt;function St(e,t,n,i=!1){const s={},o=Et();e.propsDefaults=Object.create(null),Ct(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:(0,r.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function It(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ct(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=xt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(R(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=xt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e.attrs,"set","")}function Ct(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:R(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=xt(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function xt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Ln(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function At(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=At(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);Dt(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(Dt(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=Mt(Boolean,r.type),n=Mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function Dt(e){return"$"!==e[0]&&!(0,i.SU)(e)}function Rt(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function Ot(e,t){return Rt(e)===Rt(t)}function Mt(e,t){return(0,i.cy)(t)?t.findIndex((t=>Ot(t,e))):(0,i.Tn)(t)&&Ot(t,e)?0:-1}const Pt=e=>"_"===e[0]||"$stable"===e,Nt=e=>(0,i.cy)(e)?e.map(Tn):[Tn(e)],Lt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>Nt(t(...e))),n);return r._c=!1,r},Ft=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Pt(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=Lt(s,n,r);else if(null!=n){0;const e=Nt(n);t[s]=()=>e}}},jt=(e,t)=>{const n=Nt(t);e.slots.default=()=>n},$t=(e,t)=>{const n=e.slots=Et();if(32&e.vnode.shapeFlag){const e=t._;e?((0,i.X$)(n,t),(0,i.yQ)(n,"_",e,!0)):Ft(t,n)}else t&&jt(e,t)},Ut=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.X$)(s,t),n||1!==e||delete s._):(o=!t.$stable,Ft(t,s)),a=t}else t&&(jt(e,t),a={default:1});if(o)for(const i in s)Pt(i)||null!=a[i]||delete s[i]};function Vt(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>Vt(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(Se(o)&&!a)return;const c=4&o.shapeFlag?Kn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.$3)(p,h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Wt(r,n)):r()}else 0}}function Bt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Wt=J;function zt(e){return Yt(e)}function Yt(e,t){Bt();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,v=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!pn(e,t)&&(r=Z(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case en:y(e,t,n,r);break;case tn:w(e,t,n,r);break;case nn:null==e&&_(t,n,r,o);break;case Jt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?N(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&Vt(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?x(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},x=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&m?d(f,e.children):16&m&&D(e.children,f,null,r,o,qt(e,u),l,h),y&&le(e,null,r,"created"),A(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(f,t,null,g[t],u,e.children,r,o,X);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&xn(p,r,e)}y&&le(e,null,r,"beforeMount");const w=Kt(o,v);w&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||y)&&Wt((()=>{p&&xn(p,r,e),w&&v.enter(f),y&&le(e,null,r,"mounted")}),o)},A=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Sn(e[u]):Tn(e[u]);v(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Ht(n,!1),(m=g.onVnodeBeforeUpdate)&&xn(m,n,t,e),f&&le(t,e,n,"beforeUpdate"),n&&Ht(n,!0),h?O(e.dynamicChildren,h,u,n,r,qt(t,s),o):c||B(e,t,u,null,n,r,qt(t,s),o,!1),l>0){if(16&l)M(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||M(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Wt((()=>{m&&xn(m,n,t,e),f&&le(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Jt||!pn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},M=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}"value"in r&&a(e,"value",n.value,r.value,c)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),D(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Gt(e,t,!0)):B(e,t,n,d,i,o,a,c,l)},N=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):L(t,n,r,i,s,o,c):F(e,t,c)},L=(e,t,n,r,i,s,o)=>{const a=e.component=Rn(e,r,i);if(Ie(e)&&(a.ctx.renderer=te),Bn(a),a.asyncDep){if(i&&i.registerDep(a,$),!e.el){const e=a.subTree=yn(tn);w(null,e,t,n)}}else $(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(V(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,k(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},$=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=Xt(e);if(n)return t&&(t.el=l.el,U(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Ht(e,!1),t?(t.el=l.el,U(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&xn(h,s,t,l),Ht(e,!0);const p=j(e);0;const g=e.subTree;e.subTree=p,v(g,p,f(g.el),Z(g),e,o,a),t.el=p.el,null===d&&W(e,p.el),r&&Wt(r,o),(h=t.props&&t.props.onVnodeUpdated)&&Wt((()=>xn(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=Se(t);if(Ht(e,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&xn(r,d,t),Ht(e,!0),c&&re){const n=()=>{e.subTree=j(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=j(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&Wt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Wt((()=>xn(r,d,e)),o)}(256&t.shapeFlag||d&&Se(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Wt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.X2(u,i.tE,(()=>b(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.id=e.uid,Ht(e,!0),h()},U=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,It(e,t.props,i,n),Ut(e,t.children,n),(0,r.C4)(),T(e),(0,r.bl)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void Y(u,h,n,r,i,s,o,a,c);if(256&f)return void z(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?Y(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&D(h,n,r,i,s,o,a,c))},z=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Sn(t[f]):Tn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):D(t,n,r,s,o,a,c,u,d)},Y=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Sn(t[l]):Tn(t[l]);if(!pn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Sn(t[f]):Tn(t[f]);if(!pn(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?Sn(t[l]):Tn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?Sn(t[l]):Tn(t[l]);null!=e.key&&m.set(e.key,l)}let y,w=0;const b=f-g+1;let _=!1,k=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=f;y++)if(0===E[y-g]&&pn(r,t[y])){i=y;break}void 0===i?H(r,s,o,!0):(E[i-g]=l+1,i>=k?k=i:_=!0,v(r,t[i],n,null,s,o,a,c,u),w++)}const T=_?Qt(E):i.Oj;for(y=T.length-1,l=b-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?v(null,i,n,d,s,o,a,c,u):_&&(y<0||l!==T[y]?q(i,n,d,2):y--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void q(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Jt){s(o,t,n);for(let e=0;e<u.length;e++)q(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===nn)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Wt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Vt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!Se(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&xn(g,t,e),6&l)Q(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&le(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Jt||h>0&&64&h)?X(u,t,n,!1,!0):(s===Jt&&384&h||!i&&16&l)&&X(c,t,n),r&&K(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Wt((()=>{g&&xn(g,t,e),f&&le(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Jt)return void G(n,r);if(t===nn)return void I(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},G=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&Wt(c,t),Wt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let J=!1;const ee=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),J||(J=!0,T(),S(),J=!1),t._vnode=e},te={p:v,um:H,m:q,r:K,mt:L,mc:D,pc:B,pbc:O,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:yt(ee,ne)}}function qt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Kt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Sn(s[i]),t.el=e.el),n||Gt(e,t)),t.type===en&&(t.el=e.el)}}function Qt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function Xt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xt(t)}const Zt=e=>e.__isTeleport;const Jt=Symbol.for("v-fgt"),en=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),nn=Symbol.for("v-stc"),rn=[];let sn=null;function on(e=!1){rn.push(sn=e?null:[])}function an(){rn.pop(),sn=rn[rn.length-1]||null}let cn=1;function un(e){cn+=e}function ln(e){return e.dynamicChildren=cn>0?sn||i.Oj:null,an(),cn>0&&sn&&sn.push(e),e}function hn(e,t,n,r,i,s){return ln(vn(e,t,n,r,i,s,!0))}function dn(e,t,n,r,i){return ln(yn(e,t,n,r,i,!0))}function fn(e){return!!e&&!0===e.__v_isVNode}function pn(e,t){return e.type===t.type&&e.key===t.key}const gn=({key:e})=>null!=e?e:null,mn=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:O,r:e,k:t,f:!!n}:e:null);function vn(e,t=null,n=null,r=0,s=null,o=(e===Jt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gn(t),ref:t&&mn(t),scopeId:M,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:O};return c?(In(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),cn>0&&!a&&sn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&sn.push(u),u}const yn=wn;function wn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==H||(e=tn),fn(e)){const r=_n(e,t,!0);return n&&In(r,n),cn>0&&!a&&sn&&(6&r.shapeFlag?sn[sn.indexOf(e)]=r:sn.push(r)),r.patchFlag|=-2,r}if(Qn(e)&&(e=e.__vccOpts),t){t=bn(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:Z(e)?128:Zt(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return vn(e,t,n,s,o,c,a,!0)}function bn(e){return e?(0,r.ju)(e)||Tt(e)?(0,i.X$)({},e):e:null}function _n(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=e,l=t?Cn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&gn(l),ref:t&&t.ref?n&&o?(0,i.cy)(o)?o.concat(mn(t)):[o,mn(t)]:mn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Jt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_n(e.ssContent),ssFallback:e.ssFallback&&_n(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&(h.transition=u.clone(h)),h}function kn(e=" ",t=0){return yn(en,null,e,t)}function En(e="",t=!1){return t?(on(),dn(tn,null,e)):yn(tn,null,e)}function Tn(e){return null==e||"boolean"===typeof e?yn(tn):(0,i.cy)(e)?yn(Jt,null,e.slice()):"object"===typeof e?Sn(e):yn(en,null,String(e))}function Sn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:_n(e)}function In(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),In(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Tt(t)?3===r&&O&&(1===O.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=O}}else(0,i.Tn)(t)?(t={default:t,_ctx:O},n=32):(t=String(t),64&r?(n=16,t=[kn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function xn(e,t,n,r=null){o(e,t,7,[n,r])}const An=mt();let Dn=0;function Rn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||An,a={uid:Dn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:At(s,o),emitsOptions:D(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let On=null;const Mn=()=>On||O;let Pn,Nn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Pn=t("__VUE_INSTANCE_SETTERS__",(e=>On=e)),Nn=t("__VUE_SSR_SETTERS__",(e=>Vn=e))}const Ln=e=>{const t=On;return Pn(e),e.scope.on(),()=>{e.scope.off(),Pn(t)}},Fn=()=>{On&&On.scope.off(),Pn(null)};function jn(e){return 4&e.vnode.shapeFlag}let $n,Un,Vn=!1;function Bn(e,t=!1){t&&Nn(t);const{props:n,children:r}=e.vnode,i=jn(e);St(e,n,i,t),$t(e,r);const s=i?Wn(e,t):void 0;return t&&Nn(!1),s}function Wn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Je);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Hn(e):null,c=Ln(e);(0,r.C4)();const u=s(o,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then(Fn,Fn),t)return u.then((n=>{zn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else zn(e,u,t)}else Yn(e,t)}function zn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Yn(e,n)}function Yn(e,t,n){const s=e.type;if(!e.render){if(!t&&$n&&!s.render){const t=s.template||ot(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=$n(t,c)}}e.render=s.render||i.tE,Un&&Un(e)}{const t=Ln(e);(0,r.C4)();try{nt(e)}finally{(0,r.bl)(),t()}}}const qn={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function Hn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,qn),slots:e.slots,emit:e.emit,expose:t}}function Kn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in Xe?Xe[n](e):void 0},has(e,t){return t in e||t in Xe}}))}function Gn(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function Qn(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const Xn=(e,t)=>{const n=(0,r.EW)(e,t,Vn);return n};function Zn(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?fn(t)?yn(e,null,[t]):yn(e,t):yn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&fn(n)&&(n=[n]),yn(e,t,n))}const Jn="3.4.27"},5130:function(e,t,n){"use strict";n.d(t,{D$:function(){return _e},Ef:function(){return Ce},Jo:function(){return ye},eB:function(){return p},jR:function(){return Ee}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,w(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),v=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},y=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function w(e){const t={};for(const i in e)i in g||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=b(s),w=m&&m[0],_=m&&m[1],{onBeforeEnter:S,onEnter:C,onEnterCancelled:x,onLeave:A,onLeaveCancelled:R,onBeforeAppear:O=S,onAppear:M=C,onAppearCancelled:P=x}=t,N=(e,t,n)=>{E(e,t?h:c),E(e,t?l:a),n&&n()},L=(e,t)=>{e._isLeaving=!1,E(e,d),E(e,p),E(e,f),t&&t()},F=e=>(t,n)=>{const i=e?M:C,s=()=>N(t,e,n);v(i,[t,s]),T((()=>{E(t,e?u:o),k(t,e?h:c),y(i)||I(t,r,w,s)}))};return(0,i.X$)(t,{onBeforeEnter(e){v(S,[e]),k(e,o),k(e,a)},onBeforeAppear(e){v(O,[e]),k(e,u),k(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>L(e,t);k(e,d),k(e,f),D(),T((()=>{e._isLeaving&&(E(e,d),k(e,p),y(A)||I(e,r,_,n))})),v(A,[e,n])},onEnterCancelled(e){N(e,!1),v(x,[e])},onAppearCancelled(e){N(e,!0),v(P,[e])},onLeaveCancelled(e){L(e),v(R,[e])}})}function b(e){if(null==e)return null;if((0,i.Gv)(e))return[_(e.enter),_(e.leave)];{const t=_(e);return[t,t]}}function _(e){const t=(0,i.Ro)(e);return t}function k(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function T(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function I(e,t,n,r){const i=e._endId=++S,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=C(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function C(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=x(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=x(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:g}}function x(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>A(t)+A(e[n]))))}function A(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function D(){return document.body.offsetHeight}function R(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const O=Symbol("_vod"),M=Symbol("_vsh");const P=Symbol("");const N=/(^|;)\s*display\s*:/;function L(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&j(r,t,"")}else for(const e in t)null==n[e]&&j(r,e,"");for(const e in n)"display"===e&&(o=!0),j(r,e,n[e])}else if(s){if(t!==n){const e=r[P];e&&(n+=";"+e),r.cssText=n,o=N.test(n)}}else t&&e.removeAttribute("style");O in e&&(e[O]=o?r.display:"",e[M]&&(r.display="none"))}const F=/\s*!important$/;function j(e,t,n){if((0,i.cy)(n))n.forEach((n=>j(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=V(e,t);F.test(n)?e.setProperty((0,i.Tg)(r),n.replace(F,""),"important"):e[r]=n}}const $=["Webkit","Moz","ms"],U={};function V(e,t){const n=U[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return U[t]=r;r=(0,i.ZH)(r);for(let i=0;i<$.length;i++){const n=$[i]+r;if(n in e)return U[t]=n}return t}const B="http://www.w3.org/1999/xlink";function W(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(B,t.slice(6,t.length)):e.setAttributeNS(B,t,n);else{const r=(0,i.J$)(t);null==n||r&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function z(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?e.getAttribute("value")||"":e.value,i=null==n?"":n;return r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),void(e._value=n)}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function Y(e,t,n,r){e.addEventListener(t,n,r)}function q(e,t,n,r){e.removeEventListener(t,n,r)}const H=Symbol("_vei");function K(e,t,n,r,i=null){const s=e[H]||(e[H]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=Q(t);if(r){const o=s[t]=ee(r,i);Y(e,n,o,a)}else o&&(q(e,n,o,a),s[t]=void 0)}}const G=/(?:Once|Passive|Capture)$/;function Q(e){let t;if(G.test(e)){let n;t={};while(n=e.match(G))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let X=0;const Z=Promise.resolve(),J=()=>X||(Z.then((()=>X=0)),X=Date.now());function ee(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(te(e,n.value),t,5,[e])};return n.value=e,n.attached=J(),n}function te(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,re=(e,t,n,r,s,o,a,c,u)=>{const l="svg"===s;"class"===t?R(e,r,l):"style"===t?L(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||K(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ie(e,t,r,l))?z(e,t,r,o,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),W(e,t,r,l))};function ie(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ne(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ne(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const se=new WeakMap,oe=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),ue={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(o[0].el,n.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(de);D(),r.forEach((e=>{const n=e.el,r=n.style;k(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ae]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ae]=null,E(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(e),u=w(c);let l=c.tag||r.FK;if(o=[],a)for(let e=0;e<a.length;e++){const t=a[e];t.el&&t.el instanceof Element&&(o.push(t),(0,r.MZ)(t,(0,r.OW)(t,u,i,n)),se.set(t,t.el.getBoundingClientRect()))}a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,i,n))}return(0,r.bF)(l,null,a)}}};ue.props;function le(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function he(e){oe.set(e,e.el.getBoundingClientRect())}function de(e){const t=se.get(e),n=oe.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function fe(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=C(r);return s.removeChild(r),o}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ge(e){e.target.composing=!0}function me(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ve=Symbol("_assign"),ye={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ve]=pe(s);const o=r||s.props&&"number"===s.props.type;Y(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[ve](r)})),n&&Y(e,"change",(()=>{e.value=e.value.trim()})),t||(Y(e,"compositionstart",ge),Y(e,"compositionend",me),Y(e,"change",me))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[ve]=pe(o),e.composing)return;const a=!s&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,i.bB)(e.value),c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}};const we=["ctrl","shift","alt","meta"],be={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>we.some((n=>e[`${n}Key`]&&!t.includes(n)))},_e=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=be[t[e]];if(r&&r(n,t))return}return e(n,...r)})},ke={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ee=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return t.some((e=>e===r||ke[e]===r))?e(n):void 0})},Te=(0,i.X$)({patchProp:re},l);let Se;function Ie(){return Se||(Se=(0,r.K9)(Te))}const Ce=(...e)=>{const t=Ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ae(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,xe(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function xe(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Ae(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){"use strict";n.d(t,{$3:function(){return f},$H:function(){return F},BH:function(){return Y},BX:function(){return re},Bm:function(){return _},C4:function(){return X},CE:function(){return g},CP:function(){return u},DY:function(){return j},Gv:function(){return k},J$:function(){return ee},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return O},Qd:function(){return C},Ro:function(){return V},SU:function(){return A},TF:function(){return h},Tg:function(){return P},Tn:function(){return w},Tr:function(){return q},We:function(){return W},X$:function(){return l},Y2:function(){return te},ZH:function(){return N},Zf:function(){return I},_B:function(){return Z},bB:function(){return U},cy:function(){return p},gd:function(){return y},pD:function(){return r},rU:function(){return L},tE:function(){return o},u3:function(){return ie},vM:function(){return m},v_:function(){return se},yI:function(){return x},yL:function(){return E},yQ:function(){return $}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),v=e=>"[object Date]"===S(e),y=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,b=e=>"string"===typeof e,_=e=>"symbol"===typeof e,k=e=>null!==e&&"object"===typeof e,E=e=>(k(e)||w(e))&&w(e.then)&&w(e.catch),T=Object.prototype.toString,S=e=>T.call(e),I=e=>S(e).slice(8,-1),C=e=>"[object Object]"===S(e),x=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},R=/-(\w)/g,O=D((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),M=/\B([A-Z])/g,P=D((e=>e.replace(M,"-$1").toLowerCase())),N=D((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=D((e=>{const t=e?`on${N(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),j=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t},V=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const W=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",Y=r(z);function q(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=b(r)?Q(r):q(r);if(i)for(const e in i)t[e]=i[e]}return t}if(b(e)||k(e))return e}const H=/;(?![^(]*\))/g,K=/:([^]+)/,G=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(G,"").split(H).forEach((e=>{if(e){const n=e.split(K);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(b(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Z(e){if(!e)return null;let{class:t,style:n}=e;return t&&!b(t)&&(e.class=X(t)),n&&(e.style=q(n)),e}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=r(J);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=re(e[r],t[r]);return n}function re(e,t){if(e===t)return!0;let n=v(e),r=v(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=_(e),r=_(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&ne(e,t);if(n=k(e),r=k(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!re(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex((e=>re(e,t)))}const se=e=>b(e)?e:null==e?"":p(e)||k(e)&&(e.toString===T||!w(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:_(t)?ae(t):!k(t)||p(t)||C(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},5140:function(){(function(){function e(e,t){e.addEventListener("click",(function(){n(t)}))}function t(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout((function(){n?e.success():e.error()}),1)}catch(r){setTimeout((function(){e.error(r)}),1)}document.body.removeChild(t)}function n(e){navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,(function(){t(e)})):t(e)}function r(e){window.getSelection().selectAllChildren(e)}function i(e){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},n="data-prismjs-";for(var r in t){var i=n+r,s=e;while(s&&!s.hasAttribute(i))s=s.parentElement;s&&(t[r]=s.getAttribute(i))}return t}"undefined"!==typeof Prism&&"undefined"!==typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(t){var n=t.element,s=i(n),o=document.createElement("button");o.className="copy-to-clipboard-button",o.setAttribute("type","button");var a=document.createElement("span");return o.appendChild(a),u("copy"),e(o,{getText:function(){return n.textContent},success:function(){u("copy-success"),c()},error:function(){u("copy-error"),setTimeout((function(){r(n)}),1),c()}}),o;function c(){setTimeout((function(){u("copy")}),s["copy-timeout"])}function u(e){a.textContent=s[e],o.setAttribute("data-copy-state",e)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))})()},7316:function(){(function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var r=t.querySelector(".line-numbers-rows");if(r){var i=parseInt(t.getAttribute("data-start"),10)||1,s=i+(r.children.length-1);n<i&&(n=i),n>s&&(n=s);var o=n-i;return r.children[o]}}},resize:function(e){i([e])},assumeViewportIndependence:!0},r=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,i(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(n){if(n.code){var r=n.element,s=r.parentNode;if(s&&/pre/i.test(s.nodeName)&&!r.querySelector(".line-numbers-rows")&&Prism.util.isActive(r,e)){r.classList.remove(e),s.classList.add(e);var o,a=n.code.match(t),c=a?a.length+1:1,u=new Array(c+1).join("<span></span>");o=document.createElement("span"),o.setAttribute("aria-hidden","true"),o.className="line-numbers-rows",o.innerHTML=u,s.hasAttribute("data-start")&&(s.style.counterReset="linenumber "+(parseInt(s.getAttribute("data-start"),10)-1)),n.element.appendChild(o),i([s]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function i(e){if(e=e.filter((function(e){var t=s(e),n=t["white-space"];return"pre-wrap"===n||"pre-line"===n})),0!=e.length){var n=e.map((function(e){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows");if(n&&r){var i=e.querySelector(".line-numbers-sizer"),s=n.textContent.split(t);i||(i=document.createElement("span"),i.className="line-numbers-sizer",n.appendChild(i)),i.innerHTML="0",i.style.display="block";var o=i.getBoundingClientRect().height;return i.innerHTML="",{element:e,lines:s,lineHeights:[],oneLinerHeight:o,sizer:i}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,r=e.lineHeights,i=e.oneLinerHeight;r[n.length-1]=void 0,n.forEach((function(e,n){if(e&&e.length>1){var s=t.appendChild(document.createElement("span"));s.style.display="block",s.textContent=e}else r[n]=i}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,r=0,i=0;i<n.length;i++)void 0===n[i]&&(n[i]=t.children[r++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}function s(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null}})()},9228:function(){(function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document)if(Prism.plugins.toolbar){var e={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",sh:"Shell",basic:"BASIC",bbcode:"BBcode",bbj:"BBj",bnf:"BNF",rbnf:"RBNF",bqn:"BQN",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cilkc:"Cilk/C","cilk-c":"Cilk/C",cilkcpp:"Cilk/C++","cilk-cpp":"Cilk/C++",cilk:"Cilk/C++",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",metafont:"METAFONT",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",res:"ReScript",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (SCSS)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wgsl:"WGSL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",(function(t){var n=t.element.parentNode;if(n&&/pre/i.test(n.nodeName)){var r=n.getAttribute("data-language")||e[t.language]||s(t.language);if(r){var i=document.createElement("span");return i.textContent=r,i}}function s(e){return e?(e.substring(0,1).toUpperCase()+e.substring(1)).replace(/s(?=cript)/,"S"):e}}))}else console.warn("Show Languages plugin loaded before Toolbar plugin.")})()},924:function(e,t,n){n(4114),function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var r=Prism.plugins.toolbar.registerButton=function(n,r){var i;i="function"===typeof r?r:function(e){var t;return"function"===typeof r.onClick?(t=document.createElement("button"),t.type="button",t.addEventListener("click",(function(){r.onClick.call(this,e)}))):"string"===typeof r.url?(t=document.createElement("a"),t.href=r.url):t=document.createElement("span"),r.className&&t.classList.add(r.className),t.textContent=r.text,t},n in t?console.warn('There is a button with the key "'+n+'" registered already.'):e.push(t[n]=i)},i=Prism.plugins.toolbar.hook=function(r){var i=r.element.parentNode;if(i&&/pre/i.test(i.nodeName)&&!i.parentNode.classList.contains("code-toolbar")){var o=document.createElement("div");o.classList.add("code-toolbar"),i.parentNode.insertBefore(o,i),o.appendChild(i);var a=document.createElement("div");a.classList.add("toolbar");var c=e,u=s(r.element);u&&(c=u.map((function(e){return t[e]||n}))),c.forEach((function(e){var t=e(r);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),a.appendChild(n)}})),o.appendChild(a)}};r("label",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,r,i=t.getAttribute("data-label");try{r=document.querySelector("template#"+i)}catch(s){}return r?n=r.content:(t.hasAttribute("data-url")?(n=document.createElement("a"),n.href=t.getAttribute("data-url")):n=document.createElement("span"),n.textContent=i),n}})),Prism.hooks.add("complete",i)}function s(e){while(e){var t=e.getAttribute("data-toolbar-order");if(null!=t)return t=t.trim(),t.length?t.split(/\s*,\s*/g):[];e=e.parentElement}}}()},1017:function(e,t,n){n(4114);var r="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++n}),e["__id"]},clone:function e(t,n){var r,s;switch(n=n||{},i.util.type(t)){case"Object":if(s=i.util.objId(t),n[s])return n[s];for(var o in r={},n[s]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return s=i.util.objId(t),n[s]?n[s]:(r=[],n[s]=r,t.forEach((function(t,i){r[i]=e(t,n)})),r);default:return t}},getLanguage:function(e){while(e){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){var r="no-"+t;while(e){var i=e.classList;if(i.contains(t))return!0;if(i.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||i.languages;var s=r[e],o={};for(var a in s)if(s.hasOwnProperty(a)){if(a==t)for(var c in n)n.hasOwnProperty(c)&&(o[c]=n[c]);n.hasOwnProperty(a)||(o[a]=s[a])}var u=r[e];return r[e]=o,i.languages.DFS(i.languages,(function(t,n){n===u&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,s){s=s||{};var o=i.util.objId;for(var a in t)if(t.hasOwnProperty(a)){n.call(t,a,t[a],r||a);var c=t[a],u=i.util.type(c);"Object"!==u||s[o(c)]?"Array"!==u||s[o(c)]||(s[o(c)]=!0,e(c,n,a,s)):(s[o(c)]=!0,e(c,n,null,s))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var s,o=0;s=r.elements[o++];)i.highlightElement(s,!0===t,r.callback)},highlightElement:function(t,n,r){var s=i.util.getLanguage(t),o=i.languages[s];i.util.setLanguage(t,s);var a=t.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&i.util.setLanguage(a,s);var c=t.textContent,u={element:t,language:s,grammar:o,code:c};function l(e){u.highlightedCode=e,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),r&&r.call(u.element)}if(i.hooks.run("before-sanity-check",u),a=u.element.parentElement,a&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!u.code)return i.hooks.run("complete",u),void(r&&r.call(u.element));if(i.hooks.run("before-highlight",u),u.grammar)if(n&&e.Worker){var h=new Worker(i.filename);h.onmessage=function(e){l(e.data)},h.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else l(i.highlight(u.code,u.grammar,u.language));else l(i.util.encode(u.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(i.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),s.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var i=new c;return u(i,i.head,e),a(e,i,t,i.head,0),h(i)},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}},Token:s};function s(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function o(e,t,n,r){e.lastIndex=t;var i=e.exec(n);if(i&&r&&i[1]){var s=i[1].length;i.index+=s,i[0]=i[0].slice(s)}return i}function a(e,t,n,r,c,h){for(var d in n)if(n.hasOwnProperty(d)&&n[d]){var f=n[d];f=Array.isArray(f)?f:[f];for(var p=0;p<f.length;++p){if(h&&h.cause==d+","+p)return;var g=f[p],m=g.inside,v=!!g.lookbehind,y=!!g.greedy,w=g.alias;if(y&&!g.pattern.global){var b=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,b+"g")}for(var _=g.pattern||g,k=r.next,E=c;k!==t.tail;E+=k.value.length,k=k.next){if(h&&E>=h.reach)break;var T=k.value;if(t.length>e.length)return;if(!(T instanceof s)){var S,I=1;if(y){if(S=o(_,E,e,v),!S||S.index>=e.length)break;var C=S.index,x=S.index+S[0].length,A=E;A+=k.value.length;while(C>=A)k=k.next,A+=k.value.length;if(A-=k.value.length,E=A,k.value instanceof s)continue;for(var D=k;D!==t.tail&&(A<x||"string"===typeof D.value);D=D.next)I++,A+=D.value.length;I--,T=e.slice(E,A),S.index-=E}else if(S=o(_,0,T,v),!S)continue;C=S.index;var R=S[0],O=T.slice(0,C),M=T.slice(C+R.length),P=E+T.length;h&&P>h.reach&&(h.reach=P);var N=k.prev;O&&(N=u(t,N,O),E+=O.length),l(t,N,I);var L=new s(d,m?i.tokenize(R,m):R,w,R);if(k=u(t,N,L),M&&u(t,k,M),I>1){var F={cause:d+","+p,reach:P};a(e,t,n,k.prev,E,F),h&&F.reach>h.reach&&(h.reach=F.reach)}}}}}}function c(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var r=t.next,i={value:n,prev:t,next:r};return t.next=i,r.prev=i,e.length++,i}function l(e,t,n){for(var r=t.next,i=0;i<n&&r!==e.tail;i++)r=r.next;t.next=r,r.prev=t,e.length-=i}function h(e){var t=[],n=e.head.next;while(n!==e.tail)t.push(n.value),n=n.next;return t}if(e.Prism=i,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(s.classes,o):s.classes.push(o)),i.hooks.run("wrap",s);var a="";for(var c in s.attributes)a+=" "+c+'="'+(s.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+a+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(i.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,s=n.code,o=n.immediateClose;e.postMessage(i.highlight(s,i.languages[r],r)),o&&e.close()}),!1),i):i;var d=i.util.currentScript();function f(){i.manual||i.highlightAll()}if(d&&(i.filename=d.src,d.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return i}(r);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */e.exports&&(e.exports=i),"undefined"!==typeof n.g&&(n.g.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup["tag"].inside["attr-value"].inside["entity"]=i.languages.markup["entity"],i.languages.markup["doctype"].inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[t]},n["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:i.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},i.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(e,t){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:i.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if("undefined"!==typeof i&&"undefined"!==typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading…",t=function(e,t){return"✖ Error "+e+" while fetching file: "+t},n="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",o="loading",a="loaded",c="failed",u="pre[data-src]:not(["+s+'="'+a+'"]):not(['+s+'="'+o+'"])';i.hooks.add("before-highlightall",(function(e){e.selector+=", "+u})),i.hooks.add("before-sanity-check",(function(t){var n=t.element;if(n.matches(u)){t.code="",n.setAttribute(s,o);var l=n.appendChild(document.createElement("CODE"));l.textContent=e;var f=n.getAttribute("data-src"),p=t.language;if("none"===p){var g=(/\.(\w+)$/.exec(f)||[,"none"])[1];p=r[g]||g}i.util.setLanguage(l,p),i.util.setLanguage(n,p);var m=i.plugins.autoloader;m&&m.loadLanguages(p),h(f,(function(e){n.setAttribute(s,a);var t=d(n.getAttribute("data-range"));if(t){var r=e.split(/\r\n?|\n/g),o=t[0],c=null==t[1]?r.length:t[1];o<0&&(o+=r.length),o=Math.max(0,Math.min(o-1,r.length)),c<0&&(c+=r.length),c=Math.max(0,Math.min(c,r.length)),e=r.slice(o,c).join("\n"),n.hasAttribute("data-start")||n.setAttribute("data-start",String(o+1))}l.textContent=e,i.highlightElement(l)}),(function(e){n.setAttribute(s,c),l.textContent=e}))}})),i.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(u),r=0;t=n[r++];)i.highlightElement(t)}};var l=!1;i.fileHighlight=function(){l||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),l=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}function h(e,r,i){var s=new XMLHttpRequest;s.open("GET",e,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?r(s.responseText):s.status>=400?i(t(s.status,s.statusText)):i(n))},s.send(null)}function d(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),r=t[2],i=t[3];return r?i?[n,Number(i)]:[n,void 0]:[n,n]}}}()},1241:function(e,t){"use strict";t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){"use strict";var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3506:function(e,t,n){"use strict";var r=n(3925),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},7080:function(e,t,n){"use strict";var r=n(4402).has;e.exports=function(e){return r(e),e}},679:function(e,t,n){"use strict";var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){"use strict";var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7811:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){"use strict";var r=n(6706),i=n(4576),s=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new s("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){"use strict";var r=n(9504),i=n(7394),s=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==i(e))return!1;try{return s(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){"use strict";var r=n(4475),i=n(9504),s=n(6706),o=n(7696),a=n(3238),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=r.TypeError,g=Math.min,m=d.prototype,v=f.prototype,y=i(m.slice),w=s(m,"resizable","get"),b=s(m,"maxByteLength","get"),_=i(v.getInt8),k=i(v.setInt8);e.exports=(l||u)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),m=!w||!w(e);if(a(e))throw new p("ArrayBuffer is detached");if(l&&(e=h(e,{transfer:[e]}),i===s&&(n||m)))return e;if(i>=s&&(!n||m))r=y(e,0,s);else{var v=n&&!m&&b?{maxByteLength:b(e)}:void 0;r=new d(s,v);for(var E=new f(e),T=new f(r),S=g(s,i),I=0;I<S;I++)k(T,I,_(E,I))}return l||u(e),r}},4644:function(e,t,n){"use strict";var r,i,s,o=n(7811),a=n(3724),c=n(4475),u=n(4901),l=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),g=n(6840),m=n(2106),v=n(1625),y=n(2787),w=n(2967),b=n(8227),_=n(3392),k=n(1181),E=k.enforce,T=k.get,S=c.Int8Array,I=S&&S.prototype,C=c.Uint8ClampedArray,x=C&&C.prototype,A=S&&y(S),D=I&&y(I),R=Object.prototype,O=c.TypeError,M=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),N="TypedArrayConstructor",L=o&&!!w&&"Opera"!==d(c.opera),F=!1,j={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},$={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(j,t)||h($,t)},V=function(e){var t=y(e);if(l(t)){var n=T(t);return n&&h(n,N)?n[N]:V(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return h(j,t)||h($,t)},W=function(e){if(B(e))return e;throw new O("Target is not a typed array")},z=function(e){if(u(e)&&(!w||v(A,e)))return e;throw new O(f(e)+" is not a typed array constructor")},Y=function(e,t,n,r){if(a){if(n)for(var i in j){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}D[e]&&!n||g(D,e,n?t:L&&I[e]||t,r)}},q=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in j)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return g(A,e,n?t:L&&A[e]||t)}catch(s){}}for(r in j)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in j)i=c[r],s=i&&i.prototype,s?E(s)[N]=i:L=!1;for(r in $)i=c[r],s=i&&i.prototype,s&&(E(s)[N]=i);if((!L||!u(A)||A===Function.prototype)&&(A=function(){throw new O("Incorrect invocation")},L))for(r in j)c[r]&&w(c[r],A);if((!L||!D||D===R)&&(D=A.prototype,L))for(r in j)c[r]&&w(c[r].prototype,D);if(L&&y(x)!==D&&w(x,D),a&&!h(D,M))for(r in F=!0,m(D,M,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),j)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&P,aTypedArray:W,aTypedArrayConstructor:z,exportTypedArrayMethod:Y,exportTypedArrayStaticMethod:q,getTypedArrayConstructor:V,isView:U,isTypedArray:B,TypedArray:A,TypedArrayPrototype:D}},5370:function(e,t,n){"use strict";var r=n(6198);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},9617:function(e,t,n){"use strict";var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){"use strict";var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){"use strict";var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},9928:function(e,t,n){"use strict";var r=n(6198),i=n(1291),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4576:function(e,t,n){"use strict";var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6955:function(e,t,n){"use strict";var r=n(2140),i=n(4901),s=n(4576),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){"use strict";var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},2211:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){"use strict";var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){"use strict";var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){"use strict";var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){"use strict";var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){"use strict";var r,i,s,o,a=n(4475),c=n(9714),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(u)f=function(e){l(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}e.exports=f},4055:function(e,t,n){"use strict";var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){"use strict";var r=n(516),i=n(9088);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(e){"use strict";e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){"use strict";var r=n(4475),i=n(4576);e.exports="process"===i(r.process)},9392:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){"use strict";var r,i,s=n(4475),o=n(9392),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){"use strict";var r=n(9504),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},6518:function(e,t,n){"use strict";var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(l=m?r:v?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},9039:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){"use strict";var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){"use strict";var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){"use strict";var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){"use strict";var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},9504:function(e,t,n){"use strict";var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},7751:function(e,t,n){"use strict";var r=n(4475),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},1767:function(e){"use strict";e.exports=function(e){return{iterator:e,next:e.next,done:!1}}},5966:function(e,t,n){"use strict";var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},3789:function(e,t,n){"use strict";var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,d=function(e,t){this.set=e,this.size=h(t,0),this.has=r(e.has),this.keys=r(e.keys)};d.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(e){return s(this.has,this.set,e)}},e.exports=function(e){i(e);var t=+e.size;if(t!==t)throw new l(c);var n=o(t);if(n<0)throw new u(c);return new d(e,n)}},4475:function(e,t,n){"use strict";var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){"use strict";var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){"use strict";e.exports={}},5917:function(e,t,n){"use strict";var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){"use strict";var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3167:function(e,t,n){"use strict";var r=n(4901),i=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3706:function(e,t,n){"use strict";var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){"use strict";var r,i,s,o=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new g(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw new g(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},4376:function(e,t,n){"use strict";var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){"use strict";var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){"use strict";var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){"use strict";var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){"use strict";var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){"use strict";var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){"use strict";e.exports=!1},757:function(e,t,n){"use strict";var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},507:function(e,t,n){"use strict";var r=n(9565);e.exports=function(e,t,n){var i,s,o=n?e:e.iterator,a=e.next;while(!(i=r(a,o)).done)if(s=t(i.value),void 0!==s)return s}},9539:function(e,t,n){"use strict";var r=n(9565),i=n(8551),s=n(5966);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(c){a=!0,o=c}if("throw"===t)throw n;if(a)throw o;return i(o),n}},6198:function(e,t,n){"use strict";var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){"use strict";var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),b=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=v(w,"string"==typeof t?t:"")),e};Function.prototype.toString=b((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){"use strict";var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){"use strict";var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){"use strict";var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){"use strict";var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){"use strict";var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){"use strict";var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){"use strict";var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){"use strict";var r=n(6706),i=n(34),s=n(7750),o=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(t?e(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(e,t,n){"use strict";var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){"use strict";var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7750:function(e,t,n){"use strict";var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},9286:function(e,t,n){"use strict";var r=n(4402),i=n(8469),s=r.Set,o=r.add;e.exports=function(e){var t=new s;return i(e,(function(e){o(t,e)})),t}},3440:function(e,t,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;e.exports=function(e){var t=r(this),n=a(e),i=s(t);return o(t)<=n.size?c(t,(function(e){n.includes(e)&&h(i,e)})):u(n.getIterator(),(function(e){l(t,e)&&h(i,e)})),i}},4402:function(e,t,n){"use strict";var r=n(9504),i=Set.prototype;e.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(e,t,n){"use strict";var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;e.exports=function(e){var t=r(this),n=o(e),i=new u;return s(t)>n.size?c(n.getIterator(),(function(e){h(t,e)&&l(i,e)})):a(t,(function(e){n.includes(e)&&l(i,e)})),i}},4449:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<=n.size)return!1!==a(t,(function(e){if(n.includes(e))return!1}),!0);var l=n.getIterator();return!1!==c(l,(function(e){if(i(t,e))return u(l,"normal",!1)}))}},3838:function(e,t,n){"use strict";var r=n(7080),i=n(5170),s=n(8469),o=n(3789);e.exports=function(e){var t=r(this),n=o(e);return!(i(t)>n.size)&&!1!==s(t,(function(e){if(!n.includes(e))return!1}),!0)}},8527:function(e,t,n){"use strict";var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);e.exports=function(e){var t=r(this),n=o(e);if(s(t)<n.size)return!1;var u=n.getIterator();return!1!==a(u,(function(e){if(!i(t,e))return c(u,"normal",!1)}))}},8469:function(e,t,n){"use strict";var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;e.exports=function(e,t,n){return n?i({iterator:u(e),next:l},t):c(e,t)}},4916:function(e,t,n){"use strict";var r=n(7751),i=function(e){return{size:e,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};e.exports=function(e){var t=r("Set");try{(new t)[e](i(0));try{return(new t)[e](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},5170:function(e,t,n){"use strict";var r=n(6706),i=n(4402);e.exports=r(i.proto,"size","get")||function(e){return e.size}},3650:function(e,t,n){"use strict";var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;e.exports=function(e){var t=r(this),n=o(e).getIterator(),i=s(t);return a(n,(function(e){u(t,e)?l(i,e):c(i,e)})),i}},4204:function(e,t,n){"use strict";var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);e.exports=function(e){var t=r(this),n=o(e).getIterator(),c=s(t);return a(n,(function(e){i(c,e)})),c}},6119:function(e,t,n){"use strict";var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){"use strict";var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.37.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){"use strict";var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){"use strict";var r=n(4475),i=n(9039),s=n(7388),o=n(7290),a=n(516),c=n(9088),u=r.structuredClone;e.exports=!!u&&!i((function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var e=new ArrayBuffer(8),t=u(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){"use strict";var r=n(7388),i=n(9039),s=n(4475),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){"use strict";var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5854:function(e,t,n){"use strict";var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){"use strict";var r=n(1291),i=n(8014),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5397:function(e,t,n){"use strict";var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){"use strict";var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){"use strict";var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){"use strict";var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){"use strict";var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){"use strict";var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){"use strict";var r=n(8227),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},655:function(e,t,n){"use strict";var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},9714:function(e,t,n){"use strict";var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){"use strict";var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){"use strict";var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){"use strict";var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){"use strict";var r=n(4475),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){"use strict";var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},6573:function(e,t,n){"use strict";var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){"use strict";var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){"use strict";var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},7642:function(e,t,n){"use strict";var r=n(6518),i=n(3440),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},8004:function(e,t,n){"use strict";var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection")||i((function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))}));r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(e,t,n){"use strict";var r=n(6518),i=n(4449),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},5876:function(e,t,n){"use strict";var r=n(6518),i=n(3838),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2475:function(e,t,n){"use strict";var r=n(6518),i=n(8527),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},5024:function(e,t,n){"use strict";var r=n(6518),i=n(3650),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},1698:function(e,t,n){"use strict";var r=n(6518),i=n(4204),s=n(4916);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},7467:function(e,t,n){"use strict";var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(e,t,n){"use strict";var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},9577:function(e,t,n){"use strict";var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},3375:function(e,t,n){"use strict";n(7642)},9225:function(e,t,n){"use strict";n(8004)},3972:function(e,t,n){"use strict";n(3853)},9209:function(e,t,n){"use strict";n(5876)},5714:function(e,t,n){"use strict";n(2475)},7561:function(e,t,n){"use strict";n(5024)},6197:function(e,t,n){"use strict";n(1698)},4979:function(e,t,n){"use strict";var r=n(6518),i=n(4475),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",v=s("Error"),y=s(m),w=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=new v(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=y.prototype,_="stack"in new v(m),k="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!E&&!(E.writable&&E.configurable),S=_&&!T&&!k;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:y});var I=s(m),C=I.prototype;if(C.constructor!==I)for(var x in g||a(C,"constructor",o(1,I)),d)if(c(d,x)){var A=d[x],D=A.s;c(I,D)||a(I,D,o(6,A.c))}},4603:function(e,t,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){"use strict";var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){"use strict";var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){"use strict";n.d(t,{MF:function(){return ve},j6:function(){return de},xZ:function(){return fe},om:function(){return he},Sx:function(){return we},Wp:function(){return ye},KO:function(){return be}});n(4114);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(k(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return k(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),k(h.get(this))}:function(...t){return k(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),k(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function k(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const E=e=>g.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=k(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(k(o.result),e.oldVersion,e.newVersion,k(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],C=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(D(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function D(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",O="0.10.2",M=new i.Vy("@firebase/app"),P="@firebase/app-compat",N="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",j="@firebase/app-check",$="@firebase/auth",U="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",W="@firebase/functions",z="@firebase/functions-compat",Y="@firebase/installations",q="@firebase/installations-compat",H="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Z="@firebase/remote-config-compat",J="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.11.1",se="[DEFAULT]",oe={[R]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[N]:"fire-analytics-compat",[j]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[U]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[W]:"fire-fn",[z]:"fire-fn-compat",[Y]:"fire-iid",[q]:"fire-iid-compat",[H]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Z]:"fire-rc-compat",[J]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map,ue=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){M.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function he(e){const t=e.name;if(ue.has(t))return M.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of ae.values())le(n,e);for(const n of ce.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new s.FA("app","Firebase",pe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve=ie;function ye(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ue.values())c.addComponent(r);const u=new me(n,i,c);return ae.set(o,u),u}function we(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return ye();if(!t)throw ge.create("no-app",{appName:e});return t}function be(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void M.warn(e.join(" "))}he(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e="firebase-heartbeat-database",ke=1,Ee="firebase-heartbeat-store";let Te=null;function Se(){return Te||(Te=T(_e,ke,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ee)}catch(n){console.warn(n)}}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Te}async function Ie(e){try{const t=await Se(),n=t.transaction(Ee),r=await n.objectStore(Ee).get(xe(e));return await n.done,r}catch(t){if(t instanceof s.g)M.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});M.warn(e.message)}}}async function Ce(e,t){try{const n=await Se(),r=n.transaction(Ee,"readwrite"),i=r.objectStore(Ee);await i.put(t,xe(e)),await r.done}catch(n){if(n instanceof s.g)M.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});M.warn(e.message)}}}function xe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,De=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Oe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=De})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Oe(),{heartbeatsToSend:n,unsentEntries:r}=Me(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function Me(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){he(new r.uA("platform-logger",(e=>new A(e)),"PRIVATE")),he(new r.uA("heartbeat",(e=>new Re(e)),"PRIVATE")),be(R,O,e),be(R,O,"esm2017"),be("fire-js","")}Le("")},852:function(e,t,n){"use strict";n.d(t,{h1:function(){return u},uA:function(){return i}});n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){"use strict";n.d(t,{$b:function(){return i},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},6400:function(e,t,n){"use strict";n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="10.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},2621:function(e,t,n){"use strict";n.d(t,{eJ:function(){return Nt},xI:function(){return Kr},hg:function(){return $t},x9:function(){return Lt},CI:function(){return Ut}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4603),n(7566),n(8721);var r=n(3405),i=n(4046),s=n(1363);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new i.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${r.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},u()),{[t]:n}),s=new i.FA("auth","Firebase",r);return s.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function w(e,t,...n){if(!e)throw y(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,i.sr)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.jZ)()||(0,i.lV)()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,r,s={}){return P(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function P(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D),t);try{const t=new j(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw $(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw $(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw $(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function N(e,t,n,r,i={}){const s=await M(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function L(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?x(e.config,i):`${e.config.apiScheme}://${i}`}function F(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){return void 0!==e&&void 0!==e.enterprise}class V{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return M(e,"GET","/v2/recaptchaConfig",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return M(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return M(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,i.Ku)(e),r=await n.getIdToken(t),s=K(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Y(H(s.auth_time)),issuedAtTime:Y(H(s.iat)),expirationTime:Y(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function K(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function G(e){const t=K(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.g&&X(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Q(e,z(n,{idToken:r}));w(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?re(s.providerUserInfo):[],a=ne(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new J(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function te(e){const t=(0,i.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function re(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t){const n=await P(e,{},(async()=>{const n=(0,i.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=L(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function se(e,t){return M(e,"POST","/v2/accounts:revokeToken",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=G(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ie(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new oe;return n&&(w("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(w("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(w("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ce{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new J(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Q(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return te(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await Q(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:k,stsTokenManager:E}=t;w(y&&E,e,"internal-error");const T=oe.fromJSON(this.name,E);w("string"===typeof y,e,"internal-error"),ae(l,e.name),ae(h,e.name),w("boolean"===typeof b,e,"internal-error"),w("boolean"===typeof _,e,"internal-error"),ae(d,e.name),ae(f,e.name),ae(p,e.name),ae(g,e.name),ae(m,e.name),ae(v,e.name);const S=new ce({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:v});return k&&Array.isArray(k)&&(S.providerData=k.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const i=new ce({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];w(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],s=!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length),o=new oe;o.updateFromIdToken(n);const a=new ce({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new J(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(null===i||void 0===i?void 0:i.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Map;function le(e){_(e instanceof Function,"Expected a class definition");let t=ue.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ue.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const de=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fe(this.userKey,r.apiKey,i),this.fullPersistenceKey=fe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ce._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new pe(le(de),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||le(de);const s=fe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ce._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new pe(i,e,n)):new pe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(ke(t))return"Webos";if(ve(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(be(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function me(e=(0,i.ZQ)()){return/firefox\//i.test(e)}function ve(e=(0,i.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,i.ZQ)()){return/crios\//i.test(e)}function we(e=(0,i.ZQ)()){return/iemobile/i.test(e)}function be(e=(0,i.ZQ)()){return/android/i.test(e)}function _e(e=(0,i.ZQ)()){return/blackberry/i.test(e)}function ke(e=(0,i.ZQ)()){return/webos/i.test(e)}function Ee(e=(0,i.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,i.ZQ)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Se(){return(0,i.lT)()&&10===document.documentMode}function Ie(e=(0,i.ZQ)()){return Ee(e)||be(e)||ke(e)||_e(e)||/windows phone/i.test(e)||we(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.ZQ)());break;case"Worker":n=`${ge((0,i.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t={}){return M(e,"GET","/v2/passwordPolicy",O(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=6;class Oe{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Re,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ne(this),this.idTokenSubscription=new Ne(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await z(this,{idToken:e}),n=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null===o||void 0===o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,i.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(le(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await De(this),t=new Oe(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await se(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Pe(e){return(0,i.Ku)(e)}class Ne{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.tD)((e=>this.observer=e))}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fe(e){Le=e}function je(e){return Le.loadJS(e)}function $e(){return Le.recaptchaEnterpriseScript}function Ue(){return Le.gapiScript}function Ve(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="recaptcha-enterprise",We="NO_RECAPTCHA";class ze{constructor(e){this.type=Be,this.auth=Pe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new V(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;U(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(We)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&U(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=$e();0!==t.length&&(t+=n),je(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ye(e,t,n,r=!1){const i=new ze(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qe(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ye(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Ye(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.bD)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ke(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(le);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ge(e,t,n){const r=Pe(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Qe(t),{host:o,port:a}=Xe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Je()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ze(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ze(t)}}}function Ze(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Je(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return M(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rt(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function it(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends et{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new st(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new st(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,t,"signInWithPassword",nt);case"emailLink":return rt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qe(e,n,"signUpPassword",tt);case"emailLink":return it(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="http://localhost";class ct extends et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ct(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ot(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ot(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ot(e,t)}buildRequest(){const e={requestUri:at,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function lt(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function ht(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw $(e,"account-exists-with-different-credential",n);return n}const dt={["USER_NOT_FOUND"]:"user-not-found"};async function ft(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,n),dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends et{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ht(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ft(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mt(e){const t=(0,i.I9)((0,i.hp)(e))["link"],n=t?(0,i.I9)((0,i.hp)(t))["deep_link_id"]:null,r=(0,i.I9)((0,i.hp)(e))["deep_link_id"],s=r?(0,i.I9)((0,i.hp)(r))["link"]:null;return s||r||n||t||e}class vt{constructor(e){var t,n,r,s,o,a;const c=(0,i.I9)((0,i.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=gt(null!==(r=c["mode"])&&void 0!==r?r:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=mt(e);try{return new vt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return st._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vt.parseLink(t);return w(n,"argument-error"),st._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends bt{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com",_t.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends bt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ct._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return kt.credential(t,n)}catch(r){return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com",kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends bt{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com",Et.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends bt{constructor(){super("twitter.com")}static credential(e,t){return ct._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Tt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t){return N(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.TWITTER_SIGN_IN_METHOD="twitter.com",Tt.PROVIDER_ID="twitter.com";class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ce._fromIdTokenResponse(e,n,r),s=Ct(n),o=new It({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ct(n);return new It({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt extends i.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new xt(e,t,n,r)}}function At(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){const r=await Q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return It._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(e,t,n=!1){const{auth:i}=e;if((0,r.xZ)(i.app))return Promise.reject(v(i));const s="reauthenticate";try{const r=await Q(e,At(i,s,t,e),n);w(r.idToken,i,"internal-error");const o=K(r.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(e.uid===a,i,"user-mismatch"),It._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i="signIn",s=await At(e,i,t),o=await It._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(o.user),o}async function Mt(e,t){return Ot(Pe(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e){const t=Pe(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Nt(e,t,n){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Pe(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},o=qe(i,s,"signUpPassword",St),a=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pt(e),t})),c=await It._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Lt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(v(e)):Mt((0,i.Ku)(e),yt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t,n,r){return(0,i.Ku)(e).onIdTokenChanged(t,n,r)}function jt(e,t,n){return(0,i.Ku)(e).beforeAuthStateChanged(t,n)}function $t(e,t,n,r){return(0,i.Ku)(e).onAuthStateChanged(t,n,r)}function Ut(e){return(0,i.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function Bt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}function Wt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function zt(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}new WeakMap;const Yt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yt,"1"),this.storage.removeItem(Yt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){const e=(0,i.ZQ)();return ve(e)||Ee(e)}const Kt=1e3,Gt=10;class Qt extends qt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ht()&&Ce(),this.fallbackToPolling=Ie(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Se()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Gt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Kt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qt.type="LOCAL";const Xt=Qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends qt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zt.type="SESSION";const Jt=Zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await en(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=nn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function on(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function cn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function un(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ln(){return an()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="firebaseLocalStorageDb",dn=1,fn="firebaseLocalStorage",pn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function mn(e,t){return e.transaction([fn],t?"readwrite":"readonly").objectStore(fn)}function vn(){const e=indexedDB.deleteDatabase(hn);return new gn(e).toPromise()}function yn(){const e=indexedDB.open(hn,dn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fn,{keyPath:pn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fn)?t(n):(n.close(),await vn(),t(await yn()))}))}))}async function wn(e,t,n){const r=mn(e,!0).put({[pn]:t,value:n});return new gn(r).toPromise()}async function bn(e,t){const n=mn(e,!1).get(t),r=await new gn(n).toPromise();return void 0===r?null:r.value}function _n(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const kn=800,En=3;class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>En)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(ln()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await cn(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&un()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await wn(e,Yt,"1"),await _n(e,Yt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>wn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>bn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_n(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),kn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const Sn=Tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}function Cn(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}function xn(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ve("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const An="recaptcha";async function Dn(e,t,n){var r;const i=await n.verify();try{let s;if(w("string"===typeof i,e,"argument-error"),w(n.type===An,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const n=await Vt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;w(n,e,"missing-multi-factor-info");const o=await In(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ut(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn{constructor(e){this.providerId=Rn.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,t){return Dn(this.auth,e,(0,i.Ku)(t))}static credential(e,t){return pt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rn.credentialFromTaggedObject(t)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(e,t){return t?le(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.PROVIDER_ID="phone",Rn.PHONE_SIGN_IN_METHOD="phone";class Mn extends et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pn(e){return Ot(e.auth,new Mn(e),e.bypassAuthState)}function Nn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Rt(n,new Mn(e),e.bypassAuthState)}async function Ln(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Dt(n,new Mn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pn;case"linkViaPopup":case"linkViaRedirect":return Ln;case"reauthViaPopup":case"reauthViaRedirect":return Nn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new C(2e3,1e4);class $n extends Fn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,jn.get())};e()}}$n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un="pendingRedirect",Vn=new Map;class Bn extends Fn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const t=await Wn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Wn(e,t){const n=qn(t),r=Yn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function zn(e,t){Vn.set(e._key(),t)}function Yn(e){return le(e._redirectPersistence)}function qn(e){return fe(Un,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(v(e));const i=Pe(e),s=On(i,t),o=new Bn(i,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn=6e5;class Gn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qn(e))}saveEventToCache(e){this.cachedEventUids.add(Qn(e)),this.lastProcessedEventTime=Date.now()}}function Qn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Xn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Zn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tr=/^https?/;async function nr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Jn(e);for(const r of t)try{if(rr(r))return}catch(n){}p(e,"unauthorized-domain")}function rr(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!tr.test(n))return!1;if(er.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new C(3e4,6e4);function sr(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function or(e){return new Promise(((t,n)=>{var r,i,s;function o(){sr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{sr(),n(g(e,"network-request-failed"))},timeout:ir.get()})}if(null===(i=null===(r=sn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=Ve("iframefcb");return sn()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},je(`${Ue()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw ar=null,e}))}let ar=null;function cr(e){return ar=ar||or(e),ar}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new C(5e3,15e3),lr="__/auth/iframe",hr="emulator/auth/iframe",dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pr(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,hr):`https://${e.config.authDomain}/${lr}`,s={apiKey:t.apiKey,appName:e.name,v:r.MF},o=fr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.Am)(s).slice(1)}`}async function gr(e){const t=await cr(e),n=sn().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:pr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=sn().setTimeout((()=>{r(i)}),ur.get());function o(){sn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vr=500,yr=600,wr="_blank",br="http://localhost";class _r{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function kr(e,t,n,r=vr,s=yr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},mr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.ZQ)().toLowerCase();n&&(c=ye(l)?wr:n),me(l)&&(t=t||br,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Te(l)&&"_self"!==c)return Er(t||"",c),new _r(null);const d=window.open(t||"",c,h);w(d,e,"popup-blocked");try{d.focus()}catch(f){}return new _r(d)}function Er(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="__/auth/handler",Sr="emulator/auth/handler",Ir=encodeURIComponent("fac");async function Cr(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.MF,eventId:o};if(t instanceof wt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof bt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Ir}=${encodeURIComponent(l)}`:"";return`${xr(e)}?${(0,i.Am)(u).slice(1)}${h}`}function xr({config:e}){return e.emulator?x(e,Sr):`https://${e.authDomain}/${Tr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="webStorageSupport";class Dr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jt,this._completeRedirectFn=Hn,this._overrideRedirectResult=zn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await Cr(e,t,n,k(),r);return kr(e,s,nn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Cr(e,t,n,k(),r);return on(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await gr(e),n=new Gn(e);return t.register("authEvent",(t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ar,{type:Ar},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ar];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ie()||ve()||Ee()}}const Rr=Dr;class Or{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class Mr extends Or{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mr(e)}_finalizeEnroll(e,t,n){return Bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Cn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Pr{constructor(){}static assertion(e){return Mr._fromCredential(e)}}Pr.FACTOR_ID="phone";class Nr{static assertionForEnrollment(e,t){return Lr._fromSecret(e,t)}static assertionForSignIn(e,t){return Lr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await Wt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Fr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Nr.FACTOR_ID="totp";class Lr extends Or{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Lr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Lr(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),zt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return xn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Fr{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Fr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(jr(e)||jr(t))&&(r=!0),r&&(jr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),jr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function jr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var $r="@firebase/auth",Ur="1.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wr(e){(0,r.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},u=new Me(r,i,s,c);return Ke(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,r.om)(new a.uA("auth-internal",(e=>{const t=Pe(e.getProvider("auth").getImmediate());return(e=>new Vr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)($r,Ur,Br(e)),(0,r.KO)($r,Ur,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=300,Yr=(0,i.XA)("authIdTokenMaxAge")||zr;let qr=null;const Hr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Yr)return;const i=null===n||void 0===n?void 0:n.token;qr!==i&&(qr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=He(e,{popupRedirectResolver:Rr,persistence:[Sn,Xt,Jt]}),s=(0,i.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Hr(e.toString());jt(n,t,(()=>t(n.currentUser))),Ft(n,(e=>t(e)))}}const o=(0,i.Tj)("auth");return o&&Ge(n,`http://${o}`),n}function Gr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Fe({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Gr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Wr("Browser")},8822:function(e,t,n){"use strict";n.d(t,{BN:function(){return r.BN},GG:function(){return r.GG},H9:function(){return r.H9},P:function(){return r.P},aU:function(){return r.aU},kd:function(){return r.kd},mZ:function(){return r.mZ},rJ:function(){return r.rJ},x7:function(){return r.x7}});var r=n(1274)},7844:function(e,t,n){"use strict";n.d(t,{c7:function(){return q}});n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197),n(4979);var r=n(3405),i=n(4046),s=n(852);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.g{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,d;function f(e){return"storage/"+e}function p(){const e="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,e)}function g(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new l(h.CANCELED,"User canceled the upload/download.")}function v(e){return new l(h.INVALID_URL,"Invalid URL '"+e+"'.")}function y(e){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function w(e){return new l(h.INVALID_ARGUMENT,e)}function b(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function _(e){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=k.makeFromUrl(e,t)}catch(r){return new k(e,"")}if(""===n.path)return n;throw y(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),w={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:w,postModify:u}];for(let o=0;o<b.length;o++){const t=b[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new k(e,i),t.postModify(n);break}}if(null==n)throw v(e);return n}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function S(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){return void 0!==e}function C(e,t,n,r){if(r<t)throw w(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw w(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(d||(d={}));class D{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new R(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!t||A(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===d.ABORT;return void e(!1,new R(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new R(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());I(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=p();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?b():m();r(e)}else{const e=g();r(e)}};this.canceled_?t(!1,new R(!1,null,!0)):this.backoffId_=T(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&S(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class R{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function O(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function M(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function P(e,t){t&&(e["X-Firebase-GMPID"]=t)}function N(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function L(e,t,n,r,i,s,o=!0){const a=x(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return P(u,t),O(u,n),M(u,s),N(u,r),new D(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function j(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t){this._service=e,this._location=t instanceof k?t:k.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $(e,t)}get root(){const e=new k(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j(this._location.path)}get storage(){return this._service}get parent(){const e=F(this._location.path);if(null===e)return null;const t=new k(this._location.bucket,e);return new $(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw _(e)}}function U(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:k.makeFromBucketSpec(n,e)}function V(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:(0,i.Fy)(s,e.app.options.projectId))}class B{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?k.makeFromBucketSpec(r,this._host):U(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=k.makeFromBucketSpec(this._url,e):this._bucket=U(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new E(b());{const s=L(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const W="@firebase/storage",z="0.12.4",Y="storage";function q(e=(0,r.Sx)(),t){e=(0,i.Ku)(e);const n=(0,r.j6)(e,Y),s=n.getImmediate({identifier:t}),o=(0,i.yU)("storage");return o&&H(s,...o),s}function H(e,t,n,r={}){V(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new B(n,i,s,t,r.MF)}function G(){(0,r.om)(new s.uA(Y,K,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(W,z,""),(0,r.KO)(W,z,"esm2017")}G()},6824:function(e,t,n){"use strict";n.d(t,{xI:function(){return z}});n(4114);function r(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let i=r();function s(e){i=e}const o=/[&<>"']/,a=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,u=/[<>"']|&(?!#?\w+;)/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=e=>l[e];function d(e,t){if(t){if(o.test(e))return e.replace(a,h)}else if(c.test(e))return e.replace(u,h);return e}const f=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function p(e){return e.replace(f,((e,t)=>(t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")))}const g=/(^|[^\[])\^/g;function m(e,t){e="string"===typeof e?e:e.source,t=t||"";const n={replace:(t,r)=>(r=r.source||r,r=r.replace(g,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const v=/[^\w:]/g,y=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function w(e,t,n){if(e){let e;try{e=decodeURIComponent(p(n)).replace(v,"").toLowerCase()}catch(r){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!y.test(n)&&(n=T(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(r){return null}return n}const b={},_=/^[^:]+:\/*[^/]*$/,k=/^([^:]+:)[\s\S]*$/,E=/^([^:]+:\/*[^/]*)[\s\S]*$/;function T(e,t){b[" "+e]||(_.test(e)?b[" "+e]=e+"/":b[" "+e]=x(e,"/",!0)),e=b[" "+e];const n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(k,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(E,"$1")+t:e+t}const S={exec:function(){}};function I(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function C(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;while(--i>=0&&"\\"===n[i])r=!r;return r?"|":" |"})),r=n.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else while(r.length<t)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function x(e,t,n){const r=e.length;if(0===r)return"";let i=0;while(i<r){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.slice(0,r-i)}function A(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}function D(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function R(e,t){if(t<1)return"";let n="";while(t>1)1&t&&(n+=e),t>>=1,e+=e;return n+e}function O(e,t,n,r){const i=t.href,s=t.title?d(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:i,title:s,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:s,text:d(o)}}function M(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}class P{constructor(e){this.options=e||i}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:x(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=M(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=x(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,s,o,a,c,u,l,h,d,f,p=t[1].trim();const g=p.length>1,m={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const v=new RegExp(`^( {0,3}${p})((?:[\t ][^\\n]*)?(?:\\n|$))`);while(e){if(f=!1,!(t=v.exec(e)))break;if(this.rules.block.hr.test(e))break;if(n=t[0],e=e.substring(n.length),u=t[2].split("\n",1)[0],l=e.split("\n",1)[0],this.options.pedantic?(s=2,d=u.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,d=u.slice(s),s+=t[1].length),a=!1,!u&&/^ *$/.test(l)&&(n+=l+"\n",e=e.substring(l.length+1),f=!0),!f){const t=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),r=new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),o=new RegExp(`^ {0,${Math.min(3,s-1)}}#`);while(e){if(h=e.split("\n",1)[0],u=h,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),i.test(u))break;if(o.test(u))break;if(t.test(u))break;if(r.test(e))break;if(u.search(/[^ ]/)>=s||!u.trim())d+="\n"+u.slice(s);else{if(a)break;d+="\n"+u}a||u.trim()||(a=!0),n+=h+"\n",e=e.substring(h.length+1)}}m.loose||(c?m.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(d),r&&(i="[ ] "!==r[0],d=d.replace(/^\[[ xX]\] +/,""))),m.items.push({type:"list_item",raw:n,task:!!r,checked:i,loose:!1,text:d}),m.raw+=n}m.items[m.items.length-1].raw=n.trimRight(),m.items[m.items.length-1].text=d.trimRight(),m.raw=m.raw.trimRight();const y=m.items.length;for(o=0;o<y;o++){this.lexer.state.top=!1,m.items[o].tokens=this.lexer.blockTokens(m.items[o].text,[]);const e=m.items[o].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const r of t)if("\n"===r&&(n+=1),n>1)return!0;return!1}));!m.loose&&e.length&&t&&(m.loose=!0,m.items[o].loose=!0)}return m}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){const n=this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0]);e.type="paragraph",e.text=n,e.tokens=this.lexer.inline(n)}return e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const e=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:e,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:C(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,i,s,o=e.align.length;for(n=0;n<o;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(o=e.rows.length,n=0;n<o;n++)e.rows[n]=C(e.rows[n],e.header.length).map((e=>({text:e})));for(o=e.header.length,r=0;r<o;r++)e.header[r].tokens=this.lexer.inline(e.header[r].text);for(o=e.rows.length,r=0;r<o;r++)for(s=e.rows[r],i=0;i<s.length;i++)s[i].tokens=this.lexer.inline(s[i].text);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:d(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=x(e.slice(0,-1),"\\");if((e.length-t.length)%2===0)return}else{const e=A(t[2],"()");if(e>-1){const n=0===t[0].indexOf("!")?5:4,r=n+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),O(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return O(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,s,o=n,a=0;const c="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;c.lastIndex=0,t=t.slice(-1*e.length+n);while(null!=(r=c.exec(t))){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=i.length,r[3]||r[4]){o+=s;continue}if((r[5]||r[6])&&n%3&&!((n+s)%3)){a+=s;continue}if(o-=s,o>0)continue;if(s=Math.min(s,s+o+a),Math.min(n,s)%2){const t=e.slice(1,n+r.index+s);return{type:"em",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t)}}const t=e.slice(2,n+r.index+s-1);return{type:"strong",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=d(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=d(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=d(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=d(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=d(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):d(n[0]):n[0]:d(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const N={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:S,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};N.def=m(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}[.)])/,N.listItemStart=m(/^( *)(bull) */).replace("bull",N.bullet).getRegex(),N.list=m(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,N.html=m(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=m(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.blockquote=m(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal=I({},N),N.gfm=I({},N.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),N.gfm.table=m(N.gfm.table).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.gfm.paragraph=m(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",N.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.pedantic=I({},N.normal,{html:m("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:S,paragraph:m(N.normal._paragraph).replace("hr",N.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const L={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:S,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:S,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function F(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function j(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}L._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",L.punctuation=m(L.punctuation).replace(/punctuation/g,L._punctuation).getRegex(),L.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,L.escapedEmSt=/\\\*|\\_/g,L._comment=m(N._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),L.emStrong.lDelim=m(L.emStrong.lDelim).replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimAst=m(L.emStrong.rDelimAst,"g").replace(/punct/g,L._punctuation).getRegex(),L.emStrong.rDelimUnd=m(L.emStrong.rDelimUnd,"g").replace(/punct/g,L._punctuation).getRegex(),L._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,L._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,L._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,L.autolink=m(L.autolink).replace("scheme",L._scheme).replace("email",L._email).getRegex(),L._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,L.tag=m(L.tag).replace("comment",L._comment).replace("attribute",L._attribute).getRegex(),L._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,L._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,L._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,L.link=m(L.link).replace("label",L._label).replace("href",L._href).replace("title",L._title).getRegex(),L.reflink=m(L.reflink).replace("label",L._label).replace("ref",N._label).getRegex(),L.nolink=m(L.nolink).replace("ref",N._label).getRegex(),L.reflinkSearch=m(L.reflinkSearch,"g").replace("reflink",L.reflink).replace("nolink",L.nolink).getRegex(),L.normal=I({},L),L.pedantic=I({},L.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",L._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",L._label).getRegex()}),L.gfm=I({},L.normal,{escape:m(L.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),L.gfm.url=m(L.gfm.url,"i").replace("email",L.gfm._extended_email).getRegex(),L.breaks=I({},L.gfm,{br:m(L.br).replace("{2,}","*").getRegex(),text:m(L.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class ${constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||i,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:N.normal,inline:L.normal};this.options.pedantic?(t.block=N.pedantic,t.inline=L.pedantic):this.options.gfm&&(t.block=N.gfm,this.options.breaks?t.inline=L.breaks:t.inline=L.gfm),this.tokenizer.rules=t}static get rules(){return{block:N,inline:L}}static lex(e,t){const n=new $(t);return n.lex(e)}static lexInline(e,t){const n=new $(t);return n.inlineTokens(e)}lex(e){let t;e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);while(t=this.inlineQueue.shift())this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,i,s;e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,n)=>t+"    ".repeat(n.length)));while(e)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"===typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i)))r=t[t.length-1],s&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,i,s,o,a,c=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)while(null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(c)))e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,s.index)+"["+R("a",s[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}while(null!=(s=this.tokenizer.rules.inline.blockSkip.exec(c)))c=c.slice(0,s.index)+"["+R("a",s[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);while(null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(c)))c=c.slice(0,s.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);while(e)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,c,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,j))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,j))){if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"===typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i,F))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class U{constructor(e){this.options=e||i}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+d(r,!0)+'">'+(n?e:d(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:d(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,r){if(this.options.headerIds){const i=this.options.headerPrefix+r.slug(n);return`<h${t} id="${i}">${e}</h${t}>\n`}return`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul",i=t&&1!==n?' start="'+n+'"':"";return"<"+r+i+">\n"+e+"</"+r+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const n=t.header?"th":"td",r=t.align?`<${n} align="${t.align}">`:`<${n}>`;return r+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=w(this.options.sanitize,this.options.baseUrl,e),null===e)return n;let r='<a href="'+d(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(e=w(this.options.sanitize,this.options.baseUrl,e),null===e)return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class V{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class B{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class W{constructor(e){this.options=e||i,this.options.renderer=this.options.renderer||new U,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new V,this.slugger=new B}static parse(e,t){const n=new W(t);return n.parse(e)}static parseInline(e,t){const n=new W(t);return n.parseInline(e)}parse(e,t=!0){let n,r,i,s,o,a,c,u,l,h,d,f,g,m,v,y,w,b,_,k="";const E=e.length;for(n=0;n<E;n++)if(h=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(_=this.options.extensions.renderers[h.type].call({parser:this},h),!1!==_||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))k+=_||"";else switch(h.type){case"space":continue;case"hr":k+=this.renderer.hr();continue;case"heading":k+=this.renderer.heading(this.parseInline(h.tokens),h.depth,p(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":k+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(u="",c="",s=h.header.length,r=0;r<s;r++)c+=this.renderer.tablecell(this.parseInline(h.header[r].tokens),{header:!0,align:h.align[r]});for(u+=this.renderer.tablerow(c),l="",s=h.rows.length,r=0;r<s;r++){for(a=h.rows[r],c="",o=a.length,i=0;i<o;i++)c+=this.renderer.tablecell(this.parseInline(a[i].tokens),{header:!1,align:h.align[i]});l+=this.renderer.tablerow(c)}k+=this.renderer.table(u,l);continue;case"blockquote":l=this.parse(h.tokens),k+=this.renderer.blockquote(l);continue;case"list":for(d=h.ordered,f=h.start,g=h.loose,s=h.items.length,l="",r=0;r<s;r++)v=h.items[r],y=v.checked,w=v.task,m="",v.task&&(b=this.renderer.checkbox(y),g?v.tokens.length>0&&"paragraph"===v.tokens[0].type?(v.tokens[0].text=b+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&"text"===v.tokens[0].tokens[0].type&&(v.tokens[0].tokens[0].text=b+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:b}):m+=b),m+=this.parse(v.tokens,g),l+=this.renderer.listitem(m,w,y);k+=this.renderer.list(l,d,f);continue;case"html":k+=this.renderer.html(h.text);continue;case"paragraph":k+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":l=h.tokens?this.parseInline(h.tokens):h.text;while(n+1<E&&"text"===e[n+1].type)h=e[++n],l+="\n"+(h.tokens?this.parseInline(h.tokens):h.text);k+=t?this.renderer.paragraph(l):l;continue;default:{const e='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return k}parseInline(e,t){t=t||this.renderer;let n,r,i,s="";const o=e.length;for(n=0;n<o;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==i||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))s+=i||"";else switch(r.type){case"escape":s+=t.text(r.text);break;case"html":s+=t.html(r.text);break;case"link":s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":s+=t.image(r.href,r.title,r.text);break;case"strong":s+=t.strong(this.parseInline(r.tokens,t));break;case"em":s+=t.em(this.parseInline(r.tokens,t));break;case"codespan":s+=t.codespan(r.text);break;case"br":s+=t.br();break;case"del":s+=t.del(this.parseInline(r.tokens,t));break;case"text":s+=t.text(r.text);break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return s}}function z(e,t,n){if("undefined"===typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"===typeof t&&(n=t,t=null),t=I({},z.defaults,t||{}),D(t),n){const r=t.highlight;let s;try{s=$.lex(e,t)}catch(i){return n(i)}const o=function(e){let o;if(!e)try{t.walkTokens&&z.walkTokens(s,t.walkTokens),o=W.parse(s,t)}catch(i){e=i}return t.highlight=r,e?n(e):n(null,o)};if(!r||r.length<3)return o();if(delete t.highlight,!s.length)return o();let a=0;return z.walkTokens(s,(function(e){"code"===e.type&&(a++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return o(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),a--,0===a&&o()}))}),0))})),void(0===a&&o())}function r(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+d(e.message+"",!0)+"</pre>";throw e}try{const n=$.lex(e,t);if(t.walkTokens){if(t.async)return Promise.all(z.walkTokens(n,t.walkTokens)).then((()=>W.parse(n,t))).catch(r);z.walkTokens(n,t.walkTokens)}return W.parse(n,t)}catch(i){r(i)}}z.options=z.setOptions=function(e){return I(z.defaults,e),s(z.defaults),z},z.getDefaults=r,z.defaults=i,z.use=function(...e){const t=I({},...e),n=z.defaults.extensions||{renderers:{},childTokens:{}};let r;e.forEach((e=>{if(e.extensions&&(r=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let r=e.renderer.apply(this,n);return!1===r&&(r=t.apply(this,n)),r}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=z.defaults.renderer||new U;for(const t in e.renderer){const r=n[t];n[t]=(...i)=>{let s=e.renderer[t].apply(n,i);return!1===s&&(s=r.apply(n,i)),s}}t.renderer=n}if(e.tokenizer){const n=z.defaults.tokenizer||new P;for(const t in e.tokenizer){const r=n[t];n[t]=(...i)=>{let s=e.tokenizer[t].apply(n,i);return!1===s&&(s=r.apply(n,i)),s}}t.tokenizer=n}if(e.walkTokens){const n=z.defaults.walkTokens;t.walkTokens=function(t){let r=[];return r.push(e.walkTokens.call(this,t)),n&&(r=r.concat(n.call(this,t))),r}}r&&(t.extensions=n),z.setOptions(t)}))},z.walkTokens=function(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(z,r)),r.type){case"table":for(const e of r.header)n=n.concat(z.walkTokens(e.tokens,t));for(const e of r.rows)for(const r of e)n=n.concat(z.walkTokens(r.tokens,t));break;case"list":n=n.concat(z.walkTokens(r.items,t));break;default:z.defaults.extensions&&z.defaults.extensions.childTokens&&z.defaults.extensions.childTokens[r.type]?z.defaults.extensions.childTokens[r.type].forEach((function(e){n=n.concat(z.walkTokens(r[e],t))})):r.tokens&&(n=n.concat(z.walkTokens(r.tokens,t)))}return n},z.parseInline=function(e,t){if("undefined"===typeof e||null===e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!==typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=I({},z.defaults,t||{}),D(t);try{const n=$.lexInline(e,t);return t.walkTokens&&z.walkTokens(n,t.walkTokens),W.parseInline(n,t)}catch(n){if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+d(n.message+"",!0)+"</pre>";throw n}},z.Parser=W,z.parser=W.parse,z.Renderer=U,z.TextRenderer=V,z.Lexer=$,z.lexer=$.lex,z.Tokenizer=P,z.Slugger=B,z.parse=z;z.options,z.setOptions,z.use,z.walkTokens,z.parseInline,W.parse,$.lex},1999:function(e,t,n){"use strict";n.d(t,{lr:function(){return W_}});n(4114),n(6573),n(8100),n(7936);var r=n(144),i=n(6768),s=n(4232),o=n(5130);function a(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){var t=a(e).Element;return e instanceof t||e instanceof Element}function u(e){var t=a(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function l(e){if("undefined"===typeof ShadowRoot)return!1;var t=a(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var h=Math.max,d=Math.min,f=Math.round;function p(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(p())}function m(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),i=1,s=1;t&&u(e)&&(i=e.offsetWidth>0&&f(r.width)/e.offsetWidth||1,s=e.offsetHeight>0&&f(r.height)/e.offsetHeight||1);var o=c(e)?a(e):window,l=o.visualViewport,h=!g()&&n,d=(r.left+(h&&l?l.offsetLeft:0))/i,p=(r.top+(h&&l?l.offsetTop:0))/s,m=r.width/i,v=r.height/s;return{width:m,height:v,top:p,right:d+m,bottom:p+v,left:d,x:d,y:p}}function v(e){var t=a(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function y(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function w(e){return e!==a(e)&&u(e)?y(e):v(e)}function b(e){return e?(e.nodeName||"").toLowerCase():null}function _(e){return((c(e)?e.ownerDocument:e.document)||window.document).documentElement}function k(e){return m(_(e)).left+v(e).scrollLeft}function E(e){return a(e).getComputedStyle(e)}function T(e){var t=E(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function S(e){var t=e.getBoundingClientRect(),n=f(t.width)/e.offsetWidth||1,r=f(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function I(e,t,n){void 0===n&&(n=!1);var r=u(t),i=u(t)&&S(t),s=_(t),o=m(e,i,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==b(t)||T(s))&&(a=w(t)),u(t)?(c=m(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=k(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function C(e){var t=m(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||_(e)}function A(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:u(e)&&T(e)?e:A(x(e))}function D(e,t){var n;void 0===t&&(t=[]);var r=A(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=a(r),o=i?[s].concat(s.visualViewport||[],T(r)?r:[]):r,c=t.concat(o);return i?c:c.concat(D(x(o)))}function R(e){return["table","td","th"].indexOf(b(e))>=0}function O(e){return u(e)&&"fixed"!==E(e).position?e.offsetParent:null}function M(e){var t=/firefox/i.test(p()),n=/Trident/i.test(p());if(n&&u(e)){var r=E(e);if("fixed"===r.position)return null}var i=x(e);l(i)&&(i=i.host);while(u(i)&&["html","body"].indexOf(b(i))<0){var s=E(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function P(e){var t=a(e),n=O(e);while(n&&R(n)&&"static"===E(n).position)n=O(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===E(n).position)?t:n||M(e)||t}n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var N="top",L="bottom",F="right",j="left",$="auto",U=[N,L,F,j],V="start",B="end",W="clippingParents",z="viewport",Y="popper",q="reference",H=U.reduce((function(e,t){return e.concat([t+"-"+V,t+"-"+B])}),[]),K=[].concat(U,[$]).reduce((function(e,t){return e.concat([t,t+"-"+V,t+"-"+B])}),[]),G="beforeRead",Q="read",X="afterRead",Z="beforeMain",J="main",ee="afterMain",te="beforeWrite",ne="write",re="afterWrite",ie=[G,Q,X,Z,J,ee,te,ne,re];function se(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function oe(e){var t=se(e);return ie.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function ae(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function ce(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var ue={placement:"bottom",modifiers:[],strategy:"absolute"};function le(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function he(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?ue:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},ue,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,u={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;h(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:c(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var a=oe(ce([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),l(),u.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(le(t,n)){i.rects={reference:I(t,P(n),"fixed"===i.options.strategy),popper:C(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,c=s.options,l=void 0===c?{}:c,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:u})||i)}else i.reset=!1,r=-1}}},update:ae((function(){return new Promise((function(e){u.forceUpdate(),e(i)}))})),destroy:function(){h(),a=!0}};if(!le(e,t))return u;function l(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:u,options:r}),c=function(){};o.push(a||c)}}))}function h(){o.forEach((function(e){return e()})),o=[]}return u.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var de={passive:!0};function fe(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,c=void 0===o||o,u=a(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,de)})),c&&u.addEventListener("resize",n.update,de),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,de)})),c&&u.removeEventListener("resize",n.update,de)}}var pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fe,data:{}};function ge(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ye(e){var t,n=e.reference,r=e.element,i=e.placement,s=i?ge(i):null,o=i?me(i):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(s){case N:t={x:a,y:n.y-r.height};break;case L:t={x:a,y:n.y+n.height};break;case F:t={x:n.x+n.width,y:c};break;case j:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=s?ve(s):null;if(null!=u){var l="y"===u?"height":"width";switch(o){case V:t[u]=t[u]-(n[l]/2-r[l]/2);break;case B:t[u]=t[u]+(n[l]/2-r[l]/2);break;default:}}return t}function we(e){var t=e.state,n=e.name;t.modifiersData[n]=ye({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var be={name:"popperOffsets",enabled:!0,phase:"read",fn:we,data:{}},_e={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ke(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:f(n*i)/i||0,y:f(r*i)/i||0}}function Ee(e){var t,n=e.popper,r=e.popperRect,i=e.placement,s=e.variation,o=e.offsets,c=e.position,u=e.gpuAcceleration,l=e.adaptive,h=e.roundOffsets,d=e.isFixed,f=o.x,p=void 0===f?0:f,g=o.y,m=void 0===g?0:g,v="function"===typeof h?h({x:p,y:m}):{x:p,y:m};p=v.x,m=v.y;var y=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),b=j,k=N,T=window;if(l){var S=P(n),I="clientHeight",C="clientWidth";if(S===a(n)&&(S=_(n),"static"!==E(S).position&&"absolute"===c&&(I="scrollHeight",C="scrollWidth")),i===N||(i===j||i===F)&&s===B){k=L;var x=d&&S===T&&T.visualViewport?T.visualViewport.height:S[I];m-=x-r.height,m*=u?1:-1}if(i===j||(i===N||i===L)&&s===B){b=F;var A=d&&S===T&&T.visualViewport?T.visualViewport.width:S[C];p-=A-r.width,p*=u?1:-1}}var D,R=Object.assign({position:c},l&&_e),O=!0===h?ke({x:p,y:m},a(n)):{x:p,y:m};return p=O.x,m=O.y,u?Object.assign({},R,(D={},D[k]=w?"0":"",D[b]=y?"0":"",D.transform=(T.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",D)):Object.assign({},R,(t={},t[k]=w?m+"px":"",t[b]=y?p+"px":"",t.transform="",t))}function Te(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:ge(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ee(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ee(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Se={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Te,data:{}};function Ie(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];u(i)&&b(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function Ce(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});u(r)&&b(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var xe={name:"applyStyles",enabled:!0,phase:"write",fn:Ie,effect:Ce,requires:["computeStyles"]};function Ae(e,t,n){var r=ge(e),i=[j,N].indexOf(r)>=0?-1:1,s="function"===typeof n?n(Object.assign({},t,{placement:e})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[j,F].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function De(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=K.reduce((function(e,n){return e[n]=Ae(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}var Re={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:De},Oe={left:"right",right:"left",bottom:"top",top:"bottom"};function Me(e){return e.replace(/left|right|bottom|top/g,(function(e){return Oe[e]}))}var Pe={start:"end",end:"start"};function Ne(e){return e.replace(/start|end/g,(function(e){return Pe[e]}))}function Le(e,t){var n=a(e),r=_(e),i=n.visualViewport,s=r.clientWidth,o=r.clientHeight,c=0,u=0;if(i){s=i.width,o=i.height;var l=g();(l||!l&&"fixed"===t)&&(c=i.offsetLeft,u=i.offsetTop)}return{width:s,height:o,x:c+k(e),y:u}}function Fe(e){var t,n=_(e),r=v(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=h(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=h(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+k(e),c=-r.scrollTop;return"rtl"===E(i||n).direction&&(a+=h(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function je(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $e(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ue(e,t){var n=m(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ve(e,t,n){return t===z?$e(Le(e,n)):c(t)?Ue(t,n):$e(Fe(_(e)))}function Be(e){var t=D(x(e)),n=["absolute","fixed"].indexOf(E(e).position)>=0,r=n&&u(e)?P(e):e;return c(r)?t.filter((function(e){return c(e)&&je(e,r)&&"body"!==b(e)})):[]}function We(e,t,n,r){var i="clippingParents"===t?Be(e):[].concat(t),s=[].concat(i,[n]),o=s[0],a=s.reduce((function(t,n){var i=Ve(e,n,r);return t.top=h(i.top,t.top),t.right=d(i.right,t.right),t.bottom=d(i.bottom,t.bottom),t.left=h(i.left,t.left),t}),Ve(e,o,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ze(){return{top:0,right:0,bottom:0,left:0}}function Ye(e){return Object.assign({},ze(),e)}function qe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function He(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,s=n.strategy,o=void 0===s?e.strategy:s,a=n.boundary,u=void 0===a?W:a,l=n.rootBoundary,h=void 0===l?z:l,d=n.elementContext,f=void 0===d?Y:d,p=n.altBoundary,g=void 0!==p&&p,v=n.padding,y=void 0===v?0:v,w=Ye("number"!==typeof y?y:qe(y,U)),b=f===Y?q:Y,k=e.rects.popper,E=e.elements[g?b:f],T=We(c(E)?E:E.contextElement||_(e.elements.popper),u,h,o),S=m(e.elements.reference),I=ye({reference:S,element:k,strategy:"absolute",placement:i}),C=$e(Object.assign({},k,I)),x=f===Y?C:S,A={top:T.top-x.top+w.top,bottom:x.bottom-T.bottom+w.bottom,left:T.left-x.left+w.left,right:x.right-T.right+w.right},D=e.modifiersData.offset;if(f===Y&&D){var R=D[i];Object.keys(A).forEach((function(e){var t=[F,L].indexOf(e)>=0?1:-1,n=[N,L].indexOf(e)>=0?"y":"x";A[e]+=R[n]*t}))}return A}function Ke(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?K:c,l=me(r),h=l?a?H:H.filter((function(e){return me(e)===l})):U,d=h.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=h);var f=d.reduce((function(t,n){return t[n]=He(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[ge(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}function Ge(e){if(ge(e)===$)return[];var t=Me(e);return[Ne(e),t,Ne(t)]}function Qe(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,u=n.padding,l=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,g=n.allowedAutoPlacements,m=t.options.placement,v=ge(m),y=v===m,w=c||(y||!p?[Me(m)]:Ge(m)),b=[m].concat(w).reduce((function(e,n){return e.concat(ge(n)===$?Ke(t,{placement:n,boundary:l,rootBoundary:h,padding:u,flipVariations:p,allowedAutoPlacements:g}):n)}),[]),_=t.rects.reference,k=t.rects.popper,E=new Map,T=!0,S=b[0],I=0;I<b.length;I++){var C=b[I],x=ge(C),A=me(C)===V,D=[N,L].indexOf(x)>=0,R=D?"width":"height",O=He(t,{placement:C,boundary:l,rootBoundary:h,altBoundary:d,padding:u}),M=D?A?F:j:A?L:N;_[R]>k[R]&&(M=Me(M));var P=Me(M),U=[];if(s&&U.push(O[x]<=0),a&&U.push(O[M]<=0,O[P]<=0),U.every((function(e){return e}))){S=C,T=!1;break}E.set(C,U)}if(T)for(var B=p?3:1,W=function(e){var t=b.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},z=B;z>0;z--){var Y=W(z);if("break"===Y)break}t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}}var Xe={name:"flip",enabled:!0,phase:"main",fn:Qe,requiresIfExists:["offset"],data:{_skip:!1}};function Ze(e){return"x"===e?"y":"x"}function Je(e,t,n){return h(e,d(t,n))}function et(e,t,n){var r=Je(e,t,n);return r>n?n:r}function tt(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,f=n.padding,p=n.tether,g=void 0===p||p,m=n.tetherOffset,v=void 0===m?0:m,y=He(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:l}),w=ge(t.placement),b=me(t.placement),_=!b,k=ve(w),E=Ze(k),T=t.modifiersData.popperOffsets,S=t.rects.reference,I=t.rects.popper,x="function"===typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,A="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(T){if(s){var O,M="y"===k?N:j,$="y"===k?L:F,U="y"===k?"height":"width",B=T[k],W=B+y[M],z=B-y[$],Y=g?-I[U]/2:0,q=b===V?S[U]:I[U],H=b===V?-I[U]:-S[U],K=t.elements.arrow,G=g&&K?C(K):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ze(),X=Q[M],Z=Q[$],J=Je(0,S[U],G[U]),ee=_?S[U]/2-Y-J-X-A.mainAxis:q-J-X-A.mainAxis,te=_?-S[U]/2+Y+J+Z+A.mainAxis:H+J+Z+A.mainAxis,ne=t.elements.arrow&&P(t.elements.arrow),re=ne?"y"===k?ne.clientTop||0:ne.clientLeft||0:0,ie=null!=(O=null==D?void 0:D[k])?O:0,se=B+ee-ie-re,oe=B+te-ie,ae=Je(g?d(W,se):W,B,g?h(z,oe):z);T[k]=ae,R[k]=ae-B}if(a){var ce,ue="x"===k?N:j,le="x"===k?L:F,he=T[E],de="y"===E?"height":"width",fe=he+y[ue],pe=he-y[le],ye=-1!==[N,j].indexOf(w),we=null!=(ce=null==D?void 0:D[E])?ce:0,be=ye?fe:he-S[de]-I[de]-we+A.altAxis,_e=ye?he+S[de]+I[de]-we-A.altAxis:pe,ke=g&&ye?et(be,he,_e):Je(g?be:fe,he,g?_e:pe);T[E]=ke,R[E]=ke-he}t.modifiersData[r]=R}}var nt={name:"preventOverflow",enabled:!0,phase:"main",fn:tt,requiresIfExists:["offset"]},rt=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Ye("number"!==typeof e?e:qe(e,U))};function it(e){var t,n=e.state,r=e.name,i=e.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=ge(n.placement),c=ve(a),u=[j,F].indexOf(a)>=0,l=u?"height":"width";if(s&&o){var h=rt(i.padding,n),d=C(s),f="y"===c?N:j,p="y"===c?L:F,g=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],m=o[c]-n.rects.reference[c],v=P(s),y=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,w=g/2-m/2,b=h[f],_=y-d[l]-h[p],k=y/2-d[l]/2+w,E=Je(b,k,_),T=c;n.modifiersData[r]=(t={},t[T]=E,t.centerOffset=E-k,t)}}function st(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&je(t.elements.popper,i)&&(t.elements.arrow=i)}var ot={name:"arrow",enabled:!0,phase:"main",fn:it,effect:st,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function at(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ct(e){return[N,F,L,j].some((function(t){return e[t]>=0}))}function ut(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=He(t,{elementContext:"reference"}),a=He(t,{altBoundary:!0}),c=at(o,r),u=at(a,i,s),l=ct(c),h=ct(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var lt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ut},ht=[pe,be,Se,xe,Re,Xe,nt,ot,lt],dt=he({defaultModifiers:ht}),ft=Object.defineProperty,pt=(e,t,n)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gt=(e,t,n)=>(pt(e,"symbol"!==typeof t?t+"":t,n),n),mt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};function vt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}var yt=Object.prototype,wt=yt.hasOwnProperty;function bt(e,t){return null!=e&&wt.call(e,t)}var _t=bt,kt=Array.isArray,Et=kt,Tt="object"==typeof mt&&mt&&mt.Object===Object&&mt,St=Tt,It=St,Ct="object"==typeof self&&self&&self.Object===Object&&self,xt=It||Ct||Function("return this")(),At=xt,Dt=At,Rt=Dt.Symbol,Ot=Rt,Mt=Ot,Pt=Object.prototype,Nt=Pt.hasOwnProperty,Lt=Pt.toString,Ft=Mt?Mt.toStringTag:void 0;function jt(e){var t=Nt.call(e,Ft),n=e[Ft];try{e[Ft]=void 0;var r=!0}catch(s){}var i=Lt.call(e);return r&&(t?e[Ft]=n:delete e[Ft]),i}var $t=jt,Ut=Object.prototype,Vt=Ut.toString;function Bt(e){return Vt.call(e)}var Wt=Bt,zt=Ot,Yt=$t,qt=Wt,Ht="[object Null]",Kt="[object Undefined]",Gt=zt?zt.toStringTag:void 0;function Qt(e){return null==e?void 0===e?Kt:Ht:Gt&&Gt in Object(e)?Yt(e):qt(e)}var Xt=Qt;function Zt(e){return null!=e&&"object"==typeof e}var Jt=Zt,en=Xt,tn=Jt,nn="[object Symbol]";function rn(e){return"symbol"==typeof e||tn(e)&&en(e)==nn}var sn=rn,on=Et,an=sn,cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,un=/^\w*$/;function ln(e,t){if(on(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!an(e))||(un.test(e)||!cn.test(e)||null!=t&&e in Object(t))}var hn=ln;function dn(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var fn=dn,pn=Xt,gn=fn,mn="[object AsyncFunction]",vn="[object Function]",yn="[object GeneratorFunction]",wn="[object Proxy]";function bn(e){if(!gn(e))return!1;var t=pn(e);return t==vn||t==yn||t==mn||t==wn}var _n=bn,kn=At,En=kn["__core-js_shared__"],Tn=En,Sn=Tn,In=function(){var e=/[^.]+$/.exec(Sn&&Sn.keys&&Sn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Cn(e){return!!In&&In in e}var xn=Cn,An=Function.prototype,Dn=An.toString;function Rn(e){if(null!=e){try{return Dn.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var On=Rn,Mn=_n,Pn=xn,Nn=fn,Ln=On,Fn=/[\\^$.*+?()[\]{}|]/g,jn=/^\[object .+?Constructor\]$/,$n=Function.prototype,Un=Object.prototype,Vn=$n.toString,Bn=Un.hasOwnProperty,Wn=RegExp("^"+Vn.call(Bn).replace(Fn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zn(e){if(!Nn(e)||Pn(e))return!1;var t=Mn(e)?Wn:jn;return t.test(Ln(e))}var Yn=zn;function qn(e,t){return null==e?void 0:e[t]}var Hn=qn,Kn=Yn,Gn=Hn;function Qn(e,t){var n=Gn(e,t);return Kn(n)?n:void 0}var Xn=Qn,Zn=Xn,Jn=Zn(Object,"create"),er=Jn,tr=er;function nr(){this.__data__=tr?tr(null):{},this.size=0}var rr=nr;function ir(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var sr=ir,or=er,ar="__lodash_hash_undefined__",cr=Object.prototype,ur=cr.hasOwnProperty;function lr(e){var t=this.__data__;if(or){var n=t[e];return n===ar?void 0:n}return ur.call(t,e)?t[e]:void 0}var hr=lr,dr=er,fr=Object.prototype,pr=fr.hasOwnProperty;function gr(e){var t=this.__data__;return dr?void 0!==t[e]:pr.call(t,e)}var mr=gr,vr=er,yr="__lodash_hash_undefined__";function wr(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=vr&&void 0===t?yr:t,this}var br=wr,_r=rr,kr=sr,Er=hr,Tr=mr,Sr=br;function Ir(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}Ir.prototype.clear=_r,Ir.prototype["delete"]=kr,Ir.prototype.get=Er,Ir.prototype.has=Tr,Ir.prototype.set=Sr;var Cr=Ir;function xr(){this.__data__=[],this.size=0}var Ar=xr;function Dr(e,t){return e===t||e!==e&&t!==t}var Rr=Dr,Or=Rr;function Mr(e,t){var n=e.length;while(n--)if(Or(e[n][0],t))return n;return-1}var Pr=Mr,Nr=Pr,Lr=Array.prototype,Fr=Lr.splice;function jr(e){var t=this.__data__,n=Nr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Fr.call(t,n,1),--this.size,!0}var $r=jr,Ur=Pr;function Vr(e){var t=this.__data__,n=Ur(t,e);return n<0?void 0:t[n][1]}var Br=Vr,Wr=Pr;function zr(e){return Wr(this.__data__,e)>-1}var Yr=zr,qr=Pr;function Hr(e,t){var n=this.__data__,r=qr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var Kr=Hr,Gr=Ar,Qr=$r,Xr=Br,Zr=Yr,Jr=Kr;function ei(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}ei.prototype.clear=Gr,ei.prototype["delete"]=Qr,ei.prototype.get=Xr,ei.prototype.has=Zr,ei.prototype.set=Jr;var ti=ei,ni=Xn,ri=At,ii=ni(ri,"Map"),si=ii,oi=Cr,ai=ti,ci=si;function ui(){this.size=0,this.__data__={hash:new oi,map:new(ci||ai),string:new oi}}var li=ui;function hi(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}var di=hi,fi=di;function pi(e,t){var n=e.__data__;return fi(t)?n["string"==typeof t?"string":"hash"]:n.map}var gi=pi,mi=gi;function vi(e){var t=mi(this,e)["delete"](e);return this.size-=t?1:0,t}var yi=vi,wi=gi;function bi(e){return wi(this,e).get(e)}var _i=bi,ki=gi;function Ei(e){return ki(this,e).has(e)}var Ti=Ei,Si=gi;function Ii(e,t){var n=Si(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var Ci=Ii,xi=li,Ai=yi,Di=_i,Ri=Ti,Oi=Ci;function Mi(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}Mi.prototype.clear=xi,Mi.prototype["delete"]=Ai,Mi.prototype.get=Di,Mi.prototype.has=Ri,Mi.prototype.set=Oi;var Pi=Mi,Ni=Pi,Li="Expected a function";function Fi(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(Li);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Fi.Cache||Ni),n}Fi.Cache=Ni;var ji=Fi,$i=ji,Ui=500;function Vi(e){var t=$i(e,(function(e){return n.size===Ui&&n.clear(),e})),n=t.cache;return t}var Bi=Vi,Wi=Bi,zi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yi=/\\(\\)?/g,qi=Wi((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(zi,(function(e,n,r,i){t.push(r?i.replace(Yi,"$1"):n||e)})),t})),Hi=qi;function Ki(e,t){var n=-1,r=null==e?0:e.length,i=Array(r);while(++n<r)i[n]=t(e[n],n,e);return i}var Gi=Ki,Qi=Ot,Xi=Gi,Zi=Et,Ji=sn,es=1/0,ts=Qi?Qi.prototype:void 0,ns=ts?ts.toString:void 0;function rs(e){if("string"==typeof e)return e;if(Zi(e))return Xi(e,rs)+"";if(Ji(e))return ns?ns.call(e):"";var t=e+"";return"0"==t&&1/e==-es?"-0":t}var is=rs,ss=is;function os(e){return null==e?"":ss(e)}var as=os,cs=Et,us=hn,ls=Hi,hs=as;function ds(e,t){return cs(e)?e:us(e,t)?[e]:ls(hs(e))}var fs=ds,ps=Xt,gs=Jt,ms="[object Arguments]";function vs(e){return gs(e)&&ps(e)==ms}var ys=vs,ws=ys,bs=Jt,_s=Object.prototype,ks=_s.hasOwnProperty,Es=_s.propertyIsEnumerable,Ts=ws(function(){return arguments}())?ws:function(e){return bs(e)&&ks.call(e,"callee")&&!Es.call(e,"callee")},Ss=Ts,Is=9007199254740991,Cs=/^(?:0|[1-9]\d*)$/;function xs(e,t){var n=typeof e;return t=null==t?Is:t,!!t&&("number"==n||"symbol"!=n&&Cs.test(e))&&e>-1&&e%1==0&&e<t}var As=xs,Ds=9007199254740991;function Rs(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ds}var Os=Rs,Ms=sn,Ps=1/0;function Ns(e){if("string"==typeof e||Ms(e))return e;var t=e+"";return"0"==t&&1/e==-Ps?"-0":t}var Ls=Ns,Fs=fs,js=Ss,$s=Et,Us=As,Vs=Os,Bs=Ls;function Ws(e,t,n){t=Fs(t,e);var r=-1,i=t.length,s=!1;while(++r<i){var o=Bs(t[r]);if(!(s=null!=e&&n(e,o)))break;e=e[o]}return s||++r!=i?s:(i=null==e?0:e.length,!!i&&Vs(i)&&Us(o,i)&&($s(e)||js(e)))}var zs=Ws,Ys=_t,qs=zs;function Hs(e,t){return null!=e&&qs(e,t,Ys)}var Ks=Hs,Gs=Xt,Qs=Jt,Xs="[object Date]";function Zs(e){return Qs(e)&&Gs(e)==Xs}var Js=Zs;function eo(e){return function(t){return e(t)}}var to=eo,no={},ro={get exports(){return no},set exports(e){no=e}};(function(e,t){var n=St,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,s=i&&i.exports===r,o=s&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=a})(ro,no);var io=Js,so=to,oo=no,ao=oo&&oo.isDate,co=ao?so(ao):io,uo=co,lo=Xt,ho=Et,fo=Jt,po="[object String]";function go(e){return"string"==typeof e||!ho(e)&&fo(e)&&lo(e)==po}var mo=go;function vo(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(t(e[n],n,e))return!0;return!1}var yo=vo,wo=ti;function bo(){this.__data__=new wo,this.size=0}var _o=bo;function ko(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n}var Eo=ko;function To(e){return this.__data__.get(e)}var So=To;function Io(e){return this.__data__.has(e)}var Co=Io,xo=ti,Ao=si,Do=Pi,Ro=200;function Oo(e,t){var n=this.__data__;if(n instanceof xo){var r=n.__data__;if(!Ao||r.length<Ro-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Do(r)}return n.set(e,t),this.size=n.size,this}var Mo=Oo,Po=ti,No=_o,Lo=Eo,Fo=So,jo=Co,$o=Mo;function Uo(e){var t=this.__data__=new Po(e);this.size=t.size}Uo.prototype.clear=No,Uo.prototype["delete"]=Lo,Uo.prototype.get=Fo,Uo.prototype.has=jo,Uo.prototype.set=$o;var Vo=Uo,Bo="__lodash_hash_undefined__";function Wo(e){return this.__data__.set(e,Bo),this}var zo=Wo;function Yo(e){return this.__data__.has(e)}var qo=Yo,Ho=Pi,Ko=zo,Go=qo;function Qo(e){var t=-1,n=null==e?0:e.length;this.__data__=new Ho;while(++t<n)this.add(e[t])}Qo.prototype.add=Qo.prototype.push=Ko,Qo.prototype.has=Go;var Xo=Qo;function Zo(e,t){return e.has(t)}var Jo=Zo,ea=Xo,ta=yo,na=Jo,ra=1,ia=2;function sa(e,t,n,r,i,s){var o=n&ra,a=e.length,c=t.length;if(a!=c&&!(o&&c>a))return!1;var u=s.get(e),l=s.get(t);if(u&&l)return u==t&&l==e;var h=-1,d=!0,f=n&ia?new ea:void 0;s.set(e,t),s.set(t,e);while(++h<a){var p=e[h],g=t[h];if(r)var m=o?r(g,p,h,t,e,s):r(p,g,h,e,t,s);if(void 0!==m){if(m)continue;d=!1;break}if(f){if(!ta(t,(function(e,t){if(!na(f,t)&&(p===e||i(p,e,n,r,s)))return f.push(t)}))){d=!1;break}}else if(p!==g&&!i(p,g,n,r,s)){d=!1;break}}return s["delete"](e),s["delete"](t),d}var oa=sa,aa=At,ca=aa.Uint8Array,ua=ca;function la(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}var ha=la;function da(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var fa=da,pa=Ot,ga=ua,ma=Rr,va=oa,ya=ha,wa=fa,ba=1,_a=2,ka="[object Boolean]",Ea="[object Date]",Ta="[object Error]",Sa="[object Map]",Ia="[object Number]",Ca="[object RegExp]",xa="[object Set]",Aa="[object String]",Da="[object Symbol]",Ra="[object ArrayBuffer]",Oa="[object DataView]",Ma=pa?pa.prototype:void 0,Pa=Ma?Ma.valueOf:void 0;function Na(e,t,n,r,i,s,o){switch(n){case Oa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ra:return!(e.byteLength!=t.byteLength||!s(new ga(e),new ga(t)));case ka:case Ea:case Ia:return ma(+e,+t);case Ta:return e.name==t.name&&e.message==t.message;case Ca:case Aa:return e==t+"";case Sa:var a=ya;case xa:var c=r&ba;if(a||(a=wa),e.size!=t.size&&!c)return!1;var u=o.get(e);if(u)return u==t;r|=_a,o.set(e,t);var l=va(a(e),a(t),r,i,s,o);return o["delete"](e),l;case Da:if(Pa)return Pa.call(e)==Pa.call(t)}return!1}var La=Na;function Fa(e,t){var n=-1,r=t.length,i=e.length;while(++n<r)e[i+n]=t[n];return e}var ja=Fa,$a=ja,Ua=Et;function Va(e,t,n){var r=t(e);return Ua(e)?r:$a(r,n(e))}var Ba=Va;function Wa(e,t){var n=-1,r=null==e?0:e.length,i=0,s=[];while(++n<r){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}var za=Wa;function Ya(){return[]}var qa=Ya,Ha=za,Ka=qa,Ga=Object.prototype,Qa=Ga.propertyIsEnumerable,Xa=Object.getOwnPropertySymbols,Za=Xa?function(e){return null==e?[]:(e=Object(e),Ha(Xa(e),(function(t){return Qa.call(e,t)})))}:Ka,Ja=Za;function ec(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}var tc=ec,nc={},rc={get exports(){return nc},set exports(e){nc=e}};function ic(){return!1}var sc=ic;(function(e,t){var n=At,r=sc,i=t&&!t.nodeType&&t,s=i&&e&&!e.nodeType&&e,o=s&&s.exports===i,a=o?n.Buffer:void 0,c=a?a.isBuffer:void 0,u=c||r;e.exports=u})(rc,nc);var oc=Xt,ac=Os,cc=Jt,uc="[object Arguments]",lc="[object Array]",hc="[object Boolean]",dc="[object Date]",fc="[object Error]",pc="[object Function]",gc="[object Map]",mc="[object Number]",vc="[object Object]",yc="[object RegExp]",wc="[object Set]",bc="[object String]",_c="[object WeakMap]",kc="[object ArrayBuffer]",Ec="[object DataView]",Tc="[object Float32Array]",Sc="[object Float64Array]",Ic="[object Int8Array]",Cc="[object Int16Array]",xc="[object Int32Array]",Ac="[object Uint8Array]",Dc="[object Uint8ClampedArray]",Rc="[object Uint16Array]",Oc="[object Uint32Array]",Mc={};function Pc(e){return cc(e)&&ac(e.length)&&!!Mc[oc(e)]}Mc[Tc]=Mc[Sc]=Mc[Ic]=Mc[Cc]=Mc[xc]=Mc[Ac]=Mc[Dc]=Mc[Rc]=Mc[Oc]=!0,Mc[uc]=Mc[lc]=Mc[kc]=Mc[hc]=Mc[Ec]=Mc[dc]=Mc[fc]=Mc[pc]=Mc[gc]=Mc[mc]=Mc[vc]=Mc[yc]=Mc[wc]=Mc[bc]=Mc[_c]=!1;var Nc=Pc,Lc=Nc,Fc=to,jc=no,$c=jc&&jc.isTypedArray,Uc=$c?Fc($c):Lc,Vc=Uc,Bc=tc,Wc=Ss,zc=Et,Yc=nc,qc=As,Hc=Vc,Kc=Object.prototype,Gc=Kc.hasOwnProperty;function Qc(e,t){var n=zc(e),r=!n&&Wc(e),i=!n&&!r&&Yc(e),s=!n&&!r&&!i&&Hc(e),o=n||r||i||s,a=o?Bc(e.length,String):[],c=a.length;for(var u in e)!t&&!Gc.call(e,u)||o&&("length"==u||i&&("offset"==u||"parent"==u)||s&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||qc(u,c))||a.push(u);return a}var Xc=Qc,Zc=Object.prototype;function Jc(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||Zc;return e===n}var eu=Jc;function tu(e,t){return function(n){return e(t(n))}}var nu=tu,ru=nu,iu=ru(Object.keys,Object),su=iu,ou=eu,au=su,cu=Object.prototype,uu=cu.hasOwnProperty;function lu(e){if(!ou(e))return au(e);var t=[];for(var n in Object(e))uu.call(e,n)&&"constructor"!=n&&t.push(n);return t}var hu=lu,du=_n,fu=Os;function pu(e){return null!=e&&fu(e.length)&&!du(e)}var gu=pu,mu=Xc,vu=hu,yu=gu;function wu(e){return yu(e)?mu(e):vu(e)}var bu=wu,_u=Ba,ku=Ja,Eu=bu;function Tu(e){return _u(e,Eu,ku)}var Su=Tu,Iu=Su,Cu=1,xu=Object.prototype,Au=xu.hasOwnProperty;function Du(e,t,n,r,i,s){var o=n&Cu,a=Iu(e),c=a.length,u=Iu(t),l=u.length;if(c!=l&&!o)return!1;var h=c;while(h--){var d=a[h];if(!(o?d in t:Au.call(t,d)))return!1}var f=s.get(e),p=s.get(t);if(f&&p)return f==t&&p==e;var g=!0;s.set(e,t),s.set(t,e);var m=o;while(++h<c){d=a[h];var v=e[d],y=t[d];if(r)var w=o?r(y,v,d,t,e,s):r(v,y,d,e,t,s);if(!(void 0===w?v===y||i(v,y,n,r,s):w)){g=!1;break}m||(m="constructor"==d)}if(g&&!m){var b=e.constructor,_=t.constructor;b==_||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _||(g=!1)}return s["delete"](e),s["delete"](t),g}var Ru=Du,Ou=Xn,Mu=At,Pu=Ou(Mu,"DataView"),Nu=Pu,Lu=Xn,Fu=At,ju=Lu(Fu,"Promise"),$u=ju,Uu=Xn,Vu=At,Bu=Uu(Vu,"Set"),Wu=Bu,zu=Xn,Yu=At,qu=zu(Yu,"WeakMap"),Hu=qu,Ku=Nu,Gu=si,Qu=$u,Xu=Wu,Zu=Hu,Ju=Xt,el=On,tl="[object Map]",nl="[object Object]",rl="[object Promise]",il="[object Set]",sl="[object WeakMap]",ol="[object DataView]",al=el(Ku),cl=el(Gu),ul=el(Qu),ll=el(Xu),hl=el(Zu),dl=Ju;(Ku&&dl(new Ku(new ArrayBuffer(1)))!=ol||Gu&&dl(new Gu)!=tl||Qu&&dl(Qu.resolve())!=rl||Xu&&dl(new Xu)!=il||Zu&&dl(new Zu)!=sl)&&(dl=function(e){var t=Ju(e),n=t==nl?e.constructor:void 0,r=n?el(n):"";if(r)switch(r){case al:return ol;case cl:return tl;case ul:return rl;case ll:return il;case hl:return sl}return t});var fl=dl,pl=Vo,gl=oa,ml=La,vl=Ru,yl=fl,wl=Et,bl=nc,_l=Vc,kl=1,El="[object Arguments]",Tl="[object Array]",Sl="[object Object]",Il=Object.prototype,Cl=Il.hasOwnProperty;function xl(e,t,n,r,i,s){var o=wl(e),a=wl(t),c=o?Tl:yl(e),u=a?Tl:yl(t);c=c==El?Sl:c,u=u==El?Sl:u;var l=c==Sl,h=u==Sl,d=c==u;if(d&&bl(e)){if(!bl(t))return!1;o=!0,l=!1}if(d&&!l)return s||(s=new pl),o||_l(e)?gl(e,t,n,r,i,s):ml(e,t,c,n,r,i,s);if(!(n&kl)){var f=l&&Cl.call(e,"__wrapped__"),p=h&&Cl.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return s||(s=new pl),i(g,m,n,r,s)}}return!!d&&(s||(s=new pl),vl(e,t,n,r,i,s))}var Al=xl,Dl=Al,Rl=Jt;function Ol(e,t,n,r,i){return e===t||(null==e||null==t||!Rl(e)&&!Rl(t)?e!==e&&t!==t:Dl(e,t,n,r,Ol,i))}var Ml=Ol,Pl=Vo,Nl=Ml,Ll=1,Fl=2;function jl(e,t,n,r){var i=n.length,s=i,o=!r;if(null==e)return!s;e=Object(e);while(i--){var a=n[i];if(o&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}while(++i<s){a=n[i];var c=a[0],u=e[c],l=a[1];if(o&&a[2]){if(void 0===u&&!(c in e))return!1}else{var h=new Pl;if(r)var d=r(u,l,c,e,t,h);if(!(void 0===d?Nl(l,u,Ll|Fl,r,h):d))return!1}}return!0}var $l=jl,Ul=fn;function Vl(e){return e===e&&!Ul(e)}var Bl=Vl,Wl=Bl,zl=bu;function Yl(e){var t=zl(e),n=t.length;while(n--){var r=t[n],i=e[r];t[n]=[r,i,Wl(i)]}return t}var ql=Yl;function Hl(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}var Kl=Hl,Gl=$l,Ql=ql,Xl=Kl;function Zl(e){var t=Ql(e);return 1==t.length&&t[0][2]?Xl(t[0][0],t[0][1]):function(n){return n===e||Gl(n,e,t)}}var Jl=Zl,eh=fs,th=Ls;function nh(e,t){t=eh(t,e);var n=0,r=t.length;while(null!=e&&n<r)e=e[th(t[n++])];return n&&n==r?e:void 0}var rh=nh,ih=rh;function sh(e,t,n){var r=null==e?void 0:ih(e,t);return void 0===r?n:r}var oh=sh;function ah(e,t){return null!=e&&t in Object(e)}var ch=ah,uh=ch,lh=zs;function hh(e,t){return null!=e&&lh(e,t,uh)}var dh=hh,fh=Ml,ph=oh,gh=dh,mh=hn,vh=Bl,yh=Kl,wh=Ls,bh=1,_h=2;function kh(e,t){return mh(e)&&vh(t)?yh(wh(e),t):function(n){var r=ph(n,e);return void 0===r&&r===t?gh(n,e):fh(t,r,bh|_h)}}var Eh=kh;function Th(e){return e}var Sh=Th;function Ih(e){return function(t){return null==t?void 0:t[e]}}var Ch=Ih,xh=rh;function Ah(e){return function(t){return xh(t,e)}}var Dh=Ah,Rh=Ch,Oh=Dh,Mh=hn,Ph=Ls;function Nh(e){return Mh(e)?Rh(Ph(e)):Oh(e)}var Lh=Nh,Fh=Jl,jh=Eh,$h=Sh,Uh=Et,Vh=Lh;function Bh(e){return"function"==typeof e?e:null==e?$h:"object"==typeof e?Uh(e)?jh(e[0],e[1]):Fh(e):Vh(e)}var Wh=Bh;function zh(e){return function(t,n,r){var i=-1,s=Object(t),o=r(t),a=o.length;while(a--){var c=o[e?a:++i];if(!1===n(s[c],c,s))break}return t}}var Yh=zh,qh=Yh,Hh=qh(),Kh=Hh,Gh=Kh,Qh=bu;function Xh(e,t){return e&&Gh(e,t,Qh)}var Zh=Xh,Jh=gu;function ed(e,t){return function(n,r){if(null==n)return n;if(!Jh(n))return e(n,r);var i=n.length,s=t?i:-1,o=Object(n);while(t?s--:++s<i)if(!1===r(o[s],s,o))break;return n}}var td=ed,nd=Zh,rd=td,id=rd(nd),sd=id,od=sd;function ad(e,t){var n;return od(e,(function(e,r,i){return n=t(e,r,i),!n})),!!n}var cd=ad,ud=Rr,ld=gu,hd=As,dd=fn;function fd(e,t,n){if(!dd(n))return!1;var r=typeof t;return!!("number"==r?ld(n)&&hd(t,n.length):"string"==r&&t in n)&&ud(n[t],e)}var pd=fd,gd=yo,md=Wh,vd=cd,yd=Et,wd=pd;function bd(e,t,n){var r=yd(e)?gd:vd;return n&&wd(e,t,n)&&(t=void 0),r(e,md(t))}var _d=bd,kd=Xt,Ed=Jt,Td="[object Boolean]";function Sd(e){return!0===e||!1===e||Ed(e)&&kd(e)==Td}var Id=Sd,Cd=Xt,xd=Jt,Ad="[object Number]";function Dd(e){return"number"==typeof e||xd(e)&&Cd(e)==Ad}var Rd=Dd,Od=Xn,Md=function(){try{var e=Od(Object,"defineProperty");return e({},"",{}),e}catch(t){}}(),Pd=Md,Nd=Pd;function Ld(e,t,n){"__proto__"==t&&Nd?Nd(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Fd=Ld,jd=Fd,$d=Rr,Ud=Object.prototype,Vd=Ud.hasOwnProperty;function Bd(e,t,n){var r=e[t];Vd.call(e,t)&&$d(r,n)&&(void 0!==n||t in e)||jd(e,t,n)}var Wd=Bd,zd=Fd,Yd=Zh,qd=Wh;function Hd(e,t){var n={};return t=qd(t),Yd(e,(function(e,r,i){zd(n,r,t(e,r,i))})),n}var Kd=Hd;function Gd(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var Qd=Gd,Xd=Qd,Zd=Math.max;function Jd(e,t,n){return t=Zd(void 0===t?e.length-1:t,0),function(){var r=arguments,i=-1,s=Zd(r.length-t,0),o=Array(s);while(++i<s)o[i]=r[t+i];i=-1;var a=Array(t+1);while(++i<t)a[i]=r[i];return a[t]=n(o),Xd(e,this,a)}}var ef=Jd;function tf(e){return function(){return e}}var nf=tf,rf=nf,sf=Pd,of=Sh,af=sf?function(e,t){return sf(e,"toString",{configurable:!0,enumerable:!1,value:rf(t),writable:!0})}:of,cf=af,uf=800,lf=16,hf=Date.now;function df(e){var t=0,n=0;return function(){var r=hf(),i=lf-(r-n);if(n=r,i>0){if(++t>=uf)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var ff=df,pf=cf,gf=ff,mf=gf(pf),vf=mf,yf=Sh,wf=ef,bf=vf;function _f(e,t){return bf(wf(e,t,yf),e+"")}var kf=_f;function Ef(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}var Tf=Ef,Sf=fn,If=eu,Cf=Tf,xf=Object.prototype,Af=xf.hasOwnProperty;function Df(e){if(!Sf(e))return Cf(e);var t=If(e),n=[];for(var r in e)("constructor"!=r||!t&&Af.call(e,r))&&n.push(r);return n}var Rf=Df,Of=Xc,Mf=Rf,Pf=gu;function Nf(e){return Pf(e)?Of(e,!0):Mf(e)}var Lf=Nf,Ff=kf,jf=Rr,$f=pd,Uf=Lf,Vf=Object.prototype,Bf=Vf.hasOwnProperty,Wf=Ff((function(e,t){e=Object(e);var n=-1,r=t.length,i=r>2?t[2]:void 0;i&&$f(t[0],t[1],i)&&(r=1);while(++n<r){var s=t[n],o=Uf(s),a=-1,c=o.length;while(++a<c){var u=o[a],l=e[u];(void 0===l||jf(l,Vf[u])&&!Bf.call(e,u))&&(e[u]=s[u])}}return e})),zf=Wf,Yf=Fd,qf=Rr;function Hf(e,t,n){(void 0!==n&&!qf(e[t],n)||void 0===n&&!(t in e))&&Yf(e,t,n)}var Kf=Hf,Gf={},Qf={get exports(){return Gf},set exports(e){Gf=e}};(function(e,t){var n=At,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,s=i&&i.exports===r,o=s?n.Buffer:void 0,a=o?o.allocUnsafe:void 0;function c(e,t){if(t)return e.slice();var n=e.length,r=a?a(n):new e.constructor(n);return e.copy(r),r}e.exports=c})(Qf,Gf);var Xf=ua;function Zf(e){var t=new e.constructor(e.byteLength);return new Xf(t).set(new Xf(e)),t}var Jf=Zf,ep=Jf;function tp(e,t){var n=t?ep(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var np=tp;function rp(e,t){var n=-1,r=e.length;t||(t=Array(r));while(++n<r)t[n]=e[n];return t}var ip=rp,sp=fn,op=Object.create,ap=function(){function e(){}return function(t){if(!sp(t))return{};if(op)return op(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),cp=ap,up=nu,lp=up(Object.getPrototypeOf,Object),hp=lp,dp=cp,fp=hp,pp=eu;function gp(e){return"function"!=typeof e.constructor||pp(e)?{}:dp(fp(e))}var mp=gp,vp=gu,yp=Jt;function wp(e){return yp(e)&&vp(e)}var bp=wp,_p=Xt,kp=hp,Ep=Jt,Tp="[object Object]",Sp=Function.prototype,Ip=Object.prototype,Cp=Sp.toString,xp=Ip.hasOwnProperty,Ap=Cp.call(Object);function Dp(e){if(!Ep(e)||_p(e)!=Tp)return!1;var t=kp(e);if(null===t)return!0;var n=xp.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Cp.call(n)==Ap}var Rp=Dp;function Op(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}var Mp=Op,Pp=Wd,Np=Fd;function Lp(e,t,n,r){var i=!n;n||(n={});var s=-1,o=t.length;while(++s<o){var a=t[s],c=r?r(n[a],e[a],a,n,e):void 0;void 0===c&&(c=e[a]),i?Np(n,a,c):Pp(n,a,c)}return n}var Fp=Lp,jp=Fp,$p=Lf;function Up(e){return jp(e,$p(e))}var Vp=Up,Bp=Kf,Wp=Gf,zp=np,Yp=ip,qp=mp,Hp=Ss,Kp=Et,Gp=bp,Qp=nc,Xp=_n,Zp=fn,Jp=Rp,eg=Vc,tg=Mp,ng=Vp;function rg(e,t,n,r,i,s,o){var a=tg(e,n),c=tg(t,n),u=o.get(c);if(u)Bp(e,n,u);else{var l=s?s(a,c,n+"",e,t,o):void 0,h=void 0===l;if(h){var d=Kp(c),f=!d&&Qp(c),p=!d&&!f&&eg(c);l=c,d||f||p?Kp(a)?l=a:Gp(a)?l=Yp(a):f?(h=!1,l=Wp(c,!0)):p?(h=!1,l=zp(c,!0)):l=[]:Jp(c)||Hp(c)?(l=a,Hp(a)?l=ng(a):Zp(a)&&!Xp(a)||(l=qp(c))):h=!1}h&&(o.set(c,l),i(l,c,r,s,o),o["delete"](c)),Bp(e,n,l)}}var ig=rg,sg=Vo,og=Kf,ag=Kh,cg=ig,ug=fn,lg=Lf,hg=Mp;function dg(e,t,n,r,i){e!==t&&ag(t,(function(s,o){if(i||(i=new sg),ug(s))cg(e,t,o,n,dg,r,i);else{var a=r?r(hg(e,o),s,o+"",e,t,i):void 0;void 0===a&&(a=s),og(e,o,a)}}),lg)}var fg=dg,pg=fg,gg=fn;function mg(e,t,n,r,i,s){return gg(e)&&gg(t)&&(s.set(t,e),pg(e,t,void 0,mg,s),s["delete"](t)),e}var vg=mg,yg=kf,wg=pd;function bg(e){return yg((function(t,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;s=e.length>3&&"function"==typeof s?(i--,s):void 0,o&&wg(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),t=Object(t);while(++r<i){var a=n[r];a&&e(t,a,r,s)}return t}))}var _g=bg,kg=fg,Eg=_g,Tg=Eg((function(e,t,n,r){kg(e,t,n,r)})),Sg=Tg,Ig=Qd,Cg=kf,xg=vg,Ag=Sg,Dg=Cg((function(e){return e.push(void 0,xg),Ig(Ag,void 0,e)})),Rg=Dg;function Og(e){return e&&e.length?e[0]:void 0}var Mg=Og;function Pg(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}var Ng=Pg;const Lg=e=>Object.prototype.toString.call(e).slice(8,-1),Fg=e=>uo(e)&&!isNaN(e.getTime()),jg=e=>"Object"===Lg(e),$g=Ks,Ug=(e,t)=>_d(t,(t=>Ks(e,t))),Vg=(e,t,n="0")=>{e=null!==e&&void 0!==e?String(e):"",t=t||2;while(e.length<t)e=`${n}${e}`;return e},Bg=e=>Array.isArray(e),Wg=e=>Bg(e)&&e.length>0,zg=e=>null==e?null:document&&mo(e)?document.querySelector(e):e.$el??e,Yg=(e,t,n,r=void 0)=>{e.removeEventListener(t,n,r)},qg=(e,t,n,r=void 0)=>(e.addEventListener(t,n,r),()=>Yg(e,t,n,r)),Hg=(e,t)=>!!e&&!!t&&(e===t||e.contains(t)),Kg=(e,t)=>{" "!==e.key&&"Enter"!==e.key||(t(e),e.preventDefault())},Gg=(e,...t)=>{const n={};let r;for(r in e)t.includes(r)||(n[r]=e[r]);return n},Qg=(e,t)=>{const n={};return t.forEach((t=>{t in e&&(n[t]=e[t])})),n};function Xg(e,t,n){return Math.min(Math.max(e,t),n)}var Zg={},Jg={get exports(){return Zg},set exports(e){Zg=e}};(function(e,t){function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default})(Jg,Zg);const em=vt(Zg);var tm={},nm={get exports(){return tm},set exports(e){tm=e}};(function(e,t){function n(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default})(nm,tm);const rm=vt(tm);function im(e,t){var n=um(t);return n.formatToParts?om(n,e):am(n,e)}var sm={year:0,month:1,day:2,hour:3,minute:4,second:5};function om(e,t){try{for(var n=e.formatToParts(t),r=[],i=0;i<n.length;i++){var s=sm[n[i].type];s>=0&&(r[s]=parseInt(n[i].value,10))}return r}catch(o){if(o instanceof RangeError)return[NaN];throw o}}function am(e,t){var n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var cm={};function um(e){if(!cm[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n="06/25/2014, 00:00:00"===t||"‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00"===t;cm[e]=n?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return cm[e]}function lm(e,t,n,r,i,s,o){var a=new Date(0);return a.setUTCFullYear(e,t,n),a.setUTCHours(r,i,s,o),a}var hm=36e5,dm=6e4,fm={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-]\d{2}):?(\d{2})$/};function pm(e,t,n){var r,i,s;if(!e)return 0;if(r=fm.timezoneZ.exec(e),r)return 0;if(r=fm.timezoneHH.exec(e),r)return s=parseInt(r[1],10),ym(s)?-s*hm:NaN;if(r=fm.timezoneHHMM.exec(e),r){s=parseInt(r[1],10);var o=parseInt(r[2],10);return ym(s,o)?(i=Math.abs(s)*hm+o*dm,s>0?-i:i):NaN}if(bm(e)){t=new Date(t||Date.now());var a=n?t:gm(t),c=mm(a,e),u=n?c:vm(t,c,e);return-u}return NaN}function gm(e){return lm(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}function mm(e,t){var n=im(e,t),r=lm(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=e.getTime(),s=i%1e3;return i-=s>=0?s:1e3+s,r-i}function vm(e,t,n){var r=e.getTime(),i=r-t,s=mm(new Date(i),n);if(t===s)return t;i-=s-t;var o=mm(new Date(i),n);return s===o?s:Math.max(s,o)}function ym(e,t){return-23<=e&&e<=23&&(null==t||0<=t&&t<=59)}var wm={};function bm(e){if(wm[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),wm[e]=!0,!0}catch(t){return!1}}var _m=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;const km=_m;var Em=36e5,Tm=6e4,Sm=2,Im={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:km};function Cm(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var n=t||{},r=null==n.additionalDigits?Sm:em(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"===typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"===typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i=xm(e),s=Am(i.date,r),o=s.year,a=s.restDateString,c=Dm(a,o);if(isNaN(c))return new Date(NaN);if(c){var u,l=c.getTime(),h=0;if(i.time&&(h=Rm(i.time),isNaN(h)))return new Date(NaN);if(i.timeZone||n.timeZone){if(u=pm(i.timeZone||n.timeZone,new Date(l+h)),isNaN(u))return new Date(NaN)}else u=rm(new Date(l+h)),u=rm(new Date(l+h+u));return new Date(l+h+u)}return new Date(NaN)}function xm(e){var t,n={},r=Im.dateTimePattern.exec(e);if(r?(n.date=r[1],t=r[3]):(r=Im.datePattern.exec(e),r?(n.date=r[1],t=r[2]):(n.date=null,t=e)),t){var i=Im.timeZone.exec(t);i?(n.time=t.replace(i[1],""),n.timeZone=i[1].trim()):n.time=t}return n}function Am(e,t){var n,r=Im.YYY[t],i=Im.YYYYY[t];if(n=Im.YYYY.exec(e)||i.exec(e),n){var s=n[1];return{year:parseInt(s,10),restDateString:e.slice(s.length)}}if(n=Im.YY.exec(e)||r.exec(e),n){var o=n[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}function Dm(e,t){if(null===t)return null;var n,r,i,s;if(0===e.length)return r=new Date(0),r.setUTCFullYear(t),r;if(n=Im.MM.exec(e),n)return r=new Date(0),i=parseInt(n[1],10)-1,Lm(t,i)?(r.setUTCFullYear(t,i),r):new Date(NaN);if(n=Im.DDD.exec(e),n){r=new Date(0);var o=parseInt(n[1],10);return Fm(t,o)?(r.setUTCFullYear(t,0,o),r):new Date(NaN)}if(n=Im.MMDD.exec(e),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return Lm(t,i,a)?(r.setUTCFullYear(t,i,a),r):new Date(NaN)}if(n=Im.Www.exec(e),n)return s=parseInt(n[1],10)-1,jm(t,s)?Om(t,s):new Date(NaN);if(n=Im.WwwD.exec(e),n){s=parseInt(n[1],10)-1;var c=parseInt(n[2],10)-1;return jm(t,s,c)?Om(t,s,c):new Date(NaN)}return null}function Rm(e){var t,n,r;if(t=Im.HH.exec(e),t)return n=parseFloat(t[1].replace(",",".")),$m(n)?n%24*Em:NaN;if(t=Im.HHMM.exec(e),t)return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),$m(n,r)?n%24*Em+r*Tm:NaN;if(t=Im.HHMMSS.exec(e),t){n=parseInt(t[1],10),r=parseInt(t[2],10);var i=parseFloat(t[3].replace(",","."));return $m(n,r,i)?n%24*Em+r*Tm+1e3*i:NaN}return null}function Om(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var i=r.getUTCDay()||7,s=7*t+n+1-i;return r.setUTCDate(r.getUTCDate()+s),r}var Mm=[31,28,31,30,31,30,31,31,30,31,30,31],Pm=[31,29,31,30,31,30,31,31,30,31,30,31];function Nm(e){return e%400===0||e%4===0&&e%100!==0}function Lm(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;var r=Nm(e);if(r&&n>Pm[t])return!1;if(!r&&n>Mm[t])return!1}return!0}function Fm(e,t){if(t<1)return!1;var n=Nm(e);return!(n&&t>366)&&!(!n&&t>365)}function jm(e,t,n){return!(t<0||t>52)&&(null==n||!(n<0||n>6))}function $m(e,t,n){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}function Um(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Vm(e){return Vm="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vm(e)}function Bm(e){Um(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===Vm(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function Wm(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var zm={};function Ym(){return zm}function qm(e,t){var n,r,i,s,o,a,c,u;Um(1,arguments);var l=Ym(),h=Wm(null!==(n=null!==(r=null!==(i=null!==(s=null===t||void 0===t?void 0:t.weekStartsOn)&&void 0!==s?s:null===t||void 0===t||null===(o=t.locale)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.weekStartsOn)&&void 0!==i?i:l.weekStartsOn)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==n?n:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Bm(e),f=d.getDay(),p=(f<h?7:0)+f-h;return d.setDate(d.getDate()-p),d.setHours(0,0,0,0),d}function Hm(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var Km=6048e5;function Gm(e,t,n){Um(2,arguments);var r=qm(e,n),i=qm(t,n),s=r.getTime()-Hm(r),o=i.getTime()-Hm(i);return Math.round((s-o)/Km)}function Qm(e){Um(1,arguments);var t=Bm(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function Xm(e){Um(1,arguments);var t=Bm(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Zm(e,t){return Um(1,arguments),Gm(Qm(e),Xm(e),t)+1}function Jm(e,t){var n,r,i,s,o,a,c,u;Um(1,arguments);var l=Bm(e),h=l.getFullYear(),d=Ym(),f=Wm(null!==(n=null!==(r=null!==(i=null!==(s=null===t||void 0===t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null===t||void 0===t||null===(o=t.locale)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==i?i:d.firstWeekContainsDate)&&void 0!==r?r:null===(c=d.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setFullYear(h+1,0,f),p.setHours(0,0,0,0);var g=qm(p,t),m=new Date(0);m.setFullYear(h,0,f),m.setHours(0,0,0,0);var v=qm(m,t);return l.getTime()>=g.getTime()?h+1:l.getTime()>=v.getTime()?h:h-1}function ev(e,t){var n,r,i,s,o,a,c,u;Um(1,arguments);var l=Ym(),h=Wm(null!==(n=null!==(r=null!==(i=null!==(s=null===t||void 0===t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null===t||void 0===t||null===(o=t.locale)||void 0===o||null===(a=o.options)||void 0===a?void 0:a.firstWeekContainsDate)&&void 0!==i?i:l.firstWeekContainsDate)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(u=c.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==n?n:1),d=Jm(e,t),f=new Date(0);f.setFullYear(d,0,h),f.setHours(0,0,0,0);var p=qm(f,t);return p}var tv=6048e5;function nv(e,t){Um(1,arguments);var n=Bm(e),r=qm(n,t).getTime()-ev(n,t).getTime();return Math.round(r/tv)+1}function rv(e){return Um(1,arguments),qm(e,{weekStartsOn:1})}function iv(e){Um(1,arguments);var t=Bm(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var i=rv(r),s=new Date(0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);var o=rv(s);return t.getTime()>=i.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function sv(e){Um(1,arguments);var t=iv(e),n=new Date(0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);var r=rv(n);return r}var ov=6048e5;function av(e){Um(1,arguments);var t=Bm(e),n=rv(t).getTime()-sv(t).getTime();return Math.round(n/ov)+1}function cv(e,t){Um(2,arguments);var n=Bm(e),r=Wm(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function uv(e,t){Um(2,arguments);var n=Bm(e),r=Wm(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var i=n.getDate(),s=new Date(n.getTime());s.setMonth(n.getMonth()+r+1,0);var o=s.getDate();return i>=o?s:(n.setFullYear(s.getFullYear(),s.getMonth(),i),n)}function lv(e,t){Um(2,arguments);var n=Wm(t);return uv(e,12*n)}const hv={daily:["year","month","day"],weekly:["year","month","week"],monthly:["year","month"]};function dv({monthComps:e,prevMonthComps:t,nextMonthComps:n},r){const i=[],{firstDayOfWeek:s,firstWeekday:o,isoWeeknumbers:a,weeknumbers:c,numDays:u,numWeeks:l}=e,h=o+(o<s?Ty:0)-s;let d=!0,f=!1,p=!1,g=0;const m=new Intl.DateTimeFormat(r.id,{weekday:"long",year:"numeric",month:"short",day:"numeric"});let v=t.numDays-h+1,y=t.numDays-v+1,w=Math.floor((v-1)/Ty+1),b=1,_=t.numWeeks,k=1,E=t.month,T=t.year;const S=new Date,I=S.getDate(),C=S.getMonth()+1,x=S.getFullYear();for(let A=1;A<=Sy;A++){for(let t=1,h=s;t<=Ty;t++,h+=h===Ty?1-Ty:1){d&&h===o&&(v=1,y=e.numDays,w=Math.floor((v-1)/Ty+1),b=Math.floor((u-v)/Ty+1),_=1,k=l,E=e.month,T=e.year,d=!1,f=!0);const s=r.getDateFromParams(T,E,v,0,0,0,0),S=r.getDateFromParams(T,E,v,12,0,0,0),D=r.getDateFromParams(T,E,v,23,59,59,999),R=s,O=`${Vg(T,4)}-${Vg(E,2)}-${Vg(v,2)}`,M=t,P=Ty-t,N=c[A-1],L=a[A-1],F=v===I&&E===C&&T===x,j=f&&1===v,$=f&&v===u,U=1===A,V=A===l,B=1===t,W=t===Ty,z=qy(T,E,v);i.push({locale:r,id:O,position:++g,label:v.toString(),ariaLabel:m.format(new Date(T,E-1,v)),day:v,dayFromEnd:y,weekday:h,weekdayPosition:M,weekdayPositionFromEnd:P,weekdayOrdinal:w,weekdayOrdinalFromEnd:b,week:_,weekFromEnd:k,weekPosition:A,weeknumber:N,isoWeeknumber:L,month:E,year:T,date:R,startDate:s,endDate:D,noonDate:S,dayIndex:z,isToday:F,isFirstDay:j,isLastDay:$,isDisabled:!f,isFocusable:!f,isFocused:!1,inMonth:f,inPrevMonth:d,inNextMonth:p,onTop:U,onBottom:V,onLeft:B,onRight:W,classes:[`id-${O}`,`day-${v}`,`day-from-end-${y}`,`weekday-${h}`,`weekday-position-${M}`,`weekday-ordinal-${w}`,`weekday-ordinal-from-end-${b}`,`week-${_}`,`week-from-end-${k}`,{"is-today":F,"is-first-day":j,"is-last-day":$,"in-month":f,"in-prev-month":d,"in-next-month":p,"on-top":U,"on-bottom":V,"on-left":B,"on-right":W}]}),f&&$?(f=!1,p=!0,v=1,y=u,w=1,b=Math.floor((u-v)/Ty+1),_=1,k=n.numWeeks,E=n.month,T=n.year):(v++,y--,w=Math.floor((v-1)/Ty+1),b=Math.floor((u-v)/Ty+1))}_++,k--}return i}function fv(e,t,n,r){const i=e.reduce(((e,r,i)=>{const s=Math.floor(i/7);let o=e[s];return o||(o={id:`week-${s+1}`,title:"",week:r.week,weekPosition:r.weekPosition,weeknumber:r.weeknumber,isoWeeknumber:r.isoWeeknumber,weeknumberDisplay:t?r.weeknumber:n?r.isoWeeknumber:void 0,days:[]},e[s]=o),o.days.push(r),e}),Array(e.length/Ty));return i.forEach((e=>{const t=e.days[0],n=e.days[e.days.length-1];t.month===n.month?e.title=`${r.formatDate(t.date,"MMMM YYYY")}`:t.year===n.year?e.title=`${r.formatDate(t.date,"MMM")} - ${r.formatDate(n.date,"MMM YYYY")}`:e.title=`${r.formatDate(t.date,"MMM YYYY")} - ${r.formatDate(n.date,"MMM YYYY")}`})),i}function pv(e,t){return e.days.map((e=>({label:t.formatDate(e.date,t.masks.weekdays),weekday:e.weekday})))}function gv(e,t){return`${t}.${Vg(e,2)}`}function mv(e,t,n){return Qg(n.getDateParts(n.toDate(e)),hv[t])}function vv({day:e,week:t,month:n,year:r},i,s,o){if("daily"===s&&e){const t=new Date(r,n-1,e),s=cv(t,i);return{day:s.getDate(),month:s.getMonth()+1,year:s.getFullYear()}}if("weekly"===s&&t){const e=o.getMonthParts(n,r),s=e.firstDayOfMonth,a=cv(s,7*(t-1+i)),c=o.getDateParts(a);return{week:c.week,month:c.month,year:c.year}}{const e=new Date(r,n-1,1),t=uv(e,i);return{month:t.getMonth()+1,year:t.getFullYear()}}}function yv(e){return null!=e&&null!=e.month&&null!=e.year}function wv(e,t){return!(!yv(e)||!yv(t))&&(e.year!==t.year?e.year<t.year:e.month&&t.month&&e.month!==t.month?e.month<t.month:e.week&&t.week&&e.week!==t.week?e.week<t.week:!(!e.day||!t.day||e.day===t.day)&&e.day<t.day)}function bv(e,t){return!(!yv(e)||!yv(t))&&(e.year!==t.year?e.year>t.year:e.month&&t.month&&e.month!==t.month?e.month>t.month:e.week&&t.week&&e.week!==t.week?e.week>t.week:!(!e.day||!t.day||e.day===t.day)&&e.day>t.day)}function _v(e,t,n){return!!e&&!wv(e,t)&&!bv(e,n)}function kv(e,t){return!(!e&&t)&&(!(e&&!t)&&(!e&&!t||e.year===t.year&&e.month===t.month&&e.week===t.week&&e.day===t.day))}function Ev(e,t,n,r){if(!yv(e)||!yv(t))return[];const i=[];while(!bv(e,t))i.push(e),e=vv(e,1,n,r);return i}function Tv(e){const{day:t,week:n,month:r,year:i}=e;let s=`${i}-${Vg(r,2)}`;return n&&(s=`${s}-w${n}`),t&&(s=`${s}-${Vg(t,2)}`),s}function Sv(e,t){const{month:n,year:r,showWeeknumbers:i,showIsoWeeknumbers:s}=e,o=new Date(r,n-1,15),a=t.getMonthParts(n,r),c=t.getPrevMonthParts(n,r),u=t.getNextMonthParts(n,r),l=dv({monthComps:a,prevMonthComps:c,nextMonthComps:u},t),h=fv(l,i,s,t),d=pv(h[0],t);return{id:Tv(e),month:n,year:r,monthTitle:t.formatDate(o,t.masks.title),shortMonthLabel:t.formatDate(o,"MMM"),monthLabel:t.formatDate(o,"MMMM"),shortYearLabel:r.toString().substring(2),yearLabel:r.toString(),monthComps:a,prevMonthComps:c,nextMonthComps:u,days:l,weeks:h,weekdays:d}}function Iv(e,t){const{day:n,week:r,view:i,trimWeeks:s}=e,o={...t,...e,title:"",viewDays:[],viewWeeks:[]};switch(i){case"daily":{let e=o.days.find((e=>e.inMonth));n?e=o.days.find((e=>e.day===n&&e.inMonth))||e:r&&(e=o.days.find((e=>e.week===r&&e.inMonth)));const t=o.weeks[e.week-1];o.viewWeeks=[t],o.viewDays=[e],o.week=e.week,o.weekTitle=t.title,o.day=e.day,o.dayTitle=e.ariaLabel,o.title=o.dayTitle;break}case"weekly":{o.week=r||1;const e=o.weeks[o.week-1];o.viewWeeks=[e],o.viewDays=e.days,o.weekTitle=e.title,o.title=o.weekTitle;break}default:o.title=o.monthTitle,o.viewWeeks=o.weeks.slice(0,s?o.monthComps.numWeeks:void 0),o.viewDays=o.days;break}return o}class Cv{constructor(e,t,n){gt(this,"keys",[]),gt(this,"store",{}),this.size=e,this.createKey=t,this.createItem=n}get(...e){const t=this.createKey(...e);return this.store[t]}getOrSet(...e){const t=this.createKey(...e);if(this.store[t])return this.store[t];const n=this.createItem(...e);if(this.keys.length>=this.size){const e=this.keys.shift();null!=e&&delete this.store[e]}return this.keys.push(t),this.store[t]=n,n}}class xv{constructor(e,t=new ry){var n;gt(this,"order"),gt(this,"locale"),gt(this,"start",null),gt(this,"end",null),gt(this,"repeat",null),this.locale=t;const{start:r,end:i,span:s,order:o,repeat:a}=e;Fg(r)&&(this.start=t.getDateParts(r)),Fg(i)?this.end=t.getDateParts(i):null!=this.start&&s&&(this.end=t.getDateParts(cv(this.start.date,s-1))),this.order=o??0,a&&(this.repeat=new vy({from:null==(n=this.start)?void 0:n.date,...a},{locale:this.locale}))}static fromMany(e,t){return(Bg(e)?e:[e]).filter((e=>e)).map((e=>xv.from(e,t)))}static from(e,t){if(e instanceof xv)return e;const n={start:null,end:null};return null!=e&&(Bg(e)?(n.start=e[0]??null,n.end=e[1]??null):jg(e)?Object.assign(n,e):(n.start=e,n.end=e)),null!=n.start&&(n.start=new Date(n.start)),null!=n.end&&(n.end=new Date(n.end)),new xv(n,t)}get opts(){const{order:e,locale:t}=this;return{order:e,locale:t}}get hasRepeat(){return!!this.repeat}get isSingleDay(){const{start:e,end:t}=this;return e&&t&&e.year===t.year&&e.month===t.month&&e.day===t.day}get isMultiDay(){return!this.isSingleDay}get daySpan(){return null==this.start||null==this.end?this.hasRepeat?1:1/0:this.end.dayIndex-this.start.dayIndex}startsOnDay(e){var t,n;return(null==(t=this.start)?void 0:t.dayIndex)===e.dayIndex||!!(null==(n=this.repeat)?void 0:n.passes(e))}intersectsDay(e){return this.intersectsDayRange(e,e)}intersectsRange(e){var t,n;return this.intersectsDayRange((null==(t=e.start)?void 0:t.dayIndex)??-1/0,(null==(n=e.end)?void 0:n.dayIndex)??1/0)}intersectsDayRange(e,t){return!(this.start&&this.start.dayIndex>t)&&!(this.end&&this.end.dayIndex<e)}}class Av{constructor(){gt(this,"records",{})}render(e,t,n){var r,i,s,o;let a=null;const c=n[0].dayIndex,u=n[n.length-1].dayIndex;return t.hasRepeat?n.forEach((n=>{var r,i;if(t.startsOnDay(n)){const s=t.daySpan<1/0?t.daySpan:1;a={startDay:n.dayIndex,startTime:(null==(r=t.start)?void 0:r.time)??0,endDay:n.dayIndex+s-1,endTime:(null==(i=t.end)?void 0:i.time)??Ay},this.getRangeRecords(e).push(a)}})):t.intersectsDayRange(c,u)&&(a={startDay:(null==(r=t.start)?void 0:r.dayIndex)??-1/0,startTime:(null==(i=t.start)?void 0:i.time)??-1/0,endDay:(null==(s=t.end)?void 0:s.dayIndex)??1/0,endTime:(null==(o=t.end)?void 0:o.time)??1/0},this.getRangeRecords(e).push(a)),a}getRangeRecords(e){let t=this.records[e.key];return t||(t={ranges:[],data:e},this.records[e.key]=t),t.ranges}getCell(e,t){const n=this.getCells(t),r=n.find((t=>t.data.key===e));return r}cellExists(e,t){const n=this.records[e];return null!=n&&n.ranges.some((e=>e.startDay<=t&&e.endDay>=t))}getCells(e){const t=Object.values(this.records),n=[],{dayIndex:r}=e;return t.forEach((({data:t,ranges:i})=>{i.filter((e=>e.startDay<=r&&e.endDay>=r)).forEach((i=>{const s=r===i.startDay,o=r===i.endDay,a=s?i.startTime:0,c=new Date(e.startDate.getTime()+a),u=o?i.endTime:Ay,l=new Date(e.endDate.getTime()+u),h=0===a&&u===Ay,d=t.order||0;n.push({...i,data:t,onStart:s,onEnd:o,startTime:a,startDate:c,endTime:u,endDate:l,allDay:h,order:d})}))})),n.sort(((e,t)=>e.order-t.order)),n}}const Dv={ar:{dow:7,L:"D/‏M/‏YYYY"},bg:{dow:2,L:"D.MM.YYYY"},ca:{dow:2,L:"DD/MM/YYYY"},"zh-CN":{dow:2,L:"YYYY/MM/DD"},"zh-TW":{dow:1,L:"YYYY/MM/DD"},hr:{dow:2,L:"DD.MM.YYYY"},cs:{dow:2,L:"DD.MM.YYYY"},da:{dow:2,L:"DD.MM.YYYY"},nl:{dow:2,L:"DD-MM-YYYY"},"en-US":{dow:1,L:"MM/DD/YYYY"},"en-AU":{dow:2,L:"DD/MM/YYYY"},"en-CA":{dow:1,L:"YYYY-MM-DD"},"en-GB":{dow:2,L:"DD/MM/YYYY"},"en-IE":{dow:2,L:"DD-MM-YYYY"},"en-NZ":{dow:2,L:"DD/MM/YYYY"},"en-ZA":{dow:1,L:"YYYY/MM/DD"},eo:{dow:2,L:"YYYY-MM-DD"},et:{dow:2,L:"DD.MM.YYYY"},fi:{dow:2,L:"DD.MM.YYYY"},fr:{dow:2,L:"DD/MM/YYYY"},"fr-CA":{dow:1,L:"YYYY-MM-DD"},"fr-CH":{dow:2,L:"DD.MM.YYYY"},de:{dow:2,L:"DD.MM.YYYY"},he:{dow:1,L:"DD.MM.YYYY"},id:{dow:2,L:"DD/MM/YYYY"},it:{dow:2,L:"DD/MM/YYYY"},ja:{dow:1,L:"YYYY年M月D日"},ko:{dow:1,L:"YYYY.MM.DD"},lv:{dow:2,L:"DD.MM.YYYY"},lt:{dow:2,L:"DD.MM.YYYY"},mk:{dow:2,L:"D.MM.YYYY"},nb:{dow:2,L:"D. MMMM YYYY"},nn:{dow:2,L:"D. MMMM YYYY"},pl:{dow:2,L:"DD.MM.YYYY"},pt:{dow:2,L:"DD/MM/YYYY"},ro:{dow:2,L:"DD.MM.YYYY"},ru:{dow:2,L:"DD.MM.YYYY"},sk:{dow:2,L:"DD.MM.YYYY"},"es-ES":{dow:2,L:"DD/MM/YYYY"},"es-MX":{dow:2,L:"DD/MM/YYYY"},sv:{dow:2,L:"YYYY-MM-DD"},th:{dow:1,L:"DD/MM/YYYY"},tr:{dow:2,L:"DD.MM.YYYY"},uk:{dow:2,L:"DD.MM.YYYY"},vi:{dow:2,L:"DD/MM/YYYY"}};Dv.en=Dv["en-US"],Dv.es=Dv["es-ES"],Dv.no=Dv.nb,Dv.zh=Dv["zh-CN"];const Rv=Object.entries(Dv).reduce(((e,[t,{dow:n,L:r}])=>(e[t]={id:t,firstDayOfWeek:n,masks:{L:r}},e)),{}),Ov="MMMM YYYY",Mv="W",Pv="MMM",Nv="h A",Lv=["L","YYYY-MM-DD","YYYY/MM/DD"],Fv=["L h:mm A","YYYY-MM-DD h:mm A","YYYY/MM/DD h:mm A"],jv=["L HH:mm","YYYY-MM-DD HH:mm","YYYY/MM/DD HH:mm"],$v=["h:mm A"],Uv=["HH:mm"],Vv="WWW, MMM D, YYYY",Bv=["L","YYYY-MM-DD","YYYY/MM/DD"],Wv="iso",zv="YYYY-MM-DDTHH:mm:ss.SSSZ",Yv={title:Ov,weekdays:Mv,navMonths:Pv,hours:Nv,input:Lv,inputDateTime:Fv,inputDateTime24hr:jv,inputTime:$v,inputTime24hr:Uv,dayPopover:Vv,data:Bv,model:Wv,iso:zv},qv=300,Hv=60,Kv=80,Gv={maxSwipeTime:qv,minHorizontalSwipeDistance:Hv,maxVerticalSwipeDistance:Kv},Qv={componentPrefix:"V",color:"blue",isDark:!1,navVisibility:"click",titlePosition:"center",transition:"slide-h",touch:Gv,masks:Yv,locales:Rv,datePicker:{updateOnInput:!0,inputDebounce:1e3,popover:{visibility:"hover-focus",placement:"bottom-start",isInteractive:!0}}},Xv=(0,r.Kh)(Qv),Zv=(0,i.EW)((()=>Kd(Xv.locales,(e=>(e.masks=Rg(e.masks,Xv.masks),e))))),Jv=e=>"undefined"!==typeof window&&$g(window.__vcalendar__,e)?oh(window.__vcalendar__,e):oh(Xv,e),ey=12,ty=5;function ny(e,t){const n=(new Intl.DateTimeFormat).resolvedOptions().locale;let r;mo(e)?r=e:$g(e,"id")&&(r=e.id),r=(r||n).toLowerCase();const i=Object.keys(t),s=e=>i.find((t=>t.toLowerCase()===e));r=s(r)||s(r.substring(0,2))||n;const o={...t["en-IE"],...t[r],id:r,monthCacheSize:ey,pageCacheSize:ty},a=jg(e)?Rg(e,o):o;return a}class ry{constructor(e=void 0,t){gt(this,"id"),gt(this,"daysInWeek"),gt(this,"firstDayOfWeek"),gt(this,"masks"),gt(this,"timezone"),gt(this,"hourLabels"),gt(this,"dayNames"),gt(this,"dayNamesShort"),gt(this,"dayNamesShorter"),gt(this,"dayNamesNarrow"),gt(this,"monthNames"),gt(this,"monthNamesShort"),gt(this,"relativeTimeNames"),gt(this,"amPm",["am","pm"]),gt(this,"monthCache"),gt(this,"pageCache");const{id:n,firstDayOfWeek:r,masks:i,monthCacheSize:s,pageCacheSize:o}=ny(e,Zv.value);this.monthCache=new Cv(s,Jy,ew),this.pageCache=new Cv(o,Tv,Sv),this.id=n,this.daysInWeek=Ty,this.firstDayOfWeek=Xg(r,1,Ty),this.masks=i,this.timezone=t||void 0,this.hourLabels=this.getHourLabels(),this.dayNames=nw("long",this.id),this.dayNamesShort=nw("short",this.id),this.dayNamesShorter=this.dayNamesShort.map((e=>e.substring(0,2))),this.dayNamesNarrow=nw("narrow",this.id),this.monthNames=ow("long",this.id),this.monthNamesShort=ow("short",this.id),this.relativeTimeNames=iw(this.id)}formatDate(e,t){return fw(e,t,this)}parseDate(e,t){return dw(e,t,this)}toDate(e,t={}){const n=new Date(NaN);let r=n;const{fillDate:i,mask:s,patch:o,rules:a}=t;if(Rd(e)?(t.type="number",r=new Date(+e)):mo(e)?(t.type="string",r=e?dw(e,s||"iso",this):n):Fg(e)?(t.type="date",r=new Date(e.getTime())):zy(e)&&(t.type="object",r=this.getDateFromParts(e)),r&&(o||a)){let e=this.getDateParts(r);if(o&&null!=i){const t=this.getDateParts(this.toDate(i));e=this.getDateParts(this.toDate({...t,...Qg(e,Ey[o])}))}a&&(e=hw(e,a)),r=this.getDateFromParts(e)}return r||n}toDateOrNull(e,t={}){const n=this.toDate(e,t);return isNaN(n.getTime())?null:n}fromDate(e,{type:t,mask:n}={}){switch(t){case"number":return e?e.getTime():NaN;case"string":return e?this.formatDate(e,n||"iso"):"";case"object":return e?this.getDateParts(e):null;default:return e?new Date(e):null}}range(e){return xv.from(e,this)}ranges(e){return xv.fromMany(e,this)}getDateParts(e){return Zy(e,this)}getDateFromParts(e){return Xy(e,this.timezone)}getDateFromParams(e,t,n,r,i,s,o){return this.getDateFromParts({year:e,month:t,day:n,hours:r,minutes:i,seconds:s,milliseconds:o})}getPage(e){const t=this.pageCache.getOrSet(e,this);return Iv(e,t)}getMonthParts(e,t){const{firstDayOfWeek:n}=this;return this.monthCache.getOrSet(e,t,n)}getThisMonthParts(){const e=new Date;return this.getMonthParts(e.getMonth()+1,e.getFullYear())}getPrevMonthParts(e,t){return 1===e?this.getMonthParts(12,t-1):this.getMonthParts(e-1,t)}getNextMonthParts(e,t){return 12===e?this.getMonthParts(1,t+1):this.getMonthParts(e+1,t)}getHourLabels(){return rw().map((e=>this.formatDate(e,this.masks.hours)))}getDayId(e){return this.formatDate(e,"YYYY-MM-DD")}}var iy=(e=>(e["Any"]="any",e["All"]="all",e))(iy||{}),sy=(e=>(e["Days"]="days",e["Weeks"]="weeks",e["Months"]="months",e["Years"]="years",e))(sy||{}),oy=(e=>(e["Days"]="days",e["Weekdays"]="weekdays",e["Weeks"]="weeks",e["Months"]="months",e["Years"]="years",e))(oy||{}),ay=(e=>(e["OrdinalWeekdays"]="ordinalWeekdays",e))(ay||{});class cy{constructor(e,t,n){gt(this,"validated",!0),this.type=e,this.interval=t,this.from=n,this.from||(console.error('A valid "from" date is required for date interval rule. This rule will be skipped.'),this.validated=!1)}passes(e){if(!this.validated)return!0;const{date:t}=e;switch(this.type){case"days":return Hy(this.from.date,t)%this.interval===0;case"weeks":return Ky(this.from.date,t)%this.interval===0;case"months":return Qy(this.from.date,t)%this.interval===0;case"years":return Gy(this.from.date,t)%this.interval===0;default:return!1}}}class uy{constructor(e,t,n,r){gt(this,"components",[]),this.type=e,this.validator=n,this.getter=r,this.components=this.normalizeComponents(t)}static create(e,t){switch(e){case"days":return new ly(t);case"weekdays":return new hy(t);case"weeks":return new dy(t);case"months":return new fy(t);case"years":return new py(t)}}normalizeComponents(e){if(this.validator(e))return[e];if(!Bg(e))return[];const t=[];return e.forEach((e=>{this.validator(e)?t.push(e):console.error(`Component value ${e} in invalid for "${this.type}" rule. This rule will be skipped.`)})),t}passes(e){const t=this.getter(e),n=t.some((e=>this.components.includes(e)));return n}}class ly extends uy{constructor(e){super("days",e,yy,(({day:e,dayFromEnd:t})=>[e,-t]))}}class hy extends uy{constructor(e){super("weekdays",e,wy,(({weekday:e})=>[e]))}}class dy extends uy{constructor(e){super("weeks",e,by,(({week:e,weekFromEnd:t})=>[e,-t]))}}class fy extends uy{constructor(e){super("months",e,_y,(({month:e})=>[e]))}}class py extends uy{constructor(e){super("years",e,Rd,(({year:e})=>[e]))}}class gy{constructor(e,t){gt(this,"components"),this.type=e,this.components=this.normalizeComponents(t)}normalizeArrayConfig(e){const t=[];return e.forEach(((n,r)=>{if(Rd(n)){if(0===r)return;if(!ky(e[0]))return void console.error(`Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`);if(!wy(n))return void console.error(`Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`);t.push([e[0],n])}else Bg(n)&&t.push(...this.normalizeArrayConfig(n))})),t}normalizeComponents(e){const t=[];return e.forEach(((n,r)=>{if(Rd(n)){if(0===r)return;if(!ky(e[0]))return void console.error(`Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`);if(!wy(n))return void console.error(`Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`);t.push([e[0],n])}else Bg(n)&&t.push(...this.normalizeArrayConfig(n))})),t}passes(e){const{weekday:t,weekdayOrdinal:n,weekdayOrdinalFromEnd:r}=e;return this.components.some((([e,i])=>(e===n||e===-r)&&t===i))}}class my{constructor(e){gt(this,"type","function"),gt(this,"validated",!0),this.fn=e,_n(e)||(console.error("The function rule requires a valid function. This rule will be skipped."),this.validated=!1)}passes(e){return!this.validated||this.fn(e)}}class vy{constructor(e,t={},n){gt(this,"validated",!0),gt(this,"config"),gt(this,"type",iy.Any),gt(this,"from"),gt(this,"until"),gt(this,"rules",[]),gt(this,"locale",new ry),this.parent=n,t.locale&&(this.locale=t.locale),this.config=e,_n(e)?(this.type=iy.All,this.rules=[new my(e)]):Bg(e)?(this.type=iy.Any,this.rules=e.map((e=>new vy(e,t,this)))):jg(e)?(this.type=iy.All,this.from=e.from?this.locale.getDateParts(e.from):null==n?void 0:n.from,this.until=e.until?this.locale.getDateParts(e.until):null==n?void 0:n.until,this.rules=this.getObjectRules(e)):(console.error("Rule group configuration must be an object or an array."),this.validated=!1)}getObjectRules(e){const t=[];if(e.every&&(mo(e.every)&&(e.every=[1,`${e.every}s`]),Bg(e.every))){const[n=1,r=sy.Days]=e.every;t.push(new cy(r,n,this.from))}return Object.values(oy).forEach((n=>{n in e&&t.push(uy.create(n,e[n]))})),Object.values(ay).forEach((n=>{n in e&&t.push(new gy(n,e[n]))})),null!=e.on&&(Bg(e.on)||(e.on=[e.on]),t.push(new vy(e.on,{locale:this.locale},this.parent))),t}passes(e){return!this.validated||!(this.from&&e.dayIndex<=this.from.dayIndex)&&(!(this.until&&e.dayIndex>=this.until.dayIndex)&&(this.type===iy.Any?this.rules.some((t=>t.passes(e))):this.rules.every((t=>t.passes(e)))))}}function yy(e){return!!Rd(e)&&(e>=1&&e<=31)}function wy(e){return!!Rd(e)&&(e>=1&&e<=7)}function by(e){return!!Rd(e)&&(e>=-6&&e<=-1||e>=1&&e<=6)}function _y(e){return!!Rd(e)&&(e>=1&&e<=12)}function ky(e){return!!Rd(e)&&!(e<-5||e>5||0===e)}const Ey={dateTime:["year","month","day","hours","minutes","seconds","milliseconds"],date:["year","month","day"],time:["hours","minutes","seconds","milliseconds"]},Ty=7,Sy=6,Iy=1e3,Cy=60*Iy,xy=60*Cy,Ay=24*xy,Dy=[31,28,31,30,31,30,31,31,30,31,30,31],Ry=["L","iso"],Oy={milliseconds:[0,999,3],seconds:[0,59,2],minutes:[0,59,2],hours:[0,23,2]},My=/d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,Py=/\[([^]*?)\]/gm,Ny={D(e){return e.day},DD(e){return Vg(e.day,2)},d(e){return e.weekday-1},dd(e){return Vg(e.weekday-1,2)},W(e,t){return t.dayNamesNarrow[e.weekday-1]},WW(e,t){return t.dayNamesShorter[e.weekday-1]},WWW(e,t){return t.dayNamesShort[e.weekday-1]},WWWW(e,t){return t.dayNames[e.weekday-1]},M(e){return e.month},MM(e){return Vg(e.month,2)},MMM(e,t){return t.monthNamesShort[e.month-1]},MMMM(e,t){return t.monthNames[e.month-1]},YY(e){return String(e.year).substr(2)},YYYY(e){return Vg(e.year,4)},h(e){return e.hours%12||12},hh(e){return Vg(e.hours%12||12,2)},H(e){return e.hours},HH(e){return Vg(e.hours,2)},m(e){return e.minutes},mm(e){return Vg(e.minutes,2)},s(e){return e.seconds},ss(e){return Vg(e.seconds,2)},S(e){return Math.round(e.milliseconds/100)},SS(e){return Vg(Math.round(e.milliseconds/10),2)},SSS(e){return Vg(e.milliseconds,3)},a(e,t){return e.hours<12?t.amPm[0]:t.amPm[1]},A(e,t){return e.hours<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},Z(){return"Z"},ZZ(e){const t=e.timezoneOffset;return`${t>0?"-":"+"}${Vg(Math.floor(Math.abs(t)/60),2)}`},ZZZ(e){const t=e.timezoneOffset;return`${t>0?"-":"+"}${Vg(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}`},ZZZZ(e){const t=e.timezoneOffset;return`${t>0?"-":"+"}${Vg(Math.floor(Math.abs(t)/60),2)}:${Vg(Math.abs(t)%60,2)}`}},Ly=/\d\d?/,Fy=/\d{3}/,jy=/\d{4}/,$y=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Uy=()=>{},Vy=e=>(t,n,r)=>{const i=r[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~i&&(t.month=i)},By={D:[Ly,(e,t)=>{e.day=t}],Do:[new RegExp(Ly.source+$y.source),(e,t)=>{e.day=parseInt(t,10)}],d:[Ly,Uy],W:[$y,Uy],M:[Ly,(e,t)=>{e.month=t-1}],MMM:[$y,Vy("monthNamesShort")],MMMM:[$y,Vy("monthNames")],YY:[Ly,(e,t)=>{const n=new Date,r=+n.getFullYear().toString().substr(0,2);e.year=+`${t>68?r-1:r}${t}`}],YYYY:[jy,(e,t)=>{e.year=t}],S:[/\d/,(e,t)=>{e.milliseconds=100*t}],SS:[/\d{2}/,(e,t)=>{e.milliseconds=10*t}],SSS:[Fy,(e,t)=>{e.milliseconds=t}],h:[Ly,(e,t)=>{e.hours=t}],m:[Ly,(e,t)=>{e.minutes=t}],s:[Ly,(e,t)=>{e.seconds=t}],a:[$y,(e,t,n)=>{const r=t.toLowerCase();r===n.amPm[0]?e.isPm=!1:r===n.amPm[1]&&(e.isPm=!0)}],Z:[/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,(e,t)=>{"Z"===t&&(t="+00:00");const n=`${t}`.match(/([+-]|\d\d)/gi);if(n){const t=60*+n[1]+parseInt(n[2],10);e.timezoneOffset="+"===n[0]?t:-t}}]};function Wy(e,t){return(Wg(e)&&e||[mo(e)&&e||"YYYY-MM-DD"]).map((e=>Ry.reduce(((e,n)=>e.replace(n,t.masks[n]||"")),e)))}function zy(e){return jg(e)&&"year"in e&&"month"in e&&"day"in e}function Yy(e,t=1){const n=e.getDay()+1,r=n>=t?t-n:-(7-(t-n));return cv(e,r)}function qy(e,t,n){const r=Date.UTC(e,t-1,n);return Hy(new Date(0),new Date(r))}function Hy(e,t){return Math.round((t.getTime()-e.getTime())/Ay)}function Ky(e,t){return Math.ceil(Hy(Yy(e),Yy(t))/7)}function Gy(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}function Qy(e,t){return 12*Gy(e,t)+(t.getMonth()-e.getMonth())}function Xy(e,t=""){const n=new Date,{year:r=n.getFullYear(),month:i=n.getMonth()+1,day:s=n.getDate(),hours:o=0,minutes:a=0,seconds:c=0,milliseconds:u=0}=e;if(t){const e=`${Vg(r,4)}-${Vg(i,2)}-${Vg(s,2)}T${Vg(o,2)}:${Vg(a,2)}:${Vg(c,2)}.${Vg(u,3)}`;return Cm(e,{timeZone:t})}return new Date(r,i-1,s,o,a,c,u)}function Zy(e,t){let n=new Date(e.getTime());t.timezone&&(n=new Date(e.toLocaleString("en-US",{timeZone:t.timezone})),n.setMilliseconds(e.getMilliseconds()));const r=n.getMilliseconds(),i=n.getSeconds(),s=n.getMinutes(),o=n.getHours(),a=r+i*Iy+s*Cy+o*xy,c=n.getMonth()+1,u=n.getFullYear(),l=t.getMonthParts(c,u),h=n.getDate(),d=l.numDays-h+1,f=n.getDay()+1,p=Math.floor((h-1)/7+1),g=Math.floor((l.numDays-h)/7+1),m=Math.ceil((h+Math.abs(l.firstWeekday-l.firstDayOfWeek))/7),v=l.numWeeks-m+1,y=l.weeknumbers[m],w=qy(u,c,h),b={milliseconds:r,seconds:i,minutes:s,hours:o,time:a,day:h,dayFromEnd:d,weekday:f,weekdayOrdinal:p,weekdayOrdinalFromEnd:g,week:m,weekFromEnd:v,weeknumber:y,month:c,year:u,date:n,dateTime:n.getTime(),dayIndex:w,timezoneOffset:0,isValid:!0};return b}function Jy(e,t,n){return`${t}-${e}-${n}`}function ew(e,t,n){const r=t%4===0&&t%100!==0||t%400===0,i=new Date(t,e-1,1),s=i.getDay()+1,o=2===e&&r?29:Dy[e-1],a=n-1,c=Zm(i,{weekStartsOn:a}),u=[],l=[];for(let h=0;h<c;h++){const e=cv(i,7*h);u.push(nv(e,{weekStartsOn:a})),l.push(av(e))}return{firstDayOfWeek:n,firstDayOfMonth:i,inLeapYear:r,firstWeekday:s,numDays:o,numWeeks:c,month:e,year:t,weeknumbers:u,isoWeeknumbers:l}}function tw(){const e=[],t=2020,n=1,r=5;for(let i=0;i<Ty;i++)e.push(Xy({year:t,month:n,day:r+i,hours:12}));return e}function nw(e,t=void 0){const n=new Intl.DateTimeFormat(t,{weekday:e});return tw().map((e=>n.format(e)))}function rw(){const e=[];for(let t=0;t<=24;t++)e.push(new Date(2e3,0,1,t));return e}function iw(e=void 0){const t=["second","minute","hour","day","week","month","quarter","year"],n=new Intl.RelativeTimeFormat(e);return t.reduce(((e,t)=>{const r=n.formatToParts(100,t);return e[t]=r[1].unit,e}),{})}function sw(){const e=[];for(let t=0;t<12;t++)e.push(new Date(2e3,t,15));return e}function ow(e,t=void 0){const n=new Intl.DateTimeFormat(t,{month:e,timeZone:"UTC"});return sw().map((e=>n.format(e)))}function aw(e,t,n){return Rd(t)?t===e:Bg(t)?t.includes(e):_n(t)?t(e,n):!(null!=t.min&&t.min>e)&&(!(null!=t.max&&t.max<e)&&(null==t.interval||e%t.interval===0))}function cw(e,t,n){const r=[],[i,s,o]=t;for(let a=i;a<=s;a++)(null==n||aw(a,n,e))&&r.push({value:a,label:Vg(a,o)});return r}function uw(e,t){return{milliseconds:cw(e,Oy.milliseconds,t.milliseconds),seconds:cw(e,Oy.seconds,t.seconds),minutes:cw(e,Oy.minutes,t.minutes),hours:cw(e,Oy.hours,t.hours)}}function lw(e,t,n,r){const i=cw(e,t,r),s=i.reduce(((e,t)=>{if(t.disabled)return e;if(isNaN(e))return t.value;const r=Math.abs(e-n),i=Math.abs(t.value-n);return i<r?t.value:e}),NaN);return isNaN(s)?n:s}function hw(e,t){const n={...e};return Object.entries(t).forEach((([t,r])=>{const i=Oy[t],s=e[t];n[t]=lw(e,i,s,r)})),n}function dw(e,t,n){const r=Wy(t,n);return r.map((t=>{if("string"!==typeof t)throw new Error("Invalid mask");let r=e;if(r.length>1e3)return!1;let i=!0;const s={};if(t.replace(My,(e=>{if(By[e]){const t=By[e],o=r.search(t[0]);~o?r.replace(t[0],(e=>(t[1](s,e,n),r=r.substr(o+e.length),e))):i=!1}return By[e]?"":e.slice(1,e.length-1)})),!i)return!1;const o=new Date;let a;return null!=s.hours&&(!0===s.isPm&&12!==+s.hours?s.hours=+s.hours+12:!1===s.isPm&&12===+s.hours&&(s.hours=0)),null!=s.timezoneOffset?(s.minutes=+(s.minutes||0)-+s.timezoneOffset,a=new Date(Date.UTC(s.year||o.getFullYear(),s.month||0,s.day||1,s.hours||0,s.minutes||0,s.seconds||0,s.milliseconds||0))):a=n.getDateFromParts({year:s.year||o.getFullYear(),month:(s.month||0)+1,day:s.day||1,hours:s.hours||0,minutes:s.minutes||0,seconds:s.seconds||0,milliseconds:s.milliseconds||0}),a})).find((e=>e))||new Date(e)}function fw(e,t,n){if(null==e)return"";let r=Wy(t,n)[0];/Z$/.test(r)&&(n.timezone="utc");const i=[];r=r.replace(Py,((e,t)=>(i.push(t),"??")));const s=n.getDateParts(e);return r=r.replace(My,(e=>e in Ny?Ny[e](s,n):e.slice(1,e.length-1))),r.replace(/\?\?/g,(()=>i.shift()))}By.DD=By.D,By.dd=By.d,By.WWWW=By.WWW=By.WW=By.W,By.MM=By.M,By.mm=By.m,By.hh=By.H=By.HH=By.h,By.ss=By.s,By.A=By.a,By.ZZZZ=By.ZZZ=By.ZZ=By.Z;let pw=0;class gw{constructor(e,t,n){gt(this,"key",""),gt(this,"hashcode",""),gt(this,"highlight",null),gt(this,"content",null),gt(this,"dot",null),gt(this,"bar",null),gt(this,"event",null),gt(this,"popover",null),gt(this,"customData",null),gt(this,"ranges"),gt(this,"hasRanges",!1),gt(this,"order",0),gt(this,"pinPage",!1),gt(this,"maxRepeatSpan",0),gt(this,"locale");const{dates:r}=Object.assign(this,{hashcode:"",order:0,pinPage:!1},e);this.key||(this.key=++pw),this.locale=n,t.normalizeGlyphs(this),this.ranges=n.ranges(r??[]),this.hasRanges=!!Wg(this.ranges),this.maxRepeatSpan=this.ranges.filter((e=>e.hasRepeat)).map((e=>e.daySpan)).reduce(((e,t)=>Math.max(e,t)),0)}intersectsRange({start:e,end:t}){if(null==e||null==t)return!1;const n=this.ranges.filter((e=>!e.hasRepeat));for(const s of n)if(s.intersectsDayRange(e.dayIndex,t.dayIndex))return!0;const r=this.ranges.filter((e=>e.hasRepeat));if(!r.length)return!1;let i=e;this.maxRepeatSpan>1&&(i=this.locale.getDateParts(cv(i.date,-this.maxRepeatSpan)));while(i.dayIndex<=t.dayIndex){for(const e of r)if(e.startsOnDay(i))return!0;i=this.locale.getDateParts(cv(i.date,1))}return!1}}function mw(e){document&&document.dispatchEvent(new CustomEvent("show-popover",{detail:e}))}function vw(e){document&&document.dispatchEvent(new CustomEvent("hide-popover",{detail:e}))}function yw(e){document&&document.dispatchEvent(new CustomEvent("toggle-popover",{detail:e}))}function ww(e){const{visibility:t}=e,n="click"===t,r="hover"===t,i="hover-focus"===t,s="focus"===t;e.autoHide=!n;let o=!1,a=!1;const c=t=>{n&&(yw({...e,target:e.target||t.currentTarget}),t.stopPropagation())},u=t=>{o||(o=!0,(r||i)&&mw({...e,target:e.target||t.currentTarget}))},l=()=>{o&&(o=!1,(r||i&&!a)&&vw(e))},h=t=>{a||(a=!0,(s||i)&&mw({...e,target:e.target||t.currentTarget}))},d=t=>{a&&!Hg(t.currentTarget,t.relatedTarget)&&(a=!1,(s||i&&!o)&&vw(e))},f={};switch(e.visibility){case"click":f.click=c;break;case"hover":f.mousemove=u,f.mouseleave=l;break;case"focus":f.focusin=h,f.focusout=d;break;case"hover-focus":f.mousemove=u,f.mouseleave=l,f.focusin=h,f.focusout=d;break}return f}const bw=e=>{const t=zg(e);if(null==t)return;const n=t.popoverHandlers;n&&n.length&&(n.forEach((e=>e())),delete t.popoverHandlers)},_w=(e,t)=>{const n=zg(e);if(null==n)return;const r=[],i=ww(t);Object.entries(i).forEach((([e,t])=>{r.push(qg(n,e,t))})),n.popoverHandlers=r},kw={mounted(e,t){const{value:n}=t;n&&_w(e,n)},updated(e,t){const{oldValue:n,value:r}=t,i=null==n?void 0:n.visibility,s=null==r?void 0:r.visibility;i!==s&&(i&&(bw(e),s||vw(n)),s&&_w(e,r))},unmounted(e){bw(e)}},Ew=(e,t,{maxSwipeTime:n,minHorizontalSwipeDistance:r,maxVerticalSwipeDistance:i})=>{if(!e||!e.addEventListener||!_n(t))return null;let s=0,o=0,a=null,c=!1;function u(e){const t=e.changedTouches[0];s=t.screenX,o=t.screenY,a=(new Date).getTime(),c=!0}function l(e){if(!c||!a)return;c=!1;const u=e.changedTouches[0],l=u.screenX-s,h=u.screenY-o,d=(new Date).getTime()-a;if(d<n&&Math.abs(l)>=r&&Math.abs(h)<=i){const e={toLeft:!1,toRight:!1};l<0?e.toLeft=!0:e.toRight=!0,t(e)}}return qg(e,"touchstart",u,{passive:!0}),qg(e,"touchend",l,{passive:!0}),()=>{Yg(e,"touchstart",u),Yg(e,"touchend",l)}},Tw={},Sw=(e,t=10)=>{Tw[e]=Date.now()+t},Iw=(e,t)=>{if(e in Tw){const t=Tw[e];if(Date.now()<t)return;delete Tw[e]}t()};function Cw(){return"undefined"!==typeof window}function xw(e){return Cw()&&e in window}function Aw(e){const t=(0,r.KR)(!1),n=(0,i.EW)((()=>t.value?"dark":"light"));let s,o;function a(e){t.value=e.matches}function c(){xw("matchMedia")&&(s=window.matchMedia("(prefers-color-scheme: dark)"),s.addEventListener("change",a),t.value=s.matches)}function u(){const{selector:n=":root",darkClass:r="dark"}=e.value,i=document.querySelector(n);t.value=i.classList.contains(r)}function l(e){const{selector:n=":root",darkClass:r="dark"}=e;if(Cw()&&n&&r){const e=document.querySelector(n);e&&(o=new MutationObserver(u),o.observe(e,{attributes:!0,attributeFilter:["class"]}),t.value=e.classList.contains(r))}}function h(){f();const n=typeof e.value;"string"===n&&"system"===e.value.toLowerCase()?c():"object"===n?l(e.value):t.value=!!e.value}const d=(0,i.wB)((()=>e.value),(()=>h()),{immediate:!0});function f(){s&&(s.removeEventListener("change",a),s=void 0),o&&(o.disconnect(),o=void 0)}function p(){f(),d()}return(0,i.hi)((()=>p())),{isDark:t,displayMode:n,cleanup:p}}const Dw=["base","start","end","startEnd"],Rw=["class","wrapperClass","contentClass","style","contentStyle","color","fillMode"],Ow={base:{},start:{},end:{}};function Mw(e,t,n=Ow){let r=e,i={};!0===t||mo(t)?(r=mo(t)?t:r,i={...n}):jg(t)&&(i=Ug(t,Dw)?{...t}:{base:{...t},start:{...t},end:{...t}});const s=Rg(i,{start:i.startEnd,end:i.startEnd},n);return Object.entries(s).forEach((([e,t])=>{let n=r;!0===t||mo(t)?(n=mo(t)?t:n,s[e]={color:n}):jg(t)&&(Ug(t,Rw)?s[e]={...t}:s[e]={}),Rg(s[e],{color:n})})),s}class Pw{constructor(){gt(this,"type","highlight")}normalizeConfig(e,t){return Mw(e,t,{base:{fillMode:"light"},start:{fillMode:"solid"},end:{fillMode:"solid"}})}prepareRender(e){e.highlights=[],e.content||(e.content=[])}render({data:e,onStart:t,onEnd:n},r){const{key:i,highlight:s}=e;if(!s)return;const{highlights:o}=r,{base:a,start:c,end:u}=s;t&&n?o.push({...c,key:i,wrapperClass:`vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,class:[`vc-highlight vc-highlight-bg-${c.fillMode}`,c.class],contentClass:[`vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,c.contentClass]}):t?(o.push({...a,key:`${i}-base`,wrapperClass:`vc-day-layer vc-day-box-right-center vc-attr vc-${a.color}`,class:[`vc-highlight vc-highlight-base-start vc-highlight-bg-${a.fillMode}`,a.class]}),o.push({...c,key:i,wrapperClass:`vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,class:[`vc-highlight vc-highlight-bg-${c.fillMode}`,c.class],contentClass:[`vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`,c.contentClass]})):n?(o.push({...a,key:`${i}-base`,wrapperClass:`vc-day-layer vc-day-box-left-center vc-attr vc-${a.color}`,class:[`vc-highlight vc-highlight-base-end vc-highlight-bg-${a.fillMode}`,a.class]}),o.push({...u,key:i,wrapperClass:`vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,class:[`vc-highlight vc-highlight-bg-${u.fillMode}`,u.class],contentClass:[`vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`,u.contentClass]})):o.push({...a,key:`${i}-middle`,wrapperClass:`vc-day-layer vc-day-box-center-center vc-attr vc-${a.color}`,class:[`vc-highlight vc-highlight-base-middle vc-highlight-bg-${a.fillMode}`,a.class],contentClass:[`vc-attr vc-highlight-content-${a.fillMode} vc-${a.color}`,a.contentClass]})}}class Nw{constructor(e,t){gt(this,"type",""),gt(this,"collectionType",""),this.type=e,this.collectionType=t}normalizeConfig(e,t){return Mw(e,t)}prepareRender(e){e[this.collectionType]=[]}render({data:e,onStart:t,onEnd:n},r){const{key:i}=e,s=e[this.type];if(!i||!s)return;const o=r[this.collectionType],{base:a,start:c,end:u}=s;t?o.push({...c,key:i,class:[`vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`,c.class]}):n?o.push({...u,key:i,class:[`vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`,u.class]}):o.push({...a,key:i,class:[`vc-${this.type} vc-${this.type}-base vc-${a.color} vc-attr`,a.class]})}}class Lw extends Nw{constructor(){super("content","content")}normalizeConfig(e,t){return Mw("base",t)}}class Fw extends Nw{constructor(){super("dot","dots")}}class jw extends Nw{constructor(){super("bar","bars")}}class $w{constructor(e){gt(this,"color"),gt(this,"renderers",[new Lw,new Pw,new Fw,new jw]),this.color=e}normalizeGlyphs(e){this.renderers.forEach((t=>{const n=t.type;null!=e[n]&&(e[n]=t.normalizeConfig(this.color,e[n]))}))}prepareRender(e={}){return this.renderers.forEach((t=>{t.prepareRender(e)})),e}render(e,t){this.renderers.forEach((n=>{n.render(e,t)}))}}const Uw=Symbol("__vc_base_context__"),Vw={color:{type:String,default:()=>Jv("color")},isDark:{type:[Boolean,String,Object],default:()=>Jv("isDark")},firstDayOfWeek:Number,masks:Object,locale:[String,Object],timezone:String,minDate:null,maxDate:null,disabledDates:null};function Bw(e){const t=(0,i.EW)((()=>e.color??"")),n=(0,i.EW)((()=>e.isDark??!1)),{displayMode:r}=Aw(n),s=(0,i.EW)((()=>new $w(t.value))),o=(0,i.EW)((()=>{if(e.locale instanceof ry)return e.locale;const t=jg(e.locale)?e.locale:{id:e.locale,firstDayOfWeek:e.firstDayOfWeek,masks:e.masks};return new ry(t,e.timezone)})),a=(0,i.EW)((()=>o.value.masks)),c=(0,i.EW)((()=>e.minDate)),u=(0,i.EW)((()=>e.maxDate)),l=(0,i.EW)((()=>{const t=e.disabledDates?[...e.disabledDates]:[];return null!=c.value&&t.push({start:null,end:cv(o.value.toDate(c.value),-1)}),null!=u.value&&t.push({start:cv(o.value.toDate(u.value),1),end:null}),o.value.ranges(t)})),h=(0,i.EW)((()=>new gw({key:"disabled",dates:l.value,order:100},s.value,o.value))),d={color:t,isDark:n,displayMode:r,theme:s,locale:o,masks:a,minDate:c,maxDate:u,disabledDates:l,disabledAttribute:h};return(0,i.Gt)(Uw,d),d}function Ww(e){return(0,i.WQ)(Uw,(()=>Bw(e)),!0)}function zw(e){return`__vc_slot_${e}__`}function Yw(e,t={}){Object.keys(e).forEach((n=>{(0,i.Gt)(zw(t[n]??n),e[n])}))}function qw(e){return(0,i.WQ)(zw(e),null)}const Hw={...Vw,view:{type:String,default:"monthly",validator(e){return["daily","weekly","monthly"].includes(e)}},rows:{type:Number,default:1},columns:{type:Number,default:1},step:Number,titlePosition:{type:String,default:()=>Jv("titlePosition")},navVisibility:{type:String,default:()=>Jv("navVisibility")},showWeeknumbers:[Boolean,String],showIsoWeeknumbers:[Boolean,String],expanded:Boolean,borderless:Boolean,transparent:Boolean,initialPage:Object,initialPagePosition:{type:Number,default:1},minPage:Object,maxPage:Object,transition:String,attributes:Array,trimWeeks:Boolean,disablePageSwipe:Boolean},Kw=["dayclick","daymouseenter","daymouseleave","dayfocusin","dayfocusout","daykeydown","weeknumberclick","transition-start","transition-end","did-move","update:view","update:pages"],Gw=Symbol("__vc_calendar_context__");function Qw(e,{slots:t,emit:n}){const s=(0,r.KR)(null),o=(0,r.KR)(null),a=(0,r.KR)((new Date).getDate()),c=(0,r.KR)(!1),u=(0,r.KR)(Symbol()),l=(0,r.KR)(Symbol()),h=(0,r.KR)(e.view),d=(0,r.KR)([]),f=(0,r.KR)("");let p=null,g=null;Yw(t);const{theme:m,color:v,displayMode:y,locale:w,masks:b,minDate:_,maxDate:k,disabledAttribute:E,disabledDates:T}=Ww(e),S=(0,i.EW)((()=>e.rows*e.columns)),I=(0,i.EW)((()=>e.step||S.value)),C=(0,i.EW)((()=>Mg(d.value)??null)),x=(0,i.EW)((()=>Ng(d.value)??null)),A=(0,i.EW)((()=>e.minPage||(_.value?U(_.value):null))),D=(0,i.EW)((()=>e.maxPage||(k.value?U(k.value):null))),R=(0,i.EW)((()=>e.navVisibility)),O=(0,i.EW)((()=>!!e.showWeeknumbers)),M=(0,i.EW)((()=>!!e.showIsoWeeknumbers)),P=(0,i.EW)((()=>"monthly"===h.value)),N=(0,i.EW)((()=>"weekly"===h.value)),L=(0,i.EW)((()=>"daily"===h.value)),F=()=>{c.value=!0,n("transition-start")},j=()=>{c.value=!1,n("transition-end"),p&&(p.resolve(!0),p=null)},$=(e,t,n=h.value)=>vv(e,t,n,w.value),U=e=>mv(e,h.value,w.value),V=e=>{E.value&&H.value&&(e.isDisabled=H.value.cellExists(E.value.key,e.dayIndex))},B=e=>{e.isFocusable=e.inMonth&&e.day===a.value},W=(e,t)=>{for(const n of e)for(const e of n.days)if(!1===t(e))return},z=(0,i.EW)((()=>d.value.reduce(((e,t)=>(e.push(...t.viewDays),e)),[]))),Y=(0,i.EW)((()=>{const t=[];return(e.attributes||[]).forEach(((e,n)=>{e&&e.dates&&t.push(new gw({...e,order:e.order||0},m.value,w.value))})),E.value&&t.push(E.value),t})),q=(0,i.EW)((()=>Wg(Y.value))),H=(0,i.EW)((()=>{const e=new Av;return Y.value.forEach((t=>{t.ranges.forEach((n=>{e.render(t,n,z.value)}))})),e})),K=(0,i.EW)((()=>z.value.reduce(((e,t)=>(e[t.dayIndex]={day:t,cells:[]},e[t.dayIndex].cells.push(...H.value.getCells(t)),e)),{}))),G=(t,n)=>{const r=e.showWeeknumbers||e.showIsoWeeknumbers;return null==r?"":Id(r)?r?"left":"":r.startsWith("right")?n>1?"right":r:t>1?"left":r},Q=()=>{var e,t;if(!q.value)return null;const n=Y.value.find((e=>e.pinPage))||Y.value[0];if(!n||!n.hasRanges)return null;const[r]=n.ranges,i=(null==(e=r.start)?void 0:e.date)||(null==(t=r.end)?void 0:t.date);return i?U(i):null},X=()=>{if(yv(C.value))return C.value;const e=Q();return yv(e)?e:U(new Date)},Z=(e,t={})=>{const{view:n=h.value,position:r=1,force:i}=t,s=r>0?1-r:-(S.value+r);let o=$(e,s,n),a=$(o,S.value-1,n);return i||(wv(o,A.value)?o=A.value:bv(a,D.value)&&(o=$(D.value,1-S.value)),a=$(o,S.value-1)),{fromPage:o,toPage:a}},J=(e,t,n="")=>{if("none"===n||"fade"===n)return n;if((null==e?void 0:e.view)!==(null==t?void 0:t.view))return"fade";const r=bv(t,e),i=wv(t,e);return r||i?"slide-v"===n?i?"slide-down":"slide-up":i?"slide-right":"slide-left":"fade"},ee=(t={})=>new Promise(((n,r)=>{const{position:i=1,force:s=!1,transition:o}=t,a=yv(t.page)?t.page:X(),{fromPage:c}=Z(a,{position:i,force:s}),u=[];for(let t=0;t<S.value;t++){const n=$(c,t),r=t+1,i=Math.ceil(r/e.columns),s=e.rows-i+1,o=r%e.columns||e.columns,a=e.columns-o+1,l=G(o,a);u.push(w.value.getPage({...n,view:h.value,titlePosition:e.titlePosition,trimWeeks:e.trimWeeks,position:r,row:i,rowFromEnd:s,column:o,columnFromEnd:a,showWeeknumbers:O.value,showIsoWeeknumbers:M.value,weeknumberPosition:l}))}f.value=J(d.value[0],u[0],o),d.value=u,f.value&&"none"!==f.value?p={resolve:n,reject:r}:n(!0)})),te=e=>{const t=C.value??U(new Date);return $(t,e)},ne=(e,t={})=>{const n=yv(e)?e:U(e);Object.assign(t,Z(n,{...t,force:!0}));const r=Ev(t.fromPage,t.toPage,h.value,w.value).map((e=>_v(e,A.value,D.value)));return r.some((e=>e))},re=(e,t={})=>ne(te(e),t),ie=(0,i.EW)((()=>re(-I.value))),se=(0,i.EW)((()=>re(I.value))),oe=async(e,t={})=>!(!t.force&&!ne(e,t))&&(t.fromPage&&!kv(t.fromPage,C.value)&&(vw({id:u.value,hideDelay:0}),t.view&&(Sw("view",10),h.value=t.view),await ee({...t,page:t.fromPage,position:1,force:!0}),n("did-move",d.value)),!0),ae=(e,t={})=>oe(te(e),t),ce=()=>ae(-I.value),ue=()=>ae(I.value),le=e=>{const t=P.value?".in-month":"",n=`.id-${w.value.getDayId(e)}${t}`,r=`${n}.vc-focusable, ${n} .vc-focusable`,i=s.value;if(i){const e=i.querySelector(r);if(e)return e.focus(),!0}return!1},he=async(e,t={})=>!!le(e)||(await oe(e,t),le(e)),de=(e,t)=>{a.value=e.day,n("dayclick",e,t)},fe=(e,t)=>{n("daymouseenter",e,t)},pe=(e,t)=>{n("daymouseleave",e,t)},ge=(e,t)=>{a.value=e.day,o.value=e,e.isFocused=!0,n("dayfocusin",e,t)},me=(e,t)=>{o.value=null,e.isFocused=!1,n("dayfocusout",e,t)},ve=(e,t)=>{n("daykeydown",e,t);const r=e.noonDate;let i=null;switch(t.key){case"ArrowLeft":i=cv(r,-1);break;case"ArrowRight":i=cv(r,1);break;case"ArrowUp":i=cv(r,-7);break;case"ArrowDown":i=cv(r,7);break;case"Home":i=cv(r,1-e.weekdayPosition);break;case"End":i=cv(r,e.weekdayPositionFromEnd);break;case"PageUp":i=t.altKey?lv(r,-1):uv(r,-1);break;case"PageDown":i=t.altKey?lv(r,1):uv(r,1);break}i&&(t.preventDefault(),he(i).catch())},ye=e=>{const t=o.value;null!=t&&ve(t,e)},we=(e,t)=>{n("weeknumberclick",e,t)};ee({page:e.initialPage,position:e.initialPagePosition}),(0,i.sV)((()=>{!e.disablePageSwipe&&s.value&&(g=Ew(s.value,(({toLeft:e=!1,toRight:t=!1})=>{e?ue():t&&ce()}),Jv("touch")))})),(0,i.hi)((()=>{d.value=[],g&&g()})),(0,i.wB)((()=>w.value),(()=>{ee()})),(0,i.wB)((()=>S.value),(()=>ee())),(0,i.wB)((()=>e.view),(()=>h.value=e.view)),(0,i.wB)((()=>h.value),(()=>{Iw("view",(()=>{ee()})),n("update:view",h.value)})),(0,i.wB)((()=>a.value),(()=>{W(d.value,(e=>B(e)))})),(0,i.nT)((()=>{n("update:pages",d.value),W(d.value,(e=>{V(e),B(e)}))}));const be={emit:n,containerRef:s,focusedDay:o,inTransition:c,navPopoverId:u,dayPopoverId:l,view:h,pages:d,transitionName:f,theme:m,color:v,displayMode:y,locale:w,masks:b,attributes:Y,disabledAttribute:E,disabledDates:T,attributeContext:H,days:z,dayCells:K,count:S,step:I,firstPage:C,lastPage:x,canMovePrev:ie,canMoveNext:se,minPage:A,maxPage:D,isMonthly:P,isWeekly:N,isDaily:L,navVisibility:R,showWeeknumbers:O,showIsoWeeknumbers:M,getDateAddress:U,canMove:ne,canMoveBy:re,move:oe,moveBy:ae,movePrev:ce,moveNext:ue,onTransitionBeforeEnter:F,onTransitionAfterEnter:j,tryFocusDate:le,focusDate:he,onKeydown:ye,onDayKeydown:ve,onDayClick:de,onDayMouseenter:fe,onDayMouseleave:pe,onDayFocusin:ge,onDayFocusout:me,onWeeknumberClick:we};return(0,i.Gt)(Gw,be),be}function Xw(){const e=(0,i.WQ)(Gw);if(e)return e;throw new Error("Calendar context missing. Please verify this component is nested within a valid context provider.")}const Zw=(0,i.pM)({inheritAttrs:!1,emits:["before-show","after-show","before-hide","after-hide"],props:{id:{type:[Number,String,Symbol],required:!0},showDelay:{type:Number,default:0},hideDelay:{type:Number,default:110},boundarySelector:{type:String}},setup(e,{emit:t}){let n;const s=(0,r.KR)();let o=null,a=null;const c=(0,r.Kh)({isVisible:!1,target:null,data:null,transition:"slide-fade",placement:"bottom",direction:"",positionFixed:!1,modifiers:[],isInteractive:!0,visibility:"click",isHovered:!1,isFocused:!1,autoHide:!1,force:!1});function u(e){e&&(c.direction=e.split("-")[0])}function l({placement:e,options:t}){u(e||(null==t?void 0:t.placement))}const h=(0,i.EW)((()=>({placement:c.placement,strategy:c.positionFixed?"fixed":"absolute",boundary:"",modifiers:[{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:l},...c.modifiers||[]],onFirstUpdate:l}))),d=(0,i.EW)((()=>{const e="left"===c.direction||"right"===c.direction;let t="";if(c.placement){const e=c.placement.split("-");e.length>1&&(t=e[1])}return["start","top","left"].includes(t)?e?"top":"left":["end","bottom","right"].includes(t)?e?"bottom":"right":e?"middle":"center"}));function f(){a&&(a.destroy(),a=null)}function p(){(0,i.dY)((()=>{const e=zg(c.target);e&&s.value&&(a&&a.state.elements.reference!==e&&f(),a?a.update():a=dt(e,s.value,h.value))}))}function g(e){Object.assign(c,Gg(e,"force"))}function m(e,t){clearTimeout(n),e>0?n=setTimeout(t,e):t()}function v(e){if(!e||!a)return!1;const t=zg(e);return t===a.state.elements.reference}async function y(t={}){c.force||(t.force&&(c.force=!0),m(t.showDelay??e.showDelay,(()=>{c.isVisible&&(c.force=!1),g({...t,isVisible:!0}),p()})))}function w(t={}){a&&(t.target&&!v(t.target)||c.force||(t.force&&(c.force=!0),m(t.hideDelay??e.hideDelay,(()=>{c.isVisible||(c.force=!1),c.isVisible=!1}))))}function b(e={}){null!=e.target&&(c.isVisible&&v(e.target)?w(e):y(e))}function _(e){if(!a)return;const t=a.state.elements.reference;if(!s.value||!t)return;const n=e.target;Hg(s.value,n)||Hg(t,n)||w({force:!0})}function k(e){"Esc"!==e.key&&"Escape"!==e.key||w()}function E({detail:t}){t.id&&t.id===e.id&&y(t)}function T({detail:t}){t.id&&t.id===e.id&&w(t)}function S({detail:t}){t.id&&t.id===e.id&&b(t)}function I(){qg(document,"keydown",k),qg(document,"click",_),qg(document,"show-popover",E),qg(document,"hide-popover",T),qg(document,"toggle-popover",S)}function C(){Yg(document,"keydown",k),Yg(document,"click",_),Yg(document,"show-popover",E),Yg(document,"hide-popover",T),Yg(document,"toggle-popover",S)}function x(e){t("before-show",e)}function A(e){c.force=!1,t("after-show",e)}function D(e){t("before-hide",e)}function R(e){c.force=!1,f(),t("after-hide",e)}function O(e){e.stopPropagation()}function M(){c.isHovered=!0,c.isInteractive&&["hover","hover-focus"].includes(c.visibility)&&y()}function P(){if(c.isHovered=!1,!a)return;const e=a.state.elements.reference;!c.autoHide||c.isFocused||e&&e===document.activeElement||!["hover","hover-focus"].includes(c.visibility)||w()}function N(){c.isFocused=!0,c.isInteractive&&["focus","hover-focus"].includes(c.visibility)&&y()}function L(e){!["focus","hover-focus"].includes(c.visibility)||e.relatedTarget&&Hg(s.value,e.relatedTarget)||(c.isFocused=!1,!c.isHovered&&c.autoHide&&w())}function F(){null!=o&&(o.disconnect(),o=null)}return(0,i.wB)((()=>s.value),(e=>{F(),e&&(o=new ResizeObserver((()=>{a&&a.update()})),o.observe(e))})),(0,i.wB)((()=>c.placement),u,{immediate:!0}),(0,i.sV)((()=>{I()})),(0,i.hi)((()=>{f(),F(),C()})),{...(0,r.QW)(c),popoverRef:s,alignment:d,hide:w,setupPopper:p,beforeEnter:x,afterEnter:A,beforeLeave:D,afterLeave:R,onClick:O,onMouseOver:M,onMouseLeave:P,onFocusIn:N,onFocusOut:L}}}),Jw=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};function eb(e,t,n,r,a,c){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["vc-popover-content-wrapper",{"is-interactive":e.isInteractive}]),ref:"popoverRef",onClick:t[0]||(t[0]=(...t)=>e.onClick&&e.onClick(...t)),onMouseover:t[1]||(t[1]=(...t)=>e.onMouseOver&&e.onMouseOver(...t)),onMouseleave:t[2]||(t[2]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t)),onFocusin:t[3]||(t[3]=(...t)=>e.onFocusIn&&e.onFocusIn(...t)),onFocusout:t[4]||(t[4]=(...t)=>e.onFocusOut&&e.onFocusOut(...t))},[(0,i.bF)(o.eB,{name:`vc-${e.transition}`,appear:"",onBeforeEnter:e.beforeEnter,onAfterEnter:e.afterEnter,onBeforeLeave:e.beforeLeave,onAfterLeave:e.afterLeave},{default:(0,i.k6)((()=>[e.isVisible?((0,i.uX)(),(0,i.CE)("div",(0,i.v6)({key:0,tabindex:"-1",class:`vc-popover-content direction-${e.direction}`},e.$attrs),[(0,i.RG)(e.$slots,"default",{direction:e.direction,alignment:e.alignment,data:e.data,hide:e.hide},(()=>[(0,i.eW)((0,s.v_)(e.data),1)])),(0,i.Lk)("span",{class:(0,s.C4)(["vc-popover-caret",`direction-${e.direction}`,`align-${e.alignment}`])},null,2)],16)):(0,i.Q3)("",!0)])),_:3},8,["name","onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],34)}const tb=Jw(Zw,[["render",eb]]),nb={class:"vc-day-popover-row"},rb={key:0,class:"vc-day-popover-row-indicator"},ib={class:"vc-day-popover-row-label"},sb=(0,i.pM)({__name:"PopoverRow",props:{attribute:null},setup(e){const t=e,n=(0,i.EW)((()=>{const{content:e,highlight:n,dot:r,bar:i,popover:s}=t.attribute;return s&&s.hideIndicator?null:e?{class:`vc-bar vc-day-popover-row-bar vc-attr vc-${e.base.color}`}:n?{class:`vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${n.base.color}`}:r?{class:`vc-dot vc-attr vc-${r.base.color}`}:i?{class:`vc-bar vc-day-popover-row-bar vc-attr vc-${i.base.color}`}:null}));return(t,o)=>((0,i.uX)(),(0,i.CE)("div",nb,[(0,r.R1)(n)?((0,i.uX)(),(0,i.CE)("div",rb,[(0,i.Lk)("span",{class:(0,s.C4)((0,r.R1)(n).class)},null,2)])):(0,i.Q3)("",!0),(0,i.Lk)("div",ib,[(0,i.RG)(t.$slots,"default",{},(()=>[(0,i.eW)((0,s.v_)(e.attribute.popover?e.attribute.popover.label:"No content provided"),1)]))])]))}}),ob={inheritAttrs:!1},ab=(0,i.pM)({...ob,__name:"CalendarSlot",props:{name:null},setup(e){const t=e,n=qw(t.name);return(e,t)=>(0,r.R1)(n)?((0,i.uX)(),(0,i.Wv)((0,i.$y)((0,r.R1)(n)),(0,s._B)((0,i.v6)({key:0},e.$attrs)),null,16)):(0,i.RG)(e.$slots,"default",{key:1})}}),cb={class:"vc-day-popover-container"},ub={key:0,class:"vc-day-popover-header"},lb=(0,i.pM)({__name:"CalendarDayPopover",setup(e){const{dayPopoverId:t,displayMode:n,color:o,masks:a,locale:c}=Xw();function u(e,t){return c.value.formatDate(e,t)}function l(e){return c.value.formatDate(e.date,a.value.dayPopover)}return(e,c)=>((0,i.uX)(),(0,i.Wv)(tb,{id:(0,r.R1)(t),class:(0,s.C4)([`vc-${(0,r.R1)(o)}`,`vc-${(0,r.R1)(n)}`])},{default:(0,i.k6)((({data:{day:e,attributes:t},hide:n})=>[(0,i.bF)(ab,{name:"day-popover",day:e,"day-title":l(e),attributes:t,format:u,masks:(0,r.R1)(a),hide:n},{default:(0,i.k6)((()=>[(0,i.Lk)("div",cb,[(0,r.R1)(a).dayPopover?((0,i.uX)(),(0,i.CE)("div",ub,(0,s.v_)(l(e)),1)):(0,i.Q3)("",!0),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t,(e=>((0,i.uX)(),(0,i.Wv)(sb,{key:e.key,attribute:e},null,8,["attribute"])))),128))])])),_:2},1032,["day","day-title","attributes","masks","hide"])])),_:1},8,["id","class"]))}}),hb={},db={"stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},fb=(0,i.Lk)("polyline",{points:"9 18 15 12 9 6"},null,-1),pb=[fb];function gb(e,t){return(0,i.uX)(),(0,i.CE)("svg",db,pb)}const mb=Jw(hb,[["render",gb]]),vb={},yb={"stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},wb=(0,i.Lk)("polyline",{points:"15 18 9 12 15 6"},null,-1),bb=[wb];function _b(e,t){return(0,i.uX)(),(0,i.CE)("svg",yb,bb)}const kb=Jw(vb,[["render",_b]]),Eb={},Tb={"stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},Sb=(0,i.Lk)("polyline",{points:"6 9 12 15 18 9"},null,-1),Ib=[Sb];function Cb(e,t){return(0,i.uX)(),(0,i.CE)("svg",Tb,Ib)}const xb=Jw(Eb,[["render",Cb]]),Ab={},Db={fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},Rb=(0,i.Lk)("path",{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Ob=[Rb];function Mb(e,t){return(0,i.uX)(),(0,i.CE)("svg",Db,Ob)}const Pb=Jw(Ab,[["render",Mb]]),Nb=Object.freeze(Object.defineProperty({__proto__:null,IconChevronDown:xb,IconChevronLeft:kb,IconChevronRight:mb,IconClock:Pb},Symbol.toStringTag,{value:"Module"})),Lb=(0,i.pM)({__name:"BaseIcon",props:{name:{type:String,required:!0},width:{type:String},height:{type:String},size:{type:String,default:"26"},viewBox:{type:String}},setup(e){const t=e,n=(0,i.EW)((()=>t.width||t.size)),s=(0,i.EW)((()=>t.height||t.size)),o=(0,i.EW)((()=>Nb[`Icon${t.name}`]));return(e,t)=>((0,i.uX)(),(0,i.Wv)((0,i.$y)((0,r.R1)(o)),{width:(0,r.R1)(n),height:(0,r.R1)(s),class:"vc-base-icon"},null,8,["width","height"]))}}),Fb=["disabled"],jb={key:1,class:"vc-title-wrapper"},$b={type:"button",class:"vc-title"},Ub=["disabled"],Vb=(0,i.pM)({__name:"CalendarHeader",props:{page:null,layout:null,isLg:{type:Boolean},isXl:{type:Boolean},is2xl:{type:Boolean},hideTitle:{type:Boolean},hideArrows:{type:Boolean}},setup(e){const t=e,{navPopoverId:n,navVisibility:a,canMovePrev:c,movePrev:u,canMoveNext:l,moveNext:h}=Xw(),d=(0,i.EW)((()=>{switch(t.page.titlePosition){case"left":return"bottom-start";case"right":return"bottom-end";default:return"bottom"}})),f=(0,i.EW)((()=>{const{page:e}=t;return{id:n.value,visibility:a.value,placement:d.value,modifiers:[{name:"flip",options:{fallbackPlacements:["bottom"]}}],data:{page:e},isInteractive:!0}})),p=(0,i.EW)((()=>t.page.titlePosition.includes("left"))),g=(0,i.EW)((()=>t.page.titlePosition.includes("right"))),m=(0,i.EW)((()=>t.layout?t.layout:p.value?"tu-pn":g.value?"pn-tu":"p-tu-n;")),v=(0,i.EW)((()=>({prev:m.value.includes("p")&&!t.hideArrows,title:m.value.includes("t")&&!t.hideTitle,next:m.value.includes("n")&&!t.hideArrows}))),y=(0,i.EW)((()=>{const e=m.value.split("").map((e=>{switch(e){case"p":return"[prev] auto";case"n":return"[next] auto";case"t":return"[title] auto";case"-":return"1fr";default:return""}})).join(" ");return{gridTemplateColumns:e}}));return(t,n)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["vc-header",{"is-lg":e.isLg,"is-xl":e.isXl,"is-2xl":e.is2xl}]),style:(0,s.Tr)((0,r.R1)(y))},[(0,r.R1)(v).prev?((0,i.uX)(),(0,i.CE)("button",{key:0,type:"button",class:"vc-arrow vc-prev vc-focus",disabled:!(0,r.R1)(c),onClick:n[0]||(n[0]=(...e)=>(0,r.R1)(u)&&(0,r.R1)(u)(...e)),onKeydown:n[1]||(n[1]=(0,o.jR)(((...e)=>(0,r.R1)(u)&&(0,r.R1)(u)(...e)),["space","enter"]))},[(0,i.bF)(ab,{name:"header-prev-button",disabled:!(0,r.R1)(c)},{default:(0,i.k6)((()=>[(0,i.bF)(Lb,{name:"ChevronLeft",size:"24"})])),_:1},8,["disabled"])],40,Fb)):(0,i.Q3)("",!0),(0,r.R1)(v).title?((0,i.uX)(),(0,i.CE)("div",jb,[(0,i.bF)(ab,{name:"header-title-wrapper"},{default:(0,i.k6)((()=>[(0,i.bo)(((0,i.uX)(),(0,i.CE)("button",$b,[(0,i.bF)(ab,{name:"header-title",title:e.page.title},{default:(0,i.k6)((()=>[(0,i.Lk)("span",null,(0,s.v_)(e.page.title),1)])),_:1},8,["title"])])),[[(0,r.R1)(kw),(0,r.R1)(f)]])])),_:1})])):(0,i.Q3)("",!0),(0,r.R1)(v).next?((0,i.uX)(),(0,i.CE)("button",{key:2,type:"button",class:"vc-arrow vc-next vc-focus",disabled:!(0,r.R1)(l),onClick:n[2]||(n[2]=(...e)=>(0,r.R1)(h)&&(0,r.R1)(h)(...e)),onKeydown:n[3]||(n[3]=(0,o.jR)(((...e)=>(0,r.R1)(h)&&(0,r.R1)(h)(...e)),["space","enter"]))},[(0,i.bF)(ab,{name:"header-next-button",disabled:!(0,r.R1)(l)},{default:(0,i.k6)((()=>[(0,i.bF)(Lb,{name:"ChevronRight",size:"24"})])),_:1},8,["disabled"])],40,Ub)):(0,i.Q3)("",!0)],6))}}),Bb=Symbol("__vc_page_context__");function Wb(e){const{locale:t,getDateAddress:n,canMove:r}=Xw();function s(i,s){const{month:o,year:a}=n(new Date);return sw().map(((n,c)=>{const u=c+1;return{month:u,year:i,id:gv(u,i),label:t.value.formatDate(n,s),ariaLabel:t.value.formatDate(n,"MMMM"),isActive:u===e.value.month&&i===e.value.year,isCurrent:u===o&&i===a,isDisabled:!r({month:u,year:i},{position:e.value.position})}}))}function o(t,i){const{year:s}=n(new Date),{position:o}=e.value,a=[];for(let n=t;n<=i;n+=1){const t=[...Array(12).keys()].some((e=>r({month:e+1,year:n},{position:o})));a.push({year:n,id:n.toString(),label:n.toString(),ariaLabel:n.toString(),isActive:n===e.value.year,isCurrent:n===s,isDisabled:!t})}return a}const a={page:e,getMonthItems:s,getYearItems:o};return(0,i.Gt)(Bb,a),a}function zb(){const e=(0,i.WQ)(Bb);if(e)return e;throw new Error("Page context missing. Please verify this component is nested within a valid context provider.")}const Yb={class:"vc-nav-header"},qb=["disabled"],Hb=["disabled"],Kb={class:"vc-nav-items"},Gb=["data-id","aria-label","disabled","onClick","onKeydown"],Qb=(0,i.pM)({__name:"CalendarNav",setup(e){const{masks:t,move:n}=Xw(),{page:o,getMonthItems:a,getYearItems:c}=zb(),u=(0,r.KR)(!0),l=12,h=(0,r.KR)(o.value.year),d=(0,r.KR)(g(o.value.year)),f=(0,r.KR)(null);function p(){setTimeout((()=>{if(null==f.value)return;const e=f.value.querySelector(".vc-nav-item:not(:disabled)");e&&e.focus()}),10)}function g(e){return Math.floor(e/l)}function m(){u.value=!u.value}function v(e){return e*l}function y(e){return l*(e+1)-1}function w(){L.value&&(u.value&&_(),E())}function b(){F.value&&(u.value&&k(),T())}function _(){h.value--}function k(){h.value++}function E(){d.value--}function T(){d.value++}const S=(0,i.EW)((()=>a(h.value,t.value.navMonths).map((e=>({...e,click:()=>n({month:e.month,year:e.year},{position:o.value.position})}))))),I=(0,i.EW)((()=>a(h.value-1,t.value.navMonths))),C=(0,i.EW)((()=>I.value.some((e=>!e.isDisabled)))),x=(0,i.EW)((()=>a(h.value+1,t.value.navMonths))),A=(0,i.EW)((()=>x.value.some((e=>!e.isDisabled)))),D=(0,i.EW)((()=>c(v(d.value),y(d.value)).map((e=>({...e,click:()=>{h.value=e.year,u.value=!0,p()}}))))),R=(0,i.EW)((()=>c(v(d.value-1),y(d.value-1)))),O=(0,i.EW)((()=>R.value.some((e=>!e.isDisabled)))),M=(0,i.EW)((()=>c(v(d.value+1),y(d.value+1)))),P=(0,i.EW)((()=>M.value.some((e=>!e.isDisabled)))),N=(0,i.EW)((()=>u.value?S.value:D.value)),L=(0,i.EW)((()=>u.value?C.value:O.value)),F=(0,i.EW)((()=>u.value?A.value:P.value)),j=(0,i.EW)((()=>Mg(D.value.map((e=>e.year))))),$=(0,i.EW)((()=>Ng(D.value.map((e=>e.year))))),U=(0,i.EW)((()=>u.value?h.value:`${j.value} - ${$.value}`));return(0,i.nT)((()=>{h.value=o.value.year,p()})),(0,i.wB)((()=>h.value),(e=>d.value=g(e))),(0,i.sV)((()=>p())),(e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"vc-nav-container",ref_key:"navContainer",ref:f},[(0,i.Lk)("div",Yb,[(0,i.Lk)("button",{type:"button",class:"vc-nav-arrow is-left vc-focus",disabled:!(0,r.R1)(L),onClick:w,onKeydown:t[0]||(t[0]=e=>(0,r.R1)(Kg)(e,w))},[(0,i.bF)(ab,{name:"nav-prev-button",move:w,disabled:!(0,r.R1)(L)},{default:(0,i.k6)((()=>[(0,i.bF)(Lb,{name:"ChevronLeft",width:"22px",height:"24px"})])),_:1},8,["disabled"])],40,qb),(0,i.Lk)("button",{type:"button",class:"vc-nav-title vc-focus",onClick:m,onKeydown:t[1]||(t[1]=e=>(0,r.R1)(Kg)(e,m))},(0,s.v_)((0,r.R1)(U)),33),(0,i.Lk)("button",{type:"button",class:"vc-nav-arrow is-right vc-focus",disabled:!(0,r.R1)(F),onClick:b,onKeydown:t[2]||(t[2]=e=>(0,r.R1)(Kg)(e,b))},[(0,i.bF)(ab,{name:"nav-next-button",move:b,disabled:!(0,r.R1)(F)},{default:(0,i.k6)((()=>[(0,i.bF)(Lb,{name:"ChevronRight",width:"22px",height:"24px"})])),_:1},8,["disabled"])],40,Hb)]),(0,i.Lk)("div",Kb,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,r.R1)(N),(e=>((0,i.uX)(),(0,i.CE)("button",{key:e.label,type:"button","data-id":e.id,"aria-label":e.ariaLabel,class:(0,s.C4)(["vc-nav-item vc-focus",[e.isActive?"is-active":e.isCurrent?"is-current":""]]),disabled:e.isDisabled,onClick:e.click,onKeydown:t=>(0,r.R1)(Kg)(t,e.click)},(0,s.v_)(e.label),43,Gb)))),128))])],512))}}),Xb=(0,i.pM)({__name:"CalendarPageProvider",props:{page:null},setup(e){const t=e;return Wb((0,r.lW)(t,"page")),(e,t)=>(0,i.RG)(e.$slots,"default")}}),Zb=(0,i.pM)({__name:"CalendarNavPopover",setup(e){const{navPopoverId:t,color:n,displayMode:o}=Xw();return(e,a)=>((0,i.uX)(),(0,i.Wv)(tb,{id:(0,r.R1)(t),class:(0,s.C4)(["vc-nav-popover-container",`vc-${(0,r.R1)(n)}`,`vc-${(0,r.R1)(o)}`])},{default:(0,i.k6)((({data:e})=>[(0,i.bF)(Xb,{page:e.page},{default:(0,i.k6)((()=>[(0,i.bF)(ab,{name:"nav"},{default:(0,i.k6)((()=>[(0,i.bF)(Qb)])),_:1})])),_:2},1032,["page"])])),_:1},8,["id","class"]))}}),Jb=(0,i.pM)({directives:{popover:kw},components:{CalendarSlot:ab},props:{day:{type:Object,required:!0}},setup(e){const{locale:t,theme:n,attributeContext:r,dayPopoverId:s,onDayClick:o,onDayMouseenter:a,onDayMouseleave:c,onDayFocusin:u,onDayFocusout:l,onDayKeydown:h}=Xw(),d=(0,i.EW)((()=>e.day)),f=(0,i.EW)((()=>r.value.getCells(d.value))),p=(0,i.EW)((()=>f.value.map((e=>e.data)))),g=(0,i.EW)((()=>({...d.value,attributes:p.value,attributeCells:f.value})));function m({data:e},{popovers:t}){const{key:n,customData:r,popover:i}=e;if(!i)return;const s=zf({key:n,customData:r,attribute:e},{...i},{visibility:i.label?"hover":"click",placement:"bottom",isInteractive:!i.label});t.splice(0,0,s)}const v=(0,i.EW)((()=>{const e={...n.value.prepareRender({}),popovers:[]};return f.value.forEach((t=>{n.value.render(t,e),m(t,e)})),e})),y=(0,i.EW)((()=>v.value.highlights)),w=(0,i.EW)((()=>!!Wg(y.value))),b=(0,i.EW)((()=>v.value.content)),_=(0,i.EW)((()=>v.value.dots)),k=(0,i.EW)((()=>!!Wg(_.value))),E=(0,i.EW)((()=>v.value.bars)),T=(0,i.EW)((()=>!!Wg(E.value))),S=(0,i.EW)((()=>v.value.popovers)),I=(0,i.EW)((()=>S.value.map((e=>e.attribute)))),C=qw("day-content"),x=(0,i.EW)((()=>["vc-day",...d.value.classes,{"vc-day-box-center-center":!C},{"is-not-in-month":!e.day.inMonth}])),A=(0,i.EW)((()=>{let e;e=d.value.isFocusable?"0":"-1";const t=["vc-day-content vc-focusable vc-focus vc-attr",{"vc-disabled":d.value.isDisabled},oh(Ng(y.value),"contentClass"),oh(Ng(b.value),"class")||""],n={...oh(Ng(y.value),"contentStyle"),...oh(Ng(b.value),"style")};return{class:t,style:n,tabindex:e,"aria-label":d.value.ariaLabel,"aria-disabled":!!d.value.isDisabled,role:"button"}})),D=(0,i.EW)((()=>({click(e){o(g.value,e)},mouseenter(e){a(g.value,e)},mouseleave(e){c(g.value,e)},focusin(e){u(g.value,e)},focusout(e){l(g.value,e)},keydown(e){h(g.value,e)}}))),R=(0,i.EW)((()=>Wg(S.value)?zf({id:s.value,data:{day:d,attributes:I.value}},...S.value):null));return{attributes:p,attributeCells:f,bars:E,dayClasses:x,dayContentProps:A,dayContentEvents:D,dayPopover:R,glyphs:v,dots:_,hasDots:k,hasBars:T,highlights:y,hasHighlights:w,locale:t,popovers:S}}}),e_={key:0,class:"vc-highlights vc-day-layer"},t_={key:1,class:"vc-day-layer vc-day-box-center-bottom"},n_={class:"vc-dots"},r_={key:2,class:"vc-day-layer vc-day-box-center-bottom"},i_={class:"vc-bars"};function s_(e,t,n,r,o,a){const c=(0,i.g2)("CalendarSlot"),u=(0,i.gN)("popover");return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(e.dayClasses)},[e.hasHighlights?((0,i.uX)(),(0,i.CE)("div",e_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.highlights,(({key:e,wrapperClass:t,class:n,style:r})=>((0,i.uX)(),(0,i.CE)("div",{key:e,class:(0,s.C4)(t)},[(0,i.Lk)("div",{class:(0,s.C4)(n),style:(0,s.Tr)(r)},null,6)],2)))),128))])):(0,i.Q3)("",!0),(0,i.bF)(c,{name:"day-content",day:e.day,attributes:e.attributes,"attribute-cells":e.attributeCells,dayProps:e.dayContentProps,dayEvents:e.dayContentEvents,locale:e.locale},{default:(0,i.k6)((()=>[(0,i.bo)(((0,i.uX)(),(0,i.CE)("div",(0,i.v6)(e.dayContentProps,(0,i.Tb)(e.dayContentEvents,!0)),[(0,i.eW)((0,s.v_)(e.day.label),1)],16)),[[u,e.dayPopover]])])),_:1},8,["day","attributes","attribute-cells","dayProps","dayEvents","locale"]),e.hasDots?((0,i.uX)(),(0,i.CE)("div",t_,[(0,i.Lk)("div",n_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.dots,(({key:e,class:t,style:n})=>((0,i.uX)(),(0,i.CE)("span",{key:e,class:(0,s.C4)(t),style:(0,s.Tr)(n)},null,6)))),128))])])):(0,i.Q3)("",!0),e.hasBars?((0,i.uX)(),(0,i.CE)("div",r_,[(0,i.Lk)("div",i_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.bars,(({key:e,class:t,style:n})=>((0,i.uX)(),(0,i.CE)("span",{key:e,class:(0,s.C4)(t),style:(0,s.Tr)(n)},null,6)))),128))])])):(0,i.Q3)("",!0)],2)}const o_=Jw(Jb,[["render",s_]]),a_={class:"vc-weekdays"},c_=["onClick"],u_={inheritAttrs:!1},l_=(0,i.pM)({...u_,__name:"CalendarPage",setup(e){const{page:t}=zb(),{onWeeknumberClick:n}=Xw();return(e,o)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["vc-pane",`row-${(0,r.R1)(t).row}`,`row-from-end-${(0,r.R1)(t).rowFromEnd}`,`column-${(0,r.R1)(t).column}`,`column-from-end-${(0,r.R1)(t).columnFromEnd}`]),ref:"pane"},[(0,i.bF)(Vb,{page:(0,r.R1)(t),"is-lg":"","hide-arrows":""},null,8,["page"]),(0,i.Lk)("div",{class:(0,s.C4)(["vc-weeks",{[`vc-show-weeknumbers-${(0,r.R1)(t).weeknumberPosition}`]:(0,r.R1)(t).weeknumberPosition}])},[(0,i.Lk)("div",a_,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,r.R1)(t).weekdays,(({weekday:e,label:t},n)=>((0,i.uX)(),(0,i.CE)("div",{key:n,class:(0,s.C4)(`vc-weekday vc-weekday-${e}`)},(0,s.v_)(t),3)))),128))]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,r.R1)(t).viewWeeks,(e=>((0,i.uX)(),(0,i.CE)("div",{key:`weeknumber-${e.weeknumber}`,class:"vc-week"},[(0,r.R1)(t).weeknumberPosition?((0,i.uX)(),(0,i.CE)("div",{key:0,class:(0,s.C4)(["vc-weeknumber",`is-${(0,r.R1)(t).weeknumberPosition}`])},[(0,i.Lk)("span",{class:(0,s.C4)(["vc-weeknumber-content"]),onClick:t=>(0,r.R1)(n)(e,t)},(0,s.v_)(e.weeknumberDisplay),9,c_)],2)):(0,i.Q3)("",!0),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.days,(e=>((0,i.uX)(),(0,i.Wv)(o_,{key:e.id,day:e},null,8,["day"])))),128))])))),128))],2)],2))}}),h_=(0,i.pM)({components:{CalendarHeader:Vb,CalendarPage:l_,CalendarNavPopover:Zb,CalendarDayPopover:lb,CalendarPageProvider:Xb,CalendarSlot:ab},props:Hw,emit:Kw,setup(e,{emit:t,slots:n}){return Qw(e,{emit:t,slots:n})}}),d_={class:"vc-pane-header-wrapper"};function f_(e,t,n,r,a,c){const u=(0,i.g2)("CalendarHeader"),l=(0,i.g2)("CalendarPage"),h=(0,i.g2)("CalendarSlot"),d=(0,i.g2)("CalendarPageProvider"),f=(0,i.g2)("CalendarDayPopover"),p=(0,i.g2)("CalendarNavPopover");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",(0,i.v6)({"data-helptext":"Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year"},e.$attrs,{class:["vc-container",`vc-${e.view}`,`vc-${e.color}`,`vc-${e.displayMode}`,{"vc-expanded":e.expanded,"vc-bordered":!e.borderless,"vc-transparent":e.transparent}],onMouseup:t[0]||(t[0]=(0,o.D$)((()=>{}),["prevent"])),ref:"containerRef"}),[(0,i.Lk)("div",{class:(0,s.C4)(["vc-pane-container",{"in-transition":e.inTransition}])},[(0,i.Lk)("div",d_,[e.firstPage?((0,i.uX)(),(0,i.Wv)(u,{key:0,page:e.firstPage,"is-lg":"","hide-title":""},null,8,["page"])):(0,i.Q3)("",!0)]),(0,i.bF)(o.eB,{name:`vc-${e.transitionName}`,onBeforeEnter:e.onTransitionBeforeEnter,onAfterEnter:e.onTransitionAfterEnter},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)("div",{key:e.pages[0].id,class:"vc-pane-layout",style:(0,s.Tr)({gridTemplateColumns:`repeat(${e.columns}, 1fr)`})},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.pages,(e=>((0,i.uX)(),(0,i.Wv)(d,{key:e.id,page:e},{default:(0,i.k6)((()=>[(0,i.bF)(h,{name:"page",page:e},{default:(0,i.k6)((()=>[(0,i.bF)(l)])),_:2},1032,["page"])])),_:2},1032,["page"])))),128))],4))])),_:1},8,["name","onBeforeEnter","onAfterEnter"]),(0,i.bF)(h,{name:"footer"})],2)],16),(0,i.bF)(f),(0,i.bF)(p)],64)}const p_=Jw(h_,[["render",f_]]),g_=Symbol("__vc_date_picker_context__"),m_={...Vw,mode:{type:String,default:"date"},modelValue:{type:[Number,String,Date,Object]},modelModifiers:{type:Object,default:()=>({})},rules:[String,Object],is24hr:Boolean,hideTimeHeader:Boolean,timeAccuracy:{type:Number,default:2},isRequired:Boolean,isRange:Boolean,updateOnInput:{type:Boolean,default:()=>Jv("datePicker.updateOnInput")},inputDebounce:{type:Number,default:()=>Jv("datePicker.inputDebounce")},popover:{type:[Boolean,Object],default:!0},dragAttribute:Object,selectAttribute:Object,attributes:[Object,Array]},v_=["update:modelValue","drag","dayclick","daykeydown","popover-will-show","popover-did-show","popover-will-hide","popover-did-hide"];function y_(e,{emit:t,slots:n}){Yw(n,{footer:"dp-footer"});const s=Bw(e),{locale:o,masks:a,disabledAttribute:c}=s,u=(0,r.KR)(!1),l=(0,r.KR)(Symbol()),h=(0,r.KR)(null),d=(0,r.KR)(null),f=(0,r.KR)(["",""]),p=(0,r.KR)(null),g=(0,r.KR)(null);let m,v,y=!0;const w=(0,i.EW)((()=>e.isRange||!0===e.modelModifiers.range)),b=(0,i.EW)((()=>w.value&&null!=h.value?h.value.start:null)),_=(0,i.EW)((()=>w.value&&null!=h.value?h.value.end:null)),k=(0,i.EW)((()=>"date"===e.mode.toLowerCase())),E=(0,i.EW)((()=>"datetime"===e.mode.toLowerCase())),T=(0,i.EW)((()=>"time"===e.mode.toLowerCase())),S=(0,i.EW)((()=>!!d.value)),I=(0,i.EW)((()=>{let t="date";e.modelModifiers.number&&(t="number"),e.modelModifiers.string&&(t="string");const n=a.value.modelValue||"iso";return V({type:t,mask:n})})),C=(0,i.EW)((()=>re(d.value??h.value))),x=(0,i.EW)((()=>T.value?e.is24hr?a.value.inputTime24hr:a.value.inputTime:E.value?e.is24hr?a.value.inputDateTime24hr:a.value.inputDateTime:a.value.input)),A=(0,i.EW)((()=>/[Hh]/g.test(x.value))),D=(0,i.EW)((()=>/[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(x.value))),R=(0,i.EW)((()=>A.value&&D.value?"dateTime":D.value?"date":A.value?"time":void 0)),O=(0,i.EW)((()=>{var t;const n=(null==(t=p.value)?void 0:t.$el.previousElementSibling)??void 0;return Rg({},e.popover,Jv("datePicker.popover"),{target:n})})),M=(0,i.EW)((()=>ww({...O.value,id:l.value}))),P=(0,i.EW)((()=>w.value?{start:f.value[0],end:f.value[1]}:f.value[0])),N=(0,i.EW)((()=>{const t=["start","end"].map((t=>({input:ee(t),change:te(t),keyup:ne,...e.popover&&M.value})));return w.value?{start:t[0],end:t[1]}:t[0]})),L=(0,i.EW)((()=>{if(!Y(h.value))return null;const t={key:"select-drag",...e.selectAttribute,dates:h.value,pinPage:!0},{dot:n,bar:r,highlight:i,content:s}=t;return n||r||i||s||(t.highlight=!0),t})),F=(0,i.EW)((()=>{if(!w.value||!Y(d.value))return null;const t={key:"select-drag",...e.dragAttribute,dates:d.value},{dot:n,bar:r,highlight:i,content:s}=t;return n||r||i||s||(t.highlight={startEnd:{fillMode:"outline"}}),t})),j=(0,i.EW)((()=>{const t=Bg(e.attributes)?[...e.attributes]:[];return F.value?t.unshift(F.value):L.value&&t.unshift(L.value),t})),$=(0,i.EW)((()=>V("auto"===e.rules?U():e.rules??{})));function U(){const t={ms:[0,999],sec:[0,59],min:[0,59],hr:[0,23]},n=k.value?0:e.timeAccuracy;return[0,1].map((e=>{switch(n){case 0:return{hours:t.hr[e],minutes:t.min[e],seconds:t.sec[e],milliseconds:t.ms[e]};case 1:return{minutes:t.min[e],seconds:t.sec[e],milliseconds:t.ms[e]};case 3:return{milliseconds:t.ms[e]};case 4:return{};default:return{seconds:t.sec[e],milliseconds:t.ms[e]}}}))}function V(e){return Bg(e)?1===e.length?[e[0],e[0]]:e:[e,e]}function B(e){return V(e).map(((e,t)=>({...e,rules:$.value[t]})))}function W(e){return null!=e&&(Rd(e)?!isNaN(e):Fg(e)?!isNaN(e.getTime()):mo(e)?""!==e:zy(e))}function z(e){return jg(e)&&"start"in e&&"end"in e&&W(e.start??null)&&W(e.end??null)}function Y(e){return z(e)||W(e)}function q(e,t){if(null==e&&null==t)return!0;if(null==e||null==t)return!1;const n=Fg(e),r=Fg(t);return n&&r?e.getTime()===t.getTime():!n&&!r&&(q(e.start,t.start)&&q(e.end,t.end))}function H(e){return!(!Y(e)||!c.value)&&c.value.intersectsRange(o.value.range(e))}function K(e,t,n,r){if(!Y(e))return null;if(z(e)){const i=o.value.toDate(e.start,{...t[0],fillDate:b.value??void 0,patch:n}),s=o.value.toDate(e.end,{...t[1],fillDate:_.value??void 0,patch:n});return me({start:i,end:s},r)}return o.value.toDateOrNull(e,{...t[0],fillDate:h.value,patch:n})}function G(e,t){return z(e)?{start:o.value.fromDate(e.start,t[0]),end:o.value.fromDate(e.end,t[1])}:w.value?null:o.value.fromDate(e,t[0])}function Q(e,t={}){return clearTimeout(m),new Promise((n=>{const{debounce:r=0,...i}=t;r>0?m=window.setTimeout((()=>{n(X(e,i))}),r):n(X(e,i))}))}function X(n,{config:r=I.value,patch:s="dateTime",clearIfEqual:o=!1,formatInput:a=!0,hidePopover:c=!1,dragging:u=S.value,targetPriority:l,moveToValue:f=!1}={}){const p=B(r);let g=K(n,p,s,l);const m=H(g);if(m){if(u)return null;g=h.value,c=!1}else null==g&&e.isRequired?g=h.value:null!=g&&q(h.value,g)&&o&&(g=null);const v=u?d:h,w=!q(v.value,g);v.value=g,u||(d.value=null);const b=G(g,I.value);return w&&(y=!1,t(u?"drag":"update:modelValue",b),(0,i.dY)((()=>y=!0))),c&&!u&&pe(),a&&Z(),f&&(0,i.dY)((()=>we(l??"start"))),b}function Z(){(0,i.dY)((()=>{const e=B({type:"string",mask:x.value}),t=G(d.value??h.value,e);w.value?f.value=[t&&t.start,t&&t.end]:f.value=[t,""]}))}function J(e,t,n){f.value.splice("start"===t?0:1,1,e);const r=w.value?{start:f.value[0],end:f.value[1]||f.value[0]}:e,i={type:"string",mask:x.value};Q(r,{...n,config:i,patch:R.value,targetPriority:t,moveToValue:!0})}function ee(t){return n=>{e.updateOnInput&&J(n.currentTarget.value,t,{formatInput:!1,hidePopover:!1,debounce:e.inputDebounce})}}function te(e){return t=>{J(t.currentTarget.value,e,{formatInput:!0,hidePopover:!1})}}function ne(e){"Escape"===e.key&&Q(h.value,{formatInput:!0,hidePopover:!0})}function re(e){return w.value?[e&&e.start?o.value.getDateParts(e.start):null,e&&e.end?o.value.getDateParts(e.end):null]:[e?o.value.getDateParts(e):null]}function ie(){d.value=null,Z()}function se(e){t("popover-will-show",e)}function oe(e){t("popover-did-show",e)}function ae(e){ie(),t("popover-will-hide",e)}function ce(e){t("popover-did-hide",e)}function ue(t){const n={patch:"date",formatInput:!0,hidePopover:!0};if(w.value){const e=!S.value;e?v={start:t.startDate,end:t.endDate}:null!=v&&(v.end=t.date),Q(v,{...n,dragging:e})}else Q(t.date,{...n,clearIfEqual:!e.isRequired})}function le(e,n){ue(e),t("dayclick",e,n)}function he(e,n){switch(n.key){case" ":case"Enter":ue(e),n.preventDefault();break;case"Escape":pe()}t("daykeydown",e,n)}function de(e,t){S.value&&null!=v&&(v.end=e.date,Q(me(v),{patch:"date",formatInput:!0}))}function fe(e={}){mw({...O.value,...e,isInteractive:!0,id:l.value})}function pe(e={}){vw({hideDelay:10,force:!0,...O.value,...e,id:l.value})}function ge(e){yw({...O.value,...e,isInteractive:!0,id:l.value})}function me(e,t){const{start:n,end:r}=e;if(n>r)switch(t){case"start":return{start:n,end:n};case"end":return{start:r,end:r};default:return{start:r,end:n}}return{start:n,end:r}}async function ve(e,t={}){return null!=g.value&&g.value.move(e,t)}async function ye(e,t={}){return null!=g.value&&g.value.moveBy(e,t)}async function we(e,t={}){const n=h.value;if(null==g.value||!Y(n))return!1;const r="end"!==e,i=r?1:-1,s=z(n)?r?n.start:n.end:n,a=mv(s,"monthly",o.value);return g.value.move(a,{position:i,...t})}(0,i.wB)((()=>e.isRange),(e=>{e&&console.warn("The `is-range` prop will be deprecated in future releases. Please use the `range` modifier.")}),{immediate:!0}),(0,i.wB)((()=>w.value),(()=>{X(null,{formatInput:!0})})),(0,i.wB)((()=>x.value),(()=>Z())),(0,i.wB)((()=>e.modelValue),(e=>{y&&X(e,{formatInput:!0,hidePopover:!1})})),(0,i.wB)((()=>$.value),(()=>{jg(e.rules)&&X(e.modelValue,{formatInput:!0,hidePopover:!1})})),(0,i.wB)((()=>e.timezone),(()=>{X(h.value,{formatInput:!0})}));const be=V(I.value);h.value=K(e.modelValue??null,be,"dateTime"),(0,i.sV)((()=>{X(e.modelValue,{formatInput:!0,hidePopover:!1})})),(0,i.dY)((()=>u.value=!0));const _e={...s,showCalendar:u,datePickerPopoverId:l,popoverRef:p,popoverEvents:M,calendarRef:g,isRange:w,isTimeMode:T,isDateTimeMode:E,is24hr:(0,r.lW)(e,"is24hr"),hideTimeHeader:(0,r.lW)(e,"hideTimeHeader"),timeAccuracy:(0,r.lW)(e,"timeAccuracy"),isDragging:S,inputValue:P,inputEvents:N,dateParts:C,attributes:j,rules:$,move:ve,moveBy:ye,moveToValue:we,updateValue:Q,showPopover:fe,hidePopover:pe,togglePopover:ge,onDayClick:le,onDayKeydown:he,onDayMouseEnter:de,onPopoverBeforeShow:se,onPopoverAfterShow:oe,onPopoverBeforeHide:ae,onPopoverAfterHide:ce};return(0,i.Gt)(g_,_e),_e}function w_(){const e=(0,i.WQ)(g_);if(e)return e;throw new Error("DatePicker context missing. Please verify this component is nested within a valid context provider.")}const b_=[{value:0,label:"12"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"}],__=[{value:12,label:"12"},{value:13,label:"1"},{value:14,label:"2"},{value:15,label:"3"},{value:16,label:"4"},{value:17,label:"5"},{value:18,label:"6"},{value:19,label:"7"},{value:20,label:"8"},{value:21,label:"9"},{value:22,label:"10"},{value:23,label:"11"}];function k_(e){const t=w_(),{locale:n,isRange:r,isTimeMode:s,dateParts:o,rules:a,is24hr:c,hideTimeHeader:u,timeAccuracy:l,updateValue:h}=t;function d(e){e=Object.assign(p.value,e);let t=null;if(r.value){const n=f.value?e:o.value[0],r=f.value?o.value[1]:e;t={start:n,end:r}}else t=e;h(t,{patch:"time",targetPriority:f.value?"start":"end",moveToValue:!0})}const f=(0,i.EW)((()=>0===e.position)),p=(0,i.EW)((()=>o.value[e.position]||{isValid:!1})),g=(0,i.EW)((()=>zy(p.value))),m=(0,i.EW)((()=>!!p.value.isValid)),v=(0,i.EW)((()=>!u.value&&m.value)),y=(0,i.EW)((()=>{if(!g.value)return null;let e=n.value.toDate(p.value);return 24===p.value.hours&&(e=new Date(e.getTime()-1)),e})),w=(0,i.EW)({get(){return p.value.hours},set(e){d({hours:e})}}),b=(0,i.EW)({get(){return p.value.minutes},set(e){d({minutes:e})}}),_=(0,i.EW)({get(){return p.value.seconds},set(e){d({seconds:e})}}),k=(0,i.EW)({get(){return p.value.milliseconds},set(e){d({milliseconds:e})}}),E=(0,i.EW)({get(){return p.value.hours<12},set(e){e="true"==String(e).toLowerCase();let t=w.value;e&&t>=12?t-=12:!e&&t<12&&(t+=12),d({hours:t})}}),T=(0,i.EW)((()=>uw(p.value,a.value[e.position]))),S=(0,i.EW)((()=>b_.filter((e=>T.value.hours.some((t=>t.value===e.value)))))),I=(0,i.EW)((()=>__.filter((e=>T.value.hours.some((t=>t.value===e.value)))))),C=(0,i.EW)((()=>c.value?T.value.hours:E.value?S.value:I.value)),x=(0,i.EW)((()=>{const e=[];return Wg(S.value)&&e.push({value:!0,label:"AM"}),Wg(I.value)&&e.push({value:!1,label:"PM"}),e}));return{...t,showHeader:v,timeAccuracy:l,parts:p,isValid:m,date:y,hours:w,minutes:b,seconds:_,milliseconds:k,options:T,hourOptions:C,isAM:E,isAMOptions:x,is24hr:c}}const E_=["value"],T_=["value","disabled"],S_={key:1,class:"vc-base-sizer","aria-hidden":"true"},I_={inheritAttrs:!1},C_=(0,i.pM)({...I_,__name:"BaseSelect",props:{options:null,modelValue:null,alignRight:{type:Boolean},alignLeft:{type:Boolean},showIcon:{type:Boolean},fitContent:{type:Boolean}},emits:["update:modelValue"],setup(e){const t=e,n=(0,i.EW)((()=>{const e=t.options.find((e=>e.value===t.modelValue));return null==e?void 0:e.label}));return(t,o)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["vc-base-select",{"vc-fit-content":e.fitContent,"vc-has-icon":e.showIcon}])},[(0,i.Lk)("select",(0,i.v6)(t.$attrs,{value:e.modelValue,class:["vc-focus",{"vc-align-right":e.alignRight,"vc-align-left":e.alignLeft}],onChange:o[0]||(o[0]=e=>t.$emit("update:modelValue",e.target.value))}),[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.options,(e=>((0,i.uX)(),(0,i.CE)("option",{key:e.value,value:e.value,disabled:e.disabled},(0,s.v_)(e.label),9,T_)))),128))],16,E_),e.showIcon?((0,i.uX)(),(0,i.Wv)(Lb,{key:0,name:"ChevronDown",size:"18"})):(0,i.Q3)("",!0),e.fitContent?((0,i.uX)(),(0,i.CE)("div",S_,(0,s.v_)((0,r.R1)(n)),1)):(0,i.Q3)("",!0)],2))}}),x_={key:0,class:"vc-time-header"},A_={class:"vc-time-weekday"},D_={class:"vc-time-month"},R_={class:"vc-time-day"},O_={class:"vc-time-year"},M_={class:"vc-time-select-group"},P_=(0,i.Lk)("span",{class:"vc-time-colon"},":",-1),N_=(0,i.Lk)("span",{class:"vc-time-colon"},":",-1),L_=(0,i.Lk)("span",{class:"vc-time-decimal"},".",-1),F_=(0,i.pM)({__name:"TimePicker",props:{position:null},setup(e,{expose:t}){const n=e,o=k_(n);t(o);const{locale:a,isValid:c,date:u,hours:l,minutes:h,seconds:d,milliseconds:f,options:p,hourOptions:g,isTimeMode:m,isAM:v,isAMOptions:y,is24hr:w,showHeader:b,timeAccuracy:_}=o;return(e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)(["vc-time-picker",[{"vc-invalid":!(0,r.R1)(c),"vc-attached":!(0,r.R1)(m)}]])},[(0,i.bF)(ab,{name:"time-header"},{default:(0,i.k6)((()=>[(0,r.R1)(b)&&(0,r.R1)(u)?((0,i.uX)(),(0,i.CE)("div",x_,[(0,i.Lk)("span",A_,(0,s.v_)((0,r.R1)(a).formatDate((0,r.R1)(u),"WWW")),1),(0,i.Lk)("span",D_,(0,s.v_)((0,r.R1)(a).formatDate((0,r.R1)(u),"MMM")),1),(0,i.Lk)("span",R_,(0,s.v_)((0,r.R1)(a).formatDate((0,r.R1)(u),"D")),1),(0,i.Lk)("span",O_,(0,s.v_)((0,r.R1)(a).formatDate((0,r.R1)(u),"YYYY")),1)])):(0,i.Q3)("",!0)])),_:1}),(0,i.Lk)("div",M_,[(0,i.bF)(Lb,{name:"Clock",size:"17"}),(0,i.bF)(C_,{modelValue:(0,r.R1)(l),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,r.i9)(l)?l.value=e:null),modelModifiers:{number:!0},options:(0,r.R1)(g),class:"vc-time-select-hours","align-right":""},null,8,["modelValue","options"]),(0,r.R1)(_)>1?((0,i.uX)(),(0,i.CE)(i.FK,{key:0},[P_,(0,i.bF)(C_,{modelValue:(0,r.R1)(h),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,r.i9)(h)?h.value=e:null),modelModifiers:{number:!0},options:(0,r.R1)(p).minutes,class:"vc-time-select-minutes","align-left":2===(0,r.R1)(_)},null,8,["modelValue","options","align-left"])],64)):(0,i.Q3)("",!0),(0,r.R1)(_)>2?((0,i.uX)(),(0,i.CE)(i.FK,{key:1},[N_,(0,i.bF)(C_,{modelValue:(0,r.R1)(d),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,r.i9)(d)?d.value=e:null),modelModifiers:{number:!0},options:(0,r.R1)(p).seconds,class:"vc-time-select-seconds","align-left":3===(0,r.R1)(_)},null,8,["modelValue","options","align-left"])],64)):(0,i.Q3)("",!0),(0,r.R1)(_)>3?((0,i.uX)(),(0,i.CE)(i.FK,{key:2},[L_,(0,i.bF)(C_,{modelValue:(0,r.R1)(f),"onUpdate:modelValue":t[3]||(t[3]=e=>(0,r.i9)(f)?f.value=e:null),modelModifiers:{number:!0},options:(0,r.R1)(p).milliseconds,class:"vc-time-select-milliseconds","align-left":""},null,8,["modelValue","options"])],64)):(0,i.Q3)("",!0),(0,r.R1)(w)?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.Wv)(C_,{key:3,modelValue:(0,r.R1)(v),"onUpdate:modelValue":t[4]||(t[4]=e=>(0,r.i9)(v)?v.value=e:null),options:(0,r.R1)(y)},null,8,["modelValue","options"]))])],2))}}),j_=(0,i.pM)({__name:"DatePickerBase",setup(e){const{attributes:t,calendarRef:n,color:o,displayMode:a,isDateTimeMode:c,isTimeMode:u,isRange:l,onDayClick:h,onDayMouseEnter:d,onDayKeydown:f}=w_(),p=l.value?[0,1]:[0];return(e,l)=>(0,r.R1)(u)?((0,i.uX)(),(0,i.CE)("div",{key:0,class:(0,s.C4)(`vc-container vc-bordered vc-${(0,r.R1)(o)} vc-${(0,r.R1)(a)}`)},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,r.R1)(p),(e=>((0,i.uX)(),(0,i.Wv)(F_,{key:e,position:e},null,8,["position"])))),128))],2)):((0,i.uX)(),(0,i.Wv)(p_,{key:1,attributes:(0,r.R1)(t),ref_key:"calendarRef",ref:n,onDayclick:(0,r.R1)(h),onDaymouseenter:(0,r.R1)(d),onDaykeydown:(0,r.R1)(f)},{footer:(0,i.k6)((()=>[(0,r.R1)(c)?((0,i.uX)(!0),(0,i.CE)(i.FK,{key:0},(0,i.pI)((0,r.R1)(p),(e=>((0,i.uX)(),(0,i.Wv)(F_,{key:e,position:e},null,8,["position"])))),128)):(0,i.Q3)("",!0),(0,i.bF)(ab,{name:"dp-footer"})])),_:1},8,["attributes","onDayclick","onDaymouseenter","onDaykeydown"]))}}),$_={inheritAttrs:!1},U_=(0,i.pM)({...$_,__name:"DatePickerPopover",setup(e){const{datePickerPopoverId:t,color:n,displayMode:o,popoverRef:a,onPopoverBeforeShow:c,onPopoverAfterShow:u,onPopoverBeforeHide:l,onPopoverAfterHide:h}=w_();return(e,d)=>((0,i.uX)(),(0,i.Wv)(tb,{id:(0,r.R1)(t),placement:"bottom-start",class:(0,s.C4)(`vc-date-picker-content vc-${(0,r.R1)(n)} vc-${(0,r.R1)(o)}`),ref_key:"popoverRef",ref:a,onBeforeShow:(0,r.R1)(c),onAfterShow:(0,r.R1)(u),onBeforeHide:(0,r.R1)(l),onAfterHide:(0,r.R1)(h)},{default:(0,i.k6)((()=>[(0,i.bF)(j_,(0,s._B)((0,i.Ng)(e.$attrs)),null,16)])),_:1},8,["id","class","onBeforeShow","onAfterShow","onBeforeHide","onAfterHide"]))}}),V_=(0,i.pM)({inheritAttrs:!1,emits:v_,props:m_,components:{DatePickerBase:j_,DatePickerPopover:U_},setup(e,t){const n=y_(e,t),i=(0,r.Kh)(Gg(n,"calendarRef","popoverRef"));return{...n,slotCtx:i}}});function B_(e,t,n,r,o,a){const c=(0,i.g2)("DatePickerPopover"),u=(0,i.g2)("DatePickerBase");return e.$slots.default?((0,i.uX)(),(0,i.CE)(i.FK,{key:0},[(0,i.RG)(e.$slots,"default",(0,s._B)((0,i.Ng)(e.slotCtx))),(0,i.bF)(c,(0,s._B)((0,i.Ng)(e.$attrs)),null,16)],64)):((0,i.uX)(),(0,i.Wv)(u,(0,s._B)((0,i.v6)({key:1},e.$attrs)),null,16))}const W_=Jw(V_,[["render",B_]]);Symbol.toStringTag},1387:function(e,t,n){"use strict";n.d(t,{LA:function(){return oe},aE:function(){return tt},rd:function(){return rt}});n(4114),n(3375),n(9225),n(3972),n(9209),n(5714),n(7561),n(6197);var r=n(6768),i=n(144);
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,v=/%5B/g,y=/%5D/g,w=/%5E/g,b=/%60/g,_=/%7B/g,k=/%7C/g,E=/%7D/g,T=/%20/g;function S(e){return encodeURI(""+e).replace(k,"|").replace(v,"[").replace(y,"]")}function I(e){return S(e).replace(_,"{").replace(E,"}").replace(w,"^")}function C(e){return S(e).replace(m,"%2B").replace(T,"+").replace(h,"%23").replace(d,"%26").replace(b,"`").replace(_,"{").replace(E,"}").replace(w,"^")}function x(e){return C(e).replace(p,"%3D")}function A(e){return S(e).replace(h,"%23").replace(g,"%3F")}function D(e){return null==e?"":A(e).replace(f,"%2F")}function R(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const O=/\/$/,M=e=>e.replace(O,"");function P(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=B(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:R(o)}}function N(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function L(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&j(t.matched[r],n.matched[i])&&$(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function $(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!U(e[n],t[n]))return!1;return!0}function U(e,t){return l(e)?V(e,t):l(t)?V(t,e):e===t}function V(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function B(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}var W,z;(function(e){e["pop"]="pop",e["push"]="push"})(W||(W={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(z||(z={}));function Y(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),M(e)}const q=/^[^#]+#/;function H(e,t){return e.replace(q,"#")+t}function K(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const G=()=>({left:window.scrollX,top:window.scrollY});function Q(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=K(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function X(e,t){const n=history.state?history.state.position-t:-1;return n+e}const Z=new Map;function J(e,t){Z.set(e,t)}function ee(e){const t=Z.get(e);return Z.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),L(n,"")}const o=L(n,e);return o+r+i}function re(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=ne(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:W.pop,direction:l?l>0?z.forward:z.back:z.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:G()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function ie(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?G():null}}function se(e){const{history:t,location:n}=window,r={value:ne(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,ie(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:G()});s(o.current,o,!0);const c=a({},ie(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function oe(e){e=Y(e);const t=se(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:H.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ae(e){return"string"===typeof e||e&&"object"===typeof e}function ce(e){return"string"===typeof e||"symbol"===typeof e}const ue={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},le=Symbol("");var he;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(he||(he={}));function de(e,t){return a(new Error,{type:e,[le]:!0},t)}function fe(e,t){return e instanceof Error&&le in e&&(null==t||!!(e.type&t))}const pe="[^/]+?",ge={sensitive:!1,strict:!1,start:!0,end:!0},me=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},ge,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(me,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||pe;if(l!==pe){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function ye(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function we(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ye(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(be(r))return 1;if(be(i))return-1}return i.length-r.length}function be(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _e={type:0,value:""},ke=/[a-zA-Z0-9_]/;function Ee(e){if(!e)return[[]];if("/"===e)return[[_e]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ke.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Te(e,t,n){const r=ve(Ee(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=Ce(e);c.aliasOf=r&&r.record;const h=Re(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Te(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Ae(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(ce(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&we(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Oe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!Ae(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw de(1,{location:e});0,o=i.record.name,c=a(Ie(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ie(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw de(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:De(u)}}return t=Re({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function Ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ce(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:xe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function xe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function De(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function Re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Oe(e,t){return t.children.some((t=>t===e||Oe(e,t)))}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(m," "),n=e.indexOf("="),s=R(n<0?e:e.slice(0,n)),o=n<0?null:R(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=x(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&C(e))):[r&&C(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ne(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Le=Symbol(""),Fe=Symbol(""),je=Symbol(""),$e=Symbol(""),Ue=Symbol("");function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Be(e,t,n,r,i,s=(e=>e())){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(de(4,{from:n,to:t})):e instanceof Error?c(e):ae(e)?c(de(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s((()=>e.call(r&&r.instances[i],t,n,u)));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch((e=>c(e)))}))}function We(e,t,n,r,i=(e=>e())){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(ze(c)){const o=c.__vccOpts||c,u=o[t];u&&s.push(Be(u,n,r,a,e,i))}else{let u=c();0,s.push((()=>u.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&Be(l,n,r,a,e,i)()}))))}}}return s}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ye(e){const t=(0,r.WQ)(je),n=(0,r.WQ)($e);const s=(0,r.EW)((()=>{const n=(0,i.R1)(e.to);return t.resolve(n)})),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(j.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(j.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Ge(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&$(n.params,s.value.params)));function l(n={}){return Ke(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const qe=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ye,setup(e,{slots:t}){const n=(0,i.Kh)(Ye(e)),{options:s}=(0,r.WQ)(je),o=(0,r.EW)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=qe;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(Ue),o=(0,r.EW)((()=>e.route||s.value)),c=(0,r.WQ)(Fe,0),u=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(Fe,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Le,l),(0,r.Gt)(Ue,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&j(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Je(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Je(n.default,{Component:g,route:i})||g}}});function Je(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=Se(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||Pe,h=e.history;const d=Ve(),f=Ve(),p=Ve(),g=(0,i.IJ)(ue);let m=ue;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,(e=>""+e)),y=c.bind(null,D),w=c.bind(null,R);function b(e,n){let r,i;return ce(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function E(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=a({},r||g.value),"string"===typeof e){const i=P(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:w(s.params),hash:R(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=a({},e,{path:P(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:y(t)}),r.params=y(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=v(w(s.params));const u=N(o,a({},e,{hash:I(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Ne(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function S(e){return"string"===typeof e?P(n,e,g.value.path):a({},e)}function C(e,t){if(m!==e)return de(8,{from:t,to:e})}function x(e){return M(e)}function A(e){return x(a(S(e),{replace:!0}))}function O(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function M(e,t){const n=m=T(e),r=g.value,i=e.state,s=e.force,c=!0===e.replace,u=O(n);if(u)return M(a(S(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&F(o,r,n)&&(h=de(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):$(l,r)).catch((e=>fe(e)?fe(e,2)?e:te(e):K(e,l,r))).then((e=>{if(e){if(fe(e,2))return M(a({replace:c},S(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=V(l,r,!0,c,i);return U(l,r,e),e}))}function L(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function $(e,t){let n;const[r,i,s]=nt(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=L.bind(null,e,t);return n.push(o),ae(n).then((()=>{n=[];for(const r of d.list())n.push(Be(r,e,t));return n.push(o),ae(n)})).then((()=>{n=We(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),ae(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=We(s,"beforeRouteEnter",e,t,j),n.push(o),ae(n)))).then((()=>{n=[];for(const r of f.list())n.push(Be(r,e,t));return n.push(o),ae(n)})).catch((e=>fe(e,8)?e:Promise.reject(e)))}function U(e,t,n){p.list().forEach((r=>j((()=>r(e,t,n)))))}function V(e,t,n,r,i){const o=C(e,t);if(o)return o;const c=t===ue,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),g.value=e,ne(e,t,n,c),te()}let B;function z(){B||(B=h.listen(((e,t,n)=>{if(!oe.listening)return;const r=T(e),i=O(r);if(i)return void M(a(i,{replace:!0}),r).catch(u);m=r;const o=g.value;s&&J(X(o.fullPath,n.delta),G()),$(r,o).catch((e=>fe(e,12)?e:fe(e,2)?(M(e.to,r).then((e=>{fe(e,20)&&!n.delta&&n.type===W.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),K(e,r,o)))).then((e=>{e=e||V(r,o,!1),e&&(n.delta&&!fe(e,8)?h.go(-n.delta,!1):n.type===W.pop&&fe(e,20)&&h.go(-1,!1)),U(r,o,e)})).catch(u)})))}let Y,q=Ve(),H=Ve();function K(e,t,n){te(e);const r=H.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Z(){return Y&&g.value!==ue?Promise.resolve():new Promise(((e,t)=>{q.add([e,t])}))}function te(e){return Y||(Y=!e,z(),q.list().forEach((([t,n])=>e?n(e):t())),q.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ee(X(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&Q(e))).catch((e=>K(e,t,n)))}const re=e=>h.go(e);let ie;const se=new Set,oe={currentRoute:g,listening:!0,addRoute:b,removeRoute:_,hasRoute:E,getRoutes:k,resolve:T,options:e,push:x,replace:A,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:H.add,isReady:Z,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!ie&&g.value===ue&&(ie=!0,x(h.location).catch((e=>{0})));const n={};for(const i in ue)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(je,t),e.provide($e,(0,i.Gc)(n)),e.provide(Ue,g);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=ue,B&&B(),B=null,g.value=ue,ie=!1,Y=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>j(t)))),Promise.resolve())}return oe}function nt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>j(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>j(e,a)))||i.push(a))}return[n,r,i]}function rt(){return(0,r.WQ)(je)}}}]);
//# sourceMappingURL=chunk-vendors.8ac0370b.js.map