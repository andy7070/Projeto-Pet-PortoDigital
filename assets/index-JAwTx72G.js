(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function LE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var tm={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function hS(){if(A_)return Rl;A_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:h,ref:o!==void 0?o:null,props:u}}return Rl.Fragment=t,Rl.jsx=n,Rl.jsxs=n,Rl}var S_;function dS(){return S_||(S_=1,tm.exports=hS()),tm.exports}var M=dS(),em={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function mS(){if(w_)return St;w_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function R(x){return x===null||typeof x!="object"?null:(x=S&&x[S]||x["@@iterator"],typeof x=="function"?x:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,W={};function q(x,et,lt){this.props=x,this.context=et,this.refs=W,this.updater=lt||B}q.prototype.isReactComponent={},q.prototype.setState=function(x,et){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,et,"setState")},q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function Y(){}Y.prototype=q.prototype;function nt(x,et,lt){this.props=x,this.context=et,this.refs=W,this.updater=lt||B}var Z=nt.prototype=new Y;Z.constructor=nt,k(Z,q.prototype),Z.isPureReactComponent=!0;var ct=Array.isArray,ut={H:null,A:null,T:null,S:null,V:null},At=Object.prototype.hasOwnProperty;function D(x,et,lt,at,gt,Ct){return lt=Ct.ref,{$$typeof:r,type:x,key:et,ref:lt!==void 0?lt:null,props:Ct}}function w(x,et){return D(x.type,et,void 0,void 0,void 0,x.props)}function A(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function O(x){var et={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(lt){return et[lt]})}var P=/\/+/g;function V(x,et){return typeof x=="object"&&x!==null&&x.key!=null?O(""+x.key):et.toString(36)}function I(){}function Pe(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(I,I):(x.status="pending",x.then(function(et){x.status==="pending"&&(x.status="fulfilled",x.value=et)},function(et){x.status==="pending"&&(x.status="rejected",x.reason=et)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function se(x,et,lt,at,gt){var Ct=typeof x;(Ct==="undefined"||Ct==="boolean")&&(x=null);var bt=!1;if(x===null)bt=!0;else switch(Ct){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(x.$$typeof){case r:case t:bt=!0;break;case E:return bt=x._init,se(bt(x._payload),et,lt,at,gt)}}if(bt)return gt=gt(x),bt=at===""?"."+V(x,0):at,ct(gt)?(lt="",bt!=null&&(lt=bt.replace(P,"$&/")+"/"),se(gt,et,lt,"",function(Fn){return Fn})):gt!=null&&(A(gt)&&(gt=w(gt,lt+(gt.key==null||x&&x.key===gt.key?"":(""+gt.key).replace(P,"$&/")+"/")+bt)),et.push(gt)),1;bt=0;var we=at===""?".":at+":";if(ct(x))for(var Wt=0;Wt<x.length;Wt++)at=x[Wt],Ct=we+V(at,Wt),bt+=se(at,et,lt,Ct,gt);else if(Wt=R(x),typeof Wt=="function")for(x=Wt.call(x),Wt=0;!(at=x.next()).done;)at=at.value,Ct=we+V(at,Wt++),bt+=se(at,et,lt,Ct,gt);else if(Ct==="object"){if(typeof x.then=="function")return se(Pe(x),et,lt,at,gt);throw et=String(x),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return bt}function Q(x,et,lt){if(x==null)return x;var at=[],gt=0;return se(x,at,"","",function(Ct){return et.call(lt,Ct,gt++)}),at}function ot(x){if(x._status===-1){var et=x._result;et=et(),et.then(function(lt){(x._status===0||x._status===-1)&&(x._status=1,x._result=lt)},function(lt){(x._status===0||x._status===-1)&&(x._status=2,x._result=lt)}),x._status===-1&&(x._status=0,x._result=et)}if(x._status===1)return x._result.default;throw x._result}var pt=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function zt(){}return St.Children={map:Q,forEach:function(x,et,lt){Q(x,function(){et.apply(this,arguments)},lt)},count:function(x){var et=0;return Q(x,function(){et++}),et},toArray:function(x){return Q(x,function(et){return et})||[]},only:function(x){if(!A(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},St.Component=q,St.Fragment=n,St.Profiler=o,St.PureComponent=nt,St.StrictMode=a,St.Suspense=g,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ut,St.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ut.H.useMemoCache(x)}},St.cache=function(x){return function(){return x.apply(null,arguments)}},St.cloneElement=function(x,et,lt){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var at=k({},x.props),gt=x.key,Ct=void 0;if(et!=null)for(bt in et.ref!==void 0&&(Ct=void 0),et.key!==void 0&&(gt=""+et.key),et)!At.call(et,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&et.ref===void 0||(at[bt]=et[bt]);var bt=arguments.length-2;if(bt===1)at.children=lt;else if(1<bt){for(var we=Array(bt),Wt=0;Wt<bt;Wt++)we[Wt]=arguments[Wt+2];at.children=we}return D(x.type,gt,void 0,void 0,Ct,at)},St.createContext=function(x){return x={$$typeof:h,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:u,_context:x},x},St.createElement=function(x,et,lt){var at,gt={},Ct=null;if(et!=null)for(at in et.key!==void 0&&(Ct=""+et.key),et)At.call(et,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(gt[at]=et[at]);var bt=arguments.length-2;if(bt===1)gt.children=lt;else if(1<bt){for(var we=Array(bt),Wt=0;Wt<bt;Wt++)we[Wt]=arguments[Wt+2];gt.children=we}if(x&&x.defaultProps)for(at in bt=x.defaultProps,bt)gt[at]===void 0&&(gt[at]=bt[at]);return D(x,Ct,void 0,void 0,null,gt)},St.createRef=function(){return{current:null}},St.forwardRef=function(x){return{$$typeof:m,render:x}},St.isValidElement=A,St.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:ot}},St.memo=function(x,et){return{$$typeof:y,type:x,compare:et===void 0?null:et}},St.startTransition=function(x){var et=ut.T,lt={};ut.T=lt;try{var at=x(),gt=ut.S;gt!==null&&gt(lt,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(zt,pt)}catch(Ct){pt(Ct)}finally{ut.T=et}},St.unstable_useCacheRefresh=function(){return ut.H.useCacheRefresh()},St.use=function(x){return ut.H.use(x)},St.useActionState=function(x,et,lt){return ut.H.useActionState(x,et,lt)},St.useCallback=function(x,et){return ut.H.useCallback(x,et)},St.useContext=function(x){return ut.H.useContext(x)},St.useDebugValue=function(){},St.useDeferredValue=function(x,et){return ut.H.useDeferredValue(x,et)},St.useEffect=function(x,et,lt){var at=ut.H;if(typeof lt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return at.useEffect(x,et)},St.useId=function(){return ut.H.useId()},St.useImperativeHandle=function(x,et,lt){return ut.H.useImperativeHandle(x,et,lt)},St.useInsertionEffect=function(x,et){return ut.H.useInsertionEffect(x,et)},St.useLayoutEffect=function(x,et){return ut.H.useLayoutEffect(x,et)},St.useMemo=function(x,et){return ut.H.useMemo(x,et)},St.useOptimistic=function(x,et){return ut.H.useOptimistic(x,et)},St.useReducer=function(x,et,lt){return ut.H.useReducer(x,et,lt)},St.useRef=function(x){return ut.H.useRef(x)},St.useState=function(x){return ut.H.useState(x)},St.useSyncExternalStore=function(x,et,lt){return ut.H.useSyncExternalStore(x,et,lt)},St.useTransition=function(){return ut.H.useTransition()},St.version="19.1.0",St}var R_;function pp(){return R_||(R_=1,em.exports=mS()),em.exports}var K=pp();const VE=LE(K);var nm={exports:{}},Cl={},im={exports:{}},rm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function pS(){return C_||(C_=1,function(r){function t(Q,ot){var pt=Q.length;Q.push(ot);t:for(;0<pt;){var zt=pt-1>>>1,x=Q[zt];if(0<o(x,ot))Q[zt]=ot,Q[pt]=x,pt=zt;else break t}}function n(Q){return Q.length===0?null:Q[0]}function a(Q){if(Q.length===0)return null;var ot=Q[0],pt=Q.pop();if(pt!==ot){Q[0]=pt;t:for(var zt=0,x=Q.length,et=x>>>1;zt<et;){var lt=2*(zt+1)-1,at=Q[lt],gt=lt+1,Ct=Q[gt];if(0>o(at,pt))gt<x&&0>o(Ct,at)?(Q[zt]=Ct,Q[gt]=pt,zt=gt):(Q[zt]=at,Q[lt]=pt,zt=lt);else if(gt<x&&0>o(Ct,pt))Q[zt]=Ct,Q[gt]=pt,zt=gt;else break t}}return ot}function o(Q,ot){var pt=Q.sortIndex-ot.sortIndex;return pt!==0?pt:Q.id-ot.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],y=[],E=1,S=null,R=3,B=!1,k=!1,W=!1,q=!1,Y=typeof setTimeout=="function"?setTimeout:null,nt=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ct(Q){for(var ot=n(y);ot!==null;){if(ot.callback===null)a(y);else if(ot.startTime<=Q)a(y),ot.sortIndex=ot.expirationTime,t(g,ot);else break;ot=n(y)}}function ut(Q){if(W=!1,ct(Q),!k)if(n(g)!==null)k=!0,At||(At=!0,V());else{var ot=n(y);ot!==null&&se(ut,ot.startTime-Q)}}var At=!1,D=-1,w=5,A=-1;function O(){return q?!0:!(r.unstable_now()-A<w)}function P(){if(q=!1,At){var Q=r.unstable_now();A=Q;var ot=!0;try{t:{k=!1,W&&(W=!1,nt(D),D=-1),B=!0;var pt=R;try{e:{for(ct(Q),S=n(g);S!==null&&!(S.expirationTime>Q&&O());){var zt=S.callback;if(typeof zt=="function"){S.callback=null,R=S.priorityLevel;var x=zt(S.expirationTime<=Q);if(Q=r.unstable_now(),typeof x=="function"){S.callback=x,ct(Q),ot=!0;break e}S===n(g)&&a(g),ct(Q)}else a(g);S=n(g)}if(S!==null)ot=!0;else{var et=n(y);et!==null&&se(ut,et.startTime-Q),ot=!1}}break t}finally{S=null,R=pt,B=!1}ot=void 0}}finally{ot?V():At=!1}}}var V;if(typeof Z=="function")V=function(){Z(P)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Pe=I.port2;I.port1.onmessage=P,V=function(){Pe.postMessage(null)}}else V=function(){Y(P,0)};function se(Q,ot){D=Y(function(){Q(r.unstable_now())},ot)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(Q){switch(R){case 1:case 2:case 3:var ot=3;break;default:ot=R}var pt=R;R=ot;try{return Q()}finally{R=pt}},r.unstable_requestPaint=function(){q=!0},r.unstable_runWithPriority=function(Q,ot){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var pt=R;R=Q;try{return ot()}finally{R=pt}},r.unstable_scheduleCallback=function(Q,ot,pt){var zt=r.unstable_now();switch(typeof pt=="object"&&pt!==null?(pt=pt.delay,pt=typeof pt=="number"&&0<pt?zt+pt:zt):pt=zt,Q){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=pt+x,Q={id:E++,callback:ot,priorityLevel:Q,startTime:pt,expirationTime:x,sortIndex:-1},pt>zt?(Q.sortIndex=pt,t(y,Q),n(g)===null&&Q===n(y)&&(W?(nt(D),D=-1):W=!0,se(ut,pt-zt))):(Q.sortIndex=x,t(g,Q),k||B||(k=!0,At||(At=!0,V()))),Q},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Q){var ot=R;return function(){var pt=R;R=ot;try{return Q.apply(this,arguments)}finally{R=pt}}}}(rm)),rm}var I_;function gS(){return I_||(I_=1,im.exports=pS()),im.exports}var am={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function yS(){if(O_)return Ye;O_=1;var r=pp();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:g,containerInfo:y,implementation:E}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ye.createPortal=function(g,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(g,y,null,E)},Ye.flushSync=function(g){var y=h.T,E=a.p;try{if(h.T=null,a.p=2,g)return g()}finally{h.T=y,a.p=E,a.d.f()}},Ye.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Ye.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Ye.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:R,fetchPriority:B}):E==="script"&&a.d.X(g,{crossOrigin:S,integrity:R,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ye.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Ye.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);a.d.L(g,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ye.preloadModule=function(g,y){if(typeof g=="string")if(y){var E=m(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Ye.requestFormReset=function(g){a.d.r(g)},Ye.unstable_batchedUpdates=function(g,y){return g(y)},Ye.useFormState=function(g,y,E){return h.H.useFormState(g,y,E)},Ye.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ye.version="19.1.0",Ye}var x_;function vS(){if(x_)return am.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),am.exports=yS(),am.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function _S(){if(D_)return Cl;D_=1;var r=gS(),t=pp(),n=vS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var _=!1,T=f.child;T;){if(T===s){_=!0,s=f,l=d;break}if(T===l){_=!0,l=f,s=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===s){_=!0,s=d,l=f;break}if(T===l){_=!0,l=d,s=f;break}T=T.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),nt=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case q:return"Profiler";case W:return"StrictMode";case ut:return"Suspense";case At:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case nt:return(e._context.displayName||"Context")+".Consumer";case ct:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case w:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var se=Array.isArray,Q=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},zt=[],x=-1;function et(e){return{current:e}}function lt(e){0>x||(e.current=zt[x],zt[x]=null,x--)}function at(e,i){x++,zt[x]=e.current,e.current=i}var gt=et(null),Ct=et(null),bt=et(null),we=et(null);function Wt(e,i){switch(at(bt,i),at(Ct,e),at(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Wv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Wv(i),e=Zv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}lt(gt),at(gt,e)}function Fn(){lt(gt),lt(Ct),lt(bt)}function rr(e){e.memoizedState!==null&&at(we,e);var i=gt.current,s=Zv(i,e.type);i!==s&&(at(Ct,e),at(gt,s))}function _i(e){Ct.current===e&&(lt(gt),lt(Ct)),we.current===e&&(lt(we),Tl._currentValue=pt)}var Zr=Object.prototype.hasOwnProperty,Jr=r.unstable_scheduleCallback,ta=r.unstable_cancelCallback,vo=r.unstable_shouldYield,yu=r.unstable_requestPaint,_n=r.unstable_now,th=r.unstable_getCurrentPriorityLevel,_o=r.unstable_ImmediatePriority,ts=r.unstable_UserBlockingPriority,ea=r.unstable_NormalPriority,eh=r.unstable_LowPriority,es=r.unstable_IdlePriority,Eo=r.log,vu=r.unstable_setDisableYieldValue,oe=null,Ft=null;function un(e){if(typeof Eo=="function"&&vu(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(oe,e)}catch{}}var qe=Math.clz32?Math.clz32:na,_u=Math.log,nh=Math.LN2;function na(e){return e>>>=0,e===0?32:31-(_u(e)/nh|0)|0}var ia=256,ra=4194304;function Mn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ns(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Mn(l):(_&=T,_!==0?f=Mn(_):s||(s=T&~e,s!==0&&(f=Mn(s))))):(T=l&~d,T!==0?f=Mn(T):_!==0?f=Mn(_):s||(s=l&~e,s!==0&&(f=Mn(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function aa(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function To(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bo(){var e=ia;return ia<<=1,(ia&4194048)===0&&(ia=256),e}function Ao(){var e=ra;return ra<<=1,(ra&62914560)===0&&(ra=4194304),e}function Ei(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function So(e,i,s,l,f,d){var _=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,C=e.expirationTimes,z=e.hiddenUpdates;for(s=_&~s;0<s;){var X=31-qe(s),J=1<<X;T[X]=0,C[X]=-1;var H=z[X];if(H!==null)for(z[X]=null,X=0;X<H.length;X++){var F=H[X];F!==null&&(F.lane&=-536870913)}s&=~J}l!==0&&qn(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~i))}function qn(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-qe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function wo(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-qe(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function ar(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sr(){var e=ot.p;return e!==0?e:(e=window.event,e===void 0?32:y_(e.type))}function Eu(e,i){var s=ot.p;try{return ot.p=e,i()}finally{ot.p=s}}var ee=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ee,pe="__reactProps$"+ee,En="__reactContainer$"+ee,Ro="__reactEvents$"+ee,ih="__reactListeners$"+ee,or="__reactHandles$"+ee,Tu="__reactResources$"+ee,sa="__reactMarker$"+ee;function lr(e){delete e[Ee],delete e[pe],delete e[Ro],delete e[ih],delete e[or]}function bi(e){var i=e[Ee];if(i)return i;for(var s=e.parentNode;s;){if(i=s[En]||s[Ee]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=n_(e);e!==null;){if(s=e[Ee])return s;e=n_(e)}return i}e=s,s=e.parentNode}return null}function Gn(e){if(e=e[Ee]||e[En]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Yn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ze(e){var i=e[Tu];return i||(i=e[Tu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[sa]=!0}var Co=new Set,rs={};function Pn(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(rs[e]=i,e=0;e<i.length;e++)Co.add(i[e])}var bu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Au={},oa={};function Su(e){return Zr.call(oa,e)?!0:Zr.call(Au,e)?!1:bu.test(e)?oa[e]=!0:(Au[e]=!0,!1)}function ur(e,i,s){if(Su(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Kn(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function ke(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var la,wu;function Si(e){if(la===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);la=i&&i[1]||"",wu=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+la+e+wu}var as=!1;function ss(e,i){if(!e||as)return"";as=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(F){var H=F}Reflect.construct(e,[],J)}else{try{J.call()}catch(F){H=F}e.call(J.prototype)}}else{try{throw Error()}catch(F){H=F}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(F){if(F&&H&&typeof F.stack=="string")return[F.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var C=_.split(`
`),z=T.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===z.length)for(l=C.length-1,f=z.length-1;1<=l&&0<=f&&C[l]!==z[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==z[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==z[f]){var X=`
`+C[l].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=l&&0<=f);break}}}finally{as=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Si(s):""}function Io(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return ss(e.type,!1);case 11:return ss(e.type.render,!1);case 1:return ss(e.type,!0);case 31:return Si("Activity");default:return""}}function os(e){try{var i="";do i+=Io(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rh(e){var i=Oo(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ls(e){e._valueTracker||(e._valueTracker=rh(e))}function xo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Oo(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ah=/[\n"\\]/g;function ge(e){return e.replace(ah,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cn(e,i,s,l,f,d,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?cr(e,_,Je(i)):s!=null?cr(e,_,Je(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Je(T):e.removeAttribute("name")}function ca(e,i,s,l,f,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+Je(s):"",i=i!=null?""+Je(i):s,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function cr(e,i,s){i==="number"&&ua(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function wi(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Je(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Yt(e,i,s){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Je(s):""}function fa(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(se(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Je(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ha=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ru(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ha.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Do(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Ru(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Ru(e,d,i[d])}function No(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(e){return oh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ri=null;function bn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,Ii=null;function Mo(e){var i=Gn(e);if(i&&(e=i.stateNode)){var s=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(cn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[pe]||null;if(!f)throw Error(a(90));cn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&xo(l)}break t;case"textarea":Yt(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&wi(e,!!s.multiple,i,!1)}}}var Qn=!1;function Cu(e,i,s){if(Qn)return e(i,s);Qn=!0;try{var l=e(i);return l}finally{if(Qn=!1,(Ci!==null||Ii!==null)&&(Ec(),Ci&&(i=Ci,e=Ii,Ii=Ci=null,Mo(i),e)))for(i=0;i<e.length;i++)Mo(e[i])}}function da(e,i){var s=e.stateNode;if(s===null)return null;var l=s[pe]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(kn)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){An=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{An=!1}var Xn=null,fr=null,Oi=null;function Po(){if(Oi)return Oi;var e,i=fr,s=i.length,l,f="value"in Xn?Xn.value:Xn.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var _=s-e;for(l=1;l<=_&&i[s-l]===f[d-l];l++);return Oi=f.slice(e,1<l?1-l:void 0)}function $n(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function ko(){return!1}function Re(e){function i(s,l,f,d,_){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wn:ko,this.isPropagationStopped=ko,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Re(Ht),pa=E({},Ht,{view:0,detail:0}),Iu=Re(pa),fs,hs,Zn,ga=E({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(fs=e.screenX-Zn.screenX,hs=e.screenY-Zn.screenY):hs=fs=0,Zn=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:hs}}),Sn=Re(ga),Ou=E({},ga,{dataTransfer:0}),lh=Re(Ou),ya=E({},pa,{relatedTarget:0}),ds=Re(ya),Lo=E({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),ms=Re(Lo),xu=E({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ps=Re(xu),uh=E({},Ht,{data:0}),Vo=Re(uh),va={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Du={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Nu[e])?!!i[e]:!1}function _a(){return Uo}var Mu=E({},pa,{key:function(e){if(e.key){var i=va[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Du[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gs=Re(Mu),Pu=E({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jo=Re(Pu),xi=E({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),ku=Re(xi),Lu=E({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vu=Re(Lu),Uu=E({},ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ys=Re(Uu),tn=E({},Ht,{newState:0,oldState:0}),ju=Re(tn),zu=[9,13,27,32],Jn=kn&&"CompositionEvent"in window,c=null;kn&&"documentMode"in document&&(c=document.documentMode);var p=kn&&"TextEvent"in window&&!c,v=kn&&(!Jn||c&&8<c&&11>=c),b=" ",U=!1;function G(e,i){switch(e){case"keyup":return zu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function st(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Te(e,i){switch(e){case"compositionend":return st(i);case"keypress":return i.which!==32?null:(U=!0,b);case"textInput":return e=i.data,e===b&&U?null:e;default:return null}}function kt(e,i){if(Pt)return e==="compositionend"||!Jn&&G(e,i)?(e=Po(),Oi=fr=Xn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Ce={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function be(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ce[e.type]:i==="textarea"}function Di(e,i,s,l){Ci?Ii?Ii.push(l):Ii=[l]:Ci=l,i=Rc(i,"onChange"),0<i.length&&(s=new cs("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Le=null,ti=null;function zo(e){Yv(e,0)}function Bu(e){var i=Yn(e);if(xo(i))return e}function dg(e,i){if(e==="change")return i}var mg=!1;if(kn){var ch;if(kn){var fh="oninput"in document;if(!fh){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),fh=typeof pg.oninput=="function"}ch=fh}else ch=!1;mg=ch&&(!document.documentMode||9<document.documentMode)}function gg(){Le&&(Le.detachEvent("onpropertychange",yg),ti=Le=null)}function yg(e){if(e.propertyName==="value"&&Bu(ti)){var i=[];Di(i,ti,e,bn(e)),Cu(zo,i)}}function H1(e,i,s){e==="focusin"?(gg(),Le=i,ti=s,Le.attachEvent("onpropertychange",yg)):e==="focusout"&&gg()}function F1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bu(ti)}function q1(e,i){if(e==="click")return Bu(i)}function G1(e,i){if(e==="input"||e==="change")return Bu(i)}function Y1(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var fn=typeof Object.is=="function"?Object.is:Y1;function Bo(e,i){if(fn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Zr.call(i,f)||!fn(e[f],i[f]))return!1}return!0}function vg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _g(e,i){var s=vg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=vg(s)}}function Eg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Eg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Tg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ua(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ua(e.document)}return i}function hh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var K1=kn&&"documentMode"in document&&11>=document.documentMode,vs=null,dh=null,Ho=null,mh=!1;function bg(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;mh||vs==null||vs!==ua(l)||(l=vs,"selectionStart"in l&&hh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ho&&Bo(Ho,l)||(Ho=l,l=Rc(dh,"onSelect"),0<l.length&&(i=new cs("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=vs)))}function Ea(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var _s={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},ph={},Ag={};kn&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ta(e){if(ph[e])return ph[e];if(!_s[e])return e;var i=_s[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ag)return ph[e]=i[s];return e}var Sg=Ta("animationend"),wg=Ta("animationiteration"),Rg=Ta("animationstart"),Q1=Ta("transitionrun"),X1=Ta("transitionstart"),$1=Ta("transitioncancel"),Cg=Ta("transitionend"),Ig=new Map,gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gh.push("scrollEnd");function Ln(e,i){Ig.set(e,i),Pn(i,[e])}var Og=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var s=Og.get(e);return s!==void 0?s:(i={value:e,source:i,stack:os(i)},Og.set(e,i),i)}return{value:e,source:i,stack:os(i)}}var Rn=[],Es=0,yh=0;function Hu(){for(var e=Es,i=yh=Es=0;i<e;){var s=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var f=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&f!==null){var _=l.pending;_===null?f.next=f:(f.next=_.next,_.next=f),l.pending=f}d!==0&&xg(s,f,d)}}function Fu(e,i,s,l){Rn[Es++]=e,Rn[Es++]=i,Rn[Es++]=s,Rn[Es++]=l,yh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function vh(e,i,s,l){return Fu(e,i,s,l),qu(e)}function Ts(e,i){return Fu(e,null,null,i),qu(e)}function xg(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-qe(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function qu(e){if(50<dl)throw dl=0,Sd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var bs={};function W1(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,i,s,l){return new W1(e,i,s,l)}function _h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,i){var s=e.alternate;return s===null?(s=hn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Dg(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Gu(e,i,s,l,f,d){var _=0;if(l=e,typeof e=="function")_h(e)&&(_=1);else if(typeof e=="string")_=JA(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=hn(31,s,i,f),e.elementType=A,e.lanes=d,e;case k:return ba(s.children,f,d,i);case W:_=8,f|=24;break;case q:return e=hn(12,s,i,f|2),e.elementType=q,e.lanes=d,e;case ut:return e=hn(13,s,i,f),e.elementType=ut,e.lanes=d,e;case At:return e=hn(19,s,i,f),e.elementType=At,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:case Z:_=10;break t;case nt:_=9;break t;case ct:_=11;break t;case D:_=14;break t;case w:_=16,l=null;break t}_=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=hn(_,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function ba(e,i,s,l){return e=hn(7,e,l,i),e.lanes=s,e}function Eh(e,i,s){return e=hn(6,e,null,i),e.lanes=s,e}function Th(e,i,s){return i=hn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var As=[],Ss=0,Yu=null,Ku=0,Cn=[],In=0,Aa=null,Mi=1,Pi="";function Sa(e,i){As[Ss++]=Ku,As[Ss++]=Yu,Yu=e,Ku=i}function Ng(e,i,s){Cn[In++]=Mi,Cn[In++]=Pi,Cn[In++]=Aa,Aa=e;var l=Mi;e=Pi;var f=32-qe(l)-1;l&=~(1<<f),s+=1;var d=32-qe(i)+f;if(30<d){var _=f-f%5;d=(l&(1<<_)-1).toString(32),l>>=_,f-=_,Mi=1<<32-qe(i)+f|s<<f|l,Pi=d+e}else Mi=1<<d|s<<f|l,Pi=e}function bh(e){e.return!==null&&(Sa(e,1),Ng(e,1,0))}function Ah(e){for(;e===Yu;)Yu=As[--Ss],As[Ss]=null,Ku=As[--Ss],As[Ss]=null;for(;e===Aa;)Aa=Cn[--In],Cn[In]=null,Pi=Cn[--In],Cn[In]=null,Mi=Cn[--In],Cn[In]=null}var en=null,le=null,Bt=!1,wa=null,ei=!1,Sh=Error(a(519));function Ra(e){var i=Error(a(418,""));throw Go(wn(i,e)),Sh}function Mg(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[Ee]=e,i[pe]=l,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<pl.length;s++)xt(pl[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),ca(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ls(i);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),fa(i,l.value,l.defaultValue,l.children),ls(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||$v(i.textContent,s)?(l.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),l.onScroll!=null&&xt("scroll",i),l.onScrollEnd!=null&&xt("scrollend",i),l.onClick!=null&&(i.onclick=Cc),i=!0):i=!1,i||Ra(e)}function Pg(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:en=en.return}}function Fo(e){if(e!==en)return!1;if(!Bt)return Pg(e),Bt=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||zd(e.type,e.memoizedProps)),s=!s),s&&le&&Ra(e),Pg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){le=Un(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Cr(e.type)?(e=qd,qd=null,le=e):le=i):le=en?Un(e.stateNode.nextSibling):null;return!0}function qo(){le=en=null,Bt=!1}function kg(){var e=wa;return e!==null&&(an===null?an=e:an.push.apply(an,e),wa=null),e}function Go(e){wa===null?wa=[e]:wa.push(e)}var wh=et(null),Ca=null,ki=null;function hr(e,i,s){at(wh,i._currentValue),i._currentValue=s}function Li(e){e._currentValue=wh.current,lt(wh)}function Rh(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function Ch(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=f;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=s,T=d.alternate,T!==null&&(T.lanes|=s),Rh(d.return,s,e),l||(_=null);break t}d=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(a(341));_.lanes|=s,d=_.alternate,d!==null&&(d.lanes|=s),Rh(_,s,e),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===e){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function Yo(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var T=f.type;fn(f.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(f===we.current){if(_=f.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Tl):e=[Tl])}f=f.return}e!==null&&Ch(i,e,s,l),i.flags|=262144}function Qu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Ca=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return Lg(Ca,e)}function Xu(e,i){return Ca===null&&Ia(e),Lg(e,i)}function Lg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ki===null){if(e===null)throw Error(a(308));ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ki=ki.next=i;return s}var Z1=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},J1=r.unstable_scheduleCallback,tA=r.unstable_NormalPriority,Ae={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ih(){return{controller:new Z1,data:new Map,refCount:0}}function Ko(e){e.refCount--,e.refCount===0&&J1(tA,function(){e.controller.abort()})}var Qo=null,Oh=0,ws=0,Rs=null;function eA(e,i){if(Qo===null){var s=Qo=[];Oh=0,ws=Dd(),Rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Oh++,i.then(Vg,Vg),i}function Vg(){if(--Oh===0&&Qo!==null){Rs!==null&&(Rs.status="fulfilled");var e=Qo;Qo=null,ws=0,Rs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nA(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Ug=Q.S;Q.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eA(e,i),Ug!==null&&Ug(e,i)};var Oa=et(null);function xh(){var e=Oa.current;return e!==null?e:Zt.pooledCache}function $u(e,i){i===null?at(Oa,Oa.current):at(Oa,i.pool)}function jg(){var e=xh();return e===null?null:{parent:Ae._currentValue,pool:e}}var Xo=Error(a(460)),zg=Error(a(474)),Wu=Error(a(542)),Dh={then:function(){}};function Bg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zu(){}function Hg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Zu,Zu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,qg(e),e;default:if(typeof i.status=="string")i.then(Zu,Zu);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,qg(e),e}throw $o=i,Xo}}var $o=null;function Fg(){if($o===null)throw Error(a(459));var e=$o;return $o=null,e}function qg(e){if(e===Xo||e===Wu)throw Error(a(483))}var dr=!1;function Nh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pr(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=qu(e),xg(e,null,s),i}return Fu(e,l,i,s),qu(e)}function Wo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,wo(e,s)}}function Ph(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var kh=!1;function Zo(){if(kh){var e=Rs;if(e!==null)throw e}}function Jo(e,i,s,l){kh=!1;var f=e.updateQueue;dr=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,z=C.next;C.next=null,_===null?d=z:_.next=z,_=C;var X=e.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==_&&(T===null?X.firstBaseUpdate=z:T.next=z,X.lastBaseUpdate=C))}if(d!==null){var J=f.baseState;_=0,X=z=C=null,T=d;do{var H=T.lane&-536870913,F=H!==T.lane;if(F?(Lt&H)===H:(l&H)===H){H!==0&&H===ws&&(kh=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,yt=T;H=i;var Xt=s;switch(yt.tag){case 1:if(Et=yt.payload,typeof Et=="function"){J=Et.call(Xt,J,H);break t}J=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=yt.payload,H=typeof Et=="function"?Et.call(Xt,J,H):Et,H==null)break t;J=E({},J,H);break t;case 2:dr=!0}}H=T.callback,H!==null&&(e.flags|=64,F&&(e.flags|=8192),F=f.callbacks,F===null?f.callbacks=[H]:F.push(H))}else F={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(z=X=F,C=J):X=X.next=F,_|=H;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;F=T,T=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);X===null&&(C=J),f.baseState=C,f.firstBaseUpdate=z,f.lastBaseUpdate=X,d===null&&(f.shared.lanes=0),Ar|=_,e.lanes=_,e.memoizedState=J}}function Gg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Yg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Gg(s[e],i)}var Cs=et(null),Ju=et(0);function Kg(e,i){e=Fi,at(Ju,e),at(Cs,i),Fi=e|i.baseLanes}function Lh(){at(Ju,Fi),at(Cs,Cs.current)}function Vh(){Fi=Ju.current,lt(Cs),lt(Ju)}var gr=0,Rt=null,Kt=null,ye=null,tc=!1,Is=!1,xa=!1,ec=0,tl=0,Os=null,iA=0;function de(){throw Error(a(321))}function Uh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!fn(e[s],i[s]))return!1;return!0}function jh(e,i,s,l,f,d){return gr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Q.H=e===null||e.memoizedState===null?xy:Dy,xa=!1,d=s(l,f),xa=!1,Is&&(d=Xg(i,s,l,f)),Qg(e),d}function Qg(e){Q.H=oc;var i=Kt!==null&&Kt.next!==null;if(gr=0,ye=Kt=Rt=null,tc=!1,tl=0,Os=null,i)throw Error(a(300));e===null||Ie||(e=e.dependencies,e!==null&&Qu(e)&&(Ie=!0))}function Xg(e,i,s,l){Rt=e;var f=0;do{if(Is&&(Os=null),tl=0,Is=!1,25<=f)throw Error(a(301));if(f+=1,ye=Kt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=cA,d=i(s,l)}while(Is);return d}function rA(){var e=Q.H,i=e.useState()[0];return i=typeof i.then=="function"?el(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function zh(){var e=ec!==0;return ec=0,e}function Bh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Hh(e){if(tc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}tc=!1}gr=0,ye=Kt=Rt=null,Is=!1,tl=ec=0,Os=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Rt.memoizedState=ye=e:ye=ye.next=e,ye}function ve(){if(Kt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=ye===null?Rt.memoizedState:ye.next;if(i!==null)ye=i,Kt=e;else{if(e===null)throw Rt.alternate===null?Error(a(467)):Error(a(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},ye===null?Rt.memoizedState=ye=e:ye=ye.next=e}return ye}function Fh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var i=tl;return tl+=1,Os===null&&(Os=[]),e=Hg(Os,e,i),i=Rt,(ye===null?i.memoizedState:ye.next)===null&&(i=i.alternate,Q.H=i===null||i.memoizedState===null?xy:Dy),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===Z)return Ge(e)}throw Error(a(438,String(e)))}function qh(e){var i=null,s=Rt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Fh(),Rt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=O;return i.index++,s}function Vi(e,i){return typeof i=="function"?i(e):i}function ic(e){var i=ve();return Gh(i,Kt,e)}function Gh(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var T=_=null,C=null,z=i,X=!1;do{var J=z.lane&-536870913;if(J!==z.lane?(Lt&J)===J:(gr&J)===J){var H=z.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),J===ws&&(X=!0);else if((gr&H)===H){z=z.next,H===ws&&(X=!0);continue}else J={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=J,_=d):C=C.next=J,Rt.lanes|=H,Ar|=H;J=z.action,xa&&s(d,J),d=z.hasEagerState?z.eagerState:s(d,J)}else H={lane:J,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=H,_=d):C=C.next=H,Rt.lanes|=J,Ar|=J;z=z.next}while(z!==null&&z!==i);if(C===null?_=d:C.next=T,!fn(d,e.memoizedState)&&(Ie=!0,X&&(s=Rs,s!==null)))throw s;e.memoizedState=d,e.baseState=_,e.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yh(e){var i=ve(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var _=f=f.next;do d=e(d,_.action),_=_.next;while(_!==f);fn(d,i.memoizedState)||(Ie=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function $g(e,i,s){var l=Rt,f=ve(),d=Bt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var _=!fn((Kt||f).memoizedState,s);_&&(f.memoizedState=s,Ie=!0),f=f.queue;var T=Jg.bind(null,l,f,e);if(nl(2048,8,T,[e]),f.getSnapshot!==i||_||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,xs(9,rc(),Zg.bind(null,l,f,s,i),null),Zt===null)throw Error(a(349));d||(gr&124)!==0||Wg(l,i,s)}return s}function Wg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Rt.updateQueue,i===null?(i=Fh(),Rt.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Zg(e,i,s,l){i.value=s,i.getSnapshot=l,ty(i)&&ey(e)}function Jg(e,i,s){return s(function(){ty(i)&&ey(e)})}function ty(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!fn(e,s)}catch{return!0}}function ey(e){var i=Ts(e,2);i!==null&&yn(i,e,2)}function Kh(e){var i=nn();if(typeof e=="function"){var s=e;if(e=s(),xa){un(!0);try{s()}finally{un(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function ny(e,i,s,l){return e.baseState=s,Gh(e,Kt,typeof l=="function"?l:Vi)}function aA(e,i,s,l,f){if(sc(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};Q.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,iy(i,d)):(d.next=s.next,i.pending=s.next=d)}}function iy(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=Q.T,_={};Q.T=_;try{var T=s(f,l),C=Q.S;C!==null&&C(_,T),ry(e,i,T)}catch(z){Qh(e,i,z)}finally{Q.T=d}}else try{d=s(f,l),ry(e,i,d)}catch(z){Qh(e,i,z)}}function ry(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){ay(e,i,l)},function(l){return Qh(e,i,l)}):ay(e,i,s)}function ay(e,i,s){i.status="fulfilled",i.value=s,sy(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,iy(e,s)))}function Qh(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,sy(i),i=i.next;while(i!==l)}e.action=null}function sy(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function oy(e,i){return i}function ly(e,i){if(Bt){var s=Zt.formState;if(s!==null){t:{var l=Rt;if(Bt){if(le){e:{for(var f=le,d=ei;f.nodeType!==8;){if(!d){f=null;break e}if(f=Un(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){le=Un(f.nextSibling),l=f.data==="F!";break t}}Ra(l)}l=!1}l&&(i=s[0])}}return s=nn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oy,lastRenderedState:i},s.queue=l,s=Cy.bind(null,Rt,l),l.dispatch=s,l=Kh(!1),d=Jh.bind(null,Rt,!1,l.queue),l=nn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=aA.bind(null,Rt,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function uy(e){var i=ve();return cy(i,Kt,e)}function cy(e,i,s){if(i=Gh(e,i,oy)[0],e=ic(Vi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=el(i)}catch(_){throw _===Xo?Wu:_}else l=i;i=ve();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(Rt.flags|=2048,xs(9,rc(),sA.bind(null,f,s),null)),[l,d,e]}function sA(e,i){e.action=i}function fy(e){var i=ve(),s=Kt;if(s!==null)return cy(i,s,e);ve(),i=i.memoizedState,s=ve();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function xs(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=Fh(),Rt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function rc(){return{destroy:void 0,resource:void 0}}function hy(){return ve().memoizedState}function ac(e,i,s,l){var f=nn();l=l===void 0?null:l,Rt.flags|=e,f.memoizedState=xs(1|i,rc(),s,l)}function nl(e,i,s,l){var f=ve();l=l===void 0?null:l;var d=f.memoizedState.inst;Kt!==null&&l!==null&&Uh(l,Kt.memoizedState.deps)?f.memoizedState=xs(i,d,s,l):(Rt.flags|=e,f.memoizedState=xs(1|i,d,s,l))}function dy(e,i){ac(8390656,8,e,i)}function my(e,i){nl(2048,8,e,i)}function py(e,i){return nl(4,2,e,i)}function gy(e,i){return nl(4,4,e,i)}function yy(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function vy(e,i,s){s=s!=null?s.concat([e]):null,nl(4,4,yy.bind(null,i,e),s)}function Xh(){}function _y(e,i){var s=ve();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Uh(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function Ey(e,i){var s=ve();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Uh(i,l[1]))return l[0];if(l=e(),xa){un(!0);try{e()}finally{un(!1)}}return s.memoizedState=[l,i],l}function $h(e,i,s){return s===void 0||(gr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Av(),Rt.lanes|=e,Ar|=e,s)}function Ty(e,i,s,l){return fn(s,i)?s:Cs.current!==null?(e=$h(e,s,l),fn(e,i)||(Ie=!0),e):(gr&42)===0?(Ie=!0,e.memoizedState=s):(e=Av(),Rt.lanes|=e,Ar|=e,i)}function by(e,i,s,l,f){var d=ot.p;ot.p=d!==0&&8>d?d:8;var _=Q.T,T={};Q.T=T,Jh(e,!1,i,s);try{var C=f(),z=Q.S;if(z!==null&&z(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=nA(C,l);il(e,i,X,gn(e))}else il(e,i,l,gn(e))}catch(J){il(e,i,{then:function(){},status:"rejected",reason:J},gn())}finally{ot.p=d,Q.T=_}}function oA(){}function Wh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Ay(e).queue;by(e,f,i,pt,s===null?oA:function(){return Sy(e),s(l)})}function Ay(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:pt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Sy(e){var i=Ay(e).next.queue;il(e,i,{},gn())}function Zh(){return Ge(Tl)}function wy(){return ve().memoizedState}function Ry(){return ve().memoizedState}function lA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=gn();e=mr(s);var l=pr(i,e,s);l!==null&&(yn(l,i,s),Wo(l,i,s)),i={cache:Ih()},e.payload=i;return}i=i.return}}function uA(e,i,s){var l=gn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},sc(e)?Iy(i,s):(s=vh(e,i,s,l),s!==null&&(yn(s,e,l),Oy(s,i,l)))}function Cy(e,i,s){var l=gn();il(e,i,s,l)}function il(e,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(sc(e))Iy(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,s);if(f.hasEagerState=!0,f.eagerState=T,fn(T,_))return Fu(e,i,f,0),Zt===null&&Hu(),!1}catch{}finally{}if(s=vh(e,i,f,l),s!==null)return yn(s,e,l),Oy(s,i,l),!0}return!1}function Jh(e,i,s,l){if(l={lane:2,revertLane:Dd(),action:l,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(i)throw Error(a(479))}else i=vh(e,s,l,2),i!==null&&yn(i,e,2)}function sc(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Iy(e,i){Is=tc=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Oy(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,wo(e,s)}}var oc={readContext:Ge,use:nc,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},xy={readContext:Ge,use:nc,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:dy,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ac(4194308,4,yy.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ac(4194308,4,e,i)},useInsertionEffect:function(e,i){ac(4,2,e,i)},useMemo:function(e,i){var s=nn();i=i===void 0?null:i;var l=e();if(xa){un(!0);try{e()}finally{un(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=nn();if(s!==void 0){var f=s(i);if(xa){un(!0);try{s(i)}finally{un(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=uA.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Kh(e);var i=e.queue,s=Cy.bind(null,Rt,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Xh,useDeferredValue:function(e,i){var s=nn();return $h(s,e,i)},useTransition:function(){var e=Kh(!1);return e=by.bind(null,Rt,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=Rt,f=nn();if(Bt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(Lt&124)!==0||Wg(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,dy(Jg.bind(null,l,d,e),[e]),l.flags|=2048,xs(9,rc(),Zg.bind(null,l,d,s,i),null),s},useId:function(){var e=nn(),i=Zt.identifierPrefix;if(Bt){var s=Pi,l=Mi;s=(l&~(1<<32-qe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=ec++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=iA++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Zh,useFormState:ly,useActionState:ly,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Jh.bind(null,Rt,!0,s),s.dispatch=i,[e,i]},useMemoCache:qh,useCacheRefresh:function(){return nn().memoizedState=lA.bind(null,Rt)}},Dy={readContext:Ge,use:nc,useCallback:_y,useContext:Ge,useEffect:my,useImperativeHandle:vy,useInsertionEffect:py,useLayoutEffect:gy,useMemo:Ey,useReducer:ic,useRef:hy,useState:function(){return ic(Vi)},useDebugValue:Xh,useDeferredValue:function(e,i){var s=ve();return Ty(s,Kt.memoizedState,e,i)},useTransition:function(){var e=ic(Vi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:el(e),i]},useSyncExternalStore:$g,useId:wy,useHostTransitionStatus:Zh,useFormState:uy,useActionState:uy,useOptimistic:function(e,i){var s=ve();return ny(s,Kt,e,i)},useMemoCache:qh,useCacheRefresh:Ry},cA={readContext:Ge,use:nc,useCallback:_y,useContext:Ge,useEffect:my,useImperativeHandle:vy,useInsertionEffect:py,useLayoutEffect:gy,useMemo:Ey,useReducer:Yh,useRef:hy,useState:function(){return Yh(Vi)},useDebugValue:Xh,useDeferredValue:function(e,i){var s=ve();return Kt===null?$h(s,e,i):Ty(s,Kt.memoizedState,e,i)},useTransition:function(){var e=Yh(Vi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:el(e),i]},useSyncExternalStore:$g,useId:wy,useHostTransitionStatus:Zh,useFormState:fy,useActionState:fy,useOptimistic:function(e,i){var s=ve();return Kt!==null?ny(s,Kt,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:qh,useCacheRefresh:Ry},Ds=null,rl=0;function lc(e){var i=rl;return rl+=1,Ds===null&&(Ds=[]),Hg(Ds,e,i)}function al(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function uc(e,i){throw i.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Ny(e){var i=e._init;return i(e._payload)}function My(e){function i(L,N){if(e){var j=L.deletions;j===null?(L.deletions=[N],L.flags|=16):j.push(N)}}function s(L,N){if(!e)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function l(L){for(var N=new Map;L!==null;)L.key!==null?N.set(L.key,L):N.set(L.index,L),L=L.sibling;return N}function f(L,N){return L=Ni(L,N),L.index=0,L.sibling=null,L}function d(L,N,j){return L.index=j,e?(j=L.alternate,j!==null?(j=j.index,j<N?(L.flags|=67108866,N):j):(L.flags|=67108866,N)):(L.flags|=1048576,N)}function _(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function T(L,N,j,$){return N===null||N.tag!==6?(N=Eh(j,L.mode,$),N.return=L,N):(N=f(N,j),N.return=L,N)}function C(L,N,j,$){var ft=j.type;return ft===k?X(L,N,j.props.children,$,j.key):N!==null&&(N.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===w&&Ny(ft)===N.type)?(N=f(N,j.props),al(N,j),N.return=L,N):(N=Gu(j.type,j.key,j.props,null,L.mode,$),al(N,j),N.return=L,N)}function z(L,N,j,$){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Th(j,L.mode,$),N.return=L,N):(N=f(N,j.children||[]),N.return=L,N)}function X(L,N,j,$,ft){return N===null||N.tag!==7?(N=ba(j,L.mode,$,ft),N.return=L,N):(N=f(N,j),N.return=L,N)}function J(L,N,j){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Eh(""+N,L.mode,j),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case R:return j=Gu(N.type,N.key,N.props,null,L.mode,j),al(j,N),j.return=L,j;case B:return N=Th(N,L.mode,j),N.return=L,N;case w:var $=N._init;return N=$(N._payload),J(L,N,j)}if(se(N)||V(N))return N=ba(N,L.mode,j,null),N.return=L,N;if(typeof N.then=="function")return J(L,lc(N),j);if(N.$$typeof===Z)return J(L,Xu(L,N),j);uc(L,N)}return null}function H(L,N,j,$){var ft=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ft!==null?null:T(L,N,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case R:return j.key===ft?C(L,N,j,$):null;case B:return j.key===ft?z(L,N,j,$):null;case w:return ft=j._init,j=ft(j._payload),H(L,N,j,$)}if(se(j)||V(j))return ft!==null?null:X(L,N,j,$,null);if(typeof j.then=="function")return H(L,N,lc(j),$);if(j.$$typeof===Z)return H(L,N,Xu(L,j),$);uc(L,j)}return null}function F(L,N,j,$,ft){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return L=L.get(j)||null,T(N,L,""+$,ft);if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return L=L.get($.key===null?j:$.key)||null,C(N,L,$,ft);case B:return L=L.get($.key===null?j:$.key)||null,z(N,L,$,ft);case w:var It=$._init;return $=It($._payload),F(L,N,j,$,ft)}if(se($)||V($))return L=L.get(j)||null,X(N,L,$,ft,null);if(typeof $.then=="function")return F(L,N,j,lc($),ft);if($.$$typeof===Z)return F(L,N,j,Xu(N,$),ft);uc(N,$)}return null}function Et(L,N,j,$){for(var ft=null,It=null,mt=N,vt=N=0,xe=null;mt!==null&&vt<j.length;vt++){mt.index>vt?(xe=mt,mt=null):xe=mt.sibling;var jt=H(L,mt,j[vt],$);if(jt===null){mt===null&&(mt=xe);break}e&&mt&&jt.alternate===null&&i(L,mt),N=d(jt,N,vt),It===null?ft=jt:It.sibling=jt,It=jt,mt=xe}if(vt===j.length)return s(L,mt),Bt&&Sa(L,vt),ft;if(mt===null){for(;vt<j.length;vt++)mt=J(L,j[vt],$),mt!==null&&(N=d(mt,N,vt),It===null?ft=mt:It.sibling=mt,It=mt);return Bt&&Sa(L,vt),ft}for(mt=l(mt);vt<j.length;vt++)xe=F(mt,L,vt,j[vt],$),xe!==null&&(e&&xe.alternate!==null&&mt.delete(xe.key===null?vt:xe.key),N=d(xe,N,vt),It===null?ft=xe:It.sibling=xe,It=xe);return e&&mt.forEach(function(Nr){return i(L,Nr)}),Bt&&Sa(L,vt),ft}function yt(L,N,j,$){if(j==null)throw Error(a(151));for(var ft=null,It=null,mt=N,vt=N=0,xe=null,jt=j.next();mt!==null&&!jt.done;vt++,jt=j.next()){mt.index>vt?(xe=mt,mt=null):xe=mt.sibling;var Nr=H(L,mt,jt.value,$);if(Nr===null){mt===null&&(mt=xe);break}e&&mt&&Nr.alternate===null&&i(L,mt),N=d(Nr,N,vt),It===null?ft=Nr:It.sibling=Nr,It=Nr,mt=xe}if(jt.done)return s(L,mt),Bt&&Sa(L,vt),ft;if(mt===null){for(;!jt.done;vt++,jt=j.next())jt=J(L,jt.value,$),jt!==null&&(N=d(jt,N,vt),It===null?ft=jt:It.sibling=jt,It=jt);return Bt&&Sa(L,vt),ft}for(mt=l(mt);!jt.done;vt++,jt=j.next())jt=F(mt,L,vt,jt.value,$),jt!==null&&(e&&jt.alternate!==null&&mt.delete(jt.key===null?vt:jt.key),N=d(jt,N,vt),It===null?ft=jt:It.sibling=jt,It=jt);return e&&mt.forEach(function(fS){return i(L,fS)}),Bt&&Sa(L,vt),ft}function Xt(L,N,j,$){if(typeof j=="object"&&j!==null&&j.type===k&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case R:t:{for(var ft=j.key;N!==null;){if(N.key===ft){if(ft=j.type,ft===k){if(N.tag===7){s(L,N.sibling),$=f(N,j.props.children),$.return=L,L=$;break t}}else if(N.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===w&&Ny(ft)===N.type){s(L,N.sibling),$=f(N,j.props),al($,j),$.return=L,L=$;break t}s(L,N);break}else i(L,N);N=N.sibling}j.type===k?($=ba(j.props.children,L.mode,$,j.key),$.return=L,L=$):($=Gu(j.type,j.key,j.props,null,L.mode,$),al($,j),$.return=L,L=$)}return _(L);case B:t:{for(ft=j.key;N!==null;){if(N.key===ft)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){s(L,N.sibling),$=f(N,j.children||[]),$.return=L,L=$;break t}else{s(L,N);break}else i(L,N);N=N.sibling}$=Th(j,L.mode,$),$.return=L,L=$}return _(L);case w:return ft=j._init,j=ft(j._payload),Xt(L,N,j,$)}if(se(j))return Et(L,N,j,$);if(V(j)){if(ft=V(j),typeof ft!="function")throw Error(a(150));return j=ft.call(j),yt(L,N,j,$)}if(typeof j.then=="function")return Xt(L,N,lc(j),$);if(j.$$typeof===Z)return Xt(L,N,Xu(L,j),$);uc(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,N!==null&&N.tag===6?(s(L,N.sibling),$=f(N,j),$.return=L,L=$):(s(L,N),$=Eh(j,L.mode,$),$.return=L,L=$),_(L)):s(L,N)}return function(L,N,j,$){try{rl=0;var ft=Xt(L,N,j,$);return Ds=null,ft}catch(mt){if(mt===Xo||mt===Wu)throw mt;var It=hn(29,mt,null,L.mode);return It.lanes=$,It.return=L,It}finally{}}}var Ns=My(!0),Py=My(!1),On=et(null),ni=null;function yr(e){var i=e.alternate;at(Se,Se.current&1),at(On,e),ni===null&&(i===null||Cs.current!==null||i.memoizedState!==null)&&(ni=e)}function ky(e){if(e.tag===22){if(at(Se,Se.current),at(On,e),ni===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ni=e)}}else vr()}function vr(){at(Se,Se.current),at(On,On.current)}function Ui(e){lt(On),ni===e&&(ni=null),lt(Se)}var Se=et(0);function cc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Fd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function td(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:E({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ed={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=gn(),f=mr(l);f.payload=i,s!=null&&(f.callback=s),i=pr(e,f,l),i!==null&&(yn(i,e,l),Wo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=gn(),f=mr(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=pr(e,f,l),i!==null&&(yn(i,e,l),Wo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=gn(),l=mr(s);l.tag=2,i!=null&&(l.callback=i),i=pr(e,l,s),i!==null&&(yn(i,e,s),Wo(i,e,s))}};function Ly(e,i,s,l,f,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!Bo(s,l)||!Bo(f,d):!0}function Vy(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&ed.enqueueReplaceState(i,i.state,null)}function Da(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=E({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uy(e){fc(e)}function jy(e){console.error(e)}function zy(e){fc(e)}function hc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function By(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function nd(e,i,s){return s=mr(s),s.tag=3,s.payload={element:null},s.callback=function(){hc(e,i)},s}function Hy(e){return e=mr(e),e.tag=3,e}function Fy(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){By(i,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){By(i,s,l),typeof f!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function fA(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Yo(i,s,f,!0),s=On.current,s!==null){switch(s.tag){case 13:return ni===null?Rd():s.alternate===null&&ue===0&&(ue=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Dh?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Id(e,l,f)),!1;case 22:return s.flags|=65536,l===Dh?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Id(e,l,f)),!1}throw Error(a(435,s.tag))}return Id(e,l,f),Rd(),!1}if(Bt)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Sh&&(e=Error(a(422),{cause:l}),Go(wn(e,s)))):(l!==Sh&&(i=Error(a(423),{cause:l}),Go(wn(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=wn(l,s),f=nd(e.stateNode,l,f),Ph(e,f),ue!==4&&(ue=2)),!1;var d=Error(a(520),{cause:l});if(d=wn(d,s),hl===null?hl=[d]:hl.push(d),ue!==4&&(ue=2),i===null)return!0;l=wn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=nd(s.stateNode,l,e),Ph(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Sr===null||!Sr.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Hy(f),Fy(f,e,s,l),Ph(s,f),!1}s=s.return}while(s!==null);return!1}var qy=Error(a(461)),Ie=!1;function Ve(e,i,s,l){i.child=e===null?Py(i,null,s,l):Ns(i,e.child,s,l)}function Gy(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Ia(i),l=jh(e,i,s,_,d,f),T=zh(),e!==null&&!Ie?(Bh(e,i,f),ji(e,i,f)):(Bt&&T&&bh(i),i.flags|=1,Ve(e,i,l,f),i.child)}function Yy(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!_h(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Ky(e,i,d,l,f)):(e=Gu(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!cd(e,f)){var _=d.memoizedProps;if(s=s.compare,s=s!==null?s:Bo,s(_,l)&&e.ref===i.ref)return ji(e,i,f)}return i.flags|=1,e=Ni(d,l),e.ref=i.ref,e.return=i,i.child=e}function Ky(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(Bo(d,l)&&e.ref===i.ref)if(Ie=!1,i.pendingProps=l=d,cd(e,f))(e.flags&131072)!==0&&(Ie=!0);else return i.lanes=e.lanes,ji(e,i,f)}return id(e,i,s,l,f)}function Qy(e,i,s){var l=i.pendingProps,f=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(f=i.child=e.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Xy(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&$u(i,d!==null?d.cachePool:null),d!==null?Kg(i,d):Lh(),ky(i);else return i.lanes=i.childLanes=536870912,Xy(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?($u(i,d.cachePool),Kg(i,d),vr(),i.memoizedState=null):(e!==null&&$u(i,null),Lh(),vr());return Ve(e,i,f,s),i.child}function Xy(e,i,s,l){var f=xh();return f=f===null?null:{parent:Ae._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&$u(i,null),Lh(),ky(i),e!==null&&Yo(e,i,l,!0),null}function dc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function id(e,i,s,l,f){return Ia(i),s=jh(e,i,s,l,void 0,f),l=zh(),e!==null&&!Ie?(Bh(e,i,f),ji(e,i,f)):(Bt&&l&&bh(i),i.flags|=1,Ve(e,i,s,f),i.child)}function $y(e,i,s,l,f,d){return Ia(i),i.updateQueue=null,s=Xg(i,l,s,f),Qg(e),l=zh(),e!==null&&!Ie?(Bh(e,i,d),ji(e,i,d)):(Bt&&l&&bh(i),i.flags|=1,Ve(e,i,s,d),i.child)}function Wy(e,i,s,l,f){if(Ia(i),i.stateNode===null){var d=bs,_=s.contextType;typeof _=="object"&&_!==null&&(d=Ge(_)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Nh(i),_=s.contextType,d.context=typeof _=="object"&&_!==null?Ge(_):bs,d.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(td(i,s,_,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&ed.enqueueReplaceState(d,d.state,null),Jo(i,l,d,f),Zo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,C=Da(s,T);d.props=C;var z=d.context,X=s.contextType;_=bs,typeof X=="object"&&X!==null&&(_=Ge(X));var J=s.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==_)&&Vy(i,d,l,_),dr=!1;var H=i.memoizedState;d.state=H,Jo(i,l,d,f),Zo(),z=i.memoizedState,T||H!==z||dr?(typeof J=="function"&&(td(i,s,J,l),z=i.memoizedState),(C=dr||Ly(i,s,C,l,H,z,_))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=_,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Mh(e,i),_=i.memoizedProps,X=Da(s,_),d.props=X,J=i.pendingProps,H=d.context,z=s.contextType,C=bs,typeof z=="object"&&z!==null&&(C=Ge(z)),T=s.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==J||H!==C)&&Vy(i,d,l,C),dr=!1,H=i.memoizedState,d.state=H,Jo(i,l,d,f),Zo();var F=i.memoizedState;_!==J||H!==F||dr||e!==null&&e.dependencies!==null&&Qu(e.dependencies)?(typeof T=="function"&&(td(i,s,T,l),F=i.memoizedState),(X=dr||Ly(i,s,X,l,H,F,C)||e!==null&&e.dependencies!==null&&Qu(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,dc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ns(i,e.child,null,f),i.child=Ns(i,null,s,f)):Ve(e,i,s,f),i.memoizedState=d.state,e=i.child):e=ji(e,i,f),e}function Zy(e,i,s,l){return qo(),i.flags|=256,Ve(e,i,s,l),i.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(e){return{baseLanes:e,cachePool:jg()}}function sd(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=xn),e}function Jy(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),_&&(f=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(f?yr(i):vr(),Bt){var T=le,C;if(C=T){t:{for(C=T,T=ei;C.nodeType!==8;){if(!T){T=null;break t}if(C=Un(C.nextSibling),C===null){T=null;break t}}T=C}T!==null?(i.memoizedState={dehydrated:T,treeContext:Aa!==null?{id:Mi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},C=hn(18,null,null,0),C.stateNode=T,C.return=i,i.child=C,en=i,le=null,C=!0):C=!1}C||Ra(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Fd(T)?i.lanes=32:i.lanes=536870912,null;Ui(i)}return T=l.children,l=l.fallback,f?(vr(),f=i.mode,T=mc({mode:"hidden",children:T},f),l=ba(l,f,s,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=ad(s),f.childLanes=sd(e,_,s),i.memoizedState=rd,l):(yr(i),od(i,T))}if(C=e.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(yr(i),i.flags&=-257,i=ld(e,i,s)):i.memoizedState!==null?(vr(),i.child=e.child,i.flags|=128,i=null):(vr(),f=l.fallback,T=i.mode,l=mc({mode:"visible",children:l.children},T),f=ba(f,T,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,Ns(i,e.child,null,s),l=i.child,l.memoizedState=ad(s),l.childLanes=sd(e,_,s),i.memoizedState=rd,i=f);else if(yr(i),Fd(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var z=_.dgst;_=z,l=Error(a(419)),l.stack="",l.digest=_,Go({value:l,source:null,stack:null}),i=ld(e,i,s)}else if(Ie||Yo(e,i,s,!1),_=(s&e.childLanes)!==0,Ie||_){if(_=Zt,_!==null&&(l=s&-s,l=(l&42)!==0?1:ar(l),l=(l&(_.suspendedLanes|s))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ts(e,l),yn(_,e,l),qy;T.data==="$?"||Rd(),i=ld(e,i,s)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=C.treeContext,le=Un(T.nextSibling),en=i,Bt=!0,wa=null,ei=!1,e!==null&&(Cn[In++]=Mi,Cn[In++]=Pi,Cn[In++]=Aa,Mi=e.id,Pi=e.overflow,Aa=i),i=od(i,l.children),i.flags|=4096);return i}return f?(vr(),f=l.fallback,T=i.mode,C=e.child,z=C.sibling,l=Ni(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,z!==null?f=Ni(z,f):(f=ba(f,T,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=e.child.memoizedState,T===null?T=ad(s):(C=T.cachePool,C!==null?(z=Ae._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=jg(),T={baseLanes:T.baseLanes|s,cachePool:C}),f.memoizedState=T,f.childLanes=sd(e,_,s),i.memoizedState=rd,l):(yr(i),s=e.child,e=s.sibling,s=Ni(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=s,i.memoizedState=null,s)}function od(e,i){return i=mc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function mc(e,i){return e=hn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ld(e,i,s){return Ns(i,e.child,null,s),e=od(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function tv(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Rh(e.return,i,s)}function ud(e,i,s,l,f){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=f)}function ev(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Ve(e,i,l.children,s),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tv(e,s,i);else if(e.tag===19)tv(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(at(Se,l),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&cc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),ud(i,!1,f,s,d);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&cc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}ud(i,!0,s,null,d);break;case"together":ud(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ji(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ar|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Yo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ni(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ni(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function cd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Qu(e)))}function hA(e,i,s){switch(i.tag){case 3:Wt(i,i.stateNode.containerInfo),hr(i,Ae,e.memoizedState.cache),qo();break;case 27:case 5:rr(i);break;case 4:Wt(i,i.stateNode.containerInfo);break;case 10:hr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(yr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Jy(e,i,s):(yr(i),e=ji(e,i,s),e!==null?e.sibling:null);yr(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Yo(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return ev(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),at(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,Qy(e,i,s);case 24:hr(i,Ae,e.memoizedState.cache)}return ji(e,i,s)}function nv(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ie=!0;else{if(!cd(e,s)&&(i.flags&128)===0)return Ie=!1,hA(e,i,s);Ie=(e.flags&131072)!==0}else Ie=!1,Bt&&(i.flags&1048576)!==0&&Ng(i,Ku,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")_h(l)?(e=Da(l,e),i.tag=1,i=Wy(null,i,l,e,s)):(i.tag=0,i=id(null,i,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===ct){i.tag=11,i=Gy(null,i,l,e,s);break t}else if(f===D){i.tag=14,i=Yy(null,i,l,e,s);break t}}throw i=Pe(l)||l,Error(a(306,i,""))}}return i;case 0:return id(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Da(l,i.pendingProps),Wy(e,i,l,f,s);case 3:t:{if(Wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Mh(e,i),Jo(i,l,null,s);var _=i.memoizedState;if(l=_.cache,hr(i,Ae,l),l!==d.cache&&Ch(i,[Ae],s,!0),Zo(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Zy(e,i,l,s);break t}else if(l!==f){f=wn(Error(a(424)),i),Go(f),i=Zy(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=Un(e.firstChild),en=i,Bt=!0,wa=null,ei=!0,s=Py(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(qo(),l===f){i=ji(e,i,s);break t}Ve(e,i,l,s)}i=i.child}return i;case 26:return dc(e,i),e===null?(s=s_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Bt||(s=i.type,e=i.pendingProps,l=Ic(bt.current).createElement(s),l[Ee]=i,l[pe]=e,je(l,s,e),he(l),i.stateNode=l):i.memoizedState=s_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return rr(i),e===null&&Bt&&(l=i.stateNode=i_(i.type,i.pendingProps,bt.current),en=i,ei=!0,f=le,Cr(i.type)?(qd=f,le=Un(l.firstChild)):le=f),Ve(e,i,i.pendingProps.children,s),dc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((f=l=le)&&(l=zA(l,i.type,i.pendingProps,ei),l!==null?(i.stateNode=l,en=i,le=Un(l.firstChild),ei=!1,f=!0):f=!1),f||Ra(i)),rr(i),f=i.type,d=i.pendingProps,_=e!==null?e.memoizedProps:null,l=d.children,zd(f,d)?l=null:_!==null&&zd(f,_)&&(i.flags|=32),i.memoizedState!==null&&(f=jh(e,i,rA,null,null,s),Tl._currentValue=f),dc(e,i),Ve(e,i,l,s),i.child;case 6:return e===null&&Bt&&((e=s=le)&&(s=BA(s,i.pendingProps,ei),s!==null?(i.stateNode=s,en=i,le=null,e=!0):e=!1),e||Ra(i)),null;case 13:return Jy(e,i,s);case 4:return Wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ns(i,null,l,s):Ve(e,i,l,s),i.child;case 11:return Gy(e,i,i.type,i.pendingProps,s);case 7:return Ve(e,i,i.pendingProps,s),i.child;case 8:return Ve(e,i,i.pendingProps.children,s),i.child;case 12:return Ve(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,hr(i,i.type,l.value),Ve(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ia(i),f=Ge(f),l=l(f),i.flags|=1,Ve(e,i,l,s),i.child;case 14:return Yy(e,i,i.type,i.pendingProps,s);case 15:return Ky(e,i,i.type,i.pendingProps,s);case 19:return ev(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=mc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Ni(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Qy(e,i,s);case 24:return Ia(i),l=Ge(Ae),e===null?(f=xh(),f===null&&(f=Zt,d=Ih(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Nh(i),hr(i,Ae,f)):((e.lanes&s)!==0&&(Mh(e,i),Jo(i,null,null,s),Zo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),hr(i,Ae,l)):(l=d.cache,hr(i,Ae,l),l!==f.cache&&Ch(i,[Ae],s,!0))),Ve(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function zi(e){e.flags|=4}function iv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f_(i)){if(i=On.current,i!==null&&((Lt&4194048)===Lt?ni!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==ni))throw $o=Dh,zg;e.flags|=8192}}function pc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ao():536870912,e.lanes|=i,Ls|=i)}function sl(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function dA(e,i,s){var l=i.pendingProps;switch(Ah(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Li(Ae),Fn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Fo(i)?zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kg())),re(i),null;case 26:return s=i.memoizedState,e===null?(zi(i),s!==null?(re(i),iv(i,s)):(re(i),i.flags&=-16777217)):s?s!==e.memoizedState?(zi(i),re(i),iv(i,s)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&zi(i),re(i),i.flags&=-16777217),null;case 27:_i(i),s=bt.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&zi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return re(i),null}e=gt.current,Fo(i)?Mg(i):(e=i_(f,l,s),i.stateNode=e,zi(i))}return re(i),null;case 5:if(_i(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&zi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return re(i),null}if(e=gt.current,Fo(i))Mg(i);else{switch(f=Ic(bt.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[Ee]=i,e[pe]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(je(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&zi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=bt.current,Fo(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=en,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||$v(e.nodeValue,s)),e||Ra(i)}else e=Ic(e).createTextNode(l),e[Ee]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Fo(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Ee]=i}else qo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),f=!1}else f=kg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ui(i),i):(Ui(i),null)}if(Ui(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),pc(i,i.updateQueue),re(i),null;case 4:return Fn(),e===null&&kd(i.stateNode.containerInfo),re(i),null;case 10:return Li(i.type),re(i),null;case 19:if(lt(Se),f=i.memoizedState,f===null)return re(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)sl(f,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=cc(e),d!==null){for(i.flags|=128,sl(f,!1),e=d.updateQueue,i.updateQueue=e,pc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Dg(s,e),s=s.sibling;return at(Se,Se.current&1|2),i.child}e=e.sibling}f.tail!==null&&_n()>vc&&(i.flags|=128,l=!0,sl(f,!1),i.lanes=4194304)}else{if(!l)if(e=cc(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,pc(i,e),sl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Bt)return re(i),null}else 2*_n()-f.renderingStartTime>vc&&s!==536870912&&(i.flags|=128,l=!0,sl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(e=f.last,e!==null?e.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=_n(),i.sibling=null,e=Se.current,at(Se,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return Ui(i),Vh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),s=i.updateQueue,s!==null&&pc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&lt(Oa),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Li(Ae),re(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function mA(e,i){switch(Ah(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Li(Ae),Fn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(Ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));qo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return lt(Se),null;case 4:return Fn(),null;case 10:return Li(i.type),null;case 22:case 23:return Ui(i),Vh(),e!==null&&lt(Oa),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Li(Ae),null;case 25:return null;default:return null}}function rv(e,i){switch(Ah(i),i.tag){case 3:Li(Ae),Fn();break;case 26:case 27:case 5:_i(i);break;case 4:Fn();break;case 13:Ui(i);break;case 19:lt(Se);break;case 10:Li(i.type);break;case 22:case 23:Ui(i),Vh(),e!==null&&lt(Oa);break;case 24:Li(Ae)}}function ol(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,_=s.inst;l=d(),_.destroy=l}s=s.next}while(s!==f)}}catch(T){$t(i,i.return,T)}}function _r(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=i;var C=s,z=T;try{z()}catch(X){$t(f,C,X)}}}l=l.next}while(l!==d)}}catch(X){$t(i,i.return,X)}}function av(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Yg(i,s)}catch(l){$t(e,e.return,l)}}}function sv(e,i,s){s.props=Da(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){$t(e,i,l)}}function ll(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){$t(e,i,f)}}function ii(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){$t(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){$t(e,i,f)}else s.current=null}function ov(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){$t(e,e.return,f)}}function fd(e,i,s){try{var l=e.stateNode;kA(l,e.type,s,i),l[pe]=i}catch(f){$t(e,e.return,f)}}function lv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cr(e.type)||e.tag===4}function hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dd(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Cc));else if(l!==4&&(l===27&&Cr(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(dd(e,i,s),e=e.sibling;e!==null;)dd(e,i,s),e=e.sibling}function gc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Cr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(gc(e,i,s),e=e.sibling;e!==null;)gc(e,i,s),e=e.sibling}function uv(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);je(i,l,s),i[Ee]=e,i[pe]=s}catch(d){$t(e,e.return,d)}}var Bi=!1,me=!1,md=!1,cv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function pA(e,i){if(e=e.containerInfo,Ud=Pc,e=Tg(e),hh(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var _=0,T=-1,C=-1,z=0,X=0,J=e,H=null;e:for(;;){for(var F;J!==s||f!==0&&J.nodeType!==3||(T=_+f),J!==d||l!==0&&J.nodeType!==3||(C=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(F=J.firstChild)!==null;)H=J,J=F;for(;;){if(J===e)break e;if(H===s&&++z===f&&(T=_),H===d&&++X===l&&(C=_),(F=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=F}s=T===-1||C===-1?null:{start:T,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(jd={focusedElem:e,selectionRange:s},Pc=!1,Oe=i;Oe!==null;)if(i=Oe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Oe=e;else for(;Oe!==null;){switch(i=Oe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Et=Da(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(yt){$t(s,s.return,yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Hd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Oe=e;break}Oe=i.return}}function fv(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Er(e,s),l&4&&ol(5,s);break;case 1:if(Er(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(_){$t(s,s.return,_)}else{var f=Da(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){$t(s,s.return,_)}}l&64&&av(s),l&512&&ll(s,s.return);break;case 3:if(Er(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Yg(e,i)}catch(_){$t(s,s.return,_)}}break;case 27:i===null&&l&4&&uv(s);case 26:case 5:Er(e,s),i===null&&l&4&&ov(s),l&512&&ll(s,s.return);break;case 12:Er(e,s);break;case 13:Er(e,s),l&4&&mv(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=SA.bind(null,s),HA(e,s))));break;case 22:if(l=s.memoizedState!==null||Bi,!l){i=i!==null&&i.memoizedState!==null||me,f=Bi;var d=me;Bi=l,(me=i)&&!d?Tr(e,s,(s.subtreeFlags&8772)!==0):Er(e,s),Bi=f,me=d}break;case 30:break;default:Er(e,s)}}function hv(e){var i=e.alternate;i!==null&&(e.alternate=null,hv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&lr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,rn=!1;function Hi(e,i,s){for(s=s.child;s!==null;)dv(e,i,s),s=s.sibling}function dv(e,i,s){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(oe,s)}catch{}switch(s.tag){case 26:me||ii(s,i),Hi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:me||ii(s,i);var l=ne,f=rn;Cr(s.type)&&(ne=s.stateNode,rn=!1),Hi(e,i,s),yl(s.stateNode),ne=l,rn=f;break;case 5:me||ii(s,i);case 6:if(l=ne,f=rn,ne=null,Hi(e,i,s),ne=l,rn=f,ne!==null)if(rn)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(s.stateNode)}catch(d){$t(s,i,d)}else try{ne.removeChild(s.stateNode)}catch(d){$t(s,i,d)}break;case 18:ne!==null&&(rn?(e=ne,e_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),wl(e)):e_(ne,s.stateNode));break;case 4:l=ne,f=rn,ne=s.stateNode.containerInfo,rn=!0,Hi(e,i,s),ne=l,rn=f;break;case 0:case 11:case 14:case 15:me||_r(2,s,i),me||_r(4,s,i),Hi(e,i,s);break;case 1:me||(ii(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&sv(s,i,l)),Hi(e,i,s);break;case 21:Hi(e,i,s);break;case 22:me=(l=me)||s.memoizedState!==null,Hi(e,i,s),me=l;break;default:Hi(e,i,s)}}function mv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wl(e)}catch(s){$t(i,i.return,s)}}function gA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new cv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new cv),i;default:throw Error(a(435,e.tag))}}function pd(e,i){var s=gA(e);i.forEach(function(l){var f=wA.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function dn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,_=i,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Cr(T.type)){ne=T.stateNode,rn=!1;break t}break;case 5:ne=T.stateNode,rn=!1;break t;case 3:case 4:ne=T.stateNode.containerInfo,rn=!0;break t}T=T.return}if(ne===null)throw Error(a(160));dv(d,_,f),ne=null,rn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)pv(i,e),i=i.sibling}var Vn=null;function pv(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dn(i,e),mn(e),l&4&&(_r(3,e,e.return),ol(3,e),_r(5,e,e.return));break;case 1:dn(i,e),mn(e),l&512&&(me||s===null||ii(s,s.return)),l&64&&Bi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Vn;if(dn(i,e),mn(e),l&512&&(me||s===null||ii(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[sa]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),je(d,l,s),d[Ee]=e,he(d),l=d;break t;case"link":var _=u_("link","href",f).get(l+(s.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(T,1);break e}}d=f.createElement(l),je(d,l,s),f.head.appendChild(d);break;case"meta":if(_=u_("meta","content",f).get(l+(s.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(T,1);break e}}d=f.createElement(l),je(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[Ee]=e,he(d),l=d}e.stateNode=l}else c_(f,e.type,e.stateNode);else e.stateNode=l_(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?c_(f,e.type,e.stateNode):l_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fd(e,e.memoizedProps,s.memoizedProps)}break;case 27:dn(i,e),mn(e),l&512&&(me||s===null||ii(s,s.return)),s!==null&&l&4&&fd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(dn(i,e),mn(e),l&512&&(me||s===null||ii(s,s.return)),e.flags&32){f=e.stateNode;try{Tn(f,"")}catch(F){$t(e,e.return,F)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,fd(e,f,s!==null?s.memoizedProps:f)),l&1024&&(md=!0);break;case 6:if(dn(i,e),mn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(F){$t(e,e.return,F)}}break;case 3:if(Dc=null,f=Vn,Vn=Oc(i.containerInfo),dn(i,e),Vn=f,mn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{wl(i.containerInfo)}catch(F){$t(e,e.return,F)}md&&(md=!1,gv(e));break;case 4:l=Vn,Vn=Oc(e.stateNode.containerInfo),dn(i,e),mn(e),Vn=l;break;case 12:dn(i,e),mn(e);break;case 13:dn(i,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Td=_n()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pd(e,l)));break;case 22:f=e.memoizedState!==null;var C=s!==null&&s.memoizedState!==null,z=Bi,X=me;if(Bi=z||f,me=X||C,dn(i,e),me=X,Bi=z,mn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||C||Bi||me||Na(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){C=s=i;try{if(d=C.stateNode,f)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=C.stateNode;var J=C.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(F){$t(C,C.return,F)}}}else if(i.tag===6){if(s===null){C=i;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){$t(C,C.return,F)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,pd(e,s))));break;case 19:dn(i,e),mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,pd(e,l)));break;case 30:break;case 21:break;default:dn(i,e),mn(e)}}function mn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(lv(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=hd(e);gc(e,d,f);break;case 5:var _=s.stateNode;s.flags&32&&(Tn(_,""),s.flags&=-33);var T=hd(e);gc(e,T,_);break;case 3:case 4:var C=s.stateNode.containerInfo,z=hd(e);dd(e,z,C);break;default:throw Error(a(161))}}catch(X){$t(e,e.return,X)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function gv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;gv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Er(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)fv(e,i.alternate,i),i=i.sibling}function Na(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:_r(4,i,i.return),Na(i);break;case 1:ii(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&sv(i,i.return,s),Na(i);break;case 27:yl(i.stateNode);case 26:case 5:ii(i,i.return),Na(i);break;case 22:i.memoizedState===null&&Na(i);break;case 30:Na(i);break;default:Na(i)}e=e.sibling}}function Tr(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Tr(f,d,s),ol(4,d);break;case 1:if(Tr(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){$t(l,l.return,z)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Gg(C[f],T)}catch(z){$t(l,l.return,z)}}s&&_&64&&av(d),ll(d,d.return);break;case 27:uv(d);case 26:case 5:Tr(f,d,s),s&&l===null&&_&4&&ov(d),ll(d,d.return);break;case 12:Tr(f,d,s);break;case 13:Tr(f,d,s),s&&_&4&&mv(f,d);break;case 22:d.memoizedState===null&&Tr(f,d,s),ll(d,d.return);break;case 30:break;default:Tr(f,d,s)}i=i.sibling}}function gd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Ko(s))}function yd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e))}function ri(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)yv(e,i,s,l),i=i.sibling}function yv(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:ri(e,i,s,l),f&2048&&ol(9,i);break;case 1:ri(e,i,s,l);break;case 3:ri(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ko(e)));break;case 12:if(f&2048){ri(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){$t(i,i.return,C)}}else ri(e,i,s,l);break;case 13:ri(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?ri(e,i,s,l):ul(e,i):d._visibility&2?ri(e,i,s,l):(d._visibility|=2,Ms(e,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&gd(_,i);break;case 24:ri(e,i,s,l),f&2048&&yd(i.alternate,i);break;default:ri(e,i,s,l)}}function Ms(e,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,_=i,T=s,C=l,z=_.flags;switch(_.tag){case 0:case 11:case 15:Ms(d,_,T,C,f),ol(8,_);break;case 23:break;case 22:var X=_.stateNode;_.memoizedState!==null?X._visibility&2?Ms(d,_,T,C,f):ul(d,_):(X._visibility|=2,Ms(d,_,T,C,f)),f&&z&2048&&gd(_.alternate,_);break;case 24:Ms(d,_,T,C,f),f&&z&2048&&yd(_.alternate,_);break;default:Ms(d,_,T,C,f)}i=i.sibling}}function ul(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:ul(s,l),f&2048&&gd(l.alternate,l);break;case 24:ul(s,l),f&2048&&yd(l.alternate,l);break;default:ul(s,l)}i=i.sibling}}var cl=8192;function Ps(e){if(e.subtreeFlags&cl)for(e=e.child;e!==null;)vv(e),e=e.sibling}function vv(e){switch(e.tag){case 26:Ps(e),e.flags&cl&&e.memoizedState!==null&&eS(Vn,e.memoizedState,e.memoizedProps);break;case 5:Ps(e);break;case 3:case 4:var i=Vn;Vn=Oc(e.stateNode.containerInfo),Ps(e),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=cl,cl=16777216,Ps(e),cl=i):Ps(e));break;default:Ps(e)}}function _v(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function fl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Oe=l,Tv(l,e)}_v(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ev(e),e=e.sibling}function Ev(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&_r(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,yc(e)):fl(e);break;default:fl(e)}}function yc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Oe=l,Tv(l,e)}_v(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:_r(8,i,i.return),yc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,yc(i));break;default:yc(i)}e=e.sibling}}function Tv(e,i){for(;Oe!==null;){var s=Oe;switch(s.tag){case 0:case 11:case 15:_r(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Oe=l;else t:for(s=e;Oe!==null;){l=Oe;var f=l.sibling,d=l.return;if(hv(l),l===s){Oe=null;break t}if(f!==null){f.return=d,Oe=f;break t}Oe=d}}}var yA={getCacheForType:function(e){var i=Ge(Ae),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},vA=typeof WeakMap=="function"?WeakMap:Map,qt=0,Zt=null,Ot=null,Lt=0,Gt=0,pn=null,br=!1,ks=!1,vd=!1,Fi=0,ue=0,Ar=0,Ma=0,_d=0,xn=0,Ls=0,hl=null,an=null,Ed=!1,Td=0,vc=1/0,_c=null,Sr=null,Ue=0,wr=null,Vs=null,Us=0,bd=0,Ad=null,bv=null,dl=0,Sd=null;function gn(){if((qt&2)!==0&&Lt!==0)return Lt&-Lt;if(Q.T!==null){var e=ws;return e!==0?e:Dd()}return sr()}function Av(){xn===0&&(xn=(Lt&536870912)===0||Bt?bo():536870912);var e=On.current;return e!==null&&(e.flags|=32),xn}function yn(e,i,s){(e===Zt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(js(e,0),Rr(e,Lt,xn,!1)),Ti(e,s),((qt&2)===0||e!==Zt)&&(e===Zt&&((qt&2)===0&&(Ma|=s),ue===4&&Rr(e,Lt,xn,!1)),ai(e))}function Sv(e,i,s){if((qt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||aa(e,i),f=l?TA(e,i):Cd(e,i,!0),d=l;do{if(f===0){ks&&!l&&Rr(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!_A(s)){f=Cd(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var T=e;f=hl;var C=T.current.memoizedState.isDehydrated;if(C&&(js(T,_).flags|=256),_=Cd(T,_,!1),_!==2){if(vd&&!C){T.errorRecoveryDisabledLanes|=d,Ma|=d,f=4;break t}d=an,an=f,d!==null&&(an===null?an=d:an.push.apply(an,d))}f=_}if(d=!1,f!==2)continue}}if(f===1){js(e,0),Rr(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Rr(l,i,xn,!br);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Td+300-_n(),10<f)){if(Rr(l,i,xn,!br),ns(l,0,!0)!==0)break t;l.timeoutHandle=Jv(wv.bind(null,l,s,an,_c,Ed,i,xn,Ma,Ls,br,d,2,-0,0),f);break t}wv(l,s,an,_c,Ed,i,xn,Ma,Ls,br,d,0,-0,0)}}break}while(!0);ai(e)}function wv(e,i,s,l,f,d,_,T,C,z,X,J,H,F){if(e.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(El={stylesheets:null,count:0,unsuspend:tS},vv(i),J=nS(),J!==null)){e.cancelPendingCommit=J(Nv.bind(null,e,i,d,s,l,f,_,T,C,X,1,H,F)),Rr(e,d,_,!z);return}Nv(e,i,d,s,l,f,_,T,C)}function _A(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!fn(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(e,i,s,l){i&=~_d,i&=~Ma,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-qe(f),_=1<<d;l[d]=-1,f&=~_}s!==0&&qn(e,s,i)}function Ec(){return(qt&6)===0?(ml(0),!1):!0}function wd(){if(Ot!==null){if(Gt===0)var e=Ot.return;else e=Ot,ki=Ca=null,Hh(e),Ds=null,rl=0,e=Ot;for(;e!==null;)rv(e.alternate,e),e=e.return;Ot=null}}function js(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,VA(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),wd(),Zt=e,Ot=s=Ni(e.current,null),Lt=i,Gt=0,pn=null,br=!1,ks=aa(e,i),vd=!1,Ls=xn=_d=Ma=Ar=ue=0,an=hl=null,Ed=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-qe(l),d=1<<f;i|=e[f],l&=~d}return Fi=i,Hu(),s}function Rv(e,i){Rt=null,Q.H=oc,i===Xo||i===Wu?(i=Fg(),Gt=3):i===zg?(i=Fg(),Gt=4):Gt=i===qy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,Ot===null&&(ue=1,hc(e,wn(i,e.current)))}function Cv(){var e=Q.H;return Q.H=oc,e===null?oc:e}function Iv(){var e=Q.A;return Q.A=yA,e}function Rd(){ue=4,br||(Lt&4194048)!==Lt&&On.current!==null||(ks=!0),(Ar&134217727)===0&&(Ma&134217727)===0||Zt===null||Rr(Zt,Lt,xn,!1)}function Cd(e,i,s){var l=qt;qt|=2;var f=Cv(),d=Iv();(Zt!==e||Lt!==i)&&(_c=null,js(e,i)),i=!1;var _=ue;t:do try{if(Gt!==0&&Ot!==null){var T=Ot,C=pn;switch(Gt){case 8:wd(),_=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var z=Gt;if(Gt=0,pn=null,zs(e,T,C,z),s&&ks){_=0;break t}break;default:z=Gt,Gt=0,pn=null,zs(e,T,C,z)}}EA(),_=ue;break}catch(X){Rv(e,X)}while(!0);return i&&e.shellSuspendCounter++,ki=Ca=null,qt=l,Q.H=f,Q.A=d,Ot===null&&(Zt=null,Lt=0,Hu()),_}function EA(){for(;Ot!==null;)Ov(Ot)}function TA(e,i){var s=qt;qt|=2;var l=Cv(),f=Iv();Zt!==e||Lt!==i?(_c=null,vc=_n()+500,js(e,i)):ks=aa(e,i);t:do try{if(Gt!==0&&Ot!==null){i=Ot;var d=pn;e:switch(Gt){case 1:Gt=0,pn=null,zs(e,i,d,1);break;case 2:case 9:if(Bg(d)){Gt=0,pn=null,xv(i);break}i=function(){Gt!==2&&Gt!==9||Zt!==e||(Gt=7),ai(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Bg(d)?(Gt=0,pn=null,xv(i)):(Gt=0,pn=null,zs(e,i,d,7));break;case 5:var _=null;switch(Ot.tag){case 26:_=Ot.memoizedState;case 5:case 27:var T=Ot;if(!_||f_(_)){Gt=0,pn=null;var C=T.sibling;if(C!==null)Ot=C;else{var z=T.return;z!==null?(Ot=z,Tc(z)):Ot=null}break e}}Gt=0,pn=null,zs(e,i,d,5);break;case 6:Gt=0,pn=null,zs(e,i,d,6);break;case 8:wd(),ue=6;break t;default:throw Error(a(462))}}bA();break}catch(X){Rv(e,X)}while(!0);return ki=Ca=null,Q.H=l,Q.A=f,qt=s,Ot!==null?0:(Zt=null,Lt=0,Hu(),ue)}function bA(){for(;Ot!==null&&!vo();)Ov(Ot)}function Ov(e){var i=nv(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,i===null?Tc(e):Ot=i}function xv(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=$y(s,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=$y(s,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:Hh(i);default:rv(s,i),i=Ot=Dg(i,Fi),i=nv(s,i,Fi)}e.memoizedProps=e.pendingProps,i===null?Tc(e):Ot=i}function zs(e,i,s,l){ki=Ca=null,Hh(i),Ds=null,rl=0;var f=i.return;try{if(fA(e,f,i,s,Lt)){ue=1,hc(e,wn(s,e.current)),Ot=null;return}}catch(d){if(f!==null)throw Ot=f,d;ue=1,hc(e,wn(s,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:ks||(Lt&536870912)!==0?e=!1:(br=e=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dv(i,e)):Tc(i)}function Tc(e){var i=e;do{if((i.flags&32768)!==0){Dv(i,br);return}e=i.return;var s=dA(i.alternate,i,Fi);if(s!==null){Ot=s;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ue===0&&(ue=5)}function Dv(e,i){do{var s=mA(e.alternate,e);if(s!==null){s.flags&=32767,Ot=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=s}while(e!==null);ue=6,Ot=null}function Nv(e,i,s,l,f,d,_,T,C){e.cancelPendingCommit=null;do bc();while(Ue!==0);if((qt&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=yh,So(e,s,d,_,T,C),e===Zt&&(Ot=Zt=null,Lt=0),Vs=i,wr=e,Us=s,bd=d,Ad=f,bv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RA(ea,function(){return Vv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,f=ot.p,ot.p=2,_=qt,qt|=4;try{pA(e,i,s)}finally{qt=_,ot.p=f,Q.T=l}}Ue=1,Mv(),Pv(),kv()}}function Mv(){if(Ue===1){Ue=0;var e=wr,i=Vs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=Q.T,Q.T=null;var l=ot.p;ot.p=2;var f=qt;qt|=4;try{pv(i,e);var d=jd,_=Tg(e.containerInfo),T=d.focusedElem,C=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&Eg(T.ownerDocument.documentElement,T)){if(C!==null&&hh(T)){var z=C.start,X=C.end;if(X===void 0&&(X=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var F=H.getSelection(),Et=T.textContent.length,yt=Math.min(C.start,Et),Xt=C.end===void 0?yt:Math.min(C.end,Et);!F.extend&&yt>Xt&&(_=Xt,Xt=yt,yt=_);var L=_g(T,yt),N=_g(T,Xt);if(L&&N&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==N.node||F.focusOffset!==N.offset)){var j=J.createRange();j.setStart(L.node,L.offset),F.removeAllRanges(),yt>Xt?(F.addRange(j),F.extend(N.node,N.offset)):(j.setEnd(N.node,N.offset),F.addRange(j))}}}}for(J=[],F=T;F=F.parentNode;)F.nodeType===1&&J.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var $=J[T];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Pc=!!Ud,jd=Ud=null}finally{qt=f,ot.p=l,Q.T=s}}e.current=i,Ue=2}}function Pv(){if(Ue===2){Ue=0;var e=wr,i=Vs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=Q.T,Q.T=null;var l=ot.p;ot.p=2;var f=qt;qt|=4;try{fv(e,i.alternate,i)}finally{qt=f,ot.p=l,Q.T=s}}Ue=3}}function kv(){if(Ue===4||Ue===3){Ue=0,yu();var e=wr,i=Vs,s=Us,l=bv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ue=5:(Ue=0,Vs=wr=null,Lv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Sr=null),is(s),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Q.T,f=ot.p,ot.p=2,Q.T=null;try{for(var d=e.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{Q.T=i,ot.p=f}}(Us&3)!==0&&bc(),ai(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===Sd?dl++:(dl=0,Sd=e):dl=0,ml(0)}}function Lv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ko(i)))}function bc(e){return Mv(),Pv(),kv(),Vv()}function Vv(){if(Ue!==5)return!1;var e=wr,i=bd;bd=0;var s=is(Us),l=Q.T,f=ot.p;try{ot.p=32>s?32:s,Q.T=null,s=Ad,Ad=null;var d=wr,_=Us;if(Ue=0,Vs=wr=null,Us=0,(qt&6)!==0)throw Error(a(331));var T=qt;if(qt|=4,Ev(d.current),yv(d,d.current,_,s),qt=T,ml(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{ot.p=f,Q.T=l,Lv(e,i)}}function Uv(e,i,s){i=wn(s,i),i=nd(e.stateNode,i,2),e=pr(e,i,2),e!==null&&(Ti(e,2),ai(e))}function $t(e,i,s){if(e.tag===3)Uv(e,e,s);else for(;i!==null;){if(i.tag===3){Uv(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sr===null||!Sr.has(l))){e=wn(s,e),s=Hy(2),l=pr(i,s,2),l!==null&&(Fy(s,l,i,e),Ti(l,2),ai(l));break}}i=i.return}}function Id(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new vA;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(vd=!0,f.add(s),e=AA.bind(null,e,i,s),i.then(e,e))}function AA(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Zt===e&&(Lt&s)===s&&(ue===4||ue===3&&(Lt&62914560)===Lt&&300>_n()-Td?(qt&2)===0&&js(e,0):_d|=s,Ls===Lt&&(Ls=0)),ai(e)}function jv(e,i){i===0&&(i=Ao()),e=Ts(e,i),e!==null&&(Ti(e,i),ai(e))}function SA(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),jv(e,s)}function wA(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),jv(e,s)}function RA(e,i){return Jr(e,i)}var Ac=null,Bs=null,Od=!1,Sc=!1,xd=!1,Pa=0;function ai(e){e!==Bs&&e.next===null&&(Bs===null?Ac=Bs=e:Bs=Bs.next=e),Sc=!0,Od||(Od=!0,IA())}function ml(e,i){if(!xd&&Sc){xd=!0;do for(var s=!1,l=Ac;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-qe(42|e)+1)-1,d&=f&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Fv(l,d))}else d=Lt,d=ns(l,l===Zt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||aa(l,d)||(s=!0,Fv(l,d));l=l.next}while(s);xd=!1}}function CA(){zv()}function zv(){Sc=Od=!1;var e=0;Pa!==0&&(LA()&&(e=Pa),Pa=0);for(var i=_n(),s=null,l=Ac;l!==null;){var f=l.next,d=Bv(l,i);d===0?(l.next=null,s===null?Ac=f:s.next=f,f===null&&(Bs=s)):(s=l,(e!==0||(d&3)!==0)&&(Sc=!0)),l=f}ml(e)}function Bv(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-qe(d),T=1<<_,C=f[_];C===-1?((T&s)===0||(T&l)!==0)&&(f[_]=To(T,i)):C<=i&&(e.expiredLanes|=T),d&=~T}if(i=Zt,s=Lt,s=ns(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ta(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||aa(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ta(l),is(s)){case 2:case 8:s=ts;break;case 32:s=ea;break;case 268435456:s=es;break;default:s=ea}return l=Hv.bind(null,e),s=Jr(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ta(l),e.callbackPriority=2,e.callbackNode=null,2}function Hv(e,i){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(bc()&&e.callbackNode!==s)return null;var l=Lt;return l=ns(e,e===Zt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Sv(e,l,i),Bv(e,_n()),e.callbackNode!=null&&e.callbackNode===s?Hv.bind(null,e):null)}function Fv(e,i){if(bc())return null;Sv(e,i,!0)}function IA(){UA(function(){(qt&6)!==0?Jr(_o,CA):zv()})}function Dd(){return Pa===0&&(Pa=bo()),Pa}function qv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:us(""+e)}function Gv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function OA(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=qv((f[pe]||null).action),_=l.submitter;_&&(i=(i=_[pe]||null)?qv(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new cs("action","action",null,l,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pa!==0){var C=_?Gv(f,_):new FormData(f);Wh(s,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=_?Gv(f,_):new FormData(f),Wh(s,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Nd=0;Nd<gh.length;Nd++){var Md=gh[Nd],xA=Md.toLowerCase(),DA=Md[0].toUpperCase()+Md.slice(1);Ln(xA,"on"+DA)}Ln(Sg,"onAnimationEnd"),Ln(wg,"onAnimationIteration"),Ln(Rg,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Q1,"onTransitionRun"),Ln(X1,"onTransitionStart"),Ln($1,"onTransitionCancel"),Ln(Cg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Yv(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],C=T.instance,z=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=z;try{d(f)}catch(X){fc(X)}f.currentTarget=null,d=C}else for(_=0;_<l.length;_++){if(T=l[_],C=T.instance,z=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=z;try{d(f)}catch(X){fc(X)}f.currentTarget=null,d=C}}}}function xt(e,i){var s=i[Ro];s===void 0&&(s=i[Ro]=new Set);var l=e+"__bubble";s.has(l)||(Kv(i,e,2,!1),s.add(l))}function Pd(e,i,s){var l=0;i&&(l|=4),Kv(s,e,l,i)}var wc="_reactListening"+Math.random().toString(36).slice(2);function kd(e){if(!e[wc]){e[wc]=!0,Co.forEach(function(s){s!=="selectionchange"&&(NA.has(s)||Pd(s,!1,e),Pd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[wc]||(i[wc]=!0,Pd("selectionchange",!1,i))}}function Kv(e,i,s,l){switch(y_(i)){case 2:var f=aS;break;case 8:f=sS;break;default:f=Xd}s=f.bind(null,i,s,e),f=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Ld(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===f)break;if(_===4)for(_=l.return;_!==null;){var C=_.tag;if((C===3||C===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;T!==null;){if(_=bi(T),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){l=d=_;continue t}T=T.parentNode}}l=l.return}Cu(function(){var z=d,X=bn(s),J=[];t:{var H=Ig.get(e);if(H!==void 0){var F=cs,Et=e;switch(e){case"keypress":if($n(s)===0)break t;case"keydown":case"keyup":F=gs;break;case"focusin":Et="focus",F=ds;break;case"focusout":Et="blur",F=ds;break;case"beforeblur":case"afterblur":F=ds;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=ku;break;case Sg:case wg:case Rg:F=ms;break;case Cg:F=Vu;break;case"scroll":case"scrollend":F=Iu;break;case"wheel":F=ys;break;case"copy":case"cut":case"paste":F=ps;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=jo;break;case"toggle":case"beforetoggle":F=ju}var yt=(i&4)!==0,Xt=!yt&&(e==="scroll"||e==="scrollend"),L=yt?H!==null?H+"Capture":null:H;yt=[];for(var N=z,j;N!==null;){var $=N;if(j=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||j===null||L===null||($=da(N,L),$!=null&&yt.push(gl(N,$,j))),Xt)break;N=N.return}0<yt.length&&(H=new F(H,Et,null,s,X),J.push({event:H,listeners:yt}))}}if((i&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",H&&s!==Ri&&(Et=s.relatedTarget||s.fromElement)&&(bi(Et)||Et[En]))break t;if((F||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,F?(Et=s.relatedTarget||s.toElement,F=z,Et=Et?bi(Et):null,Et!==null&&(Xt=u(Et),yt=Et.tag,Et!==Xt||yt!==5&&yt!==27&&yt!==6)&&(Et=null)):(F=null,Et=z),F!==Et)){if(yt=Sn,$="onMouseLeave",L="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(yt=jo,$="onPointerLeave",L="onPointerEnter",N="pointer"),Xt=F==null?H:Yn(F),j=Et==null?H:Yn(Et),H=new yt($,N+"leave",F,s,X),H.target=Xt,H.relatedTarget=j,$=null,bi(X)===z&&(yt=new yt(L,N+"enter",Et,s,X),yt.target=j,yt.relatedTarget=Xt,$=yt),Xt=$,F&&Et)e:{for(yt=F,L=Et,N=0,j=yt;j;j=Hs(j))N++;for(j=0,$=L;$;$=Hs($))j++;for(;0<N-j;)yt=Hs(yt),N--;for(;0<j-N;)L=Hs(L),j--;for(;N--;){if(yt===L||L!==null&&yt===L.alternate)break e;yt=Hs(yt),L=Hs(L)}yt=null}else yt=null;F!==null&&Qv(J,H,F,yt,!1),Et!==null&&Xt!==null&&Qv(J,Xt,Et,yt,!0)}}t:{if(H=z?Yn(z):window,F=H.nodeName&&H.nodeName.toLowerCase(),F==="select"||F==="input"&&H.type==="file")var ft=dg;else if(be(H))if(mg)ft=G1;else{ft=F1;var It=H1}else F=H.nodeName,!F||F.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?z&&No(z.elementType)&&(ft=dg):ft=q1;if(ft&&(ft=ft(e,z))){Di(J,ft,s,X);break t}It&&It(e,H,z),e==="focusout"&&z&&H.type==="number"&&z.memoizedProps.value!=null&&cr(H,"number",H.value)}switch(It=z?Yn(z):window,e){case"focusin":(be(It)||It.contentEditable==="true")&&(vs=It,dh=z,Ho=null);break;case"focusout":Ho=dh=vs=null;break;case"mousedown":mh=!0;break;case"contextmenu":case"mouseup":case"dragend":mh=!1,bg(J,s,X);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":bg(J,s,X)}var mt;if(Jn)t:{switch(e){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Pt?G(e,s)&&(vt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(vt="onCompositionStart");vt&&(v&&s.locale!=="ko"&&(Pt||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Pt&&(mt=Po()):(Xn=X,fr="value"in Xn?Xn.value:Xn.textContent,Pt=!0)),It=Rc(z,vt),0<It.length&&(vt=new Vo(vt,e,null,s,X),J.push({event:vt,listeners:It}),mt?vt.data=mt:(mt=st(s),mt!==null&&(vt.data=mt)))),(mt=p?Te(e,s):kt(e,s))&&(vt=Rc(z,"onBeforeInput"),0<vt.length&&(It=new Vo("onBeforeInput","beforeinput",null,s,X),J.push({event:It,listeners:vt}),It.data=mt)),OA(J,e,z,s,X)}Yv(J,i)})}function gl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Rc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=da(e,s),f!=null&&l.unshift(gl(e,f,d)),f=da(e,i),f!=null&&l.push(gl(e,f,d))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qv(e,i,s,l,f){for(var d=i._reactName,_=[];s!==null&&s!==l;){var T=s,C=T.alternate,z=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||z===null||(C=z,f?(z=da(s,d),z!=null&&_.unshift(gl(s,z,C))):f||(z=da(s,d),z!=null&&_.push(gl(s,z,C)))),s=s.return}_.length!==0&&e.push({event:i,listeners:_})}var MA=/\r\n?/g,PA=/\u0000|\uFFFD/g;function Xv(e){return(typeof e=="string"?e:""+e).replace(MA,`
`).replace(PA,"")}function $v(e,i){return i=Xv(i),Xv(e)===i}function Cc(){}function Qt(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":Kn(e,"class",l);break;case"tabIndex":Kn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kn(e,s,l);break;case"style":Do(e,l,d);break;case"data":if(i!=="object"){Kn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=us(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Qt(e,i,"name",f.name,f,null),Qt(e,i,"formEncType",f.formEncType,f,null),Qt(e,i,"formMethod",f.formMethod,f,null),Qt(e,i,"formTarget",f.formTarget,f,null)):(Qt(e,i,"encType",f.encType,f,null),Qt(e,i,"method",f.method,f,null),Qt(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=us(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Cc);break;case"onScroll":l!=null&&xt("scroll",e);break;case"onScrollEnd":l!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=us(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":xt("beforetoggle",e),xt("toggle",e),ur(e,"popover",l);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ur(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=sh.get(s)||s,ur(e,s,l))}}function Vd(e,i,s,l,f,d){switch(s){case"style":Do(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&xt("scroll",e);break;case"onScrollEnd":l!=null&&xt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Cc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[pe]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ur(e,s,l)}}}function je(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var _=s[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(e,i,d,_,s,null)}}f&&Qt(e,i,"srcSet",s.srcSet,s,null),l&&Qt(e,i,"src",s.src,s,null);return;case"input":xt("invalid",e);var T=d=_=f=null,C=null,z=null;for(l in s)if(s.hasOwnProperty(l)){var X=s[l];if(X!=null)switch(l){case"name":f=X;break;case"type":_=X;break;case"checked":C=X;break;case"defaultChecked":z=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:Qt(e,i,l,X,s,null)}}ca(e,d,T,C,z,_,f,!1),ls(e);return;case"select":xt("invalid",e),l=_=d=null;for(f in s)if(s.hasOwnProperty(f)&&(T=s[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Qt(e,i,f,T,s,null)}i=d,s=_,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):s!=null&&wi(e,!!l,s,!0);return;case"textarea":xt("invalid",e),d=f=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(T=s[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Qt(e,i,_,T,s,null)}fa(e,l,f,d),ls(e);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(l=s[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(e,i,C,l,s,null)}return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(l=0;l<pl.length;l++)xt(pl[l],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(e,i,z,l,s,null)}return;default:if(No(i)){for(X in s)s.hasOwnProperty(X)&&(l=s[X],l!==void 0&&Vd(e,i,X,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Qt(e,i,T,l,s,null))}function kA(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,T=null,C=null,z=null,X=null;for(F in s){var J=s[F];if(s.hasOwnProperty(F)&&J!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(F)||Qt(e,i,F,null,l,J)}}for(var H in l){var F=l[H];if(J=s[H],l.hasOwnProperty(H)&&(F!=null||J!=null))switch(H){case"type":d=F;break;case"name":f=F;break;case"checked":z=F;break;case"defaultChecked":X=F;break;case"value":_=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,i));break;default:F!==J&&Qt(e,i,H,F,l,J)}}cn(e,_,T,C,z,X,d,f);return;case"select":F=_=T=H=null;for(d in s)if(C=s[d],s.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":F=C;default:l.hasOwnProperty(d)||Qt(e,i,d,null,l,C)}for(f in l)if(d=l[f],C=s[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==C&&Qt(e,i,f,d,l,C)}i=T,s=_,l=F,H!=null?wi(e,!!s,H,!1):!!l!=!!s&&(i!=null?wi(e,!!s,i,!0):wi(e,!!s,s?[]:"",!1));return;case"textarea":F=H=null;for(T in s)if(f=s[T],s.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qt(e,i,T,null,l,f)}for(_ in l)if(f=l[_],d=s[_],l.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":H=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Qt(e,i,_,f,l,d)}Yt(e,H,F);return;case"option":for(var Et in s)if(H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Qt(e,i,Et,null,l,H)}for(C in l)if(H=l[C],F=s[C],l.hasOwnProperty(C)&&H!==F&&(H!=null||F!=null))switch(C){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Qt(e,i,C,H,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in s)H=s[yt],s.hasOwnProperty(yt)&&H!=null&&!l.hasOwnProperty(yt)&&Qt(e,i,yt,null,l,H);for(z in l)if(H=l[z],F=s[z],l.hasOwnProperty(z)&&H!==F&&(H!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,i));break;default:Qt(e,i,z,H,l,F)}return;default:if(No(i)){for(var Xt in s)H=s[Xt],s.hasOwnProperty(Xt)&&H!==void 0&&!l.hasOwnProperty(Xt)&&Vd(e,i,Xt,void 0,l,H);for(X in l)H=l[X],F=s[X],!l.hasOwnProperty(X)||H===F||H===void 0&&F===void 0||Vd(e,i,X,H,l,F);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Qt(e,i,L,null,l,H);for(J in l)H=l[J],F=s[J],!l.hasOwnProperty(J)||H===F||H==null&&F==null||Qt(e,i,J,H,l,F)}var Ud=null,jd=null;function Ic(e){return e.nodeType===9?e:e.ownerDocument}function Wv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function zd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bd=null;function LA(){var e=window.event;return e&&e.type==="popstate"?e===Bd?!1:(Bd=e,!0):(Bd=null,!1)}var Jv=typeof setTimeout=="function"?setTimeout:void 0,VA=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,UA=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(e){return t_.resolve(null).then(e).catch(jA)}:Jv;function jA(e){setTimeout(function(){throw e})}function Cr(e){return e==="head"}function e_(e,i){var s=i,l=0,f=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var _=e.ownerDocument;if(s&1&&yl(_.documentElement),s&2&&yl(_.body),s&4)for(s=_.head,yl(s),_=s.firstChild;_;){var T=_.nextSibling,C=_.nodeName;_[sa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&_.rel.toLowerCase()==="stylesheet"||s.removeChild(_),_=T}}if(f===0){e.removeChild(d),wl(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);wl(i)}function Hd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Hd(s),lr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function zA(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[sa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function BA(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Un(e.nextSibling),e===null))return null;return e}function Fd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function HA(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Un(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var qd=null;function n_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function i_(e,i,s){switch(i=Ic(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function yl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lr(e)}var Dn=new Map,r_=new Set;function Oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=ot.d;ot.d={f:FA,r:qA,D:GA,C:YA,L:KA,m:QA,X:$A,S:XA,M:WA};function FA(){var e=qi.f(),i=Ec();return e||i}function qA(e){var i=Gn(e);i!==null&&i.tag===5&&i.type==="form"?Sy(i):qi.r(e)}var Fs=typeof document>"u"?null:document;function a_(e,i,s){var l=Fs;if(l&&typeof i=="string"&&i){var f=ge(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),r_.has(f)||(r_.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),je(i,"link",e),he(i),l.head.appendChild(i)))}}function GA(e){qi.D(e),a_("dns-prefetch",e,null)}function YA(e,i){qi.C(e,i),a_("preconnect",e,i)}function KA(e,i,s){qi.L(e,i,s);var l=Fs;if(l&&e&&i){var f='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ge(s.imageSizes)+'"]')):f+='[href="'+ge(e)+'"]';var d=f;switch(i){case"style":d=qs(e);break;case"script":d=Gs(e)}Dn.has(d)||(e=E({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Dn.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(vl(d))||i==="script"&&l.querySelector(_l(d))||(i=l.createElement("link"),je(i,"link",e),he(i),l.head.appendChild(i)))}}function QA(e,i){qi.m(e,i);var s=Fs;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Gs(e)}if(!Dn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Dn.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(_l(d)))return}l=s.createElement("link"),je(l,"link",e),he(l),s.head.appendChild(l)}}}function XA(e,i,s){qi.S(e,i,s);var l=Fs;if(l&&e){var f=Ze(l).hoistableStyles,d=qs(e);i=i||"default";var _=f.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(vl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Dn.get(d))&&Gd(e,s);var C=_=l.createElement("link");he(C),je(C,"link",e),C._p=new Promise(function(z,X){C.onload=z,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,xc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(d,_)}}}function $A(e,i){qi.X(e,i);var s=Fs;if(s&&e){var l=Ze(s).hoistableScripts,f=Gs(e),d=l.get(f);d||(d=s.querySelector(_l(f)),d||(e=E({src:e,async:!0},i),(i=Dn.get(f))&&Yd(e,i),d=s.createElement("script"),he(d),je(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function WA(e,i){qi.M(e,i);var s=Fs;if(s&&e){var l=Ze(s).hoistableScripts,f=Gs(e),d=l.get(f);d||(d=s.querySelector(_l(f)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Dn.get(f))&&Yd(e,i),d=s.createElement("script"),he(d),je(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function s_(e,i,s,l){var f=(f=bt.current)?Oc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qs(s.href),s=Ze(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=qs(s.href);var d=Ze(f).hoistableStyles,_=d.get(e);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=f.querySelector(vl(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Dn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Dn.set(e,s),d||ZA(f,e,s,_.state))),i&&l===null)throw Error(a(528,""));return _}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Gs(s),s=Ze(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qs(e){return'href="'+ge(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function o_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function ZA(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),je(i,"link",s),he(i),e.head.appendChild(i))}function Gs(e){return'[src="'+ge(e)+'"]'}function _l(e){return"script[async]"+e}function l_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ge(s.href)+'"]');if(l)return i.instance=l,he(l),l;var f=E({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),je(l,"style",f),xc(l,s.precedence,e),i.instance=l;case"stylesheet":f=qs(s.href);var d=e.querySelector(vl(f));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=o_(s),(f=Dn.get(f))&&Gd(l,f),d=(e.ownerDocument||e).createElement("link"),he(d);var _=d;return _._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),je(d,"link",l),i.state.loading|=4,xc(d,s.precedence,e),i.instance=d;case"script":return d=Gs(s.src),(f=e.querySelector(_l(d)))?(i.instance=f,he(f),f):(l=s,(f=Dn.get(d))&&(l=E({},s),Yd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),he(f),je(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,xc(l,s.precedence,e));return i.instance}function xc(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Gd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Yd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Dc=null;function u_(e,i,s){if(Dc===null){var l=new Map,f=Dc=new Map;f.set(s,l)}else f=Dc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[sa]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=e+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function c_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function JA(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function f_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var El=null;function tS(){}function eS(e,i,s){if(El===null)throw Error(a(475));var l=El;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=qs(s.href),d=e.querySelector(vl(f));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Nc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,s=o_(s),(f=Dn.get(f))&&Gd(s,f),d=d.createElement("link"),he(d);var _=d;_._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),je(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Nc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function nS(){if(El===null)throw Error(a(475));var e=El;return e.stylesheets&&e.count===0&&Kd(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Kd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Nc(){if(this.count--,this.count===0){if(this.stylesheets)Kd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function Kd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,i.forEach(iS,e),Mc=null,Nc.call(e))}function iS(e,i){if(!(i.state.loading&4)){var s=Mc.get(e);if(s)var l=s.get(null);else{s=new Map,Mc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}f=i.instance,_=f.getAttribute("data-precedence"),d=s.get(_)||l,d===l&&s.set(null,f),s.set(_,f),this.count++,l=Nc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Tl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function rS(e,i,s,l,f,d,_,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ei(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.hiddenUpdates=Ei(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function h_(e,i,s,l,f,d,_,T,C,z,X,J){return e=new rS(e,i,s,_,T,C,z,J),i=1,d===!0&&(i|=24),d=hn(3,null,null,i),e.current=d,d.stateNode=e,i=Ih(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Nh(d),e}function d_(e){return e?(e=bs,e):bs}function m_(e,i,s,l,f,d){f=d_(f),l.context===null?l.context=f:l.pendingContext=f,l=mr(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=pr(e,l,i),s!==null&&(yn(s,e,i),Wo(s,e,i))}function p_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Qd(e,i){p_(e,i),(e=e.alternate)&&p_(e,i)}function g_(e){if(e.tag===13){var i=Ts(e,67108864);i!==null&&yn(i,e,67108864),Qd(e,67108864)}}var Pc=!0;function aS(e,i,s,l){var f=Q.T;Q.T=null;var d=ot.p;try{ot.p=2,Xd(e,i,s,l)}finally{ot.p=d,Q.T=f}}function sS(e,i,s,l){var f=Q.T;Q.T=null;var d=ot.p;try{ot.p=8,Xd(e,i,s,l)}finally{ot.p=d,Q.T=f}}function Xd(e,i,s,l){if(Pc){var f=$d(l);if(f===null)Ld(e,i,l,kc,s),v_(e,l);else if(lS(f,e,i,s,l))l.stopPropagation();else if(v_(e,l),i&4&&-1<oS.indexOf(e)){for(;f!==null;){var d=Gn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Mn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var C=1<<31-qe(_);T.entanglements[1]|=C,_&=~C}ai(d),(qt&6)===0&&(vc=_n()+500,ml(0))}}break;case 13:T=Ts(d,2),T!==null&&yn(T,d,2),Ec(),Qd(d,2)}if(d=$d(l),d===null&&Ld(e,i,l,kc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Ld(e,i,l,null,s)}}function $d(e){return e=bn(e),Wd(e)}var kc=null;function Wd(e){if(kc=null,e=bi(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return kc=e,null}function y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(th()){case _o:return 2;case ts:return 8;case ea:case eh:return 32;case es:return 268435456;default:return 32}default:return 32}}var Zd=!1,Ir=null,Or=null,xr=null,bl=new Map,Al=new Map,Dr=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(e,i){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(i.pointerId)}}function Sl(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Gn(i),i!==null&&g_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function lS(e,i,s,l,f){switch(i){case"focusin":return Ir=Sl(Ir,e,i,s,l,f),!0;case"dragenter":return Or=Sl(Or,e,i,s,l,f),!0;case"mouseover":return xr=Sl(xr,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return bl.set(d,Sl(bl.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Al.set(d,Sl(Al.get(d)||null,e,i,s,l,f)),!0}return!1}function __(e){var i=bi(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=h(s),i!==null){e.blockedOn=i,Eu(e.priority,function(){if(s.tag===13){var l=gn();l=ar(l);var f=Ts(s,l);f!==null&&yn(f,s,l),Qd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=$d(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Ri=l,s.target.dispatchEvent(l),Ri=null}else return i=Gn(s),i!==null&&g_(i),e.blockedOn=s,!1;i.shift()}return!0}function E_(e,i,s){Lc(e)&&s.delete(i)}function uS(){Zd=!1,Ir!==null&&Lc(Ir)&&(Ir=null),Or!==null&&Lc(Or)&&(Or=null),xr!==null&&Lc(xr)&&(xr=null),bl.forEach(E_),Al.forEach(E_)}function Vc(e,i){e.blockedOn===i&&(e.blockedOn=null,Zd||(Zd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uS)))}var Uc=null;function T_(e){Uc!==e&&(Uc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Uc===e&&(Uc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Wd(l||s)===null)continue;break}var d=Gn(s);d!==null&&(e.splice(i,3),i-=3,Wh(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function wl(e){function i(C){return Vc(C,e)}Ir!==null&&Vc(Ir,e),Or!==null&&Vc(Or,e),xr!==null&&Vc(xr,e),bl.forEach(i),Al.forEach(i);for(var s=0;s<Dr.length;s++){var l=Dr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Dr.length&&(s=Dr[0],s.blockedOn===null);)__(s),s.blockedOn===null&&Dr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],_=f[pe]||null;if(typeof d=="function")_||T_(s);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[pe]||null)T=_.formAction;else if(Wd(f)!==null)continue}else T=_.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),T_(s)}}}function Jd(e){this._internalRoot=e}jc.prototype.render=Jd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=gn();m_(s,l,e,i,null,null)},jc.prototype.unmount=Jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;m_(e.current,2,null,e,null,null),Ec(),i[En]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var i=sr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Dr.length&&i!==0&&i<Dr[s].priority;s++);Dr.splice(s,0,e),s===0&&__(e)}};var b_=t.version;if(b_!=="19.1.0")throw Error(a(527,b_,"19.1.0"));ot.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var cS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{oe=zc.inject(cS),Ft=zc}catch{}}return Cl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=Uy,d=jy,_=zy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=h_(e,1,!1,null,null,s,l,f,d,_,T,null),e[En]=i.current,kd(e),new Jd(i)},Cl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=Uy,_=jy,T=zy,C=null,z=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(C=s.unstable_transitionCallbacks),s.formState!==void 0&&(z=s.formState)),i=h_(e,1,!0,i,s??null,l,f,d,_,T,C,z),i.context=d_(null),s=i.current,l=gn(),l=ar(l),f=mr(l),f.callback=null,pr(s,f,l),s=l,i.current.lanes=s,Ti(i,s),ai(i),e[En]=i.current,kd(e),new jc(i)},Cl.version="19.1.0",Cl}var N_;function ES(){if(N_)return nm.exports;N_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),nm.exports=_S(),nm.exports}var TS=ES();const bS="/assets/logo_lost-Cj8K_fwP.png";var Il={},M_;function AS(){if(M_)return Il;M_=1,Object.defineProperty(Il,"__esModule",{value:!0}),Il.parse=h,Il.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,B){const k=new u,W=R.length;if(W<2)return k;const q=(B==null?void 0:B.decode)||E;let Y=0;do{const nt=R.indexOf("=",Y);if(nt===-1)break;const Z=R.indexOf(";",Y),ct=Z===-1?W:Z;if(nt>ct){Y=R.lastIndexOf(";",nt-1)+1;continue}const ut=m(R,Y,nt),At=g(R,nt,ut),D=R.slice(ut,At);if(k[D]===void 0){let w=m(R,nt+1,ct),A=g(R,ct,w);const O=q(R.slice(w,A));k[D]=O}Y=ct+1}while(Y<W);return k}function m(R,B,k){do{const W=R.charCodeAt(B);if(W!==32&&W!==9)return B}while(++B<k);return k}function g(R,B,k){for(;B>k;){const W=R.charCodeAt(--B);if(W!==32&&W!==9)return B+1}return k}function y(R,B,k){const W=(k==null?void 0:k.encode)||encodeURIComponent;if(!r.test(R))throw new TypeError(`argument name is invalid: ${R}`);const q=W(B);if(!t.test(q))throw new TypeError(`argument val is invalid: ${B}`);let Y=R+"="+q;if(!k)return Y;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);Y+="; Max-Age="+k.maxAge}if(k.domain){if(!n.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);Y+="; Domain="+k.domain}if(k.path){if(!a.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);Y+="; Path="+k.path}if(k.expires){if(!S(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);Y+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(Y+="; HttpOnly"),k.secure&&(Y+="; Secure"),k.partitioned&&(Y+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return Y}function E(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function S(R){return o.call(R)==="[object Date]"}return Il}AS();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var P_="popstate";function SS(r={}){function t(a,o){let{pathname:u,search:h,hash:m}=a.location;return Cm("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:Fl(o)}return RS(t,n,null,r)}function ae(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function pi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wS(){return Math.random().toString(36).substring(2,10)}function k_(r,t){return{usr:r.state,key:r.key,idx:t}}function Cm(r,t,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?co(t):t,state:n,key:t&&t.key||a||wS()}}function Fl({pathname:r="/",search:t="",hash:n=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function co(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(t.search=r.substring(a),r=r.substring(0,a)),r&&(t.pathname=r)}return t}function RS(r,t,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,h=o.history,m="POP",g=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function S(){m="POP";let q=E(),Y=q==null?null:q-y;y=q,g&&g({action:m,location:W.location,delta:Y})}function R(q,Y){m="PUSH";let nt=Cm(W.location,q,Y);y=E()+1;let Z=k_(nt,y),ct=W.createHref(nt);try{h.pushState(Z,"",ct)}catch(ut){if(ut instanceof DOMException&&ut.name==="DataCloneError")throw ut;o.location.assign(ct)}u&&g&&g({action:m,location:W.location,delta:1})}function B(q,Y){m="REPLACE";let nt=Cm(W.location,q,Y);y=E();let Z=k_(nt,y),ct=W.createHref(nt);h.replaceState(Z,"",ct),u&&g&&g({action:m,location:W.location,delta:0})}function k(q){let Y=o.location.origin!=="null"?o.location.origin:o.location.href,nt=typeof q=="string"?q:Fl(q);return nt=nt.replace(/ $/,"%20"),ae(Y,`No window.location.(origin|href) available to create URL for href: ${nt}`),new URL(nt,Y)}let W={get action(){return m},get location(){return r(o,h)},listen(q){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(P_,S),g=q,()=>{o.removeEventListener(P_,S),g=null}},createHref(q){return t(o,q)},createURL:k,encodeLocation(q){let Y=k(q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:R,replace:B,go(q){return h.go(q)}};return W}function UE(r,t,n="/"){return CS(r,t,n,!1)}function CS(r,t,n,a){let o=typeof t=="string"?co(t):t,u=$i(o.pathname||"/",n);if(u==null)return null;let h=jE(r);IS(h);let m=null;for(let g=0;m==null&&g<h.length;++g){let y=jS(u);m=VS(h[g],y,a)}return m}function jE(r,t=[],n=[],a=""){let o=(u,h,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};g.relativePath.startsWith("/")&&(ae(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length));let y=Qi([a,g.relativePath]),E=n.concat(g);u.children&&u.children.length>0&&(ae(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),jE(u.children,t,E,y)),!(u.path==null&&!u.index)&&t.push({path:y,score:kS(y,u.index),routesMeta:E})};return r.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,h);else for(let g of zE(u.path))o(u,h,g)}),t}function zE(r){let t=r.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let h=zE(a.join("/")),m=[];return m.push(...h.map(g=>g===""?u:[u,g].join("/"))),o&&m.push(...h),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function IS(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:LS(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var OS=/^:[\w-]+$/,xS=3,DS=2,NS=1,MS=10,PS=-2,L_=r=>r==="*";function kS(r,t){let n=r.split("/"),a=n.length;return n.some(L_)&&(a+=PS),t&&(a+=DS),n.filter(o=>!L_(o)).reduce((o,u)=>o+(OS.test(u)?xS:u===""?NS:MS),a)}function LS(r,t){return r.length===t.length&&r.slice(0,-1).every((a,o)=>a===t[o])?r[r.length-1]-t[t.length-1]:0}function VS(r,t,n=!1){let{routesMeta:a}=r,o={},u="/",h=[];for(let m=0;m<a.length;++m){let g=a[m],y=m===a.length-1,E=u==="/"?t:t.slice(u.length)||"/",S=uf({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},E),R=g.route;if(!S&&y&&n&&!a[a.length-1].route.index&&(S=uf({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Qi([u,S.pathname]),pathnameBase:FS(Qi([u,S.pathnameBase])),route:R}),S.pathnameBase!=="/"&&(u=Qi([u,S.pathnameBase]))}return h}function uf(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=US(r.path,r.caseSensitive,r.end),o=t.match(n);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((y,{paramName:E,isOptional:S},R)=>{if(E==="*"){let k=m[R]||"";h=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const B=m[R];return S&&!B?y[E]=void 0:y[E]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:r}}function US(r,t=!1,n=!0){pi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,g)=>(a.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function jS(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function $i(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}function zS(r,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?co(r):r;return{pathname:n?n.startsWith("/")?n:BS(n,t):t,search:qS(a),hash:GS(o)}}function BS(r,t){let n=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function sm(r,t,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function HS(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function BE(r){let t=HS(r);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function HE(r,t,n,a=!1){let o;typeof r=="string"?o=co(r):(o={...r},ae(!o.pathname||!o.pathname.includes("?"),sm("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),sm("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),sm("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=n;else{let S=t.length-1;if(!a&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),S-=1;o.pathname=R.join("/")}m=S>=0?t[S]:"/"}let g=zS(o,m),y=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}var Qi=r=>r.join("/").replace(/\/\/+/g,"/"),FS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),qS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,GS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function YS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var FE=["POST","PUT","PATCH","DELETE"];new Set(FE);var KS=["GET",...FE];new Set(KS);var fo=K.createContext(null);fo.displayName="DataRouter";var Pf=K.createContext(null);Pf.displayName="DataRouterState";var qE=K.createContext({isTransitioning:!1});qE.displayName="ViewTransition";var QS=K.createContext(new Map);QS.displayName="Fetchers";var XS=K.createContext(null);XS.displayName="Await";var vi=K.createContext(null);vi.displayName="Navigation";var eu=K.createContext(null);eu.displayName="Location";var er=K.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var gp=K.createContext(null);gp.displayName="RouteError";function $S(r,{relative:t}={}){ae(nu(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=K.useContext(vi),{hash:o,pathname:u,search:h}=iu(r,{relative:t}),m=u;return n!=="/"&&(m=u==="/"?n:Qi([n,u])),a.createHref({pathname:m,search:h,hash:o})}function nu(){return K.useContext(eu)!=null}function $a(){return ae(nu(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(eu).location}var GE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function YE(r){K.useContext(vi).static||K.useLayoutEffect(r)}function yp(){let{isDataRoute:r}=K.useContext(er);return r?uw():WS()}function WS(){ae(nu(),"useNavigate() may be used only in the context of a <Router> component.");let r=K.useContext(fo),{basename:t,navigator:n}=K.useContext(vi),{matches:a}=K.useContext(er),{pathname:o}=$a(),u=JSON.stringify(BE(a)),h=K.useRef(!1);return YE(()=>{h.current=!0}),K.useCallback((g,y={})=>{if(pi(h.current,GE),!h.current)return;if(typeof g=="number"){n.go(g);return}let E=HE(g,JSON.parse(u),o,y.relative==="path");r==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:Qi([t,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[t,n,u,o,r])}K.createContext(null);function iu(r,{relative:t}={}){let{matches:n}=K.useContext(er),{pathname:a}=$a(),o=JSON.stringify(BE(n));return K.useMemo(()=>HE(r,JSON.parse(o),a,t==="path"),[r,o,a,t])}function ZS(r,t){return KE(r,t)}function KE(r,t,n,a){var nt;ae(nu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=K.useContext(vi),{matches:h}=K.useContext(er),m=h[h.length-1],g=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",S=m&&m.route;{let Z=S&&S.path||"";QE(y,!S||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let R=$a(),B;if(t){let Z=typeof t=="string"?co(t):t;ae(E==="/"||((nt=Z.pathname)==null?void 0:nt.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),B=Z}else B=R;let k=B.pathname||"/",W=k;if(E!=="/"){let Z=E.replace(/^\//,"").split("/");W="/"+k.replace(/^\//,"").split("/").slice(Z.length).join("/")}let q=!u&&n&&n.matches&&n.matches.length>0?n.matches:UE(r,{pathname:W});pi(S||q!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),pi(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=iw(q&&q.map(Z=>Object.assign({},Z,{params:Object.assign({},g,Z.params),pathname:Qi([E,o.encodeLocation?o.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?E:Qi([E,o.encodeLocation?o.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),h,n,a);return t&&Y?K.createElement(eu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},Y):Y}function JS(){let r=lw(),t=YS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:u},"ErrorBoundary")," or"," ",K.createElement("code",{style:u},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),n?K.createElement("pre",{style:o},n):null,h)}var tw=K.createElement(JS,null),ew=class extends K.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?K.createElement(er.Provider,{value:this.props.routeContext},K.createElement(gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nw({routeContext:r,match:t,children:n}){let a=K.useContext(fo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(er.Provider,{value:r},n)}function iw(r,t=[],n=null,a=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n==null?void 0:n.errors;if(u!=null){let g=o.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);ae(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,m=-1;if(n)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:E,errors:S}=n,R=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||R){h=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((g,y,E)=>{let S,R=!1,B=null,k=null;n&&(S=u&&y.route.id?u[y.route.id]:void 0,B=y.route.errorElement||tw,h&&(m<0&&E===0?(QE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,k=null):m===E&&(R=!0,k=y.route.hydrateFallbackElement||null)));let W=t.concat(o.slice(0,E+1)),q=()=>{let Y;return S?Y=B:R?Y=k:y.route.Component?Y=K.createElement(y.route.Component,null):y.route.element?Y=y.route.element:Y=g,K.createElement(nw,{match:y,routeContext:{outlet:g,matches:W,isDataRoute:n!=null},children:Y})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?K.createElement(ew,{location:n.location,revalidation:n.revalidation,component:B,error:S,children:q(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):q()},null)}function vp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rw(r){let t=K.useContext(fo);return ae(t,vp(r)),t}function aw(r){let t=K.useContext(Pf);return ae(t,vp(r)),t}function sw(r){let t=K.useContext(er);return ae(t,vp(r)),t}function _p(r){let t=sw(r),n=t.matches[t.matches.length-1];return ae(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function ow(){return _p("useRouteId")}function lw(){var a;let r=K.useContext(gp),t=aw("useRouteError"),n=_p("useRouteError");return r!==void 0?r:(a=t.errors)==null?void 0:a[n]}function uw(){let{router:r}=rw("useNavigate"),t=_p("useNavigate"),n=K.useRef(!1);return YE(()=>{n.current=!0}),K.useCallback(async(o,u={})=>{pi(n.current,GE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:t,...u}))},[r,t])}var V_={};function QE(r,t,n){!t&&!V_[r]&&(V_[r]=!0,pi(!1,n))}K.memo(cw);function cw({routes:r,future:t,state:n}){return KE(r,void 0,n,t)}function Ys(r){ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fw({basename:r="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:u=!1}){ae(!nu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=K.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof n=="string"&&(n=co(n));let{pathname:g="/",search:y="",hash:E="",state:S=null,key:R="default"}=n,B=K.useMemo(()=>{let k=$i(g,h);return k==null?null:{location:{pathname:k,search:y,hash:E,state:S,key:R},navigationType:a}},[h,g,y,E,S,R,a]);return pi(B!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:K.createElement(vi.Provider,{value:m},K.createElement(eu.Provider,{children:t,value:B}))}function hw({children:r,location:t}){return ZS(Im(r),t)}function Im(r,t=[]){let n=[];return K.Children.forEach(r,(a,o)=>{if(!K.isValidElement(a))return;let u=[...t,o];if(a.type===K.Fragment){n.push.apply(n,Im(a.props.children,u));return}ae(a.type===Ys,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ae(!a.props.index||!a.props.children,"An index route cannot have child routes.");let h={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(h.children=Im(a.props.children,u)),n.push(h)}),n}var $c="get",Wc="application/x-www-form-urlencoded";function kf(r){return r!=null&&typeof r.tagName=="string"}function dw(r){return kf(r)&&r.tagName.toLowerCase()==="button"}function mw(r){return kf(r)&&r.tagName.toLowerCase()==="form"}function pw(r){return kf(r)&&r.tagName.toLowerCase()==="input"}function gw(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function yw(r,t){return r.button===0&&(!t||t==="_self")&&!gw(r)}var Bc=null;function vw(){if(Bc===null)try{new FormData(document.createElement("form"),0),Bc=!1}catch{Bc=!0}return Bc}var _w=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function om(r){return r!=null&&!_w.has(r)?(pi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wc}"`),null):r}function Ew(r,t){let n,a,o,u,h;if(mw(r)){let m=r.getAttribute("action");a=m?$i(m,t):null,n=r.getAttribute("method")||$c,o=om(r.getAttribute("enctype"))||Wc,u=new FormData(r)}else if(dw(r)||pw(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(a=g?$i(g,t):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||$c,o=om(r.getAttribute("formenctype"))||om(m.getAttribute("enctype"))||Wc,u=new FormData(m,r),!vw()){let{name:y,type:E,value:S}=r;if(E==="image"){let R=y?`${y}.`:"";u.append(`${R}x`,"0"),u.append(`${R}y`,"0")}else y&&u.append(y,S)}}else{if(kf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=$c,a=null,o=Wc,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:h}}function Ep(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function Tw(r,t){if(r.id in t)return t[r.id];try{let n=await import(r.module);return t[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bw(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Aw(r,t,n){let a=await Promise.all(r.map(async o=>{let u=t.routes[o.route.id];if(u){let h=await Tw(u,n);return h.links?h.links():[]}return[]}));return Cw(a.flat(1).filter(bw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function U_(r,t,n,a,o,u){let h=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,m=(g,y)=>{var E;return n[y].pathname!==g.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==g.params["*"]};return u==="assets"?t.filter((g,y)=>h(g,y)||m(g,y)):u==="data"?t.filter((g,y)=>{var S;let E=a.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(h(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let R=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=n[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Sw(r,t,{includeHydrateFallback:n}={}){return ww(r.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function ww(r){return[...new Set(r)]}function Rw(r){let t={},n=Object.keys(r).sort();for(let a of n)t[a]=r[a];return t}function Cw(r,t){let n=new Set;return new Set(t),r.reduce((a,o)=>{let u=JSON.stringify(Rw(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function Iw(r,t){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname="_root.data":t&&$i(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function XE(){let r=K.useContext(fo);return Ep(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ow(){let r=K.useContext(Pf);return Ep(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Tp=K.createContext(void 0);Tp.displayName="FrameworkContext";function $E(){let r=K.useContext(Tp);return Ep(r,"You must render this element inside a <HydratedRouter> element"),r}function xw(r,t){let n=K.useContext(Tp),[a,o]=K.useState(!1),[u,h]=K.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:E,onTouchStart:S}=t,R=K.useRef(null);K.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let W=Y=>{Y.forEach(nt=>{h(nt.isIntersecting)})},q=new IntersectionObserver(W,{threshold:.5});return R.current&&q.observe(R.current),()=>{q.disconnect()}}},[r]),K.useEffect(()=>{if(a){let W=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(W)}}},[a]);let B=()=>{o(!0)},k=()=>{o(!1),h(!1)};return n?r!=="intent"?[u,R,{}]:[u,R,{onFocus:Ol(m,B),onBlur:Ol(g,k),onMouseEnter:Ol(y,B),onMouseLeave:Ol(E,k),onTouchStart:Ol(S,B)}]:[!1,R,{}]}function Ol(r,t){return n=>{r&&r(n),n.defaultPrevented||t(n)}}function Dw({page:r,...t}){let{router:n}=XE(),a=K.useMemo(()=>UE(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?K.createElement(Mw,{page:r,matches:a,...t}):null}function Nw(r){let{manifest:t,routeModules:n}=$E(),[a,o]=K.useState([]);return K.useEffect(()=>{let u=!1;return Aw(r,t,n).then(h=>{u||o(h)}),()=>{u=!0}},[r,t,n]),a}function Mw({page:r,matches:t,...n}){let a=$a(),{manifest:o,routeModules:u}=$E(),{basename:h}=XE(),{loaderData:m,matches:g}=Ow(),y=K.useMemo(()=>U_(r,t,g,o,a,"data"),[r,t,g,o,a]),E=K.useMemo(()=>U_(r,t,g,o,a,"assets"),[r,t,g,o,a]),S=K.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let k=new Set,W=!1;if(t.forEach(Y=>{var Z;let nt=o.routes[Y.route.id];!nt||!nt.hasLoader||(!y.some(ct=>ct.route.id===Y.route.id)&&Y.route.id in m&&((Z=u[Y.route.id])!=null&&Z.shouldRevalidate)||nt.hasClientLoader?W=!0:k.add(Y.route.id))}),k.size===0)return[];let q=Iw(r,h);return W&&k.size>0&&q.searchParams.set("_routes",t.filter(Y=>k.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[q.pathname+q.search]},[h,m,a,o,y,t,r,u]),R=K.useMemo(()=>Sw(E,o),[E,o]),B=Nw(E);return K.createElement(K.Fragment,null,S.map(k=>K.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...n})),R.map(k=>K.createElement("link",{key:k,rel:"modulepreload",href:k,...n})),B.map(({key:k,link:W})=>K.createElement("link",{key:k,...W})))}function Pw(...r){return t=>{r.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var WE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{WE&&(window.__reactRouterVersion="7.4.1")}catch{}function kw({basename:r,children:t,window:n}){let a=K.useRef();a.current==null&&(a.current=SS({window:n,v5Compat:!0}));let o=a.current,[u,h]=K.useState({action:o.action,location:o.location}),m=K.useCallback(g=>{K.startTransition(()=>h(g))},[h]);return K.useLayoutEffect(()=>o.listen(m),[o,m]),K.createElement(fw,{basename:r,children:t,location:u.location,navigationType:u.action,navigator:o})}var ZE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ci=K.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:h,state:m,target:g,to:y,preventScrollReset:E,viewTransition:S,...R},B){let{basename:k}=K.useContext(vi),W=typeof y=="string"&&ZE.test(y),q,Y=!1;if(typeof y=="string"&&W&&(q=y,WE))try{let A=new URL(window.location.href),O=y.startsWith("//")?new URL(A.protocol+y):new URL(y),P=$i(O.pathname,k);O.origin===A.origin&&P!=null?y=P+O.search+O.hash:Y=!0}catch{pi(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let nt=$S(y,{relative:o}),[Z,ct,ut]=xw(a,R),At=Uw(y,{replace:h,state:m,target:g,preventScrollReset:E,relative:o,viewTransition:S});function D(A){t&&t(A),A.defaultPrevented||At(A)}let w=K.createElement("a",{...R,...ut,href:q||nt,onClick:Y||u?t:D,ref:Pw(B,ct),target:g,"data-discover":!W&&n==="render"?"true":void 0});return Z&&!W?K.createElement(K.Fragment,null,w,K.createElement(Dw,{page:nt})):w});ci.displayName="Link";var ql=K.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:h,viewTransition:m,children:g,...y},E){let S=iu(h,{relative:y.relative}),R=$a(),B=K.useContext(Pf),{navigator:k,basename:W}=K.useContext(vi),q=B!=null&&Fw(S)&&m===!0,Y=k.encodeLocation?k.encodeLocation(S).pathname:S.pathname,nt=R.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;n||(nt=nt.toLowerCase(),Z=Z?Z.toLowerCase():null,Y=Y.toLowerCase()),Z&&W&&(Z=$i(Z,W)||Z);const ct=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ut=nt===Y||!o&&nt.startsWith(Y)&&nt.charAt(ct)==="/",At=Z!=null&&(Z===Y||!o&&Z.startsWith(Y)&&Z.charAt(Y.length)==="/"),D={isActive:ut,isPending:At,isTransitioning:q},w=ut?t:void 0,A;typeof a=="function"?A=a(D):A=[a,ut?"active":null,At?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(D):u;return K.createElement(ci,{...y,"aria-current":w,className:A,ref:E,style:O,to:h,viewTransition:m},typeof g=="function"?g(D):g)});ql.displayName="NavLink";var Lw=K.forwardRef(({discover:r="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:u,method:h=$c,action:m,onSubmit:g,relative:y,preventScrollReset:E,viewTransition:S,...R},B)=>{let k=Bw(),W=Hw(m,{relative:y}),q=h.toLowerCase()==="get"?"get":"post",Y=typeof m=="string"&&ZE.test(m),nt=Z=>{if(g&&g(Z),Z.defaultPrevented)return;Z.preventDefault();let ct=Z.nativeEvent.submitter,ut=(ct==null?void 0:ct.getAttribute("formmethod"))||h;k(ct||Z.currentTarget,{fetcherKey:t,method:ut,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:S})};return K.createElement("form",{ref:B,method:q,action:W,onSubmit:a?g:nt,...R,"data-discover":!Y&&r==="render"?"true":void 0})});Lw.displayName="Form";function Vw(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JE(r){let t=K.useContext(fo);return ae(t,Vw(r)),t}function Uw(r,{target:t,replace:n,state:a,preventScrollReset:o,relative:u,viewTransition:h}={}){let m=yp(),g=$a(),y=iu(r,{relative:u});return K.useCallback(E=>{if(yw(E,t)){E.preventDefault();let S=n!==void 0?n:Fl(g)===Fl(y);m(r,{replace:S,state:a,preventScrollReset:o,relative:u,viewTransition:h})}},[g,m,y,n,a,t,r,o,u,h])}var jw=0,zw=()=>`__${String(++jw)}__`;function Bw(){let{router:r}=JE("useSubmit"),{basename:t}=K.useContext(vi),n=ow();return K.useCallback(async(a,o={})=>{let{action:u,method:h,encType:m,formData:g,body:y}=Ew(a,t);if(o.navigate===!1){let E=o.fetcherKey||zw();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,t,n])}function Hw(r,{relative:t}={}){let{basename:n}=K.useContext(vi),a=K.useContext(er);ae(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...iu(r||".",{relative:t})},h=$a();if(r==null){u.search=h.search;let m=new URLSearchParams(u.search),g=m.getAll("index");if(g.some(E=>E==="")){m.delete("index"),g.filter(S=>S).forEach(S=>m.append("index",S));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Qi([n,u.pathname])),Fl(u)}function Fw(r,t={}){let n=K.useContext(qE);ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=JE("useViewTransitionState"),o=iu(r,{relative:t.relative});if(!n.isTransitioning)return!1;let u=$i(n.currentLocation.pathname,a)||n.currentLocation.pathname,h=$i(n.nextLocation.pathname,a)||n.nextLocation.pathname;return uf(o.pathname,h)!=null||uf(o.pathname,u)!=null}new TextEncoder;const qw=()=>{};var j_={};/**
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
 */const tT=function(r){const t=[];let n=0;for(let a=0;a<r.length;a++){let o=r.charCodeAt(a);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++a)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Gw=function(r){const t=[];let n=0,a=0;for(;n<r.length;){const o=r[n++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],h=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(g>>10)),t[a++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],h=r[n++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return t.join("")},eT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let R=(m&15)<<2|y>>6,B=y&63;g||(B=64,h||(R=64)),a.push(n[E],n[S],n[R],n[B])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(tT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Gw(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new Yw;const R=u<<2|m>>4;if(a.push(R),y!==64){const B=m<<4&240|y>>2;if(a.push(B),S!==64){const k=y<<6&192|S;a.push(k)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kw=function(r){const t=tT(r);return eT.encodeByteArray(t,!0)},cf=function(r){return Kw(r).replace(/\./g,"")},nT=function(r){try{return eT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Qw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xw=()=>Qw().__FIREBASE_DEFAULTS__,$w=()=>{if(typeof process>"u"||typeof j_>"u")return;const r=j_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ww=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&nT(r[1]);return t&&JSON.parse(t)},Lf=()=>{try{return qw()||Xw()||$w()||Ww()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},iT=r=>{var t,n;return(n=(t=Lf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},Zw=r=>{const t=iT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),a]:[t.substring(0,n),a]},rT=()=>{var r;return(r=Lf())===null||r===void 0?void 0:r.config},aT=r=>{var t;return(t=Lf())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */class Jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}/**
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
 */function tR(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[cf(JSON.stringify(n)),cf(JSON.stringify(h)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function nR(){var r;const t=(r=Lf())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rR(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function aR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sR(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function oR(){return!nR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lR(){try{return typeof indexedDB=="object"}catch{return!1}}function uR(){return new Promise((r,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(a),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
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
 */const cR="FirebaseError";class nr extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=cR,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ru.prototype.create)}}class ru{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],h=u?fR(u,a):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new nr(o,m,a)}}function fR(r,t){return r.replace(hR,(n,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const hR=/\{\$([^}]+)}/g;function dR(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function za(r,t){if(r===t)return!0;const n=Object.keys(r),a=Object.keys(t);for(const o of n){if(!a.includes(o))return!1;const u=r[o],h=t[o];if(z_(u)&&z_(h)){if(!za(u,h))return!1}else if(u!==h)return!1}for(const o of a)if(!n.includes(o))return!1;return!0}function z_(r){return r!==null&&typeof r=="object"}/**
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
 */function au(r){const t=[];for(const[n,a]of Object.entries(r))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function Dl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,u]=a.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Nl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function mR(r,t){const n=new pR(r,t);return n.subscribe.bind(n)}class pR{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,a){let o;if(t===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");gR(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:a},o.next===void 0&&(o.next=lm),o.error===void 0&&(o.error=lm),o.complete===void 0&&(o.complete=lm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gR(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function lm(){}/**
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
 */function on(r){return r&&r._delegate?r._delegate:r}class Ba{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ka="[DEFAULT]";/**
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
 */class yR{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new Jw;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_R(t))try{this.getOrInitializeService({instanceIdentifier:ka})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=ka){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ka){return this.instances.has(t)}getOptions(t=ka){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&h.resolve(o)}return o}onInit(t,n){var a;const o=this.normalizeInstanceIdentifier(n),u=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;u.add(t),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&t(h,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const o of a)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:vR(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=ka){return this.component?this.component.multipleInstances?t:ka:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vR(r){return r===ka?void 0:r}function _R(r){return r.instantiationMode==="EAGER"}/**
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
 */class ER{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yR(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const TR={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},bR=Mt.INFO,AR={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},SR=(r,t,...n)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),o=AR[t];if(o)console[o](`[${a}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bp{constructor(t){this.name=t,this._logLevel=bR,this._logHandler=SR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?TR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const wR=(r,t)=>t.some(n=>r instanceof n);let B_,H_;function RR(){return B_||(B_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CR(){return H_||(H_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sT=new WeakMap,Om=new WeakMap,oT=new WeakMap,um=new WeakMap,Ap=new WeakMap;function IR(r){const t=new Promise((n,a)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{n(jr(r.result)),o()},h=()=>{a(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return t.then(n=>{n instanceof IDBCursor&&sT.set(n,r)}).catch(()=>{}),Ap.set(t,r),t}function OR(r){if(Om.has(r))return;const t=new Promise((n,a)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{n(),o()},h=()=>{a(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Om.set(r,t)}let xm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Om.get(r);if(t==="objectStoreNames")return r.objectStoreNames||oT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function xR(r){xm=r(xm)}function DR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=r.call(cm(this),t,...n);return oT.set(a,t.sort?t.sort():[t]),jr(a)}:CR().includes(r)?function(...t){return r.apply(cm(this),t),jr(sT.get(this))}:function(...t){return jr(r.apply(cm(this),t))}}function NR(r){return typeof r=="function"?DR(r):(r instanceof IDBTransaction&&OR(r),wR(r,RR())?new Proxy(r,xm):r)}function jr(r){if(r instanceof IDBRequest)return IR(r);if(um.has(r))return um.get(r);const t=NR(r);return t!==r&&(um.set(r,t),Ap.set(t,r)),t}const cm=r=>Ap.get(r);function MR(r,t,{blocked:n,upgrade:a,blocking:o,terminated:u}={}){const h=indexedDB.open(r,t),m=jr(h);return a&&h.addEventListener("upgradeneeded",g=>{a(jr(h.result),g.oldVersion,g.newVersion,jr(h.transaction),g)}),n&&h.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const PR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],fm=new Map;function F_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(fm.get(t))return fm.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,o=kR.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(o||PR.includes(n)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return a&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return fm.set(t,u),u}xR(r=>({...r,get:(t,n,a)=>F_(t,n)||r.get(t,n,a),has:(t,n)=>!!F_(t,n)||r.has(t,n)}));/**
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
 */class LR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VR(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function VR(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Dm="@firebase/app",q_="0.11.3";/**
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
 */const Wi=new bp("@firebase/app"),UR="@firebase/app-compat",jR="@firebase/analytics-compat",zR="@firebase/analytics",BR="@firebase/app-check-compat",HR="@firebase/app-check",FR="@firebase/auth",qR="@firebase/auth-compat",GR="@firebase/database",YR="@firebase/data-connect",KR="@firebase/database-compat",QR="@firebase/functions",XR="@firebase/functions-compat",$R="@firebase/installations",WR="@firebase/installations-compat",ZR="@firebase/messaging",JR="@firebase/messaging-compat",t2="@firebase/performance",e2="@firebase/performance-compat",n2="@firebase/remote-config",i2="@firebase/remote-config-compat",r2="@firebase/storage",a2="@firebase/storage-compat",s2="@firebase/firestore",o2="@firebase/vertexai",l2="@firebase/firestore-compat",u2="firebase",c2="11.5.0";/**
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
 */const Nm="[DEFAULT]",f2={[Dm]:"fire-core",[UR]:"fire-core-compat",[zR]:"fire-analytics",[jR]:"fire-analytics-compat",[HR]:"fire-app-check",[BR]:"fire-app-check-compat",[FR]:"fire-auth",[qR]:"fire-auth-compat",[GR]:"fire-rtdb",[YR]:"fire-data-connect",[KR]:"fire-rtdb-compat",[QR]:"fire-fn",[XR]:"fire-fn-compat",[$R]:"fire-iid",[WR]:"fire-iid-compat",[ZR]:"fire-fcm",[JR]:"fire-fcm-compat",[t2]:"fire-perf",[e2]:"fire-perf-compat",[n2]:"fire-rc",[i2]:"fire-rc-compat",[r2]:"fire-gcs",[a2]:"fire-gcs-compat",[s2]:"fire-fst",[l2]:"fire-fst-compat",[o2]:"fire-vertex","fire-js":"fire-js",[u2]:"fire-js-all"};/**
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
 */const ff=new Map,h2=new Map,Mm=new Map;function G_(r,t){try{r.container.addComponent(t)}catch(n){Wi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function io(r){const t=r.name;if(Mm.has(t))return Wi.debug(`There were multiple attempts to register component ${t}.`),!1;Mm.set(t,r);for(const n of ff.values())G_(n,r);for(const n of h2.values())G_(n,r);return!0}function Sp(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Nn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const d2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zr=new ru("app","Firebase",d2);/**
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
 */class m2{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ba("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
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
 */const ho=c2;function lT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Nm,automaticDataCollectionEnabled:!1},t),o=a.name;if(typeof o!="string"||!o)throw zr.create("bad-app-name",{appName:String(o)});if(n||(n=rT()),!n)throw zr.create("no-options");const u=ff.get(o);if(u){if(za(n,u.options)&&za(a,u.config))return u;throw zr.create("duplicate-app",{appName:o})}const h=new ER(o);for(const g of Mm.values())h.addComponent(g);const m=new m2(n,a,h);return ff.set(o,m),m}function uT(r=Nm){const t=ff.get(r);if(!t&&r===Nm&&rT())return lT();if(!t)throw zr.create("no-app",{appName:r});return t}function Br(r,t,n){var a;let o=(a=f2[r])!==null&&a!==void 0?a:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),h=t.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wi.warn(m.join(" "));return}io(new Ba(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const p2="firebase-heartbeat-database",g2=1,Gl="firebase-heartbeat-store";let hm=null;function cT(){return hm||(hm=MR(p2,g2,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Gl)}catch(n){console.warn(n)}}}}).catch(r=>{throw zr.create("idb-open",{originalErrorMessage:r.message})})),hm}async function y2(r){try{const n=(await cT()).transaction(Gl),a=await n.objectStore(Gl).get(fT(r));return await n.done,a}catch(t){if(t instanceof nr)Wi.warn(t.message);else{const n=zr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(n.message)}}}async function Y_(r,t){try{const a=(await cT()).transaction(Gl,"readwrite");await a.objectStore(Gl).put(t,fT(r)),await a.done}catch(n){if(n instanceof nr)Wi.warn(n.message);else{const a=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wi.warn(a.message)}}}function fT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const v2=1024,_2=30;class E2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b2(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=K_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>_2){const h=A2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Wi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=K_(),{heartbeatsToSend:a,unsentEntries:o}=T2(this._heartbeatsCache.heartbeats),u=cf(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Wi.warn(n),""}}}function K_(){return new Date().toISOString().substring(0,10)}function T2(r,t=v2){const n=[];let a=r.slice();for(const o of r){const u=n.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Q_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Q_(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class b2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lR()?uR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Y_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Y_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Q_(r){return cf(JSON.stringify({version:2,heartbeats:r})).length}function A2(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let a=1;a<r.length;a++)r[a].date<n&&(n=r[a].date,t=a);return t}/**
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
 */function S2(r){io(new Ba("platform-logger",t=>new LR(t),"PRIVATE")),io(new Ba("heartbeat",t=>new E2(t),"PRIVATE")),Br(Dm,q_,r),Br(Dm,q_,"esm2017"),Br("fire-js","")}S2("");var w2="firebase",R2="11.5.0";/**
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
 */Br(w2,R2,"app");function wp(r,t){var n={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(r);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(r,a[o])&&(n[a[o]]=r[a[o]]);return n}function hT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C2=hT,dT=new ru("auth","Firebase",hT());/**
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
 */const hf=new bp("@firebase/auth");function I2(r,...t){hf.logLevel<=Mt.WARN&&hf.warn(`Auth (${ho}): ${r}`,...t)}function Zc(r,...t){hf.logLevel<=Mt.ERROR&&hf.error(`Auth (${ho}): ${r}`,...t)}/**
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
 */function Hn(r,...t){throw Rp(r,...t)}function fi(r,...t){return Rp(r,...t)}function mT(r,t,n){const a=Object.assign(Object.assign({},C2()),{[t]:n});return new ru("auth","Firebase",a).create(t,{appName:r.name})}function Xi(r){return mT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rp(r,...t){if(typeof r!="string"){const n=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(n,...a)}return dT.create(r,...t)}function _t(r,t,...n){if(!r)throw Rp(t,...n)}function Gi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Zc(t),new Error(t)}function Zi(r,t){r||Gi(t)}/**
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
 */function Pm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function O2(){return X_()==="http:"||X_()==="https:"}function X_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function x2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O2()||rR()||"connection"in navigator)?navigator.onLine:!0}function D2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class su{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zi(n>t,"Short delay should be less than long delay!"),this.isMobile=eR()||aR()}get(){return x2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cp(r,t){Zi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class pT{static initialize(t,n,a){this.fetchImpl=t,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const N2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const M2=new su(3e4,6e4);function $r(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Wr(r,t,n,a,o={}){return gT(r,o,async()=>{let u={},h={};a&&(t==="GET"?h=a:u={body:JSON.stringify(a)});const m=au(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:g},u);return iR()||(y.referrerPolicy="no-referrer"),pT.fetch()(yT(r,r.config.apiHost,n,m),y)})}async function gT(r,t,n){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},N2),t);try{const o=new k2(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Hc(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hc(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Hc(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Hc(r,"user-disabled",h);const E=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw mT(r,E,y);Hn(r,E)}}catch(o){if(o instanceof nr)throw o;Hn(r,"network-request-failed",{message:String(o)})}}async function ou(r,t,n,a,o={}){const u=await Wr(r,t,n,a,o);return"mfaPendingCredential"in u&&Hn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function yT(r,t,n,a){const o=`${t}${n}?${a}`;return r.config.emulator?Cp(r.config,o):`${r.config.apiScheme}://${o}`}function P2(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(fi(this.auth,"network-request-failed")),M2.get())})}}function Hc(r,t,n){const a={appName:r.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const o=fi(r,t,a);return o.customData._tokenResponse=n,o}function $_(r){return r!==void 0&&r.enterprise!==void 0}class L2{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return P2(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V2(r,t){return Wr(r,"GET","/v2/recaptchaConfig",$r(r,t))}/**
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
 */async function U2(r,t){return Wr(r,"POST","/v1/accounts:delete",t)}async function vT(r,t){return Wr(r,"POST","/v1/accounts:lookup",t)}/**
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
 */function kl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function j2(r,t=!1){const n=on(r),a=await n.getIdToken(t),o=Ip(a);_t(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:a,authTime:kl(dm(o.auth_time)),issuedAtTime:kl(dm(o.iat)),expirationTime:kl(dm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function dm(r){return Number(r)*1e3}function Ip(r){const[t,n,a]=r.split(".");if(t===void 0||n===void 0||a===void 0)return Zc("JWT malformed, contained fewer than 3 sections"),null;try{const o=nT(n);return o?JSON.parse(o):(Zc("Failed to decode base64 JWT payload"),null)}catch(o){return Zc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function W_(r){const t=Ip(r);return _t(t,"internal-error"),_t(typeof t.exp<"u","internal-error"),_t(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Yl(r,t,n=!1){if(n)return t;try{return await t}catch(a){throw a instanceof nr&&z2(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function z2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class B2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class km{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function df(r){var t;const n=r.auth,a=await r.getIdToken(),o=await Yl(r,vT(n,{idToken:a}));_t(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?_T(u.providerUserInfo):[],m=F2(r.providerData,h),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=g?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new km(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function H2(r){const t=on(r);await df(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function F2(r,t){return[...r.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function _T(r){return r.map(t=>{var{providerId:n}=t,a=wp(t,["providerId"]);return{providerId:n,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function q2(r,t){const n=await gT(r,{},async()=>{const a=au({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=yT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",pT.fetch()(h,{method:"POST",headers:m,body:a})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G2(r,t){return Wr(r,"POST","/v2/accounts:revokeToken",$r(r,t))}/**
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
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_t(t.idToken,"internal-error"),_t(typeof t.idToken<"u","internal-error"),_t(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):W_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){_t(t.length!==0,"internal-error");const n=W_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_t(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:a,refreshToken:o,expiresIn:u}=await q2(t,n);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(t,n,a){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,n){const{refreshToken:a,accessToken:o,expirationTime:u}=n,h=new Zs;return a&&(_t(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(_t(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),u&&(_t(typeof u=="number","internal-error",{appName:t}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
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
 */function Mr(r,t){_t(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Yi{constructor(t){var{uid:n,auth:a,stsTokenManager:o}=t,u=wp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new km(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Yl(this,this.stsTokenManager.getToken(this.auth,t));return _t(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return j2(this,t)}reload(){return H2(this)}_assign(t){this!==t&&(_t(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Yi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),n&&await df(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(Xi(this.auth));const t=await this.getIdToken();return await Yl(this,U2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var a,o,u,h,m,g,y,E;const S=(a=n.displayName)!==null&&a!==void 0?a:void 0,R=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,k=(h=n.photoURL)!==null&&h!==void 0?h:void 0,W=(m=n.tenantId)!==null&&m!==void 0?m:void 0,q=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,Y=(y=n.createdAt)!==null&&y!==void 0?y:void 0,nt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:ct,isAnonymous:ut,providerData:At,stsTokenManager:D}=n;_t(Z&&D,t,"internal-error");const w=Zs.fromJSON(this.name,D);_t(typeof Z=="string",t,"internal-error"),Mr(S,t.name),Mr(R,t.name),_t(typeof ct=="boolean",t,"internal-error"),_t(typeof ut=="boolean",t,"internal-error"),Mr(B,t.name),Mr(k,t.name),Mr(W,t.name),Mr(q,t.name),Mr(Y,t.name),Mr(nt,t.name);const A=new Yi({uid:Z,auth:t,email:R,emailVerified:ct,displayName:S,isAnonymous:ut,photoURL:k,phoneNumber:B,tenantId:W,stsTokenManager:w,createdAt:Y,lastLoginAt:nt});return At&&Array.isArray(At)&&(A.providerData=At.map(O=>Object.assign({},O))),q&&(A._redirectEventId=q),A}static async _fromIdTokenResponse(t,n,a=!1){const o=new Zs;o.updateFromServerResponse(n);const u=new Yi({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await df(u),u}static async _fromGetAccountInfoResponse(t,n,a){const o=n.users[0];_t(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?_T(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Zs;m.updateFromIdToken(a);const g=new Yi({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new km(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
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
 */const Z_=new Map;function Ki(r){Zi(r instanceof Function,"Expected a class definition");let t=Z_.get(r);return t?(Zi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Z_.set(r,t),t)}/**
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
 */class ET{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ET.type="NONE";const J_=ET;/**
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
 */function Jc(r,t,n){return`firebase:${r}:${t}:${n}`}class Js{constructor(t,n,a){this.persistence=t,this.auth=n,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=Jc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Jc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Yi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,a="authUser"){if(!n.length)return new Js(Ki(J_),t,a);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ki(J_);const h=Jc(a,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(h);if(E){const S=Yi._fromJSON(t,E);y!==u&&(m=S),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Js(u,t,a):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new Js(u,t,a))}}/**
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
 */function t0(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ST(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(TT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(RT(t))return"Blackberry";if(CT(t))return"Webos";if(bT(t))return"Safari";if((t.includes("chrome/")||AT(t))&&!t.includes("edge/"))return"Chrome";if(wT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(n);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function TT(r=$e()){return/firefox\//i.test(r)}function bT(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function AT(r=$e()){return/crios\//i.test(r)}function ST(r=$e()){return/iemobile/i.test(r)}function wT(r=$e()){return/android/i.test(r)}function RT(r=$e()){return/blackberry/i.test(r)}function CT(r=$e()){return/webos/i.test(r)}function Op(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Y2(r=$e()){var t;return Op(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function K2(){return sR()&&document.documentMode===10}function IT(r=$e()){return Op(r)||wT(r)||CT(r)||RT(r)||/windows phone/i.test(r)||ST(r)}/**
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
 */function OT(r,t=[]){let n;switch(r){case"Browser":n=t0($e());break;case"Worker":n=`${t0($e())}-${r}`;break;default:n=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ho}/${a}`}/**
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
 */class Q2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const a=u=>new Promise((h,m)=>{try{const g=t(u);h(g)}catch(g){m(g)}});a.onAbort=n,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const a of this.queue)await a(t),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function X2(r,t={}){return Wr(r,"GET","/v2/passwordPolicy",$r(r,t))}/**
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
 */const $2=6;class W2{constructor(t){var n,a,o,u;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:$2,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,a,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(a=g.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(t,n){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=t.length>=a),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let o=0;o<t.length;o++)a=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,n,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
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
 */class Z2{constructor(t,n,a,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new e0(this),this.idTokenSubscription=new e0(this),this.beforeStateQueue=new Q2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var a,o;if(!this._deleted&&(this.persistenceManager=await Js.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await vT(this,{idToken:t}),a=await Yi._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Nn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await df(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=D2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(Xi(this));const n=t?on(t):null;return n&&_t(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&_t(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await X2(this),n=new W2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ru("auth","Firebase",t())}onAuthStateChanged(t,n,a){return this.registerStateListener(this.authStateSubscription,t,n,a)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,a){return this.registerStateListener(this.idTokenSubscription,t,n,a)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await G2(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const a=await this.getOrInitRedirectPersistenceManager(n);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;_t(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,a;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,a,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_t(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,a,o);return()=>{h=!0,g()}}else{const g=t.addObserver(n);return()=>{h=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=OT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(n["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&I2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wa(r){return on(r)}class e0{constructor(t){this.auth=t,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J2(r){Vf=r}function xT(r){return Vf.loadJS(r)}function tC(){return Vf.recaptchaEnterpriseScript}function eC(){return Vf.gapiScript}function nC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class iC{constructor(){this.enterprise=new rC}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class rC{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const aC="recaptcha-enterprise",DT="NO_RECAPTCHA";class sC{constructor(t){this.type=aC,this.auth=Wa(t)}async verify(t="verify",n=!1){async function a(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{V2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new L2(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,h(y.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;$_(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(y=>{h(y)}).catch(()=>{h(DT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iC().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{a(this.auth).then(m=>{if(!n&&$_(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=tC();g.length!==0&&(g+=m),xT(g).then(()=>{o(m,u,h)}).catch(y=>{h(y)})}}).catch(m=>{h(m)})})}}async function n0(r,t,n,a=!1,o=!1){const u=new sC(r);let h;if(o)h=DT;else try{h=await u.verify(n)}catch{h=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return a?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Lm(r,t,n,a,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await n0(r,t,n,n==="getOobCode");return a(r,h)}else return a(r,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await n0(r,t,n,n==="getOobCode");return a(r,m)}else return Promise.reject(h)})}/**
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
 */function oC(r,t){const n=Sp(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(za(u,t??{}))return o;Hn(o,"already-initialized")}return n.initialize({options:t})}function lC(r,t){const n=(t==null?void 0:t.persistence)||[],a=(Array.isArray(n)?n:[n]).map(Ki);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function uC(r,t,n){const a=Wa(r);_t(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,u=NT(t),{host:h,port:m}=cC(t),g=m===null?"":`:${m}`,y={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){_t(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),_t(za(y,a.config.emulator)&&za(E,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=y,a.emulatorConfig=E,a.settings.appVerificationDisabledForTesting=!0,fC()}function NT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function cC(r){const t=NT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:i0(a.substr(u.length+1))}}else{const[u,h]=a.split(":");return{host:u,port:i0(h)}}}function i0(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function fC(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class xp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(t){return Gi("not implemented")}_linkToIdToken(t,n){return Gi("not implemented")}_getReauthenticationResolver(t){return Gi("not implemented")}}async function hC(r,t){return Wr(r,"POST","/v1/accounts:signUp",t)}/**
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
 */async function dC(r,t){return ou(r,"POST","/v1/accounts:signInWithPassword",$r(r,t))}/**
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
 */async function mC(r,t){return ou(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,t))}async function pC(r,t){return ou(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,t))}/**
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
 */class Kl extends xp{constructor(t,n,a,o=null){super("password",a),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Kl(t,n,"password")}static _fromEmailAndCode(t,n,a=null){return new Kl(t,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lm(t,n,"signInWithPassword",dC);case"emailLink":return mC(t,{email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lm(t,a,"signUpPassword",hC);case"emailLink":return pC(t,{idToken:n,email:this._email,oobCode:this._password});default:Hn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function to(r,t){return ou(r,"POST","/v1/accounts:signInWithIdp",$r(r,t))}/**
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
 */const gC="http://localhost";class Ha extends xp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ha(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=n,u=wp(n,["providerId","signInMethod"]);if(!a||!o)return null;const h=new Ha(a,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(t){const n=this.buildRequest();return to(t,n)}_linkToIdToken(t,n){const a=this.buildRequest();return a.idToken=n,to(t,a)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,to(t,n)}buildRequest(){const t={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=au(n)}return t}}/**
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
 */function yC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vC(r){const t=Dl(Nl(r)).link,n=t?Dl(Nl(t)).deep_link_id:null,a=Dl(Nl(r)).deep_link_id;return(a?Dl(Nl(a)).link:null)||a||n||t||r}class Dp{constructor(t){var n,a,o,u,h,m;const g=Dl(Nl(t)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,E=(a=g.oobCode)!==null&&a!==void 0?a:null,S=yC((o=g.mode)!==null&&o!==void 0?o:null);_t(y&&E&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=vC(t);try{return new Dp(n)}catch{return null}}}/**
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
 */class mo{constructor(){this.providerId=mo.PROVIDER_ID}static credential(t,n){return Kl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const a=Dp.parseLink(n);return _t(a,"argument-error"),Kl._fromEmailAndCode(t,a.code,a.tenantId)}}mo.PROVIDER_ID="password";mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class MT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lu extends MT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class kr extends lu{constructor(){super("facebook.com")}static credential(t){return Ha._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kr.credential(t.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
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
 */class Lr extends lu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ha._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:a}=t;if(!n&&!a)return null;try{return Lr.credential(n,a)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
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
 */class Vr extends lu{constructor(){super("github.com")}static credential(t){return Ha._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
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
 */class Ur extends lu{constructor(){super("twitter.com")}static credential(t,n){return Ha._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=t;if(!n||!a)return null;try{return Ur.credential(n,a)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */async function _C(r,t){return ou(r,"POST","/v1/accounts:signUp",$r(r,t))}/**
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
 */class Fa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,a,o=!1){const u=await Yi._fromIdTokenResponse(t,a,o),h=r0(a);return new Fa({user:u,providerId:h,_tokenResponse:a,operationType:n})}static async _forOperation(t,n,a){await t._updateTokensIfNecessary(a,!0);const o=r0(a);return new Fa({user:t,providerId:o,_tokenResponse:a,operationType:n})}}function r0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class mf extends nr{constructor(t,n,a,o){var u;super(n.code,n.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,mf.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,n,a,o){return new mf(t,n,a,o)}}function PT(r,t,n,a){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?mf._fromErrorAndOperation(r,u,t,a):u})}async function EC(r,t,n=!1){const a=await Yl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Fa._forOperation(r,"link",a)}/**
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
 */async function TC(r,t,n=!1){const{auth:a}=r;if(Nn(a.app))return Promise.reject(Xi(a));const o="reauthenticate";try{const u=await Yl(r,PT(a,o,t,r),n);_t(u.idToken,a,"internal-error");const h=Ip(u.idToken);_t(h,a,"internal-error");const{sub:m}=h;return _t(r.uid===m,a,"user-mismatch"),Fa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Hn(a,"user-mismatch"),u}}/**
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
 */async function kT(r,t,n=!1){if(Nn(r.app))return Promise.reject(Xi(r));const a="signIn",o=await PT(r,a,t),u=await Fa._fromIdTokenResponse(r,a,o);return n||await r._updateCurrentUser(u.user),u}async function bC(r,t){return kT(Wa(r),t)}/**
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
 */async function LT(r){const t=Wa(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function AC(r,t,n){if(Nn(r.app))return Promise.reject(Xi(r));const a=Wa(r),h=await Lm(a,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_C).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&LT(r),g}),m=await Fa._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(m.user),m}function SC(r,t,n){return Nn(r.app)?Promise.reject(Xi(r)):bC(on(r),mo.credential(t,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&LT(r),a})}function wC(r,t,n,a){return on(r).onIdTokenChanged(t,n,a)}function RC(r,t,n){return on(r).beforeAuthStateChanged(t,n)}function CC(r,t,n,a){return on(r).onAuthStateChanged(t,n,a)}function IC(r){return on(r).signOut()}const pf="__sak";/**
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
 */class VT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pf,"1"),this.storage.removeItem(pf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OC=1e3,xC=10;class UT extends VT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=IT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),o=this.localCache[n];a!==o&&t(n,o,a)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const a=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!n&&this.localCache[a]===h||this.notifyListeners(a,h)},u=this.storage.getItem(a);K2()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,xC):o()}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:a}),!0)})},OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}UT.type="LOCAL";const DC=UT;/**
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
 */class jT extends VT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}jT.type="SESSION";const zT=jT;/**
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
 */function NC(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const a=new Uf(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:a,eventType:o,data:u}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const m=Array.from(h).map(async y=>y(n.origin,u)),g=await NC(m);n.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uf.receivers=[];/**
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
 */function Np(r="",t=10){let n="";for(let a=0;a<t;a++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class MC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const y=Np("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(S){const R=S;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function hi(){return window}function PC(r){hi().location.href=r}/**
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
 */function BT(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function kC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function VC(){return BT()?self:null}/**
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
 */const HT="firebaseLocalStorageDb",UC=1,gf="firebaseLocalStorage",FT="fbase_key";class uu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jf(r,t){return r.transaction([gf],t?"readwrite":"readonly").objectStore(gf)}function jC(){const r=indexedDB.deleteDatabase(HT);return new uu(r).toPromise()}function Vm(){const r=indexedDB.open(HT,UC);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(gf,{keyPath:FT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(gf)?t(a):(a.close(),await jC(),t(await Vm()))})})}async function a0(r,t,n){const a=jf(r,!0).put({[FT]:t,value:n});return new uu(a).toPromise()}async function zC(r,t){const n=jf(r,!1).get(t),a=await new uu(n).toPromise();return a===void 0?null:a.value}function s0(r,t){const n=jf(r,!0).delete(t);return new uu(n).toPromise()}const BC=800,HC=3;class qT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(n++>HC)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return BT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uf._getInstance(VC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await kC(),!this.activeServiceWorker)return;this.sender=new MC(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((n=a[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||LC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vm();return await a0(t,pf,"1"),await s0(t,pf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>a0(a,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(a=>zC(a,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>s0(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=jf(o,!1).getAll();return new uu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qT.type="LOCAL";const FC=qT;new su(3e4,6e4);/**
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
 */function qC(r,t){return t?Ki(t):(_t(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Mp extends xp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return to(t,this._buildIdpRequest())}_linkToIdToken(t,n){return to(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return to(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function GC(r){return kT(r.auth,new Mp(r),r.bypassAuthState)}function YC(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),TC(n,new Mp(r),r.bypassAuthState)}async function KC(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),EC(n,new Mp(r),r.bypassAuthState)}/**
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
 */class GT{constructor(t,n,a,o,u=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:a,postBody:o,tenantId:u,error:h,type:m}=t;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:n,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return GC;case"linkViaPopup":case"linkViaRedirect":return KC;case"reauthViaPopup":case"reauthViaRedirect":return YC;default:Hn(this.auth,"internal-error")}}resolve(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QC=new su(2e3,1e4);class Xs extends GT{constructor(t,n,a,o,u){super(t,n,o,u),this.provider=a,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _t(t,this.auth,"internal-error"),t}async onExecution(){Zi(this.filter.length===1,"Popup operations only handle one event");const t=Np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,a;if(!((a=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,QC.get())};t()}}Xs.currentPopupAction=null;/**
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
 */const XC="pendingRedirect",tf=new Map;class $C extends GT{constructor(t,n,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let t=tf.get(this.auth._key());if(!t){try{const a=await WC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(n){t=()=>Promise.reject(n)}tf.set(this.auth._key(),t)}return this.bypassAuthState||tf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WC(r,t){const n=tI(t),a=JC(r);if(!await a._isAvailable())return!1;const o=await a._get(n)==="true";return await a._remove(n),o}function ZC(r,t){tf.set(r._key(),t)}function JC(r){return Ki(r._redirectPersistence)}function tI(r){return Jc(XC,r.config.apiKey,r.name)}async function eI(r,t,n=!1){if(Nn(r.app))return Promise.reject(Xi(r));const a=Wa(r),o=qC(a,t),h=await new $C(a,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
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
 */const nI=10*60*1e3;class iI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(n=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var a;if(t.error&&!YT(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const a=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has(o0(t))}saveEventToCache(t){this.cachedEventUids.add(o0(t)),this.lastProcessedEventTime=Date.now()}}function o0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function YT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YT(r);default:return!1}}/**
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
 */async function aI(r,t={}){return Wr(r,"GET","/v1/projects",t)}/**
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
 */const sI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oI=/^https?/;async function lI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await aI(r);for(const n of t)try{if(uI(n))return}catch{}Hn(r,"unauthorized-domain")}function uI(r){const t=Pm(),{protocol:n,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&a===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===a}if(!oI.test(n))return!1;if(sI.test(r))return a===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
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
 */const cI=new su(3e4,6e4);function l0(){const r=hi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function fI(r){return new Promise((t,n)=>{var a,o,u;function h(){l0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{l0(),n(fi(r,"network-request-failed"))},timeout:cI.get()})}if(!((o=(a=hi().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=hi().gapi)===null||u===void 0)&&u.load)h();else{const m=nC("iframefcb");return hi()[m]=()=>{gapi.load?h():n(fi(r,"network-request-failed"))},xT(`${eC()}?onload=${m}`).catch(g=>n(g))}}).catch(t=>{throw ef=null,t})}let ef=null;function hI(r){return ef=ef||fI(r),ef}/**
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
 */const dI=new su(5e3,15e3),mI="__/auth/iframe",pI="emulator/auth/iframe",gI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vI(r){const t=r.config;_t(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Cp(t,pI):`https://${r.config.authDomain}/${mI}`,a={apiKey:t.apiKey,appName:r.name,v:ho},o=yI.get(r.config.apiHost);o&&(a.eid=o);const u=r._getFrameworks();return u.length&&(a.fw=u.join(",")),`${n}?${au(a).slice(1)}`}async function _I(r){const t=await hI(r),n=hi().gapi;return _t(n,r,"internal-error"),t.open({where:document.body,url:vI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gI,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const h=fi(r,"network-request-failed"),m=hi().setTimeout(()=>{u(h)},dI.get());function g(){hi().clearTimeout(m),o(a)}a.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const EI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TI=500,bI=600,AI="_blank",SI="http://localhost";class u0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wI(r,t,n,a=TI,o=bI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const g=Object.assign(Object.assign({},EI),{width:a.toString(),height:o.toString(),top:u,left:h}),y=$e().toLowerCase();n&&(m=AT(y)?AI:n),TT(y)&&(t=t||SI,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[B,k])=>`${R}${B}=${k},`,"");if(Y2(y)&&m!=="_self")return RI(t||"",m),new u0(null);const S=window.open(t||"",m,E);_t(S,r,"popup-blocked");try{S.focus()}catch{}return new u0(S)}function RI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
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
 */const CI="__/auth/handler",II="emulator/auth/handler",OI=encodeURIComponent("fac");async function c0(r,t,n,a,o,u){_t(r.config.authDomain,r,"auth-domain-config-required"),_t(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:a,v:ho,eventId:o};if(t instanceof MT){t.setDefaultLanguage(r.languageCode),h.providerId=t.providerId||"",dR(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(t instanceof lu){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),y=g?`#${OI}=${encodeURIComponent(g)}`:"";return`${xI(r)}?${au(m).slice(1)}${y}`}function xI({config:r}){return r.emulator?Cp(r,II):`https://${r.authDomain}/${CI}`}/**
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
 */const mm="webStorageSupport";class DI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zT,this._completeRedirectFn=eI,this._overrideRedirectResult=ZC}async _openPopup(t,n,a,o){var u;Zi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await c0(t,n,a,Pm(),o);return wI(t,h,Np())}async _openRedirect(t,n,a,o){await this._originValidation(t);const u=await c0(t,n,a,Pm(),o);return PC(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Zi(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(t);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(t){const n=await _I(t),a=new iI(t);return n.register("authEvent",o=>(_t(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=n,a}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(mm,{type:mm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[mm];h!==void 0&&n(!!h),Hn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return IT()||bT()||Op()}}const NI=DI;var f0="@firebase/auth",h0="1.9.1";/**
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
 */class MI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kI(r){io(new Ba("auth",(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=a.options;_t(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OT(r)},y=new Z2(a,o,u,g);return lC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,a)=>{t.getProvider("auth-internal").initialize()})),io(new Ba("auth-internal",t=>{const n=Wa(t.getProvider("auth").getImmediate());return(a=>new MI(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(f0,h0,PI(r)),Br(f0,h0,"esm2017")}/**
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
 */const LI=5*60,VI=aT("authIdTokenMaxAge")||LI;let d0=null;const UI=r=>async t=>{const n=t&&await t.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>VI)return;const o=n==null?void 0:n.token;d0!==o&&(d0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function jI(r=uT()){const t=Sp(r,"auth");if(t.isInitialized())return t.getImmediate();const n=oC(r,{popupRedirectResolver:NI,persistence:[FC,DC,zT]}),a=aT("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const h=UI(u.toString());RC(n,h,()=>h(n.currentUser)),wC(n,m=>h(m))}}const o=iT("auth");return o&&uC(n,`http://${o}`),n}function zI(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}J2({loadJS(r){return new Promise((t,n)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=o=>{const u=fi("internal-error");u.customData=o,n(u)},a.type="text/javascript",a.charset="UTF-8",zI().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kI("Browser");var m0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(D,w){function A(){}A.prototype=w.prototype,D.D=w.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(O,P,V){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return w.prototype[P].apply(O,I)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,w,A){A||(A=0);var O=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)O[P]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(P=0;16>P;++P)O[P]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=D.g[0],A=D.g[1],P=D.g[2];var V=D.g[3],I=w+(V^A&(P^V))+O[0]+3614090360&4294967295;w=A+(I<<7&4294967295|I>>>25),I=V+(P^w&(A^P))+O[1]+3905402710&4294967295,V=w+(I<<12&4294967295|I>>>20),I=P+(A^V&(w^A))+O[2]+606105819&4294967295,P=V+(I<<17&4294967295|I>>>15),I=A+(w^P&(V^w))+O[3]+3250441966&4294967295,A=P+(I<<22&4294967295|I>>>10),I=w+(V^A&(P^V))+O[4]+4118548399&4294967295,w=A+(I<<7&4294967295|I>>>25),I=V+(P^w&(A^P))+O[5]+1200080426&4294967295,V=w+(I<<12&4294967295|I>>>20),I=P+(A^V&(w^A))+O[6]+2821735955&4294967295,P=V+(I<<17&4294967295|I>>>15),I=A+(w^P&(V^w))+O[7]+4249261313&4294967295,A=P+(I<<22&4294967295|I>>>10),I=w+(V^A&(P^V))+O[8]+1770035416&4294967295,w=A+(I<<7&4294967295|I>>>25),I=V+(P^w&(A^P))+O[9]+2336552879&4294967295,V=w+(I<<12&4294967295|I>>>20),I=P+(A^V&(w^A))+O[10]+4294925233&4294967295,P=V+(I<<17&4294967295|I>>>15),I=A+(w^P&(V^w))+O[11]+2304563134&4294967295,A=P+(I<<22&4294967295|I>>>10),I=w+(V^A&(P^V))+O[12]+1804603682&4294967295,w=A+(I<<7&4294967295|I>>>25),I=V+(P^w&(A^P))+O[13]+4254626195&4294967295,V=w+(I<<12&4294967295|I>>>20),I=P+(A^V&(w^A))+O[14]+2792965006&4294967295,P=V+(I<<17&4294967295|I>>>15),I=A+(w^P&(V^w))+O[15]+1236535329&4294967295,A=P+(I<<22&4294967295|I>>>10),I=w+(P^V&(A^P))+O[1]+4129170786&4294967295,w=A+(I<<5&4294967295|I>>>27),I=V+(A^P&(w^A))+O[6]+3225465664&4294967295,V=w+(I<<9&4294967295|I>>>23),I=P+(w^A&(V^w))+O[11]+643717713&4294967295,P=V+(I<<14&4294967295|I>>>18),I=A+(V^w&(P^V))+O[0]+3921069994&4294967295,A=P+(I<<20&4294967295|I>>>12),I=w+(P^V&(A^P))+O[5]+3593408605&4294967295,w=A+(I<<5&4294967295|I>>>27),I=V+(A^P&(w^A))+O[10]+38016083&4294967295,V=w+(I<<9&4294967295|I>>>23),I=P+(w^A&(V^w))+O[15]+3634488961&4294967295,P=V+(I<<14&4294967295|I>>>18),I=A+(V^w&(P^V))+O[4]+3889429448&4294967295,A=P+(I<<20&4294967295|I>>>12),I=w+(P^V&(A^P))+O[9]+568446438&4294967295,w=A+(I<<5&4294967295|I>>>27),I=V+(A^P&(w^A))+O[14]+3275163606&4294967295,V=w+(I<<9&4294967295|I>>>23),I=P+(w^A&(V^w))+O[3]+4107603335&4294967295,P=V+(I<<14&4294967295|I>>>18),I=A+(V^w&(P^V))+O[8]+1163531501&4294967295,A=P+(I<<20&4294967295|I>>>12),I=w+(P^V&(A^P))+O[13]+2850285829&4294967295,w=A+(I<<5&4294967295|I>>>27),I=V+(A^P&(w^A))+O[2]+4243563512&4294967295,V=w+(I<<9&4294967295|I>>>23),I=P+(w^A&(V^w))+O[7]+1735328473&4294967295,P=V+(I<<14&4294967295|I>>>18),I=A+(V^w&(P^V))+O[12]+2368359562&4294967295,A=P+(I<<20&4294967295|I>>>12),I=w+(A^P^V)+O[5]+4294588738&4294967295,w=A+(I<<4&4294967295|I>>>28),I=V+(w^A^P)+O[8]+2272392833&4294967295,V=w+(I<<11&4294967295|I>>>21),I=P+(V^w^A)+O[11]+1839030562&4294967295,P=V+(I<<16&4294967295|I>>>16),I=A+(P^V^w)+O[14]+4259657740&4294967295,A=P+(I<<23&4294967295|I>>>9),I=w+(A^P^V)+O[1]+2763975236&4294967295,w=A+(I<<4&4294967295|I>>>28),I=V+(w^A^P)+O[4]+1272893353&4294967295,V=w+(I<<11&4294967295|I>>>21),I=P+(V^w^A)+O[7]+4139469664&4294967295,P=V+(I<<16&4294967295|I>>>16),I=A+(P^V^w)+O[10]+3200236656&4294967295,A=P+(I<<23&4294967295|I>>>9),I=w+(A^P^V)+O[13]+681279174&4294967295,w=A+(I<<4&4294967295|I>>>28),I=V+(w^A^P)+O[0]+3936430074&4294967295,V=w+(I<<11&4294967295|I>>>21),I=P+(V^w^A)+O[3]+3572445317&4294967295,P=V+(I<<16&4294967295|I>>>16),I=A+(P^V^w)+O[6]+76029189&4294967295,A=P+(I<<23&4294967295|I>>>9),I=w+(A^P^V)+O[9]+3654602809&4294967295,w=A+(I<<4&4294967295|I>>>28),I=V+(w^A^P)+O[12]+3873151461&4294967295,V=w+(I<<11&4294967295|I>>>21),I=P+(V^w^A)+O[15]+530742520&4294967295,P=V+(I<<16&4294967295|I>>>16),I=A+(P^V^w)+O[2]+3299628645&4294967295,A=P+(I<<23&4294967295|I>>>9),I=w+(P^(A|~V))+O[0]+4096336452&4294967295,w=A+(I<<6&4294967295|I>>>26),I=V+(A^(w|~P))+O[7]+1126891415&4294967295,V=w+(I<<10&4294967295|I>>>22),I=P+(w^(V|~A))+O[14]+2878612391&4294967295,P=V+(I<<15&4294967295|I>>>17),I=A+(V^(P|~w))+O[5]+4237533241&4294967295,A=P+(I<<21&4294967295|I>>>11),I=w+(P^(A|~V))+O[12]+1700485571&4294967295,w=A+(I<<6&4294967295|I>>>26),I=V+(A^(w|~P))+O[3]+2399980690&4294967295,V=w+(I<<10&4294967295|I>>>22),I=P+(w^(V|~A))+O[10]+4293915773&4294967295,P=V+(I<<15&4294967295|I>>>17),I=A+(V^(P|~w))+O[1]+2240044497&4294967295,A=P+(I<<21&4294967295|I>>>11),I=w+(P^(A|~V))+O[8]+1873313359&4294967295,w=A+(I<<6&4294967295|I>>>26),I=V+(A^(w|~P))+O[15]+4264355552&4294967295,V=w+(I<<10&4294967295|I>>>22),I=P+(w^(V|~A))+O[6]+2734768916&4294967295,P=V+(I<<15&4294967295|I>>>17),I=A+(V^(P|~w))+O[13]+1309151649&4294967295,A=P+(I<<21&4294967295|I>>>11),I=w+(P^(A|~V))+O[4]+4149444226&4294967295,w=A+(I<<6&4294967295|I>>>26),I=V+(A^(w|~P))+O[11]+3174756917&4294967295,V=w+(I<<10&4294967295|I>>>22),I=P+(w^(V|~A))+O[2]+718787259&4294967295,P=V+(I<<15&4294967295|I>>>17),I=A+(V^(P|~w))+O[9]+3951481745&4294967295,D.g[0]=D.g[0]+w&4294967295,D.g[1]=D.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+V&4294967295}a.prototype.u=function(D,w){w===void 0&&(w=D.length);for(var A=w-this.blockSize,O=this.B,P=this.h,V=0;V<w;){if(P==0)for(;V<=A;)o(this,D,V),V+=this.blockSize;if(typeof D=="string"){for(;V<w;)if(O[P++]=D.charCodeAt(V++),P==this.blockSize){o(this,O),P=0;break}}else for(;V<w;)if(O[P++]=D[V++],P==this.blockSize){o(this,O),P=0;break}}this.h=P,this.o+=w},a.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var w=1;w<D.length-8;++w)D[w]=0;var A=8*this.o;for(w=D.length-8;w<D.length;++w)D[w]=A&255,A/=256;for(this.u(D),D=Array(16),w=A=0;4>w;++w)for(var O=0;32>O;O+=8)D[A++]=this.g[w]>>>O&255;return D};function u(D,w){var A=m;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=w(D)}function h(D,w){this.h=w;for(var A=[],O=!0,P=D.length-1;0<=P;P--){var V=D[P]|0;O&&V==w||(A[P]=V,O=!1)}this.g=A}var m={};function g(D){return-128<=D&&128>D?u(D,function(w){return new h([w|0],0>w?-1:0)}):new h([D|0],0>D?-1:0)}function y(D){if(isNaN(D)||!isFinite(D))return S;if(0>D)return q(y(-D));for(var w=[],A=1,O=0;D>=A;O++)w[O]=D/A|0,A*=4294967296;return new h(w,0)}function E(D,w){if(D.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(D.charAt(0)=="-")return q(E(D.substring(1),w));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(w,8)),O=S,P=0;P<D.length;P+=8){var V=Math.min(8,D.length-P),I=parseInt(D.substring(P,P+V),w);8>V?(V=y(Math.pow(w,V)),O=O.j(V).add(y(I))):(O=O.j(A),O=O.add(y(I)))}return O}var S=g(0),R=g(1),B=g(16777216);r=h.prototype,r.m=function(){if(W(this))return-q(this).m();for(var D=0,w=1,A=0;A<this.g.length;A++){var O=this.i(A);D+=(0<=O?O:4294967296+O)*w,w*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(k(this))return"0";if(W(this))return"-"+q(this).toString(D);for(var w=y(Math.pow(D,6)),A=this,O="";;){var P=ct(A,w).g;A=Y(A,P.j(w));var V=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=P,k(A))return V+O;for(;6>V.length;)V="0"+V;O=V+O}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function k(D){if(D.h!=0)return!1;for(var w=0;w<D.g.length;w++)if(D.g[w]!=0)return!1;return!0}function W(D){return D.h==-1}r.l=function(D){return D=Y(this,D),W(D)?-1:k(D)?0:1};function q(D){for(var w=D.g.length,A=[],O=0;O<w;O++)A[O]=~D.g[O];return new h(A,~D.h).add(R)}r.abs=function(){return W(this)?q(this):this},r.add=function(D){for(var w=Math.max(this.g.length,D.g.length),A=[],O=0,P=0;P<=w;P++){var V=O+(this.i(P)&65535)+(D.i(P)&65535),I=(V>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);O=I>>>16,V&=65535,I&=65535,A[P]=I<<16|V}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Y(D,w){return D.add(q(w))}r.j=function(D){if(k(this)||k(D))return S;if(W(this))return W(D)?q(this).j(q(D)):q(q(this).j(D));if(W(D))return q(this.j(q(D)));if(0>this.l(B)&&0>D.l(B))return y(this.m()*D.m());for(var w=this.g.length+D.g.length,A=[],O=0;O<2*w;O++)A[O]=0;for(O=0;O<this.g.length;O++)for(var P=0;P<D.g.length;P++){var V=this.i(O)>>>16,I=this.i(O)&65535,Pe=D.i(P)>>>16,se=D.i(P)&65535;A[2*O+2*P]+=I*se,nt(A,2*O+2*P),A[2*O+2*P+1]+=V*se,nt(A,2*O+2*P+1),A[2*O+2*P+1]+=I*Pe,nt(A,2*O+2*P+1),A[2*O+2*P+2]+=V*Pe,nt(A,2*O+2*P+2)}for(O=0;O<w;O++)A[O]=A[2*O+1]<<16|A[2*O];for(O=w;O<2*w;O++)A[O]=0;return new h(A,0)};function nt(D,w){for(;(D[w]&65535)!=D[w];)D[w+1]+=D[w]>>>16,D[w]&=65535,w++}function Z(D,w){this.g=D,this.h=w}function ct(D,w){if(k(w))throw Error("division by zero");if(k(D))return new Z(S,S);if(W(D))return w=ct(q(D),w),new Z(q(w.g),q(w.h));if(W(w))return w=ct(D,q(w)),new Z(q(w.g),w.h);if(30<D.g.length){if(W(D)||W(w))throw Error("slowDivide_ only works with positive integers.");for(var A=R,O=w;0>=O.l(D);)A=ut(A),O=ut(O);var P=At(A,1),V=At(O,1);for(O=At(O,2),A=At(A,2);!k(O);){var I=V.add(O);0>=I.l(D)&&(P=P.add(A),V=I),O=At(O,1),A=At(A,1)}return w=Y(D,P.j(w)),new Z(P,w)}for(P=S;0<=D.l(w);){for(A=Math.max(1,Math.floor(D.m()/w.m())),O=Math.ceil(Math.log(A)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),V=y(A),I=V.j(w);W(I)||0<I.l(D);)A-=O,V=y(A),I=V.j(w);k(V)&&(V=R),P=P.add(V),D=Y(D,I)}return new Z(P,D)}r.A=function(D){return ct(this,D).h},r.and=function(D){for(var w=Math.max(this.g.length,D.g.length),A=[],O=0;O<w;O++)A[O]=this.i(O)&D.i(O);return new h(A,this.h&D.h)},r.or=function(D){for(var w=Math.max(this.g.length,D.g.length),A=[],O=0;O<w;O++)A[O]=this.i(O)|D.i(O);return new h(A,this.h|D.h)},r.xor=function(D){for(var w=Math.max(this.g.length,D.g.length),A=[],O=0;O<w;O++)A[O]=this.i(O)^D.i(O);return new h(A,this.h^D.h)};function ut(D){for(var w=D.g.length+1,A=[],O=0;O<w;O++)A[O]=D.i(O)<<1|D.i(O-1)>>>31;return new h(A,D.h)}function At(D,w){var A=w>>5;w%=32;for(var O=D.g.length-A,P=[],V=0;V<O;V++)P[V]=0<w?D.i(V+A)>>>w|D.i(V+A+1)<<32-w:D.i(V+A);return new h(P,D.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,Pp=h}).apply(typeof m0<"u"?m0:typeof self<"u"?self:typeof window<"u"?window:{});var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KT,Ml,QT,nf,Um,XT,$T,WT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fc=="object"&&Fc];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=n(this);function o(c,p){if(p)t:{var v=a;c=c.split(".");for(var b=0;b<c.length-1;b++){var U=c[b];if(!(U in v))break t;v=v[U]}c=c[c.length-1],b=v[c],p=p(b),p!=b&&p!=null&&t(v,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var v=0,b=!1,U={next:function(){if(!b&&v<c.length){var G=v++;return{value:p(G,c[G]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function E(c,p,v){return c.call.apply(c.bind,arguments)}function S(c,p,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),c.apply(p,U)}}return function(){return c.apply(p,arguments)}}function R(c,p,v){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,R.apply(null,arguments)}function B(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function k(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,U,G){for(var st=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)st[Pt-2]=arguments[Pt];return p.prototype[U].apply(b,st)}}function W(c){const p=c.length;if(0<p){const v=Array(p);for(let b=0;b<p;b++)v[b]=c[b];return v}return[]}function q(c,p){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(g(b)){const U=c.length||0,G=b.length||0;c.length=U+G;for(let st=0;st<G;st++)c[U+st]=b[st]}else c.push(b)}}class Y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function nt(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ct(c){return ct[" "](c),c}ct[" "]=function(){};var ut=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function At(c,p,v){for(const b in c)p.call(v,c[b],b,c)}function D(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function w(c){const p={};for(const v in c)p[v]=c[v];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,p){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)c[v]=b[v];for(let G=0;G<A.length;G++)v=A[G],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function P(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function V(c){m.setTimeout(()=>{throw c},0)}function I(){var c=zt;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Pe{constructor(){this.h=this.g=null}add(p,v){const b=se.get();b.set(p,v),this.h?this.h.next=b:this.g=b,this.h=b}}var se=new Y(()=>new Q,c=>c.reset());class Q{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,pt=!1,zt=new Pe,x=()=>{const c=m.Promise.resolve(void 0);ot=()=>{c.then(et)}};var et=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(v){V(v)}var p=se;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}pt=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var gt=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return c}();function Ct(c,p){if(at.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(ut){t:{try{ct(p.nodeName);var U=!0;break t}catch{}U=!1}U||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:bt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}k(Ct,at);var bt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function Fn(c,p,v,b,U){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!b,this.ha=U,this.key=++Wt,this.da=this.fa=!1}function rr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _i(c){this.src=c,this.g={},this.h=0}_i.prototype.add=function(c,p,v,b,U){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var st=Jr(c,p,b,U);return-1<st?(p=c[st],v||(p.fa=!1)):(p=new Fn(p,this.src,G,!!b,U),p.fa=v,c.push(p)),p};function Zr(c,p){var v=p.type;if(v in c.g){var b=c.g[v],U=Array.prototype.indexOf.call(b,p,void 0),G;(G=0<=U)&&Array.prototype.splice.call(b,U,1),G&&(rr(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Jr(c,p,v,b){for(var U=0;U<c.length;++U){var G=c[U];if(!G.da&&G.listener==p&&G.capture==!!v&&G.ha==b)return U}return-1}var ta="closure_lm_"+(1e6*Math.random()|0),vo={};function yu(c,p,v,b,U){if(Array.isArray(p)){for(var G=0;G<p.length;G++)yu(c,p[G],v,b,U);return null}return v=vu(v),c&&c[we]?c.K(p,v,y(b)?!!b.capture:!1,U):_n(c,p,v,!1,b,U)}function _n(c,p,v,b,U,G){if(!p)throw Error("Invalid event type");var st=y(U)?!!U.capture:!!U,Pt=es(c);if(Pt||(c[ta]=Pt=new _i(c)),v=Pt.add(p,v,b,st,G),v.proxy)return v;if(b=th(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)gt||(U=st),U===void 0&&(U=!1),c.addEventListener(p.toString(),b,U);else if(c.attachEvent)c.attachEvent(ea(p.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function th(){function c(v){return p.call(c.src,c.listener,v)}const p=eh;return c}function _o(c,p,v,b,U){if(Array.isArray(p))for(var G=0;G<p.length;G++)_o(c,p[G],v,b,U);else b=y(b)?!!b.capture:!!b,v=vu(v),c&&c[we]?(c=c.i,p=String(p).toString(),p in c.g&&(G=c.g[p],v=Jr(G,v,b,U),-1<v&&(rr(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete c.g[p],c.h--)))):c&&(c=es(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Jr(p,v,b,U)),(v=-1<c?p[c]:null)&&ts(v))}function ts(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[we])Zr(p.i,c);else{var v=c.type,b=c.proxy;p.removeEventListener?p.removeEventListener(v,b,c.capture):p.detachEvent?p.detachEvent(ea(v),b):p.addListener&&p.removeListener&&p.removeListener(b),(v=es(p))?(Zr(v,c),v.h==0&&(v.src=null,p[ta]=null)):rr(c)}}}function ea(c){return c in vo?vo[c]:vo[c]="on"+c}function eh(c,p){if(c.da)c=!0;else{p=new Ct(p,this);var v=c.listener,b=c.ha||c.src;c.fa&&ts(c),c=v.call(b,p)}return c}function es(c){return c=c[ta],c instanceof _i?c:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function vu(c){return typeof c=="function"?c:(c[Eo]||(c[Eo]=function(p){return c.handleEvent(p)}),c[Eo])}function oe(){lt.call(this),this.i=new _i(this),this.M=this,this.F=null}k(oe,lt),oe.prototype[we]=!0,oe.prototype.removeEventListener=function(c,p,v,b){_o(this,c,p,v,b)};function Ft(c,p){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=p.type||p,typeof p=="string")p=new at(p,c);else if(p instanceof at)p.target=p.target||c;else{var U=p;p=new at(b,c),O(p,U)}if(U=!0,v)for(var G=v.length-1;0<=G;G--){var st=p.g=v[G];U=un(st,b,!0,p)&&U}if(st=p.g=c,U=un(st,b,!0,p)&&U,U=un(st,b,!1,p)&&U,v)for(G=0;G<v.length;G++)st=p.g=v[G],U=un(st,b,!1,p)&&U}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],b=0;b<v.length;b++)rr(v[b]);delete c.g[p],c.h--}}this.F=null},oe.prototype.K=function(c,p,v,b){return this.i.add(String(c),p,!1,v,b)},oe.prototype.L=function(c,p,v,b){return this.i.add(String(c),p,!0,v,b)};function un(c,p,v,b){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,G=0;G<p.length;++G){var st=p[G];if(st&&!st.da&&st.capture==v){var Pt=st.listener,Te=st.ha||st.src;st.fa&&Zr(c.i,st),U=Pt.call(Te,b)!==!1&&U}}return U&&!b.defaultPrevented}function qe(c,p,v){if(typeof c=="function")v&&(c=R(c,v));else if(c&&typeof c.handleEvent=="function")c=R(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function _u(c){c.g=qe(()=>{c.g=null,c.i&&(c.i=!1,_u(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class nh extends lt{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:_u(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(c){lt.call(this),this.h=c,this.g={}}k(na,lt);var ia=[];function ra(c){At(c.g,function(p,v){this.g.hasOwnProperty(v)&&ts(p)},c),c.g={}}na.prototype.N=function(){na.aa.N.call(this),ra(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=m.JSON.stringify,ns=m.JSON.parse,aa=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function To(){}To.prototype.h=null;function bo(c){return c.h||(c.h=c.i())}function Ao(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){at.call(this,"d")}k(Ti,at);function So(){at.call(this,"c")}k(So,at);var qn={},wo=null;function ar(){return wo=wo||new oe}qn.La="serverreachability";function is(c){at.call(this,qn.La,c)}k(is,at);function sr(c){const p=ar();Ft(p,new is(p))}qn.STAT_EVENT="statevent";function Eu(c,p){at.call(this,qn.STAT_EVENT,c),this.stat=p}k(Eu,at);function ee(c){const p=ar();Ft(p,new Eu(p,c))}qn.Ma="timingevent";function Ee(c,p){at.call(this,qn.Ma,c),this.size=p}k(Ee,at);function pe(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function Ro(c,p,v,b,U,G){c.info(function(){if(c.g)if(G)for(var st="",Pt=G.split("&"),Te=0;Te<Pt.length;Te++){var kt=Pt[Te].split("=");if(1<kt.length){var Ce=kt[0];kt=kt[1];var be=Ce.split("_");st=2<=be.length&&be[1]=="type"?st+(Ce+"="+kt+"&"):st+(Ce+"=redacted&")}}else st=null;else st=G;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+p+`
`+v+`
`+st})}function ih(c,p,v,b,U,G,st){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+p+`
`+v+`
`+G+" "+st})}function or(c,p,v,b){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+sa(c,v)+(b?" "+b:"")})}function Tu(c,p){c.info(function(){return"TIMEOUT: "+p})}En.prototype.info=function(){};function sa(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var G=U[0];if(G!="noop"&&G!="stop"&&G!="close")for(var st=1;st<U.length;st++)U[st]=""}}}}return Mn(v)}catch{return p}}var lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gn;function Yn(){}k(Yn,To),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},Gn=new Yn;function Ze(c,p,v,b){this.j=c,this.i=p,this.l=v,this.R=b||1,this.U=new na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var Co={},rs={};function Pn(c,p,v){c.L=1,c.v=fa(cn(p)),c.m=v,c.P=!0,Ai(c,null)}function Ai(c,p){c.F=Date.now(),oa(c),c.A=cn(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Mo(v.i,"t",b),c.C=0,v=c.j.J,c.h=new he,c.g=Vu(c.j,v?p:null,!c.m),0<c.O&&(c.M=new nh(R(c.Y,c,c.g),c.O)),p=c.U,v=c.g,b=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(ia[0]=U.toString()),U=ia);for(var G=0;G<U.length;G++){var st=yu(v,U[G],b||p.handleEvent,!1,p.h||p);if(!st)break;p.g[st.key]=st}p=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),sr(),Ro(c.i,c.u,c.A,c.l,c.R,c.m)}Ze.prototype.ca=function(c){c=c.target;const p=this.M;p&&Sn(c)==3?p.j():this.Y(c)},Ze.prototype.Y=function(c){try{if(c==this.g)t:{const be=Sn(this.g);var p=this.g.Ba();const Di=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Ou(this.g)))){this.J||be!=4||p==7||(p==8||0>=Di?sr(3):sr(2)),ur(this);var v=this.g.Z();this.X=v;e:if(bu(this)){var b=Ou(this.g);c="";var U=b.length,G=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Kn(this);var st="";break e}this.h.i=new m.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,c+=this.h.i.decode(b[p],{stream:!(G&&p==U-1)});b.length=0,this.h.g+=c,this.C=0,st=this.h.g}else st=this.g.oa();if(this.o=v==200,ih(this.i,this.u,this.A,this.l,this.R,be,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,Te=this.g;if((Pt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nt(Pt)){var kt=Pt;break e}}kt=null}if(v=kt)or(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,v);else{this.o=!1,this.s=3,ee(12),ke(this),Kn(this);break t}}if(this.P){v=!0;let Le;for(;!this.J&&this.C<st.length;)if(Le=Au(this,st),Le==rs){be==4&&(this.s=4,ee(14),v=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Co){this.s=4,ee(15),or(this.i,this.l,st,"[Invalid Chunk]"),v=!1;break}else or(this.i,this.l,Le,null),la(this,Le);if(bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||st.length!=0||this.h.h||(this.s=1,ee(16),v=!1),this.o=this.o&&v,!v)or(this.i,this.l,st,"[Invalid Chunked Response]"),ke(this),Kn(this);else if(0<st.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+st.length),_a(Ce),Ce.M=!0,ee(11))}}else or(this.i,this.l,st,null),la(this,st);be==4&&ke(this),this.o&&!this.J&&(be==4?Pu(this.j,this):(this.o=!1,oa(this)))}else lh(this.g),v==400&&0<st.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),ke(this),Kn(this)}}}catch{}finally{}};function bu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Au(c,p){var v=c.C,b=p.indexOf(`
`,v);return b==-1?rs:(v=Number(p.substring(v,b)),isNaN(v)?Co:(b+=1,b+v>p.length?rs:(p=p.slice(b,b+v),c.C=b+v,p)))}Ze.prototype.cancel=function(){this.J=!0,ke(this)};function oa(c){c.S=Date.now()+c.I,Su(c,c.I)}function Su(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pe(R(c.ba,c),p)}function ur(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Ze.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Tu(this.i,this.A),this.L!=2&&(sr(),ee(17)),ke(this),this.s=2,Kn(this)):Su(this,this.S-c)};function Kn(c){c.j.G==0||c.J||Pu(c.j,c)}function ke(c){ur(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,ra(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function la(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Io(v.h,c))){if(!c.K&&Io(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)gs(v),ms(v);else break t;Uo(v),ee(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=pe(R(v.Za,v),6e3));if(1>=ss(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else xi(v,11)}else if((c.K||v.g==c)&&gs(v),!nt(p))for(U=v.Da.g.parse(p),p=0;p<U.length;p++){let kt=U[p];if(v.T=kt[0],kt=kt[1],v.G==2)if(kt[0]=="c"){v.K=kt[1],v.ia=kt[2];const Ce=kt[3];Ce!=null&&(v.la=Ce,v.j.info("VER="+v.la));const be=kt[4];be!=null&&(v.Aa=be,v.j.info("SVER="+v.Aa));const Di=kt[5];Di!=null&&typeof Di=="number"&&0<Di&&(b=1.5*Di,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Le=c.g;if(Le){const ti=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var G=b.h;G.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(os(G,G.h),G.h=null))}if(b.D){const zo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(b.ya=zo,Yt(b.I,b.D,zo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var st=c;if(b.qa=Lu(b,b.J?b.ia:null,b.W),st.K){Je(b.h,st);var Pt=st,Te=b.L;Te&&(Pt.I=Te),Pt.B&&(ur(Pt),oa(Pt)),b.g=st}else Nu(b);0<v.i.length&&ps(v)}else kt[0]!="stop"&&kt[0]!="close"||xi(v,7);else v.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?xi(v,7):Lo(v):kt[0]!="noop"&&v.l&&v.l.ta(kt),v.v=0)}}sr(4)}catch{}}var wu=class{constructor(c,p){this.g=c,this.map=p}};function Si(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function as(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ss(c){return c.h?1:c.g?c.g.size:0}function Io(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function os(c,p){c.g?c.g.add(p):c.h=p}function Je(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Si.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Oo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return W(c.i)}function rh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],v=c.length,b=0;b<v;b++)p.push(c[b]);return p}p=[],v=0;for(b in c)p[v++]=c[b];return p}function ls(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const b in c)p[v++]=b;return p}}}function xo(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=ls(c),b=rh(c),U=b.length,G=0;G<U;G++)p.call(void 0,b[G],v&&v[G],c)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ah(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),U=null;if(0<=b){var G=c[v].substring(0,b);U=c[v].substring(b+1)}else G=c[v];p(G,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function ge(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ge){this.h=c.h,ca(this,c.j),this.o=c.o,this.g=c.g,cr(this,c.s),this.l=c.l;var p=c.i,v=new Ri;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),wi(this,v),this.m=c.m}else c&&(p=String(c).match(ua))?(this.h=!1,ca(this,p[1]||"",!0),this.o=Tn(p[2]||""),this.g=Tn(p[3]||"",!0),cr(this,p[4]),this.l=Tn(p[5]||"",!0),wi(this,p[6]||"",!0),this.m=Tn(p[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}ge.prototype.toString=function(){var c=[],p=this.j;p&&c.push(ha(p,Do,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ha(p,Do,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ha(v,v.charAt(0)=="/"?sh:No,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ha(v,us)),c.join("")};function cn(c){return new ge(c)}function ca(c,p,v){c.j=v?Tn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function cr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function wi(c,p,v){p instanceof Ri?(c.i=p,Cu(c.i,c.h)):(v||(p=ha(p,oh)),c.i=new Ri(p,c.h))}function Yt(c,p,v){c.i.set(p,v)}function fa(c){return Yt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ha(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,Ru),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ru(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Do=/[#\/\?@]/g,No=/[#\?:]/g,sh=/[#\?]/g,oh=/[#\?@]/g,us=/#/g;function Ri(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function bn(c){c.g||(c.g=new Map,c.h=0,c.i&&ah(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=Ri.prototype,r.add=function(c,p){bn(this),this.i=null,c=Qn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function Ci(c,p){bn(c),p=Qn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Ii(c,p){return bn(c),p=Qn(c,p),c.g.has(p)}r.forEach=function(c,p){bn(this),this.g.forEach(function(v,b){v.forEach(function(U){c.call(p,U,b,this)},this)},this)},r.na=function(){bn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let b=0;b<p.length;b++){const U=c[b];for(let G=0;G<U.length;G++)v.push(p[b])}return v},r.V=function(c){bn(this);let p=[];if(typeof c=="string")Ii(this,c)&&(p=p.concat(this.g.get(Qn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},r.set=function(c,p){return bn(this),this.i=null,c=Qn(this,c),Ii(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Mo(c,p,v){Ci(c,p),0<v.length&&(c.i=null,c.g.set(Qn(c,p),W(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var b=p[v];const G=encodeURIComponent(String(b)),st=this.V(b);for(b=0;b<st.length;b++){var U=G;st[b]!==""&&(U+="="+encodeURIComponent(String(st[b]))),c.push(U)}}return this.i=c.join("&")};function Qn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Cu(c,p){p&&!c.j&&(bn(c),c.i=null,c.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(Ci(this,b),Mo(this,U,v))},c)),c.j=p}function da(c,p){const v=new En;if(m.Image){const b=new Image;b.onload=B(An,v,"TestLoadImage: loaded",!0,p,b),b.onerror=B(An,v,"TestLoadImage: error",!1,p,b),b.onabort=B(An,v,"TestLoadImage: abort",!1,p,b),b.ontimeout=B(An,v,"TestLoadImage: timeout",!1,p,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else p(!1)}function kn(c,p){const v=new En,b=new AbortController,U=setTimeout(()=>{b.abort(),An(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:b.signal}).then(G=>{clearTimeout(U),G.ok?An(v,"TestPingServer: ok",!0,p):An(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),An(v,"TestPingServer: error",!1,p)})}function An(c,p,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function ma(){this.g=new aa}function Xn(c,p,v){const b=v||"";try{xo(c,function(U,G){let st=U;y(U)&&(st=Mn(U)),p.push(b+G+"="+encodeURIComponent(st))})}catch(U){throw p.push(b+"type="+encodeURIComponent("_badmap")),U}}function fr(c){this.l=c.Ub||null,this.j=c.eb||!1}k(fr,To),fr.prototype.g=function(){return new Oi(this.l,this.j)},fr.prototype.i=function(c){return function(){return c}}({});function Oi(c,p){oe.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Oi,oe),r=Oi.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Wn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Po(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Po(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?$n(this):Wn(this),this.readyState==3&&Po(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,$n(this))},r.Qa=function(c){this.g&&(this.response=c,$n(this))},r.ga=function(){this.g&&$n(this)};function $n(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Wn(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function Wn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function ko(c){let p="";return At(c,function(v,b){p+=b,p+=":",p+=v,p+=`\r
`}),p}function Re(c,p,v){t:{for(b in v){var b=!1;break t}b=!0}b||(v=ko(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Yt(c,p,v))}function Ht(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ht,oe);var cs=/^https?$/i,pa=["POST","PUT"];r=Ht.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gn.g(),this.v=this.o?bo(this.o):bo(Gn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(G){Iu(this,G);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const G of b.keys())v.set(G,b.get(G));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(pa,p,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,st]of v)this.g.setRequestHeader(G,st);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ga(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){Iu(this,G)}};function Iu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,fs(c),Zn(c)}function fs(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),Zn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zn(this,!0)),Ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?hs(this):this.bb())},r.bb=function(){hs(this)};function hs(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)qe(c.Ea,0,c);else if(Ft(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const st=c.Z();t:switch(st){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var v;if(!(v=p)){var b;if(b=st===0){var U=String(c.D).match(ua)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),b=!cs.test(U?U.toLowerCase():"")}v=b}if(v)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var G=2<Sn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",fs(c)}}finally{Zn(c)}}}}function Zn(c,p){if(c.g){ga(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ft(c,"ready");try{v.onreadystatechange=b}catch{}}}function ga(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),ns(p)}};function Ou(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function lh(c){const p={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(nt(c[b]))continue;var v=P(c[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=p[U]||[];p[U]=G,G.push(v)}D(p,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ya(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function ds(c){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ya("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ya("baseRetryDelayMs",5e3,c),this.cb=ya("retryDelaySeedMs",1e4,c),this.Wa=ya("forwardChannelMaxRetries",2,c),this.wa=ya("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(c&&c.concurrentRequestLimit),this.Da=new ma,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ds.prototype,r.la=8,r.G=1,r.connect=function(c,p,v,b){ee(0),this.W=c,this.H=p||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=Lu(this,null,this.W),ps(this)};function Lo(c){if(xu(c),c.G==3){var p=c.U++,v=cn(c.I);if(Yt(v,"SID",c.K),Yt(v,"RID",p),Yt(v,"TYPE","terminate"),va(c,v),p=new Ze(c,c.j,p),p.L=2,p.v=fa(cn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=Vu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),oa(p)}ku(c)}function ms(c){c.g&&(_a(c),c.g.cancel(),c.g=null)}function xu(c){ms(c),c.u&&(m.clearTimeout(c.u),c.u=null),gs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ps(c){if(!as(c.h)&&!c.s){c.s=!0;var p=c.Ga;ot||x(),pt||(ot(),pt=!0),zt.add(p,c),c.B=0}}function uh(c,p){return ss(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pe(R(c.Ga,c,p),jo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Ze(this,this.j,c);let G=this.o;if(this.S&&(G?(G=w(G),O(G,this.S)):G=this.S),this.m!==null||this.O||(U.H=G,G=null),this.P)t:{for(var p=0,v=0;v<this.i.length;v++){e:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break e}b=void 0}if(b===void 0)break;if(p+=b,4096<p){p=v;break t}if(p===4096||v===this.i.length-1){p=v+1;break t}}p=1e3}else p=1e3;p=Du(this,U,p),v=cn(this.I),Yt(v,"RID",c),Yt(v,"CVER",22),this.D&&Yt(v,"X-HTTP-Session-Id",this.D),va(this,v),G&&(this.O?p="headers="+encodeURIComponent(String(ko(G)))+"&"+p:this.m&&Re(v,this.m,G)),os(this.h,U),this.Ua&&Yt(v,"TYPE","init"),this.P?(Yt(v,"$req",p),Yt(v,"SID","null"),U.T=!0,Pn(U,v,null)):Pn(U,v,p),this.G=2}}else this.G==3&&(c?Vo(this,c):this.i.length==0||as(this.h)||Vo(this))};function Vo(c,p){var v;p?v=p.l:v=c.U++;const b=cn(c.I);Yt(b,"SID",c.K),Yt(b,"RID",v),Yt(b,"AID",c.T),va(c,b),c.m&&c.o&&Re(b,c.m,c.o),v=new Ze(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=Du(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),os(c.h,v),Pn(v,b,p)}function va(c,p){c.H&&At(c.H,function(v,b){Yt(p,b,v)}),c.l&&xo({},function(v,b){Yt(p,b,v)})}function Du(c,p,v){v=Math.min(c.i.length,v);var b=c.l?R(c.l.Na,c.l,c):null;t:{var U=c.i;let G=-1;for(;;){const st=["count="+v];G==-1?0<v?(G=U[0].g,st.push("ofs="+G)):G=0:st.push("ofs="+G);let Pt=!0;for(let Te=0;Te<v;Te++){let kt=U[Te].g;const Ce=U[Te].map;if(kt-=G,0>kt)G=Math.max(0,U[Te].g-100),Pt=!1;else try{Xn(Ce,st,"req"+kt+"_")}catch{b&&b(Ce)}}if(Pt){b=st.join("&");break t}}}return c=c.i.splice(0,v),p.D=c,b}function Nu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ot||x(),pt||(ot(),pt=!0),zt.add(p,c),c.v=0}}function Uo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pe(R(c.Fa,c),jo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pe(R(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),ms(this),Mu(this))};function _a(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Mu(c){c.g=new Ze(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=cn(c.qa);Yt(p,"RID","rpc"),Yt(p,"SID",c.K),Yt(p,"AID",c.T),Yt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Yt(p,"TO",c.ja),Yt(p,"TYPE","xmlhttp"),va(c,p),c.m&&c.o&&Re(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=fa(cn(p)),v.m=null,v.P=!0,Ai(v,c)}r.Za=function(){this.C!=null&&(this.C=null,ms(this),Uo(this),ee(19))};function gs(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Pu(c,p){var v=null;if(c.g==p){gs(c),_a(c),c.g=null;var b=2}else if(Io(c.h,p))v=p.D,Je(c.h,p),b=1;else return;if(c.G!=0){if(p.o)if(b==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var U=c.B;b=ar(),Ft(b,new Ee(b,v)),ps(c)}else Nu(c);else if(U=p.s,U==3||U==0&&0<p.X||!(b==1&&uh(c,p)||b==2&&Uo(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),U){case 1:xi(c,5);break;case 4:xi(c,10);break;case 3:xi(c,6);break;default:xi(c,2)}}}function jo(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function xi(c,p){if(c.j.info("Error code "+p),p==2){var v=R(c.fb,c),b=c.Xa;const U=!b;b=new ge(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ca(b,"https"),fa(b),U?da(b.toString(),v):kn(b.toString(),v)}else ee(2);c.G=0,c.l&&c.l.sa(p),ku(c),xu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function ku(c){if(c.G=0,c.ka=[],c.l){const p=Oo(c.h);(p.length!=0||c.i.length!=0)&&(q(c.ka,p),q(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function Lu(c,p,v){var b=v instanceof ge?cn(v):new ge(v);if(b.g!="")p&&(b.g=p+"."+b.g),cr(b,b.s);else{var U=m.location;b=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var G=new ge(null);b&&ca(G,b),p&&(G.g=p),U&&cr(G,U),v&&(G.l=v),b=G}return v=c.D,p=c.ya,v&&p&&Yt(b,v,p),Yt(b,"VER",c.la),va(c,b),b}function Vu(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Ht(new fr({eb:v})):new Ht(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uu(){}r=Uu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ys(){}ys.prototype.g=function(c,p){return new tn(c,p)};function tn(c,p){oe.call(this),this.g=new ds(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!nt(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!nt(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Jn(this)}k(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Lo(this.g)},tn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Mn(c),c=v);p.i.push(new wu(p.Ya++,c)),p.G==3&&ps(p)},tn.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,tn.aa.N.call(this)};function ju(c){Ti.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const v in p){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}k(ju,Ti);function zu(){So.call(this),this.status=1}k(zu,So);function Jn(c){this.g=c}k(Jn,Uu),Jn.prototype.ua=function(){Ft(this.g,"a")},Jn.prototype.ta=function(c){Ft(this.g,new ju(c))},Jn.prototype.sa=function(c){Ft(this.g,new zu)},Jn.prototype.ra=function(){Ft(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,WT=function(){return new ys},$T=function(){return ar()},XT=qn,Um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lr.NO_ERROR=0,lr.TIMEOUT=8,lr.HTTP_ERROR=6,nf=lr,bi.COMPLETE="complete",QT=bi,Ao.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Ml=Ao,Ht.prototype.listenOnce=Ht.prototype.L,Ht.prototype.getLastError=Ht.prototype.Ka,Ht.prototype.getLastErrorCode=Ht.prototype.Ba,Ht.prototype.getStatus=Ht.prototype.Z,Ht.prototype.getResponseJson=Ht.prototype.Oa,Ht.prototype.getResponseText=Ht.prototype.oa,Ht.prototype.send=Ht.prototype.ea,Ht.prototype.setWithCredentials=Ht.prototype.Ha,KT=Ht}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});const p0="@firebase/firestore",g0="4.7.10";/**
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
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let po="11.5.0";/**
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
 */const qa=new bp("@firebase/firestore");function Ks(){return qa.logLevel}function ht(r,...t){if(qa.logLevel<=Mt.DEBUG){const n=t.map(kp);qa.debug(`Firestore (${po}): ${r}`,...n)}}function Ga(r,...t){if(qa.logLevel<=Mt.ERROR){const n=t.map(kp);qa.error(`Firestore (${po}): ${r}`,...n)}}function zf(r,...t){if(qa.logLevel<=Mt.WARN){const n=t.map(kp);qa.warn(`Firestore (${po}): ${r}`,...n)}}function kp(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function Nt(r="Unexpected state"){const t=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: `+r;throw Ga(t),new Error(t)}function fe(r,t){r||Nt()}function Jt(r,t){return r}/**
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
 */const rt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Tt extends nr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ua{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ZT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class BI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class HI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FI{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){fe(this.o===void 0);let a=this.i;const o=g=>this.i!==a?(a=this.i,n(g)):Promise.resolve();let u=new Ua;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ua,t.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ua)}},0),h()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(a=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(fe(typeof a.accessToken=="string"),new ZT(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return fe(t===null||typeof t=="string"),new Qe(t)}}class qI{constructor(t,n,a){this.l=t,this.h=n,this.P=a,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class GI{constructor(t,n,a){this.l=t,this.h=n,this.P=a}getToken(){return Promise.resolve(new qI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YI{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Nn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){fe(this.o===void 0);const a=u=>{u.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ht("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>a(u))};const o=u=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new y0(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new y0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KI(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let a=0;a<r;a++)n[a]=Math.floor(256*Math.random());return n}/**
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
 */function QI(){return new TextEncoder}/**
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
 */class JT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=KI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<n&&(a+=t.charAt(o[u]%62))}return a}}function Ut(r,t){return r<t?-1:r>t?1:0}function jm(r,t){let n=0;for(;n<r.length&&n<t.length;){const a=r.codePointAt(n),o=t.codePointAt(n);if(a!==o){if(a<128&&o<128)return Ut(a,o);{const u=QI(),h=XI(u.encode(v0(r,n)),u.encode(v0(t,n)));return h!==0?h:Ut(a,o)}}n+=a>65535?2:1}return Ut(r.length,t.length)}function v0(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function XI(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Ut(r[n],t[n]);return Ut(r.length,t.length)}function ro(r,t,n){return r.length===t.length&&r.every((a,o)=>n(a,t[o]))}/**
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
 */const _0=-62135596800,E0=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(t){return Me.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),a=Math.floor((t-1e3*n)*E0);return new Me(n,a)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<_0)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/E0}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-_0;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{static fromTimestamp(t){return new ie(t)}static min(){return new ie(new Me(0,0))}static max(){return new ie(new Me(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const T0="__name__";class si{constructor(t,n,a){n===void 0?n=0:n>t.length&&Nt(),a===void 0?a=t.length-n:a>t.length-n&&Nt(),this.segments=t,this.offset=n,this.len=a}get length(){return this.len}isEqual(t){return si.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof si?t.forEach(a=>{n.push(a)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,a=this.limit();n<a;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const a=Math.min(t.length,n.length);for(let o=0;o<a;o++){const u=si.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Ut(t.length,n.length)}static compareSegments(t,n){const a=si.isNumericId(t),o=si.isNumericId(n);return a&&!o?-1:!a&&o?1:a&&o?si.extractNumericId(t).compare(si.extractNumericId(n)):jm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Pp.fromString(t.substring(4,t.length-2))}}class ce extends si{construct(t,n,a){return new ce(t,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const a of t){if(a.indexOf("//")>=0)throw new Tt(rt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter(o=>o.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const $I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends si{construct(t,n,a){return new He(t,n,a)}static isValidIdentifier(t){return $I.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===T0}static keyField(){return new He([T0])}static fromServerFormat(t){const n=[];let a="",o=0;const u=()=>{if(a.length===0)throw new Tt(rt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let h=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new Tt(rt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new Tt(rt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(a+=m,o++):(u(),o++)}if(u(),h)throw new Tt(rt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class wt{constructor(t){this.path=t}static fromPath(t){return new wt(ce.fromString(t))}static fromName(t){return new wt(ce.fromString(t).popFirst(5))}static empty(){return new wt(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ce.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ce.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new wt(new ce(t.slice()))}}/**
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
 */const Ql=-1;function WI(r,t){const n=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,o=ie.fromTimestamp(a===1e9?new Me(n+1,0):new Me(n,a));return new Fr(o,wt.empty(),t)}function ZI(r){return new Fr(r.readTime,r.key,Ql)}class Fr{constructor(t,n,a){this.readTime=t,this.documentKey=n,this.largestBatchId=a}static min(){return new Fr(ie.min(),wt.empty(),Ql)}static max(){return new Fr(ie.max(),wt.empty(),Ql)}}function JI(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=wt.comparator(r.documentKey,t.documentKey),n!==0?n:Ut(r.largestBatchId,t.largestBatchId))}/**
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
 */const tO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Lp(r){if(r.code!==rt.FAILED_PRECONDITION||r.message!==tO)throw r;ht("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class tt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Nt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new tt((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(a,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof tt?n:tt.resolve(n)}catch(n){return tt.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):tt.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):tt.reject(n)}static resolve(t){return new tt((n,a)=>{n(t)})}static reject(t){return new tt((n,a)=>{a(t)})}static waitFor(t){return new tt((n,a)=>{let o=0,u=0,h=!1;t.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&n()},g=>a(g))}),h=!0,u===o&&n()})}static or(t){let n=tt.resolve(!1);for(const a of t)n=n.next(o=>o?tt.resolve(o):a());return n}static forEach(t,n){const a=[];return t.forEach((o,u)=>{a.push(n.call(this,o,u))}),this.waitFor(a)}static mapArray(t,n){return new tt((a,o)=>{const u=t.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(t[y]).next(E=>{h[y]=E,++m,m===u&&a(h)},E=>o(E))}})}static doWhile(t,n){return new tt((a,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):a()};u()})}}function nO(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function cu(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Vp{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=a=>this.oe(a),this._e=a=>n.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Vp.ae=-1;/**
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
 */const Up=-1;function jp(r){return r==null}function yf(r){return r===0&&1/r==-1/0}function iO(r){return typeof r=="number"&&Number.isInteger(r)&&!yf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const tb="";function rO(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=b0(t)),t=aO(r.get(n),t);return b0(t)}function aO(r,t){let n=t;const a=r.length;for(let o=0;o<a;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case tb:n+="";break;default:n+=u}}return n}function b0(r){return r+tb+""}/**
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
 */function A0(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function go(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function eb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class ln{constructor(t,n){this.comparator=t,this.root=n||ze.EMPTY}insert(t,n){return new ln(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(t){return new ln(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ze.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(t){let n=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return n+a.left.size;o<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,a)=>(t(n,a),!1))}toString(){const t=[];return this.inorderTraversal((n,a)=>(t.push(`${n}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qc(this.root,t,this.comparator,!1)}getReverseIterator(){return new qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qc(this.root,t,this.comparator,!0)}}class qc{constructor(t,n,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?a(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ze{constructor(t,n,a,o,u){this.key=t,this.value=n,this.color=a??ze.RED,this.left=o??ze.EMPTY,this.right=u??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,a,o,u){return new ze(t??this.key,n??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,a),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let a,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return ze.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Nt();const t=this.left.check();if(t!==this.right.check())throw Nt();return t+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Nt()}get value(){throw Nt()}get color(){throw Nt()}get left(){throw Nt()}get right(){throw Nt()}copy(t,n,a,o,u){return this}insert(t,n,a){return new ze(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(t){this.comparator=t,this.data=new ln(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,a)=>(t(n),!1))}forEachInRange(t,n){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new S0(this.data.getIterator())}getIteratorFrom(t){return new S0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(a=>{n=n.add(a)}),n}isEqual(t){if(!(t instanceof Fe)||this.size!==t.size)return!1;const n=this.data.getIterator(),a=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Fe(this.comparator);return n.data=t,n}}class S0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new Bn([])}unionWith(t){let n=new Fe(He.comparator);for(const a of this.fields)n=n.add(a);for(const a of t)n=n.add(a);return new Bn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ro(this.fields,t.fields,(n,a)=>n.isEqual(a))}}/**
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
 */class sO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gi{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new sO("Invalid base64 string: "+u):u}}(t);return new gi(n)}static fromUint8Array(t){const n=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(t);return new gi(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const a=new Uint8Array(n.length);for(let o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gi.EMPTY_BYTE_STRING=new gi("");const oO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ya(r){if(fe(!!r),typeof r=="string"){let t=0;const n=oO.exec(r);if(fe(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Be(r.seconds),nanos:Be(r.nanos)}}function Be(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ao(r){return typeof r=="string"?gi.fromBase64String(r):gi.fromUint8Array(r)}/**
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
 */const nb="server_timestamp",ib="__type__",rb="__previous_value__",ab="__local_write_time__";function zp(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ib])===null||n===void 0?void 0:n.stringValue)===nb}function Bp(r){const t=r.mapValue.fields[rb];return zp(t)?Bp(t):t}function vf(r){const t=Ya(r.mapValue.fields[ab].timestampValue);return new Me(t.seconds,t.nanos)}/**
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
 */class lO{constructor(t,n,a,o,u,h,m,g,y){this.databaseId=t,this.appId=n,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y}}const _f="(default)";class Ef{constructor(t,n){this.projectId=t,this.database=n||_f}static empty(){return new Ef("","")}get isDefaultDatabase(){return this.database===_f}isEqual(t){return t instanceof Ef&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const sb="__type__",uO="__max__",Gc={mapValue:{}},ob="__vector__",zm="value";function Ka(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zp(r)?4:fO(r)?9007199254740991:cO(r)?10:11:Nt()}function yi(r,t){if(r===t)return!0;const n=Ka(r);if(n!==Ka(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return vf(r).isEqual(vf(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ya(o.timestampValue),m=Ya(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return ao(o.bytesValue).isEqual(ao(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return Be(o.geoPointValue.latitude)===Be(u.geoPointValue.latitude)&&Be(o.geoPointValue.longitude)===Be(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Be(o.integerValue)===Be(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Be(o.doubleValue),m=Be(u.doubleValue);return h===m?yf(h)===yf(m):isNaN(h)&&isNaN(m)}return!1}(r,t);case 9:return ro(r.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(A0(h)!==A0(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!yi(h[g],m[g])))return!1;return!0}(r,t);default:return Nt()}}function Xl(r,t){return(r.values||[]).find(n=>yi(n,t))!==void 0}function so(r,t){if(r===t)return 0;const n=Ka(r),a=Ka(t);if(n!==a)return Ut(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ut(r.booleanValue,t.booleanValue);case 2:return function(u,h){const m=Be(u.integerValue||u.doubleValue),g=Be(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return w0(r.timestampValue,t.timestampValue);case 4:return w0(vf(r),vf(t));case 5:return jm(r.stringValue,t.stringValue);case 6:return function(u,h){const m=ao(u),g=ao(h);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let y=0;y<m.length&&y<g.length;y++){const E=Ut(m[y],g[y]);if(E!==0)return E}return Ut(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,h){const m=Ut(Be(u.latitude),Be(h.latitude));return m!==0?m:Ut(Be(u.longitude),Be(h.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return R0(r.arrayValue,t.arrayValue);case 10:return function(u,h){var m,g,y,E;const S=u.fields||{},R=h.fields||{},B=(m=S[zm])===null||m===void 0?void 0:m.arrayValue,k=(g=R[zm])===null||g===void 0?void 0:g.arrayValue,W=Ut(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=k==null?void 0:k.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:R0(B,k)}(r.mapValue,t.mapValue);case 11:return function(u,h){if(u===Gc.mapValue&&h===Gc.mapValue)return 0;if(u===Gc.mapValue)return 1;if(h===Gc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const R=jm(g[S],E[S]);if(R!==0)return R;const B=so(m[g[S]],y[E[S]]);if(B!==0)return B}return Ut(g.length,E.length)}(r.mapValue,t.mapValue);default:throw Nt()}}function w0(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ut(r,t);const n=Ya(r),a=Ya(t),o=Ut(n.seconds,a.seconds);return o!==0?o:Ut(n.nanos,a.nanos)}function R0(r,t){const n=r.values||[],a=t.values||[];for(let o=0;o<n.length&&o<a.length;++o){const u=so(n[o],a[o]);if(u)return u}return Ut(n.length,a.length)}function oo(r){return Bm(r)}function Bm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const a=Ya(n);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ao(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return wt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let a="[",o=!0;for(const u of n.values||[])o?o=!1:a+=",",a+=Bm(u);return a+"]"}(r.arrayValue):"mapValue"in r?function(n){const a=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const h of a)u?u=!1:o+=",",o+=`${h}:${Bm(n.fields[h])}`;return o+"}"}(r.mapValue):Nt()}function rf(r){switch(Ka(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Bp(r);return t?16+rf(t):16;case 5:return 2*r.stringValue.length;case 6:return ao(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((o,u)=>o+rf(u),0)}(r.arrayValue);case 10:case 11:return function(a){let o=0;return go(a.fields,(u,h)=>{o+=u.length+rf(h)}),o}(r.mapValue);default:throw Nt()}}function Hm(r){return!!r&&"integerValue"in r}function Hp(r){return!!r&&"arrayValue"in r}function af(r){return!!r&&"mapValue"in r}function cO(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[sb])===null||n===void 0?void 0:n.stringValue)===ob}function Ll(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return go(r.mapValue.fields,(n,a)=>t.mapValue.fields[n]=Ll(a)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ll(r.arrayValue.values[n]);return t}return Object.assign({},r)}function fO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===uO}/**
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
 */class zn{constructor(t){this.value=t}static empty(){return new zn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let a=0;a<t.length-1;++a)if(n=(n.mapValue.fields||{})[t.get(a)],!af(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ll(n)}setAll(t){let n=He.emptyPath(),a={},o=[];t.forEach((h,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,a,o),a={},o=[],n=m.popLast()}h?a[m.lastSegment()]=Ll(h):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,a,o)}delete(t){const n=this.field(t.popLast());af(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=n.mapValue.fields[t.get(a)];af(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(a)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,a){go(n,(o,u)=>t[o]=u);for(const o of a)delete t[o]}clone(){return new zn(Ll(this.value))}}function lb(r){const t=[];return go(r.fields,(n,a)=>{const o=new He([n]);if(af(a)){const u=lb(a.mapValue).fields;if(u.length===0)t.push(o);else for(const h of u)t.push(o.child(h))}else t.push(o)}),new Bn(t)}/**
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
 */class jn{constructor(t,n,a,o,u,h,m){this.key=t,this.documentType=n,this.version=a,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(t){return new jn(t,0,ie.min(),ie.min(),ie.min(),zn.empty(),0)}static newFoundDocument(t,n,a,o){return new jn(t,1,n,ie.min(),a,o,0)}static newNoDocument(t,n){return new jn(t,2,n,ie.min(),ie.min(),zn.empty(),0)}static newUnknownDocument(t,n){return new jn(t,3,n,ie.min(),ie.min(),zn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof jn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new jn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tf{constructor(t,n){this.position=t,this.inclusive=n}}function C0(r,t,n){let a=0;for(let o=0;o<r.position.length;o++){const u=t[o],h=r.position[o];if(u.field.isKeyField()?a=wt.comparator(wt.fromName(h.referenceValue),n.key):a=so(h,n.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function I0(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!yi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class bf{constructor(t,n="asc"){this.field=t,this.dir=n}}function hO(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ub{}class Ne extends ub{constructor(t,n,a){super(),this.field=t,this.op=n,this.value=a}static create(t,n,a){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,a):new mO(t,n,a):n==="array-contains"?new yO(t,a):n==="in"?new vO(t,a):n==="not-in"?new _O(t,a):n==="array-contains-any"?new EO(t,a):new Ne(t,n,a)}static createKeyFieldInFilter(t,n,a){return n==="in"?new pO(t,a):new gO(t,a)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(so(n,this.value)):n!==null&&Ka(this.value)===Ka(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Nt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qr extends ub{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new qr(t,n)}matches(t){return cb(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function cb(r){return r.op==="and"}function fb(r){return dO(r)&&cb(r)}function dO(r){for(const t of r.filters)if(t instanceof qr)return!1;return!0}function Fm(r){if(r instanceof Ne)return r.field.canonicalString()+r.op.toString()+oo(r.value);if(fb(r))return r.filters.map(t=>Fm(t)).join(",");{const t=r.filters.map(n=>Fm(n)).join(",");return`${r.op}(${t})`}}function hb(r,t){return r instanceof Ne?function(a,o){return o instanceof Ne&&a.op===o.op&&a.field.isEqual(o.field)&&yi(a.value,o.value)}(r,t):r instanceof qr?function(a,o){return o instanceof qr&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce((u,h,m)=>u&&hb(h,o.filters[m]),!0):!1}(r,t):void Nt()}function db(r){return r instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(r):r instanceof qr?function(n){return n.op.toString()+" {"+n.getFilters().map(db).join(" ,")+"}"}(r):"Filter"}class mO extends Ne{constructor(t,n,a){super(t,n,a),this.key=wt.fromName(a.referenceValue)}matches(t){const n=wt.comparator(t.key,this.key);return this.matchesComparison(n)}}class pO extends Ne{constructor(t,n){super(t,"in",n),this.keys=mb("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class gO extends Ne{constructor(t,n){super(t,"not-in",n),this.keys=mb("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function mb(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(a=>wt.fromName(a.referenceValue))}class yO extends Ne{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Hp(n)&&Xl(n.arrayValue,this.value)}}class vO extends Ne{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class _O extends Ne{constructor(t,n){super(t,"not-in",n)}matches(t){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Xl(this.value.arrayValue,n)}}class EO extends Ne{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Hp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(a=>Xl(this.value.arrayValue,a))}}/**
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
 */class TO{constructor(t,n=null,a=[],o=[],u=null,h=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function O0(r,t=null,n=[],a=[],o=null,u=null,h=null){return new TO(r,t,n,a,o,u,h)}function Fp(r){const t=Jt(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(a=>Fm(a)).join(","),n+="|ob:",n+=t.orderBy.map(a=>function(u){return u.field.canonicalString()+u.dir}(a)).join(","),jp(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(a=>oo(a)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(a=>oo(a)).join(",")),t.le=n}return t.le}function qp(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!hO(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!hb(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!I0(r.startAt,t.startAt)&&I0(r.endAt,t.endAt)}/**
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
 */class Bf{constructor(t,n=null,a=[],o=[],u=null,h="F",m=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function bO(r,t,n,a,o,u,h,m){return new Bf(r,t,n,a,o,u,h,m)}function AO(r){return new Bf(r)}function x0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function SO(r){return r.collectionGroup!==null}function Vl(r){const t=Jt(r);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Fe(He.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new bf(u,a))}),n.has(He.keyField().canonicalString())||t.he.push(new bf(He.keyField(),a))}return t.he}function ja(r){const t=Jt(r);return t.Pe||(t.Pe=wO(t,Vl(r))),t.Pe}function wO(r,t){if(r.limitType==="F")return O0(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new bf(o.field,u)});const n=r.endAt?new Tf(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new Tf(r.startAt.position,r.startAt.inclusive):null;return O0(r.path,r.collectionGroup,t,r.filters,r.limit,n,a)}}function qm(r,t,n){return new Bf(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function pb(r,t){return qp(ja(r),ja(t))&&r.limitType===t.limitType}function gb(r){return`${Fp(ja(r))}|lt:${r.limitType}`}function xl(r){return`Query(target=${function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map(o=>db(o)).join(", ")}]`),jp(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map(o=>oo(o)).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map(o=>oo(o)).join(",")),`Target(${a})`}(ja(r))}; limitType=${r.limitType})`}function Gp(r,t){return t.isFoundDocument()&&function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):wt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)}(r,t)&&function(a,o){for(const u of Vl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(a,o){return!(a.startAt&&!function(h,m,g){const y=C0(h,m,g);return h.inclusive?y<=0:y<0}(a.startAt,Vl(a),o)||a.endAt&&!function(h,m,g){const y=C0(h,m,g);return h.inclusive?y>=0:y>0}(a.endAt,Vl(a),o))}(r,t)}function RO(r){return(t,n)=>{let a=!1;for(const o of Vl(r)){const u=CO(o,t,n);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function CO(r,t,n){const a=r.field.isKeyField()?wt.comparator(t.key,n.key):function(u,h,m){const g=h.data.field(u),y=m.data.field(u);return g!==null&&y!==null?so(g,y):Nt()}(r.field,t,n);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return Nt()}}/**
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
 */class Za{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[n]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){go(this.inner,(n,a)=>{for(const[o,u]of a)t(o,u)})}isEmpty(){return eb(this.inner)}size(){return this.innerSize}}/**
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
 */const IO=new ln(wt.comparator);function Af(){return IO}const yb=new ln(wt.comparator);function Yc(...r){let t=yb;for(const n of r)t=t.insert(n.key,n);return t}function vb(r){let t=yb;return r.forEach((n,a)=>t=t.insert(n,a.overlayedDocument)),t}function La(){return Ul()}function _b(){return Ul()}function Ul(){return new Za(r=>r.toString(),(r,t)=>r.isEqual(t))}const OO=new ln(wt.comparator),xO=new Fe(wt.comparator);function Xe(...r){let t=xO;for(const n of r)t=t.add(n);return t}const DO=new Fe(Ut);function NO(){return DO}/**
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
 */function Yp(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yf(t)?"-0":t}}function Eb(r){return{integerValue:""+r}}function MO(r,t){return iO(t)?Eb(t):Yp(r,t)}/**
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
 */class Hf{constructor(){this._=void 0}}function PO(r,t,n){return r instanceof Sf?function(o,u){const h={fields:{[ib]:{stringValue:nb},[ab]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&zp(u)&&(u=Bp(u)),u&&(h.fields[rb]=u),{mapValue:h}}(n,t):r instanceof $l?bb(r,t):r instanceof Wl?Ab(r,t):function(o,u){const h=Tb(o,u),m=D0(h)+D0(o.Ie);return Hm(h)&&Hm(o.Ie)?Eb(m):Yp(o.serializer,m)}(r,t)}function kO(r,t,n){return r instanceof $l?bb(r,t):r instanceof Wl?Ab(r,t):n}function Tb(r,t){return r instanceof wf?function(a){return Hm(a)||function(u){return!!u&&"doubleValue"in u}(a)}(t)?t:{integerValue:0}:null}class Sf extends Hf{}class $l extends Hf{constructor(t){super(),this.elements=t}}function bb(r,t){const n=Sb(t);for(const a of r.elements)n.some(o=>yi(o,a))||n.push(a);return{arrayValue:{values:n}}}class Wl extends Hf{constructor(t){super(),this.elements=t}}function Ab(r,t){let n=Sb(t);for(const a of r.elements)n=n.filter(o=>!yi(o,a));return{arrayValue:{values:n}}}class wf extends Hf{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function D0(r){return Be(r.integerValue||r.doubleValue)}function Sb(r){return Hp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function LO(r,t){return r.field.isEqual(t.field)&&function(a,o){return a instanceof $l&&o instanceof $l||a instanceof Wl&&o instanceof Wl?ro(a.elements,o.elements,yi):a instanceof wf&&o instanceof wf?yi(a.Ie,o.Ie):a instanceof Sf&&o instanceof Sf}(r.transform,t.transform)}class VO{constructor(t,n){this.version=t,this.transformResults=n}}class di{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new di}static exists(t){return new di(void 0,t)}static updateTime(t){return new di(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sf(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ff{}function wb(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Cb(r.key,di.none()):new fu(r.key,r.data,di.none());{const n=r.data,a=zn.empty();let o=new Fe(He.comparator);for(let u of t.fields)if(!o.has(u)){let h=n.field(u);h===null&&u.length>1&&(u=u.popLast(),h=n.field(u)),h===null?a.delete(u):a.set(u,h),o=o.add(u)}return new Ja(r.key,a,new Bn(o.toArray()),di.none())}}function UO(r,t,n){r instanceof fu?function(o,u,h){const m=o.value.clone(),g=M0(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Ja?function(o,u,h){if(!sf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=M0(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(Rb(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,t,n)}function jl(r,t,n,a){return r instanceof fu?function(u,h,m,g){if(!sf(u.precondition,h))return m;const y=u.value.clone(),E=P0(u.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,t,n,a):r instanceof Ja?function(u,h,m,g){if(!sf(u.precondition,h))return m;const y=P0(u.fieldTransforms,g,h),E=h.data;return E.setAll(Rb(u)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,t,n,a):function(u,h,m){return sf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,t,n)}function jO(r,t){let n=null;for(const a of r.fieldTransforms){const o=t.data.field(a.field),u=Tb(a.transform,o||null);u!=null&&(n===null&&(n=zn.empty()),n.set(a.field,u))}return n||null}function N0(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&ro(a,o,(u,h)=>LO(u,h))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class fu extends Ff{constructor(t,n,a,o=[]){super(),this.key=t,this.value=n,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ja extends Ff{constructor(t,n,a,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Rb(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const a=r.data.field(n);t.set(n,a)}}),t}function M0(r,t,n){const a=new Map;fe(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],h=u.transform,m=t.data.field(u.field);a.set(u.field,kO(h,m,n[o]))}return a}function P0(r,t,n){const a=new Map;for(const o of r){const u=o.transform,h=n.data.field(o.field);a.set(o.field,PO(u,h,t))}return a}class Cb extends Ff{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zO extends Ff{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BO{constructor(t,n,a,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,n){const a=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&UO(u,t,a[o])}}applyToLocalView(t,n){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(n=jl(a,t,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(n=jl(a,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const a=_b();return this.mutations.forEach(o=>{const u=t.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=n.has(o.key)?null:m;const g=wb(h,m);g!==null&&a.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ie.min())}),a}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Xe())}isEqual(t){return this.batchId===t.batchId&&ro(this.mutations,t.mutations,(n,a)=>N0(n,a))&&ro(this.baseMutations,t.baseMutations,(n,a)=>N0(n,a))}}class Kp{constructor(t,n,a,o){this.batch=t,this.commitVersion=n,this.mutationResults=a,this.docVersions=o}static from(t,n,a){fe(t.mutations.length===a.length);let o=function(){return OO}();const u=t.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,a[h].version);return new Kp(t,n,a,o)}}/**
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
 */class HO{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var _e,Vt;function FO(r){switch(r){case rt.OK:return Nt();case rt.CANCELLED:case rt.UNKNOWN:case rt.DEADLINE_EXCEEDED:case rt.RESOURCE_EXHAUSTED:case rt.INTERNAL:case rt.UNAVAILABLE:case rt.UNAUTHENTICATED:return!1;case rt.INVALID_ARGUMENT:case rt.NOT_FOUND:case rt.ALREADY_EXISTS:case rt.PERMISSION_DENIED:case rt.FAILED_PRECONDITION:case rt.ABORTED:case rt.OUT_OF_RANGE:case rt.UNIMPLEMENTED:case rt.DATA_LOSS:return!0;default:return Nt()}}function qO(r){if(r===void 0)return Ga("GRPC error has no .code"),rt.UNKNOWN;switch(r){case _e.OK:return rt.OK;case _e.CANCELLED:return rt.CANCELLED;case _e.UNKNOWN:return rt.UNKNOWN;case _e.DEADLINE_EXCEEDED:return rt.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return rt.RESOURCE_EXHAUSTED;case _e.INTERNAL:return rt.INTERNAL;case _e.UNAVAILABLE:return rt.UNAVAILABLE;case _e.UNAUTHENTICATED:return rt.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return rt.INVALID_ARGUMENT;case _e.NOT_FOUND:return rt.NOT_FOUND;case _e.ALREADY_EXISTS:return rt.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return rt.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return rt.FAILED_PRECONDITION;case _e.ABORTED:return rt.ABORTED;case _e.OUT_OF_RANGE:return rt.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return rt.UNIMPLEMENTED;case _e.DATA_LOSS:return rt.DATA_LOSS;default:return Nt()}}(Vt=_e||(_e={}))[Vt.OK=0]="OK",Vt[Vt.CANCELLED=1]="CANCELLED",Vt[Vt.UNKNOWN=2]="UNKNOWN",Vt[Vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vt[Vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vt[Vt.NOT_FOUND=5]="NOT_FOUND",Vt[Vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vt[Vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vt[Vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vt[Vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vt[Vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vt[Vt.ABORTED=10]="ABORTED",Vt[Vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vt[Vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vt[Vt.INTERNAL=13]="INTERNAL",Vt[Vt.UNAVAILABLE=14]="UNAVAILABLE",Vt[Vt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Pp([4294967295,4294967295],0);class GO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Gm(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function YO(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function KO(r,t){return Gm(r,t.toTimestamp())}function eo(r){return fe(!!r),ie.fromTimestamp(function(n){const a=Ya(n);return new Me(a.seconds,a.nanos)}(r))}function Ib(r,t){return Ym(r,t).canonicalString()}function Ym(r,t){const n=function(o){return new ce(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function QO(r){const t=ce.fromString(r);return fe(nx(t)),t}function Km(r,t){return Ib(r.databaseId,t.path)}function XO(r){const t=QO(r);return t.length===4?ce.emptyPath():WO(t)}function $O(r){return new ce(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function WO(r){return fe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function k0(r,t,n){return{name:Km(r,t),fields:n.value.mapValue.fields}}function ZO(r,t){let n;if(t instanceof fu)n={update:k0(r,t.key,t.value)};else if(t instanceof Cb)n={delete:Km(r,t.key)};else if(t instanceof Ja)n={update:k0(r,t.key,t.data),updateMask:ex(t.fieldMask)};else{if(!(t instanceof zO))return Nt();n={verify:Km(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(a=>function(u,h){const m=h.transform;if(m instanceof Sf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $l)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Wl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof wf)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw Nt()}(0,a))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:KO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Nt()}(r,t.precondition)),n}function JO(r,t){return r&&r.length>0?(fe(t!==void 0),r.map(n=>function(o,u){let h=o.updateTime?eo(o.updateTime):eo(u);return h.isEqual(ie.min())&&(h=eo(u)),new VO(h,o.transformResults||[])}(n,t))):[]}function tx(r){let t=XO(r.parent);const n=r.structuredQuery,a=n.from?n.from.length:0;let o=null;if(a>0){fe(a===1);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(S){const R=Ob(S);return R instanceof qr&&fb(R)?R.getFilters():[R]}(n.where));let h=[];n.orderBy&&(h=function(S){return S.map(R=>function(k){return new bf(Qs(k.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(n.orderBy));let m=null;n.limit&&(m=function(S){let R;return R=typeof S=="object"?S.value:S,jp(R)?null:R}(n.limit));let g=null;n.startAt&&(g=function(S){const R=!!S.before,B=S.values||[];return new Tf(B,R)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const R=!S.before,B=S.values||[];return new Tf(B,R)}(n.endAt)),bO(t,o,h,u,m,"F",g,y)}function Ob(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=Qs(n.unaryFilter.field);return Ne.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Qs(n.unaryFilter.field);return Ne.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Qs(n.unaryFilter.field);return Ne.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Qs(n.unaryFilter.field);return Ne.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Nt()}}(r):r.fieldFilter!==void 0?function(n){return Ne.create(Qs(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Nt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return qr.create(n.compositeFilter.filters.map(a=>Ob(a)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Nt()}}(n.compositeFilter.op))}(r):Nt()}function Qs(r){return He.fromServerFormat(r.fieldPath)}function ex(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function nx(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ix{constructor(t){this.Tt=t}}function rx(r){const t=tx({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?qm(t,t.limit,"L"):t}/**
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
 */class ax{constructor(){this.Tn=new sx}addToCollectionParentIndex(t,n){return this.Tn.add(n),tt.resolve()}getCollectionParents(t,n){return tt.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return tt.resolve()}deleteFieldIndex(t,n){return tt.resolve()}deleteAllFieldIndexes(t){return tt.resolve()}createTargetIndexes(t,n){return tt.resolve()}getDocumentsMatchingTarget(t,n){return tt.resolve(null)}getIndexType(t,n){return tt.resolve(0)}getFieldIndexes(t,n){return tt.resolve([])}getNextCollectionGroupToUpdate(t){return tt.resolve(null)}getMinOffset(t,n){return tt.resolve(Fr.min())}getMinOffsetFromCollectionGroup(t,n){return tt.resolve(Fr.min())}updateCollectionGroup(t,n,a){return tt.resolve()}updateIndexEntries(t,n){return tt.resolve()}}class sx{constructor(){this.index={}}add(t){const n=t.lastSegment(),a=t.popLast(),o=this.index[n]||new Fe(ce.comparator),u=!o.has(a);return this.index[n]=o.add(a),u}has(t){const n=t.lastSegment(),a=t.popLast(),o=this.index[n];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Fe(ce.comparator)).toArray()}}/**
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
 */const L0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xb=41943040;class sn{static withCacheSize(t){return new sn(t,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
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
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(xb,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
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
 */class lo{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new lo(0)}static Kn(){return new lo(-1)}}/**
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
 */const V0="LruGarbageCollector",ox=1048576;function U0([r,t],[n,a]){const o=Ut(r,n);return o===0?Ut(t,a):o}class lx{constructor(t){this.Hn=t,this.buffer=new Fe(U0),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();U0(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ux{constructor(t,n,a){this.garbageCollector=t,this.asyncQueue=n,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ht(V0,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){cu(n)?ht(V0,"Ignoring IndexedDB error during garbage collection: ",n):await Lp(n)}await this.er(3e5)})}}class cx{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(a=>Math.floor(n/100*a))}nthSequenceNumber(t,n){if(n===0)return tt.resolve(Vp.ae);const a=new lx(n);return this.tr.forEachTarget(t,o=>a.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>a.Zn(o))).next(()=>a.maxValue)}removeTargets(t,n,a){return this.tr.removeTargets(t,n,a)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ht("LruGarbageCollector","Garbage collection skipped; disabled"),tt.resolve(L0)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(ht("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),L0):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let a,o,u,h,m,g,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ht("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(a=S,m=Date.now(),this.removeTargets(t,a,n))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(t,a))).next(S=>(y=Date.now(),Ks()<=Mt.DEBUG&&ht("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),tt.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function fx(r,t){return new cx(r,t)}/**
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
 */class hx{constructor(){this.changes=new Za(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,jn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?tt.resolve(a):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class dx{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class mx{constructor(t,n,a,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,n){let a=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(a=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(a!==null&&jl(a.mutation,o,Bn.empty(),Me.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.getLocalViewOfDocuments(t,a,Xe()).next(()=>a))}getLocalViewOfDocuments(t,n,a=Xe()){const o=La();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,a).next(u=>{let h=Yc();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(t,n){const a=La();return this.populateOverlays(t,a,n).next(()=>this.computeViews(t,n,a,Xe()))}populateOverlays(t,n,a){const o=[];return a.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((h,m)=>{n.set(h,m)})})}computeViews(t,n,a,o){let u=Af();const h=Ul(),m=function(){return Ul()}();return n.forEach((g,y)=>{const E=a.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ja)?u=u.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),jl(E.mutation,y,E.mutation.getFieldMask(),Me.now())):h.set(y.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((y,E)=>h.set(y,E)),n.forEach((y,E)=>{var S;return m.set(y,new dx(E,(S=h.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(t,n){const a=Ul();let o=new ln((h,m)=>h-m),u=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(h=>{for(const m of h)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let E=a.get(g)||Bn.empty();E=m.applyToLocalView(y,E),a.set(g,E);const S=(o.get(m.batchId)||Xe()).add(g);o=o.insert(m.batchId,S)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,E=g.value,S=_b();E.forEach(R=>{if(!u.has(R)){const B=wb(n.get(R),a.get(R));B!==null&&S.set(R,B),u=u.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(t,y,S))}return tt.waitFor(h)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,n,a,o){return function(h){return wt.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):SO(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,a,o):this.getDocumentsMatchingCollectionQuery(t,n,a,o)}getNextDocuments(t,n,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,a,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,a.largestBatchId,o-u.size):tt.resolve(La());let m=Ql,g=u;return h.next(y=>tt.forEach(y,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?tt.resolve():this.remoteDocumentCache.getEntry(t,E).next(R=>{g=g.insert(E,R)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,g,y,Xe())).next(E=>({batchId:m,changes:vb(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new wt(n)).next(a=>{let o=Yc();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,a,o){const u=n.collectionGroup;let h=Yc();return this.indexManager.getCollectionParents(t,u).next(m=>tt.forEach(m,g=>{const y=function(S,R){return new Bf(R,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,a,o).next(E=>{E.forEach((S,R)=>{h=h.insert(S,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(t,n,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,a.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,a,u,o))).next(h=>{u.forEach((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,jn.newInvalidDocument(E)))});let m=Yc();return h.forEach((g,y)=>{const E=u.get(g);E!==void 0&&jl(E.mutation,y,Bn.empty(),Me.now()),Gp(n,y)&&(m=m.insert(g,y))}),m})}}/**
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
 */class px{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return tt.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:eo(o.createTime)}}(n)),tt.resolve()}getNamedQuery(t,n){return tt.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:rx(o.bundledQuery),readTime:eo(o.readTime)}}(n)),tt.resolve()}}/**
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
 */class gx{constructor(){this.overlays=new ln(wt.comparator),this.Rr=new Map}getOverlay(t,n){return tt.resolve(this.overlays.get(n))}getOverlays(t,n){const a=La();return tt.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&a.set(o,u)})).next(()=>a)}saveOverlays(t,n,a){return a.forEach((o,u)=>{this.Et(t,n,u)}),tt.resolve()}removeOverlaysForBatchId(t,n,a){const o=this.Rr.get(a);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(a)),tt.resolve()}getOverlaysForCollection(t,n,a){const o=La(),u=n.length+1,h=new wt(n.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>a&&o.set(g.getKey(),g)}return tt.resolve(o)}getOverlaysForCollectionGroup(t,n,a,o){let u=new ln((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>a){let E=u.get(y.largestBatchId);E===null&&(E=La(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=La(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return tt.resolve(m)}Et(t,n,a){const o=this.overlays.get(a.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(a.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(a.key,new HO(n,a));let u=this.Rr.get(n);u===void 0&&(u=Xe(),this.Rr.set(n,u)),this.Rr.set(n,u.add(a.key))}}/**
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
 */class yx{constructor(){this.sessionToken=gi.EMPTY_BYTE_STRING}getSessionToken(t){return tt.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,tt.resolve()}}/**
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
 */class Qp{constructor(){this.Vr=new Fe(De.mr),this.gr=new Fe(De.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const a=new De(t,n);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,n){t.forEach(a=>this.addReference(a,n))}removeReference(t,n){this.wr(new De(t,n))}Sr(t,n){t.forEach(a=>this.removeReference(a,n))}br(t){const n=new wt(new ce([])),a=new De(n,t),o=new De(n,t+1),u=[];return this.gr.forEachInRange([a,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new wt(new ce([])),a=new De(n,t),o=new De(n,t+1);let u=Xe();return this.gr.forEachInRange([a,o],h=>{u=u.add(h.key)}),u}containsKey(t){const n=new De(t,0),a=this.Vr.firstAfterOrEqual(n);return a!==null&&t.isEqual(a.key)}}class De{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return wt.comparator(t.key,n.key)||Ut(t.Cr,n.Cr)}static pr(t,n){return Ut(t.Cr,n.Cr)||wt.comparator(t.key,n.key)}}/**
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
 */class vx{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Fe(De.mr)}checkEmpty(t){return tt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,a,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new BO(u,n,a,o);this.mutationQueue.push(h);for(const m of o)this.Mr=this.Mr.add(new De(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return tt.resolve(h)}lookupMutationBatch(t,n){return tt.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const a=n+1,o=this.Nr(a),u=o<0?0:o;return tt.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return tt.resolve(this.mutationQueue.length===0?Up:this.Fr-1)}getAllMutationBatches(t){return tt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const a=new De(n,0),o=new De(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([a,o],h=>{const m=this.Or(h.Cr);u.push(m)}),tt.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let a=new Fe(Ut);return n.forEach(o=>{const u=new De(o,0),h=new De(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{a=a.add(m.Cr)})}),tt.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,n){const a=n.path,o=a.length+1;let u=a;wt.isDocumentKey(u)||(u=u.child(""));const h=new De(new wt(u),0);let m=new Fe(Ut);return this.Mr.forEachWhile(g=>{const y=g.key.path;return!!a.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Cr)),!0)},h),tt.resolve(this.Br(m))}Br(t){const n=[];return t.forEach(a=>{const o=this.Or(a);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){fe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return tt.forEach(n.mutations,o=>{const u=new De(o.key,n.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,n){const a=new De(n,0),o=this.Mr.firstAfterOrEqual(a);return tt.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,tt.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _x{constructor(t){this.kr=t,this.docs=function(){return new ln(wt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const a=n.key,o=this.docs.get(a),u=o?o.size:0,h=this.kr(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const a=this.docs.get(n);return tt.resolve(a?a.document.mutableCopy():jn.newInvalidDocument(n))}getEntries(t,n){let a=Af();return n.forEach(o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():jn.newInvalidDocument(o))}),tt.resolve(a)}getDocumentsMatchingQuery(t,n,a,o){let u=Af();const h=n.path,m=new wt(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||JI(ZI(E),a)<=0||(o.has(E.key)||Gp(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return tt.resolve(u)}getAllFromCollectionGroup(t,n,a,o){Nt()}qr(t,n){return tt.forEach(this.docs,a=>n(a))}newChangeBuffer(t){return new Ex(this)}getSize(t){return tt.resolve(this.size)}}class Ex extends hx{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((a,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(a)}),tt.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class Tx{constructor(t){this.persistence=t,this.Qr=new Za(n=>Fp(n),qp),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Qp,this.targetCount=0,this.Kr=lo.Un()}forEachTarget(t,n){return this.Qr.forEach((a,o)=>n(o)),tt.resolve()}getLastRemoteSnapshotVersion(t){return tt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return tt.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),tt.resolve(this.highestTargetId)}setTargetsMetadata(t,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this.$r&&(this.$r=n),tt.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new lo(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,tt.resolve()}updateTargetData(t,n){return this.zn(n),tt.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,tt.resolve()}removeTargets(t,n,a){let o=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=n&&a.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),tt.waitFor(u).next(()=>o)}getTargetCount(t){return tt.resolve(this.targetCount)}getTargetData(t,n){const a=this.Qr.get(n)||null;return tt.resolve(a)}addMatchingKeys(t,n,a){return this.Ur.yr(n,a),tt.resolve()}removeMatchingKeys(t,n,a){this.Ur.Sr(n,a);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(h=>{u.push(o.markPotentiallyOrphaned(t,h))}),tt.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),tt.resolve()}getMatchingKeysForTargetId(t,n){const a=this.Ur.vr(n);return tt.resolve(a)}containsKey(t,n){return tt.resolve(this.Ur.containsKey(n))}}/**
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
 */class Db{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Vp(0),this.zr=!1,this.zr=!0,this.jr=new yx,this.referenceDelegate=t(this),this.Hr=new Tx(this),this.indexManager=new ax,this.remoteDocumentCache=function(o){return new _x(o)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new ix(n),this.Yr=new px(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new gx,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let a=this.Wr[t.toKey()];return a||(a=new vx(n,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,a){ht("MemoryPersistence","Starting transaction:",t);const o=new bx(this.Gr.next());return this.referenceDelegate.Zr(),a(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return tt.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,n)))}}class bx extends eO{constructor(t){super(),this.currentSequenceNumber=t}}class Xp{constructor(t){this.persistence=t,this.ti=new Qp,this.ni=null}static ri(t){return new Xp(t)}get ii(){if(this.ni)return this.ni;throw Nt()}addReference(t,n,a){return this.ti.addReference(a,n),this.ii.delete(a.toString()),tt.resolve()}removeReference(t,n,a){return this.ti.removeReference(a,n),this.ii.add(a.toString()),tt.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),tt.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>a.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tt.forEach(this.ii,a=>{const o=wt.fromPath(a);return this.si(t,o).next(u=>{u||n.removeEntry(o,ie.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(a=>{a?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return tt.or([()=>tt.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Rf{constructor(t,n){this.persistence=t,this.oi=new Za(a=>rO(a.path),(a,o)=>a.isEqual(o)),this.garbageCollector=fx(this,n)}static ri(t,n){return new Rf(t,n)}Zr(){}Xr(t){return tt.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>n.next(o=>a+o))}sr(t){let n=0;return this.rr(t,a=>{n++}).next(()=>n)}rr(t,n){return tt.forEach(this.oi,(a,o)=>this.ar(t,a,o).next(u=>u?tt.resolve():n(o)))}removeTargets(t,n,a){return this.persistence.getTargetCache().removeTargets(t,n,a)}removeOrphanedDocuments(t,n){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,h=>this.ar(t,h,n).next(m=>{m||(a++,u.removeEntry(h,ie.min()))})).next(()=>u.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),tt.resolve()}removeTarget(t,n){const a=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,n,a){return this.oi.set(a,t.currentSequenceNumber),tt.resolve()}removeReference(t,n,a){return this.oi.set(a,t.currentSequenceNumber),tt.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),tt.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=rf(t.data.value)),n}ar(t,n,a){return tt.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return tt.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class $p{constructor(t,n,a,o){this.targetId=t,this.fromCache=n,this.Hi=a,this.Ji=o}static Yi(t,n){let a=Xe(),o=Xe();for(const u of n.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new $p(t,n.fromCache,a,o)}}/**
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
 */class Ax{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Sx{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return oR()?8:nO($e())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,a,o){const u={result:null};return this.rs(t,n).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(t,n,o,a).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new Ax;return this._s(t,n,h).next(m=>{if(u.result=m,this.Xi)return this.us(t,n,h,m.size)})}).next(()=>u.result)}us(t,n,a,o){return a.documentReadCount<this.es?(Ks()<=Mt.DEBUG&&ht("QueryEngine","SDK will not create cache indexes for query:",xl(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),tt.resolve()):(Ks()<=Mt.DEBUG&&ht("QueryEngine","Query:",xl(n),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.ts*o?(Ks()<=Mt.DEBUG&&ht("QueryEngine","The SDK decides to create cache indexes for query:",xl(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ja(n))):tt.resolve())}rs(t,n){if(x0(n))return tt.resolve(null);let a=ja(n);return this.indexManager.getIndexType(t,a).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=qm(n,null,"F"),a=ja(n)),this.indexManager.getDocumentsMatchingTarget(t,a).next(u=>{const h=Xe(...u);return this.ns.getDocuments(t,h).next(m=>this.indexManager.getMinOffset(t,a).next(g=>{const y=this.cs(n,m);return this.ls(n,y,h,g.readTime)?this.rs(t,qm(n,null,"F")):this.hs(t,y,n,g)}))})))}ss(t,n,a,o){return x0(n)||o.isEqual(ie.min())?tt.resolve(null):this.ns.getDocuments(t,a).next(u=>{const h=this.cs(n,u);return this.ls(n,h,a,o)?tt.resolve(null):(Ks()<=Mt.DEBUG&&ht("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xl(n)),this.hs(t,h,n,WI(o,Ql)).next(m=>m))})}cs(t,n){let a=new Fe(RO(t));return n.forEach((o,u)=>{Gp(t,u)&&(a=a.add(u))}),a}ls(t,n,a,o){if(t.limit===null)return!1;if(a.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,a){return Ks()<=Mt.DEBUG&&ht("QueryEngine","Using full collection scan to execute query:",xl(n)),this.ns.getDocumentsMatchingQuery(t,n,Fr.min(),a)}hs(t,n,a,o){return this.ns.getDocumentsMatchingQuery(t,a,o).next(u=>(n.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const wx="LocalStore";class Rx{constructor(t,n,a,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new ln(Ut),this.Is=new Za(u=>Fp(u),qp),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mx(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function Cx(r,t,n,a){return new Rx(r,t,n,a)}async function Nb(r,t){const n=Jt(r);return await n.persistence.runTransaction("Handle user change","readonly",a=>{let o;return n.mutationQueue.getAllMutationBatches(a).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(a))).next(u=>{const h=[],m=[];let g=Xe();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(a,g).next(y=>({Rs:y,removedBatchIds:h,addedBatchIds:m}))})})}function Ix(r,t){const n=Jt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const o=t.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,g,y,E){const S=y.batch,R=S.keys();let B=tt.resolve();return R.forEach(k=>{B=B.next(()=>E.getEntry(g,k)).next(W=>{const q=y.docVersions.get(k);fe(q!==null),W.version.compareTo(q)<0&&(S.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),E.addEntry(W)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,S))}(n,a,t,u).next(()=>u.apply(a)).next(()=>n.mutationQueue.performConsistencyCheck(a)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(m){let g=Xe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(t))).next(()=>n.localDocuments.getDocuments(a,o))})}function Ox(r){const t=Jt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function xx(r,t){const n=Jt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=Up),n.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}class j0{constructor(){this.activeTargetIds=NO()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dx{constructor(){this.ho=new j0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,a){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,a){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new j0,Promise.resolve()}handleUserChange(t,n,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Nx{To(t){}shutdown(){}}/**
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
 */const z0="ConnectivityMonitor";class B0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ht(z0,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ht(z0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function Qm(){return Kc===null?Kc=function(){return 268435456+Math.round(2147483648*Math.random())}():Kc++,"0x"+Kc.toString(16)}/**
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
 */const pm="RestConnection",Mx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Px{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${a}/databases/${o}`,this.wo=this.databaseId.database===_f?`project_id=${a}`:`project_id=${a}&database_id=${o}`}So(t,n,a,o,u){const h=Qm(),m=this.bo(t,n.toUriEncodedString());ht(pm,`Sending RPC '${t}' ${h}:`,m,a);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(t,m,g,a).then(y=>(ht(pm,`Received RPC '${t}' ${h}: `,y),y),y=>{throw zf(pm,`RPC '${t}' ${h} failed with error: `,y,"url: ",m,"request:",a),y})}Co(t,n,a,o,u,h){return this.So(t,n,a,o,u)}Do(t,n,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),a&&a.headers.forEach((o,u)=>t[u]=o)}bo(t,n){const a=Mx[t];return`${this.po}/v1/${n}:${a}`}terminate(){}}/**
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
 */class kx{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Ke="WebChannelConnection";class Lx extends Px{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,a,o){const u=Qm();return new Promise((h,m)=>{const g=new KT;g.setWithCredentials(!0),g.listenOnce(QT.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case nf.NO_ERROR:const E=g.getResponseJson();ht(Ke,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),h(E);break;case nf.TIMEOUT:ht(Ke,`RPC '${t}' ${u} timed out`),m(new Tt(rt.DEADLINE_EXCEEDED,"Request time out"));break;case nf.HTTP_ERROR:const S=g.getStatus();if(ht(Ke,`RPC '${t}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const B=R==null?void 0:R.error;if(B&&B.status&&B.message){const k=function(q){const Y=q.toLowerCase().replace(/_/g,"-");return Object.values(rt).indexOf(Y)>=0?Y:rt.UNKNOWN}(B.status);m(new Tt(k,B.message))}else m(new Tt(rt.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new Tt(rt.UNAVAILABLE,"Connection failed."));break;default:Nt()}}finally{ht(Ke,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);ht(Ke,`RPC '${t}' ${u} sending request:`,o),g.send(n,"POST",y,a,15)})}Wo(t,n,a){const o=Qm(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],h=WT(),m=$T(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,n,a),g.encodeInitMessageHeaders=!0;const E=u.join("");ht(Ke,`Creating RPC '${t}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);let R=!1,B=!1;const k=new kx({Fo:q=>{B?ht(Ke,`Not sending because RPC '${t}' stream ${o} is closed:`,q):(R||(ht(Ke,`Opening RPC '${t}' stream ${o} transport.`),S.open(),R=!0),ht(Ke,`RPC '${t}' stream ${o} sending:`,q),S.send(q))},Mo:()=>S.close()}),W=(q,Y,nt)=>{q.listen(Y,Z=>{try{nt(Z)}catch(ct){setTimeout(()=>{throw ct},0)}})};return W(S,Ml.EventType.OPEN,()=>{B||(ht(Ke,`RPC '${t}' stream ${o} transport opened.`),k.Qo())}),W(S,Ml.EventType.CLOSE,()=>{B||(B=!0,ht(Ke,`RPC '${t}' stream ${o} transport closed`),k.Uo())}),W(S,Ml.EventType.ERROR,q=>{B||(B=!0,zf(Ke,`RPC '${t}' stream ${o} transport errored:`,q),k.Uo(new Tt(rt.UNAVAILABLE,"The operation could not be completed")))}),W(S,Ml.EventType.MESSAGE,q=>{var Y;if(!B){const nt=q.data[0];fe(!!nt);const Z=nt,ct=(Z==null?void 0:Z.error)||((Y=Z[0])===null||Y===void 0?void 0:Y.error);if(ct){ht(Ke,`RPC '${t}' stream ${o} received error:`,ct);const ut=ct.status;let At=function(A){const O=_e[A];if(O!==void 0)return qO(O)}(ut),D=ct.message;At===void 0&&(At=rt.INTERNAL,D="Unknown error status: "+ut+" with message "+ct.message),B=!0,k.Uo(new Tt(At,D)),S.close()}else ht(Ke,`RPC '${t}' stream ${o} received:`,nt),k.Ko(nt)}}),W(m,XT.STAT_EVENT,q=>{q.stat===Um.PROXY?ht(Ke,`RPC '${t}' stream ${o} detected buffering proxy`):q.stat===Um.NOPROXY&&ht(Ke,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function gm(){return typeof document<"u"?document:null}/**
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
 */function qf(r){return new GO(r,!0)}/**
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
 */class Mb{constructor(t,n,a=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=a,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-a);o>0&&ht("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const H0="PersistentStream";class Vx{constructor(t,n,a,o,u,h,m,g){this.Ti=t,this.n_=a,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Mb(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===rt.RESOURCE_EXHAUSTED?(Ga(n.toString()),Ga("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===rt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,o])=>{this.i_===n&&this.V_(a,o)},a=>{t(()=>{const o=new Tt(rt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(o)})})}V_(t,n){const a=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{a(()=>this.m_(o))}),this.stream.onMessage(o=>{a(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ht(H0,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(ht(H0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ux extends Vx{constructor(t,n,a,o,u,h){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,a,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return fe(!!t.streamToken),this.lastStreamToken=t.streamToken,fe(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){fe(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=JO(t.writeResults,t.commitTime),a=eo(t.commitTime);return this.listener.v_(a,n)}C_(){const t={};t.database=$O(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(a=>ZO(this.serializer,a))};this.I_(n)}}/**
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
 */class jx{}class zx extends jx{constructor(t,n,a,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=a,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new Tt(rt.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(t,Ym(n,a),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Tt(rt.UNKNOWN,u.toString())})}Co(t,n,a,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(t,Ym(n,a),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new Tt(rt.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Bx{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ga(n),this.N_=!1):ht("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const hu="RemoteStore";class Hx{constructor(t,n,a,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{a.enqueueAndForget(async()=>{mu(this)&&(ht(hu,"Restarting streams for network reachability change."),await async function(g){const y=Jt(g);y.W_.add(4),await du(y),y.j_.set("Unknown"),y.W_.delete(4),await Gf(y)}(this))})}),this.j_=new Bx(a,o)}}async function Gf(r){if(mu(r))for(const t of r.G_)await t(!0)}async function du(r){for(const t of r.G_)await t(!1)}function mu(r){return Jt(r).W_.size===0}async function Pb(r,t,n){if(!cu(t))throw t;r.W_.add(1),await du(r),r.j_.set("Offline"),n||(n=()=>Ox(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ht(hu,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await Gf(r)})}function kb(r,t){return t().catch(n=>Pb(r,n,t))}async function Yf(r){const t=Jt(r),n=Gr(t);let a=t.U_.length>0?t.U_[t.U_.length-1].batchId:Up;for(;Fx(t);)try{const o=await xx(t.localStore,a);if(o===null){t.U_.length===0&&n.P_();break}a=o.batchId,qx(t,o)}catch(o){await Pb(t,o)}Lb(t)&&Vb(t)}function Fx(r){return mu(r)&&r.U_.length<10}function qx(r,t){r.U_.push(t);const n=Gr(r);n.c_()&&n.S_&&n.b_(t.mutations)}function Lb(r){return mu(r)&&!Gr(r).u_()&&r.U_.length>0}function Vb(r){Gr(r).start()}async function Gx(r){Gr(r).C_()}async function Yx(r){const t=Gr(r);for(const n of r.U_)t.b_(n.mutations)}async function Kx(r,t,n){const a=r.U_.shift(),o=Kp.from(a,t,n);await kb(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Yf(r)}async function Qx(r,t){t&&Gr(r).S_&&await async function(a,o){if(function(h){return FO(h)&&h!==rt.ABORTED}(o.code)){const u=a.U_.shift();Gr(a).h_(),await kb(a,()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Yf(a)}}(r,t),Lb(r)&&Vb(r)}async function F0(r,t){const n=Jt(r);n.asyncQueue.verifyOperationInProgress(),ht(hu,"RemoteStore received new credentials");const a=mu(n);n.W_.add(3),await du(n),a&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Gf(n)}async function Xx(r,t){const n=Jt(r);t?(n.W_.delete(2),await Gf(n)):t||(n.W_.add(2),await du(n),n.j_.set("Unknown"))}function Gr(r){return r.Y_||(r.Y_=function(n,a,o){const u=Jt(n);return u.M_(),new Ux(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Gx.bind(null,r),Lo:Qx.bind(null,r),D_:Yx.bind(null,r),v_:Kx.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Yf(r)):(await r.Y_.stop(),r.U_.length>0&&(ht(hu,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class Wp{constructor(t,n,a,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new Ua,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,a,o,u){const h=Date.now()+a,m=new Wp(t,n,h,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Tt(rt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ub(r,t){if(Ga("AsyncQueue",`${t}: ${r}`),cu(r))return new Tt(rt.UNAVAILABLE,`${t}: ${r}`);throw r}class $x{constructor(){this.queries=q0(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,a){const o=Jt(n),u=o.queries;o.queries=q0(),u.forEach((h,m)=>{for(const g of m.ta)g.onError(a)})})(this,new Tt(rt.ABORTED,"Firestore shutting down"))}}function q0(){return new Za(r=>gb(r),pb)}function Wx(r){r.ia.forEach(t=>{t.next()})}var G0,Y0;(Y0=G0||(G0={}))._a="default",Y0.Cache="cache";const Zx="SyncEngine";class Jx{constructor(t,n,a,o,u,h){this.localStore=t,this.remoteStore=n,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new Za(m=>gb(m),pb),this.qa=new Map,this.Qa=new Set,this.$a=new ln(wt.comparator),this.Ua=new Map,this.Ka=new Qp,this.Wa={},this.Ga=new Map,this.za=lo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function tD(r,t,n){const a=rD(r);try{const o=await function(h,m){const g=Jt(h),y=Me.now(),E=m.reduce((B,k)=>B.add(k.key),Xe());let S,R;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let k=Af(),W=Xe();return g.ds.getEntries(B,E).next(q=>{k=q,k.forEach((Y,nt)=>{nt.isValidDocument()||(W=W.add(Y))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,k)).next(q=>{S=q;const Y=[];for(const nt of m){const Z=jO(nt,S.get(nt.key).overlayedDocument);Z!=null&&Y.push(new Ja(nt.key,Z,lb(Z.value.mapValue),di.exists(!0)))}return g.mutationQueue.addMutationBatch(B,y,Y,m)}).next(q=>{R=q;const Y=q.applyToLocalDocumentSet(S,W);return g.documentOverlayCache.saveOverlays(B,q.batchId,Y)})}).then(()=>({batchId:R.batchId,changes:vb(S)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let y=h.Wa[h.currentUser.toKey()];y||(y=new ln(Ut)),y=y.insert(m,g),h.Wa[h.currentUser.toKey()]=y}(a,o.batchId,n),await Kf(a,o.changes),await Yf(a.remoteStore)}catch(o){const u=Ub(o,"Failed to persist write");n.reject(u)}}function K0(r,t,n){const a=Jt(r);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const o=[];a.ka.forEach((u,h)=>{const m=h.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Jt(h);g.onlineState=m;let y=!1;g.queries.forEach((E,S)=>{for(const R of S.ta)R.sa(m)&&(y=!0)}),y&&Wx(g)}(a.eventManager,t),o.length&&a.La.p_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function eD(r,t){const n=Jt(r),a=t.batch.batchId;try{const o=await Ix(n.localStore,t);zb(n,a,null),jb(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await Kf(n,o)}catch(o){await Lp(o)}}async function nD(r,t,n){const a=Jt(r);try{const o=await function(h,m){const g=Jt(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return g.mutationQueue.lookupMutationBatch(y,m).next(S=>(fe(S!==null),E=S.keys(),g.mutationQueue.removeMutationBatch(y,S))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>g.localDocuments.getDocuments(y,E))})}(a.localStore,t);zb(a,t,n),jb(a,t),a.sharedClientState.updateMutationState(t,"rejected",n),await Kf(a,o)}catch(o){await Lp(o)}}function jb(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function zb(r,t,n){const a=Jt(r);let o=a.Wa[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),a.Wa[a.currentUser.toKey()]=o}}async function Kf(r,t,n){const a=Jt(r),o=[],u=[],h=[];a.ka.isEmpty()||(a.ka.forEach((m,g)=>{h.push(a.Ha(g,t,n).then(y=>{var E;if((y||n)&&a.isPrimaryClient){const S=y?!y.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;a.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){o.push(y);const S=$p.Yi(g.targetId,y);u.push(S)}}))}),await Promise.all(h),a.La.p_(o),await async function(g,y){const E=Jt(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>tt.forEach(y,R=>tt.forEach(R.Hi,B=>E.persistence.referenceDelegate.addReference(S,R.targetId,B)).next(()=>tt.forEach(R.Ji,B=>E.persistence.referenceDelegate.removeReference(S,R.targetId,B)))))}catch(S){if(!cu(S))throw S;ht(wx,"Failed to update sequence numbers: "+S)}for(const S of y){const R=S.targetId;if(!S.fromCache){const B=E.Ts.get(R),k=B.snapshotVersion,W=B.withLastLimboFreeSnapshotVersion(k);E.Ts=E.Ts.insert(R,W)}}}(a.localStore,u))}async function iD(r,t){const n=Jt(r);if(!n.currentUser.isEqual(t)){ht(Zx,"User change. New user:",t.toKey());const a=await Nb(n.localStore,t);n.currentUser=t,function(u,h){u.Ga.forEach(m=>{m.forEach(g=>{g.reject(new Tt(rt.CANCELLED,h))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Kf(n,a.Rs)}}function rD(r){const t=Jt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=eD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nD.bind(null,t),t}class Cf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=qf(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return Cx(this.persistence,new Sx,t.initialUser,this.serializer)}Xa(t){return new Db(Xp.ri,this.serializer)}Za(t){return new Dx}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cf.provider={build:()=>new Cf};class aD extends Cf{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){fe(this.persistence.referenceDelegate instanceof Rf);const a=this.persistence.referenceDelegate.garbageCollector;return new ux(a,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new Db(a=>Rf.ri(a,n),this.serializer)}}class Xm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>K0(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=iD.bind(null,this.syncEngine),await Xx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $x}()}createDatastore(t){const n=qf(t.databaseInfo.databaseId),a=function(u){return new Lx(u)}(t.databaseInfo);return function(u,h,m,g){return new zx(u,h,m,g)}(t.authCredentials,t.appCheckCredentials,a,n)}createRemoteStore(t){return function(a,o,u,h,m){return new Hx(a,o,u,h,m)}(this.localStore,this.datastore,t.asyncQueue,n=>K0(this.syncEngine,n,0),function(){return B0.D()?new B0:new Nx}())}createSyncEngine(t,n){return function(o,u,h,m,g,y,E){const S=new Jx(o,u,h,m,g,y);return E&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=Jt(o);ht(hu,"RemoteStore shutting down."),u.W_.add(5),await du(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xm.provider={build:()=>new Xm};/**
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
 */const Yr="FirestoreClient";class sD{constructor(t,n,a,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=JT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,async h=>{ht(Yr,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(a,h=>(ht(Yr,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ua;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const a=Ub(n,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function ym(r,t){r.asyncQueue.verifyOperationInProgress(),ht(Yr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let a=n.initialUser;r.setCredentialChangeListener(async o=>{a.isEqual(o)||(await Nb(t.localStore,o),a=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Q0(r,t){r.asyncQueue.verifyOperationInProgress();const n=await oD(r);ht(Yr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(a=>F0(t.remoteStore,a)),r.setAppCheckTokenChangeListener((a,o)=>F0(t.remoteStore,o)),r._onlineComponents=t}async function oD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ht(Yr,"Using user provided OfflineComponentProvider");try{await ym(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===rt.FAILED_PRECONDITION||o.code===rt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;zf("Error using user provided cache. Falling back to memory cache: "+n),await ym(r,new Cf)}}else ht(Yr,"Using default OfflineComponentProvider"),await ym(r,new aD(void 0));return r._offlineComponents}async function lD(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ht(Yr,"Using user provided OnlineComponentProvider"),await Q0(r,r._uninitializedComponentsProvider._online)):(ht(Yr,"Using default OnlineComponentProvider"),await Q0(r,new Xm))),r._onlineComponents}function uD(r){return lD(r).then(t=>t.syncEngine)}/**
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
 */function Bb(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const X0=new Map;/**
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
 */function Hb(r,t,n){if(!n)throw new Tt(rt.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function cD(r,t,n,a){if(t===!0&&a===!0)throw new Tt(rt.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function $0(r){if(!wt.isDocumentKey(r))throw new Tt(rt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function W0(r){if(wt.isDocumentKey(r))throw new Tt(rt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Zp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Nt()}function If(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new Tt(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zp(r);throw new Tt(rt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
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
 */const Fb="firestore.googleapis.com",Z0=!0;class J0{constructor(t){var n,a;if(t.host===void 0){if(t.ssl!==void 0)throw new Tt(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fb,this.ssl=Z0}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Z0;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=xb;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ox)throw new Tt(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}cD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bb((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new Tt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new Tt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new Tt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,o){return a.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qf{constructor(t,n,a,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Tt(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Tt(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new BI;switch(a.type){case"firstParty":return new GI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Tt(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const a=X0.get(n);a&&(ht("ComponentProvider","Removing Datastore"),X0.delete(n),a.terminate())}(this),Promise.resolve()}}function fD(r,t,n,a={}){var o;const u=(r=If(r,Qf))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${n}`;u.host!==Fb&&u.host!==m&&zf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:a});if(!za(g,h)&&(r._setSettings(g),a.mockUserToken)){let y,E;if(typeof a.mockUserToken=="string")y=a.mockUserToken,E=Qe.MOCK_USER;else{y=tR(a.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=a.mockUserToken.sub||a.mockUserToken.user_id;if(!S)throw new Tt(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Qe(S)}r._authCredentials=new HI(new ZT(y,E))}}/**
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
 */class Jp{constructor(t,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Jp(this.firestore,t,this._query)}}class mi{constructor(t,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mi(this.firestore,t,this._key)}}class Hr extends Jp{constructor(t,n,a){super(t,n,AO(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mi(this.firestore,null,new wt(t))}withConverter(t){return new Hr(this.firestore,t,this._path)}}function hD(r,t,...n){if(r=on(r),Hb("collection","path",t),r instanceof Qf){const a=ce.fromString(t,...n);return W0(a),new Hr(r,null,a)}{if(!(r instanceof mi||r instanceof Hr))throw new Tt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ce.fromString(t,...n));return W0(a),new Hr(r.firestore,null,a)}}function qb(r,t,...n){if(r=on(r),arguments.length===1&&(t=JT.newId()),Hb("doc","path",t),r instanceof Qf){const a=ce.fromString(t,...n);return $0(a),new mi(r,null,new wt(a))}{if(!(r instanceof mi||r instanceof Hr))throw new Tt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ce.fromString(t,...n));return $0(a),new mi(r.firestore,r instanceof Hr?r.converter:null,new wt(a))}}/**
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
 */const tE="AsyncQueue";class eE{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Mb(this,"async_queue_retry"),this.Su=()=>{const a=gm();a&&ht(tE,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=t;const n=gm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=gm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Ua;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!cu(t))throw t;ht(tE,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(a);throw Ga("INTERNAL UNHANDLED ERROR: ",o),a}).then(a=>(this.pu=!1,a))));return this.bu=n,n}enqueueAfterDelay(t,n,a){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=Wp.createAndSchedule(this,t,n,a,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Nt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,a)=>n.targetTimeMs-a.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class tg extends Qf{constructor(t,n,a,o){super(t,n,a,o),this.type="firestore",this._queue=new eE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new eE(t),this._firestoreClient=void 0,await t}}}function dD(r,t){const n=typeof r=="object"?r:uT(),a=typeof r=="string"?r:_f,o=Sp(n,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=Zw("firestore");u&&fD(o,...u)}return o}function mD(r){if(r._terminated)throw new Tt(rt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pD(r),r._firestoreClient}function pD(r){var t,n,a;const o=r._freezeSettings(),u=function(m,g,y,E){return new lO(m,g,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Bb(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((a=o.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new sD(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class Zl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Zl(gi.fromBase64String(t))}catch(n){throw new Tt(rt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Zl(gi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Gb{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Tt(rt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Yb{constructor(t){this._methodName=t}}/**
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
 */class Kb{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Tt(rt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Tt(rt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}}/**
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
 */class Qb{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
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
 */const gD=/^__.*__$/;class yD{constructor(t,n,a){this.data=t,this.fieldMask=n,this.fieldTransforms=a}toMutation(t,n){return this.fieldMask!==null?new Ja(t,this.data,this.fieldMask,n,this.fieldTransforms):new fu(t,this.data,n,this.fieldTransforms)}}function Xb(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Nt()}}class eg{constructor(t,n,a,o,u,h){this.settings=t,this.databaseId=n,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new eg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:a,Qu:!1});return o.$u(t),o}Uu(t){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:a,Qu:!1});return o.Bu(),o}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Of(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Xb(this.Lu)&&gD.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class vD{constructor(t,n,a){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=a||qf(t)}ju(t,n,a,o=!1){return new eg({Lu:t,methodName:n,zu:a,path:He.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $b(r){const t=r._freezeSettings(),n=qf(r._databaseId);return new vD(r._databaseId,!!t.ignoreUndefinedProperties,n)}function Wb(r,t,n,a,o,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,t,n,o);e1("Data must be an object, but it was:",h,a);const m=Jb(a,h);let g,y;if(u.merge)g=new Bn(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const R=_D(t,S,n);if(!h.contains(R))throw new Tt(rt.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);bD(E,R)||E.push(R)}g=new Bn(E),y=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,y=h.fieldTransforms;return new yD(new zn(m),g,y)}function Zb(r,t){if(t1(r=on(r)))return e1("Unsupported field value:",t,r),Jb(r,t);if(r instanceof Yb)return function(a,o){if(!Xb(o.Lu))throw o.Wu(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,o){const u=[];let h=0;for(const m of a){let g=Zb(m,o.Ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,t)}return function(a,o){if((a=on(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return MO(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=Me.fromDate(a);return{timestampValue:Gm(o.serializer,u)}}if(a instanceof Me){const u=new Me(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Gm(o.serializer,u)}}if(a instanceof Kb)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Zl)return{bytesValue:YO(o.serializer,a._byteString)};if(a instanceof mi){const u=o.databaseId,h=a.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ib(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Qb)return function(h,m){return{mapValue:{fields:{[sb]:{stringValue:ob},[zm]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return Yp(m.serializer,y)})}}}}}}(a,o);throw o.Wu(`Unsupported field value: ${Zp(a)}`)}(r,t)}function Jb(r,t){const n={};return eb(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):go(r,(a,o)=>{const u=Zb(o,t.qu(a));u!=null&&(n[a]=u)}),{mapValue:{fields:n}}}function t1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Me||r instanceof Kb||r instanceof Zl||r instanceof mi||r instanceof Yb||r instanceof Qb)}function e1(r,t,n){if(!t1(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const a=Zp(n);throw a==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+a)}}function _D(r,t,n){if((t=on(t))instanceof Gb)return t._internalPath;if(typeof t=="string")return TD(r,t);throw Of("Field path arguments must be of type string or ",r,!1,void 0,n)}const ED=new RegExp("[~\\*/\\[\\]]");function TD(r,t,n){if(t.search(ED)>=0)throw Of(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Gb(...t.split("."))._internalPath}catch{throw Of(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Of(r,t,n,a,o){const u=a&&!a.isEmpty(),h=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${a}`),h&&(g+=` in document ${o}`),g+=")"),new Tt(rt.INVALID_ARGUMENT,m+r+g)}function bD(r,t){return r.some(n=>n.isEqual(t))}/**
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
 */function n1(r,t,n){let a;return a=r?r.toFirestore(t):t,a}function AD(r,t,n){r=If(r,mi);const a=If(r.firestore,tg),o=n1(r.converter,t);return i1(a,[Wb($b(a),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,di.none())])}function SD(r,t){const n=If(r.firestore,tg),a=qb(r),o=n1(r.converter,t);return i1(n,[Wb($b(r.firestore),"addDoc",a._key,o,r.converter!==null,{}).toMutation(a._key,di.exists(!1))]).then(()=>a)}function i1(r,t){return function(a,o){const u=new Ua;return a.asyncQueue.enqueueAndForget(async()=>tD(await uD(a),o,u)),u.promise}(mD(r),t)}(function(t,n=!0){(function(o){po=o})(ho),io(new Ba("firestore",(a,{instanceIdentifier:o,options:u})=>{const h=a.getProvider("app").getImmediate(),m=new tg(new FI(a.getProvider("auth-internal")),new YI(h,a.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new Tt(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ef(y.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Br(p0,g0,t),Br(p0,g0,"esm2017")})();const wD={apiKey:"AIzaSyALi3aD4f5MLqlRbL-sk2s2ReSgoxc6sW8",authDomain:"projeto-pet-746d8.firebaseapp.com",projectId:"projeto-pet-746d8",storageBucket:"projeto-pet-746d8.firebasestorage.app",messagingSenderId:"618638980041",appId:"1:618638980041:web:1b6c597b9c6e49bd156e18",measurementId:"G-4QVDJS3EVX"},r1=lT(wD),xf=jI(r1),a1=dD(r1);function RD(){const[r,t]=K.useState(!1),[n,a]=K.useState(window.innerWidth<=768),[o,u]=K.useState(null),h=yp();K.useEffect(()=>{const g=()=>{a(window.innerWidth<=768),window.innerWidth>n&&t(!1)};return window.addEventListener("resize",g),()=>window.addEventListener("resize",g)},[]),K.useEffect(()=>{const g=CC(xf,y=>{u(y)});return()=>g()},[]);const m=async()=>{try{await IC(xf),u(null),h("/")}catch{}};return M.jsxs("header",{children:[M.jsxs("div",{className:"container-principal",children:[M.jsx("div",{className:"container-logo",children:M.jsx(ci,{to:"/",onClick:()=>t(!1),children:M.jsx("img",{src:bS,alt:""})})}),n&&M.jsx("div",{className:"menu-icon",onClick:()=>t(!r),children:"☰"}),!n&&M.jsx("nav",{className:`container-menu ${r?"menu-aberto":""}`,children:M.jsxs("ul",{children:[M.jsx("li",{children:"teste"}),M.jsx("li",{children:"teste"}),M.jsx("li",{children:"teste"})]})}),!n&&!o&&M.jsx("div",{className:`container-cadastro ${r?"menu-aberto":""}`,children:M.jsx(ci,{to:"/Login",children:M.jsx("button",{children:"Login/Cadastro"})})}),o&&M.jsx("div",{className:"container-sair",children:M.jsx("button",{type:"button",onClick:()=>m(),children:"Logout"})})]}),r&&n&&M.jsxs("div",{className:"menu-mobile",children:[M.jsxs("ul",{children:[M.jsx("li",{children:"teste"}),M.jsx("li",{children:"teste"}),M.jsx("li",{children:"teste"})]}),!o&&M.jsx("div",{className:"cadastro-mobile",children:M.jsx("div",{children:M.jsx(ci,{to:"/Login",onClick:()=>t(!1),children:M.jsx("button",{type:"button",children:"Login/cadastro"})})})})]})]})}const CD="/assets/d593b70d-edae-41df-9635-ffdba9cdcc01-corrigido-1xO3LZOC.jpg",ID="/assets/a5ceef26-0a61-4af3-b0c9-f50f87506a71-corrigido-D6iQq9J2.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function OD(r,t,n){return(t=DD(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function nE(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,a)}return n}function it(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nE(Object(n),!0).forEach(function(a){OD(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):nE(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function xD(r,t){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function DD(r){var t=xD(r,"string");return typeof t=="symbol"?t:t+""}const iE=()=>{};let ng={},s1={},o1=null,l1={mark:iE,measure:iE};try{typeof window<"u"&&(ng=window),typeof document<"u"&&(s1=document),typeof MutationObserver<"u"&&(o1=MutationObserver),typeof performance<"u"&&(l1=performance)}catch{}const{userAgent:rE=""}=ng.navigator||{},Kr=ng,te=s1,aE=o1,Qc=l1;Kr.document;const ir=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",u1=~rE.indexOf("MSIE")||~rE.indexOf("Trident/");var ND=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,MD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,c1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},PD={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},f1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],We="classic",Xf="duotone",kD="sharp",LD="sharp-duotone",h1=[We,Xf,kD,LD],VD={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},UD={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},jD=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zD={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},BD=["fak","fa-kit","fakd","fa-kit-duotone"],sE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},HD=["kit"],FD={kit:{"fa-kit":"fak"}},qD=["fak","fakd"],GD={kit:{fak:"fa-kit"}},oE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Xc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},YD=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],KD=["fak","fa-kit","fakd","fa-kit-duotone"],QD={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},XD={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},$D={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},$m={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},WD=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Wm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...YD,...WD],ZD=["solid","regular","light","thin","duotone","brands"],d1=[1,2,3,4,5,6,7,8,9,10],JD=d1.concat([11,12,13,14,15,16,17,18,19,20]),tN=[...Object.keys($D),...ZD,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xc.GROUP,Xc.SWAP_OPACITY,Xc.PRIMARY,Xc.SECONDARY].concat(d1.map(r=>"".concat(r,"x"))).concat(JD.map(r=>"w-".concat(r))),eN={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ji="___FONT_AWESOME___",Zm=16,m1="fa",p1="svg-inline--fa",Qa="data-fa-i2svg",Jm="data-fa-pseudo-element",nN="data-fa-pseudo-element-pending",ig="data-prefix",rg="data-icon",lE="fontawesome-i2svg",iN="async",rN=["HTML","HEAD","STYLE","SCRIPT"],g1=(()=>{try{return!0}catch{return!1}})();function pu(r){return new Proxy(r,{get(t,n){return n in t?t[n]:t[We]}})}const y1=it({},c1);y1[We]=it(it(it(it({},{"fa-duotone":"duotone"}),c1[We]),sE.kit),sE["kit-duotone"]);const aN=pu(y1),tp=it({},zD);tp[We]=it(it(it(it({},{duotone:"fad"}),tp[We]),oE.kit),oE["kit-duotone"]);const uE=pu(tp),ep=it({},$m);ep[We]=it(it({},ep[We]),GD.kit);const ag=pu(ep),np=it({},XD);np[We]=it(it({},np[We]),FD.kit);pu(np);const sN=ND,v1="fa-layers-text",oN=MD,lN=it({},VD);pu(lN);const uN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vm=PD,cN=[...HD,...tN],zl=Kr.FontAwesomeConfig||{};function fN(r){var t=te.querySelector("script["+r+"]");if(t)return t.getAttribute(r)}function hN(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}te&&typeof te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const o=hN(fN(n));o!=null&&(zl[a]=o)});const _1={styleDefault:"solid",familyDefault:We,cssPrefix:m1,replacementClass:p1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zl.familyPrefix&&(zl.cssPrefix=zl.familyPrefix);const uo=it(it({},_1),zl);uo.autoReplaceSvg||(uo.observeMutations=!1);const dt={};Object.keys(_1).forEach(r=>{Object.defineProperty(dt,r,{enumerable:!0,set:function(t){uo[r]=t,Bl.forEach(n=>n(dt))},get:function(){return uo[r]}})});Object.defineProperty(dt,"familyPrefix",{enumerable:!0,set:function(r){uo.cssPrefix=r,Bl.forEach(t=>t(dt))},get:function(){return uo.cssPrefix}});Kr.FontAwesomeConfig=dt;const Bl=[];function dN(r){return Bl.push(r),()=>{Bl.splice(Bl.indexOf(r),1)}}const Pr=Zm,li={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mN(r){if(!r||!ir)return;const t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=r;const n=te.head.childNodes;let a=null;for(let o=n.length-1;o>-1;o--){const u=n[o],h=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(a=u)}return te.head.insertBefore(t,a),r}const pN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jl(){let r=12,t="";for(;r-- >0;)t+=pN[Math.random()*62|0];return t}function yo(r){const t=[];for(let n=(r||[]).length>>>0;n--;)t[n]=r[n];return t}function sg(r){return r.classList?yo(r.classList):(r.getAttribute("class")||"").split(" ").filter(t=>t)}function E1(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gN(r){return Object.keys(r||{}).reduce((t,n)=>t+"".concat(n,'="').concat(E1(r[n]),'" '),"").trim()}function $f(r){return Object.keys(r||{}).reduce((t,n)=>t+"".concat(n,": ").concat(r[n].trim(),";"),"")}function og(r){return r.size!==li.size||r.x!==li.x||r.y!==li.y||r.rotate!==li.rotate||r.flipX||r.flipY}function yN(r){let{transform:t,containerWidth:n,iconWidth:a}=r;const o={transform:"translate(".concat(n/2," 256)")},u="translate(".concat(t.x*32,", ").concat(t.y*32,") "),h="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),m="rotate(".concat(t.rotate," 0 0)"),g={transform:"".concat(u," ").concat(h," ").concat(m)},y={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:g,path:y}}function vN(r){let{transform:t,width:n=Zm,height:a=Zm,startCentered:o=!1}=r,u="";return o&&u1?u+="translate(".concat(t.x/Pr-n/2,"em, ").concat(t.y/Pr-a/2,"em) "):o?u+="translate(calc(-50% + ".concat(t.x/Pr,"em), calc(-50% + ").concat(t.y/Pr,"em)) "):u+="translate(".concat(t.x/Pr,"em, ").concat(t.y/Pr,"em) "),u+="scale(".concat(t.size/Pr*(t.flipX?-1:1),", ").concat(t.size/Pr*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var _N=`:root, :host {
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
}`;function T1(){const r=m1,t=p1,n=dt.cssPrefix,a=dt.replacementClass;let o=_N;if(n!==r||a!==t){const u=new RegExp("\\.".concat(r,"\\-"),"g"),h=new RegExp("\\--".concat(r,"\\-"),"g"),m=new RegExp("\\.".concat(t),"g");o=o.replace(u,".".concat(n,"-")).replace(h,"--".concat(n,"-")).replace(m,".".concat(a))}return o}let cE=!1;function _m(){dt.autoAddCss&&!cE&&(mN(T1()),cE=!0)}var EN={mixout(){return{dom:{css:T1,insertCss:_m}}},hooks(){return{beforeDOMElementCreation(){_m()},beforeI2svg(){_m()}}}};const tr=Kr||{};tr[Ji]||(tr[Ji]={});tr[Ji].styles||(tr[Ji].styles={});tr[Ji].hooks||(tr[Ji].hooks={});tr[Ji].shims||(tr[Ji].shims=[]);var ui=tr[Ji];const b1=[],A1=function(){te.removeEventListener("DOMContentLoaded",A1),Df=1,b1.map(r=>r())};let Df=!1;ir&&(Df=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),Df||te.addEventListener("DOMContentLoaded",A1));function TN(r){ir&&(Df?setTimeout(r,0):b1.push(r))}function gu(r){const{tag:t,attributes:n={},children:a=[]}=r;return typeof r=="string"?E1(r):"<".concat(t," ").concat(gN(n),">").concat(a.map(gu).join(""),"</").concat(t,">")}function fE(r,t,n){if(r&&r[t]&&r[t][n])return{prefix:t,iconName:n,icon:r[t][n]}}var Em=function(t,n,a,o){var u=Object.keys(t),h=u.length,m=n,g,y,E;for(a===void 0?(g=1,E=t[u[0]]):(g=0,E=a);g<h;g++)y=u[g],E=m(E,t[y],y,t);return E};function bN(r){const t=[];let n=0;const a=r.length;for(;n<a;){const o=r.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const u=r.charCodeAt(n++);(u&64512)==56320?t.push(((o&1023)<<10)+(u&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function ip(r){const t=bN(r);return t.length===1?t[0].toString(16):null}function AN(r,t){const n=r.length;let a=r.charCodeAt(t),o;return a>=55296&&a<=56319&&n>t+1&&(o=r.charCodeAt(t+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function hE(r){return Object.keys(r).reduce((t,n)=>{const a=r[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function rp(r,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,o=hE(t);typeof ui.hooks.addPack=="function"&&!a?ui.hooks.addPack(r,hE(t)):ui.styles[r]=it(it({},ui.styles[r]||{}),o),r==="fas"&&rp("fa",t)}const{styles:tu,shims:SN}=ui,S1=Object.keys(ag),wN=S1.reduce((r,t)=>(r[t]=Object.keys(ag[t]),r),{});let lg=null,w1={},R1={},C1={},I1={},O1={};function RN(r){return~cN.indexOf(r)}function CN(r,t){const n=t.split("-"),a=n[0],o=n.slice(1).join("-");return a===r&&o!==""&&!RN(o)?o:null}const x1=()=>{const r=a=>Em(tu,(o,u,h)=>(o[h]=Em(u,a,{}),o),{});w1=r((a,o,u)=>(o[3]&&(a[o[3]]=u),o[2]&&o[2].filter(m=>typeof m=="number").forEach(m=>{a[m.toString(16)]=u}),a)),R1=r((a,o,u)=>(a[u]=u,o[2]&&o[2].filter(m=>typeof m=="string").forEach(m=>{a[m]=u}),a)),O1=r((a,o,u)=>{const h=o[2];return a[u]=u,h.forEach(m=>{a[m]=u}),a});const t="far"in tu||dt.autoFetchSvg,n=Em(SN,(a,o)=>{const u=o[0];let h=o[1];const m=o[2];return h==="far"&&!t&&(h="fas"),typeof u=="string"&&(a.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(a.unicodes[u.toString(16)]={prefix:h,iconName:m}),a},{names:{},unicodes:{}});C1=n.names,I1=n.unicodes,lg=Wf(dt.styleDefault,{family:dt.familyDefault})};dN(r=>{lg=Wf(r.styleDefault,{family:dt.familyDefault})});x1();function ug(r,t){return(w1[r]||{})[t]}function IN(r,t){return(R1[r]||{})[t]}function Va(r,t){return(O1[r]||{})[t]}function D1(r){return C1[r]||{prefix:null,iconName:null}}function ON(r){const t=I1[r],n=ug("fas",r);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qr(){return lg}const N1=()=>({prefix:null,iconName:null,rest:[]});function xN(r){let t=We;const n=S1.reduce((a,o)=>(a[o]="".concat(dt.cssPrefix,"-").concat(o),a),{});return h1.forEach(a=>{(r.includes(n[a])||r.some(o=>wN[a].includes(o)))&&(t=a)}),t}function Wf(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=We}=t,a=aN[n][r];if(n===Xf&&!r)return"fad";const o=uE[n][r]||uE[n][a],u=r in ui.styles?r:null;return o||u||null}function DN(r){let t=[],n=null;return r.forEach(a=>{const o=CN(dt.cssPrefix,a);o?n=o:a&&t.push(a)}),{iconName:n,rest:t}}function dE(r){return r.sort().filter((t,n,a)=>a.indexOf(t)===n)}function Zf(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const o=Wm.concat(KD),u=dE(r.filter(S=>o.includes(S))),h=dE(r.filter(S=>!Wm.includes(S))),m=u.filter(S=>(a=S,!f1.includes(S))),[g=null]=m,y=xN(u),E=it(it({},DN(h)),{},{prefix:Wf(g,{family:y})});return it(it(it({},E),kN({values:r,family:y,styles:tu,config:dt,canonical:E,givenPrefix:a})),NN(n,a,E))}function NN(r,t,n){let{prefix:a,iconName:o}=n;if(r||!a||!o)return{prefix:a,iconName:o};const u=t==="fa"?D1(o):{},h=Va(a,o);return o=u.iconName||h||o,a=u.prefix||a,a==="far"&&!tu.far&&tu.fas&&!dt.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}const MN=h1.filter(r=>r!==We||r!==Xf),PN=Object.keys($m).filter(r=>r!==We).map(r=>Object.keys($m[r])).flat();function kN(r){const{values:t,family:n,canonical:a,givenPrefix:o="",styles:u={},config:h={}}=r,m=n===Xf,g=t.includes("fa-duotone")||t.includes("fad"),y=h.familyDefault==="duotone",E=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(g||y||E)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&MN.includes(n)&&(Object.keys(u).find(R=>PN.includes(R))||h.autoFetchSvg)){const R=jD.get(n).defaultShortPrefixId;a.prefix=R,a.iconName=Va(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=Qr()||"fas"),a}class LN{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(u=>{this.definitions[u]=it(it({},this.definitions[u]||{}),o[u]),rp(u,o[u]);const h=ag[We][u];h&&rp(h,o[u]),x1()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(o=>{const{prefix:u,iconName:h,icon:m}=a[o],g=m[2];t[u]||(t[u]={}),g.length>0&&g.forEach(y=>{typeof y=="string"&&(t[u][y]=m)}),t[u][h]=m}),t}}let mE=[],$s={};const no={},VN=Object.keys(no);function UN(r,t){let{mixoutsTo:n}=t;return mE=r,$s={},Object.keys(no).forEach(a=>{VN.indexOf(a)===-1&&delete no[a]}),mE.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(u=>{typeof o[u]=="function"&&(n[u]=o[u]),typeof o[u]=="object"&&Object.keys(o[u]).forEach(h=>{n[u]||(n[u]={}),n[u][h]=o[u][h]})}),a.hooks){const u=a.hooks();Object.keys(u).forEach(h=>{$s[h]||($s[h]=[]),$s[h].push(u[h])})}a.provides&&a.provides(no)}),n}function ap(r,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return($s[r]||[]).forEach(h=>{t=h.apply(null,[t,...a])}),t}function Xa(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];($s[r]||[]).forEach(u=>{u.apply(null,n)})}function Xr(){const r=arguments[0],t=Array.prototype.slice.call(arguments,1);return no[r]?no[r].apply(null,t):void 0}function sp(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:t}=r;const n=r.prefix||Qr();if(t)return t=Va(n,t)||t,fE(M1.definitions,n,t)||fE(ui.styles,n,t)}const M1=new LN,jN=()=>{dt.autoReplaceSvg=!1,dt.observeMutations=!1,Xa("noAuto")},zN={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ir?(Xa("beforeI2svg",r),Xr("pseudoElements2svg",r),Xr("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=r;dt.autoReplaceSvg===!1&&(dt.autoReplaceSvg=!0),dt.observeMutations=!0,TN(()=>{HN({autoReplaceSvgRoot:t}),Xa("watch",r)})}},BN={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:Va(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const t=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],n=Wf(r[0]);return{prefix:n,iconName:Va(n,t)||t}}if(typeof r=="string"&&(r.indexOf("".concat(dt.cssPrefix,"-"))>-1||r.match(sN))){const t=Zf(r.split(" "),{skipLookups:!0});return{prefix:t.prefix||Qr(),iconName:Va(t.prefix,t.iconName)||t.iconName}}if(typeof r=="string"){const t=Qr();return{prefix:t,iconName:Va(t,r)||r}}}},vn={noAuto:jN,config:dt,dom:zN,parse:BN,library:M1,findIconDefinition:sp,toHtml:gu},HN=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=te}=r;(Object.keys(ui.styles).length>0||dt.autoFetchSvg)&&ir&&dt.autoReplaceSvg&&vn.dom.i2svg({node:t})};function Jf(r,t){return Object.defineProperty(r,"abstract",{get:t}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(n=>gu(n))}}),Object.defineProperty(r,"node",{get:function(){if(!ir)return;const n=te.createElement("div");return n.innerHTML=r.html,n.children}}),r}function FN(r){let{children:t,main:n,mask:a,attributes:o,styles:u,transform:h}=r;if(og(h)&&n.found&&!a.found){const{width:m,height:g}=n,y={x:m/g/2,y:.5};o.style=$f(it(it({},u),{},{"transform-origin":"".concat(y.x+h.x/16,"em ").concat(y.y+h.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function qN(r){let{prefix:t,iconName:n,children:a,attributes:o,symbol:u}=r;const h=u===!0?"".concat(t,"-").concat(dt.cssPrefix,"-").concat(n):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:it(it({},o),{},{id:h}),children:a}]}]}function cg(r){const{icons:{main:t,mask:n},prefix:a,iconName:o,transform:u,symbol:h,title:m,maskId:g,titleId:y,extra:E,watchable:S=!1}=r,{width:R,height:B}=n.found?n:t,k=qD.includes(a),W=[dt.replacementClass,o?"".concat(dt.cssPrefix,"-").concat(o):""].filter(ut=>E.classes.indexOf(ut)===-1).filter(ut=>ut!==""||!!ut).concat(E.classes).join(" ");let q={children:[],attributes:it(it({},E.attributes),{},{"data-prefix":a,"data-icon":o,class:W,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(B)})};const Y=k&&!~E.classes.indexOf("fa-fw")?{width:"".concat(R/B*16*.0625,"em")}:{};S&&(q.attributes[Qa]=""),m&&(q.children.push({tag:"title",attributes:{id:q.attributes["aria-labelledby"]||"title-".concat(y||Jl())},children:[m]}),delete q.attributes.title);const nt=it(it({},q),{},{prefix:a,iconName:o,main:t,mask:n,maskId:g,transform:u,symbol:h,styles:it(it({},Y),E.styles)}),{children:Z,attributes:ct}=n.found&&t.found?Xr("generateAbstractMask",nt)||{children:[],attributes:{}}:Xr("generateAbstractIcon",nt)||{children:[],attributes:{}};return nt.children=Z,nt.attributes=ct,h?qN(nt):FN(nt)}function pE(r){const{content:t,width:n,height:a,transform:o,title:u,extra:h,watchable:m=!1}=r,g=it(it(it({},h.attributes),u?{title:u}:{}),{},{class:h.classes.join(" ")});m&&(g[Qa]="");const y=it({},h.styles);og(o)&&(y.transform=vN({transform:o,startCentered:!0,width:n,height:a}),y["-webkit-transform"]=y.transform);const E=$f(y);E.length>0&&(g.style=E);const S=[];return S.push({tag:"span",attributes:g,children:[t]}),u&&S.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),S}function GN(r){const{content:t,title:n,extra:a}=r,o=it(it(it({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),u=$f(a.styles);u.length>0&&(o.style=u);const h=[];return h.push({tag:"span",attributes:o,children:[t]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}const{styles:Tm}=ui;function op(r){const t=r[0],n=r[1],[a]=r.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(dt.cssPrefix,"-").concat(vm.GROUP)},children:[{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(vm.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(vm.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}const YN={found:!1,width:512,height:512};function KN(r,t){!g1&&!dt.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(t,'" is missing.'))}function lp(r,t){let n=t;return t==="fa"&&dt.styleDefault!==null&&(t=Qr()),new Promise((a,o)=>{if(n==="fa"){const u=D1(r)||{};r=u.iconName||r,t=u.prefix||t}if(r&&t&&Tm[t]&&Tm[t][r]){const u=Tm[t][r];return a(op(u))}KN(r,t),a(it(it({},YN),{},{icon:dt.showMissingIcons&&r?Xr("missingIconAbstract")||{}:{}}))})}const gE=()=>{},up=dt.measurePerformance&&Qc&&Qc.mark&&Qc.measure?Qc:{mark:gE,measure:gE},Pl='FA "6.7.2"',QN=r=>(up.mark("".concat(Pl," ").concat(r," begins")),()=>P1(r)),P1=r=>{up.mark("".concat(Pl," ").concat(r," ends")),up.measure("".concat(Pl," ").concat(r),"".concat(Pl," ").concat(r," begins"),"".concat(Pl," ").concat(r," ends"))};var fg={begin:QN,end:P1};const of=()=>{};function yE(r){return typeof(r.getAttribute?r.getAttribute(Qa):null)=="string"}function XN(r){const t=r.getAttribute?r.getAttribute(ig):null,n=r.getAttribute?r.getAttribute(rg):null;return t&&n}function $N(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(dt.replacementClass)}function WN(){return dt.autoReplaceSvg===!0?lf.replace:lf[dt.autoReplaceSvg]||lf.replace}function ZN(r){return te.createElementNS("http://www.w3.org/2000/svg",r)}function JN(r){return te.createElement(r)}function k1(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=r.tag==="svg"?ZN:JN}=t;if(typeof r=="string")return te.createTextNode(r);const a=n(r.tag);return Object.keys(r.attributes||[]).forEach(function(u){a.setAttribute(u,r.attributes[u])}),(r.children||[]).forEach(function(u){a.appendChild(k1(u,{ceFn:n}))}),a}function t4(r){let t=" ".concat(r.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const lf={replace:function(r){const t=r[0];if(t.parentNode)if(r[1].forEach(n=>{t.parentNode.insertBefore(k1(n),t)}),t.getAttribute(Qa)===null&&dt.keepOriginalSource){let n=te.createComment(t4(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(r){const t=r[0],n=r[1];if(~sg(t).indexOf(dt.replacementClass))return lf.replace(r);const a=new RegExp("".concat(dt.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const u=n[0].attributes.class.split(" ").reduce((h,m)=>(m===dt.replacementClass||m.match(a)?h.toSvg.push(m):h.toNode.push(m),h),{toNode:[],toSvg:[]});n[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",u.toNode.join(" "))}const o=n.map(u=>gu(u)).join(`
`);t.setAttribute(Qa,""),t.innerHTML=o}};function vE(r){r()}function L1(r,t){const n=typeof t=="function"?t:of;if(r.length===0)n();else{let a=vE;dt.mutateApproach===iN&&(a=Kr.requestAnimationFrame||vE),a(()=>{const o=WN(),u=fg.begin("mutate");r.map(o),u(),n()})}}let hg=!1;function V1(){hg=!0}function cp(){hg=!1}let Nf=null;function _E(r){if(!aE||!dt.observeMutations)return;const{treeCallback:t=of,nodeCallback:n=of,pseudoElementsCallback:a=of,observeMutationsRoot:o=te}=r;Nf=new aE(u=>{if(hg)return;const h=Qr();yo(u).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!yE(m.addedNodes[0])&&(dt.searchPseudoElements&&a(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&dt.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&yE(m.target)&&~uN.indexOf(m.attributeName))if(m.attributeName==="class"&&XN(m.target)){const{prefix:g,iconName:y}=Zf(sg(m.target));m.target.setAttribute(ig,g||h),y&&m.target.setAttribute(rg,y)}else $N(m.target)&&n(m.target)})}),ir&&Nf.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function e4(){Nf&&Nf.disconnect()}function n4(r){const t=r.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,o)=>{const u=o.split(":"),h=u[0],m=u.slice(1);return h&&m.length>0&&(a[h]=m.join(":").trim()),a},{})),n}function i4(r){const t=r.getAttribute("data-prefix"),n=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"";let o=Zf(sg(r));return o.prefix||(o.prefix=Qr()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=IN(o.prefix,r.innerText)||ug(o.prefix,ip(r.innerText))),!o.iconName&&dt.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=r.firstChild.data)),o}function r4(r){const t=yo(r.attributes).reduce((o,u)=>(o.name!=="class"&&o.name!=="style"&&(o[u.name]=u.value),o),{}),n=r.getAttribute("title"),a=r.getAttribute("data-fa-title-id");return dt.autoA11y&&(n?t["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(a||Jl()):(t["aria-hidden"]="true",t.focusable="false")),t}function a4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:li,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function EE(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:o}=i4(r),u=r4(r),h=ap("parseNodeAttributes",{},r);let m=t.styleParser?n4(r):[];return it({iconName:n,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:a,transform:li,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:m,attributes:u}},h)}const{styles:s4}=ui;function U1(r){const t=dt.autoReplaceSvg==="nest"?EE(r,{styleParser:!1}):EE(r);return~t.extra.classes.indexOf(v1)?Xr("generateLayersText",r,t):Xr("generateSvgReplacementMutation",r,t)}function o4(){return[...BD,...Wm]}function TE(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ir)return Promise.resolve();const n=te.documentElement.classList,a=E=>n.add("".concat(lE,"-").concat(E)),o=E=>n.remove("".concat(lE,"-").concat(E)),u=dt.autoFetchSvg?o4():f1.concat(Object.keys(s4));u.includes("fa")||u.push("fa");const h=[".".concat(v1,":not([").concat(Qa,"])")].concat(u.map(E=>".".concat(E,":not([").concat(Qa,"])"))).join(", ");if(h.length===0)return Promise.resolve();let m=[];try{m=yo(r.querySelectorAll(h))}catch{}if(m.length>0)a("pending"),o("complete");else return Promise.resolve();const g=fg.begin("onTree"),y=m.reduce((E,S)=>{try{const R=U1(S);R&&E.push(R)}catch(R){g1||R.name==="MissingIcon"&&console.error(R)}return E},[]);return new Promise((E,S)=>{Promise.all(y).then(R=>{L1(R,()=>{a("active"),a("complete"),o("pending"),typeof t=="function"&&t(),g(),E()})}).catch(R=>{g(),S(R)})})}function l4(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;U1(r).then(n=>{n&&L1([n],t)})}function u4(r){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:sp(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:sp(o||{})),r(a,it(it({},n),{},{mask:o}))}}const c4=function(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=li,symbol:a=!1,mask:o=null,maskId:u=null,title:h=null,titleId:m=null,classes:g=[],attributes:y={},styles:E={}}=t;if(!r)return;const{prefix:S,iconName:R,icon:B}=r;return Jf(it({type:"icon"},r),()=>(Xa("beforeDOMElementCreation",{iconDefinition:r,params:t}),dt.autoA11y&&(h?y["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(m||Jl()):(y["aria-hidden"]="true",y.focusable="false")),cg({icons:{main:op(B),mask:o?op(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:R,transform:it(it({},li),n),symbol:a,title:h,maskId:u,titleId:m,extra:{attributes:y,styles:E,classes:g}})))};var f4={mixout(){return{icon:u4(c4)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=TE,r.nodeCallback=l4,r}}},provides(r){r.i2svg=function(t){const{node:n=te,callback:a=()=>{}}=t;return TE(n,a)},r.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:o,titleId:u,prefix:h,transform:m,symbol:g,mask:y,maskId:E,extra:S}=n;return new Promise((R,B)=>{Promise.all([lp(a,h),y.iconName?lp(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[W,q]=k;R([t,cg({icons:{main:W,mask:q},prefix:h,iconName:a,transform:m,symbol:g,maskId:E,title:o,titleId:u,extra:S,watchable:!0})])}).catch(B)})},r.generateAbstractIcon=function(t){let{children:n,attributes:a,main:o,transform:u,styles:h}=t;const m=$f(h);m.length>0&&(a.style=m);let g;return og(u)&&(g=Xr("generateAbstractTransformGrouping",{main:o,transform:u,containerWidth:o.width,iconWidth:o.width})),n.push(g||o.icon),{children:n,attributes:a}}}},h4={mixout(){return{layer(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Jf({type:"layer"},()=>{Xa("beforeDOMElementCreation",{assembler:r,params:t});let a=[];return r(o=>{Array.isArray(o)?o.map(u=>{a=a.concat(u.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(dt.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},d4={mixout(){return{counter(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:o={},styles:u={}}=t;return Jf({type:"counter",content:r},()=>(Xa("beforeDOMElementCreation",{content:r,params:t}),GN({content:r.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(dt.cssPrefix,"-layers-counter"),...a]}})))}}}},m4={mixout(){return{text(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=li,title:a=null,classes:o=[],attributes:u={},styles:h={}}=t;return Jf({type:"text",content:r},()=>(Xa("beforeDOMElementCreation",{content:r,params:t}),pE({content:r,transform:it(it({},li),n),title:a,extra:{attributes:u,styles:h,classes:["".concat(dt.cssPrefix,"-layers-text"),...o]}})))}}},provides(r){r.generateLayersText=function(t,n){const{title:a,transform:o,extra:u}=n;let h=null,m=null;if(u1){const g=parseInt(getComputedStyle(t).fontSize,10),y=t.getBoundingClientRect();h=y.width/g,m=y.height/g}return dt.autoA11y&&!a&&(u.attributes["aria-hidden"]="true"),Promise.resolve([t,pE({content:t.innerHTML,width:h,height:m,transform:o,title:a,extra:u,watchable:!0})])}}};const p4=new RegExp('"',"ug"),bE=[1105920,1112319],AE=it(it(it(it({},{FontAwesome:{normal:"fas",400:"fas"}}),UD),eN),QD),fp=Object.keys(AE).reduce((r,t)=>(r[t.toLowerCase()]=AE[t],r),{}),g4=Object.keys(fp).reduce((r,t)=>{const n=fp[t];return r[t]=n[900]||[...Object.entries(n)][0][1],r},{});function y4(r){const t=r.replace(p4,""),n=AN(t,0),a=n>=bE[0]&&n<=bE[1],o=t.length===2?t[0]===t[1]:!1;return{value:ip(o?t[0]:t),isSecondary:a||o}}function v4(r,t){const n=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),o=isNaN(a)?"normal":a;return(fp[n]||{})[o]||g4[n]}function SE(r,t){const n="".concat(nN).concat(t.replace(":","-"));return new Promise((a,o)=>{if(r.getAttribute(n)!==null)return a();const h=yo(r.children).filter(R=>R.getAttribute(Jm)===t)[0],m=Kr.getComputedStyle(r,t),g=m.getPropertyValue("font-family"),y=g.match(oN),E=m.getPropertyValue("font-weight"),S=m.getPropertyValue("content");if(h&&!y)return r.removeChild(h),a();if(y&&S!=="none"&&S!==""){const R=m.getPropertyValue("content");let B=v4(g,E);const{value:k,isSecondary:W}=y4(R),q=y[0].startsWith("FontAwesome");let Y=ug(B,k),nt=Y;if(q){const Z=ON(k);Z.iconName&&Z.prefix&&(Y=Z.iconName,B=Z.prefix)}if(Y&&!W&&(!h||h.getAttribute(ig)!==B||h.getAttribute(rg)!==nt)){r.setAttribute(n,nt),h&&r.removeChild(h);const Z=a4(),{extra:ct}=Z;ct.attributes[Jm]=t,lp(Y,B).then(ut=>{const At=cg(it(it({},Z),{},{icons:{main:ut,mask:N1()},prefix:B,iconName:nt,extra:ct,watchable:!0})),D=te.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?r.insertBefore(D,r.firstChild):r.appendChild(D),D.outerHTML=At.map(w=>gu(w)).join(`
`),r.removeAttribute(n),a()}).catch(o)}else a()}else a()})}function _4(r){return Promise.all([SE(r,"::before"),SE(r,"::after")])}function E4(r){return r.parentNode!==document.head&&!~rN.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Jm)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function wE(r){if(ir)return new Promise((t,n)=>{const a=yo(r.querySelectorAll("*")).filter(E4).map(_4),o=fg.begin("searchPseudoElements");V1(),Promise.all(a).then(()=>{o(),cp(),t()}).catch(()=>{o(),cp(),n()})})}var T4={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=wE,r}}},provides(r){r.pseudoElements2svg=function(t){const{node:n=te}=t;dt.searchPseudoElements&&wE(n)}}};let RE=!1;var b4={mixout(){return{dom:{unwatch(){V1(),RE=!0}}}},hooks(){return{bootstrap(){_E(ap("mutationObserverCallbacks",{}))},noAuto(){e4()},watch(r){const{observeMutationsRoot:t}=r;RE?cp():_E(ap("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const CE=r=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((n,a)=>{const o=a.toLowerCase().split("-"),u=o[0];let h=o.slice(1).join("-");if(u&&h==="h")return n.flipX=!0,n;if(u&&h==="v")return n.flipY=!0,n;if(h=parseFloat(h),isNaN(h))return n;switch(u){case"grow":n.size=n.size+h;break;case"shrink":n.size=n.size-h;break;case"left":n.x=n.x-h;break;case"right":n.x=n.x+h;break;case"up":n.y=n.y-h;break;case"down":n.y=n.y+h;break;case"rotate":n.rotate=n.rotate+h;break}return n},t)};var A4={mixout(){return{parse:{transform:r=>CE(r)}}},hooks(){return{parseNodeAttributes(r,t){const n=t.getAttribute("data-fa-transform");return n&&(r.transform=CE(n)),r}}},provides(r){r.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:o,iconWidth:u}=t;const h={transform:"translate(".concat(o/2," 256)")},m="translate(".concat(a.x*32,", ").concat(a.y*32,") "),g="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),y="rotate(".concat(a.rotate," 0 0)"),E={transform:"".concat(m," ").concat(g," ").concat(y)},S={transform:"translate(".concat(u/2*-1," -256)")},R={outer:h,inner:E,path:S};return{tag:"g",attributes:it({},R.outer),children:[{tag:"g",attributes:it({},R.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:it(it({},n.icon.attributes),R.path)}]}]}}}};const bm={x:0,y:0,width:"100%",height:"100%"};function IE(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||t)&&(r.attributes.fill="black"),r}function S4(r){return r.tag==="g"?r.children:[r]}var w4={hooks(){return{parseNodeAttributes(r,t){const n=t.getAttribute("data-fa-mask"),a=n?Zf(n.split(" ").map(o=>o.trim())):N1();return a.prefix||(a.prefix=Qr()),r.mask=a,r.maskId=t.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(t){let{children:n,attributes:a,main:o,mask:u,maskId:h,transform:m}=t;const{width:g,icon:y}=o,{width:E,icon:S}=u,R=yN({transform:m,containerWidth:E,iconWidth:g}),B={tag:"rect",attributes:it(it({},bm),{},{fill:"white"})},k=y.children?{children:y.children.map(IE)}:{},W={tag:"g",attributes:it({},R.inner),children:[IE(it({tag:y.tag,attributes:it(it({},y.attributes),R.path)},k))]},q={tag:"g",attributes:it({},R.outer),children:[W]},Y="mask-".concat(h||Jl()),nt="clip-".concat(h||Jl()),Z={tag:"mask",attributes:it(it({},bm),{},{id:Y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,q]},ct={tag:"defs",children:[{tag:"clipPath",attributes:{id:nt},children:S4(S)},Z]};return n.push(ct,{tag:"rect",attributes:it({fill:"currentColor","clip-path":"url(#".concat(nt,")"),mask:"url(#".concat(Y,")")},bm)}),{children:n,attributes:a}}}},R4={provides(r){let t=!1;Kr.matchMedia&&(t=Kr.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:it(it({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const u=it(it({},o),{},{attributeName:"opacity"}),h={tag:"circle",attributes:it(it({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||h.children.push({tag:"animate",attributes:it(it({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:it(it({},u),{},{values:"1;0;1;1;0;1;"})}),n.push(h),n.push({tag:"path",attributes:it(it({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:it(it({},u),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:it(it({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:it(it({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},C4={hooks(){return{parseNodeAttributes(r,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return r.symbol=a,r}}}},I4=[EN,f4,h4,d4,m4,T4,b4,A4,w4,R4,C4];UN(I4,{mixoutsTo:vn});vn.noAuto;vn.config;vn.library;vn.dom;const hp=vn.parse;vn.findIconDefinition;vn.toHtml;const O4=vn.icon;vn.layer;vn.text;vn.counter;var Am={exports:{}},Sm,OE;function x4(){if(OE)return Sm;OE=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sm=r,Sm}var wm,xE;function D4(){if(xE)return wm;xE=1;var r=x4();function t(){}function n(){}return n.resetWarningCache=t,wm=function(){function a(h,m,g,y,E,S){if(S!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return u.PropTypes=u,u},wm}var DE;function N4(){return DE||(DE=1,Am.exports=D4()()),Am.exports}var M4=N4();const Dt=LE(M4);function NE(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,a)}return n}function oi(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?NE(Object(n),!0).forEach(function(a){Ws(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):NE(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function Mf(r){"@babel/helpers - typeof";return Mf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mf(r)}function Ws(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function P4(r,t){if(r==null)return{};var n={},a=Object.keys(r),o,u;for(u=0;u<a.length;u++)o=a[u],!(t.indexOf(o)>=0)&&(n[o]=r[o]);return n}function k4(r,t){if(r==null)return{};var n=P4(r,t),a,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)a=u[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function dp(r){return L4(r)||V4(r)||U4(r)||j4()}function L4(r){if(Array.isArray(r))return mp(r)}function V4(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function U4(r,t){if(r){if(typeof r=="string")return mp(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mp(r,t)}}function mp(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=r[n];return a}function j4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z4(r){var t,n=r.beat,a=r.fade,o=r.beatFade,u=r.bounce,h=r.shake,m=r.flash,g=r.spin,y=r.spinPulse,E=r.spinReverse,S=r.pulse,R=r.fixedWidth,B=r.inverse,k=r.border,W=r.listItem,q=r.flip,Y=r.size,nt=r.rotation,Z=r.pull,ct=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":u,"fa-shake":h,"fa-flash":m,"fa-spin":g,"fa-spin-reverse":E,"fa-spin-pulse":y,"fa-pulse":S,"fa-fw":R,"fa-inverse":B,"fa-border":k,"fa-li":W,"fa-flip":q===!0,"fa-flip-horizontal":q==="horizontal"||q==="both","fa-flip-vertical":q==="vertical"||q==="both"},Ws(t,"fa-".concat(Y),typeof Y<"u"&&Y!==null),Ws(t,"fa-rotate-".concat(nt),typeof nt<"u"&&nt!==null&&nt!==0),Ws(t,"fa-pull-".concat(Z),typeof Z<"u"&&Z!==null),Ws(t,"fa-swap-opacity",r.swapOpacity),t);return Object.keys(ct).map(function(ut){return ct[ut]?ut:null}).filter(function(ut){return ut})}function B4(r){return r=r-0,r===r}function j1(r){return B4(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var H4=["style"];function F4(r){return r.charAt(0).toUpperCase()+r.slice(1)}function q4(r){return r.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),o=j1(n.slice(0,a)),u=n.slice(a+1).trim();return o.startsWith("webkit")?t[F4(o)]=u:t[o]=u,t},{})}function z1(r,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(g){return z1(r,g)}),o=Object.keys(t.attributes||{}).reduce(function(g,y){var E=t.attributes[y];switch(y){case"class":g.attrs.className=E,delete t.attributes.class;break;case"style":g.attrs.style=q4(E);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?g.attrs[y.toLowerCase()]=E:g.attrs[j1(y)]=E}return g},{attrs:{}}),u=n.style,h=u===void 0?{}:u,m=k4(n,H4);return o.attrs.style=oi(oi({},o.attrs.style),h),r.apply(void 0,[t.tag,oi(oi({},o.attrs),m)].concat(dp(a)))}var B1=!1;try{B1=!0}catch{}function G4(){if(!B1&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function ME(r){if(r&&Mf(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(hp.icon)return hp.icon(r);if(r===null)return null;if(r&&Mf(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Rm(r,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ws({},r,t):{}}var PE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Hl=VE.forwardRef(function(r,t){var n=oi(oi({},PE),r),a=n.icon,o=n.mask,u=n.symbol,h=n.className,m=n.title,g=n.titleId,y=n.maskId,E=ME(a),S=Rm("classes",[].concat(dp(z4(n)),dp((h||"").split(" ")))),R=Rm("transform",typeof n.transform=="string"?hp.transform(n.transform):n.transform),B=Rm("mask",ME(o)),k=O4(E,oi(oi(oi(oi({},S),R),B),{},{symbol:u,title:m,titleId:g,maskId:y}));if(!k)return G4("Could not find icon",E),null;var W=k.abstract,q={ref:t};return Object.keys(n).forEach(function(Y){PE.hasOwnProperty(Y)||(q[Y]=n[Y])}),Y4(W[0],q)});Hl.displayName="FontAwesomeIcon";Hl.propTypes={beat:Dt.bool,border:Dt.bool,beatFade:Dt.bool,bounce:Dt.bool,className:Dt.string,fade:Dt.bool,flash:Dt.bool,mask:Dt.oneOfType([Dt.object,Dt.array,Dt.string]),maskId:Dt.string,fixedWidth:Dt.bool,inverse:Dt.bool,flip:Dt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Dt.oneOfType([Dt.object,Dt.array,Dt.string]),listItem:Dt.bool,pull:Dt.oneOf(["right","left"]),pulse:Dt.bool,rotation:Dt.oneOf([0,90,180,270]),shake:Dt.bool,size:Dt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Dt.bool,spinPulse:Dt.bool,spinReverse:Dt.bool,symbol:Dt.oneOfType([Dt.bool,Dt.string]),title:Dt.string,titleId:Dt.string,transform:Dt.oneOfType([Dt.string,Dt.object]),swapOpacity:Dt.bool};var Y4=z1.bind(null,VE.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const kE={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},K4={prefix:"fas",iconName:"file-circle-plus",icon:[576,512,[58606],"e494","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48z"]},Q4=()=>{const[r,t]=K.useState(window.innerWidth<=768);return K.useEffect(()=>{const n=()=>{t(window.innerWidth<=768)};window.addEventListener("resize",n)},[]),M.jsxs("section",{children:[M.jsx("div",{className:"container-imagem",children:M.jsx("img",{src:CD,alt:""})}),r&&M.jsx("div",{className:"container-imagem-mobile",children:M.jsx("img",{src:ID,alt:""})}),M.jsx("div",{className:"container-buttons",children:M.jsxs("div",{className:"list",children:[M.jsx("div",{children:M.jsx(ci,{to:"PetEncontrados",children:M.jsxs("button",{className:"button1",children:[" ",M.jsx(Hl,{icon:kE,size:"1x",color:"#FFF"})," Cadastrar Pet Encontrado"]})})}),M.jsx("div",{children:M.jsx(ci,{to:"CadastroPet",children:M.jsxs("button",{className:"button2",children:[M.jsx(Hl,{icon:K4,size:"1x",color:"#FFF"})," Cadastre seu Pet"]})})}),M.jsx("div",{children:M.jsx("button",{className:"button3",children:"Cadastrar Pet Encontrado"})}),M.jsx("div",{children:M.jsx("button",{className:"button4",children:"Cadastrar Pet Encontrado"})})]})}),r&&M.jsx("div",{className:"container-buttons-mobile",children:M.jsxs("div",{className:"list-mobile",children:[M.jsx("div",{children:M.jsx(ci,{to:"PetEncontrados",children:M.jsxs("button",{className:"button1",children:[" ",M.jsx(Hl,{icon:kE,size:"1x",color:"#FFF"})," Cadastrar Pet Encontrado"]})})}),M.jsx("div",{children:M.jsx("button",{className:"button2",children:"Cadastrar Pet Encontrado"})}),M.jsx("div",{children:M.jsx("button",{className:"button3",children:"Cadastrar Pet Encontrado"})}),M.jsx("div",{children:M.jsx("button",{className:"button4",children:"Cadastrar Pet Encontrado"})})]})})]})},X4=()=>{const[r,t]=K.useState(""),[n,a]=K.useState(""),[o,u]=K.useState(""),[h,m]=K.useState(""),[g,y]=K.useState(""),[E,S]=K.useState(""),[R,B]=K.useState(""),[k,W]=K.useState(""),[q,Y]=K.useState(""),nt={cahorro:["Labrador","Bulldog","Poodle","Golden Retriever"],gato:["Persa","Siamês","Maine Coon","Sphynx"],outro:["Coelho","Hamster","Papagaio","Tartaruga"],genero:["Macho","Fêmea","Não indentificado"]},Z=A=>(A=A.replace(/\D/g,""),A.length<=2?`(${A}`:A.length<=6?`(${A.slice(0,2)}) ${A.slice(2)}`:`(${A.slice(0,2)}) ${A.slice(2,7)}-${A.slice(7,11)}`),ct=A=>{let O=A.target.value;O=O.replace(/\D/g,""),O.length<=11&&m(Z(O))},ut=()=>{m(Z(h))},At=()=>{m(h.replace(/\D/g,""))},D=A=>{if(A.key==="Backspace"){let O=h.replace(/\D/g,"");O=O.slice(0,-1),m(Z(O)),A.preventDefault()}},w=async A=>{if(A.preventDefault(),!r||!n||!o||!h||!E||!R||!k||!g){alert("Por favor, preencha os campos. ");return}try{await SD(hD(a1,"petsEncontrado"),{nomePet:g,especie:r,raca:n,genero:o,telefone:h,nome:k,endereco:E,email:R,descricao:q,dataCadastro:new Date}),alert("Cadastro realizado com sucesso")}catch(O){console.error("Erro ao cadastrar pet",O),alert("Houve um erro ao cadasr o pet. Tente novamente.")}};return M.jsx("div",{className:"container-principal-form",children:M.jsxs("div",{className:"container-geral",children:[M.jsxs("div",{className:"container-titulo",children:[M.jsx("h2",{children:"Preencha o formulário para cadastrar o pet encontrado"}),M.jsx("p",{children:"Quanto mais informações você colocar, mais fácil ele será encontrado pela família."})]}),M.jsx("form",{className:"container-form",onSubmit:w,children:M.jsxs("div",{className:"form-itens",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"nome",children:"Digite o identificador do pet"}),M.jsx("input",{type:"text",name:"nome-pet",id:"nome-pet",placeholder:"Digite o código encontrado na coleira do pet",value:g,onChange:A=>y(A.target.value)})]}),M.jsxs("div",{className:"form-select",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"nome",children:"Espécie"}),M.jsxs("select",{id:"raca",value:r,onChange:A=>{t(A.target.value),a("")},children:[M.jsx("option",{value:"",children:"-Selecione-"}),M.jsx("option",{value:"cahorro",children:"Cachorro"}),M.jsx("option",{value:"gato",children:"Gato"}),M.jsx("option",{value:"outro",children:"Outros"})]})]}),M.jsxs("div",{children:[M.jsx("label",{htmlFor:"nome",children:"Raça"}),M.jsxs("select",{id:"raça",value:n,onChange:A=>a(A.target.value),disabled:!r,children:[M.jsx("option",{value:"",children:"-Selecione-"}),r&&nt[r].map(A=>M.jsx("option",{value:A,children:A},A))]})]}),M.jsxs("div",{children:[M.jsx("label",{htmlFor:"nome",children:"Gênero"}),M.jsxs("select",{id:"genero",value:o,onChange:A=>u(A.target.value),children:[M.jsx("option",{value:"",children:"-Selecione-"}),nt.genero.map(A=>M.jsx("option",{value:A,children:A},A))]})]})]}),M.jsxs("div",{className:"input-endereco",children:[M.jsx("label",{htmlFor:"nome",children:"Bairro onde o pet foi encontrado"}),M.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o bairro onde você encontrou o pet",value:E,onChange:A=>S(A.target.value)})]}),M.jsxs("div",{style:{marginTop:20},children:[M.jsx("label",{htmlFor:"nome",children:"Nome Completo"}),M.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o seu nome",value:k,onChange:A=>W(A.target.value)})]}),M.jsxs("div",{className:"form-select",children:[M.jsxs("div",{children:[M.jsx("label",{htmlFor:"email",children:"E-mail"}),M.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu e-mail",value:R,onChange:A=>B(A.target.value)})]}),M.jsxs("div",{children:[M.jsx("label",{htmlFor:"tel",children:"Telefone para contato"}),M.jsx("input",{type:"tel",id:"tel",name:"tel",placeholder:"(xx) xxxxx-xxxx",maxLength:17,value:h,onChange:ct,onFocus:At,onBlur:ut,onKeyDown:D})]})]}),M.jsx("div",{className:"text-area",children:M.jsx("textarea",{name:"",id:"tex-area",placeholder:"Alguma característica única/diferenciada?",value:q,onChange:A=>Y(A.target.value)})}),M.jsx("div",{className:"botao-cadastrar",children:M.jsx("button",{type:"submit",children:"Cadastrar"})})]})})]})})},$4="/assets/undraw_shopping_a55o-Drfkb-Um.svg";function W4(){const[r,t]=K.useState({nome:"",email:"",bairro:"",senha:"",confirmarSenha:""}),n=async o=>{t({...r,[o.target.name]:o.target.value})},a=async o=>{if(o.preventDefault(),r.senha!==r.confirmarSenha){alert("As senhas não coincidem");return}try{const h=(await AC(xf,r.email,r.senha)).user;await AD(qb(a1,"usuarios",h.uid),{nome:r.nome,email:r.email,localdiade:r.bairro,senha:r.senha}),alert("Cadastro realiazdo com sucesso! ")}catch(u){console.error("Erro ao cadastrar usuario! "),alert("Erro ao cadastrar:"+u.message)}};return M.jsxs("div",{children:[M.jsxs("div",{className:"trocar",children:[M.jsx("div",{children:M.jsx(ql,{to:"/Login",children:M.jsx("h1",{className:"login-h1",children:"Login"})})}),M.jsx("div",{children:M.jsx(ql,{to:"/CadastroUsuario",children:M.jsx("h1",{className:"cadastro-h1",children:"Cadastro"})})})]}),M.jsx("div",{className:"container",children:M.jsxs("div",{className:"geral",children:[M.jsx("div",{className:"div-img",children:M.jsx("img",{src:$4,alt:""})}),M.jsx("div",{className:"form-container",children:M.jsxs("form",{className:"form",onSubmit:a,children:[M.jsxs("div",{className:"form-header",children:[M.jsxs("div",{className:"titulo",children:[M.jsx("h2",{children:"Cadastre-se"}),M.jsx("div",{})]}),M.jsx("div",{className:"login-button",children:M.jsx(ci,{to:"/Login",children:M.jsx("button",{type:"button",children:"Entrar"})})})]}),M.jsxs("div",{className:"div-inputs",children:[M.jsxs("div",{className:"input",children:[M.jsx("label",{htmlFor:"nome",children:"Nome Completo"}),M.jsx("input",{type:"text",id:"nome",name:"nome",placeholder:"Digite seu nome",value:r.nome,onChange:n})]}),M.jsxs("div",{className:"input",children:[M.jsx("label",{htmlFor:"nome",children:"E-mail"}),M.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu e-mail",value:r.email,onChange:n})]}),M.jsxs("div",{className:"input",children:[M.jsx("label",{htmlFor:"nome",children:"Localidade"}),M.jsx("input",{type:"text",id:"bairro",name:"bairro",placeholder:"Digite o local onde você reside",value:r.bairro,onChange:n})]}),M.jsxs("div",{className:"input",children:[M.jsx("label",{htmlFor:"nome",children:"Senha"}),M.jsx("input",{type:"password",id:"senha",name:"senha",placeholder:"Digite sua senha",value:r.senha,onChange:n})]}),M.jsxs("div",{className:"input",children:[M.jsx("label",{htmlFor:"nome",children:"Confirmar senha"}),M.jsx("input",{type:"password",id:"confirmarSenha",name:"confirmarSenha",placeholder:"Confirme sua senha",value:r.confirmarSenha,onChange:n})]}),M.jsx("div",{className:"cadastro",children:M.jsx("div",{children:M.jsx("button",{type:"submit",children:"Enviar"})})})]})]})})]})})]})}const Z4=()=>{const[r,t]=K.useState(""),[n,a]=K.useState(""),o=yp(),u=async h=>{h.preventDefault();try{await SC(xf,r,n),alert("Login realizado com sucesso! "),o("/")}catch(m){console.error("Erro ao fazer login",m),alert("Erro ao fazer login: "+m.message)}};return M.jsxs("div",{children:[M.jsxs("div",{className:"trocar",children:[M.jsx("div",{children:M.jsx(ql,{to:"/Login",className:({activate:h})=>h?"link-ativo":"link-inativo",children:M.jsx("h1",{children:"Login"})})}),M.jsx("div",{children:M.jsx(ql,{to:"/CadastroUsuario",className:({activate:h})=>h?"link-ativo":"link-inativo",children:M.jsx("h1",{children:"Cadastro"})})})]}),M.jsx("div",{className:"container-login",children:M.jsxs("form",{className:"form-login",onSubmit:u,children:[M.jsxs("div",{className:"titulo-login",children:[M.jsx("h1",{children:"Login"}),M.jsx("div",{className:"linha-login"})]}),M.jsxs("div",{className:"inputs-login",children:[M.jsxs("div",{className:"inputs-",children:[M.jsx("label",{htmlFor:"email",children:"Seu e-mail"}),M.jsx("input",{type:"text",name:"email",id:"email",value:r,onChange:h=>t(h.target.value)})]}),M.jsxs("div",{className:"inputs-",children:[M.jsx("label",{htmlFor:"senha",children:"Sua senha"}),M.jsx("input",{type:"password",name:"senha",id:"senha",value:n,onChange:h=>a(h.target.value)})]})]}),M.jsx("div",{className:"logar",children:M.jsx("button",{type:"submit",children:"Logar"})}),M.jsxs("div",{className:"semconta",children:[M.jsx("h4",{children:"Ainda não tem conta?"}),M.jsx(ci,{to:"/CadastroUsuario",children:M.jsx("button",{type:"button",children:"Cadastre-se"})})]})]})})]})},J4=()=>M.jsx("div",{className:"container-cadastropet",children:M.jsxs("div",{className:"container-form-cadastro",children:[M.jsx("div",{id:"container-titulos",children:M.jsx("h1",{children:"Cadastre seu pet"})}),M.jsx("form",{})]})});function tM(){return M.jsxs(kw,{children:[M.jsx(RD,{}),M.jsxs(hw,{children:[M.jsx(Ys,{path:"/",element:M.jsx(Q4,{})}),M.jsx(Ys,{path:"/PetEncontrados",element:M.jsx(X4,{})}),M.jsx(Ys,{path:"/CadastroUsuario",element:M.jsx(W4,{})}),M.jsx(Ys,{path:"/Login",element:M.jsx(Z4,{})}),M.jsx(Ys,{path:"/CadastroPet",element:M.jsx(J4,{})})]})]})}TS.createRoot(document.getElementById("root")).render(M.jsx(K.StrictMode,{children:M.jsx(tM,{})}));
