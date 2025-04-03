(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function tb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var km={exports:{}},Yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function iR(){if(S0)return Yl;S0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:a,key:f,ref:o!==void 0?o:null,props:u}}return Yl.Fragment=e,Yl.jsx=t,Yl.jsxs=t,Yl}var w0;function rR(){return w0||(w0=1,km.exports=iR()),km.exports}var C=rR(),Vm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function aR(){if(R0)return Ce;R0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=A&&D[A]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,Q={};function L(D,ie,ce){this.props=D,this.context=ie,this.refs=Q,this.updater=ce||M}L.prototype.isReactComponent={},L.prototype.setState=function(D,ie){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ie,"setState")},L.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function B(){}B.prototype=L.prototype;function J(D,ie,ce){this.props=D,this.context=ie,this.refs=Q,this.updater=ce||M}var $=J.prototype=new B;$.constructor=J,k($,L.prototype),$.isPureReactComponent=!0;var se=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},ve=Object.prototype.hasOwnProperty;function N(D,ie,ce,ae,_e,De){return ce=De.ref,{$$typeof:i,type:D,key:ie,ref:ce!==void 0?ce:null,props:De}}function R(D,ie){return N(D.type,ie,void 0,void 0,void 0,D.props)}function w(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function x(D){var ie={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ce){return ie[ce]})}var V=/\/+/g;function j(D,ie){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):ie.toString(36)}function O(){}function Ut(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(ie){D.status==="pending"&&(D.status="fulfilled",D.value=ie)},function(ie){D.status==="pending"&&(D.status="rejected",D.reason=ie)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ct(D,ie,ce,ae,_e){var De=typeof D;(De==="undefined"||De==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(De){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case i:case e:we=!0;break;case E:return we=D._init,ct(we(D._payload),ie,ce,ae,_e)}}if(we)return _e=_e(D),we=ae===""?"."+j(D,0):ae,se(_e)?(ce="",we!=null&&(ce=we.replace(V,"$&/")+"/"),ct(_e,ie,ce,"",function($n){return $n})):_e!=null&&(w(_e)&&(_e=R(_e,ce+(_e.key==null||D&&D.key===_e.key?"":(""+_e.key).replace(V,"$&/")+"/")+we)),ie.push(_e)),1;we=0;var Dt=ae===""?".":ae+":";if(se(D))for(var tt=0;tt<D.length;tt++)ae=D[tt],De=Dt+j(ae,tt),we+=ct(ae,ie,ce,De,_e);else if(tt=S(D),typeof tt=="function")for(D=tt.call(D),tt=0;!(ae=D.next()).done;)ae=ae.value,De=Dt+j(ae,tt++),we+=ct(ae,ie,ce,De,_e);else if(De==="object"){if(typeof D.then=="function")return ct(Ut(D),ie,ce,ae,_e);throw ie=String(D),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return we}function X(D,ie,ce){if(D==null)return D;var ae=[],_e=0;return ct(D,ae,"","",function(De){return ie.call(ce,De,_e++)}),ae}function ue(D){if(D._status===-1){var ie=D._result;ie=ie(),ie.then(function(ce){(D._status===0||D._status===-1)&&(D._status=1,D._result=ce)},function(ce){(D._status===0||D._status===-1)&&(D._status=2,D._result=ce)}),D._status===-1&&(D._status=0,D._result=ie)}if(D._status===1)return D._result.default;throw D._result}var ge=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function qe(){}return Ce.Children={map:X,forEach:function(D,ie,ce){X(D,function(){ie.apply(this,arguments)},ce)},count:function(D){var ie=0;return X(D,function(){ie++}),ie},toArray:function(D){return X(D,function(ie){return ie})||[]},only:function(D){if(!w(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=J,Ce.StrictMode=a,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return le.H.useMemoCache(D)}},Ce.cache=function(D){return function(){return D.apply(null,arguments)}},Ce.cloneElement=function(D,ie,ce){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ae=k({},D.props),_e=D.key,De=void 0;if(ie!=null)for(we in ie.ref!==void 0&&(De=void 0),ie.key!==void 0&&(_e=""+ie.key),ie)!ve.call(ie,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ie.ref===void 0||(ae[we]=ie[we]);var we=arguments.length-2;if(we===1)ae.children=ce;else if(1<we){for(var Dt=Array(we),tt=0;tt<we;tt++)Dt[tt]=arguments[tt+2];ae.children=Dt}return N(D.type,_e,void 0,void 0,De,ae)},Ce.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Ce.createElement=function(D,ie,ce){var ae,_e={},De=null;if(ie!=null)for(ae in ie.key!==void 0&&(De=""+ie.key),ie)ve.call(ie,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(_e[ae]=ie[ae]);var we=arguments.length-2;if(we===1)_e.children=ce;else if(1<we){for(var Dt=Array(we),tt=0;tt<we;tt++)Dt[tt]=arguments[tt+2];_e.children=Dt}if(D&&D.defaultProps)for(ae in we=D.defaultProps,we)_e[ae]===void 0&&(_e[ae]=we[ae]);return N(D,De,void 0,void 0,null,_e)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:m,render:D}},Ce.isValidElement=w,Ce.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ue}},Ce.memo=function(D,ie){return{$$typeof:g,type:D,compare:ie===void 0?null:ie}},Ce.startTransition=function(D){var ie=le.T,ce={};le.T=ce;try{var ae=D(),_e=le.S;_e!==null&&_e(ce,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(qe,ge)}catch(De){ge(De)}finally{le.T=ie}},Ce.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ce.use=function(D){return le.H.use(D)},Ce.useActionState=function(D,ie,ce){return le.H.useActionState(D,ie,ce)},Ce.useCallback=function(D,ie){return le.H.useCallback(D,ie)},Ce.useContext=function(D){return le.H.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D,ie){return le.H.useDeferredValue(D,ie)},Ce.useEffect=function(D,ie,ce){var ae=le.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(D,ie)},Ce.useId=function(){return le.H.useId()},Ce.useImperativeHandle=function(D,ie,ce){return le.H.useImperativeHandle(D,ie,ce)},Ce.useInsertionEffect=function(D,ie){return le.H.useInsertionEffect(D,ie)},Ce.useLayoutEffect=function(D,ie){return le.H.useLayoutEffect(D,ie)},Ce.useMemo=function(D,ie){return le.H.useMemo(D,ie)},Ce.useOptimistic=function(D,ie){return le.H.useOptimistic(D,ie)},Ce.useReducer=function(D,ie,ce){return le.H.useReducer(D,ie,ce)},Ce.useRef=function(D){return le.H.useRef(D)},Ce.useState=function(D){return le.H.useState(D)},Ce.useSyncExternalStore=function(D,ie,ce){return le.H.useSyncExternalStore(D,ie,ce)},Ce.useTransition=function(){return le.H.useTransition()},Ce.version="19.1.0",Ce}var I0;function ag(){return I0||(I0=1,Vm.exports=aR()),Vm.exports}var Y=ag();const nb=tb(Y);var Lm={exports:{}},Ql={},Um={exports:{}},jm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0;function sR(){return C0||(C0=1,function(i){function e(X,ue){var ge=X.length;X.push(ue);e:for(;0<ge;){var qe=ge-1>>>1,D=X[qe];if(0<o(D,ue))X[qe]=ue,X[ge]=D,ge=qe;else break e}}function t(X){return X.length===0?null:X[0]}function a(X){if(X.length===0)return null;var ue=X[0],ge=X.pop();if(ge!==ue){X[0]=ge;e:for(var qe=0,D=X.length,ie=D>>>1;qe<ie;){var ce=2*(qe+1)-1,ae=X[ce],_e=ce+1,De=X[_e];if(0>o(ae,ge))_e<D&&0>o(De,ae)?(X[qe]=De,X[_e]=ge,qe=_e):(X[qe]=ae,X[ce]=ge,qe=ce);else if(_e<D&&0>o(De,ge))X[qe]=De,X[_e]=ge,qe=_e;else break e}}return ue}function o(X,ue){var ge=X.sortIndex-ue.sortIndex;return ge!==0?ge:X.id-ue.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],g=[],E=1,A=null,S=3,M=!1,k=!1,Q=!1,L=!1,B=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function se(X){for(var ue=t(g);ue!==null;){if(ue.callback===null)a(g);else if(ue.startTime<=X)a(g),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=t(g)}}function le(X){if(Q=!1,se(X),!k)if(t(p)!==null)k=!0,ve||(ve=!0,j());else{var ue=t(g);ue!==null&&ct(le,ue.startTime-X)}}var ve=!1,N=-1,R=5,w=-1;function x(){return L?!0:!(i.unstable_now()-w<R)}function V(){if(L=!1,ve){var X=i.unstable_now();w=X;var ue=!0;try{e:{k=!1,Q&&(Q=!1,J(N),N=-1),M=!0;var ge=S;try{t:{for(se(X),A=t(p);A!==null&&!(A.expirationTime>X&&x());){var qe=A.callback;if(typeof qe=="function"){A.callback=null,S=A.priorityLevel;var D=qe(A.expirationTime<=X);if(X=i.unstable_now(),typeof D=="function"){A.callback=D,se(X),ue=!0;break t}A===t(p)&&a(p),se(X)}else a(p);A=t(p)}if(A!==null)ue=!0;else{var ie=t(g);ie!==null&&ct(le,ie.startTime-X),ue=!1}}break e}finally{A=null,S=ge,M=!1}ue=void 0}}finally{ue?j():ve=!1}}}var j;if(typeof $=="function")j=function(){$(V)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,Ut=O.port2;O.port1.onmessage=V,j=function(){Ut.postMessage(null)}}else j=function(){B(V,0)};function ct(X,ue){N=B(function(){X(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(X){switch(S){case 1:case 2:case 3:var ue=3;break;default:ue=S}var ge=S;S=ue;try{return X()}finally{S=ge}},i.unstable_requestPaint=function(){L=!0},i.unstable_runWithPriority=function(X,ue){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ge=S;S=X;try{return ue()}finally{S=ge}},i.unstable_scheduleCallback=function(X,ue,ge){var qe=i.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?qe+ge:qe):ge=qe,X){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ge+D,X={id:E++,callback:ue,priorityLevel:X,startTime:ge,expirationTime:D,sortIndex:-1},ge>qe?(X.sortIndex=ge,e(g,X),t(p)===null&&X===t(g)&&(Q?(J(N),N=-1):Q=!0,ct(le,ge-qe))):(X.sortIndex=D,e(p,X),k||M||(k=!0,ve||(ve=!0,j()))),X},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(X){var ue=S;return function(){var ge=S;S=ue;try{return X.apply(this,arguments)}finally{S=ge}}}}(jm)),jm}var O0;function oR(){return O0||(O0=1,Um.exports=sR()),Um.exports}var zm={exports:{}},Xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function lR(){if(x0)return Xt;x0=1;var i=ag();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:p,containerInfo:g,implementation:E}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Xt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},Xt.flushSync=function(p){var g=f.T,E=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=g,a.p=E,a.d.f()}},Xt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Xt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Xt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,A=m(E,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,M=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:S,fetchPriority:M}):E==="script"&&a.d.X(p,{crossOrigin:A,integrity:S,fetchPriority:M,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Xt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Xt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,A=m(E,g.crossOrigin);a.d.L(p,E,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Xt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Xt.requestFormReset=function(p){a.d.r(p)},Xt.unstable_batchedUpdates=function(p,g){return p(g)},Xt.useFormState=function(p,g,E){return f.H.useFormState(p,g,E)},Xt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xt.version="19.1.0",Xt}var D0;function uR(){if(D0)return zm.exports;D0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),zm.exports=lR(),zm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function cR(){if(N0)return Ql;N0=1;var i=oR(),e=ag(),t=uR();function a(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function f(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(u(n)!==n)throw Error(a(188))}function p(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(a(188));return r!==n?null:n}for(var s=n,l=r;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return m(h),n;if(d===l)return m(h),r;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===s){_=!0,s=h,l=d;break}if(T===l){_=!0,l=h,s=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===s){_=!0,s=d,l=h;break}if(T===l){_=!0,l=d,s=h;break}T=T.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),$=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var O=Symbol.for("react.client.reference");function Ut(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===O?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Profiler";case Q:return"StrictMode";case le:return"Suspense";case ve:return"SuspenseList";case w:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case M:return"Portal";case $:return(n.displayName||"Context")+".Provider";case J:return(n._context.displayName||"Context")+".Consumer";case se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:Ut(n.type)||"Memo";case R:r=n._payload,n=n._init;try{return Ut(n(r))}catch{}}return null}var ct=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},qe=[],D=-1;function ie(n){return{current:n}}function ce(n){0>D||(n.current=qe[D],qe[D]=null,D--)}function ae(n,r){D++,qe[D]=n.current,n.current=r}var _e=ie(null),De=ie(null),we=ie(null),Dt=ie(null);function tt(n,r){switch(ae(we,r),ae(De,n),ae(_e,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Z_(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Z_(r),n=J_(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ce(_e),ae(_e,n)}function $n(){ce(_e),ce(De),ce(we)}function mr(n){n.memoizedState!==null&&ae(Dt,n);var r=_e.current,s=J_(r,n.type);r!==s&&(ae(De,n),ae(_e,s))}function Ci(n){De.current===n&&(ce(_e),ce(De)),Dt.current===n&&(ce(Dt),Fl._currentValue=ge)}var da=Object.prototype.hasOwnProperty,ma=i.unstable_scheduleCallback,pa=i.unstable_cancelCallback,jo=i.unstable_shouldYield,zu=i.unstable_requestPaint,Sn=i.unstable_now,kh=i.unstable_getCurrentPriorityLevel,zo=i.unstable_ImmediatePriority,ms=i.unstable_UserBlockingPriority,ga=i.unstable_NormalPriority,Vh=i.unstable_LowPriority,ps=i.unstable_IdlePriority,Bo=i.log,Bu=i.unstable_setDisableYieldValue,ft=null,Ye=null;function hn(n){if(typeof Bo=="function"&&Bu(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(ft,n)}catch{}}var Qt=Math.clz32?Math.clz32:ya,Fu=Math.log,Lh=Math.LN2;function ya(n){return n>>>=0,n===0?32:31-(Fu(n)/Lh|0)|0}var va=256,_a=4194304;function Un(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function gs(n,r,s){var l=n.pendingLanes;if(l===0)return 0;var h=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Un(l):(_&=T,_!==0?h=Un(_):s||(s=T&~n,s!==0&&(h=Un(s))))):(T=l&~d,T!==0?h=Un(T):_!==0?h=Un(_):s||(s=l&~n,s!==0&&(h=Un(s)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,s=r&-r,d>=s||d===32&&(s&4194048)!==0)?r:h}function Ea(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Fo(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qo(){var n=va;return va<<=1,(va&4194048)===0&&(va=256),n}function Ho(){var n=_a;return _a<<=1,(_a&62914560)===0&&(_a=4194304),n}function Oi(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function xi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Go(n,r,s,l,h,d){var _=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,q=n.hiddenUpdates;for(s=_&~s;0<s;){var W=31-Qt(s),ee=1<<W;T[W]=0,I[W]=-1;var H=q[W];if(H!==null)for(q[W]=null,W=0;W<H.length;W++){var G=H[W];G!==null&&(G.lane&=-536870913)}s&=~ee}l!==0&&Xn(n,l,0),d!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~r))}function Xn(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Qt(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|s&4194090}function Ko(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var l=31-Qt(s),h=1<<l;h&r|n[l]&r&&(n[l]|=r),s&=~h}}function pr(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ys(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function gr(){var n=ue.p;return n!==0?n:(n=window.event,n===void 0?32:v0(n.type))}function qu(n,r){var s=ue.p;try{return ue.p=n,r()}finally{ue.p=s}}var at=Math.random().toString(36).slice(2),St="__reactFiber$"+at,vt="__reactProps$"+at,wn="__reactContainer$"+at,Yo="__reactEvents$"+at,Uh="__reactListeners$"+at,yr="__reactHandles$"+at,Hu="__reactResources$"+at,Ta="__reactMarker$"+at;function vr(n){delete n[St],delete n[vt],delete n[Yo],delete n[Uh],delete n[yr]}function Di(n){var r=n[St];if(r)return r;for(var s=n.parentNode;s;){if(r=s[wn]||s[St]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=i0(n);n!==null;){if(s=n[St])return s;n=i0(n)}return r}n=s,s=n.parentNode}return null}function Wn(n){if(n=n[St]||n[wn]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function Zn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(a(33))}function rn(n){var r=n[Hu];return r||(r=n[Hu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function mt(n){n[Ta]=!0}var Qo=new Set,vs={};function jn(n,r){Ni(n,r),Ni(n+"Capture",r)}function Ni(n,r){for(vs[n]=r,n=0;n<r.length;n++)Qo.add(r[n])}var Gu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ku={},ba={};function Yu(n){return da.call(ba,n)?!0:da.call(Ku,n)?!1:Gu.test(n)?ba[n]=!0:(Ku[n]=!0,!1)}function _r(n,r,s){if(Yu(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function Jn(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function jt(n,r,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+l)}}var Aa,Qu;function Pi(n){if(Aa===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);Aa=r&&r[1]||"",Qu=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Aa+n+Qu}var _s=!1;function Es(n,r){if(!n||_s)return"";_s=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(G){var H=G}Reflect.construct(n,[],ee)}else{try{ee.call()}catch(G){H=G}n.call(ee.prototype)}}else{try{throw Error()}catch(G){H=G}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var I=_.split(`
`),q=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===q.length)for(l=I.length-1,h=q.length-1;1<=l&&0<=h&&I[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==q[h]){var W=`
`+I[l].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=l&&0<=h);break}}}finally{_s=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Pi(s):""}function $o(n){switch(n.tag){case 26:case 27:case 5:return Pi(n.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 15:return Es(n.type,!1);case 11:return Es(n.type.render,!1);case 1:return Es(n.type,!0);case 31:return Pi("Activity");default:return""}}function Ts(n){try{var r="";do r+=$o(n),n=n.return;while(n);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function an(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xo(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jh(n){var r=Xo(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),l=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,d=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function bs(n){n._valueTracker||(n._valueTracker=jh(n))}function Wo(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return n&&(l=Xo(n)?n.checked?"true":"false":n.value),n=l,n!==s?(r.setValue(n),!0):!1}function Sa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var zh=/[\n"\\]/g;function _t(n){return n.replace(zh,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function dn(n,r,s,l,h,d,_,T){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),r!=null?_==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+an(r)):n.value!==""+an(r)&&(n.value=""+an(r)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),r!=null?Er(n,_,an(r)):s!=null?Er(n,_,an(s)):l!=null&&n.removeAttribute("value"),h==null&&d!=null&&(n.defaultChecked=!!d),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+an(T):n.removeAttribute("name")}function wa(n,r,s,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;s=s!=null?""+an(s):"",r=r!=null?""+an(r):s,T||r===n.value||(n.value=r),n.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_)}function Er(n,r,s){r==="number"&&Sa(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Mi(n,r,s,l){if(n=n.options,r){r={};for(var h=0;h<s.length;h++)r["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=r.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&l&&(n[s].defaultSelected=!0)}else{for(s=""+an(s),r=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Xe(n,r,s){if(r!=null&&(r=""+an(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+an(s):""}function Ra(n,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(ct(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=an(r),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l)}function Rn(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var Ia=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $u(n,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,s):typeof s!="number"||s===0||Ia.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function Zo(n,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&s[h]!==l&&$u(n,h,l)}else for(var d in r)r.hasOwnProperty(d)&&$u(n,d,r[d])}function Jo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function As(n){return Fh.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ki=null;function In(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vi=null,Li=null;function el(n){var r=Wn(n);if(r&&(n=r.stateNode)){var s=n[vt]||null;e:switch(n=r.stateNode,r.type){case"input":if(dn(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+_t(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==n&&l.form===n.form){var h=l[vt]||null;if(!h)throw Error(a(90));dn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===n.form&&Wo(l)}break e;case"textarea":Xe(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Mi(n,!!s.multiple,r,!1)}}}var ei=!1;function Xu(n,r,s){if(ei)return n(r,s);ei=!0;try{var l=n(r);return l}finally{if(ei=!1,(Vi!==null||Li!==null)&&(qc(),Vi&&(r=Vi,n=Li,Li=Vi=null,el(r),n)))for(r=0;r<n.length;r++)el(n[r])}}function Ca(n,r){var s=n.stateNode;if(s===null)return null;var l=s[vt]||null;if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cn=!1;if(zn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){Cn=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{Cn=!1}var ti=null,Tr=null,Ui=null;function tl(){if(Ui)return Ui;var n,r=Tr,s=r.length,l,h="value"in ti?ti.value:ti.textContent,d=h.length;for(n=0;n<s&&r[n]===h[n];n++);var _=s-n;for(l=1;l<=_&&r[s-l]===h[d-l];l++);return Ui=h.slice(n,1<l?1-l:void 0)}function ni(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ii(){return!0}function nl(){return!1}function Nt(n){function r(s,l,h,d,_){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(s=n[T],this[T]=s?s(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:nl,this.isPropagationStopped=nl,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),r}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=Nt(Ge),xa=E({},Ge,{view:0,detail:0}),Wu=Nt(xa),ws,Rs,ri,Da=E({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ri&&(ri&&n.type==="mousemove"?(ws=n.screenX-ri.screenX,Rs=n.screenY-ri.screenY):Rs=ws=0,ri=n),ws)},movementY:function(n){return"movementY"in n?n.movementY:Rs}}),On=Nt(Da),Zu=E({},Da,{dataTransfer:0}),qh=Nt(Zu),Na=E({},xa,{relatedTarget:0}),Is=Nt(Na),il=E({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),Cs=Nt(il),Ju=E({},Ge,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Os=Nt(Ju),Hh=E({},Ge,{data:0}),rl=Nt(Hh),Pa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function al(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=tc[n])?!!r[n]:!1}function Ma(){return al}var nc=E({},xa,{key:function(n){if(n.key){var r=Pa[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ni(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ec[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(n){return n.type==="keypress"?ni(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ni(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xs=Nt(nc),ic=E({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sl=Nt(ic),ji=E({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),rc=Nt(ji),ac=E({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),sc=Nt(ac),oc=E({},Da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ds=Nt(oc),sn=E({},Ge,{newState:0,oldState:0}),lc=Nt(sn),uc=[9,13,27,32],ai=zn&&"CompositionEvent"in window,c=null;zn&&"documentMode"in document&&(c=document.documentMode);var y=zn&&"TextEvent"in window&&!c,v=zn&&(!ai||c&&8<c&&11>=c),b=" ",z=!1;function K(n,r){switch(n){case"keyup":return uc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ue=!1;function wt(n,r){switch(n){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(z=!0,b);case"textInput":return n=r.data,n===b&&z?null:n;default:return null}}function je(n,r){if(Ue)return n==="compositionend"||!ai&&K(n,r)?(n=tl(),Ui=Tr=ti=null,Ue=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Pt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pt[n.type]:r==="textarea"}function zi(n,r,s,l){Vi?Li?Li.push(l):Li=[l]:Vi=l,r=$c(r,"onChange"),0<r.length&&(s=new Ss("onChange","change",null,s,l),n.push({event:s,listeners:r}))}var zt=null,si=null;function ol(n){Y_(n,0)}function cc(n){var r=Zn(n);if(Wo(r))return n}function my(n,r){if(n==="change")return r}var py=!1;if(zn){var Gh;if(zn){var Kh="oninput"in document;if(!Kh){var gy=document.createElement("div");gy.setAttribute("oninput","return;"),Kh=typeof gy.oninput=="function"}Gh=Kh}else Gh=!1;py=Gh&&(!document.documentMode||9<document.documentMode)}function yy(){zt&&(zt.detachEvent("onpropertychange",vy),si=zt=null)}function vy(n){if(n.propertyName==="value"&&cc(si)){var r=[];zi(r,si,n,In(n)),Xu(ol,r)}}function P1(n,r,s){n==="focusin"?(yy(),zt=r,si=s,zt.attachEvent("onpropertychange",vy)):n==="focusout"&&yy()}function M1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cc(si)}function k1(n,r){if(n==="click")return cc(r)}function V1(n,r){if(n==="input"||n==="change")return cc(r)}function L1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mn=typeof Object.is=="function"?Object.is:L1;function ll(n,r){if(mn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!da.call(r,h)||!mn(n[h],r[h]))return!1}return!0}function _y(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ey(n,r){var s=_y(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=r&&l>=r)return{node:s,offset:r-n};n=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=_y(s)}}function Ty(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ty(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function by(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Sa(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=Sa(n.document)}return r}function Yh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var U1=zn&&"documentMode"in document&&11>=document.documentMode,Ns=null,Qh=null,ul=null,$h=!1;function Ay(n,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$h||Ns==null||Ns!==Sa(l)||(l=Ns,"selectionStart"in l&&Yh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ul&&ll(ul,l)||(ul=l,l=$c(Qh,"onSelect"),0<l.length&&(r=new Ss("onSelect","select",null,r,s),n.push({event:r,listeners:l}),r.target=Ns)))}function ka(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var Ps={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Xh={},Sy={};zn&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Va(n){if(Xh[n])return Xh[n];if(!Ps[n])return n;var r=Ps[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in Sy)return Xh[n]=r[s];return n}var wy=Va("animationend"),Ry=Va("animationiteration"),Iy=Va("animationstart"),j1=Va("transitionrun"),z1=Va("transitionstart"),B1=Va("transitioncancel"),Cy=Va("transitionend"),Oy=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function Bn(n,r){Oy.set(n,r),jn(r,[n])}var xy=new WeakMap;function xn(n,r){if(typeof n=="object"&&n!==null){var s=xy.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Ts(r)},xy.set(n,r),r)}return{value:n,source:r,stack:Ts(r)}}var Dn=[],Ms=0,Zh=0;function fc(){for(var n=Ms,r=Zh=Ms=0;r<n;){var s=Dn[r];Dn[r++]=null;var l=Dn[r];Dn[r++]=null;var h=Dn[r];Dn[r++]=null;var d=Dn[r];if(Dn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&Dy(s,h,d)}}function hc(n,r,s,l){Dn[Ms++]=n,Dn[Ms++]=r,Dn[Ms++]=s,Dn[Ms++]=l,Zh|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Jh(n,r,s,l){return hc(n,r,s,l),dc(n)}function ks(n,r){return hc(n,null,null,r),dc(n)}function Dy(n,r,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var h=!1,d=n.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(h=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,h&&r!==null&&(h=31-Qt(s),n=d.hiddenUpdates,l=n[h],l===null?n[h]=[r]:l.push(r),r.lane=s|536870912),d):null}function dc(n){if(50<Ml)throw Ml=0,am=null,Error(a(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Vs={};function F1(n,r,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,r,s,l){return new F1(n,r,s,l)}function ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bi(n,r){var s=n.alternate;return s===null?(s=pn(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Ny(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function mc(n,r,s,l,h,d){var _=0;if(l=n,typeof n=="function")ed(n)&&(_=1);else if(typeof n=="string")_=Hw(n,s,_e.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case w:return n=pn(31,s,r,h),n.elementType=w,n.lanes=d,n;case k:return La(s.children,h,d,r);case Q:_=8,h|=24;break;case L:return n=pn(12,s,r,h|2),n.elementType=L,n.lanes=d,n;case le:return n=pn(13,s,r,h),n.elementType=le,n.lanes=d,n;case ve:return n=pn(19,s,r,h),n.elementType=ve,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:case $:_=10;break e;case J:_=9;break e;case se:_=11;break e;case N:_=14;break e;case R:_=16,l=null;break e}_=29,s=Error(a(130,n===null?"null":typeof n,"")),l=null}return r=pn(_,s,r,h),r.elementType=n,r.type=l,r.lanes=d,r}function La(n,r,s,l){return n=pn(7,n,l,r),n.lanes=s,n}function td(n,r,s){return n=pn(6,n,null,r),n.lanes=s,n}function nd(n,r,s){return r=pn(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Ls=[],Us=0,pc=null,gc=0,Nn=[],Pn=0,Ua=null,Fi=1,qi="";function ja(n,r){Ls[Us++]=gc,Ls[Us++]=pc,pc=n,gc=r}function Py(n,r,s){Nn[Pn++]=Fi,Nn[Pn++]=qi,Nn[Pn++]=Ua,Ua=n;var l=Fi;n=qi;var h=32-Qt(l)-1;l&=~(1<<h),s+=1;var d=32-Qt(r)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Fi=1<<32-Qt(r)+h|s<<h|l,qi=d+n}else Fi=1<<d|s<<h|l,qi=n}function id(n){n.return!==null&&(ja(n,1),Py(n,1,0))}function rd(n){for(;n===pc;)pc=Ls[--Us],Ls[Us]=null,gc=Ls[--Us],Ls[Us]=null;for(;n===Ua;)Ua=Nn[--Pn],Nn[Pn]=null,qi=Nn[--Pn],Nn[Pn]=null,Fi=Nn[--Pn],Nn[Pn]=null}var on=null,ht=null,He=!1,za=null,oi=!1,ad=Error(a(519));function Ba(n){var r=Error(a(418,""));throw hl(xn(r,n)),ad}function My(n){var r=n.stateNode,s=n.type,l=n.memoizedProps;switch(r[St]=n,r[vt]=l,s){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(s=0;s<Vl.length;s++)Me(Vl[s],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),wa(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),bs(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),Ra(r,l.value,l.defaultValue,l.children),bs(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||W_(r.textContent,s)?(l.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),l.onScroll!=null&&Me("scroll",r),l.onScrollEnd!=null&&Me("scrollend",r),l.onClick!=null&&(r.onclick=Xc),r=!0):r=!1,r||Ba(n)}function ky(n){for(on=n.return;on;)switch(on.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:on=on.return}}function cl(n){if(n!==on)return!1;if(!He)return ky(n),He=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Tm(n.type,n.memoizedProps)),s=!s),s&&ht&&Ba(n),ky(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(r===0){ht=qn(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;n=n.nextSibling}ht=null}}else r===27?(r=ht,Lr(n.type)?(n=wm,wm=null,ht=n):ht=r):ht=on?qn(n.stateNode.nextSibling):null;return!0}function fl(){ht=on=null,He=!1}function Vy(){var n=za;return n!==null&&(cn===null?cn=n:cn.push.apply(cn,n),za=null),n}function hl(n){za===null?za=[n]:za.push(n)}var sd=ie(null),Fa=null,Hi=null;function br(n,r,s){ae(sd,r._currentValue),r._currentValue=s}function Gi(n){n._currentValue=sd.current,ce(sd)}function od(n,r,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===s)break;n=n.return}}function ld(n,r,s,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<r.length;I++)if(T.context===r[I]){d.lanes|=s,T=d.alternate,T!==null&&(T.lanes|=s),od(d.return,s,n),l||(_=null);break e}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(a(341));_.lanes|=s,d=_.alternate,d!==null&&(d.lanes|=s),od(_,s,n),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===n){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function dl(n,r,s,l){n=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var T=h.type;mn(h.pendingProps.value,_.value)||(n!==null?n.push(T):n=[T])}}else if(h===Dt.current){if(_=h.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Fl):n=[Fl])}h=h.return}n!==null&&ld(r,n,s,l),r.flags|=262144}function yc(n){for(n=n.firstContext;n!==null;){if(!mn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qa(n){Fa=n,Hi=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $t(n){return Ly(Fa,n)}function vc(n,r){return Fa===null&&qa(n),Ly(n,r)}function Ly(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Hi===null){if(n===null)throw Error(a(308));Hi=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Hi=Hi.next=r;return s}var q1=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},H1=i.unstable_scheduleCallback,G1=i.unstable_NormalPriority,It={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ud(){return{controller:new q1,data:new Map,refCount:0}}function ml(n){n.refCount--,n.refCount===0&&H1(G1,function(){n.controller.abort()})}var pl=null,cd=0,js=0,zs=null;function K1(n,r){if(pl===null){var s=pl=[];cd=0,js=hm(),zs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return cd++,r.then(Uy,Uy),r}function Uy(){if(--cd===0&&pl!==null){zs!==null&&(zs.status="fulfilled");var n=pl;pl=null,js=0,zs=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function Y1(n,r){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<s.length;h++)(0,s[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var jy=X.S;X.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&K1(n,r),jy!==null&&jy(n,r)};var Ha=ie(null);function fd(){var n=Ha.current;return n!==null?n:nt.pooledCache}function _c(n,r){r===null?ae(Ha,Ha.current):ae(Ha,r.pool)}function zy(){var n=fd();return n===null?null:{parent:It._currentValue,pool:n}}var gl=Error(a(460)),By=Error(a(474)),Ec=Error(a(542)),hd={then:function(){}};function Fy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Tc(){}function qy(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(Tc,Tc),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Gy(n),n;default:if(typeof r.status=="string")r.then(Tc,Tc);else{if(n=nt,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Gy(n),n}throw yl=r,gl}}var yl=null;function Hy(){if(yl===null)throw Error(a(459));var n=yl;return yl=null,n}function Gy(n){if(n===gl||n===Ec)throw Error(a(483))}var Ar=!1;function dd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function md(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Sr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function wr(n,r,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Qe&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=dc(n),Dy(n,null,s),r}return hc(n,l,r,s),dc(n)}function vl(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,s|=l,r.lanes=s,Ko(n,s)}}function pd(n,r){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,s=s.next}while(s!==null);d===null?h=d=r:d=d.next=r}else h=d=r;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var gd=!1;function _l(){if(gd){var n=zs;if(n!==null)throw n}}function El(n,r,s,l){gd=!1;var h=n.updateQueue;Ar=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,q=I.next;I.next=null,_===null?d=q:_.next=q,_=I;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=q:T.next=q,W.lastBaseUpdate=I))}if(d!==null){var ee=h.baseState;_=0,W=q=I=null,T=d;do{var H=T.lane&-536870913,G=H!==T.lane;if(G?(ze&H)===H:(l&H)===H){H!==0&&H===js&&(gd=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=n,Ee=T;H=r;var Je=s;switch(Ee.tag){case 1:if(Ae=Ee.payload,typeof Ae=="function"){ee=Ae.call(Je,ee,H);break e}ee=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Ee.payload,H=typeof Ae=="function"?Ae.call(Je,ee,H):Ae,H==null)break e;ee=E({},ee,H);break e;case 2:Ar=!0}}H=T.callback,H!==null&&(n.flags|=64,G&&(n.flags|=8192),G=h.callbacks,G===null?h.callbacks=[H]:G.push(H))}else G={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(q=W=G,I=ee):W=W.next=G,_|=H;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;G=T,T=G.next,G.next=null,h.lastBaseUpdate=G,h.shared.pending=null}}while(!0);W===null&&(I=ee),h.baseState=I,h.firstBaseUpdate=q,h.lastBaseUpdate=W,d===null&&(h.shared.lanes=0),Pr|=_,n.lanes=_,n.memoizedState=ee}}function Ky(n,r){if(typeof n!="function")throw Error(a(191,n));n.call(r)}function Yy(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Ky(s[n],r)}var Bs=ie(null),bc=ie(0);function Qy(n,r){n=Zi,ae(bc,n),ae(Bs,r),Zi=n|r.baseLanes}function yd(){ae(bc,Zi),ae(Bs,Bs.current)}function vd(){Zi=bc.current,ce(Bs),ce(bc)}var Rr=0,Oe=null,We=null,Et=null,Ac=!1,Fs=!1,Ga=!1,Sc=0,Tl=0,qs=null,Q1=0;function pt(){throw Error(a(321))}function _d(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!mn(n[s],r[s]))return!1;return!0}function Ed(n,r,s,l,h,d){return Rr=d,Oe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,X.H=n===null||n.memoizedState===null?Dv:Nv,Ga=!1,d=s(l,h),Ga=!1,Fs&&(d=Xy(r,s,l,h)),$y(n),d}function $y(n){X.H=xc;var r=We!==null&&We.next!==null;if(Rr=0,Et=We=Oe=null,Ac=!1,Tl=0,qs=null,r)throw Error(a(300));n===null||Mt||(n=n.dependencies,n!==null&&yc(n)&&(Mt=!0))}function Xy(n,r,s,l){Oe=n;var h=0;do{if(Fs&&(qs=null),Tl=0,Fs=!1,25<=h)throw Error(a(301));if(h+=1,Et=We=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}X.H=tw,d=r(s,l)}while(Fs);return d}function $1(){var n=X.H,r=n.useState()[0];return r=typeof r.then=="function"?bl(r):r,n=n.useState()[0],(We!==null?We.memoizedState:null)!==n&&(Oe.flags|=1024),r}function Td(){var n=Sc!==0;return Sc=0,n}function bd(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function Ad(n){if(Ac){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Ac=!1}Rr=0,Et=We=Oe=null,Fs=!1,Tl=Sc=0,qs=null}function ln(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Oe.memoizedState=Et=n:Et=Et.next=n,Et}function Tt(){if(We===null){var n=Oe.alternate;n=n!==null?n.memoizedState:null}else n=We.next;var r=Et===null?Oe.memoizedState:Et.next;if(r!==null)Et=r,We=n;else{if(n===null)throw Oe.alternate===null?Error(a(467)):Error(a(310));We=n,n={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Et===null?Oe.memoizedState=Et=n:Et=Et.next=n}return Et}function Sd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(n){var r=Tl;return Tl+=1,qs===null&&(qs=[]),n=qy(qs,n,r),r=Oe,(Et===null?r.memoizedState:Et.next)===null&&(r=r.alternate,X.H=r===null||r.memoizedState===null?Dv:Nv),n}function wc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return bl(n);if(n.$$typeof===$)return $t(n)}throw Error(a(438,String(n)))}function wd(n){var r=null,s=Oe.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Sd(),Oe.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),l=0;l<n;l++)s[l]=x;return r.index++,s}function Ki(n,r){return typeof r=="function"?r(n):r}function Rc(n){var r=Tt();return Rd(r,We,n)}function Rd(n,r,s){var l=n.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=n.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}r.baseQueue=h=d,l.pending=null}if(d=n.baseState,h===null)n.memoizedState=d;else{r=h.next;var T=_=null,I=null,q=r,W=!1;do{var ee=q.lane&-536870913;if(ee!==q.lane?(ze&ee)===ee:(Rr&ee)===ee){var H=q.revertLane;if(H===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ee===js&&(W=!0);else if((Rr&H)===H){q=q.next,H===js&&(W=!0);continue}else ee={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(T=I=ee,_=d):I=I.next=ee,Oe.lanes|=H,Pr|=H;ee=q.action,Ga&&s(d,ee),d=q.hasEagerState?q.eagerState:s(d,ee)}else H={lane:ee,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},I===null?(T=I=H,_=d):I=I.next=H,Oe.lanes|=ee,Pr|=ee;q=q.next}while(q!==null&&q!==r);if(I===null?_=d:I.next=T,!mn(d,n.memoizedState)&&(Mt=!0,W&&(s=zs,s!==null)))throw s;n.memoizedState=d,n.baseState=_,n.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Id(n){var r=Tt(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var l=s.dispatch,h=s.pending,d=r.memoizedState;if(h!==null){s.pending=null;var _=h=h.next;do d=n(d,_.action),_=_.next;while(_!==h);mn(d,r.memoizedState)||(Mt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),s.lastRenderedState=d}return[d,l]}function Wy(n,r,s){var l=Oe,h=Tt(),d=He;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=r();var _=!mn((We||h).memoizedState,s);_&&(h.memoizedState=s,Mt=!0),h=h.queue;var T=ev.bind(null,l,h,n);if(Al(2048,8,T,[n]),h.getSnapshot!==r||_||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,Hs(9,Ic(),Jy.bind(null,l,h,s,r),null),nt===null)throw Error(a(349));d||(Rr&124)!==0||Zy(l,r,s)}return s}function Zy(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Oe.updateQueue,r===null?(r=Sd(),Oe.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function Jy(n,r,s,l){r.value=s,r.getSnapshot=l,tv(r)&&nv(n)}function ev(n,r,s){return s(function(){tv(r)&&nv(n)})}function tv(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!mn(n,s)}catch{return!0}}function nv(n){var r=ks(n,2);r!==null&&En(r,n,2)}function Cd(n){var r=ln();if(typeof n=="function"){var s=n;if(n=s(),Ga){hn(!0);try{s()}finally{hn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:n},r}function iv(n,r,s,l){return n.baseState=s,Rd(n,We,typeof l=="function"?l:Ki)}function X1(n,r,s,l,h){if(Oc(n))throw Error(a(485));if(n=r.action,n!==null){var d={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};X.T!==null?s(!0):d.isTransition=!1,l(d),s=r.pending,s===null?(d.next=r.pending=d,rv(r,d)):(d.next=s.next,r.pending=s.next=d)}}function rv(n,r){var s=r.action,l=r.payload,h=n.state;if(r.isTransition){var d=X.T,_={};X.T=_;try{var T=s(h,l),I=X.S;I!==null&&I(_,T),av(n,r,T)}catch(q){Od(n,r,q)}finally{X.T=d}}else try{d=s(h,l),av(n,r,d)}catch(q){Od(n,r,q)}}function av(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){sv(n,r,l)},function(l){return Od(n,r,l)}):sv(n,r,s)}function sv(n,r,s){r.status="fulfilled",r.value=s,ov(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,rv(n,s)))}function Od(n,r,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,ov(r),r=r.next;while(r!==l)}n.action=null}function ov(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function lv(n,r){return r}function uv(n,r){if(He){var s=nt.formState;if(s!==null){e:{var l=Oe;if(He){if(ht){t:{for(var h=ht,d=oi;h.nodeType!==8;){if(!d){h=null;break t}if(h=qn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ht=qn(h.nextSibling),l=h.data==="F!";break e}}Ba(l)}l=!1}l&&(r=s[0])}}return s=ln(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lv,lastRenderedState:r},s.queue=l,s=Cv.bind(null,Oe,l),l.dispatch=s,l=Cd(!1),d=Md.bind(null,Oe,!1,l.queue),l=ln(),h={state:r,dispatch:null,action:n,pending:null},l.queue=h,s=X1.bind(null,Oe,h,d,s),h.dispatch=s,l.memoizedState=n,[r,s,!1]}function cv(n){var r=Tt();return fv(r,We,n)}function fv(n,r,s){if(r=Rd(n,r,lv)[0],n=Rc(Ki)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=bl(r)}catch(_){throw _===gl?Ec:_}else l=r;r=Tt();var h=r.queue,d=h.dispatch;return s!==r.memoizedState&&(Oe.flags|=2048,Hs(9,Ic(),W1.bind(null,h,s),null)),[l,d,n]}function W1(n,r){n.action=r}function hv(n){var r=Tt(),s=We;if(s!==null)return fv(r,s,n);Tt(),r=r.memoizedState,s=Tt();var l=s.queue.dispatch;return s.memoizedState=n,[r,l,!1]}function Hs(n,r,s,l){return n={tag:n,create:s,deps:l,inst:r,next:null},r=Oe.updateQueue,r===null&&(r=Sd(),Oe.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,r.lastEffect=n),n}function Ic(){return{destroy:void 0,resource:void 0}}function dv(){return Tt().memoizedState}function Cc(n,r,s,l){var h=ln();l=l===void 0?null:l,Oe.flags|=n,h.memoizedState=Hs(1|r,Ic(),s,l)}function Al(n,r,s,l){var h=Tt();l=l===void 0?null:l;var d=h.memoizedState.inst;We!==null&&l!==null&&_d(l,We.memoizedState.deps)?h.memoizedState=Hs(r,d,s,l):(Oe.flags|=n,h.memoizedState=Hs(1|r,d,s,l))}function mv(n,r){Cc(8390656,8,n,r)}function pv(n,r){Al(2048,8,n,r)}function gv(n,r){return Al(4,2,n,r)}function yv(n,r){return Al(4,4,n,r)}function vv(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function _v(n,r,s){s=s!=null?s.concat([n]):null,Al(4,4,vv.bind(null,r,n),s)}function xd(){}function Ev(n,r){var s=Tt();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&_d(r,l[1])?l[0]:(s.memoizedState=[n,r],n)}function Tv(n,r){var s=Tt();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&_d(r,l[1]))return l[0];if(l=n(),Ga){hn(!0);try{n()}finally{hn(!1)}}return s.memoizedState=[l,r],l}function Dd(n,r,s){return s===void 0||(Rr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=s,n=S_(),Oe.lanes|=n,Pr|=n,s)}function bv(n,r,s,l){return mn(s,r)?s:Bs.current!==null?(n=Dd(n,s,l),mn(n,r)||(Mt=!0),n):(Rr&42)===0?(Mt=!0,n.memoizedState=s):(n=S_(),Oe.lanes|=n,Pr|=n,r)}function Av(n,r,s,l,h){var d=ue.p;ue.p=d!==0&&8>d?d:8;var _=X.T,T={};X.T=T,Md(n,!1,r,s);try{var I=h(),q=X.S;if(q!==null&&q(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var W=Y1(I,l);Sl(n,r,W,_n(n))}else Sl(n,r,l,_n(n))}catch(ee){Sl(n,r,{then:function(){},status:"rejected",reason:ee},_n())}finally{ue.p=d,X.T=_}}function Z1(){}function Nd(n,r,s,l){if(n.tag!==5)throw Error(a(476));var h=Sv(n).queue;Av(n,h,r,ge,s===null?Z1:function(){return wv(n),s(l)})}function Sv(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ge},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function wv(n){var r=Sv(n).next.queue;Sl(n,r,{},_n())}function Pd(){return $t(Fl)}function Rv(){return Tt().memoizedState}function Iv(){return Tt().memoizedState}function J1(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=_n();n=Sr(s);var l=wr(r,n,s);l!==null&&(En(l,r,s),vl(l,r,s)),r={cache:ud()},n.payload=r;return}r=r.return}}function ew(n,r,s){var l=_n();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Oc(n)?Ov(r,s):(s=Jh(n,r,s,l),s!==null&&(En(s,n,l),xv(s,r,l)))}function Cv(n,r,s){var l=_n();Sl(n,r,s,l)}function Sl(n,r,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Oc(n))Ov(r,h);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,T=d(_,s);if(h.hasEagerState=!0,h.eagerState=T,mn(T,_))return hc(n,r,h,0),nt===null&&fc(),!1}catch{}finally{}if(s=Jh(n,r,h,l),s!==null)return En(s,n,l),xv(s,r,l),!0}return!1}function Md(n,r,s,l){if(l={lane:2,revertLane:hm(),action:l,hasEagerState:!1,eagerState:null,next:null},Oc(n)){if(r)throw Error(a(479))}else r=Jh(n,s,l,2),r!==null&&En(r,n,2)}function Oc(n){var r=n.alternate;return n===Oe||r!==null&&r===Oe}function Ov(n,r){Fs=Ac=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function xv(n,r,s){if((s&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,s|=l,r.lanes=s,Ko(n,s)}}var xc={readContext:$t,use:wc,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},Dv={readContext:$t,use:wc,useCallback:function(n,r){return ln().memoizedState=[n,r===void 0?null:r],n},useContext:$t,useEffect:mv,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,Cc(4194308,4,vv.bind(null,r,n),s)},useLayoutEffect:function(n,r){return Cc(4194308,4,n,r)},useInsertionEffect:function(n,r){Cc(4,2,n,r)},useMemo:function(n,r){var s=ln();r=r===void 0?null:r;var l=n();if(Ga){hn(!0);try{n()}finally{hn(!1)}}return s.memoizedState=[l,r],l},useReducer:function(n,r,s){var l=ln();if(s!==void 0){var h=s(r);if(Ga){hn(!0);try{s(r)}finally{hn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=ew.bind(null,Oe,n),[l.memoizedState,n]},useRef:function(n){var r=ln();return n={current:n},r.memoizedState=n},useState:function(n){n=Cd(n);var r=n.queue,s=Cv.bind(null,Oe,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:xd,useDeferredValue:function(n,r){var s=ln();return Dd(s,n,r)},useTransition:function(){var n=Cd(!1);return n=Av.bind(null,Oe,n.queue,!0,!1),ln().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var l=Oe,h=ln();if(He){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),nt===null)throw Error(a(349));(ze&124)!==0||Zy(l,r,s)}h.memoizedState=s;var d={value:s,getSnapshot:r};return h.queue=d,mv(ev.bind(null,l,d,n),[n]),l.flags|=2048,Hs(9,Ic(),Jy.bind(null,l,d,s,r),null),s},useId:function(){var n=ln(),r=nt.identifierPrefix;if(He){var s=qi,l=Fi;s=(l&~(1<<32-Qt(l)-1)).toString(32)+s,r="«"+r+"R"+s,s=Sc++,0<s&&(r+="H"+s.toString(32)),r+="»"}else s=Q1++,r="«"+r+"r"+s.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Pd,useFormState:uv,useActionState:uv,useOptimistic:function(n){var r=ln();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Md.bind(null,Oe,!0,s),s.dispatch=r,[n,r]},useMemoCache:wd,useCacheRefresh:function(){return ln().memoizedState=J1.bind(null,Oe)}},Nv={readContext:$t,use:wc,useCallback:Ev,useContext:$t,useEffect:pv,useImperativeHandle:_v,useInsertionEffect:gv,useLayoutEffect:yv,useMemo:Tv,useReducer:Rc,useRef:dv,useState:function(){return Rc(Ki)},useDebugValue:xd,useDeferredValue:function(n,r){var s=Tt();return bv(s,We.memoizedState,n,r)},useTransition:function(){var n=Rc(Ki)[0],r=Tt().memoizedState;return[typeof n=="boolean"?n:bl(n),r]},useSyncExternalStore:Wy,useId:Rv,useHostTransitionStatus:Pd,useFormState:cv,useActionState:cv,useOptimistic:function(n,r){var s=Tt();return iv(s,We,n,r)},useMemoCache:wd,useCacheRefresh:Iv},tw={readContext:$t,use:wc,useCallback:Ev,useContext:$t,useEffect:pv,useImperativeHandle:_v,useInsertionEffect:gv,useLayoutEffect:yv,useMemo:Tv,useReducer:Id,useRef:dv,useState:function(){return Id(Ki)},useDebugValue:xd,useDeferredValue:function(n,r){var s=Tt();return We===null?Dd(s,n,r):bv(s,We.memoizedState,n,r)},useTransition:function(){var n=Id(Ki)[0],r=Tt().memoizedState;return[typeof n=="boolean"?n:bl(n),r]},useSyncExternalStore:Wy,useId:Rv,useHostTransitionStatus:Pd,useFormState:hv,useActionState:hv,useOptimistic:function(n,r){var s=Tt();return We!==null?iv(s,We,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:wd,useCacheRefresh:Iv},Gs=null,wl=0;function Dc(n){var r=wl;return wl+=1,Gs===null&&(Gs=[]),qy(Gs,n,r)}function Rl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Nc(n,r){throw r.$$typeof===A?Error(a(525)):(n=Object.prototype.toString.call(r),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function Pv(n){var r=n._init;return r(n._payload)}function Mv(n){function r(U,P){if(n){var F=U.deletions;F===null?(U.deletions=[P],U.flags|=16):F.push(P)}}function s(U,P){if(!n)return null;for(;P!==null;)r(U,P),P=P.sibling;return null}function l(U){for(var P=new Map;U!==null;)U.key!==null?P.set(U.key,U):P.set(U.index,U),U=U.sibling;return P}function h(U,P){return U=Bi(U,P),U.index=0,U.sibling=null,U}function d(U,P,F){return U.index=F,n?(F=U.alternate,F!==null?(F=F.index,F<P?(U.flags|=67108866,P):F):(U.flags|=67108866,P)):(U.flags|=1048576,P)}function _(U){return n&&U.alternate===null&&(U.flags|=67108866),U}function T(U,P,F,Z){return P===null||P.tag!==6?(P=td(F,U.mode,Z),P.return=U,P):(P=h(P,F),P.return=U,P)}function I(U,P,F,Z){var he=F.type;return he===k?W(U,P,F.props.children,Z,F.key):P!==null&&(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===R&&Pv(he)===P.type)?(P=h(P,F.props),Rl(P,F),P.return=U,P):(P=mc(F.type,F.key,F.props,null,U.mode,Z),Rl(P,F),P.return=U,P)}function q(U,P,F,Z){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=nd(F,U.mode,Z),P.return=U,P):(P=h(P,F.children||[]),P.return=U,P)}function W(U,P,F,Z,he){return P===null||P.tag!==7?(P=La(F,U.mode,Z,he),P.return=U,P):(P=h(P,F),P.return=U,P)}function ee(U,P,F){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=td(""+P,U.mode,F),P.return=U,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return F=mc(P.type,P.key,P.props,null,U.mode,F),Rl(F,P),F.return=U,F;case M:return P=nd(P,U.mode,F),P.return=U,P;case R:var Z=P._init;return P=Z(P._payload),ee(U,P,F)}if(ct(P)||j(P))return P=La(P,U.mode,F,null),P.return=U,P;if(typeof P.then=="function")return ee(U,Dc(P),F);if(P.$$typeof===$)return ee(U,vc(U,P),F);Nc(U,P)}return null}function H(U,P,F,Z){var he=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return he!==null?null:T(U,P,""+F,Z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===he?I(U,P,F,Z):null;case M:return F.key===he?q(U,P,F,Z):null;case R:return he=F._init,F=he(F._payload),H(U,P,F,Z)}if(ct(F)||j(F))return he!==null?null:W(U,P,F,Z,null);if(typeof F.then=="function")return H(U,P,Dc(F),Z);if(F.$$typeof===$)return H(U,P,vc(U,F),Z);Nc(U,F)}return null}function G(U,P,F,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return U=U.get(F)||null,T(P,U,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return U=U.get(Z.key===null?F:Z.key)||null,I(P,U,Z,he);case M:return U=U.get(Z.key===null?F:Z.key)||null,q(P,U,Z,he);case R:var Ne=Z._init;return Z=Ne(Z._payload),G(U,P,F,Z,he)}if(ct(Z)||j(Z))return U=U.get(F)||null,W(P,U,Z,he,null);if(typeof Z.then=="function")return G(U,P,F,Dc(Z),he);if(Z.$$typeof===$)return G(U,P,F,vc(P,Z),he);Nc(P,Z)}return null}function Ae(U,P,F,Z){for(var he=null,Ne=null,pe=P,Te=P=0,Vt=null;pe!==null&&Te<F.length;Te++){pe.index>Te?(Vt=pe,pe=null):Vt=pe.sibling;var Fe=H(U,pe,F[Te],Z);if(Fe===null){pe===null&&(pe=Vt);break}n&&pe&&Fe.alternate===null&&r(U,pe),P=d(Fe,P,Te),Ne===null?he=Fe:Ne.sibling=Fe,Ne=Fe,pe=Vt}if(Te===F.length)return s(U,pe),He&&ja(U,Te),he;if(pe===null){for(;Te<F.length;Te++)pe=ee(U,F[Te],Z),pe!==null&&(P=d(pe,P,Te),Ne===null?he=pe:Ne.sibling=pe,Ne=pe);return He&&ja(U,Te),he}for(pe=l(pe);Te<F.length;Te++)Vt=G(pe,U,Te,F[Te],Z),Vt!==null&&(n&&Vt.alternate!==null&&pe.delete(Vt.key===null?Te:Vt.key),P=d(Vt,P,Te),Ne===null?he=Vt:Ne.sibling=Vt,Ne=Vt);return n&&pe.forEach(function(Fr){return r(U,Fr)}),He&&ja(U,Te),he}function Ee(U,P,F,Z){if(F==null)throw Error(a(151));for(var he=null,Ne=null,pe=P,Te=P=0,Vt=null,Fe=F.next();pe!==null&&!Fe.done;Te++,Fe=F.next()){pe.index>Te?(Vt=pe,pe=null):Vt=pe.sibling;var Fr=H(U,pe,Fe.value,Z);if(Fr===null){pe===null&&(pe=Vt);break}n&&pe&&Fr.alternate===null&&r(U,pe),P=d(Fr,P,Te),Ne===null?he=Fr:Ne.sibling=Fr,Ne=Fr,pe=Vt}if(Fe.done)return s(U,pe),He&&ja(U,Te),he;if(pe===null){for(;!Fe.done;Te++,Fe=F.next())Fe=ee(U,Fe.value,Z),Fe!==null&&(P=d(Fe,P,Te),Ne===null?he=Fe:Ne.sibling=Fe,Ne=Fe);return He&&ja(U,Te),he}for(pe=l(pe);!Fe.done;Te++,Fe=F.next())Fe=G(pe,U,Te,Fe.value,Z),Fe!==null&&(n&&Fe.alternate!==null&&pe.delete(Fe.key===null?Te:Fe.key),P=d(Fe,P,Te),Ne===null?he=Fe:Ne.sibling=Fe,Ne=Fe);return n&&pe.forEach(function(nR){return r(U,nR)}),He&&ja(U,Te),he}function Je(U,P,F,Z){if(typeof F=="object"&&F!==null&&F.type===k&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var he=F.key;P!==null;){if(P.key===he){if(he=F.type,he===k){if(P.tag===7){s(U,P.sibling),Z=h(P,F.props.children),Z.return=U,U=Z;break e}}else if(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===R&&Pv(he)===P.type){s(U,P.sibling),Z=h(P,F.props),Rl(Z,F),Z.return=U,U=Z;break e}s(U,P);break}else r(U,P);P=P.sibling}F.type===k?(Z=La(F.props.children,U.mode,Z,F.key),Z.return=U,U=Z):(Z=mc(F.type,F.key,F.props,null,U.mode,Z),Rl(Z,F),Z.return=U,U=Z)}return _(U);case M:e:{for(he=F.key;P!==null;){if(P.key===he)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){s(U,P.sibling),Z=h(P,F.children||[]),Z.return=U,U=Z;break e}else{s(U,P);break}else r(U,P);P=P.sibling}Z=nd(F,U.mode,Z),Z.return=U,U=Z}return _(U);case R:return he=F._init,F=he(F._payload),Je(U,P,F,Z)}if(ct(F))return Ae(U,P,F,Z);if(j(F)){if(he=j(F),typeof he!="function")throw Error(a(150));return F=he.call(F),Ee(U,P,F,Z)}if(typeof F.then=="function")return Je(U,P,Dc(F),Z);if(F.$$typeof===$)return Je(U,P,vc(U,F),Z);Nc(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,P!==null&&P.tag===6?(s(U,P.sibling),Z=h(P,F),Z.return=U,U=Z):(s(U,P),Z=td(F,U.mode,Z),Z.return=U,U=Z),_(U)):s(U,P)}return function(U,P,F,Z){try{wl=0;var he=Je(U,P,F,Z);return Gs=null,he}catch(pe){if(pe===gl||pe===Ec)throw pe;var Ne=pn(29,pe,null,U.mode);return Ne.lanes=Z,Ne.return=U,Ne}finally{}}}var Ks=Mv(!0),kv=Mv(!1),Mn=ie(null),li=null;function Ir(n){var r=n.alternate;ae(Ct,Ct.current&1),ae(Mn,n),li===null&&(r===null||Bs.current!==null||r.memoizedState!==null)&&(li=n)}function Vv(n){if(n.tag===22){if(ae(Ct,Ct.current),ae(Mn,n),li===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(li=n)}}else Cr()}function Cr(){ae(Ct,Ct.current),ae(Mn,Mn.current)}function Yi(n){ce(Mn),li===n&&(li=null),ce(Ct)}var Ct=ie(0);function Pc(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Sm(s)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function kd(n,r,s,l){r=n.memoizedState,s=s(l,r),s=s==null?r:E({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Vd={enqueueSetState:function(n,r,s){n=n._reactInternals;var l=_n(),h=Sr(l);h.payload=r,s!=null&&(h.callback=s),r=wr(n,h,l),r!==null&&(En(r,n,l),vl(r,n,l))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var l=_n(),h=Sr(l);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=wr(n,h,l),r!==null&&(En(r,n,l),vl(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=_n(),l=Sr(s);l.tag=2,r!=null&&(l.callback=r),r=wr(n,l,s),r!==null&&(En(r,n,s),vl(r,n,s))}};function Lv(n,r,s,l,h,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!ll(s,l)||!ll(h,d):!0}function Uv(n,r,s,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==n&&Vd.enqueueReplaceState(r,r.state,null)}function Ka(n,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(n=n.defaultProps){s===r&&(s=E({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}var Mc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function jv(n){Mc(n)}function zv(n){console.error(n)}function Bv(n){Mc(n)}function kc(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function Fv(n,r,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ld(n,r,s){return s=Sr(s),s.tag=3,s.payload={element:null},s.callback=function(){kc(n,r)},s}function qv(n){return n=Sr(n),n.tag=3,n}function Hv(n,r,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;n.payload=function(){return h(d)},n.callback=function(){Fv(r,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){Fv(r,s,l),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function nw(n,r,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&dl(r,s,h,!0),s=Mn.current,s!==null){switch(s.tag){case 13:return li===null?om():s.alternate===null&&dt===0&&(dt=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===hd?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),um(n,l,h)),!1;case 22:return s.flags|=65536,l===hd?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),um(n,l,h)),!1}throw Error(a(435,s.tag))}return um(n,l,h),om(),!1}if(He)return r=Mn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==ad&&(n=Error(a(422),{cause:l}),hl(xn(n,s)))):(l!==ad&&(r=Error(a(423),{cause:l}),hl(xn(r,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=xn(l,s),h=Ld(n.stateNode,l,h),pd(n,h),dt!==4&&(dt=2)),!1;var d=Error(a(520),{cause:l});if(d=xn(d,s),Pl===null?Pl=[d]:Pl.push(d),dt!==4&&(dt=2),r===null)return!0;l=xn(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Ld(s.stateNode,l,n),pd(s,n),!1;case 1:if(r=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Mr===null||!Mr.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=qv(h),Hv(h,n,s,l),pd(s,h),!1}s=s.return}while(s!==null);return!1}var Gv=Error(a(461)),Mt=!1;function Bt(n,r,s,l){r.child=n===null?kv(r,null,s,l):Ks(r,n.child,s,l)}function Kv(n,r,s,l,h){s=s.render;var d=r.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return qa(r),l=Ed(n,r,s,_,d,h),T=Td(),n!==null&&!Mt?(bd(n,r,h),Qi(n,r,h)):(He&&T&&id(r),r.flags|=1,Bt(n,r,l,h),r.child)}function Yv(n,r,s,l,h){if(n===null){var d=s.type;return typeof d=="function"&&!ed(d)&&d.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=d,Qv(n,r,d,l,h)):(n=mc(s.type,null,l,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!Gd(n,h)){var _=d.memoizedProps;if(s=s.compare,s=s!==null?s:ll,s(_,l)&&n.ref===r.ref)return Qi(n,r,h)}return r.flags|=1,n=Bi(d,l),n.ref=r.ref,n.return=r,r.child=n}function Qv(n,r,s,l,h){if(n!==null){var d=n.memoizedProps;if(ll(d,l)&&n.ref===r.ref)if(Mt=!1,r.pendingProps=l=d,Gd(n,h))(n.flags&131072)!==0&&(Mt=!0);else return r.lanes=n.lanes,Qi(n,r,h)}return Ud(n,r,s,l,h)}function $v(n,r,s){var l=r.pendingProps,h=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,n!==null){for(h=r.child=n.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return Xv(n,r,l,s)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&_c(r,d!==null?d.cachePool:null),d!==null?Qy(r,d):yd(),Vv(r);else return r.lanes=r.childLanes=536870912,Xv(n,r,d!==null?d.baseLanes|s:s,s)}else d!==null?(_c(r,d.cachePool),Qy(r,d),Cr(),r.memoizedState=null):(n!==null&&_c(r,null),yd(),Cr());return Bt(n,r,h,s),r.child}function Xv(n,r,s,l){var h=fd();return h=h===null?null:{parent:It._currentValue,pool:h},r.memoizedState={baseLanes:s,cachePool:h},n!==null&&_c(r,null),yd(),Vv(r),n!==null&&dl(n,r,l,!0),null}function Vc(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function Ud(n,r,s,l,h){return qa(r),s=Ed(n,r,s,l,void 0,h),l=Td(),n!==null&&!Mt?(bd(n,r,h),Qi(n,r,h)):(He&&l&&id(r),r.flags|=1,Bt(n,r,s,h),r.child)}function Wv(n,r,s,l,h,d){return qa(r),r.updateQueue=null,s=Xy(r,l,s,h),$y(n),l=Td(),n!==null&&!Mt?(bd(n,r,d),Qi(n,r,d)):(He&&l&&id(r),r.flags|=1,Bt(n,r,s,d),r.child)}function Zv(n,r,s,l,h){if(qa(r),r.stateNode===null){var d=Vs,_=s.contextType;typeof _=="object"&&_!==null&&(d=$t(_)),d=new s(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Vd,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},dd(r),_=s.contextType,d.context=typeof _=="object"&&_!==null?$t(_):Vs,d.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(kd(r,s,_,l),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Vd.enqueueReplaceState(d,d.state,null),El(r,l,d,h),_l(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){d=r.stateNode;var T=r.memoizedProps,I=Ka(s,T);d.props=I;var q=d.context,W=s.contextType;_=Vs,typeof W=="object"&&W!==null&&(_=$t(W));var ee=s.getDerivedStateFromProps;W=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,W||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||q!==_)&&Uv(r,d,l,_),Ar=!1;var H=r.memoizedState;d.state=H,El(r,l,d,h),_l(),q=r.memoizedState,T||H!==q||Ar?(typeof ee=="function"&&(kd(r,s,ee,l),q=r.memoizedState),(I=Ar||Lv(r,s,I,l,H,q,_))?(W||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=q),d.props=l,d.state=q,d.context=_,l=I):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,md(n,r),_=r.memoizedProps,W=Ka(s,_),d.props=W,ee=r.pendingProps,H=d.context,q=s.contextType,I=Vs,typeof q=="object"&&q!==null&&(I=$t(q)),T=s.getDerivedStateFromProps,(q=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==ee||H!==I)&&Uv(r,d,l,I),Ar=!1,H=r.memoizedState,d.state=H,El(r,l,d,h),_l();var G=r.memoizedState;_!==ee||H!==G||Ar||n!==null&&n.dependencies!==null&&yc(n.dependencies)?(typeof T=="function"&&(kd(r,s,T,l),G=r.memoizedState),(W=Ar||Lv(r,s,W,l,H,G,I)||n!==null&&n.dependencies!==null&&yc(n.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,I)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=G),d.props=l,d.state=G,d.context=I,l=W):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&H===n.memoizedState||(r.flags|=1024),l=!1)}return d=l,Vc(n,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&l?(r.child=Ks(r,n.child,null,h),r.child=Ks(r,null,s,h)):Bt(n,r,s,h),r.memoizedState=d.state,n=r.child):n=Qi(n,r,h),n}function Jv(n,r,s,l){return fl(),r.flags|=256,Bt(n,r,s,l),r.child}var jd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zd(n){return{baseLanes:n,cachePool:zy()}}function Bd(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=kn),n}function e_(n,r,s){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(Ct.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,n===null){if(He){if(h?Ir(r):Cr(),He){var T=ht,I;if(I=T){e:{for(I=T,T=oi;I.nodeType!==8;){if(!T){T=null;break e}if(I=qn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:Ua!==null?{id:Fi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},I=pn(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,on=r,ht=null,I=!0):I=!1}I||Ba(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Sm(T)?r.lanes=32:r.lanes=536870912,null;Yi(r)}return T=l.children,l=l.fallback,h?(Cr(),h=r.mode,T=Lc({mode:"hidden",children:T},h),l=La(l,h,s,null),T.return=r,l.return=r,T.sibling=l,r.child=T,h=r.child,h.memoizedState=zd(s),h.childLanes=Bd(n,_,s),r.memoizedState=jd,l):(Ir(r),Fd(r,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)r.flags&256?(Ir(r),r.flags&=-257,r=qd(n,r,s)):r.memoizedState!==null?(Cr(),r.child=n.child,r.flags|=128,r=null):(Cr(),h=l.fallback,T=r.mode,l=Lc({mode:"visible",children:l.children},T),h=La(h,T,s,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ks(r,n.child,null,s),l=r.child,l.memoizedState=zd(s),l.childLanes=Bd(n,_,s),r.memoizedState=jd,r=h);else if(Ir(r),Sm(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var q=_.dgst;_=q,l=Error(a(419)),l.stack="",l.digest=_,hl({value:l,source:null,stack:null}),r=qd(n,r,s)}else if(Mt||dl(n,r,s,!1),_=(s&n.childLanes)!==0,Mt||_){if(_=nt,_!==null&&(l=s&-s,l=(l&42)!==0?1:pr(l),l=(l&(_.suspendedLanes|s))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,ks(n,l),En(_,n,l),Gv;T.data==="$?"||om(),r=qd(n,r,s)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,ht=qn(T.nextSibling),on=r,He=!0,za=null,oi=!1,n!==null&&(Nn[Pn++]=Fi,Nn[Pn++]=qi,Nn[Pn++]=Ua,Fi=n.id,qi=n.overflow,Ua=r),r=Fd(r,l.children),r.flags|=4096);return r}return h?(Cr(),h=l.fallback,T=r.mode,I=n.child,q=I.sibling,l=Bi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,q!==null?h=Bi(q,h):(h=La(h,T,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,T=n.child.memoizedState,T===null?T=zd(s):(I=T.cachePool,I!==null?(q=It._currentValue,I=I.parent!==q?{parent:q,pool:q}:I):I=zy(),T={baseLanes:T.baseLanes|s,cachePool:I}),h.memoizedState=T,h.childLanes=Bd(n,_,s),r.memoizedState=jd,l):(Ir(r),s=n.child,n=s.sibling,s=Bi(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,n!==null&&(_=r.deletions,_===null?(r.deletions=[n],r.flags|=16):_.push(n)),r.child=s,r.memoizedState=null,s)}function Fd(n,r){return r=Lc({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Lc(n,r){return n=pn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function qd(n,r,s){return Ks(r,n.child,null,s),n=Fd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function t_(n,r,s){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),od(n.return,r,s)}function Hd(n,r,s,l,h){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=h)}function n_(n,r,s){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(Bt(n,r,l.children,s),l=Ct.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&t_(n,s,r);else if(n.tag===19)t_(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(ae(Ct,l),h){case"forwards":for(s=r.child,h=null;s!==null;)n=s.alternate,n!==null&&Pc(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=r.child,r.child=null):(h=s.sibling,s.sibling=null),Hd(r,!1,h,s,d);break;case"backwards":for(s=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Pc(n)===null){r.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Hd(r,!0,s,null,d);break;case"together":Hd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Qi(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Pr|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(dl(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(a(153));if(r.child!==null){for(n=r.child,s=Bi(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=Bi(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function Gd(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&yc(n)))}function iw(n,r,s){switch(r.tag){case 3:tt(r,r.stateNode.containerInfo),br(r,It,n.memoizedState.cache),fl();break;case 27:case 5:mr(r);break;case 4:tt(r,r.stateNode.containerInfo);break;case 10:br(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Ir(r),r.flags|=128,null):(s&r.child.childLanes)!==0?e_(n,r,s):(Ir(r),n=Qi(n,r,s),n!==null?n.sibling:null);Ir(r);break;case 19:var h=(n.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(dl(n,r,s,!1),l=(s&r.childLanes)!==0),h){if(l)return n_(n,r,s);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ae(Ct,Ct.current),l)break;return null;case 22:case 23:return r.lanes=0,$v(n,r,s);case 24:br(r,It,n.memoizedState.cache)}return Qi(n,r,s)}function i_(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)Mt=!0;else{if(!Gd(n,s)&&(r.flags&128)===0)return Mt=!1,iw(n,r,s);Mt=(n.flags&131072)!==0}else Mt=!1,He&&(r.flags&1048576)!==0&&Py(r,gc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")ed(l)?(n=Ka(l,n),r.tag=1,r=Zv(null,r,l,n,s)):(r.tag=0,r=Ud(null,r,l,n,s));else{if(l!=null){if(h=l.$$typeof,h===se){r.tag=11,r=Kv(null,r,l,n,s);break e}else if(h===N){r.tag=14,r=Yv(null,r,l,n,s);break e}}throw r=Ut(l)||l,Error(a(306,r,""))}}return r;case 0:return Ud(n,r,r.type,r.pendingProps,s);case 1:return l=r.type,h=Ka(l,r.pendingProps),Zv(n,r,l,h,s);case 3:e:{if(tt(r,r.stateNode.containerInfo),n===null)throw Error(a(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,md(n,r),El(r,l,null,s);var _=r.memoizedState;if(l=_.cache,br(r,It,l),l!==d.cache&&ld(r,[It],s,!0),_l(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Jv(n,r,l,s);break e}else if(l!==h){h=xn(Error(a(424)),r),hl(h),r=Jv(n,r,l,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ht=qn(n.firstChild),on=r,He=!0,za=null,oi=!0,s=kv(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(fl(),l===h){r=Qi(n,r,s);break e}Bt(n,r,l,s)}r=r.child}return r;case 26:return Vc(n,r),n===null?(s=o0(r.type,null,r.pendingProps,null))?r.memoizedState=s:He||(s=r.type,n=r.pendingProps,l=Wc(we.current).createElement(s),l[St]=r,l[vt]=n,qt(l,s,n),mt(l),r.stateNode=l):r.memoizedState=o0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return mr(r),n===null&&He&&(l=r.stateNode=r0(r.type,r.pendingProps,we.current),on=r,oi=!0,h=ht,Lr(r.type)?(wm=h,ht=qn(l.firstChild)):ht=h),Bt(n,r,r.pendingProps.children,s),Vc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&He&&((h=l=ht)&&(l=Dw(l,r.type,r.pendingProps,oi),l!==null?(r.stateNode=l,on=r,ht=qn(l.firstChild),oi=!1,h=!0):h=!1),h||Ba(r)),mr(r),h=r.type,d=r.pendingProps,_=n!==null?n.memoizedProps:null,l=d.children,Tm(h,d)?l=null:_!==null&&Tm(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=Ed(n,r,$1,null,null,s),Fl._currentValue=h),Vc(n,r),Bt(n,r,l,s),r.child;case 6:return n===null&&He&&((n=s=ht)&&(s=Nw(s,r.pendingProps,oi),s!==null?(r.stateNode=s,on=r,ht=null,n=!0):n=!1),n||Ba(r)),null;case 13:return e_(n,r,s);case 4:return tt(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=Ks(r,null,l,s):Bt(n,r,l,s),r.child;case 11:return Kv(n,r,r.type,r.pendingProps,s);case 7:return Bt(n,r,r.pendingProps,s),r.child;case 8:return Bt(n,r,r.pendingProps.children,s),r.child;case 12:return Bt(n,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,br(r,r.type,l.value),Bt(n,r,l.children,s),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,qa(r),h=$t(h),l=l(h),r.flags|=1,Bt(n,r,l,s),r.child;case 14:return Yv(n,r,r.type,r.pendingProps,s);case 15:return Qv(n,r,r.type,r.pendingProps,s);case 19:return n_(n,r,s);case 31:return l=r.pendingProps,s=r.mode,l={mode:l.mode,children:l.children},n===null?(s=Lc(l,s),s.ref=r.ref,r.child=s,s.return=r,r=s):(s=Bi(n.child,l),s.ref=r.ref,r.child=s,s.return=r,r=s),r;case 22:return $v(n,r,s);case 24:return qa(r),l=$t(It),n===null?(h=fd(),h===null&&(h=nt,d=ud(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),r.memoizedState={parent:l,cache:h},dd(r),br(r,It,h)):((n.lanes&s)!==0&&(md(n,r),El(r,null,null,s),_l()),h=n.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),br(r,It,l)):(l=d.cache,br(r,It,l),l!==h.cache&&ld(r,[It],s,!0))),Bt(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function $i(n){n.flags|=4}function r_(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!h0(r)){if(r=Mn.current,r!==null&&((ze&4194048)===ze?li!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==li))throw yl=hd,By;n.flags|=8192}}function Uc(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Ho():536870912,n.lanes|=r,Xs|=r)}function Il(n,r){if(!He)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(r)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=s,r}function rw(n,r,s){var l=r.pendingProps;switch(rd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(r),null;case 1:return ot(r),null;case 3:return s=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Gi(It),$n(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(cl(r)?$i(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Vy())),ot(r),null;case 26:return s=r.memoizedState,n===null?($i(r),s!==null?(ot(r),r_(r,s)):(ot(r),r.flags&=-16777217)):s?s!==n.memoizedState?($i(r),ot(r),r_(r,s)):(ot(r),r.flags&=-16777217):(n.memoizedProps!==l&&$i(r),ot(r),r.flags&=-16777217),null;case 27:Ci(r),s=we.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==l&&$i(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return ot(r),null}n=_e.current,cl(r)?My(r):(n=r0(h,l,s),r.stateNode=n,$i(r))}return ot(r),null;case 5:if(Ci(r),s=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&$i(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return ot(r),null}if(n=_e.current,cl(r))My(r);else{switch(h=Wc(we.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}n[St]=r,n[vt]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(qt(n,s,l),s){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&$i(r)}}return ot(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&$i(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(n=we.current,cl(r)){if(n=r.stateNode,s=r.memoizedProps,l=null,h=on,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[St]=r,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||W_(n.nodeValue,s)),n||Ba(r)}else n=Wc(n).createTextNode(l),n[St]=r,r.stateNode=n}return ot(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=cl(r),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[St]=r}else fl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ot(r),h=!1}else h=Vy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Yi(r),r):(Yi(r),null)}if(Yi(r),(r.flags&128)!==0)return r.lanes=s,r;if(s=l!==null,n=n!==null&&n.memoizedState!==null,s){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return s!==n&&s&&(r.child.flags|=8192),Uc(r,r.updateQueue),ot(r),null;case 4:return $n(),n===null&&gm(r.stateNode.containerInfo),ot(r),null;case 10:return Gi(r.type),ot(r),null;case 19:if(ce(Ct),h=r.memoizedState,h===null)return ot(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)Il(h,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=Pc(n),d!==null){for(r.flags|=128,Il(h,!1),n=d.updateQueue,r.updateQueue=n,Uc(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)Ny(s,n),s=s.sibling;return ae(Ct,Ct.current&1|2),r.child}n=n.sibling}h.tail!==null&&Sn()>Bc&&(r.flags|=128,l=!0,Il(h,!1),r.lanes=4194304)}else{if(!l)if(n=Pc(d),n!==null){if(r.flags|=128,l=!0,n=n.updateQueue,r.updateQueue=n,Uc(r,n),Il(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!He)return ot(r),null}else 2*Sn()-h.renderingStartTime>Bc&&s!==536870912&&(r.flags|=128,l=!0,Il(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(n=h.last,n!==null?n.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Sn(),r.sibling=null,n=Ct.current,ae(Ct,l?n&1|2:n&1),r):(ot(r),null);case 22:case 23:return Yi(r),vd(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(ot(r),r.subtreeFlags&6&&(r.flags|=8192)):ot(r),s=r.updateQueue,s!==null&&Uc(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),n!==null&&ce(Ha),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Gi(It),ot(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function aw(n,r){switch(rd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Gi(It),$n(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Ci(r),null;case 13:if(Yi(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(a(340));fl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ce(Ct),null;case 4:return $n(),null;case 10:return Gi(r.type),null;case 22:case 23:return Yi(r),vd(),n!==null&&ce(Ha),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Gi(It),null;case 25:return null;default:return null}}function a_(n,r){switch(rd(r),r.tag){case 3:Gi(It),$n();break;case 26:case 27:case 5:Ci(r);break;case 4:$n();break;case 13:Yi(r);break;case 19:ce(Ct);break;case 10:Gi(r.type);break;case 22:case 23:Yi(r),vd(),n!==null&&ce(Ha);break;case 24:Gi(It)}}function Cl(n,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&n)===n){l=void 0;var d=s.create,_=s.inst;l=d(),_.destroy=l}s=s.next}while(s!==h)}}catch(T){et(r,r.return,T)}}function Or(n,r,s){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&n)===n){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=r;var I=s,q=T;try{q()}catch(W){et(h,I,W)}}}l=l.next}while(l!==d)}}catch(W){et(r,r.return,W)}}function s_(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{Yy(r,s)}catch(l){et(n,n.return,l)}}}function o_(n,r,s){s.props=Ka(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){et(n,r,l)}}function Ol(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(h){et(n,r,h)}}function ui(n,r){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){et(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){et(n,r,h)}else s.current=null}function l_(n){var r=n.type,s=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){et(n,n.return,h)}}function Kd(n,r,s){try{var l=n.stateNode;Rw(l,n.type,s,r),l[vt]=r}catch(h){et(n,n.return,h)}}function u_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Lr(n.type)||n.tag===4}function Yd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||u_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Lr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qd(n,r,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Xc));else if(l!==4&&(l===27&&Lr(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(Qd(n,r,s),n=n.sibling;n!==null;)Qd(n,r,s),n=n.sibling}function jc(n,r,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(l!==4&&(l===27&&Lr(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(jc(n,r,s),n=n.sibling;n!==null;)jc(n,r,s),n=n.sibling}function c_(n){var r=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);qt(r,l,s),r[St]=n,r[vt]=s}catch(d){et(n,n.return,d)}}var Xi=!1,gt=!1,$d=!1,f_=typeof WeakSet=="function"?WeakSet:Set,kt=null;function sw(n,r){if(n=n.containerInfo,_m=rf,n=by(n),Yh(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var _=0,T=-1,I=-1,q=0,W=0,ee=n,H=null;t:for(;;){for(var G;ee!==s||h!==0&&ee.nodeType!==3||(T=_+h),ee!==d||l!==0&&ee.nodeType!==3||(I=_+l),ee.nodeType===3&&(_+=ee.nodeValue.length),(G=ee.firstChild)!==null;)H=ee,ee=G;for(;;){if(ee===n)break t;if(H===s&&++q===h&&(T=_),H===d&&++W===l&&(I=_),(G=ee.nextSibling)!==null)break;ee=H,H=ee.parentNode}ee=G}s=T===-1||I===-1?null:{start:T,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(Em={focusedElem:n,selectionRange:s},rf=!1,kt=r;kt!==null;)if(r=kt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,kt=n;else for(;kt!==null;){switch(r=kt,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,s=r,h=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Ae=Ka(s.type,h,s.elementType===s.type);n=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){et(s,s.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)Am(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Am(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=r.sibling,n!==null){n.return=r.return,kt=n;break}kt=r.return}}function h_(n,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xr(n,s),l&4&&Cl(5,s);break;case 1:if(xr(n,s),l&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(_){et(s,s.return,_)}else{var h=Ka(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(_){et(s,s.return,_)}}l&64&&s_(s),l&512&&Ol(s,s.return);break;case 3:if(xr(n,s),l&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{Yy(n,r)}catch(_){et(s,s.return,_)}}break;case 27:r===null&&l&4&&c_(s);case 26:case 5:xr(n,s),r===null&&l&4&&l_(s),l&512&&Ol(s,s.return);break;case 12:xr(n,s);break;case 13:xr(n,s),l&4&&p_(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=pw.bind(null,s),Pw(n,s))));break;case 22:if(l=s.memoizedState!==null||Xi,!l){r=r!==null&&r.memoizedState!==null||gt,h=Xi;var d=gt;Xi=l,(gt=r)&&!d?Dr(n,s,(s.subtreeFlags&8772)!==0):xr(n,s),Xi=h,gt=d}break;case 30:break;default:xr(n,s)}}function d_(n){var r=n.alternate;r!==null&&(n.alternate=null,d_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&vr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var st=null,un=!1;function Wi(n,r,s){for(s=s.child;s!==null;)m_(n,r,s),s=s.sibling}function m_(n,r,s){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ft,s)}catch{}switch(s.tag){case 26:gt||ui(s,r),Wi(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:gt||ui(s,r);var l=st,h=un;Lr(s.type)&&(st=s.stateNode,un=!1),Wi(n,r,s),Ul(s.stateNode),st=l,un=h;break;case 5:gt||ui(s,r);case 6:if(l=st,h=un,st=null,Wi(n,r,s),st=l,un=h,st!==null)if(un)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(s.stateNode)}catch(d){et(s,r,d)}else try{st.removeChild(s.stateNode)}catch(d){et(s,r,d)}break;case 18:st!==null&&(un?(n=st,n0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Kl(n)):n0(st,s.stateNode));break;case 4:l=st,h=un,st=s.stateNode.containerInfo,un=!0,Wi(n,r,s),st=l,un=h;break;case 0:case 11:case 14:case 15:gt||Or(2,s,r),gt||Or(4,s,r),Wi(n,r,s);break;case 1:gt||(ui(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&o_(s,r,l)),Wi(n,r,s);break;case 21:Wi(n,r,s);break;case 22:gt=(l=gt)||s.memoizedState!==null,Wi(n,r,s),gt=l;break;default:Wi(n,r,s)}}function p_(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Kl(n)}catch(s){et(r,r.return,s)}}function ow(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new f_),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new f_),r;default:throw Error(a(435,n.tag))}}function Xd(n,r){var s=ow(n);r.forEach(function(l){var h=gw.bind(null,n,l);s.has(l)||(s.add(l),l.then(h,h))})}function gn(n,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],d=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Lr(T.type)){st=T.stateNode,un=!1;break e}break;case 5:st=T.stateNode,un=!1;break e;case 3:case 4:st=T.stateNode.containerInfo,un=!0;break e}T=T.return}if(st===null)throw Error(a(160));m_(d,_,h),st=null,un=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)g_(r,n),r=r.sibling}var Fn=null;function g_(n,r){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:gn(r,n),yn(n),l&4&&(Or(3,n,n.return),Cl(3,n),Or(5,n,n.return));break;case 1:gn(r,n),yn(n),l&512&&(gt||s===null||ui(s,s.return)),l&64&&Xi&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=Fn;if(gn(r,n),yn(n),l&512&&(gt||s===null||ui(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){e:{l=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Ta]||d[St]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),qt(d,l,s),d[St]=n,mt(d),l=d;break e;case"link":var _=c0("link","href",h).get(l+(s.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(T,1);break t}}d=h.createElement(l),qt(d,l,s),h.head.appendChild(d);break;case"meta":if(_=c0("meta","content",h).get(l+(s.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(T,1);break t}}d=h.createElement(l),qt(d,l,s),h.head.appendChild(d);break;default:throw Error(a(468,l))}d[St]=n,mt(d),l=d}n.stateNode=l}else f0(h,n.type,n.stateNode);else n.stateNode=u0(h,l,n.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?f0(h,n.type,n.stateNode):u0(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Kd(n,n.memoizedProps,s.memoizedProps)}break;case 27:gn(r,n),yn(n),l&512&&(gt||s===null||ui(s,s.return)),s!==null&&l&4&&Kd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(gn(r,n),yn(n),l&512&&(gt||s===null||ui(s,s.return)),n.flags&32){h=n.stateNode;try{Rn(h,"")}catch(G){et(n,n.return,G)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,Kd(n,h,s!==null?s.memoizedProps:h)),l&1024&&($d=!0);break;case 6:if(gn(r,n),yn(n),l&4){if(n.stateNode===null)throw Error(a(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(G){et(n,n.return,G)}}break;case 3:if(ef=null,h=Fn,Fn=Zc(r.containerInfo),gn(r,n),Fn=h,yn(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Kl(r.containerInfo)}catch(G){et(n,n.return,G)}$d&&($d=!1,y_(n));break;case 4:l=Fn,Fn=Zc(n.stateNode.containerInfo),gn(r,n),yn(n),Fn=l;break;case 12:gn(r,n),yn(n);break;case 13:gn(r,n),yn(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(nm=Sn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Xd(n,l)));break;case 22:h=n.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,q=Xi,W=gt;if(Xi=q||h,gt=W||I,gn(r,n),gt=W,Xi=q,yn(n),l&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(s===null||I||Xi||gt||Ya(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){I=s=r;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var ee=I.memoizedProps.style,H=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(G){et(I,I.return,G)}}}else if(r.tag===6){if(s===null){I=r;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(G){et(I,I.return,G)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Xd(n,s))));break;case 19:gn(r,n),yn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Xd(n,l)));break;case 30:break;case 21:break;default:gn(r,n),yn(n)}}function yn(n){var r=n.flags;if(r&2){try{for(var s,l=n.return;l!==null;){if(u_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,d=Yd(n);jc(n,d,h);break;case 5:var _=s.stateNode;s.flags&32&&(Rn(_,""),s.flags&=-33);var T=Yd(n);jc(n,T,_);break;case 3:case 4:var I=s.stateNode.containerInfo,q=Yd(n);Qd(n,q,I);break;default:throw Error(a(161))}}catch(W){et(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function y_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;y_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function xr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)h_(n,r.alternate,r),r=r.sibling}function Ya(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Or(4,r,r.return),Ya(r);break;case 1:ui(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&o_(r,r.return,s),Ya(r);break;case 27:Ul(r.stateNode);case 26:case 5:ui(r,r.return),Ya(r);break;case 22:r.memoizedState===null&&Ya(r);break;case 30:Ya(r);break;default:Ya(r)}n=n.sibling}}function Dr(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=n,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:Dr(h,d,s),Cl(4,d);break;case 1:if(Dr(h,d,s),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){et(l,l.return,q)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Ky(I[h],T)}catch(q){et(l,l.return,q)}}s&&_&64&&s_(d),Ol(d,d.return);break;case 27:c_(d);case 26:case 5:Dr(h,d,s),s&&l===null&&_&4&&l_(d),Ol(d,d.return);break;case 12:Dr(h,d,s);break;case 13:Dr(h,d,s),s&&_&4&&p_(h,d);break;case 22:d.memoizedState===null&&Dr(h,d,s),Ol(d,d.return);break;case 30:break;default:Dr(h,d,s)}r=r.sibling}}function Wd(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&ml(s))}function Zd(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ml(n))}function ci(n,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)v_(n,r,s,l),r=r.sibling}function v_(n,r,s,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:ci(n,r,s,l),h&2048&&Cl(9,r);break;case 1:ci(n,r,s,l);break;case 3:ci(n,r,s,l),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&ml(n)));break;case 12:if(h&2048){ci(n,r,s,l),n=r.stateNode;try{var d=r.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){et(r,r.return,I)}}else ci(n,r,s,l);break;case 13:ci(n,r,s,l);break;case 23:break;case 22:d=r.stateNode,_=r.alternate,r.memoizedState!==null?d._visibility&2?ci(n,r,s,l):xl(n,r):d._visibility&2?ci(n,r,s,l):(d._visibility|=2,Ys(n,r,s,l,(r.subtreeFlags&10256)!==0)),h&2048&&Wd(_,r);break;case 24:ci(n,r,s,l),h&2048&&Zd(r.alternate,r);break;default:ci(n,r,s,l)}}function Ys(n,r,s,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,_=r,T=s,I=l,q=_.flags;switch(_.tag){case 0:case 11:case 15:Ys(d,_,T,I,h),Cl(8,_);break;case 23:break;case 22:var W=_.stateNode;_.memoizedState!==null?W._visibility&2?Ys(d,_,T,I,h):xl(d,_):(W._visibility|=2,Ys(d,_,T,I,h)),h&&q&2048&&Wd(_.alternate,_);break;case 24:Ys(d,_,T,I,h),h&&q&2048&&Zd(_.alternate,_);break;default:Ys(d,_,T,I,h)}r=r.sibling}}function xl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,l=r,h=l.flags;switch(l.tag){case 22:xl(s,l),h&2048&&Wd(l.alternate,l);break;case 24:xl(s,l),h&2048&&Zd(l.alternate,l);break;default:xl(s,l)}r=r.sibling}}var Dl=8192;function Qs(n){if(n.subtreeFlags&Dl)for(n=n.child;n!==null;)__(n),n=n.sibling}function __(n){switch(n.tag){case 26:Qs(n),n.flags&Dl&&n.memoizedState!==null&&Kw(Fn,n.memoizedState,n.memoizedProps);break;case 5:Qs(n);break;case 3:case 4:var r=Fn;Fn=Zc(n.stateNode.containerInfo),Qs(n),Fn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Dl,Dl=16777216,Qs(n),Dl=r):Qs(n));break;default:Qs(n)}}function E_(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Nl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];kt=l,b_(l,n)}E_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)T_(n),n=n.sibling}function T_(n){switch(n.tag){case 0:case 11:case 15:Nl(n),n.flags&2048&&Or(9,n,n.return);break;case 3:Nl(n);break;case 12:Nl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,zc(n)):Nl(n);break;default:Nl(n)}}function zc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];kt=l,b_(l,n)}E_(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Or(8,r,r.return),zc(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,zc(r));break;default:zc(r)}n=n.sibling}}function b_(n,r){for(;kt!==null;){var s=kt;switch(s.tag){case 0:case 11:case 15:Or(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ml(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,kt=l;else e:for(s=n;kt!==null;){l=kt;var h=l.sibling,d=l.return;if(d_(l),l===s){kt=null;break e}if(h!==null){h.return=d,kt=h;break e}kt=d}}}var lw={getCacheForType:function(n){var r=$t(It),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s}},uw=typeof WeakMap=="function"?WeakMap:Map,Qe=0,nt=null,Pe=null,ze=0,$e=0,vn=null,Nr=!1,$s=!1,Jd=!1,Zi=0,dt=0,Pr=0,Qa=0,em=0,kn=0,Xs=0,Pl=null,cn=null,tm=!1,nm=0,Bc=1/0,Fc=null,Mr=null,Ft=0,kr=null,Ws=null,Zs=0,im=0,rm=null,A_=null,Ml=0,am=null;function _n(){if((Qe&2)!==0&&ze!==0)return ze&-ze;if(X.T!==null){var n=js;return n!==0?n:hm()}return gr()}function S_(){kn===0&&(kn=(ze&536870912)===0||He?qo():536870912);var n=Mn.current;return n!==null&&(n.flags|=32),kn}function En(n,r,s){(n===nt&&($e===2||$e===9)||n.cancelPendingCommit!==null)&&(Js(n,0),Vr(n,ze,kn,!1)),xi(n,s),((Qe&2)===0||n!==nt)&&(n===nt&&((Qe&2)===0&&(Qa|=s),dt===4&&Vr(n,ze,kn,!1)),fi(n))}function w_(n,r,s){if((Qe&6)!==0)throw Error(a(327));var l=!s&&(r&124)===0&&(r&n.expiredLanes)===0||Ea(n,r),h=l?hw(n,r):lm(n,r,!0),d=l;do{if(h===0){$s&&!l&&Vr(n,r,0,!1);break}else{if(s=n.current.alternate,d&&!cw(s)){h=lm(n,r,!1),d=!1;continue}if(h===2){if(d=r,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var T=n;h=Pl;var I=T.current.memoizedState.isDehydrated;if(I&&(Js(T,_).flags|=256),_=lm(T,_,!1),_!==2){if(Jd&&!I){T.errorRecoveryDisabledLanes|=d,Qa|=d,h=4;break e}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Js(n,0),Vr(n,r,0,!0);break}e:{switch(l=n,d=h,d){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Vr(l,r,kn,!Nr);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(h=nm+300-Sn(),10<h)){if(Vr(l,r,kn,!Nr),gs(l,0,!0)!==0)break e;l.timeoutHandle=e0(R_.bind(null,l,s,cn,Fc,tm,r,kn,Qa,Xs,Nr,d,2,-0,0),h);break e}R_(l,s,cn,Fc,tm,r,kn,Qa,Xs,Nr,d,0,-0,0)}}break}while(!0);fi(n)}function R_(n,r,s,l,h,d,_,T,I,q,W,ee,H,G){if(n.timeoutHandle=-1,ee=r.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(Bl={stylesheets:null,count:0,unsuspend:Gw},__(r),ee=Yw(),ee!==null)){n.cancelPendingCommit=ee(P_.bind(null,n,r,d,s,l,h,_,T,I,W,1,H,G)),Vr(n,d,_,!q);return}P_(n,r,d,s,l,h,_,T,I)}function cw(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],d=h.getSnapshot;h=h.value;try{if(!mn(d(),h))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(n,r,s,l){r&=~em,r&=~Qa,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var h=r;0<h;){var d=31-Qt(h),_=1<<d;l[d]=-1,h&=~_}s!==0&&Xn(n,s,r)}function qc(){return(Qe&6)===0?(kl(0),!1):!0}function sm(){if(Pe!==null){if($e===0)var n=Pe.return;else n=Pe,Hi=Fa=null,Ad(n),Gs=null,wl=0,n=Pe;for(;n!==null;)a_(n.alternate,n),n=n.return;Pe=null}}function Js(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,Cw(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),sm(),nt=n,Pe=s=Bi(n.current,null),ze=r,$e=0,vn=null,Nr=!1,$s=Ea(n,r),Jd=!1,Xs=kn=em=Qa=Pr=dt=0,cn=Pl=null,tm=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var h=31-Qt(l),d=1<<h;r|=n[h],l&=~d}return Zi=r,fc(),s}function I_(n,r){Oe=null,X.H=xc,r===gl||r===Ec?(r=Hy(),$e=3):r===By?(r=Hy(),$e=4):$e=r===Gv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,vn=r,Pe===null&&(dt=1,kc(n,xn(r,n.current)))}function C_(){var n=X.H;return X.H=xc,n===null?xc:n}function O_(){var n=X.A;return X.A=lw,n}function om(){dt=4,Nr||(ze&4194048)!==ze&&Mn.current!==null||($s=!0),(Pr&134217727)===0&&(Qa&134217727)===0||nt===null||Vr(nt,ze,kn,!1)}function lm(n,r,s){var l=Qe;Qe|=2;var h=C_(),d=O_();(nt!==n||ze!==r)&&(Fc=null,Js(n,r)),r=!1;var _=dt;e:do try{if($e!==0&&Pe!==null){var T=Pe,I=vn;switch($e){case 8:sm(),_=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(r=!0);var q=$e;if($e=0,vn=null,eo(n,T,I,q),s&&$s){_=0;break e}break;default:q=$e,$e=0,vn=null,eo(n,T,I,q)}}fw(),_=dt;break}catch(W){I_(n,W)}while(!0);return r&&n.shellSuspendCounter++,Hi=Fa=null,Qe=l,X.H=h,X.A=d,Pe===null&&(nt=null,ze=0,fc()),_}function fw(){for(;Pe!==null;)x_(Pe)}function hw(n,r){var s=Qe;Qe|=2;var l=C_(),h=O_();nt!==n||ze!==r?(Fc=null,Bc=Sn()+500,Js(n,r)):$s=Ea(n,r);e:do try{if($e!==0&&Pe!==null){r=Pe;var d=vn;t:switch($e){case 1:$e=0,vn=null,eo(n,r,d,1);break;case 2:case 9:if(Fy(d)){$e=0,vn=null,D_(r);break}r=function(){$e!==2&&$e!==9||nt!==n||($e=7),fi(n)},d.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:Fy(d)?($e=0,vn=null,D_(r)):($e=0,vn=null,eo(n,r,d,7));break;case 5:var _=null;switch(Pe.tag){case 26:_=Pe.memoizedState;case 5:case 27:var T=Pe;if(!_||h0(_)){$e=0,vn=null;var I=T.sibling;if(I!==null)Pe=I;else{var q=T.return;q!==null?(Pe=q,Hc(q)):Pe=null}break t}}$e=0,vn=null,eo(n,r,d,5);break;case 6:$e=0,vn=null,eo(n,r,d,6);break;case 8:sm(),dt=6;break e;default:throw Error(a(462))}}dw();break}catch(W){I_(n,W)}while(!0);return Hi=Fa=null,X.H=l,X.A=h,Qe=s,Pe!==null?0:(nt=null,ze=0,fc(),dt)}function dw(){for(;Pe!==null&&!jo();)x_(Pe)}function x_(n){var r=i_(n.alternate,n,Zi);n.memoizedProps=n.pendingProps,r===null?Hc(n):Pe=r}function D_(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=Wv(s,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=Wv(s,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:Ad(r);default:a_(s,r),r=Pe=Ny(r,Zi),r=i_(s,r,Zi)}n.memoizedProps=n.pendingProps,r===null?Hc(n):Pe=r}function eo(n,r,s,l){Hi=Fa=null,Ad(r),Gs=null,wl=0;var h=r.return;try{if(nw(n,h,r,s,ze)){dt=1,kc(n,xn(s,n.current)),Pe=null;return}}catch(d){if(h!==null)throw Pe=h,d;dt=1,kc(n,xn(s,n.current)),Pe=null;return}r.flags&32768?(He||l===1?n=!0:$s||(ze&536870912)!==0?n=!1:(Nr=n=!0,(l===2||l===9||l===3||l===6)&&(l=Mn.current,l!==null&&l.tag===13&&(l.flags|=16384))),N_(r,n)):Hc(r)}function Hc(n){var r=n;do{if((r.flags&32768)!==0){N_(r,Nr);return}n=r.return;var s=rw(r.alternate,r,Zi);if(s!==null){Pe=s;return}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=n}while(r!==null);dt===0&&(dt=5)}function N_(n,r){do{var s=aw(n.alternate,n);if(s!==null){s.flags&=32767,Pe=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Pe=n;return}Pe=n=s}while(n!==null);dt=6,Pe=null}function P_(n,r,s,l,h,d,_,T,I){n.cancelPendingCommit=null;do Gc();while(Ft!==0);if((Qe&6)!==0)throw Error(a(327));if(r!==null){if(r===n.current)throw Error(a(177));if(d=r.lanes|r.childLanes,d|=Zh,Go(n,s,d,_,T,I),n===nt&&(Pe=nt=null,ze=0),Ws=r,kr=n,Zs=s,im=d,rm=h,A_=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,yw(ga,function(){return U_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,h=ue.p,ue.p=2,_=Qe,Qe|=4;try{sw(n,r,s)}finally{Qe=_,ue.p=h,X.T=l}}Ft=1,M_(),k_(),V_()}}function M_(){if(Ft===1){Ft=0;var n=kr,r=Ws,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=X.T,X.T=null;var l=ue.p;ue.p=2;var h=Qe;Qe|=4;try{g_(r,n);var d=Em,_=by(n.containerInfo),T=d.focusedElem,I=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&Ty(T.ownerDocument.documentElement,T)){if(I!==null&&Yh(T)){var q=I.start,W=I.end;if(W===void 0&&(W=q),"selectionStart"in T)T.selectionStart=q,T.selectionEnd=Math.min(W,T.value.length);else{var ee=T.ownerDocument||document,H=ee&&ee.defaultView||window;if(H.getSelection){var G=H.getSelection(),Ae=T.textContent.length,Ee=Math.min(I.start,Ae),Je=I.end===void 0?Ee:Math.min(I.end,Ae);!G.extend&&Ee>Je&&(_=Je,Je=Ee,Ee=_);var U=Ey(T,Ee),P=Ey(T,Je);if(U&&P&&(G.rangeCount!==1||G.anchorNode!==U.node||G.anchorOffset!==U.offset||G.focusNode!==P.node||G.focusOffset!==P.offset)){var F=ee.createRange();F.setStart(U.node,U.offset),G.removeAllRanges(),Ee>Je?(G.addRange(F),G.extend(P.node,P.offset)):(F.setEnd(P.node,P.offset),G.addRange(F))}}}}for(ee=[],G=T;G=G.parentNode;)G.nodeType===1&&ee.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ee.length;T++){var Z=ee[T];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}rf=!!_m,Em=_m=null}finally{Qe=h,ue.p=l,X.T=s}}n.current=r,Ft=2}}function k_(){if(Ft===2){Ft=0;var n=kr,r=Ws,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=X.T,X.T=null;var l=ue.p;ue.p=2;var h=Qe;Qe|=4;try{h_(n,r.alternate,r)}finally{Qe=h,ue.p=l,X.T=s}}Ft=3}}function V_(){if(Ft===4||Ft===3){Ft=0,zu();var n=kr,r=Ws,s=Zs,l=A_;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ft=5:(Ft=0,Ws=kr=null,L_(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Mr=null),ys(s),r=r.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ft,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=X.T,h=ue.p,ue.p=2,X.T=null;try{for(var d=n.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{X.T=r,ue.p=h}}(Zs&3)!==0&&Gc(),fi(n),h=n.pendingLanes,(s&4194090)!==0&&(h&42)!==0?n===am?Ml++:(Ml=0,am=n):Ml=0,kl(0)}}function L_(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,ml(r)))}function Gc(n){return M_(),k_(),V_(),U_()}function U_(){if(Ft!==5)return!1;var n=kr,r=im;im=0;var s=ys(Zs),l=X.T,h=ue.p;try{ue.p=32>s?32:s,X.T=null,s=rm,rm=null;var d=kr,_=Zs;if(Ft=0,Ws=kr=null,Zs=0,(Qe&6)!==0)throw Error(a(331));var T=Qe;if(Qe|=4,T_(d.current),v_(d,d.current,_,s),Qe=T,kl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ft,d)}catch{}return!0}finally{ue.p=h,X.T=l,L_(n,r)}}function j_(n,r,s){r=xn(s,r),r=Ld(n.stateNode,r,2),n=wr(n,r,2),n!==null&&(xi(n,2),fi(n))}function et(n,r,s){if(n.tag===3)j_(n,n,s);else for(;r!==null;){if(r.tag===3){j_(r,n,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mr===null||!Mr.has(l))){n=xn(s,n),s=qv(2),l=wr(r,s,2),l!==null&&(Hv(s,l,r,n),xi(l,2),fi(l));break}}r=r.return}}function um(n,r,s){var l=n.pingCache;if(l===null){l=n.pingCache=new uw;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(s)||(Jd=!0,h.add(s),n=mw.bind(null,n,r,s),r.then(n,n))}function mw(n,r,s){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,nt===n&&(ze&s)===s&&(dt===4||dt===3&&(ze&62914560)===ze&&300>Sn()-nm?(Qe&2)===0&&Js(n,0):em|=s,Xs===ze&&(Xs=0)),fi(n)}function z_(n,r){r===0&&(r=Ho()),n=ks(n,r),n!==null&&(xi(n,r),fi(n))}function pw(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),z_(n,s)}function gw(n,r){var s=0;switch(n.tag){case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),z_(n,s)}function yw(n,r){return ma(n,r)}var Kc=null,to=null,cm=!1,Yc=!1,fm=!1,$a=0;function fi(n){n!==to&&n.next===null&&(to===null?Kc=to=n:to=to.next=n),Yc=!0,cm||(cm=!0,_w())}function kl(n,r){if(!fm&&Yc){fm=!0;do for(var s=!1,l=Kc;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Qt(42|n)+1)-1,d&=h&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,H_(l,d))}else d=ze,d=gs(l,l===nt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ea(l,d)||(s=!0,H_(l,d));l=l.next}while(s);fm=!1}}function vw(){B_()}function B_(){Yc=cm=!1;var n=0;$a!==0&&(Iw()&&(n=$a),$a=0);for(var r=Sn(),s=null,l=Kc;l!==null;){var h=l.next,d=F_(l,r);d===0?(l.next=null,s===null?Kc=h:s.next=h,h===null&&(to=s)):(s=l,(n!==0||(d&3)!==0)&&(Yc=!0)),l=h}kl(n)}function F_(n,r){for(var s=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-Qt(d),T=1<<_,I=h[_];I===-1?((T&s)===0||(T&l)!==0)&&(h[_]=Fo(T,r)):I<=r&&(n.expiredLanes|=T),d&=~T}if(r=nt,s=ze,s=gs(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===r&&($e===2||$e===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&pa(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ea(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(l!==null&&pa(l),ys(s)){case 2:case 8:s=ms;break;case 32:s=ga;break;case 268435456:s=ps;break;default:s=ga}return l=q_.bind(null,n),s=ma(s,l),n.callbackPriority=r,n.callbackNode=s,r}return l!==null&&l!==null&&pa(l),n.callbackPriority=2,n.callbackNode=null,2}function q_(n,r){if(Ft!==0&&Ft!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(Gc()&&n.callbackNode!==s)return null;var l=ze;return l=gs(n,n===nt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(w_(n,l,r),F_(n,Sn()),n.callbackNode!=null&&n.callbackNode===s?q_.bind(null,n):null)}function H_(n,r){if(Gc())return null;w_(n,r,!0)}function _w(){Ow(function(){(Qe&6)!==0?ma(zo,vw):B_()})}function hm(){return $a===0&&($a=qo()),$a}function G_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:As(""+n)}function K_(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function Ew(n,r,s,l,h){if(r==="submit"&&s&&s.stateNode===h){var d=G_((h[vt]||null).action),_=l.submitter;_&&(r=(r=_[vt]||null)?G_(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var T=new Ss("action","action",null,l,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($a!==0){var I=_?K_(h,_):new FormData(h);Nd(s,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=_?K_(h,_):new FormData(h),Nd(s,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var dm=0;dm<Wh.length;dm++){var mm=Wh[dm],Tw=mm.toLowerCase(),bw=mm[0].toUpperCase()+mm.slice(1);Bn(Tw,"on"+bw)}Bn(wy,"onAnimationEnd"),Bn(Ry,"onAnimationIteration"),Bn(Iy,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(j1,"onTransitionRun"),Bn(z1,"onTransitionStart"),Bn(B1,"onTransitionCancel"),Bn(Cy,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function Y_(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var T=l[_],I=T.instance,q=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=q;try{d(h)}catch(W){Mc(W)}h.currentTarget=null,d=I}else for(_=0;_<l.length;_++){if(T=l[_],I=T.instance,q=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=q;try{d(h)}catch(W){Mc(W)}h.currentTarget=null,d=I}}}}function Me(n,r){var s=r[Yo];s===void 0&&(s=r[Yo]=new Set);var l=n+"__bubble";s.has(l)||(Q_(r,n,2,!1),s.add(l))}function pm(n,r,s){var l=0;r&&(l|=4),Q_(s,n,l,r)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function gm(n){if(!n[Qc]){n[Qc]=!0,Qo.forEach(function(s){s!=="selectionchange"&&(Aw.has(s)||pm(s,!1,n),pm(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qc]||(r[Qc]=!0,pm("selectionchange",!1,r))}}function Q_(n,r,s,l){switch(v0(r)){case 2:var h=Xw;break;case 8:h=Ww;break;default:h=xm}s=h.bind(null,r,s,n),h=void 0,!Cn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(r,s,{capture:!0,passive:h}):n.addEventListener(r,s,!0):h!==void 0?n.addEventListener(r,s,{passive:h}):n.addEventListener(r,s,!1)}function ym(n,r,s,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h)break;if(_===4)for(_=l.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;T!==null;){if(_=Di(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){l=d=_;continue e}T=T.parentNode}}l=l.return}Xu(function(){var q=d,W=In(s),ee=[];e:{var H=Oy.get(n);if(H!==void 0){var G=Ss,Ae=n;switch(n){case"keypress":if(ni(s)===0)break e;case"keydown":case"keyup":G=xs;break;case"focusin":Ae="focus",G=Is;break;case"focusout":Ae="blur",G=Is;break;case"beforeblur":case"afterblur":G=Is;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=On;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=rc;break;case wy:case Ry:case Iy:G=Cs;break;case Cy:G=sc;break;case"scroll":case"scrollend":G=Wu;break;case"wheel":G=Ds;break;case"copy":case"cut":case"paste":G=Os;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=sl;break;case"toggle":case"beforetoggle":G=lc}var Ee=(r&4)!==0,Je=!Ee&&(n==="scroll"||n==="scrollend"),U=Ee?H!==null?H+"Capture":null:H;Ee=[];for(var P=q,F;P!==null;){var Z=P;if(F=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||F===null||U===null||(Z=Ca(P,U),Z!=null&&Ee.push(Ll(P,Z,F))),Je)break;P=P.return}0<Ee.length&&(H=new G(H,Ae,null,s,W),ee.push({event:H,listeners:Ee}))}}if((r&7)===0){e:{if(H=n==="mouseover"||n==="pointerover",G=n==="mouseout"||n==="pointerout",H&&s!==ki&&(Ae=s.relatedTarget||s.fromElement)&&(Di(Ae)||Ae[wn]))break e;if((G||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,G?(Ae=s.relatedTarget||s.toElement,G=q,Ae=Ae?Di(Ae):null,Ae!==null&&(Je=u(Ae),Ee=Ae.tag,Ae!==Je||Ee!==5&&Ee!==27&&Ee!==6)&&(Ae=null)):(G=null,Ae=q),G!==Ae)){if(Ee=On,Z="onMouseLeave",U="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=sl,Z="onPointerLeave",U="onPointerEnter",P="pointer"),Je=G==null?H:Zn(G),F=Ae==null?H:Zn(Ae),H=new Ee(Z,P+"leave",G,s,W),H.target=Je,H.relatedTarget=F,Z=null,Di(W)===q&&(Ee=new Ee(U,P+"enter",Ae,s,W),Ee.target=F,Ee.relatedTarget=Je,Z=Ee),Je=Z,G&&Ae)t:{for(Ee=G,U=Ae,P=0,F=Ee;F;F=no(F))P++;for(F=0,Z=U;Z;Z=no(Z))F++;for(;0<P-F;)Ee=no(Ee),P--;for(;0<F-P;)U=no(U),F--;for(;P--;){if(Ee===U||U!==null&&Ee===U.alternate)break t;Ee=no(Ee),U=no(U)}Ee=null}else Ee=null;G!==null&&$_(ee,H,G,Ee,!1),Ae!==null&&Je!==null&&$_(ee,Je,Ae,Ee,!0)}}e:{if(H=q?Zn(q):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var he=my;else if(Rt(H))if(py)he=V1;else{he=M1;var Ne=P1}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?q&&Jo(q.elementType)&&(he=my):he=k1;if(he&&(he=he(n,q))){zi(ee,he,s,W);break e}Ne&&Ne(n,H,q),n==="focusout"&&q&&H.type==="number"&&q.memoizedProps.value!=null&&Er(H,"number",H.value)}switch(Ne=q?Zn(q):window,n){case"focusin":(Rt(Ne)||Ne.contentEditable==="true")&&(Ns=Ne,Qh=q,ul=null);break;case"focusout":ul=Qh=Ns=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,Ay(ee,s,W);break;case"selectionchange":if(U1)break;case"keydown":case"keyup":Ay(ee,s,W)}var pe;if(ai)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ue?K(n,s)&&(Te="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Te="onCompositionStart");Te&&(v&&s.locale!=="ko"&&(Ue||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ue&&(pe=tl()):(ti=W,Tr="value"in ti?ti.value:ti.textContent,Ue=!0)),Ne=$c(q,Te),0<Ne.length&&(Te=new rl(Te,n,null,s,W),ee.push({event:Te,listeners:Ne}),pe?Te.data=pe:(pe=oe(s),pe!==null&&(Te.data=pe)))),(pe=y?wt(n,s):je(n,s))&&(Te=$c(q,"onBeforeInput"),0<Te.length&&(Ne=new rl("onBeforeInput","beforeinput",null,s,W),ee.push({event:Ne,listeners:Te}),Ne.data=pe)),Ew(ee,n,q,s,W)}Y_(ee,r)})}function Ll(n,r,s){return{instance:n,listener:r,currentTarget:s}}function $c(n,r){for(var s=r+"Capture",l=[];n!==null;){var h=n,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Ca(n,s),h!=null&&l.unshift(Ll(n,h,d)),h=Ca(n,r),h!=null&&l.push(Ll(n,h,d))),n.tag===3)return l;n=n.return}return[]}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $_(n,r,s,l,h){for(var d=r._reactName,_=[];s!==null&&s!==l;){var T=s,I=T.alternate,q=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||q===null||(I=q,h?(q=Ca(s,d),q!=null&&_.unshift(Ll(s,q,I))):h||(q=Ca(s,d),q!=null&&_.push(Ll(s,q,I)))),s=s.return}_.length!==0&&n.push({event:r,listeners:_})}var Sw=/\r\n?/g,ww=/\u0000|\uFFFD/g;function X_(n){return(typeof n=="string"?n:""+n).replace(Sw,`
`).replace(ww,"")}function W_(n,r){return r=X_(r),X_(n)===r}function Xc(){}function Ze(n,r,s,l,h,d){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Rn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Rn(n,""+l);break;case"className":Jn(n,"class",l);break;case"tabIndex":Jn(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(n,s,l);break;case"style":Zo(n,l,d);break;case"data":if(r!=="object"){Jn(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=As(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(r!=="input"&&Ze(n,r,"name",h.name,h,null),Ze(n,r,"formEncType",h.formEncType,h,null),Ze(n,r,"formMethod",h.formMethod,h,null),Ze(n,r,"formTarget",h.formTarget,h,null)):(Ze(n,r,"encType",h.encType,h,null),Ze(n,r,"method",h.method,h,null),Ze(n,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=As(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=Xc);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=As(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":Me("beforetoggle",n),Me("toggle",n),_r(n,"popover",l);break;case"xlinkActuate":jt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":jt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":jt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":jt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":jt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":jt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":jt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":jt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":jt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":_r(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Bh.get(s)||s,_r(n,s,l))}}function vm(n,r,s,l,h,d){switch(s){case"style":Zo(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof l=="string"?Rn(n,l):(typeof l=="number"||typeof l=="bigint")&&Rn(n,""+l);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vs.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),r=s.slice(2,h?s.length-7:void 0),d=n[vt]||null,d=d!=null?d[s]:null,typeof d=="function"&&n.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,l,h);break e}s in n?n[s]=l:l===!0?n.setAttribute(s,""):_r(n,s,l)}}}function qt(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var l=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var _=s[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ze(n,r,d,_,s,null)}}h&&Ze(n,r,"srcSet",s.srcSet,s,null),l&&Ze(n,r,"src",s.src,s,null);return;case"input":Me("invalid",n);var T=d=_=h=null,I=null,q=null;for(l in s)if(s.hasOwnProperty(l)){var W=s[l];if(W!=null)switch(l){case"name":h=W;break;case"type":_=W;break;case"checked":I=W;break;case"defaultChecked":q=W;break;case"value":d=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(a(137,r));break;default:Ze(n,r,l,W,s,null)}}wa(n,d,T,I,q,_,h,!1),bs(n);return;case"select":Me("invalid",n),l=_=d=null;for(h in s)if(s.hasOwnProperty(h)&&(T=s[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Ze(n,r,h,T,s,null)}r=d,s=_,n.multiple=!!l,r!=null?Mi(n,!!l,r,!1):s!=null&&Mi(n,!!l,s,!0);return;case"textarea":Me("invalid",n),d=h=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(T=s[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ze(n,r,_,T,s,null)}Ra(n,l,h,d),bs(n);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(n,r,I,l,s,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(l=0;l<Vl.length;l++)Me(Vl[l],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in s)if(s.hasOwnProperty(q)&&(l=s[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ze(n,r,q,l,s,null)}return;default:if(Jo(r)){for(W in s)s.hasOwnProperty(W)&&(l=s[W],l!==void 0&&vm(n,r,W,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Ze(n,r,T,l,s,null))}function Rw(n,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,I=null,q=null,W=null;for(G in s){var ee=s[G];if(s.hasOwnProperty(G)&&ee!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":I=ee;default:l.hasOwnProperty(G)||Ze(n,r,G,null,l,ee)}}for(var H in l){var G=l[H];if(ee=s[H],l.hasOwnProperty(H)&&(G!=null||ee!=null))switch(H){case"type":d=G;break;case"name":h=G;break;case"checked":q=G;break;case"defaultChecked":W=G;break;case"value":_=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:G!==ee&&Ze(n,r,H,G,l,ee)}}dn(n,_,T,I,q,W,d,h);return;case"select":G=_=T=H=null;for(d in s)if(I=s[d],s.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":G=I;default:l.hasOwnProperty(d)||Ze(n,r,d,null,l,I)}for(h in l)if(d=l[h],I=s[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==I&&Ze(n,r,h,d,l,I)}r=T,s=_,l=G,H!=null?Mi(n,!!s,H,!1):!!l!=!!s&&(r!=null?Mi(n,!!s,r,!0):Mi(n,!!s,s?[]:"",!1));return;case"textarea":G=H=null;for(T in s)if(h=s[T],s.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ze(n,r,T,null,l,h)}for(_ in l)if(h=l[_],d=s[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":H=h;break;case"defaultValue":G=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==d&&Ze(n,r,_,h,l,d)}Xe(n,H,G);return;case"option":for(var Ae in s)if(H=s[Ae],s.hasOwnProperty(Ae)&&H!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:Ze(n,r,Ae,null,l,H)}for(I in l)if(H=l[I],G=s[I],l.hasOwnProperty(I)&&H!==G&&(H!=null||G!=null))switch(I){case"selected":n.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Ze(n,r,I,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in s)H=s[Ee],s.hasOwnProperty(Ee)&&H!=null&&!l.hasOwnProperty(Ee)&&Ze(n,r,Ee,null,l,H);for(q in l)if(H=l[q],G=s[q],l.hasOwnProperty(q)&&H!==G&&(H!=null||G!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,r));break;default:Ze(n,r,q,H,l,G)}return;default:if(Jo(r)){for(var Je in s)H=s[Je],s.hasOwnProperty(Je)&&H!==void 0&&!l.hasOwnProperty(Je)&&vm(n,r,Je,void 0,l,H);for(W in l)H=l[W],G=s[W],!l.hasOwnProperty(W)||H===G||H===void 0&&G===void 0||vm(n,r,W,H,l,G);return}}for(var U in s)H=s[U],s.hasOwnProperty(U)&&H!=null&&!l.hasOwnProperty(U)&&Ze(n,r,U,null,l,H);for(ee in l)H=l[ee],G=s[ee],!l.hasOwnProperty(ee)||H===G||H==null&&G==null||Ze(n,r,ee,H,l,G)}var _m=null,Em=null;function Wc(n){return n.nodeType===9?n:n.ownerDocument}function Z_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J_(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Tm(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var bm=null;function Iw(){var n=window.event;return n&&n.type==="popstate"?n===bm?!1:(bm=n,!0):(bm=null,!1)}var e0=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,t0=typeof Promise=="function"?Promise:void 0,Ow=typeof queueMicrotask=="function"?queueMicrotask:typeof t0<"u"?function(n){return t0.resolve(null).then(n).catch(xw)}:e0;function xw(n){setTimeout(function(){throw n})}function Lr(n){return n==="head"}function n0(n,r){var s=r,l=0,h=0;do{var d=s.nextSibling;if(n.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var _=n.ownerDocument;if(s&1&&Ul(_.documentElement),s&2&&Ul(_.body),s&4)for(s=_.head,Ul(s),_=s.firstChild;_;){var T=_.nextSibling,I=_.nodeName;_[Ta]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&_.rel.toLowerCase()==="stylesheet"||s.removeChild(_),_=T}}if(h===0){n.removeChild(d),Kl(r);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Kl(r)}function Am(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Am(s),vr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function Dw(n,r,s,l){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ta])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=qn(n.nextSibling),n===null)break}return null}function Nw(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=qn(n.nextSibling),n===null))return null;return n}function Sm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Pw(n,r){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function qn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var wm=null;function i0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}function r0(n,r,s){switch(r=Wc(s),n){case"html":if(n=r.documentElement,!n)throw Error(a(452));return n;case"head":if(n=r.head,!n)throw Error(a(453));return n;case"body":if(n=r.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function Ul(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);vr(n)}var Vn=new Map,a0=new Set;function Zc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ji=ue.d;ue.d={f:Mw,r:kw,D:Vw,C:Lw,L:Uw,m:jw,X:Bw,S:zw,M:Fw};function Mw(){var n=Ji.f(),r=qc();return n||r}function kw(n){var r=Wn(n);r!==null&&r.tag===5&&r.type==="form"?wv(r):Ji.r(n)}var io=typeof document>"u"?null:document;function s0(n,r,s){var l=io;if(l&&typeof r=="string"&&r){var h=_t(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),a0.has(h)||(a0.add(h),n={rel:n,crossOrigin:s,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),qt(r,"link",n),mt(r),l.head.appendChild(r)))}}function Vw(n){Ji.D(n),s0("dns-prefetch",n,null)}function Lw(n,r){Ji.C(n,r),s0("preconnect",n,r)}function Uw(n,r,s){Ji.L(n,r,s);var l=io;if(l&&n&&r){var h='link[rel="preload"][as="'+_t(r)+'"]';r==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+_t(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+_t(s.imageSizes)+'"]')):h+='[href="'+_t(n)+'"]';var d=h;switch(r){case"style":d=ro(n);break;case"script":d=ao(n)}Vn.has(d)||(n=E({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),Vn.set(d,n),l.querySelector(h)!==null||r==="style"&&l.querySelector(jl(d))||r==="script"&&l.querySelector(zl(d))||(r=l.createElement("link"),qt(r,"link",n),mt(r),l.head.appendChild(r)))}}function jw(n,r){Ji.m(n,r);var s=io;if(s&&n){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(n)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ao(n)}if(!Vn.has(d)&&(n=E({rel:"modulepreload",href:n},r),Vn.set(d,n),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(zl(d)))return}l=s.createElement("link"),qt(l,"link",n),mt(l),s.head.appendChild(l)}}}function zw(n,r,s){Ji.S(n,r,s);var l=io;if(l&&n){var h=rn(l).hoistableStyles,d=ro(n);r=r||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(jl(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},s),(s=Vn.get(d))&&Rm(n,s);var I=_=l.createElement("link");mt(I),qt(I,"link",n),I._p=new Promise(function(q,W){I.onload=q,I.onerror=W}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Jc(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function Bw(n,r){Ji.X(n,r);var s=io;if(s&&n){var l=rn(s).hoistableScripts,h=ao(n),d=l.get(h);d||(d=s.querySelector(zl(h)),d||(n=E({src:n,async:!0},r),(r=Vn.get(h))&&Im(n,r),d=s.createElement("script"),mt(d),qt(d,"link",n),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Fw(n,r){Ji.M(n,r);var s=io;if(s&&n){var l=rn(s).hoistableScripts,h=ao(n),d=l.get(h);d||(d=s.querySelector(zl(h)),d||(n=E({src:n,async:!0,type:"module"},r),(r=Vn.get(h))&&Im(n,r),d=s.createElement("script"),mt(d),qt(d,"link",n),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function o0(n,r,s,l){var h=(h=we.current)?Zc(h):null;if(!h)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=ro(s.href),s=rn(h).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ro(s.href);var d=rn(h).hoistableStyles,_=d.get(n);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=h.querySelector(jl(n)))&&!d._p&&(_.instance=d,_.state.loading=5),Vn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Vn.set(n,s),d||qw(h,n,s,_.state))),r&&l===null)throw Error(a(528,""));return _}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=ao(s),s=rn(h).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function ro(n){return'href="'+_t(n)+'"'}function jl(n){return'link[rel="stylesheet"]['+n+"]"}function l0(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function qw(n,r,s,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),qt(r,"link",s),mt(r),n.head.appendChild(r))}function ao(n){return'[src="'+_t(n)+'"]'}function zl(n){return"script[async]"+n}function u0(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+_t(s.href)+'"]');if(l)return r.instance=l,mt(l),l;var h=E({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),mt(l),qt(l,"style",h),Jc(l,s.precedence,n),r.instance=l;case"stylesheet":h=ro(s.href);var d=n.querySelector(jl(h));if(d)return r.state.loading|=4,r.instance=d,mt(d),d;l=l0(s),(h=Vn.get(h))&&Rm(l,h),d=(n.ownerDocument||n).createElement("link"),mt(d);var _=d;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),qt(d,"link",l),r.state.loading|=4,Jc(d,s.precedence,n),r.instance=d;case"script":return d=ao(s.src),(h=n.querySelector(zl(d)))?(r.instance=h,mt(h),h):(l=s,(h=Vn.get(d))&&(l=E({},s),Im(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),mt(h),qt(h,"link",l),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Jc(l,s.precedence,n));return r.instance}function Jc(n,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===r)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function Rm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Im(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var ef=null;function c0(n,r,s){if(ef===null){var l=new Map,h=ef=new Map;h.set(s,l)}else h=ef,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var d=s[h];if(!(d[Ta]||d[St]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=n+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function f0(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function Hw(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function h0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Bl=null;function Gw(){}function Kw(n,r,s){if(Bl===null)throw Error(a(475));var l=Bl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=ro(s.href),d=n.querySelector(jl(h));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=tf.bind(l),n.then(l,l)),r.state.loading|=4,r.instance=d,mt(d);return}d=n.ownerDocument||n,s=l0(s),(h=Vn.get(h))&&Rm(s,h),d=d.createElement("link"),mt(d);var _=d;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),qt(d,"link",s),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=tf.bind(l),n.addEventListener("load",r),n.addEventListener("error",r))}}function Yw(){if(Bl===null)throw Error(a(475));var n=Bl;return n.stylesheets&&n.count===0&&Cm(n,n.stylesheets),0<n.count?function(r){var s=setTimeout(function(){if(n.stylesheets&&Cm(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(s)}}:null}function tf(){if(this.count--,this.count===0){if(this.stylesheets)Cm(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var nf=null;function Cm(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,nf=new Map,r.forEach(Qw,n),nf=null,tf.call(n))}function Qw(n,r){if(!(r.state.loading&4)){var s=nf.get(n);if(s)var l=s.get(null);else{s=new Map,nf.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),d=s.get(_)||l,d===l&&s.set(null,h),s.set(_,h),this.count++,l=tf.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var Fl={$$typeof:$,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function $w(n,r,s,l,h,d,_,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.hiddenUpdates=Oi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function d0(n,r,s,l,h,d,_,T,I,q,W,ee){return n=new $w(n,r,s,_,T,I,q,ee),r=1,d===!0&&(r|=24),d=pn(3,null,null,r),n.current=d,d.stateNode=n,r=ud(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:r},dd(d),n}function m0(n){return n?(n=Vs,n):Vs}function p0(n,r,s,l,h,d){h=m0(h),l.context===null?l.context=h:l.pendingContext=h,l=Sr(r),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=wr(n,l,r),s!==null&&(En(s,n,r),vl(s,n,r))}function g0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function Om(n,r){g0(n,r),(n=n.alternate)&&g0(n,r)}function y0(n){if(n.tag===13){var r=ks(n,67108864);r!==null&&En(r,n,67108864),Om(n,67108864)}}var rf=!0;function Xw(n,r,s,l){var h=X.T;X.T=null;var d=ue.p;try{ue.p=2,xm(n,r,s,l)}finally{ue.p=d,X.T=h}}function Ww(n,r,s,l){var h=X.T;X.T=null;var d=ue.p;try{ue.p=8,xm(n,r,s,l)}finally{ue.p=d,X.T=h}}function xm(n,r,s,l){if(rf){var h=Dm(l);if(h===null)ym(n,r,l,af,s),_0(n,l);else if(Jw(h,n,r,s,l))l.stopPropagation();else if(_0(n,l),r&4&&-1<Zw.indexOf(n)){for(;h!==null;){var d=Wn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Un(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-Qt(_);T.entanglements[1]|=I,_&=~I}fi(d),(Qe&6)===0&&(Bc=Sn()+500,kl(0))}}break;case 13:T=ks(d,2),T!==null&&En(T,d,2),qc(),Om(d,2)}if(d=Dm(l),d===null&&ym(n,r,l,af,s),d===h)break;h=d}h!==null&&l.stopPropagation()}else ym(n,r,l,null,s)}}function Dm(n){return n=In(n),Nm(n)}var af=null;function Nm(n){if(af=null,n=Di(n),n!==null){var r=u(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=f(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return af=n,null}function v0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kh()){case zo:return 2;case ms:return 8;case ga:case Vh:return 32;case ps:return 268435456;default:return 32}default:return 32}}var Pm=!1,Ur=null,jr=null,zr=null,ql=new Map,Hl=new Map,Br=[],Zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _0(n,r){switch(n){case"focusin":case"focusout":Ur=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":ql.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(r.pointerId)}}function Gl(n,r,s,l,h,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=Wn(r),r!==null&&y0(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function Jw(n,r,s,l,h){switch(r){case"focusin":return Ur=Gl(Ur,n,r,s,l,h),!0;case"dragenter":return jr=Gl(jr,n,r,s,l,h),!0;case"mouseover":return zr=Gl(zr,n,r,s,l,h),!0;case"pointerover":var d=h.pointerId;return ql.set(d,Gl(ql.get(d)||null,n,r,s,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Hl.set(d,Gl(Hl.get(d)||null,n,r,s,l,h)),!0}return!1}function E0(n){var r=Di(n.target);if(r!==null){var s=u(r);if(s!==null){if(r=s.tag,r===13){if(r=f(s),r!==null){n.blockedOn=r,qu(n.priority,function(){if(s.tag===13){var l=_n();l=pr(l);var h=ks(s,l);h!==null&&En(h,s,l),Om(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sf(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=Dm(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);ki=l,s.target.dispatchEvent(l),ki=null}else return r=Wn(s),r!==null&&y0(r),n.blockedOn=s,!1;r.shift()}return!0}function T0(n,r,s){sf(n)&&s.delete(r)}function eR(){Pm=!1,Ur!==null&&sf(Ur)&&(Ur=null),jr!==null&&sf(jr)&&(jr=null),zr!==null&&sf(zr)&&(zr=null),ql.forEach(T0),Hl.forEach(T0)}function of(n,r){n.blockedOn===r&&(n.blockedOn=null,Pm||(Pm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,eR)))}var lf=null;function b0(n){lf!==n&&(lf=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){lf===n&&(lf=null);for(var r=0;r<n.length;r+=3){var s=n[r],l=n[r+1],h=n[r+2];if(typeof l!="function"){if(Nm(l||s)===null)continue;break}var d=Wn(s);d!==null&&(n.splice(r,3),r-=3,Nd(d,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Kl(n){function r(I){return of(I,n)}Ur!==null&&of(Ur,n),jr!==null&&of(jr,n),zr!==null&&of(zr,n),ql.forEach(r),Hl.forEach(r);for(var s=0;s<Br.length;s++){var l=Br[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Br.length&&(s=Br[0],s.blockedOn===null);)E0(s),s.blockedOn===null&&Br.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],d=s[l+1],_=h[vt]||null;if(typeof d=="function")_||b0(s);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[vt]||null)T=_.formAction;else if(Nm(h)!==null)continue}else T=_.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),b0(s)}}}function Mm(n){this._internalRoot=n}uf.prototype.render=Mm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=_n();p0(s,l,n,r,null,null)},uf.prototype.unmount=Mm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;p0(n.current,2,null,n,null,null),qc(),r[wn]=null}};function uf(n){this._internalRoot=n}uf.prototype.unstable_scheduleHydration=function(n){if(n){var r=gr();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Br.length&&r!==0&&r<Br[s].priority;s++);Br.splice(s,0,n),s===0&&E0(n)}};var A0=e.version;if(A0!=="19.1.0")throw Error(a(527,A0,"19.1.0"));ue.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var tR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cf.isDisabled&&cf.supportsFiber)try{ft=cf.inject(tR),Ye=cf}catch{}}return Ql.createRoot=function(n,r){if(!o(n))throw Error(a(299));var s=!1,l="",h=jv,d=zv,_=Bv,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=d0(n,1,!1,null,null,s,l,h,d,_,T,null),n[wn]=r.current,gm(n),new Mm(r)},Ql.hydrateRoot=function(n,r,s){if(!o(n))throw Error(a(299));var l=!1,h="",d=jv,_=zv,T=Bv,I=null,q=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(I=s.unstable_transitionCallbacks),s.formState!==void 0&&(q=s.formState)),r=d0(n,1,!0,r,s??null,l,h,d,_,T,I,q),r.context=m0(null),s=r.current,l=_n(),l=pr(l),h=Sr(l),h.callback=null,wr(s,h,l),s=l,r.current.lanes=s,xi(r,s),fi(r),n[wn]=r.current,gm(n),new uf(r)},Ql.version="19.1.0",Ql}var P0;function fR(){if(P0)return Lm.exports;P0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Lm.exports=cR(),Lm.exports}var hR=fR();const dR="/assets/logo_lost-Cj8K_fwP.png";var $l={},M0;function mR(){if(M0)return $l;M0=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.parse=f,$l.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,M){const k=new u,Q=S.length;if(Q<2)return k;const L=(M==null?void 0:M.decode)||E;let B=0;do{const J=S.indexOf("=",B);if(J===-1)break;const $=S.indexOf(";",B),se=$===-1?Q:$;if(J>se){B=S.lastIndexOf(";",J-1)+1;continue}const le=m(S,B,J),ve=p(S,J,le),N=S.slice(le,ve);if(k[N]===void 0){let R=m(S,J+1,se),w=p(S,se,R);const x=L(S.slice(R,w));k[N]=x}B=se+1}while(B<Q);return k}function m(S,M,k){do{const Q=S.charCodeAt(M);if(Q!==32&&Q!==9)return M}while(++M<k);return k}function p(S,M,k){for(;M>k;){const Q=S.charCodeAt(--M);if(Q!==32&&Q!==9)return M+1}return k}function g(S,M,k){const Q=(k==null?void 0:k.encode)||encodeURIComponent;if(!i.test(S))throw new TypeError(`argument name is invalid: ${S}`);const L=Q(M);if(!e.test(L))throw new TypeError(`argument val is invalid: ${M}`);let B=S+"="+L;if(!k)return B;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);B+="; Max-Age="+k.maxAge}if(k.domain){if(!t.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);B+="; Domain="+k.domain}if(k.path){if(!a.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);B+="; Path="+k.path}if(k.expires){if(!A(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);B+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(B+="; HttpOnly"),k.secure&&(B+="; Secure"),k.partitioned&&(B+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return B}function E(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function A(S){return o.call(S)==="[object Date]"}return $l}mR();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var k0="popstate";function pR(i={}){function e(a,o){let{pathname:u,search:f,hash:m}=a.location;return fp("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(a,o){return typeof o=="string"?o:cu(o)}return yR(e,t,null,i)}function lt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function bi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gR(){return Math.random().toString(36).substring(2,10)}function V0(i,e){return{usr:i.state,key:i.key,idx:e}}function fp(i,e,t=null,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?xo(e):e,state:t,key:e&&e.key||a||gR()}}function cu({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function xo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let a=i.indexOf("?");a>=0&&(e.search=i.substring(a),i=i.substring(0,a)),i&&(e.pathname=i)}return e}function yR(i,e,t,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,f=o.history,m="POP",p=null,g=E();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function E(){return(f.state||{idx:null}).idx}function A(){m="POP";let L=E(),B=L==null?null:L-g;g=L,p&&p({action:m,location:Q.location,delta:B})}function S(L,B){m="PUSH";let J=fp(Q.location,L,B);g=E()+1;let $=V0(J,g),se=Q.createHref(J);try{f.pushState($,"",se)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(se)}u&&p&&p({action:m,location:Q.location,delta:1})}function M(L,B){m="REPLACE";let J=fp(Q.location,L,B);g=E();let $=V0(J,g),se=Q.createHref(J);f.replaceState($,"",se),u&&p&&p({action:m,location:Q.location,delta:0})}function k(L){let B=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof L=="string"?L:cu(L);return J=J.replace(/ $/,"%20"),lt(B,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,B)}let Q={get action(){return m},get location(){return i(o,f)},listen(L){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(k0,A),p=L,()=>{o.removeEventListener(k0,A),p=null}},createHref(L){return e(o,L)},createURL:k,encodeLocation(L){let B=k(L);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:S,replace:M,go(L){return f.go(L)}};return Q}function ib(i,e,t="/"){return vR(i,e,t,!1)}function vR(i,e,t,a){let o=typeof e=="string"?xo(e):e,u=ar(o.pathname||"/",t);if(u==null)return null;let f=rb(i);_R(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=xR(u);m=CR(f[p],g,a)}return m}function rb(i,e=[],t=[],a=""){let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(lt(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let g=ir([a,p.relativePath]),E=t.concat(p);u.children&&u.children.length>0&&(lt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),rb(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:RR(g,u.index),routesMeta:E})};return i.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of ab(u.path))o(u,f,p)}),e}function ab(i){let e=i.split("/");if(e.length===0)return[];let[t,...a]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let f=ab(a.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function _R(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:IR(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}var ER=/^:[\w-]+$/,TR=3,bR=2,AR=1,SR=10,wR=-2,L0=i=>i==="*";function RR(i,e){let t=i.split("/"),a=t.length;return t.some(L0)&&(a+=wR),e&&(a+=bR),t.filter(o=>!L0(o)).reduce((o,u)=>o+(ER.test(u)?TR:u===""?AR:SR),a)}function IR(i,e){return i.length===e.length&&i.slice(0,-1).every((a,o)=>a===e[o])?i[i.length-1]-e[e.length-1]:0}function CR(i,e,t=!1){let{routesMeta:a}=i,o={},u="/",f=[];for(let m=0;m<a.length;++m){let p=a[m],g=m===a.length-1,E=u==="/"?e:e.slice(u.length)||"/",A=Vf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),S=p.route;if(!A&&g&&t&&!a[a.length-1].route.index&&(A=Vf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!A)return null;Object.assign(o,A.params),f.push({params:o,pathname:ir([u,A.pathname]),pathnameBase:MR(ir([u,A.pathnameBase])),route:S}),A.pathnameBase!=="/"&&(u=ir([u,A.pathnameBase]))}return f}function Vf(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,a]=OR(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((g,{paramName:E,isOptional:A},S)=>{if(E==="*"){let k=m[S]||"";f=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const M=m[S];return A&&!M?g[E]=void 0:g[E]=(M||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:i}}function OR(i,e=!1,t=!0){bi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let a=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(a.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function xR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function ar(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=i.charAt(t);return a&&a!=="/"?null:i.slice(t)||"/"}function DR(i,e="/"){let{pathname:t,search:a="",hash:o=""}=typeof i=="string"?xo(i):i;return{pathname:t?t.startsWith("/")?t:NR(t,e):e,search:kR(a),hash:VR(o)}}function NR(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Bm(i,e,t,a){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function PR(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function sb(i){let e=PR(i);return e.map((t,a)=>a===e.length-1?t.pathname:t.pathnameBase)}function ob(i,e,t,a=!1){let o;typeof i=="string"?o=xo(i):(o={...i},lt(!o.pathname||!o.pathname.includes("?"),Bm("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Bm("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Bm("#","search","hash",o)));let u=i===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=t;else{let A=e.length-1;if(!a&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),A-=1;o.pathname=S.join("/")}m=A>=0?e[A]:"/"}let p=DR(o,m),g=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var ir=i=>i.join("/").replace(/\/\/+/g,"/"),MR=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),kR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,VR=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function LR(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var lb=["POST","PUT","PATCH","DELETE"];new Set(lb);var UR=["GET",...lb];new Set(UR);var Do=Y.createContext(null);Do.displayName="DataRouter";var lh=Y.createContext(null);lh.displayName="DataRouterState";var ub=Y.createContext({isTransitioning:!1});ub.displayName="ViewTransition";var jR=Y.createContext(new Map);jR.displayName="Fetchers";var zR=Y.createContext(null);zR.displayName="Await";var wi=Y.createContext(null);wi.displayName="Navigation";var Su=Y.createContext(null);Su.displayName="Location";var hr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var sg=Y.createContext(null);sg.displayName="RouteError";function BR(i,{relative:e}={}){lt(wu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:a}=Y.useContext(wi),{hash:o,pathname:u,search:f}=Ru(i,{relative:e}),m=u;return t!=="/"&&(m=u==="/"?t:ir([t,u])),a.createHref({pathname:m,search:f,hash:o})}function wu(){return Y.useContext(Su)!=null}function os(){return lt(wu(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Su).location}var cb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fb(i){Y.useContext(wi).static||Y.useLayoutEffect(i)}function og(){let{isDataRoute:i}=Y.useContext(hr);return i?eI():FR()}function FR(){lt(wu(),"useNavigate() may be used only in the context of a <Router> component.");let i=Y.useContext(Do),{basename:e,navigator:t}=Y.useContext(wi),{matches:a}=Y.useContext(hr),{pathname:o}=os(),u=JSON.stringify(sb(a)),f=Y.useRef(!1);return fb(()=>{f.current=!0}),Y.useCallback((p,g={})=>{if(bi(f.current,cb),!f.current)return;if(typeof p=="number"){t.go(p);return}let E=ob(p,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:ir([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,u,o,i])}Y.createContext(null);function Ru(i,{relative:e}={}){let{matches:t}=Y.useContext(hr),{pathname:a}=os(),o=JSON.stringify(sb(t));return Y.useMemo(()=>ob(i,JSON.parse(o),a,e==="path"),[i,o,a,e])}function qR(i,e){return hb(i,e)}function hb(i,e,t,a){var J;lt(wu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=Y.useContext(wi),{matches:f}=Y.useContext(hr),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",E=m?m.pathnameBase:"/",A=m&&m.route;{let $=A&&A.path||"";db(g,!A||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let S=os(),M;if(e){let $=typeof e=="string"?xo(e):e;lt(E==="/"||((J=$.pathname)==null?void 0:J.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${$.pathname}" was given in the \`location\` prop.`),M=$}else M=S;let k=M.pathname||"/",Q=k;if(E!=="/"){let $=E.replace(/^\//,"").split("/");Q="/"+k.replace(/^\//,"").split("/").slice($.length).join("/")}let L=!u&&t&&t.matches&&t.matches.length>0?t.matches:ib(i,{pathname:Q});bi(A||L!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),bi(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=QR(L&&L.map($=>Object.assign({},$,{params:Object.assign({},p,$.params),pathname:ir([E,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?E:ir([E,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),f,t,a);return e&&B?Y.createElement(Su.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},B):B}function HR(){let i=JR(),e=LR(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:u},"ErrorBoundary")," or"," ",Y.createElement("code",{style:u},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,f)}var GR=Y.createElement(HR,null),KR=class extends Y.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?Y.createElement(hr.Provider,{value:this.props.routeContext},Y.createElement(sg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function YR({routeContext:i,match:e,children:t}){let a=Y.useContext(Do);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(hr.Provider,{value:i},t)}function QR(i,e=[],t=null,a=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let o=i,u=t==null?void 0:t.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);lt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(t)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:E,errors:A}=t,S=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!A||A[g.route.id]===void 0);if(g.route.lazy||S){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,g,E)=>{let A,S=!1,M=null,k=null;t&&(A=u&&g.route.id?u[g.route.id]:void 0,M=g.route.errorElement||GR,f&&(m<0&&E===0?(db("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):m===E&&(S=!0,k=g.route.hydrateFallbackElement||null)));let Q=e.concat(o.slice(0,E+1)),L=()=>{let B;return A?B=M:S?B=k:g.route.Component?B=Y.createElement(g.route.Component,null):g.route.element?B=g.route.element:B=p,Y.createElement(YR,{match:g,routeContext:{outlet:p,matches:Q,isDataRoute:t!=null},children:B})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?Y.createElement(KR,{location:t.location,revalidation:t.revalidation,component:M,error:A,children:L(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):L()},null)}function lg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $R(i){let e=Y.useContext(Do);return lt(e,lg(i)),e}function XR(i){let e=Y.useContext(lh);return lt(e,lg(i)),e}function WR(i){let e=Y.useContext(hr);return lt(e,lg(i)),e}function ug(i){let e=WR(i),t=e.matches[e.matches.length-1];return lt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function ZR(){return ug("useRouteId")}function JR(){var a;let i=Y.useContext(sg),e=XR("useRouteError"),t=ug("useRouteError");return i!==void 0?i:(a=e.errors)==null?void 0:a[t]}function eI(){let{router:i}=$R("useNavigate"),e=ug("useNavigate"),t=Y.useRef(!1);return fb(()=>{t.current=!0}),Y.useCallback(async(o,u={})=>{bi(t.current,cb),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var U0={};function db(i,e,t){!e&&!U0[i]&&(U0[i]=!0,bi(!1,t))}Y.memo(tI);function tI({routes:i,future:e,state:t}){return hb(i,void 0,t,e)}function so(i){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nI({basename:i="/",children:e=null,location:t,navigationType:a="POP",navigator:o,static:u=!1}){lt(!wu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),m=Y.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof t=="string"&&(t=xo(t));let{pathname:p="/",search:g="",hash:E="",state:A=null,key:S="default"}=t,M=Y.useMemo(()=>{let k=ar(p,f);return k==null?null:{location:{pathname:k,search:g,hash:E,state:A,key:S},navigationType:a}},[f,p,g,E,A,S,a]);return bi(M!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:Y.createElement(wi.Provider,{value:m},Y.createElement(Su.Provider,{children:e,value:M}))}function iI({children:i,location:e}){return qR(hp(i),e)}function hp(i,e=[]){let t=[];return Y.Children.forEach(i,(a,o)=>{if(!Y.isValidElement(a))return;let u=[...e,o];if(a.type===Y.Fragment){t.push.apply(t,hp(a.props.children,u));return}lt(a.type===so,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=hp(a.props.children,u)),t.push(f)}),t}var bf="get",Af="application/x-www-form-urlencoded";function uh(i){return i!=null&&typeof i.tagName=="string"}function rI(i){return uh(i)&&i.tagName.toLowerCase()==="button"}function aI(i){return uh(i)&&i.tagName.toLowerCase()==="form"}function sI(i){return uh(i)&&i.tagName.toLowerCase()==="input"}function oI(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function lI(i,e){return i.button===0&&(!e||e==="_self")&&!oI(i)}var ff=null;function uI(){if(ff===null)try{new FormData(document.createElement("form"),0),ff=!1}catch{ff=!0}return ff}var cI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fm(i){return i!=null&&!cI.has(i)?(bi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Af}"`),null):i}function fI(i,e){let t,a,o,u,f;if(aI(i)){let m=i.getAttribute("action");a=m?ar(m,e):null,t=i.getAttribute("method")||bf,o=Fm(i.getAttribute("enctype"))||Af,u=new FormData(i)}else if(rI(i)||sI(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(a=p?ar(p,e):null,t=i.getAttribute("formmethod")||m.getAttribute("method")||bf,o=Fm(i.getAttribute("formenctype"))||Fm(m.getAttribute("enctype"))||Af,u=new FormData(m,i),!uI()){let{name:g,type:E,value:A}=i;if(E==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,A)}}else{if(uh(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=bf,a=null,o=Af,f=i}return u&&o==="text/plain"&&(f=u,u=void 0),{action:a,method:t.toLowerCase(),encType:o,formData:u,body:f}}function cg(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function hI(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dI(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function mI(i,e,t){let a=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await hI(u,t);return f.links?f.links():[]}return[]}));return vI(a.flat(1).filter(dI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function j0(i,e,t,a,o,u){let f=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,m=(p,g)=>{var E;return t[g].pathname!==p.pathname||((E=t[g].route.path)==null?void 0:E.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?e.filter((p,g)=>{var A;let E=a.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((A=t[0])==null?void 0:A.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function pI(i,e,{includeHydrateFallback:t}={}){return gI(i.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function gI(i){return[...new Set(i)]}function yI(i){let e={},t=Object.keys(i).sort();for(let a of t)e[a]=i[a];return e}function vI(i,e){let t=new Set;return new Set(e),i.reduce((a,o)=>{let u=JSON.stringify(yI(o));return t.has(u)||(t.add(u),a.push({key:u,link:o})),a},[])}function _I(i,e){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":e&&ar(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function mb(){let i=Y.useContext(Do);return cg(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function EI(){let i=Y.useContext(lh);return cg(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var fg=Y.createContext(void 0);fg.displayName="FrameworkContext";function pb(){let i=Y.useContext(fg);return cg(i,"You must render this element inside a <HydratedRouter> element"),i}function TI(i,e){let t=Y.useContext(fg),[a,o]=Y.useState(!1),[u,f]=Y.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:A}=e,S=Y.useRef(null);Y.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let Q=B=>{B.forEach(J=>{f(J.isIntersecting)})},L=new IntersectionObserver(Q,{threshold:.5});return S.current&&L.observe(S.current),()=>{L.disconnect()}}},[i]),Y.useEffect(()=>{if(a){let Q=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(Q)}}},[a]);let M=()=>{o(!0)},k=()=>{o(!1),f(!1)};return t?i!=="intent"?[u,S,{}]:[u,S,{onFocus:Xl(m,M),onBlur:Xl(p,k),onMouseEnter:Xl(g,M),onMouseLeave:Xl(E,k),onTouchStart:Xl(A,M)}]:[!1,S,{}]}function Xl(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function bI({page:i,...e}){let{router:t}=mb(),a=Y.useMemo(()=>ib(t.routes,i,t.basename),[t.routes,i,t.basename]);return a?Y.createElement(SI,{page:i,matches:a,...e}):null}function AI(i){let{manifest:e,routeModules:t}=pb(),[a,o]=Y.useState([]);return Y.useEffect(()=>{let u=!1;return mI(i,e,t).then(f=>{u||o(f)}),()=>{u=!0}},[i,e,t]),a}function SI({page:i,matches:e,...t}){let a=os(),{manifest:o,routeModules:u}=pb(),{basename:f}=mb(),{loaderData:m,matches:p}=EI(),g=Y.useMemo(()=>j0(i,e,p,o,a,"data"),[i,e,p,o,a]),E=Y.useMemo(()=>j0(i,e,p,o,a,"assets"),[i,e,p,o,a]),A=Y.useMemo(()=>{if(i===a.pathname+a.search+a.hash)return[];let k=new Set,Q=!1;if(e.forEach(B=>{var $;let J=o.routes[B.route.id];!J||!J.hasLoader||(!g.some(se=>se.route.id===B.route.id)&&B.route.id in m&&(($=u[B.route.id])!=null&&$.shouldRevalidate)||J.hasClientLoader?Q=!0:k.add(B.route.id))}),k.size===0)return[];let L=_I(i,f);return Q&&k.size>0&&L.searchParams.set("_routes",e.filter(B=>k.has(B.route.id)).map(B=>B.route.id).join(",")),[L.pathname+L.search]},[f,m,a,o,g,e,i,u]),S=Y.useMemo(()=>pI(E,o),[E,o]),M=AI(E);return Y.createElement(Y.Fragment,null,A.map(k=>Y.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...t})),S.map(k=>Y.createElement("link",{key:k,rel:"modulepreload",href:k,...t})),M.map(({key:k,link:Q})=>Y.createElement("link",{key:k,...Q})))}function wI(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var gb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gb&&(window.__reactRouterVersion="7.4.1")}catch{}function RI({basename:i,children:e,window:t}){let a=Y.useRef();a.current==null&&(a.current=pR({window:t,v5Compat:!0}));let o=a.current,[u,f]=Y.useState({action:o.action,location:o.location}),m=Y.useCallback(p=>{Y.startTransition(()=>f(p))},[f]);return Y.useLayoutEffect(()=>o.listen(m),[o,m]),Y.createElement(nI,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var yb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hn=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:a="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:E,viewTransition:A,...S},M){let{basename:k}=Y.useContext(wi),Q=typeof g=="string"&&yb.test(g),L,B=!1;if(typeof g=="string"&&Q&&(L=g,gb))try{let w=new URL(window.location.href),x=g.startsWith("//")?new URL(w.protocol+g):new URL(g),V=ar(x.pathname,k);x.origin===w.origin&&V!=null?g=V+x.search+x.hash:B=!0}catch{bi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=BR(g,{relative:o}),[$,se,le]=TI(a,S),ve=OI(g,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:A});function N(w){e&&e(w),w.defaultPrevented||ve(w)}let R=Y.createElement("a",{...S,...le,href:L||J,onClick:B||u?e:N,ref:wI(M,se),target:p,"data-discover":!Q&&t==="render"?"true":void 0});return $&&!Q?Y.createElement(Y.Fragment,null,R,Y.createElement(bI,{page:J})):R});Hn.displayName="Link";var fu=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:a="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},E){let A=Ru(f,{relative:g.relative}),S=os(),M=Y.useContext(lh),{navigator:k,basename:Q}=Y.useContext(wi),L=M!=null&&MI(A)&&m===!0,B=k.encodeLocation?k.encodeLocation(A).pathname:A.pathname,J=S.pathname,$=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(J=J.toLowerCase(),$=$?$.toLowerCase():null,B=B.toLowerCase()),$&&Q&&($=ar($,Q)||$);const se=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let le=J===B||!o&&J.startsWith(B)&&J.charAt(se)==="/",ve=$!=null&&($===B||!o&&$.startsWith(B)&&$.charAt(B.length)==="/"),N={isActive:le,isPending:ve,isTransitioning:L},R=le?e:void 0,w;typeof a=="function"?w=a(N):w=[a,le?"active":null,ve?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof u=="function"?u(N):u;return Y.createElement(Hn,{...g,"aria-current":R,className:w,ref:E,style:x,to:f,viewTransition:m},typeof p=="function"?p(N):p)});fu.displayName="NavLink";var II=Y.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:a,replace:o,state:u,method:f=bf,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:A,...S},M)=>{let k=NI(),Q=PI(m,{relative:g}),L=f.toLowerCase()==="get"?"get":"post",B=typeof m=="string"&&yb.test(m),J=$=>{if(p&&p($),$.defaultPrevented)return;$.preventDefault();let se=$.nativeEvent.submitter,le=(se==null?void 0:se.getAttribute("formmethod"))||f;k(se||$.currentTarget,{fetcherKey:e,method:le,navigate:t,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:A})};return Y.createElement("form",{ref:M,method:L,action:Q,onSubmit:a?p:J,...S,"data-discover":!B&&i==="render"?"true":void 0})});II.displayName="Form";function CI(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vb(i){let e=Y.useContext(Do);return lt(e,CI(i)),e}function OI(i,{target:e,replace:t,state:a,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=og(),p=os(),g=Ru(i,{relative:u});return Y.useCallback(E=>{if(lI(E,e)){E.preventDefault();let A=t!==void 0?t:cu(p)===cu(g);m(i,{replace:A,state:a,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,t,a,e,i,o,u,f])}var xI=0,DI=()=>`__${String(++xI)}__`;function NI(){let{router:i}=vb("useSubmit"),{basename:e}=Y.useContext(wi),t=ZR();return Y.useCallback(async(a,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=fI(a,e);if(o.navigate===!1){let E=o.fetcherKey||DI();await i.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function PI(i,{relative:e}={}){let{basename:t}=Y.useContext(wi),a=Y.useContext(hr);lt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...Ru(i||".",{relative:e})},f=os();if(i==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(A=>A).forEach(A=>m.append("index",A));let E=m.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:ir([t,u.pathname])),cu(u)}function MI(i,e={}){let t=Y.useContext(ub);lt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=vb("useViewTransitionState"),o=Ru(i,{relative:e.relative});if(!t.isTransitioning)return!1;let u=ar(t.currentLocation.pathname,a)||t.currentLocation.pathname,f=ar(t.nextLocation.pathname,a)||t.nextLocation.pathname;return Vf(o.pathname,f)!=null||Vf(o.pathname,u)!=null}new TextEncoder;const kI=()=>{};var z0={};/**
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
 */const _b=function(i){const e=[];let t=0;for(let a=0;a<i.length;a++){let o=i.charCodeAt(a);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++a)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},VI=function(i){const e=[];let t=0,a=0;for(;t<i.length;){const o=i[t++];if(o<128)e[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],f=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[a++]=String.fromCharCode(55296+(p>>10)),e[a++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],f=i[t++];e[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},Eb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let S=(m&15)<<2|g>>6,M=g&63;p||(M=64,f||(S=64)),a.push(t[E],t[A],t[S],t[M])}return a.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_b(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):VI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const g=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||A==null)throw new LI;const S=u<<2|m>>4;if(a.push(S),g!==64){const M=m<<4&240|g>>2;if(a.push(M),A!==64){const k=g<<6&192|A;a.push(k)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UI=function(i){const e=_b(i);return Eb.encodeByteArray(e,!0)},Lf=function(i){return UI(i).replace(/\./g,"")},Tb=function(i){try{return Eb.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zI=()=>jI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof z0>"u")return;const i=z0.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},FI=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Tb(i[1]);return e&&JSON.parse(e)},ch=()=>{try{return kI()||zI()||BI()||FI()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},bb=i=>{var e,t;return(t=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Ab=i=>{const e=bb(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},Sb=()=>{var i;return(i=ch())===null||i===void 0?void 0:i.config},wb=i=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
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
 */function Rb(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Lf(JSON.stringify(t)),Lf(JSON.stringify(f)),""].join(".")}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function GI(){var i;const e=(i=ch())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YI(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $I(){const i=en();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function XI(){return!GI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((i,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(a),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const JI="FirebaseError";class Ri extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=JI,Object.setPrototypeOf(this,Ri.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Iu.prototype.create)}}class Iu{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?eC(u,a):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Ri(o,m,a)}}function eC(i,e){return i.replace(tC,(t,a)=>{const o=e[a];return o!=null?String(o):`<${a}?>`})}const tC=/\{\$([^}]+)}/g;function nC(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ja(i,e){if(i===e)return!0;const t=Object.keys(i),a=Object.keys(e);for(const o of t){if(!a.includes(o))return!1;const u=i[o],f=e[o];if(B0(u)&&B0(f)){if(!Ja(u,f))return!1}else if(u!==f)return!1}for(const o of a)if(!t.includes(o))return!1;return!0}function B0(i){return i!==null&&typeof i=="object"}/**
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
 */function Cu(i){const e=[];for(const[t,a]of Object.entries(i))Array.isArray(a)?a.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Wl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,u]=a.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Zl(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function iC(i,e){const t=new rC(i,e);return t.subscribe.bind(t)}class rC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let o;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");aC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:a},o.next===void 0&&(o.next=qm),o.error===void 0&&(o.error=qm),o.complete===void 0&&(o.complete=qm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aC(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function qm(){}/**
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
 */function tn(i){return i&&i._delegate?i._delegate:i}class ta{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xa="[DEFAULT]";/**
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
 */class sC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new qI;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lC(e))try{this.getOrInitializeService({instanceIdentifier:Xa})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(e=Xa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xa){return this.instances.has(e)}getOptions(e=Xa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&f.resolve(o)}return o}onInit(e,t){var a;const o=this.normalizeInstanceIdentifier(t),u=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const o of a)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:oC(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Xa){return this.component?this.component.multipleInstances?e:Xa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oC(i){return i===Xa?void 0:i}function lC(i){return i.instantiationMode==="EAGER"}/**
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
 */class uC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ve||(Ve={}));const cC={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},fC=Ve.INFO,hC={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},dC=(i,e,...t)=>{if(e<i.logLevel)return;const a=new Date().toISOString(),o=hC[e];if(o)console[o](`[${a}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hg{constructor(e){this.name=e,this._logLevel=fC,this._logHandler=dC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const mC=(i,e)=>e.some(t=>i instanceof t);let F0,q0;function pC(){return F0||(F0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gC(){return q0||(q0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ib=new WeakMap,dp=new WeakMap,Cb=new WeakMap,Hm=new WeakMap,dg=new WeakMap;function yC(i){const e=new Promise((t,a)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{t(Xr(i.result)),o()},f=()=>{a(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&Ib.set(t,i)}).catch(()=>{}),dg.set(e,i),e}function vC(i){if(dp.has(i))return;const e=new Promise((t,a)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{t(),o()},f=()=>{a(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});dp.set(i,e)}let mp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return dp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Cb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function _C(i){mp=i(mp)}function EC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=i.call(Gm(this),e,...t);return Cb.set(a,e.sort?e.sort():[e]),Xr(a)}:gC().includes(i)?function(...e){return i.apply(Gm(this),e),Xr(Ib.get(this))}:function(...e){return Xr(i.apply(Gm(this),e))}}function TC(i){return typeof i=="function"?EC(i):(i instanceof IDBTransaction&&vC(i),mC(i,pC())?new Proxy(i,mp):i)}function Xr(i){if(i instanceof IDBRequest)return yC(i);if(Hm.has(i))return Hm.get(i);const e=TC(i);return e!==i&&(Hm.set(i,e),dg.set(e,i)),e}const Gm=i=>dg.get(i);function bC(i,e,{blocked:t,upgrade:a,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=Xr(f);return a&&f.addEventListener("upgradeneeded",p=>{a(Xr(f.result),p.oldVersion,p.newVersion,Xr(f.transaction),p)}),t&&f.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const AC=["get","getKey","getAll","getAllKeys","count"],SC=["put","add","delete","clear"],Km=new Map;function H0(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Km.get(e))return Km.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,o=SC.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(o||AC.includes(t)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(m.shift())),(await Promise.all([g[t](...m),o&&p.done]))[0]};return Km.set(e,u),u}_C(i=>({...i,get:(e,t,a)=>H0(e,t)||i.get(e,t,a),has:(e,t)=>!!H0(e,t)||i.has(e,t)}));/**
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
 */class wC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(RC(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function RC(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pp="@firebase/app",G0="0.11.3";/**
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
 */const sr=new hg("@firebase/app"),IC="@firebase/app-compat",CC="@firebase/analytics-compat",OC="@firebase/analytics",xC="@firebase/app-check-compat",DC="@firebase/app-check",NC="@firebase/auth",PC="@firebase/auth-compat",MC="@firebase/database",kC="@firebase/data-connect",VC="@firebase/database-compat",LC="@firebase/functions",UC="@firebase/functions-compat",jC="@firebase/installations",zC="@firebase/installations-compat",BC="@firebase/messaging",FC="@firebase/messaging-compat",qC="@firebase/performance",HC="@firebase/performance-compat",GC="@firebase/remote-config",KC="@firebase/remote-config-compat",YC="@firebase/storage",QC="@firebase/storage-compat",$C="@firebase/firestore",XC="@firebase/vertexai",WC="@firebase/firestore-compat",ZC="firebase",JC="11.5.0";/**
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
 */const gp="[DEFAULT]",e2={[pp]:"fire-core",[IC]:"fire-core-compat",[OC]:"fire-analytics",[CC]:"fire-analytics-compat",[DC]:"fire-app-check",[xC]:"fire-app-check-compat",[NC]:"fire-auth",[PC]:"fire-auth-compat",[MC]:"fire-rtdb",[kC]:"fire-data-connect",[VC]:"fire-rtdb-compat",[LC]:"fire-fn",[UC]:"fire-fn-compat",[jC]:"fire-iid",[zC]:"fire-iid-compat",[BC]:"fire-fcm",[FC]:"fire-fcm-compat",[qC]:"fire-perf",[HC]:"fire-perf-compat",[GC]:"fire-rc",[KC]:"fire-rc-compat",[YC]:"fire-gcs",[QC]:"fire-gcs-compat",[$C]:"fire-fst",[WC]:"fire-fst-compat",[XC]:"fire-vertex","fire-js":"fire-js",[ZC]:"fire-js-all"};/**
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
 */const Uf=new Map,t2=new Map,yp=new Map;function K0(i,e){try{i.container.addComponent(e)}catch(t){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function es(i){const e=i.name;if(yp.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;yp.set(e,i);for(const t of Uf.values())K0(t,i);for(const t of t2.values())K0(t,i);return!0}function fh(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Tn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const n2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Iu("app","Firebase",n2);/**
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
 */class i2{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new ta("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=JC;function Ob(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const a=Object.assign({name:gp,automaticDataCollectionEnabled:!1},e),o=a.name;if(typeof o!="string"||!o)throw Wr.create("bad-app-name",{appName:String(o)});if(t||(t=Sb()),!t)throw Wr.create("no-options");const u=Uf.get(o);if(u){if(Ja(t,u.options)&&Ja(a,u.config))return u;throw Wr.create("duplicate-app",{appName:o})}const f=new uC(o);for(const p of yp.values())f.addComponent(p);const m=new i2(t,a,f);return Uf.set(o,m),m}function mg(i=gp){const e=Uf.get(i);if(!e&&i===gp&&Sb())return Ob();if(!e)throw Wr.create("no-app",{appName:i});return e}function gi(i,e,t){var a;let o=(a=e2[i])!==null&&a!==void 0?a:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(m.join(" "));return}es(new ta(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const r2="firebase-heartbeat-database",a2=1,hu="firebase-heartbeat-store";let Ym=null;function xb(){return Ym||(Ym=bC(r2,a2,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(hu)}catch(t){console.warn(t)}}}}).catch(i=>{throw Wr.create("idb-open",{originalErrorMessage:i.message})})),Ym}async function s2(i){try{const t=(await xb()).transaction(hu),a=await t.objectStore(hu).get(Db(i));return await t.done,a}catch(e){if(e instanceof Ri)sr.warn(e.message);else{const t=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(t.message)}}}async function Y0(i,e){try{const a=(await xb()).transaction(hu,"readwrite");await a.objectStore(hu).put(e,Db(i)),await a.done}catch(t){if(t instanceof Ri)sr.warn(t.message);else{const a=Wr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});sr.warn(a.message)}}}function Db(i){return`${i.name}!${i.options.appId}`}/**
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
 */const o2=1024,l2=30;class u2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new f2(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Q0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>l2){const f=h2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){sr.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Q0(),{heartbeatsToSend:a,unsentEntries:o}=c2(this._heartbeatsCache.heartbeats),u=Lf(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return sr.warn(t),""}}}function Q0(){return new Date().toISOString().substring(0,10)}function c2(i,e=o2){const t=[];let a=i.slice();for(const o of i){const u=t.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),$0(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),$0(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class f2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await s2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Y0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Y0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function $0(i){return Lf(JSON.stringify({version:2,heartbeats:i})).length}function h2(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let a=1;a<i.length;a++)i[a].date<t&&(t=i[a].date,e=a);return e}/**
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
 */function d2(i){es(new ta("platform-logger",e=>new wC(e),"PRIVATE")),es(new ta("heartbeat",e=>new u2(e),"PRIVATE")),gi(pp,G0,i),gi(pp,G0,"esm2017"),gi("fire-js","")}d2("");var m2="firebase",p2="11.5.0";/**
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
 */gi(m2,p2,"app");function pg(i,e){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(i);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(i,a[o])&&(t[a[o]]=i[a[o]]);return t}function Nb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g2=Nb,Pb=new Iu("auth","Firebase",Nb());/**
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
 */const jf=new hg("@firebase/auth");function y2(i,...e){jf.logLevel<=Ve.WARN&&jf.warn(`Auth (${ls}): ${i}`,...e)}function Sf(i,...e){jf.logLevel<=Ve.ERROR&&jf.error(`Auth (${ls}): ${i}`,...e)}/**
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
 */function Yn(i,...e){throw gg(i,...e)}function yi(i,...e){return gg(i,...e)}function Mb(i,e,t){const a=Object.assign(Object.assign({},g2()),{[e]:t});return new Iu("auth","Firebase",a).create(e,{appName:i.name})}function rr(i){return Mb(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gg(i,...e){if(typeof i!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(t,...a)}return Pb.create(i,...e)}function be(i,e,...t){if(!i)throw gg(e,...t)}function er(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Sf(e),new Error(e)}function or(i,e){i||er(e)}/**
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
 */function vp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function v2(){return X0()==="http:"||X0()==="https:"}function X0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function _2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v2()||YI()||"connection"in navigator)?navigator.onLine:!0}function E2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ou{constructor(e,t){this.shortDelay=e,this.longDelay=t,or(t>e,"Short delay should be less than long delay!"),this.isMobile=HI()||QI()}get(){return _2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yg(i,e){or(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class kb{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const b2=new Ou(3e4,6e4);function fa(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ha(i,e,t,a,o={}){return Vb(i,o,async()=>{let u={},f={};a&&(e==="GET"?f=a:u={body:JSON.stringify(a)});const m=Cu(Object.assign({key:i.config.apiKey},f)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return KI()||(g.referrerPolicy="no-referrer"),kb.fetch()(Lb(i,i.config.apiHost,t,m),g)})}async function Vb(i,e,t){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},T2),e);try{const o=new S2(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw hf(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw hf(i,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw hf(i,"email-already-in-use",f);if(p==="USER_DISABLED")throw hf(i,"user-disabled",f);const E=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Mb(i,E,g);Yn(i,E)}}catch(o){if(o instanceof Ri)throw o;Yn(i,"network-request-failed",{message:String(o)})}}async function xu(i,e,t,a,o={}){const u=await ha(i,e,t,a,o);return"mfaPendingCredential"in u&&Yn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Lb(i,e,t,a){const o=`${e}${t}?${a}`;return i.config.emulator?yg(i.config,o):`${i.config.apiScheme}://${o}`}function A2(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class S2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(yi(this.auth,"network-request-failed")),b2.get())})}}function hf(i,e,t){const a={appName:i.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const o=yi(i,e,a);return o.customData._tokenResponse=t,o}function W0(i){return i!==void 0&&i.enterprise!==void 0}class w2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return A2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function R2(i,e){return ha(i,"GET","/v2/recaptchaConfig",fa(i,e))}/**
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
 */async function I2(i,e){return ha(i,"POST","/v1/accounts:delete",e)}async function Ub(i,e){return ha(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function iu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C2(i,e=!1){const t=tn(i),a=await t.getIdToken(e),o=vg(a);be(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:a,authTime:iu(Qm(o.auth_time)),issuedAtTime:iu(Qm(o.iat)),expirationTime:iu(Qm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Qm(i){return Number(i)*1e3}function vg(i){const[e,t,a]=i.split(".");if(e===void 0||t===void 0||a===void 0)return Sf("JWT malformed, contained fewer than 3 sections"),null;try{const o=Tb(t);return o?JSON.parse(o):(Sf("Failed to decode base64 JWT payload"),null)}catch(o){return Sf("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Z0(i){const e=vg(i);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function du(i,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof Ri&&O2(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function O2({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class x2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _p{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=iu(this.lastLoginAt),this.creationTime=iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zf(i){var e;const t=i.auth,a=await i.getIdToken(),o=await du(i,Ub(t,{idToken:a}));be(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?jb(u.providerUserInfo):[],m=N2(i.providerData,f),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?g:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new _p(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function D2(i){const e=tn(i);await zf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N2(i,e){return[...i.filter(a=>!e.some(o=>o.providerId===a.providerId)),...e]}function jb(i){return i.map(e=>{var{providerId:t}=e,a=pg(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function P2(i,e){const t=await Vb(i,{},async()=>{const a=Cu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=Lb(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",kb.fetch()(f,{method:"POST",headers:m,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function M2(i,e){return ha(i,"POST","/v2/accounts:revokeToken",fa(i,e))}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=Z0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:o,expiresIn:u}=await P2(e,t);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:o,expirationTime:u}=t,f=new go;return a&&(be(typeof a=="string","internal-error",{appName:e}),f.refreshToken=a),o&&(be(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(be(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
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
 */function qr(i,e){be(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:t,auth:a,stsTokenManager:o}=e,u=pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new _p(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await du(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return C2(this,e)}reload(){return D2(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await zf(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await du(this,I2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,o,u,f,m,p,g,E;const A=(a=t.displayName)!==null&&a!==void 0?a:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,M=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,k=(f=t.photoURL)!==null&&f!==void 0?f:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,B=(g=t.createdAt)!==null&&g!==void 0?g:void 0,J=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:$,emailVerified:se,isAnonymous:le,providerData:ve,stsTokenManager:N}=t;be($&&N,e,"internal-error");const R=go.fromJSON(this.name,N);be(typeof $=="string",e,"internal-error"),qr(A,e.name),qr(S,e.name),be(typeof se=="boolean",e,"internal-error"),be(typeof le=="boolean",e,"internal-error"),qr(M,e.name),qr(k,e.name),qr(Q,e.name),qr(L,e.name),qr(B,e.name),qr(J,e.name);const w=new tr({uid:$,auth:e,email:S,emailVerified:se,displayName:A,isAnonymous:le,photoURL:k,phoneNumber:M,tenantId:Q,stsTokenManager:R,createdAt:B,lastLoginAt:J});return ve&&Array.isArray(ve)&&(w.providerData=ve.map(x=>Object.assign({},x))),L&&(w._redirectEventId=L),w}static async _fromIdTokenResponse(e,t,a=!1){const o=new go;o.updateFromServerResponse(t);const u=new tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:a});return await zf(u),u}static async _fromGetAccountInfoResponse(e,t,a){const o=t.users[0];be(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?jb(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new go;m.updateFromIdToken(a);const p=new tr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _p(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const J0=new Map;function nr(i){or(i instanceof Function,"Expected a class definition");let e=J0.get(i);return e?(or(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,J0.set(i,e),e)}/**
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
 */class zb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zb.type="NONE";const eE=zb;/**
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
 */function wf(i,e,t){return`firebase:${i}:${e}:${t}`}class yo{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=wf(this.userKey,o.apiKey,u),this.fullPersistenceKey=wf("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new yo(nr(eE),e,a);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||nr(eE);const f=wf(a,e.config.apiKey,e.name);let m=null;for(const g of t)try{const E=await g._get(f);if(E){const A=tr._fromJSON(e,E);g!==u&&(m=A),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new yo(u,e,a):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new yo(u,e,a))}}/**
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
 */function tE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kb(e))return"Blackberry";if(Yb(e))return"Webos";if(Fb(e))return"Safari";if((e.includes("chrome/")||qb(e))&&!e.includes("edge/"))return"Chrome";if(Gb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Bb(i=en()){return/firefox\//i.test(i)}function Fb(i=en()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qb(i=en()){return/crios\//i.test(i)}function Hb(i=en()){return/iemobile/i.test(i)}function Gb(i=en()){return/android/i.test(i)}function Kb(i=en()){return/blackberry/i.test(i)}function Yb(i=en()){return/webos/i.test(i)}function _g(i=en()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function k2(i=en()){var e;return _g(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V2(){return $I()&&document.documentMode===10}function Qb(i=en()){return _g(i)||Gb(i)||Yb(i)||Kb(i)||/windows phone/i.test(i)||Hb(i)}/**
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
 */function $b(i,e=[]){let t;switch(i){case"Browser":t=tE(en());break;case"Worker":t=`${tE(en())}-${i}`;break;default:t=i}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ls}/${a}`}/**
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
 */class L2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});a.onAbort=t,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function U2(i,e={}){return ha(i,"GET","/v2/passwordPolicy",fa(i,e))}/**
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
 */const j2=6;class z2{constructor(e){var t,a,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=f.minPasswordLength)!==null&&t!==void 0?t:j2,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(a=p.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let o=0;o<e.length;o++)a=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class B2{constructor(e,t,a,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nE(this),this.idTokenSubscription=new nE(this),this.beforeStateQueue=new L2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nr(t)),this._initializationPromise=this.queue(async()=>{var a,o;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ub(this,{idToken:e}),a=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(a)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(rr(this));const t=e?tn(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U2(this),t=new z2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Iu("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await M2(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nr(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,a,o);return()=>{f=!0,p()}}else{const p=e.addObserver(t);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$b(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&y2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function us(i){return tn(i)}class nE{constructor(e){this.auth=e,this.observer=null,this.addObserver=iC(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F2(i){hh=i}function Xb(i){return hh.loadJS(i)}function q2(){return hh.recaptchaEnterpriseScript}function H2(){return hh.gapiScript}function G2(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class K2{constructor(){this.enterprise=new Y2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Y2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Q2="recaptcha-enterprise",Wb="NO_RECAPTCHA";class $2{constructor(e){this.type=Q2,this.auth=us(e)}async verify(e="verify",t=!1){async function a(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{R2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new w2(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;W0(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(Wb)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new K2().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{a(this.auth).then(m=>{if(!t&&W0(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=q2();p.length!==0&&(p+=m),Xb(p).then(()=>{o(m,u,f)}).catch(g=>{f(g)})}}).catch(m=>{f(m)})})}}async function iE(i,e,t,a=!1,o=!1){const u=new $2(i);let f;if(o)f=Wb;else try{f=await u.verify(t)}catch{f=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return a?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ep(i,e,t,a,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await iE(i,e,t,t==="getOobCode");return a(i,f)}else return a(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await iE(i,e,t,t==="getOobCode");return a(i,m)}else return Promise.reject(f)})}/**
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
 */function X2(i,e){const t=fh(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Ja(u,e??{}))return o;Yn(o,"already-initialized")}return t.initialize({options:e})}function W2(i,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(nr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function Z2(i,e,t){const a=us(i);be(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const o=!1,u=Zb(e),{host:f,port:m}=J2(e),p=m===null?"":`:${m}`,g={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){be(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),be(Ja(g,a.config.emulator)&&Ja(E,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=g,a.emulatorConfig=E,a.settings.appVerificationDisabledForTesting=!0,eO()}function Zb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function J2(i){const e=Zb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:rE(a.substr(u.length+1))}}else{const[u,f]=a.split(":");return{host:u,port:rE(f)}}}function rE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function eO(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Eg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,t){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function tO(i,e){return ha(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function nO(i,e){return xu(i,"POST","/v1/accounts:signInWithPassword",fa(i,e))}/**
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
 */async function iO(i,e){return xu(i,"POST","/v1/accounts:signInWithEmailLink",fa(i,e))}async function rO(i,e){return xu(i,"POST","/v1/accounts:signInWithEmailLink",fa(i,e))}/**
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
 */class mu extends Eg{constructor(e,t,a,o=null){super("password",a),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new mu(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new mu(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ep(e,t,"signInWithPassword",nO);case"emailLink":return iO(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const a={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ep(e,a,"signUpPassword",tO);case"emailLink":return rO(e,{idToken:t,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vo(i,e){return xu(i,"POST","/v1/accounts:signInWithIdp",fa(i,e))}/**
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
 */const aO="http://localhost";class ts extends Eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:o}=t,u=pg(t,["providerId","signInMethod"]);if(!a||!o)return null;const f=new ts(a,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,vo(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:aO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cu(t)}return e}}/**
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
 */function sO(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oO(i){const e=Wl(Zl(i)).link,t=e?Wl(Zl(e)).deep_link_id:null,a=Wl(Zl(i)).deep_link_id;return(a?Wl(Zl(a)).link:null)||a||t||e||i}class Tg{constructor(e){var t,a,o,u,f,m;const p=Wl(Zl(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(a=p.oobCode)!==null&&a!==void 0?a:null,A=sO((o=p.mode)!==null&&o!==void 0?o:null);be(g&&E&&A,"argument-error"),this.apiKey=g,this.operation=A,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=oO(e);try{return new Tg(t)}catch{return null}}}/**
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
 */class No{constructor(){this.providerId=No.PROVIDER_ID}static credential(e,t){return mu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=Tg.parseLink(t);return be(a,"argument-error"),mu._fromEmailAndCode(e,a.code,a.tenantId)}}No.PROVIDER_ID="password";No.EMAIL_PASSWORD_SIGN_IN_METHOD="password";No.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Du extends Jb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends Du{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends Du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return Kr.credential(t,a)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Yr extends Du{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Qr extends Du{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return Qr.credential(t,a)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
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
 */async function lO(i,e){return xu(i,"POST","/v1/accounts:signUp",fa(i,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,o=!1){const u=await tr._fromIdTokenResponse(e,a,o),f=aE(a);return new ns({user:u,providerId:f,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const o=aE(a);return new ns({user:e,providerId:o,_tokenResponse:a,operationType:t})}}function aE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Bf extends Ri{constructor(e,t,a,o){var u;super(t.code,t.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Bf.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,o){return new Bf(e,t,a,o)}}function eA(i,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bf._fromErrorAndOperation(i,u,e,a):u})}async function uO(i,e,t=!1){const a=await du(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ns._forOperation(i,"link",a)}/**
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
 */async function cO(i,e,t=!1){const{auth:a}=i;if(Tn(a.app))return Promise.reject(rr(a));const o="reauthenticate";try{const u=await du(i,eA(a,o,e,i),t);be(u.idToken,a,"internal-error");const f=vg(u.idToken);be(f,a,"internal-error");const{sub:m}=f;return be(i.uid===m,a,"user-mismatch"),ns._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Yn(a,"user-mismatch"),u}}/**
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
 */async function tA(i,e,t=!1){if(Tn(i.app))return Promise.reject(rr(i));const a="signIn",o=await eA(i,a,e),u=await ns._fromIdTokenResponse(i,a,o);return t||await i._updateCurrentUser(u.user),u}async function fO(i,e){return tA(us(i),e)}/**
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
 */async function nA(i){const e=us(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hO(i,e,t){if(Tn(i.app))return Promise.reject(rr(i));const a=us(i),f=await Ep(a,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lO).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&nA(i),p}),m=await ns._fromIdTokenResponse(a,"signIn",f);return await a._updateCurrentUser(m.user),m}function dO(i,e,t){return Tn(i.app)?Promise.reject(rr(i)):fO(tn(i),No.credential(e,t)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&nA(i),a})}function mO(i,e,t,a){return tn(i).onIdTokenChanged(e,t,a)}function pO(i,e,t){return tn(i).beforeAuthStateChanged(e,t)}function iA(i,e,t,a){return tn(i).onAuthStateChanged(e,t,a)}function gO(i){return tn(i).signOut()}const Ff="__sak";/**
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
 */class rA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ff,"1"),this.storage.removeItem(Ff),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yO=1e3,vO=10;class aA extends rA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),o=this.localCache[t];a!==o&&e(t,o,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const a=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(a);!t&&this.localCache[a]===f||this.notifyListeners(a,f)},u=this.storage.getItem(a);V2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,vO):o()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},yO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}aA.type="LOCAL";const _O=aA;/**
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
 */class sA extends rA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sA.type="SESSION";const oA=sA;/**
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
 */function EO(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const a=new dh(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:o,data:u}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const m=Array.from(f).map(async g=>g(t.origin,u)),p=await EO(m);t.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
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
 */function bg(i="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class TO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const g=bg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},a);f={messageChannel:o,onMessage(A){const S=A;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(S.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function vi(){return window}function bO(i){vi().location.href=i}/**
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
 */function lA(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function AO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SO(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function wO(){return lA()?self:null}/**
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
 */const uA="firebaseLocalStorageDb",RO=1,qf="firebaseLocalStorage",cA="fbase_key";class Nu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mh(i,e){return i.transaction([qf],e?"readwrite":"readonly").objectStore(qf)}function IO(){const i=indexedDB.deleteDatabase(uA);return new Nu(i).toPromise()}function Tp(){const i=indexedDB.open(uA,RO);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(qf,{keyPath:cA})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(qf)?e(a):(a.close(),await IO(),e(await Tp()))})})}async function sE(i,e,t){const a=mh(i,!0).put({[cA]:e,value:t});return new Nu(a).toPromise()}async function CO(i,e){const t=mh(i,!1).get(e),a=await new Nu(t).toPromise();return a===void 0?null:a.value}function oE(i,e){const t=mh(i,!0).delete(e);return new Nu(t).toPromise()}const OO=800,xO=3;class fA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>xO)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(wO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await AO(),!this.activeServiceWorker)return;this.sender=new TO(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await sE(e,Ff,"1"),await oE(e,Ff),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>sE(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>CO(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=mh(o,!1).getAll();return new Nu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const o of Array.from(a))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fA.type="LOCAL";const DO=fA;new Ou(3e4,6e4);/**
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
 */function NO(i,e){return e?nr(e):(be(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ag extends Eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PO(i){return tA(i.auth,new Ag(i),i.bypassAuthState)}function MO(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),cO(t,new Ag(i),i.bypassAuthState)}async function kO(i){const{auth:e,user:t}=i;return be(t,e,"internal-error"),uO(t,new Ag(i),i.bypassAuthState)}/**
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
 */class hA{constructor(e,t,a,o,u=!1){this.auth=e,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:t,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PO;case"linkViaPopup":case"linkViaRedirect":return kO;case"reauthViaPopup":case"reauthViaRedirect":return MO;default:Yn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VO=new Ou(2e3,1e4);class fo extends hA{constructor(e,t,a,o,u){super(e,t,o,u),this.provider=a,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=bg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VO.get())};e()}}fo.currentPopupAction=null;/**
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
 */const LO="pendingRedirect",Rf=new Map;class UO extends hA{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=Rf.get(this.auth._key());if(!e){try{const a=await jO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}Rf.set(this.auth._key(),e)}return this.bypassAuthState||Rf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jO(i,e){const t=FO(e),a=BO(i);if(!await a._isAvailable())return!1;const o=await a._get(t)==="true";return await a._remove(t),o}function zO(i,e){Rf.set(i._key(),e)}function BO(i){return nr(i._redirectPersistence)}function FO(i){return wf(LO,i.config.apiKey,i.name)}async function qO(i,e,t=!1){if(Tn(i.app))return Promise.reject(rr(i));const a=us(i),o=NO(a,e),f=await new UO(a,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await a._persistUserIfCurrent(f.user),await a._setRedirectUser(null,e)),f}/**
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
 */const HO=10*60*1e3;class GO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KO(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!dA(e)){const o=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(yi(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HO&&this.cachedEventUids.clear(),this.cachedEventUids.has(lE(e))}saveEventToCache(e){this.cachedEventUids.add(lE(e)),this.lastProcessedEventTime=Date.now()}}function lE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function dA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KO(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dA(i);default:return!1}}/**
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
 */async function YO(i,e={}){return ha(i,"GET","/v1/projects",e)}/**
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
 */const QO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$O=/^https?/;async function XO(i){if(i.config.emulator)return;const{authorizedDomains:e}=await YO(i);for(const t of e)try{if(WO(t))return}catch{}Yn(i,"unauthorized-domain")}function WO(i){const e=vp(),{protocol:t,hostname:a}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&a===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===a}if(!$O.test(t))return!1;if(QO.test(i))return a===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
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
 */const ZO=new Ou(3e4,6e4);function uE(){const i=vi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function JO(i){return new Promise((e,t)=>{var a,o,u;function f(){uE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uE(),t(yi(i,"network-request-failed"))},timeout:ZO.get()})}if(!((o=(a=vi().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=vi().gapi)===null||u===void 0)&&u.load)f();else{const m=G2("iframefcb");return vi()[m]=()=>{gapi.load?f():t(yi(i,"network-request-failed"))},Xb(`${H2()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw If=null,e})}let If=null;function ex(i){return If=If||JO(i),If}/**
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
 */const tx=new Ou(5e3,15e3),nx="__/auth/iframe",ix="emulator/auth/iframe",rx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ax=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sx(i){const e=i.config;be(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?yg(e,ix):`https://${i.config.authDomain}/${nx}`,a={apiKey:e.apiKey,appName:i.name,v:ls},o=ax.get(i.config.apiHost);o&&(a.eid=o);const u=i._getFrameworks();return u.length&&(a.fw=u.join(",")),`${t}?${Cu(a).slice(1)}`}async function ox(i){const e=await ex(i),t=vi().gapi;return be(t,i,"internal-error"),e.open({where:document.body,url:sx(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rx,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const f=yi(i,"network-request-failed"),m=vi().setTimeout(()=>{u(f)},tx.get());function p(){vi().clearTimeout(m),o(a)}a.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const lx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ux=500,cx=600,fx="_blank",hx="http://localhost";class cE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dx(i,e,t,a=ux,o=cx){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const p=Object.assign(Object.assign({},lx),{width:a.toString(),height:o.toString(),top:u,left:f}),g=en().toLowerCase();t&&(m=qb(g)?fx:t),Bb(g)&&(e=e||hx,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[M,k])=>`${S}${M}=${k},`,"");if(k2(g)&&m!=="_self")return mx(e||"",m),new cE(null);const A=window.open(e||"",m,E);be(A,i,"popup-blocked");try{A.focus()}catch{}return new cE(A)}function mx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
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
 */const px="__/auth/handler",gx="emulator/auth/handler",yx=encodeURIComponent("fac");async function fE(i,e,t,a,o,u){be(i.config.authDomain,i,"auth-domain-config-required"),be(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:a,v:ls,eventId:o};if(e instanceof Jb){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",nC(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))f[E]=A}if(e instanceof Du){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(f.scopes=E.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${yx}=${encodeURIComponent(p)}`:"";return`${vx(i)}?${Cu(m).slice(1)}${g}`}function vx({config:i}){return i.emulator?yg(i,gx):`https://${i.authDomain}/${px}`}/**
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
 */const $m="webStorageSupport";class _x{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oA,this._completeRedirectFn=qO,this._overrideRedirectResult=zO}async _openPopup(e,t,a,o){var u;or((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await fE(e,t,a,vp(),o);return dx(e,f,bg())}async _openRedirect(e,t,a,o){await this._originValidation(e);const u=await fE(e,t,a,vp(),o);return bO(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(or(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await ox(e),a=new GO(e);return t.register("authEvent",o=>(be(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($m,{type:$m},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[$m];f!==void 0&&t(!!f),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=XO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qb()||Fb()||_g()}}const Ex=_x;var hE="@firebase/auth",dE="1.9.1";/**
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
 */class Tx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ax(i){es(new ta("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=a.options;be(f&&!f.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$b(i)},g=new B2(a,o,u,p);return W2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),es(new ta("auth-internal",e=>{const t=us(e.getProvider("auth").getImmediate());return(a=>new Tx(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gi(hE,dE,bx(i)),gi(hE,dE,"esm2017")}/**
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
 */const Sx=5*60,wx=wb("authIdTokenMaxAge")||Sx;let mE=null;const Rx=i=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>wx)return;const o=t==null?void 0:t.token;mE!==o&&(mE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ix(i=mg()){const e=fh(i,"auth");if(e.isInitialized())return e.getImmediate();const t=X2(i,{popupRedirectResolver:Ex,persistence:[DO,_O,oA]}),a=wb("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const f=Rx(u.toString());pO(t,f,()=>f(t.currentUser)),mO(t,m=>f(m))}}const o=bb("auth");return o&&Z2(t,`http://${o}`),t}function Cx(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}F2({loadJS(i){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=e,a.onerror=o=>{const u=yi("internal-error");u.customData=o,t(u)},a.type="text/javascript",a.charset="UTF-8",Cx().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ax("Browser");var pE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,mA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,R){function w(){}w.prototype=R.prototype,N.D=R.prototype,N.prototype=new w,N.prototype.constructor=N,N.C=function(x,V,j){for(var O=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)O[Ut-2]=arguments[Ut];return R.prototype[V].apply(x,O)}}function t(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,t),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,R,w){w||(w=0);var x=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)x[V]=R.charCodeAt(w++)|R.charCodeAt(w++)<<8|R.charCodeAt(w++)<<16|R.charCodeAt(w++)<<24;else for(V=0;16>V;++V)x[V]=R[w++]|R[w++]<<8|R[w++]<<16|R[w++]<<24;R=N.g[0],w=N.g[1],V=N.g[2];var j=N.g[3],O=R+(j^w&(V^j))+x[0]+3614090360&4294967295;R=w+(O<<7&4294967295|O>>>25),O=j+(V^R&(w^V))+x[1]+3905402710&4294967295,j=R+(O<<12&4294967295|O>>>20),O=V+(w^j&(R^w))+x[2]+606105819&4294967295,V=j+(O<<17&4294967295|O>>>15),O=w+(R^V&(j^R))+x[3]+3250441966&4294967295,w=V+(O<<22&4294967295|O>>>10),O=R+(j^w&(V^j))+x[4]+4118548399&4294967295,R=w+(O<<7&4294967295|O>>>25),O=j+(V^R&(w^V))+x[5]+1200080426&4294967295,j=R+(O<<12&4294967295|O>>>20),O=V+(w^j&(R^w))+x[6]+2821735955&4294967295,V=j+(O<<17&4294967295|O>>>15),O=w+(R^V&(j^R))+x[7]+4249261313&4294967295,w=V+(O<<22&4294967295|O>>>10),O=R+(j^w&(V^j))+x[8]+1770035416&4294967295,R=w+(O<<7&4294967295|O>>>25),O=j+(V^R&(w^V))+x[9]+2336552879&4294967295,j=R+(O<<12&4294967295|O>>>20),O=V+(w^j&(R^w))+x[10]+4294925233&4294967295,V=j+(O<<17&4294967295|O>>>15),O=w+(R^V&(j^R))+x[11]+2304563134&4294967295,w=V+(O<<22&4294967295|O>>>10),O=R+(j^w&(V^j))+x[12]+1804603682&4294967295,R=w+(O<<7&4294967295|O>>>25),O=j+(V^R&(w^V))+x[13]+4254626195&4294967295,j=R+(O<<12&4294967295|O>>>20),O=V+(w^j&(R^w))+x[14]+2792965006&4294967295,V=j+(O<<17&4294967295|O>>>15),O=w+(R^V&(j^R))+x[15]+1236535329&4294967295,w=V+(O<<22&4294967295|O>>>10),O=R+(V^j&(w^V))+x[1]+4129170786&4294967295,R=w+(O<<5&4294967295|O>>>27),O=j+(w^V&(R^w))+x[6]+3225465664&4294967295,j=R+(O<<9&4294967295|O>>>23),O=V+(R^w&(j^R))+x[11]+643717713&4294967295,V=j+(O<<14&4294967295|O>>>18),O=w+(j^R&(V^j))+x[0]+3921069994&4294967295,w=V+(O<<20&4294967295|O>>>12),O=R+(V^j&(w^V))+x[5]+3593408605&4294967295,R=w+(O<<5&4294967295|O>>>27),O=j+(w^V&(R^w))+x[10]+38016083&4294967295,j=R+(O<<9&4294967295|O>>>23),O=V+(R^w&(j^R))+x[15]+3634488961&4294967295,V=j+(O<<14&4294967295|O>>>18),O=w+(j^R&(V^j))+x[4]+3889429448&4294967295,w=V+(O<<20&4294967295|O>>>12),O=R+(V^j&(w^V))+x[9]+568446438&4294967295,R=w+(O<<5&4294967295|O>>>27),O=j+(w^V&(R^w))+x[14]+3275163606&4294967295,j=R+(O<<9&4294967295|O>>>23),O=V+(R^w&(j^R))+x[3]+4107603335&4294967295,V=j+(O<<14&4294967295|O>>>18),O=w+(j^R&(V^j))+x[8]+1163531501&4294967295,w=V+(O<<20&4294967295|O>>>12),O=R+(V^j&(w^V))+x[13]+2850285829&4294967295,R=w+(O<<5&4294967295|O>>>27),O=j+(w^V&(R^w))+x[2]+4243563512&4294967295,j=R+(O<<9&4294967295|O>>>23),O=V+(R^w&(j^R))+x[7]+1735328473&4294967295,V=j+(O<<14&4294967295|O>>>18),O=w+(j^R&(V^j))+x[12]+2368359562&4294967295,w=V+(O<<20&4294967295|O>>>12),O=R+(w^V^j)+x[5]+4294588738&4294967295,R=w+(O<<4&4294967295|O>>>28),O=j+(R^w^V)+x[8]+2272392833&4294967295,j=R+(O<<11&4294967295|O>>>21),O=V+(j^R^w)+x[11]+1839030562&4294967295,V=j+(O<<16&4294967295|O>>>16),O=w+(V^j^R)+x[14]+4259657740&4294967295,w=V+(O<<23&4294967295|O>>>9),O=R+(w^V^j)+x[1]+2763975236&4294967295,R=w+(O<<4&4294967295|O>>>28),O=j+(R^w^V)+x[4]+1272893353&4294967295,j=R+(O<<11&4294967295|O>>>21),O=V+(j^R^w)+x[7]+4139469664&4294967295,V=j+(O<<16&4294967295|O>>>16),O=w+(V^j^R)+x[10]+3200236656&4294967295,w=V+(O<<23&4294967295|O>>>9),O=R+(w^V^j)+x[13]+681279174&4294967295,R=w+(O<<4&4294967295|O>>>28),O=j+(R^w^V)+x[0]+3936430074&4294967295,j=R+(O<<11&4294967295|O>>>21),O=V+(j^R^w)+x[3]+3572445317&4294967295,V=j+(O<<16&4294967295|O>>>16),O=w+(V^j^R)+x[6]+76029189&4294967295,w=V+(O<<23&4294967295|O>>>9),O=R+(w^V^j)+x[9]+3654602809&4294967295,R=w+(O<<4&4294967295|O>>>28),O=j+(R^w^V)+x[12]+3873151461&4294967295,j=R+(O<<11&4294967295|O>>>21),O=V+(j^R^w)+x[15]+530742520&4294967295,V=j+(O<<16&4294967295|O>>>16),O=w+(V^j^R)+x[2]+3299628645&4294967295,w=V+(O<<23&4294967295|O>>>9),O=R+(V^(w|~j))+x[0]+4096336452&4294967295,R=w+(O<<6&4294967295|O>>>26),O=j+(w^(R|~V))+x[7]+1126891415&4294967295,j=R+(O<<10&4294967295|O>>>22),O=V+(R^(j|~w))+x[14]+2878612391&4294967295,V=j+(O<<15&4294967295|O>>>17),O=w+(j^(V|~R))+x[5]+4237533241&4294967295,w=V+(O<<21&4294967295|O>>>11),O=R+(V^(w|~j))+x[12]+1700485571&4294967295,R=w+(O<<6&4294967295|O>>>26),O=j+(w^(R|~V))+x[3]+2399980690&4294967295,j=R+(O<<10&4294967295|O>>>22),O=V+(R^(j|~w))+x[10]+4293915773&4294967295,V=j+(O<<15&4294967295|O>>>17),O=w+(j^(V|~R))+x[1]+2240044497&4294967295,w=V+(O<<21&4294967295|O>>>11),O=R+(V^(w|~j))+x[8]+1873313359&4294967295,R=w+(O<<6&4294967295|O>>>26),O=j+(w^(R|~V))+x[15]+4264355552&4294967295,j=R+(O<<10&4294967295|O>>>22),O=V+(R^(j|~w))+x[6]+2734768916&4294967295,V=j+(O<<15&4294967295|O>>>17),O=w+(j^(V|~R))+x[13]+1309151649&4294967295,w=V+(O<<21&4294967295|O>>>11),O=R+(V^(w|~j))+x[4]+4149444226&4294967295,R=w+(O<<6&4294967295|O>>>26),O=j+(w^(R|~V))+x[11]+3174756917&4294967295,j=R+(O<<10&4294967295|O>>>22),O=V+(R^(j|~w))+x[2]+718787259&4294967295,V=j+(O<<15&4294967295|O>>>17),O=w+(j^(V|~R))+x[9]+3951481745&4294967295,N.g[0]=N.g[0]+R&4294967295,N.g[1]=N.g[1]+(V+(O<<21&4294967295|O>>>11))&4294967295,N.g[2]=N.g[2]+V&4294967295,N.g[3]=N.g[3]+j&4294967295}a.prototype.u=function(N,R){R===void 0&&(R=N.length);for(var w=R-this.blockSize,x=this.B,V=this.h,j=0;j<R;){if(V==0)for(;j<=w;)o(this,N,j),j+=this.blockSize;if(typeof N=="string"){for(;j<R;)if(x[V++]=N.charCodeAt(j++),V==this.blockSize){o(this,x),V=0;break}}else for(;j<R;)if(x[V++]=N[j++],V==this.blockSize){o(this,x),V=0;break}}this.h=V,this.o+=R},a.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var R=1;R<N.length-8;++R)N[R]=0;var w=8*this.o;for(R=N.length-8;R<N.length;++R)N[R]=w&255,w/=256;for(this.u(N),N=Array(16),R=w=0;4>R;++R)for(var x=0;32>x;x+=8)N[w++]=this.g[R]>>>x&255;return N};function u(N,R){var w=m;return Object.prototype.hasOwnProperty.call(w,N)?w[N]:w[N]=R(N)}function f(N,R){this.h=R;for(var w=[],x=!0,V=N.length-1;0<=V;V--){var j=N[V]|0;x&&j==R||(w[V]=j,x=!1)}this.g=w}var m={};function p(N){return-128<=N&&128>N?u(N,function(R){return new f([R|0],0>R?-1:0)}):new f([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return L(g(-N));for(var R=[],w=1,x=0;N>=w;x++)R[x]=N/w|0,w*=4294967296;return new f(R,0)}function E(N,R){if(N.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(N.charAt(0)=="-")return L(E(N.substring(1),R));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=g(Math.pow(R,8)),x=A,V=0;V<N.length;V+=8){var j=Math.min(8,N.length-V),O=parseInt(N.substring(V,V+j),R);8>j?(j=g(Math.pow(R,j)),x=x.j(j).add(g(O))):(x=x.j(w),x=x.add(g(O)))}return x}var A=p(0),S=p(1),M=p(16777216);i=f.prototype,i.m=function(){if(Q(this))return-L(this).m();for(var N=0,R=1,w=0;w<this.g.length;w++){var x=this.i(w);N+=(0<=x?x:4294967296+x)*R,R*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(k(this))return"0";if(Q(this))return"-"+L(this).toString(N);for(var R=g(Math.pow(N,6)),w=this,x="";;){var V=se(w,R).g;w=B(w,V.j(R));var j=((0<w.g.length?w.g[0]:w.h)>>>0).toString(N);if(w=V,k(w))return j+x;for(;6>j.length;)j="0"+j;x=j+x}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function k(N){if(N.h!=0)return!1;for(var R=0;R<N.g.length;R++)if(N.g[R]!=0)return!1;return!0}function Q(N){return N.h==-1}i.l=function(N){return N=B(this,N),Q(N)?-1:k(N)?0:1};function L(N){for(var R=N.g.length,w=[],x=0;x<R;x++)w[x]=~N.g[x];return new f(w,~N.h).add(S)}i.abs=function(){return Q(this)?L(this):this},i.add=function(N){for(var R=Math.max(this.g.length,N.g.length),w=[],x=0,V=0;V<=R;V++){var j=x+(this.i(V)&65535)+(N.i(V)&65535),O=(j>>>16)+(this.i(V)>>>16)+(N.i(V)>>>16);x=O>>>16,j&=65535,O&=65535,w[V]=O<<16|j}return new f(w,w[w.length-1]&-2147483648?-1:0)};function B(N,R){return N.add(L(R))}i.j=function(N){if(k(this)||k(N))return A;if(Q(this))return Q(N)?L(this).j(L(N)):L(L(this).j(N));if(Q(N))return L(this.j(L(N)));if(0>this.l(M)&&0>N.l(M))return g(this.m()*N.m());for(var R=this.g.length+N.g.length,w=[],x=0;x<2*R;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<N.g.length;V++){var j=this.i(x)>>>16,O=this.i(x)&65535,Ut=N.i(V)>>>16,ct=N.i(V)&65535;w[2*x+2*V]+=O*ct,J(w,2*x+2*V),w[2*x+2*V+1]+=j*ct,J(w,2*x+2*V+1),w[2*x+2*V+1]+=O*Ut,J(w,2*x+2*V+1),w[2*x+2*V+2]+=j*Ut,J(w,2*x+2*V+2)}for(x=0;x<R;x++)w[x]=w[2*x+1]<<16|w[2*x];for(x=R;x<2*R;x++)w[x]=0;return new f(w,0)};function J(N,R){for(;(N[R]&65535)!=N[R];)N[R+1]+=N[R]>>>16,N[R]&=65535,R++}function $(N,R){this.g=N,this.h=R}function se(N,R){if(k(R))throw Error("division by zero");if(k(N))return new $(A,A);if(Q(N))return R=se(L(N),R),new $(L(R.g),L(R.h));if(Q(R))return R=se(N,L(R)),new $(L(R.g),R.h);if(30<N.g.length){if(Q(N)||Q(R))throw Error("slowDivide_ only works with positive integers.");for(var w=S,x=R;0>=x.l(N);)w=le(w),x=le(x);var V=ve(w,1),j=ve(x,1);for(x=ve(x,2),w=ve(w,2);!k(x);){var O=j.add(x);0>=O.l(N)&&(V=V.add(w),j=O),x=ve(x,1),w=ve(w,1)}return R=B(N,V.j(R)),new $(V,R)}for(V=A;0<=N.l(R);){for(w=Math.max(1,Math.floor(N.m()/R.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),j=g(w),O=j.j(R);Q(O)||0<O.l(N);)w-=x,j=g(w),O=j.j(R);k(j)&&(j=S),V=V.add(j),N=B(N,O)}return new $(V,N)}i.A=function(N){return se(this,N).h},i.and=function(N){for(var R=Math.max(this.g.length,N.g.length),w=[],x=0;x<R;x++)w[x]=this.i(x)&N.i(x);return new f(w,this.h&N.h)},i.or=function(N){for(var R=Math.max(this.g.length,N.g.length),w=[],x=0;x<R;x++)w[x]=this.i(x)|N.i(x);return new f(w,this.h|N.h)},i.xor=function(N){for(var R=Math.max(this.g.length,N.g.length),w=[],x=0;x<R;x++)w[x]=this.i(x)^N.i(x);return new f(w,this.h^N.h)};function le(N){for(var R=N.g.length+1,w=[],x=0;x<R;x++)w[x]=N.i(x)<<1|N.i(x-1)>>>31;return new f(w,N.h)}function ve(N,R){var w=R>>5;R%=32;for(var x=N.g.length-w,V=[],j=0;j<x;j++)V[j]=0<R?N.i(j+w)>>>R|N.i(j+w+1)<<32-R:N.i(j+w);return new f(V,N.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,mA=a,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=E,Zr=f}).apply(typeof pE<"u"?pE:typeof self<"u"?self:typeof window<"u"?window:{});var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pA,Jl,gA,Cf,bp,yA,vA,_A;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof df=="object"&&df];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=t(this);function o(c,y){if(y)e:{var v=a;c=c.split(".");for(var b=0;b<c.length-1;b++){var z=c[b];if(!(z in v))break e;v=v[z]}c=c[c.length-1],b=v[c],y=y(b),y!=b&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,b=!1,z={next:function(){if(!b&&v<c.length){var K=v++;return{value:y(K,c[K]),done:!1}}return b=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,v){return c.call.apply(c.bind,arguments)}function A(c,y,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,b),c.apply(y,z)}}return function(){return c.apply(y,arguments)}}function S(c,y,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,S.apply(null,arguments)}function M(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function k(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,z,K){for(var oe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)oe[Ue-2]=arguments[Ue];return y.prototype[z].apply(b,oe)}}function Q(c){const y=c.length;if(0<y){const v=Array(y);for(let b=0;b<y;b++)v[b]=c[b];return v}return[]}function L(c,y){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(p(b)){const z=c.length||0,K=b.length||0;c.length=z+K;for(let oe=0;oe<K;oe++)c[z+oe]=b[oe]}else c.push(b)}}class B{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function J(c){return/^[\s\xa0]*$/.test(c)}function $(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function se(c){return se[" "](c),c}se[" "]=function(){};var le=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ve(c,y,v){for(const b in c)y.call(v,c[b],b,c)}function N(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function R(c){const y={};for(const v in c)y[v]=c[v];return y}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(c,y){let v,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(v in b)c[v]=b[v];for(let K=0;K<w.length;K++)v=w[K],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function V(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function j(c){m.setTimeout(()=>{throw c},0)}function O(){var c=qe;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Ut{constructor(){this.h=this.g=null}add(y,v){const b=ct.get();b.set(y,v),this.h?this.h.next=b:this.g=b,this.h=b}}var ct=new B(()=>new X,c=>c.reset());class X{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ge=!1,qe=new Ut,D=()=>{const c=m.Promise.resolve(void 0);ue=()=>{c.then(ie)}};var ie=()=>{for(var c;c=O();){try{c.h.call(c.g)}catch(v){j(v)}var y=ct;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}ge=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,y),m.removeEventListener("test",v,y)}catch{}return c}();function De(c,y){if(ae.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(le){e:{try{se(y.nodeName);var z=!0;break e}catch{}z=!1}z||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:we[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&De.aa.h.call(this)}}k(De,ae);var we={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),tt=0;function $n(c,y,v,b,z){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!b,this.ha=z,this.key=++tt,this.da=this.fa=!1}function mr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ci(c){this.src=c,this.g={},this.h=0}Ci.prototype.add=function(c,y,v,b,z){var K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);var oe=ma(c,y,b,z);return-1<oe?(y=c[oe],v||(y.fa=!1)):(y=new $n(y,this.src,K,!!b,z),y.fa=v,c.push(y)),y};function da(c,y){var v=y.type;if(v in c.g){var b=c.g[v],z=Array.prototype.indexOf.call(b,y,void 0),K;(K=0<=z)&&Array.prototype.splice.call(b,z,1),K&&(mr(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function ma(c,y,v,b){for(var z=0;z<c.length;++z){var K=c[z];if(!K.da&&K.listener==y&&K.capture==!!v&&K.ha==b)return z}return-1}var pa="closure_lm_"+(1e6*Math.random()|0),jo={};function zu(c,y,v,b,z){if(Array.isArray(y)){for(var K=0;K<y.length;K++)zu(c,y[K],v,b,z);return null}return v=Bu(v),c&&c[Dt]?c.K(y,v,g(b)?!!b.capture:!1,z):Sn(c,y,v,!1,b,z)}function Sn(c,y,v,b,z,K){if(!y)throw Error("Invalid event type");var oe=g(z)?!!z.capture:!!z,Ue=ps(c);if(Ue||(c[pa]=Ue=new Ci(c)),v=Ue.add(y,v,b,oe,K),v.proxy)return v;if(b=kh(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)_e||(z=oe),z===void 0&&(z=!1),c.addEventListener(y.toString(),b,z);else if(c.attachEvent)c.attachEvent(ga(y.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function kh(){function c(v){return y.call(c.src,c.listener,v)}const y=Vh;return c}function zo(c,y,v,b,z){if(Array.isArray(y))for(var K=0;K<y.length;K++)zo(c,y[K],v,b,z);else b=g(b)?!!b.capture:!!b,v=Bu(v),c&&c[Dt]?(c=c.i,y=String(y).toString(),y in c.g&&(K=c.g[y],v=ma(K,v,b,z),-1<v&&(mr(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete c.g[y],c.h--)))):c&&(c=ps(c))&&(y=c.g[y.toString()],c=-1,y&&(c=ma(y,v,b,z)),(v=-1<c?y[c]:null)&&ms(v))}function ms(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[Dt])da(y.i,c);else{var v=c.type,b=c.proxy;y.removeEventListener?y.removeEventListener(v,b,c.capture):y.detachEvent?y.detachEvent(ga(v),b):y.addListener&&y.removeListener&&y.removeListener(b),(v=ps(y))?(da(v,c),v.h==0&&(v.src=null,y[pa]=null)):mr(c)}}}function ga(c){return c in jo?jo[c]:jo[c]="on"+c}function Vh(c,y){if(c.da)c=!0;else{y=new De(y,this);var v=c.listener,b=c.ha||c.src;c.fa&&ms(c),c=v.call(b,y)}return c}function ps(c){return c=c[pa],c instanceof Ci?c:null}var Bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bu(c){return typeof c=="function"?c:(c[Bo]||(c[Bo]=function(y){return c.handleEvent(y)}),c[Bo])}function ft(){ce.call(this),this.i=new Ci(this),this.M=this,this.F=null}k(ft,ce),ft.prototype[Dt]=!0,ft.prototype.removeEventListener=function(c,y,v,b){zo(this,c,y,v,b)};function Ye(c,y){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=y.type||y,typeof y=="string")y=new ae(y,c);else if(y instanceof ae)y.target=y.target||c;else{var z=y;y=new ae(b,c),x(y,z)}if(z=!0,v)for(var K=v.length-1;0<=K;K--){var oe=y.g=v[K];z=hn(oe,b,!0,y)&&z}if(oe=y.g=c,z=hn(oe,b,!0,y)&&z,z=hn(oe,b,!1,y)&&z,v)for(K=0;K<v.length;K++)oe=y.g=v[K],z=hn(oe,b,!1,y)&&z}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],b=0;b<v.length;b++)mr(v[b]);delete c.g[y],c.h--}}this.F=null},ft.prototype.K=function(c,y,v,b){return this.i.add(String(c),y,!1,v,b)},ft.prototype.L=function(c,y,v,b){return this.i.add(String(c),y,!0,v,b)};function hn(c,y,v,b){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var z=!0,K=0;K<y.length;++K){var oe=y[K];if(oe&&!oe.da&&oe.capture==v){var Ue=oe.listener,wt=oe.ha||oe.src;oe.fa&&da(c.i,oe),z=Ue.call(wt,b)!==!1&&z}}return z&&!b.defaultPrevented}function Qt(c,y,v){if(typeof c=="function")v&&(c=S(c,v));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function Fu(c){c.g=Qt(()=>{c.g=null,c.i&&(c.i=!1,Fu(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class Lh extends ce{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Fu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ya(c){ce.call(this),this.h=c,this.g={}}k(ya,ce);var va=[];function _a(c){ve(c.g,function(y,v){this.g.hasOwnProperty(v)&&ms(y)},c),c.g={}}ya.prototype.N=function(){ya.aa.N.call(this),_a(this)},ya.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Un=m.JSON.stringify,gs=m.JSON.parse,Ea=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Fo(){}Fo.prototype.h=null;function qo(c){return c.h||(c.h=c.i())}function Ho(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){ae.call(this,"d")}k(xi,ae);function Go(){ae.call(this,"c")}k(Go,ae);var Xn={},Ko=null;function pr(){return Ko=Ko||new ft}Xn.La="serverreachability";function ys(c){ae.call(this,Xn.La,c)}k(ys,ae);function gr(c){const y=pr();Ye(y,new ys(y))}Xn.STAT_EVENT="statevent";function qu(c,y){ae.call(this,Xn.STAT_EVENT,c),this.stat=y}k(qu,ae);function at(c){const y=pr();Ye(y,new qu(y,c))}Xn.Ma="timingevent";function St(c,y){ae.call(this,Xn.Ma,c),this.size=y}k(St,ae);function vt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Yo(c,y,v,b,z,K){c.info(function(){if(c.g)if(K)for(var oe="",Ue=K.split("&"),wt=0;wt<Ue.length;wt++){var je=Ue[wt].split("=");if(1<je.length){var Pt=je[0];je=je[1];var Rt=Pt.split("_");oe=2<=Rt.length&&Rt[1]=="type"?oe+(Pt+"="+je+"&"):oe+(Pt+"=redacted&")}}else oe=null;else oe=K;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+y+`
`+v+`
`+oe})}function Uh(c,y,v,b,z,K,oe){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+y+`
`+v+`
`+K+" "+oe})}function yr(c,y,v,b){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ta(c,v)+(b?" "+b:"")})}function Hu(c,y){c.info(function(){return"TIMEOUT: "+y})}wn.prototype.info=function(){};function Ta(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var z=b[1];if(Array.isArray(z)&&!(1>z.length)){var K=z[0];if(K!="noop"&&K!="stop"&&K!="close")for(var oe=1;oe<z.length;oe++)z[oe]=""}}}}return Un(v)}catch{return y}}var vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Di={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wn;function Zn(){}k(Zn,Fo),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},Wn=new Zn;function rn(c,y,v,b){this.j=c,this.i=y,this.l=v,this.R=b||1,this.U=new ya(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mt}function mt(){this.i=null,this.g="",this.h=!1}var Qo={},vs={};function jn(c,y,v){c.L=1,c.v=Ra(dn(y)),c.m=v,c.P=!0,Ni(c,null)}function Ni(c,y){c.F=Date.now(),ba(c),c.A=dn(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),el(v.i,"t",b),c.C=0,v=c.j.J,c.h=new mt,c.g=sc(c.j,v?y:null,!c.m),0<c.O&&(c.M=new Lh(S(c.Y,c,c.g),c.O)),y=c.U,v=c.g,b=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(va[0]=z.toString()),z=va);for(var K=0;K<z.length;K++){var oe=zu(v,z[K],b||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),gr(),Yo(c.i,c.u,c.A,c.l,c.R,c.m)}rn.prototype.ca=function(c){c=c.target;const y=this.M;y&&On(c)==3?y.j():this.Y(c)},rn.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=On(this.g);var y=this.g.Ba();const zi=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Zu(this.g)))){this.J||Rt!=4||y==7||(y==8||0>=zi?gr(3):gr(2)),_r(this);var v=this.g.Z();this.X=v;t:if(Gu(this)){var b=Zu(this.g);c="";var z=b.length,K=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Jn(this);var oe="";break t}this.h.i=new m.TextDecoder}for(y=0;y<z;y++)this.h.h=!0,c+=this.h.i.decode(b[y],{stream:!(K&&y==z-1)});b.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,Uh(this.i,this.u,this.A,this.l,this.R,Rt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,wt=this.g;if((Ue=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ue)){var je=Ue;break t}}je=null}if(v=je)yr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,v);else{this.o=!1,this.s=3,at(12),jt(this),Jn(this);break e}}if(this.P){v=!0;let zt;for(;!this.J&&this.C<oe.length;)if(zt=Ku(this,oe),zt==vs){Rt==4&&(this.s=4,at(14),v=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Qo){this.s=4,at(15),yr(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else yr(this.i,this.l,zt,null),Aa(this,zt);if(Gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||oe.length!=0||this.h.h||(this.s=1,at(16),v=!1),this.o=this.o&&v,!v)yr(this.i,this.l,oe,"[Invalid Chunked Response]"),jt(this),Jn(this);else if(0<oe.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ma(Pt),Pt.M=!0,at(11))}}else yr(this.i,this.l,oe,null),Aa(this,oe);Rt==4&&jt(this),this.o&&!this.J&&(Rt==4?ic(this.j,this):(this.o=!1,ba(this)))}else qh(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),jt(this),Jn(this)}}}catch{}finally{}};function Gu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ku(c,y){var v=c.C,b=y.indexOf(`
`,v);return b==-1?vs:(v=Number(y.substring(v,b)),isNaN(v)?Qo:(b+=1,b+v>y.length?vs:(y=y.slice(b,b+v),c.C=b+v,y)))}rn.prototype.cancel=function(){this.J=!0,jt(this)};function ba(c){c.S=Date.now()+c.I,Yu(c,c.I)}function Yu(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=vt(S(c.ba,c),y)}function _r(c){c.B&&(m.clearTimeout(c.B),c.B=null)}rn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Hu(this.i,this.A),this.L!=2&&(gr(),at(17)),jt(this),this.s=2,Jn(this)):Yu(this,this.S-c)};function Jn(c){c.j.G==0||c.J||ic(c.j,c)}function jt(c){_r(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,_a(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Aa(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||$o(v.h,c))){if(!c.K&&$o(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)xs(v),Cs(v);else break e;al(v),at(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=vt(S(v.Za,v),6e3));if(1>=Es(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ji(v,11)}else if((c.K||v.g==c)&&xs(v),!J(y))for(z=v.Da.g.parse(y),y=0;y<z.length;y++){let je=z[y];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const Pt=je[3];Pt!=null&&(v.la=Pt,v.j.info("VER="+v.la));const Rt=je[4];Rt!=null&&(v.Aa=Rt,v.j.info("SVER="+v.Aa));const zi=je[5];zi!=null&&typeof zi=="number"&&0<zi&&(b=1.5*zi,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const zt=c.g;if(zt){const si=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(si){var K=b.h;K.g||si.indexOf("spdy")==-1&&si.indexOf("quic")==-1&&si.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Ts(K,K.h),K.h=null))}if(b.D){const ol=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ol&&(b.ya=ol,Xe(b.I,b.D,ol))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var oe=c;if(b.qa=ac(b,b.J?b.ia:null,b.W),oe.K){an(b.h,oe);var Ue=oe,wt=b.L;wt&&(Ue.I=wt),Ue.B&&(_r(Ue),ba(Ue)),b.g=oe}else tc(b);0<v.i.length&&Os(v)}else je[0]!="stop"&&je[0]!="close"||ji(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?ji(v,7):il(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}gr(4)}catch{}}var Qu=class{constructor(c,y){this.g=c,this.map=y}};function Pi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _s(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Es(c){return c.h?1:c.g?c.g.size:0}function $o(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ts(c,y){c.g?c.g.add(y):c.h=y}function an(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Pi.prototype.cancel=function(){if(this.i=Xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Xo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return Q(c.i)}function jh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var y=[],v=c.length,b=0;b<v;b++)y.push(c[b]);return y}y=[],v=0;for(b in c)y[v++]=c[b];return y}function bs(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const b in c)y[v++]=b;return y}}}function Wo(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=bs(c),b=jh(c),z=b.length,K=0;K<z;K++)y.call(void 0,b[K],v&&v[K],c)}var Sa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zh(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),z=null;if(0<=b){var K=c[v].substring(0,b);z=c[v].substring(b+1)}else K=c[v];y(K,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function _t(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof _t){this.h=c.h,wa(this,c.j),this.o=c.o,this.g=c.g,Er(this,c.s),this.l=c.l;var y=c.i,v=new ki;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Mi(this,v),this.m=c.m}else c&&(y=String(c).match(Sa))?(this.h=!1,wa(this,y[1]||"",!0),this.o=Rn(y[2]||""),this.g=Rn(y[3]||"",!0),Er(this,y[4]),this.l=Rn(y[5]||"",!0),Mi(this,y[6]||"",!0),this.m=Rn(y[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}_t.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Ia(y,Zo,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Ia(y,Zo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Ia(v,v.charAt(0)=="/"?Bh:Jo,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Ia(v,As)),c.join("")};function dn(c){return new _t(c)}function wa(c,y,v){c.j=v?Rn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Er(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Mi(c,y,v){y instanceof ki?(c.i=y,Xu(c.i,c.h)):(v||(y=Ia(y,Fh)),c.i=new ki(y,c.h))}function Xe(c,y,v){c.i.set(y,v)}function Ra(c){return Xe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Rn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ia(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,$u),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function $u(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Zo=/[#\/\?@]/g,Jo=/[#\?:]/g,Bh=/[#\?]/g,Fh=/[#\?@]/g,As=/#/g;function ki(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function In(c){c.g||(c.g=new Map,c.h=0,c.i&&zh(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}i=ki.prototype,i.add=function(c,y){In(this),this.i=null,c=ei(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Vi(c,y){In(c),y=ei(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Li(c,y){return In(c),y=ei(c,y),c.g.has(y)}i.forEach=function(c,y){In(this),this.g.forEach(function(v,b){v.forEach(function(z){c.call(y,z,b,this)},this)},this)},i.na=function(){In(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let b=0;b<y.length;b++){const z=c[b];for(let K=0;K<z.length;K++)v.push(y[b])}return v},i.V=function(c){In(this);let y=[];if(typeof c=="string")Li(this,c)&&(y=y.concat(this.g.get(ei(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},i.set=function(c,y){return In(this),this.i=null,c=ei(this,c),Li(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function el(c,y,v){Vi(c,y),0<v.length&&(c.i=null,c.g.set(ei(c,y),Q(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var b=y[v];const K=encodeURIComponent(String(b)),oe=this.V(b);for(b=0;b<oe.length;b++){var z=K;oe[b]!==""&&(z+="="+encodeURIComponent(String(oe[b]))),c.push(z)}}return this.i=c.join("&")};function ei(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Xu(c,y){y&&!c.j&&(In(c),c.i=null,c.g.forEach(function(v,b){var z=b.toLowerCase();b!=z&&(Vi(this,b),el(this,z,v))},c)),c.j=y}function Ca(c,y){const v=new wn;if(m.Image){const b=new Image;b.onload=M(Cn,v,"TestLoadImage: loaded",!0,y,b),b.onerror=M(Cn,v,"TestLoadImage: error",!1,y,b),b.onabort=M(Cn,v,"TestLoadImage: abort",!1,y,b),b.ontimeout=M(Cn,v,"TestLoadImage: timeout",!1,y,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else y(!1)}function zn(c,y){const v=new wn,b=new AbortController,z=setTimeout(()=>{b.abort(),Cn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:b.signal}).then(K=>{clearTimeout(z),K.ok?Cn(v,"TestPingServer: ok",!0,y):Cn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),Cn(v,"TestPingServer: error",!1,y)})}function Cn(c,y,v,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(v)}catch{}}function Oa(){this.g=new Ea}function ti(c,y,v){const b=v||"";try{Wo(c,function(z,K){let oe=z;g(z)&&(oe=Un(z)),y.push(b+K+"="+encodeURIComponent(oe))})}catch(z){throw y.push(b+"type="+encodeURIComponent("_badmap")),z}}function Tr(c){this.l=c.Ub||null,this.j=c.eb||!1}k(Tr,Fo),Tr.prototype.g=function(){return new Ui(this.l,this.j)},Tr.prototype.i=function(c){return function(){return c}}({});function Ui(c,y){ft.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ui,ft),i=Ui.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,ii(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function tl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?ni(this):ii(this),this.readyState==3&&tl(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,ni(this))},i.Qa=function(c){this.g&&(this.response=c,ni(this))},i.ga=function(){this.g&&ni(this)};function ni(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ii(c)}i.setRequestHeader=function(c,y){this.u.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function ii(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function nl(c){let y="";return ve(c,function(v,b){y+=b,y+=":",y+=v,y+=`\r
`}),y}function Nt(c,y,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=nl(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Xe(c,y,v))}function Ge(c){ft.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ge,ft);var Ss=/^https?$/i,xa=["POST","PUT"];i=Ge.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,y,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?qo(this.o):qo(Wn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(K){Wu(this,K);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)v.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const K of b.keys())v.set(K,b.get(K));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),z=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(xa,y,void 0))||b||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,oe]of v)this.g.setRequestHeader(K,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Da(this),this.u=!0,this.g.send(c),this.u=!1}catch(K){Wu(this,K)}};function Wu(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,ws(c),ri(c)}function ws(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),ri(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Rs(this):this.bb())},i.bb=function(){Rs(this)};function Rs(c){if(c.h&&typeof f<"u"&&(!c.v[1]||On(c)!=4||c.Z()!=2)){if(c.u&&On(c)==4)Qt(c.Ea,0,c);else if(Ye(c,"readystatechange"),On(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var b;if(b=oe===0){var z=String(c.D).match(Sa)[1]||null;!z&&m.self&&m.self.location&&(z=m.self.location.protocol.slice(0,-1)),b=!Ss.test(z?z.toLowerCase():"")}v=b}if(v)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var K=2<On(c)?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.Z()+"]",ws(c)}}finally{ri(c)}}}}function ri(c,y){if(c.g){Da(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ye(c,"ready");try{v.onreadystatechange=b}catch{}}}function Da(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function On(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),gs(y)}};function Zu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function qh(c){const y={};c=(c.g&&2<=On(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(J(c[b]))continue;var v=V(c[b]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=y[z]||[];y[z]=K,K.push(v)}N(y,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Na(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Is(c){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Na("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Na("baseRetryDelayMs",5e3,c),this.cb=Na("retryDelaySeedMs",1e4,c),this.Wa=Na("forwardChannelMaxRetries",2,c),this.wa=Na("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(c&&c.concurrentRequestLimit),this.Da=new Oa,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Is.prototype,i.la=8,i.G=1,i.connect=function(c,y,v,b){at(0),this.W=c,this.H=y||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=ac(this,null,this.W),Os(this)};function il(c){if(Ju(c),c.G==3){var y=c.U++,v=dn(c.I);if(Xe(v,"SID",c.K),Xe(v,"RID",y),Xe(v,"TYPE","terminate"),Pa(c,v),y=new rn(c,c.j,y),y.L=2,y.v=Ra(dn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=y.v,v=!0),v||(y.g=sc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ba(y)}rc(c)}function Cs(c){c.g&&(Ma(c),c.g.cancel(),c.g=null)}function Ju(c){Cs(c),c.u&&(m.clearTimeout(c.u),c.u=null),xs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Os(c){if(!_s(c.h)&&!c.s){c.s=!0;var y=c.Ga;ue||D(),ge||(ue(),ge=!0),qe.add(y,c),c.B=0}}function Hh(c,y){return Es(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=vt(S(c.Ga,c,y),sl(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new rn(this,this.j,c);let K=this.o;if(this.S&&(K?(K=R(K),x(K,this.S)):K=this.S),this.m!==null||this.O||(z.H=K,K=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=ec(this,z,y),v=dn(this.I),Xe(v,"RID",c),Xe(v,"CVER",22),this.D&&Xe(v,"X-HTTP-Session-Id",this.D),Pa(this,v),K&&(this.O?y="headers="+encodeURIComponent(String(nl(K)))+"&"+y:this.m&&Nt(v,this.m,K)),Ts(this.h,z),this.Ua&&Xe(v,"TYPE","init"),this.P?(Xe(v,"$req",y),Xe(v,"SID","null"),z.T=!0,jn(z,v,null)):jn(z,v,y),this.G=2}}else this.G==3&&(c?rl(this,c):this.i.length==0||_s(this.h)||rl(this))};function rl(c,y){var v;y?v=y.l:v=c.U++;const b=dn(c.I);Xe(b,"SID",c.K),Xe(b,"RID",v),Xe(b,"AID",c.T),Pa(c,b),c.m&&c.o&&Nt(b,c.m,c.o),v=new rn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=ec(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ts(c.h,v),jn(v,b,y)}function Pa(c,y){c.H&&ve(c.H,function(v,b){Xe(y,b,v)}),c.l&&Wo({},function(v,b){Xe(y,b,v)})}function ec(c,y,v){v=Math.min(c.i.length,v);var b=c.l?S(c.l.Na,c.l,c):null;e:{var z=c.i;let K=-1;for(;;){const oe=["count="+v];K==-1?0<v?(K=z[0].g,oe.push("ofs="+K)):K=0:oe.push("ofs="+K);let Ue=!0;for(let wt=0;wt<v;wt++){let je=z[wt].g;const Pt=z[wt].map;if(je-=K,0>je)K=Math.max(0,z[wt].g-100),Ue=!1;else try{ti(Pt,oe,"req"+je+"_")}catch{b&&b(Pt)}}if(Ue){b=oe.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,b}function tc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ue||D(),ge||(ue(),ge=!0),qe.add(y,c),c.v=0}}function al(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=vt(S(c.Fa,c),sl(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=vt(S(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,at(10),Cs(this),nc(this))};function Ma(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function nc(c){c.g=new rn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=dn(c.qa);Xe(y,"RID","rpc"),Xe(y,"SID",c.K),Xe(y,"AID",c.T),Xe(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&Xe(y,"TO",c.ja),Xe(y,"TYPE","xmlhttp"),Pa(c,y),c.m&&c.o&&Nt(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ra(dn(y)),v.m=null,v.P=!0,Ni(v,c)}i.Za=function(){this.C!=null&&(this.C=null,Cs(this),al(this),at(19))};function xs(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function ic(c,y){var v=null;if(c.g==y){xs(c),Ma(c),c.g=null;var b=2}else if($o(c.h,y))v=y.D,an(c.h,y),b=1;else return;if(c.G!=0){if(y.o)if(b==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var z=c.B;b=pr(),Ye(b,new St(b,v)),Os(c)}else tc(c);else if(z=y.s,z==3||z==0&&0<y.X||!(b==1&&Hh(c,y)||b==2&&al(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),z){case 1:ji(c,5);break;case 4:ji(c,10);break;case 3:ji(c,6);break;default:ji(c,2)}}}function sl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function ji(c,y){if(c.j.info("Error code "+y),y==2){var v=S(c.fb,c),b=c.Xa;const z=!b;b=new _t(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||wa(b,"https"),Ra(b),z?Ca(b.toString(),v):zn(b.toString(),v)}else at(2);c.G=0,c.l&&c.l.sa(y),rc(c),Ju(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function rc(c){if(c.G=0,c.ka=[],c.l){const y=Xo(c.h);(y.length!=0||c.i.length!=0)&&(L(c.ka,y),L(c.ka,c.i),c.h.i.length=0,Q(c.i),c.i.length=0),c.l.ra()}}function ac(c,y,v){var b=v instanceof _t?dn(v):new _t(v);if(b.g!="")y&&(b.g=y+"."+b.g),Er(b,b.s);else{var z=m.location;b=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;var K=new _t(null);b&&wa(K,b),y&&(K.g=y),z&&Er(K,z),v&&(K.l=v),b=K}return v=c.D,y=c.ya,v&&y&&Xe(b,v,y),Xe(b,"VER",c.la),Pa(c,b),b}function sc(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ge(new Tr({eb:v})):new Ge(c.pa),y.Ha(c.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function oc(){}i=oc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ds(){}Ds.prototype.g=function(c,y){return new sn(c,y)};function sn(c,y){ft.call(this),this.g=new Is(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!J(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!J(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new ai(this)}k(sn,ft),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){il(this.g)},sn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Un(c),c=v);y.i.push(new Qu(y.Ya++,c)),y.G==3&&Os(y)},sn.prototype.N=function(){this.g.l=null,delete this.j,il(this.g),delete this.g,sn.aa.N.call(this)};function lc(c){xi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}k(lc,xi);function uc(){Go.call(this),this.status=1}k(uc,Go);function ai(c){this.g=c}k(ai,oc),ai.prototype.ua=function(){Ye(this.g,"a")},ai.prototype.ta=function(c){Ye(this.g,new lc(c))},ai.prototype.sa=function(c){Ye(this.g,new uc)},ai.prototype.ra=function(){Ye(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,_A=function(){return new Ds},vA=function(){return pr()},yA=Xn,bp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,Cf=vr,Di.COMPLETE="complete",gA=Di,Ho.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Jl=Ho,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,pA=Ge}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});const gE="@firebase/firestore",yE="4.7.10";/**
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
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
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
 */let Po="11.5.0";/**
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
 */const is=new hg("@firebase/firestore");function oo(){return is.logLevel}function fe(i,...e){if(is.logLevel<=Ve.DEBUG){const t=e.map(Sg);is.debug(`Firestore (${Po}): ${i}`,...t)}}function lr(i,...e){if(is.logLevel<=Ve.ERROR){const t=e.map(Sg);is.error(`Firestore (${Po}): ${i}`,...t)}}function To(i,...e){if(is.logLevel<=Ve.WARN){const t=e.map(Sg);is.warn(`Firestore (${Po}): ${i}`,...t)}}function Sg(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function Se(i="Unexpected state"){const e=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: `+i;throw lr(e),new Error(e)}function Ke(i,e){i||Se()}function Ie(i,e){return i}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Ri{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class EA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ox{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Zt.UNAUTHENTICATED))}shutdown(){}}class xx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dx{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0);let a=this.i;const o=p=>this.i!==a?(a=this.i,t(p)):Promise.resolve();let u=new Jr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Jr,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Jr)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(a=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Ke(typeof a.accessToken=="string"),new EA(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new Zt(e)}}class Nx{constructor(e,t,a){this.l=e,this.h=t,this.P=a,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Px{constructor(e,t,a){this.l=e,this.h=t,this.P=a}getToken(){return Promise.resolve(new Nx(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mx{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Tn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0);const a=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>a(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new vE(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ke(typeof t.token=="string"),this.R=t.token,new vE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kx(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<i;a++)t[a]=Math.floor(256*Math.random());return t}/**
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
 */function TA(){return new TextEncoder}/**
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
 */class bA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=kx(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<t&&(a+=e.charAt(o[u]%62))}return a}}function xe(i,e){return i<e?-1:i>e?1:0}function Ap(i,e){let t=0;for(;t<i.length&&t<e.length;){const a=i.codePointAt(t),o=e.codePointAt(t);if(a!==o){if(a<128&&o<128)return xe(a,o);{const u=TA(),f=Vx(u.encode(_E(i,t)),u.encode(_E(e,t)));return f!==0?f:xe(a,o)}}t+=a>65535?2:1}return xe(i.length,e.length)}function _E(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function Vx(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return xe(i[t],e[t]);return xe(i.length,e.length)}function bo(i,e,t){return i.length===e.length&&i.every((a,o)=>t(a,e[o]))}/**
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
 */const EE=-62135596800,TE=1e6;class Ot{static now(){return Ot.fromMillis(Date.now())}static fromDate(e){return Ot.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor((e-1e3*t)*TE);return new Ot(t,a)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<EE)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TE}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-EE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ot(0,0))}static max(){return new Re(new Ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bE="__name__";class hi{constructor(e,t,a){t===void 0?t=0:t>e.length&&Se(),a===void 0?a=e.length-t:a>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(a=>{t.push(a)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let o=0;o<a;o++){const u=hi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return xe(e.length,t.length)}static compareSegments(e,t){const a=hi.isNumericId(e),o=hi.isNumericId(t);return a&&!o?-1:!a&&o?1:a&&o?hi.extractNumericId(e).compare(hi.extractNumericId(t)):Ap(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zr.fromString(e.substring(4,e.length-2))}}class it extends hi{construct(e,t,a){return new it(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new de(ne.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(o=>o.length>0))}return new it(t)}static emptyPath(){return new it([])}}const Lx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends hi{construct(e,t,a){return new Kt(e,t,a)}static isValidIdentifier(e){return Lx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bE}static keyField(){return new Kt([bE])}static fromServerFormat(e){const t=[];let a="",o=0;const u=()=>{if(a.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new de(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(a+=m,o++):(u(),o++)}if(u(),f)throw new de(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(t)}static emptyPath(){return new Kt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(it.fromString(e))}static fromName(e){return new ye(it.fromString(e).popFirst(5))}static empty(){return new ye(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new it(e.slice()))}}/**
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
 */const pu=-1;function Ux(i,e){const t=i.toTimestamp().seconds,a=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(a===1e9?new Ot(t+1,0):new Ot(t,a));return new na(o,ye.empty(),e)}function jx(i){return new na(i.readTime,i.key,pu)}class na{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new na(Re.min(),ye.empty(),pu)}static max(){return new na(Re.max(),ye.empty(),pu)}}function zx(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
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
 */const Bx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mo(i){if(i.code!==ne.FAILED_PRECONDITION||i.message!==Bx)throw i;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(a,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,a)=>{t(e)})}static reject(e){return new te((t,a)=>{a(e)})}static waitFor(e){return new te((t,a)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&t()},p=>a(p))}),f=!0,u===o&&t()})}static or(e){let t=te.resolve(!1);for(const a of e)t=t.next(o=>o?te.resolve(o):a());return t}static forEach(e,t){const a=[];return e.forEach((o,u)=>{a.push(t.call(this,o,u))}),this.waitFor(a)}static mapArray(e,t){return new te((a,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;t(e[g]).next(E=>{f[g]=E,++m,m===u&&a(f)},E=>o(E))}})}static doWhile(e,t){return new te((a,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):a()};u()})}}function qx(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ph{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=a=>this.oe(a),this._e=a=>t.writeSequenceNumber(a))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ph.ae=-1;/**
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
 */const wg=-1;function gh(i){return i==null}function Hf(i){return i===0&&1/i==-1/0}function Hx(i){return typeof i=="number"&&Number.isInteger(i)&&!Hf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const AA="";function Gx(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=AE(e)),e=Kx(i.get(t),e);return AE(e)}function Kx(i,e){let t=e;const a=i.length;for(let o=0;o<a;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case AA:t+="";break;default:t+=u}}return t}function AE(i){return i+AA+""}/**
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
 */function SE(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function cs(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function SA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Gt.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(a===0)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(e,a.key);if(o===0)return t+a.left.size;o<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){const e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mf(this.root,e,this.comparator,!1)}getReverseIterator(){return new mf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mf(this.root,e,this.comparator,!0)}}class mf{constructor(e,t,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?a(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,t,a,o,u){this.key=e,this.value=t,this.color=a??Gt.RED,this.left=o??Gt.EMPTY,this.right=u??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,o,u){return new Gt(e??this.key,t??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let o=this;const u=a(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,a),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Gt.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,a,o,u){return this}insert(e,t,a){return new Gt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let a;for(a=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wE(this.data.getIterator())}getIteratorFrom(e){return new wE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(a=>{t=t.add(a)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class wE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gn{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new Gn([])}unionWith(e){let t=new xt(Kt.comparator);for(const a of this.fields)t=t.add(a);for(const a of e)t=t.add(a);return new Gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(t,a)=>t.isEqual(a))}}/**
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
 */class wA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new wA("Invalid base64 string: "+u):u}}(e);return new Yt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const a=new Uint8Array(t.length);for(let o=0;o<t.length;o++)a[o]=t.charCodeAt(o);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const Yx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ia(i){if(Ke(!!i),typeof i=="string"){let e=0;const t=Yx.exec(i);if(Ke(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const a=new Date(i);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:yt(i.seconds),nanos:yt(i.nanos)}}function yt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ra(i){return typeof i=="string"?Yt.fromBase64String(i):Yt.fromUint8Array(i)}/**
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
 */const RA="server_timestamp",IA="__type__",CA="__previous_value__",OA="__local_write_time__";function Rg(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[IA])===null||t===void 0?void 0:t.stringValue)===RA}function yh(i){const e=i.mapValue.fields[CA];return Rg(e)?yh(e):e}function gu(i){const e=ia(i.mapValue.fields[OA].timestampValue);return new Ot(e.seconds,e.nanos)}/**
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
 */class Qx{constructor(e,t,a,o,u,f,m,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g}}const Gf="(default)";class yu{constructor(e,t){this.projectId=e,this.database=t||Gf}static empty(){return new yu("","")}get isDefaultDatabase(){return this.database===Gf}isEqual(e){return e instanceof yu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const xA="__type__",$x="__max__",pf={mapValue:{}},DA="__vector__",Kf="value";function aa(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Rg(i)?4:Wx(i)?9007199254740991:Xx(i)?10:11:Se()}function Ai(i,e){if(i===e)return!0;const t=aa(i);if(t!==aa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return gu(i).isEqual(gu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ia(o.timestampValue),m=ia(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return ra(o.bytesValue).isEqual(ra(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return yt(o.geoPointValue.latitude)===yt(u.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return yt(o.integerValue)===yt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=yt(o.doubleValue),m=yt(u.doubleValue);return f===m?Hf(f)===Hf(m):isNaN(f)&&isNaN(m)}return!1}(i,e);case 9:return bo(i.arrayValue.values||[],e.arrayValue.values||[],Ai);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(SE(f)!==SE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Ai(f[p],m[p])))return!1;return!0}(i,e);default:return Se()}}function vu(i,e){return(i.values||[]).find(t=>Ai(t,e))!==void 0}function Ao(i,e){if(i===e)return 0;const t=aa(i),a=aa(e);if(t!==a)return xe(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(u,f){const m=yt(u.integerValue||u.doubleValue),p=yt(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return RE(i.timestampValue,e.timestampValue);case 4:return RE(gu(i),gu(e));case 5:return Ap(i.stringValue,e.stringValue);case 6:return function(u,f){const m=ra(u),p=ra(f);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=xe(m[g],p[g]);if(E!==0)return E}return xe(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,f){const m=xe(yt(u.latitude),yt(f.latitude));return m!==0?m:xe(yt(u.longitude),yt(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return IE(i.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,g,E;const A=u.fields||{},S=f.fields||{},M=(m=A[Kf])===null||m===void 0?void 0:m.arrayValue,k=(p=S[Kf])===null||p===void 0?void 0:p.arrayValue,Q=xe(((g=M==null?void 0:M.values)===null||g===void 0?void 0:g.length)||0,((E=k==null?void 0:k.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:IE(M,k)}(i.mapValue,e.mapValue);case 11:return function(u,f){if(u===pf.mapValue&&f===pf.mapValue)return 0;if(u===pf.mapValue)return 1;if(f===pf.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let A=0;A<p.length&&A<E.length;++A){const S=Ap(p[A],E[A]);if(S!==0)return S;const M=Ao(m[p[A]],g[E[A]]);if(M!==0)return M}return xe(p.length,E.length)}(i.mapValue,e.mapValue);default:throw Se()}}function RE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=ia(i),a=ia(e),o=xe(t.seconds,a.seconds);return o!==0?o:xe(t.nanos,a.nanos)}function IE(i,e){const t=i.values||[],a=e.values||[];for(let o=0;o<t.length&&o<a.length;++o){const u=Ao(t[o],a[o]);if(u)return u}return xe(t.length,a.length)}function So(i){return Sp(i)}function Sp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const a=ia(t);return`time(${a.seconds},${a.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return ra(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ye.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let a="[",o=!0;for(const u of t.values||[])o?o=!1:a+=",",a+=Sp(u);return a+"]"}(i.arrayValue):"mapValue"in i?function(t){const a=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const f of a)u?u=!1:o+=",",o+=`${f}:${Sp(t.fields[f])}`;return o+"}"}(i.mapValue):Se()}function Of(i){switch(aa(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yh(i);return e?16+Of(e):16;case 5:return 2*i.stringValue.length;case 6:return ra(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((o,u)=>o+Of(u),0)}(i.arrayValue);case 10:case 11:return function(a){let o=0;return cs(a.fields,(u,f)=>{o+=u.length+Of(f)}),o}(i.mapValue);default:throw Se()}}function CE(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function wp(i){return!!i&&"integerValue"in i}function Ig(i){return!!i&&"arrayValue"in i}function OE(i){return!!i&&"nullValue"in i}function xE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function xf(i){return!!i&&"mapValue"in i}function Xx(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[xA])===null||t===void 0?void 0:t.stringValue)===DA}function ru(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return cs(i.mapValue.fields,(t,a)=>e.mapValue.fields[t]=ru(a)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ru(i.arrayValue.values[t]);return e}return Object.assign({},i)}function Wx(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===$x}/**
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
 */class Ln{constructor(e){this.value=e}static empty(){return new Ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!xf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ru(t)}setAll(e){let t=Kt.emptyPath(),a={},o=[];e.forEach((f,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,a,o),a={},o=[],t=m.popLast()}f?a[m.lastSegment()]=ru(f):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,a,o)}delete(e){const t=this.field(e.popLast());xf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ai(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let o=t.mapValue.fields[e.get(a)];xf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,a){cs(t,(o,u)=>e[o]=u);for(const o of a)delete e[o]}clone(){return new Ln(ru(this.value))}}function NA(i){const e=[];return cs(i.fields,(t,a)=>{const o=new Kt([t]);if(xf(a)){const u=NA(a.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new Gn(e)}/**
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
 */class Jt{constructor(e,t,a,o,u,f,m){this.key=e,this.documentType=t,this.version=a,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Jt(e,0,Re.min(),Re.min(),Re.min(),Ln.empty(),0)}static newFoundDocument(e,t,a,o){return new Jt(e,1,t,Re.min(),a,o,0)}static newNoDocument(e,t){return new Jt(e,2,t,Re.min(),Re.min(),Ln.empty(),0)}static newUnknownDocument(e,t){return new Jt(e,3,t,Re.min(),Re.min(),Ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yf{constructor(e,t){this.position=e,this.inclusive=t}}function DE(i,e,t){let a=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?a=ye.comparator(ye.fromName(f.referenceValue),t.key):a=Ao(f,t.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function NE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ai(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Qf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Zx(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class PA{}class At extends PA{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,a):new eD(e,t,a):t==="array-contains"?new iD(e,a):t==="in"?new rD(e,a):t==="not-in"?new aD(e,a):t==="array-contains-any"?new sD(e,a):new At(e,t,a)}static createKeyFieldInFilter(e,t,a){return t==="in"?new tD(e,a):new nD(e,a)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ao(t,this.value)):t!==null&&aa(this.value)===aa(t)&&this.matchesComparison(Ao(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends PA{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Qn(e,t)}matches(e){return MA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function MA(i){return i.op==="and"}function kA(i){return Jx(i)&&MA(i)}function Jx(i){for(const e of i.filters)if(e instanceof Qn)return!1;return!0}function Rp(i){if(i instanceof At)return i.field.canonicalString()+i.op.toString()+So(i.value);if(kA(i))return i.filters.map(e=>Rp(e)).join(",");{const e=i.filters.map(t=>Rp(t)).join(",");return`${i.op}(${e})`}}function VA(i,e){return i instanceof At?function(a,o){return o instanceof At&&a.op===o.op&&a.field.isEqual(o.field)&&Ai(a.value,o.value)}(i,e):i instanceof Qn?function(a,o){return o instanceof Qn&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce((u,f,m)=>u&&VA(f,o.filters[m]),!0):!1}(i,e):void Se()}function LA(i){return i instanceof At?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(i):i instanceof Qn?function(t){return t.op.toString()+" {"+t.getFilters().map(LA).join(" ,")+"}"}(i):"Filter"}class eD extends At{constructor(e,t,a){super(e,t,a),this.key=ye.fromName(a.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class tD extends At{constructor(e,t){super(e,"in",t),this.keys=UA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class nD extends At{constructor(e,t){super(e,"not-in",t),this.keys=UA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function UA(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(a=>ye.fromName(a.referenceValue))}class iD extends At{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ig(t)&&vu(t.arrayValue,this.value)}}class rD extends At{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vu(this.value.arrayValue,t)}}class aD extends At{constructor(e,t){super(e,"not-in",t)}matches(e){if(vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!vu(this.value.arrayValue,t)}}class sD extends At{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ig(t)||!t.arrayValue.values)&&t.arrayValue.values.some(a=>vu(this.value.arrayValue,a))}}/**
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
 */class oD{constructor(e,t=null,a=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function PE(i,e=null,t=[],a=[],o=null,u=null,f=null){return new oD(i,e,t,a,o,u,f)}function Cg(i){const e=Ie(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(a=>Rp(a)).join(","),t+="|ob:",t+=e.orderBy.map(a=>function(u){return u.field.canonicalString()+u.dir}(a)).join(","),gh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(a=>So(a)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(a=>So(a)).join(",")),e.le=t}return e.le}function Og(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!Zx(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!VA(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!NE(i.startAt,e.startAt)&&NE(i.endAt,e.endAt)}function Ip(i){return ye.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Pu{constructor(e,t=null,a=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function lD(i,e,t,a,o,u,f,m){return new Pu(i,e,t,a,o,u,f,m)}function jA(i){return new Pu(i)}function ME(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function zA(i){return i.collectionGroup!==null}function au(i){const e=Ie(i);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new xt(Kt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Qf(u,a))}),t.has(Kt.keyField().canonicalString())||e.he.push(new Qf(Kt.keyField(),a))}return e.he}function _i(i){const e=Ie(i);return e.Pe||(e.Pe=uD(e,au(i))),e.Pe}function uD(i,e){if(i.limitType==="F")return PE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Qf(o.field,u)});const t=i.endAt?new Yf(i.endAt.position,i.endAt.inclusive):null,a=i.startAt?new Yf(i.startAt.position,i.startAt.inclusive):null;return PE(i.path,i.collectionGroup,e,i.filters,i.limit,t,a)}}function Cp(i,e){const t=i.filters.concat([e]);return new Pu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Op(i,e,t){return new Pu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function vh(i,e){return Og(_i(i),_i(e))&&i.limitType===e.limitType}function BA(i){return`${Cg(_i(i))}|lt:${i.limitType}`}function lo(i){return`Query(target=${function(t){let a=t.path.canonicalString();return t.collectionGroup!==null&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map(o=>LA(o)).join(", ")}]`),gh(t.limit)||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(a+=", startAt: ",a+=t.startAt.inclusive?"b:":"a:",a+=t.startAt.position.map(o=>So(o)).join(",")),t.endAt&&(a+=", endAt: ",a+=t.endAt.inclusive?"a:":"b:",a+=t.endAt.position.map(o=>So(o)).join(",")),`Target(${a})`}(_i(i))}; limitType=${i.limitType})`}function _h(i,e){return e.isFoundDocument()&&function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):ye.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)}(i,e)&&function(a,o){for(const u of au(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(a,o){return!(a.startAt&&!function(f,m,p){const g=DE(f,m,p);return f.inclusive?g<=0:g<0}(a.startAt,au(a),o)||a.endAt&&!function(f,m,p){const g=DE(f,m,p);return f.inclusive?g>=0:g>0}(a.endAt,au(a),o))}(i,e)}function cD(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function FA(i){return(e,t)=>{let a=!1;for(const o of au(i)){const u=fD(o,e,t);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function fD(i,e,t){const a=i.field.isKeyField()?ye.comparator(e.key,t.key):function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?Ao(p,g):Se()}(i.field,e,t);switch(i.dir){case"asc":return a;case"desc":return-1*a;default:return Se()}}/**
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
 */class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const a=this.mapKeyFn(e),o=this.inner[a];if(o===void 0)return this.inner[a]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return a.length===1?delete this.inner[t]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(t,a)=>{for(const[o,u]of a)e(o,u)})}isEmpty(){return SA(this.inner)}size(){return this.innerSize}}/**
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
 */const hD=new ut(ye.comparator);function ur(){return hD}const qA=new ut(ye.comparator);function eu(...i){let e=qA;for(const t of i)e=e.insert(t.key,t);return e}function HA(i){let e=qA;return i.forEach((t,a)=>e=e.insert(t,a.overlayedDocument)),e}function Wa(){return su()}function GA(){return su()}function su(){return new fs(i=>i.toString(),(i,e)=>i.isEqual(e))}const dD=new ut(ye.comparator),mD=new xt(ye.comparator);function Le(...i){let e=mD;for(const t of i)e=e.add(t);return e}const pD=new xt(xe);function gD(){return pD}/**
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
 */function xg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hf(e)?"-0":e}}function KA(i){return{integerValue:""+i}}function yD(i,e){return Hx(e)?KA(e):xg(i,e)}/**
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
 */class Eh{constructor(){this._=void 0}}function vD(i,e,t){return i instanceof $f?function(o,u){const f={fields:{[IA]:{stringValue:RA},[OA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Rg(u)&&(u=yh(u)),u&&(f.fields[CA]=u),{mapValue:f}}(t,e):i instanceof _u?QA(i,e):i instanceof Eu?$A(i,e):function(o,u){const f=YA(o,u),m=kE(f)+kE(o.Ie);return wp(f)&&wp(o.Ie)?KA(m):xg(o.serializer,m)}(i,e)}function _D(i,e,t){return i instanceof _u?QA(i,e):i instanceof Eu?$A(i,e):t}function YA(i,e){return i instanceof Xf?function(a){return wp(a)||function(u){return!!u&&"doubleValue"in u}(a)}(e)?e:{integerValue:0}:null}class $f extends Eh{}class _u extends Eh{constructor(e){super(),this.elements=e}}function QA(i,e){const t=XA(e);for(const a of i.elements)t.some(o=>Ai(o,a))||t.push(a);return{arrayValue:{values:t}}}class Eu extends Eh{constructor(e){super(),this.elements=e}}function $A(i,e){let t=XA(e);for(const a of i.elements)t=t.filter(o=>!Ai(o,a));return{arrayValue:{values:t}}}class Xf extends Eh{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function kE(i){return yt(i.integerValue||i.doubleValue)}function XA(i){return Ig(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function ED(i,e){return i.field.isEqual(e.field)&&function(a,o){return a instanceof _u&&o instanceof _u||a instanceof Eu&&o instanceof Eu?bo(a.elements,o.elements,Ai):a instanceof Xf&&o instanceof Xf?Ai(a.Ie,o.Ie):a instanceof $f&&o instanceof $f}(i.transform,e.transform)}class TD{constructor(e,t){this.version=e,this.transformResults=t}}class Ei{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ei}static exists(e){return new Ei(void 0,e)}static updateTime(e){return new Ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Df(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Th{}function WA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new JA(i.key,Ei.none()):new Mu(i.key,i.data,Ei.none());{const t=i.data,a=Ln.empty();let o=new xt(Kt.comparator);for(let u of e.fields)if(!o.has(u)){let f=t.field(u);f===null&&u.length>1&&(u=u.popLast(),f=t.field(u)),f===null?a.delete(u):a.set(u,f),o=o.add(u)}return new hs(i.key,a,new Gn(o.toArray()),Ei.none())}}function bD(i,e,t){i instanceof Mu?function(o,u,f){const m=o.value.clone(),p=LE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(i,e,t):i instanceof hs?function(o,u,f){if(!Df(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=LE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(ZA(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(i,e,t):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function ou(i,e,t,a){return i instanceof Mu?function(u,f,m,p){if(!Df(u.precondition,f))return m;const g=u.value.clone(),E=UE(u.fieldTransforms,p,f);return g.setAll(E),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(i,e,t,a):i instanceof hs?function(u,f,m,p){if(!Df(u.precondition,f))return m;const g=UE(u.fieldTransforms,p,f),E=f.data;return E.setAll(ZA(u)),E.setAll(g),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,a):function(u,f,m){return Df(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(i,e,t)}function AD(i,e){let t=null;for(const a of i.fieldTransforms){const o=e.data.field(a.field),u=YA(a.transform,o||null);u!=null&&(t===null&&(t=Ln.empty()),t.set(a.field,u))}return t||null}function VE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&bo(a,o,(u,f)=>ED(u,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Mu extends Th{constructor(e,t,a,o=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class hs extends Th{constructor(e,t,a,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function ZA(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const a=i.data.field(t);e.set(t,a)}}),e}function LE(i,e,t){const a=new Map;Ke(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);a.set(u.field,_D(f,m,t[o]))}return a}function UE(i,e,t){const a=new Map;for(const o of i){const u=o.transform,f=t.data.field(o.field);a.set(o.field,vD(u,f,e))}return a}class JA extends Th{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SD extends Th{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wD{constructor(e,t,a,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&bD(u,e,a[o])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=ou(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=ou(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=GA();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=t.has(o.key)?null:m;const p=WA(f,m);p!==null&&a.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Re.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(t,a)=>VE(t,a))&&bo(this.baseMutations,e.baseMutations,(t,a)=>VE(t,a))}}class Dg{constructor(e,t,a,o){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=o}static from(e,t,a){Ke(e.mutations.length===a.length);let o=function(){return dD}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,a[f].version);return new Dg(e,t,a,o)}}/**
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
 */class RD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ID{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var bt,Be;function CD(i){switch(i){case ne.OK:return Se();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Se()}}function eS(i){if(i===void 0)return lr("GRPC error has no .code"),ne.UNKNOWN;switch(i){case bt.OK:return ne.OK;case bt.CANCELLED:return ne.CANCELLED;case bt.UNKNOWN:return ne.UNKNOWN;case bt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case bt.INTERNAL:return ne.INTERNAL;case bt.UNAVAILABLE:return ne.UNAVAILABLE;case bt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case bt.NOT_FOUND:return ne.NOT_FOUND;case bt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case bt.ABORTED:return ne.ABORTED;case bt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case bt.DATA_LOSS:return ne.DATA_LOSS;default:return Se()}}(Be=bt||(bt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const OD=new Zr([4294967295,4294967295],0);function jE(i){const e=TA().encode(i),t=new mA;return t.update(e),new Uint8Array(t.digest())}function zE(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),a=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Zr([t,a],0),new Zr([o,u],0)]}class Ng{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new tu(`Invalid padding: ${t}`);if(a<0)throw new tu(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new tu(`Invalid hash count: ${a}`);if(e.length===0&&t!==0)throw new tu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Zr.fromNumber(this.Ee)}Ae(e,t,a){let o=e.add(t.multiply(Zr.fromNumber(a)));return o.compare(OD)===1&&(o=new Zr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=jE(e),[a,o]=zE(t);for(let u=0;u<this.hashCount;u++){const f=this.Ae(a,o,u);if(!this.Re(f))return!1}return!0}static create(e,t,a){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Ng(u,o,t);return a.forEach(m=>f.insert(m)),f}insert(e){if(this.Ee===0)return;const t=jE(e),[a,o]=zE(t);for(let u=0;u<this.hashCount;u++){const f=this.Ae(a,o,u);this.Ve(f)}}Ve(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class tu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class bh{constructor(e,t,a,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const o=new Map;return o.set(e,ku.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new bh(Re.min(),o,new ut(xe),ur(),Le())}}class ku{constructor(e,t,a,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new ku(a,t,Le(),Le(),Le())}}/**
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
 */class Nf{constructor(e,t,a,o){this.me=e,this.removedTargetIds=t,this.key=a,this.fe=o}}class tS{constructor(e,t){this.targetId=e,this.ge=t}}class nS{constructor(e,t,a=Yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=o}}class BE{constructor(){this.pe=0,this.ye=FE(),this.we=Yt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Le(),t=Le(),a=Le();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:a=a.add(o);break;default:Se()}}),new ku(this.we,this.Se,e,t,a)}Me(){this.be=!1,this.ye=FE()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ke(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class xD{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ur(),this.$e=gf(),this.Ue=gf(),this.Ke=new ut(xe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const a=this.He(t);switch(e.state){case 0:this.Je(t)&&a.Ce(e.resumeToken);break;case 1:a.Be(),a.De||a.Me(),a.Ce(e.resumeToken);break;case 2:a.Be(),a.De||this.removeTarget(t);break;case 3:this.Je(t)&&(a.Le(),a.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),a.Ce(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((a,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,a=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(Ip(u))if(a===0){const f=new ye(u.path);this.ze(t,f,Jt.newNoDocument(f,Re.min()))}else Ke(a===1);else{const f=this.et(t);if(f!==a){const m=this.tt(e),p=m?this.nt(m,e,f):1;if(p!==0){this.Ye(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=t;let f,m;try{f=ra(a).toUint8Array()}catch(p){if(p instanceof wA)return To("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Ng(f,o,u)}catch(p){return To(p instanceof tu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(e,t,a){return t.ge.count===a-this.st(e,t.targetId)?0:2}st(e,t){const a=this.ke.getRemoteKeysForTarget(t);let o=0;return a.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Ip(m.target)){const p=new ye(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Jt.newNoDocument(p,e))}u.ve&&(t.set(f,u.Fe()),u.Me())}});let a=Le();this.Ue.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const g=this.Xe(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(a=a.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(e));const o=new bh(e,t,this.Ke,this.Qe,a);return this.Qe=ur(),this.$e=gf(),this.Ue=gf(),this.Ke=new ut(xe),o}Ge(e,t){if(!this.Je(e))return;const a=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,a),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,a){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),a&&(this.Qe=this.Qe.insert(t,a))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new BE,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new xt(xe),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new xt(xe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new BE),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function gf(){return new ut(ye.comparator)}function FE(){return new ut(ye.comparator)}const DD={asc:"ASCENDING",desc:"DESCENDING"},ND={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PD={and:"AND",or:"OR"};class MD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xp(i,e){return i.useProto3Json||gh(e)?e:{value:e}}function Wf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iS(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function kD(i,e){return Wf(i,e.toTimestamp())}function Ti(i){return Ke(!!i),Re.fromTimestamp(function(t){const a=ia(t);return new Ot(a.seconds,a.nanos)}(i))}function Pg(i,e){return Dp(i,e).canonicalString()}function Dp(i,e){const t=function(o){return new it(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function rS(i){const e=it.fromString(i);return Ke(uS(e)),e}function Np(i,e){return Pg(i.databaseId,e.path)}function Xm(i,e){const t=rS(e);if(t.get(1)!==i.databaseId.projectId)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ye(sS(t))}function aS(i,e){return Pg(i.databaseId,e)}function VD(i){const e=rS(i);return e.length===4?it.emptyPath():sS(e)}function Pp(i){return new it(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function sS(i){return Ke(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function qE(i,e,t){return{name:Np(i,e),fields:t.value.mapValue.fields}}function LD(i,e){let t;if("targetChange"in e){e.targetChange;const a=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ke(E===void 0||typeof E=="string"),Yt.fromBase64String(E||"")):(Ke(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Yt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(g){const E=g.code===void 0?ne.UNKNOWN:eS(g.code);return new de(E,g.message||"")}(f);t=new nS(a,o,u,m||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const o=Xm(i,a.document.name),u=Ti(a.document.updateTime),f=a.document.createTime?Ti(a.document.createTime):Re.min(),m=new Ln({mapValue:{fields:a.document.fields}}),p=Jt.newFoundDocument(o,u,f,m),g=a.targetIds||[],E=a.removedTargetIds||[];t=new Nf(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const o=Xm(i,a.document),u=a.readTime?Ti(a.readTime):Re.min(),f=Jt.newNoDocument(o,u),m=a.removedTargetIds||[];t=new Nf([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const o=Xm(i,a.document),u=a.removedTargetIds||[];t=new Nf([],u,o,null)}else{if(!("filter"in e))return Se();{e.filter;const a=e.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,f=new ID(o,u),m=a.targetId;t=new tS(m,f)}}return t}function UD(i,e){let t;if(e instanceof Mu)t={update:qE(i,e.key,e.value)};else if(e instanceof JA)t={delete:Np(i,e.key)};else if(e instanceof hs)t={update:qE(i,e.key,e.data),updateMask:YD(e.fieldMask)};else{if(!(e instanceof SD))return Se();t={verify:Np(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(a=>function(u,f){const m=f.transform;if(m instanceof $f)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof _u)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Eu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Xf)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw Se()}(0,a))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:kD(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Se()}(i,e.precondition)),t}function jD(i,e){return i&&i.length>0?(Ke(e!==void 0),i.map(t=>function(o,u){let f=o.updateTime?Ti(o.updateTime):Ti(u);return f.isEqual(Re.min())&&(f=Ti(u)),new TD(f,o.transformResults||[])}(t,e))):[]}function zD(i,e){return{documents:[aS(i,e.path)]}}function BD(i,e){const t={structuredQuery:{}},a=e.path;let o;e.collectionGroup!==null?(o=a,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=a.popLast(),t.structuredQuery.from=[{collectionId:a.lastSegment()}]),t.parent=aS(i,o);const u=function(g){if(g.length!==0)return lS(Qn.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const f=function(g){if(g.length!==0)return g.map(E=>function(S){return{field:uo(S.field),direction:HD(S.dir)}}(E))}(e.orderBy);f&&(t.structuredQuery.orderBy=f);const m=xp(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:o}}function FD(i){let e=VD(i.parent);const t=i.structuredQuery,a=t.from?t.from.length:0;let o=null;if(a>0){Ke(a===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(A){const S=oS(A);return S instanceof Qn&&kA(S)?S.getFilters():[S]}(t.where));let f=[];t.orderBy&&(f=function(A){return A.map(S=>function(k){return new Qf(co(k.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(t.orderBy));let m=null;t.limit&&(m=function(A){let S;return S=typeof A=="object"?A.value:A,gh(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(A){const S=!!A.before,M=A.values||[];return new Yf(M,S)}(t.startAt));let g=null;return t.endAt&&(g=function(A){const S=!A.before,M=A.values||[];return new Yf(M,S)}(t.endAt)),lD(e,o,f,u,m,"F",p,g)}function qD(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function oS(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const a=co(t.unaryFilter.field);return At.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return At.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=co(t.unaryFilter.field);return At.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=co(t.unaryFilter.field);return At.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(i):i.fieldFilter!==void 0?function(t){return At.create(co(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Qn.create(t.compositeFilter.filters.map(a=>oS(a)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(i):Se()}function HD(i){return DD[i]}function GD(i){return ND[i]}function KD(i){return PD[i]}function uo(i){return{fieldPath:i.canonicalString()}}function co(i){return Kt.fromServerFormat(i.fieldPath)}function lS(i){return i instanceof At?function(t){if(t.op==="=="){if(xE(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(OE(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xE(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(OE(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:GD(t.op),value:t.value}}}(i):i instanceof Qn?function(t){const a=t.getFilters().map(o=>lS(o));return a.length===1?a[0]:{compositeFilter:{op:KD(t.op),filters:a}}}(i):Se()}function YD(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function uS(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class $r{constructor(e,t,a,o,u=Re.min(),f=Re.min(),m=Yt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class QD{constructor(e){this.Tt=e}}function $D(i){const e=FD({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Op(e,e.limit,"L"):e}/**
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
 */class XD{constructor(){this.Tn=new WD}addToCollectionParentIndex(e,t){return this.Tn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(na.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(na.min())}updateCollectionGroup(e,t,a){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class WD{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),o=this.index[t]||new xt(it.comparator),u=!o.has(a);return this.index[t]=o.add(a),u}has(e){const t=e.lastSegment(),a=e.popLast(),o=this.index[t];return o&&o.has(a)}getEntries(e){return(this.index[e]||new xt(it.comparator)).toArray()}}/**
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
 */const HE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cS=41943040;class fn{static withCacheSize(e){return new fn(e,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}}/**
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
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(cS,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
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
 */class wo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new wo(0)}static Kn(){return new wo(-1)}}/**
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
 */const GE="LruGarbageCollector",ZD=1048576;function KE([i,e],[t,a]){const o=xe(i,t);return o===0?xe(e,a):o}class JD{constructor(e){this.Hn=e,this.buffer=new xt(KE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const a=this.buffer.last();KE(t,a)<0&&(this.buffer=this.buffer.delete(a).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eN{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){fe(GE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?fe(GE,"Ignoring IndexedDB error during garbage collection: ",t):await Mo(t)}await this.er(3e5)})}}class tN{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(a=>Math.floor(t/100*a))}nthSequenceNumber(e,t){if(t===0)return te.resolve(ph.ae);const a=new JD(t);return this.tr.forEachTarget(e,o=>a.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>a.Zn(o))).next(()=>a.maxValue)}removeTargets(e,t,a){return this.tr.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(HE)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),HE):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let a,o,u,f,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,f=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(a=A,m=Date.now(),this.removeTargets(e,a,t))).next(A=>(u=A,p=Date.now(),this.removeOrphanedDocuments(e,a))).next(A=>(g=Date.now(),oo()<=Ve.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${A} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function nN(i,e){return new tN(i,e)}/**
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
 */class iN{constructor(){this.changes=new fs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return a!==void 0?te.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class rN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class aN{constructor(e,t,a,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=o}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(a=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(a!==null&&ou(a.mutation,o,Gn.empty(),Ot.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.getLocalViewOfDocuments(e,a,Le()).next(()=>a))}getLocalViewOfDocuments(e,t,a=Le()){const o=Wa();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,a).next(u=>{let f=eu();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const a=Wa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,Le()))}populateOverlays(e,t,a){const o=[];return a.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{t.set(f,m)})})}computeViews(e,t,a,o){let u=ur();const f=su(),m=function(){return su()}();return t.forEach((p,g)=>{const E=a.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof hs)?u=u.insert(g.key,g):E!==void 0?(f.set(g.key,E.mutation.getFieldMask()),ou(E.mutation,g,E.mutation.getFieldMask(),Ot.now())):f.set(g.key,Gn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((g,E)=>f.set(g,E)),t.forEach((g,E)=>{var A;return m.set(g,new rN(E,(A=f.get(g))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(e,t){const a=su();let o=new ut((f,m)=>f-m),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const m of f)m.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let E=a.get(p)||Gn.empty();E=m.applyToLocalView(g,E),a.set(p,E);const A=(o.get(m.batchId)||Le()).add(p);o=o.insert(m.batchId,A)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,A=GA();E.forEach(S=>{if(!u.has(S)){const M=WA(t.get(S),a.get(S));M!==null&&A.set(S,M),u=u.add(S)}}),f.push(this.documentOverlayCache.saveOverlays(e,g,A))}return te.waitFor(f)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,t,a,o){return function(f){return ye.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a,o):this.getDocumentsMatchingCollectionQuery(e,t,a,o)}getNextDocuments(e,t,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,o-u.size):te.resolve(Wa());let m=pu,p=u;return f.next(g=>te.forEach(g,(E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?te.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{p=p.insert(E,S)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,p,g,Le())).next(E=>({batchId:m,changes:HA(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(a=>{let o=eu();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,a,o){const u=t.collectionGroup;let f=eu();return this.indexManager.getCollectionParents(e,u).next(m=>te.forEach(m,p=>{const g=function(A,S){return new Pu(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,a,o).next(E=>{E.forEach((A,S)=>{f=f.insert(A,S)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,u,o))).next(f=>{u.forEach((p,g)=>{const E=g.getKey();f.get(E)===null&&(f=f.insert(E,Jt.newInvalidDocument(E)))});let m=eu();return f.forEach((p,g)=>{const E=u.get(p);E!==void 0&&ou(E.mutation,g,Gn.empty(),Ot.now()),_h(t,g)&&(m=m.insert(p,g))}),m})}}/**
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
 */class sN{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return te.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Ti(o.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:$D(o.bundledQuery),readTime:Ti(o.readTime)}}(t)),te.resolve()}}/**
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
 */class oN{constructor(){this.overlays=new ut(ye.comparator),this.Rr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const a=Wa();return te.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&a.set(o,u)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((o,u)=>{this.Et(e,t,u)}),te.resolve()}removeOverlaysForBatchId(e,t,a){const o=this.Rr.get(a);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(a)),te.resolve()}getOverlaysForCollection(e,t,a){const o=Wa(),u=t.length+1,f=new ye(t.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return te.resolve(o)}getOverlaysForCollectionGroup(e,t,a,o){let u=new ut((g,E)=>g-E);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>a){let E=u.get(g.largestBatchId);E===null&&(E=Wa(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=Wa(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>m.set(g,E)),!(m.size()>=o)););return te.resolve(m)}Et(e,t,a){const o=this.overlays.get(a.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(a.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(a.key,new RD(t,a));let u=this.Rr.get(t);u===void 0&&(u=Le(),this.Rr.set(t,u)),this.Rr.set(t,u.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
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
 */class Mg{constructor(){this.Vr=new xt(Lt.mr),this.gr=new xt(Lt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const a=new Lt(e,t);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(e,t){e.forEach(a=>this.addReference(a,t))}removeReference(e,t){this.wr(new Lt(e,t))}Sr(e,t){e.forEach(a=>this.removeReference(a,t))}br(e){const t=new ye(new it([])),a=new Lt(t,e),o=new Lt(t,e+1),u=[];return this.gr.forEachInRange([a,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ye(new it([])),a=new Lt(t,e),o=new Lt(t,e+1);let u=Le();return this.gr.forEachInRange([a,o],f=>{u=u.add(f.key)}),u}containsKey(e){const t=new Lt(e,0),a=this.Vr.firstAfterOrEqual(t);return a!==null&&e.isEqual(a.key)}}class Lt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ye.comparator(e.key,t.key)||xe(e.Cr,t.Cr)}static pr(e,t){return xe(e.Cr,t.Cr)||ye.comparator(e.key,t.key)}}/**
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
 */class uN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new xt(Lt.mr)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,a,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new wD(u,t,a,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new Lt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return te.resolve(f)}lookupMutationBatch(e,t){return te.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,o=this.Nr(a),u=o<0?0:o;return te.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?wg:this.Fr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new Lt(t,0),o=new Lt(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([a,o],f=>{const m=this.Or(f.Cr);u.push(m)}),te.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new xt(xe);return t.forEach(o=>{const u=new Lt(o,0),f=new Lt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{a=a.add(m.Cr)})}),te.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,o=a.length+1;let u=a;ye.isDocumentKey(u)||(u=u.child(""));const f=new Lt(new ye(u),0);let m=new xt(xe);return this.Mr.forEachWhile(p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Cr)),!0)},f),te.resolve(this.Br(m))}Br(e){const t=[];return e.forEach(a=>{const o=this.Or(a);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ke(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return te.forEach(t.mutations,o=>{const u=new Lt(o.key,t.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=a})}qn(e){}containsKey(e,t){const a=new Lt(t,0),o=this.Mr.firstAfterOrEqual(a);return te.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cN{constructor(e){this.kr=e,this.docs=function(){return new ut(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,o=this.docs.get(a),u=o?o.size:0,f=this.kr(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return te.resolve(a?a.document.mutableCopy():Jt.newInvalidDocument(t))}getEntries(e,t){let a=ur();return t.forEach(o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():Jt.newInvalidDocument(o))}),te.resolve(a)}getDocumentsMatchingQuery(e,t,a,o){let u=ur();const f=t.path,m=new ye(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||zx(jx(E),a)<=0||(o.has(E.key)||_h(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return te.resolve(u)}getAllFromCollectionGroup(e,t,a,o){Se()}qr(e,t){return te.forEach(this.docs,a=>t(a))}newChangeBuffer(e){return new fN(this)}getSize(e){return te.resolve(this.size)}}class fN extends iN{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((a,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(a)}),te.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class hN{constructor(e){this.persistence=e,this.Qr=new fs(t=>Cg(t),Og),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Mg,this.targetCount=0,this.Kr=wo.Un()}forEachTarget(e,t){return this.Qr.forEach((a,o)=>t(o)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.$r&&(this.$r=t),te.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new wo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.zn(t),te.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,a){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=t&&a.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),te.waitFor(u).next(()=>o)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const a=this.Qr.get(t)||null;return te.resolve(a)}addMatchingKeys(e,t,a){return this.Ur.yr(t,a),te.resolve()}removeMatchingKeys(e,t,a){this.Ur.Sr(t,a);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),te.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),te.resolve()}getMatchingKeysForTargetId(e,t){const a=this.Ur.vr(t);return te.resolve(a)}containsKey(e,t){return te.resolve(this.Ur.containsKey(t))}}/**
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
 */class fS{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new ph(0),this.zr=!1,this.zr=!0,this.jr=new lN,this.referenceDelegate=e(this),this.Hr=new hN(this),this.indexManager=new XD,this.remoteDocumentCache=function(o){return new cN(o)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new QD(t),this.Yr=new sN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.Wr[e.toKey()];return a||(a=new uN(t,this.referenceDelegate),this.Wr[e.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,a){fe("MemoryPersistence","Starting transaction:",e);const o=new dN(this.Gr.next());return this.referenceDelegate.Zr(),a(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return te.or(Object.values(this.Wr).map(a=>()=>a.containsKey(e,t)))}}class dN extends Fx{constructor(e){super(),this.currentSequenceNumber=e}}class kg{constructor(e){this.persistence=e,this.ti=new Mg,this.ni=null}static ri(e){return new kg(e)}get ii(){if(this.ni)return this.ni;throw Se()}addReference(e,t,a){return this.ti.addReference(a,t),this.ii.delete(a.toString()),te.resolve()}removeReference(e,t,a){return this.ti.removeReference(a,t),this.ii.add(a.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),te.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>a.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.ii,a=>{const o=ye.fromPath(a);return this.si(e,o).next(u=>{u||t.removeEntry(o,Re.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(a=>{a?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return te.or([()=>te.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Zf{constructor(e,t){this.persistence=e,this.oi=new fs(a=>Gx(a.path),(a,o)=>a.isEqual(o)),this.garbageCollector=nN(this,t)}static ri(e,t){return new Zf(e,t)}Zr(){}Xr(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>t.next(o=>a+o))}sr(e){let t=0;return this.rr(e,a=>{t++}).next(()=>t)}rr(e,t){return te.forEach(this.oi,(a,o)=>this.ar(e,a,o).next(u=>u?te.resolve():t(o)))}removeTargets(e,t,a){return this.persistence.getTargetCache().removeTargets(e,t,a)}removeOrphanedDocuments(e,t){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,t).next(m=>{m||(a++,u.removeEntry(f,Re.min()))})).next(()=>u.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const a=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,t,a){return this.oi.set(a,e.currentSequenceNumber),te.resolve()}removeReference(e,t,a){return this.oi.set(a,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Of(e.data.value)),t}ar(e,t,a){return te.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return te.resolve(o!==void 0&&o>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Vg{constructor(e,t,a,o){this.targetId=e,this.fromCache=t,this.Hi=a,this.Ji=o}static Yi(e,t){let a=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Vg(e,t.fromCache,a,o)}}/**
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
 */class mN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class pN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return XI()?8:qx(en())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,a,o){const u={result:null};return this.rs(e,t).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,t,o,a).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new mN;return this._s(e,t,f).next(m=>{if(u.result=m,this.Xi)return this.us(e,t,f,m.size)})}).next(()=>u.result)}us(e,t,a,o){return a.documentReadCount<this.es?(oo()<=Ve.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),te.resolve()):(oo()<=Ve.DEBUG&&fe("QueryEngine","Query:",lo(t),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.ts*o?(oo()<=Ve.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(t))):te.resolve())}rs(e,t){if(ME(t))return te.resolve(null);let a=_i(t);return this.indexManager.getIndexType(e,a).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Op(t,null,"F"),a=_i(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next(u=>{const f=Le(...u);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,a).next(p=>{const g=this.cs(t,m);return this.ls(t,g,f,p.readTime)?this.rs(e,Op(t,null,"F")):this.hs(e,g,t,p)}))})))}ss(e,t,a,o){return ME(t)||o.isEqual(Re.min())?te.resolve(null):this.ns.getDocuments(e,a).next(u=>{const f=this.cs(t,u);return this.ls(t,f,a,o)?te.resolve(null):(oo()<=Ve.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.hs(e,f,t,Ux(o,pu)).next(m=>m))})}cs(e,t){let a=new xt(FA(e));return t.forEach((o,u)=>{_h(e,u)&&(a=a.add(u))}),a}ls(e,t,a,o){if(e.limit===null)return!1;if(a.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,a){return oo()<=Ve.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",lo(t)),this.ns.getDocumentsMatchingQuery(e,t,na.min(),a)}hs(e,t,a,o){return this.ns.getDocumentsMatchingQuery(e,a,o).next(u=>(t.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const Lg="LocalStore",gN=3e8;class yN{constructor(e,t,a,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new ut(xe),this.Is=new fs(u=>Cg(u),Og),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(a)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aN(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function vN(i,e,t,a){return new yN(i,e,t,a)}async function hS(i,e){const t=Ie(i);return await t.persistence.runTransaction("Handle user change","readonly",a=>{let o;return t.mutationQueue.getAllMutationBatches(a).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(a))).next(u=>{const f=[],m=[];let p=Le();for(const g of o){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(a,p).next(g=>({Rs:g,removedBatchIds:f,addedBatchIds:m}))})})}function _N(i,e){const t=Ie(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,g,E){const A=g.batch,S=A.keys();let M=te.resolve();return S.forEach(k=>{M=M.next(()=>E.getEntry(p,k)).next(Q=>{const L=g.docVersions.get(k);Ke(L!==null),Q.version.compareTo(L)<0&&(A.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),E.addEntry(Q)))})}),M.next(()=>m.mutationQueue.removeMutationBatch(p,A))}(t,a,e,u).next(()=>u.apply(a)).next(()=>t.mutationQueue.performConsistencyCheck(a)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(a,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(m){let p=Le();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(a,o))})}function dS(i){const e=Ie(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function EN(i,e){const t=Ie(i),a=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const m=[];e.targetChanges.forEach((E,A)=>{const S=o.get(A);if(!S)return;m.push(t.Hr.removeMatchingKeys(u,E.removedDocuments,A).next(()=>t.Hr.addMatchingKeys(u,E.addedDocuments,A)));let M=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?M=M.withResumeToken(Yt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(E.resumeToken,a)),o=o.insert(A,M),function(Q,L,B){return Q.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=gN?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(S,M,E)&&m.push(t.Hr.updateTargetData(u,M))});let p=ur(),g=Le();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(TN(u,f,e.documentUpdates).next(E=>{p=E.Vs,g=E.fs})),!a.isEqual(Re.min())){const E=t.Hr.getLastRemoteSnapshotVersion(u).next(A=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,a));m.push(E)}return te.waitFor(m).next(()=>f.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,p,g)).next(()=>p)}).then(u=>(t.Ts=o,u))}function TN(i,e,t){let a=Le(),o=Le();return t.forEach(u=>a=a.add(u)),e.getEntries(i,a).next(u=>{let f=ur();return t.forEach((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):fe(Lg,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function bN(i,e){const t=Ie(i);return t.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=wg),t.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function AN(i,e){const t=Ie(i);return t.persistence.runTransaction("Allocate target","readwrite",a=>{let o;return t.Hr.getTargetData(a,e).next(u=>u?(o=u,te.resolve(o)):t.Hr.allocateTargetId(a).next(f=>(o=new $r(e,f,"TargetPurposeListen",a.currentSequenceNumber),t.Hr.addTargetData(a,o).next(()=>o))))}).then(a=>{const o=t.Ts.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(a.targetId,a),t.Is.set(e,a.targetId)),a})}async function Mp(i,e,t){const a=Ie(i),o=a.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await a.persistence.runTransaction("Release target",u,f=>a.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ko(f))throw f;fe(Lg,`Failed to update sequence numbers for target ${e}: ${f}`)}a.Ts=a.Ts.remove(e),a.Is.delete(o.target)}function YE(i,e,t){const a=Ie(i);let o=Re.min(),u=Le();return a.persistence.runTransaction("Execute query","readwrite",f=>function(p,g,E){const A=Ie(p),S=A.Is.get(E);return S!==void 0?te.resolve(A.Ts.get(S)):A.Hr.getTargetData(g,E)}(a,f,_i(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>a.Ps.getDocumentsMatchingQuery(f,e,t?o:Re.min(),t?u:Le())).next(m=>(SN(a,cD(e),m),{documents:m,gs:u})))}function SN(i,e,t){let a=i.Es.get(e)||Re.min();t.forEach((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)}),i.Es.set(e,a)}class QE{constructor(){this.activeTargetIds=gD()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wN{constructor(){this.ho=new QE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,a){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new QE,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RN{To(e){}shutdown(){}}/**
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
 */const $E="ConnectivityMonitor";class XE{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){fe($E,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){fe($E,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yf=null;function kp(){return yf===null?yf=function(){return 268435456+Math.round(2147483648*Math.random())}():yf++,"0x"+yf.toString(16)}/**
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
 */const Wm="RestConnection",IN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class CN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${a}/databases/${o}`,this.wo=this.databaseId.database===Gf?`project_id=${a}`:`project_id=${a}&database_id=${o}`}So(e,t,a,o,u){const f=kp(),m=this.bo(e,t.toUriEncodedString());fe(Wm,`Sending RPC '${e}' ${f}:`,m,a);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,m,p,a).then(g=>(fe(Wm,`Received RPC '${e}' ${f}: `,g),g),g=>{throw To(Wm,`RPC '${e}' ${f} failed with error: `,g,"url: ",m,"request:",a),g})}Co(e,t,a,o,u,f){return this.So(e,t,a,o,u)}Do(e,t,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),a&&a.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const a=IN[e];return`${this.po}/v1/${t}:${a}`}terminate(){}}/**
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
 */class ON{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Wt="WebChannelConnection";class xN extends CN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,a,o){const u=kp();return new Promise((f,m)=>{const p=new pA;p.setWithCredentials(!0),p.listenOnce(gA.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Cf.NO_ERROR:const E=p.getResponseJson();fe(Wt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case Cf.TIMEOUT:fe(Wt,`RPC '${e}' ${u} timed out`),m(new de(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Cf.HTTP_ERROR:const A=p.getStatus();if(fe(Wt,`RPC '${e}' ${u} failed with status:`,A,"response text:",p.getResponseText()),A>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const M=S==null?void 0:S.error;if(M&&M.status&&M.message){const k=function(L){const B=L.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(B)>=0?B:ne.UNKNOWN}(M.status);m(new de(k,M.message))}else m(new de(ne.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new de(ne.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{fe(Wt,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);fe(Wt,`RPC '${e}' ${u} sending request:`,o),p.send(t,"POST",g,a,15)})}Wo(e,t,a){const o=kp(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=_A(),m=vA(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,a),p.encodeInitMessageHeaders=!0;const E=u.join("");fe(Wt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const A=f.createWebChannel(E,p);let S=!1,M=!1;const k=new ON({Fo:L=>{M?fe(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,L):(S||(fe(Wt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),S=!0),fe(Wt,`RPC '${e}' stream ${o} sending:`,L),A.send(L))},Mo:()=>A.close()}),Q=(L,B,J)=>{L.listen(B,$=>{try{J($)}catch(se){setTimeout(()=>{throw se},0)}})};return Q(A,Jl.EventType.OPEN,()=>{M||(fe(Wt,`RPC '${e}' stream ${o} transport opened.`),k.Qo())}),Q(A,Jl.EventType.CLOSE,()=>{M||(M=!0,fe(Wt,`RPC '${e}' stream ${o} transport closed`),k.Uo())}),Q(A,Jl.EventType.ERROR,L=>{M||(M=!0,To(Wt,`RPC '${e}' stream ${o} transport errored:`,L),k.Uo(new de(ne.UNAVAILABLE,"The operation could not be completed")))}),Q(A,Jl.EventType.MESSAGE,L=>{var B;if(!M){const J=L.data[0];Ke(!!J);const $=J,se=($==null?void 0:$.error)||((B=$[0])===null||B===void 0?void 0:B.error);if(se){fe(Wt,`RPC '${e}' stream ${o} received error:`,se);const le=se.status;let ve=function(w){const x=bt[w];if(x!==void 0)return eS(x)}(le),N=se.message;ve===void 0&&(ve=ne.INTERNAL,N="Unknown error status: "+le+" with message "+se.message),M=!0,k.Uo(new de(ve,N)),A.close()}else fe(Wt,`RPC '${e}' stream ${o} received:`,J),k.Ko(J)}}),Q(m,yA.STAT_EVENT,L=>{L.stat===bp.PROXY?fe(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):L.stat===bp.NOPROXY&&fe(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Zm(){return typeof document<"u"?document:null}/**
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
 */function Ah(i){return new MD(i,!0)}/**
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
 */class mS{constructor(e,t,a=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=a,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-a);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const WE="PersistentStream";class pS{constructor(e,t,a,o,u,f,m,p){this.Ti=e,this.n_=a,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new mS(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(lr(t.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,o])=>{this.i_===t&&this.V_(a,o)},a=>{e(()=>{const o=new de(ne.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(o)})})}V_(e,t){const a=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{a(()=>this.m_(o))}),this.stream.onMessage(o=>{a(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return fe(WE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(fe(WE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DN extends pS{constructor(e,t,a,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,o,f),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=LD(this.serializer,e),a=function(u){if(!("targetChange"in u))return Re.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Re.min():f.readTime?Ti(f.readTime):Re.min()}(e);return this.listener.p_(t,a)}y_(e){const t={};t.database=Pp(this.serializer),t.addTarget=function(u,f){let m;const p=f.target;if(m=Ip(p)?{documents:zD(u,p)}:{query:BD(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=iS(u,f.resumeToken);const g=xp(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(Re.min())>0){m.readTime=Wf(u,f.snapshotVersion.toTimestamp());const g=xp(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const a=qD(this.serializer,e);a&&(t.labels=a),this.I_(t)}w_(e){const t={};t.database=Pp(this.serializer),t.removeTarget=e,this.I_(t)}}class NN extends pS{constructor(e,t,a,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,o,f),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=jD(e.writeResults,e.commitTime),a=Ti(e.commitTime);return this.listener.v_(a,t)}C_(){const e={};e.database=Pp(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(a=>UD(this.serializer,a))};this.I_(t)}}/**
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
 */class PN{}class MN extends PN{constructor(e,t,a,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(e,Dp(t,a),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(ne.UNKNOWN,u.toString())})}Co(e,t,a,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,Dp(t,a),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de(ne.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class kN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(lr(t),this.N_=!1):fe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const rs="RemoteStore";class VN{constructor(e,t,a,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{a.enqueueAndForget(async()=>{ds(this)&&(fe(rs,"Restarting streams for network reachability change."),await async function(p){const g=Ie(p);g.W_.add(4),await Vu(g),g.j_.set("Unknown"),g.W_.delete(4),await Sh(g)}(this))})}),this.j_=new kN(a,o)}}async function Sh(i){if(ds(i))for(const e of i.G_)await e(!0)}async function Vu(i){for(const e of i.G_)await e(!1)}function gS(i,e){const t=Ie(i);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Bg(t)?zg(t):Vo(t).c_()&&jg(t,e))}function Ug(i,e){const t=Ie(i),a=Vo(t);t.K_.delete(e),a.c_()&&yS(t,e),t.K_.size===0&&(a.c_()?a.P_():ds(t)&&t.j_.set("Unknown"))}function jg(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(i).y_(e)}function yS(i,e){i.H_.Ne(e),Vo(i).w_(e)}function zg(i){i.H_=new xD({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.K_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),Vo(i).start(),i.j_.B_()}function Bg(i){return ds(i)&&!Vo(i).u_()&&i.K_.size>0}function ds(i){return Ie(i).W_.size===0}function vS(i){i.H_=void 0}async function LN(i){i.j_.set("Online")}async function UN(i){i.K_.forEach((e,t)=>{jg(i,e)})}async function jN(i,e){vS(i),Bg(i)?(i.j_.q_(e),zg(i)):i.j_.set("Unknown")}async function zN(i,e,t){if(i.j_.set("Online"),e instanceof nS&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.K_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.K_.delete(m),o.H_.removeTarget(m))}(i,e)}catch(a){fe(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Jf(i,a)}else if(e instanceof Nf?i.H_.We(e):e instanceof tS?i.H_.Ze(e):i.H_.je(e),!t.isEqual(Re.min()))try{const a=await dS(i.localStore);t.compareTo(a)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.K_.get(g);E&&u.K_.set(g,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,g)=>{const E=u.K_.get(p);if(!E)return;u.K_.set(p,E.withResumeToken(Yt.EMPTY_BYTE_STRING,E.snapshotVersion)),yS(u,p);const A=new $r(E.target,p,g,E.sequenceNumber);jg(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(a){fe(rs,"Failed to raise snapshot:",a),await Jf(i,a)}}async function Jf(i,e,t){if(!ko(e))throw e;i.W_.add(1),await Vu(i),i.j_.set("Offline"),t||(t=()=>dS(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{fe(rs,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await Sh(i)})}function _S(i,e){return e().catch(t=>Jf(i,t,e))}async function wh(i){const e=Ie(i),t=sa(e);let a=e.U_.length>0?e.U_[e.U_.length-1].batchId:wg;for(;BN(e);)try{const o=await bN(e.localStore,a);if(o===null){e.U_.length===0&&t.P_();break}a=o.batchId,FN(e,o)}catch(o){await Jf(e,o)}ES(e)&&TS(e)}function BN(i){return ds(i)&&i.U_.length<10}function FN(i,e){i.U_.push(e);const t=sa(i);t.c_()&&t.S_&&t.b_(e.mutations)}function ES(i){return ds(i)&&!sa(i).u_()&&i.U_.length>0}function TS(i){sa(i).start()}async function qN(i){sa(i).C_()}async function HN(i){const e=sa(i);for(const t of i.U_)e.b_(t.mutations)}async function GN(i,e,t){const a=i.U_.shift(),o=Dg.from(a,e,t);await _S(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await wh(i)}async function KN(i,e){e&&sa(i).S_&&await async function(a,o){if(function(f){return CD(f)&&f!==ne.ABORTED}(o.code)){const u=a.U_.shift();sa(a).h_(),await _S(a,()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o)),await wh(a)}}(i,e),ES(i)&&TS(i)}async function ZE(i,e){const t=Ie(i);t.asyncQueue.verifyOperationInProgress(),fe(rs,"RemoteStore received new credentials");const a=ds(t);t.W_.add(3),await Vu(t),a&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Sh(t)}async function YN(i,e){const t=Ie(i);e?(t.W_.delete(2),await Sh(t)):e||(t.W_.add(2),await Vu(t),t.j_.set("Unknown"))}function Vo(i){return i.J_||(i.J_=function(t,a,o){const u=Ie(t);return u.M_(),new DN(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:LN.bind(null,i),No:UN.bind(null,i),Lo:jN.bind(null,i),p_:zN.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),Bg(i)?zg(i):i.j_.set("Unknown")):(await i.J_.stop(),vS(i))})),i.J_}function sa(i){return i.Y_||(i.Y_=function(t,a,o){const u=Ie(t);return u.M_(),new NN(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:qN.bind(null,i),Lo:KN.bind(null,i),D_:HN.bind(null,i),v_:GN.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await wh(i)):(await i.Y_.stop(),i.U_.length>0&&(fe(rs,`Stopping write stream with ${i.U_.length} pending writes`),i.U_=[]))})),i.Y_}/**
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
 */class Fg{constructor(e,t,a,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new Jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,o,u){const f=Date.now()+a,m=new Fg(e,t,f,o,u);return m.start(a),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qg(i,e){if(lr("AsyncQueue",`${e}: ${i}`),ko(i))return new de(ne.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class _o{static emptySet(e){return new _o(e.comparator)}constructor(e){this.comparator=e?(t,a)=>e(t,a)||ye.comparator(t.key,a.key):(t,a)=>ye.comparator(t.key,a.key),this.keyedMap=eu(),this.sortedSet=new ut(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,a)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const a=new _o;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}/**
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
 */class JE{constructor(){this.Z_=new ut(ye.comparator)}track(e){const t=e.doc.key,a=this.Z_.get(t);a?e.type!==0&&a.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&a.type!==1?this.Z_=this.Z_.insert(t,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.Z_=this.Z_.remove(t):e.type===1&&a.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Se():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,a)=>{e.push(a)}),e}}class Ro{constructor(e,t,a,o,u,f,m,p,g){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,a,o,u){const f=[];return t.forEach(m=>{f.push({type:0,doc:m})}),new Ro(e,t,_o.emptySet(t),f,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==a[o].type||!t[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
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
 */class QN{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class $N{constructor(){this.queries=eT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,a){const o=Ie(t),u=o.queries;o.queries=eT(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(a)})})(this,new de(ne.ABORTED,"Firestore shutting down"))}}function eT(){return new fs(i=>BA(i),vh)}async function XN(i,e){const t=Ie(i);let a=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(a=2):(u=new QN,a=e.ra()?0:1);try{switch(a){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const m=qg(f,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&Hg(t)}async function WN(i,e){const t=Ie(i),a=e.query;let o=3;const u=t.queries.get(a);if(u){const f=u.ta.indexOf(e);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(a),t.onUnlisten(a,!0);case 1:return t.queries.delete(a),t.onUnlisten(a,!1);case 2:return t.onLastRemoteStoreUnlisten(a);default:return}}function ZN(i,e){const t=Ie(i);let a=!1;for(const o of e){const u=o.query,f=t.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(a=!0);f.ea=o}}a&&Hg(t)}function JN(i,e,t){const a=Ie(i),o=a.queries.get(e);if(o)for(const u of o.ta)u.onError(t);a.queries.delete(e)}function Hg(i){i.ia.forEach(e=>{e.next()})}var Vp,tT;(tT=Vp||(Vp={}))._a="default",tT.Cache="cache";class eP{constructor(e,t,a){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=a||{}}oa(e){if(!this.options.includeMetadataChanges){const a=[];for(const o of e.docChanges)o.type!==3&&a.push(o);e=new Ro(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const a=t!=="Offline";return(!this.options.Ta||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Vp.Cache}}/**
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
 */class bS{constructor(e){this.key=e}}class AS{constructor(e){this.key=e}}class tP{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Le(),this.mutatedKeys=Le(),this.ya=FA(e),this.wa=new _o(this.ya)}get Sa(){return this.fa}ba(e,t){const a=t?t.Da:new JE,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,A)=>{const S=o.get(E),M=_h(this.query,A)?A:null,k=!!S&&this.mutatedKeys.has(S.key),Q=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let L=!1;S&&M?S.data.isEqual(M.data)?k!==Q&&(a.track({type:3,doc:M}),L=!0):this.va(S,M)||(a.track({type:2,doc:M}),L=!0,(p&&this.ya(M,p)>0||g&&this.ya(M,g)<0)&&(m=!0)):!S&&M?(a.track({type:0,doc:M}),L=!0):S&&!M&&(a.track({type:1,doc:S}),L=!0,(p||g)&&(m=!0)),L&&(M?(f=f.add(M),u=Q?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),a.track({type:1,doc:E})}return{wa:f,Da:a,ls:m,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort((E,A)=>function(M,k){const Q=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return Q(M)-Q(k)}(E.type,A.type)||this.ya(E.doc,A.doc)),this.Ca(a),o=o!=null&&o;const m=t&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,g=p!==this.ga;return this.ga=p,f.length!==0||g?{snapshot:new Ro(this.query,e.wa,u,f,e.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new JE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Le(),this.wa.forEach(a=>{this.xa(a.key)&&(this.pa=this.pa.add(a.key))});const t=[];return e.forEach(a=>{this.pa.has(a)||t.push(new AS(a))}),this.pa.forEach(a=>{e.has(a)||t.push(new bS(a))}),t}Oa(e){this.fa=e.gs,this.pa=Le();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Ro.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Gg="SyncEngine";class nP{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class iP{constructor(e){this.key=e,this.Ba=!1}}class rP{constructor(e,t,a,o,u,f){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new fs(m=>BA(m),vh),this.qa=new Map,this.Qa=new Set,this.$a=new ut(ye.comparator),this.Ua=new Map,this.Ka=new Mg,this.Wa={},this.Ga=new Map,this.za=wo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function aP(i,e,t=!0){const a=OS(i);let o;const u=a.ka.get(e);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await SS(a,e,t,!0),o}async function sP(i,e){const t=OS(i);await SS(t,e,!0,!1)}async function SS(i,e,t,a){const o=await AN(i.localStore,_i(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,t);let m;return a&&(m=await oP(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&t&&gS(i.remoteStore,o),m}async function oP(i,e,t,a,o){i.Ha=(A,S,M)=>async function(Q,L,B,J){let $=L.view.ba(B);$.ls&&($=await YE(Q.localStore,L.query,!1).then(({documents:N})=>L.view.ba(N,$)));const se=J&&J.targetChanges.get(L.targetId),le=J&&J.targetMismatches.get(L.targetId)!=null,ve=L.view.applyChanges($,Q.isPrimaryClient,se,le);return iT(Q,L.targetId,ve.Ma),ve.snapshot}(i,A,S,M);const u=await YE(i.localStore,e,!0),f=new tP(e,u.gs),m=f.ba(u.documents),p=ku.createSynthesizedTargetChangeForCurrentChange(t,a&&i.onlineState!=="Offline",o),g=f.applyChanges(m,i.isPrimaryClient,p);iT(i,t,g.Ma);const E=new nP(e,t,f);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),g.snapshot}async function lP(i,e,t){const a=Ie(i),o=a.ka.get(e),u=a.qa.get(o.targetId);if(u.length>1)return a.qa.set(o.targetId,u.filter(f=>!vh(f,e))),void a.ka.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await Mp(a.localStore,o.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(o.targetId),t&&Ug(a.remoteStore,o.targetId),Lp(a,o.targetId)}).catch(Mo)):(Lp(a,o.targetId),await Mp(a.localStore,o.targetId,!0))}async function uP(i,e){const t=Ie(i),a=t.ka.get(e),o=t.qa.get(a.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(a.targetId),Ug(t.remoteStore,a.targetId))}async function cP(i,e,t){const a=yP(i);try{const o=await function(f,m){const p=Ie(f),g=Ot.now(),E=m.reduce((M,k)=>M.add(k.key),Le());let A,S;return p.persistence.runTransaction("Locally write mutations","readwrite",M=>{let k=ur(),Q=Le();return p.ds.getEntries(M,E).next(L=>{k=L,k.forEach((B,J)=>{J.isValidDocument()||(Q=Q.add(B))})}).next(()=>p.localDocuments.getOverlayedDocuments(M,k)).next(L=>{A=L;const B=[];for(const J of m){const $=AD(J,A.get(J.key).overlayedDocument);$!=null&&B.push(new hs(J.key,$,NA($.value.mapValue),Ei.exists(!0)))}return p.mutationQueue.addMutationBatch(M,g,B,m)}).next(L=>{S=L;const B=L.applyToLocalDocumentSet(A,Q);return p.documentOverlayCache.saveOverlays(M,L.batchId,B)})}).then(()=>({batchId:S.batchId,changes:HA(A)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let g=f.Wa[f.currentUser.toKey()];g||(g=new ut(xe)),g=g.insert(m,p),f.Wa[f.currentUser.toKey()]=g}(a,o.batchId,t),await Lu(a,o.changes),await wh(a.remoteStore)}catch(o){const u=qg(o,"Failed to persist write");t.reject(u)}}async function wS(i,e){const t=Ie(i);try{const a=await EN(t.localStore,e);e.targetChanges.forEach((o,u)=>{const f=t.Ua.get(u);f&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ke(f.Ba):o.removedDocuments.size>0&&(Ke(f.Ba),f.Ba=!1))}),await Lu(t,a,e)}catch(a){await Mo(a)}}function nT(i,e,t){const a=Ie(i);if(a.isPrimaryClient&&t===0||!a.isPrimaryClient&&t===1){const o=[];a.ka.forEach((u,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Ie(f);p.onlineState=m;let g=!1;p.queries.forEach((E,A)=>{for(const S of A.ta)S.sa(m)&&(g=!0)}),g&&Hg(p)}(a.eventManager,e),o.length&&a.La.p_(o),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function fP(i,e,t){const a=Ie(i);a.sharedClientState.updateQueryState(e,"rejected",t);const o=a.Ua.get(e),u=o&&o.key;if(u){let f=new ut(ye.comparator);f=f.insert(u,Jt.newNoDocument(u,Re.min()));const m=Le().add(u),p=new bh(Re.min(),new Map,new ut(xe),f,m);await wS(a,p),a.$a=a.$a.remove(u),a.Ua.delete(e),Kg(a)}else await Mp(a.localStore,e,!1).then(()=>Lp(a,e,t)).catch(Mo)}async function hP(i,e){const t=Ie(i),a=e.batch.batchId;try{const o=await _N(t.localStore,e);IS(t,a,null),RS(t,a),t.sharedClientState.updateMutationState(a,"acknowledged"),await Lu(t,o)}catch(o){await Mo(o)}}async function dP(i,e,t){const a=Ie(i);try{const o=await function(f,m){const p=Ie(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next(A=>(Ke(A!==null),E=A.keys(),p.mutationQueue.removeMutationBatch(g,A))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(a.localStore,e);IS(a,e,t),RS(a,e),a.sharedClientState.updateMutationState(e,"rejected",t),await Lu(a,o)}catch(o){await Mo(o)}}function RS(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function IS(i,e,t){const a=Ie(i);let o=a.Wa[a.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),a.Wa[a.currentUser.toKey()]=o}}function Lp(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const a of i.qa.get(e))i.ka.delete(a),t&&i.La.Ja(a,t);i.qa.delete(e),i.isPrimaryClient&&i.Ka.br(e).forEach(a=>{i.Ka.containsKey(a)||CS(i,a)})}function CS(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(Ug(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ua.delete(t),Kg(i))}function iT(i,e,t){for(const a of t)a instanceof bS?(i.Ka.addReference(a.key,e),mP(i,a)):a instanceof AS?(fe(Gg,"Document no longer in limbo: "+a.key),i.Ka.removeReference(a.key,e),i.Ka.containsKey(a.key)||CS(i,a.key)):Se()}function mP(i,e){const t=e.key,a=t.path.canonicalString();i.$a.get(t)||i.Qa.has(a)||(fe(Gg,"New document in limbo: "+t),i.Qa.add(a),Kg(i))}function Kg(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new ye(it.fromString(e)),a=i.za.next();i.Ua.set(a,new iP(t)),i.$a=i.$a.insert(t,a),gS(i.remoteStore,new $r(_i(jA(t.path)),a,"TargetPurposeLimboResolution",ph.ae))}}async function Lu(i,e,t){const a=Ie(i),o=[],u=[],f=[];a.ka.isEmpty()||(a.ka.forEach((m,p)=>{f.push(a.Ha(p,e,t).then(g=>{var E;if((g||t)&&a.isPrimaryClient){const A=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;a.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(g){o.push(g);const A=Vg.Yi(p.targetId,g);u.push(A)}}))}),await Promise.all(f),a.La.p_(o),await async function(p,g){const E=Ie(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>te.forEach(g,S=>te.forEach(S.Hi,M=>E.persistence.referenceDelegate.addReference(A,S.targetId,M)).next(()=>te.forEach(S.Ji,M=>E.persistence.referenceDelegate.removeReference(A,S.targetId,M)))))}catch(A){if(!ko(A))throw A;fe(Lg,"Failed to update sequence numbers: "+A)}for(const A of g){const S=A.targetId;if(!A.fromCache){const M=E.Ts.get(S),k=M.snapshotVersion,Q=M.withLastLimboFreeSnapshotVersion(k);E.Ts=E.Ts.insert(S,Q)}}}(a.localStore,u))}async function pP(i,e){const t=Ie(i);if(!t.currentUser.isEqual(e)){fe(Gg,"User change. New user:",e.toKey());const a=await hS(t.localStore,e);t.currentUser=e,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new de(ne.CANCELLED,f))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await Lu(t,a.Rs)}}function gP(i,e){const t=Ie(i),a=t.Ua.get(e);if(a&&a.Ba)return Le().add(a.key);{let o=Le();const u=t.qa.get(e);if(!u)return o;for(const f of u){const m=t.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function OS(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=wS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fP.bind(null,e),e.La.p_=ZN.bind(null,e.eventManager),e.La.Ja=JN.bind(null,e.eventManager),e}function yP(i){const e=Ie(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dP.bind(null,e),e}class eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return vN(this.persistence,new pN,e.initialUser,this.serializer)}Xa(e){return new fS(kg.ri,this.serializer)}Za(e){return new wN}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eh.provider={build:()=>new eh};class vP extends eh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ke(this.persistence.referenceDelegate instanceof Zf);const a=this.persistence.referenceDelegate.garbageCollector;return new eN(a,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new fS(a=>Zf.ri(a,t),this.serializer)}}class Up{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>nT(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=pP.bind(null,this.syncEngine),await YN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $N}()}createDatastore(e){const t=Ah(e.databaseInfo.databaseId),a=function(u){return new xN(u)}(e.databaseInfo);return function(u,f,m,p){return new MN(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return function(a,o,u,f,m){return new VN(a,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,t=>nT(this.syncEngine,t,0),function(){return XE.D()?new XE:new RN}())}createSyncEngine(e,t){return function(o,u,f,m,p,g,E){const A=new rP(o,u,f,m,p,g);return E&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Ie(o);fe(rs,"RemoteStore shutting down."),u.W_.add(5),await Vu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Up.provider={build:()=>new Up};/**
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
 *//**
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
 */class _P{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const oa="FirestoreClient";class EP{constructor(e,t,a,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=o,this.user=Zt.UNAUTHENTICATED,this.clientId=bA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,async f=>{fe(oa,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(a,f=>(fe(oa,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=qg(t,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Jm(i,e){i.asyncQueue.verifyOperationInProgress(),fe(oa,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let a=t.initialUser;i.setCredentialChangeListener(async o=>{a.isEqual(o)||(await hS(e.localStore,o),a=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function rT(i,e){i.asyncQueue.verifyOperationInProgress();const t=await TP(i);fe(oa,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(a=>ZE(e.remoteStore,a)),i.setAppCheckTokenChangeListener((a,o)=>ZE(e.remoteStore,o)),i._onlineComponents=e}async function TP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){fe(oa,"Using user provided OfflineComponentProvider");try{await Jm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;To("Error using user provided cache. Falling back to memory cache: "+t),await Jm(i,new eh)}}else fe(oa,"Using default OfflineComponentProvider"),await Jm(i,new vP(void 0));return i._offlineComponents}async function xS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(fe(oa,"Using user provided OnlineComponentProvider"),await rT(i,i._uninitializedComponentsProvider._online)):(fe(oa,"Using default OnlineComponentProvider"),await rT(i,new Up))),i._onlineComponents}function bP(i){return xS(i).then(e=>e.syncEngine)}async function AP(i){const e=await xS(i),t=e.eventManager;return t.onListen=aP.bind(null,e.syncEngine),t.onUnlisten=lP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uP.bind(null,e.syncEngine),t}function SP(i,e,t={}){const a=new Jr;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,g){const E=new _P({next:S=>{E.su(),f.enqueueAndForget(()=>WN(u,A)),S.fromCache&&p.source==="server"?g.reject(new de(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(S)},error:S=>g.reject(S)}),A=new eP(m,E,{includeMetadataChanges:!0,Ta:!0});return XN(u,A)}(await AP(i),i.asyncQueue,e,t,a)),a.promise}/**
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
 */function DS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const aT=new Map;/**
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
 */function NS(i,e,t){if(!t)throw new de(ne.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function wP(i,e,t,a){if(e===!0&&a===!0)throw new de(ne.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function sT(i){if(!ye.isDocumentKey(i))throw new de(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function oT(i){if(ye.isDocumentKey(i))throw new de(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Rh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Se()}function Io(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new de(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rh(i);throw new de(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const PS="firestore.googleapis.com",lT=!0;class uT{constructor(e){var t,a;if(e.host===void 0){if(e.ssl!==void 0)throw new de(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PS,this.ssl=lT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:lT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZD)throw new de(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DS((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,o){return a.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ih{constructor(e,t,a,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Ox;switch(a.type){case"firstParty":return new Px(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new de(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const a=aT.get(t);a&&(fe("ComponentProvider","Removing Datastore"),aT.delete(t),a.terminate())}(this),Promise.resolve()}}function RP(i,e,t,a={}){var o;const u=(i=Io(i,Ih))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;u.host!==PS&&u.host!==m&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:a});if(!Ja(p,f)&&(i._setSettings(p),a.mockUserToken)){let g,E;if(typeof a.mockUserToken=="string")g=a.mockUserToken,E=Zt.MOCK_USER;else{g=Rb(a.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const A=a.mockUserToken.sub||a.mockUserToken.user_id;if(!A)throw new de(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Zt(A)}i._authCredentials=new xx(new EA(g,E))}}/**
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
 */class Lo{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Lo(this.firestore,e,this._query)}}class bn{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ea(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bn(this.firestore,e,this._key)}}class ea extends Lo{constructor(e,t,a){super(e,t,jA(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bn(this.firestore,null,new ye(e))}withConverter(e){return new ea(this.firestore,e,this._path)}}function jp(i,e,...t){if(i=tn(i),NS("collection","path",e),i instanceof Ih){const a=it.fromString(e,...t);return oT(a),new ea(i,null,a)}{if(!(i instanceof bn||i instanceof ea))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(it.fromString(e,...t));return oT(a),new ea(i.firestore,null,a)}}function MS(i,e,...t){if(i=tn(i),arguments.length===1&&(e=bA.newId()),NS("doc","path",e),i instanceof Ih){const a=it.fromString(e,...t);return sT(a),new bn(i,null,new ye(a))}{if(!(i instanceof bn||i instanceof ea))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(it.fromString(e,...t));return sT(a),new bn(i.firestore,i instanceof ea?i.converter:null,new ye(a))}}/**
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
 */const cT="AsyncQueue";class fT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new mS(this,"async_queue_retry"),this.Su=()=>{const a=Zm();a&&fe(cT,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=e;const t=Zm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Zm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Jr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ko(e))throw e;fe(cT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(a=>{this.gu=a,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(a);throw lr("INTERNAL UNHANDLED ERROR: ",o),a}).then(a=>(this.pu=!1,a))));return this.bu=t,t}enqueueAfterDelay(e,t,a){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Fg.createAndSchedule(this,e,t,a,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,a)=>t.targetTimeMs-a.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Ch extends Ih{constructor(e,t,a,o){super(e,t,a,o),this.type="firestore",this._queue=new fT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fT(e),this._firestoreClient=void 0,await e}}}function IP(i,e){const t=typeof i=="object"?i:mg(),a=typeof i=="string"?i:Gf,o=fh(t,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=Ab("firestore");u&&RP(o,...u)}return o}function kS(i){if(i._terminated)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||CP(i),i._firestoreClient}function CP(i){var e,t,a;const o=i._freezeSettings(),u=function(m,p,g,E){return new Qx(m,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,DS(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((a=o.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new EP(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
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
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Yt.fromBase64String(e))}catch(t){throw new de(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Co(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yg{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class VS{constructor(e){this._methodName=e}}/**
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
 */class Qg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const OP=/^__.*__$/;class xP{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}function LS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Xg{constructor(e,t,a,o,u,f){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Xg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:a,Qu:!1});return o.$u(e),o}Uu(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:a,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return th(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(LS(this.Lu)&&OP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class DP{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||Ah(e)}ju(e,t,a,o=!1){return new Xg({Lu:e,methodName:t,zu:a,path:Kt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wg(i){const e=i._freezeSettings(),t=Ah(i._databaseId);return new DP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function US(i,e,t,a,o,u={}){const f=i.ju(u.merge||u.mergeFields?2:0,e,t,o);BS("Data must be an object, but it was:",f,a);const m=jS(a,f);let p,g;if(u.merge)p=new Gn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const S=PP(e,A,t);if(!f.contains(S))throw new de(ne.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);kP(E,S)||E.push(S)}p=new Gn(E),g=f.fieldTransforms.filter(A=>p.covers(A.field))}else p=null,g=f.fieldTransforms;return new xP(new Ln(m),p,g)}function NP(i,e,t,a=!1){return Zg(t,i.ju(a?4:3,e))}function Zg(i,e){if(zS(i=tn(i)))return BS("Unsupported field value:",e,i),jS(i,e);if(i instanceof VS)return function(a,o){if(!LS(o.Lu))throw o.Wu(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(a,o){const u=[];let f=0;for(const m of a){let p=Zg(m,o.Ku(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(i,e)}return function(a,o){if((a=tn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return yD(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=Ot.fromDate(a);return{timestampValue:Wf(o.serializer,u)}}if(a instanceof Ot){const u=new Ot(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Wf(o.serializer,u)}}if(a instanceof Qg)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Co)return{bytesValue:iS(o.serializer,a._byteString)};if(a instanceof bn){const u=o.databaseId,f=a.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Pg(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof $g)return function(f,m){return{mapValue:{fields:{[xA]:{stringValue:DA},[Kf]:{arrayValue:{values:f.toArray().map(g=>{if(typeof g!="number")throw m.Wu("VectorValues must only contain numeric values.");return xg(m.serializer,g)})}}}}}}(a,o);throw o.Wu(`Unsupported field value: ${Rh(a)}`)}(i,e)}function jS(i,e){const t={};return SA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(i,(a,o)=>{const u=Zg(o,e.qu(a));u!=null&&(t[a]=u)}),{mapValue:{fields:t}}}function zS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Ot||i instanceof Qg||i instanceof Co||i instanceof bn||i instanceof VS||i instanceof $g)}function BS(i,e,t){if(!zS(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const a=Rh(t);throw a==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+a)}}function PP(i,e,t){if((e=tn(e))instanceof Yg)return e._internalPath;if(typeof e=="string")return FS(i,e);throw th("Field path arguments must be of type string or ",i,!1,void 0,t)}const MP=new RegExp("[~\\*/\\[\\]]");function FS(i,e,t){if(e.search(MP)>=0)throw th(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Yg(...e.split("."))._internalPath}catch{throw th(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function th(i,e,t,a,o){const u=a&&!a.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${a}`),f&&(p+=` in document ${o}`),p+=")"),new de(ne.INVALID_ARGUMENT,m+i+p)}function kP(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class qS{constructor(e,t,a,o,u){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VP extends qS{data(){return super.data()}}function Jg(i,e){return typeof e=="string"?FS(i,e):e instanceof Yg?e._internalPath:e._delegate._internalPath}/**
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
 */function LP(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new de(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{}class UP extends ey{}function jP(i,e,...t){let a=[];e instanceof ey&&a.push(e),a=a.concat(t),function(u){const f=u.filter(p=>p instanceof ty).length,m=u.filter(p=>p instanceof Oh).length;if(f>1||f>0&&m>0)throw new de(ne.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const o of a)i=o._apply(i);return i}class Oh extends UP{constructor(e,t,a){super(),this._field=e,this._op=t,this._value=a,this.type="where"}static _create(e,t,a){return new Oh(e,t,a)}_apply(e){const t=this._parse(e);return HS(e._query,t),new Lo(e.firestore,e.converter,Cp(e._query,t))}_parse(e){const t=Wg(e.firestore);return function(u,f,m,p,g,E,A){let S;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new de(ne.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){dT(A,E);const k=[];for(const Q of A)k.push(hT(p,u,Q));S={arrayValue:{values:k}}}else S=hT(p,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||dT(A,E),S=NP(m,f,A,E==="in"||E==="not-in");return At.create(g,E,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zP(i,e,t){const a=e,o=Jg("where",i);return Oh._create(o,a,t)}class ty extends ey{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ty(e,t)}_parse(e){const t=this._queryConstraints.map(a=>a._parse(e)).filter(a=>a.getFilters().length>0);return t.length===1?t[0]:Qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)HS(f,p),f=Cp(f,p)}(e._query,t),new Lo(e.firestore,e.converter,Cp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hT(i,e,t){if(typeof(t=tn(t))=="string"){if(t==="")throw new de(ne.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zA(e)&&t.indexOf("/")!==-1)throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const a=e.path.child(it.fromString(t));if(!ye.isDocumentKey(a))throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return CE(i,new ye(a))}if(t instanceof bn)return CE(i,t._key);throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rh(t)}.`)}function dT(i,e){if(!Array.isArray(i)||i.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HS(i,e){const t=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class BP{convertValue(e,t="none"){switch(aa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ra(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return cs(e,(o,u)=>{a[o]=this.convertValue(u,t)}),a}convertVectorValue(e){var t,a,o;const u=(o=(a=(t=e.fields)===null||t===void 0?void 0:t[Kf].arrayValue)===null||a===void 0?void 0:a.values)===null||o===void 0?void 0:o.map(f=>yt(f.doubleValue));return new $g(u)}convertGeoPoint(e){return new Qg(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map(a=>this.convertValue(a,t))}convertServerTimestamp(e,t){switch(t){case"previous":const a=yh(e);return a==null?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const t=ia(e);return new Ot(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=it.fromString(e);Ke(uS(a));const o=new yu(a.get(1),a.get(3)),u=new ye(a.popFirst(5));return o.isEqual(t)||lr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function GS(i,e,t){let a;return a=i?i.toFirestore(e):e,a}/**
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
 */class vf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FP extends qS{constructor(e,t,a,o,u,f){super(e,t,a,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field(Jg("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}}class Pf extends FP{data(e={}){return super.data(e)}}class qP{constructor(e,t,a,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new vf(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(a=>{e.call(t,new Pf(this._firestore,this._userDataWriter,a.key,a,new vf(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Pf(o._firestore,o._userDataWriter,m.doc.key,m.doc,new vf(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Pf(o._firestore,o._userDataWriter,m.doc.key,m.doc,new vf(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:HP(m.type),doc:p,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function HP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}class GP extends BP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bn(this.firestore,null,t)}}function KP(i){i=Io(i,Lo);const e=Io(i.firestore,Ch),t=kS(e),a=new GP(e);return LP(i._query),SP(t,i._query).then(o=>new qP(e,a,i,o))}function YP(i,e,t){i=Io(i,bn);const a=Io(i.firestore,Ch),o=GS(i.converter,e);return YS(a,[US(Wg(a),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Ei.none())])}function KS(i,e){const t=Io(i.firestore,Ch),a=MS(i),o=GS(i.converter,e);return YS(t,[US(Wg(i.firestore),"addDoc",a._key,o,i.converter!==null,{}).toMutation(a._key,Ei.exists(!1))]).then(()=>a)}function YS(i,e){return function(a,o){const u=new Jr;return a.asyncQueue.enqueueAndForget(async()=>cP(await bP(a),o,u)),u.promise}(kS(i),e)}(function(e,t=!0){(function(o){Po=o})(ls),es(new ta("firestore",(a,{instanceIdentifier:o,options:u})=>{const f=a.getProvider("app").getImmediate(),m=new Ch(new Dx(a.getProvider("auth-internal")),new Mx(f,a.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yu(g.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),gi(gE,yE,e),gi(gE,yE,"esm2017")})();/**
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
 */const QS="firebasestorage.googleapis.com",QP="storageBucket",$P=2*60*1e3,XP=10*60*1e3;/**
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
 */class Ii extends Ri{constructor(e,t,a=0){super(ep(e),`Firebase Storage: ${t} (${ep(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ii.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ep(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Si;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Si||(Si={}));function ep(i){return"storage/"+i}function WP(){const i="An unknown error occurred, please check the error payload for server response.";return new Ii(Si.UNKNOWN,i)}function ZP(){return new Ii(Si.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JP(){return new Ii(Si.CANCELED,"User canceled the upload/download.")}function eM(i){return new Ii(Si.INVALID_URL,"Invalid URL '"+i+"'.")}function tM(i){return new Ii(Si.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function mT(i){return new Ii(Si.INVALID_ARGUMENT,i)}function $S(){return new Ii(Si.APP_DELETED,"The Firebase app was deleted.")}function nM(i){return new Ii(Si.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Kn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let a;try{a=Kn.makeFromUrl(e,t)}catch{return new Kn(e,"")}if(a.path==="")return a;throw tM(e)}static makeFromUrl(e,t){let a=null;const o="([A-Za-z0-9.\\-_]+)";function u(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function g(se){se.path_=decodeURIComponent(se.path)}const E="v[A-Za-z0-9_]+",A=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",M=new RegExp(`^https?://${A}/${E}/b/${o}/o${S}`,"i"),k={bucket:1,path:3},Q=t===QS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",B=new RegExp(`^https?://${Q}/${o}/${L}`,"i"),$=[{regex:m,indices:p,postModify:u},{regex:M,indices:k,postModify:g},{regex:B,indices:{bucket:1,path:2},postModify:g}];for(let se=0;se<$.length;se++){const le=$[se],ve=le.regex.exec(e);if(ve){const N=ve[le.indices.bucket];let R=ve[le.indices.path];R||(R=""),a=new Kn(N,R),le.postModify(a);break}}if(a==null)throw eM(e);return a}}class iM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function rM(i,e,t){let a=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let g=!1;function E(...L){g||(g=!0,e.apply(null,L))}function A(L){o=setTimeout(()=>{o=null,i(M,p())},L)}function S(){u&&clearTimeout(u)}function M(L,...B){if(g){S();return}if(L){S(),E.call(null,L,...B);return}if(p()||f){S(),E.call(null,L,...B);return}a<64&&(a*=2);let $;m===1?(m=2,$=0):$=(a+Math.random())*1e3,A($)}let k=!1;function Q(L){k||(k=!0,S(),!g&&(o!==null?(L||(m=2),clearTimeout(o),A(0)):L||(m=1)))}return A(0),u=setTimeout(()=>{f=!0,Q(!0)},t),Q}function aM(i){i(!1)}/**
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
 */function sM(i){return i!==void 0}function pT(i,e,t,a){if(a<e)throw mT(`Invalid value for '${i}'. Expected ${e} or greater.`);if(a>t)throw mT(`Invalid value for '${i}'. Expected ${t} or less.`)}function oM(i){const e=encodeURIComponent;let t="?";for(const a in i)if(i.hasOwnProperty(a)){const o=e(a)+"="+e(i[a]);t=t+o+"&"}return t=t.slice(0,-1),t}var nh;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(nh||(nh={}));/**
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
 */function lM(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return t||o||u}/**
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
 */class uM{constructor(e,t,a,o,u,f,m,p,g,E,A,S=!0){this.url_=e,this.method_=t,this.headers_=a,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=A,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,k)=>{this.resolve_=M,this.reject_=k,this.start_()})}start_(){const e=(a,o)=>{if(o){a(!1,new _f(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===nh.NO_ERROR,p=u.getStatus();if(!m||lM(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===nh.ABORT;a(!1,new _f(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;a(!0,new _f(g,u))})},t=(a,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());sM(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=WP();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?$S():JP();f(p)}else{const p=ZP();f(p)}};this.canceled_?t(!1,new _f(!1,null,!0)):this.backoffId_=rM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _f{constructor(e,t,a){this.wasSuccessCode=e,this.connection=t,this.canceled=!!a}}function cM(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function fM(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hM(i,e){e&&(i["X-Firebase-GMPID"]=e)}function dM(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function mM(i,e,t,a,o,u,f=!0){const m=oM(i.urlParams),p=i.url+m,g=Object.assign({},i.headers);return hM(g,e),cM(g,t),fM(g,u),dM(g,a),new uM(p,i.method,g,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,f)}/**
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
 */function pM(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function gM(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */class ih{constructor(e,t){this._service=e,t instanceof Kn?this._location=t:this._location=Kn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ih(e,t)}get root(){const e=new Kn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gM(this._location.path)}get storage(){return this._service}get parent(){const e=pM(this._location.path);if(e===null)return null;const t=new Kn(this._location.bucket,e);return new ih(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw nM(e)}}function gT(i,e){const t=e==null?void 0:e[QP];return t==null?null:Kn.makeFromBucketSpec(t,i)}function yM(i,e,t,a={}){i.host=`${e}:${t}`,i._protocol="http";const{mockUserToken:o}=a;o&&(i._overrideAuthToken=typeof o=="string"?o:Rb(o,i.app.options.projectId))}class vM{constructor(e,t,a,o,u){this.app=e,this._authProvider=t,this._appCheckProvider=a,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=QS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$P,this._maxUploadRetryTime=XP,this._requests=new Set,o!=null?this._bucket=Kn.makeFromBucketSpec(o,this._host):this._bucket=gT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kn.makeFromBucketSpec(this._url,e):this._bucket=gT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ih(this,e)}_makeRequest(e,t,a,o,u=!0){if(this._deleted)return new iM($S());{const f=mM(e,this._appId,a,o,t,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,t){const[a,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,a,o).getPromise()}}const yT="@firebase/storage",vT="0.13.7";/**
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
 */const XS="storage";function _M(i=mg(),e){i=tn(i);const a=fh(i,XS).getImmediate({identifier:e}),o=Ab("storage");return o&&EM(a,...o),a}function EM(i,e,t,a={}){yM(i,e,t,a)}function TM(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),a=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new vM(t,a,o,e,ls)}function bM(){es(new ta(XS,TM,"PUBLIC").setMultipleInstances(!0)),gi(yT,vT,""),gi(yT,vT,"esm2017")}bM();const AM={apiKey:"AIzaSyALi3aD4f5MLqlRbL-sk2s2ReSgoxc6sW8",authDomain:"projeto-pet-746d8.firebaseapp.com",projectId:"projeto-pet-746d8",storageBucket:"projeto-pet-746d8.firebasestorage.app",messagingSenderId:"618638980041",appId:"1:618638980041:web:1b6c597b9c6e49bd156e18",measurementId:"G-4QVDJS3EVX"},ny=Ob(AM),Tu=Ix(ny),rh=IP(ny);_M(ny);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const _T={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},ET={prefix:"fas",iconName:"file-circle-plus",icon:[576,512,[58606],"e494","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48z"]};function SM(){const[i,e]=Y.useState(!1),[t,a]=Y.useState(window.innerWidth<=768),[o,u]=Y.useState(null),f=og();Y.useEffect(()=>{const p=()=>{a(window.innerWidth<=768),window.innerWidth>t&&e(!1)};return window.addEventListener("resize",p),()=>window.addEventListener("resize",p)},[]),Y.useEffect(()=>{const p=iA(Tu,g=>{u(g)});return()=>p()},[]);const m=async()=>{try{await gO(Tu),u(null),f("/")}catch{}};return C.jsxs("header",{children:[C.jsxs("div",{className:"container-principal",children:[C.jsx("div",{className:"container-logo",children:C.jsx(Hn,{to:"/",onClick:()=>e(!1),children:C.jsx("img",{src:dR,alt:""})})}),t&&C.jsx("div",{className:"menu-icon",onClick:()=>e(!i),children:"☰"}),!t&&C.jsx("nav",{className:`container-menu ${i?"menu-aberto":""}`,children:C.jsxs("ul",{children:[C.jsx("li",{children:"teste"}),C.jsx("li",{children:"teste"}),C.jsx("li",{children:"teste"})]})}),!t&&!o&&C.jsx("div",{className:`container-cadastro ${i?"menu-aberto":""}`,children:C.jsx(Hn,{to:"/Login",children:C.jsx("button",{children:"Login/Cadastro"})})}),o&&!t&&C.jsx("div",{className:"container-sair",children:C.jsx("button",{type:"button",onClick:()=>m(),children:"Logout"})})]}),i&&t&&C.jsxs("div",{className:"menu-mobile",children:[C.jsxs("ul",{children:[C.jsx("li",{children:"teste"}),C.jsx("li",{children:"teste"}),C.jsx("li",{children:"teste"})]}),!o&&C.jsx("div",{className:"cadastro-mobile",children:C.jsx("div",{children:C.jsx(Hn,{to:"/Login",onClick:()=>e(!1),children:C.jsx("button",{type:"button",children:"Login/cadastro"})})})}),o&&C.jsx("div",{className:"mobile-sair",children:C.jsx("div",{children:C.jsx("button",{type:"button",onClick:()=>{m(),e(!1)},children:"Logout"})})})]})]})}const wM="/assets/d593b70d-edae-41df-9635-ffdba9cdcc01-corrigido-1xO3LZOC.jpg",RM="/assets/a5ceef26-0a61-4af3-b0c9-f50f87506a71-corrigido-D6iQq9J2.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function IM(i,e,t){return(e=OM(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function TT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,a)}return t}function re(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?TT(Object(t),!0).forEach(function(a){IM(i,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):TT(Object(t)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(t,a))})}return i}function CM(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var a=t.call(i,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function OM(i){var e=CM(i,"string");return typeof e=="symbol"?e:e+""}const bT=()=>{};let iy={},WS={},ZS=null,JS={mark:bT,measure:bT};try{typeof window<"u"&&(iy=window),typeof document<"u"&&(WS=document),typeof MutationObserver<"u"&&(ZS=MutationObserver),typeof performance<"u"&&(JS=performance)}catch{}const{userAgent:AT=""}=iy.navigator||{},la=iy,rt=WS,ST=ZS,Ef=JS;la.document;const dr=!!rt.documentElement&&!!rt.head&&typeof rt.addEventListener=="function"&&typeof rt.createElement=="function",e1=~AT.indexOf("MSIE")||~AT.indexOf("Trident/");var xM=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,DM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,t1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},NM={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},n1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nn="classic",xh="duotone",PM="sharp",MM="sharp-duotone",i1=[nn,xh,PM,MM],kM={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},VM={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},LM=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),UM={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},jM=["fak","fa-kit","fakd","fa-kit-duotone"],wT={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},zM=["kit"],BM={kit:{"fa-kit":"fak"}},FM=["fak","fakd"],qM={kit:{fak:"fa-kit"}},RT={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Tf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},HM=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],GM=["fak","fa-kit","fakd","fa-kit-duotone"],KM={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},YM={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},QM={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},zp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$M=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Bp=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...HM,...$M],XM=["solid","regular","light","thin","duotone","brands"],r1=[1,2,3,4,5,6,7,8,9,10],WM=r1.concat([11,12,13,14,15,16,17,18,19,20]),ZM=[...Object.keys(QM),...XM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Tf.GROUP,Tf.SWAP_OPACITY,Tf.PRIMARY,Tf.SECONDARY].concat(r1.map(i=>"".concat(i,"x"))).concat(WM.map(i=>"w-".concat(i))),JM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const cr="___FONT_AWESOME___",Fp=16,a1="fa",s1="svg-inline--fa",as="data-fa-i2svg",qp="data-fa-pseudo-element",ek="data-fa-pseudo-element-pending",ry="data-prefix",ay="data-icon",IT="fontawesome-i2svg",tk="async",nk=["HTML","HEAD","STYLE","SCRIPT"],o1=(()=>{try{return!0}catch{return!1}})();function Uu(i){return new Proxy(i,{get(e,t){return t in e?e[t]:e[nn]}})}const l1=re({},t1);l1[nn]=re(re(re(re({},{"fa-duotone":"duotone"}),t1[nn]),wT.kit),wT["kit-duotone"]);const ik=Uu(l1),Hp=re({},UM);Hp[nn]=re(re(re(re({},{duotone:"fad"}),Hp[nn]),RT.kit),RT["kit-duotone"]);const CT=Uu(Hp),Gp=re({},zp);Gp[nn]=re(re({},Gp[nn]),qM.kit);const sy=Uu(Gp),Kp=re({},YM);Kp[nn]=re(re({},Kp[nn]),BM.kit);Uu(Kp);const rk=xM,u1="fa-layers-text",ak=DM,sk=re({},kM);Uu(sk);const ok=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tp=NM,lk=[...zM,...ZM],lu=la.FontAwesomeConfig||{};function uk(i){var e=rt.querySelector("script["+i+"]");if(e)return e.getAttribute(i)}function ck(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}rt&&typeof rt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,a]=e;const o=ck(uk(t));o!=null&&(lu[a]=o)});const c1={styleDefault:"solid",familyDefault:nn,cssPrefix:a1,replacementClass:s1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};lu.familyPrefix&&(lu.cssPrefix=lu.familyPrefix);const Oo=re(re({},c1),lu);Oo.autoReplaceSvg||(Oo.observeMutations=!1);const me={};Object.keys(c1).forEach(i=>{Object.defineProperty(me,i,{enumerable:!0,set:function(e){Oo[i]=e,uu.forEach(t=>t(me))},get:function(){return Oo[i]}})});Object.defineProperty(me,"familyPrefix",{enumerable:!0,set:function(i){Oo.cssPrefix=i,uu.forEach(e=>e(me))},get:function(){return Oo.cssPrefix}});la.FontAwesomeConfig=me;const uu=[];function fk(i){return uu.push(i),()=>{uu.splice(uu.indexOf(i),1)}}const Hr=Fp,mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hk(i){if(!i||!dr)return;const e=rt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=i;const t=rt.head.childNodes;let a=null;for(let o=t.length-1;o>-1;o--){const u=t[o],f=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=u)}return rt.head.insertBefore(e,a),i}const dk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bu(){let i=12,e="";for(;i-- >0;)e+=dk[Math.random()*62|0];return e}function Uo(i){const e=[];for(let t=(i||[]).length>>>0;t--;)e[t]=i[t];return e}function oy(i){return i.classList?Uo(i.classList):(i.getAttribute("class")||"").split(" ").filter(e=>e)}function f1(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mk(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,'="').concat(f1(i[t]),'" '),"").trim()}function Dh(i){return Object.keys(i||{}).reduce((e,t)=>e+"".concat(t,": ").concat(i[t].trim(),";"),"")}function ly(i){return i.size!==mi.size||i.x!==mi.x||i.y!==mi.y||i.rotate!==mi.rotate||i.flipX||i.flipY}function pk(i){let{transform:e,containerWidth:t,iconWidth:a}=i;const o={transform:"translate(".concat(t/2," 256)")},u="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),m="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(u," ").concat(f," ").concat(m)},g={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:p,path:g}}function gk(i){let{transform:e,width:t=Fp,height:a=Fp,startCentered:o=!1}=i,u="";return o&&e1?u+="translate(".concat(e.x/Hr-t/2,"em, ").concat(e.y/Hr-a/2,"em) "):o?u+="translate(calc(-50% + ".concat(e.x/Hr,"em), calc(-50% + ").concat(e.y/Hr,"em)) "):u+="translate(".concat(e.x/Hr,"em, ").concat(e.y/Hr,"em) "),u+="scale(".concat(e.size/Hr*(e.flipX?-1:1),", ").concat(e.size/Hr*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var yk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function h1(){const i=a1,e=s1,t=me.cssPrefix,a=me.replacementClass;let o=yk;if(t!==i||a!==e){const u=new RegExp("\\.".concat(i,"\\-"),"g"),f=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(e),"g");o=o.replace(u,".".concat(t,"-")).replace(f,"--".concat(t,"-")).replace(m,".".concat(a))}return o}let OT=!1;function np(){me.autoAddCss&&!OT&&(hk(h1()),OT=!0)}var vk={mixout(){return{dom:{css:h1,insertCss:np}}},hooks(){return{beforeDOMElementCreation(){np()},beforeI2svg(){np()}}}};const fr=la||{};fr[cr]||(fr[cr]={});fr[cr].styles||(fr[cr].styles={});fr[cr].hooks||(fr[cr].hooks={});fr[cr].shims||(fr[cr].shims=[]);var pi=fr[cr];const d1=[],m1=function(){rt.removeEventListener("DOMContentLoaded",m1),ah=1,d1.map(i=>i())};let ah=!1;dr&&(ah=(rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(rt.readyState),ah||rt.addEventListener("DOMContentLoaded",m1));function _k(i){dr&&(ah?setTimeout(i,0):d1.push(i))}function ju(i){const{tag:e,attributes:t={},children:a=[]}=i;return typeof i=="string"?f1(i):"<".concat(e," ").concat(mk(t),">").concat(a.map(ju).join(""),"</").concat(e,">")}function xT(i,e,t){if(i&&i[e]&&i[e][t])return{prefix:e,iconName:t,icon:i[e][t]}}var ip=function(e,t,a,o){var u=Object.keys(e),f=u.length,m=t,p,g,E;for(a===void 0?(p=1,E=e[u[0]]):(p=0,E=a);p<f;p++)g=u[p],E=m(E,e[g],g,e);return E};function Ek(i){const e=[];let t=0;const a=i.length;for(;t<a;){const o=i.charCodeAt(t++);if(o>=55296&&o<=56319&&t<a){const u=i.charCodeAt(t++);(u&64512)==56320?e.push(((o&1023)<<10)+(u&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function Yp(i){const e=Ek(i);return e.length===1?e[0].toString(16):null}function Tk(i,e){const t=i.length;let a=i.charCodeAt(e),o;return a>=55296&&a<=56319&&t>e+1&&(o=i.charCodeAt(e+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function DT(i){return Object.keys(i).reduce((e,t)=>{const a=i[t];return!!a.icon?e[a.iconName]=a.icon:e[t]=a,e},{})}function Qp(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=t,o=DT(e);typeof pi.hooks.addPack=="function"&&!a?pi.hooks.addPack(i,DT(e)):pi.styles[i]=re(re({},pi.styles[i]||{}),o),i==="fas"&&Qp("fa",e)}const{styles:Au,shims:bk}=pi,p1=Object.keys(sy),Ak=p1.reduce((i,e)=>(i[e]=Object.keys(sy[e]),i),{});let uy=null,g1={},y1={},v1={},_1={},E1={};function Sk(i){return~lk.indexOf(i)}function wk(i,e){const t=e.split("-"),a=t[0],o=t.slice(1).join("-");return a===i&&o!==""&&!Sk(o)?o:null}const T1=()=>{const i=a=>ip(Au,(o,u,f)=>(o[f]=ip(u,a,{}),o),{});g1=i((a,o,u)=>(o[3]&&(a[o[3]]=u),o[2]&&o[2].filter(m=>typeof m=="number").forEach(m=>{a[m.toString(16)]=u}),a)),y1=i((a,o,u)=>(a[u]=u,o[2]&&o[2].filter(m=>typeof m=="string").forEach(m=>{a[m]=u}),a)),E1=i((a,o,u)=>{const f=o[2];return a[u]=u,f.forEach(m=>{a[m]=u}),a});const e="far"in Au||me.autoFetchSvg,t=ip(bk,(a,o)=>{const u=o[0];let f=o[1];const m=o[2];return f==="far"&&!e&&(f="fas"),typeof u=="string"&&(a.names[u]={prefix:f,iconName:m}),typeof u=="number"&&(a.unicodes[u.toString(16)]={prefix:f,iconName:m}),a},{names:{},unicodes:{}});v1=t.names,_1=t.unicodes,uy=Nh(me.styleDefault,{family:me.familyDefault})};fk(i=>{uy=Nh(i.styleDefault,{family:me.familyDefault})});T1();function cy(i,e){return(g1[i]||{})[e]}function Rk(i,e){return(y1[i]||{})[e]}function Za(i,e){return(E1[i]||{})[e]}function b1(i){return v1[i]||{prefix:null,iconName:null}}function Ik(i){const e=_1[i],t=cy("fas",i);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ua(){return uy}const A1=()=>({prefix:null,iconName:null,rest:[]});function Ck(i){let e=nn;const t=p1.reduce((a,o)=>(a[o]="".concat(me.cssPrefix,"-").concat(o),a),{});return i1.forEach(a=>{(i.includes(t[a])||i.some(o=>Ak[a].includes(o)))&&(e=a)}),e}function Nh(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=nn}=e,a=ik[t][i];if(t===xh&&!i)return"fad";const o=CT[t][i]||CT[t][a],u=i in pi.styles?i:null;return o||u||null}function Ok(i){let e=[],t=null;return i.forEach(a=>{const o=wk(me.cssPrefix,a);o?t=o:a&&e.push(a)}),{iconName:t,rest:e}}function NT(i){return i.sort().filter((e,t,a)=>a.indexOf(e)===t)}function Ph(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let a=null;const o=Bp.concat(GM),u=NT(i.filter(A=>o.includes(A))),f=NT(i.filter(A=>!Bp.includes(A))),m=u.filter(A=>(a=A,!n1.includes(A))),[p=null]=m,g=Ck(u),E=re(re({},Ok(f)),{},{prefix:Nh(p,{family:g})});return re(re(re({},E),Pk({values:i,family:g,styles:Au,config:me,canonical:E,givenPrefix:a})),xk(t,a,E))}function xk(i,e,t){let{prefix:a,iconName:o}=t;if(i||!a||!o)return{prefix:a,iconName:o};const u=e==="fa"?b1(o):{},f=Za(a,o);return o=u.iconName||f||o,a=u.prefix||a,a==="far"&&!Au.far&&Au.fas&&!me.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}const Dk=i1.filter(i=>i!==nn||i!==xh),Nk=Object.keys(zp).filter(i=>i!==nn).map(i=>Object.keys(zp[i])).flat();function Pk(i){const{values:e,family:t,canonical:a,givenPrefix:o="",styles:u={},config:f={}}=i,m=t===xh,p=e.includes("fa-duotone")||e.includes("fad"),g=f.familyDefault==="duotone",E=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(p||g||E)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Dk.includes(t)&&(Object.keys(u).find(S=>Nk.includes(S))||f.autoFetchSvg)){const S=LM.get(t).defaultShortPrefixId;a.prefix=S,a.iconName=Za(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=ua()||"fas"),a}class Mk{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(u=>{this.definitions[u]=re(re({},this.definitions[u]||{}),o[u]),Qp(u,o[u]);const f=sy[nn][u];f&&Qp(f,o[u]),T1()})}reset(){this.definitions={}}_pullDefinitions(e,t){const a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(o=>{const{prefix:u,iconName:f,icon:m}=a[o],p=m[2];e[u]||(e[u]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[u][g]=m)}),e[u][f]=m}),e}}let PT=[],ho={};const Eo={},kk=Object.keys(Eo);function Vk(i,e){let{mixoutsTo:t}=e;return PT=i,ho={},Object.keys(Eo).forEach(a=>{kk.indexOf(a)===-1&&delete Eo[a]}),PT.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(u=>{typeof o[u]=="function"&&(t[u]=o[u]),typeof o[u]=="object"&&Object.keys(o[u]).forEach(f=>{t[u]||(t[u]={}),t[u][f]=o[u][f]})}),a.hooks){const u=a.hooks();Object.keys(u).forEach(f=>{ho[f]||(ho[f]=[]),ho[f].push(u[f])})}a.provides&&a.provides(Eo)}),t}function $p(i,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];return(ho[i]||[]).forEach(f=>{e=f.apply(null,[e,...a])}),e}function ss(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];(ho[i]||[]).forEach(u=>{u.apply(null,t)})}function ca(){const i=arguments[0],e=Array.prototype.slice.call(arguments,1);return Eo[i]?Eo[i].apply(null,e):void 0}function Xp(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:e}=i;const t=i.prefix||ua();if(e)return e=Za(t,e)||e,xT(S1.definitions,t,e)||xT(pi.styles,t,e)}const S1=new Mk,Lk=()=>{me.autoReplaceSvg=!1,me.observeMutations=!1,ss("noAuto")},Uk={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dr?(ss("beforeI2svg",i),ca("pseudoElements2svg",i),ca("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=i;me.autoReplaceSvg===!1&&(me.autoReplaceSvg=!0),me.observeMutations=!0,_k(()=>{zk({autoReplaceSvgRoot:e}),ss("watch",i)})}},jk={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Za(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const e=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],t=Nh(i[0]);return{prefix:t,iconName:Za(t,e)||e}}if(typeof i=="string"&&(i.indexOf("".concat(me.cssPrefix,"-"))>-1||i.match(rk))){const e=Ph(i.split(" "),{skipLookups:!0});return{prefix:e.prefix||ua(),iconName:Za(e.prefix,e.iconName)||e.iconName}}if(typeof i=="string"){const e=ua();return{prefix:e,iconName:Za(e,i)||i}}}},An={noAuto:Lk,config:me,dom:Uk,parse:jk,library:S1,findIconDefinition:Xp,toHtml:ju},zk=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=rt}=i;(Object.keys(pi.styles).length>0||me.autoFetchSvg)&&dr&&me.autoReplaceSvg&&An.dom.i2svg({node:e})};function Mh(i,e){return Object.defineProperty(i,"abstract",{get:e}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(t=>ju(t))}}),Object.defineProperty(i,"node",{get:function(){if(!dr)return;const t=rt.createElement("div");return t.innerHTML=i.html,t.children}}),i}function Bk(i){let{children:e,main:t,mask:a,attributes:o,styles:u,transform:f}=i;if(ly(f)&&t.found&&!a.found){const{width:m,height:p}=t,g={x:m/p/2,y:.5};o.style=Dh(re(re({},u),{},{"transform-origin":"".concat(g.x+f.x/16,"em ").concat(g.y+f.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function Fk(i){let{prefix:e,iconName:t,children:a,attributes:o,symbol:u}=i;const f=u===!0?"".concat(e,"-").concat(me.cssPrefix,"-").concat(t):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:re(re({},o),{},{id:f}),children:a}]}]}function fy(i){const{icons:{main:e,mask:t},prefix:a,iconName:o,transform:u,symbol:f,title:m,maskId:p,titleId:g,extra:E,watchable:A=!1}=i,{width:S,height:M}=t.found?t:e,k=FM.includes(a),Q=[me.replacementClass,o?"".concat(me.cssPrefix,"-").concat(o):""].filter(le=>E.classes.indexOf(le)===-1).filter(le=>le!==""||!!le).concat(E.classes).join(" ");let L={children:[],attributes:re(re({},E.attributes),{},{"data-prefix":a,"data-icon":o,class:Q,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(M)})};const B=k&&!~E.classes.indexOf("fa-fw")?{width:"".concat(S/M*16*.0625,"em")}:{};A&&(L.attributes[as]=""),m&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(g||bu())},children:[m]}),delete L.attributes.title);const J=re(re({},L),{},{prefix:a,iconName:o,main:e,mask:t,maskId:p,transform:u,symbol:f,styles:re(re({},B),E.styles)}),{children:$,attributes:se}=t.found&&e.found?ca("generateAbstractMask",J)||{children:[],attributes:{}}:ca("generateAbstractIcon",J)||{children:[],attributes:{}};return J.children=$,J.attributes=se,f?Fk(J):Bk(J)}function MT(i){const{content:e,width:t,height:a,transform:o,title:u,extra:f,watchable:m=!1}=i,p=re(re(re({},f.attributes),u?{title:u}:{}),{},{class:f.classes.join(" ")});m&&(p[as]="");const g=re({},f.styles);ly(o)&&(g.transform=gk({transform:o,startCentered:!0,width:t,height:a}),g["-webkit-transform"]=g.transform);const E=Dh(g);E.length>0&&(p.style=E);const A=[];return A.push({tag:"span",attributes:p,children:[e]}),u&&A.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),A}function qk(i){const{content:e,title:t,extra:a}=i,o=re(re(re({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),u=Dh(a.styles);u.length>0&&(o.style=u);const f=[];return f.push({tag:"span",attributes:o,children:[e]}),t&&f.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),f}const{styles:rp}=pi;function Wp(i){const e=i[0],t=i[1],[a]=i.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(me.cssPrefix,"-").concat(tp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(tp.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(me.cssPrefix,"-").concat(tp.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:o}}const Hk={found:!1,width:512,height:512};function Gk(i,e){!o1&&!me.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(e,'" is missing.'))}function Zp(i,e){let t=e;return e==="fa"&&me.styleDefault!==null&&(e=ua()),new Promise((a,o)=>{if(t==="fa"){const u=b1(i)||{};i=u.iconName||i,e=u.prefix||e}if(i&&e&&rp[e]&&rp[e][i]){const u=rp[e][i];return a(Wp(u))}Gk(i,e),a(re(re({},Hk),{},{icon:me.showMissingIcons&&i?ca("missingIconAbstract")||{}:{}}))})}const kT=()=>{},Jp=me.measurePerformance&&Ef&&Ef.mark&&Ef.measure?Ef:{mark:kT,measure:kT},nu='FA "6.7.2"',Kk=i=>(Jp.mark("".concat(nu," ").concat(i," begins")),()=>w1(i)),w1=i=>{Jp.mark("".concat(nu," ").concat(i," ends")),Jp.measure("".concat(nu," ").concat(i),"".concat(nu," ").concat(i," begins"),"".concat(nu," ").concat(i," ends"))};var hy={begin:Kk,end:w1};const Mf=()=>{};function VT(i){return typeof(i.getAttribute?i.getAttribute(as):null)=="string"}function Yk(i){const e=i.getAttribute?i.getAttribute(ry):null,t=i.getAttribute?i.getAttribute(ay):null;return e&&t}function Qk(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(me.replacementClass)}function $k(){return me.autoReplaceSvg===!0?kf.replace:kf[me.autoReplaceSvg]||kf.replace}function Xk(i){return rt.createElementNS("http://www.w3.org/2000/svg",i)}function Wk(i){return rt.createElement(i)}function R1(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=i.tag==="svg"?Xk:Wk}=e;if(typeof i=="string")return rt.createTextNode(i);const a=t(i.tag);return Object.keys(i.attributes||[]).forEach(function(u){a.setAttribute(u,i.attributes[u])}),(i.children||[]).forEach(function(u){a.appendChild(R1(u,{ceFn:t}))}),a}function Zk(i){let e=" ".concat(i.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const kf={replace:function(i){const e=i[0];if(e.parentNode)if(i[1].forEach(t=>{e.parentNode.insertBefore(R1(t),e)}),e.getAttribute(as)===null&&me.keepOriginalSource){let t=rt.createComment(Zk(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(i){const e=i[0],t=i[1];if(~oy(e).indexOf(me.replacementClass))return kf.replace(i);const a=new RegExp("".concat(me.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const u=t[0].attributes.class.split(" ").reduce((f,m)=>(m===me.replacementClass||m.match(a)?f.toSvg.push(m):f.toNode.push(m),f),{toNode:[],toSvg:[]});t[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",u.toNode.join(" "))}const o=t.map(u=>ju(u)).join(`
`);e.setAttribute(as,""),e.innerHTML=o}};function LT(i){i()}function I1(i,e){const t=typeof e=="function"?e:Mf;if(i.length===0)t();else{let a=LT;me.mutateApproach===tk&&(a=la.requestAnimationFrame||LT),a(()=>{const o=$k(),u=hy.begin("mutate");i.map(o),u(),t()})}}let dy=!1;function C1(){dy=!0}function eg(){dy=!1}let sh=null;function UT(i){if(!ST||!me.observeMutations)return;const{treeCallback:e=Mf,nodeCallback:t=Mf,pseudoElementsCallback:a=Mf,observeMutationsRoot:o=rt}=i;sh=new ST(u=>{if(dy)return;const f=ua();Uo(u).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!VT(m.addedNodes[0])&&(me.searchPseudoElements&&a(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&me.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&VT(m.target)&&~ok.indexOf(m.attributeName))if(m.attributeName==="class"&&Yk(m.target)){const{prefix:p,iconName:g}=Ph(oy(m.target));m.target.setAttribute(ry,p||f),g&&m.target.setAttribute(ay,g)}else Qk(m.target)&&t(m.target)})}),dr&&sh.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Jk(){sh&&sh.disconnect()}function e4(i){const e=i.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((a,o)=>{const u=o.split(":"),f=u[0],m=u.slice(1);return f&&m.length>0&&(a[f]=m.join(":").trim()),a},{})),t}function t4(i){const e=i.getAttribute("data-prefix"),t=i.getAttribute("data-icon"),a=i.innerText!==void 0?i.innerText.trim():"";let o=Ph(oy(i));return o.prefix||(o.prefix=ua()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=Rk(o.prefix,i.innerText)||cy(o.prefix,Yp(i.innerText))),!o.iconName&&me.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=i.firstChild.data)),o}function n4(i){const e=Uo(i.attributes).reduce((o,u)=>(o.name!=="class"&&o.name!=="style"&&(o[u.name]=u.value),o),{}),t=i.getAttribute("title"),a=i.getAttribute("data-fa-title-id");return me.autoA11y&&(t?e["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(a||bu()):(e["aria-hidden"]="true",e.focusable="false")),e}function i4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:a,rest:o}=t4(i),u=n4(i),f=$p("parseNodeAttributes",{},i);let m=e.styleParser?e4(i):[];return re({iconName:t,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:a,transform:mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:m,attributes:u}},f)}const{styles:r4}=pi;function O1(i){const e=me.autoReplaceSvg==="nest"?jT(i,{styleParser:!1}):jT(i);return~e.extra.classes.indexOf(u1)?ca("generateLayersText",i,e):ca("generateSvgReplacementMutation",i,e)}function a4(){return[...jM,...Bp]}function zT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dr)return Promise.resolve();const t=rt.documentElement.classList,a=E=>t.add("".concat(IT,"-").concat(E)),o=E=>t.remove("".concat(IT,"-").concat(E)),u=me.autoFetchSvg?a4():n1.concat(Object.keys(r4));u.includes("fa")||u.push("fa");const f=[".".concat(u1,":not([").concat(as,"])")].concat(u.map(E=>".".concat(E,":not([").concat(as,"])"))).join(", ");if(f.length===0)return Promise.resolve();let m=[];try{m=Uo(i.querySelectorAll(f))}catch{}if(m.length>0)a("pending"),o("complete");else return Promise.resolve();const p=hy.begin("onTree"),g=m.reduce((E,A)=>{try{const S=O1(A);S&&E.push(S)}catch(S){o1||S.name==="MissingIcon"&&console.error(S)}return E},[]);return new Promise((E,A)=>{Promise.all(g).then(S=>{I1(S,()=>{a("active"),a("complete"),o("pending"),typeof e=="function"&&e(),p(),E()})}).catch(S=>{p(),A(S)})})}function s4(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;O1(i).then(t=>{t&&I1([t],e)})}function o4(i){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Xp(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:Xp(o||{})),i(a,re(re({},t),{},{mask:o}))}}const l4=function(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,symbol:a=!1,mask:o=null,maskId:u=null,title:f=null,titleId:m=null,classes:p=[],attributes:g={},styles:E={}}=e;if(!i)return;const{prefix:A,iconName:S,icon:M}=i;return Mh(re({type:"icon"},i),()=>(ss("beforeDOMElementCreation",{iconDefinition:i,params:e}),me.autoA11y&&(f?g["aria-labelledby"]="".concat(me.replacementClass,"-title-").concat(m||bu()):(g["aria-hidden"]="true",g.focusable="false")),fy({icons:{main:Wp(M),mask:o?Wp(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:S,transform:re(re({},mi),t),symbol:a,title:f,maskId:u,titleId:m,extra:{attributes:g,styles:E,classes:p}})))};var u4={mixout(){return{icon:o4(l4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=zT,i.nodeCallback=s4,i}}},provides(i){i.i2svg=function(e){const{node:t=rt,callback:a=()=>{}}=e;return zT(t,a)},i.generateSvgReplacementMutation=function(e,t){const{iconName:a,title:o,titleId:u,prefix:f,transform:m,symbol:p,mask:g,maskId:E,extra:A}=t;return new Promise((S,M)=>{Promise.all([Zp(a,f),g.iconName?Zp(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[Q,L]=k;S([e,fy({icons:{main:Q,mask:L},prefix:f,iconName:a,transform:m,symbol:p,maskId:E,title:o,titleId:u,extra:A,watchable:!0})])}).catch(M)})},i.generateAbstractIcon=function(e){let{children:t,attributes:a,main:o,transform:u,styles:f}=e;const m=Dh(f);m.length>0&&(a.style=m);let p;return ly(u)&&(p=ca("generateAbstractTransformGrouping",{main:o,transform:u,containerWidth:o.width,iconWidth:o.width})),t.push(p||o.icon),{children:t,attributes:a}}}},c4={mixout(){return{layer(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Mh({type:"layer"},()=>{ss("beforeDOMElementCreation",{assembler:i,params:e});let a=[];return i(o=>{Array.isArray(o)?o.map(u=>{a=a.concat(u.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(me.cssPrefix,"-layers"),...t].join(" ")},children:a}]})}}}},f4={mixout(){return{counter(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:a=[],attributes:o={},styles:u={}}=e;return Mh({type:"counter",content:i},()=>(ss("beforeDOMElementCreation",{content:i,params:e}),qk({content:i.toString(),title:t,extra:{attributes:o,styles:u,classes:["".concat(me.cssPrefix,"-layers-counter"),...a]}})))}}}},h4={mixout(){return{text(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=mi,title:a=null,classes:o=[],attributes:u={},styles:f={}}=e;return Mh({type:"text",content:i},()=>(ss("beforeDOMElementCreation",{content:i,params:e}),MT({content:i,transform:re(re({},mi),t),title:a,extra:{attributes:u,styles:f,classes:["".concat(me.cssPrefix,"-layers-text"),...o]}})))}}},provides(i){i.generateLayersText=function(e,t){const{title:a,transform:o,extra:u}=t;let f=null,m=null;if(e1){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();f=g.width/p,m=g.height/p}return me.autoA11y&&!a&&(u.attributes["aria-hidden"]="true"),Promise.resolve([e,MT({content:e.innerHTML,width:f,height:m,transform:o,title:a,extra:u,watchable:!0})])}}};const d4=new RegExp('"',"ug"),BT=[1105920,1112319],FT=re(re(re(re({},{FontAwesome:{normal:"fas",400:"fas"}}),VM),JM),KM),tg=Object.keys(FT).reduce((i,e)=>(i[e.toLowerCase()]=FT[e],i),{}),m4=Object.keys(tg).reduce((i,e)=>{const t=tg[e];return i[e]=t[900]||[...Object.entries(t)][0][1],i},{});function p4(i){const e=i.replace(d4,""),t=Tk(e,0),a=t>=BT[0]&&t<=BT[1],o=e.length===2?e[0]===e[1]:!1;return{value:Yp(o?e[0]:e),isSecondary:a||o}}function g4(i,e){const t=i.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),o=isNaN(a)?"normal":a;return(tg[t]||{})[o]||m4[t]}function qT(i,e){const t="".concat(ek).concat(e.replace(":","-"));return new Promise((a,o)=>{if(i.getAttribute(t)!==null)return a();const f=Uo(i.children).filter(S=>S.getAttribute(qp)===e)[0],m=la.getComputedStyle(i,e),p=m.getPropertyValue("font-family"),g=p.match(ak),E=m.getPropertyValue("font-weight"),A=m.getPropertyValue("content");if(f&&!g)return i.removeChild(f),a();if(g&&A!=="none"&&A!==""){const S=m.getPropertyValue("content");let M=g4(p,E);const{value:k,isSecondary:Q}=p4(S),L=g[0].startsWith("FontAwesome");let B=cy(M,k),J=B;if(L){const $=Ik(k);$.iconName&&$.prefix&&(B=$.iconName,M=$.prefix)}if(B&&!Q&&(!f||f.getAttribute(ry)!==M||f.getAttribute(ay)!==J)){i.setAttribute(t,J),f&&i.removeChild(f);const $=i4(),{extra:se}=$;se.attributes[qp]=e,Zp(B,M).then(le=>{const ve=fy(re(re({},$),{},{icons:{main:le,mask:A1()},prefix:M,iconName:J,extra:se,watchable:!0})),N=rt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?i.insertBefore(N,i.firstChild):i.appendChild(N),N.outerHTML=ve.map(R=>ju(R)).join(`
`),i.removeAttribute(t),a()}).catch(o)}else a()}else a()})}function y4(i){return Promise.all([qT(i,"::before"),qT(i,"::after")])}function v4(i){return i.parentNode!==document.head&&!~nk.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(qp)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function HT(i){if(dr)return new Promise((e,t)=>{const a=Uo(i.querySelectorAll("*")).filter(v4).map(y4),o=hy.begin("searchPseudoElements");C1(),Promise.all(a).then(()=>{o(),eg(),e()}).catch(()=>{o(),eg(),t()})})}var _4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=HT,i}}},provides(i){i.pseudoElements2svg=function(e){const{node:t=rt}=e;me.searchPseudoElements&&HT(t)}}};let GT=!1;var E4={mixout(){return{dom:{unwatch(){C1(),GT=!0}}}},hooks(){return{bootstrap(){UT($p("mutationObserverCallbacks",{}))},noAuto(){Jk()},watch(i){const{observeMutationsRoot:e}=i;GT?eg():UT($p("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const KT=i=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((t,a)=>{const o=a.toLowerCase().split("-"),u=o[0];let f=o.slice(1).join("-");if(u&&f==="h")return t.flipX=!0,t;if(u&&f==="v")return t.flipY=!0,t;if(f=parseFloat(f),isNaN(f))return t;switch(u){case"grow":t.size=t.size+f;break;case"shrink":t.size=t.size-f;break;case"left":t.x=t.x-f;break;case"right":t.x=t.x+f;break;case"up":t.y=t.y-f;break;case"down":t.y=t.y+f;break;case"rotate":t.rotate=t.rotate+f;break}return t},e)};var T4={mixout(){return{parse:{transform:i=>KT(i)}}},hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-transform");return t&&(i.transform=KT(t)),i}}},provides(i){i.generateAbstractTransformGrouping=function(e){let{main:t,transform:a,containerWidth:o,iconWidth:u}=e;const f={transform:"translate(".concat(o/2," 256)")},m="translate(".concat(a.x*32,", ").concat(a.y*32,") "),p="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),g="rotate(".concat(a.rotate," 0 0)"),E={transform:"".concat(m," ").concat(p," ").concat(g)},A={transform:"translate(".concat(u/2*-1," -256)")},S={outer:f,inner:E,path:A};return{tag:"g",attributes:re({},S.outer),children:[{tag:"g",attributes:re({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:re(re({},t.icon.attributes),S.path)}]}]}}}};const ap={x:0,y:0,width:"100%",height:"100%"};function YT(i){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||e)&&(i.attributes.fill="black"),i}function b4(i){return i.tag==="g"?i.children:[i]}var A4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-mask"),a=t?Ph(t.split(" ").map(o=>o.trim())):A1();return a.prefix||(a.prefix=ua()),i.mask=a,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(e){let{children:t,attributes:a,main:o,mask:u,maskId:f,transform:m}=e;const{width:p,icon:g}=o,{width:E,icon:A}=u,S=pk({transform:m,containerWidth:E,iconWidth:p}),M={tag:"rect",attributes:re(re({},ap),{},{fill:"white"})},k=g.children?{children:g.children.map(YT)}:{},Q={tag:"g",attributes:re({},S.inner),children:[YT(re({tag:g.tag,attributes:re(re({},g.attributes),S.path)},k))]},L={tag:"g",attributes:re({},S.outer),children:[Q]},B="mask-".concat(f||bu()),J="clip-".concat(f||bu()),$={tag:"mask",attributes:re(re({},ap),{},{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,L]},se={tag:"defs",children:[{tag:"clipPath",attributes:{id:J},children:b4(A)},$]};return t.push(se,{tag:"rect",attributes:re({fill:"currentColor","clip-path":"url(#".concat(J,")"),mask:"url(#".concat(B,")")},ap)}),{children:t,attributes:a}}}},S4={provides(i){let e=!1;la.matchMedia&&(e=la.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const t=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:re(re({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const u=re(re({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:re(re({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:re(re({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:re(re({},u),{},{values:"1;0;1;1;0;1;"})}),t.push(f),t.push({tag:"path",attributes:re(re({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:re(re({},u),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:re(re({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:re(re({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},w4={hooks(){return{parseNodeAttributes(i,e){const t=e.getAttribute("data-fa-symbol"),a=t===null?!1:t===""?!0:t;return i.symbol=a,i}}}},R4=[vk,u4,c4,f4,h4,_4,E4,T4,A4,S4,w4];Vk(R4,{mixoutsTo:An});An.noAuto;An.config;An.library;An.dom;const ng=An.parse;An.findIconDefinition;An.toHtml;const I4=An.icon;An.layer;An.text;An.counter;var sp={exports:{}},op,QT;function C4(){if(QT)return op;QT=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return op=i,op}var lp,$T;function O4(){if($T)return lp;$T=1;var i=C4();function e(){}function t(){}return t.resetWarningCache=e,lp=function(){function a(f,m,p,g,E,A){if(A!==i){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},lp}var XT;function x4(){return XT||(XT=1,sp.exports=O4()()),sp.exports}var D4=x4();const ke=tb(D4);function WT(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,a)}return t}function di(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?WT(Object(t),!0).forEach(function(a){mo(i,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):WT(Object(t)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(t,a))})}return i}function oh(i){"@babel/helpers - typeof";return oh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oh(i)}function mo(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function N4(i,e){if(i==null)return{};var t={},a=Object.keys(i),o,u;for(u=0;u<a.length;u++)o=a[u],!(e.indexOf(o)>=0)&&(t[o]=i[o]);return t}function P4(i,e){if(i==null)return{};var t=N4(i,e),a,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(o=0;o<u.length;o++)a=u[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(t[a]=i[a])}return t}function ig(i){return M4(i)||k4(i)||V4(i)||L4()}function M4(i){if(Array.isArray(i))return rg(i)}function k4(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function V4(i,e){if(i){if(typeof i=="string")return rg(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rg(i,e)}}function rg(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=i[t];return a}function L4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U4(i){var e,t=i.beat,a=i.fade,o=i.beatFade,u=i.bounce,f=i.shake,m=i.flash,p=i.spin,g=i.spinPulse,E=i.spinReverse,A=i.pulse,S=i.fixedWidth,M=i.inverse,k=i.border,Q=i.listItem,L=i.flip,B=i.size,J=i.rotation,$=i.pull,se=(e={"fa-beat":t,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":u,"fa-shake":f,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":E,"fa-spin-pulse":g,"fa-pulse":A,"fa-fw":S,"fa-inverse":M,"fa-border":k,"fa-li":Q,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},mo(e,"fa-".concat(B),typeof B<"u"&&B!==null),mo(e,"fa-rotate-".concat(J),typeof J<"u"&&J!==null&&J!==0),mo(e,"fa-pull-".concat($),typeof $<"u"&&$!==null),mo(e,"fa-swap-opacity",i.swapOpacity),e);return Object.keys(se).map(function(le){return se[le]?le:null}).filter(function(le){return le})}function j4(i){return i=i-0,i===i}function x1(i){return j4(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var z4=["style"];function B4(i){return i.charAt(0).toUpperCase()+i.slice(1)}function F4(i){return i.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var a=t.indexOf(":"),o=x1(t.slice(0,a)),u=t.slice(a+1).trim();return o.startsWith("webkit")?e[B4(o)]=u:e[o]=u,e},{})}function D1(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(p){return D1(i,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,g){var E=e.attributes[g];switch(g){case"class":p.attrs.className=E,delete e.attributes.class;break;case"style":p.attrs.style=F4(E);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=E:p.attrs[x1(g)]=E}return p},{attrs:{}}),u=t.style,f=u===void 0?{}:u,m=P4(t,z4);return o.attrs.style=di(di({},o.attrs.style),f),i.apply(void 0,[e.tag,di(di({},o.attrs),m)].concat(ig(a)))}var N1=!1;try{N1=!0}catch{}function q4(){if(!N1&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function ZT(i){if(i&&oh(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(ng.icon)return ng.icon(i);if(i===null)return null;if(i&&oh(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function up(i,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?mo({},i,e):{}}var JT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},po=nb.forwardRef(function(i,e){var t=di(di({},JT),i),a=t.icon,o=t.mask,u=t.symbol,f=t.className,m=t.title,p=t.titleId,g=t.maskId,E=ZT(a),A=up("classes",[].concat(ig(U4(t)),ig((f||"").split(" ")))),S=up("transform",typeof t.transform=="string"?ng.transform(t.transform):t.transform),M=up("mask",ZT(o)),k=I4(E,di(di(di(di({},A),S),M),{},{symbol:u,title:m,titleId:p,maskId:g}));if(!k)return q4("Could not find icon",E),null;var Q=k.abstract,L={ref:e};return Object.keys(t).forEach(function(B){JT.hasOwnProperty(B)||(L[B]=t[B])}),H4(Q[0],L)});po.displayName="FontAwesomeIcon";po.propTypes={beat:ke.bool,border:ke.bool,beatFade:ke.bool,bounce:ke.bool,className:ke.string,fade:ke.bool,flash:ke.bool,mask:ke.oneOfType([ke.object,ke.array,ke.string]),maskId:ke.string,fixedWidth:ke.bool,inverse:ke.bool,flip:ke.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ke.oneOfType([ke.object,ke.array,ke.string]),listItem:ke.bool,pull:ke.oneOf(["right","left"]),pulse:ke.bool,rotation:ke.oneOf([0,90,180,270]),shake:ke.bool,size:ke.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ke.bool,spinPulse:ke.bool,spinReverse:ke.bool,symbol:ke.oneOfType([ke.bool,ke.string]),title:ke.string,titleId:ke.string,transform:ke.oneOfType([ke.string,ke.object]),swapOpacity:ke.bool};var H4=D1.bind(null,nb.createElement);const G4=()=>{const[i,e]=Y.useState(window.innerWidth<=768),[t,a]=Y.useState(null);return Y.useEffect(()=>{const o=()=>{e(window.innerWidth<=768)};window.addEventListener("resize",o)},[]),Y.useEffect(()=>{const o=iA(Tu,u=>{a(u)});return()=>o},[]),C.jsxs("section",{children:[C.jsx("div",{className:"container-imagem",children:C.jsx("img",{src:wM,alt:""})}),i&&C.jsx("div",{className:"container-imagem-mobile",children:C.jsx("img",{src:RM,alt:""})}),C.jsx("div",{className:"container-buttons",children:C.jsxs("div",{className:"list",children:[C.jsx("div",{children:C.jsx(Hn,{to:"PetEncontrados",children:C.jsxs("button",{className:"button1",children:[" ",C.jsx(po,{icon:_T,size:"1x",color:"#FFF"})," Cadastrar Pet Encontrado"]})})}),C.jsx("div",{children:C.jsx(Hn,{to:t?"CadastroPet":"/Login",children:C.jsxs("button",{className:"button2",children:[C.jsx(po,{icon:ET,size:"1x",color:"#FFF"})," Cadastre seu Pet"]})})})]})}),i&&C.jsx("div",{className:"container-buttons-mobile",children:C.jsxs("div",{className:"list-mobile",children:[C.jsx("div",{children:C.jsx(Hn,{to:"PetEncontrados",children:C.jsxs("button",{className:"button1",children:[" ",C.jsx(po,{icon:_T,size:"1x",color:"#FFF"})," Cadastrar Pet Encontrado"]})})}),C.jsx("div",{children:C.jsx(Hn,{to:"CadastroPet",children:C.jsxs("button",{className:"button2",children:[C.jsx(po,{icon:ET,size:"1x",color:"#FFF"})," Cadastre seu Pet"]})})})]})})]})},K4=()=>{const[i,e]=Y.useState(""),[t,a]=Y.useState(""),[o,u]=Y.useState(""),[f,m]=Y.useState(""),[p,g]=Y.useState(""),[E,A]=Y.useState(""),[S,M]=Y.useState(""),[k,Q]=Y.useState(""),[L,B]=Y.useState(""),J={cahorro:["Labrador","Bulldog","Poodle","Golden Retriever"],gato:["Persa","Siamês","Maine Coon","Sphynx"],outro:["Coelho","Hamster","Papagaio","Tartaruga"],genero:["Macho","Fêmea","Não indentificado"]},$=w=>(w=w.replace(/\D/g,""),w.length<=2?`(${w}`:w.length<=6?`(${w.slice(0,2)}) ${w.slice(2)}`:`(${w.slice(0,2)}) ${w.slice(2,7)}-${w.slice(7,11)}`),se=w=>{let x=w.target.value;x=x.replace(/\D/g,""),x.length<=11&&m($(x))},le=()=>{m($(f))},ve=()=>{m(f.replace(/\D/g,""))},N=w=>{if(w.key==="Backspace"){let x=f.replace(/\D/g,"");x=x.slice(0,-1),m($(x)),w.preventDefault()}},R=async w=>{if(w.preventDefault(),!i||!t||!o||!f||!E||!S||!k||!p){alert("Por favor, preencha os campos. ");return}try{await KS(jp(rh,"petsEncontrado"),{nomePet:p,especie:i,raca:t,genero:o,telefone:f,nome:k,endereco:E,email:S,descricao:L,dataCadastro:new Date}),alert("Cadastro realizado com sucesso")}catch(x){console.error("Erro ao cadastrar pet",x),alert("Houve um erro ao cadasr o pet. Tente novamente.")}};return C.jsx("div",{className:"container-principal-form",children:C.jsxs("div",{className:"container-geral",children:[C.jsxs("div",{className:"container-titulo",children:[C.jsx("h2",{children:"Preencha o formulário para cadastrar o pet encontrado"}),C.jsx("p",{children:"Quanto mais informações você colocar, mais fácil ele será encontrado pela família."})]}),C.jsx("form",{className:"container-form",onSubmit:R,children:C.jsxs("div",{className:"form-itens",children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"nome",children:"Digite o identificador do pet"}),C.jsx("input",{type:"text",name:"nome-pet",id:"nome-pet",placeholder:"Digite o código encontrado na coleira do pet",value:p,onChange:w=>g(w.target.value)})]}),C.jsxs("div",{className:"form-select",children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"nome",children:"Espécie"}),C.jsxs("select",{id:"raca",value:i,onChange:w=>{e(w.target.value),a("")},children:[C.jsx("option",{value:"",children:"-Selecione-"}),C.jsx("option",{value:"cahorro",children:"Cachorro"}),C.jsx("option",{value:"gato",children:"Gato"}),C.jsx("option",{value:"outro",children:"Outros"})]})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"raca",children:"Raça"}),C.jsxs("select",{id:"raça",value:t,onChange:w=>a(w.target.value),disabled:!i,children:[C.jsx("option",{value:"",children:"-Selecione-"}),i&&J[i].map(w=>C.jsx("option",{value:w,children:w},w))]})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"nome",children:"Gênero"}),C.jsxs("select",{id:"genero",value:o,onChange:w=>u(w.target.value),children:[C.jsx("option",{value:"",children:"-Selecione-"}),J.genero.map(w=>C.jsx("option",{value:w,children:w},w))]})]})]}),C.jsxs("div",{className:"input-endereco",children:[C.jsx("label",{htmlFor:"nome",children:"Bairro onde o pet foi encontrado"}),C.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o bairro onde você encontrou o pet",value:E,onChange:w=>A(w.target.value)})]}),C.jsxs("div",{style:{marginTop:20},children:[C.jsx("label",{htmlFor:"nome",children:"Nome Completo"}),C.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o seu nome",value:k,onChange:w=>Q(w.target.value)})]}),C.jsxs("div",{className:"form-select",children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"email",children:"E-mail"}),C.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu e-mail",value:S,onChange:w=>M(w.target.value)})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"tel",children:"Telefone para contato"}),C.jsx("input",{type:"tel",id:"tel",name:"tel",placeholder:"(xx) xxxxx-xxxx",maxLength:17,value:f,onChange:se,onFocus:ve,onBlur:le,onKeyDown:N})]})]}),C.jsx("div",{className:"text-area",children:C.jsx("textarea",{name:"",id:"tex-area",placeholder:"Alguma característica única/diferenciada?",value:L,onChange:w=>B(w.target.value)})}),C.jsx("div",{className:"botao-cadastrar",children:C.jsx("button",{type:"submit",children:"Cadastrar"})})]})})]})})},Y4="/assets/undraw_shopping_a55o-Drfkb-Um.svg";function Q4(){const[i,e]=Y.useState({nome:"",email:"",bairro:"",senha:"",confirmarSenha:""}),t=async o=>{e({...i,[o.target.name]:o.target.value})},a=async o=>{if(o.preventDefault(),i.senha!==i.confirmarSenha){alert("As senhas não coincidem");return}try{const f=(await hO(Tu,i.email,i.senha)).user;await YP(MS(rh,"usuarios",f.uid),{nome:i.nome,email:i.email,localdiade:i.bairro,senha:i.senha}),alert("Cadastro realiazdo com sucesso! ")}catch(u){console.error("Erro ao cadastrar usuario! "),alert("Erro ao cadastrar:"+u.message)}};return C.jsxs("div",{children:[C.jsxs("div",{className:"trocar",children:[C.jsx("div",{children:C.jsx(fu,{to:"/Login",children:C.jsx("h1",{className:"login-h1",children:"Login"})})}),C.jsx("div",{children:C.jsx(fu,{to:"/CadastroUsuario",children:C.jsx("h1",{className:"cadastro-h1",children:"Cadastro"})})})]}),C.jsx("div",{className:"container",children:C.jsxs("div",{className:"geral",children:[C.jsx("div",{className:"div-img",children:C.jsx("img",{src:Y4,alt:""})}),C.jsx("div",{className:"form-container",children:C.jsxs("form",{className:"form",onSubmit:a,children:[C.jsxs("div",{className:"form-header",children:[C.jsxs("div",{className:"titulo",children:[C.jsx("h2",{children:"Cadastre-se"}),C.jsx("div",{})]}),C.jsx("div",{className:"login-button",children:C.jsx(Hn,{to:"/Login",children:C.jsx("button",{type:"button",children:"Entrar"})})})]}),C.jsxs("div",{className:"div-inputs",children:[C.jsxs("div",{className:"input",children:[C.jsx("label",{htmlFor:"nome",children:"Nome Completo"}),C.jsx("input",{type:"text",id:"nome",name:"nome",placeholder:"Digite seu nome",value:i.nome,onChange:t})]}),C.jsxs("div",{className:"input",children:[C.jsx("label",{htmlFor:"nome",children:"E-mail"}),C.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu e-mail",value:i.email,onChange:t})]}),C.jsxs("div",{className:"input",children:[C.jsx("label",{htmlFor:"nome",children:"Localidade"}),C.jsx("input",{type:"text",id:"bairro",name:"bairro",placeholder:"Digite o local onde você reside",value:i.bairro,onChange:t})]}),C.jsxs("div",{className:"input",children:[C.jsx("label",{htmlFor:"nome",children:"Senha"}),C.jsx("input",{type:"password",id:"senha",name:"senha",placeholder:"Digite sua senha",value:i.senha,onChange:t})]}),C.jsxs("div",{className:"input",children:[C.jsx("label",{htmlFor:"nome",children:"Confirmar senha"}),C.jsx("input",{type:"password",id:"confirmarSenha",name:"confirmarSenha",placeholder:"Confirme sua senha",value:i.confirmarSenha,onChange:t})]}),C.jsx("div",{className:"cadastro",children:C.jsx("div",{children:C.jsx("button",{type:"submit",children:"Enviar"})})})]})]})})]})})]})}const $4=()=>{const[i,e]=Y.useState(""),[t,a]=Y.useState(""),o=og(),u=async f=>{f.preventDefault();try{await dO(Tu,i,t),alert("Login realizado com sucesso! "),o("/")}catch(m){console.error("Erro ao fazer login",m),alert("Erro ao fazer login: "+m.message)}};return C.jsxs("div",{children:[C.jsxs("div",{className:"trocar",children:[C.jsx("div",{children:C.jsx(fu,{to:"/Login",className:({activate:f})=>f?"link-ativo":"link-inativo",children:C.jsx("h1",{children:"Login"})})}),C.jsx("div",{children:C.jsx(fu,{to:"/CadastroUsuario",className:({activate:f})=>f?"link-ativo":"link-inativo",children:C.jsx("h1",{children:"Cadastro"})})})]}),C.jsx("div",{className:"container-login",children:C.jsxs("form",{className:"form-login",onSubmit:u,children:[C.jsxs("div",{className:"titulo-login",children:[C.jsx("h1",{children:"Login"}),C.jsx("div",{className:"linha-login"})]}),C.jsxs("div",{className:"inputs-login",children:[C.jsxs("div",{className:"inputs-",children:[C.jsx("label",{htmlFor:"email",children:"Seu e-mail"}),C.jsx("input",{type:"text",name:"email",id:"email",value:i,onChange:f=>e(f.target.value)})]}),C.jsxs("div",{className:"inputs-",children:[C.jsx("label",{htmlFor:"senha",children:"Sua senha"}),C.jsx("input",{type:"password",name:"senha",id:"senha",value:t,onChange:f=>a(f.target.value)})]})]}),C.jsx("div",{className:"logar",children:C.jsx("button",{type:"submit",children:"Logar"})}),C.jsxs("div",{className:"semconta",children:[C.jsx("h4",{children:"Ainda não tem conta?"}),C.jsx(Hn,{to:"/CadastroUsuario",children:C.jsx("button",{type:"button",children:"Cadastre-se"})})]})]})})]})},Ht=[];for(let i=0;i<256;++i)Ht.push((i+256).toString(16).slice(1));function X4(i,e=0){return(Ht[i[e+0]]+Ht[i[e+1]]+Ht[i[e+2]]+Ht[i[e+3]]+"-"+Ht[i[e+4]]+Ht[i[e+5]]+"-"+Ht[i[e+6]]+Ht[i[e+7]]+"-"+Ht[i[e+8]]+Ht[i[e+9]]+"-"+Ht[i[e+10]]+Ht[i[e+11]]+Ht[i[e+12]]+Ht[i[e+13]]+Ht[i[e+14]]+Ht[i[e+15]]).toLowerCase()}let cp;const W4=new Uint8Array(16);function Z4(){if(!cp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");cp=crypto.getRandomValues.bind(crypto)}return cp(W4)}const J4=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),eb={randomUUID:J4};function eV(i,e,t){var o;if(eb.randomUUID&&!i)return eb.randomUUID();i=i||{};const a=i.random??((o=i.rng)==null?void 0:o.call(i))??Z4();if(a.length<16)throw new Error("Random bytes length must be >= 16");return a[6]=a[6]&15|64,a[8]=a[8]&63|128,X4(a)}const tV="f54f446538856c6595086ab3bf8aa9dc",nV=()=>{const[i,e]=Y.useState(""),[t,a]=Y.useState(""),[o,u]=Y.useState(""),[f,m]=Y.useState(""),[p,g]=Y.useState(null),[E,A]=Y.useState(!1),[S,M]=Y.useState(""),k={cahorro:["Labrador Retriever","Shih Tzu","Poodle","Bulldog Francês","Yorkshire Terrier","Golden Retriever","Pinscher","Rottweiler","Pastor Alemão","Dachshund (Salsicha)","Maltês","Spitz","Pit Bull","Doberman","Border Collie","Husky Siberiano","Cocker Spaniel","Beagle","Lhasa Apso","SRD (vira-lata)"],gato:["Persa","Siamês","Maine Coon","Ragdoll","Sphynx","Bengal","Angorá","Britânico de Pelo Curto","Exótico","Americano de Pelo Curto","Pelo Curto Brasileiro","SRD (Sem Raça Definida)"],outro:["Coelho","Hamster","Papagaio","Tartaruga"],genero:["Macho","Fêmea","Não indentificado"]},Q=async()=>{let B,J=!0;for(;J;){B=eV();const $=jP(jp(rh,"pets"),zP("id","==",B));J=!(await KP($)).empty}return B},L=async B=>{if(B.preventDefault(),!p){alert("Escolha uma imagem primeiro");return}A(!0);const J=new FormData;J.append("image",p,p.name);try{const se=await(await fetch(`https://api.imgbb.com/1/upload?key=${tV}`,{method:"POST",body:J})).json();console.log("Resposta da API ImgBB:",se);const le=await Q();if(se.success){const ve=se.data.url;m(ve),await KS(jp(rh,"pets"),{id:le,especie:t,raca:i,genero:o,imagem:ve,descricao:S,dataCadastro:new Date}),alert("Cadastro efetuado com sucesso!"),a(""),e(""),u(""),g(null),m(""),M(""),document.getElementById("form").reset()}else alert("Erro ao enviar imagem")}catch($){console.error("Erro no upload:",$),alert("Erro ao enviar imagem")}finally{A(!1)}};return C.jsx("div",{className:"container-cadastropet",children:C.jsx("div",{className:"container-form-cadastro",children:C.jsxs("div",{id:"list",children:[C.jsxs("div",{id:"container-titulos",children:[C.jsx("h1",{children:"Cadastre seu pet"}),C.jsx("div",{style:{display:"block"},children:C.jsx("div",{className:"linha"})})]}),C.jsx("form",{id:"form",onSubmit:L,children:C.jsxs("div",{id:"group-input",children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"",children:"Nome"}),C.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o nome do pet"})]}),C.jsxs("div",{className:"input-flex",children:[C.jsxs("div",{className:"espaco",children:[C.jsx("label",{htmlFor:"",children:"Espécie"}),C.jsxs("select",{id:"especie",value:t,onChange:B=>{a(B.target.value),e("")},children:[C.jsx("option",{value:"",children:"-Selecione-"}),C.jsx("option",{value:"cahorro",children:"Cachorro"}),C.jsx("option",{value:"gato",children:"Gato"}),C.jsx("option",{value:"outro",children:"Outros"})]})]}),C.jsxs("div",{className:"espaco",children:[C.jsx("label",{htmlFor:"",children:"Raça"}),C.jsxs("select",{id:"raca",value:i,onChange:B=>e(B.target.value),disabled:!t,children:[C.jsx("option",{value:"",children:"-Selecione-"}),t&&k[t].map(B=>C.jsx("option",{value:B,children:B},B))]})]}),C.jsxs("div",{className:"espaco",children:[C.jsx("label",{htmlFor:"",children:"Gênero"}),C.jsxs("select",{id:"raca",value:o,onChange:B=>u(B.target.value),children:[C.jsx("option",{value:"",children:"-Selecione-"}),k.genero.map(B=>C.jsx("option",{value:B,children:B},B))]})]})]}),C.jsxs("div",{className:"input-flex2",children:[C.jsxs("div",{style:{paddingTop:30},children:[C.jsx("label",{htmlFor:"",children:"Idade"}),C.jsx("input",{type:"number",name:"idade",id:"idade",placeholder:"Digite a idade  ",className:"mobile1"})]}),C.jsxs("div",{style:{paddingTop:30},children:[C.jsx("label",{htmlFor:"",children:"Histórico de vacinas"}),C.jsx("input",{type:"text",name:"vacina",id:"vacina",placeholder:"(Opcional)",className:"mobile2"})]})]}),C.jsx("div",{className:"container-foto",children:C.jsxs("div",{children:[C.jsx("label",{htmlFor:""}),C.jsx("input",{type:"file",accept:"image/*",onChange:B=>g(B.target.files[0])})]})}),C.jsx("div",{className:"text-area2",children:C.jsx("textarea",{name:"",id:"tex-area2",placeholder:"Alguma característica única/diferenciada?",value:S,onChange:B=>M(B.target.value)})}),C.jsx("div",{id:"botao-enviar",children:C.jsx("button",{type:"submit",children:"Enviar"})})]})})]})})})};function iV(){return C.jsxs(RI,{children:[C.jsx(SM,{}),C.jsxs(iI,{children:[C.jsx(so,{path:"/",element:C.jsx(G4,{})}),C.jsx(so,{path:"/PetEncontrados",element:C.jsx(K4,{})}),C.jsx(so,{path:"/CadastroUsuario",element:C.jsx(Q4,{})}),C.jsx(so,{path:"/Login",element:C.jsx($4,{})}),C.jsx(so,{path:"/CadastroPet",element:C.jsx(nV,{})})]})]})}hR.createRoot(document.getElementById("root")).render(C.jsx(Y.StrictMode,{children:C.jsx(iV,{})}));
