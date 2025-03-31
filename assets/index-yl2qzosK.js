(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function PE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zd={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function f1(){if(T_)return wl;T_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:h,ref:o!==void 0?o:null,props:u}}return wl.Fragment=t,wl.jsx=n,wl.jsxs=n,wl}var b_;function h1(){return b_||(b_=1,Zd.exports=f1()),Zd.exports}var U=h1(),Jd={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function d1(){if(A_)return St;A_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function R(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,W={};function q(D,et,lt){this.props=D,this.context=et,this.refs=W,this.updater=lt||B}q.prototype.isReactComponent={},q.prototype.setState=function(D,et){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,et,"setState")},q.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Y(){}Y.prototype=q.prototype;function nt(D,et,lt){this.props=D,this.context=et,this.refs=W,this.updater=lt||B}var Z=nt.prototype=new Y;Z.constructor=nt,P(Z,q.prototype),Z.isPureReactComponent=!0;var ct=Array.isArray,ut={H:null,A:null,T:null,S:null,V:null},At=Object.prototype.hasOwnProperty;function x(D,et,lt,at,gt,Ct){return lt=Ct.ref,{$$typeof:r,type:D,key:et,ref:lt!==void 0?lt:null,props:Ct}}function w(D,et){return x(D.type,et,void 0,void 0,void 0,D.props)}function A(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function O(D){var et={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(lt){return et[lt]})}var M=/\/+/g;function L(D,et){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):et.toString(36)}function I(){}function Pe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(et){D.status==="pending"&&(D.status="fulfilled",D.value=et)},function(et){D.status==="pending"&&(D.status="rejected",D.reason=et)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function se(D,et,lt,at,gt){var Ct=typeof D;(Ct==="undefined"||Ct==="boolean")&&(D=null);var bt=!1;if(D===null)bt=!0;else switch(Ct){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(D.$$typeof){case r:case t:bt=!0;break;case E:return bt=D._init,se(bt(D._payload),et,lt,at,gt)}}if(bt)return gt=gt(D),bt=at===""?"."+L(D,0):at,ct(gt)?(lt="",bt!=null&&(lt=bt.replace(M,"$&/")+"/"),se(gt,et,lt,"",function(qn){return qn})):gt!=null&&(A(gt)&&(gt=w(gt,lt+(gt.key==null||D&&D.key===gt.key?"":(""+gt.key).replace(M,"$&/")+"/")+bt)),et.push(gt)),1;bt=0;var we=at===""?".":at+":";if(ct(D))for(var Wt=0;Wt<D.length;Wt++)at=D[Wt],Ct=we+L(at,Wt),bt+=se(at,et,lt,Ct,gt);else if(Wt=R(D),typeof Wt=="function")for(D=Wt.call(D),Wt=0;!(at=D.next()).done;)at=at.value,Ct=we+L(at,Wt++),bt+=se(at,et,lt,Ct,gt);else if(Ct==="object"){if(typeof D.then=="function")return se(Pe(D),et,lt,at,gt);throw et=String(D),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return bt}function Q(D,et,lt){if(D==null)return D;var at=[],gt=0;return se(D,at,"","",function(Ct){return et.call(lt,Ct,gt++)}),at}function ot(D){if(D._status===-1){var et=D._result;et=et(),et.then(function(lt){(D._status===0||D._status===-1)&&(D._status=1,D._result=lt)},function(lt){(D._status===0||D._status===-1)&&(D._status=2,D._result=lt)}),D._status===-1&&(D._status=0,D._result=et)}if(D._status===1)return D._result.default;throw D._result}var pt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function jt(){}return St.Children={map:Q,forEach:function(D,et,lt){Q(D,function(){et.apply(this,arguments)},lt)},count:function(D){var et=0;return Q(D,function(){et++}),et},toArray:function(D){return Q(D,function(et){return et})||[]},only:function(D){if(!A(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=q,St.Fragment=n,St.Profiler=o,St.PureComponent=nt,St.StrictMode=a,St.Suspense=g,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ut,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ut.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,et,lt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var at=P({},D.props),gt=D.key,Ct=void 0;if(et!=null)for(bt in et.ref!==void 0&&(Ct=void 0),et.key!==void 0&&(gt=""+et.key),et)!At.call(et,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&et.ref===void 0||(at[bt]=et[bt]);var bt=arguments.length-2;if(bt===1)at.children=lt;else if(1<bt){for(var we=Array(bt),Wt=0;Wt<bt;Wt++)we[Wt]=arguments[Wt+2];at.children=we}return x(D.type,gt,void 0,void 0,Ct,at)},St.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},St.createElement=function(D,et,lt){var at,gt={},Ct=null;if(et!=null)for(at in et.key!==void 0&&(Ct=""+et.key),et)At.call(et,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(gt[at]=et[at]);var bt=arguments.length-2;if(bt===1)gt.children=lt;else if(1<bt){for(var we=Array(bt),Wt=0;Wt<bt;Wt++)we[Wt]=arguments[Wt+2];gt.children=we}if(D&&D.defaultProps)for(at in bt=D.defaultProps,bt)gt[at]===void 0&&(gt[at]=bt[at]);return x(D,Ct,void 0,void 0,null,gt)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:m,render:D}},St.isValidElement=A,St.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ot}},St.memo=function(D,et){return{$$typeof:y,type:D,compare:et===void 0?null:et}},St.startTransition=function(D){var et=ut.T,lt={};ut.T=lt;try{var at=D(),gt=ut.S;gt!==null&&gt(lt,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(jt,pt)}catch(Ct){pt(Ct)}finally{ut.T=et}},St.unstable_useCacheRefresh=function(){return ut.H.useCacheRefresh()},St.use=function(D){return ut.H.use(D)},St.useActionState=function(D,et,lt){return ut.H.useActionState(D,et,lt)},St.useCallback=function(D,et){return ut.H.useCallback(D,et)},St.useContext=function(D){return ut.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,et){return ut.H.useDeferredValue(D,et)},St.useEffect=function(D,et,lt){var at=ut.H;if(typeof lt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return at.useEffect(D,et)},St.useId=function(){return ut.H.useId()},St.useImperativeHandle=function(D,et,lt){return ut.H.useImperativeHandle(D,et,lt)},St.useInsertionEffect=function(D,et){return ut.H.useInsertionEffect(D,et)},St.useLayoutEffect=function(D,et){return ut.H.useLayoutEffect(D,et)},St.useMemo=function(D,et){return ut.H.useMemo(D,et)},St.useOptimistic=function(D,et){return ut.H.useOptimistic(D,et)},St.useReducer=function(D,et,lt){return ut.H.useReducer(D,et,lt)},St.useRef=function(D){return ut.H.useRef(D)},St.useState=function(D){return ut.H.useState(D)},St.useSyncExternalStore=function(D,et,lt){return ut.H.useSyncExternalStore(D,et,lt)},St.useTransition=function(){return ut.H.useTransition()},St.version="19.1.0",St}var S_;function dp(){return S_||(S_=1,Jd.exports=d1()),Jd.exports}var K=dp();const kE=PE(K);var tm={exports:{}},Rl={},em={exports:{}},nm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function m1(){return w_||(w_=1,function(r){function t(Q,ot){var pt=Q.length;Q.push(ot);t:for(;0<pt;){var jt=pt-1>>>1,D=Q[jt];if(0<o(D,ot))Q[jt]=ot,Q[pt]=D,pt=jt;else break t}}function n(Q){return Q.length===0?null:Q[0]}function a(Q){if(Q.length===0)return null;var ot=Q[0],pt=Q.pop();if(pt!==ot){Q[0]=pt;t:for(var jt=0,D=Q.length,et=D>>>1;jt<et;){var lt=2*(jt+1)-1,at=Q[lt],gt=lt+1,Ct=Q[gt];if(0>o(at,pt))gt<D&&0>o(Ct,at)?(Q[jt]=Ct,Q[gt]=pt,jt=gt):(Q[jt]=at,Q[lt]=pt,jt=lt);else if(gt<D&&0>o(Ct,pt))Q[jt]=Ct,Q[gt]=pt,jt=gt;else break t}}return ot}function o(Q,ot){var pt=Q.sortIndex-ot.sortIndex;return pt!==0?pt:Q.id-ot.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var g=[],y=[],E=1,S=null,R=3,B=!1,P=!1,W=!1,q=!1,Y=typeof setTimeout=="function"?setTimeout:null,nt=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ct(Q){for(var ot=n(y);ot!==null;){if(ot.callback===null)a(y);else if(ot.startTime<=Q)a(y),ot.sortIndex=ot.expirationTime,t(g,ot);else break;ot=n(y)}}function ut(Q){if(W=!1,ct(Q),!P)if(n(g)!==null)P=!0,At||(At=!0,L());else{var ot=n(y);ot!==null&&se(ut,ot.startTime-Q)}}var At=!1,x=-1,w=5,A=-1;function O(){return q?!0:!(r.unstable_now()-A<w)}function M(){if(q=!1,At){var Q=r.unstable_now();A=Q;var ot=!0;try{t:{P=!1,W&&(W=!1,nt(x),x=-1),B=!0;var pt=R;try{e:{for(ct(Q),S=n(g);S!==null&&!(S.expirationTime>Q&&O());){var jt=S.callback;if(typeof jt=="function"){S.callback=null,R=S.priorityLevel;var D=jt(S.expirationTime<=Q);if(Q=r.unstable_now(),typeof D=="function"){S.callback=D,ct(Q),ot=!0;break e}S===n(g)&&a(g),ct(Q)}else a(g);S=n(g)}if(S!==null)ot=!0;else{var et=n(y);et!==null&&se(ut,et.startTime-Q),ot=!1}}break t}finally{S=null,R=pt,B=!1}ot=void 0}}finally{ot?L():At=!1}}}var L;if(typeof Z=="function")L=function(){Z(M)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Pe=I.port2;I.port1.onmessage=M,L=function(){Pe.postMessage(null)}}else L=function(){Y(M,0)};function se(Q,ot){x=Y(function(){Q(r.unstable_now())},ot)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_next=function(Q){switch(R){case 1:case 2:case 3:var ot=3;break;default:ot=R}var pt=R;R=ot;try{return Q()}finally{R=pt}},r.unstable_requestPaint=function(){q=!0},r.unstable_runWithPriority=function(Q,ot){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var pt=R;R=Q;try{return ot()}finally{R=pt}},r.unstable_scheduleCallback=function(Q,ot,pt){var jt=r.unstable_now();switch(typeof pt=="object"&&pt!==null?(pt=pt.delay,pt=typeof pt=="number"&&0<pt?jt+pt:jt):pt=jt,Q){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=pt+D,Q={id:E++,callback:ot,priorityLevel:Q,startTime:pt,expirationTime:D,sortIndex:-1},pt>jt?(Q.sortIndex=pt,t(y,Q),n(g)===null&&Q===n(y)&&(W?(nt(x),x=-1):W=!0,se(ut,pt-jt))):(Q.sortIndex=D,t(g,Q),P||B||(P=!0,At||(At=!0,L()))),Q},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Q){var ot=R;return function(){var pt=R;R=ot;try{return Q.apply(this,arguments)}finally{R=pt}}}}(nm)),nm}var R_;function p1(){return R_||(R_=1,em.exports=m1()),em.exports}var im={exports:{}},Ye={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function g1(){if(C_)return Ye;C_=1;var r=dp();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:g,containerInfo:y,implementation:E}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Ye.createPortal=function(g,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(g,y,null,E)},Ye.flushSync=function(g){var y=h.T,E=a.p;try{if(h.T=null,a.p=2,g)return g()}finally{h.T=y,a.p=E,a.d.f()}},Ye.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Ye.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Ye.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:R,fetchPriority:B}):E==="script"&&a.d.X(g,{crossOrigin:S,integrity:R,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ye.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Ye.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);a.d.L(g,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ye.preloadModule=function(g,y){if(typeof g=="string")if(y){var E=m(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Ye.requestFormReset=function(g){a.d.r(g)},Ye.unstable_batchedUpdates=function(g,y){return g(y)},Ye.useFormState=function(g,y,E){return h.H.useFormState(g,y,E)},Ye.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ye.version="19.1.0",Ye}var I_;function y1(){if(I_)return im.exports;I_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),im.exports=g1(),im.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function v1(){if(O_)return Rl;O_=1;var r=p1(),t=dp(),n=y1();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function h(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(a(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var _=!1,T=f.child;T;){if(T===s){_=!0,s=f,l=d;break}if(T===l){_=!0,l=f,s=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===s){_=!0,s=d,l=f;break}if(T===l){_=!0,l=d,s=f;break}T=T.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),nt=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),At=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case q:return"Profiler";case W:return"StrictMode";case ut:return"Suspense";case At:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case Z:return(e.displayName||"Context")+".Provider";case nt:return(e._context.displayName||"Context")+".Consumer";case ct:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case x:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case w:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var se=Array.isArray,Q=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},jt=[],D=-1;function et(e){return{current:e}}function lt(e){0>D||(e.current=jt[D],jt[D]=null,D--)}function at(e,i){D++,jt[D]=e.current,e.current=i}var gt=et(null),Ct=et(null),bt=et(null),we=et(null);function Wt(e,i){switch(at(bt,i),at(Ct,e),at(gt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Xv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Xv(i),e=$v(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}lt(gt),at(gt,e)}function qn(){lt(gt),lt(Ct),lt(bt)}function rr(e){e.memoizedState!==null&&at(we,e);var i=gt.current,s=$v(i,e.type);i!==s&&(at(Ct,e),at(gt,s))}function _i(e){Ct.current===e&&(lt(gt),lt(Ct)),we.current===e&&(lt(we),El._currentValue=pt)}var Zr=Object.prototype.hasOwnProperty,Jr=r.unstable_scheduleCallback,ta=r.unstable_cancelCallback,yo=r.unstable_shouldYield,pu=r.unstable_requestPaint,_n=r.unstable_now,Zf=r.unstable_getCurrentPriorityLevel,vo=r.unstable_ImmediatePriority,ts=r.unstable_UserBlockingPriority,ea=r.unstable_NormalPriority,Jf=r.unstable_LowPriority,es=r.unstable_IdlePriority,_o=r.log,gu=r.unstable_setDisableYieldValue,oe=null,Ft=null;function ln(e){if(typeof _o=="function"&&gu(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(oe,e)}catch{}}var qe=Math.clz32?Math.clz32:na,yu=Math.log,th=Math.LN2;function na(e){return e>>>=0,e===0?32:31-(yu(e)/th|0)|0}var ia=256,ra=4194304;function Mn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ns(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Mn(l):(_&=T,_!==0?f=Mn(_):s||(s=T&~e,s!==0&&(f=Mn(s))))):(T=l&~d,T!==0?f=Mn(T):_!==0?f=Mn(_):s||(s=l&~e,s!==0&&(f=Mn(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function aa(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Eo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var e=ia;return ia<<=1,(ia&4194048)===0&&(ia=256),e}function bo(){var e=ra;return ra<<=1,(ra&62914560)===0&&(ra=4194304),e}function Ei(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Ti(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ao(e,i,s,l,f,d){var _=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,C=e.expirationTimes,j=e.hiddenUpdates;for(s=_&~s;0<s;){var X=31-qe(s),J=1<<X;T[X]=0,C[X]=-1;var H=j[X];if(H!==null)for(j[X]=null,X=0;X<H.length;X++){var F=H[X];F!==null&&(F.lane&=-536870913)}s&=~J}l!==0&&Gn(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~i))}function Gn(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-qe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194090}function So(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-qe(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function ar(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sr(){var e=ot.p;return e!==0?e:(e=window.event,e===void 0?32:p_(e.type))}function vu(e,i){var s=ot.p;try{return ot.p=e,i()}finally{ot.p=s}}var ee=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ee,pe="__reactProps$"+ee,En="__reactContainer$"+ee,wo="__reactEvents$"+ee,eh="__reactListeners$"+ee,or="__reactHandles$"+ee,_u="__reactResources$"+ee,sa="__reactMarker$"+ee;function lr(e){delete e[Ee],delete e[pe],delete e[wo],delete e[eh],delete e[or]}function bi(e){var i=e[Ee];if(i)return i;for(var s=e.parentNode;s;){if(i=s[En]||s[Ee]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=t_(e);e!==null;){if(s=e[Ee])return s;e=t_(e)}return i}e=s,s=e.parentNode}return null}function Yn(e){if(e=e[Ee]||e[En]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Kn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ze(e){var i=e[_u];return i||(i=e[_u]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function he(e){e[sa]=!0}var Ro=new Set,rs={};function Pn(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(rs[e]=i,e=0;e<i.length;e++)Ro.add(i[e])}var Eu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tu={},oa={};function bu(e){return Zr.call(oa,e)?!0:Zr.call(Tu,e)?!1:Eu.test(e)?oa[e]=!0:(Tu[e]=!0,!1)}function ur(e,i,s){if(bu(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Qn(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function ke(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}var la,Au;function Si(e){if(la===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);la=i&&i[1]||"",Au=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+la+e+Au}var as=!1;function ss(e,i){if(!e||as)return"";as=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(F){var H=F}Reflect.construct(e,[],J)}else{try{J.call()}catch(F){H=F}e.call(J.prototype)}}else{try{throw Error()}catch(F){H=F}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(F){if(F&&H&&typeof F.stack=="string")return[F.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var C=_.split(`
`),j=T.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===j.length)for(l=C.length-1,f=j.length-1;1<=l&&0<=f&&C[l]!==j[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==j[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==j[f]){var X=`
`+C[l].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=l&&0<=f);break}}}finally{as=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Si(s):""}function Co(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return ss(e.type,!1);case 11:return ss(e.type.render,!1);case 1:return ss(e.type,!0);case 31:return Si("Activity");default:return""}}function os(e){try{var i="";do i+=Co(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Je(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Io(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nh(e){var i=Io(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,d=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ls(e){e._valueTracker||(e._valueTracker=nh(e))}function Oo(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=Io(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ih=/[\n"\\]/g;function ge(e){return e.replace(ih,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function un(e,i,s,l,f,d,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Je(i)):e.value!==""+Je(i)&&(e.value=""+Je(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?cr(e,_,Je(i)):s!=null?cr(e,_,Je(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Je(T):e.removeAttribute("name")}function ca(e,i,s,l,f,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+Je(s):"",i=i!=null?""+Je(i):s,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function cr(e,i,s){i==="number"&&ua(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function wi(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Je(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Yt(e,i,s){if(i!=null&&(i=""+Je(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Je(s):""}function fa(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(se(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Je(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ha=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Su(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||ha.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Do(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Su(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Su(e,d,i[d])}function xo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ah=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(e){return ah.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ri=null;function bn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ci=null,Ii=null;function No(e){var i=Yn(e);if(i&&(e=i.stateNode)){var s=e[pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(un(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[pe]||null;if(!f)throw Error(a(90));un(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&Oo(l)}break t;case"textarea":Yt(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&wi(e,!!s.multiple,i,!1)}}}var Xn=!1;function wu(e,i,s){if(Xn)return e(i,s);Xn=!0;try{var l=e(i);return l}finally{if(Xn=!1,(Ci!==null||Ii!==null)&&(vc(),Ci&&(i=Ci,e=Ii,Ii=Ci=null,No(i),e)))for(i=0;i<e.length;i++)No(e[i])}}function da(e,i){var s=e.stateNode;if(s===null)return null;var l=s[pe]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(kn)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){An=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{An=!1}var $n=null,fr=null,Oi=null;function Mo(){if(Oi)return Oi;var e,i=fr,s=i.length,l,f="value"in $n?$n.value:$n.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var _=s-e;for(l=1;l<=_&&i[s-l]===f[d-l];l++);return Oi=f.slice(e,1<l?1-l:void 0)}function Wn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function Po(){return!1}function Re(e){function i(s,l,f,d,_){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Zn:Po,this.isPropagationStopped=Po,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var Ht={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Re(Ht),pa=E({},Ht,{view:0,detail:0}),Ru=Re(pa),fs,hs,Jn,ga=E({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(fs=e.screenX-Jn.screenX,hs=e.screenY-Jn.screenY):hs=fs=0,Jn=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:hs}}),Sn=Re(ga),Cu=E({},ga,{dataTransfer:0}),sh=Re(Cu),ya=E({},pa,{relatedTarget:0}),ds=Re(ya),ko=E({},Ht,{animationName:0,elapsedTime:0,pseudoElement:0}),ms=Re(ko),Iu=E({},Ht,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ps=Re(Iu),oh=E({},Ht,{data:0}),Lo=Re(oh),va={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Du={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Du[e])?!!i[e]:!1}function _a(){return Vo}var xu=E({},pa,{key:function(e){if(e.key){var i=va[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ou[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?Wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gs=Re(xu),Nu=E({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uo=Re(Nu),Di=E({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),Mu=Re(Di),Pu=E({},Ht,{propertyName:0,elapsedTime:0,pseudoElement:0}),ku=Re(Pu),Lu=E({},ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ys=Re(Lu),tn=E({},Ht,{newState:0,oldState:0}),Vu=Re(tn),Uu=[9,13,27,32],ti=kn&&"CompositionEvent"in window,c=null;kn&&"documentMode"in document&&(c=document.documentMode);var p=kn&&"TextEvent"in window&&!c,v=kn&&(!ti||c&&8<c&&11>=c),b=" ",V=!1;function G(e,i){switch(e){case"keyup":return Uu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function st(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function Te(e,i){switch(e){case"compositionend":return st(i);case"keypress":return i.which!==32?null:(V=!0,b);case"textInput":return e=i.data,e===b&&V?null:e;default:return null}}function kt(e,i){if(Pt)return e==="compositionend"||!ti&&G(e,i)?(e=Mo(),Oi=fr=$n=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Ce={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function be(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ce[e.type]:i==="textarea"}function xi(e,i,s,l){Ci?Ii?Ii.push(l):Ii=[l]:Ci=l,i=Sc(i,"onChange"),0<i.length&&(s=new cs("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var Le=null,ei=null;function zo(e){qv(e,0)}function zu(e){var i=Kn(e);if(Oo(i))return e}function fg(e,i){if(e==="change")return i}var hg=!1;if(kn){var lh;if(kn){var uh="oninput"in document;if(!uh){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),uh=typeof dg.oninput=="function"}lh=uh}else lh=!1;hg=lh&&(!document.documentMode||9<document.documentMode)}function mg(){Le&&(Le.detachEvent("onpropertychange",pg),ei=Le=null)}function pg(e){if(e.propertyName==="value"&&zu(ei)){var i=[];xi(i,ei,e,bn(e)),wu(zo,i)}}function BA(e,i,s){e==="focusin"?(mg(),Le=i,ei=s,Le.attachEvent("onpropertychange",pg)):e==="focusout"&&mg()}function HA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zu(ei)}function FA(e,i){if(e==="click")return zu(i)}function qA(e,i){if(e==="input"||e==="change")return zu(i)}function GA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var cn=typeof Object.is=="function"?Object.is:GA;function jo(e,i){if(cn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Zr.call(i,f)||!cn(e[f],i[f]))return!1}return!0}function gg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yg(e,i){var s=gg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=gg(s)}}function vg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?vg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function _g(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ua(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ua(e.document)}return i}function ch(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var YA=kn&&"documentMode"in document&&11>=document.documentMode,vs=null,fh=null,Bo=null,hh=!1;function Eg(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;hh||vs==null||vs!==ua(l)||(l=vs,"selectionStart"in l&&ch(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Bo&&jo(Bo,l)||(Bo=l,l=Sc(fh,"onSelect"),0<l.length&&(i=new cs("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=vs)))}function Ea(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var _s={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},dh={},Tg={};kn&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ta(e){if(dh[e])return dh[e];if(!_s[e])return e;var i=_s[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Tg)return dh[e]=i[s];return e}var bg=Ta("animationend"),Ag=Ta("animationiteration"),Sg=Ta("animationstart"),KA=Ta("transitionrun"),QA=Ta("transitionstart"),XA=Ta("transitioncancel"),wg=Ta("transitionend"),Rg=new Map,mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mh.push("scrollEnd");function Ln(e,i){Rg.set(e,i),Pn(i,[e])}var Cg=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var s=Cg.get(e);return s!==void 0?s:(i={value:e,source:i,stack:os(i)},Cg.set(e,i),i)}return{value:e,source:i,stack:os(i)}}var Rn=[],Es=0,ph=0;function ju(){for(var e=Es,i=ph=Es=0;i<e;){var s=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var f=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&f!==null){var _=l.pending;_===null?f.next=f:(f.next=_.next,_.next=f),l.pending=f}d!==0&&Ig(s,f,d)}}function Bu(e,i,s,l){Rn[Es++]=e,Rn[Es++]=i,Rn[Es++]=s,Rn[Es++]=l,ph|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function gh(e,i,s,l){return Bu(e,i,s,l),Hu(e)}function Ts(e,i){return Bu(e,null,null,i),Hu(e)}function Ig(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-qe(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Hu(e){if(50<hl)throw hl=0,bd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var bs={};function $A(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,i,s,l){return new $A(e,i,s,l)}function yh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,i){var s=e.alternate;return s===null?(s=fn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Og(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Fu(e,i,s,l,f,d){var _=0;if(l=e,typeof e=="function")yh(e)&&(_=1);else if(typeof e=="string")_=ZS(e,s,gt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=fn(31,s,i,f),e.elementType=A,e.lanes=d,e;case P:return ba(s.children,f,d,i);case W:_=8,f|=24;break;case q:return e=fn(12,s,i,f|2),e.elementType=q,e.lanes=d,e;case ut:return e=fn(13,s,i,f),e.elementType=ut,e.lanes=d,e;case At:return e=fn(19,s,i,f),e.elementType=At,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:case Z:_=10;break t;case nt:_=9;break t;case ct:_=11;break t;case x:_=14;break t;case w:_=16,l=null;break t}_=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=fn(_,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function ba(e,i,s,l){return e=fn(7,e,l,i),e.lanes=s,e}function vh(e,i,s){return e=fn(6,e,null,i),e.lanes=s,e}function _h(e,i,s){return i=fn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var As=[],Ss=0,qu=null,Gu=0,Cn=[],In=0,Aa=null,Mi=1,Pi="";function Sa(e,i){As[Ss++]=Gu,As[Ss++]=qu,qu=e,Gu=i}function Dg(e,i,s){Cn[In++]=Mi,Cn[In++]=Pi,Cn[In++]=Aa,Aa=e;var l=Mi;e=Pi;var f=32-qe(l)-1;l&=~(1<<f),s+=1;var d=32-qe(i)+f;if(30<d){var _=f-f%5;d=(l&(1<<_)-1).toString(32),l>>=_,f-=_,Mi=1<<32-qe(i)+f|s<<f|l,Pi=d+e}else Mi=1<<d|s<<f|l,Pi=e}function Eh(e){e.return!==null&&(Sa(e,1),Dg(e,1,0))}function Th(e){for(;e===qu;)qu=As[--Ss],As[Ss]=null,Gu=As[--Ss],As[Ss]=null;for(;e===Aa;)Aa=Cn[--In],Cn[In]=null,Pi=Cn[--In],Cn[In]=null,Mi=Cn[--In],Cn[In]=null}var en=null,le=null,Bt=!1,wa=null,ni=!1,bh=Error(a(519));function Ra(e){var i=Error(a(418,""));throw qo(wn(i,e)),bh}function xg(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[Ee]=e,i[pe]=l,s){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(s=0;s<ml.length;s++)Dt(ml[s],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Dt("invalid",i),ca(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ls(i);break;case"select":Dt("invalid",i);break;case"textarea":Dt("invalid",i),fa(i,l.value,l.defaultValue,l.children),ls(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Qv(i.textContent,s)?(l.popover!=null&&(Dt("beforetoggle",i),Dt("toggle",i)),l.onScroll!=null&&Dt("scroll",i),l.onScrollEnd!=null&&Dt("scrollend",i),l.onClick!=null&&(i.onclick=wc),i=!0):i=!1,i||Ra(e)}function Ng(e){for(en=e.return;en;)switch(en.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:en=en.return}}function Ho(e){if(e!==en)return!1;if(!Bt)return Ng(e),Bt=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Ud(e.type,e.memoizedProps)),s=!s),s&&le&&Ra(e),Ng(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){le=Un(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}le=null}}else i===27?(i=le,Cr(e.type)?(e=Hd,Hd=null,le=e):le=i):le=en?Un(e.stateNode.nextSibling):null;return!0}function Fo(){le=en=null,Bt=!1}function Mg(){var e=wa;return e!==null&&(an===null?an=e:an.push.apply(an,e),wa=null),e}function qo(e){wa===null?wa=[e]:wa.push(e)}var Ah=et(null),Ca=null,ki=null;function hr(e,i,s){at(Ah,i._currentValue),i._currentValue=s}function Li(e){e._currentValue=Ah.current,lt(Ah)}function Sh(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function wh(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=f;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=s,T=d.alternate,T!==null&&(T.lanes|=s),Sh(d.return,s,e),l||(_=null);break t}d=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(a(341));_.lanes|=s,d=_.alternate,d!==null&&(d.lanes|=s),Sh(_,s,e),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===e){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function Go(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var T=f.type;cn(f.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(f===we.current){if(_=f.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(El):e=[El])}f=f.return}e!==null&&wh(i,e,s,l),i.flags|=262144}function Yu(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Ca=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ge(e){return Pg(Ca,e)}function Ku(e,i){return Ca===null&&Ia(e),Pg(e,i)}function Pg(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ki===null){if(e===null)throw Error(a(308));ki=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ki=ki.next=i;return s}var WA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},ZA=r.unstable_scheduleCallback,JA=r.unstable_NormalPriority,Ae={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rh(){return{controller:new WA,data:new Map,refCount:0}}function Yo(e){e.refCount--,e.refCount===0&&ZA(JA,function(){e.controller.abort()})}var Ko=null,Ch=0,ws=0,Rs=null;function tS(e,i){if(Ko===null){var s=Ko=[];Ch=0,ws=Od(),Rs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Ch++,i.then(kg,kg),i}function kg(){if(--Ch===0&&Ko!==null){Rs!==null&&(Rs.status="fulfilled");var e=Ko;Ko=null,ws=0,Rs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function eS(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Lg=Q.S;Q.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&tS(e,i),Lg!==null&&Lg(e,i)};var Oa=et(null);function Ih(){var e=Oa.current;return e!==null?e:Zt.pooledCache}function Qu(e,i){i===null?at(Oa,Oa.current):at(Oa,i.pool)}function Vg(){var e=Ih();return e===null?null:{parent:Ae._currentValue,pool:e}}var Qo=Error(a(460)),Ug=Error(a(474)),Xu=Error(a(542)),Oh={then:function(){}};function zg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $u(){}function jg(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then($u,$u),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hg(e),e;default:if(typeof i.status=="string")i.then($u,$u);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Hg(e),e}throw Xo=i,Qo}}var Xo=null;function Bg(){if(Xo===null)throw Error(a(459));var e=Xo;return Xo=null,e}function Hg(e){if(e===Qo||e===Xu)throw Error(a(483))}var dr=!1;function Dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pr(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(qt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Hu(e),Ig(e,null,s),i}return Bu(e,l,i,s),Hu(e)}function $o(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,So(e,s)}}function Nh(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Mh=!1;function Wo(){if(Mh){var e=Rs;if(e!==null)throw e}}function Zo(e,i,s,l){Mh=!1;var f=e.updateQueue;dr=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,j=C.next;C.next=null,_===null?d=j:_.next=j,_=C;var X=e.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==_&&(T===null?X.firstBaseUpdate=j:T.next=j,X.lastBaseUpdate=C))}if(d!==null){var J=f.baseState;_=0,X=j=C=null,T=d;do{var H=T.lane&-536870913,F=H!==T.lane;if(F?(Lt&H)===H:(l&H)===H){H!==0&&H===ws&&(Mh=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,yt=T;H=i;var Xt=s;switch(yt.tag){case 1:if(Et=yt.payload,typeof Et=="function"){J=Et.call(Xt,J,H);break t}J=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=yt.payload,H=typeof Et=="function"?Et.call(Xt,J,H):Et,H==null)break t;J=E({},J,H);break t;case 2:dr=!0}}H=T.callback,H!==null&&(e.flags|=64,F&&(e.flags|=8192),F=f.callbacks,F===null?f.callbacks=[H]:F.push(H))}else F={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(j=X=F,C=J):X=X.next=F,_|=H;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;F=T,T=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);X===null&&(C=J),f.baseState=C,f.firstBaseUpdate=j,f.lastBaseUpdate=X,d===null&&(f.shared.lanes=0),Ar|=_,e.lanes=_,e.memoizedState=J}}function Fg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function qg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Fg(s[e],i)}var Cs=et(null),Wu=et(0);function Gg(e,i){e=Fi,at(Wu,e),at(Cs,i),Fi=e|i.baseLanes}function Ph(){at(Wu,Fi),at(Cs,Cs.current)}function kh(){Fi=Wu.current,lt(Cs),lt(Wu)}var gr=0,Rt=null,Kt=null,ye=null,Zu=!1,Is=!1,Da=!1,Ju=0,Jo=0,Os=null,nS=0;function de(){throw Error(a(321))}function Lh(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!cn(e[s],i[s]))return!1;return!0}function Vh(e,i,s,l,f,d){return gr=d,Rt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Q.H=e===null||e.memoizedState===null?Iy:Oy,Da=!1,d=s(l,f),Da=!1,Is&&(d=Kg(i,s,l,f)),Yg(e),d}function Yg(e){Q.H=ac;var i=Kt!==null&&Kt.next!==null;if(gr=0,ye=Kt=Rt=null,Zu=!1,Jo=0,Os=null,i)throw Error(a(300));e===null||Ie||(e=e.dependencies,e!==null&&Yu(e)&&(Ie=!0))}function Kg(e,i,s,l){Rt=e;var f=0;do{if(Is&&(Os=null),Jo=0,Is=!1,25<=f)throw Error(a(301));if(f+=1,ye=Kt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=uS,d=i(s,l)}while(Is);return d}function iS(){var e=Q.H,i=e.useState()[0];return i=typeof i.then=="function"?tl(i):i,e=e.useState()[0],(Kt!==null?Kt.memoizedState:null)!==e&&(Rt.flags|=1024),i}function Uh(){var e=Ju!==0;return Ju=0,e}function zh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function jh(e){if(Zu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Zu=!1}gr=0,ye=Kt=Rt=null,Is=!1,Jo=Ju=0,Os=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Rt.memoizedState=ye=e:ye=ye.next=e,ye}function ve(){if(Kt===null){var e=Rt.alternate;e=e!==null?e.memoizedState:null}else e=Kt.next;var i=ye===null?Rt.memoizedState:ye.next;if(i!==null)ye=i,Kt=e;else{if(e===null)throw Rt.alternate===null?Error(a(467)):Error(a(310));Kt=e,e={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},ye===null?Rt.memoizedState=ye=e:ye=ye.next=e}return ye}function Bh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var i=Jo;return Jo+=1,Os===null&&(Os=[]),e=jg(Os,e,i),i=Rt,(ye===null?i.memoizedState:ye.next)===null&&(i=i.alternate,Q.H=i===null||i.memoizedState===null?Iy:Oy),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===Z)return Ge(e)}throw Error(a(438,String(e)))}function Hh(e){var i=null,s=Rt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Rt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Bh(),Rt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=O;return i.index++,s}function Vi(e,i){return typeof i=="function"?i(e):i}function ec(e){var i=ve();return Fh(i,Kt,e)}function Fh(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var T=_=null,C=null,j=i,X=!1;do{var J=j.lane&-536870913;if(J!==j.lane?(Lt&J)===J:(gr&J)===J){var H=j.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),J===ws&&(X=!0);else if((gr&H)===H){j=j.next,H===ws&&(X=!0);continue}else J={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},C===null?(T=C=J,_=d):C=C.next=J,Rt.lanes|=H,Ar|=H;J=j.action,Da&&s(d,J),d=j.hasEagerState?j.eagerState:s(d,J)}else H={lane:J,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},C===null?(T=C=H,_=d):C=C.next=H,Rt.lanes|=J,Ar|=J;j=j.next}while(j!==null&&j!==i);if(C===null?_=d:C.next=T,!cn(d,e.memoizedState)&&(Ie=!0,X&&(s=Rs,s!==null)))throw s;e.memoizedState=d,e.baseState=_,e.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function qh(e){var i=ve(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var _=f=f.next;do d=e(d,_.action),_=_.next;while(_!==f);cn(d,i.memoizedState)||(Ie=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function Qg(e,i,s){var l=Rt,f=ve(),d=Bt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var _=!cn((Kt||f).memoizedState,s);_&&(f.memoizedState=s,Ie=!0),f=f.queue;var T=Wg.bind(null,l,f,e);if(el(2048,8,T,[e]),f.getSnapshot!==i||_||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,Ds(9,nc(),$g.bind(null,l,f,s,i),null),Zt===null)throw Error(a(349));d||(gr&124)!==0||Xg(l,i,s)}return s}function Xg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Rt.updateQueue,i===null?(i=Bh(),Rt.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function $g(e,i,s,l){i.value=s,i.getSnapshot=l,Zg(i)&&Jg(e)}function Wg(e,i,s){return s(function(){Zg(i)&&Jg(e)})}function Zg(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!cn(e,s)}catch{return!0}}function Jg(e){var i=Ts(e,2);i!==null&&gn(i,e,2)}function Gh(e){var i=nn();if(typeof e=="function"){var s=e;if(e=s(),Da){ln(!0);try{s()}finally{ln(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},i}function ty(e,i,s,l){return e.baseState=s,Fh(e,Kt,typeof l=="function"?l:Vi)}function rS(e,i,s,l,f){if(rc(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};Q.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,ey(i,d)):(d.next=s.next,i.pending=s.next=d)}}function ey(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=Q.T,_={};Q.T=_;try{var T=s(f,l),C=Q.S;C!==null&&C(_,T),ny(e,i,T)}catch(j){Yh(e,i,j)}finally{Q.T=d}}else try{d=s(f,l),ny(e,i,d)}catch(j){Yh(e,i,j)}}function ny(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){iy(e,i,l)},function(l){return Yh(e,i,l)}):iy(e,i,s)}function iy(e,i,s){i.status="fulfilled",i.value=s,ry(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,ey(e,s)))}function Yh(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,ry(i),i=i.next;while(i!==l)}e.action=null}function ry(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ay(e,i){return i}function sy(e,i){if(Bt){var s=Zt.formState;if(s!==null){t:{var l=Rt;if(Bt){if(le){e:{for(var f=le,d=ni;f.nodeType!==8;){if(!d){f=null;break e}if(f=Un(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){le=Un(f.nextSibling),l=f.data==="F!";break t}}Ra(l)}l=!1}l&&(i=s[0])}}return s=nn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ay,lastRenderedState:i},s.queue=l,s=wy.bind(null,Rt,l),l.dispatch=s,l=Gh(!1),d=Wh.bind(null,Rt,!1,l.queue),l=nn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=rS.bind(null,Rt,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function oy(e){var i=ve();return ly(i,Kt,e)}function ly(e,i,s){if(i=Fh(e,i,ay)[0],e=ec(Vi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=tl(i)}catch(_){throw _===Qo?Xu:_}else l=i;i=ve();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(Rt.flags|=2048,Ds(9,nc(),aS.bind(null,f,s),null)),[l,d,e]}function aS(e,i){e.action=i}function uy(e){var i=ve(),s=Kt;if(s!==null)return ly(i,s,e);ve(),i=i.memoizedState,s=ve();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function Ds(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=Rt.updateQueue,i===null&&(i=Bh(),Rt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function nc(){return{destroy:void 0,resource:void 0}}function cy(){return ve().memoizedState}function ic(e,i,s,l){var f=nn();l=l===void 0?null:l,Rt.flags|=e,f.memoizedState=Ds(1|i,nc(),s,l)}function el(e,i,s,l){var f=ve();l=l===void 0?null:l;var d=f.memoizedState.inst;Kt!==null&&l!==null&&Lh(l,Kt.memoizedState.deps)?f.memoizedState=Ds(i,d,s,l):(Rt.flags|=e,f.memoizedState=Ds(1|i,d,s,l))}function fy(e,i){ic(8390656,8,e,i)}function hy(e,i){el(2048,8,e,i)}function dy(e,i){return el(4,2,e,i)}function my(e,i){return el(4,4,e,i)}function py(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function gy(e,i,s){s=s!=null?s.concat([e]):null,el(4,4,py.bind(null,i,e),s)}function Kh(){}function yy(e,i){var s=ve();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Lh(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function vy(e,i){var s=ve();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Lh(i,l[1]))return l[0];if(l=e(),Da){ln(!0);try{e()}finally{ln(!1)}}return s.memoizedState=[l,i],l}function Qh(e,i,s){return s===void 0||(gr&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Tv(),Rt.lanes|=e,Ar|=e,s)}function _y(e,i,s,l){return cn(s,i)?s:Cs.current!==null?(e=Qh(e,s,l),cn(e,i)||(Ie=!0),e):(gr&42)===0?(Ie=!0,e.memoizedState=s):(e=Tv(),Rt.lanes|=e,Ar|=e,i)}function Ey(e,i,s,l,f){var d=ot.p;ot.p=d!==0&&8>d?d:8;var _=Q.T,T={};Q.T=T,Wh(e,!1,i,s);try{var C=f(),j=Q.S;if(j!==null&&j(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=eS(C,l);nl(e,i,X,pn(e))}else nl(e,i,l,pn(e))}catch(J){nl(e,i,{then:function(){},status:"rejected",reason:J},pn())}finally{ot.p=d,Q.T=_}}function sS(){}function Xh(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Ty(e).queue;Ey(e,f,i,pt,s===null?sS:function(){return by(e),s(l)})}function Ty(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:pt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function by(e){var i=Ty(e).next.queue;nl(e,i,{},pn())}function $h(){return Ge(El)}function Ay(){return ve().memoizedState}function Sy(){return ve().memoizedState}function oS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=pn();e=mr(s);var l=pr(i,e,s);l!==null&&(gn(l,i,s),$o(l,i,s)),i={cache:Rh()},e.payload=i;return}i=i.return}}function lS(e,i,s){var l=pn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},rc(e)?Ry(i,s):(s=gh(e,i,s,l),s!==null&&(gn(s,e,l),Cy(s,i,l)))}function wy(e,i,s){var l=pn();nl(e,i,s,l)}function nl(e,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(rc(e))Ry(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,T=d(_,s);if(f.hasEagerState=!0,f.eagerState=T,cn(T,_))return Bu(e,i,f,0),Zt===null&&ju(),!1}catch{}finally{}if(s=gh(e,i,f,l),s!==null)return gn(s,e,l),Cy(s,i,l),!0}return!1}function Wh(e,i,s,l){if(l={lane:2,revertLane:Od(),action:l,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(i)throw Error(a(479))}else i=gh(e,s,l,2),i!==null&&gn(i,e,2)}function rc(e){var i=e.alternate;return e===Rt||i!==null&&i===Rt}function Ry(e,i){Is=Zu=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Cy(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,So(e,s)}}var ac={readContext:Ge,use:tc,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useLayoutEffect:de,useInsertionEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useSyncExternalStore:de,useId:de,useHostTransitionStatus:de,useFormState:de,useActionState:de,useOptimistic:de,useMemoCache:de,useCacheRefresh:de},Iy={readContext:Ge,use:tc,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:Ge,useEffect:fy,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ic(4194308,4,py.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ic(4194308,4,e,i)},useInsertionEffect:function(e,i){ic(4,2,e,i)},useMemo:function(e,i){var s=nn();i=i===void 0?null:i;var l=e();if(Da){ln(!0);try{e()}finally{ln(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=nn();if(s!==void 0){var f=s(i);if(Da){ln(!0);try{s(i)}finally{ln(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=lS.bind(null,Rt,e),[l.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Gh(e);var i=e.queue,s=wy.bind(null,Rt,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Kh,useDeferredValue:function(e,i){var s=nn();return Qh(s,e,i)},useTransition:function(){var e=Gh(!1);return e=Ey.bind(null,Rt,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=Rt,f=nn();if(Bt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Zt===null)throw Error(a(349));(Lt&124)!==0||Xg(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,fy(Wg.bind(null,l,d,e),[e]),l.flags|=2048,Ds(9,nc(),$g.bind(null,l,d,s,i),null),s},useId:function(){var e=nn(),i=Zt.identifierPrefix;if(Bt){var s=Pi,l=Mi;s=(l&~(1<<32-qe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Ju++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=nS++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:$h,useFormState:sy,useActionState:sy,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Wh.bind(null,Rt,!0,s),s.dispatch=i,[e,i]},useMemoCache:Hh,useCacheRefresh:function(){return nn().memoizedState=oS.bind(null,Rt)}},Oy={readContext:Ge,use:tc,useCallback:yy,useContext:Ge,useEffect:hy,useImperativeHandle:gy,useInsertionEffect:dy,useLayoutEffect:my,useMemo:vy,useReducer:ec,useRef:cy,useState:function(){return ec(Vi)},useDebugValue:Kh,useDeferredValue:function(e,i){var s=ve();return _y(s,Kt.memoizedState,e,i)},useTransition:function(){var e=ec(Vi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:tl(e),i]},useSyncExternalStore:Qg,useId:Ay,useHostTransitionStatus:$h,useFormState:oy,useActionState:oy,useOptimistic:function(e,i){var s=ve();return ty(s,Kt,e,i)},useMemoCache:Hh,useCacheRefresh:Sy},uS={readContext:Ge,use:tc,useCallback:yy,useContext:Ge,useEffect:hy,useImperativeHandle:gy,useInsertionEffect:dy,useLayoutEffect:my,useMemo:vy,useReducer:qh,useRef:cy,useState:function(){return qh(Vi)},useDebugValue:Kh,useDeferredValue:function(e,i){var s=ve();return Kt===null?Qh(s,e,i):_y(s,Kt.memoizedState,e,i)},useTransition:function(){var e=qh(Vi)[0],i=ve().memoizedState;return[typeof e=="boolean"?e:tl(e),i]},useSyncExternalStore:Qg,useId:Ay,useHostTransitionStatus:$h,useFormState:uy,useActionState:uy,useOptimistic:function(e,i){var s=ve();return Kt!==null?ty(s,Kt,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Hh,useCacheRefresh:Sy},xs=null,il=0;function sc(e){var i=il;return il+=1,xs===null&&(xs=[]),jg(xs,e,i)}function rl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function oc(e,i){throw i.$$typeof===S?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Dy(e){var i=e._init;return i(e._payload)}function xy(e){function i(k,N){if(e){var z=k.deletions;z===null?(k.deletions=[N],k.flags|=16):z.push(N)}}function s(k,N){if(!e)return null;for(;N!==null;)i(k,N),N=N.sibling;return null}function l(k){for(var N=new Map;k!==null;)k.key!==null?N.set(k.key,k):N.set(k.index,k),k=k.sibling;return N}function f(k,N){return k=Ni(k,N),k.index=0,k.sibling=null,k}function d(k,N,z){return k.index=z,e?(z=k.alternate,z!==null?(z=z.index,z<N?(k.flags|=67108866,N):z):(k.flags|=67108866,N)):(k.flags|=1048576,N)}function _(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function T(k,N,z,$){return N===null||N.tag!==6?(N=vh(z,k.mode,$),N.return=k,N):(N=f(N,z),N.return=k,N)}function C(k,N,z,$){var ft=z.type;return ft===P?X(k,N,z.props.children,$,z.key):N!==null&&(N.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===w&&Dy(ft)===N.type)?(N=f(N,z.props),rl(N,z),N.return=k,N):(N=Fu(z.type,z.key,z.props,null,k.mode,$),rl(N,z),N.return=k,N)}function j(k,N,z,$){return N===null||N.tag!==4||N.stateNode.containerInfo!==z.containerInfo||N.stateNode.implementation!==z.implementation?(N=_h(z,k.mode,$),N.return=k,N):(N=f(N,z.children||[]),N.return=k,N)}function X(k,N,z,$,ft){return N===null||N.tag!==7?(N=ba(z,k.mode,$,ft),N.return=k,N):(N=f(N,z),N.return=k,N)}function J(k,N,z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=vh(""+N,k.mode,z),N.return=k,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case R:return z=Fu(N.type,N.key,N.props,null,k.mode,z),rl(z,N),z.return=k,z;case B:return N=_h(N,k.mode,z),N.return=k,N;case w:var $=N._init;return N=$(N._payload),J(k,N,z)}if(se(N)||L(N))return N=ba(N,k.mode,z,null),N.return=k,N;if(typeof N.then=="function")return J(k,sc(N),z);if(N.$$typeof===Z)return J(k,Ku(k,N),z);oc(k,N)}return null}function H(k,N,z,$){var ft=N!==null?N.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ft!==null?null:T(k,N,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case R:return z.key===ft?C(k,N,z,$):null;case B:return z.key===ft?j(k,N,z,$):null;case w:return ft=z._init,z=ft(z._payload),H(k,N,z,$)}if(se(z)||L(z))return ft!==null?null:X(k,N,z,$,null);if(typeof z.then=="function")return H(k,N,sc(z),$);if(z.$$typeof===Z)return H(k,N,Ku(k,z),$);oc(k,z)}return null}function F(k,N,z,$,ft){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return k=k.get(z)||null,T(N,k,""+$,ft);if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return k=k.get($.key===null?z:$.key)||null,C(N,k,$,ft);case B:return k=k.get($.key===null?z:$.key)||null,j(N,k,$,ft);case w:var It=$._init;return $=It($._payload),F(k,N,z,$,ft)}if(se($)||L($))return k=k.get(z)||null,X(N,k,$,ft,null);if(typeof $.then=="function")return F(k,N,z,sc($),ft);if($.$$typeof===Z)return F(k,N,z,Ku(N,$),ft);oc(N,$)}return null}function Et(k,N,z,$){for(var ft=null,It=null,mt=N,vt=N=0,De=null;mt!==null&&vt<z.length;vt++){mt.index>vt?(De=mt,mt=null):De=mt.sibling;var zt=H(k,mt,z[vt],$);if(zt===null){mt===null&&(mt=De);break}e&&mt&&zt.alternate===null&&i(k,mt),N=d(zt,N,vt),It===null?ft=zt:It.sibling=zt,It=zt,mt=De}if(vt===z.length)return s(k,mt),Bt&&Sa(k,vt),ft;if(mt===null){for(;vt<z.length;vt++)mt=J(k,z[vt],$),mt!==null&&(N=d(mt,N,vt),It===null?ft=mt:It.sibling=mt,It=mt);return Bt&&Sa(k,vt),ft}for(mt=l(mt);vt<z.length;vt++)De=F(mt,k,vt,z[vt],$),De!==null&&(e&&De.alternate!==null&&mt.delete(De.key===null?vt:De.key),N=d(De,N,vt),It===null?ft=De:It.sibling=De,It=De);return e&&mt.forEach(function(Nr){return i(k,Nr)}),Bt&&Sa(k,vt),ft}function yt(k,N,z,$){if(z==null)throw Error(a(151));for(var ft=null,It=null,mt=N,vt=N=0,De=null,zt=z.next();mt!==null&&!zt.done;vt++,zt=z.next()){mt.index>vt?(De=mt,mt=null):De=mt.sibling;var Nr=H(k,mt,zt.value,$);if(Nr===null){mt===null&&(mt=De);break}e&&mt&&Nr.alternate===null&&i(k,mt),N=d(Nr,N,vt),It===null?ft=Nr:It.sibling=Nr,It=Nr,mt=De}if(zt.done)return s(k,mt),Bt&&Sa(k,vt),ft;if(mt===null){for(;!zt.done;vt++,zt=z.next())zt=J(k,zt.value,$),zt!==null&&(N=d(zt,N,vt),It===null?ft=zt:It.sibling=zt,It=zt);return Bt&&Sa(k,vt),ft}for(mt=l(mt);!zt.done;vt++,zt=z.next())zt=F(mt,k,vt,zt.value,$),zt!==null&&(e&&zt.alternate!==null&&mt.delete(zt.key===null?vt:zt.key),N=d(zt,N,vt),It===null?ft=zt:It.sibling=zt,It=zt);return e&&mt.forEach(function(c1){return i(k,c1)}),Bt&&Sa(k,vt),ft}function Xt(k,N,z,$){if(typeof z=="object"&&z!==null&&z.type===P&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case R:t:{for(var ft=z.key;N!==null;){if(N.key===ft){if(ft=z.type,ft===P){if(N.tag===7){s(k,N.sibling),$=f(N,z.props.children),$.return=k,k=$;break t}}else if(N.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===w&&Dy(ft)===N.type){s(k,N.sibling),$=f(N,z.props),rl($,z),$.return=k,k=$;break t}s(k,N);break}else i(k,N);N=N.sibling}z.type===P?($=ba(z.props.children,k.mode,$,z.key),$.return=k,k=$):($=Fu(z.type,z.key,z.props,null,k.mode,$),rl($,z),$.return=k,k=$)}return _(k);case B:t:{for(ft=z.key;N!==null;){if(N.key===ft)if(N.tag===4&&N.stateNode.containerInfo===z.containerInfo&&N.stateNode.implementation===z.implementation){s(k,N.sibling),$=f(N,z.children||[]),$.return=k,k=$;break t}else{s(k,N);break}else i(k,N);N=N.sibling}$=_h(z,k.mode,$),$.return=k,k=$}return _(k);case w:return ft=z._init,z=ft(z._payload),Xt(k,N,z,$)}if(se(z))return Et(k,N,z,$);if(L(z)){if(ft=L(z),typeof ft!="function")throw Error(a(150));return z=ft.call(z),yt(k,N,z,$)}if(typeof z.then=="function")return Xt(k,N,sc(z),$);if(z.$$typeof===Z)return Xt(k,N,Ku(k,z),$);oc(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,N!==null&&N.tag===6?(s(k,N.sibling),$=f(N,z),$.return=k,k=$):(s(k,N),$=vh(z,k.mode,$),$.return=k,k=$),_(k)):s(k,N)}return function(k,N,z,$){try{il=0;var ft=Xt(k,N,z,$);return xs=null,ft}catch(mt){if(mt===Qo||mt===Xu)throw mt;var It=fn(29,mt,null,k.mode);return It.lanes=$,It.return=k,It}finally{}}}var Ns=xy(!0),Ny=xy(!1),On=et(null),ii=null;function yr(e){var i=e.alternate;at(Se,Se.current&1),at(On,e),ii===null&&(i===null||Cs.current!==null||i.memoizedState!==null)&&(ii=e)}function My(e){if(e.tag===22){if(at(Se,Se.current),at(On,e),ii===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ii=e)}}else vr()}function vr(){at(Se,Se.current),at(On,On.current)}function Ui(e){lt(On),ii===e&&(ii=null),lt(Se)}var Se=et(0);function lc(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Bd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Zh(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:E({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Jh={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=pn(),f=mr(l);f.payload=i,s!=null&&(f.callback=s),i=pr(e,f,l),i!==null&&(gn(i,e,l),$o(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=pn(),f=mr(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=pr(e,f,l),i!==null&&(gn(i,e,l),$o(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=pn(),l=mr(s);l.tag=2,i!=null&&(l.callback=i),i=pr(e,l,s),i!==null&&(gn(i,e,s),$o(i,e,s))}};function Py(e,i,s,l,f,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!jo(s,l)||!jo(f,d):!0}function ky(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Jh.enqueueReplaceState(i,i.state,null)}function xa(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=E({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ly(e){uc(e)}function Vy(e){console.error(e)}function Uy(e){uc(e)}function cc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function zy(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function td(e,i,s){return s=mr(s),s.tag=3,s.payload={element:null},s.callback=function(){cc(e,i)},s}function jy(e){return e=mr(e),e.tag=3,e}function By(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){zy(i,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){zy(i,s,l),typeof f!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function cS(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Go(i,s,f,!0),s=On.current,s!==null){switch(s.tag){case 13:return ii===null?Sd():s.alternate===null&&ue===0&&(ue=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Oh?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Rd(e,l,f)),!1;case 22:return s.flags|=65536,l===Oh?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Rd(e,l,f)),!1}throw Error(a(435,s.tag))}return Rd(e,l,f),Sd(),!1}if(Bt)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==bh&&(e=Error(a(422),{cause:l}),qo(wn(e,s)))):(l!==bh&&(i=Error(a(423),{cause:l}),qo(wn(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=wn(l,s),f=td(e.stateNode,l,f),Nh(e,f),ue!==4&&(ue=2)),!1;var d=Error(a(520),{cause:l});if(d=wn(d,s),fl===null?fl=[d]:fl.push(d),ue!==4&&(ue=2),i===null)return!0;l=wn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=td(s.stateNode,l,e),Nh(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Sr===null||!Sr.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=jy(f),By(f,e,s,l),Nh(s,f),!1}s=s.return}while(s!==null);return!1}var Hy=Error(a(461)),Ie=!1;function Ve(e,i,s,l){i.child=e===null?Ny(i,null,s,l):Ns(i,e.child,s,l)}function Fy(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Ia(i),l=Vh(e,i,s,_,d,f),T=Uh(),e!==null&&!Ie?(zh(e,i,f),zi(e,i,f)):(Bt&&T&&Eh(i),i.flags|=1,Ve(e,i,l,f),i.child)}function qy(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!yh(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Gy(e,i,d,l,f)):(e=Fu(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!ld(e,f)){var _=d.memoizedProps;if(s=s.compare,s=s!==null?s:jo,s(_,l)&&e.ref===i.ref)return zi(e,i,f)}return i.flags|=1,e=Ni(d,l),e.ref=i.ref,e.return=i,i.child=e}function Gy(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(jo(d,l)&&e.ref===i.ref)if(Ie=!1,i.pendingProps=l=d,ld(e,f))(e.flags&131072)!==0&&(Ie=!0);else return i.lanes=e.lanes,zi(e,i,f)}return ed(e,i,s,l,f)}function Yy(e,i,s){var l=i.pendingProps,f=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|s:s,e!==null){for(f=i.child=e.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Ky(e,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qu(i,d!==null?d.cachePool:null),d!==null?Gg(i,d):Ph(),My(i);else return i.lanes=i.childLanes=536870912,Ky(e,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Qu(i,d.cachePool),Gg(i,d),vr(),i.memoizedState=null):(e!==null&&Qu(i,null),Ph(),vr());return Ve(e,i,f,s),i.child}function Ky(e,i,s,l){var f=Ih();return f=f===null?null:{parent:Ae._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},e!==null&&Qu(i,null),Ph(),My(i),e!==null&&Go(e,i,l,!0),null}function fc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function ed(e,i,s,l,f){return Ia(i),s=Vh(e,i,s,l,void 0,f),l=Uh(),e!==null&&!Ie?(zh(e,i,f),zi(e,i,f)):(Bt&&l&&Eh(i),i.flags|=1,Ve(e,i,s,f),i.child)}function Qy(e,i,s,l,f,d){return Ia(i),i.updateQueue=null,s=Kg(i,l,s,f),Yg(e),l=Uh(),e!==null&&!Ie?(zh(e,i,d),zi(e,i,d)):(Bt&&l&&Eh(i),i.flags|=1,Ve(e,i,s,d),i.child)}function Xy(e,i,s,l,f){if(Ia(i),i.stateNode===null){var d=bs,_=s.contextType;typeof _=="object"&&_!==null&&(d=Ge(_)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Jh,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Dh(i),_=s.contextType,d.context=typeof _=="object"&&_!==null?Ge(_):bs,d.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Zh(i,s,_,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Jh.enqueueReplaceState(d,d.state,null),Zo(i,l,d,f),Wo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,C=xa(s,T);d.props=C;var j=d.context,X=s.contextType;_=bs,typeof X=="object"&&X!==null&&(_=Ge(X));var J=s.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||j!==_)&&ky(i,d,l,_),dr=!1;var H=i.memoizedState;d.state=H,Zo(i,l,d,f),Wo(),j=i.memoizedState,T||H!==j||dr?(typeof J=="function"&&(Zh(i,s,J,l),j=i.memoizedState),(C=dr||Py(i,s,C,l,H,j,_))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=_,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,xh(e,i),_=i.memoizedProps,X=xa(s,_),d.props=X,J=i.pendingProps,H=d.context,j=s.contextType,C=bs,typeof j=="object"&&j!==null&&(C=Ge(j)),T=s.getDerivedStateFromProps,(j=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==J||H!==C)&&ky(i,d,l,C),dr=!1,H=i.memoizedState,d.state=H,Zo(i,l,d,f),Wo();var F=i.memoizedState;_!==J||H!==F||dr||e!==null&&e.dependencies!==null&&Yu(e.dependencies)?(typeof T=="function"&&(Zh(i,s,T,l),F=i.memoizedState),(X=dr||Py(i,s,X,l,H,F,C)||e!==null&&e.dependencies!==null&&Yu(e.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,fc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ns(i,e.child,null,f),i.child=Ns(i,null,s,f)):Ve(e,i,s,f),i.memoizedState=d.state,e=i.child):e=zi(e,i,f),e}function $y(e,i,s,l){return Fo(),i.flags|=256,Ve(e,i,s,l),i.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function id(e){return{baseLanes:e,cachePool:Vg()}}function rd(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=Dn),e}function Wy(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),_&&(f=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(f?yr(i):vr(),Bt){var T=le,C;if(C=T){t:{for(C=T,T=ni;C.nodeType!==8;){if(!T){T=null;break t}if(C=Un(C.nextSibling),C===null){T=null;break t}}T=C}T!==null?(i.memoizedState={dehydrated:T,treeContext:Aa!==null?{id:Mi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},C=fn(18,null,null,0),C.stateNode=T,C.return=i,i.child=C,en=i,le=null,C=!0):C=!1}C||Ra(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Bd(T)?i.lanes=32:i.lanes=536870912,null;Ui(i)}return T=l.children,l=l.fallback,f?(vr(),f=i.mode,T=hc({mode:"hidden",children:T},f),l=ba(l,f,s,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=id(s),f.childLanes=rd(e,_,s),i.memoizedState=nd,l):(yr(i),ad(i,T))}if(C=e.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(yr(i),i.flags&=-257,i=sd(e,i,s)):i.memoizedState!==null?(vr(),i.child=e.child,i.flags|=128,i=null):(vr(),f=l.fallback,T=i.mode,l=hc({mode:"visible",children:l.children},T),f=ba(f,T,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,Ns(i,e.child,null,s),l=i.child,l.memoizedState=id(s),l.childLanes=rd(e,_,s),i.memoizedState=nd,i=f);else if(yr(i),Bd(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var j=_.dgst;_=j,l=Error(a(419)),l.stack="",l.digest=_,qo({value:l,source:null,stack:null}),i=sd(e,i,s)}else if(Ie||Go(e,i,s,!1),_=(s&e.childLanes)!==0,Ie||_){if(_=Zt,_!==null&&(l=s&-s,l=(l&42)!==0?1:ar(l),l=(l&(_.suspendedLanes|s))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ts(e,l),gn(_,e,l),Hy;T.data==="$?"||Sd(),i=sd(e,i,s)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=C.treeContext,le=Un(T.nextSibling),en=i,Bt=!0,wa=null,ni=!1,e!==null&&(Cn[In++]=Mi,Cn[In++]=Pi,Cn[In++]=Aa,Mi=e.id,Pi=e.overflow,Aa=i),i=ad(i,l.children),i.flags|=4096);return i}return f?(vr(),f=l.fallback,T=i.mode,C=e.child,j=C.sibling,l=Ni(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,j!==null?f=Ni(j,f):(f=ba(f,T,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=e.child.memoizedState,T===null?T=id(s):(C=T.cachePool,C!==null?(j=Ae._currentValue,C=C.parent!==j?{parent:j,pool:j}:C):C=Vg(),T={baseLanes:T.baseLanes|s,cachePool:C}),f.memoizedState=T,f.childLanes=rd(e,_,s),i.memoizedState=nd,l):(yr(i),s=e.child,e=s.sibling,s=Ni(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=s,i.memoizedState=null,s)}function ad(e,i){return i=hc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function hc(e,i){return e=fn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sd(e,i,s){return Ns(i,e.child,null,s),e=ad(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Zy(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Sh(e.return,i,s)}function od(e,i,s,l,f){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=f)}function Jy(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Ve(e,i,l.children,s),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zy(e,s,i);else if(e.tag===19)Zy(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(at(Se,l),f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&lc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),od(i,!1,f,s,d);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&lc(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}od(i,!0,s,null,d);break;case"together":od(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zi(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ar|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Go(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Ni(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ni(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function ld(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Yu(e)))}function fS(e,i,s){switch(i.tag){case 3:Wt(i,i.stateNode.containerInfo),hr(i,Ae,e.memoizedState.cache),Fo();break;case 27:case 5:rr(i);break;case 4:Wt(i,i.stateNode.containerInfo);break;case 10:hr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(yr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Wy(e,i,s):(yr(i),e=zi(e,i,s),e!==null?e.sibling:null);yr(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Go(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Jy(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),at(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,Yy(e,i,s);case 24:hr(i,Ae,e.memoizedState.cache)}return zi(e,i,s)}function tv(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ie=!0;else{if(!ld(e,s)&&(i.flags&128)===0)return Ie=!1,fS(e,i,s);Ie=(e.flags&131072)!==0}else Ie=!1,Bt&&(i.flags&1048576)!==0&&Dg(i,Gu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")yh(l)?(e=xa(l,e),i.tag=1,i=Xy(null,i,l,e,s)):(i.tag=0,i=ed(null,i,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===ct){i.tag=11,i=Fy(null,i,l,e,s);break t}else if(f===x){i.tag=14,i=qy(null,i,l,e,s);break t}}throw i=Pe(l)||l,Error(a(306,i,""))}}return i;case 0:return ed(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=xa(l,i.pendingProps),Xy(e,i,l,f,s);case 3:t:{if(Wt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,xh(e,i),Zo(i,l,null,s);var _=i.memoizedState;if(l=_.cache,hr(i,Ae,l),l!==d.cache&&wh(i,[Ae],s,!0),Wo(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=$y(e,i,l,s);break t}else if(l!==f){f=wn(Error(a(424)),i),qo(f),i=$y(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=Un(e.firstChild),en=i,Bt=!0,wa=null,ni=!0,s=Ny(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Fo(),l===f){i=zi(e,i,s);break t}Ve(e,i,l,s)}i=i.child}return i;case 26:return fc(e,i),e===null?(s=r_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Bt||(s=i.type,e=i.pendingProps,l=Rc(bt.current).createElement(s),l[Ee]=i,l[pe]=e,ze(l,s,e),he(l),i.stateNode=l):i.memoizedState=r_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return rr(i),e===null&&Bt&&(l=i.stateNode=e_(i.type,i.pendingProps,bt.current),en=i,ni=!0,f=le,Cr(i.type)?(Hd=f,le=Un(l.firstChild)):le=f),Ve(e,i,i.pendingProps.children,s),fc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((f=l=le)&&(l=zS(l,i.type,i.pendingProps,ni),l!==null?(i.stateNode=l,en=i,le=Un(l.firstChild),ni=!1,f=!0):f=!1),f||Ra(i)),rr(i),f=i.type,d=i.pendingProps,_=e!==null?e.memoizedProps:null,l=d.children,Ud(f,d)?l=null:_!==null&&Ud(f,_)&&(i.flags|=32),i.memoizedState!==null&&(f=Vh(e,i,iS,null,null,s),El._currentValue=f),fc(e,i),Ve(e,i,l,s),i.child;case 6:return e===null&&Bt&&((e=s=le)&&(s=jS(s,i.pendingProps,ni),s!==null?(i.stateNode=s,en=i,le=null,e=!0):e=!1),e||Ra(i)),null;case 13:return Wy(e,i,s);case 4:return Wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ns(i,null,l,s):Ve(e,i,l,s),i.child;case 11:return Fy(e,i,i.type,i.pendingProps,s);case 7:return Ve(e,i,i.pendingProps,s),i.child;case 8:return Ve(e,i,i.pendingProps.children,s),i.child;case 12:return Ve(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,hr(i,i.type,l.value),Ve(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ia(i),f=Ge(f),l=l(f),i.flags|=1,Ve(e,i,l,s),i.child;case 14:return qy(e,i,i.type,i.pendingProps,s);case 15:return Gy(e,i,i.type,i.pendingProps,s);case 19:return Jy(e,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},e===null?(s=hc(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Ni(e.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Yy(e,i,s);case 24:return Ia(i),l=Ge(Ae),e===null?(f=Ih(),f===null&&(f=Zt,d=Rh(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},Dh(i),hr(i,Ae,f)):((e.lanes&s)!==0&&(xh(e,i),Zo(i,null,null,s),Wo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),hr(i,Ae,l)):(l=d.cache,hr(i,Ae,l),l!==f.cache&&wh(i,[Ae],s,!0))),Ve(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ji(e){e.flags|=4}function ev(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u_(i)){if(i=On.current,i!==null&&((Lt&4194048)===Lt?ii!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==ii))throw Xo=Oh,Ug;e.flags|=8192}}function dc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bo():536870912,e.lanes|=i,Ls|=i)}function al(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function hS(e,i,s){var l=i.pendingProps;switch(Th(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Li(Ae),qn(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ho(i)?ji(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mg())),re(i),null;case 26:return s=i.memoizedState,e===null?(ji(i),s!==null?(re(i),ev(i,s)):(re(i),i.flags&=-16777217)):s?s!==e.memoizedState?(ji(i),re(i),ev(i,s)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&ji(i),re(i),i.flags&=-16777217),null;case 27:_i(i),s=bt.current;var f=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return re(i),null}e=gt.current,Ho(i)?xg(i):(e=e_(f,l,s),i.stateNode=e,ji(i))}return re(i),null;case 5:if(_i(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return re(i),null}if(e=gt.current,Ho(i))xg(i);else{switch(f=Rc(bt.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[Ee]=i,e[pe]=l;t:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break t;for(;f.sibling===null;){if(f.return===null||f.return===i)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=e;t:switch(ze(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ji(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ji(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=bt.current,Ho(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=en,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Qv(e.nodeValue,s)),e||Ra(i)}else e=Rc(e).createTextNode(l),e[Ee]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Ho(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Ee]=i}else Fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),f=!1}else f=Mg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ui(i),i):(Ui(i),null)}if(Ui(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),dc(i,i.updateQueue),re(i),null;case 4:return qn(),e===null&&Md(i.stateNode.containerInfo),re(i),null;case 10:return Li(i.type),re(i),null;case 19:if(lt(Se),f=i.memoizedState,f===null)return re(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)al(f,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=lc(e),d!==null){for(i.flags|=128,al(f,!1),e=d.updateQueue,i.updateQueue=e,dc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Og(s,e),s=s.sibling;return at(Se,Se.current&1|2),i.child}e=e.sibling}f.tail!==null&&_n()>gc&&(i.flags|=128,l=!0,al(f,!1),i.lanes=4194304)}else{if(!l)if(e=lc(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,dc(i,e),al(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Bt)return re(i),null}else 2*_n()-f.renderingStartTime>gc&&s!==536870912&&(i.flags|=128,l=!0,al(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(e=f.last,e!==null?e.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=_n(),i.sibling=null,e=Se.current,at(Se,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return Ui(i),kh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),s=i.updateQueue,s!==null&&dc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&lt(Oa),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Li(Ae),re(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function dS(e,i){switch(Th(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Li(Ae),qn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(Ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Fo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return lt(Se),null;case 4:return qn(),null;case 10:return Li(i.type),null;case 22:case 23:return Ui(i),kh(),e!==null&&lt(Oa),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Li(Ae),null;case 25:return null;default:return null}}function nv(e,i){switch(Th(i),i.tag){case 3:Li(Ae),qn();break;case 26:case 27:case 5:_i(i);break;case 4:qn();break;case 13:Ui(i);break;case 19:lt(Se);break;case 10:Li(i.type);break;case 22:case 23:Ui(i),kh(),e!==null&&lt(Oa);break;case 24:Li(Ae)}}function sl(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,_=s.inst;l=d(),_.destroy=l}s=s.next}while(s!==f)}}catch(T){$t(i,i.return,T)}}function _r(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=i;var C=s,j=T;try{j()}catch(X){$t(f,C,X)}}}l=l.next}while(l!==d)}}catch(X){$t(i,i.return,X)}}function iv(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{qg(i,s)}catch(l){$t(e,e.return,l)}}}function rv(e,i,s){s.props=xa(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){$t(e,i,l)}}function ol(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){$t(e,i,f)}}function ri(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){$t(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){$t(e,i,f)}else s.current=null}function av(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){$t(e,e.return,f)}}function ud(e,i,s){try{var l=e.stateNode;PS(l,e.type,s,i),l[pe]=i}catch(f){$t(e,e.return,f)}}function sv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cr(e.type)||e.tag===4}function cd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fd(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=wc));else if(l!==4&&(l===27&&Cr(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(fd(e,i,s),e=e.sibling;e!==null;)fd(e,i,s),e=e.sibling}function mc(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&Cr(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(mc(e,i,s),e=e.sibling;e!==null;)mc(e,i,s),e=e.sibling}function ov(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);ze(i,l,s),i[Ee]=e,i[pe]=s}catch(d){$t(e,e.return,d)}}var Bi=!1,me=!1,hd=!1,lv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function mS(e,i){if(e=e.containerInfo,Ld=Nc,e=_g(e),ch(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var _=0,T=-1,C=-1,j=0,X=0,J=e,H=null;e:for(;;){for(var F;J!==s||f!==0&&J.nodeType!==3||(T=_+f),J!==d||l!==0&&J.nodeType!==3||(C=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(F=J.firstChild)!==null;)H=J,J=F;for(;;){if(J===e)break e;if(H===s&&++j===f&&(T=_),H===d&&++X===l&&(C=_),(F=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=F}s=T===-1||C===-1?null:{start:T,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(Vd={focusedElem:e,selectionRange:s},Nc=!1,Oe=i;Oe!==null;)if(i=Oe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Oe=e;else for(;Oe!==null;){switch(i=Oe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Et=xa(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(yt){$t(s,s.return,yt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)jd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Oe=e;break}Oe=i.return}}function uv(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Er(e,s),l&4&&sl(5,s);break;case 1:if(Er(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(_){$t(s,s.return,_)}else{var f=xa(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){$t(s,s.return,_)}}l&64&&iv(s),l&512&&ol(s,s.return);break;case 3:if(Er(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qg(e,i)}catch(_){$t(s,s.return,_)}}break;case 27:i===null&&l&4&&ov(s);case 26:case 5:Er(e,s),i===null&&l&4&&av(s),l&512&&ol(s,s.return);break;case 12:Er(e,s);break;case 13:Er(e,s),l&4&&hv(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=AS.bind(null,s),BS(e,s))));break;case 22:if(l=s.memoizedState!==null||Bi,!l){i=i!==null&&i.memoizedState!==null||me,f=Bi;var d=me;Bi=l,(me=i)&&!d?Tr(e,s,(s.subtreeFlags&8772)!==0):Er(e,s),Bi=f,me=d}break;case 30:break;default:Er(e,s)}}function cv(e){var i=e.alternate;i!==null&&(e.alternate=null,cv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&lr(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,rn=!1;function Hi(e,i,s){for(s=s.child;s!==null;)fv(e,i,s),s=s.sibling}function fv(e,i,s){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(oe,s)}catch{}switch(s.tag){case 26:me||ri(s,i),Hi(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:me||ri(s,i);var l=ne,f=rn;Cr(s.type)&&(ne=s.stateNode,rn=!1),Hi(e,i,s),gl(s.stateNode),ne=l,rn=f;break;case 5:me||ri(s,i);case 6:if(l=ne,f=rn,ne=null,Hi(e,i,s),ne=l,rn=f,ne!==null)if(rn)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(s.stateNode)}catch(d){$t(s,i,d)}else try{ne.removeChild(s.stateNode)}catch(d){$t(s,i,d)}break;case 18:ne!==null&&(rn?(e=ne,Jv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Sl(e)):Jv(ne,s.stateNode));break;case 4:l=ne,f=rn,ne=s.stateNode.containerInfo,rn=!0,Hi(e,i,s),ne=l,rn=f;break;case 0:case 11:case 14:case 15:me||_r(2,s,i),me||_r(4,s,i),Hi(e,i,s);break;case 1:me||(ri(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&rv(s,i,l)),Hi(e,i,s);break;case 21:Hi(e,i,s);break;case 22:me=(l=me)||s.memoizedState!==null,Hi(e,i,s),me=l;break;default:Hi(e,i,s)}}function hv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sl(e)}catch(s){$t(i,i.return,s)}}function pS(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new lv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new lv),i;default:throw Error(a(435,e.tag))}}function dd(e,i){var s=pS(e);i.forEach(function(l){var f=SS.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function hn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,_=i,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Cr(T.type)){ne=T.stateNode,rn=!1;break t}break;case 5:ne=T.stateNode,rn=!1;break t;case 3:case 4:ne=T.stateNode.containerInfo,rn=!0;break t}T=T.return}if(ne===null)throw Error(a(160));fv(d,_,f),ne=null,rn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)dv(i,e),i=i.sibling}var Vn=null;function dv(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),dn(e),l&4&&(_r(3,e,e.return),sl(3,e),_r(5,e,e.return));break;case 1:hn(i,e),dn(e),l&512&&(me||s===null||ri(s,s.return)),l&64&&Bi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Vn;if(hn(i,e),dn(e),l&512&&(me||s===null||ri(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[sa]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),ze(d,l,s),d[Ee]=e,he(d),l=d;break t;case"link":var _=o_("link","href",f).get(l+(s.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(T,1);break e}}d=f.createElement(l),ze(d,l,s),f.head.appendChild(d);break;case"meta":if(_=o_("meta","content",f).get(l+(s.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(T,1);break e}}d=f.createElement(l),ze(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[Ee]=e,he(d),l=d}e.stateNode=l}else l_(f,e.type,e.stateNode);else e.stateNode=s_(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?l_(f,e.type,e.stateNode):s_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ud(e,e.memoizedProps,s.memoizedProps)}break;case 27:hn(i,e),dn(e),l&512&&(me||s===null||ri(s,s.return)),s!==null&&l&4&&ud(e,e.memoizedProps,s.memoizedProps);break;case 5:if(hn(i,e),dn(e),l&512&&(me||s===null||ri(s,s.return)),e.flags&32){f=e.stateNode;try{Tn(f,"")}catch(F){$t(e,e.return,F)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,ud(e,f,s!==null?s.memoizedProps:f)),l&1024&&(hd=!0);break;case 6:if(hn(i,e),dn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(F){$t(e,e.return,F)}}break;case 3:if(Oc=null,f=Vn,Vn=Cc(i.containerInfo),hn(i,e),Vn=f,dn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Sl(i.containerInfo)}catch(F){$t(e,e.return,F)}hd&&(hd=!1,mv(e));break;case 4:l=Vn,Vn=Cc(e.stateNode.containerInfo),hn(i,e),dn(e),Vn=l;break;case 12:hn(i,e),dn(e);break;case 13:hn(i,e),dn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(_d=_n()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,dd(e,l)));break;case 22:f=e.memoizedState!==null;var C=s!==null&&s.memoizedState!==null,j=Bi,X=me;if(Bi=j||f,me=X||C,hn(i,e),me=X,Bi=j,dn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||C||Bi||me||Na(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){C=s=i;try{if(d=C.stateNode,f)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=C.stateNode;var J=C.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(F){$t(C,C.return,F)}}}else if(i.tag===6){if(s===null){C=i;try{C.stateNode.nodeValue=f?"":C.memoizedProps}catch(F){$t(C,C.return,F)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,dd(e,s))));break;case 19:hn(i,e),dn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,dd(e,l)));break;case 30:break;case 21:break;default:hn(i,e),dn(e)}}function dn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(sv(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=cd(e);mc(e,d,f);break;case 5:var _=s.stateNode;s.flags&32&&(Tn(_,""),s.flags&=-33);var T=cd(e);mc(e,T,_);break;case 3:case 4:var C=s.stateNode.containerInfo,j=cd(e);fd(e,j,C);break;default:throw Error(a(161))}}catch(X){$t(e,e.return,X)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function mv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;mv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Er(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)uv(e,i.alternate,i),i=i.sibling}function Na(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:_r(4,i,i.return),Na(i);break;case 1:ri(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&rv(i,i.return,s),Na(i);break;case 27:gl(i.stateNode);case 26:case 5:ri(i,i.return),Na(i);break;case 22:i.memoizedState===null&&Na(i);break;case 30:Na(i);break;default:Na(i)}e=e.sibling}}function Tr(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Tr(f,d,s),sl(4,d);break;case 1:if(Tr(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){$t(l,l.return,j)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Fg(C[f],T)}catch(j){$t(l,l.return,j)}}s&&_&64&&iv(d),ol(d,d.return);break;case 27:ov(d);case 26:case 5:Tr(f,d,s),s&&l===null&&_&4&&av(d),ol(d,d.return);break;case 12:Tr(f,d,s);break;case 13:Tr(f,d,s),s&&_&4&&hv(f,d);break;case 22:d.memoizedState===null&&Tr(f,d,s),ol(d,d.return);break;case 30:break;default:Tr(f,d,s)}i=i.sibling}}function md(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Yo(s))}function pd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Yo(e))}function ai(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)pv(e,i,s,l),i=i.sibling}function pv(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:ai(e,i,s,l),f&2048&&sl(9,i);break;case 1:ai(e,i,s,l);break;case 3:ai(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Yo(e)));break;case 12:if(f&2048){ai(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){$t(i,i.return,C)}}else ai(e,i,s,l);break;case 13:ai(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?ai(e,i,s,l):ll(e,i):d._visibility&2?ai(e,i,s,l):(d._visibility|=2,Ms(e,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&md(_,i);break;case 24:ai(e,i,s,l),f&2048&&pd(i.alternate,i);break;default:ai(e,i,s,l)}}function Ms(e,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,_=i,T=s,C=l,j=_.flags;switch(_.tag){case 0:case 11:case 15:Ms(d,_,T,C,f),sl(8,_);break;case 23:break;case 22:var X=_.stateNode;_.memoizedState!==null?X._visibility&2?Ms(d,_,T,C,f):ll(d,_):(X._visibility|=2,Ms(d,_,T,C,f)),f&&j&2048&&md(_.alternate,_);break;case 24:Ms(d,_,T,C,f),f&&j&2048&&pd(_.alternate,_);break;default:Ms(d,_,T,C,f)}i=i.sibling}}function ll(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:ll(s,l),f&2048&&md(l.alternate,l);break;case 24:ll(s,l),f&2048&&pd(l.alternate,l);break;default:ll(s,l)}i=i.sibling}}var ul=8192;function Ps(e){if(e.subtreeFlags&ul)for(e=e.child;e!==null;)gv(e),e=e.sibling}function gv(e){switch(e.tag){case 26:Ps(e),e.flags&ul&&e.memoizedState!==null&&t1(Vn,e.memoizedState,e.memoizedProps);break;case 5:Ps(e);break;case 3:case 4:var i=Vn;Vn=Cc(e.stateNode.containerInfo),Ps(e),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ul,ul=16777216,Ps(e),ul=i):Ps(e));break;default:Ps(e)}}function yv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function cl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Oe=l,_v(l,e)}yv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vv(e),e=e.sibling}function vv(e){switch(e.tag){case 0:case 11:case 15:cl(e),e.flags&2048&&_r(9,e,e.return);break;case 3:cl(e);break;case 12:cl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,pc(e)):cl(e);break;default:cl(e)}}function pc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Oe=l,_v(l,e)}yv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:_r(8,i,i.return),pc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,pc(i));break;default:pc(i)}e=e.sibling}}function _v(e,i){for(;Oe!==null;){var s=Oe;switch(s.tag){case 0:case 11:case 15:_r(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Oe=l;else t:for(s=e;Oe!==null;){l=Oe;var f=l.sibling,d=l.return;if(cv(l),l===s){Oe=null;break t}if(f!==null){f.return=d,Oe=f;break t}Oe=d}}}var gS={getCacheForType:function(e){var i=Ge(Ae),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},yS=typeof WeakMap=="function"?WeakMap:Map,qt=0,Zt=null,Ot=null,Lt=0,Gt=0,mn=null,br=!1,ks=!1,gd=!1,Fi=0,ue=0,Ar=0,Ma=0,yd=0,Dn=0,Ls=0,fl=null,an=null,vd=!1,_d=0,gc=1/0,yc=null,Sr=null,Ue=0,wr=null,Vs=null,Us=0,Ed=0,Td=null,Ev=null,hl=0,bd=null;function pn(){if((qt&2)!==0&&Lt!==0)return Lt&-Lt;if(Q.T!==null){var e=ws;return e!==0?e:Od()}return sr()}function Tv(){Dn===0&&(Dn=(Lt&536870912)===0||Bt?To():536870912);var e=On.current;return e!==null&&(e.flags|=32),Dn}function gn(e,i,s){(e===Zt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(zs(e,0),Rr(e,Lt,Dn,!1)),Ti(e,s),((qt&2)===0||e!==Zt)&&(e===Zt&&((qt&2)===0&&(Ma|=s),ue===4&&Rr(e,Lt,Dn,!1)),si(e))}function bv(e,i,s){if((qt&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&e.expiredLanes)===0||aa(e,i),f=l?ES(e,i):wd(e,i,!0),d=l;do{if(f===0){ks&&!l&&Rr(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!vS(s)){f=wd(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var T=e;f=fl;var C=T.current.memoizedState.isDehydrated;if(C&&(zs(T,_).flags|=256),_=wd(T,_,!1),_!==2){if(gd&&!C){T.errorRecoveryDisabledLanes|=d,Ma|=d,f=4;break t}d=an,an=f,d!==null&&(an===null?an=d:an.push.apply(an,d))}f=_}if(d=!1,f!==2)continue}}if(f===1){zs(e,0),Rr(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Rr(l,i,Dn,!br);break t;case 2:an=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=_d+300-_n(),10<f)){if(Rr(l,i,Dn,!br),ns(l,0,!0)!==0)break t;l.timeoutHandle=Wv(Av.bind(null,l,s,an,yc,vd,i,Dn,Ma,Ls,br,d,2,-0,0),f);break t}Av(l,s,an,yc,vd,i,Dn,Ma,Ls,br,d,0,-0,0)}}break}while(!0);si(e)}function Av(e,i,s,l,f,d,_,T,C,j,X,J,H,F){if(e.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(_l={stylesheets:null,count:0,unsuspend:JS},gv(i),J=e1(),J!==null)){e.cancelPendingCommit=J(Dv.bind(null,e,i,d,s,l,f,_,T,C,X,1,H,F)),Rr(e,d,_,!j);return}Dv(e,i,d,s,l,f,_,T,C)}function vS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!cn(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(e,i,s,l){i&=~yd,i&=~Ma,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-qe(f),_=1<<d;l[d]=-1,f&=~_}s!==0&&Gn(e,s,i)}function vc(){return(qt&6)===0?(dl(0),!1):!0}function Ad(){if(Ot!==null){if(Gt===0)var e=Ot.return;else e=Ot,ki=Ca=null,jh(e),xs=null,il=0,e=Ot;for(;e!==null;)nv(e.alternate,e),e=e.return;Ot=null}}function zs(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,LS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ad(),Zt=e,Ot=s=Ni(e.current,null),Lt=i,Gt=0,mn=null,br=!1,ks=aa(e,i),gd=!1,Ls=Dn=yd=Ma=Ar=ue=0,an=fl=null,vd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-qe(l),d=1<<f;i|=e[f],l&=~d}return Fi=i,ju(),s}function Sv(e,i){Rt=null,Q.H=ac,i===Qo||i===Xu?(i=Bg(),Gt=3):i===Ug?(i=Bg(),Gt=4):Gt=i===Hy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,mn=i,Ot===null&&(ue=1,cc(e,wn(i,e.current)))}function wv(){var e=Q.H;return Q.H=ac,e===null?ac:e}function Rv(){var e=Q.A;return Q.A=gS,e}function Sd(){ue=4,br||(Lt&4194048)!==Lt&&On.current!==null||(ks=!0),(Ar&134217727)===0&&(Ma&134217727)===0||Zt===null||Rr(Zt,Lt,Dn,!1)}function wd(e,i,s){var l=qt;qt|=2;var f=wv(),d=Rv();(Zt!==e||Lt!==i)&&(yc=null,zs(e,i)),i=!1;var _=ue;t:do try{if(Gt!==0&&Ot!==null){var T=Ot,C=mn;switch(Gt){case 8:Ad(),_=6;break t;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var j=Gt;if(Gt=0,mn=null,js(e,T,C,j),s&&ks){_=0;break t}break;default:j=Gt,Gt=0,mn=null,js(e,T,C,j)}}_S(),_=ue;break}catch(X){Sv(e,X)}while(!0);return i&&e.shellSuspendCounter++,ki=Ca=null,qt=l,Q.H=f,Q.A=d,Ot===null&&(Zt=null,Lt=0,ju()),_}function _S(){for(;Ot!==null;)Cv(Ot)}function ES(e,i){var s=qt;qt|=2;var l=wv(),f=Rv();Zt!==e||Lt!==i?(yc=null,gc=_n()+500,zs(e,i)):ks=aa(e,i);t:do try{if(Gt!==0&&Ot!==null){i=Ot;var d=mn;e:switch(Gt){case 1:Gt=0,mn=null,js(e,i,d,1);break;case 2:case 9:if(zg(d)){Gt=0,mn=null,Iv(i);break}i=function(){Gt!==2&&Gt!==9||Zt!==e||(Gt=7),si(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:zg(d)?(Gt=0,mn=null,Iv(i)):(Gt=0,mn=null,js(e,i,d,7));break;case 5:var _=null;switch(Ot.tag){case 26:_=Ot.memoizedState;case 5:case 27:var T=Ot;if(!_||u_(_)){Gt=0,mn=null;var C=T.sibling;if(C!==null)Ot=C;else{var j=T.return;j!==null?(Ot=j,_c(j)):Ot=null}break e}}Gt=0,mn=null,js(e,i,d,5);break;case 6:Gt=0,mn=null,js(e,i,d,6);break;case 8:Ad(),ue=6;break t;default:throw Error(a(462))}}TS();break}catch(X){Sv(e,X)}while(!0);return ki=Ca=null,Q.H=l,Q.A=f,qt=s,Ot!==null?0:(Zt=null,Lt=0,ju(),ue)}function TS(){for(;Ot!==null&&!yo();)Cv(Ot)}function Cv(e){var i=tv(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,i===null?_c(e):Ot=i}function Iv(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Qy(s,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=Qy(s,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:jh(i);default:nv(s,i),i=Ot=Og(i,Fi),i=tv(s,i,Fi)}e.memoizedProps=e.pendingProps,i===null?_c(e):Ot=i}function js(e,i,s,l){ki=Ca=null,jh(i),xs=null,il=0;var f=i.return;try{if(cS(e,f,i,s,Lt)){ue=1,cc(e,wn(s,e.current)),Ot=null;return}}catch(d){if(f!==null)throw Ot=f,d;ue=1,cc(e,wn(s,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:ks||(Lt&536870912)!==0?e=!1:(br=e=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ov(i,e)):_c(i)}function _c(e){var i=e;do{if((i.flags&32768)!==0){Ov(i,br);return}e=i.return;var s=hS(i.alternate,i,Fi);if(s!==null){Ot=s;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);ue===0&&(ue=5)}function Ov(e,i){do{var s=dS(e.alternate,e);if(s!==null){s.flags&=32767,Ot=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=s}while(e!==null);ue=6,Ot=null}function Dv(e,i,s,l,f,d,_,T,C){e.cancelPendingCommit=null;do Ec();while(Ue!==0);if((qt&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=ph,Ao(e,s,d,_,T,C),e===Zt&&(Ot=Zt=null,Lt=0),Vs=i,wr=e,Us=s,Ed=d,Td=f,Ev=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wS(ea,function(){return kv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,f=ot.p,ot.p=2,_=qt,qt|=4;try{mS(e,i,s)}finally{qt=_,ot.p=f,Q.T=l}}Ue=1,xv(),Nv(),Mv()}}function xv(){if(Ue===1){Ue=0;var e=wr,i=Vs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=Q.T,Q.T=null;var l=ot.p;ot.p=2;var f=qt;qt|=4;try{dv(i,e);var d=Vd,_=_g(e.containerInfo),T=d.focusedElem,C=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&vg(T.ownerDocument.documentElement,T)){if(C!==null&&ch(T)){var j=C.start,X=C.end;if(X===void 0&&(X=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var F=H.getSelection(),Et=T.textContent.length,yt=Math.min(C.start,Et),Xt=C.end===void 0?yt:Math.min(C.end,Et);!F.extend&&yt>Xt&&(_=Xt,Xt=yt,yt=_);var k=yg(T,yt),N=yg(T,Xt);if(k&&N&&(F.rangeCount!==1||F.anchorNode!==k.node||F.anchorOffset!==k.offset||F.focusNode!==N.node||F.focusOffset!==N.offset)){var z=J.createRange();z.setStart(k.node,k.offset),F.removeAllRanges(),yt>Xt?(F.addRange(z),F.extend(N.node,N.offset)):(z.setEnd(N.node,N.offset),F.addRange(z))}}}}for(J=[],F=T;F=F.parentNode;)F.nodeType===1&&J.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var $=J[T];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Nc=!!Ld,Vd=Ld=null}finally{qt=f,ot.p=l,Q.T=s}}e.current=i,Ue=2}}function Nv(){if(Ue===2){Ue=0;var e=wr,i=Vs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=Q.T,Q.T=null;var l=ot.p;ot.p=2;var f=qt;qt|=4;try{uv(e,i.alternate,i)}finally{qt=f,ot.p=l,Q.T=s}}Ue=3}}function Mv(){if(Ue===4||Ue===3){Ue=0,pu();var e=wr,i=Vs,s=Us,l=Ev;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ue=5:(Ue=0,Vs=wr=null,Pv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Sr=null),is(s),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Q.T,f=ot.p,ot.p=2,Q.T=null;try{for(var d=e.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{Q.T=i,ot.p=f}}(Us&3)!==0&&Ec(),si(e),f=e.pendingLanes,(s&4194090)!==0&&(f&42)!==0?e===bd?hl++:(hl=0,bd=e):hl=0,dl(0)}}function Pv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Yo(i)))}function Ec(e){return xv(),Nv(),Mv(),kv()}function kv(){if(Ue!==5)return!1;var e=wr,i=Ed;Ed=0;var s=is(Us),l=Q.T,f=ot.p;try{ot.p=32>s?32:s,Q.T=null,s=Td,Td=null;var d=wr,_=Us;if(Ue=0,Vs=wr=null,Us=0,(qt&6)!==0)throw Error(a(331));var T=qt;if(qt|=4,vv(d.current),pv(d,d.current,_,s),qt=T,dl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(oe,d)}catch{}return!0}finally{ot.p=f,Q.T=l,Pv(e,i)}}function Lv(e,i,s){i=wn(s,i),i=td(e.stateNode,i,2),e=pr(e,i,2),e!==null&&(Ti(e,2),si(e))}function $t(e,i,s){if(e.tag===3)Lv(e,e,s);else for(;i!==null;){if(i.tag===3){Lv(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Sr===null||!Sr.has(l))){e=wn(s,e),s=jy(2),l=pr(i,s,2),l!==null&&(By(s,l,i,e),Ti(l,2),si(l));break}}i=i.return}}function Rd(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new yS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(gd=!0,f.add(s),e=bS.bind(null,e,i,s),i.then(e,e))}function bS(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Zt===e&&(Lt&s)===s&&(ue===4||ue===3&&(Lt&62914560)===Lt&&300>_n()-_d?(qt&2)===0&&zs(e,0):yd|=s,Ls===Lt&&(Ls=0)),si(e)}function Vv(e,i){i===0&&(i=bo()),e=Ts(e,i),e!==null&&(Ti(e,i),si(e))}function AS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Vv(e,s)}function SS(e,i){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Vv(e,s)}function wS(e,i){return Jr(e,i)}var Tc=null,Bs=null,Cd=!1,bc=!1,Id=!1,Pa=0;function si(e){e!==Bs&&e.next===null&&(Bs===null?Tc=Bs=e:Bs=Bs.next=e),bc=!0,Cd||(Cd=!0,CS())}function dl(e,i){if(!Id&&bc){Id=!0;do for(var s=!1,l=Tc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-qe(42|e)+1)-1,d&=f&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Bv(l,d))}else d=Lt,d=ns(l,l===Zt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||aa(l,d)||(s=!0,Bv(l,d));l=l.next}while(s);Id=!1}}function RS(){Uv()}function Uv(){bc=Cd=!1;var e=0;Pa!==0&&(kS()&&(e=Pa),Pa=0);for(var i=_n(),s=null,l=Tc;l!==null;){var f=l.next,d=zv(l,i);d===0?(l.next=null,s===null?Tc=f:s.next=f,f===null&&(Bs=s)):(s=l,(e!==0||(d&3)!==0)&&(bc=!0)),l=f}dl(e)}function zv(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-qe(d),T=1<<_,C=f[_];C===-1?((T&s)===0||(T&l)!==0)&&(f[_]=Eo(T,i)):C<=i&&(e.expiredLanes|=T),d&=~T}if(i=Zt,s=Lt,s=ns(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ta(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||aa(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ta(l),is(s)){case 2:case 8:s=ts;break;case 32:s=ea;break;case 268435456:s=es;break;default:s=ea}return l=jv.bind(null,e),s=Jr(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ta(l),e.callbackPriority=2,e.callbackNode=null,2}function jv(e,i){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Ec()&&e.callbackNode!==s)return null;var l=Lt;return l=ns(e,e===Zt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(bv(e,l,i),zv(e,_n()),e.callbackNode!=null&&e.callbackNode===s?jv.bind(null,e):null)}function Bv(e,i){if(Ec())return null;bv(e,i,!0)}function CS(){VS(function(){(qt&6)!==0?Jr(vo,RS):Uv()})}function Od(){return Pa===0&&(Pa=To()),Pa}function Hv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:us(""+e)}function Fv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function IS(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=Hv((f[pe]||null).action),_=l.submitter;_&&(i=(i=_[pe]||null)?Hv(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var T=new cs("action","action",null,l,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pa!==0){var C=_?Fv(f,_):new FormData(f);Xh(s,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=_?Fv(f,_):new FormData(f),Xh(s,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Dd=0;Dd<mh.length;Dd++){var xd=mh[Dd],OS=xd.toLowerCase(),DS=xd[0].toUpperCase()+xd.slice(1);Ln(OS,"on"+DS)}Ln(bg,"onAnimationEnd"),Ln(Ag,"onAnimationIteration"),Ln(Sg,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(KA,"onTransitionRun"),Ln(QA,"onTransitionStart"),Ln(XA,"onTransitionCancel"),Ln(wg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function qv(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var T=l[_],C=T.instance,j=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=j;try{d(f)}catch(X){uc(X)}f.currentTarget=null,d=C}else for(_=0;_<l.length;_++){if(T=l[_],C=T.instance,j=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=j;try{d(f)}catch(X){uc(X)}f.currentTarget=null,d=C}}}}function Dt(e,i){var s=i[wo];s===void 0&&(s=i[wo]=new Set);var l=e+"__bubble";s.has(l)||(Gv(i,e,2,!1),s.add(l))}function Nd(e,i,s){var l=0;i&&(l|=4),Gv(s,e,l,i)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function Md(e){if(!e[Ac]){e[Ac]=!0,Ro.forEach(function(s){s!=="selectionchange"&&(xS.has(s)||Nd(s,!1,e),Nd(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ac]||(i[Ac]=!0,Nd("selectionchange",!1,i))}}function Gv(e,i,s,l){switch(p_(i)){case 2:var f=r1;break;case 8:f=a1;break;default:f=Kd}s=f.bind(null,i,s,e),f=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Pd(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===f)break;if(_===4)for(_=l.return;_!==null;){var C=_.tag;if((C===3||C===4)&&_.stateNode.containerInfo===f)return;_=_.return}for(;T!==null;){if(_=bi(T),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){l=d=_;continue t}T=T.parentNode}}l=l.return}wu(function(){var j=d,X=bn(s),J=[];t:{var H=Rg.get(e);if(H!==void 0){var F=cs,Et=e;switch(e){case"keypress":if(Wn(s)===0)break t;case"keydown":case"keyup":F=gs;break;case"focusin":Et="focus",F=ds;break;case"focusout":Et="blur",F=ds;break;case"beforeblur":case"afterblur":F=ds;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Mu;break;case bg:case Ag:case Sg:F=ms;break;case wg:F=ku;break;case"scroll":case"scrollend":F=Ru;break;case"wheel":F=ys;break;case"copy":case"cut":case"paste":F=ps;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Uo;break;case"toggle":case"beforetoggle":F=Vu}var yt=(i&4)!==0,Xt=!yt&&(e==="scroll"||e==="scrollend"),k=yt?H!==null?H+"Capture":null:H;yt=[];for(var N=j,z;N!==null;){var $=N;if(z=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||z===null||k===null||($=da(N,k),$!=null&&yt.push(pl(N,$,z))),Xt)break;N=N.return}0<yt.length&&(H=new F(H,Et,null,s,X),J.push({event:H,listeners:yt}))}}if((i&7)===0){t:{if(H=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",H&&s!==Ri&&(Et=s.relatedTarget||s.fromElement)&&(bi(Et)||Et[En]))break t;if((F||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,F?(Et=s.relatedTarget||s.toElement,F=j,Et=Et?bi(Et):null,Et!==null&&(Xt=u(Et),yt=Et.tag,Et!==Xt||yt!==5&&yt!==27&&yt!==6)&&(Et=null)):(F=null,Et=j),F!==Et)){if(yt=Sn,$="onMouseLeave",k="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(yt=Uo,$="onPointerLeave",k="onPointerEnter",N="pointer"),Xt=F==null?H:Kn(F),z=Et==null?H:Kn(Et),H=new yt($,N+"leave",F,s,X),H.target=Xt,H.relatedTarget=z,$=null,bi(X)===j&&(yt=new yt(k,N+"enter",Et,s,X),yt.target=z,yt.relatedTarget=Xt,$=yt),Xt=$,F&&Et)e:{for(yt=F,k=Et,N=0,z=yt;z;z=Hs(z))N++;for(z=0,$=k;$;$=Hs($))z++;for(;0<N-z;)yt=Hs(yt),N--;for(;0<z-N;)k=Hs(k),z--;for(;N--;){if(yt===k||k!==null&&yt===k.alternate)break e;yt=Hs(yt),k=Hs(k)}yt=null}else yt=null;F!==null&&Yv(J,H,F,yt,!1),Et!==null&&Xt!==null&&Yv(J,Xt,Et,yt,!0)}}t:{if(H=j?Kn(j):window,F=H.nodeName&&H.nodeName.toLowerCase(),F==="select"||F==="input"&&H.type==="file")var ft=fg;else if(be(H))if(hg)ft=qA;else{ft=HA;var It=BA}else F=H.nodeName,!F||F.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?j&&xo(j.elementType)&&(ft=fg):ft=FA;if(ft&&(ft=ft(e,j))){xi(J,ft,s,X);break t}It&&It(e,H,j),e==="focusout"&&j&&H.type==="number"&&j.memoizedProps.value!=null&&cr(H,"number",H.value)}switch(It=j?Kn(j):window,e){case"focusin":(be(It)||It.contentEditable==="true")&&(vs=It,fh=j,Bo=null);break;case"focusout":Bo=fh=vs=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,Eg(J,s,X);break;case"selectionchange":if(YA)break;case"keydown":case"keyup":Eg(J,s,X)}var mt;if(ti)t:{switch(e){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Pt?G(e,s)&&(vt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(vt="onCompositionStart");vt&&(v&&s.locale!=="ko"&&(Pt||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Pt&&(mt=Mo()):($n=X,fr="value"in $n?$n.value:$n.textContent,Pt=!0)),It=Sc(j,vt),0<It.length&&(vt=new Lo(vt,e,null,s,X),J.push({event:vt,listeners:It}),mt?vt.data=mt:(mt=st(s),mt!==null&&(vt.data=mt)))),(mt=p?Te(e,s):kt(e,s))&&(vt=Sc(j,"onBeforeInput"),0<vt.length&&(It=new Lo("onBeforeInput","beforeinput",null,s,X),J.push({event:It,listeners:vt}),It.data=mt)),IS(J,e,j,s,X)}qv(J,i)})}function pl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Sc(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=da(e,s),f!=null&&l.unshift(pl(e,f,d)),f=da(e,i),f!=null&&l.push(pl(e,f,d))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yv(e,i,s,l,f){for(var d=i._reactName,_=[];s!==null&&s!==l;){var T=s,C=T.alternate,j=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||j===null||(C=j,f?(j=da(s,d),j!=null&&_.unshift(pl(s,j,C))):f||(j=da(s,d),j!=null&&_.push(pl(s,j,C)))),s=s.return}_.length!==0&&e.push({event:i,listeners:_})}var NS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function Kv(e){return(typeof e=="string"?e:""+e).replace(NS,`
`).replace(MS,"")}function Qv(e,i){return i=Kv(i),Kv(e)===i}function wc(){}function Qt(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":Qn(e,"class",l);break;case"tabIndex":Qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,s,l);break;case"style":Do(e,l,d);break;case"data":if(i!=="object"){Qn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=us(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Qt(e,i,"name",f.name,f,null),Qt(e,i,"formEncType",f.formEncType,f,null),Qt(e,i,"formMethod",f.formMethod,f,null),Qt(e,i,"formTarget",f.formTarget,f,null)):(Qt(e,i,"encType",f.encType,f,null),Qt(e,i,"method",f.method,f,null),Qt(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=us(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=wc);break;case"onScroll":l!=null&&Dt("scroll",e);break;case"onScrollEnd":l!=null&&Dt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=us(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Dt("beforetoggle",e),Dt("toggle",e),ur(e,"popover",l);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ur(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=rh.get(s)||s,ur(e,s,l))}}function kd(e,i,s,l,f,d){switch(s){case"style":Do(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&Dt("scroll",e);break;case"onScrollEnd":l!=null&&Dt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[pe]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):ur(e,s,l)}}}function ze(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",e),Dt("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var _=s[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(e,i,d,_,s,null)}}f&&Qt(e,i,"srcSet",s.srcSet,s,null),l&&Qt(e,i,"src",s.src,s,null);return;case"input":Dt("invalid",e);var T=d=_=f=null,C=null,j=null;for(l in s)if(s.hasOwnProperty(l)){var X=s[l];if(X!=null)switch(l){case"name":f=X;break;case"type":_=X;break;case"checked":C=X;break;case"defaultChecked":j=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:Qt(e,i,l,X,s,null)}}ca(e,d,T,C,j,_,f,!1),ls(e);return;case"select":Dt("invalid",e),l=_=d=null;for(f in s)if(s.hasOwnProperty(f)&&(T=s[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Qt(e,i,f,T,s,null)}i=d,s=_,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):s!=null&&wi(e,!!l,s,!0);return;case"textarea":Dt("invalid",e),d=f=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(T=s[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Qt(e,i,_,T,s,null)}fa(e,l,f,d),ls(e);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(l=s[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(e,i,C,l,s,null)}return;case"dialog":Dt("beforetoggle",e),Dt("toggle",e),Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":Dt("load",e);break;case"video":case"audio":for(l=0;l<ml.length;l++)Dt(ml[l],e);break;case"image":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"embed":case"source":case"link":Dt("error",e),Dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in s)if(s.hasOwnProperty(j)&&(l=s[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(e,i,j,l,s,null)}return;default:if(xo(i)){for(X in s)s.hasOwnProperty(X)&&(l=s[X],l!==void 0&&kd(e,i,X,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Qt(e,i,T,l,s,null))}function PS(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,T=null,C=null,j=null,X=null;for(F in s){var J=s[F];if(s.hasOwnProperty(F)&&J!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(F)||Qt(e,i,F,null,l,J)}}for(var H in l){var F=l[H];if(J=s[H],l.hasOwnProperty(H)&&(F!=null||J!=null))switch(H){case"type":d=F;break;case"name":f=F;break;case"checked":j=F;break;case"defaultChecked":X=F;break;case"value":_=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,i));break;default:F!==J&&Qt(e,i,H,F,l,J)}}un(e,_,T,C,j,X,d,f);return;case"select":F=_=T=H=null;for(d in s)if(C=s[d],s.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":F=C;default:l.hasOwnProperty(d)||Qt(e,i,d,null,l,C)}for(f in l)if(d=l[f],C=s[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==C&&Qt(e,i,f,d,l,C)}i=T,s=_,l=F,H!=null?wi(e,!!s,H,!1):!!l!=!!s&&(i!=null?wi(e,!!s,i,!0):wi(e,!!s,s?[]:"",!1));return;case"textarea":F=H=null;for(T in s)if(f=s[T],s.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qt(e,i,T,null,l,f)}for(_ in l)if(f=l[_],d=s[_],l.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":H=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Qt(e,i,_,f,l,d)}Yt(e,H,F);return;case"option":for(var Et in s)if(H=s[Et],s.hasOwnProperty(Et)&&H!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Qt(e,i,Et,null,l,H)}for(C in l)if(H=l[C],F=s[C],l.hasOwnProperty(C)&&H!==F&&(H!=null||F!=null))switch(C){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Qt(e,i,C,H,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var yt in s)H=s[yt],s.hasOwnProperty(yt)&&H!=null&&!l.hasOwnProperty(yt)&&Qt(e,i,yt,null,l,H);for(j in l)if(H=l[j],F=s[j],l.hasOwnProperty(j)&&H!==F&&(H!=null||F!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,i));break;default:Qt(e,i,j,H,l,F)}return;default:if(xo(i)){for(var Xt in s)H=s[Xt],s.hasOwnProperty(Xt)&&H!==void 0&&!l.hasOwnProperty(Xt)&&kd(e,i,Xt,void 0,l,H);for(X in l)H=l[X],F=s[X],!l.hasOwnProperty(X)||H===F||H===void 0&&F===void 0||kd(e,i,X,H,l,F);return}}for(var k in s)H=s[k],s.hasOwnProperty(k)&&H!=null&&!l.hasOwnProperty(k)&&Qt(e,i,k,null,l,H);for(J in l)H=l[J],F=s[J],!l.hasOwnProperty(J)||H===F||H==null&&F==null||Qt(e,i,J,H,l,F)}var Ld=null,Vd=null;function Rc(e){return e.nodeType===9?e:e.ownerDocument}function Xv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $v(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ud(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zd=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===zd?!1:(zd=e,!0):(zd=null,!1)}var Wv=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,Zv=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zv<"u"?function(e){return Zv.resolve(null).then(e).catch(US)}:Wv;function US(e){setTimeout(function(){throw e})}function Cr(e){return e==="head"}function Jv(e,i){var s=i,l=0,f=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<l&&8>l){s=l;var _=e.ownerDocument;if(s&1&&gl(_.documentElement),s&2&&gl(_.body),s&4)for(s=_.head,gl(s),_=s.firstChild;_;){var T=_.nextSibling,C=_.nodeName;_[sa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&_.rel.toLowerCase()==="stylesheet"||s.removeChild(_),_=T}}if(f===0){e.removeChild(d),Sl(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=d}while(s);Sl(i)}function jd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":jd(s),lr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function zS(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[sa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function jS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Un(e.nextSibling),e===null))return null;return e}function Bd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function BS(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Un(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Hd=null;function t_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function e_(e,i,s){switch(i=Rc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function gl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lr(e)}var xn=new Map,n_=new Set;function Cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=ot.d;ot.d={f:HS,r:FS,D:qS,C:GS,L:YS,m:KS,X:XS,S:QS,M:$S};function HS(){var e=qi.f(),i=vc();return e||i}function FS(e){var i=Yn(e);i!==null&&i.tag===5&&i.type==="form"?by(i):qi.r(e)}var Fs=typeof document>"u"?null:document;function i_(e,i,s){var l=Fs;if(l&&typeof i=="string"&&i){var f=ge(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),n_.has(f)||(n_.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),ze(i,"link",e),he(i),l.head.appendChild(i)))}}function qS(e){qi.D(e),i_("dns-prefetch",e,null)}function GS(e,i){qi.C(e,i),i_("preconnect",e,i)}function YS(e,i,s){qi.L(e,i,s);var l=Fs;if(l&&e&&i){var f='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ge(s.imageSizes)+'"]')):f+='[href="'+ge(e)+'"]';var d=f;switch(i){case"style":d=qs(e);break;case"script":d=Gs(e)}xn.has(d)||(e=E({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),xn.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(yl(d))||i==="script"&&l.querySelector(vl(d))||(i=l.createElement("link"),ze(i,"link",e),he(i),l.head.appendChild(i)))}}function KS(e,i){qi.m(e,i);var s=Fs;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Gs(e)}if(!xn.has(d)&&(e=E({rel:"modulepreload",href:e},i),xn.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vl(d)))return}l=s.createElement("link"),ze(l,"link",e),he(l),s.head.appendChild(l)}}}function QS(e,i,s){qi.S(e,i,s);var l=Fs;if(l&&e){var f=Ze(l).hoistableStyles,d=qs(e);i=i||"default";var _=f.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(yl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},s),(s=xn.get(d))&&Fd(e,s);var C=_=l.createElement("link");he(C),ze(C,"link",e),C._p=new Promise(function(j,X){C.onload=j,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ic(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(d,_)}}}function XS(e,i){qi.X(e,i);var s=Fs;if(s&&e){var l=Ze(s).hoistableScripts,f=Gs(e),d=l.get(f);d||(d=s.querySelector(vl(f)),d||(e=E({src:e,async:!0},i),(i=xn.get(f))&&qd(e,i),d=s.createElement("script"),he(d),ze(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function $S(e,i){qi.M(e,i);var s=Fs;if(s&&e){var l=Ze(s).hoistableScripts,f=Gs(e),d=l.get(f);d||(d=s.querySelector(vl(f)),d||(e=E({src:e,async:!0,type:"module"},i),(i=xn.get(f))&&qd(e,i),d=s.createElement("script"),he(d),ze(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function r_(e,i,s,l){var f=(f=bt.current)?Cc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=qs(s.href),s=Ze(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=qs(s.href);var d=Ze(f).hoistableStyles,_=d.get(e);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=f.querySelector(yl(e)))&&!d._p&&(_.instance=d,_.state.loading=5),xn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xn.set(e,s),d||WS(f,e,s,_.state))),i&&l===null)throw Error(a(528,""));return _}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Gs(s),s=Ze(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function qs(e){return'href="'+ge(e)+'"'}function yl(e){return'link[rel="stylesheet"]['+e+"]"}function a_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function WS(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ze(i,"link",s),he(i),e.head.appendChild(i))}function Gs(e){return'[src="'+ge(e)+'"]'}function vl(e){return"script[async]"+e}function s_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ge(s.href)+'"]');if(l)return i.instance=l,he(l),l;var f=E({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),he(l),ze(l,"style",f),Ic(l,s.precedence,e),i.instance=l;case"stylesheet":f=qs(s.href);var d=e.querySelector(yl(f));if(d)return i.state.loading|=4,i.instance=d,he(d),d;l=a_(s),(f=xn.get(f))&&Fd(l,f),d=(e.ownerDocument||e).createElement("link"),he(d);var _=d;return _._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),ze(d,"link",l),i.state.loading|=4,Ic(d,s.precedence,e),i.instance=d;case"script":return d=Gs(s.src),(f=e.querySelector(vl(d)))?(i.instance=f,he(f),f):(l=s,(f=xn.get(d))&&(l=E({},s),qd(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),he(f),ze(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,s.precedence,e));return i.instance}function Ic(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===i)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function qd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Oc=null;function o_(e,i,s){if(Oc===null){var l=new Map,f=Oc=new Map;f.set(s,l)}else f=Oc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[sa]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=e+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function l_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function ZS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function u_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _l=null;function JS(){}function t1(e,i,s){if(_l===null)throw Error(a(475));var l=_l;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=qs(s.href),d=e.querySelector(yl(f));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Dc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,he(d);return}d=e.ownerDocument||e,s=a_(s),(f=xn.get(f))&&Fd(s,f),d=d.createElement("link"),he(d);var _=d;_._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),ze(d,"link",s),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Dc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function e1(){if(_l===null)throw Error(a(475));var e=_l;return e.stylesheets&&e.count===0&&Gd(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&Gd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Dc(){if(this.count--,this.count===0){if(this.stylesheets)Gd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function Gd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,i.forEach(n1,e),xc=null,Dc.call(e))}function n1(e,i){if(!(i.state.loading&4)){var s=xc.get(e);if(s)var l=s.get(null);else{s=new Map,xc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}f=i.instance,_=f.getAttribute("data-precedence"),d=s.get(_)||l,d===l&&s.set(null,f),s.set(_,f),this.count++,l=Dc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var El={$$typeof:Z,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function i1(e,i,s,l,f,d,_,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ei(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.hiddenUpdates=Ei(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function c_(e,i,s,l,f,d,_,T,C,j,X,J){return e=new i1(e,i,s,_,T,C,j,J),i=1,d===!0&&(i|=24),d=fn(3,null,null,i),e.current=d,d.stateNode=e,i=Rh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},Dh(d),e}function f_(e){return e?(e=bs,e):bs}function h_(e,i,s,l,f,d){f=f_(f),l.context===null?l.context=f:l.pendingContext=f,l=mr(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=pr(e,l,i),s!==null&&(gn(s,e,i),$o(s,e,i))}function d_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Yd(e,i){d_(e,i),(e=e.alternate)&&d_(e,i)}function m_(e){if(e.tag===13){var i=Ts(e,67108864);i!==null&&gn(i,e,67108864),Yd(e,67108864)}}var Nc=!0;function r1(e,i,s,l){var f=Q.T;Q.T=null;var d=ot.p;try{ot.p=2,Kd(e,i,s,l)}finally{ot.p=d,Q.T=f}}function a1(e,i,s,l){var f=Q.T;Q.T=null;var d=ot.p;try{ot.p=8,Kd(e,i,s,l)}finally{ot.p=d,Q.T=f}}function Kd(e,i,s,l){if(Nc){var f=Qd(l);if(f===null)Pd(e,i,l,Mc,s),g_(e,l);else if(o1(f,e,i,s,l))l.stopPropagation();else if(g_(e,l),i&4&&-1<s1.indexOf(e)){for(;f!==null;){var d=Yn(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Mn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var C=1<<31-qe(_);T.entanglements[1]|=C,_&=~C}si(d),(qt&6)===0&&(gc=_n()+500,dl(0))}}break;case 13:T=Ts(d,2),T!==null&&gn(T,d,2),vc(),Yd(d,2)}if(d=Qd(l),d===null&&Pd(e,i,l,Mc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Pd(e,i,l,null,s)}}function Qd(e){return e=bn(e),Xd(e)}var Mc=null;function Xd(e){if(Mc=null,e=bi(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Mc=e,null}function p_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zf()){case vo:return 2;case ts:return 8;case ea:case Jf:return 32;case es:return 268435456;default:return 32}default:return 32}}var $d=!1,Ir=null,Or=null,Dr=null,Tl=new Map,bl=new Map,xr=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g_(e,i){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Tl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":bl.delete(i.pointerId)}}function Al(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Yn(i),i!==null&&m_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function o1(e,i,s,l,f){switch(i){case"focusin":return Ir=Al(Ir,e,i,s,l,f),!0;case"dragenter":return Or=Al(Or,e,i,s,l,f),!0;case"mouseover":return Dr=Al(Dr,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return Tl.set(d,Al(Tl.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,bl.set(d,Al(bl.get(d)||null,e,i,s,l,f)),!0}return!1}function y_(e){var i=bi(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=h(s),i!==null){e.blockedOn=i,vu(e.priority,function(){if(s.tag===13){var l=pn();l=ar(l);var f=Ts(s,l);f!==null&&gn(f,s,l),Yd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Qd(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Ri=l,s.target.dispatchEvent(l),Ri=null}else return i=Yn(s),i!==null&&m_(i),e.blockedOn=s,!1;i.shift()}return!0}function v_(e,i,s){Pc(e)&&s.delete(i)}function l1(){$d=!1,Ir!==null&&Pc(Ir)&&(Ir=null),Or!==null&&Pc(Or)&&(Or=null),Dr!==null&&Pc(Dr)&&(Dr=null),Tl.forEach(v_),bl.forEach(v_)}function kc(e,i){e.blockedOn===i&&(e.blockedOn=null,$d||($d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,l1)))}var Lc=null;function __(e){Lc!==e&&(Lc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Lc===e&&(Lc=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Xd(l||s)===null)continue;break}var d=Yn(s);d!==null&&(e.splice(i,3),i-=3,Xh(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Sl(e){function i(C){return kc(C,e)}Ir!==null&&kc(Ir,e),Or!==null&&kc(Or,e),Dr!==null&&kc(Dr,e),Tl.forEach(i),bl.forEach(i);for(var s=0;s<xr.length;s++){var l=xr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xr.length&&(s=xr[0],s.blockedOn===null);)y_(s),s.blockedOn===null&&xr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],_=f[pe]||null;if(typeof d=="function")_||__(s);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[pe]||null)T=_.formAction;else if(Xd(f)!==null)continue}else T=_.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),__(s)}}}function Wd(e){this._internalRoot=e}Vc.prototype.render=Wd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=pn();h_(s,l,e,i,null,null)},Vc.prototype.unmount=Wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;h_(e.current,2,null,e,null,null),vc(),i[En]=null}};function Vc(e){this._internalRoot=e}Vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=sr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<xr.length&&i!==0&&i<xr[s].priority;s++);xr.splice(s,0,e),s===0&&y_(e)}};var E_=t.version;if(E_!=="19.1.0")throw Error(a(527,E_,"19.1.0"));ot.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=g(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var u1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{oe=Uc.inject(u1),Ft=Uc}catch{}}return Rl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=Ly,d=Vy,_=Uy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=c_(e,1,!1,null,null,s,l,f,d,_,T,null),e[En]=i.current,Md(e),new Wd(i)},Rl.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=Ly,_=Vy,T=Uy,C=null,j=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(C=s.unstable_transitionCallbacks),s.formState!==void 0&&(j=s.formState)),i=c_(e,1,!0,i,s??null,l,f,d,_,T,C,j),i.context=f_(null),s=i.current,l=pn(),l=ar(l),f=mr(l),f.callback=null,pr(s,f,l),s=l,i.current.lanes=s,Ti(i,s),si(i),e[En]=i.current,Md(e),new Vc(i)},Rl.version="19.1.0",Rl}var D_;function _1(){if(D_)return tm.exports;D_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),tm.exports=v1(),tm.exports}var E1=_1();const T1="/assets/logo_lost-Cj8K_fwP.png";var Cl={},x_;function b1(){if(x_)return Cl;x_=1,Object.defineProperty(Cl,"__esModule",{value:!0}),Cl.parse=h,Cl.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,B){const P=new u,W=R.length;if(W<2)return P;const q=(B==null?void 0:B.decode)||E;let Y=0;do{const nt=R.indexOf("=",Y);if(nt===-1)break;const Z=R.indexOf(";",Y),ct=Z===-1?W:Z;if(nt>ct){Y=R.lastIndexOf(";",nt-1)+1;continue}const ut=m(R,Y,nt),At=g(R,nt,ut),x=R.slice(ut,At);if(P[x]===void 0){let w=m(R,nt+1,ct),A=g(R,ct,w);const O=q(R.slice(w,A));P[x]=O}Y=ct+1}while(Y<W);return P}function m(R,B,P){do{const W=R.charCodeAt(B);if(W!==32&&W!==9)return B}while(++B<P);return P}function g(R,B,P){for(;B>P;){const W=R.charCodeAt(--B);if(W!==32&&W!==9)return B+1}return P}function y(R,B,P){const W=(P==null?void 0:P.encode)||encodeURIComponent;if(!r.test(R))throw new TypeError(`argument name is invalid: ${R}`);const q=W(B);if(!t.test(q))throw new TypeError(`argument val is invalid: ${B}`);let Y=R+"="+q;if(!P)return Y;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);Y+="; Max-Age="+P.maxAge}if(P.domain){if(!n.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);Y+="; Domain="+P.domain}if(P.path){if(!a.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);Y+="; Path="+P.path}if(P.expires){if(!S(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);Y+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(Y+="; HttpOnly"),P.secure&&(Y+="; Secure"),P.partitioned&&(Y+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return Y}function E(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function S(R){return o.call(R)==="[object Date]"}return Cl}b1();/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var N_="popstate";function A1(r={}){function t(a,o){let{pathname:u,search:h,hash:m}=a.location;return wm("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:Hl(o)}return w1(t,n,null,r)}function ae(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function pi(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S1(){return Math.random().toString(36).substring(2,10)}function M_(r,t){return{usr:r.state,key:r.key,idx:t}}function wm(r,t,n=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?uo(t):t,state:n,key:t&&t.key||a||S1()}}function Hl({pathname:r="/",search:t="",hash:n=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function uo(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(t.search=r.substring(a),r=r.substring(0,a)),r&&(t.pathname=r)}return t}function w1(r,t,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,h=o.history,m="POP",g=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function S(){m="POP";let q=E(),Y=q==null?null:q-y;y=q,g&&g({action:m,location:W.location,delta:Y})}function R(q,Y){m="PUSH";let nt=wm(W.location,q,Y);y=E()+1;let Z=M_(nt,y),ct=W.createHref(nt);try{h.pushState(Z,"",ct)}catch(ut){if(ut instanceof DOMException&&ut.name==="DataCloneError")throw ut;o.location.assign(ct)}u&&g&&g({action:m,location:W.location,delta:1})}function B(q,Y){m="REPLACE";let nt=wm(W.location,q,Y);y=E();let Z=M_(nt,y),ct=W.createHref(nt);h.replaceState(Z,"",ct),u&&g&&g({action:m,location:W.location,delta:0})}function P(q){let Y=o.location.origin!=="null"?o.location.origin:o.location.href,nt=typeof q=="string"?q:Hl(q);return nt=nt.replace(/ $/,"%20"),ae(Y,`No window.location.(origin|href) available to create URL for href: ${nt}`),new URL(nt,Y)}let W={get action(){return m},get location(){return r(o,h)},listen(q){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(N_,S),g=q,()=>{o.removeEventListener(N_,S),g=null}},createHref(q){return t(o,q)},createURL:P,encodeLocation(q){let Y=P(q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:R,replace:B,go(q){return h.go(q)}};return W}function LE(r,t,n="/"){return R1(r,t,n,!1)}function R1(r,t,n,a){let o=typeof t=="string"?uo(t):t,u=$i(o.pathname||"/",n);if(u==null)return null;let h=VE(r);C1(h);let m=null;for(let g=0;m==null&&g<h.length;++g){let y=U1(u);m=L1(h[g],y,a)}return m}function VE(r,t=[],n=[],a=""){let o=(u,h,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};g.relativePath.startsWith("/")&&(ae(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length));let y=Qi([a,g.relativePath]),E=n.concat(g);u.children&&u.children.length>0&&(ae(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),VE(u.children,t,E,y)),!(u.path==null&&!u.index)&&t.push({path:y,score:P1(y,u.index),routesMeta:E})};return r.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,h);else for(let g of UE(u.path))o(u,h,g)}),t}function UE(r){let t=r.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let h=UE(a.join("/")),m=[];return m.push(...h.map(g=>g===""?u:[u,g].join("/"))),o&&m.push(...h),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function C1(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:k1(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var I1=/^:[\w-]+$/,O1=3,D1=2,x1=1,N1=10,M1=-2,P_=r=>r==="*";function P1(r,t){let n=r.split("/"),a=n.length;return n.some(P_)&&(a+=M1),t&&(a+=D1),n.filter(o=>!P_(o)).reduce((o,u)=>o+(I1.test(u)?O1:u===""?x1:N1),a)}function k1(r,t){return r.length===t.length&&r.slice(0,-1).every((a,o)=>a===t[o])?r[r.length-1]-t[t.length-1]:0}function L1(r,t,n=!1){let{routesMeta:a}=r,o={},u="/",h=[];for(let m=0;m<a.length;++m){let g=a[m],y=m===a.length-1,E=u==="/"?t:t.slice(u.length)||"/",S=of({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},E),R=g.route;if(!S&&y&&n&&!a[a.length-1].route.index&&(S=of({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Qi([u,S.pathname]),pathnameBase:H1(Qi([u,S.pathnameBase])),route:R}),S.pathnameBase!=="/"&&(u=Qi([u,S.pathnameBase]))}return h}function of(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=V1(r.path,r.caseSensitive,r.end),o=t.match(n);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((y,{paramName:E,isOptional:S},R)=>{if(E==="*"){let P=m[R]||"";h=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const B=m[R];return S&&!B?y[E]=void 0:y[E]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:r}}function V1(r,t=!1,n=!0){pi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,g)=>(a.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function U1(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return pi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function $i(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}function z1(r,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?uo(r):r;return{pathname:n?n.startsWith("/")?n:j1(n,t):t,search:F1(a),hash:q1(o)}}function j1(r,t){let n=t.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function rm(r,t,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function B1(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zE(r){let t=B1(r);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function jE(r,t,n,a=!1){let o;typeof r=="string"?o=uo(r):(o={...r},ae(!o.pathname||!o.pathname.includes("?"),rm("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),rm("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),rm("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=n;else{let S=t.length-1;if(!a&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),S-=1;o.pathname=R.join("/")}m=S>=0?t[S]:"/"}let g=z1(o,m),y=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(y||E)&&(g.pathname+="/"),g}var Qi=r=>r.join("/").replace(/\/\/+/g,"/"),H1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),F1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,q1=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function G1(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var BE=["POST","PUT","PATCH","DELETE"];new Set(BE);var Y1=["GET",...BE];new Set(Y1);var co=K.createContext(null);co.displayName="DataRouter";var Nf=K.createContext(null);Nf.displayName="DataRouterState";var HE=K.createContext({isTransitioning:!1});HE.displayName="ViewTransition";var K1=K.createContext(new Map);K1.displayName="Fetchers";var Q1=K.createContext(null);Q1.displayName="Await";var vi=K.createContext(null);vi.displayName="Navigation";var Jl=K.createContext(null);Jl.displayName="Location";var er=K.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var mp=K.createContext(null);mp.displayName="RouteError";function X1(r,{relative:t}={}){ae(tu(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=K.useContext(vi),{hash:o,pathname:u,search:h}=eu(r,{relative:t}),m=u;return n!=="/"&&(m=u==="/"?n:Qi([n,u])),a.createHref({pathname:m,search:h,hash:o})}function tu(){return K.useContext(Jl)!=null}function $a(){return ae(tu(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(Jl).location}var FE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qE(r){K.useContext(vi).static||K.useLayoutEffect(r)}function GE(){let{isDataRoute:r}=K.useContext(er);return r?lw():$1()}function $1(){ae(tu(),"useNavigate() may be used only in the context of a <Router> component.");let r=K.useContext(co),{basename:t,navigator:n}=K.useContext(vi),{matches:a}=K.useContext(er),{pathname:o}=$a(),u=JSON.stringify(zE(a)),h=K.useRef(!1);return qE(()=>{h.current=!0}),K.useCallback((g,y={})=>{if(pi(h.current,FE),!h.current)return;if(typeof g=="number"){n.go(g);return}let E=jE(g,JSON.parse(u),o,y.relative==="path");r==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:Qi([t,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[t,n,u,o,r])}K.createContext(null);function eu(r,{relative:t}={}){let{matches:n}=K.useContext(er),{pathname:a}=$a(),o=JSON.stringify(zE(n));return K.useMemo(()=>jE(r,JSON.parse(o),a,t==="path"),[r,o,a,t])}function W1(r,t){return YE(r,t)}function YE(r,t,n,a){var nt;ae(tu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=K.useContext(vi),{matches:h}=K.useContext(er),m=h[h.length-1],g=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",S=m&&m.route;{let Z=S&&S.path||"";KE(y,!S||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let R=$a(),B;if(t){let Z=typeof t=="string"?uo(t):t;ae(E==="/"||((nt=Z.pathname)==null?void 0:nt.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),B=Z}else B=R;let P=B.pathname||"/",W=P;if(E!=="/"){let Z=E.replace(/^\//,"").split("/");W="/"+P.replace(/^\//,"").split("/").slice(Z.length).join("/")}let q=!u&&n&&n.matches&&n.matches.length>0?n.matches:LE(r,{pathname:W});pi(S||q!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),pi(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=nw(q&&q.map(Z=>Object.assign({},Z,{params:Object.assign({},g,Z.params),pathname:Qi([E,o.encodeLocation?o.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?E:Qi([E,o.encodeLocation?o.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),h,n,a);return t&&Y?K.createElement(Jl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...B},navigationType:"POP"}},Y):Y}function Z1(){let r=ow(),t=G1(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:u},"ErrorBoundary")," or"," ",K.createElement("code",{style:u},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),n?K.createElement("pre",{style:o},n):null,h)}var J1=K.createElement(Z1,null),tw=class extends K.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){console.error("React Router caught the following error during render",r,t)}render(){return this.state.error!==void 0?K.createElement(er.Provider,{value:this.props.routeContext},K.createElement(mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ew({routeContext:r,match:t,children:n}){let a=K.useContext(co);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),K.createElement(er.Provider,{value:r},n)}function nw(r,t=[],n=null,a=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n==null?void 0:n.errors;if(u!=null){let g=o.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);ae(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,m=-1;if(n)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=g),y.route.id){let{loaderData:E,errors:S}=n,R=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||R){h=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((g,y,E)=>{let S,R=!1,B=null,P=null;n&&(S=u&&y.route.id?u[y.route.id]:void 0,B=y.route.errorElement||J1,h&&(m<0&&E===0?(KE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,P=null):m===E&&(R=!0,P=y.route.hydrateFallbackElement||null)));let W=t.concat(o.slice(0,E+1)),q=()=>{let Y;return S?Y=B:R?Y=P:y.route.Component?Y=K.createElement(y.route.Component,null):y.route.element?Y=y.route.element:Y=g,K.createElement(ew,{match:y,routeContext:{outlet:g,matches:W,isDataRoute:n!=null},children:Y})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?K.createElement(tw,{location:n.location,revalidation:n.revalidation,component:B,error:S,children:q(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):q()},null)}function pp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iw(r){let t=K.useContext(co);return ae(t,pp(r)),t}function rw(r){let t=K.useContext(Nf);return ae(t,pp(r)),t}function aw(r){let t=K.useContext(er);return ae(t,pp(r)),t}function gp(r){let t=aw(r),n=t.matches[t.matches.length-1];return ae(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function sw(){return gp("useRouteId")}function ow(){var a;let r=K.useContext(mp),t=rw("useRouteError"),n=gp("useRouteError");return r!==void 0?r:(a=t.errors)==null?void 0:a[n]}function lw(){let{router:r}=iw("useNavigate"),t=gp("useNavigate"),n=K.useRef(!1);return qE(()=>{n.current=!0}),K.useCallback(async(o,u={})=>{pi(n.current,FE),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:t,...u}))},[r,t])}var k_={};function KE(r,t,n){!t&&!k_[r]&&(k_[r]=!0,pi(!1,n))}K.memo(uw);function uw({routes:r,future:t,state:n}){return YE(r,void 0,n,t)}function Dl(r){ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cw({basename:r="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:u=!1}){ae(!tu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=K.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof n=="string"&&(n=uo(n));let{pathname:g="/",search:y="",hash:E="",state:S=null,key:R="default"}=n,B=K.useMemo(()=>{let P=$i(g,h);return P==null?null:{location:{pathname:P,search:y,hash:E,state:S,key:R},navigationType:a}},[h,g,y,E,S,R,a]);return pi(B!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:K.createElement(vi.Provider,{value:m},K.createElement(Jl.Provider,{children:t,value:B}))}function fw({children:r,location:t}){return W1(Rm(r),t)}function Rm(r,t=[]){let n=[];return K.Children.forEach(r,(a,o)=>{if(!K.isValidElement(a))return;let u=[...t,o];if(a.type===K.Fragment){n.push.apply(n,Rm(a.props.children,u));return}ae(a.type===Dl,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ae(!a.props.index||!a.props.children,"An index route cannot have child routes.");let h={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(h.children=Rm(a.props.children,u)),n.push(h)}),n}var Qc="get",Xc="application/x-www-form-urlencoded";function Mf(r){return r!=null&&typeof r.tagName=="string"}function hw(r){return Mf(r)&&r.tagName.toLowerCase()==="button"}function dw(r){return Mf(r)&&r.tagName.toLowerCase()==="form"}function mw(r){return Mf(r)&&r.tagName.toLowerCase()==="input"}function pw(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function gw(r,t){return r.button===0&&(!t||t==="_self")&&!pw(r)}var zc=null;function yw(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var vw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function am(r){return r!=null&&!vw.has(r)?(pi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xc}"`),null):r}function _w(r,t){let n,a,o,u,h;if(dw(r)){let m=r.getAttribute("action");a=m?$i(m,t):null,n=r.getAttribute("method")||Qc,o=am(r.getAttribute("enctype"))||Xc,u=new FormData(r)}else if(hw(r)||mw(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(a=g?$i(g,t):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||Qc,o=am(r.getAttribute("formenctype"))||am(m.getAttribute("enctype"))||Xc,u=new FormData(m,r),!yw()){let{name:y,type:E,value:S}=r;if(E==="image"){let R=y?`${y}.`:"";u.append(`${R}x`,"0"),u.append(`${R}y`,"0")}else y&&u.append(y,S)}}else{if(Mf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Qc,a=null,o=Xc,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:h}}function yp(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}async function Ew(r,t){if(r.id in t)return t[r.id];try{let n=await import(r.module);return t[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Tw(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function bw(r,t,n){let a=await Promise.all(r.map(async o=>{let u=t.routes[o.route.id];if(u){let h=await Ew(u,n);return h.links?h.links():[]}return[]}));return Rw(a.flat(1).filter(Tw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function L_(r,t,n,a,o,u){let h=(g,y)=>n[y]?g.route.id!==n[y].route.id:!0,m=(g,y)=>{var E;return n[y].pathname!==g.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==g.params["*"]};return u==="assets"?t.filter((g,y)=>h(g,y)||m(g,y)):u==="data"?t.filter((g,y)=>{var S;let E=a.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(h(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let R=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=n[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Aw(r,t,{includeHydrateFallback:n}={}){return Sw(r.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Sw(r){return[...new Set(r)]}function ww(r){let t={},n=Object.keys(r).sort();for(let a of n)t[a]=r[a];return t}function Rw(r,t){let n=new Set;return new Set(t),r.reduce((a,o)=>{let u=JSON.stringify(ww(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function Cw(r,t){let n=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n.pathname==="/"?n.pathname="_root.data":t&&$i(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function QE(){let r=K.useContext(co);return yp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Iw(){let r=K.useContext(Nf);return yp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var vp=K.createContext(void 0);vp.displayName="FrameworkContext";function XE(){let r=K.useContext(vp);return yp(r,"You must render this element inside a <HydratedRouter> element"),r}function Ow(r,t){let n=K.useContext(vp),[a,o]=K.useState(!1),[u,h]=K.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:E,onTouchStart:S}=t,R=K.useRef(null);K.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let W=Y=>{Y.forEach(nt=>{h(nt.isIntersecting)})},q=new IntersectionObserver(W,{threshold:.5});return R.current&&q.observe(R.current),()=>{q.disconnect()}}},[r]),K.useEffect(()=>{if(a){let W=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(W)}}},[a]);let B=()=>{o(!0)},P=()=>{o(!1),h(!1)};return n?r!=="intent"?[u,R,{}]:[u,R,{onFocus:Il(m,B),onBlur:Il(g,P),onMouseEnter:Il(y,B),onMouseLeave:Il(E,P),onTouchStart:Il(S,B)}]:[!1,R,{}]}function Il(r,t){return n=>{r&&r(n),n.defaultPrevented||t(n)}}function Dw({page:r,...t}){let{router:n}=QE(),a=K.useMemo(()=>LE(n.routes,r,n.basename),[n.routes,r,n.basename]);return a?K.createElement(Nw,{page:r,matches:a,...t}):null}function xw(r){let{manifest:t,routeModules:n}=XE(),[a,o]=K.useState([]);return K.useEffect(()=>{let u=!1;return bw(r,t,n).then(h=>{u||o(h)}),()=>{u=!0}},[r,t,n]),a}function Nw({page:r,matches:t,...n}){let a=$a(),{manifest:o,routeModules:u}=XE(),{basename:h}=QE(),{loaderData:m,matches:g}=Iw(),y=K.useMemo(()=>L_(r,t,g,o,a,"data"),[r,t,g,o,a]),E=K.useMemo(()=>L_(r,t,g,o,a,"assets"),[r,t,g,o,a]),S=K.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let P=new Set,W=!1;if(t.forEach(Y=>{var Z;let nt=o.routes[Y.route.id];!nt||!nt.hasLoader||(!y.some(ct=>ct.route.id===Y.route.id)&&Y.route.id in m&&((Z=u[Y.route.id])!=null&&Z.shouldRevalidate)||nt.hasClientLoader?W=!0:P.add(Y.route.id))}),P.size===0)return[];let q=Cw(r,h);return W&&P.size>0&&q.searchParams.set("_routes",t.filter(Y=>P.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[q.pathname+q.search]},[h,m,a,o,y,t,r,u]),R=K.useMemo(()=>Aw(E,o),[E,o]),B=xw(E);return K.createElement(K.Fragment,null,S.map(P=>K.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),R.map(P=>K.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),B.map(({key:P,link:W})=>K.createElement("link",{key:P,...W})))}function Mw(...r){return t=>{r.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var $E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$E&&(window.__reactRouterVersion="7.4.1")}catch{}function Pw({basename:r,children:t,window:n}){let a=K.useRef();a.current==null&&(a.current=A1({window:n,v5Compat:!0}));let o=a.current,[u,h]=K.useState({action:o.action,location:o.location}),m=K.useCallback(g=>{K.startTransition(()=>h(g))},[h]);return K.useLayoutEffect(()=>o.listen(m),[o,m]),K.createElement(cw,{basename:r,children:t,location:u.location,navigationType:u.action,navigator:o})}var WE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jn=K.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:h,state:m,target:g,to:y,preventScrollReset:E,viewTransition:S,...R},B){let{basename:P}=K.useContext(vi),W=typeof y=="string"&&WE.test(y),q,Y=!1;if(typeof y=="string"&&W&&(q=y,$E))try{let A=new URL(window.location.href),O=y.startsWith("//")?new URL(A.protocol+y):new URL(y),M=$i(O.pathname,P);O.origin===A.origin&&M!=null?y=M+O.search+O.hash:Y=!0}catch{pi(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let nt=X1(y,{relative:o}),[Z,ct,ut]=Ow(a,R),At=Uw(y,{replace:h,state:m,target:g,preventScrollReset:E,relative:o,viewTransition:S});function x(A){t&&t(A),A.defaultPrevented||At(A)}let w=K.createElement("a",{...R,...ut,href:q||nt,onClick:Y||u?t:x,ref:Mw(B,ct),target:g,"data-discover":!W&&n==="render"?"true":void 0});return Z&&!W?K.createElement(K.Fragment,null,w,K.createElement(Dw,{page:nt})):w});jn.displayName="Link";var kw=K.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:h,viewTransition:m,children:g,...y},E){let S=eu(h,{relative:y.relative}),R=$a(),B=K.useContext(Nf),{navigator:P,basename:W}=K.useContext(vi),q=B!=null&&Fw(S)&&m===!0,Y=P.encodeLocation?P.encodeLocation(S).pathname:S.pathname,nt=R.pathname,Z=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;n||(nt=nt.toLowerCase(),Z=Z?Z.toLowerCase():null,Y=Y.toLowerCase()),Z&&W&&(Z=$i(Z,W)||Z);const ct=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ut=nt===Y||!o&&nt.startsWith(Y)&&nt.charAt(ct)==="/",At=Z!=null&&(Z===Y||!o&&Z.startsWith(Y)&&Z.charAt(Y.length)==="/"),x={isActive:ut,isPending:At,isTransitioning:q},w=ut?t:void 0,A;typeof a=="function"?A=a(x):A=[a,ut?"active":null,At?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(x):u;return K.createElement(jn,{...y,"aria-current":w,className:A,ref:E,style:O,to:h,viewTransition:m},typeof g=="function"?g(x):g)});kw.displayName="NavLink";var Lw=K.forwardRef(({discover:r="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:u,method:h=Qc,action:m,onSubmit:g,relative:y,preventScrollReset:E,viewTransition:S,...R},B)=>{let P=Bw(),W=Hw(m,{relative:y}),q=h.toLowerCase()==="get"?"get":"post",Y=typeof m=="string"&&WE.test(m),nt=Z=>{if(g&&g(Z),Z.defaultPrevented)return;Z.preventDefault();let ct=Z.nativeEvent.submitter,ut=(ct==null?void 0:ct.getAttribute("formmethod"))||h;P(ct||Z.currentTarget,{fetcherKey:t,method:ut,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:S})};return K.createElement("form",{ref:B,method:q,action:W,onSubmit:a?g:nt,...R,"data-discover":!Y&&r==="render"?"true":void 0})});Lw.displayName="Form";function Vw(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZE(r){let t=K.useContext(co);return ae(t,Vw(r)),t}function Uw(r,{target:t,replace:n,state:a,preventScrollReset:o,relative:u,viewTransition:h}={}){let m=GE(),g=$a(),y=eu(r,{relative:u});return K.useCallback(E=>{if(gw(E,t)){E.preventDefault();let S=n!==void 0?n:Hl(g)===Hl(y);m(r,{replace:S,state:a,preventScrollReset:o,relative:u,viewTransition:h})}},[g,m,y,n,a,t,r,o,u,h])}var zw=0,jw=()=>`__${String(++zw)}__`;function Bw(){let{router:r}=ZE("useSubmit"),{basename:t}=K.useContext(vi),n=sw();return K.useCallback(async(a,o={})=>{let{action:u,method:h,encType:m,formData:g,body:y}=_w(a,t);if(o.navigate===!1){let E=o.fetcherKey||jw();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,t,n])}function Hw(r,{relative:t}={}){let{basename:n}=K.useContext(vi),a=K.useContext(er);ae(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...eu(r||".",{relative:t})},h=$a();if(r==null){u.search=h.search;let m=new URLSearchParams(u.search),g=m.getAll("index");if(g.some(E=>E==="")){m.delete("index"),g.filter(S=>S).forEach(S=>m.append("index",S));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Qi([n,u.pathname])),Hl(u)}function Fw(r,t={}){let n=K.useContext(HE);ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ZE("useViewTransitionState"),o=eu(r,{relative:t.relative});if(!n.isTransitioning)return!1;let u=$i(n.currentLocation.pathname,a)||n.currentLocation.pathname,h=$i(n.nextLocation.pathname,a)||n.nextLocation.pathname;return of(o.pathname,h)!=null||of(o.pathname,u)!=null}new TextEncoder;const qw=()=>{};var V_={};/**
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
 */const JE=function(r){const t=[];let n=0;for(let a=0;a<r.length;a++){let o=r.charCodeAt(a);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++a)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Gw=function(r){const t=[];let n=0,a=0;for(;n<r.length;){const o=r[n++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],h=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(g>>10)),t[a++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],h=r[n++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return t.join("")},tT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,m=h?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let R=(m&15)<<2|y>>6,B=y&63;g||(B=64,h||(R=64)),a.push(n[E],n[S],n[R],n[B])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(JE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Gw(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new Yw;const R=u<<2|m>>4;if(a.push(R),y!==64){const B=m<<4&240|y>>2;if(a.push(B),S!==64){const P=y<<6&192|S;a.push(P)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kw=function(r){const t=JE(r);return tT.encodeByteArray(t,!0)},lf=function(r){return Kw(r).replace(/\./g,"")},eT=function(r){try{return tT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Xw=()=>Qw().__FIREBASE_DEFAULTS__,$w=()=>{if(typeof process>"u"||typeof V_>"u")return;const r=V_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ww=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&eT(r[1]);return t&&JSON.parse(t)},Pf=()=>{try{return qw()||Xw()||$w()||Ww()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},nT=r=>{var t,n;return(n=(t=Pf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},Zw=r=>{const t=nT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),a]:[t.substring(0,n),a]},iT=()=>{var r;return(r=Pf())===null||r===void 0?void 0:r.config},rT=r=>{var t;return(t=Pf())===null||t===void 0?void 0:t[`_${r}`]};/**
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
 */function tR(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[lf(JSON.stringify(n)),lf(JSON.stringify(h)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function nR(){var r;const t=(r=Pf())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rR(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function aR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sR(){const r=$e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function oR(){return!nR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lR(){try{return typeof indexedDB=="object"}catch{return!1}}function uR(){return new Promise((r,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(a),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
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
 */const cR="FirebaseError";class nr extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=cR,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nu.prototype.create)}}class nu{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],h=u?fR(u,a):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new nr(o,m,a)}}function fR(r,t){return r.replace(hR,(n,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const hR=/\{\$([^}]+)}/g;function dR(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function ja(r,t){if(r===t)return!0;const n=Object.keys(r),a=Object.keys(t);for(const o of n){if(!a.includes(o))return!1;const u=r[o],h=t[o];if(U_(u)&&U_(h)){if(!ja(u,h))return!1}else if(u!==h)return!1}for(const o of a)if(!n.includes(o))return!1;return!0}function U_(r){return r!==null&&typeof r=="object"}/**
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
 */function iu(r){const t=[];for(const[n,a]of Object.entries(r))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function xl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,u]=a.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Nl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function mR(r,t){const n=new pR(r,t);return n.subscribe.bind(n)}class pR{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,a){let o;if(t===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");gR(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:a},o.next===void 0&&(o.next=sm),o.error===void 0&&(o.error=sm),o.complete===void 0&&(o.complete=sm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gR(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function sm(){}/**
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
 */function yn(r){return r&&r._delegate?r._delegate:r}class Ba{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const TR={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},bR=Mt.INFO,AR={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},SR=(r,t,...n)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),o=AR[t];if(o)console[o](`[${a}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _p{constructor(t){this.name=t,this._logLevel=bR,this._logHandler=SR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?TR[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const wR=(r,t)=>t.some(n=>r instanceof n);let z_,j_;function RR(){return z_||(z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CR(){return j_||(j_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aT=new WeakMap,Cm=new WeakMap,sT=new WeakMap,om=new WeakMap,Ep=new WeakMap;function IR(r){const t=new Promise((n,a)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{n(zr(r.result)),o()},h=()=>{a(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return t.then(n=>{n instanceof IDBCursor&&aT.set(n,r)}).catch(()=>{}),Ep.set(t,r),t}function OR(r){if(Cm.has(r))return;const t=new Promise((n,a)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{n(),o()},h=()=>{a(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Cm.set(r,t)}let Im={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Cm.get(r);if(t==="objectStoreNames")return r.objectStoreNames||sT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function DR(r){Im=r(Im)}function xR(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=r.call(lm(this),t,...n);return sT.set(a,t.sort?t.sort():[t]),zr(a)}:CR().includes(r)?function(...t){return r.apply(lm(this),t),zr(aT.get(this))}:function(...t){return zr(r.apply(lm(this),t))}}function NR(r){return typeof r=="function"?xR(r):(r instanceof IDBTransaction&&OR(r),wR(r,RR())?new Proxy(r,Im):r)}function zr(r){if(r instanceof IDBRequest)return IR(r);if(om.has(r))return om.get(r);const t=NR(r);return t!==r&&(om.set(r,t),Ep.set(t,r)),t}const lm=r=>Ep.get(r);function MR(r,t,{blocked:n,upgrade:a,blocking:o,terminated:u}={}){const h=indexedDB.open(r,t),m=zr(h);return a&&h.addEventListener("upgradeneeded",g=>{a(zr(h.result),g.oldVersion,g.newVersion,zr(h.transaction),g)}),n&&h.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const PR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],um=new Map;function B_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(um.get(t))return um.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,o=kR.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(o||PR.includes(n)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return a&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return um.set(t,u),u}DR(r=>({...r,get:(t,n,a)=>B_(t,n)||r.get(t,n,a),has:(t,n)=>!!B_(t,n)||r.has(t,n)}));/**
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
 */class LR{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VR(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function VR(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Om="@firebase/app",H_="0.11.3";/**
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
 */const Wi=new _p("@firebase/app"),UR="@firebase/app-compat",zR="@firebase/analytics-compat",jR="@firebase/analytics",BR="@firebase/app-check-compat",HR="@firebase/app-check",FR="@firebase/auth",qR="@firebase/auth-compat",GR="@firebase/database",YR="@firebase/data-connect",KR="@firebase/database-compat",QR="@firebase/functions",XR="@firebase/functions-compat",$R="@firebase/installations",WR="@firebase/installations-compat",ZR="@firebase/messaging",JR="@firebase/messaging-compat",t2="@firebase/performance",e2="@firebase/performance-compat",n2="@firebase/remote-config",i2="@firebase/remote-config-compat",r2="@firebase/storage",a2="@firebase/storage-compat",s2="@firebase/firestore",o2="@firebase/vertexai",l2="@firebase/firestore-compat",u2="firebase",c2="11.5.0";/**
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
 */const Dm="[DEFAULT]",f2={[Om]:"fire-core",[UR]:"fire-core-compat",[jR]:"fire-analytics",[zR]:"fire-analytics-compat",[HR]:"fire-app-check",[BR]:"fire-app-check-compat",[FR]:"fire-auth",[qR]:"fire-auth-compat",[GR]:"fire-rtdb",[YR]:"fire-data-connect",[KR]:"fire-rtdb-compat",[QR]:"fire-fn",[XR]:"fire-fn-compat",[$R]:"fire-iid",[WR]:"fire-iid-compat",[ZR]:"fire-fcm",[JR]:"fire-fcm-compat",[t2]:"fire-perf",[e2]:"fire-perf-compat",[n2]:"fire-rc",[i2]:"fire-rc-compat",[r2]:"fire-gcs",[a2]:"fire-gcs-compat",[s2]:"fire-fst",[l2]:"fire-fst-compat",[o2]:"fire-vertex","fire-js":"fire-js",[u2]:"fire-js-all"};/**
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
 */const uf=new Map,h2=new Map,xm=new Map;function F_(r,t){try{r.container.addComponent(t)}catch(n){Wi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function no(r){const t=r.name;if(xm.has(t))return Wi.debug(`There were multiple attempts to register component ${t}.`),!1;xm.set(t,r);for(const n of uf.values())F_(n,r);for(const n of h2.values())F_(n,r);return!0}function Tp(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Nn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const d2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new nu("app","Firebase",d2);/**
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
 */class m2{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ba("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
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
 */const fo=c2;function oT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Dm,automaticDataCollectionEnabled:!1},t),o=a.name;if(typeof o!="string"||!o)throw jr.create("bad-app-name",{appName:String(o)});if(n||(n=iT()),!n)throw jr.create("no-options");const u=uf.get(o);if(u){if(ja(n,u.options)&&ja(a,u.config))return u;throw jr.create("duplicate-app",{appName:o})}const h=new ER(o);for(const g of xm.values())h.addComponent(g);const m=new m2(n,a,h);return uf.set(o,m),m}function lT(r=Dm){const t=uf.get(r);if(!t&&r===Dm&&iT())return oT();if(!t)throw jr.create("no-app",{appName:r});return t}function Br(r,t,n){var a;let o=(a=f2[r])!==null&&a!==void 0?a:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),h=t.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wi.warn(m.join(" "));return}no(new Ba(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const p2="firebase-heartbeat-database",g2=1,Fl="firebase-heartbeat-store";let cm=null;function uT(){return cm||(cm=MR(p2,g2,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Fl)}catch(n){console.warn(n)}}}}).catch(r=>{throw jr.create("idb-open",{originalErrorMessage:r.message})})),cm}async function y2(r){try{const n=(await uT()).transaction(Fl),a=await n.objectStore(Fl).get(cT(r));return await n.done,a}catch(t){if(t instanceof nr)Wi.warn(t.message);else{const n=jr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wi.warn(n.message)}}}async function q_(r,t){try{const a=(await uT()).transaction(Fl,"readwrite");await a.objectStore(Fl).put(t,cT(r)),await a.done}catch(n){if(n instanceof nr)Wi.warn(n.message);else{const a=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wi.warn(a.message)}}}function cT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const v2=1024,_2=30;class E2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new b2(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=G_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>_2){const h=A2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Wi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=G_(),{heartbeatsToSend:a,unsentEntries:o}=T2(this._heartbeatsCache.heartbeats),u=lf(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Wi.warn(n),""}}}function G_(){return new Date().toISOString().substring(0,10)}function T2(r,t=v2){const n=[];let a=r.slice();for(const o of r){const u=n.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Y_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Y_(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class b2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lR()?uR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return q_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return q_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Y_(r){return lf(JSON.stringify({version:2,heartbeats:r})).length}function A2(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let a=1;a<r.length;a++)r[a].date<n&&(n=r[a].date,t=a);return t}/**
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
 */function S2(r){no(new Ba("platform-logger",t=>new LR(t),"PRIVATE")),no(new Ba("heartbeat",t=>new E2(t),"PRIVATE")),Br(Om,H_,r),Br(Om,H_,"esm2017"),Br("fire-js","")}S2("");var w2="firebase",R2="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Br(w2,R2,"app");function bp(r,t){var n={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(n[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(r);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(r,a[o])&&(n[a[o]]=r[a[o]]);return n}function fT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C2=fT,hT=new nu("auth","Firebase",fT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new _p("@firebase/auth");function I2(r,...t){cf.logLevel<=Mt.WARN&&cf.warn(`Auth (${fo}): ${r}`,...t)}function $c(r,...t){cf.logLevel<=Mt.ERROR&&cf.error(`Auth (${fo}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(r,...t){throw Ap(r,...t)}function fi(r,...t){return Ap(r,...t)}function dT(r,t,n){const a=Object.assign(Object.assign({},C2()),{[t]:n});return new nu("auth","Firebase",a).create(t,{appName:r.name})}function Xi(r){return dT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ap(r,...t){if(typeof r!="string"){const n=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(n,...a)}return hT.create(r,...t)}function _t(r,t,...n){if(!r)throw Ap(t,...n)}function Gi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw $c(t),new Error(t)}function Zi(r,t){r||Gi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function O2(){return K_()==="http:"||K_()==="https:"}function K_(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O2()||rR()||"connection"in navigator)?navigator.onLine:!0}function x2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zi(n>t,"Short delay should be less than long delay!"),this.isMobile=eR()||aR()}get(){return D2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(r,t){Zi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static initialize(t,n,a){this.fetchImpl=t,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const M2=new ru(3e4,6e4);function $r(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Wr(r,t,n,a,o={}){return pT(r,o,async()=>{let u={},h={};a&&(t==="GET"?h=a:u={body:JSON.stringify(a)});const m=iu(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:g},u);return iR()||(y.referrerPolicy="no-referrer"),mT.fetch()(gT(r,r.config.apiHost,n,m),y)})}async function pT(r,t,n){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},N2),t);try{const o=new k2(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw jc(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw jc(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw jc(r,"user-disabled",h);const E=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw dT(r,E,y);Fn(r,E)}}catch(o){if(o instanceof nr)throw o;Fn(r,"network-request-failed",{message:String(o)})}}async function au(r,t,n,a,o={}){const u=await Wr(r,t,n,a,o);return"mfaPendingCredential"in u&&Fn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function gT(r,t,n,a){const o=`${t}${n}?${a}`;return r.config.emulator?Sp(r.config,o):`${r.config.apiScheme}://${o}`}function P2(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(fi(this.auth,"network-request-failed")),M2.get())})}}function jc(r,t,n){const a={appName:r.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const o=fi(r,t,a);return o.customData._tokenResponse=n,o}function Q_(r){return r!==void 0&&r.enterprise!==void 0}class L2{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return P2(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V2(r,t){return Wr(r,"GET","/v2/recaptchaConfig",$r(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(r,t){return Wr(r,"POST","/v1/accounts:delete",t)}async function yT(r,t){return Wr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function z2(r,t=!1){const n=yn(r),a=await n.getIdToken(t),o=wp(a);_t(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:a,authTime:kl(fm(o.auth_time)),issuedAtTime:kl(fm(o.iat)),expirationTime:kl(fm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function fm(r){return Number(r)*1e3}function wp(r){const[t,n,a]=r.split(".");if(t===void 0||n===void 0||a===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const o=eT(n);return o?JSON.parse(o):($c("Failed to decode base64 JWT payload"),null)}catch(o){return $c("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function X_(r){const t=wp(r);return _t(t,"internal-error"),_t(typeof t.exp<"u","internal-error"),_t(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(r,t,n=!1){if(n)return t;try{return await t}catch(a){throw a instanceof nr&&j2(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function j2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ff(r){var t;const n=r.auth,a=await r.getIdToken(),o=await ql(r,yT(n,{idToken:a}));_t(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?vT(u.providerUserInfo):[],m=F2(r.providerData,h),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=g?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Mm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function H2(r){const t=yn(r);await ff(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function F2(r,t){return[...r.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function vT(r){return r.map(t=>{var{providerId:n}=t,a=bp(t,["providerId"]);return{providerId:n,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2(r,t){const n=await pT(r,{},async()=>{const a=iu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=gT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",mT.fetch()(h,{method:"POST",headers:m,body:a})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function G2(r,t){return Wr(r,"POST","/v2/accounts:revokeToken",$r(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_t(t.idToken,"internal-error"),_t(typeof t.idToken<"u","internal-error"),_t(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):X_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){_t(t.length!==0,"internal-error");const n=X_(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_t(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:a,refreshToken:o,expiresIn:u}=await q2(t,n);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(t,n,a){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,n){const{refreshToken:a,accessToken:o,expirationTime:u}=n,h=new Ws;return a&&(_t(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(_t(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),u&&(_t(typeof u=="number","internal-error",{appName:t}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(r,t){_t(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Yi{constructor(t){var{uid:n,auth:a,stsTokenManager:o}=t,u=bp(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Mm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await ql(this,this.stsTokenManager.getToken(this.auth,t));return _t(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return z2(this,t)}reload(){return H2(this)}_assign(t){this!==t&&(_t(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Yi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){_t(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),n&&await ff(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(Xi(this.auth));const t=await this.getIdToken();return await ql(this,U2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var a,o,u,h,m,g,y,E;const S=(a=n.displayName)!==null&&a!==void 0?a:void 0,R=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,P=(h=n.photoURL)!==null&&h!==void 0?h:void 0,W=(m=n.tenantId)!==null&&m!==void 0?m:void 0,q=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,Y=(y=n.createdAt)!==null&&y!==void 0?y:void 0,nt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Z,emailVerified:ct,isAnonymous:ut,providerData:At,stsTokenManager:x}=n;_t(Z&&x,t,"internal-error");const w=Ws.fromJSON(this.name,x);_t(typeof Z=="string",t,"internal-error"),Mr(S,t.name),Mr(R,t.name),_t(typeof ct=="boolean",t,"internal-error"),_t(typeof ut=="boolean",t,"internal-error"),Mr(B,t.name),Mr(P,t.name),Mr(W,t.name),Mr(q,t.name),Mr(Y,t.name),Mr(nt,t.name);const A=new Yi({uid:Z,auth:t,email:R,emailVerified:ct,displayName:S,isAnonymous:ut,photoURL:P,phoneNumber:B,tenantId:W,stsTokenManager:w,createdAt:Y,lastLoginAt:nt});return At&&Array.isArray(At)&&(A.providerData=At.map(O=>Object.assign({},O))),q&&(A._redirectEventId=q),A}static async _fromIdTokenResponse(t,n,a=!1){const o=new Ws;o.updateFromServerResponse(n);const u=new Yi({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await ff(u),u}static async _fromGetAccountInfoResponse(t,n,a){const o=n.users[0];_t(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?vT(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ws;m.updateFromIdToken(a);const g=new Yi({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Mm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Map;function Ki(r){Zi(r instanceof Function,"Expected a class definition");let t=$_.get(r);return t?(Zi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,$_.set(r,t),t)}/**
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
 */class _T{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_T.type="NONE";const W_=_T;/**
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
 */function Wc(r,t,n){return`firebase:${r}:${t}:${n}`}class Zs{constructor(t,n,a){this.persistence=t,this.auth=n,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=Wc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Wc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Yi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,a="authUser"){if(!n.length)return new Zs(Ki(W_),t,a);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ki(W_);const h=Wc(a,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(h);if(E){const S=Yi._fromJSON(t,E);y!==u&&(m=S),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Zs(u,t,a):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new Zs(u,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(AT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ET(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wT(t))return"Blackberry";if(RT(t))return"Webos";if(TT(t))return"Safari";if((t.includes("chrome/")||bT(t))&&!t.includes("edge/"))return"Chrome";if(ST(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(n);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function ET(r=$e()){return/firefox\//i.test(r)}function TT(r=$e()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bT(r=$e()){return/crios\//i.test(r)}function AT(r=$e()){return/iemobile/i.test(r)}function ST(r=$e()){return/android/i.test(r)}function wT(r=$e()){return/blackberry/i.test(r)}function RT(r=$e()){return/webos/i.test(r)}function Rp(r=$e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Y2(r=$e()){var t;return Rp(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function K2(){return sR()&&document.documentMode===10}function CT(r=$e()){return Rp(r)||ST(r)||RT(r)||wT(r)||/windows phone/i.test(r)||AT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(r,t=[]){let n;switch(r){case"Browser":n=Z_($e());break;case"Worker":n=`${Z_($e())}-${r}`;break;default:n=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${fo}/${a}`}/**
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
 */class Z2{constructor(t,n,a,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new J_(this),this.idTokenSubscription=new J_(this),this.beforeStateQueue=new Q2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var a,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await yT(this,{idToken:t}),a=await Yi._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Nn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _t(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ff(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(Xi(this));const n=t?yn(t):null;return n&&_t(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&_t(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(Xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(Xi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await X2(this),n=new W2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new nu("auth","Firebase",t())}onAuthStateChanged(t,n,a){return this.registerStateListener(this.authStateSubscription,t,n,a)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,a){return this.registerStateListener(this.idTokenSubscription,t,n,a)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await G2(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const a=await this.getOrInitRedirectPersistenceManager(n);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ki(t)||this._popupRedirectResolver;_t(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,a;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,a,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_t(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,a,o);return()=>{h=!0,g()}}else{const g=t.addObserver(n);return()=>{h=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _t(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=IT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(n["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&I2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wa(r){return yn(r)}class J_{constructor(t){this.auth=t,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return _t(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J2(r){kf=r}function OT(r){return kf.loadJS(r)}function tC(){return kf.recaptchaEnterpriseScript}function eC(){return kf.gapiScript}function nC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class iC{constructor(){this.enterprise=new rC}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class rC{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const aC="recaptcha-enterprise",DT="NO_RECAPTCHA";class sC{constructor(t){this.type=aC,this.auth=Wa(t)}async verify(t="verify",n=!1){async function a(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{V2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new L2(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,h(y.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Q_(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(y=>{h(y)}).catch(()=>{h(DT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iC().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{a(this.auth).then(m=>{if(!n&&Q_(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=tC();g.length!==0&&(g+=m),OT(g).then(()=>{o(m,u,h)}).catch(y=>{h(y)})}}).catch(m=>{h(m)})})}}async function t0(r,t,n,a=!1,o=!1){const u=new sC(r);let h;if(o)h=DT;else try{h=await u.verify(n)}catch{h=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return a?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Pm(r,t,n,a,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await t0(r,t,n,n==="getOobCode");return a(r,h)}else return a(r,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await t0(r,t,n,n==="getOobCode");return a(r,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(r,t){const n=Tp(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ja(u,t??{}))return o;Fn(o,"already-initialized")}return n.initialize({options:t})}function lC(r,t){const n=(t==null?void 0:t.persistence)||[],a=(Array.isArray(n)?n:[n]).map(Ki);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function uC(r,t,n){const a=Wa(r);_t(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,u=xT(t),{host:h,port:m}=cC(t),g=m===null?"":`:${m}`,y={url:`${u}//${h}${g}/`},E=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){_t(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),_t(ja(y,a.config.emulator)&&ja(E,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=y,a.emulatorConfig=E,a.settings.appVerificationDisabledForTesting=!0,fC()}function xT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function cC(r){const t=xT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:e0(a.substr(u.length+1))}}else{const[u,h]=a.split(":");return{host:u,port:e0(h)}}}function e0(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function fC(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gi("not implemented")}_getIdTokenResponse(t){return Gi("not implemented")}_linkToIdToken(t,n){return Gi("not implemented")}_getReauthenticationResolver(t){return Gi("not implemented")}}async function hC(r,t){return Wr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(r,t){return au(r,"POST","/v1/accounts:signInWithPassword",$r(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(r,t){return au(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,t))}async function pC(r,t){return au(r,"POST","/v1/accounts:signInWithEmailLink",$r(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Cp{constructor(t,n,a,o=null){super("password",a),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Gl(t,n,"password")}static _fromEmailAndCode(t,n,a=null){return new Gl(t,n,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pm(t,n,"signInWithPassword",dC);case"emailLink":return mC(t,{email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const a={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pm(t,a,"signUpPassword",hC);case"emailLink":return pC(t,{idToken:n,email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(r,t){return au(r,"POST","/v1/accounts:signInWithIdp",$r(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="http://localhost";class Ha extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ha(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=n,u=bp(n,["providerId","signInMethod"]);if(!a||!o)return null;const h=new Ha(a,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(t){const n=this.buildRequest();return Js(t,n)}_linkToIdToken(t,n){const a=this.buildRequest();return a.idToken=n,Js(t,a)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Js(t,n)}buildRequest(){const t={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=iu(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vC(r){const t=xl(Nl(r)).link,n=t?xl(Nl(t)).deep_link_id:null,a=xl(Nl(r)).deep_link_id;return(a?xl(Nl(a)).link:null)||a||n||t||r}class Ip{constructor(t){var n,a,o,u,h,m;const g=xl(Nl(t)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,E=(a=g.oobCode)!==null&&a!==void 0?a:null,S=yC((o=g.mode)!==null&&o!==void 0?o:null);_t(y&&E&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=vC(t);try{return new Ip(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.providerId=ho.PROVIDER_ID}static credential(t,n){return Gl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const a=Ip.parseLink(n);return _t(a,"argument-error"),Gl._fromEmailAndCode(t,a.code,a.tenantId)}}ho.PROVIDER_ID="password";ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class su extends NT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends su{constructor(){super("facebook.com")}static credential(t){return Ha._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kr.credential(t.oauthAccessToken)}catch{return null}}}kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ha._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Lr.credentialFromTaggedObject(t)}static credentialFromError(t){return Lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:a}=t;if(!n&&!a)return null;try{return Lr.credential(n,a)}catch{return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com";Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends su{constructor(){super("github.com")}static credential(t){return Ha._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends su{constructor(){super("twitter.com")}static credential(t,n){return Ha._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=t;if(!n||!a)return null;try{return Ur.credential(n,a)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(r,t){return au(r,"POST","/v1/accounts:signUp",$r(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,a,o=!1){const u=await Yi._fromIdTokenResponse(t,a,o),h=n0(a);return new Fa({user:u,providerId:h,_tokenResponse:a,operationType:n})}static async _forOperation(t,n,a){await t._updateTokensIfNecessary(a,!0);const o=n0(a);return new Fa({user:t,providerId:o,_tokenResponse:a,operationType:n})}}function n0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends nr{constructor(t,n,a,o){var u;super(n.code,n.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,hf.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,n,a,o){return new hf(t,n,a,o)}}function MT(r,t,n,a){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?hf._fromErrorAndOperation(r,u,t,a):u})}async function EC(r,t,n=!1){const a=await ql(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Fa._forOperation(r,"link",a)}/**
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
 */async function TC(r,t,n=!1){const{auth:a}=r;if(Nn(a.app))return Promise.reject(Xi(a));const o="reauthenticate";try{const u=await ql(r,MT(a,o,t,r),n);_t(u.idToken,a,"internal-error");const h=wp(u.idToken);_t(h,a,"internal-error");const{sub:m}=h;return _t(r.uid===m,a,"user-mismatch"),Fa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(r,t,n=!1){if(Nn(r.app))return Promise.reject(Xi(r));const a="signIn",o=await MT(r,a,t),u=await Fa._fromIdTokenResponse(r,a,o);return n||await r._updateCurrentUser(u.user),u}async function bC(r,t){return PT(Wa(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(r){const t=Wa(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function AC(r,t,n){if(Nn(r.app))return Promise.reject(Xi(r));const a=Wa(r),h=await Pm(a,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_C).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&kT(r),g}),m=await Fa._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(m.user),m}function SC(r,t,n){return Nn(r.app)?Promise.reject(Xi(r)):bC(yn(r),ho.credential(t,n)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&kT(r),a})}function wC(r,t,n,a){return yn(r).onIdTokenChanged(t,n,a)}function RC(r,t,n){return yn(r).beforeAuthStateChanged(t,n)}function CC(r,t,n,a){return yn(r).onAuthStateChanged(t,n,a)}const df="__sak";/**
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
 */class LT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(df,"1"),this.storage.removeItem(df),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1e3,OC=10;class VT extends LT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),o=this.localCache[n];a!==o&&t(n,o,a)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const a=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!n&&this.localCache[a]===h||this.notifyListeners(a,h)},u=this.storage.getItem(a);K2()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,OC):o()}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:a}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}VT.type="LOCAL";const DC=VT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends LT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}UT.type="SESSION";const zT=UT;/**
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
 */function xC(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lf{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const a=new Lf(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:a,eventType:o,data:u}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const m=Array.from(h).map(async y=>y(n.origin,u)),g=await xC(m);n.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(r="",t=10){let n="";for(let a=0;a<t;a++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class NC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const y=Op("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(S){const R=S;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return window}function MC(r){hi().location.href=r}/**
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
 */function jT(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function LC(){return jT()?self:null}/**
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
 */const BT="firebaseLocalStorageDb",VC=1,mf="firebaseLocalStorage",HT="fbase_key";class ou{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vf(r,t){return r.transaction([mf],t?"readwrite":"readonly").objectStore(mf)}function UC(){const r=indexedDB.deleteDatabase(BT);return new ou(r).toPromise()}function km(){const r=indexedDB.open(BT,VC);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(mf,{keyPath:HT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(mf)?t(a):(a.close(),await UC(),t(await km()))})})}async function i0(r,t,n){const a=Vf(r,!0).put({[HT]:t,value:n});return new ou(a).toPromise()}async function zC(r,t){const n=Vf(r,!1).get(t),a=await new ou(n).toPromise();return a===void 0?null:a.value}function r0(r,t){const n=Vf(r,!0).delete(t);return new ou(n).toPromise()}const jC=800,BC=3;class FT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await km(),this.db)}async _withRetries(t){let n=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(n++>BC)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lf._getInstance(LC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new NC(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((n=a[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||kC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await km();return await i0(t,df,"1"),await r0(t,df),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>i0(a,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(a=>zC(a,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>r0(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=Vf(o,!1).getAll();return new ou(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FT.type="LOCAL";const HC=FT;new ru(3e4,6e4);/**
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
 */function FC(r,t){return t?Ki(t):(_t(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Dp extends Cp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Js(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Js(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Js(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function qC(r){return PT(r.auth,new Dp(r),r.bypassAuthState)}function GC(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),TC(n,new Dp(r),r.bypassAuthState)}async function YC(r){const{auth:t,user:n}=r;return _t(n,t,"internal-error"),EC(n,new Dp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(t,n,a,o,u=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:a,postBody:o,tenantId:u,error:h,type:m}=t;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:n,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return qC;case"linkViaPopup":case"linkViaRedirect":return YC;case"reauthViaPopup":case"reauthViaRedirect":return GC;default:Fn(this.auth,"internal-error")}}resolve(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new ru(2e3,1e4);class Qs extends qT{constructor(t,n,a,o,u){super(t,n,o,u),this.provider=a,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return _t(t,this.auth,"internal-error"),t}async onExecution(){Zi(this.filter.length===1,"Popup operations only handle one event");const t=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,a;if(!((a=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,KC.get())};t()}}Qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="pendingRedirect",Zc=new Map;class XC extends qT{constructor(t,n,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let t=Zc.get(this.auth._key());if(!t){try{const a=await $C(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(n){t=()=>Promise.reject(n)}Zc.set(this.auth._key(),t)}return this.bypassAuthState||Zc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $C(r,t){const n=JC(t),a=ZC(r);if(!await a._isAvailable())return!1;const o=await a._get(n)==="true";return await a._remove(n),o}function WC(r,t){Zc.set(r._key(),t)}function ZC(r){return Ki(r._redirectPersistence)}function JC(r){return Wc(QC,r.config.apiKey,r.name)}async function tI(r,t,n=!1){if(Nn(r.app))return Promise.reject(Xi(r));const a=Wa(r),o=FC(a,t),h=await new XC(a,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=10*60*1e3;class nI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(n=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!iI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var a;if(t.error&&!GT(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const a=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=eI&&this.cachedEventUids.clear(),this.cachedEventUids.has(a0(t))}saveEventToCache(t){this.cachedEventUids.add(a0(t)),this.lastProcessedEventTime=Date.now()}}function a0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function GT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function iI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(r,t={}){return Wr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sI=/^https?/;async function oI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await rI(r);for(const n of t)try{if(lI(n))return}catch{}Fn(r,"unauthorized-domain")}function lI(r){const t=Nm(),{protocol:n,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&a===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===a}if(!sI.test(n))return!1;if(aI.test(r))return a===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
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
 */const uI=new ru(3e4,6e4);function s0(){const r=hi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function cI(r){return new Promise((t,n)=>{var a,o,u;function h(){s0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{s0(),n(fi(r,"network-request-failed"))},timeout:uI.get()})}if(!((o=(a=hi().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=hi().gapi)===null||u===void 0)&&u.load)h();else{const m=nC("iframefcb");return hi()[m]=()=>{gapi.load?h():n(fi(r,"network-request-failed"))},OT(`${eC()}?onload=${m}`).catch(g=>n(g))}}).catch(t=>{throw Jc=null,t})}let Jc=null;function fI(r){return Jc=Jc||cI(r),Jc}/**
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
 */const hI=new ru(5e3,15e3),dI="__/auth/iframe",mI="emulator/auth/iframe",pI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yI(r){const t=r.config;_t(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Sp(t,mI):`https://${r.config.authDomain}/${dI}`,a={apiKey:t.apiKey,appName:r.name,v:fo},o=gI.get(r.config.apiHost);o&&(a.eid=o);const u=r._getFrameworks();return u.length&&(a.fw=u.join(",")),`${n}?${iu(a).slice(1)}`}async function vI(r){const t=await fI(r),n=hi().gapi;return _t(n,r,"internal-error"),t.open({where:document.body,url:yI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pI,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const h=fi(r,"network-request-failed"),m=hi().setTimeout(()=>{u(h)},hI.get());function g(){hi().clearTimeout(m),o(a)}a.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const _I={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,TI=600,bI="_blank",AI="http://localhost";class o0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SI(r,t,n,a=EI,o=TI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const g=Object.assign(Object.assign({},_I),{width:a.toString(),height:o.toString(),top:u,left:h}),y=$e().toLowerCase();n&&(m=bT(y)?bI:n),ET(y)&&(t=t||AI,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[B,P])=>`${R}${B}=${P},`,"");if(Y2(y)&&m!=="_self")return wI(t||"",m),new o0(null);const S=window.open(t||"",m,E);_t(S,r,"popup-blocked");try{S.focus()}catch{}return new o0(S)}function wI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
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
 */const RI="__/auth/handler",CI="emulator/auth/handler",II=encodeURIComponent("fac");async function l0(r,t,n,a,o,u){_t(r.config.authDomain,r,"auth-domain-config-required"),_t(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:a,v:fo,eventId:o};if(t instanceof NT){t.setDefaultLanguage(r.languageCode),h.providerId=t.providerId||"",dR(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(t instanceof su){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),y=g?`#${II}=${encodeURIComponent(g)}`:"";return`${OI(r)}?${iu(m).slice(1)}${y}`}function OI({config:r}){return r.emulator?Sp(r,CI):`https://${r.authDomain}/${RI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="webStorageSupport";class DI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zT,this._completeRedirectFn=tI,this._overrideRedirectResult=WC}async _openPopup(t,n,a,o){var u;Zi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await l0(t,n,a,Nm(),o);return SI(t,h,Op())}async _openRedirect(t,n,a,o){await this._originValidation(t);const u=await l0(t,n,a,Nm(),o);return MC(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Zi(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(t);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(t){const n=await vI(t),a=new nI(t);return n.register("authEvent",o=>(_t(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=n,a}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(hm,{type:hm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[hm];h!==void 0&&n(!!h),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return CT()||TT()||Rp()}}const xI=DI;var u0="@firebase/auth",c0="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_t(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PI(r){no(new Ba("auth",(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=a.options;_t(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IT(r)},y=new Z2(a,o,u,g);return lC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,a)=>{t.getProvider("auth-internal").initialize()})),no(new Ba("auth-internal",t=>{const n=Wa(t.getProvider("auth").getImmediate());return(a=>new NI(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Br(u0,c0,MI(r)),Br(u0,c0,"esm2017")}/**
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
 */const kI=5*60,LI=rT("authIdTokenMaxAge")||kI;let f0=null;const VI=r=>async t=>{const n=t&&await t.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>LI)return;const o=n==null?void 0:n.token;f0!==o&&(f0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function UI(r=lT()){const t=Tp(r,"auth");if(t.isInitialized())return t.getImmediate();const n=oC(r,{popupRedirectResolver:xI,persistence:[HC,DC,zT]}),a=rT("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const h=VI(u.toString());RC(n,h,()=>h(n.currentUser)),wC(n,m=>h(m))}}const o=nT("auth");return o&&uC(n,`http://${o}`),n}function zI(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}J2({loadJS(r){return new Promise((t,n)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=o=>{const u=fi("internal-error");u.customData=o,n(u)},a.type="text/javascript",a.charset="UTF-8",zI().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PI("Browser");var h0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,w){function A(){}A.prototype=w.prototype,x.D=w.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(O,M,L){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return w.prototype[M].apply(O,I)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,w,A){A||(A=0);var O=Array(16);if(typeof w=="string")for(var M=0;16>M;++M)O[M]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(M=0;16>M;++M)O[M]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=x.g[0],A=x.g[1],M=x.g[2];var L=x.g[3],I=w+(L^A&(M^L))+O[0]+3614090360&4294967295;w=A+(I<<7&4294967295|I>>>25),I=L+(M^w&(A^M))+O[1]+3905402710&4294967295,L=w+(I<<12&4294967295|I>>>20),I=M+(A^L&(w^A))+O[2]+606105819&4294967295,M=L+(I<<17&4294967295|I>>>15),I=A+(w^M&(L^w))+O[3]+3250441966&4294967295,A=M+(I<<22&4294967295|I>>>10),I=w+(L^A&(M^L))+O[4]+4118548399&4294967295,w=A+(I<<7&4294967295|I>>>25),I=L+(M^w&(A^M))+O[5]+1200080426&4294967295,L=w+(I<<12&4294967295|I>>>20),I=M+(A^L&(w^A))+O[6]+2821735955&4294967295,M=L+(I<<17&4294967295|I>>>15),I=A+(w^M&(L^w))+O[7]+4249261313&4294967295,A=M+(I<<22&4294967295|I>>>10),I=w+(L^A&(M^L))+O[8]+1770035416&4294967295,w=A+(I<<7&4294967295|I>>>25),I=L+(M^w&(A^M))+O[9]+2336552879&4294967295,L=w+(I<<12&4294967295|I>>>20),I=M+(A^L&(w^A))+O[10]+4294925233&4294967295,M=L+(I<<17&4294967295|I>>>15),I=A+(w^M&(L^w))+O[11]+2304563134&4294967295,A=M+(I<<22&4294967295|I>>>10),I=w+(L^A&(M^L))+O[12]+1804603682&4294967295,w=A+(I<<7&4294967295|I>>>25),I=L+(M^w&(A^M))+O[13]+4254626195&4294967295,L=w+(I<<12&4294967295|I>>>20),I=M+(A^L&(w^A))+O[14]+2792965006&4294967295,M=L+(I<<17&4294967295|I>>>15),I=A+(w^M&(L^w))+O[15]+1236535329&4294967295,A=M+(I<<22&4294967295|I>>>10),I=w+(M^L&(A^M))+O[1]+4129170786&4294967295,w=A+(I<<5&4294967295|I>>>27),I=L+(A^M&(w^A))+O[6]+3225465664&4294967295,L=w+(I<<9&4294967295|I>>>23),I=M+(w^A&(L^w))+O[11]+643717713&4294967295,M=L+(I<<14&4294967295|I>>>18),I=A+(L^w&(M^L))+O[0]+3921069994&4294967295,A=M+(I<<20&4294967295|I>>>12),I=w+(M^L&(A^M))+O[5]+3593408605&4294967295,w=A+(I<<5&4294967295|I>>>27),I=L+(A^M&(w^A))+O[10]+38016083&4294967295,L=w+(I<<9&4294967295|I>>>23),I=M+(w^A&(L^w))+O[15]+3634488961&4294967295,M=L+(I<<14&4294967295|I>>>18),I=A+(L^w&(M^L))+O[4]+3889429448&4294967295,A=M+(I<<20&4294967295|I>>>12),I=w+(M^L&(A^M))+O[9]+568446438&4294967295,w=A+(I<<5&4294967295|I>>>27),I=L+(A^M&(w^A))+O[14]+3275163606&4294967295,L=w+(I<<9&4294967295|I>>>23),I=M+(w^A&(L^w))+O[3]+4107603335&4294967295,M=L+(I<<14&4294967295|I>>>18),I=A+(L^w&(M^L))+O[8]+1163531501&4294967295,A=M+(I<<20&4294967295|I>>>12),I=w+(M^L&(A^M))+O[13]+2850285829&4294967295,w=A+(I<<5&4294967295|I>>>27),I=L+(A^M&(w^A))+O[2]+4243563512&4294967295,L=w+(I<<9&4294967295|I>>>23),I=M+(w^A&(L^w))+O[7]+1735328473&4294967295,M=L+(I<<14&4294967295|I>>>18),I=A+(L^w&(M^L))+O[12]+2368359562&4294967295,A=M+(I<<20&4294967295|I>>>12),I=w+(A^M^L)+O[5]+4294588738&4294967295,w=A+(I<<4&4294967295|I>>>28),I=L+(w^A^M)+O[8]+2272392833&4294967295,L=w+(I<<11&4294967295|I>>>21),I=M+(L^w^A)+O[11]+1839030562&4294967295,M=L+(I<<16&4294967295|I>>>16),I=A+(M^L^w)+O[14]+4259657740&4294967295,A=M+(I<<23&4294967295|I>>>9),I=w+(A^M^L)+O[1]+2763975236&4294967295,w=A+(I<<4&4294967295|I>>>28),I=L+(w^A^M)+O[4]+1272893353&4294967295,L=w+(I<<11&4294967295|I>>>21),I=M+(L^w^A)+O[7]+4139469664&4294967295,M=L+(I<<16&4294967295|I>>>16),I=A+(M^L^w)+O[10]+3200236656&4294967295,A=M+(I<<23&4294967295|I>>>9),I=w+(A^M^L)+O[13]+681279174&4294967295,w=A+(I<<4&4294967295|I>>>28),I=L+(w^A^M)+O[0]+3936430074&4294967295,L=w+(I<<11&4294967295|I>>>21),I=M+(L^w^A)+O[3]+3572445317&4294967295,M=L+(I<<16&4294967295|I>>>16),I=A+(M^L^w)+O[6]+76029189&4294967295,A=M+(I<<23&4294967295|I>>>9),I=w+(A^M^L)+O[9]+3654602809&4294967295,w=A+(I<<4&4294967295|I>>>28),I=L+(w^A^M)+O[12]+3873151461&4294967295,L=w+(I<<11&4294967295|I>>>21),I=M+(L^w^A)+O[15]+530742520&4294967295,M=L+(I<<16&4294967295|I>>>16),I=A+(M^L^w)+O[2]+3299628645&4294967295,A=M+(I<<23&4294967295|I>>>9),I=w+(M^(A|~L))+O[0]+4096336452&4294967295,w=A+(I<<6&4294967295|I>>>26),I=L+(A^(w|~M))+O[7]+1126891415&4294967295,L=w+(I<<10&4294967295|I>>>22),I=M+(w^(L|~A))+O[14]+2878612391&4294967295,M=L+(I<<15&4294967295|I>>>17),I=A+(L^(M|~w))+O[5]+4237533241&4294967295,A=M+(I<<21&4294967295|I>>>11),I=w+(M^(A|~L))+O[12]+1700485571&4294967295,w=A+(I<<6&4294967295|I>>>26),I=L+(A^(w|~M))+O[3]+2399980690&4294967295,L=w+(I<<10&4294967295|I>>>22),I=M+(w^(L|~A))+O[10]+4293915773&4294967295,M=L+(I<<15&4294967295|I>>>17),I=A+(L^(M|~w))+O[1]+2240044497&4294967295,A=M+(I<<21&4294967295|I>>>11),I=w+(M^(A|~L))+O[8]+1873313359&4294967295,w=A+(I<<6&4294967295|I>>>26),I=L+(A^(w|~M))+O[15]+4264355552&4294967295,L=w+(I<<10&4294967295|I>>>22),I=M+(w^(L|~A))+O[6]+2734768916&4294967295,M=L+(I<<15&4294967295|I>>>17),I=A+(L^(M|~w))+O[13]+1309151649&4294967295,A=M+(I<<21&4294967295|I>>>11),I=w+(M^(A|~L))+O[4]+4149444226&4294967295,w=A+(I<<6&4294967295|I>>>26),I=L+(A^(w|~M))+O[11]+3174756917&4294967295,L=w+(I<<10&4294967295|I>>>22),I=M+(w^(L|~A))+O[2]+718787259&4294967295,M=L+(I<<15&4294967295|I>>>17),I=A+(L^(M|~w))+O[9]+3951481745&4294967295,x.g[0]=x.g[0]+w&4294967295,x.g[1]=x.g[1]+(M+(I<<21&4294967295|I>>>11))&4294967295,x.g[2]=x.g[2]+M&4294967295,x.g[3]=x.g[3]+L&4294967295}a.prototype.u=function(x,w){w===void 0&&(w=x.length);for(var A=w-this.blockSize,O=this.B,M=this.h,L=0;L<w;){if(M==0)for(;L<=A;)o(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<w;)if(O[M++]=x.charCodeAt(L++),M==this.blockSize){o(this,O),M=0;break}}else for(;L<w;)if(O[M++]=x[L++],M==this.blockSize){o(this,O),M=0;break}}this.h=M,this.o+=w},a.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var w=1;w<x.length-8;++w)x[w]=0;var A=8*this.o;for(w=x.length-8;w<x.length;++w)x[w]=A&255,A/=256;for(this.u(x),x=Array(16),w=A=0;4>w;++w)for(var O=0;32>O;O+=8)x[A++]=this.g[w]>>>O&255;return x};function u(x,w){var A=m;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=w(x)}function h(x,w){this.h=w;for(var A=[],O=!0,M=x.length-1;0<=M;M--){var L=x[M]|0;O&&L==w||(A[M]=L,O=!1)}this.g=A}var m={};function g(x){return-128<=x&&128>x?u(x,function(w){return new h([w|0],0>w?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return S;if(0>x)return q(y(-x));for(var w=[],A=1,O=0;x>=A;O++)w[O]=x/A|0,A*=4294967296;return new h(w,0)}function E(x,w){if(x.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(x.charAt(0)=="-")return q(E(x.substring(1),w));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(w,8)),O=S,M=0;M<x.length;M+=8){var L=Math.min(8,x.length-M),I=parseInt(x.substring(M,M+L),w);8>L?(L=y(Math.pow(w,L)),O=O.j(L).add(y(I))):(O=O.j(A),O=O.add(y(I)))}return O}var S=g(0),R=g(1),B=g(16777216);r=h.prototype,r.m=function(){if(W(this))return-q(this).m();for(var x=0,w=1,A=0;A<this.g.length;A++){var O=this.i(A);x+=(0<=O?O:4294967296+O)*w,w*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(P(this))return"0";if(W(this))return"-"+q(this).toString(x);for(var w=y(Math.pow(x,6)),A=this,O="";;){var M=ct(A,w).g;A=Y(A,M.j(w));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=M,P(A))return L+O;for(;6>L.length;)L="0"+L;O=L+O}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function P(x){if(x.h!=0)return!1;for(var w=0;w<x.g.length;w++)if(x.g[w]!=0)return!1;return!0}function W(x){return x.h==-1}r.l=function(x){return x=Y(this,x),W(x)?-1:P(x)?0:1};function q(x){for(var w=x.g.length,A=[],O=0;O<w;O++)A[O]=~x.g[O];return new h(A,~x.h).add(R)}r.abs=function(){return W(this)?q(this):this},r.add=function(x){for(var w=Math.max(this.g.length,x.g.length),A=[],O=0,M=0;M<=w;M++){var L=O+(this.i(M)&65535)+(x.i(M)&65535),I=(L>>>16)+(this.i(M)>>>16)+(x.i(M)>>>16);O=I>>>16,L&=65535,I&=65535,A[M]=I<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function Y(x,w){return x.add(q(w))}r.j=function(x){if(P(this)||P(x))return S;if(W(this))return W(x)?q(this).j(q(x)):q(q(this).j(x));if(W(x))return q(this.j(q(x)));if(0>this.l(B)&&0>x.l(B))return y(this.m()*x.m());for(var w=this.g.length+x.g.length,A=[],O=0;O<2*w;O++)A[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<x.g.length;M++){var L=this.i(O)>>>16,I=this.i(O)&65535,Pe=x.i(M)>>>16,se=x.i(M)&65535;A[2*O+2*M]+=I*se,nt(A,2*O+2*M),A[2*O+2*M+1]+=L*se,nt(A,2*O+2*M+1),A[2*O+2*M+1]+=I*Pe,nt(A,2*O+2*M+1),A[2*O+2*M+2]+=L*Pe,nt(A,2*O+2*M+2)}for(O=0;O<w;O++)A[O]=A[2*O+1]<<16|A[2*O];for(O=w;O<2*w;O++)A[O]=0;return new h(A,0)};function nt(x,w){for(;(x[w]&65535)!=x[w];)x[w+1]+=x[w]>>>16,x[w]&=65535,w++}function Z(x,w){this.g=x,this.h=w}function ct(x,w){if(P(w))throw Error("division by zero");if(P(x))return new Z(S,S);if(W(x))return w=ct(q(x),w),new Z(q(w.g),q(w.h));if(W(w))return w=ct(x,q(w)),new Z(q(w.g),w.h);if(30<x.g.length){if(W(x)||W(w))throw Error("slowDivide_ only works with positive integers.");for(var A=R,O=w;0>=O.l(x);)A=ut(A),O=ut(O);var M=At(A,1),L=At(O,1);for(O=At(O,2),A=At(A,2);!P(O);){var I=L.add(O);0>=I.l(x)&&(M=M.add(A),L=I),O=At(O,1),A=At(A,1)}return w=Y(x,M.j(w)),new Z(M,w)}for(M=S;0<=x.l(w);){for(A=Math.max(1,Math.floor(x.m()/w.m())),O=Math.ceil(Math.log(A)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),L=y(A),I=L.j(w);W(I)||0<I.l(x);)A-=O,L=y(A),I=L.j(w);P(L)&&(L=R),M=M.add(L),x=Y(x,I)}return new Z(M,x)}r.A=function(x){return ct(this,x).h},r.and=function(x){for(var w=Math.max(this.g.length,x.g.length),A=[],O=0;O<w;O++)A[O]=this.i(O)&x.i(O);return new h(A,this.h&x.h)},r.or=function(x){for(var w=Math.max(this.g.length,x.g.length),A=[],O=0;O<w;O++)A[O]=this.i(O)|x.i(O);return new h(A,this.h|x.h)},r.xor=function(x){for(var w=Math.max(this.g.length,x.g.length),A=[],O=0;O<w;O++)A[O]=this.i(O)^x.i(O);return new h(A,this.h^x.h)};function ut(x){for(var w=x.g.length+1,A=[],O=0;O<w;O++)A[O]=x.i(O)<<1|x.i(O-1)>>>31;return new h(A,x.h)}function At(x,w){var A=w>>5;w%=32;for(var O=x.g.length-A,M=[],L=0;L<O;L++)M[L]=0<w?x.i(L+A)>>>w|x.i(L+A+1)<<32-w:x.i(L+A);return new h(M,x.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,xp=h}).apply(typeof h0<"u"?h0:typeof self<"u"?self:typeof window<"u"?window:{});var Bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YT,Ml,KT,tf,Lm,QT,XT,$T;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bc=="object"&&Bc];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=n(this);function o(c,p){if(p)t:{var v=a;c=c.split(".");for(var b=0;b<c.length-1;b++){var V=c[b];if(!(V in v))break t;v=v[V]}c=c[c.length-1],b=v[c],p=p(b),p!=b&&p!=null&&t(v,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var v=0,b=!1,V={next:function(){if(!b&&v<c.length){var G=v++;return{value:p(G,c[G]),done:!1}}return b=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function E(c,p,v){return c.call.apply(c.bind,arguments)}function S(c,p,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,b),c.apply(p,V)}}return function(){return c.apply(p,arguments)}}function R(c,p,v){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,R.apply(null,arguments)}function B(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function P(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,V,G){for(var st=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)st[Pt-2]=arguments[Pt];return p.prototype[V].apply(b,st)}}function W(c){const p=c.length;if(0<p){const v=Array(p);for(let b=0;b<p;b++)v[b]=c[b];return v}return[]}function q(c,p){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(g(b)){const V=c.length||0,G=b.length||0;c.length=V+G;for(let st=0;st<G;st++)c[V+st]=b[st]}else c.push(b)}}class Y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function nt(c){return/^[\s\xa0]*$/.test(c)}function Z(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ct(c){return ct[" "](c),c}ct[" "]=function(){};var ut=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function At(c,p,v){for(const b in c)p.call(v,c[b],b,c)}function x(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function w(c){const p={};for(const v in c)p[v]=c[v];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,p){let v,b;for(let V=1;V<arguments.length;V++){b=arguments[V];for(v in b)c[v]=b[v];for(let G=0;G<A.length;G++)v=A[G],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function M(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function L(c){m.setTimeout(()=>{throw c},0)}function I(){var c=jt;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Pe{constructor(){this.h=this.g=null}add(p,v){const b=se.get();b.set(p,v),this.h?this.h.next=b:this.g=b,this.h=b}}var se=new Y(()=>new Q,c=>c.reset());class Q{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ot,pt=!1,jt=new Pe,D=()=>{const c=m.Promise.resolve(void 0);ot=()=>{c.then(et)}};var et=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(v){L(v)}var p=se;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}pt=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var gt=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return c}();function Ct(c,p){if(at.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(ut){t:{try{ct(p.nodeName);var V=!0;break t}catch{}V=!1}V||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:bt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}P(Ct,at);var bt={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function qn(c,p,v,b,V){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!b,this.ha=V,this.key=++Wt,this.da=this.fa=!1}function rr(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _i(c){this.src=c,this.g={},this.h=0}_i.prototype.add=function(c,p,v,b,V){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var st=Jr(c,p,b,V);return-1<st?(p=c[st],v||(p.fa=!1)):(p=new qn(p,this.src,G,!!b,V),p.fa=v,c.push(p)),p};function Zr(c,p){var v=p.type;if(v in c.g){var b=c.g[v],V=Array.prototype.indexOf.call(b,p,void 0),G;(G=0<=V)&&Array.prototype.splice.call(b,V,1),G&&(rr(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Jr(c,p,v,b){for(var V=0;V<c.length;++V){var G=c[V];if(!G.da&&G.listener==p&&G.capture==!!v&&G.ha==b)return V}return-1}var ta="closure_lm_"+(1e6*Math.random()|0),yo={};function pu(c,p,v,b,V){if(Array.isArray(p)){for(var G=0;G<p.length;G++)pu(c,p[G],v,b,V);return null}return v=gu(v),c&&c[we]?c.K(p,v,y(b)?!!b.capture:!1,V):_n(c,p,v,!1,b,V)}function _n(c,p,v,b,V,G){if(!p)throw Error("Invalid event type");var st=y(V)?!!V.capture:!!V,Pt=es(c);if(Pt||(c[ta]=Pt=new _i(c)),v=Pt.add(p,v,b,st,G),v.proxy)return v;if(b=Zf(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)gt||(V=st),V===void 0&&(V=!1),c.addEventListener(p.toString(),b,V);else if(c.attachEvent)c.attachEvent(ea(p.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Zf(){function c(v){return p.call(c.src,c.listener,v)}const p=Jf;return c}function vo(c,p,v,b,V){if(Array.isArray(p))for(var G=0;G<p.length;G++)vo(c,p[G],v,b,V);else b=y(b)?!!b.capture:!!b,v=gu(v),c&&c[we]?(c=c.i,p=String(p).toString(),p in c.g&&(G=c.g[p],v=Jr(G,v,b,V),-1<v&&(rr(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete c.g[p],c.h--)))):c&&(c=es(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Jr(p,v,b,V)),(v=-1<c?p[c]:null)&&ts(v))}function ts(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[we])Zr(p.i,c);else{var v=c.type,b=c.proxy;p.removeEventListener?p.removeEventListener(v,b,c.capture):p.detachEvent?p.detachEvent(ea(v),b):p.addListener&&p.removeListener&&p.removeListener(b),(v=es(p))?(Zr(v,c),v.h==0&&(v.src=null,p[ta]=null)):rr(c)}}}function ea(c){return c in yo?yo[c]:yo[c]="on"+c}function Jf(c,p){if(c.da)c=!0;else{p=new Ct(p,this);var v=c.listener,b=c.ha||c.src;c.fa&&ts(c),c=v.call(b,p)}return c}function es(c){return c=c[ta],c instanceof _i?c:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function gu(c){return typeof c=="function"?c:(c[_o]||(c[_o]=function(p){return c.handleEvent(p)}),c[_o])}function oe(){lt.call(this),this.i=new _i(this),this.M=this,this.F=null}P(oe,lt),oe.prototype[we]=!0,oe.prototype.removeEventListener=function(c,p,v,b){vo(this,c,p,v,b)};function Ft(c,p){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=p.type||p,typeof p=="string")p=new at(p,c);else if(p instanceof at)p.target=p.target||c;else{var V=p;p=new at(b,c),O(p,V)}if(V=!0,v)for(var G=v.length-1;0<=G;G--){var st=p.g=v[G];V=ln(st,b,!0,p)&&V}if(st=p.g=c,V=ln(st,b,!0,p)&&V,V=ln(st,b,!1,p)&&V,v)for(G=0;G<v.length;G++)st=p.g=v[G],V=ln(st,b,!1,p)&&V}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],b=0;b<v.length;b++)rr(v[b]);delete c.g[p],c.h--}}this.F=null},oe.prototype.K=function(c,p,v,b){return this.i.add(String(c),p,!1,v,b)},oe.prototype.L=function(c,p,v,b){return this.i.add(String(c),p,!0,v,b)};function ln(c,p,v,b){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,G=0;G<p.length;++G){var st=p[G];if(st&&!st.da&&st.capture==v){var Pt=st.listener,Te=st.ha||st.src;st.fa&&Zr(c.i,st),V=Pt.call(Te,b)!==!1&&V}}return V&&!b.defaultPrevented}function qe(c,p,v){if(typeof c=="function")v&&(c=R(c,v));else if(c&&typeof c.handleEvent=="function")c=R(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function yu(c){c.g=qe(()=>{c.g=null,c.i&&(c.i=!1,yu(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class th extends lt{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:yu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(c){lt.call(this),this.h=c,this.g={}}P(na,lt);var ia=[];function ra(c){At(c.g,function(p,v){this.g.hasOwnProperty(v)&&ts(p)},c),c.g={}}na.prototype.N=function(){na.aa.N.call(this),ra(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=m.JSON.stringify,ns=m.JSON.parse,aa=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Eo(){}Eo.prototype.h=null;function To(c){return c.h||(c.h=c.i())}function bo(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ti(){at.call(this,"d")}P(Ti,at);function Ao(){at.call(this,"c")}P(Ao,at);var Gn={},So=null;function ar(){return So=So||new oe}Gn.La="serverreachability";function is(c){at.call(this,Gn.La,c)}P(is,at);function sr(c){const p=ar();Ft(p,new is(p))}Gn.STAT_EVENT="statevent";function vu(c,p){at.call(this,Gn.STAT_EVENT,c),this.stat=p}P(vu,at);function ee(c){const p=ar();Ft(p,new vu(p,c))}Gn.Ma="timingevent";function Ee(c,p){at.call(this,Gn.Ma,c),this.size=p}P(Ee,at);function pe(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function wo(c,p,v,b,V,G){c.info(function(){if(c.g)if(G)for(var st="",Pt=G.split("&"),Te=0;Te<Pt.length;Te++){var kt=Pt[Te].split("=");if(1<kt.length){var Ce=kt[0];kt=kt[1];var be=Ce.split("_");st=2<=be.length&&be[1]=="type"?st+(Ce+"="+kt+"&"):st+(Ce+"=redacted&")}}else st=null;else st=G;return"XMLHTTP REQ ("+b+") [attempt "+V+"]: "+p+`
`+v+`
`+st})}function eh(c,p,v,b,V,G,st){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+V+"]: "+p+`
`+v+`
`+G+" "+st})}function or(c,p,v,b){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+sa(c,v)+(b?" "+b:"")})}function _u(c,p){c.info(function(){return"TIMEOUT: "+p})}En.prototype.info=function(){};function sa(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var V=b[1];if(Array.isArray(V)&&!(1>V.length)){var G=V[0];if(G!="noop"&&G!="stop"&&G!="close")for(var st=1;st<V.length;st++)V[st]=""}}}}return Mn(v)}catch{return p}}var lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function Kn(){}P(Kn,Eo),Kn.prototype.g=function(){return new XMLHttpRequest},Kn.prototype.i=function(){return{}},Yn=new Kn;function Ze(c,p,v,b){this.j=c,this.i=p,this.l=v,this.R=b||1,this.U=new na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new he}function he(){this.i=null,this.g="",this.h=!1}var Ro={},rs={};function Pn(c,p,v){c.L=1,c.v=fa(un(p)),c.m=v,c.P=!0,Ai(c,null)}function Ai(c,p){c.F=Date.now(),oa(c),c.A=un(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),No(v.i,"t",b),c.C=0,v=c.j.J,c.h=new he,c.g=ku(c.j,v?p:null,!c.m),0<c.O&&(c.M=new th(R(c.Y,c,c.g),c.O)),p=c.U,v=c.g,b=c.ca;var V="readystatechange";Array.isArray(V)||(V&&(ia[0]=V.toString()),V=ia);for(var G=0;G<V.length;G++){var st=pu(v,V[G],b||p.handleEvent,!1,p.h||p);if(!st)break;p.g[st.key]=st}p=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),sr(),wo(c.i,c.u,c.A,c.l,c.R,c.m)}Ze.prototype.ca=function(c){c=c.target;const p=this.M;p&&Sn(c)==3?p.j():this.Y(c)},Ze.prototype.Y=function(c){try{if(c==this.g)t:{const be=Sn(this.g);var p=this.g.Ba();const xi=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Cu(this.g)))){this.J||be!=4||p==7||(p==8||0>=xi?sr(3):sr(2)),ur(this);var v=this.g.Z();this.X=v;e:if(Eu(this)){var b=Cu(this.g);c="";var V=b.length,G=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Qn(this);var st="";break e}this.h.i=new m.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,c+=this.h.i.decode(b[p],{stream:!(G&&p==V-1)});b.length=0,this.h.g+=c,this.C=0,st=this.h.g}else st=this.g.oa();if(this.o=v==200,eh(this.i,this.u,this.A,this.l,this.R,be,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,Te=this.g;if((Pt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nt(Pt)){var kt=Pt;break e}}kt=null}if(v=kt)or(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,v);else{this.o=!1,this.s=3,ee(12),ke(this),Qn(this);break t}}if(this.P){v=!0;let Le;for(;!this.J&&this.C<st.length;)if(Le=Tu(this,st),Le==rs){be==4&&(this.s=4,ee(14),v=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Ro){this.s=4,ee(15),or(this.i,this.l,st,"[Invalid Chunk]"),v=!1;break}else or(this.i,this.l,Le,null),la(this,Le);if(Eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||st.length!=0||this.h.h||(this.s=1,ee(16),v=!1),this.o=this.o&&v,!v)or(this.i,this.l,st,"[Invalid Chunked Response]"),ke(this),Qn(this);else if(0<st.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+st.length),_a(Ce),Ce.M=!0,ee(11))}}else or(this.i,this.l,st,null),la(this,st);be==4&&ke(this),this.o&&!this.J&&(be==4?Nu(this.j,this):(this.o=!1,oa(this)))}else sh(this.g),v==400&&0<st.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),ke(this),Qn(this)}}}catch{}finally{}};function Eu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Tu(c,p){var v=c.C,b=p.indexOf(`
`,v);return b==-1?rs:(v=Number(p.substring(v,b)),isNaN(v)?Ro:(b+=1,b+v>p.length?rs:(p=p.slice(b,b+v),c.C=b+v,p)))}Ze.prototype.cancel=function(){this.J=!0,ke(this)};function oa(c){c.S=Date.now()+c.I,bu(c,c.I)}function bu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=pe(R(c.ba,c),p)}function ur(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Ze.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(_u(this.i,this.A),this.L!=2&&(sr(),ee(17)),ke(this),this.s=2,Qn(this)):bu(this,this.S-c)};function Qn(c){c.j.G==0||c.J||Nu(c.j,c)}function ke(c){ur(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,ra(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function la(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Co(v.h,c))){if(!c.K&&Co(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var V=b;if(V[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)gs(v),ms(v);else break t;Vo(v),ee(18)}}else v.za=V[1],0<v.za-v.T&&37500>V[2]&&v.F&&v.v==0&&!v.C&&(v.C=pe(R(v.Za,v),6e3));if(1>=ss(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Di(v,11)}else if((c.K||v.g==c)&&gs(v),!nt(p))for(V=v.Da.g.parse(p),p=0;p<V.length;p++){let kt=V[p];if(v.T=kt[0],kt=kt[1],v.G==2)if(kt[0]=="c"){v.K=kt[1],v.ia=kt[2];const Ce=kt[3];Ce!=null&&(v.la=Ce,v.j.info("VER="+v.la));const be=kt[4];be!=null&&(v.Aa=be,v.j.info("SVER="+v.Aa));const xi=kt[5];xi!=null&&typeof xi=="number"&&0<xi&&(b=1.5*xi,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Le=c.g;if(Le){const ei=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var G=b.h;G.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(os(G,G.h),G.h=null))}if(b.D){const zo=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;zo&&(b.ya=zo,Yt(b.I,b.D,zo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var st=c;if(b.qa=Pu(b,b.J?b.ia:null,b.W),st.K){Je(b.h,st);var Pt=st,Te=b.L;Te&&(Pt.I=Te),Pt.B&&(ur(Pt),oa(Pt)),b.g=st}else Du(b);0<v.i.length&&ps(v)}else kt[0]!="stop"&&kt[0]!="close"||Di(v,7);else v.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?Di(v,7):ko(v):kt[0]!="noop"&&v.l&&v.l.ta(kt),v.v=0)}}sr(4)}catch{}}var Au=class{constructor(c,p){this.g=c,this.map=p}};function Si(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function as(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ss(c){return c.h?1:c.g?c.g.size:0}function Co(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function os(c,p){c.g?c.g.add(p):c.h=p}function Je(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Si.prototype.cancel=function(){if(this.i=Io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Io(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return W(c.i)}function nh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],v=c.length,b=0;b<v;b++)p.push(c[b]);return p}p=[],v=0;for(b in c)p[v++]=c[b];return p}function ls(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const b in c)p[v++]=b;return p}}}function Oo(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=ls(c),b=nh(c),V=b.length,G=0;G<V;G++)p.call(void 0,b[G],v&&v[G],c)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ih(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),V=null;if(0<=b){var G=c[v].substring(0,b);V=c[v].substring(b+1)}else G=c[v];p(G,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function ge(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ge){this.h=c.h,ca(this,c.j),this.o=c.o,this.g=c.g,cr(this,c.s),this.l=c.l;var p=c.i,v=new Ri;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),wi(this,v),this.m=c.m}else c&&(p=String(c).match(ua))?(this.h=!1,ca(this,p[1]||"",!0),this.o=Tn(p[2]||""),this.g=Tn(p[3]||"",!0),cr(this,p[4]),this.l=Tn(p[5]||"",!0),wi(this,p[6]||"",!0),this.m=Tn(p[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}ge.prototype.toString=function(){var c=[],p=this.j;p&&c.push(ha(p,Do,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ha(p,Do,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ha(v,v.charAt(0)=="/"?rh:xo,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ha(v,us)),c.join("")};function un(c){return new ge(c)}function ca(c,p,v){c.j=v?Tn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function cr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function wi(c,p,v){p instanceof Ri?(c.i=p,wu(c.i,c.h)):(v||(p=ha(p,ah)),c.i=new Ri(p,c.h))}function Yt(c,p,v){c.i.set(p,v)}function fa(c){return Yt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ha(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,Su),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Su(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Do=/[#\/\?@]/g,xo=/[#\?:]/g,rh=/[#\?]/g,ah=/[#\?@]/g,us=/#/g;function Ri(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function bn(c){c.g||(c.g=new Map,c.h=0,c.i&&ih(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=Ri.prototype,r.add=function(c,p){bn(this),this.i=null,c=Xn(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function Ci(c,p){bn(c),p=Xn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Ii(c,p){return bn(c),p=Xn(c,p),c.g.has(p)}r.forEach=function(c,p){bn(this),this.g.forEach(function(v,b){v.forEach(function(V){c.call(p,V,b,this)},this)},this)},r.na=function(){bn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let b=0;b<p.length;b++){const V=c[b];for(let G=0;G<V.length;G++)v.push(p[b])}return v},r.V=function(c){bn(this);let p=[];if(typeof c=="string")Ii(this,c)&&(p=p.concat(this.g.get(Xn(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},r.set=function(c,p){return bn(this),this.i=null,c=Xn(this,c),Ii(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function No(c,p,v){Ci(c,p),0<v.length&&(c.i=null,c.g.set(Xn(c,p),W(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var b=p[v];const G=encodeURIComponent(String(b)),st=this.V(b);for(b=0;b<st.length;b++){var V=G;st[b]!==""&&(V+="="+encodeURIComponent(String(st[b]))),c.push(V)}}return this.i=c.join("&")};function Xn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function wu(c,p){p&&!c.j&&(bn(c),c.i=null,c.g.forEach(function(v,b){var V=b.toLowerCase();b!=V&&(Ci(this,b),No(this,V,v))},c)),c.j=p}function da(c,p){const v=new En;if(m.Image){const b=new Image;b.onload=B(An,v,"TestLoadImage: loaded",!0,p,b),b.onerror=B(An,v,"TestLoadImage: error",!1,p,b),b.onabort=B(An,v,"TestLoadImage: abort",!1,p,b),b.ontimeout=B(An,v,"TestLoadImage: timeout",!1,p,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else p(!1)}function kn(c,p){const v=new En,b=new AbortController,V=setTimeout(()=>{b.abort(),An(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:b.signal}).then(G=>{clearTimeout(V),G.ok?An(v,"TestPingServer: ok",!0,p):An(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),An(v,"TestPingServer: error",!1,p)})}function An(c,p,v,b,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),b(v)}catch{}}function ma(){this.g=new aa}function $n(c,p,v){const b=v||"";try{Oo(c,function(V,G){let st=V;y(V)&&(st=Mn(V)),p.push(b+G+"="+encodeURIComponent(st))})}catch(V){throw p.push(b+"type="+encodeURIComponent("_badmap")),V}}function fr(c){this.l=c.Ub||null,this.j=c.eb||!1}P(fr,Eo),fr.prototype.g=function(){return new Oi(this.l,this.j)},fr.prototype.i=function(c){return function(){return c}}({});function Oi(c,p){oe.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Oi,oe),r=Oi.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Zn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Wn(this):Zn(this),this.readyState==3&&Mo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Wn(this))},r.Qa=function(c){this.g&&(this.response=c,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Zn(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function Zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Po(c){let p="";return At(c,function(v,b){p+=b,p+=":",p+=v,p+=`\r
`}),p}function Re(c,p,v){t:{for(b in v){var b=!1;break t}b=!0}b||(v=Po(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Yt(c,p,v))}function Ht(c){oe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ht,oe);var cs=/^https?$/i,pa=["POST","PUT"];r=Ht.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?To(this.o):To(Yn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(G){Ru(this,G);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var V in b)v.set(V,b[V]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const G of b.keys())v.set(G,b.get(G));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),V=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(pa,p,void 0))||b||V||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,st]of v)this.g.setRequestHeader(G,st);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ga(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){Ru(this,G)}};function Ru(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,fs(c),Jn(c)}function fs(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),Jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),Ht.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?hs(this):this.bb())},r.bb=function(){hs(this)};function hs(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)qe(c.Ea,0,c);else if(Ft(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const st=c.Z();t:switch(st){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var v;if(!(v=p)){var b;if(b=st===0){var V=String(c.D).match(ua)[1]||null;!V&&m.self&&m.self.location&&(V=m.self.location.protocol.slice(0,-1)),b=!cs.test(V?V.toLowerCase():"")}v=b}if(v)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var G=2<Sn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",fs(c)}}finally{Jn(c)}}}}function Jn(c,p){if(c.g){ga(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ft(c,"ready");try{v.onreadystatechange=b}catch{}}}function ga(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),ns(p)}};function Cu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function sh(c){const p={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(nt(c[b]))continue;var v=M(c[b]);const V=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=p[V]||[];p[V]=G,G.push(v)}x(p,function(b){return b.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ya(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function ds(c){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ya("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ya("baseRetryDelayMs",5e3,c),this.cb=ya("retryDelaySeedMs",1e4,c),this.Wa=ya("forwardChannelMaxRetries",2,c),this.wa=ya("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(c&&c.concurrentRequestLimit),this.Da=new ma,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ds.prototype,r.la=8,r.G=1,r.connect=function(c,p,v,b){ee(0),this.W=c,this.H=p||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=Pu(this,null,this.W),ps(this)};function ko(c){if(Iu(c),c.G==3){var p=c.U++,v=un(c.I);if(Yt(v,"SID",c.K),Yt(v,"RID",p),Yt(v,"TYPE","terminate"),va(c,v),p=new Ze(c,c.j,p),p.L=2,p.v=fa(un(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=ku(p.j,null),p.g.ea(p.v)),p.F=Date.now(),oa(p)}Mu(c)}function ms(c){c.g&&(_a(c),c.g.cancel(),c.g=null)}function Iu(c){ms(c),c.u&&(m.clearTimeout(c.u),c.u=null),gs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ps(c){if(!as(c.h)&&!c.s){c.s=!0;var p=c.Ga;ot||D(),pt||(ot(),pt=!0),jt.add(p,c),c.B=0}}function oh(c,p){return ss(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=pe(R(c.Ga,c,p),Uo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const V=new Ze(this,this.j,c);let G=this.o;if(this.S&&(G?(G=w(G),O(G,this.S)):G=this.S),this.m!==null||this.O||(V.H=G,G=null),this.P)t:{for(var p=0,v=0;v<this.i.length;v++){e:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break e}b=void 0}if(b===void 0)break;if(p+=b,4096<p){p=v;break t}if(p===4096||v===this.i.length-1){p=v+1;break t}}p=1e3}else p=1e3;p=Ou(this,V,p),v=un(this.I),Yt(v,"RID",c),Yt(v,"CVER",22),this.D&&Yt(v,"X-HTTP-Session-Id",this.D),va(this,v),G&&(this.O?p="headers="+encodeURIComponent(String(Po(G)))+"&"+p:this.m&&Re(v,this.m,G)),os(this.h,V),this.Ua&&Yt(v,"TYPE","init"),this.P?(Yt(v,"$req",p),Yt(v,"SID","null"),V.T=!0,Pn(V,v,null)):Pn(V,v,p),this.G=2}}else this.G==3&&(c?Lo(this,c):this.i.length==0||as(this.h)||Lo(this))};function Lo(c,p){var v;p?v=p.l:v=c.U++;const b=un(c.I);Yt(b,"SID",c.K),Yt(b,"RID",v),Yt(b,"AID",c.T),va(c,b),c.m&&c.o&&Re(b,c.m,c.o),v=new Ze(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=Ou(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),os(c.h,v),Pn(v,b,p)}function va(c,p){c.H&&At(c.H,function(v,b){Yt(p,b,v)}),c.l&&Oo({},function(v,b){Yt(p,b,v)})}function Ou(c,p,v){v=Math.min(c.i.length,v);var b=c.l?R(c.l.Na,c.l,c):null;t:{var V=c.i;let G=-1;for(;;){const st=["count="+v];G==-1?0<v?(G=V[0].g,st.push("ofs="+G)):G=0:st.push("ofs="+G);let Pt=!0;for(let Te=0;Te<v;Te++){let kt=V[Te].g;const Ce=V[Te].map;if(kt-=G,0>kt)G=Math.max(0,V[Te].g-100),Pt=!1;else try{$n(Ce,st,"req"+kt+"_")}catch{b&&b(Ce)}}if(Pt){b=st.join("&");break t}}}return c=c.i.splice(0,v),p.D=c,b}function Du(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ot||D(),pt||(ot(),pt=!0),jt.add(p,c),c.v=0}}function Vo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=pe(R(c.Fa,c),Uo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=pe(R(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),ms(this),xu(this))};function _a(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function xu(c){c.g=new Ze(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=un(c.qa);Yt(p,"RID","rpc"),Yt(p,"SID",c.K),Yt(p,"AID",c.T),Yt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Yt(p,"TO",c.ja),Yt(p,"TYPE","xmlhttp"),va(c,p),c.m&&c.o&&Re(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=fa(un(p)),v.m=null,v.P=!0,Ai(v,c)}r.Za=function(){this.C!=null&&(this.C=null,ms(this),Vo(this),ee(19))};function gs(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Nu(c,p){var v=null;if(c.g==p){gs(c),_a(c),c.g=null;var b=2}else if(Co(c.h,p))v=p.D,Je(c.h,p),b=1;else return;if(c.G!=0){if(p.o)if(b==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var V=c.B;b=ar(),Ft(b,new Ee(b,v)),ps(c)}else Du(c);else if(V=p.s,V==3||V==0&&0<p.X||!(b==1&&oh(c,p)||b==2&&Vo(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),V){case 1:Di(c,5);break;case 4:Di(c,10);break;case 3:Di(c,6);break;default:Di(c,2)}}}function Uo(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function Di(c,p){if(c.j.info("Error code "+p),p==2){var v=R(c.fb,c),b=c.Xa;const V=!b;b=new ge(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ca(b,"https"),fa(b),V?da(b.toString(),v):kn(b.toString(),v)}else ee(2);c.G=0,c.l&&c.l.sa(p),Mu(c),Iu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Mu(c){if(c.G=0,c.ka=[],c.l){const p=Io(c.h);(p.length!=0||c.i.length!=0)&&(q(c.ka,p),q(c.ka,c.i),c.h.i.length=0,W(c.i),c.i.length=0),c.l.ra()}}function Pu(c,p,v){var b=v instanceof ge?un(v):new ge(v);if(b.g!="")p&&(b.g=p+"."+b.g),cr(b,b.s);else{var V=m.location;b=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var G=new ge(null);b&&ca(G,b),p&&(G.g=p),V&&cr(G,V),v&&(G.l=v),b=G}return v=c.D,p=c.ya,v&&p&&Yt(b,v,p),Yt(b,"VER",c.la),va(c,b),b}function ku(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Ht(new fr({eb:v})):new Ht(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}r=Lu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ys(){}ys.prototype.g=function(c,p){return new tn(c,p)};function tn(c,p){oe.call(this),this.g=new ds(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!nt(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!nt(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ti(this)}P(tn,oe),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){ko(this.g)},tn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Mn(c),c=v);p.i.push(new Au(p.Ya++,c)),p.G==3&&ps(p)},tn.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,tn.aa.N.call(this)};function Vu(c){Ti.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const v in p){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}P(Vu,Ti);function Uu(){Ao.call(this),this.status=1}P(Uu,Ao);function ti(c){this.g=c}P(ti,Lu),ti.prototype.ua=function(){Ft(this.g,"a")},ti.prototype.ta=function(c){Ft(this.g,new Vu(c))},ti.prototype.sa=function(c){Ft(this.g,new Uu)},ti.prototype.ra=function(){Ft(this.g,"b")},ys.prototype.createWebChannel=ys.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,$T=function(){return new ys},XT=function(){return ar()},QT=Gn,Lm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},lr.NO_ERROR=0,lr.TIMEOUT=8,lr.HTTP_ERROR=6,tf=lr,bi.COMPLETE="complete",KT=bi,bo.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Ml=bo,Ht.prototype.listenOnce=Ht.prototype.L,Ht.prototype.getLastError=Ht.prototype.Ka,Ht.prototype.getLastErrorCode=Ht.prototype.Ba,Ht.prototype.getStatus=Ht.prototype.Z,Ht.prototype.getResponseJson=Ht.prototype.Oa,Ht.prototype.getResponseText=Ht.prototype.oa,Ht.prototype.send=Ht.prototype.ea,Ht.prototype.setWithCredentials=Ht.prototype.Ha,YT=Ht}).apply(typeof Bc<"u"?Bc:typeof self<"u"?self:typeof window<"u"?window:{});const d0="@firebase/firestore",m0="4.7.10";/**
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
 */let mo="11.5.0";/**
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
 */const qa=new _p("@firebase/firestore");function Ys(){return qa.logLevel}function ht(r,...t){if(qa.logLevel<=Mt.DEBUG){const n=t.map(Np);qa.debug(`Firestore (${mo}): ${r}`,...n)}}function Ga(r,...t){if(qa.logLevel<=Mt.ERROR){const n=t.map(Np);qa.error(`Firestore (${mo}): ${r}`,...n)}}function Uf(r,...t){if(qa.logLevel<=Mt.WARN){const n=t.map(Np);qa.warn(`Firestore (${mo}): ${r}`,...n)}}function Np(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Nt(r="Unexpected state"){const t=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+r;throw Ga(t),new Error(t)}function fe(r,t){r||Nt()}function Jt(r,t){return r}/**
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
 */class WT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class BI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HI{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){fe(this.o===void 0);let a=this.i;const o=g=>this.i!==a?(a=this.i,n(g)):Promise.resolve();let u=new Ua;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ua,t.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ua)}},0),h()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(a=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(fe(typeof a.accessToken=="string"),new WT(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return fe(t===null||typeof t=="string"),new Qe(t)}}class FI{constructor(t,n,a){this.l=t,this.h=n,this.P=a,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class qI{constructor(t,n,a){this.l=t,this.h=n,this.P=a}getToken(){return Promise.resolve(new FI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GI{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Nn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){fe(this.o===void 0);const a=u=>{u.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ht("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>a(u))};const o=u=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new p0(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new p0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let a=0;a<r;a++)n[a]=Math.floor(256*Math.random());return n}/**
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
 */function KI(){return new TextEncoder}/**
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
 */class ZT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=YI(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<n&&(a+=t.charAt(o[u]%62))}return a}}function Ut(r,t){return r<t?-1:r>t?1:0}function Vm(r,t){let n=0;for(;n<r.length&&n<t.length;){const a=r.codePointAt(n),o=t.codePointAt(n);if(a!==o){if(a<128&&o<128)return Ut(a,o);{const u=KI(),h=QI(u.encode(g0(r,n)),u.encode(g0(t,n)));return h!==0?h:Ut(a,o)}}n+=a>65535?2:1}return Ut(r.length,t.length)}function g0(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function QI(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Ut(r[n],t[n]);return Ut(r.length,t.length)}function io(r,t,n){return r.length===t.length&&r.every((a,o)=>n(a,t[o]))}/**
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
 */const y0=-62135596800,v0=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(t){return Me.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),a=Math.floor((t-1e3*n)*v0);return new Me(n,a)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<y0)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Tt(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/v0}_compareTo(t){return this.seconds===t.seconds?Ut(this.nanoseconds,t.nanoseconds):Ut(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-y0;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const _0="__name__";class oi{constructor(t,n,a){n===void 0?n=0:n>t.length&&Nt(),a===void 0?a=t.length-n:a>t.length-n&&Nt(),this.segments=t,this.offset=n,this.len=a}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(a=>{n.push(a)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,a=this.limit();n<a;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const a=Math.min(t.length,n.length);for(let o=0;o<a;o++){const u=oi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Ut(t.length,n.length)}static compareSegments(t,n){const a=oi.isNumericId(t),o=oi.isNumericId(n);return a&&!o?-1:!a&&o?1:a&&o?oi.extractNumericId(t).compare(oi.extractNumericId(n)):Vm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return xp.fromString(t.substring(4,t.length-2))}}class ce extends oi{construct(t,n,a){return new ce(t,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const a of t){if(a.indexOf("//")>=0)throw new Tt(rt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter(o=>o.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const XI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends oi{construct(t,n,a){return new He(t,n,a)}static isValidIdentifier(t){return XI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_0}static keyField(){return new He([_0])}static fromServerFormat(t){const n=[];let a="",o=0;const u=()=>{if(a.length===0)throw new Tt(rt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let h=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new Tt(rt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new Tt(rt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(a+=m,o++):(u(),o++)}if(u(),h)throw new Tt(rt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */const Yl=-1;function $I(r,t){const n=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,o=ie.fromTimestamp(a===1e9?new Me(n+1,0):new Me(n,a));return new Fr(o,wt.empty(),t)}function WI(r){return new Fr(r.readTime,r.key,Yl)}class Fr{constructor(t,n,a){this.readTime=t,this.documentKey=n,this.largestBatchId=a}static min(){return new Fr(ie.min(),wt.empty(),Yl)}static max(){return new Fr(ie.max(),wt.empty(),Yl)}}function ZI(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=wt.comparator(r.documentKey,t.documentKey),n!==0?n:Ut(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Mp(r){if(r.code!==rt.FAILED_PRECONDITION||r.message!==JI)throw r;ht("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class tt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Nt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new tt((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(a,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof tt?n:tt.resolve(n)}catch(n){return tt.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):tt.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):tt.reject(n)}static resolve(t){return new tt((n,a)=>{n(t)})}static reject(t){return new tt((n,a)=>{a(t)})}static waitFor(t){return new tt((n,a)=>{let o=0,u=0,h=!1;t.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&n()},g=>a(g))}),h=!0,u===o&&n()})}static or(t){let n=tt.resolve(!1);for(const a of t)n=n.next(o=>o?tt.resolve(o):a());return n}static forEach(t,n){const a=[];return t.forEach((o,u)=>{a.push(n.call(this,o,u))}),this.waitFor(a)}static mapArray(t,n){return new tt((a,o)=>{const u=t.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(t[y]).next(E=>{h[y]=E,++m,m===u&&a(h)},E=>o(E))}})}static doWhile(t,n){return new tt((a,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):a()};u()})}}function eO(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lu(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Pp{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=a=>this.oe(a),this._e=a=>n.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Pp.ae=-1;/**
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
 */const kp=-1;function Lp(r){return r==null}function pf(r){return r===0&&1/r==-1/0}function nO(r){return typeof r=="number"&&Number.isInteger(r)&&!pf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const JT="";function iO(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=E0(t)),t=rO(r.get(n),t);return E0(t)}function rO(r,t){let n=t;const a=r.length;for(let o=0;o<a;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case JT:n+="";break;default:n+=u}}return n}function E0(r){return r+JT+""}/**
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
 */function T0(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function po(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function tb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class on{constructor(t,n){this.comparator=t,this.root=n||je.EMPTY}insert(t,n){return new on(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new on(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(t){let n=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return n+a.left.size;o<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,a)=>(t(n,a),!1))}toString(){const t=[];return this.inorderTraversal((n,a)=>(t.push(`${n}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hc(this.root,t,this.comparator,!0)}}class Hc{constructor(t,n,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?a(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,n,a,o,u){this.key=t,this.value=n,this.color=a??je.RED,this.left=o??je.EMPTY,this.right=u??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,a,o,u){return new je(t??this.key,n??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,a),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let a,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return je.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Nt();const t=this.left.check();if(t!==this.right.check())throw Nt();return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Nt()}get value(){throw Nt()}get color(){throw Nt()}get left(){throw Nt()}get right(){throw Nt()}copy(t,n,a,o,u){return this}insert(t,n,a){return new je(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(t){this.comparator=t,this.data=new on(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,a)=>(t(n),!1))}forEachInRange(t,n){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new b0(this.data.getIterator())}getIteratorFrom(t){return new b0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(a=>{n=n.add(a)}),n}isEqual(t){if(!(t instanceof Fe)||this.size!==t.size)return!1;const n=this.data.getIterator(),a=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Fe(this.comparator);return n.data=t,n}}class b0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.fields=t,t.sort(He.comparator)}static empty(){return new Hn([])}unionWith(t){let n=new Fe(He.comparator);for(const a of this.fields)n=n.add(a);for(const a of t)n=n.add(a);return new Hn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return io(this.fields,t.fields,(n,a)=>n.isEqual(a))}}/**
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
 */class aO extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new aO("Invalid base64 string: "+u):u}}(t);return new gi(n)}static fromUint8Array(t){const n=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(t);return new gi(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const a=new Uint8Array(n.length);for(let o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ut(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gi.EMPTY_BYTE_STRING=new gi("");const sO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ya(r){if(fe(!!r),typeof r=="string"){let t=0;const n=sO.exec(r);if(fe(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Be(r.seconds),nanos:Be(r.nanos)}}function Be(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ro(r){return typeof r=="string"?gi.fromBase64String(r):gi.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="server_timestamp",nb="__type__",ib="__previous_value__",rb="__local_write_time__";function Vp(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[nb])===null||n===void 0?void 0:n.stringValue)===eb}function Up(r){const t=r.mapValue.fields[ib];return Vp(t)?Up(t):t}function gf(r){const t=Ya(r.mapValue.fields[rb].timestampValue);return new Me(t.seconds,t.nanos)}/**
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
 */class oO{constructor(t,n,a,o,u,h,m,g,y){this.databaseId=t,this.appId=n,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y}}const yf="(default)";class vf{constructor(t,n){this.projectId=t,this.database=n||yf}static empty(){return new vf("","")}get isDefaultDatabase(){return this.database===yf}isEqual(t){return t instanceof vf&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="__type__",lO="__max__",Fc={mapValue:{}},sb="__vector__",Um="value";function Ka(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Vp(r)?4:cO(r)?9007199254740991:uO(r)?10:11:Nt()}function yi(r,t){if(r===t)return!0;const n=Ka(r);if(n!==Ka(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return gf(r).isEqual(gf(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=Ya(o.timestampValue),m=Ya(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return ro(o.bytesValue).isEqual(ro(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return Be(o.geoPointValue.latitude)===Be(u.geoPointValue.latitude)&&Be(o.geoPointValue.longitude)===Be(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Be(o.integerValue)===Be(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Be(o.doubleValue),m=Be(u.doubleValue);return h===m?pf(h)===pf(m):isNaN(h)&&isNaN(m)}return!1}(r,t);case 9:return io(r.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(T0(h)!==T0(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!yi(h[g],m[g])))return!1;return!0}(r,t);default:return Nt()}}function Kl(r,t){return(r.values||[]).find(n=>yi(n,t))!==void 0}function ao(r,t){if(r===t)return 0;const n=Ka(r),a=Ka(t);if(n!==a)return Ut(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ut(r.booleanValue,t.booleanValue);case 2:return function(u,h){const m=Be(u.integerValue||u.doubleValue),g=Be(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return A0(r.timestampValue,t.timestampValue);case 4:return A0(gf(r),gf(t));case 5:return Vm(r.stringValue,t.stringValue);case 6:return function(u,h){const m=ro(u),g=ro(h);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let y=0;y<m.length&&y<g.length;y++){const E=Ut(m[y],g[y]);if(E!==0)return E}return Ut(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,h){const m=Ut(Be(u.latitude),Be(h.latitude));return m!==0?m:Ut(Be(u.longitude),Be(h.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return S0(r.arrayValue,t.arrayValue);case 10:return function(u,h){var m,g,y,E;const S=u.fields||{},R=h.fields||{},B=(m=S[Um])===null||m===void 0?void 0:m.arrayValue,P=(g=R[Um])===null||g===void 0?void 0:g.arrayValue,W=Ut(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=P==null?void 0:P.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:S0(B,P)}(r.mapValue,t.mapValue);case 11:return function(u,h){if(u===Fc.mapValue&&h===Fc.mapValue)return 0;if(u===Fc.mapValue)return 1;if(h===Fc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=h.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const R=Vm(g[S],E[S]);if(R!==0)return R;const B=ao(m[g[S]],y[E[S]]);if(B!==0)return B}return Ut(g.length,E.length)}(r.mapValue,t.mapValue);default:throw Nt()}}function A0(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ut(r,t);const n=Ya(r),a=Ya(t),o=Ut(n.seconds,a.seconds);return o!==0?o:Ut(n.nanos,a.nanos)}function S0(r,t){const n=r.values||[],a=t.values||[];for(let o=0;o<n.length&&o<a.length;++o){const u=ao(n[o],a[o]);if(u)return u}return Ut(n.length,a.length)}function so(r){return zm(r)}function zm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const a=Ya(n);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ro(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return wt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let a="[",o=!0;for(const u of n.values||[])o?o=!1:a+=",",a+=zm(u);return a+"]"}(r.arrayValue):"mapValue"in r?function(n){const a=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const h of a)u?u=!1:o+=",",o+=`${h}:${zm(n.fields[h])}`;return o+"}"}(r.mapValue):Nt()}function ef(r){switch(Ka(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Up(r);return t?16+ef(t):16;case 5:return 2*r.stringValue.length;case 6:return ro(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((o,u)=>o+ef(u),0)}(r.arrayValue);case 10:case 11:return function(a){let o=0;return po(a.fields,(u,h)=>{o+=u.length+ef(h)}),o}(r.mapValue);default:throw Nt()}}function jm(r){return!!r&&"integerValue"in r}function zp(r){return!!r&&"arrayValue"in r}function nf(r){return!!r&&"mapValue"in r}function uO(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ab])===null||n===void 0?void 0:n.stringValue)===sb}function Ll(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return po(r.mapValue.fields,(n,a)=>t.mapValue.fields[n]=Ll(a)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ll(r.arrayValue.values[n]);return t}return Object.assign({},r)}function cO(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===lO}/**
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
 */class Bn{constructor(t){this.value=t}static empty(){return new Bn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let a=0;a<t.length-1;++a)if(n=(n.mapValue.fields||{})[t.get(a)],!nf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ll(n)}setAll(t){let n=He.emptyPath(),a={},o=[];t.forEach((h,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,a,o),a={},o=[],n=m.popLast()}h?a[m.lastSegment()]=Ll(h):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,a,o)}delete(t){const n=this.field(t.popLast());nf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=n.mapValue.fields[t.get(a)];nf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(a)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,a){po(n,(o,u)=>t[o]=u);for(const o of a)delete t[o]}clone(){return new Bn(Ll(this.value))}}function ob(r){const t=[];return po(r.fields,(n,a)=>{const o=new He([n]);if(nf(a)){const u=ob(a.mapValue).fields;if(u.length===0)t.push(o);else for(const h of u)t.push(o.child(h))}else t.push(o)}),new Hn(t)}/**
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
 */class zn{constructor(t,n,a,o,u,h,m){this.key=t,this.documentType=n,this.version=a,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(t){return new zn(t,0,ie.min(),ie.min(),ie.min(),Bn.empty(),0)}static newFoundDocument(t,n,a,o){return new zn(t,1,n,ie.min(),a,o,0)}static newNoDocument(t,n){return new zn(t,2,n,ie.min(),ie.min(),Bn.empty(),0)}static newUnknownDocument(t,n){return new zn(t,3,n,ie.min(),ie.min(),Bn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof zn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new zn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _f{constructor(t,n){this.position=t,this.inclusive=n}}function w0(r,t,n){let a=0;for(let o=0;o<r.position.length;o++){const u=t[o],h=r.position[o];if(u.field.isKeyField()?a=wt.comparator(wt.fromName(h.referenceValue),n.key):a=ao(h,n.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function R0(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!yi(r.position[n],t.position[n]))return!1;return!0}/**
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
 */class Ef{constructor(t,n="asc"){this.field=t,this.dir=n}}function fO(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class lb{}class Ne extends lb{constructor(t,n,a){super(),this.field=t,this.op=n,this.value=a}static create(t,n,a){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,a):new dO(t,n,a):n==="array-contains"?new gO(t,a):n==="in"?new yO(t,a):n==="not-in"?new vO(t,a):n==="array-contains-any"?new _O(t,a):new Ne(t,n,a)}static createKeyFieldInFilter(t,n,a){return n==="in"?new mO(t,a):new pO(t,a)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ao(n,this.value)):n!==null&&Ka(this.value)===Ka(n)&&this.matchesComparison(ao(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Nt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qr extends lb{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new qr(t,n)}matches(t){return ub(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ub(r){return r.op==="and"}function cb(r){return hO(r)&&ub(r)}function hO(r){for(const t of r.filters)if(t instanceof qr)return!1;return!0}function Bm(r){if(r instanceof Ne)return r.field.canonicalString()+r.op.toString()+so(r.value);if(cb(r))return r.filters.map(t=>Bm(t)).join(",");{const t=r.filters.map(n=>Bm(n)).join(",");return`${r.op}(${t})`}}function fb(r,t){return r instanceof Ne?function(a,o){return o instanceof Ne&&a.op===o.op&&a.field.isEqual(o.field)&&yi(a.value,o.value)}(r,t):r instanceof qr?function(a,o){return o instanceof qr&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce((u,h,m)=>u&&fb(h,o.filters[m]),!0):!1}(r,t):void Nt()}function hb(r){return r instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`}(r):r instanceof qr?function(n){return n.op.toString()+" {"+n.getFilters().map(hb).join(" ,")+"}"}(r):"Filter"}class dO extends Ne{constructor(t,n,a){super(t,n,a),this.key=wt.fromName(a.referenceValue)}matches(t){const n=wt.comparator(t.key,this.key);return this.matchesComparison(n)}}class mO extends Ne{constructor(t,n){super(t,"in",n),this.keys=db("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class pO extends Ne{constructor(t,n){super(t,"not-in",n),this.keys=db("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function db(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(a=>wt.fromName(a.referenceValue))}class gO extends Ne{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return zp(n)&&Kl(n.arrayValue,this.value)}}class yO extends Ne{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class vO extends Ne{constructor(t,n){super(t,"not-in",n)}matches(t){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class _O extends Ne{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(a=>Kl(this.value.arrayValue,a))}}/**
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
 */class EO{constructor(t,n=null,a=[],o=[],u=null,h=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function C0(r,t=null,n=[],a=[],o=null,u=null,h=null){return new EO(r,t,n,a,o,u,h)}function jp(r){const t=Jt(r);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(a=>Bm(a)).join(","),n+="|ob:",n+=t.orderBy.map(a=>function(u){return u.field.canonicalString()+u.dir}(a)).join(","),Lp(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(a=>so(a)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(a=>so(a)).join(",")),t.le=n}return t.le}function Bp(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!fO(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!fb(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!R0(r.startAt,t.startAt)&&R0(r.endAt,t.endAt)}/**
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
 */class zf{constructor(t,n=null,a=[],o=[],u=null,h="F",m=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function TO(r,t,n,a,o,u,h,m){return new zf(r,t,n,a,o,u,h,m)}function bO(r){return new zf(r)}function I0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function AO(r){return r.collectionGroup!==null}function Vl(r){const t=Jt(r);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Fe(He.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new Ef(u,a))}),n.has(He.keyField().canonicalString())||t.he.push(new Ef(He.keyField(),a))}return t.he}function za(r){const t=Jt(r);return t.Pe||(t.Pe=SO(t,Vl(r))),t.Pe}function SO(r,t){if(r.limitType==="F")return C0(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ef(o.field,u)});const n=r.endAt?new _f(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new _f(r.startAt.position,r.startAt.inclusive):null;return C0(r.path,r.collectionGroup,t,r.filters,r.limit,n,a)}}function Hm(r,t,n){return new zf(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function mb(r,t){return Bp(za(r),za(t))&&r.limitType===t.limitType}function pb(r){return`${jp(za(r))}|lt:${r.limitType}`}function Ol(r){return`Query(target=${function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map(o=>hb(o)).join(", ")}]`),Lp(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map(o=>so(o)).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map(o=>so(o)).join(",")),`Target(${a})`}(za(r))}; limitType=${r.limitType})`}function Hp(r,t){return t.isFoundDocument()&&function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):wt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)}(r,t)&&function(a,o){for(const u of Vl(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(a,o){return!(a.startAt&&!function(h,m,g){const y=w0(h,m,g);return h.inclusive?y<=0:y<0}(a.startAt,Vl(a),o)||a.endAt&&!function(h,m,g){const y=w0(h,m,g);return h.inclusive?y>=0:y>0}(a.endAt,Vl(a),o))}(r,t)}function wO(r){return(t,n)=>{let a=!1;for(const o of Vl(r)){const u=RO(o,t,n);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function RO(r,t,n){const a=r.field.isKeyField()?wt.comparator(t.key,n.key):function(u,h,m){const g=h.data.field(u),y=m.data.field(u);return g!==null&&y!==null?ao(g,y):Nt()}(r.field,t,n);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return Nt()}}/**
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
 */class Za{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[n]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){po(this.inner,(n,a)=>{for(const[o,u]of a)t(o,u)})}isEmpty(){return tb(this.inner)}size(){return this.innerSize}}/**
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
 */const CO=new on(wt.comparator);function Tf(){return CO}const gb=new on(wt.comparator);function qc(...r){let t=gb;for(const n of r)t=t.insert(n.key,n);return t}function yb(r){let t=gb;return r.forEach((n,a)=>t=t.insert(n,a.overlayedDocument)),t}function La(){return Ul()}function vb(){return Ul()}function Ul(){return new Za(r=>r.toString(),(r,t)=>r.isEqual(t))}const IO=new on(wt.comparator),OO=new Fe(wt.comparator);function Xe(...r){let t=OO;for(const n of r)t=t.add(n);return t}const DO=new Fe(Ut);function xO(){return DO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pf(t)?"-0":t}}function _b(r){return{integerValue:""+r}}function NO(r,t){return nO(t)?_b(t):Fp(r,t)}/**
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
 */class jf{constructor(){this._=void 0}}function MO(r,t,n){return r instanceof bf?function(o,u){const h={fields:{[nb]:{stringValue:eb},[rb]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Vp(u)&&(u=Up(u)),u&&(h.fields[ib]=u),{mapValue:h}}(n,t):r instanceof Ql?Tb(r,t):r instanceof Xl?bb(r,t):function(o,u){const h=Eb(o,u),m=O0(h)+O0(o.Ie);return jm(h)&&jm(o.Ie)?_b(m):Fp(o.serializer,m)}(r,t)}function PO(r,t,n){return r instanceof Ql?Tb(r,t):r instanceof Xl?bb(r,t):n}function Eb(r,t){return r instanceof Af?function(a){return jm(a)||function(u){return!!u&&"doubleValue"in u}(a)}(t)?t:{integerValue:0}:null}class bf extends jf{}class Ql extends jf{constructor(t){super(),this.elements=t}}function Tb(r,t){const n=Ab(t);for(const a of r.elements)n.some(o=>yi(o,a))||n.push(a);return{arrayValue:{values:n}}}class Xl extends jf{constructor(t){super(),this.elements=t}}function bb(r,t){let n=Ab(t);for(const a of r.elements)n=n.filter(o=>!yi(o,a));return{arrayValue:{values:n}}}class Af extends jf{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function O0(r){return Be(r.integerValue||r.doubleValue)}function Ab(r){return zp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function kO(r,t){return r.field.isEqual(t.field)&&function(a,o){return a instanceof Ql&&o instanceof Ql||a instanceof Xl&&o instanceof Xl?io(a.elements,o.elements,yi):a instanceof Af&&o instanceof Af?yi(a.Ie,o.Ie):a instanceof bf&&o instanceof bf}(r.transform,t.transform)}class LO{constructor(t,n){this.version=t,this.transformResults=n}}class di{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new di}static exists(t){return new di(void 0,t)}static updateTime(t){return new di(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rf(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Bf{}function Sb(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Rb(r.key,di.none()):new uu(r.key,r.data,di.none());{const n=r.data,a=Bn.empty();let o=new Fe(He.comparator);for(let u of t.fields)if(!o.has(u)){let h=n.field(u);h===null&&u.length>1&&(u=u.popLast(),h=n.field(u)),h===null?a.delete(u):a.set(u,h),o=o.add(u)}return new Ja(r.key,a,new Hn(o.toArray()),di.none())}}function VO(r,t,n){r instanceof uu?function(o,u,h){const m=o.value.clone(),g=x0(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Ja?function(o,u,h){if(!rf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=x0(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(wb(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,t,n)}function zl(r,t,n,a){return r instanceof uu?function(u,h,m,g){if(!rf(u.precondition,h))return m;const y=u.value.clone(),E=N0(u.fieldTransforms,g,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,t,n,a):r instanceof Ja?function(u,h,m,g){if(!rf(u.precondition,h))return m;const y=N0(u.fieldTransforms,g,h),E=h.data;return E.setAll(wb(u)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,t,n,a):function(u,h,m){return rf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,t,n)}function UO(r,t){let n=null;for(const a of r.fieldTransforms){const o=t.data.field(a.field),u=Eb(a.transform,o||null);u!=null&&(n===null&&(n=Bn.empty()),n.set(a.field,u))}return n||null}function D0(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&io(a,o,(u,h)=>kO(u,h))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class uu extends Bf{constructor(t,n,a,o=[]){super(),this.key=t,this.value=n,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ja extends Bf{constructor(t,n,a,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function wb(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const a=r.data.field(n);t.set(n,a)}}),t}function x0(r,t,n){const a=new Map;fe(r.length===n.length);for(let o=0;o<n.length;o++){const u=r[o],h=u.transform,m=t.data.field(u.field);a.set(u.field,PO(h,m,n[o]))}return a}function N0(r,t,n){const a=new Map;for(const o of r){const u=o.transform,h=n.data.field(o.field);a.set(o.field,MO(u,h,t))}return a}class Rb extends Bf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zO extends Bf{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jO{constructor(t,n,a,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,n){const a=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&VO(u,t,a[o])}}applyToLocalView(t,n){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(n=zl(a,t,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(n=zl(a,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const a=vb();return this.mutations.forEach(o=>{const u=t.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=n.has(o.key)?null:m;const g=Sb(h,m);g!==null&&a.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ie.min())}),a}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Xe())}isEqual(t){return this.batchId===t.batchId&&io(this.mutations,t.mutations,(n,a)=>D0(n,a))&&io(this.baseMutations,t.baseMutations,(n,a)=>D0(n,a))}}class qp{constructor(t,n,a,o){this.batch=t,this.commitVersion=n,this.mutationResults=a,this.docVersions=o}static from(t,n,a){fe(t.mutations.length===a.length);let o=function(){return IO}();const u=t.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,a[h].version);return new qp(t,n,a,o)}}/**
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
 */class BO{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var _e,Vt;function HO(r){switch(r){case rt.OK:return Nt();case rt.CANCELLED:case rt.UNKNOWN:case rt.DEADLINE_EXCEEDED:case rt.RESOURCE_EXHAUSTED:case rt.INTERNAL:case rt.UNAVAILABLE:case rt.UNAUTHENTICATED:return!1;case rt.INVALID_ARGUMENT:case rt.NOT_FOUND:case rt.ALREADY_EXISTS:case rt.PERMISSION_DENIED:case rt.FAILED_PRECONDITION:case rt.ABORTED:case rt.OUT_OF_RANGE:case rt.UNIMPLEMENTED:case rt.DATA_LOSS:return!0;default:return Nt()}}function FO(r){if(r===void 0)return Ga("GRPC error has no .code"),rt.UNKNOWN;switch(r){case _e.OK:return rt.OK;case _e.CANCELLED:return rt.CANCELLED;case _e.UNKNOWN:return rt.UNKNOWN;case _e.DEADLINE_EXCEEDED:return rt.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return rt.RESOURCE_EXHAUSTED;case _e.INTERNAL:return rt.INTERNAL;case _e.UNAVAILABLE:return rt.UNAVAILABLE;case _e.UNAUTHENTICATED:return rt.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return rt.INVALID_ARGUMENT;case _e.NOT_FOUND:return rt.NOT_FOUND;case _e.ALREADY_EXISTS:return rt.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return rt.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return rt.FAILED_PRECONDITION;case _e.ABORTED:return rt.ABORTED;case _e.OUT_OF_RANGE:return rt.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return rt.UNIMPLEMENTED;case _e.DATA_LOSS:return rt.DATA_LOSS;default:return Nt()}}(Vt=_e||(_e={}))[Vt.OK=0]="OK",Vt[Vt.CANCELLED=1]="CANCELLED",Vt[Vt.UNKNOWN=2]="UNKNOWN",Vt[Vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vt[Vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vt[Vt.NOT_FOUND=5]="NOT_FOUND",Vt[Vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vt[Vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vt[Vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vt[Vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vt[Vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vt[Vt.ABORTED=10]="ABORTED",Vt[Vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vt[Vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vt[Vt.INTERNAL=13]="INTERNAL",Vt[Vt.UNAVAILABLE=14]="UNAVAILABLE",Vt[Vt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new xp([4294967295,4294967295],0);class qO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Fm(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function GO(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function YO(r,t){return Fm(r,t.toTimestamp())}function to(r){return fe(!!r),ie.fromTimestamp(function(n){const a=Ya(n);return new Me(a.seconds,a.nanos)}(r))}function Cb(r,t){return qm(r,t).canonicalString()}function qm(r,t){const n=function(o){return new ce(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function KO(r){const t=ce.fromString(r);return fe(eD(t)),t}function Gm(r,t){return Cb(r.databaseId,t.path)}function QO(r){const t=KO(r);return t.length===4?ce.emptyPath():$O(t)}function XO(r){return new ce(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $O(r){return fe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function M0(r,t,n){return{name:Gm(r,t),fields:n.value.mapValue.fields}}function WO(r,t){let n;if(t instanceof uu)n={update:M0(r,t.key,t.value)};else if(t instanceof Rb)n={delete:Gm(r,t.key)};else if(t instanceof Ja)n={update:M0(r,t.key,t.data),updateMask:tD(t.fieldMask)};else{if(!(t instanceof zO))return Nt();n={verify:Gm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(a=>function(u,h){const m=h.transform;if(m instanceof bf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ql)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Af)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw Nt()}(0,a))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:YO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Nt()}(r,t.precondition)),n}function ZO(r,t){return r&&r.length>0?(fe(t!==void 0),r.map(n=>function(o,u){let h=o.updateTime?to(o.updateTime):to(u);return h.isEqual(ie.min())&&(h=to(u)),new LO(h,o.transformResults||[])}(n,t))):[]}function JO(r){let t=QO(r.parent);const n=r.structuredQuery,a=n.from?n.from.length:0;let o=null;if(a>0){fe(a===1);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(S){const R=Ib(S);return R instanceof qr&&cb(R)?R.getFilters():[R]}(n.where));let h=[];n.orderBy&&(h=function(S){return S.map(R=>function(P){return new Ef(Ks(P.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(R))}(n.orderBy));let m=null;n.limit&&(m=function(S){let R;return R=typeof S=="object"?S.value:S,Lp(R)?null:R}(n.limit));let g=null;n.startAt&&(g=function(S){const R=!!S.before,B=S.values||[];return new _f(B,R)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const R=!S.before,B=S.values||[];return new _f(B,R)}(n.endAt)),TO(t,o,h,u,m,"F",g,y)}function Ib(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=Ks(n.unaryFilter.field);return Ne.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=Ks(n.unaryFilter.field);return Ne.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ks(n.unaryFilter.field);return Ne.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ks(n.unaryFilter.field);return Ne.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Nt()}}(r):r.fieldFilter!==void 0?function(n){return Ne.create(Ks(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Nt()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return qr.create(n.compositeFilter.filters.map(a=>Ib(a)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Nt()}}(n.compositeFilter.op))}(r):Nt()}function Ks(r){return He.fromServerFormat(r.fieldPath)}function tD(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function eD(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class nD{constructor(t){this.Tt=t}}function iD(r){const t=JO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Hm(t,t.limit,"L"):t}/**
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
 */class rD{constructor(){this.Tn=new aD}addToCollectionParentIndex(t,n){return this.Tn.add(n),tt.resolve()}getCollectionParents(t,n){return tt.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return tt.resolve()}deleteFieldIndex(t,n){return tt.resolve()}deleteAllFieldIndexes(t){return tt.resolve()}createTargetIndexes(t,n){return tt.resolve()}getDocumentsMatchingTarget(t,n){return tt.resolve(null)}getIndexType(t,n){return tt.resolve(0)}getFieldIndexes(t,n){return tt.resolve([])}getNextCollectionGroupToUpdate(t){return tt.resolve(null)}getMinOffset(t,n){return tt.resolve(Fr.min())}getMinOffsetFromCollectionGroup(t,n){return tt.resolve(Fr.min())}updateCollectionGroup(t,n,a){return tt.resolve()}updateIndexEntries(t,n){return tt.resolve()}}class aD{constructor(){this.index={}}add(t){const n=t.lastSegment(),a=t.popLast(),o=this.index[n]||new Fe(ce.comparator),u=!o.has(a);return this.index[n]=o.add(a),u}has(t){const n=t.lastSegment(),a=t.popLast(),o=this.index[n];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Fe(ce.comparator)).toArray()}}/**
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
 */const P0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ob=41943040;class sn{static withCacheSize(t){return new sn(t,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
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
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(Ob,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
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
 */class oo{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new oo(0)}static Kn(){return new oo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="LruGarbageCollector",sD=1048576;function L0([r,t],[n,a]){const o=Ut(r,n);return o===0?Ut(t,a):o}class oD{constructor(t){this.Hn=t,this.buffer=new Fe(L0),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();L0(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lD{constructor(t,n,a){this.garbageCollector=t,this.asyncQueue=n,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ht(k0,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){lu(n)?ht(k0,"Ignoring IndexedDB error during garbage collection: ",n):await Mp(n)}await this.er(3e5)})}}class uD{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(a=>Math.floor(n/100*a))}nthSequenceNumber(t,n){if(n===0)return tt.resolve(Pp.ae);const a=new oD(n);return this.tr.forEachTarget(t,o=>a.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>a.Zn(o))).next(()=>a.maxValue)}removeTargets(t,n,a){return this.tr.removeTargets(t,n,a)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ht("LruGarbageCollector","Garbage collection skipped; disabled"),tt.resolve(P0)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(ht("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),P0):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let a,o,u,h,m,g,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ht("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(a=S,m=Date.now(),this.removeTargets(t,a,n))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(t,a))).next(S=>(y=Date.now(),Ys()<=Mt.DEBUG&&ht("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),tt.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function cD(r,t){return new uD(r,t)}/**
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
 */class fD{constructor(){this.changes=new Za(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,zn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?tt.resolve(a):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class hD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class dD{constructor(t,n,a,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,n){let a=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(a=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(a!==null&&zl(a.mutation,o,Hn.empty(),Me.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.getLocalViewOfDocuments(t,a,Xe()).next(()=>a))}getLocalViewOfDocuments(t,n,a=Xe()){const o=La();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,a).next(u=>{let h=qc();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(t,n){const a=La();return this.populateOverlays(t,a,n).next(()=>this.computeViews(t,n,a,Xe()))}populateOverlays(t,n,a){const o=[];return a.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((h,m)=>{n.set(h,m)})})}computeViews(t,n,a,o){let u=Tf();const h=Ul(),m=function(){return Ul()}();return n.forEach((g,y)=>{const E=a.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ja)?u=u.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),zl(E.mutation,y,E.mutation.getFieldMask(),Me.now())):h.set(y.key,Hn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((y,E)=>h.set(y,E)),n.forEach((y,E)=>{var S;return m.set(y,new hD(E,(S=h.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(t,n){const a=Ul();let o=new on((h,m)=>h-m),u=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(h=>{for(const m of h)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let E=a.get(g)||Hn.empty();E=m.applyToLocalView(y,E),a.set(g,E);const S=(o.get(m.batchId)||Xe()).add(g);o=o.insert(m.batchId,S)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,E=g.value,S=vb();E.forEach(R=>{if(!u.has(R)){const B=Sb(n.get(R),a.get(R));B!==null&&S.set(R,B),u=u.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(t,y,S))}return tt.waitFor(h)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,n,a,o){return function(h){return wt.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):AO(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,a,o):this.getDocumentsMatchingCollectionQuery(t,n,a,o)}getNextDocuments(t,n,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,a,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,a.largestBatchId,o-u.size):tt.resolve(La());let m=Yl,g=u;return h.next(y=>tt.forEach(y,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?tt.resolve():this.remoteDocumentCache.getEntry(t,E).next(R=>{g=g.insert(E,R)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,g,y,Xe())).next(E=>({batchId:m,changes:yb(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new wt(n)).next(a=>{let o=qc();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,a,o){const u=n.collectionGroup;let h=qc();return this.indexManager.getCollectionParents(t,u).next(m=>tt.forEach(m,g=>{const y=function(S,R){return new zf(R,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,a,o).next(E=>{E.forEach((S,R)=>{h=h.insert(S,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(t,n,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,a.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,a,u,o))).next(h=>{u.forEach((g,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,zn.newInvalidDocument(E)))});let m=qc();return h.forEach((g,y)=>{const E=u.get(g);E!==void 0&&zl(E.mutation,y,Hn.empty(),Me.now()),Hp(n,y)&&(m=m.insert(g,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return tt.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:to(o.createTime)}}(n)),tt.resolve()}getNamedQuery(t,n){return tt.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:iD(o.bundledQuery),readTime:to(o.readTime)}}(n)),tt.resolve()}}/**
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
 */class pD{constructor(){this.overlays=new on(wt.comparator),this.Rr=new Map}getOverlay(t,n){return tt.resolve(this.overlays.get(n))}getOverlays(t,n){const a=La();return tt.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&a.set(o,u)})).next(()=>a)}saveOverlays(t,n,a){return a.forEach((o,u)=>{this.Et(t,n,u)}),tt.resolve()}removeOverlaysForBatchId(t,n,a){const o=this.Rr.get(a);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(a)),tt.resolve()}getOverlaysForCollection(t,n,a){const o=La(),u=n.length+1,h=new wt(n.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>a&&o.set(g.getKey(),g)}return tt.resolve(o)}getOverlaysForCollectionGroup(t,n,a,o){let u=new on((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>a){let E=u.get(y.largestBatchId);E===null&&(E=La(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=La(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return tt.resolve(m)}Et(t,n,a){const o=this.overlays.get(a.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(a.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(a.key,new BO(n,a));let u=this.Rr.get(n);u===void 0&&(u=Xe(),this.Rr.set(n,u)),this.Rr.set(n,u.add(a.key))}}/**
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
 */class gD{constructor(){this.sessionToken=gi.EMPTY_BYTE_STRING}getSessionToken(t){return tt.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,tt.resolve()}}/**
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
 */class Gp{constructor(){this.Vr=new Fe(xe.mr),this.gr=new Fe(xe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const a=new xe(t,n);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,n){t.forEach(a=>this.addReference(a,n))}removeReference(t,n){this.wr(new xe(t,n))}Sr(t,n){t.forEach(a=>this.removeReference(a,n))}br(t){const n=new wt(new ce([])),a=new xe(n,t),o=new xe(n,t+1),u=[];return this.gr.forEachInRange([a,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new wt(new ce([])),a=new xe(n,t),o=new xe(n,t+1);let u=Xe();return this.gr.forEachInRange([a,o],h=>{u=u.add(h.key)}),u}containsKey(t){const n=new xe(t,0),a=this.Vr.firstAfterOrEqual(n);return a!==null&&t.isEqual(a.key)}}class xe{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return wt.comparator(t.key,n.key)||Ut(t.Cr,n.Cr)}static pr(t,n){return Ut(t.Cr,n.Cr)||wt.comparator(t.key,n.key)}}/**
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
 */class yD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Fe(xe.mr)}checkEmpty(t){return tt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,a,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new jO(u,n,a,o);this.mutationQueue.push(h);for(const m of o)this.Mr=this.Mr.add(new xe(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return tt.resolve(h)}lookupMutationBatch(t,n){return tt.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const a=n+1,o=this.Nr(a),u=o<0?0:o;return tt.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return tt.resolve(this.mutationQueue.length===0?kp:this.Fr-1)}getAllMutationBatches(t){return tt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const a=new xe(n,0),o=new xe(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([a,o],h=>{const m=this.Or(h.Cr);u.push(m)}),tt.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let a=new Fe(Ut);return n.forEach(o=>{const u=new xe(o,0),h=new xe(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{a=a.add(m.Cr)})}),tt.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,n){const a=n.path,o=a.length+1;let u=a;wt.isDocumentKey(u)||(u=u.child(""));const h=new xe(new wt(u),0);let m=new Fe(Ut);return this.Mr.forEachWhile(g=>{const y=g.key.path;return!!a.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Cr)),!0)},h),tt.resolve(this.Br(m))}Br(t){const n=[];return t.forEach(a=>{const o=this.Or(a);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){fe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return tt.forEach(n.mutations,o=>{const u=new xe(o.key,n.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,n){const a=new xe(n,0),o=this.Mr.firstAfterOrEqual(a);return tt.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,tt.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vD{constructor(t){this.kr=t,this.docs=function(){return new on(wt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const a=n.key,o=this.docs.get(a),u=o?o.size:0,h=this.kr(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const a=this.docs.get(n);return tt.resolve(a?a.document.mutableCopy():zn.newInvalidDocument(n))}getEntries(t,n){let a=Tf();return n.forEach(o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():zn.newInvalidDocument(o))}),tt.resolve(a)}getDocumentsMatchingQuery(t,n,a,o){let u=Tf();const h=n.path,m=new wt(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||ZI(WI(E),a)<=0||(o.has(E.key)||Hp(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return tt.resolve(u)}getAllFromCollectionGroup(t,n,a,o){Nt()}qr(t,n){return tt.forEach(this.docs,a=>n(a))}newChangeBuffer(t){return new _D(this)}getSize(t){return tt.resolve(this.size)}}class _D extends fD{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((a,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(a)}),tt.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
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
 */class ED{constructor(t){this.persistence=t,this.Qr=new Za(n=>jp(n),Bp),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Gp,this.targetCount=0,this.Kr=oo.Un()}forEachTarget(t,n){return this.Qr.forEach((a,o)=>n(o)),tt.resolve()}getLastRemoteSnapshotVersion(t){return tt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return tt.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),tt.resolve(this.highestTargetId)}setTargetsMetadata(t,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this.$r&&(this.$r=n),tt.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new oo(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,tt.resolve()}updateTargetData(t,n){return this.zn(n),tt.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,tt.resolve()}removeTargets(t,n,a){let o=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=n&&a.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),tt.waitFor(u).next(()=>o)}getTargetCount(t){return tt.resolve(this.targetCount)}getTargetData(t,n){const a=this.Qr.get(n)||null;return tt.resolve(a)}addMatchingKeys(t,n,a){return this.Ur.yr(n,a),tt.resolve()}removeMatchingKeys(t,n,a){this.Ur.Sr(n,a);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(h=>{u.push(o.markPotentiallyOrphaned(t,h))}),tt.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),tt.resolve()}getMatchingKeysForTargetId(t,n){const a=this.Ur.vr(n);return tt.resolve(a)}containsKey(t,n){return tt.resolve(this.Ur.containsKey(n))}}/**
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
 */class Db{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Pp(0),this.zr=!1,this.zr=!0,this.jr=new gD,this.referenceDelegate=t(this),this.Hr=new ED(this),this.indexManager=new rD,this.remoteDocumentCache=function(o){return new vD(o)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new nD(n),this.Yr=new mD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new pD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let a=this.Wr[t.toKey()];return a||(a=new yD(n,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,a){ht("MemoryPersistence","Starting transaction:",t);const o=new TD(this.Gr.next());return this.referenceDelegate.Zr(),a(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return tt.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,n)))}}class TD extends tO{constructor(t){super(),this.currentSequenceNumber=t}}class Yp{constructor(t){this.persistence=t,this.ti=new Gp,this.ni=null}static ri(t){return new Yp(t)}get ii(){if(this.ni)return this.ni;throw Nt()}addReference(t,n,a){return this.ti.addReference(a,n),this.ii.delete(a.toString()),tt.resolve()}removeReference(t,n,a){return this.ti.removeReference(a,n),this.ii.add(a.toString()),tt.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),tt.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>a.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tt.forEach(this.ii,a=>{const o=wt.fromPath(a);return this.si(t,o).next(u=>{u||n.removeEntry(o,ie.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(a=>{a?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return tt.or([()=>tt.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Sf{constructor(t,n){this.persistence=t,this.oi=new Za(a=>iO(a.path),(a,o)=>a.isEqual(o)),this.garbageCollector=cD(this,n)}static ri(t,n){return new Sf(t,n)}Zr(){}Xr(t){return tt.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>n.next(o=>a+o))}sr(t){let n=0;return this.rr(t,a=>{n++}).next(()=>n)}rr(t,n){return tt.forEach(this.oi,(a,o)=>this.ar(t,a,o).next(u=>u?tt.resolve():n(o)))}removeTargets(t,n,a){return this.persistence.getTargetCache().removeTargets(t,n,a)}removeOrphanedDocuments(t,n){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,h=>this.ar(t,h,n).next(m=>{m||(a++,u.removeEntry(h,ie.min()))})).next(()=>u.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),tt.resolve()}removeTarget(t,n){const a=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,n,a){return this.oi.set(a,t.currentSequenceNumber),tt.resolve()}removeReference(t,n,a){return this.oi.set(a,t.currentSequenceNumber),tt.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),tt.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=ef(t.data.value)),n}ar(t,n,a){return tt.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return tt.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Kp{constructor(t,n,a,o){this.targetId=t,this.fromCache=n,this.Hi=a,this.Ji=o}static Yi(t,n){let a=Xe(),o=Xe();for(const u of n.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Kp(t,n.fromCache,a,o)}}/**
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
 */class bD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class AD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return oR()?8:eO($e())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,a,o){const u={result:null};return this.rs(t,n).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(t,n,o,a).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new bD;return this._s(t,n,h).next(m=>{if(u.result=m,this.Xi)return this.us(t,n,h,m.size)})}).next(()=>u.result)}us(t,n,a,o){return a.documentReadCount<this.es?(Ys()<=Mt.DEBUG&&ht("QueryEngine","SDK will not create cache indexes for query:",Ol(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),tt.resolve()):(Ys()<=Mt.DEBUG&&ht("QueryEngine","Query:",Ol(n),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.ts*o?(Ys()<=Mt.DEBUG&&ht("QueryEngine","The SDK decides to create cache indexes for query:",Ol(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,za(n))):tt.resolve())}rs(t,n){if(I0(n))return tt.resolve(null);let a=za(n);return this.indexManager.getIndexType(t,a).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Hm(n,null,"F"),a=za(n)),this.indexManager.getDocumentsMatchingTarget(t,a).next(u=>{const h=Xe(...u);return this.ns.getDocuments(t,h).next(m=>this.indexManager.getMinOffset(t,a).next(g=>{const y=this.cs(n,m);return this.ls(n,y,h,g.readTime)?this.rs(t,Hm(n,null,"F")):this.hs(t,y,n,g)}))})))}ss(t,n,a,o){return I0(n)||o.isEqual(ie.min())?tt.resolve(null):this.ns.getDocuments(t,a).next(u=>{const h=this.cs(n,u);return this.ls(n,h,a,o)?tt.resolve(null):(Ys()<=Mt.DEBUG&&ht("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ol(n)),this.hs(t,h,n,$I(o,Yl)).next(m=>m))})}cs(t,n){let a=new Fe(wO(t));return n.forEach((o,u)=>{Hp(t,u)&&(a=a.add(u))}),a}ls(t,n,a,o){if(t.limit===null)return!1;if(a.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,a){return Ys()<=Mt.DEBUG&&ht("QueryEngine","Using full collection scan to execute query:",Ol(n)),this.ns.getDocumentsMatchingQuery(t,n,Fr.min(),a)}hs(t,n,a,o){return this.ns.getDocumentsMatchingQuery(t,a,o).next(u=>(n.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD="LocalStore";class wD{constructor(t,n,a,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new on(Ut),this.Is=new Za(u=>jp(u),Bp),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function RD(r,t,n,a){return new wD(r,t,n,a)}async function xb(r,t){const n=Jt(r);return await n.persistence.runTransaction("Handle user change","readonly",a=>{let o;return n.mutationQueue.getAllMutationBatches(a).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(a))).next(u=>{const h=[],m=[];let g=Xe();for(const y of o){h.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(a,g).next(y=>({Rs:y,removedBatchIds:h,addedBatchIds:m}))})})}function CD(r,t){const n=Jt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const o=t.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,g,y,E){const S=y.batch,R=S.keys();let B=tt.resolve();return R.forEach(P=>{B=B.next(()=>E.getEntry(g,P)).next(W=>{const q=y.docVersions.get(P);fe(q!==null),W.version.compareTo(q)<0&&(S.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),E.addEntry(W)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,S))}(n,a,t,u).next(()=>u.apply(a)).next(()=>n.mutationQueue.performConsistencyCheck(a)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(m){let g=Xe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(t))).next(()=>n.localDocuments.getDocuments(a,o))})}function ID(r){const t=Jt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function OD(r,t){const n=Jt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=kp),n.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}class V0{constructor(){this.activeTargetIds=xO()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class DD{constructor(){this.ho=new V0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,a){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,a){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new V0,Promise.resolve()}handleUserChange(t,n,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class xD{To(t){}shutdown(){}}/**
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
 */const U0="ConnectivityMonitor";class z0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ht(U0,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ht(U0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gc=null;function Ym(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="RestConnection",ND={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MD{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${a}/databases/${o}`,this.wo=this.databaseId.database===yf?`project_id=${a}`:`project_id=${a}&database_id=${o}`}So(t,n,a,o,u){const h=Ym(),m=this.bo(t,n.toUriEncodedString());ht(dm,`Sending RPC '${t}' ${h}:`,m,a);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(t,m,g,a).then(y=>(ht(dm,`Received RPC '${t}' ${h}: `,y),y),y=>{throw Uf(dm,`RPC '${t}' ${h} failed with error: `,y,"url: ",m,"request:",a),y})}Co(t,n,a,o,u,h){return this.So(t,n,a,o,u)}Do(t,n,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),a&&a.headers.forEach((o,u)=>t[u]=o)}bo(t,n){const a=ND[t];return`${this.po}/v1/${n}:${a}`}terminate(){}}/**
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
 */class PD{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Ke="WebChannelConnection";class kD extends MD{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,a,o){const u=Ym();return new Promise((h,m)=>{const g=new YT;g.setWithCredentials(!0),g.listenOnce(KT.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case tf.NO_ERROR:const E=g.getResponseJson();ht(Ke,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),h(E);break;case tf.TIMEOUT:ht(Ke,`RPC '${t}' ${u} timed out`),m(new Tt(rt.DEADLINE_EXCEEDED,"Request time out"));break;case tf.HTTP_ERROR:const S=g.getStatus();if(ht(Ke,`RPC '${t}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const B=R==null?void 0:R.error;if(B&&B.status&&B.message){const P=function(q){const Y=q.toLowerCase().replace(/_/g,"-");return Object.values(rt).indexOf(Y)>=0?Y:rt.UNKNOWN}(B.status);m(new Tt(P,B.message))}else m(new Tt(rt.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new Tt(rt.UNAVAILABLE,"Connection failed."));break;default:Nt()}}finally{ht(Ke,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);ht(Ke,`RPC '${t}' ${u} sending request:`,o),g.send(n,"POST",y,a,15)})}Wo(t,n,a){const o=Ym(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],h=$T(),m=XT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,n,a),g.encodeInitMessageHeaders=!0;const E=u.join("");ht(Ke,`Creating RPC '${t}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);let R=!1,B=!1;const P=new PD({Fo:q=>{B?ht(Ke,`Not sending because RPC '${t}' stream ${o} is closed:`,q):(R||(ht(Ke,`Opening RPC '${t}' stream ${o} transport.`),S.open(),R=!0),ht(Ke,`RPC '${t}' stream ${o} sending:`,q),S.send(q))},Mo:()=>S.close()}),W=(q,Y,nt)=>{q.listen(Y,Z=>{try{nt(Z)}catch(ct){setTimeout(()=>{throw ct},0)}})};return W(S,Ml.EventType.OPEN,()=>{B||(ht(Ke,`RPC '${t}' stream ${o} transport opened.`),P.Qo())}),W(S,Ml.EventType.CLOSE,()=>{B||(B=!0,ht(Ke,`RPC '${t}' stream ${o} transport closed`),P.Uo())}),W(S,Ml.EventType.ERROR,q=>{B||(B=!0,Uf(Ke,`RPC '${t}' stream ${o} transport errored:`,q),P.Uo(new Tt(rt.UNAVAILABLE,"The operation could not be completed")))}),W(S,Ml.EventType.MESSAGE,q=>{var Y;if(!B){const nt=q.data[0];fe(!!nt);const Z=nt,ct=(Z==null?void 0:Z.error)||((Y=Z[0])===null||Y===void 0?void 0:Y.error);if(ct){ht(Ke,`RPC '${t}' stream ${o} received error:`,ct);const ut=ct.status;let At=function(A){const O=_e[A];if(O!==void 0)return FO(O)}(ut),x=ct.message;At===void 0&&(At=rt.INTERNAL,x="Unknown error status: "+ut+" with message "+ct.message),B=!0,P.Uo(new Tt(At,x)),S.close()}else ht(Ke,`RPC '${t}' stream ${o} received:`,nt),P.Ko(nt)}}),W(m,QT.STAT_EVENT,q=>{q.stat===Lm.PROXY?ht(Ke,`RPC '${t}' stream ${o} detected buffering proxy`):q.stat===Lm.NOPROXY&&ht(Ke,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function mm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(r){return new qO(r,!0)}/**
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
 */class Nb{constructor(t,n,a=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=a,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-a);o>0&&ht("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const j0="PersistentStream";class LD{constructor(t,n,a,o,u,h,m,g){this.Ti=t,this.n_=a,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Nb(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===rt.RESOURCE_EXHAUSTED?(Ga(n.toString()),Ga("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===rt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,o])=>{this.i_===n&&this.V_(a,o)},a=>{t(()=>{const o=new Tt(rt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(o)})})}V_(t,n){const a=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{a(()=>this.m_(o))}),this.stream.onMessage(o=>{a(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ht(j0,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(ht(j0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VD extends LD{constructor(t,n,a,o,u,h){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,a,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return fe(!!t.streamToken),this.lastStreamToken=t.streamToken,fe(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){fe(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=ZO(t.writeResults,t.commitTime),a=to(t.commitTime);return this.listener.v_(a,n)}C_(){const t={};t.database=XO(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(a=>WO(this.serializer,a))};this.I_(n)}}/**
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
 */class UD{}class zD extends UD{constructor(t,n,a,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=a,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new Tt(rt.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(t,qm(n,a),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Tt(rt.UNKNOWN,u.toString())})}Co(t,n,a,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(t,qm(n,a),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===rt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new Tt(rt.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class jD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */const cu="RemoteStore";class BD{constructor(t,n,a,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{a.enqueueAndForget(async()=>{hu(this)&&(ht(cu,"Restarting streams for network reachability change."),await async function(g){const y=Jt(g);y.W_.add(4),await fu(y),y.j_.set("Unknown"),y.W_.delete(4),await Ff(y)}(this))})}),this.j_=new jD(a,o)}}async function Ff(r){if(hu(r))for(const t of r.G_)await t(!0)}async function fu(r){for(const t of r.G_)await t(!1)}function hu(r){return Jt(r).W_.size===0}async function Mb(r,t,n){if(!lu(t))throw t;r.W_.add(1),await fu(r),r.j_.set("Offline"),n||(n=()=>ID(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ht(cu,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await Ff(r)})}function Pb(r,t){return t().catch(n=>Mb(r,n,t))}async function qf(r){const t=Jt(r),n=Gr(t);let a=t.U_.length>0?t.U_[t.U_.length-1].batchId:kp;for(;HD(t);)try{const o=await OD(t.localStore,a);if(o===null){t.U_.length===0&&n.P_();break}a=o.batchId,FD(t,o)}catch(o){await Mb(t,o)}kb(t)&&Lb(t)}function HD(r){return hu(r)&&r.U_.length<10}function FD(r,t){r.U_.push(t);const n=Gr(r);n.c_()&&n.S_&&n.b_(t.mutations)}function kb(r){return hu(r)&&!Gr(r).u_()&&r.U_.length>0}function Lb(r){Gr(r).start()}async function qD(r){Gr(r).C_()}async function GD(r){const t=Gr(r);for(const n of r.U_)t.b_(n.mutations)}async function YD(r,t,n){const a=r.U_.shift(),o=qp.from(a,t,n);await Pb(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await qf(r)}async function KD(r,t){t&&Gr(r).S_&&await async function(a,o){if(function(h){return HO(h)&&h!==rt.ABORTED}(o.code)){const u=a.U_.shift();Gr(a).h_(),await Pb(a,()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o)),await qf(a)}}(r,t),kb(r)&&Lb(r)}async function B0(r,t){const n=Jt(r);n.asyncQueue.verifyOperationInProgress(),ht(cu,"RemoteStore received new credentials");const a=hu(n);n.W_.add(3),await fu(n),a&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Ff(n)}async function QD(r,t){const n=Jt(r);t?(n.W_.delete(2),await Ff(n)):t||(n.W_.add(2),await fu(n),n.j_.set("Unknown"))}function Gr(r){return r.Y_||(r.Y_=function(n,a,o){const u=Jt(n);return u.M_(),new VD(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:qD.bind(null,r),Lo:KD.bind(null,r),D_:GD.bind(null,r),v_:YD.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await qf(r)):(await r.Y_.stop(),r.U_.length>0&&(ht(cu,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class Qp{constructor(t,n,a,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new Ua,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,a,o,u){const h=Date.now()+a,m=new Qp(t,n,h,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Tt(rt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vb(r,t){if(Ga("AsyncQueue",`${t}: ${r}`),lu(r))return new Tt(rt.UNAVAILABLE,`${t}: ${r}`);throw r}class XD{constructor(){this.queries=H0(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,a){const o=Jt(n),u=o.queries;o.queries=H0(),u.forEach((h,m)=>{for(const g of m.ta)g.onError(a)})})(this,new Tt(rt.ABORTED,"Firestore shutting down"))}}function H0(){return new Za(r=>pb(r),mb)}function $D(r){r.ia.forEach(t=>{t.next()})}var F0,q0;(q0=F0||(F0={}))._a="default",q0.Cache="cache";const WD="SyncEngine";class ZD{constructor(t,n,a,o,u,h){this.localStore=t,this.remoteStore=n,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new Za(m=>pb(m),mb),this.qa=new Map,this.Qa=new Set,this.$a=new on(wt.comparator),this.Ua=new Map,this.Ka=new Gp,this.Wa={},this.Ga=new Map,this.za=oo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function JD(r,t,n){const a=ix(r);try{const o=await function(h,m){const g=Jt(h),y=Me.now(),E=m.reduce((B,P)=>B.add(P.key),Xe());let S,R;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let P=Tf(),W=Xe();return g.ds.getEntries(B,E).next(q=>{P=q,P.forEach((Y,nt)=>{nt.isValidDocument()||(W=W.add(Y))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,P)).next(q=>{S=q;const Y=[];for(const nt of m){const Z=UO(nt,S.get(nt.key).overlayedDocument);Z!=null&&Y.push(new Ja(nt.key,Z,ob(Z.value.mapValue),di.exists(!0)))}return g.mutationQueue.addMutationBatch(B,y,Y,m)}).next(q=>{R=q;const Y=q.applyToLocalDocumentSet(S,W);return g.documentOverlayCache.saveOverlays(B,q.batchId,Y)})}).then(()=>({batchId:R.batchId,changes:yb(S)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let y=h.Wa[h.currentUser.toKey()];y||(y=new on(Ut)),y=y.insert(m,g),h.Wa[h.currentUser.toKey()]=y}(a,o.batchId,n),await Gf(a,o.changes),await qf(a.remoteStore)}catch(o){const u=Vb(o,"Failed to persist write");n.reject(u)}}function G0(r,t,n){const a=Jt(r);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const o=[];a.ka.forEach((u,h)=>{const m=h.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=Jt(h);g.onlineState=m;let y=!1;g.queries.forEach((E,S)=>{for(const R of S.ta)R.sa(m)&&(y=!0)}),y&&$D(g)}(a.eventManager,t),o.length&&a.La.p_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function tx(r,t){const n=Jt(r),a=t.batch.batchId;try{const o=await CD(n.localStore,t);zb(n,a,null),Ub(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await Gf(n,o)}catch(o){await Mp(o)}}async function ex(r,t,n){const a=Jt(r);try{const o=await function(h,m){const g=Jt(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return g.mutationQueue.lookupMutationBatch(y,m).next(S=>(fe(S!==null),E=S.keys(),g.mutationQueue.removeMutationBatch(y,S))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>g.localDocuments.getDocuments(y,E))})}(a.localStore,t);zb(a,t,n),Ub(a,t),a.sharedClientState.updateMutationState(t,"rejected",n),await Gf(a,o)}catch(o){await Mp(o)}}function Ub(r,t){(r.Ga.get(t)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(t)}function zb(r,t,n){const a=Jt(r);let o=a.Wa[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),a.Wa[a.currentUser.toKey()]=o}}async function Gf(r,t,n){const a=Jt(r),o=[],u=[],h=[];a.ka.isEmpty()||(a.ka.forEach((m,g)=>{h.push(a.Ha(g,t,n).then(y=>{var E;if((y||n)&&a.isPrimaryClient){const S=y?!y.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;a.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){o.push(y);const S=Kp.Yi(g.targetId,y);u.push(S)}}))}),await Promise.all(h),a.La.p_(o),await async function(g,y){const E=Jt(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>tt.forEach(y,R=>tt.forEach(R.Hi,B=>E.persistence.referenceDelegate.addReference(S,R.targetId,B)).next(()=>tt.forEach(R.Ji,B=>E.persistence.referenceDelegate.removeReference(S,R.targetId,B)))))}catch(S){if(!lu(S))throw S;ht(SD,"Failed to update sequence numbers: "+S)}for(const S of y){const R=S.targetId;if(!S.fromCache){const B=E.Ts.get(R),P=B.snapshotVersion,W=B.withLastLimboFreeSnapshotVersion(P);E.Ts=E.Ts.insert(R,W)}}}(a.localStore,u))}async function nx(r,t){const n=Jt(r);if(!n.currentUser.isEqual(t)){ht(WD,"User change. New user:",t.toKey());const a=await xb(n.localStore,t);n.currentUser=t,function(u,h){u.Ga.forEach(m=>{m.forEach(g=>{g.reject(new Tt(rt.CANCELLED,h))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Gf(n,a.Rs)}}function ix(r){const t=Jt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tx.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ex.bind(null,t),t}class wf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Hf(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return RD(this.persistence,new AD,t.initialUser,this.serializer)}Xa(t){return new Db(Yp.ri,this.serializer)}Za(t){return new DD}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wf.provider={build:()=>new wf};class rx extends wf{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){fe(this.persistence.referenceDelegate instanceof Sf);const a=this.persistence.referenceDelegate.garbageCollector;return new lD(a,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new Db(a=>Sf.ri(a,n),this.serializer)}}class Km{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>G0(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=nx.bind(null,this.syncEngine),await QD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new XD}()}createDatastore(t){const n=Hf(t.databaseInfo.databaseId),a=function(u){return new kD(u)}(t.databaseInfo);return function(u,h,m,g){return new zD(u,h,m,g)}(t.authCredentials,t.appCheckCredentials,a,n)}createRemoteStore(t){return function(a,o,u,h,m){return new BD(a,o,u,h,m)}(this.localStore,this.datastore,t.asyncQueue,n=>G0(this.syncEngine,n,0),function(){return z0.D()?new z0:new xD}())}createSyncEngine(t,n){return function(o,u,h,m,g,y,E){const S=new ZD(o,u,h,m,g,y);return E&&(S.ja=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=Jt(o);ht(cu,"RemoteStore shutting down."),u.W_.add(5),await fu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Km.provider={build:()=>new Km};/**
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
 */const Yr="FirestoreClient";class ax{constructor(t,n,a,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=ZT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,async h=>{ht(Yr,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(a,h=>(ht(Yr,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ua;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const a=Vb(n,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function pm(r,t){r.asyncQueue.verifyOperationInProgress(),ht(Yr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let a=n.initialUser;r.setCredentialChangeListener(async o=>{a.isEqual(o)||(await xb(t.localStore,o),a=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Y0(r,t){r.asyncQueue.verifyOperationInProgress();const n=await sx(r);ht(Yr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(a=>B0(t.remoteStore,a)),r.setAppCheckTokenChangeListener((a,o)=>B0(t.remoteStore,o)),r._onlineComponents=t}async function sx(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ht(Yr,"Using user provided OfflineComponentProvider");try{await pm(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===rt.FAILED_PRECONDITION||o.code===rt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Uf("Error using user provided cache. Falling back to memory cache: "+n),await pm(r,new wf)}}else ht(Yr,"Using default OfflineComponentProvider"),await pm(r,new rx(void 0));return r._offlineComponents}async function ox(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ht(Yr,"Using user provided OnlineComponentProvider"),await Y0(r,r._uninitializedComponentsProvider._online)):(ht(Yr,"Using default OnlineComponentProvider"),await Y0(r,new Km))),r._onlineComponents}function lx(r){return ox(r).then(t=>t.syncEngine)}/**
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
 */function jb(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Map;/**
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
 */function Bb(r,t,n){if(!n)throw new Tt(rt.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function ux(r,t,n,a){if(t===!0&&a===!0)throw new Tt(rt.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Q0(r){if(!wt.isDocumentKey(r))throw new Tt(rt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function X0(r){if(wt.isDocumentKey(r))throw new Tt(rt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Xp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Nt()}function Rf(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new Tt(rt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xp(r);throw new Tt(rt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="firestore.googleapis.com",$0=!0;class W0{constructor(t){var n,a;if(t.host===void 0){if(t.ssl!==void 0)throw new Tt(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hb,this.ssl=$0}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:$0;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ob;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<sD)throw new Tt(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ux("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jb((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new Tt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new Tt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new Tt(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,o){return a.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yf{constructor(t,n,a,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Tt(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Tt(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new jI;switch(a.type){case"firstParty":return new qI(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new Tt(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const a=K0.get(n);a&&(ht("ComponentProvider","Removing Datastore"),K0.delete(n),a.terminate())}(this),Promise.resolve()}}function cx(r,t,n,a={}){var o;const u=(r=Rf(r,Yf))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${n}`;u.host!==Hb&&u.host!==m&&Uf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:a});if(!ja(g,h)&&(r._setSettings(g),a.mockUserToken)){let y,E;if(typeof a.mockUserToken=="string")y=a.mockUserToken,E=Qe.MOCK_USER;else{y=tR(a.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=a.mockUserToken.sub||a.mockUserToken.user_id;if(!S)throw new Tt(rt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Qe(S)}r._authCredentials=new BI(new WT(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new $p(this.firestore,t,this._query)}}class mi{constructor(t,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mi(this.firestore,t,this._key)}}class Hr extends $p{constructor(t,n,a){super(t,n,bO(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mi(this.firestore,null,new wt(t))}withConverter(t){return new Hr(this.firestore,t,this._path)}}function fx(r,t,...n){if(r=yn(r),Bb("collection","path",t),r instanceof Yf){const a=ce.fromString(t,...n);return X0(a),new Hr(r,null,a)}{if(!(r instanceof mi||r instanceof Hr))throw new Tt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ce.fromString(t,...n));return X0(a),new Hr(r.firestore,null,a)}}function Fb(r,t,...n){if(r=yn(r),arguments.length===1&&(t=ZT.newId()),Bb("doc","path",t),r instanceof Yf){const a=ce.fromString(t,...n);return Q0(a),new mi(r,null,new wt(a))}{if(!(r instanceof mi||r instanceof Hr))throw new Tt(rt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ce.fromString(t,...n));return Q0(a),new mi(r.firestore,r instanceof Hr?r.converter:null,new wt(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="AsyncQueue";class J0{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Nb(this,"async_queue_retry"),this.Su=()=>{const a=mm();a&&ht(Z0,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=t;const n=mm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=mm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Ua;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!lu(t))throw t;ht(Z0,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(a);throw Ga("INTERNAL UNHANDLED ERROR: ",o),a}).then(a=>(this.pu=!1,a))));return this.bu=n,n}enqueueAfterDelay(t,n,a){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=Qp.createAndSchedule(this,t,n,a,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Nt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,a)=>n.targetTimeMs-a.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class Wp extends Yf{constructor(t,n,a,o){super(t,n,a,o),this.type="firestore",this._queue=new J0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new J0(t),this._firestoreClient=void 0,await t}}}function hx(r,t){const n=typeof r=="object"?r:lT(),a=typeof r=="string"?r:yf,o=Tp(n,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=Zw("firestore");u&&cx(o,...u)}return o}function dx(r){if(r._terminated)throw new Tt(rt.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||mx(r),r._firestoreClient}function mx(r){var t,n,a;const o=r._freezeSettings(),u=function(m,g,y,E){return new oO(m,g,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,jb(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((a=o.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new ax(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $l(gi.fromBase64String(t))}catch(n){throw new Tt(rt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $l(gi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Tt(rt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(t){this._methodName=t}}/**
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
 */class Yb{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Tt(rt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Tt(rt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ut(this._lat,t._lat)||Ut(this._long,t._long)}}/**
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
 */class Kb{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
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
 */const px=/^__.*__$/;class gx{constructor(t,n,a){this.data=t,this.fieldMask=n,this.fieldTransforms=a}toMutation(t,n){return this.fieldMask!==null?new Ja(t,this.data,this.fieldMask,n,this.fieldTransforms):new uu(t,this.data,n,this.fieldTransforms)}}function Qb(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Nt()}}class Zp{constructor(t,n,a,o,u,h){this.settings=t,this.databaseId=n,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Zp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:a,Qu:!1});return o.$u(t),o}Uu(t){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:a,Qu:!1});return o.Bu(),o}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Cf(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Qb(this.Lu)&&px.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class yx{constructor(t,n,a){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=a||Hf(t)}ju(t,n,a,o=!1){return new Zp({Lu:t,methodName:n,zu:a,path:He.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xb(r){const t=r._freezeSettings(),n=Hf(r._databaseId);return new yx(r._databaseId,!!t.ignoreUndefinedProperties,n)}function $b(r,t,n,a,o,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,t,n,o);tA("Data must be an object, but it was:",h,a);const m=Zb(a,h);let g,y;if(u.merge)g=new Hn(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const R=vx(t,S,n);if(!h.contains(R))throw new Tt(rt.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Tx(E,R)||E.push(R)}g=new Hn(E),y=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,y=h.fieldTransforms;return new gx(new Bn(m),g,y)}function Wb(r,t){if(Jb(r=yn(r)))return tA("Unsupported field value:",t,r),Zb(r,t);if(r instanceof Gb)return function(a,o){if(!Qb(o.Lu))throw o.Wu(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,o){const u=[];let h=0;for(const m of a){let g=Wb(m,o.Ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,t)}return function(a,o){if((a=yn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return NO(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=Me.fromDate(a);return{timestampValue:Fm(o.serializer,u)}}if(a instanceof Me){const u=new Me(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Fm(o.serializer,u)}}if(a instanceof Yb)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof $l)return{bytesValue:GO(o.serializer,a._byteString)};if(a instanceof mi){const u=o.databaseId,h=a.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Cb(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof Kb)return function(h,m){return{mapValue:{fields:{[ab]:{stringValue:sb},[Um]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return Fp(m.serializer,y)})}}}}}}(a,o);throw o.Wu(`Unsupported field value: ${Xp(a)}`)}(r,t)}function Zb(r,t){const n={};return tb(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):po(r,(a,o)=>{const u=Wb(o,t.qu(a));u!=null&&(n[a]=u)}),{mapValue:{fields:n}}}function Jb(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Me||r instanceof Yb||r instanceof $l||r instanceof mi||r instanceof Gb||r instanceof Kb)}function tA(r,t,n){if(!Jb(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const a=Xp(n);throw a==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+a)}}function vx(r,t,n){if((t=yn(t))instanceof qb)return t._internalPath;if(typeof t=="string")return Ex(r,t);throw Cf("Field path arguments must be of type string or ",r,!1,void 0,n)}const _x=new RegExp("[~\\*/\\[\\]]");function Ex(r,t,n){if(t.search(_x)>=0)throw Cf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new qb(...t.split("."))._internalPath}catch{throw Cf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Cf(r,t,n,a,o){const u=a&&!a.isEmpty(),h=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${a}`),h&&(g+=` in document ${o}`),g+=")"),new Tt(rt.INVALID_ARGUMENT,m+r+g)}function Tx(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(r,t,n){let a;return a=r?r.toFirestore(t):t,a}function bx(r,t,n){r=Rf(r,mi);const a=Rf(r.firestore,Wp),o=eA(r.converter,t);return nA(a,[$b(Xb(a),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,di.none())])}function Ax(r,t){const n=Rf(r.firestore,Wp),a=Fb(r),o=eA(r.converter,t);return nA(n,[$b(Xb(r.firestore),"addDoc",a._key,o,r.converter!==null,{}).toMutation(a._key,di.exists(!1))]).then(()=>a)}function nA(r,t){return function(a,o){const u=new Ua;return a.asyncQueue.enqueueAndForget(async()=>JD(await lx(a),o,u)),u.promise}(dx(r),t)}(function(t,n=!0){(function(o){mo=o})(fo),no(new Ba("firestore",(a,{instanceIdentifier:o,options:u})=>{const h=a.getProvider("app").getImmediate(),m=new Wp(new HI(a.getProvider("auth-internal")),new GI(h,a.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new Tt(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vf(y.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Br(d0,m0,t),Br(d0,m0,"esm2017")})();const Sx={apiKey:"AIzaSyALi3aD4f5MLqlRbL-sk2s2ReSgoxc6sW8",authDomain:"projeto-pet-746d8.firebaseapp.com",projectId:"projeto-pet-746d8",storageBucket:"projeto-pet-746d8.firebasestorage.app",messagingSenderId:"618638980041",appId:"1:618638980041:web:1b6c597b9c6e49bd156e18",measurementId:"G-4QVDJS3EVX"},iA=oT(Sx),Jp=UI(iA),rA=hx(iA);function wx(){const[r,t]=K.useState(!1),[n,a]=K.useState(window.innerWidth<=768),[o,u]=K.useState(null);return K.useEffect(()=>{const h=()=>{a(window.innerWidth<=768),window.innerWidth>n&&t(!1)};return window.addEventListener("resize",h),()=>window.addEventListener("resize",h)},[]),K.useEffect(()=>{const h=CC(Jp,m=>{u(m)});return()=>h()},[]),U.jsxs("header",{children:[U.jsxs("div",{className:"container-principal",children:[U.jsx("div",{className:"container-logo",children:U.jsx(jn,{to:"/",onClick:()=>t(!1),children:U.jsx("img",{src:T1,alt:""})})}),n&&U.jsx("div",{className:"menu-icon",onClick:()=>t(!r),children:"☰"}),!n&&U.jsx("nav",{className:`container-menu ${r?"menu-aberto":""}`,children:U.jsxs("ul",{children:[U.jsx("li",{children:"teste"}),U.jsx("li",{children:"teste"}),U.jsx("li",{children:"teste"})]})}),!n&&!o&&U.jsxs("div",{className:`container-cadastro ${r?"menu-aberto":""}`,children:[U.jsx(jn,{to:"/Login",children:U.jsx("button",{children:"Login"})}),U.jsx(jn,{to:"/CadastroUsuario",children:U.jsx("button",{children:"cadastre-se"})})]})]}),r&&n&&U.jsxs("div",{className:"menu-mobile",children:[U.jsxs("ul",{children:[U.jsx("li",{children:"teste"}),U.jsx("li",{children:"teste"}),U.jsx("li",{children:"teste"})]}),!o&&U.jsxs("div",{className:"cadastro-mobile",children:[U.jsx("div",{children:U.jsx(jn,{to:"/Login",onClick:()=>t(!1),children:U.jsx("button",{type:"button",children:"Login"})})}),U.jsx("div",{children:U.jsx(jn,{to:"/CadastroUsuario",onClick:()=>t(!1),children:U.jsx("button",{children:"Cadastre-se"})})})]})]})]})}const Rx="/assets/d593b70d-edae-41df-9635-ffdba9cdcc01-corrigido-1xO3LZOC.jpg",Cx="/assets/a5ceef26-0a61-4af3-b0c9-f50f87506a71-corrigido-D6iQq9J2.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Ix(r,t,n){return(t=Dx(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function tE(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,a)}return n}function it(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tE(Object(n),!0).forEach(function(a){Ix(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):tE(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function Ox(r,t){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Dx(r){var t=Ox(r,"string");return typeof t=="symbol"?t:t+""}const eE=()=>{};let tg={},aA={},sA=null,oA={mark:eE,measure:eE};try{typeof window<"u"&&(tg=window),typeof document<"u"&&(aA=document),typeof MutationObserver<"u"&&(sA=MutationObserver),typeof performance<"u"&&(oA=performance)}catch{}const{userAgent:nE=""}=tg.navigator||{},Kr=tg,te=aA,iE=sA,Yc=oA;Kr.document;const ir=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",lA=~nE.indexOf("MSIE")||~nE.indexOf("Trident/");var xx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Nx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,uA={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Mx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},cA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],We="classic",Kf="duotone",Px="sharp",kx="sharp-duotone",fA=[We,Kf,Px,kx],Lx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Vx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ux=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},jx=["fak","fa-kit","fakd","fa-kit-duotone"],rE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Bx=["kit"],Hx={kit:{"fa-kit":"fak"}},Fx=["fak","fakd"],qx={kit:{fak:"fa-kit"}},aE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Kc={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Yx=["fak","fa-kit","fakd","fa-kit-duotone"],Kx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Xx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Qm={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$x=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Xm=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Gx,...$x],Wx=["solid","regular","light","thin","duotone","brands"],hA=[1,2,3,4,5,6,7,8,9,10],Zx=hA.concat([11,12,13,14,15,16,17,18,19,20]),Jx=[...Object.keys(Xx),...Wx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Kc.GROUP,Kc.SWAP_OPACITY,Kc.PRIMARY,Kc.SECONDARY].concat(hA.map(r=>"".concat(r,"x"))).concat(Zx.map(r=>"w-".concat(r))),tN={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Ji="___FONT_AWESOME___",$m=16,dA="fa",mA="svg-inline--fa",Qa="data-fa-i2svg",Wm="data-fa-pseudo-element",eN="data-fa-pseudo-element-pending",eg="data-prefix",ng="data-icon",sE="fontawesome-i2svg",nN="async",iN=["HTML","HEAD","STYLE","SCRIPT"],pA=(()=>{try{return!0}catch{return!1}})();function du(r){return new Proxy(r,{get(t,n){return n in t?t[n]:t[We]}})}const gA=it({},uA);gA[We]=it(it(it(it({},{"fa-duotone":"duotone"}),uA[We]),rE.kit),rE["kit-duotone"]);const rN=du(gA),Zm=it({},zx);Zm[We]=it(it(it(it({},{duotone:"fad"}),Zm[We]),aE.kit),aE["kit-duotone"]);const oE=du(Zm),Jm=it({},Qm);Jm[We]=it(it({},Jm[We]),qx.kit);const ig=du(Jm),tp=it({},Qx);tp[We]=it(it({},tp[We]),Hx.kit);du(tp);const aN=xx,yA="fa-layers-text",sN=Nx,oN=it({},Lx);du(oN);const lN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gm=Mx,uN=[...Bx,...Jx],jl=Kr.FontAwesomeConfig||{};function cN(r){var t=te.querySelector("script["+r+"]");if(t)return t.getAttribute(r)}function fN(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}te&&typeof te.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const o=fN(cN(n));o!=null&&(jl[a]=o)});const vA={styleDefault:"solid",familyDefault:We,cssPrefix:dA,replacementClass:mA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jl.familyPrefix&&(jl.cssPrefix=jl.familyPrefix);const lo=it(it({},vA),jl);lo.autoReplaceSvg||(lo.observeMutations=!1);const dt={};Object.keys(vA).forEach(r=>{Object.defineProperty(dt,r,{enumerable:!0,set:function(t){lo[r]=t,Bl.forEach(n=>n(dt))},get:function(){return lo[r]}})});Object.defineProperty(dt,"familyPrefix",{enumerable:!0,set:function(r){lo.cssPrefix=r,Bl.forEach(t=>t(dt))},get:function(){return lo.cssPrefix}});Kr.FontAwesomeConfig=dt;const Bl=[];function hN(r){return Bl.push(r),()=>{Bl.splice(Bl.indexOf(r),1)}}const Pr=$m,ui={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dN(r){if(!r||!ir)return;const t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=r;const n=te.head.childNodes;let a=null;for(let o=n.length-1;o>-1;o--){const u=n[o],h=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(a=u)}return te.head.insertBefore(t,a),r}const mN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Wl(){let r=12,t="";for(;r-- >0;)t+=mN[Math.random()*62|0];return t}function go(r){const t=[];for(let n=(r||[]).length>>>0;n--;)t[n]=r[n];return t}function rg(r){return r.classList?go(r.classList):(r.getAttribute("class")||"").split(" ").filter(t=>t)}function _A(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pN(r){return Object.keys(r||{}).reduce((t,n)=>t+"".concat(n,'="').concat(_A(r[n]),'" '),"").trim()}function Qf(r){return Object.keys(r||{}).reduce((t,n)=>t+"".concat(n,": ").concat(r[n].trim(),";"),"")}function ag(r){return r.size!==ui.size||r.x!==ui.x||r.y!==ui.y||r.rotate!==ui.rotate||r.flipX||r.flipY}function gN(r){let{transform:t,containerWidth:n,iconWidth:a}=r;const o={transform:"translate(".concat(n/2," 256)")},u="translate(".concat(t.x*32,", ").concat(t.y*32,") "),h="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),m="rotate(".concat(t.rotate," 0 0)"),g={transform:"".concat(u," ").concat(h," ").concat(m)},y={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:g,path:y}}function yN(r){let{transform:t,width:n=$m,height:a=$m,startCentered:o=!1}=r,u="";return o&&lA?u+="translate(".concat(t.x/Pr-n/2,"em, ").concat(t.y/Pr-a/2,"em) "):o?u+="translate(calc(-50% + ".concat(t.x/Pr,"em), calc(-50% + ").concat(t.y/Pr,"em)) "):u+="translate(".concat(t.x/Pr,"em, ").concat(t.y/Pr,"em) "),u+="scale(".concat(t.size/Pr*(t.flipX?-1:1),", ").concat(t.size/Pr*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var vN=`:root, :host {
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
}`;function EA(){const r=dA,t=mA,n=dt.cssPrefix,a=dt.replacementClass;let o=vN;if(n!==r||a!==t){const u=new RegExp("\\.".concat(r,"\\-"),"g"),h=new RegExp("\\--".concat(r,"\\-"),"g"),m=new RegExp("\\.".concat(t),"g");o=o.replace(u,".".concat(n,"-")).replace(h,"--".concat(n,"-")).replace(m,".".concat(a))}return o}let lE=!1;function ym(){dt.autoAddCss&&!lE&&(dN(EA()),lE=!0)}var _N={mixout(){return{dom:{css:EA,insertCss:ym}}},hooks(){return{beforeDOMElementCreation(){ym()},beforeI2svg(){ym()}}}};const tr=Kr||{};tr[Ji]||(tr[Ji]={});tr[Ji].styles||(tr[Ji].styles={});tr[Ji].hooks||(tr[Ji].hooks={});tr[Ji].shims||(tr[Ji].shims=[]);var ci=tr[Ji];const TA=[],bA=function(){te.removeEventListener("DOMContentLoaded",bA),If=1,TA.map(r=>r())};let If=!1;ir&&(If=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),If||te.addEventListener("DOMContentLoaded",bA));function EN(r){ir&&(If?setTimeout(r,0):TA.push(r))}function mu(r){const{tag:t,attributes:n={},children:a=[]}=r;return typeof r=="string"?_A(r):"<".concat(t," ").concat(pN(n),">").concat(a.map(mu).join(""),"</").concat(t,">")}function uE(r,t,n){if(r&&r[t]&&r[t][n])return{prefix:t,iconName:n,icon:r[t][n]}}var vm=function(t,n,a,o){var u=Object.keys(t),h=u.length,m=n,g,y,E;for(a===void 0?(g=1,E=t[u[0]]):(g=0,E=a);g<h;g++)y=u[g],E=m(E,t[y],y,t);return E};function TN(r){const t=[];let n=0;const a=r.length;for(;n<a;){const o=r.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const u=r.charCodeAt(n++);(u&64512)==56320?t.push(((o&1023)<<10)+(u&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function ep(r){const t=TN(r);return t.length===1?t[0].toString(16):null}function bN(r,t){const n=r.length;let a=r.charCodeAt(t),o;return a>=55296&&a<=56319&&n>t+1&&(o=r.charCodeAt(t+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function cE(r){return Object.keys(r).reduce((t,n)=>{const a=r[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function np(r,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,o=cE(t);typeof ci.hooks.addPack=="function"&&!a?ci.hooks.addPack(r,cE(t)):ci.styles[r]=it(it({},ci.styles[r]||{}),o),r==="fas"&&np("fa",t)}const{styles:Zl,shims:AN}=ci,AA=Object.keys(ig),SN=AA.reduce((r,t)=>(r[t]=Object.keys(ig[t]),r),{});let sg=null,SA={},wA={},RA={},CA={},IA={};function wN(r){return~uN.indexOf(r)}function RN(r,t){const n=t.split("-"),a=n[0],o=n.slice(1).join("-");return a===r&&o!==""&&!wN(o)?o:null}const OA=()=>{const r=a=>vm(Zl,(o,u,h)=>(o[h]=vm(u,a,{}),o),{});SA=r((a,o,u)=>(o[3]&&(a[o[3]]=u),o[2]&&o[2].filter(m=>typeof m=="number").forEach(m=>{a[m.toString(16)]=u}),a)),wA=r((a,o,u)=>(a[u]=u,o[2]&&o[2].filter(m=>typeof m=="string").forEach(m=>{a[m]=u}),a)),IA=r((a,o,u)=>{const h=o[2];return a[u]=u,h.forEach(m=>{a[m]=u}),a});const t="far"in Zl||dt.autoFetchSvg,n=vm(AN,(a,o)=>{const u=o[0];let h=o[1];const m=o[2];return h==="far"&&!t&&(h="fas"),typeof u=="string"&&(a.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(a.unicodes[u.toString(16)]={prefix:h,iconName:m}),a},{names:{},unicodes:{}});RA=n.names,CA=n.unicodes,sg=Xf(dt.styleDefault,{family:dt.familyDefault})};hN(r=>{sg=Xf(r.styleDefault,{family:dt.familyDefault})});OA();function og(r,t){return(SA[r]||{})[t]}function CN(r,t){return(wA[r]||{})[t]}function Va(r,t){return(IA[r]||{})[t]}function DA(r){return RA[r]||{prefix:null,iconName:null}}function IN(r){const t=CA[r],n=og("fas",r);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qr(){return sg}const xA=()=>({prefix:null,iconName:null,rest:[]});function ON(r){let t=We;const n=AA.reduce((a,o)=>(a[o]="".concat(dt.cssPrefix,"-").concat(o),a),{});return fA.forEach(a=>{(r.includes(n[a])||r.some(o=>SN[a].includes(o)))&&(t=a)}),t}function Xf(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=We}=t,a=rN[n][r];if(n===Kf&&!r)return"fad";const o=oE[n][r]||oE[n][a],u=r in ci.styles?r:null;return o||u||null}function DN(r){let t=[],n=null;return r.forEach(a=>{const o=RN(dt.cssPrefix,a);o?n=o:a&&t.push(a)}),{iconName:n,rest:t}}function fE(r){return r.sort().filter((t,n,a)=>a.indexOf(t)===n)}function $f(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const o=Xm.concat(Yx),u=fE(r.filter(S=>o.includes(S))),h=fE(r.filter(S=>!Xm.includes(S))),m=u.filter(S=>(a=S,!cA.includes(S))),[g=null]=m,y=ON(u),E=it(it({},DN(h)),{},{prefix:Xf(g,{family:y})});return it(it(it({},E),PN({values:r,family:y,styles:Zl,config:dt,canonical:E,givenPrefix:a})),xN(n,a,E))}function xN(r,t,n){let{prefix:a,iconName:o}=n;if(r||!a||!o)return{prefix:a,iconName:o};const u=t==="fa"?DA(o):{},h=Va(a,o);return o=u.iconName||h||o,a=u.prefix||a,a==="far"&&!Zl.far&&Zl.fas&&!dt.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}const NN=fA.filter(r=>r!==We||r!==Kf),MN=Object.keys(Qm).filter(r=>r!==We).map(r=>Object.keys(Qm[r])).flat();function PN(r){const{values:t,family:n,canonical:a,givenPrefix:o="",styles:u={},config:h={}}=r,m=n===Kf,g=t.includes("fa-duotone")||t.includes("fad"),y=h.familyDefault==="duotone",E=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(g||y||E)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&NN.includes(n)&&(Object.keys(u).find(R=>MN.includes(R))||h.autoFetchSvg)){const R=Ux.get(n).defaultShortPrefixId;a.prefix=R,a.iconName=Va(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=Qr()||"fas"),a}class kN{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(u=>{this.definitions[u]=it(it({},this.definitions[u]||{}),o[u]),np(u,o[u]);const h=ig[We][u];h&&np(h,o[u]),OA()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(o=>{const{prefix:u,iconName:h,icon:m}=a[o],g=m[2];t[u]||(t[u]={}),g.length>0&&g.forEach(y=>{typeof y=="string"&&(t[u][y]=m)}),t[u][h]=m}),t}}let hE=[],Xs={};const eo={},LN=Object.keys(eo);function VN(r,t){let{mixoutsTo:n}=t;return hE=r,Xs={},Object.keys(eo).forEach(a=>{LN.indexOf(a)===-1&&delete eo[a]}),hE.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(u=>{typeof o[u]=="function"&&(n[u]=o[u]),typeof o[u]=="object"&&Object.keys(o[u]).forEach(h=>{n[u]||(n[u]={}),n[u][h]=o[u][h]})}),a.hooks){const u=a.hooks();Object.keys(u).forEach(h=>{Xs[h]||(Xs[h]=[]),Xs[h].push(u[h])})}a.provides&&a.provides(eo)}),n}function ip(r,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return(Xs[r]||[]).forEach(h=>{t=h.apply(null,[t,...a])}),t}function Xa(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(Xs[r]||[]).forEach(u=>{u.apply(null,n)})}function Xr(){const r=arguments[0],t=Array.prototype.slice.call(arguments,1);return eo[r]?eo[r].apply(null,t):void 0}function rp(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:t}=r;const n=r.prefix||Qr();if(t)return t=Va(n,t)||t,uE(NA.definitions,n,t)||uE(ci.styles,n,t)}const NA=new kN,UN=()=>{dt.autoReplaceSvg=!1,dt.observeMutations=!1,Xa("noAuto")},zN={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ir?(Xa("beforeI2svg",r),Xr("pseudoElements2svg",r),Xr("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=r;dt.autoReplaceSvg===!1&&(dt.autoReplaceSvg=!0),dt.observeMutations=!0,EN(()=>{BN({autoReplaceSvgRoot:t}),Xa("watch",r)})}},jN={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:Va(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const t=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],n=Xf(r[0]);return{prefix:n,iconName:Va(n,t)||t}}if(typeof r=="string"&&(r.indexOf("".concat(dt.cssPrefix,"-"))>-1||r.match(aN))){const t=$f(r.split(" "),{skipLookups:!0});return{prefix:t.prefix||Qr(),iconName:Va(t.prefix,t.iconName)||t.iconName}}if(typeof r=="string"){const t=Qr();return{prefix:t,iconName:Va(t,r)||r}}}},vn={noAuto:UN,config:dt,dom:zN,parse:jN,library:NA,findIconDefinition:rp,toHtml:mu},BN=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=te}=r;(Object.keys(ci.styles).length>0||dt.autoFetchSvg)&&ir&&dt.autoReplaceSvg&&vn.dom.i2svg({node:t})};function Wf(r,t){return Object.defineProperty(r,"abstract",{get:t}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(n=>mu(n))}}),Object.defineProperty(r,"node",{get:function(){if(!ir)return;const n=te.createElement("div");return n.innerHTML=r.html,n.children}}),r}function HN(r){let{children:t,main:n,mask:a,attributes:o,styles:u,transform:h}=r;if(ag(h)&&n.found&&!a.found){const{width:m,height:g}=n,y={x:m/g/2,y:.5};o.style=Qf(it(it({},u),{},{"transform-origin":"".concat(y.x+h.x/16,"em ").concat(y.y+h.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function FN(r){let{prefix:t,iconName:n,children:a,attributes:o,symbol:u}=r;const h=u===!0?"".concat(t,"-").concat(dt.cssPrefix,"-").concat(n):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:it(it({},o),{},{id:h}),children:a}]}]}function lg(r){const{icons:{main:t,mask:n},prefix:a,iconName:o,transform:u,symbol:h,title:m,maskId:g,titleId:y,extra:E,watchable:S=!1}=r,{width:R,height:B}=n.found?n:t,P=Fx.includes(a),W=[dt.replacementClass,o?"".concat(dt.cssPrefix,"-").concat(o):""].filter(ut=>E.classes.indexOf(ut)===-1).filter(ut=>ut!==""||!!ut).concat(E.classes).join(" ");let q={children:[],attributes:it(it({},E.attributes),{},{"data-prefix":a,"data-icon":o,class:W,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(B)})};const Y=P&&!~E.classes.indexOf("fa-fw")?{width:"".concat(R/B*16*.0625,"em")}:{};S&&(q.attributes[Qa]=""),m&&(q.children.push({tag:"title",attributes:{id:q.attributes["aria-labelledby"]||"title-".concat(y||Wl())},children:[m]}),delete q.attributes.title);const nt=it(it({},q),{},{prefix:a,iconName:o,main:t,mask:n,maskId:g,transform:u,symbol:h,styles:it(it({},Y),E.styles)}),{children:Z,attributes:ct}=n.found&&t.found?Xr("generateAbstractMask",nt)||{children:[],attributes:{}}:Xr("generateAbstractIcon",nt)||{children:[],attributes:{}};return nt.children=Z,nt.attributes=ct,h?FN(nt):HN(nt)}function dE(r){const{content:t,width:n,height:a,transform:o,title:u,extra:h,watchable:m=!1}=r,g=it(it(it({},h.attributes),u?{title:u}:{}),{},{class:h.classes.join(" ")});m&&(g[Qa]="");const y=it({},h.styles);ag(o)&&(y.transform=yN({transform:o,startCentered:!0,width:n,height:a}),y["-webkit-transform"]=y.transform);const E=Qf(y);E.length>0&&(g.style=E);const S=[];return S.push({tag:"span",attributes:g,children:[t]}),u&&S.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),S}function qN(r){const{content:t,title:n,extra:a}=r,o=it(it(it({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),u=Qf(a.styles);u.length>0&&(o.style=u);const h=[];return h.push({tag:"span",attributes:o,children:[t]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}const{styles:_m}=ci;function ap(r){const t=r[0],n=r[1],[a]=r.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(dt.cssPrefix,"-").concat(gm.GROUP)},children:[{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(gm.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(gm.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}const GN={found:!1,width:512,height:512};function YN(r,t){!pA&&!dt.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(t,'" is missing.'))}function sp(r,t){let n=t;return t==="fa"&&dt.styleDefault!==null&&(t=Qr()),new Promise((a,o)=>{if(n==="fa"){const u=DA(r)||{};r=u.iconName||r,t=u.prefix||t}if(r&&t&&_m[t]&&_m[t][r]){const u=_m[t][r];return a(ap(u))}YN(r,t),a(it(it({},GN),{},{icon:dt.showMissingIcons&&r?Xr("missingIconAbstract")||{}:{}}))})}const mE=()=>{},op=dt.measurePerformance&&Yc&&Yc.mark&&Yc.measure?Yc:{mark:mE,measure:mE},Pl='FA "6.7.2"',KN=r=>(op.mark("".concat(Pl," ").concat(r," begins")),()=>MA(r)),MA=r=>{op.mark("".concat(Pl," ").concat(r," ends")),op.measure("".concat(Pl," ").concat(r),"".concat(Pl," ").concat(r," begins"),"".concat(Pl," ").concat(r," ends"))};var ug={begin:KN,end:MA};const af=()=>{};function pE(r){return typeof(r.getAttribute?r.getAttribute(Qa):null)=="string"}function QN(r){const t=r.getAttribute?r.getAttribute(eg):null,n=r.getAttribute?r.getAttribute(ng):null;return t&&n}function XN(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(dt.replacementClass)}function $N(){return dt.autoReplaceSvg===!0?sf.replace:sf[dt.autoReplaceSvg]||sf.replace}function WN(r){return te.createElementNS("http://www.w3.org/2000/svg",r)}function ZN(r){return te.createElement(r)}function PA(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=r.tag==="svg"?WN:ZN}=t;if(typeof r=="string")return te.createTextNode(r);const a=n(r.tag);return Object.keys(r.attributes||[]).forEach(function(u){a.setAttribute(u,r.attributes[u])}),(r.children||[]).forEach(function(u){a.appendChild(PA(u,{ceFn:n}))}),a}function JN(r){let t=" ".concat(r.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const sf={replace:function(r){const t=r[0];if(t.parentNode)if(r[1].forEach(n=>{t.parentNode.insertBefore(PA(n),t)}),t.getAttribute(Qa)===null&&dt.keepOriginalSource){let n=te.createComment(JN(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(r){const t=r[0],n=r[1];if(~rg(t).indexOf(dt.replacementClass))return sf.replace(r);const a=new RegExp("".concat(dt.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const u=n[0].attributes.class.split(" ").reduce((h,m)=>(m===dt.replacementClass||m.match(a)?h.toSvg.push(m):h.toNode.push(m),h),{toNode:[],toSvg:[]});n[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",u.toNode.join(" "))}const o=n.map(u=>mu(u)).join(`
`);t.setAttribute(Qa,""),t.innerHTML=o}};function gE(r){r()}function kA(r,t){const n=typeof t=="function"?t:af;if(r.length===0)n();else{let a=gE;dt.mutateApproach===nN&&(a=Kr.requestAnimationFrame||gE),a(()=>{const o=$N(),u=ug.begin("mutate");r.map(o),u(),n()})}}let cg=!1;function LA(){cg=!0}function lp(){cg=!1}let Of=null;function yE(r){if(!iE||!dt.observeMutations)return;const{treeCallback:t=af,nodeCallback:n=af,pseudoElementsCallback:a=af,observeMutationsRoot:o=te}=r;Of=new iE(u=>{if(cg)return;const h=Qr();go(u).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!pE(m.addedNodes[0])&&(dt.searchPseudoElements&&a(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&dt.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&pE(m.target)&&~lN.indexOf(m.attributeName))if(m.attributeName==="class"&&QN(m.target)){const{prefix:g,iconName:y}=$f(rg(m.target));m.target.setAttribute(eg,g||h),y&&m.target.setAttribute(ng,y)}else XN(m.target)&&n(m.target)})}),ir&&Of.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function tM(){Of&&Of.disconnect()}function eM(r){const t=r.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,o)=>{const u=o.split(":"),h=u[0],m=u.slice(1);return h&&m.length>0&&(a[h]=m.join(":").trim()),a},{})),n}function nM(r){const t=r.getAttribute("data-prefix"),n=r.getAttribute("data-icon"),a=r.innerText!==void 0?r.innerText.trim():"";let o=$f(rg(r));return o.prefix||(o.prefix=Qr()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=CN(o.prefix,r.innerText)||og(o.prefix,ep(r.innerText))),!o.iconName&&dt.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=r.firstChild.data)),o}function iM(r){const t=go(r.attributes).reduce((o,u)=>(o.name!=="class"&&o.name!=="style"&&(o[u.name]=u.value),o),{}),n=r.getAttribute("title"),a=r.getAttribute("data-fa-title-id");return dt.autoA11y&&(n?t["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(a||Wl()):(t["aria-hidden"]="true",t.focusable="false")),t}function rM(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ui,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vE(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:o}=nM(r),u=iM(r),h=ip("parseNodeAttributes",{},r);let m=t.styleParser?eM(r):[];return it({iconName:n,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:a,transform:ui,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:m,attributes:u}},h)}const{styles:aM}=ci;function VA(r){const t=dt.autoReplaceSvg==="nest"?vE(r,{styleParser:!1}):vE(r);return~t.extra.classes.indexOf(yA)?Xr("generateLayersText",r,t):Xr("generateSvgReplacementMutation",r,t)}function sM(){return[...jx,...Xm]}function _E(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ir)return Promise.resolve();const n=te.documentElement.classList,a=E=>n.add("".concat(sE,"-").concat(E)),o=E=>n.remove("".concat(sE,"-").concat(E)),u=dt.autoFetchSvg?sM():cA.concat(Object.keys(aM));u.includes("fa")||u.push("fa");const h=[".".concat(yA,":not([").concat(Qa,"])")].concat(u.map(E=>".".concat(E,":not([").concat(Qa,"])"))).join(", ");if(h.length===0)return Promise.resolve();let m=[];try{m=go(r.querySelectorAll(h))}catch{}if(m.length>0)a("pending"),o("complete");else return Promise.resolve();const g=ug.begin("onTree"),y=m.reduce((E,S)=>{try{const R=VA(S);R&&E.push(R)}catch(R){pA||R.name==="MissingIcon"&&console.error(R)}return E},[]);return new Promise((E,S)=>{Promise.all(y).then(R=>{kA(R,()=>{a("active"),a("complete"),o("pending"),typeof t=="function"&&t(),g(),E()})}).catch(R=>{g(),S(R)})})}function oM(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;VA(r).then(n=>{n&&kA([n],t)})}function lM(r){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:rp(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:rp(o||{})),r(a,it(it({},n),{},{mask:o}))}}const uM=function(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ui,symbol:a=!1,mask:o=null,maskId:u=null,title:h=null,titleId:m=null,classes:g=[],attributes:y={},styles:E={}}=t;if(!r)return;const{prefix:S,iconName:R,icon:B}=r;return Wf(it({type:"icon"},r),()=>(Xa("beforeDOMElementCreation",{iconDefinition:r,params:t}),dt.autoA11y&&(h?y["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(m||Wl()):(y["aria-hidden"]="true",y.focusable="false")),lg({icons:{main:ap(B),mask:o?ap(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:R,transform:it(it({},ui),n),symbol:a,title:h,maskId:u,titleId:m,extra:{attributes:y,styles:E,classes:g}})))};var cM={mixout(){return{icon:lM(uM)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=_E,r.nodeCallback=oM,r}}},provides(r){r.i2svg=function(t){const{node:n=te,callback:a=()=>{}}=t;return _E(n,a)},r.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:o,titleId:u,prefix:h,transform:m,symbol:g,mask:y,maskId:E,extra:S}=n;return new Promise((R,B)=>{Promise.all([sp(a,h),y.iconName?sp(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(P=>{let[W,q]=P;R([t,lg({icons:{main:W,mask:q},prefix:h,iconName:a,transform:m,symbol:g,maskId:E,title:o,titleId:u,extra:S,watchable:!0})])}).catch(B)})},r.generateAbstractIcon=function(t){let{children:n,attributes:a,main:o,transform:u,styles:h}=t;const m=Qf(h);m.length>0&&(a.style=m);let g;return ag(u)&&(g=Xr("generateAbstractTransformGrouping",{main:o,transform:u,containerWidth:o.width,iconWidth:o.width})),n.push(g||o.icon),{children:n,attributes:a}}}},fM={mixout(){return{layer(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Wf({type:"layer"},()=>{Xa("beforeDOMElementCreation",{assembler:r,params:t});let a=[];return r(o=>{Array.isArray(o)?o.map(u=>{a=a.concat(u.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(dt.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},hM={mixout(){return{counter(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:o={},styles:u={}}=t;return Wf({type:"counter",content:r},()=>(Xa("beforeDOMElementCreation",{content:r,params:t}),qN({content:r.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(dt.cssPrefix,"-layers-counter"),...a]}})))}}}},dM={mixout(){return{text(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ui,title:a=null,classes:o=[],attributes:u={},styles:h={}}=t;return Wf({type:"text",content:r},()=>(Xa("beforeDOMElementCreation",{content:r,params:t}),dE({content:r,transform:it(it({},ui),n),title:a,extra:{attributes:u,styles:h,classes:["".concat(dt.cssPrefix,"-layers-text"),...o]}})))}}},provides(r){r.generateLayersText=function(t,n){const{title:a,transform:o,extra:u}=n;let h=null,m=null;if(lA){const g=parseInt(getComputedStyle(t).fontSize,10),y=t.getBoundingClientRect();h=y.width/g,m=y.height/g}return dt.autoA11y&&!a&&(u.attributes["aria-hidden"]="true"),Promise.resolve([t,dE({content:t.innerHTML,width:h,height:m,transform:o,title:a,extra:u,watchable:!0})])}}};const mM=new RegExp('"',"ug"),EE=[1105920,1112319],TE=it(it(it(it({},{FontAwesome:{normal:"fas",400:"fas"}}),Vx),tN),Kx),up=Object.keys(TE).reduce((r,t)=>(r[t.toLowerCase()]=TE[t],r),{}),pM=Object.keys(up).reduce((r,t)=>{const n=up[t];return r[t]=n[900]||[...Object.entries(n)][0][1],r},{});function gM(r){const t=r.replace(mM,""),n=bN(t,0),a=n>=EE[0]&&n<=EE[1],o=t.length===2?t[0]===t[1]:!1;return{value:ep(o?t[0]:t),isSecondary:a||o}}function yM(r,t){const n=r.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),o=isNaN(a)?"normal":a;return(up[n]||{})[o]||pM[n]}function bE(r,t){const n="".concat(eN).concat(t.replace(":","-"));return new Promise((a,o)=>{if(r.getAttribute(n)!==null)return a();const h=go(r.children).filter(R=>R.getAttribute(Wm)===t)[0],m=Kr.getComputedStyle(r,t),g=m.getPropertyValue("font-family"),y=g.match(sN),E=m.getPropertyValue("font-weight"),S=m.getPropertyValue("content");if(h&&!y)return r.removeChild(h),a();if(y&&S!=="none"&&S!==""){const R=m.getPropertyValue("content");let B=yM(g,E);const{value:P,isSecondary:W}=gM(R),q=y[0].startsWith("FontAwesome");let Y=og(B,P),nt=Y;if(q){const Z=IN(P);Z.iconName&&Z.prefix&&(Y=Z.iconName,B=Z.prefix)}if(Y&&!W&&(!h||h.getAttribute(eg)!==B||h.getAttribute(ng)!==nt)){r.setAttribute(n,nt),h&&r.removeChild(h);const Z=rM(),{extra:ct}=Z;ct.attributes[Wm]=t,sp(Y,B).then(ut=>{const At=lg(it(it({},Z),{},{icons:{main:ut,mask:xA()},prefix:B,iconName:nt,extra:ct,watchable:!0})),x=te.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?r.insertBefore(x,r.firstChild):r.appendChild(x),x.outerHTML=At.map(w=>mu(w)).join(`
`),r.removeAttribute(n),a()}).catch(o)}else a()}else a()})}function vM(r){return Promise.all([bE(r,"::before"),bE(r,"::after")])}function _M(r){return r.parentNode!==document.head&&!~iN.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Wm)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function AE(r){if(ir)return new Promise((t,n)=>{const a=go(r.querySelectorAll("*")).filter(_M).map(vM),o=ug.begin("searchPseudoElements");LA(),Promise.all(a).then(()=>{o(),lp(),t()}).catch(()=>{o(),lp(),n()})})}var EM={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=AE,r}}},provides(r){r.pseudoElements2svg=function(t){const{node:n=te}=t;dt.searchPseudoElements&&AE(n)}}};let SE=!1;var TM={mixout(){return{dom:{unwatch(){LA(),SE=!0}}}},hooks(){return{bootstrap(){yE(ip("mutationObserverCallbacks",{}))},noAuto(){tM()},watch(r){const{observeMutationsRoot:t}=r;SE?lp():yE(ip("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const wE=r=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((n,a)=>{const o=a.toLowerCase().split("-"),u=o[0];let h=o.slice(1).join("-");if(u&&h==="h")return n.flipX=!0,n;if(u&&h==="v")return n.flipY=!0,n;if(h=parseFloat(h),isNaN(h))return n;switch(u){case"grow":n.size=n.size+h;break;case"shrink":n.size=n.size-h;break;case"left":n.x=n.x-h;break;case"right":n.x=n.x+h;break;case"up":n.y=n.y-h;break;case"down":n.y=n.y+h;break;case"rotate":n.rotate=n.rotate+h;break}return n},t)};var bM={mixout(){return{parse:{transform:r=>wE(r)}}},hooks(){return{parseNodeAttributes(r,t){const n=t.getAttribute("data-fa-transform");return n&&(r.transform=wE(n)),r}}},provides(r){r.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:o,iconWidth:u}=t;const h={transform:"translate(".concat(o/2," 256)")},m="translate(".concat(a.x*32,", ").concat(a.y*32,") "),g="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),y="rotate(".concat(a.rotate," 0 0)"),E={transform:"".concat(m," ").concat(g," ").concat(y)},S={transform:"translate(".concat(u/2*-1," -256)")},R={outer:h,inner:E,path:S};return{tag:"g",attributes:it({},R.outer),children:[{tag:"g",attributes:it({},R.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:it(it({},n.icon.attributes),R.path)}]}]}}}};const Em={x:0,y:0,width:"100%",height:"100%"};function RE(r){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||t)&&(r.attributes.fill="black"),r}function AM(r){return r.tag==="g"?r.children:[r]}var SM={hooks(){return{parseNodeAttributes(r,t){const n=t.getAttribute("data-fa-mask"),a=n?$f(n.split(" ").map(o=>o.trim())):xA();return a.prefix||(a.prefix=Qr()),r.mask=a,r.maskId=t.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(t){let{children:n,attributes:a,main:o,mask:u,maskId:h,transform:m}=t;const{width:g,icon:y}=o,{width:E,icon:S}=u,R=gN({transform:m,containerWidth:E,iconWidth:g}),B={tag:"rect",attributes:it(it({},Em),{},{fill:"white"})},P=y.children?{children:y.children.map(RE)}:{},W={tag:"g",attributes:it({},R.inner),children:[RE(it({tag:y.tag,attributes:it(it({},y.attributes),R.path)},P))]},q={tag:"g",attributes:it({},R.outer),children:[W]},Y="mask-".concat(h||Wl()),nt="clip-".concat(h||Wl()),Z={tag:"mask",attributes:it(it({},Em),{},{id:Y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,q]},ct={tag:"defs",children:[{tag:"clipPath",attributes:{id:nt},children:AM(S)},Z]};return n.push(ct,{tag:"rect",attributes:it({fill:"currentColor","clip-path":"url(#".concat(nt,")"),mask:"url(#".concat(Y,")")},Em)}),{children:n,attributes:a}}}},wM={provides(r){let t=!1;Kr.matchMedia&&(t=Kr.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:it(it({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const u=it(it({},o),{},{attributeName:"opacity"}),h={tag:"circle",attributes:it(it({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||h.children.push({tag:"animate",attributes:it(it({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:it(it({},u),{},{values:"1;0;1;1;0;1;"})}),n.push(h),n.push({tag:"path",attributes:it(it({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:it(it({},u),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:it(it({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:it(it({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},RM={hooks(){return{parseNodeAttributes(r,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return r.symbol=a,r}}}},CM=[_N,cM,fM,hM,dM,EM,TM,bM,SM,wM,RM];VN(CM,{mixoutsTo:vn});vn.noAuto;vn.config;vn.library;vn.dom;const cp=vn.parse;vn.findIconDefinition;vn.toHtml;const IM=vn.icon;vn.layer;vn.text;vn.counter;var Tm={exports:{}},bm,CE;function OM(){if(CE)return bm;CE=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return bm=r,bm}var Am,IE;function DM(){if(IE)return Am;IE=1;var r=OM();function t(){}function n(){}return n.resetWarningCache=t,Am=function(){function a(h,m,g,y,E,S){if(S!==r){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return u.PropTypes=u,u},Am}var OE;function xM(){return OE||(OE=1,Tm.exports=DM()()),Tm.exports}var NM=xM();const xt=PE(NM);function DE(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,a)}return n}function li(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?DE(Object(n),!0).forEach(function(a){$s(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):DE(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function Df(r){"@babel/helpers - typeof";return Df=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Df(r)}function $s(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function MM(r,t){if(r==null)return{};var n={},a=Object.keys(r),o,u;for(u=0;u<a.length;u++)o=a[u],!(t.indexOf(o)>=0)&&(n[o]=r[o]);return n}function PM(r,t){if(r==null)return{};var n=MM(r,t),a,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)a=u[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function fp(r){return kM(r)||LM(r)||VM(r)||UM()}function kM(r){if(Array.isArray(r))return hp(r)}function LM(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function VM(r,t){if(r){if(typeof r=="string")return hp(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hp(r,t)}}function hp(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=r[n];return a}function UM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zM(r){var t,n=r.beat,a=r.fade,o=r.beatFade,u=r.bounce,h=r.shake,m=r.flash,g=r.spin,y=r.spinPulse,E=r.spinReverse,S=r.pulse,R=r.fixedWidth,B=r.inverse,P=r.border,W=r.listItem,q=r.flip,Y=r.size,nt=r.rotation,Z=r.pull,ct=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":u,"fa-shake":h,"fa-flash":m,"fa-spin":g,"fa-spin-reverse":E,"fa-spin-pulse":y,"fa-pulse":S,"fa-fw":R,"fa-inverse":B,"fa-border":P,"fa-li":W,"fa-flip":q===!0,"fa-flip-horizontal":q==="horizontal"||q==="both","fa-flip-vertical":q==="vertical"||q==="both"},$s(t,"fa-".concat(Y),typeof Y<"u"&&Y!==null),$s(t,"fa-rotate-".concat(nt),typeof nt<"u"&&nt!==null&&nt!==0),$s(t,"fa-pull-".concat(Z),typeof Z<"u"&&Z!==null),$s(t,"fa-swap-opacity",r.swapOpacity),t);return Object.keys(ct).map(function(ut){return ct[ut]?ut:null}).filter(function(ut){return ut})}function jM(r){return r=r-0,r===r}function UA(r){return jM(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var BM=["style"];function HM(r){return r.charAt(0).toUpperCase()+r.slice(1)}function FM(r){return r.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),o=UA(n.slice(0,a)),u=n.slice(a+1).trim();return o.startsWith("webkit")?t[HM(o)]=u:t[o]=u,t},{})}function zA(r,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(g){return zA(r,g)}),o=Object.keys(t.attributes||{}).reduce(function(g,y){var E=t.attributes[y];switch(y){case"class":g.attrs.className=E,delete t.attributes.class;break;case"style":g.attrs.style=FM(E);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?g.attrs[y.toLowerCase()]=E:g.attrs[UA(y)]=E}return g},{attrs:{}}),u=n.style,h=u===void 0?{}:u,m=PM(n,BM);return o.attrs.style=li(li({},o.attrs.style),h),r.apply(void 0,[t.tag,li(li({},o.attrs),m)].concat(fp(a)))}var jA=!1;try{jA=!0}catch{}function qM(){if(!jA&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function xE(r){if(r&&Df(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(cp.icon)return cp.icon(r);if(r===null)return null;if(r&&Df(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Sm(r,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?$s({},r,t):{}}var NE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},xf=kE.forwardRef(function(r,t){var n=li(li({},NE),r),a=n.icon,o=n.mask,u=n.symbol,h=n.className,m=n.title,g=n.titleId,y=n.maskId,E=xE(a),S=Sm("classes",[].concat(fp(zM(n)),fp((h||"").split(" ")))),R=Sm("transform",typeof n.transform=="string"?cp.transform(n.transform):n.transform),B=Sm("mask",xE(o)),P=IM(E,li(li(li(li({},S),R),B),{},{symbol:u,title:m,titleId:g,maskId:y}));if(!P)return qM("Could not find icon",E),null;var W=P.abstract,q={ref:t};return Object.keys(n).forEach(function(Y){NE.hasOwnProperty(Y)||(q[Y]=n[Y])}),GM(W[0],q)});xf.displayName="FontAwesomeIcon";xf.propTypes={beat:xt.bool,border:xt.bool,beatFade:xt.bool,bounce:xt.bool,className:xt.string,fade:xt.bool,flash:xt.bool,mask:xt.oneOfType([xt.object,xt.array,xt.string]),maskId:xt.string,fixedWidth:xt.bool,inverse:xt.bool,flip:xt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:xt.oneOfType([xt.object,xt.array,xt.string]),listItem:xt.bool,pull:xt.oneOf(["right","left"]),pulse:xt.bool,rotation:xt.oneOf([0,90,180,270]),shake:xt.bool,size:xt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:xt.bool,spinPulse:xt.bool,spinReverse:xt.bool,symbol:xt.oneOfType([xt.bool,xt.string]),title:xt.string,titleId:xt.string,transform:xt.oneOfType([xt.string,xt.object]),swapOpacity:xt.bool};var GM=zA.bind(null,kE.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ME={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"]},YM=()=>{const[r,t]=K.useState(window.innerWidth<=768);return K.useEffect(()=>{const n=()=>{t(window.innerWidth<=768)};window.addEventListener("resize",n)},[]),U.jsxs("section",{children:[U.jsx("div",{className:"container-imagem",children:U.jsx("img",{src:Rx,alt:""})}),r&&U.jsx("div",{className:"container-imagem-mobile",children:U.jsx("img",{src:Cx,alt:""})}),U.jsx("div",{className:"container-buttons",children:U.jsxs("div",{className:"list",children:[U.jsx("div",{children:U.jsx(jn,{to:"PetEncontrados",children:U.jsxs("button",{className:"button1",children:[" ",U.jsx(xf,{icon:ME,size:"1x",color:"#FFF"})," Cadastrar Pet Encontrado"]})})}),U.jsx("div",{children:U.jsx("button",{className:"button2",children:"Cadastrar Pet Encontrado"})}),U.jsx("div",{children:U.jsx("button",{className:"button3",children:"Cadastrar Pet Encontrado"})}),U.jsx("div",{children:U.jsx("button",{className:"button4",children:"Cadastrar Pet Encontrado"})})]})}),r&&U.jsx("div",{className:"container-buttons-mobile",children:U.jsxs("div",{className:"list-mobile",children:[U.jsx("div",{children:U.jsx(jn,{to:"PetEncontrados",children:U.jsxs("button",{className:"button1",children:[" ",U.jsx(xf,{icon:ME,size:"1x",color:"#FFF"})," Cadastrar Pet Encontrado"]})})}),U.jsx("div",{children:U.jsx("button",{className:"button2",children:"Cadastrar Pet Encontrado"})}),U.jsx("div",{children:U.jsx("button",{className:"button3",children:"Cadastrar Pet Encontrado"})}),U.jsx("div",{children:U.jsx("button",{className:"button4",children:"Cadastrar Pet Encontrado"})})]})})]})},KM=()=>{const[r,t]=K.useState(""),[n,a]=K.useState(""),[o,u]=K.useState(""),[h,m]=K.useState(""),[g,y]=K.useState(""),[E,S]=K.useState(""),[R,B]=K.useState(""),[P,W]=K.useState(""),[q,Y]=K.useState(""),nt={cahorro:["Labrador","Bulldog","Poodle","Golden Retriever"],gato:["Persa","Siamês","Maine Coon","Sphynx"],outro:["Coelho","Hamster","Papagaio","Tartaruga"],genero:["Macho","Fêmea","Não indentificado"]},Z=A=>(A=A.replace(/\D/g,""),A.length<=2?`(${A}`:A.length<=6?`(${A.slice(0,2)}) ${A.slice(2)}`:`(${A.slice(0,2)}) ${A.slice(2,7)}-${A.slice(7,11)}`),ct=A=>{let O=A.target.value;O=O.replace(/\D/g,""),O.length<=11&&m(Z(O))},ut=()=>{m(Z(h))},At=()=>{m(h.replace(/\D/g,""))},x=A=>{if(A.key==="Backspace"){let O=h.replace(/\D/g,"");O=O.slice(0,-1),m(Z(O)),A.preventDefault()}},w=async A=>{if(A.preventDefault(),!r||!n||!o||!h||!E||!R||!P||!g){alert("Por favor, preencha os campos. ");return}try{await Ax(fx(rA,"petsEncontrado"),{nomePet:g,especie:r,raca:n,genero:o,telefone:h,nome:P,endereco:E,email:R,descricao:q,dataCadastro:new Date}),alert("Cadastro realizado com sucesso")}catch(O){console.error("Erro ao cadastrar pet",O),alert("Houve um erro ao cadasr o pet. Tente novamente.")}};return U.jsx("div",{className:"container-principal-form",children:U.jsxs("div",{className:"container-geral",children:[U.jsxs("div",{className:"container-titulo",children:[U.jsx("h2",{children:"Preencha o formulário para cadastrar o pet encontrado"}),U.jsx("p",{children:"Quanto mais informações você colocar, mais fácil ele será encontrado pela família."})]}),U.jsx("form",{className:"container-form",onSubmit:w,children:U.jsxs("div",{className:"form-itens",children:[U.jsxs("div",{children:[U.jsx("label",{htmlFor:"nome",children:"Digite o identificador do pet"}),U.jsx("input",{type:"text",name:"nome-pet",id:"nome-pet",placeholder:"Digite o código encontrado na coleira do pet",value:g,onChange:A=>y(A.target.value)})]}),U.jsxs("div",{className:"form-select",children:[U.jsxs("div",{children:[U.jsx("label",{htmlFor:"nome",children:"Espécie"}),U.jsxs("select",{id:"raca",value:r,onChange:A=>{t(A.target.value),a("")},children:[U.jsx("option",{value:"",children:"-Selecione-"}),U.jsx("option",{value:"cahorro",children:"Cachorro"}),U.jsx("option",{value:"gato",children:"Gato"}),U.jsx("option",{value:"outro",children:"Outros"})]})]}),U.jsxs("div",{children:[U.jsx("label",{htmlFor:"nome",children:"Raça"}),U.jsxs("select",{id:"raça",value:n,onChange:A=>a(A.target.value),disabled:!r,children:[U.jsx("option",{value:"",children:"-Selecione-"}),r&&nt[r].map(A=>U.jsx("option",{value:A,children:A},A))]})]}),U.jsxs("div",{children:[U.jsx("label",{htmlFor:"nome",children:"Gênero"}),U.jsxs("select",{id:"genero",value:o,onChange:A=>u(A.target.value),children:[U.jsx("option",{value:"",children:"-Selecione-"}),nt.genero.map(A=>U.jsx("option",{value:A,children:A},A))]})]})]}),U.jsxs("div",{className:"input-endereco",children:[U.jsx("label",{htmlFor:"nome",children:"Bairro onde o pet foi encontrado"}),U.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o bairro onde você encontrou o pet",value:E,onChange:A=>S(A.target.value)})]}),U.jsxs("div",{style:{marginTop:20},children:[U.jsx("label",{htmlFor:"nome",children:"Nome Completo"}),U.jsx("input",{type:"text",name:"nome",id:"nome",placeholder:"Digite o seu nome",value:P,onChange:A=>W(A.target.value)})]}),U.jsxs("div",{className:"form-select",children:[U.jsxs("div",{children:[U.jsx("label",{htmlFor:"email",children:"E-mail"}),U.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu e-mail",value:R,onChange:A=>B(A.target.value)})]}),U.jsxs("div",{children:[U.jsx("label",{htmlFor:"tel",children:"Telefone para contato"}),U.jsx("input",{type:"tel",id:"tel",name:"tel",placeholder:"(xx) xxxxx-xxxx",maxLength:17,value:h,onChange:ct,onFocus:At,onBlur:ut,onKeyDown:x})]})]}),U.jsx("div",{className:"text-area",children:U.jsx("textarea",{name:"",id:"tex-area",placeholder:"Alguma característica única/diferenciada?",value:q,onChange:A=>Y(A.target.value)})}),U.jsx("div",{className:"botao-cadastrar",children:U.jsx("button",{type:"submit",children:"Cadastrar"})})]})})]})})},QM="/assets/undraw_shopping_a55o-Drfkb-Um.svg";function XM(){const[r,t]=K.useState({nome:"",email:"",bairro:"",senha:"",confirmarSenha:""}),n=async o=>{t({...r,[o.target.name]:o.target.value})},a=async o=>{if(o.preventDefault(),r.senha!==r.confirmarSenha){alert("As senhas não coincidem");return}try{const h=(await AC(Jp,r.email,r.senha)).user;await bx(Fb(rA,"usuarios",h.uid),{nome:r.nome,email:r.email,localdiade:r.bairro,senha:r.senha}),alert("Cadastro realiazdo com sucesso! ")}catch(u){console.error("Erro ao cadastrar usuario! "),alert("Erro ao cadastrar:"+u.message)}};return U.jsx("div",{className:"container",children:U.jsxs("div",{className:"geral",children:[U.jsx("div",{className:"div-img",children:U.jsx("img",{src:QM,alt:""})}),U.jsx("div",{className:"form-container",children:U.jsxs("form",{className:"form",onSubmit:a,children:[U.jsxs("div",{className:"form-header",children:[U.jsxs("div",{className:"titulo",children:[U.jsx("h2",{children:"Cadastre-se"}),U.jsx("div",{})]}),U.jsx("div",{className:"login-button",children:U.jsx(jn,{to:"/Login",children:U.jsx("button",{type:"button",children:"Entrar"})})})]}),U.jsxs("div",{className:"div-inputs",children:[U.jsxs("div",{className:"input",children:[U.jsx("label",{htmlFor:"nome",children:"Nome Completo"}),U.jsx("input",{type:"text",id:"nome",name:"nome",placeholder:"Digite seu nome",value:r.nome,onChange:n})]}),U.jsxs("div",{className:"input",children:[U.jsx("label",{htmlFor:"nome",children:"E-mail"}),U.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Digite seu e-mail",value:r.email,onChange:n})]}),U.jsxs("div",{className:"input",children:[U.jsx("label",{htmlFor:"nome",children:"Localidade"}),U.jsx("input",{type:"text",id:"bairro",name:"bairro",placeholder:"Digite o local onde você reside",value:r.bairro,onChange:n})]}),U.jsxs("div",{className:"input",children:[U.jsx("label",{htmlFor:"nome",children:"Senha"}),U.jsx("input",{type:"password",id:"senha",name:"senha",placeholder:"Digite sua senha",value:r.senha,onChange:n})]}),U.jsxs("div",{className:"input",children:[U.jsx("label",{htmlFor:"nome",children:"Confirmar senha"}),U.jsx("input",{type:"password",id:"confirmarSenha",name:"confirmarSenha",placeholder:"Confirme sua senha",value:r.confirmarSenha,onChange:n})]}),U.jsx("div",{className:"cadastro",children:U.jsx("div",{children:U.jsx("button",{type:"submit",children:"Enviar"})})})]})]})})]})})}const $M=()=>{const[r,t]=K.useState(""),[n,a]=K.useState(""),o=GE(),u=async h=>{h.preventDefault();try{await SC(Jp,r,n),alert("Login realizado com sucesso! "),o("/")}catch(m){console.error("Erro ao fazer login",m),alert("Erro ao fazer login: "+m.message)}};return U.jsx("div",{children:U.jsx("div",{className:"container-login",children:U.jsxs("form",{className:"form-login",onSubmit:u,children:[U.jsxs("div",{className:"titulo-login",children:[U.jsx("h1",{children:"Login"}),U.jsx("div",{className:"linha-login"})]}),U.jsxs("div",{className:"inputs-login",children:[U.jsxs("div",{className:"inputs-",children:[U.jsx("label",{htmlFor:"email",children:"Seu e-mail"}),U.jsx("input",{type:"text",name:"email",id:"email",value:r,onChange:h=>t(h.target.value)})]}),U.jsxs("div",{className:"inputs-",children:[U.jsx("label",{htmlFor:"senha",children:"Sua senha"}),U.jsx("input",{type:"password",name:"senha",id:"senha",value:n,onChange:h=>a(h.target.value)})]})]}),U.jsx("div",{className:"logar",children:U.jsx("button",{type:"submit",children:"Logar"})}),U.jsxs("div",{className:"semconta",children:[U.jsx("h4",{children:"Ainda não tem conta?"}),U.jsx(jn,{to:"/CadastroUsuario",children:U.jsx("button",{type:"button",children:"Cadastre-se"})})]})]})})})};function WM(){return U.jsxs(Pw,{children:[U.jsx(wx,{}),U.jsxs(fw,{children:[U.jsx(Dl,{path:"/",element:U.jsx(YM,{})}),U.jsx(Dl,{path:"/PetEncontrados",element:U.jsx(KM,{})}),U.jsx(Dl,{path:"/CadastroUsuario",element:U.jsx(XM,{})}),U.jsx(Dl,{path:"/Login",element:U.jsx($M,{})})]})]})}E1.createRoot(document.getElementById("root")).render(U.jsx(K.StrictMode,{children:U.jsx(WM,{})}));
