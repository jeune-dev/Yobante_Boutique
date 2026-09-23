var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ae(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ae(s,l);c+=oe(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ae(s,l++),c+=oe(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T={current:null},le={transition:null},ue={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:le,ReactCurrentOwner:C};function de(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,e.act=de,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=ee,e.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=le.transition;le.transition={};try{e()}finally{le.transition=t}},e.unstable_act=de,e.useCallback=function(e,t){return T.current.useCallback(e,t)},e.useContext=function(e){return T.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return T.current.useDeferredValue(e)},e.useEffect=function(e,t){return T.current.useEffect(e,t)},e.useId=function(){return T.current.useId()},e.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.current.useMemo(e,t)},e.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},e.useRef=function(e){return T.current.useRef(e)},e.useState=function(e){return T.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.current.useTransition()},e.version=`18.3.1`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,se(x);else{var t=n(l);t!==null&&ce(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ce(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,ee=5,te=-1;function ne(){return!(e.unstable_now()-te<ee)}function re(){if(C!==null){var t=e.unstable_now();te=t;var n=!0;try{n=C(!0,t)}finally{n?ie():(S=!1,C=null)}}else S=!1}var ie;if(typeof v==`function`)ie=function(){v(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){g(re,0)};function se(e){C=e,S||(S=!0,ie())}function ce(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,se(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ce(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,se(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p(),n=h();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function m(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.provider`),ae=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),ue=Symbol.for(`react.offscreen`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Object.assign,pe;function me(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``}return`
`+pe+e}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{he=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?me(e):``}function _e(e){switch(e.tag){case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return``}}function ve(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ee:return`Portal`;case re:return`Profiler`;case ne:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ae:return(e.displayName||`Context`)+`.Consumer`;case ie:return(e._context.displayName||`Context`)+`.Provider`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ve(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ve(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function be(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Se(e){var t=xe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ce(e){e._valueTracker||=Se(e)}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=xe(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Te(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function De(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=be(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Oe(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function ke(e,t){Oe(e,t);var n=be(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?je(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&je(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ae(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function je(e,t,n){(t!==`number`||Te(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Me=Array.isArray;function Ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return E({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Fe(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Me(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:be(n)}}function Ie(e,t){var n=be(t.value),r=be(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Le(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Re(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function ze(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Re(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Be,Ve=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Be||=document.createElement(`div`),Be.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Be.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function He(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ue).forEach(function(e){We.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ue[t]=Ue[e]})});function Ge(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ue.hasOwnProperty(e)&&Ue[e]?(``+t).trim():t+`px`}function Ke(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ge(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var qe=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(e,t){if(t){if(qe[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ye(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xe=null;function Ze(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qe=null,$e=null,et=null;function tt(e){if(e=Ki(e)){if(typeof Qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ji(t),Qe(e.stateNode,e.type,t))}}function nt(e){$e?et?et.push(e):et=[e]:$e=e}function rt(){if($e){var e=$e,t=et;if(et=$e=null,tt(e),t)for(e=0;e<t.length;e++)tt(t[e])}}function it(e,t){return e(t)}function at(){}var ot=!1;function st(e,t,n){if(ot)return e(t,n);ot=!0;try{return it(e,t,n)}finally{ot=!1,($e!==null||et!==null)&&(at(),rt())}}function ct(e,t){var n=e.stateNode;if(n===null)return null;var i=Ji(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var lt=!1;if(c)try{var ut={};Object.defineProperty(ut,`passive`,{get:function(){lt=!0}}),window.addEventListener(`test`,ut,ut),window.removeEventListener(`test`,ut,ut)}catch{lt=!1}function dt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ft=!1,pt=null,mt=!1,ht=null,gt={onError:function(e){ft=!0,pt=e}};function _t(e,t,n,r,i,a,o,s,c){ft=!1,pt=null,dt.apply(gt,arguments)}function vt(e,t,n,i,a,o,s,c,l){if(_t.apply(this,arguments),ft){if(ft){var u=pt;ft=!1,pt=null}else throw Error(r(198));mt||(mt=!0,ht=u)}}function yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xt(e){if(yt(e)!==e)throw Error(r(188))}function St(e){var t=e.alternate;if(!t){if(t=yt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return xt(a),e;if(o===i)return xt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function Ct(e){return e=St(e),e===null?null:wt(e)}function wt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wt(e);if(t!==null)return t;e=e.sibling}return null}var Tt=n.unstable_scheduleCallback,Et=n.unstable_cancelCallback,Dt=n.unstable_shouldYield,Ot=n.unstable_requestPaint,D=n.unstable_now,kt=n.unstable_getCurrentPriorityLevel,At=n.unstable_ImmediatePriority,jt=n.unstable_UserBlockingPriority,Mt=n.unstable_NormalPriority,Nt=n.unstable_LowPriority,Pt=n.unstable_IdlePriority,Ft=null,O=null;function It(e){if(O&&typeof O.onCommitFiberRoot==`function`)try{O.onCommitFiberRoot(Ft,e,void 0,(e.current.flags&128)==128)}catch{}}var Lt=Math.clz32?Math.clz32:zt,Rt=Math.log,k=Math.LN2;function zt(e){return e>>>=0,e===0?32:31-(Rt(e)/k|0)|0}var A=64,Bt=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ht(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Vt(a))):r=Vt(s)}else o=n&~i,o===0?a!==0&&(r=Vt(a)):r=Vt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ut(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Lt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ut(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Gt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Kt(){var e=A;return A<<=1,!(A&4194240)&&(A=64),e}function qt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Yt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Lt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function Zt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qt,$t,en,tn,nn,rn=!1,an=[],on=null,sn=null,cn=null,ln=new Map,un=new Map,dn=[],fn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function pn(e,t){switch(e){case`focusin`:case`focusout`:on=null;break;case`dragenter`:case`dragleave`:sn=null;break;case`mouseover`:case`mouseout`:cn=null;break;case`pointerover`:case`pointerout`:ln.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:un.delete(t.pointerId)}}function M(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&$t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mn(e,t,n,r,i){switch(t){case`focusin`:return on=M(on,e,t,n,r,i),!0;case`dragenter`:return sn=M(sn,e,t,n,r,i),!0;case`mouseover`:return cn=M(cn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return ln.set(a,M(ln.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,un.set(a,M(un.get(a)||null,e,t,n,r,i)),!0}return!1}function hn(e){var t=Gi(e.target);if(t!==null){var n=yt(t);if(n!==null){if(t=n.tag,t===13){if(t=bt(n),t!==null){e.blockedOn=t,nn(e.priority,function(){en(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xe=r,n.target.dispatchEvent(r),Xe=null}else return t=Ki(n),t!==null&&$t(t),e.blockedOn=n,!1;t.shift()}return!0}function _n(e,t,n){gn(e)&&n.delete(t)}function N(){rn=!1,on!==null&&gn(on)&&(on=null),sn!==null&&gn(sn)&&(sn=null),cn!==null&&gn(cn)&&(cn=null),ln.forEach(_n),un.forEach(_n)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,rn||(rn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,N)))}function yn(e){function t(t){return vn(t,e)}if(0<an.length){vn(an[0],e);for(var n=1;n<an.length;n++){var r=an[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&vn(on,e),sn!==null&&vn(sn,e),cn!==null&&vn(cn,e),ln.forEach(t),un.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)hn(n),n.blockedOn===null&&dn.shift()}var bn=C.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=j,a=bn.transition;bn.transition=null;try{j=1,wn(e,t,n,r)}finally{j=i,bn.transition=a}}function Cn(e,t,n,r){var i=j,a=bn.transition;bn.transition=null;try{j=4,wn(e,t,n,r)}finally{j=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)_i(e,t,r,Tn,n),pn(e,r);else if(mn(i,e,t,n,r))r.stopPropagation();else if(pn(e,r),t&4&&-1<fn.indexOf(e)){for(;i!==null;){var a=Ki(i);if(a!==null&&Qt(a),a=En(e,t,n,r),a===null&&_i(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Ze(r),e=Gi(e),e!==null)if(t=yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(kt()){case At:return 1;case jt:return 4;case Mt:case Nt:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},P=Fn(In),Ln=E({},In,{view:0,detail:0}),Rn=Fn(Ln),zn,Bn,Vn,Hn=E({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Vn&&(Vn&&e.type===`mousemove`?(zn=e.screenX-Vn.screenX,Bn=e.screenY-Vn.screenY):Bn=zn=0,Vn=e),zn)},movementY:function(e){return`movementY`in e?e.movementY:Bn}}),Un=Fn(Hn),Wn=Fn(E({},Hn,{dataTransfer:0})),Gn=Fn(E({},Ln,{relatedTarget:0})),Kn=Fn(E({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),qn=Fn(E({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Jn=Fn(E({},In,{data:0})),Yn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Xn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zn[e])?!!t[e]:!1}function $n(){return Qn}var er=Fn(E({},Ln,{key:function(e){if(e.key){var t=Yn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Xn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),tr=Fn(E({},Hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),F=Fn(E({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),nr=Fn(E({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),rr=Fn(E({},Hn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ir=[9,13,27,32],ar=c&&`CompositionEvent`in window,or=null;c&&`documentMode`in document&&(or=document.documentMode);var sr=c&&`TextEvent`in window&&!or,cr=c&&(!ar||or&&8<or&&11>=or),lr=` `,ur=!1;function dr(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function fr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function mr(e,t){switch(e){case`compositionend`:return fr(t);case`keypress`:return t.which===32?(ur=!0,lr):null;case`textInput`:return e=t.data,e===lr&&ur?null:e;default:return null}}function hr(e,t){if(pr)return e===`compositionend`||!ar&&dr(e,t)?(e=jn(),An=kn=On=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return cr&&t.locale!==`ko`?null:t.data;default:return null}}var gr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!gr[e.type]:t===`textarea`}function vr(e,t,n,r){nt(r),t=yi(t,`onChange`),0<t.length&&(n=new P(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function xr(e){fi(e,0)}function Sr(e){if(we(qi(e)))return e}function Cr(e,t){if(e===`change`)return t}var wr=!1;if(c){var Tr;if(c){var Er=`oninput`in document;if(!Er){var Dr=document.createElement(`div`);Dr.setAttribute(`oninput`,`return;`),Er=typeof Dr.oninput==`function`}Tr=Er}else Tr=!1;wr=Tr&&(!document.documentMode||9<document.documentMode)}function Or(){yr&&(yr.detachEvent(`onpropertychange`,kr),br=yr=null)}function kr(e){if(e.propertyName===`value`&&Sr(br)){var t=[];vr(t,br,e,Ze(e)),st(xr,t)}}function Ar(e,t,n){e===`focusin`?(Or(),yr=t,br=n,yr.attachEvent(`onpropertychange`,kr)):e===`focusout`&&Or()}function jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Sr(br)}function Mr(e,t){if(e===`click`)return Sr(t)}function Nr(e,t){if(e===`input`||e===`change`)return Sr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rr(e,t){var n=Lr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Lr(n)}}function zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Br(){for(var e=window,t=Te();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Te(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Hr(e){var t=Br(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zr(n.ownerDocument.documentElement,n)){if(r!==null&&Vr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Rr(n,a);var o=Rr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ur=c&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==Te(r)||(r=Wr,`selectionStart`in r&&Vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Ir(Kr,r)||(Kr=r,r=yi(Gr,`onSelect`),0<r.length&&(t=new P(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};c&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),ri=$r(`transitionend`),ii=new Map,ai=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function oi(e,t){ii.set(e,t),o(t,[e])}for(var si=0;si<ai.length;si++){var ci=ai[si];oi(ci.toLowerCase(),`on`+(ci[0].toUpperCase()+ci.slice(1)))}oi(ei,`onAnimationEnd`),oi(ti,`onAnimationIteration`),oi(ni,`onAnimationStart`),oi(`dblclick`,`onDoubleClick`),oi(`focusin`,`onFocus`),oi(`focusout`,`onBlur`),oi(ri,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var li=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ui=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(li));function di(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,vt(r,t,void 0,e),e.currentTarget=null}function fi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;di(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;di(i,s,l),a=c}}}if(mt)throw e=ht,mt=!1,ht=null,e}function I(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+`__bubble`;n.has(r)||(gi(t,e,2,!1),n.add(r))}function pi(e,t,n){var r=0;t&&(r|=4),gi(n,e,r,t)}var mi=`_reactListening`+Math.random().toString(36).slice(2);function hi(e){if(!e[mi]){e[mi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ui.has(t)||pi(t,!1,e),pi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,pi(`selectionchange`,!1,t))}}function gi(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!lt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function _i(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}st(function(){var r=a,i=Ze(n),o=[];a:{var s=ii.get(e);if(s!==void 0){var c=P,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=er;break;case`focusin`:l=`focus`,c=Gn;break;case`focusout`:l=`blur`,c=Gn;break;case`beforeblur`:case`afterblur`:c=Gn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Un;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Wn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=F;break;case ei:case ti:case ni:c=Kn;break;case ri:c=nr;break;case`scroll`:c=Rn;break;case`wheel`:c=rr;break;case`copy`:case`cut`:case`paste`:c=qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=tr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=ct(p,f),h!=null&&u.push(vi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Xe&&(l=n.relatedTarget||n.fromElement)&&(Gi(l)||l[Vi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gi(l):null,l!==null&&(d=yt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Un,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=tr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:qi(c),m=l==null?s:qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Gi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=bi(m))p++;for(m=0,h=f;h;h=bi(h))m++;for(;0<p-m;)u=bi(u),p--;for(;0<m-p;)f=bi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=bi(u),f=bi(f)}u=null}else u=null;c!==null&&xi(o,s,c,u,!1),l!==null&&d!==null&&xi(o,d,l,u,!0)}}a:{if(s=r?qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Cr;else if(_r(s))if(wr)g=Nr;else{g=jr;var _=Ar}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Mr);if(g&&=g(e,r)){vr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&je(s,`number`,s.value)}switch(_=r?qi(r):window,e){case`focusin`:(_r(_)||_.contentEditable===`true`)&&(Wr=_,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(o,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(o,n,i)}var v;if(ar)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else pr?dr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(cr&&n.locale!==`ko`&&(pr||y!==`onCompositionStart`?y===`onCompositionEnd`&&pr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,pr=!0)),_=yi(r,y),0<_.length&&(y=new Jn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=fr(n),v!==null&&(y.data=v)))),(v=sr?mr(e,n):hr(e,n))&&(r=yi(r,`onBeforeInput`),0<r.length&&(i=new Jn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}fi(o,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ct(e,n),a!=null&&r.unshift(vi(e,a,i)),a=ct(e,t),a!=null&&r.push(vi(e,a,i))),e=e.return}return r}function bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=ct(n,a),c!=null&&o.unshift(vi(n,c,s))):i||(c=ct(n,a),c!=null&&o.push(vi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Si=/\r\n?/g,Ci=/\u0000|\uFFFD/g;function wi(e){return(typeof e==`string`?e:``+e).replace(Si,`
`).replace(Ci,``)}function Ti(e,t,n){if(t=wi(t),wi(e)!==t&&n)throw Error(r(425))}function Ei(){}var Di=null,Oi=null;function ki(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout==`function`?setTimeout:void 0,ji=typeof clearTimeout==`function`?clearTimeout:void 0,Mi=typeof Promise==`function`?Promise:void 0,Ni=typeof queueMicrotask==`function`?queueMicrotask:Mi===void 0?Ai:function(e){return Mi.resolve(null).then(e).catch(Pi)};function Pi(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);yn(t)}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Li(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),zi=`__reactFiber$`+Ri,Bi=`__reactProps$`+Ri,Vi=`__reactContainer$`+Ri,Hi=`__reactEvents$`+Ri,Ui=`__reactListeners$`+Ri,Wi=`__reactHandles$`+Ri;function Gi(e){var t=e[zi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vi]||n[zi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Li(e);e!==null;){if(n=e[zi])return n;e=Li(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[zi]||e[Vi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ji(e){return e[Bi]||null}var Yi=[],Xi=-1;function Zi(e){return{current:e}}function L(e){0>Xi||(e.current=Yi[Xi],Yi[Xi]=null,Xi--)}function R(e,t){Xi++,Yi[Xi]=e.current,e.current=t}var Qi={},z=Zi(Qi),$i=Zi(!1),ea=Qi;function ta(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function B(e){return e=e.childContextTypes,e!=null}function na(){L($i),L(z)}function ra(e,t,n){if(z.current!==Qi)throw Error(r(168));R(z,t),R($i,n)}function ia(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ye(e)||`Unknown`,a));return E({},n,i)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,ea=z.current,R(z,e),R($i,$i.current),!0}function oa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ia(e,t,ea),i.__reactInternalMemoizedMergedChildContext=e,L($i),L(z),R(z,e)):L($i),R($i,n)}var sa=null,ca=!1,la=!1;function ua(e){sa===null?sa=[e]:sa.push(e)}function da(e){ca=!0,ua(e)}function fa(){if(!la&&sa!==null){la=!0;var e=0,t=j;try{var n=sa;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,ca=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),Tt(At,fa),t}finally{j=t,la=!1}}return null}var pa=[],ma=0,ha=null,ga=0,_a=[],va=0,ya=null,ba=1,xa=``;function Sa(e,t){pa[ma++]=ga,pa[ma++]=ha,ha=e,ga=t}function Ca(e,t,n){_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ya=e;var r=ba;e=xa;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var a=32-Lt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ba=1<<32-Lt(t)+i|n<<i|r,xa=a+e}else ba=1<<a|n<<i|r,xa=e}function wa(e){e.return!==null&&(Sa(e,1),Ca(e,1,0))}function Ta(e){for(;e===ha;)ha=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null;for(;e===ya;)ya=_a[--va],_a[va]=null,xa=_a[--va],_a[va]=null,ba=_a[--va],_a[va]=null}var Ea=null,Da=null,V=!1,Oa=null;function ka(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=Ii(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ya===null?null:{id:ba,overflow:xa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ea=e,Da=null,!0);default:return!1}}function ja(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Ma(e){if(V){var t=Da;if(t){var n=t;if(!Aa(e,t)){if(ja(e))throw Error(r(418));t=Ii(n.nextSibling);var i=Ea;t&&Aa(e,t)?ka(i,n):(e.flags=e.flags&-4097|2,V=!1,Ea=e)}}else{if(ja(e))throw Error(r(418));e.flags=e.flags&-4097|2,V=!1,Ea=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ea=e}function Pa(e){if(e!==Ea)return!1;if(!V)return Na(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ki(e.type,e.memoizedProps)),t&&=Da){if(ja(e))throw Fa(),Error(r(418));for(;t;)ka(e,t),t=Ii(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Da=Ii(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Da=null}}else Da=Ea?Ii(e.stateNode.nextSibling):null;return!0}function Fa(){for(var e=Da;e;)e=Ii(e.nextSibling)}function Ia(){Da=Ea=null,V=!1}function La(e){Oa===null?Oa=[e]:Oa.push(e)}var Ra=C.ReactCurrentBatchConfig;function za(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ba(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Va(e){var t=e._init;return t(e._payload)}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===le&&Va(i)===t.type)?(r=a(t,n.props),r.ref=za(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=za(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=za(e,null,t),n.return=e,n;case ee:return t=eu(t,e.mode,n),t.return=e,t;case le:var r=t._init;return f(e,r(t._payload),n)}if(Me(t)||fe(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case le:return i=n._init,p(e,t,i(n._payload),r)}if(Me(n)||fe(n))return i===null?d(e,t,n,r,null):null;Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Me(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);Ba(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),V&&Sa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Sa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),V&&Sa(r,h),l}function g(a,s,c,l){var u=fe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Sa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Sa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Sa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===le&&Va(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=za(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=za(e,r,i),o.return=e,e=o)}return s(e);case ee:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case le:return l=i._init,_(e,r,l(i._payload),o)}if(Me(i))return h(e,r,i,o);if(fe(i))return g(e,r,i,o);Ba(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ua=Ha(!0),Wa=Ha(!1),Ga=Zi(null),Ka=null,qa=null,Ja=null;function Ya(){Ja=qa=Ka=null}function Xa(e){var t=Ga.current;L(Ga),e._currentValue=t}function Za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qa(e,t){Ka=e,Ja=qa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ls=!0),e.firstContext=null)}function $a(e){var t=e._currentValue;if(Ja!==e)if(e={context:e,memoizedValue:t,next:null},qa===null){if(Ka===null)throw Error(r(308));qa=e,Ka.dependencies={lanes:0,firstContext:e}}else qa=qa.next=e;return t}var eo=null;function to(e){eo===null?eo=[e]:eo.push(e)}function no(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,to(t)):(n.next=i.next,i.next=n),t.interleaved=n,ro(e,r)}function ro(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function so(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ro(e,n)}return i=r.interleaved,i===null?(t.next=t,to(r)):(t.next=i.next,i.next=t),r.interleaved=t,ro(e,n)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xt(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:io=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function po(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var mo={},ho=Zi(mo),go=Zi(mo),_o=Zi(mo);function vo(e){if(e===mo)throw Error(r(174));return e}function yo(e,t){switch(R(_o,t),R(go,e),R(ho,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ze(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ze(t,e)}L(ho),R(ho,t)}function bo(){L(ho),L(go),L(_o)}function xo(e){vo(_o.current);var t=vo(ho.current),n=ze(t,e.type);t!==n&&(R(go,e),R(ho,n))}function H(e){go.current===e&&(L(ho),L(go))}var U=Zi(0);function So(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Co=[];function wo(){for(var e=0;e<Co.length;e++)Co[e]._workInProgressVersionPrimary=null;Co.length=0}var To=C.ReactCurrentDispatcher,Eo=C.ReactCurrentBatchConfig,Do=0,W=null,G=null,K=null,Oo=!1,ko=!1,Ao=0,jo=0;function Mo(){throw Error(r(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function Po(e,t,n,i,a,o){if(Do=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?_s:vs,e=n(i,a),ko){o=0;do{if(ko=!1,Ao=0,25<=o)throw Error(r(301));o+=1,K=G=null,t.updateQueue=null,To.current=ys,e=n(i,a)}while(ko)}if(To.current=gs,t=G!==null&&G.next!==null,Do=0,K=G=W=null,Oo=!1,t)throw Error(r(300));return e}function Fo(){var e=Ao!==0;return Ao=0,e}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?W.memoizedState=K=e:K=K.next=e,K}function Lo(){if(G===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=G.next;var t=K===null?W.memoizedState:K.next;if(t!==null)K=t,G=e;else{if(e===null)throw Error(r(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},K===null?W.memoizedState=K=e:K=K.next=e}return K}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){var t=Lo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=G,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Do&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,W.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Fr(i,t.memoizedState)||(Ls=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,W.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Lo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(Ls=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Vo(){}function Ho(e,t){var n=W,i=Lo(),a=t(),o=!Fr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ls=!0),i=i.queue,es(Go.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||K!==null&&K.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Wo.bind(null,n,i,a,t),void 0,null),Wc===null)throw Error(r(349));Do&30||Uo(n,t,a)}return a}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function qo(e){var t=ro(e,1);t!==null&&hl(t,e,1,-1)}function Jo(e){var t=Io();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=fs.bind(null,W,e),[t.memoizedState,e]}function Yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xo(){return Lo().memoizedState}function Zo(e,t,n,r){var i=Io();W.flags|=e,i.memoizedState=Yo(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=Lo();r=r===void 0?null:r;var a=void 0;if(G!==null){var o=G.memoizedState;if(a=o.destroy,r!==null&&No(r,o.deps)){i.memoizedState=Yo(t,n,a,r);return}}W.flags|=e,i.memoizedState=Yo(1|t,n,a,r)}function $o(e,t){return Zo(8390656,8,e,t)}function es(e,t){return Qo(2048,8,e,t)}function ts(e,t){return Qo(4,2,e,t)}function ns(e,t){return Qo(4,4,e,t)}function rs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function is(e,t,n){return n=n==null?null:n.concat([e]),Qo(4,4,rs.bind(null,t,e),n)}function as(){}function os(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ss(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cs(e,t,n){return Do&21?(Fr(n,t)||(n=Kt(),W.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n)}function ls(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Eo.transition;Eo.transition={};try{e(!1),t()}finally{j=n,Eo.transition=r}}function us(){return Lo().memoizedState}function ds(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ps(e))ms(t,n);else if(n=no(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),hs(n,t,r)}}function fs(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ps(e))ms(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o)){var c=t.interleaved;c===null?(i.next=i,to(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=no(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),hs(n,t,r))}}function ps(e){var t=e.alternate;return e===W||t!==null&&t===W}function ms(e,t){ko=Oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xt(e,n)}}var gs={readContext:$a,useCallback:Mo,useContext:Mo,useEffect:Mo,useImperativeHandle:Mo,useInsertionEffect:Mo,useLayoutEffect:Mo,useMemo:Mo,useReducer:Mo,useRef:Mo,useState:Mo,useDebugValue:Mo,useDeferredValue:Mo,useTransition:Mo,useMutableSource:Mo,useSyncExternalStore:Mo,useId:Mo,unstable_isNewReconciler:!1},_s={readContext:$a,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:$a,useEffect:$o,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Zo(4194308,4,rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=Io();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Io();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ds.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:Jo,useDebugValue:as,useDeferredValue:function(e){return Io().memoizedState=e},useTransition:function(){var e=Jo(!1),t=e[0];return e=ls.bind(null,e[1]),Io().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=W,a=Io();if(V){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Wc===null)throw Error(r(349));Do&30||Uo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,$o(Go.bind(null,i,o,e),[e]),i.flags|=2048,Yo(9,Wo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Io(),t=Wc.identifierPrefix;if(V){var n=xa,r=ba;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Ao++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=jo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},vs={readContext:$a,useCallback:os,useContext:$a,useEffect:es,useImperativeHandle:is,useInsertionEffect:ts,useLayoutEffect:ns,useMemo:ss,useReducer:zo,useRef:Xo,useState:function(){return zo(Ro)},useDebugValue:as,useDeferredValue:function(e){return cs(Lo(),G.memoizedState,e)},useTransition:function(){return[zo(Ro)[0],Lo().memoizedState]},useMutableSource:Vo,useSyncExternalStore:Ho,useId:us,unstable_isNewReconciler:!1},ys={readContext:$a,useCallback:os,useContext:$a,useEffect:es,useImperativeHandle:is,useInsertionEffect:ts,useLayoutEffect:ns,useMemo:ss,useReducer:Bo,useRef:Xo,useState:function(){return Bo(Ro)},useDebugValue:as,useDeferredValue:function(e){var t=Lo();return G===null?t.memoizedState=e:cs(t,G.memoizedState,e)},useTransition:function(){return[Bo(Ro)[0],Lo().memoizedState]},useMutableSource:Vo,useSyncExternalStore:Ho,useId:us,unstable_isNewReconciler:!1};function bs(e,t){if(e&&e.defaultProps){for(var n in t=E({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=so(r,i);a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(hl(t,e,i,r),lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=so(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=co(e,a,i),t!==null&&(hl(t,e,i,r),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=so(n,r);i.tag=2,t!=null&&(i.callback=t),t=co(e,i,r),t!==null&&(hl(t,e,r,n),lo(t,e,r))}};function Cs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function ws(e,t,n){var r=!1,i=Qi,a=t.contextType;return typeof a==`object`&&a?a=$a(a):(i=B(t)?ea:z.current,r=t.contextTypes,a=(r=r!=null)?ta(e,i):Qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ao(e);var a=t.contextType;typeof a==`object`&&a?i.context=$a(a):(a=B(t)?ea:z.current,i.context=ta(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(xs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ds(e,t){try{var n=``,r=t;do n+=_e(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=so(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),ks(e,t)},n}function Ms(e,t,n){n=so(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ks(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ks(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new As;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=so(-1,1),t.tag=2,co(n,t,1))),n.lanes|=1),e)}var Is=C.ReactCurrentOwner,Ls=!1;function q(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function Rs(e,t,n,r,i){n=n.render;var a=t.ref;return Qa(t,i),r=Po(e,t,n,r,a,i),n=Fo(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ic(e,t,i)):(V&&n&&wa(t),t.flags|=1,q(e,t,r,i),t.child)}function zs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Bs(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return ic(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Bs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref)if(Ls=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ls=!0);else return t.lanes=e.lanes,ic(e,t,i)}return Us(e,t,n,r,i)}function Vs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(qc,Kc),Kc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(qc,Kc),Kc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,R(qc,Kc),Kc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),R(qc,Kc),Kc|=r;return q(e,t,i,n),t.child}function Hs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Us(e,t,n,r,i){var a=B(n)?ea:z.current;return a=ta(t,a),Qa(t,i),n=Po(e,t,n,r,a,i),r=Fo(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ic(e,t,i)):(V&&r&&wa(t),t.flags|=1,q(e,t,n,i),t.child)}function Ws(e,t,n,r,i){if(B(n)){var a=!0;aa(t)}else a=!1;if(Qa(t,i),t.stateNode===null)rc(e,t),ws(t,n,r),Es(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=$a(l):(l=B(n)?ea:z.current,l=ta(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ts(t,o,r,l),io=!1;var f=t.memoizedState;o.state=f,fo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||$i.current||io?(typeof u==`function`&&(xs(t,n,u,r),c=t.memoizedState),(s=io||Cs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,oo(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:bs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=$a(c):(c=B(n)?ea:z.current,c=ta(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ts(t,o,r,c),io=!1,f=t.memoizedState,o.state=f,fo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||$i.current||io?(typeof p==`function`&&(xs(t,n,p,r),m=t.memoizedState),(l=io||Cs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,a,i)}function Gs(e,t,n,r,i,a){Hs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&oa(t,n,!1),ic(e,t,a);r=t.stateNode,Is.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ua(t,e.child,null,a),t.child=Ua(t,null,s,a)):q(e,t,s,a),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function Ks(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),yo(e,t.containerInfo)}function qs(e,t,n,r,i){return Ia(),La(i),t.flags|=256,q(e,t,n,r),t.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xs(e,t,n){var r=t.pendingProps,i=U.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(U,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ys(n),t.memoizedState=Js,e):Zs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $s(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ys(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Js,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zs(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Qs(e,t,n,r){return r!==null&&La(r),Ua(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $s(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Os(Error(r(422))),Qs(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ua(t,e.child,null,s),t.child.memoizedState=Ys(s),t.memoizedState=Js,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Qs(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Os(o,i,void 0),Qs(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ls||c){if(i=Wc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ro(e,a),hl(i,e,a,-1))}return kl(),i=Os(Error(r(421))),Qs(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Da=Ii(a.nextSibling),Ea=t,V=!0,Oa=null,e!==null&&(_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ba=e.id,xa=e.overflow,ya=t),t=Zs(t,i.children),t.flags|=4096,t)}function ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Za(e.return,t,n)}function tc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(q(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,n,t);else if(e.tag===19)ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&So(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&So(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tc(t,!0,n,null,a);break;case`together`:tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ic(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ac(e,t,n){switch(t.tag){case 3:Ks(t),Ia();break;case 5:xo(t);break;case 1:B(t.type)&&aa(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(R(U,U.current&1),e=ic(e,t,n),e===null?null:e.sibling):Xs(e,t,n):(R(U,U.current&1),t.flags|=128,null);R(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Vs(e,t,n)}return ic(e,t,n)}var oc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vo(ho.current);var o=null;switch(n){case`input`:i=Ee(e,i),r=Ee(e,r),o=[];break;case`select`:i=E({},i,{value:void 0}),r=E({},r,{value:void 0}),o=[];break;case`textarea`:i=Pe(e,i),r=Pe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ei)}Je(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&I(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},cc=function(e,t,n,r){n!==r&&(t.flags|=4)};function lc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function uc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dc(e,t,n){var i=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return uc(t),null;case 1:return B(t.type)&&na(),uc(t),null;case 3:return i=t.stateNode,bo(),L($i),L(z),wo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oa!==null&&(yl(Oa),Oa=null))),uc(t),null;case 5:H(t);var o=vo(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return uc(t),null}if(e=vo(ho.current),Pa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[zi]=t,i[Bi]=s,e=(t.mode&1)!=0,n){case`dialog`:I(`cancel`,i),I(`close`,i);break;case`iframe`:case`object`:case`embed`:I(`load`,i);break;case`video`:case`audio`:for(o=0;o<li.length;o++)I(li[o],i);break;case`source`:I(`error`,i);break;case`img`:case`image`:case`link`:I(`error`,i),I(`load`,i);break;case`details`:I(`toggle`,i);break;case`input`:De(i,s),I(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},I(`invalid`,i);break;case`textarea`:Fe(i,s),I(`invalid`,i)}for(var c in Je(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&I(`scroll`,i)}switch(n){case`input`:Ce(i),Ae(i,s,!0);break;case`textarea`:Ce(i),Le(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ei)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Re(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[zi]=t,e[Bi]=i,oc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ye(n,i),n){case`dialog`:I(`cancel`,e),I(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:I(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<li.length;o++)I(li[o],e);o=i;break;case`source`:I(`error`,e),o=i;break;case`img`:case`image`:case`link`:I(`error`,e),I(`load`,e),o=i;break;case`details`:I(`toggle`,e),o=i;break;case`input`:De(e,i),o=Ee(e,i),I(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=E({},i,{value:void 0}),I(`invalid`,e);break;case`textarea`:Fe(e,i),o=Pe(e,i),I(`invalid`,e);break;default:o=i}for(s in Je(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ke(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ve(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&He(e,u):typeof u==`number`&&He(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&I(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:Ce(e),Ae(e,i,!1);break;case`textarea`:Ce(e),Le(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+be(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ne(e,!!i.multiple,i.defaultValue,!0):Ne(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ei)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return uc(t),null;case 6:if(e&&t.stateNode!=null)cc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=vo(_o.current),vo(ho.current),Pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[zi]=t,(s=i.nodeValue!==n)&&(e=Ea,e!==null))switch(e.tag){case 3:Ti(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ti(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=t,t.stateNode=i}return uc(t),null;case 13:if(L(U),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Da!==null&&t.mode&1&&!(t.flags&128))Fa(),Ia(),t.flags|=98560,s=!1;else if(s=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[zi]=t}else Ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;uc(t),s=!1}else Oa!==null&&(yl(Oa),Oa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Q===0&&(Q=3):kl())),t.updateQueue!==null&&(t.flags|=4),uc(t),null);case 4:return bo(),e===null&&hi(t.stateNode.containerInfo),uc(t),null;case 10:return Xa(t.type._context),uc(t),null;case 17:return B(t.type)&&na(),uc(t),null;case 19:if(L(U),s=t.memoizedState,s===null)return uc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)lc(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=So(e),c!==null){for(t.flags|=128,lc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(U,U.current&1|2),t.child}e=e.sibling}s.tail!==null&&D()>tl&&(t.flags|=128,i=!0,lc(s,!1),t.lanes=4194304)}else{if(!i)if(e=So(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!V)return uc(t),null}else 2*D()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,lc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(uc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=D(),t.sibling=null,n=U.current,R(U,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Kc&1073741824&&(uc(t),t.subtreeFlags&6&&(t.flags|=8192)):uc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function fc(e,t){switch(Ta(t),t.tag){case 1:return B(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bo(),L($i),L(z),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return H(t),null;case 13:if(L(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(U),null;case 4:return bo(),null;case 10:return Xa(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var pc=!1,mc=!1,hc=typeof WeakSet==`function`?WeakSet:Set,J=null;function gc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function _c(e,t,n){try{n()}catch(n){$(e,t,n)}}var vc=!1;function yc(e,t){if(Di=xn,e=Br(),Vr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},xn=!1,J=t;J!==null;)if(t=J,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:bs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return h=vc,vc=!1,h}function bc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&_c(t,n,a)}i=i.next}while(i!==r)}}function xc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Cc(e){var t=e.alternate;t!==null&&(e.alternate=null,Cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zi],delete t[Bi],delete t[Hi],delete t[Ui],delete t[Wi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wc(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(Ec(e,t,n),e=e.sibling;e!==null;)Ec(e,t,n),e=e.sibling}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}var Y=null,Oc=!1;function kc(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(O&&typeof O.onCommitFiberUnmount==`function`)try{O.onCommitFiberUnmount(Ft,n)}catch{}switch(n.tag){case 5:mc||gc(n,t);case 6:var r=Y,i=Oc;Y=null,kc(e,t,n),Y=r,Oc=i,Y!==null&&(Oc?(e=Y,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Y.removeChild(n.stateNode));break;case 18:Y!==null&&(Oc?(e=Y,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),yn(e)):Fi(Y,n.stateNode));break;case 4:r=Y,i=Oc,Y=n.stateNode.containerInfo,Oc=!0,kc(e,t,n),Y=r,Oc=i;break;case 0:case 11:case 14:case 15:if(!mc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&_c(n,t,o),i=i.next}while(i!==r)}kc(e,t,n);break;case 1:if(!mc&&(gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}kc(e,t,n);break;case 21:kc(e,t,n);break;case 22:n.mode&1?(mc=(r=mc)||n.memoizedState!==null,kc(e,t,n),mc=r):kc(e,t,n);break;default:kc(e,t,n)}}function jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Mc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Y=c.stateNode,Oc=!1;break a;case 3:Y=c.stateNode.containerInfo,Oc=!0;break a;case 4:Y=c.stateNode.containerInfo,Oc=!0;break a}c=c.return}if(Y===null)throw Error(r(160));Ac(o,s,a),Y=null,Oc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mc(t,e),Pc(e),i&4){try{bc(3,e,e.return),xc(3,e)}catch(t){$(e,e.return,t)}try{bc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Mc(t,e),Pc(e),i&512&&n!==null&&gc(n,n.return);break;case 5:if(Mc(t,e),Pc(e),i&512&&n!==null&&gc(n,n.return),e.flags&32){var a=e.stateNode;try{He(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Oe(a,o),Ye(c,s);var u=Ye(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ke(a,f):d===`dangerouslySetInnerHTML`?Ve(a,f):d===`children`?He(a,f):S(a,d,f,u)}switch(c){case`input`:ke(a,o);break;case`textarea`:Ie(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ne(a,!!o.multiple,o.multiple?[]:``,!1):Ne(a,!!o.multiple,o.defaultValue,!0)):Ne(a,!!o.multiple,m,!1)}a[Bi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Mc(t,e),Pc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Mc(t,e),Pc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Mc(t,e),Pc(e);break;case 13:Mc(t,e),Pc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=D())),i&4&&jc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(mc=(u=mc)||d,Mc(t,e),mc=u):Mc(t,e),Pc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(J=e,d=e.child;d!==null;){for(f=J=d;J!==null;){switch(p=J,m=p.child,p.tag){case 0:case 11:case 14:case 15:bc(4,p,p.return);break;case 1:gc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:gc(p,p.return);break;case 22:if(p.memoizedState!==null){Rc(f);continue}}m===null?Rc(f):(m.return=p,J=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ge(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Mc(t,e),Pc(e),i&4&&jc(e);break;case 21:break;default:Mc(t,e),Pc(e)}}function Pc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(wc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(He(a,``),i.flags&=-33),Dc(e,Tc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Ec(e,Tc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fc(e,t,n){J=e,Ic(e,t,n)}function Ic(e,t,n){for(var r=(e.mode&1)!=0;J!==null;){var i=J,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||pc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||mc;s=pc;var l=mc;if(pc=o,(mc=c)&&!l)for(J=i;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?zc(i):(c.return=o,J=c);for(;a!==null;)J=a,Ic(a,t,n),a=a.sibling;J=i,pc=s,mc=l}Lc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,J=a):Lc(e,t,n)}}function Lc(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mc||xc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!mc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:bs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&po(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}po(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}mc||t.flags&512&&Sc(t)}catch(e){$(t,t.return,e)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Rc(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function zc(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{Sc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{Sc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){J=null;break}var s=t.sibling;if(s!==null){s.return=t.return,J=s;break}J=t.return}}var Bc=Math.ceil,Vc=C.ReactCurrentDispatcher,Hc=C.ReactCurrentOwner,Uc=C.ReactCurrentBatchConfig,X=0,Wc=null,Z=null,Gc=0,Kc=0,qc=Zi(0),Q=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return X&6?D():dl===-1?dl=D():dl}function ml(e){return e.mode&1?X&2&&Gc!==0?Gc&-Gc:Ra.transition===null?(e=j,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(fl===0&&(fl=Kt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Jt(e,n,i),(!(X&2)||e!==Wc)&&(e===Wc&&(!(X&2)&&(Xc|=n),Q===4&&xl(e,Gc)),gl(e,i),n===1&&X===0&&!(t.mode&1)&&(tl=D()+500,ca&&fa()))}function gl(e,t){var n=e.callbackNode;Wt(e,t);var r=Ht(e,e===Wc?Gc:0);if(r===0)n!==null&&Et(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Et(n),t===1)e.tag===0?da(Sl.bind(null,e)):ua(Sl.bind(null,e)),Ni(function(){!(X&6)&&fa()}),n=null;else{switch(Zt(r)){case 1:n=At;break;case 4:n=jt;break;case 16:n=Mt;break;case 536870912:n=Pt;break;default:n=Mt}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,X&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Ht(e,e===Wc?Gc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=X;X|=2;var o=Ol();(Wc!==e||Gc!==t)&&(nl=null,tl=D()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Ya(),Vc.current=o,X=a,Z===null?(Wc=null,Gc=0,t=Q):t=0}if(t!==0){if(t===2&&(a=Gt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,D()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=Gt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,D()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-D(),10<t)){if(Ht(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ai(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Lt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=D()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bc(i/1960))-i,10<i){e.timeoutHandle=Ai(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,D()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(X&6)throw Error(r(327));Ll();var t=Ht(e,0);if(!(t&1))return gl(e,D()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Gt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,D()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,D()),null}function Cl(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(tl=D()+500,ca&&fa())}}function wl(e){sl!==null&&sl.tag===0&&!(X&6)&&Ll();var t=X;X|=1;var n=Uc.transition,r=j;try{if(Uc.transition=null,j=1,e)return e()}finally{j=r,Uc.transition=n,X=t,!(X&6)&&fa()}}function Tl(){Kc=qc.current,L(qc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ji(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:bo(),L($i),L(z),wo();break;case 5:H(r);break;case 4:bo();break;case 13:L(U);break;case 19:L(U);break;case 10:Xa(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Wc=e,Z=e=Yl(e.current,null),Gc=Kc=t,Q=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,eo!==null){for(t=0;t<eo.length;t++)if(n=eo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}eo=null}return e}function Dl(e,t){do{var n=Z;try{if(Ya(),To.current=gs,Oo){for(var i=W.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Oo=!1}if(Do=0,K=G=W=null,ko=!1,Ao=0,Hc.current=null,n===null||n.return===null){Q=1,Jc=t,Z=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Gc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ps(s);if(m!==null){m.flags&=-257,Fs(m,s,c,o,t),m.mode&1&&Ns(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ns(o,u,t),kl();break a}l=Error(r(426))}}else if(V&&c.mode&1){var _=Ps(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Fs(_,s,c,o,t),La(Ds(l,c));break a}}o=l=Ds(l,c),Q!==4&&(Q=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=js(o,l,t);uo(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ms(o,c,t);uo(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function Ol(){var e=Vc.current;return Vc.current=gs,e===null?gs:e}function kl(){(Q===0||Q===3||Q===2)&&(Q=4),Wc===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Wc,Gc)}function Al(e,t){var n=X;X|=2;var i=Ol();(Wc!==e||Gc!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Ya(),X=n,Vc.current=i,Z!==null)throw Error(r(261));return Wc=null,Gc=0,Q}function jl(){for(;Z!==null;)Nl(Z)}function Ml(){for(;Z!==null&&!Dt();)Nl(Z)}function Nl(e){var t=Ul(e.alternate,e,Kc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Z=t,Hc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fc(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,Z=null;return}}else if(n=dc(n,t,Kc),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Q===0&&(Q=5)}function Fl(e,t,n){var r=j,i=Uc.transition;try{Uc.transition=null,j=1,Il(e,t,n,r)}finally{Uc.transition=i,j=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(X&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yt(e,o),e===Wc&&(Z=Wc=null,Gc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Wl(Mt,function(){return Ll(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Uc.transition,Uc.transition=null;var s=j;j=1;var c=X;X|=4,Hc.current=null,yc(e,n),Nc(n,e),Hr(Oi),xn=!!Di,Oi=Di=null,e.current=n,Fc(n,e,a),Ot(),X=c,j=s,Uc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),It(n.stateNode,i),gl(e,D()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,fa(),null}function Ll(){if(sl!==null){var e=Zt(cl),t=Uc.transition,n=j;try{if(Uc.transition=null,j=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,X&6)throw Error(r(331));var a=X;for(X|=4,J=e.current;J!==null;){var o=J,s=o.child;if(J.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(J=u;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:bc(8,d,o)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var p=d.sibling,m=d.return;if(Cc(d),d===u){J=null;break}if(p!==null){p.return=m,J=p;break}J=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}J=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,J=s;else b:for(;J!==null;){if(o=J,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,J=v;break b}J=o.return}}var y=e.current;for(J=y;J!==null;){s=J;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,J=b;else b:for(s=y;J!==null;){if(c=J,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:xc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){J=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,J=x;break b}J=c.return}}if(X=a,fa(),O&&typeof O.onPostCommitFiberRoot==`function`)try{O.onPostCommitFiberRoot(Ft,e)}catch{}i=!0}return i}finally{j=n,Uc.transition=t}}return!1}function Rl(e,t,n){t=Ds(n,t),t=js(e,t,1),e=co(e,t,1),t=pl(),e!==null&&(Jt(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=Ds(n,e),e=Ms(t,e,1),t=co(t,e,1),e=pl(),t!==null&&(Jt(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Wc===e&&(Gc&n)===n&&(Q===4||Q===3&&(Gc&130023424)===Gc&&500>D()-el?El(e,0):Zc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Bt,Bt<<=1,!(Bt&130023424)&&(Bt=4194304)):t=1);var n=pl();e=ro(e,t),e!==null&&(Jt(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$i.current)Ls=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ls=!1,ac(e,t,n);Ls=!!(e.flags&131072)}else Ls=!1,V&&t.flags&1048576&&Ca(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;rc(e,t),e=t.pendingProps;var a=ta(t,z.current);Qa(t,n),a=Po(null,t,i,e,a,n);var o=Fo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,B(i)?(o=!0,aa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ao(t),a.updater=Ss,t.stateNode=a,a._reactInternals=t,Es(t,i,e,n),t=Gs(null,t,i,!0,o,n)):(t.tag=0,V&&o&&wa(t),q(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(rc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=bs(i,e),a){case 0:t=Us(null,t,i,e,n);break a;case 1:t=Ws(null,t,i,e,n);break a;case 11:t=Rs(null,t,i,e,n);break a;case 14:t=zs(null,t,i,bs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Us(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Ws(e,t,i,a,n);case 3:a:{if(Ks(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,oo(e,t),fo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ds(Error(r(423)),t),t=qs(e,t,i,n,a);break a}else if(i!==a){a=Ds(Error(r(424)),t),t=qs(e,t,i,n,a);break a}else for(Da=Ii(t.stateNode.containerInfo.firstChild),Ea=t,V=!0,Oa=null,n=Wa(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),i===a){t=ic(e,t,n);break a}q(e,t,i,n)}t=t.child}return t;case 5:return xo(t),e===null&&Ma(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ki(i,a)?s=null:o!==null&&ki(i,o)&&(t.flags|=32),Hs(e,t),q(e,t,s,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return Xs(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ua(t,null,i,n):q(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Rs(e,t,i,a,n);case 7:return q(e,t,t.pendingProps,n),t.child;case 8:return q(e,t,t.pendingProps.children,n),t.child;case 12:return q(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,R(Ga,i._currentValue),i._currentValue=s,o!==null)if(Fr(o.value,s)){if(o.children===a.children&&!$i.current){t=ic(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=so(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Za(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Za(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}q(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,Qa(t,n),a=$a(a),i=i(a),t.flags|=1,q(e,t,i,n),t.child;case 14:return i=t.type,a=bs(i,t.pendingProps),a=bs(i.type,a),zs(e,t,i,a,n);case 15:return Bs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),rc(e,t),t.tag=1,B(i)?(e=!0,aa(t)):e=!1,Qa(t,n),ws(t,i,a),Es(t,i,a,n),Gs(null,t,i,!0,e,n);case 19:return nc(e,t,n);case 22:return Vs(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return Tt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===T)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return Zl(n.children,a,o,t);case ne:s=8,a|=8;break;case re:return e=Kl(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case se:return e=Kl(13,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return e=Kl(19,n,t,a),e.elementType=ce,e.lanes=o,e;case ue:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ie:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case T:s=14;break a;case le:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qt(0),this.expirationTimes=qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ao(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Qi;e=e._reactInternals;a:{if(yt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(B(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(B(n))return ia(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=pl(),i=ml(n),a=so(r,i),a.callback=t??null,co(n,a,i),e.current.lanes=i,Jt(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=so(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=co(i,t,o),e!==null&&(hl(e,i,o,a),lo(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Vi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&hn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Vi]=o.current,hi(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Vi]=c.current,hi(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Qt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vt(t.pendingLanes);n!==0&&(Xt(t,n|1),gl(t,D()),!(X&6)&&(tl=D()+500,fa()))}break;case 13:wl(function(){var t=ro(e,1);t!==null&&hl(t,e,1,pl())}),lu(e,1)}},$t=function(e){if(e.tag===13){var t=ro(e,134217728);t!==null&&hl(t,e,134217728,pl()),lu(e,134217728)}},en=function(e){if(e.tag===13){var t=ml(e),n=ro(e,t);n!==null&&hl(n,e,t,pl()),lu(e,t)}},tn=function(){return j},nn=function(e,t){var n=j;try{return j=e,t()}finally{j=n}},Qe=function(e,t,n){switch(t){case`input`:if(ke(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ji(i);if(!a)throw Error(r(90));we(i),ke(i,a)}}}break;case`textarea`:Ie(e,n);break;case`select`:t=n.value,t!=null&&Ne(e,!!n.multiple,t,!1)}},it=Cl,at=wl;var yu={usingClientEntryPoint:!1,Events:[Ki,qi,Ji,nt,rt,Cl]},bu={findFiberByHostInstance:Gi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ct(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Ft=Su.inject(xu),O=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Vi]=t.current,hi(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=Ct(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Vi]=t.current,hi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Vi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=_();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),y=u(p()),b=u(v()),x=`/assets/Logo%20Yobante%20Boutique%20-%20Fond%20Blanc-DKBzmY-Z.PNG`,S=s((e=>{var t=p(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),C=s(((e,t)=>{t.exports=S()}))(),w=({scrolled:e,hidden:t,scrollTo:n})=>{let[r,i]=(0,y.useState)(!1),a=[{label:`Services`,id:`services`},{label:`Applications`,id:`apps`},{label:`FAQ`,id:`faq`},{label:`Contact`,id:`contact`},{label:`Qui sommes-nous ?`,id:`about`}],o=e=>{n(e),i(!1)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`nav`,{className:`navbar ${e?`scrolled`:``} ${t?`nav-hidden`:``}`,children:[(0,C.jsxs)(`div`,{className:`nav-container`,children:[(0,C.jsx)(`button`,{className:`logo`,onClick:()=>o(`hero`),children:(0,C.jsx)(`img`,{src:x,alt:`YOBANTÉ Logo`,className:`logo-img`})}),(0,C.jsx)(`div`,{className:`nav-links desktop-links`,children:a.map(e=>(0,C.jsx)(`button`,{onClick:()=>o(e.id),children:e.label},e.id))}),(0,C.jsx)(`button`,{className:`nav-cta`,onClick:()=>o(`contact`),children:`Nous contacter`}),(0,C.jsxs)(`button`,{className:`burger ${r?`active`:``}`,onClick:()=>i(!r),"aria-label":`Menu`,children:[(0,C.jsx)(`span`,{}),(0,C.jsx)(`span`,{}),(0,C.jsx)(`span`,{})]})]}),(0,C.jsxs)(`div`,{className:`mobile-menu ${r?`open`:``}`,children:[a.map(e=>(0,C.jsx)(`button`,{className:`mobile-link`,onClick:()=>o(e.id),children:e.label},e.id)),(0,C.jsx)(`button`,{className:`mobile-cta`,onClick:()=>o(`contact`),children:`Nous contacter`})]})]}),(0,C.jsx)(`style`,{jsx:!0,children:`
    .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 1000;
  transition: transform 0.35s ease, box-shadow 0.3s ease, padding 0.3s ease;
  padding: 0px 0;

  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.06);
}

.navbar.nav-hidden {
  transform: translateY(-100%);
}

       .navbar.scrolled {
  padding: 8px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* Logo */
        .logo {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 72px;
          width: auto;
          object-fit: contain;
        }

        /* Desktop Nav */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .desktop-links button {
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          transition: color 0.3s ease;
          position: relative;
        }

        .desktop-links button::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: #1E3A8A;
          transition: width 0.3s ease;
        }

        .desktop-links button:hover {
          color: #1E3A8A;
        }

        .desktop-links button:hover::after {
          width: 100%;
        }

        /* CTA */
        .nav-cta {
          border: none;
          background: #1E3A8A;
          color: white;
          padding: 8px 17px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 191, 255, 0.18);
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          background: #1A3278;
        }

        /* Burger */
        .burger {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          border: none;
          background: #f8fafc;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .burger span {
          width: 22px;
          height: 2px;
          background: #0f172a;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .burger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }

        .burger.active span:nth-child(2) {
          opacity: 0;
        }

        .burger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 20px 24px 30px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-link {
          border: none;
          background: #f8fafc;
          padding: 15px 18px;
          border-radius: 14px;
          text-align: left;
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          background: #EEF2FF;
          color: #1E3A8A;
        }

        .mobile-cta {
          margin-top: 8px;
          border: none;
          background: #1E3A8A;
          color: white;
          padding: 16px;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .desktop-links,
          .nav-cta {
            display: none;
          }

          .burger {
            display: flex;
          }

          .logo-img {
            height: 54px;
            width: auto;
          }
        }

        @media (min-width: 901px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 18px;
          }

          .logo-img {
            height: 48px;
            width: auto;
          }

          .burger {
            width: 42px;
            height: 42px;
          }
        }
      `})]})},ee=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),te=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ne=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),re=e=>{let t=ne(e);return t.charAt(0).toUpperCase()+t.slice(1)},ie={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ae=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},oe=(0,y.createContext)({}),se=()=>(0,y.useContext)(oe),ce=(0,y.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=se()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,y.createElement)(`svg`,{ref:c,...ie,width:t??l??ie.width,height:t??l??ie.height,stroke:e??f,strokeWidth:m,className:ee(`lucide`,p,i),...!a&&!ae(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,y.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),T=(e,t)=>{let n=(0,y.forwardRef)(({className:n,...r},i)=>(0,y.createElement)(ce,{ref:i,iconNode:t,className:ee(`lucide-${te(re(e))}`,`lucide-${e}`,n),...r}));return n.displayName=re(e),n},le=T(`apple`,[[`path`,{d:`M12 6.528V3a1 1 0 0 1 1-1h0`,key:`11qiee`}],[`path`,{d:`M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21`,key:`110c12`}]]),ue=T(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),de=T(`baby`,[[`path`,{d:`M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5`,key:`1u7htd`}],[`path`,{d:`M15 12h.01`,key:`1k8ypt`}],[`path`,{d:`M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1`,key:`11xh7x`}],[`path`,{d:`M9 12h.01`,key:`157uk2`}]]),fe=T(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),E=T(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),pe=T(`coffee`,[[`path`,{d:`M10 2v2`,key:`7u0qdc`}],[`path`,{d:`M14 2v2`,key:`6buw04`}],[`path`,{d:`M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`,key:`pwadti`}],[`path`,{d:`M6 2v2`,key:`colzsn`}]]),me=T(`cookie`,[[`path`,{d:`M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5`,key:`laymnq`}],[`path`,{d:`M8.5 8.5v.01`,key:`ue8clq`}],[`path`,{d:`M16 15.5v.01`,key:`14dtrp`}],[`path`,{d:`M12 12v.01`,key:`u5ubse`}],[`path`,{d:`M11 17v.01`,key:`1hyl5a`}],[`path`,{d:`M7 14v.01`,key:`uct60s`}]]),he=T(`droplets`,[[`path`,{d:`M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z`,key:`1ptgy4`}],[`path`,{d:`M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97`,key:`1sl1rz`}]]),ge=T(`dumbbell`,[[`path`,{d:`M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z`,key:`9m4mmf`}],[`path`,{d:`m2.5 21.5 1.4-1.4`,key:`17g3f0`}],[`path`,{d:`m20.1 3.9 1.4-1.4`,key:`1qn309`}],[`path`,{d:`M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z`,key:`1t2c92`}],[`path`,{d:`m9.6 14.4 4.8-4.8`,key:`6umqxw`}]]),_e=T(`egg`,[[`path`,{d:`M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12`,key:`1le142`}]]),ve=T(`fish`,[[`path`,{d:`M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z`,key:`15baut`}],[`path`,{d:`M18 12v.5`,key:`18hhni`}],[`path`,{d:`M16 17.93a9.77 9.77 0 0 1 0-11.86`,key:`16dt7o`}],[`path`,{d:`M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33`,key:`l9di03`}],[`path`,{d:`M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4`,key:`1kjonw`}],[`path`,{d:`m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98`,key:`1zlm23`}]]),ye=T(`flask-conical`,[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]),be=T(`gamepad-2`,[[`line`,{x1:`6`,x2:`10`,y1:`11`,y2:`11`,key:`1gktln`}],[`line`,{x1:`8`,x2:`8`,y1:`9`,y2:`13`,key:`qnk9ow`}],[`line`,{x1:`15`,x2:`15.01`,y1:`12`,y2:`12`,key:`krot7o`}],[`line`,{x1:`18`,x2:`18.01`,y1:`10`,y2:`10`,key:`1lcuu1`}],[`path`,{d:`M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,key:`mfqc10`}]]),xe=T(`glass-water`,[[`path`,{d:`M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z`,key:`p55z4y`}],[`path`,{d:`M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0`,key:`mjntcy`}]]),Se=T(`headphones`,[[`path`,{d:`M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3`,key:`1xhozi`}]]),Ce=T(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),we=T(`laptop`,[[`path`,{d:`M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z`,key:`1pdavp`}],[`path`,{d:`M20.054 15.987H3.946`,key:`14rxg9`}]]),Te=T(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),Ee=T(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),De=T(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Oe=T(`message-circle`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}]]),ke=T(`package`,[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]),Ae=T(`paw-print`,[[`circle`,{cx:`11`,cy:`4`,r:`2`,key:`vol9p0`}],[`circle`,{cx:`18`,cy:`8`,r:`2`,key:`17gozi`}],[`circle`,{cx:`20`,cy:`16`,r:`2`,key:`1v9bxh`}],[`path`,{d:`M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z`,key:`1ydw1z`}]]),je=T(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Me=T(`plane`,[[`path`,{d:`M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`,key:`1v9wt8`}]]),Ne=T(`ship`,[[`path`,{d:`M12 10.189V14`,key:`1p8cqu`}],[`path`,{d:`M12 2v3`,key:`qbqxhf`}],[`path`,{d:`M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6`,key:`qpkstq`}],[`path`,{d:`M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76`,key:`7tigtc`}],[`path`,{d:`M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1`,key:`1924j5`}]]),Pe=T(`shirt`,[[`path`,{d:`M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z`,key:`1wgbhj`}]]),Fe=T(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),Ie=T(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),Le=T(`snowflake`,[[`path`,{d:`m10 20-1.25-2.5L6 18`,key:`18frcb`}],[`path`,{d:`M10 4 8.75 6.5 6 6`,key:`7mghy3`}],[`path`,{d:`m14 20 1.25-2.5L18 18`,key:`1chtki`}],[`path`,{d:`m14 4 1.25 2.5L18 6`,key:`1b4wsy`}],[`path`,{d:`m17 21-3-6h-4`,key:`15hhxa`}],[`path`,{d:`m17 3-3 6 1.5 3`,key:`11697g`}],[`path`,{d:`M2 12h6.5L10 9`,key:`kv9z4n`}],[`path`,{d:`m20 10-1.5 2 1.5 2`,key:`1swlpi`}],[`path`,{d:`M22 12h-6.5L14 15`,key:`1mxi28`}],[`path`,{d:`m4 10 1.5 2L4 14`,key:`k9enpj`}],[`path`,{d:`m7 21 3-6-1.5-3`,key:`j8hb9u`}],[`path`,{d:`m7 3 3 6h4`,key:`1otusx`}]]),Re=T(`spray-can`,[[`path`,{d:`M3 3h.01`,key:`159qn6`}],[`path`,{d:`M7 5h.01`,key:`1hq22a`}],[`path`,{d:`M11 7h.01`,key:`1osv80`}],[`path`,{d:`M3 7h.01`,key:`1xzrh3`}],[`path`,{d:`M7 9h.01`,key:`19b3jx`}],[`path`,{d:`M3 11h.01`,key:`1eifu7`}],[`rect`,{width:`4`,height:`4`,x:`15`,y:`5`,key:`mri9e4`}],[`path`,{d:`m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2`,key:`aib6hk`}],[`path`,{d:`m13 14 8-2`,key:`1d7bmk`}],[`path`,{d:`m13 19 8-2`,key:`1y2vml`}]]),ze=T(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),Be=T(`truck`,[[`path`,{d:`M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,key:`wrbu53`}],[`path`,{d:`M15 18H9`,key:`1lyqi6`}],[`path`,{d:`M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,key:`lysw3i`}],[`circle`,{cx:`17`,cy:`18`,r:`2`,key:`332jqn`}],[`circle`,{cx:`7`,cy:`18`,r:`2`,key:`19iecd`}]]),Ve=T(`tv`,[[`path`,{d:`m17 2-5 5-5-5`,key:`16satq`}],[`rect`,{width:`20`,height:`15`,x:`2`,y:`7`,rx:`2`,key:`1e6viu`}]]),He=T(`utensils-crossed`,[[`path`,{d:`m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8`,key:`n7qcjb`}],[`path`,{d:`M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7`,key:`d0u48b`}],[`path`,{d:`m2.1 21.8 6.4-6.3`,key:`yn04lh`}],[`path`,{d:`m19 5-7 7`,key:`194lzd`}]]),Ue=T(`wheat`,[[`path`,{d:`M2 22 16 8`,key:`60hf96`}],[`path`,{d:`M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`,key:`1rdhi6`}],[`path`,{d:`M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`,key:`1sdzmb`}],[`path`,{d:`M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z`,key:`eoatbi`}],[`path`,{d:`M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z`,key:`19rau1`}],[`path`,{d:`M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`,key:`tc8ph9`}],[`path`,{d:`M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`,key:`2m8kc5`}],[`path`,{d:`M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z`,key:`vex3ng`}]]),We=T(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Ge=`/assets/Logo%20Yobante%20Boutique-Dexfqes4.png`,Ke=[{icon:(0,C.jsx)(We,{size:13}),label:`Livraison rapide`},{icon:(0,C.jsx)(Te,{size:13}),label:`Paiement sécurisé`},{icon:(0,C.jsx)(Se,{size:13}),label:`Support en ligne`},{icon:(0,C.jsx)(Ie,{size:13}),label:`iOS & Android`}],qe=({scrollTo:e})=>(0,C.jsxs)(`footer`,{className:`footer`,children:[(0,C.jsx)(`div`,{className:`footer-bg-glow glow-1`}),(0,C.jsx)(`div`,{className:`footer-bg-glow glow-2`}),(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsxs)(`div`,{className:`footer-main`,children:[(0,C.jsxs)(`div`,{className:`footer-brand`,children:[(0,C.jsx)(`div`,{className:`footer-logo`,children:(0,C.jsx)(`img`,{src:Ge,alt:`Yobanté Logo`,className:`logo-img`})}),(0,C.jsx)(`p`,{className:`footer-description`,children:`Votre spécialiste de l'expédition de colis et du e-commerce entre la France et le Sénégal.`})]}),(0,C.jsxs)(`div`,{className:`footer-right`,children:[(0,C.jsx)(`div`,{className:`footer-trust`,children:Ke.map(({icon:e,label:t})=>(0,C.jsxs)(`div`,{className:`trust-item`,children:[(0,C.jsx)(`span`,{className:`trust-icon`,children:e}),t]},t))}),(0,C.jsxs)(`div`,{className:`footer-links`,children:[(0,C.jsx)(`button`,{children:`Mentions légales`}),(0,C.jsx)(`button`,{children:`CGV`}),(0,C.jsx)(`button`,{children:`Confidentialité`})]})]})]}),(0,C.jsx)(`div`,{className:`footer-bottom`,children:(0,C.jsx)(`span`,{className:`copyright`,children:`© 2026 YOBANTÉ. Tous droits réservés.`})})]}),(0,C.jsx)(`style`,{jsx:!0,children:`
        * { box-sizing: border-box; }

        .footer {
          position: relative; overflow: hidden;
          background: #053d8f;
          color: white; padding-top: 38px;
        }

        .footer-bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0.12; z-index: 0;
        }

        .glow-1 { width: 280px; height: 280px; background: #1E3A8A; top: -90px; right: -90px; }
        .glow-2 { width: 230px; height: 230px; background: #F5C518; bottom: -70px; left: -70px; }

        .container {
          position: relative; z-index: 2;
          max-width: 1100px; margin: 0 auto; padding: 0 28px;
        }

        .footer-main {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 50px; padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .footer-brand { max-width: 290px; flex-shrink: 0; }
        .footer-logo  { margin-bottom: 12px; }

        .logo-img { height: 82px; width: auto; object-fit: contain; }

        .footer-description {
          color: rgba(255,255,255,.58);
          line-height: 1.65; font-size: 13px; margin: 0;
        }

        .footer-right {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 18px;
        }

        .footer-trust {
          display: flex; flex-wrap: wrap; gap: 9px; justify-content: flex-end;
        }

        .trust-item {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 18px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.75);
          font-size: 11.5px; font-weight: 700;
          backdrop-filter: blur(8px);
        }

        .trust-icon { display: flex; align-items: center; color: #F5C518; }

        .footer-links { display: flex; gap: 18px; }

        .footer-links button {
          background: transparent; border: none;
          color: rgba(255,255,255,.5);
          font-size: 12.5px; cursor: pointer; padding: 0;
          transition: color 0.2s;
        }

        .footer-links button:hover { color: rgba(255,255,255,.82); }

        .footer-bottom {
          display: flex; justify-content: center; padding: 14px 0;
        }

        .copyright { color: rgba(255,255,255,.38); font-size: 12.5px; }

        @media (max-width: 768px) {
          .footer-main { flex-direction: column; gap: 24px; }
          .footer-brand { max-width: 100%; }
          .footer-right { align-items: flex-start; }
          .footer-trust { justify-content: flex-start; }
        }

        @media (max-width: 480px) {
          .container { padding: 0 16px; }
          .logo-img { height: 66px; }
          .footer-links { flex-wrap: wrap; gap: 10px 16px; }
        }
      `})]}),Je=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`a`,{href:`https://wa.me/33600000000`,className:`whatsapp-float`,target:`_blank`,rel:`noopener noreferrer`,children:(0,C.jsx)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`white`,children:(0,C.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z`})})}),(0,C.jsx)(`style`,{jsx:!0,children:`
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 58px;
          height: 58px;
          background: linear-gradient(135deg, #25D366, #1ebe57);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
          z-index: 9999;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          text-decoration: none;
          border: 2px solid #ffffff;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 32px rgba(37, 211, 102, 0.55);
        }

        @media (max-width: 480px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 52px;
            height: 52px;
          }
        }
      `})]}),Ye=(0,y.createContext)({});function Xe(e){let t=(0,y.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Ze=typeof window<`u`?y.useLayoutEffect:y.useEffect,Qe=(0,y.createContext)(null);function $e(e,t){e.indexOf(t)===-1&&e.push(t)}function et(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var tt=(e,t,n)=>n>t?t:n<e?e:n,nt={},rt=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),it=e=>typeof e==`object`&&!!e,at=e=>/^0[^.\s]+$/u.test(e);function ot(e){let t;return()=>(t===void 0&&(t=e()),t)}var st=e=>e,ct=(...e)=>e.reduce((e,t)=>n=>t(e(n))),lt=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},ut=class{constructor(){this.subscriptions=[]}add(e){return $e(this.subscriptions,e),()=>et(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},dt=e=>e*1e3,ft=e=>e/1e3,pt=(e,t)=>t?1e3/t*e:0,mt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,ht=1e-7,gt=12;function _t(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=mt(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>ht&&++s<gt);return o}function vt(e,t,n,r){if(e===t&&n===r)return st;let i=t=>_t(t,0,1,e,n);return e=>e===0||e===1?e:mt(i(e),t,r)}var yt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,bt=e=>t=>1-e(1-t),xt=vt(.33,1.53,.69,.99),St=bt(xt),Ct=yt(St),wt=e=>e>=1?1:(e*=2)<1?.5*St(e):.5*(2-2**(-10*(e-1))),Tt=e=>1-Math.sin(Math.acos(e)),Et=bt(Tt),Dt=yt(Tt),Ot=vt(.42,0,1,1),D=vt(0,0,.58,1),kt=vt(.42,0,.58,1),At=e=>Array.isArray(e)&&typeof e[0]!=`number`,jt=e=>Array.isArray(e)&&typeof e[0]==`number`,Mt={linear:st,easeIn:Ot,easeInOut:kt,easeOut:D,circIn:Tt,circInOut:Dt,circOut:Et,backIn:St,backInOut:Ct,backOut:xt,anticipate:wt},Nt=e=>typeof e==`string`,Pt=e=>{if(jt(e)){e.length;let[t,n,r,i]=e;return vt(t,n,r,i)}else if(Nt(e))return Mt[e],`${e}`,Mt[e];return e},Ft=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],O={value:null,addProjectionMetrics:null};function It(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&O.value&&O.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Lt=40;function Rt(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ft.reduce((e,n)=>(e[n]=It(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=nt.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Lt),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ft.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ft.length;t++)o[Ft[t]].cancel(e)},state:i,steps:o}}var{schedule:k,cancel:zt,state:A,steps:Bt}=Rt(typeof requestAnimationFrame<`u`?requestAnimationFrame:st,!0),Vt;function Ht(){Vt=void 0}var Ut={now:()=>(Vt===void 0&&Ut.set(A.isProcessing||nt.useManualTiming?A.timestamp:performance.now()),Vt),set:e=>{Vt=e,queueMicrotask(Ht)}},Wt={layout:0,mainThread:0,waapi:0},Gt=e=>t=>typeof t==`string`&&t.startsWith(e),Kt=Gt(`--`),qt=Gt(`var(--`),Jt=e=>qt(e)?Yt.test(e.split(`/*`)[0].trim()):!1,Yt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Xt(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var j={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Zt={...j,transform:e=>tt(0,1,e)},Qt={...j,default:1},$t=e=>Math.round(e*1e5)/1e5,en=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tn(e){return e==null}var nn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rn=(e,t)=>n=>!!(typeof n==`string`&&nn.test(n)&&n.startsWith(e)||t&&!tn(n)&&Object.prototype.hasOwnProperty.call(n,t)),an=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(en);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},on=e=>tt(0,255,e),sn={...j,transform:e=>Math.round(on(e))},cn={test:rn(`rgb`,`red`),parse:an(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+sn.transform(e)+`, `+sn.transform(t)+`, `+sn.transform(n)+`, `+$t(Zt.transform(r))+`)`};function ln(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var un={test:rn(`#`),parse:ln,transform:cn.transform},dn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fn=dn(`deg`),pn=dn(`%`),M=dn(`px`),mn=dn(`vh`),hn=dn(`vw`),gn={...pn,parse:e=>pn.parse(e)/100,transform:e=>pn.transform(e*100)},_n={test:rn(`hsl`,`hue`),parse:an(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+pn.transform($t(t))+`, `+pn.transform($t(n))+`, `+$t(Zt.transform(r))+`)`},N={test:e=>cn.test(e)||un.test(e)||_n.test(e),parse:e=>cn.test(e)?cn.parse(e):_n.test(e)?_n.parse(e):un.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?cn.transform(e):_n.transform(e),getAnimatableNone:e=>{let t=N.parse(e);return t.alpha=0,N.transform(t)}},vn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function yn(e){return isNaN(e)&&typeof e==`string`&&(e.match(en)?.length||0)+(e.match(vn)?.length||0)>0}var bn=`number`,xn=`color`,Sn=`var`,Cn=`var(`,wn="${}",Tn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function En(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Tn,e=>(N.test(e)?(r.color.push(a),i.push(xn),n.push(N.parse(e))):e.startsWith(Cn)?(r.var.push(a),i.push(Sn),n.push(e)):(r.number.push(a),i.push(bn),n.push(parseFloat(e))),++a,wn)).split(wn),indexes:r,types:i}}function Dn(e){return En(e).values}function On({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===bn?i+=$t(r[a]):e===xn?i+=N.transform(r[a]):i+=r[a]}return i}}function kn(e){return On(En(e))}var An=e=>typeof e==`number`?0:N.test(e)?N.getAnimatableNone(e):e,jn=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:An(e);function Mn(e){let t=En(e);return On(t)(t.values.map((e,n)=>jn(e,t.split[n])))}var Nn={test:yn,parse:Dn,createTransformer:kn,getAnimatableNone:Mn};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Fn({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Pn(s,r,e+1/3),a=Pn(s,r,e),o=Pn(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function In(e,t){return n=>n>0?t:e}var P=(e,t,n)=>e+(t-e)*n,Ln=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Rn=[un,cn,_n],zn=e=>Rn.find(t=>t.test(e));function Bn(e){let t=zn(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===_n&&(n=Fn(n)),n}var Vn=(e,t)=>{let n=Bn(e),r=Bn(t);if(!n||!r)return In(e,t);let i={...n};return e=>(i.red=Ln(n.red,r.red,e),i.green=Ln(n.green,r.green,e),i.blue=Ln(n.blue,r.blue,e),i.alpha=P(n.alpha,r.alpha,e),cn.transform(i))},Hn=new Set([`none`,`hidden`]);function Un(e,t){return Hn.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Wn(e,t){return n=>P(e,t,n)}function Gn(e){return typeof e==`number`?Wn:typeof e==`string`?Jt(e)?In:N.test(e)?Vn:Yn:Array.isArray(e)?Kn:typeof e==`object`?N.test(e)?Vn:qn:In}function Kn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Gn(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function qn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Gn(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Jn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Yn=(e,t)=>{let n=Nn.createTransformer(t),r=En(e),i=En(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Hn.has(e)&&!i.values.length||Hn.has(t)&&!r.values.length?Un(e,t):ct(Kn(Jn(r,i),i.values),n):(`${e}${t}`,In(e,t))};function Xn(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?P(e,t,n):Gn(e)(e,t)}var Zn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>k.update(t,e),stop:()=>zt(t),now:()=>A.isProcessing?A.timestamp:Ut.now()}},Qn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},$n=2e4;function er(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function tr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(er(r),$n);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:ft(i)}}var F={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function nr(e,t){return e*Math.sqrt(1-t*t)}var rr=12;function ir(e,t,n){let r=n;for(let n=1;n<rr;n++)r-=e(r)/t(r);return r}var ar=.001;function or({duration:e=F.duration,bounce:t=F.bounce,velocity:n=F.velocity,mass:r=F.mass}){let i,a;F.maxDuration;let o=1-t;o=tt(F.minDamping,F.maxDamping,o),e=tt(F.minDuration,F.maxDuration,ft(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=nr(t,o),c=Math.exp(-i);return ar-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=nr(t**2,o);return(-i(t)+ar>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-ar+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=ir(i,a,s);if(e=dt(e),isNaN(c))return{stiffness:F.stiffness,damping:F.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var sr=[`duration`,`bounce`],cr=[`stiffness`,`damping`,`mass`];function lr(e,t){return t.some(t=>e[t]!==void 0)}function ur(e){let t={velocity:F.velocity,stiffness:F.stiffness,damping:F.damping,mass:F.mass,isResolvedFromDuration:!1,...e};if(!lr(e,cr)&&lr(e,sr))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*tt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:F.mass,stiffness:i,damping:a}}else{let n=or({...e,velocity:0});t={...t,...n,mass:F.mass},t.isResolvedFromDuration=!0}return t}function dr(e=F.visualDuration,t=F.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=ur({...n,velocity:-ft(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=ft(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?F.restSpeed.granular:F.restSpeed.default,i||=v?F.restDelta.granular:F.restDelta.default;let y,b,x,S,C,w;if(h<1)x=nr(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let ee={calculatedDuration:p&&d||null,velocity:e=>dt(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=dt(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=dt(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(er(ee),$n),t=Qn(t=>ee.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return ee}dr.applyToOptions=e=>{let t=tr(e,100,dr);return e.ease=t.ease,e.duration=dt(t.duration),e.type=`keyframes`,e};var fr=5;function pr(e,t,n){let r=Math.max(t-fr,0);return pt(n-e(r),t-r)}function mr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=dr({keyframes:[f.value,m(f.value)],velocity:pr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function hr(e,t,n){let r=[],i=n||nt.mix||Xn,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=ct(Array.isArray(t)?t[n]||st:t,a)),r.push(a)}return r}function gr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=hr(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=lt(e[r],e[r+1],n);return s[r](i)};return n?t=>l(tt(e[0],e[a-1],t)):l}function _r(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=lt(0,t,r);e.push(P(n,1,i))}}function vr(e){let t=[0];return _r(t,e.length-1),t}function yr(e,t){return e.map(e=>e*t)}function br(e,t){return e.map(()=>t||kt).splice(0,e.length-1)}function xr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=At(r)?r.map(Pt):Pt(r),a={done:!1,value:t[0]},o=gr(yr(n&&n.length===t.length?n:vr(t),e),t,{ease:Array.isArray(i)?i:br(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Sr=e=>e!==null;function Cr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Sr),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var wr={decay:mr,inertia:mr,tween:xr,keyframes:xr,spring:dr};function Tr(e){typeof e.type==`string`&&(e.type=wr[e.type])}var Er=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Dr=e=>e/100,Or=class extends Er{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Ut.now()&&this.tick(Ut.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},Wt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Tr(e);let{type:t=xr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||xr;s!==xr&&typeof o[0]!=`number`&&(this.mixKeyframes=ct(Dr,Xn(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=er(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=tt(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==mr&&(b.value=Cr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return ft(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ft(e)}get time(){return ft(this.currentTime)}set time(e){e=dt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return pr(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Ut.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=ft(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Zn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Ut.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,Wt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function kr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Ar=e=>e*180/Math.PI,jr=e=>Nr(Ar(Math.atan2(e[1],e[0]))),Mr={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:jr,rotateZ:jr,skewX:e=>Ar(Math.atan(e[1])),skewY:e=>Ar(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Nr=e=>(e%=360,e<0&&(e+=360),e),Pr=jr,Fr=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Ir=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Lr={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Fr,scaleY:Ir,scale:e=>(Fr(e)+Ir(e))/2,rotateX:e=>Nr(Ar(Math.atan2(e[6],e[5]))),rotateY:e=>Nr(Ar(Math.atan2(-e[2],e[0]))),rotateZ:Pr,rotate:Pr,skewX:e=>Ar(Math.atan(e[4])),skewY:e=>Ar(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Rr(e){return+!!e.includes(`scale`)}function zr(e,t){if(!e||e===`none`)return Rr(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Lr,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Mr,i=t}if(!i)return Rr(t);let a=r[t],o=i[1].split(`,`).map(Vr);return typeof a==`function`?a(o):o[a]}var Br=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return zr(n,t)};function Vr(e){return parseFloat(e.trim())}var Hr=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Ur=new Set(Hr),Wr=e=>e===j||e===M,Gr=new Set([`x`,`y`,`z`]),Kr=Hr.filter(e=>!Gr.has(e));function qr(e){let t=[];return Kr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Jr={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>zr(t,`x`),y:(e,{transform:t})=>zr(t,`y`)};Jr.translateX=Jr.x,Jr.translateY=Jr.y;var Yr=new Set,Xr=!1,Zr=!1,Qr=!1;function $r(){if(Zr){let e=Array.from(Yr).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=qr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Zr=!1,Xr=!1,Yr.forEach(e=>e.complete(Qr)),Yr.clear()}function ei(){Yr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Zr=!0)})}function ti(){Qr=!0,ei(),$r(),Qr=!1}var ni=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Yr.add(this),Xr||(Xr=!0,k.read(ei),k.resolveKeyframes($r))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}kr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Yr.delete(this)}cancel(){this.state===`scheduled`&&(Yr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},ri=e=>e.startsWith(`--`);function ii(e,t,n){ri(t)?e.style.setProperty(t,n):e.style[t]=n}var ai={};function oi(e,t){let n=ot(e);return()=>ai[t]??n()}var si=oi(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ci=oi(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),li=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ui={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:li([0,.65,.55,1]),circOut:li([.55,0,1,.45]),backIn:li([.31,.01,.66,-.59]),backOut:li([.33,1.53,.69,.99])};function di(e,t){if(e)return typeof e==`function`?ci()?Qn(e,t):`ease-out`:jt(e)?li(e):Array.isArray(e)?e.map(e=>di(e,t)||ui.easeOut):ui[e]}function fi(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=di(s,i);Array.isArray(d)&&(u.easing=d),O.value&&Wt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return O.value&&p.finished.finally(()=>{Wt.waapi--}),p}function I(e){return typeof e==`function`&&`applyToOptions`in e}function pi({type:e,...t}){return I(e)&&ci()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var mi=class extends Er{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=pi(e);this.animation=fi(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Cr(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),ii(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return ft(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ft(e)}get time(){return ft(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=dt(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&si()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),st):r(this)}},hi={anticipate:wt,backInOut:Ct,circInOut:Dt};function gi(e){return e in hi}function _i(e){typeof e.ease==`string`&&gi(e.ease)&&(e.ease=hi[e.ease])}var vi=10,yi=class extends mi{constructor(e){_i(e),Tr(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Or({...a,autoplay:!1}),s=Math.max(vi,Ut.now()-this.startTime),c=tt(0,vi,s-vi),l=o.sample(s).value,{name:u}=this.options;i&&u&&ii(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},bi=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(Nn.test(e)||e===`0`)&&!e.startsWith(`url(`));function xi(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Si(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=bi(i,t),s=bi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:xi(e)||(n===`spring`||I(n))&&r}function Ci(e){e.duration=0,e.type=`keyframes`}var wi=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Ti=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ei(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Ti.test(e[t]))return!0;return!1}var Di=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Oi=ot(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function ki(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Oi()&&n&&(wi.has(n)||Di.has(n)&&Ei(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Ai=40,ji=class extends Er{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Ut.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||ni;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Ut.now();let u=!0;Si(e,i,a,o)||(u=!1,(nt.instantAnimations||!s)&&l?.(Cr(e,n,t)),e[0]=e[e.length-1],Ci(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Ai?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&ki(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new yi({...d,element:p})}catch{m=new Or(d)}else m=new Or(d);m.finished.then(()=>{this.notifyFinished()}).catch(st),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ti()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Mi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ni=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Pi(e){let t=Ni.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Fi(e,t,n=1){`${e}`;let[r,i]=Pi(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return rt(e)?parseFloat(e):e}return Jt(i)?Fi(i,t,n+1):i}var Ii={type:`spring`,stiffness:500,damping:25,restSpeed:10},Li=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Ri={type:`keyframes`,duration:.8},zi={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Bi=(e,{keyframes:t})=>t.length>2?Ri:Ur.has(e)?e.startsWith(`scale`)?Li(t[1]):Ii:zi;function Vi(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Hi(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Vi(n,e)}var Ui=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Wi(e){for(let t in e)if(!Ui.has(t))return!0;return!1}var Gi=(e,t,n,r={},i,a)=>o=>{let s=Hi(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=dt(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Wi(s)||Object.assign(u,Bi(e,u)),u.duration&&=dt(u.duration),u.repeatDelay&&=dt(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Ci(u),u.delay===0&&(d=!0)),(nt.instantAnimations||nt.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Ci(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Cr(u.keyframes,s);if(e!==void 0){k.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Or(u):new ji(u)};function Ki(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function qi(e,t,n,r){if(typeof t==`function`){let[i,a]=Ki(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ki(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Ji(e,t,n){let r=e.getProps();return qi(r,t,n===void 0?r.custom:n,e)}var Yi=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Hr]),Xi=30,Zi=e=>!isNaN(parseFloat(e)),L={current:void 0},R=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Ut.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ut.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Zi(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ut);let n=this.events[e].add(t);return e===`change`?()=>{n(),k.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return L.current&&L.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Xi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,Xi);return pt(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Qi(e,t){return new R(e,t)}var z=e=>Array.isArray(e);function $i(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Qi(n))}function ea(e){return z(e)?e[e.length-1]||0:e}function ta(e,t){let{transitionEnd:n={},transition:r={},...i}=Ji(e,t)||{};i={...i,...n};for(let t in i)$i(e,t,ea(i[t]))}var B=e=>!!(e&&e.getVelocity);function na(e){return!!(B(e)&&e.add)}function ra(e,t){let n=e.getValue(`willChange`);if(na(n))return n.add(t);if(!n&&nt.WillChange){let n=new nt.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ia(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var aa=`data-`+ia(`framerAppearId`);function oa(e){return e.props[aa]}function sa({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ca(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Vi(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&sa(f,t))continue;let o={delay:n,...Hi(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){k.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=oa(e);if(n){let e=window.MotionHandoffAnimation(n,t,k);e!==null&&(o.startTime=e,p=!0)}}ra(e,t);let m=l??e.shouldReduceMotion;r.start(Gi(t,r,i,m&&Yi.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>k.update(()=>{o&&ta(e,o)});d.length?Promise.all(d).then(t):t()}return d}function la(e,t,n={}){let r=Ji(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ca(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ua(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function ua(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(la(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Mi(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function da(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>la(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=la(e,t,n);else{let i=typeof t==`function`?Ji(e,t,n.custom):t;r=Promise.all(ca(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var fa={test:e=>e===`auto`,parse:e=>e},pa=e=>t=>t.test(e),ma=[j,M,pn,fn,hn,mn,fa],ha=e=>ma.find(pa(e));function ga(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||at(e)}var _a=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function va(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(en)||[];if(!r)return e;let i=n.replace(r,``),a=+!!_a.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var ya=/\b([a-z-]*)\(.*?\)/gu,ba={...Nn,getAnimatableNone:e=>{let t=e.match(ya);return t?t.map(va).join(` `):e}},xa={...Nn,getAnimatableNone:e=>{let t=Nn.parse(e);return Nn.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Sa={...j,transform:Math.round},Ca={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,inset:M,insetBlock:M,insetBlockStart:M,insetBlockEnd:M,insetInline:M,insetInlineStart:M,insetInlineEnd:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,paddingBlock:M,paddingBlockStart:M,paddingBlockEnd:M,paddingInline:M,paddingInlineStart:M,paddingInlineEnd:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,marginBlock:M,marginBlockStart:M,marginBlockEnd:M,marginInline:M,marginInlineStart:M,marginInlineEnd:M,fontSize:M,backgroundPositionX:M,backgroundPositionY:M,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:Qt,scaleX:Qt,scaleY:Qt,scaleZ:Qt,skew:fn,skewX:fn,skewY:fn,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:Zt,originX:gn,originY:gn,originZ:M,zIndex:Sa,fillOpacity:Zt,strokeOpacity:Zt,numOctaves:Sa},wa={...Ca,color:N,backgroundColor:N,outlineColor:N,fill:N,stroke:N,borderColor:N,borderTopColor:N,borderRightColor:N,borderBottomColor:N,borderLeftColor:N,filter:ba,WebkitFilter:ba,mask:xa,WebkitMask:xa},Ta=e=>wa[e],Ea=new Set([ba,xa]);function Da(e,t){let n=Ta(e);return Ea.has(n)||(n=Nn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var V=new Set([`auto`,`none`,`0`]);function Oa(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!V.has(t)&&En(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Da(n,i)}var ka=class extends ni{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Jt(r))){let i=Fi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Yi.has(n)||e.length!==2)return;let[r,i]=e,a=ha(r),o=ha(i);if(Xt(r)!==Xt(i)&&Jr[n]){this.needsMeasurement=!0;return}if(a!==o)if(Wr(a)&&Wr(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Jr[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||ga(e[t]))&&n.push(t);n.length&&Oa(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Jr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Jr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Aa(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ja=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ma(e){return it(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Na,cancel:Pa}=Rt(queueMicrotask,!1),Fa={x:!1,y:!1};function Ia(){return Fa.x||Fa.y}function La(e){return e===`x`||e===`y`?Fa[e]?null:(Fa[e]=!0,()=>{Fa[e]=!1}):Fa.x||Fa.y?null:(Fa.x=Fa.y=!0,()=>{Fa.x=Fa.y=!1})}function Ra(e,t){let n=Aa(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function za(e){return!(e.pointerType===`touch`||Ia())}function Ba(e,t,n={}){let[r,i,a]=Ra(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!za(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Va=(e,t)=>t?e===t?!0:Va(e,t.parentElement):!1,Ha=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ua=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Wa(e){return Ua.has(e.tagName)||e.isContentEditable===!0}var Ga=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Ka(e){return Ga.has(e.tagName)||e.isContentEditable===!0}var qa=new WeakSet;function Ja(e){return t=>{t.key===`Enter`&&e(t)}}function Ya(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Xa=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ja(()=>{if(qa.has(n))return;Ya(n,`down`);let e=Ja(()=>{Ya(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Ya(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Za(e){return Ha(e)&&!Ia()}var Qa=new WeakSet;function $a(e,t,n={}){let[r,i,a]=Ra(e,n),o=e=>{let r=e.currentTarget;if(!Za(e)||Qa.has(e))return;qa.add(r),n.stopPropagation&&Qa.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),qa.has(r)&&qa.delete(r),Za(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Va(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ma(e)&&(e.addEventListener(`focus`,e=>Xa(e,i)),!Wa(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function eo(e){return it(e)&&`ownerSVGElement`in e}var to=new WeakMap,no,ro=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:eo(r)&&`getBBox`in r?r.getBBox()[t]:r[n],io=ro(`inline`,`width`,`offsetWidth`),ao=ro(`block`,`height`,`offsetHeight`);function oo({target:e,borderBoxSize:t}){to.get(e)?.forEach(n=>{n(e,{get width(){return io(e,t)},get height(){return ao(e,t)}})})}function so(e){e.forEach(oo)}function co(){typeof ResizeObserver>`u`||(no=new ResizeObserver(so))}function lo(e,t){no||co();let n=Aa(e);return n.forEach(e=>{let n=to.get(e);n||(n=new Set,to.set(e,n)),n.add(t),no?.observe(e)}),()=>{n.forEach(e=>{let n=to.get(e);n?.delete(t),n?.size||no?.unobserve(e)})}}var uo=new Set,fo;function po(){fo=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};uo.forEach(t=>t(e))},window.addEventListener(`resize`,fo)}function mo(e){return uo.add(e),fo||po(),()=>{uo.delete(e),!uo.size&&typeof fo==`function`&&(window.removeEventListener(`resize`,fo),fo=void 0)}}function ho(e,t){return typeof e==`function`?mo(e):lo(e,t)}function go(e){return eo(e)&&e.tagName===`svg`}var _o=[...ma,N,Nn],vo=e=>_o.find(pa(e)),yo=()=>({translate:0,scale:1,origin:0,originPoint:0}),bo=()=>({x:yo(),y:yo()}),xo=()=>({min:0,max:0}),H=()=>({x:xo(),y:xo()}),U=new WeakMap;function So(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Co(e){return typeof e==`string`||Array.isArray(e)}var wo=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],To=[`initial`,...wo];function Eo(e){return So(e.animate)||To.some(t=>Co(e[t]))}function Do(e){return!!(Eo(e)||e.variants)}function W(e,t,n){for(let r in t){let i=t[r],a=n[r];if(B(i))e.addValue(r,i);else if(B(a))e.addValue(r,Qi(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Qi(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var G={current:null},K={current:!1},Oo=typeof window<`u`;function ko(){if(K.current=!0,Oo)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>G.current=e.matches;e.addEventListener(`change`,t),t()}else G.current=!1}var Ao=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],jo={};function Mo(e){jo=e}function No(){return jo}var Po=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ni,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Ut.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,k.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Eo(t),this.isVariantNode=Do(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&B(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,U.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(K.current||ko(),this.shouldReduceMotion=G.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),zt(this.notifyUpdate),zt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&wi.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new mi({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:dt(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Ur.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&k.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in jo){let t=jo[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):H()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ao.length;t++){let n=Ao[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=W(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Qi(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(rt(n)||at(n))?n=parseFloat(n):!vo(n)&&Nn.test(t)&&(n=Da(e,t)),this.setBaseTarget(e,B(n)?n.get():n)),B(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=qi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!B(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ut),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Na.render(this.render)}},Fo=class extends Po{constructor(){super(...arguments),this.KeyframeResolver=ka}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;B(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Io=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Lo({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Ro({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function zo(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Bo(e){return e===void 0||e===1}function Vo({scale:e,scaleX:t,scaleY:n}){return!Bo(e)||!Bo(t)||!Bo(n)}function Ho(e){return Vo(e)||Uo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Uo(e){return Wo(e.x)||Wo(e.y)}function Wo(e){return e&&e!==`0%`}function Go(e,t,n){return n+t*(e-n)}function Ko(e,t,n,r,i){return i!==void 0&&(e=Go(e,i,r)),Go(e,n,r)+t}function qo(e,t=0,n=1,r,i){e.min=Ko(e.min,t,n,r,i),e.max=Ko(e.max,t,n,r,i)}function Jo(e,{x:t,y:n}){qo(e.x,t.translate,t.scale,t.originPoint),qo(e.y,n.translate,n.scale,n.originPoint)}var Yo=.999999999999,Xo=1.0000000000001;function Zo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Qo(e.x,-a.scroll.offset.x),Qo(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Jo(e,o)),r&&Ho(a.latestValues)&&ts(e,a.latestValues,a.layout?.layoutBox))}t.x<Xo&&t.x>Yo&&(t.x=1),t.y<Xo&&t.y>Yo&&(t.y=1)}function Qo(e,t){e.min+=t,e.max+=t}function $o(e,t,n,r,i=.5){qo(e,t,n,P(e.min,e.max,i),r)}function es(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function ts(e,t,n){let r=n??e;$o(e.x,es(t.x,r.x),t.scaleX,t.scale,t.originX),$o(e.y,es(t.y,r.y),t.scaleY,t.scale,t.originY)}function ns(e,t){return Lo(zo(e.getBoundingClientRect(),t))}function rs(e,t,n){let r=ns(e,n),{scroll:i}=t;return i&&(Qo(r.x,i.offset.x),Qo(r.y,i.offset.y)),r}var is={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},as=Hr.length;function os(e,t,n){let r=``,i=!0;for(let a=0;a<as;a++){let o=Hr[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ja(s,Ca[o]);if(!c){i=!1;let t=is[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function ss(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Ur.has(e)){o=!0;continue}else if(Kt(e)){i[e]=n;continue}else{let t=ja(n,Ca[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=os(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function cs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function ls(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var us={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(M.test(e))e=parseFloat(e);else return e;return`${ls(e,t.target.x)}% ${ls(e,t.target.y)}%`}},ds={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=Nn.parse(e);if(i.length>5)return r;let a=Nn.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=P(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},fs={borderRadius:{...us,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:us,borderTopRightRadius:us,borderBottomLeftRadius:us,borderBottomRightRadius:us,boxShadow:ds};function ps(e,{layout:t,layoutId:n}){return Ur.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!fs[e]||e===`opacity`)}function ms(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(B(r[t])||i&&B(i[t])||ps(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function hs(e){return window.getComputedStyle(e)}var gs=class extends Fo{constructor(){super(...arguments),this.type=`html`,this.renderInstance=cs}readValueFromInstance(e,t){if(Ur.has(t))return this.projection?.isProjecting?Rr(t):Br(e,t);{let n=hs(e),r=(Kt(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ns(e,t)}build(e,t,n){ss(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return ms(e,t,n)}},_s={offset:`stroke-dashoffset`,array:`stroke-dasharray`},vs={offset:`strokeDashoffset`,array:`strokeDasharray`};function ys(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?_s:vs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var bs=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function xs(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(ss(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of bs)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&ys(d,i,a,o,!1)}var Ss=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Cs=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function ws(e,t,n,r){cs(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ss.has(n)?n:ia(n),t.attrs[n])}function Ts(e,t,n){let r=ms(e,t,n);for(let n in e)if(B(e[n])||B(t[n])){let t=Hr.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Es=class extends Fo{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=H}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ur.has(t)){let e=Ta(t);return e&&e.default||0}return t=Ss.has(t)?t:ia(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Ts(e,t,n)}build(e,t,n){xs(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){ws(e,t,n,r)}mount(e){this.isSVGTag=Cs(e.tagName),super.mount(e)}},Ds=To.length;function Os(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Os(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ds;n++){let r=To[n],i=e.props[r];(Co(i)||i===!1)&&(t[r]=i)}return t}function ks(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var As=[...wo].reverse(),js=wo.length;function Ms(e){return t=>Promise.all(t.map(({animation:t,options:n})=>da(e,t,n)))}function Ns(e){let t=Ms(e),n=Is(),r=!0,i=!1,a=t=>(n,r)=>{let i=Ji(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Os(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<js;t++){let p=As[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Co(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||So(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Ps(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,ee={...w,...C},te=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in ee){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=z(t)&&z(n)?!ks(t,n)||y:t!==n,r?t==null?u.add(e):te(e):t!==void 0&&u.has(e)?te(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Ji(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Mi(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Ji(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Is(),i=!0}}}function Ps(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ks(t,e):!1}function Fs(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Is(){return{animate:Fs(!0),whileInView:Fs(),whileHover:Fs(),whileTap:Fs(),whileDrag:Fs(),whileFocus:Fs(),exit:Fs()}}function Ls(e,t){e.min=t.min,e.max=t.max}function q(e,t){Ls(e.x,t.x),Ls(e.y,t.y)}function Rs(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var zs=1e-4,Bs=1-zs,Vs=1+zs,Hs=.01,Us=0-Hs,Ws=0+Hs;function Gs(e){return e.max-e.min}function Ks(e,t,n){return Math.abs(e-t)<=n}function qs(e,t,n,r=.5){e.origin=r,e.originPoint=P(t.min,t.max,e.origin),e.scale=Gs(n)/Gs(t),e.translate=P(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Bs&&e.scale<=Vs||isNaN(e.scale))&&(e.scale=1),(e.translate>=Us&&e.translate<=Ws||isNaN(e.translate))&&(e.translate=0)}function Js(e,t,n,r){qs(e.x,t.x,n.x,r?r.originX:void 0),qs(e.y,t.y,n.y,r?r.originY:void 0)}function Ys(e,t,n,r=0){e.min=(r?P(n.min,n.max,r):n.min)+t.min,e.max=e.min+Gs(t)}function Xs(e,t,n,r){Ys(e.x,t.x,n.x,r?.x),Ys(e.y,t.y,n.y,r?.y)}function Zs(e,t,n,r=0){let i=r?P(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Gs(t)}function Qs(e,t,n,r){Zs(e.x,t.x,n.x,r?.x),Zs(e.y,t.y,n.y,r?.y)}function $s(e,t,n,r,i){return e-=t,e=Go(e,1/n,r),i!==void 0&&(e=Go(e,1/i,r)),e}function ec(e,t=0,n=1,r=.5,i,a=e,o=e){if(pn.test(t)&&(t=parseFloat(t),t=P(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=P(a.min,a.max,r);e===a&&(s-=t),e.min=$s(e.min,t,n,s,i),e.max=$s(e.max,t,n,s,i)}function tc(e,t,[n,r,i],a,o){ec(e,t[n],t[r],t[i],t.scale,a,o)}var nc=[`x`,`scaleX`,`originX`],rc=[`y`,`scaleY`,`originY`];function ic(e,t,n,r){tc(e.x,t,nc,n?n.x:void 0,r?r.x:void 0),tc(e.y,t,rc,n?n.y:void 0,r?r.y:void 0)}function ac(e){return e.translate===0&&e.scale===1}function oc(e){return ac(e.x)&&ac(e.y)}function sc(e,t){return e.min===t.min&&e.max===t.max}function cc(e,t){return sc(e.x,t.x)&&sc(e.y,t.y)}function lc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function uc(e,t){return lc(e.x,t.x)&&lc(e.y,t.y)}function dc(e){return Gs(e.x)/Gs(e.y)}function fc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function pc(e){return[e(`x`),e(`y`)]}function mc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var hc=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],J=hc.length,gc=e=>typeof e==`string`?parseFloat(e):e,_c=e=>typeof e==`number`||M.test(e);function vc(e,t,n,r,i,a){i?(e.opacity=P(0,n.opacity??1,bc(r)),e.opacityExit=P(t.opacity??1,0,xc(r))):a&&(e.opacity=P(t.opacity??1,n.opacity??1,r));for(let i=0;i<J;i++){let a=hc[i],o=yc(t,a),s=yc(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||_c(o)===_c(s)?(e[a]=Math.max(P(gc(o),gc(s),r),0),(pn.test(s)||pn.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=P(t.rotate||0,n.rotate||0,r))}function yc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var bc=Sc(0,.5,Et),xc=Sc(.5,.95,st);function Sc(e,t,n){return r=>r<e?0:r>t?1:n(lt(e,t,r))}function Cc(e,t,n){let r=B(e)?e:Qi(e);return r.start(Gi(``,r,t,n)),r.animation}function wc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Tc=(e,t)=>e.depth-t.depth,Ec=class{constructor(){this.children=[],this.isDirty=!1}add(e){$e(this.children,e),this.isDirty=!0}remove(e){et(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Tc),this.isDirty=!1,this.children.forEach(e)}};function Dc(e,t){let n=Ut.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(zt(r),e(a-t))};return k.setup(r,!0),()=>zt(r)}function Y(e){return B(e)?e.get():e}var Oc=class{constructor(){this.members=[]}add(e){$e(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(et(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(et(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},kc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ac={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},jc=[``,`X`,`Y`,`Z`],Mc=1e3,Nc=0;function Pc(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Fc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=oa(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,k,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Fc(r)}function Ic({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Nc++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,O.value&&(Ac.nodes=Ac.calculatedTargetDeltas=Ac.calculatedProjections=0),this.nodes.forEach(zc),this.nodes.forEach(Kc),this.nodes.forEach(qc),this.nodes.forEach(Bc),O.addProjectionMetrics&&O.addProjectionMetrics(Ac)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ec)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ut),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=eo(t)&&!go(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;k.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Dc(i,250),kc.hasAnimatedSinceResize&&(kc.hasAnimatedSinceResize=!1,this.nodes.forEach(Gc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||$c,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!uc(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Hi(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Gc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Q),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Uc),this.nodes.forEach(Hc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(X);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Wc),this.nodes.forEach(Z),this.nodes.forEach(Lc),this.nodes.forEach(Rc)):this.nodes.forEach(X),this.clearAllSnapshots();let e=Ut.now();A.delta=tt(0,1e3/60,e-A.timestamp),A.timestamp=e,A.isProcessing=!0,Bt.update.process(A),Bt.preRender.process(A),Bt.render.process(A),A.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Na.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Vc),this.sharedNodes.forEach(Jc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,k.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){k.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Gs(this.snapshot.measuredBox.x)&&!Gs(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=H(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!oc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Ho(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),rl(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return H();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(al))){let{scroll:e}=this.root;e&&(Qo(t.x,e.offset.x),Qo(t.y,e.offset.y))}return t}removeElementScroll(e){let t=H();if(q(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&q(t,e),Qo(t.x,i.offset.x),Qo(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||H();q(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Qo(r.x,-n.scroll.offset.x),Qo(r.y,-n.scroll.offset.y)),Ho(n.latestValues)&&ts(r,n.latestValues,n.layout?.layoutBox)}return Ho(this.latestValues)&&ts(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=H();q(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Ho(n.latestValues))continue;let r;n.instance&&(Vo(n.latestValues)&&n.updateSnapshot(),r=H(),q(r,n.measurePageBox())),ic(t,n.latestValues,n.snapshot?.layoutBox,r)}return Ho(this.latestValues)&&ic(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==A.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=A.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=H(),this.targetWithTransforms=H()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Xs(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):q(this.target,this.layout.layoutBox),Jo(this.target,this.targetDelta)):q(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),O.value&&Ac.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Vo(this.parent.latestValues)||Uo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=H(),this.relativeTargetOrigin=H(),Qs(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),q(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===A.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;q(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Zo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=H());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Rs(this.prevProjectionDelta.x,this.projectionDelta.x),Rs(this.prevProjectionDelta.y,this.projectionDelta.y)),Js(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!fc(this.projectionDelta.x,this.prevProjectionDelta.x)||!fc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),O.value&&Ac.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=bo(),this.projectionDelta=bo(),this.projectionDeltaWithTransform=bo()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=bo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=H(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Qc));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;Yc(a.x,e.x,n),Yc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qs(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Zc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&cc(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=H(),q(d,this.relativeTarget)),s&&(this.animationValues=i,vc(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(zt(this.pendingAnimation),void 0),this.pendingAnimation=k.update(()=>{kc.hasAnimatedSinceResize=!0,Wt.layout++,this.motionValue||=Qi(0),this.motionValue.jump(0,!1),this.currentAnimation=Cc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Wt.layout--},onComplete:()=>{Wt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mc),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&il(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||H();let t=Gs(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Gs(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}q(t,n),ts(t,i),Js(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Oc),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Pc(`z`,e,r,this.animationValues);for(let t=0;t<jc.length;t++)Pc(`rotate${jc[t]}`,e,r,this.animationValues),Pc(`skew${jc[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Y(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Y(t?.pointerEvents)||``),this.hasProjected&&!Ho(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=mc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in fs){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=fs[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Y(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Hc),this.root.sharedNodes.clear()}}}function Lc(e){e.updateLayout()}function Rc(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)pc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Gs(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Ls(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else il(i,t.layoutBox,n)&&pc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Gs(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=bo();Js(o,n,t.layoutBox);let s=bo();a?Js(s,e.applyTransform(r,!0),t.measuredBox):Js(s,n,t.layoutBox);let c=!oc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=H();Qs(s,t.layoutBox,i.layoutBox,o);let c=H();Qs(c,n,a.layoutBox,o),uc(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function zc(e){O.value&&Ac.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Bc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Vc(e){e.clearSnapshot()}function Hc(e){e.clearMeasurements()}function Uc(e){e.isLayoutDirty=!0,e.updateLayout()}function X(e){e.isLayoutDirty=!1}function Wc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Z(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Gc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Kc(e){e.resolveTargetDelta()}function qc(e){e.calcProjection()}function Q(e){e.resetSkewAndRotation()}function Jc(e){e.removeLeadSnapshot()}function Yc(e,t,n){e.translate=P(t.translate,0,n),e.scale=P(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Xc(e,t,n,r){e.min=P(t.min,n.min,r),e.max=P(t.max,n.max,r)}function Zc(e,t,n,r){Xc(e.x,t.x,n.x,r),Xc(e.y,t.y,n.y,r)}function Qc(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var $c={duration:.45,ease:[.4,0,.1,1]},el=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),tl=el(`applewebkit/`)&&!el(`chrome/`)?Math.round:st;function nl(e){e.min=tl(e.min),e.max=tl(e.max)}function rl(e){nl(e.x),nl(e.y)}function il(e,t,n){return e===`position`||e===`preserve-aspect`&&!Ks(dc(t),dc(n),.2)}function al(e){return e!==e.root&&e.scroll?.wasRoot}var ol=Ic({attachResizeListener:(e,t)=>wc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),sl={current:void 0},cl=Ic({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!sl.current){let e=new ol({});e.mount(window),e.setOptions({layoutScroll:!0}),sl.current=e}return sl.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),ll=(0,y.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function ul(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function dl(...e){return t=>{let n=!1,r=e.map(e=>{let r=ul(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():ul(e[t],null)}}}}function fl(...e){return y.useCallback(dl(...e),e)}var pl=class extends y.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ma(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ma(e)&&e.offsetWidth||0,r=Ma(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function ml({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,y.useId)(),s=(0,y.useRef)(null),c=(0,y.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,y.useContext)(ll),u=fl(s,e.props?.ref??e?.ref);return(0,y.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,C.jsx)(pl,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:y.cloneElement(e,{ref:u})})}var hl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=Xe(gl),d=(0,y.useId)(),f=!0,p=(0,y.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,y.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),y.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,C.jsx)(ml,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,C.jsx)(Qe.Provider,{value:p,children:e})};function gl(){return new Map}function _l(e=!0){let t=(0,y.useContext)(Qe);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,y.useId)();(0,y.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,y.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var vl=e=>e.key||``;function yl(e){let t=[];return y.Children.forEach(e,e=>{(0,y.isValidElement)(e)&&t.push(e)}),t}var bl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=_l(o),f=(0,y.useMemo)(()=>yl(e),[e]),p=o&&!u?[]:f.map(vl),m=(0,y.useRef)(!0),h=(0,y.useRef)(f),g=Xe(()=>new Map),_=(0,y.useRef)(new Set),[v,b]=(0,y.useState)(f),[x,S]=(0,y.useState)(f);Ze(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=vl(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let w=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=vl(n);p.includes(r)||(e.splice(t,0,n),w.push(n))}return a===`wait`&&w.length&&(e=w),S(yl(e)),b(f),null}let{forceRender:ee}=(0,y.useContext)(Ye);return(0,C.jsx)(C.Fragment,{children:x.map(e=>{let v=vl(e),y=o&&!u?!1:f===x||p.includes(v);return(0,C.jsx)(hl,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(ee?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},xl=(0,y.createContext)({strict:!1}),Sl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Cl=!1;function wl(){if(Cl)return;let e={};for(let t in Sl)e[t]={isEnabled:e=>Sl[t].some(t=>!!e[t])};Mo(e),Cl=!0}function Tl(){return wl(),No()}function El(e){let t=Tl();for(let n in e)t[n]={...t[n],...e[n]};Mo(t)}var Dl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Ol(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Dl.has(e)}var kl=c({default:()=>Al}),Al,jl=o((()=>{throw Al={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),Ml=e=>!Ol(e);function Nl(e){typeof e==`function`&&(Ml=t=>t.startsWith(`on`)?!Ol(t):e(t))}try{Nl((jl(),d(kl)).default)}catch{}function Pl(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||B(e[i])||(Ml(i)||n===!0&&Ol(i)||!t&&!Ol(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Fl=(0,y.createContext)({});function Il(e,t){if(Eo(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Co(t)?t:void 0,animate:Co(n)?n:void 0}}return e.inherit===!1?{}:t}function Ll(e){let{initial:t,animate:n}=Il(e,(0,y.useContext)(Fl));return(0,y.useMemo)(()=>({initial:t,animate:n}),[Rl(t),Rl(n)])}function Rl(e){return Array.isArray(e)?e.join(` `):e}var $=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function zl(e,t,n){for(let r in t)!B(t[r])&&!ps(r,n)&&(e[r]=t[r])}function Bl({transformTemplate:e},t){return(0,y.useMemo)(()=>{let n=$();return ss(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Vl(e,t){let n=e.style||{},r={};return zl(r,n,e),Object.assign(r,Bl(e,t)),r}function Hl(e,t){let n={},r=Vl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Ul=()=>({...$(),attrs:{}});function Wl(e,t,n,r){let i=(0,y.useMemo)(()=>{let n=Ul();return xs(n,t,Cs(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};zl(t,e.style,e),i.style={...t,...i.style}}return i}var Gl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Kl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Gl.indexOf(e)>-1||/[A-Z]/u.test(e))}function ql(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Kl(e)?Wl:Hl)(t,r,i,e),c=Pl(t,typeof e==`string`,a),l=e===y.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,y.useMemo)(()=>B(u)?u.get():u,[u]);return(0,y.createElement)(e,{...l,children:d})}function Jl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Yl(n,r,i,e),renderState:t()}}function Yl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Y(a[e]);let{initial:o,animate:s}=e,c=Eo(e),l=Do(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!So(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=qi(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Xl=e=>(t,n)=>{let r=(0,y.useContext)(Fl),i=(0,y.useContext)(Qe),a=()=>Jl(e,t,r,i);return n?a():Xe(a)},Zl=Xl({scrapeMotionValuesFromProps:ms,createRenderState:$}),Ql=Xl({scrapeMotionValuesFromProps:Ts,createRenderState:Ul}),$l=Symbol.for(`motionComponentSymbol`);function eu(e,t,n){let r=(0,y.useRef)(n);(0,y.useInsertionEffect)(()=>{r.current=n});let i=(0,y.useRef)(null);return(0,y.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n)},[t])}var tu=(0,y.createContext)({});function nu(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function ru(e,t,n,r,i,a){let{visualElement:o}=(0,y.useContext)(Fl),s=(0,y.useContext)(xl),c=(0,y.useContext)(Qe),l=(0,y.useContext)(ll),u=l.reducedMotion,d=l.skipAnimations,f=(0,y.useRef)(null),p=(0,y.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,y.useContext)(tu);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&iu(f.current,n,i,h);let g=(0,y.useRef)(!1);(0,y.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[aa],v=(0,y.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return Ze(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,y.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function iu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:au(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&nu(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function au(e){if(e)return e.options.allowProjection===!1?au(e.parent):e.projection}function ou(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&El(r);let a=n?n===`svg`:Kl(e),o=a?Ql:Zl;function s(n,s){let c,l={...(0,y.useContext)(ll),...n,layoutId:su(n)},{isStatic:u}=l,d=Ll(n),f=o(n,u);if(!u&&typeof window<`u`){cu(l,r);let t=lu(l);c=t.MeasureLayout,d.visualElement=ru(e,f,l,i,t.ProjectionNode,a)}return(0,C.jsxs)(Fl.Provider,{value:d,children:[c&&d.visualElement?(0,C.jsx)(c,{visualElement:d.visualElement,...l}):null,ql(e,n,eu(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,y.forwardRef)(s);return c[$l]=e,c}function su({layoutId:e}){let t=(0,y.useContext)(Ye).id;return t&&e!==void 0?t+`-`+e:e}function cu(e,t){(0,y.useContext)(xl).strict}function lu(e){let{drag:t,layout:n}=Tl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function uu(e,t){if(typeof Proxy>`u`)return ou;let n=new Map,r=(n,r)=>ou(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,ou(a,void 0,e,t)),n.get(a))})}var du=(e,t)=>t.isSVG??Kl(e)?new Es(t):new gs(t,{allowProjection:e!==y.Fragment}),fu=class extends Io{constructor(e){super(e),e.animationState||=Ns(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();So(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},pu=0,mu={animation:{Feature:fu},exit:{Feature:class extends Io{constructor(){super(...arguments),this.id=pu++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=Ji(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function hu(e){return{point:{x:e.pageX,y:e.pageY}}}var gu=e=>t=>Ha(t)&&e(t,hu(t));function _u(e,t,n,r){return wc(e,t,gu(n),r)}var vu=({current:e})=>e?e.ownerDocument.defaultView:null,yu=(e,t)=>Math.abs(e-t);function bu(e,t){let n=yu(e.x,t.x),r=yu(e.y,t.y);return Math.sqrt(n**2+r**2)}var xu=new Set([`auto`,`scroll`]),Su=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Cu(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Tu(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=bu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=A;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Cu(t,this.transformPagePoint),k.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Tu(e.type===`pointercancel`?this.lastMoveEventInfo:Cu(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Ha(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Cu(hu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=A;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Tu(s,this.history)),this.removeListeners=ct(_u(this.contextWindow,`pointermove`,this.handlePointerMove),_u(this.contextWindow,`pointerup`,this.handlePointerUp),_u(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(xu.has(e.overflowX)||xu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),k.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),zt(this.updatePoint)}};function Cu(e,t){return t?{point:t(e.point)}:e}function wu(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Tu({point:e},t){return{point:e,delta:wu(e,Du(t)),offset:wu(e,Eu(t)),velocity:Ou(t,.1)}}function Eu(e){return e[0]}function Du(e){return e[e.length-1]}function Ou(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Du(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>dt(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>dt(t)*2&&(r=e[1]);let a=ft(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ku(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?P(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?P(n,e,r.max):Math.min(e,n)),e}function Au(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function ju(e,{top:t,left:n,bottom:r,right:i}){return{x:Au(e.x,n,i),y:Au(e.y,t,r)}}function Mu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Nu(e,t){return{x:Mu(e.x,t.x),y:Mu(e.y,t.y)}}function Pu(e,t){let n=.5,r=Gs(e),i=Gs(t);return i>r?n=lt(t.min,t.max-r,e.min):r>i&&(n=lt(e.min,e.max-i,t.min)),tt(0,1,n)}function Fu(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Iu=.35;function Lu(e=Iu){return e===!1?e=0:e===!0&&(e=Iu),{x:Ru(e,`left`,`right`),y:Ru(e,`top`,`bottom`)}}function Ru(e,t,n){return{min:zu(e,t),max:zu(e,n)}}function zu(e,t){return typeof e==`number`?e:e[t]||0}var Bu=new WeakMap,Vu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=H(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(hu(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=La(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(pn.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Gs(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&k.update(()=>i(e,t),!1,!0),ra(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Gu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&k.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Su(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:vu(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&k.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Wu(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=ku(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&nu(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=ju(n.layoutBox,e):this.constraints=!1,this.elastic=Lu(t),r!==this.constraints&&!nu(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&pc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Fu(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!nu(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=rs(n,r.root,this.visualElement.getTransformPagePoint()),a=Nu(r.layout.layoutBox,i);if(t){let e=t(Ro(a));this.hasMutatedConstraints=!!e,e&&(a=Lo(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=pc(o=>{if(!Wu(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ra(this.visualElement,e),n.start(Gi(e,n,0,t,this.visualElement,!1))}stopAnimation(){pc(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){pc(t=>{let{drag:n}=this.getProps();if(!Wu(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-P(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!nu(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};pc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Pu({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),pc(t=>{if(!Wu(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(P(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Bu.set(this.visualElement,this);let e=this.visualElement.current,t=_u(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ka(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();nu(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=Uu(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),k.read(r);let o=wc(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(pc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Iu,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Hu(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Uu(e,t,n){let r=ho(e,Hu(n)),i=ho(t,Hu(n));return()=>{r(),i()}}function Wu(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Gu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Ku=class extends Io{constructor(e){super(e),this.removeGroupControls=st,this.removeListeners=st,this.controls=new Vu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||st}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},qu=e=>(t,n)=>{e&&k.update(()=>e(t,n),!1,!0)},Ju=class extends Io{constructor(){super(...arguments),this.removePointerDownListener=st}onPointerDown(e){this.session=new Su(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vu(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:qu(e),onStart:qu(t),onMove:qu(n),onEnd:(e,t)=>{delete this.session,r&&k.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=_u(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Yu=!1,Xu=class extends y.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Yu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),kc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Yu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||k.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Na.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Yu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Zu(e){let[t,n]=_l(),r=(0,y.useContext)(Ye);return(0,C.jsx)(Xu,{...e,layoutGroup:r,switchLayoutGroup:(0,y.useContext)(tu),isPresent:t,safeToRemove:n})}var Qu={pan:{Feature:Ju},drag:{Feature:Ku,ProjectionNode:cl,MeasureLayout:Zu}};function $u(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&k.postRender(()=>i(t,hu(t)))}var ed=class extends Io{mount(){let{current:e}=this.node;e&&(this.unmount=Ba(e,(e,t)=>($u(this.node,t,`Start`),e=>$u(this.node,e,`End`))))}unmount(){}},td=class extends Io{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=ct(wc(this.node.current,`focus`,()=>this.onFocus()),wc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function nd(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&k.postRender(()=>i(t,hu(t)))}var rd=class extends Io{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=$a(e,(e,t)=>(nd(this.node,t,`Start`),(e,{success:t})=>nd(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},id=new WeakMap,ad=new WeakMap,od=e=>{let t=id.get(e.target);t&&t(e)},sd=e=>{e.forEach(od)};function cd({root:e,...t}){let n=e||document;ad.has(n)||ad.set(n,{});let r=ad.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(sd,{root:e,...t})),r[i]}function ld(e,t,n){let r=cd(t);return id.set(e,n),r.observe(e),()=>{id.delete(e),r.unobserve(e)}}var ud={some:0,all:1},dd=class extends Io{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:ud[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=ld(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(fd(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function fd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var pd={inView:{Feature:dd},tap:{Feature:rd},focus:{Feature:td},hover:{Feature:ed}},md={layout:{ProjectionNode:cl,MeasureLayout:Zu}},hd=uu({...mu,...pd,...Qu,...md},du),gd=`/assets/mockeup-CF1jGDC4.png`,_d=`/assets/mockeup2-Dy6c9WSh.png`,vd=()=>(0,C.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,C.jsx)(`path`,{d:`M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z`})}),yd=()=>(0,C.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,C.jsx)(`path`,{d:`M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z`})}),bd=({scrollTo:e,variant:t=`rek`})=>{let[n,r]=(0,y.useState)(0),[i,a]=(0,y.useState)(()=>typeof window<`u`?window.innerWidth<=980:!1);(0,y.useEffect)(()=>{let e=()=>a(window.innerWidth<=980);return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let o=[{id:1,title:`Expédiez vos colis depuis chez vous !`,buttonText:`En savoir plus`,buttonLink:`services`,image:_d,bgColor:`#F5C518`,textColor:`#1E3A8A`,statColor:`#1E3A8A`,labelColor:`rgba(30,58,138,0.65)`,badgeBg:`#ffffff`,badgeTextColor:`#1E3A8A`,dotColor:`rgba(0,0,0,.15)`,dotActiveColor:`#1E3A8A`},{id:2,title:`Achetez vos marques préférées à prix discount !`,buttonText:`Explorer`,buttonLink:`app-boutique`,image:gd,bgColor:`#1E3A8A`,textColor:`#ffffff`,statColor:`#ffffff`,labelColor:`rgba(255,255,255,0.65)`,badgeBg:`rgba(255,255,255,.15)`,badgeTextColor:`#ffffff`,dotColor:`rgba(255,255,255,.3)`,dotActiveColor:`#F5C518`}].filter(e=>t===`rek`?e.id===1:e.id===2),s=o[n]||o[0];return(0,C.jsxs)(`section`,{id:`hero`,className:`hero`,children:[(0,C.jsx)(hd.div,{className:`hero-bg`,animate:{background:s.bgColor},transition:{duration:.6}}),(0,C.jsx)(`div`,{className:`hero-glow`}),(0,C.jsxs)(`div`,{className:`hero-container`,children:[(0,C.jsx)(`div`,{className:`hero-tabs`,style:{display:o.length>1?void 0:`none`},children:(0,C.jsxs)(`div`,{className:`tabs-wrapper`,children:[(0,C.jsxs)(`button`,{className:`tab-btn ${n===0?`active`:``}`,onClick:()=>r(0),children:[(0,C.jsx)(ke,{size:14,strokeWidth:1.8,style:{marginRight:`6px`,verticalAlign:`middle`}}),`Yobanté Rek`]}),(0,C.jsxs)(`button`,{className:`tab-btn ${n===1?`active`:``}`,onClick:()=>r(1),children:[(0,C.jsx)(Fe,{size:14,strokeWidth:1.8,style:{marginRight:`6px`,verticalAlign:`middle`}}),`Yobanté Boutique`]})]})}),(0,C.jsx)(bl,{mode:`wait`,children:(0,C.jsxs)(hd.div,{className:`hero-content`,initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.55},children:[(0,C.jsxs)(`div`,{className:`hero-text`,children:[(0,C.jsxs)(`div`,{className:`hero-badge`,style:{background:s.badgeBg},children:[(0,C.jsx)(`span`,{className:`badge-dot`}),(0,C.jsx)(`span`,{style:{color:s.badgeTextColor},children:`Expédition de colis - Boutique en ligne`})]}),(0,C.jsx)(`h1`,{className:`hero-title`,style:{color:s.textColor},children:s.title}),s.id===1&&(0,C.jsxs)(`div`,{className:`shipping-methods`,children:[(0,C.jsxs)(`div`,{className:`method-card`,children:[(0,C.jsx)(`span`,{className:`method-icon`,children:(0,C.jsx)(Me,{size:22,strokeWidth:1.5,color:`#1E3A8A`})}),(0,C.jsx)(`span`,{className:`method-name`,children:`Fret Aérien`})]}),(0,C.jsxs)(`div`,{className:`method-card`,children:[(0,C.jsx)(`span`,{className:`method-icon`,children:(0,C.jsx)(Ne,{size:22,strokeWidth:1.5,color:`#1E3A8A`})}),(0,C.jsx)(`span`,{className:`method-name`,children:`Fret Maritime`})]}),(0,C.jsxs)(`div`,{className:`method-card`,children:[(0,C.jsx)(`span`,{className:`method-icon`,children:(0,C.jsx)(ke,{size:22,strokeWidth:1.5,color:`#1E3A8A`})}),(0,C.jsx)(`span`,{className:`method-name`,children:`Colis GP`})]})]}),(0,C.jsxs)(`button`,{className:`hero-btn ${s.id===1?`expedition`:``}`,onClick:()=>e(s.buttonLink),children:[s.buttonText,(0,C.jsx)(ue,{size:15,strokeWidth:2,style:{marginLeft:`8px`,verticalAlign:`middle`}})]}),(0,C.jsxs)(`div`,{className:`store-buttons`,children:[(0,C.jsxs)(`a`,{href:`https://apps.apple.com`,target:`_blank`,rel:`noreferrer`,className:`store-btn ${s.id===1?`appstore`:`appstore-white`}`,children:[(0,C.jsx)(vd,{}),(0,C.jsxs)(`div`,{className:`store-text`,children:[(0,C.jsx)(`small`,{children:`Télécharger sur`}),(0,C.jsx)(`strong`,{children:`App Store`})]})]}),(0,C.jsxs)(`a`,{href:`https://play.google.com`,target:`_blank`,rel:`noreferrer`,className:`store-btn ${s.id===1?`play-gold`:`play-white`}`,children:[(0,C.jsx)(yd,{}),(0,C.jsxs)(`div`,{className:`store-text`,children:[(0,C.jsx)(`small`,{children:`Disponible sur`}),(0,C.jsx)(`strong`,{children:`Google Play`})]})]})]})]}),(0,C.jsx)(hd.div,{className:`hero-image`,animate:i?{}:{y:[0,-16,0]},transition:i?{}:{duration:4,repeat:1/0,ease:`easeInOut`},children:(0,C.jsx)(`img`,{src:s.image,alt:`Application mobile`})})]},s.id)})]}),(0,C.jsx)(`div`,{className:`slide-dots`,children:o.length>1&&o.map((e,t)=>(0,C.jsx)(`button`,{className:`dot ${n===t?`active`:``}`,style:{background:n===t?s.dotActiveColor:s.dotColor},onClick:()=>r(t)},t))}),(0,C.jsx)(`style`,{jsx:!0,children:`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: rgba(255,255,255,0.12);
          filter: blur(110px);
          border-radius: 50%;
          top: -130px;
          right: -80px;
          animation: floatGlow 8s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0% { transform: translate(0,0); }
          50% { transform: translate(-50px,35px); }
          100% { transform: translate(0,0); }
        }

        .hero-tabs {
          position: absolute;
          top: 108px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        .tabs-wrapper {
          display: flex;
          gap: 6px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          padding: 5px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .tab-btn {
          border: none;
          padding: 10px 20px;
          border-radius: 14px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          color: rgba(255,255,255,0.85);
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          letter-spacing: 0.1px;
        }

        .tab-btn:hover:not(.active) { color: white; background: rgba(255,255,255,0.12); }

        .tab-btn.active {
          background: white;
          color: #1E3A8A;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }

        .hero-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1250px;
          padding: 200px 32px 90px;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .hero-text {
          flex: 1;
          max-width: 540px;
          min-height: 490px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 22px;
          backdrop-filter: blur(10px);
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.55); }
          60%  { box-shadow: 0 0 0 7px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        .hero-title {
          font-size: clamp(34px, 4.5vw, 62px);
          line-height: 1.07;
          font-weight: 900;
          margin-bottom: 26px;
          letter-spacing: -0.5px;
        }

        .shipping-methods {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .method-card {
          background: white;
          padding: 16px 12px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(30,58,138,0.12);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid rgba(30,58,138,0.06);
        }

        .method-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 16px 36px rgba(30,58,138,0.18);
          border-color: rgba(30,58,138,0.14);
        }

        .method-icon {
          display: block;
          margin-bottom: 8px;
        }

        .method-name {
          display: block;
          font-weight: 800;
          color: #1E3A8A;
          font-size: 12px;
          letter-spacing: 0.2px;
        }

        .hero-btn {
          border: none;
          padding: 15px 34px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          background: #F5C518;
          color: #1E3A8A;
          width: fit-content;
          box-shadow: 0 10px 28px rgba(245,197,24,0.38);
          letter-spacing: 0.2px;
        }

        .hero-btn:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 16px 36px rgba(245,197,24,0.45); }

        .hero-btn.expedition {
          background: #1E3A8A;
          color: #F5C518;
          box-shadow: 0 10px 28px rgba(30,58,138,0.28);
        }

        .hero-btn.expedition:hover { box-shadow: 0 16px 36px rgba(30,58,138,0.38); }

        .store-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 15px;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          min-width: 165px;
        }

        .store-btn:hover { transform: translateY(-4px) scale(1.03); }

        .store-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .appstore       { background: #1E3A8A; color: white;   box-shadow: 0 6px 18px rgba(30,58,138,0.28); }
        .appstore-white { background: white;   color: #1E3A8A; box-shadow: 0 6px 18px rgba(255,255,255,0.3);  border: 1px solid rgba(255,255,255,0.5); }
        .play-gold  { background: #ffffff; color: #1E3A8A; box-shadow: 0 6px 18px rgba(0,0,0,0.14); }
        .play-white { background: #F5C518; color: #1E3A8A; box-shadow: 0 6px 18px rgba(245,197,24,0.35); }

        .store-btn small { font-size: 10px; opacity: 0.65; }
        .store-btn strong { font-size: 14px; font-weight: 800; letter-spacing: 0.1px; }

        .hero-stats { display: flex; gap: 36px; }

        .stat-number {
          font-size: 26px;
          font-weight: 900;
          display: block;
        }

        .stat-label { font-size: 12px; }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .hero-image::before {
          content: '';
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: rgba(255,255,255,0.14);
          filter: blur(70px);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .hero-image img {
          width: 100%;
          max-width: 400px;
          filter: drop-shadow(0 28px 50px rgba(0,0,0,0.22));
          position: relative;
          z-index: 1;
        }

        .slide-dots {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 999px;
          transition: 0.3s;
          cursor: pointer;
        }

        .dot.active { width: 30px; }

        /* �"?�"?�"? RESPONSIVE �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
        @media (max-width: 1024px) {
          .hero-container { padding: 190px 24px 74px; }
          .hero-content { gap: 28px; }
          .hero-image img { max-width: 320px; }
        }

        @media (max-width: 980px) {
          .hero { min-height: auto; }

          .hero-tabs {
            position: relative;
            top: 0; left: 0; transform: none;
            margin: 0 auto 26px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-container { padding: 120px 24px 72px; }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 36px;
          }

          .hero-text {
            max-width: 600px;
            min-height: auto;
            align-items: center;
          }

          .hero-title { font-size: 42px; }

          .shipping-methods {
            grid-template-columns: repeat(2,1fr);
            width: 100%;
            max-width: 480px;
          }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 6px);
            max-width: calc(50% - 6px);
            margin: 0 auto;
          }

          .store-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-image img { max-width: 280px; }
        }

        @media (max-width: 520px) {
          .hero-container { padding: 115px 16px 56px; }
          .hero-title { font-size: 30px; line-height: 1.17; margin-bottom: 20px; }

          .shipping-methods {
            width: 100%; max-width: 320px;
            grid-template-columns: repeat(2,1fr);
            gap: 9px; margin-bottom: 20px;
          }

          .method-card { padding: 12px 8px; border-radius: 14px; }
          .method-name { font-size: 12px; }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 4.5px);
            max-width: calc(50% - 4.5px);
            margin: 0 auto;
          }

          .hero-btn { width: 100%; max-width: 320px; padding: 13px 18px; font-size: 15px; margin-bottom: 18px; }

          .store-buttons {
            width: 100%; max-width: 320px;
            flex-direction: column; gap: 10px; margin-bottom: 26px;
          }

          .store-btn { width: 100%; min-height: 56px; }

          .hero-stats { width: 100%; max-width: 320px; justify-content: center; gap: 36px; }
          .stat-number { font-size: 26px; }
          .hero-image img { max-width: 200px; }
        }

        @media (max-width: 380px) {
          .hero-container { padding-left: 12px; padding-right: 12px; }
          .hero-badge { max-width: 100%; text-align: left; font-size: 11px; padding: 7px 12px; }
          .hero-title { font-size: 27px; }
          .shipping-methods { max-width: 290px; }
          .hero-stats { gap: 20px; }
          .stat-number { font-size: 22px; }
          .stat-label { font-size: 11px; }
        }

      `})]})},xd=[{icon:(0,C.jsx)(Be,{size:18,strokeWidth:1.8,color:`white`}),text:`Livraison France → Sénégal`},{icon:(0,C.jsx)(Oe,{size:18,strokeWidth:1.8,color:`white`}),text:`Support en ligne`},{icon:(0,C.jsx)(Te,{size:18,strokeWidth:1.8,color:`white`}),text:`Paiement 100% sécurisé`},{icon:(0,C.jsx)(Ie,{size:18,strokeWidth:1.8,color:`white`}),text:`Application iOS & Android`},{icon:(0,C.jsx)(We,{size:18,strokeWidth:1.8,color:`white`}),text:`Expédition rapide`}],Sd=()=>(0,C.jsxs)(`section`,{className:`trust-wrapper`,children:[(0,C.jsx)(`div`,{className:`top-gradient`}),(0,C.jsx)(`div`,{className:`container`,children:(0,C.jsxs)(`div`,{className:`trust-bar`,children:[(0,C.jsx)(`div`,{className:`glow glow-left`}),(0,C.jsx)(`div`,{className:`glow glow-right`}),(0,C.jsx)(`div`,{className:`trust-track`,children:[...xd,...xd].map((e,t)=>(0,C.jsxs)(`div`,{className:`trust-item`,children:[(0,C.jsx)(`div`,{className:`icon-box`,children:e.icon}),(0,C.jsx)(`span`,{className:`trust-text`,children:e.text})]},t))})]})}),(0,C.jsx)(`style`,{jsx:!0,children:`
        * {
          box-sizing: border-box;
        }

        .trust-wrapper {
          position: relative;
          padding: 26px 0;
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #f8fafc 100%
          );
          overflow: hidden;
        }

        .top-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #1E3A8A,
            #F5C518,
            #1E3A8A,
            transparent
          );
          opacity: 0.8;
        }

        .container {
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .trust-bar {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          padding: 18px 0;
        }

        .glow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 180px;
          height: 180px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.2;
          z-index: 0;
        }

        .glow-left {
          left: -80px;
          background: #1E3A8A;
        }

        .glow-right {
          right: -80px;
          background: #F5C518;
        }

        /* ANIMATION ISOL�?E UNIQUEMENT POUR LA TRUSTBAR */
        .trust-track {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 22px;
          width: max-content;
          animation: trustScroll 24s linear infinite !important;
        }

        @keyframes trustScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          white-space: nowrap;
          margin-left: 20px;
        }

        .icon-box {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #1E3A8A,
            #152E70
          );
          color: white;
          font-size: 18px;
          box-shadow: 0 8px 18px rgba(30, 58, 138, 0.2);
          flex-shrink: 0;
        }

        .trust-text {
          font-size: 14px;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.2px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .trust-wrapper {
            padding: 18px 0;
          }

          .trust-bar {
            border-radius: 18px;
            padding: 14px 0;
          }

          .trust-track {
            gap: 14px;
            animation: trustScroll 18s linear infinite !important;
          }

          .trust-item {
            padding: 10px 14px;
            margin-left: 12px;
          }

          .icon-box {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            font-size: 16px;
          }

          .trust-text {
            font-size: 13px;
          }
        }
      `})]}),Cd=`/assets/Logo%20Yobante%20Rek-u9e5IVQZ.png`,wd=[{id:`create`,num:`01`,title:`Remplissez le formulaire`,desc:`Renseignez les informations de votre colis sur notre site ou via l'application.`},{id:`pay`,num:`02`,title:`Payez en ligne`,desc:`Choisissez votre mode de paiement : en ligne, à la collecte ou à la livraison.`},{id:`deliver`,num:`03`,title:`Nous livrons votre colis`,desc:`Le colis est livré à l'adresse de votre choix.`}],Td=[{id:`docs`,icon:(0,C.jsx)(Ee,{size:30,strokeWidth:1.5,color:`#1E3A8A`}),name:`Documents`,price:`Tarif fixe`,desc:`Lettres, documents administratifs, courriers`,features:[`Poids inférieur à 500g`],button:`Effectuez un envoi`,type:`default`},{id:`colis10`,icon:(0,C.jsx)(ke,{size:30,strokeWidth:1.5,color:`#1E3A8A`}),name:`Produit max 30kg`,price:`Devis`,desc:`Vêtements, chaussures, Électronique légère...`,features:[`Jusqu'à 30 kilos`],button:`Obtenir un devis`,type:`popular`},{id:`colis20`,icon:(0,C.jsx)(Be,{size:30,strokeWidth:1.5,color:`#1E3A8A`}),name:`Gros colis`,price:`Devis`,desc:`Gros colis, électroménagers, mobiliers...`,features:[`Collecte à domicile`],button:`Obtenir un devis`,type:`default`}],Ed=[{num:`01`,title:`Parcourez nos rayons et sélectionnez vos produits`,desc:``},{num:`02`,title:`Validez votre panier`,desc:`Règlement possible par Orange Money, Wave ou carte bancaire.`},{num:`03`,title:`Programmez vos livraisons`,desc:`Recevez directement votre commande à l'adresse de votre choix.`}],Dd=[{icon:(0,C.jsx)(ze,{size:26,strokeWidth:1.5,color:`white`}),label:`Promotions`},{icon:(0,C.jsx)(De,{size:26,strokeWidth:1.5,color:`white`}),label:`Produits Locaux`},{icon:(0,C.jsx)(pe,{size:26,strokeWidth:1.5,color:`white`}),label:`Cafés`},{icon:(0,C.jsx)(Pe,{size:26,strokeWidth:1.5,color:`white`}),label:`Mode Locale`},{icon:(0,C.jsx)(He,{size:26,strokeWidth:1.5,color:`white`}),label:`Traiteur`},{icon:(0,C.jsx)(Ce,{size:26,strokeWidth:1.5,color:`white`}),label:`Mobilier & Déco`},{icon:(0,C.jsx)(le,{size:26,strokeWidth:1.5,color:`white`}),label:`Fruits & Légumes`},{icon:(0,C.jsx)(ve,{size:26,strokeWidth:1.5,color:`white`}),label:`Viande & Poissons`},{icon:(0,C.jsx)(_e,{size:26,strokeWidth:1.5,color:`white`}),label:`Crèmerie & Laitiers`},{icon:(0,C.jsx)(He,{size:26,strokeWidth:1.5,color:`white`}),label:`Charcuterie`},{icon:(0,C.jsx)(Le,{size:26,strokeWidth:1.5,color:`white`}),label:`Surgelés`},{icon:(0,C.jsx)(de,{size:26,strokeWidth:1.5,color:`white`}),label:`Bébé`},{icon:(0,C.jsx)(me,{size:26,strokeWidth:1.5,color:`white`}),label:`Épicerie Sucrée`},{icon:(0,C.jsx)(ye,{size:26,strokeWidth:1.5,color:`white`}),label:`Épicerie Salée`},{icon:(0,C.jsx)(xe,{size:26,strokeWidth:1.5,color:`white`}),label:`Boissons`},{icon:(0,C.jsx)(Ue,{size:26,strokeWidth:1.5,color:`white`}),label:`Pains & Pâtisserie`},{icon:(0,C.jsx)(Re,{size:26,strokeWidth:1.5,color:`white`}),label:`Entretien & Nettoyage`},{icon:(0,C.jsx)(he,{size:26,strokeWidth:1.5,color:`white`}),label:`Hygiène & Beauté`},{icon:(0,C.jsx)(Ae,{size:26,strokeWidth:1.5,color:`white`}),label:`Animalerie`},{icon:(0,C.jsx)(be,{size:26,strokeWidth:1.5,color:`white`}),label:`Jeux Vidéo`},{icon:(0,C.jsx)(Ie,{size:26,strokeWidth:1.5,color:`white`}),label:`Smartphones & Connectés`},{icon:(0,C.jsx)(we,{size:26,strokeWidth:1.5,color:`white`}),label:`Informatique & Bureau`},{icon:(0,C.jsx)(Ve,{size:26,strokeWidth:1.5,color:`white`}),label:`Image & Son`},{icon:(0,C.jsx)(ge,{size:26,strokeWidth:1.5,color:`white`}),label:`Sport`},{icon:(0,C.jsx)(Fe,{size:26,strokeWidth:1.5,color:`white`}),label:`Mode & Textile`}],Od=({scrollTo:e,variant:t=`rek`})=>{let n=(0,y.useCallback)(()=>{e(`contact`)},[e]);return(0,C.jsxs)(`section`,{id:`services`,className:`section ${t}`,children:[(0,C.jsx)(`div`,{className:`bg-shape bg1`}),(0,C.jsx)(`div`,{className:`bg-shape bg2`}),(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(`div`,{className:`section-header sr`,children:(0,C.jsxs)(`div`,{className:`section-tag`,children:[(0,C.jsx)(`span`,{className:`tag-line`}),`Nos services`]})}),(0,C.jsxs)(`div`,{className:`service-card-wrapper glass-card sr expedition-service`,children:[(0,C.jsxs)(`div`,{className:`card-left yellow-main`,children:[(0,C.jsxs)(`div`,{className:`card-title-row`,children:[(0,C.jsx)(`div`,{className:`card-icon-circle blue-bg`,children:(0,C.jsx)(ke,{size:28,strokeWidth:1.5,color:`white`})}),(0,C.jsx)(`div`,{children:(0,C.jsx)(`h3`,{className:`card-main-title blue-text`,children:`Expédiez votre colis`})})]}),(0,C.jsxs)(`div`,{className:`inner-section`,children:[(0,C.jsxs)(`div`,{className:`inner-tag blue-text`,children:[(0,C.jsx)(`span`,{className:`inner-tag-line blue-bg`}),`COMMENT ÇA MARCHE ?`]}),(0,C.jsx)(`div`,{className:`steps-row`,children:wd.map((e,t)=>(0,C.jsxs)(`div`,{className:`step-wrapper`,children:[(0,C.jsxs)(`div`,{className:`step-card white-card`,children:[(0,C.jsxs)(`div`,{className:`step-num blue-bg`,children:[`Étape `,t+1]}),(0,C.jsx)(`p`,{className:`step-title blue-text`,children:e.title}),(0,C.jsx)(`p`,{className:`step-desc dark-text`,children:e.desc})]}),t<wd.length-1&&(0,C.jsx)(`div`,{className:`step-arrow`,children:(0,C.jsx)(ue,{size:22,strokeWidth:2.5,className:`blue-text`})})]},e.id))})]}),(0,C.jsxs)(`div`,{className:`inner-section`,children:[(0,C.jsxs)(`div`,{className:`inner-tag blue-text`,children:[(0,C.jsx)(`span`,{className:`inner-tag-line blue-bg`}),`NOS TARIFS`]}),(0,C.jsx)(`div`,{className:`pricing-row`,children:Td.map(e=>(0,C.jsxs)(`div`,{className:`pricing-card ${e.type===`popular`?`popular-card`:`white-card`}`,children:[e.type===`popular`&&(0,C.jsx)(`div`,{className:`popular-badge`,children:`LE + POPULAIRE`}),(0,C.jsx)(`div`,{className:`plan-icon-container`,children:e.icon}),(0,C.jsx)(`h4`,{className:`plan-name blue-text`,children:e.name}),(0,C.jsx)(`p`,{className:`plan-price-label`,children:e.price}),(0,C.jsxs)(`div`,{className:`plan-details-box`,children:[(0,C.jsx)(`p`,{className:`plan-desc`,children:e.desc}),e.features.map((e,t)=>(0,C.jsx)(`p`,{className:`plan-feature`,children:e},t))]}),(0,C.jsx)(`button`,{className:`plan-btn`,onClick:n,children:e.button})]},e.id))})]})]}),(0,C.jsx)(`div`,{className:`card-right promo-side`,children:(0,C.jsxs)(`div`,{className:`promo-box expedition-gradient`,children:[(0,C.jsx)(`img`,{src:Cd,alt:`Yobanté Rek`,className:`promo-logo`}),(0,C.jsx)(`p`,{className:`promo-desc expedition-desc`,children:`Envoyez vos colis depuis la France vers le Sénégal avec collecte à domicile ou dépôt en point relais.`}),(0,C.jsx)(`button`,{className:`promo-btn expedition-btn`,onClick:()=>e(`app-expedition`),children:`En savoir plus →`})]})})]}),(0,C.jsxs)(`div`,{id:`app-boutique`,className:`service-card-wrapper boutique-wrapper glass-card sr boutique-service`,style:{marginTop:`60px`},children:[(0,C.jsx)(`div`,{className:`card-right promo-side`,children:(0,C.jsxs)(`div`,{className:`promo-box boutique-gradient`,children:[(0,C.jsx)(`img`,{src:Ge,alt:`Yobanté Boutique`,className:`promo-logo`}),(0,C.jsx)(`p`,{className:`promo-desc boutique-desc`,children:`Achetez vos produits préférés à prix discount`}),(0,C.jsx)(`button`,{className:`promo-btn boutique-btn`,onClick:()=>e(`app-boutique`),children:`Explorer nos rayons`})]})}),(0,C.jsxs)(`div`,{className:`card-left blue-dark-bg`,children:[(0,C.jsxs)(`div`,{className:`card-title-row`,children:[(0,C.jsx)(`div`,{className:`card-icon-circle gold-bg`,children:(0,C.jsx)(Fe,{size:28,strokeWidth:1.5,color:`#1E3A8A`})}),(0,C.jsx)(`div`,{children:(0,C.jsx)(`h3`,{className:`card-main-title white-text`,children:`Yobanté Boutique`})})]}),(0,C.jsxs)(`div`,{className:`inner-section`,children:[(0,C.jsxs)(`div`,{className:`inner-tag white-text`,children:[(0,C.jsx)(`span`,{className:`inner-tag-line gold-bg`}),`NOS RAYONS`]}),(0,C.jsx)(`div`,{className:`categories-grid`,children:Dd.map((e,t)=>(0,C.jsxs)(`div`,{className:`category-pill`,children:[(0,C.jsx)(`span`,{className:`cat-icon`,children:e.icon}),(0,C.jsx)(`span`,{className:`cat-label`,children:e.label})]},t))})]}),(0,C.jsxs)(`div`,{className:`inner-section`,children:[(0,C.jsxs)(`div`,{className:`inner-tag white-text`,children:[(0,C.jsx)(`span`,{className:`inner-tag-line gold-bg`}),`PARCOURS CLIENT`]}),(0,C.jsx)(`div`,{className:`steps-row`,children:Ed.map((e,t)=>(0,C.jsxs)(`div`,{className:`step-wrapper`,children:[(0,C.jsxs)(`div`,{className:`step-card boutique-step-card`,children:[(0,C.jsxs)(`div`,{className:`step-num gold-bg step-num-dark`,children:[`Étape `,t+1]}),(0,C.jsx)(`p`,{className:`step-title boutique-step-title`,children:e.title}),e.desc&&(0,C.jsx)(`p`,{className:`step-desc boutique-step-desc`,children:e.desc})]}),t<Ed.length-1&&(0,C.jsx)(`div`,{className:`step-arrow`,children:(0,C.jsx)(ue,{size:22,strokeWidth:2.5,className:`gold-text`})})]},t))})]})]})]})]}),(0,C.jsx)(`style`,{jsx:!0,children:`
        * { box-sizing: border-box; }

        .section {
          position: relative;
          padding: 100px 0;
          background:
            radial-gradient(circle at top left, #FDF3CC 0%, transparent 28%),
            radial-gradient(circle at bottom right, #C5D5F0 0%, transparent 32%),
            #f8fafc;
          overflow: hidden;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          z-index: 0;
        }

        .bg1 { width: 320px; height: 320px; background: #1E3A8A; top: -90px; right: -90px; }
        .bg2 { width: 280px; height: 280px; background: #F5C518; bottom: -90px; left: -90px; }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HEADER */
        .section-header { text-align: center; margin-bottom: 56px; }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #1E3A8A;
          letter-spacing: 2px;
          background: rgba(30,58,138,0.06);
          padding: 8px 16px;
          border-radius: 999px;
        }

        .tag-line { width: 20px; height: 2px; background: #F5C518; border-radius: 2px; }

        /* WRAPPERS */
        .service-card-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          border-radius: 30px;
          overflow: hidden;
          align-items: stretch;
          gap: 0;
        }

        .glass-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.45);
          box-shadow: 0 20px 60px rgba(30,58,138,0.1), 0 2px 0 rgba(255,255,255,0.8) inset;
        }

        .boutique-wrapper { grid-template-columns: 1fr 2fr; }

        .boutique .expedition-service,
        .rek .boutique-service { display: none; }

        .card-left {
          padding: 38px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .yellow-main { background: #F5C518; }
        .blue-dark-bg { background: linear-gradient(135deg, #1E3A8A 0%, #152E70 100%); }

        /* COLORS */
        .blue-text   { color: #1E3A8A; }
        .white-text  { color: white; }
        .gold-text   { color: #F5C518; }
        .dark-text   { color: #475569; }
        .blue-bg     { background: #1E3A8A; }
        .gold-bg     { background: #F5C518; }

        /* CARD TITLE */
        .card-title-row { display: flex; align-items: center; gap: 16px; }

        .card-icon-circle {
          width: 62px; height: 62px;
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 22px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .card-main-title {
          font-size: 28px;
          font-weight: 900;
          line-height: 1.1;
        }

        /* INNER */
        .inner-section { display: flex; flex-direction: column; gap: 16px; }

        .inner-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .inner-tag-line { width: 18px; height: 2px; }

        /* STEPS */
        .steps-row { display: flex; gap: 16px; align-items: stretch; width: 100%; }

        .step-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .step-card {
          width: 100%;
          min-height: 200px;
          padding: 26px 16px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          box-sizing: border-box;
        }

        .white-card {
          background: rgba(255,255,255,0.97);
          transition: all 0.28s cubic-bezier(0.34,1.3,0.64,1);
        }
        .white-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(30,58,138,0.14);
        }

        .boutique-step-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          transition: all 0.28s cubic-bezier(0.34,1.3,0.64,1);
        }
        .boutique-step-card:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.15);
          box-shadow: 0 14px 32px rgba(0,0,0,0.15);
        }

        .step-num {
          height: 30px;
          border-radius: 50px;
          padding: 0 14px;
          width: auto;
          white-space: nowrap;
          margin: 0 auto 12px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 900; color: white;
          flex-shrink: 0;
        }

        .step-num-dark { color: #1E3A8A; }

        .step-title {
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 6px;
          min-height: 36px;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
        }

        .step-desc { font-size: 11px; line-height: 1.6; }

        .boutique-step-title { color: #ffffff !important; font-weight: 800; }
        .boutique-step-desc { color: rgba(255,255,255,0.85) !important; }

        .step-arrow {
          font-size: 32px; font-weight: 800;
          display: flex; align-items: center;
          user-select: none; flex-shrink: 0;
        }

        /* PRICING */
        .pricing-row {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          align-items: stretch;
        }

        .pricing-card {
          position: relative;
          border-radius: 20px;
          padding: 20px 14px;
          text-align: center;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .popular-card {
          background: linear-gradient(135deg, #ffffff 0%, #FDF3CC 100%);
          border: 2px solid #1E3A8A;
        }

        .popular-badge {
          position: absolute;
          top: -1px; left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #1E3A8A, #2a52c9);
          color: white;
          padding: 4px 28px;
          border-radius: 0 0 14px 14px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          z-index: 10;
          white-space: nowrap;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(30,58,138,0.25);
        }

        .plan-icon-container {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 8px; height: 36px;
        }

        .plan-name { font-size: 15px; font-weight: 900; }

        .plan-price-label {
          margin: 8px 0;
          font-size: 12px; font-weight: 700; color: #0f172a;
        }

        .plan-details-box {
          flex-grow: 1;
          display: flex; flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 14px;
        }

        .plan-desc { font-size: 11px; line-height: 1.5; color: #475569; margin: 0; }
        .plan-feature { margin-top: 8px; font-size: 10px; font-weight: 700; color: #1E3A8A; }

        .plan-btn {
          margin-top: auto;
          width: 100%; border: none;
          padding: 11px; border-radius: 50px;
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white;
          font-size: 11px; font-weight: 800; cursor: pointer;
          flex-shrink: 0;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(30,58,138,0.25);
          letter-spacing: 0.3px;
        }
        .plan-btn:hover {
          background: linear-gradient(135deg, #152E70, #1E3A8A);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30,58,138,0.35);
        }

        /* CATEGORIES */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
        }

        .category-pill {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 18px;
          padding: 14px 10px;
          text-align: center;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
          cursor: default;
        }
        .category-pill:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(245,197,24,0.4);
          transform: translateY(-4px);
        }

        .cat-icon {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 8px; height: 28px;
        }

        .cat-label { font-size: 12px; font-weight: 700; color: white; }

        /* PROMO */
        .promo-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
        }

        .promo-box {
          width: 100%; max-width: 300px;
          border-radius: 24px;
          padding: 36px 26px;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          text-align: center;
          box-sizing: border-box;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        .promo-box::before {
          content: "";
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          top: -70px; right: -70px;
        }

        .expedition-gradient { background: #F5C518; }
        .boutique-gradient   { background: linear-gradient(135deg, #1E3A8A 0%, #152E70 100%); }

        .promo-logo {
          width: 150px;
          height: auto;
          border-radius: 20px;
          object-fit: contain;
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          flex-shrink: 0;
        }

        .promo-desc {
          font-size: 20px; line-height: 1.55;
          font-weight: 800; margin: 0; color: white;
        }

        .expedition-desc { color: #1E3A8A !important; }
        .boutique-desc { color: white !important; }

        .promo-btn {
          width: 100%; max-width: 260px;
          border: none; border-radius: 50px;
          padding: 15px 24px;
          font-size: 14px; font-weight: 800;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          letter-spacing: 0.2px;
        }

        .expedition-btn {
          background: #1E3A8A; color: white;
          box-shadow: 0 8px 24px rgba(30,58,138,0.35);
        }
        .expedition-btn:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 14px 32px rgba(30,58,138,0.45); }

        .boutique-btn {
          background: #F5C518; color: #1E3A8A;
          box-shadow: 0 8px 24px rgba(245,197,24,0.35);
        }
        .boutique-btn:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 14px 32px rgba(245,197,24,0.45); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .service-card-wrapper,
          .boutique-wrapper { grid-template-columns: 1fr; }
          .promo-side { min-height: 280px; }

          /* Expédition : promo passe en premier sur mobile */
          .service-card-wrapper:not(.boutique-wrapper) .card-left { order: 2; }
          .service-card-wrapper:not(.boutique-wrapper) .promo-side { order: 1; }
        }

        @media (max-width: 768px) {
          .section { padding: 80px 0; }
          .promo-box { max-width: 100%; }
          .card-left { padding: 26px 20px; }
          .service-card-wrapper { border-radius: 22px; }
          .promo-side { padding: 16px; }
          .card-title-row { align-items: flex-start; }

          .steps-row { flex-direction: column; align-items: center; }
          .step-wrapper { width: 100%; flex-direction: column; }
          .step-card { width: 100%; max-width: 420px; height: auto; min-height: unset; }
          .step-arrow { transform: rotate(90deg); margin: 8px 0; }

          .pricing-row { grid-template-columns: 1fr; }
          .pricing-card { max-width: 380px; margin: 0 auto; width: 100%; }

          .categories-grid { grid-template-columns: repeat(2,1fr); }
          .promo-desc { font-size: 17px; }
          .promo-side { min-height: 250px; }
        }

        @media (max-width: 480px) {
          .section { padding: 64px 0; }
          .categories-grid { grid-template-columns: repeat(2, 1fr); }
          .card-main-title { font-size: 24px; }
          .card-left { padding: 22px 16px; gap: 22px; }
          .promo-box { padding: 32px 22px; gap: 20px; }
          .promo-desc { font-size: 15px; }
          .promo-btn { max-width: 220px; font-size: 13px; padding: 12px 18px; }
          .card-icon-circle { width: 52px; height: 52px; border-radius: 16px; }
          .inner-tag { font-size: 9px; }
          .pricing-card { max-width: 100%; }
          .category-pill { min-width: 0; padding: 12px 6px; }
          .cat-label { font-size: 10px; line-height: 1.25; }
        }
      `})]})},kd=[{id:`expedition`,logo:`/assets/Logo%20Yobante%20Rek%20-%20fond%20blanc-CtSZFV8v.PNG`,alt:`Yobanté Expédition`,chipIcon:(0,C.jsx)(ke,{size:14,strokeWidth:1.8}),chipText:`Expédition & Suivi`,chipClass:`expedition`,title:`YOBANTÉ Expédition`,description:`Gérez vos envois entre la France et le Sénégal de manière rapide, sécurisée et transparente.`,features:[`Simulez votre envoi`,`Payez en toute sécurité`,`Suivez l'acheminement de votre envoi`],iosUrl:`https://apps.apple.com`,androidUrl:`https://play.google.com`},{id:`boutique`,logo:x,alt:`Yobanté Boutique`,chipIcon:(0,C.jsx)(Fe,{size:14,strokeWidth:1.8}),chipText:`Boutique en ligne`,chipClass:`boutique`,title:`YOBANTÉ Boutique`,description:`Achetez vos produits préférés à prix discount et faites-les livrer directement au Sénégal.`,features:[`Produits authentiques`,`Possibilité d'achat en gros`,`Expérience d'achat simple et pratique`],iosUrl:`https://apps.apple.com`,androidUrl:`https://play.google.com`}],Ad=({variant:e=`rek`})=>{let t=kd.filter(t=>e===`rek`?t.id===`expedition`:t.id===`boutique`);return(0,C.jsxs)(`section`,{id:`apps`,className:`apps-section`,children:[(0,C.jsx)(`div`,{className:`bg-glow glow-1`}),(0,C.jsx)(`div`,{className:`bg-glow glow-2`}),(0,C.jsxs)(`div`,{className:`container`,children:[(0,C.jsx)(`div`,{className:`section-header sr`,children:(0,C.jsxs)(`div`,{className:`section-badge`,children:[(0,C.jsx)(`span`,{className:`tag-line`}),`Notre Application mobile`]})}),(0,C.jsx)(`div`,{className:`apps-grid`,children:t.map((e,t)=>(0,C.jsxs)(`div`,{id:`app-${e.id}`,className:`app-card sr sr-d${t+1}`,children:[(0,C.jsx)(`div`,{className:`card-glow`}),(0,C.jsxs)(`div`,{className:`card-inner`,children:[(0,C.jsx)(`div`,{className:`app-logo-container`,children:(0,C.jsx)(`img`,{src:e.logo,alt:e.alt,className:`app-logo`})}),(0,C.jsxs)(`div`,{className:`app-chip ${e.chipClass}`,children:[e.chipIcon,e.chipText]}),(0,C.jsx)(`p`,{children:e.description}),(0,C.jsx)(`ul`,{className:`app-features`,children:e.features.map((e,t)=>(0,C.jsx)(`li`,{children:e},t))})]}),(0,C.jsxs)(`div`,{className:`download-buttons`,style:{padding:`0 34px`},children:[(0,C.jsxs)(`button`,{className:`download-btn ios`,onClick:()=>window.open(e.iosUrl,`_blank`),children:[(0,C.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,width:`16`,height:`16`,style:{marginRight:`7px`,verticalAlign:`middle`},children:(0,C.jsx)(`path`,{d:`M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6`})}),`App Store`]}),(0,C.jsxs)(`button`,{className:`download-btn android`,onClick:()=>window.open(e.androidUrl,`_blank`),children:[(0,C.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,width:`16`,height:`16`,style:{marginRight:`7px`,verticalAlign:`middle`},children:[(0,C.jsx)(`path`,{d:`M3,5.27V18.73c0,0.59,0.34,1.13,0.88,1.38L13.12,12l-9.24-8.11C3.34,4.14,3,4.68,3,5.27Z`,opacity:`0.15`}),(0,C.jsx)(`path`,{d:`M17.85,9.5L4.76,3.12C4.42,2.95,4.03,3,3.88,3.14L13.12,12Z`}),(0,C.jsx)(`path`,{d:`M13.12,12l4.73-2.5L20.4,11c0.41,0.22,0.6,0.69,0.44,1.12c-0.11,0.31-0.4,0.53-0.74,0.53c-0.09,0-0.18-0.02-0.26-0.05l-2.13-1.1Z`}),(0,C.jsx)(`path`,{d:`M13.12,12l-9.24,8.86c0.15,0.14,0.54,0.19,0.88,0.02l13.09-6.38Z`})]}),`Google Play`]})]})]},e.id))})]}),(0,C.jsx)(`style`,{jsx:!0,children:`
        .card-inner { padding: 34px 34px 0; display: flex; flex-direction: column; flex: 1; }

        .apps-section {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          background: #f8fbff;
        }

        .container {
          position: relative; z-index: 5;
          max-width: 1250px; margin: 0 auto; padding: 0 24px;
        }

        .bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: .3; pointer-events: none;
        }

        .glow-1 { width: 450px; height: 450px; background: #1E3A8A; top: -130px; left: -80px; }
        .glow-2 { width: 380px; height: 380px; background: #F5C518; bottom: -100px; right: -80px; }

        /* HEADER */
        .section-header { text-align: center; margin-bottom: 40px; }

        .section-badge {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 18px; color: #1E3A8A;
          font-size: 11px; font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          background: rgba(30,58,138,0.06);
          padding: 9px 18px; border-radius: 999px;
        }

        .tag-line { width: 20px; height: 2px; background: #F5C518; border-radius: 2px; }

        .section-title {
          font-size: clamp(30px, 4.5vw, 50px);
          line-height: 1.12; font-weight: 900;
          color: #1E3A8A; margin-bottom: 16px;
        }

        .section-subtitle {
          max-width: 640px; margin: 0 auto;
          color: #64748b; font-size: 16px; line-height: 1.7;
        }

        /* GRID */
        .apps-grid {
          display: grid;
          grid-template-columns: minmax(0, 580px);
          justify-content: center;
          gap: 30px;
          max-width: 100%;
          margin: 0 auto;
        }

        /* CARD */
        .app-card {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 0 0 34px;
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 8px 40px rgba(30,58,138,.08);
          display: flex; flex-direction: column;
          transition: box-shadow 0.32s ease, transform 0.32s ease;
        }

        .app-card:hover {
          box-shadow: 0 20px 56px rgba(30,58,138,.15);
          transform: translateY(-6px);
        }

        .app-card.scroll-target {
          animation: app-card-focus 60s ease-out;
        }

        @keyframes app-card-focus {
          0%, 15% { box-shadow: 0 0 0 5px rgba(245,197,24,.75), 0 20px 56px rgba(30,58,138,.22); }
          100% { box-shadow: 0 8px 40px rgba(30,58,138,.08); }
        }

        .card-inner {
          padding: 34px 34px 0;
          display: flex; flex-direction: column; flex: 1;
        }

        .card-glow {
          position: absolute;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(30,58,138,.07);
          filter: blur(80px);
          top: -100px; right: -80px; pointer-events: none;
        }

        .app-logo-container {
          display: flex; justify-content: center; align-items: center;
          margin-bottom: 18px;
          padding: 12px 0 4px;
        }

        .app-logo {
          max-height: 70px;
          width: auto;
          max-width: 65%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }

        /* CHIPS */
        .app-chip {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 7px; padding: 8px 16px; border-radius: 999px;
          font-size: 11.5px; font-weight: 700;
          margin-bottom: 18px; align-self: center;
          letter-spacing: 0.2px;
        }

        .app-chip.expedition {
          background: rgba(30,58,138,.1); color: #1E3A8A;
          border: 1px solid rgba(30,58,138,.12);
        }
        .app-chip.boutique {
          background: rgba(245,197,24,.2); color: #8a6600;
          border: 1px solid rgba(245,197,24,.3);
        }

        .app-card h3 { font-size: 26px; color: #1E3A8A; margin-bottom: 14px; font-weight: 900; }
        .app-card p  { color: #64748b; line-height: 1.7; margin-bottom: 24px; font-size: 14px; }

        /* FEATURES */
        .app-features { list-style: none; padding: 0; margin: 0 0 28px; }

        .app-features li {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px; color: #334155; font-size: 14px;
          line-height: 1.5;
        }

        .app-features li::before {
          content: '✓'; width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white;
          font-size: 11px; font-weight: 900; flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(30,58,138,.25);
        }

        /* BUTTONS */
        .download-buttons { display: flex; gap: 12px; margin-top: auto; }

        .boutique-download-wrap {
          background: white;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 14px rgba(0,0,0,.04);
          margin-top: auto;
        }

        .download-btn {
          flex: 1; border: none; border-radius: 14px;
          padding: 14px 18px; font-size: 14px; font-weight: 800;
          cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.25s cubic-bezier(0.34,1.4,0.64,1);
          letter-spacing: 0.1px;
        }

        .download-btn:hover { transform: translateY(-3px); opacity: 0.92; }

        .ios     { background: #1E3A8A; color: white; box-shadow: none; }
        .android { background: #F5C518; color: #1E3A8A; box-shadow: none; }

        /* Boutique : App Store fond blanc (évite bleu sur blanc de carte) */
        .ios-boutique {
          background: white !important;
          color: #1E3A8A !important;
          border: 1.5px solid rgba(30,58,138,.2);
          box-shadow: 0 4px 12px rgba(30,58,138,.08) !important;
        }
        .ios-boutique:hover { background: #f0f4ff !important; opacity: 1; }

        /* RESPONSIVE */
        @media (max-width: 1024px) { .container { padding: 0 28px; } .apps-grid { gap: 22px; } }

        @media (max-width: 930px) {
          .apps-grid { grid-template-columns: 1fr; max-width: 580px; margin: 0 auto; }
          .section-header { margin-bottom: 48px; }
          .card-inner { padding: 26px 20px 0; }
          .download-buttons { padding: 0 20px !important; }
          .app-logo { max-width: 78%; }
        }

        @media (max-width: 520px) {
          .apps-section { padding: 70px 0; }
          .container { padding: 0 16px; }
          .app-card { padding: 28px 18px; border-radius: 22px; }
          .download-buttons { flex-direction: column; gap: 10px; }
          .download-btn { width: 100%; padding: 13px 18px; }
          .section-title { font-size: 28px; }
          .app-card h3 { font-size: 22px; }
        }
      `})]})},jd=[{q:`Quels objets puis-je envoyer ?`,a:`Documents, vêtements, chaussures, produits alimentaires, appareils électroniques, électroménagers, cosmétiques, jouets, produits lessiviels et mobilier. Les produits inflammables et les armes sont strictement interdits.`},{q:`Comment obtenir un devis ?`,a:`Téléchargez l'application Yobanté Rêk puis renseignez les informations de votre colis. Selon la catégorie, un devis vous sera transmis rapidement.`},{q:`Quels sont les moyens de paiement acceptés ?`,a:`Nous acceptons Orange Money, Wave ainsi que les autres moyens de paiement disponibles lors de la validation de la commande.`}],Md=[{q:`Quels produits puis-je commander ?`,a:`YOBANTÉ Boutique propose des produits alimentaires, de mode, de maison, d'électronique, d'hygiène et de sport selon les disponibilités du catalogue.`},{q:`Comment passer une commande ?`,a:`Sélectionnez vos produits, validez votre panier puis choisissez votre mode de paiement et votre adresse de livraison.`},{q:`Quels sont les moyens de paiement acceptés ?`,a:`Le paiement peut être effectué avec Orange Money, Wave ou carte bancaire.`}],Nd=()=>(0,C.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,style:{width:17,height:17},children:[(0,C.jsx)(`path`,{d:`M12 5V19`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`}),(0,C.jsx)(`path`,{d:`M5 12H19`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`})]}),Pd=({variant:e=`rek`})=>{let[t,n]=(0,y.useState)(0),r=e===`boutique`?Md:jd,i=e=>{n(t===e?null:e)};return(0,C.jsxs)(`section`,{id:`faq`,className:`faq-section`,children:[(0,C.jsxs)(`div`,{className:`faq-container`,children:[(0,C.jsx)(`div`,{className:`faq-header sr`,children:(0,C.jsxs)(`div`,{className:`faq-tag`,children:[(0,C.jsx)(`span`,{className:`faq-dot`}),`Questions fréquentes`]})}),(0,C.jsx)(`div`,{className:`faq-list`,children:r.map((e,n)=>{let r=t===n;return(0,C.jsxs)(`div`,{className:`faq-item ${r?`open`:``}`,children:[(0,C.jsxs)(`button`,{className:`faq-btn`,onClick:()=>i(n),"aria-expanded":r,children:[(0,C.jsxs)(`div`,{className:`faq-number`,children:[`0`,n+1]}),(0,C.jsx)(`div`,{className:`faq-question`,children:e.q}),(0,C.jsx)(`div`,{className:`faq-icon`,children:(0,C.jsx)(Nd,{})})]}),r&&(0,C.jsx)(`div`,{className:`faq-answer-wrapper`,children:(0,C.jsx)(`div`,{className:`faq-answer`,children:e.a})})]},n)})})]}),(0,C.jsx)(`style`,{jsx:!0,children:`
        .faq-section {
          position: relative; overflow: hidden;
          padding: 90px 0;
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
        }

        .faq-section::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%);
          top: -100px; right: -120px;
          pointer-events: none;
        }

        .faq-container {
          position: relative; z-index: 5;
          max-width: 880px; margin: 0 auto; padding: 0 24px;
        }

        /* HEADER */
        .faq-header { text-align: center; margin-bottom: 44px; }

        .faq-tag {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(30,58,138,.07);
          color: #1E3A8A;
          border-radius: 999px;
          padding: 9px 16px;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.6px; text-transform: uppercase;
          margin-bottom: 20px;
        }

        .faq-dot {
          width: 7px; height: 7px;
          border-radius: 50%; background: #F5C518;
        }

        .faq-title {
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.18; font-weight: 800;
          color: #1E3A8A; margin-bottom: 16px;
        }

        .faq-title span { color: #152E70; }

        .faq-description {
          max-width: 580px; margin: 0 auto;
          color: #64748b; font-size: 16px; line-height: 1.7;
        }

        /* FAQ LIST */
        .faq-list { display: flex; flex-direction: column; gap: 14px; }

        .faq-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(0,0,0,.055);
          box-shadow: 0 2px 12px rgba(0,0,0,.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
        }

        .faq-item:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(30,58,138,.07); }

        .faq-item.open {
          border-color: rgba(30,58,138,.22);
          box-shadow: 0 10px 32px rgba(30,58,138,.08);
          transform: translateY(-2px);
        }

        /* BUTTON */
        .faq-btn {
          width: 100%; border: none; background: transparent;
          padding: 22px 26px;
          display: flex; align-items: center; gap: 18px;
          cursor: pointer; text-align: left;
        }

        .faq-number {
          min-width: 46px; height: 46px; border-radius: 14px;
          background: linear-gradient(135deg, rgba(30,58,138,.1), rgba(30,58,138,.06));
          color: #1E3A8A;
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: 14px;
          border: 1px solid rgba(30,58,138,.1);
          flex-shrink: 0;
        }

        .faq-item.open .faq-number {
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white; border-color: transparent;
          box-shadow: 0 4px 14px rgba(30,58,138,.28);
        }

        .faq-question {
          flex: 1; color: #0f172a;
          font-size: 16.5px; font-weight: 700; line-height: 1.45;
        }

        .faq-icon {
          min-width: 36px; width: 36px; height: 36px; border-radius: 50%;
          background: #f1f5ff; color: #1E3A8A;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s;
          flex-shrink: 0;
        }

        .faq-item.open .faq-icon {
          transform: rotate(135deg);
          background: #1E3A8A; color: white;
          box-shadow: 0 4px 12px rgba(30,58,138,.3);
        }

        /* ANSWER */
        .faq-answer-wrapper { width: 100%; }

        .faq-answer {
          padding: 0 26px 22px 90px;
          color: #475569; line-height: 1.75; font-size: 15px;
          border-top: 1px solid rgba(30,58,138,.06);
          margin-top: -2px;
          padding-top: 16px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .faq-section { padding: 72px 0; }
          .faq-btn { padding: 18px 20px; gap: 14px; }
          .faq-question { font-size: 15px; }
          .faq-answer { padding: 0 20px 18px 78px; }
        }

        @media (max-width: 520px) {
          .faq-title { font-size: 26px; }
          .faq-btn { align-items: center; }
          .faq-number { min-width: 38px; height: 38px; border-radius: 10px; font-size: 13px; }
          .faq-answer { padding: 0 18px 18px 18px; }
          .faq-icon { min-width: 34px; width: 34px; height: 34px; }
          .faq-question { font-size: 14px; }
        }
      `})]})},Fd=({variant:e=`rek`})=>{let t=e===`boutique`,[n,r]=(0,y.useState)({prenom:``,nom:``,email:``,telephone:``,sujet:``,message:``}),[i,a]=(0,y.useState)(`idle`),o=e=>r({...n,[e.target.name]:e.target.value});return(0,C.jsxs)(`section`,{id:`contact`,className:`contact-section`,children:[(0,C.jsx)(`div`,{className:`bg-glow glow-1`}),(0,C.jsx)(`div`,{className:`bg-glow glow-2`}),(0,C.jsx)(`div`,{className:`container`,children:(0,C.jsxs)(`div`,{className:`contact-grid`,children:[(0,C.jsxs)(`div`,{className:`contact-details sr-l`,children:[(0,C.jsxs)(`div`,{className:`section-tag`,children:[(0,C.jsx)(`span`,{className:`tag-line`}),`Contact`]}),(0,C.jsx)(`h2`,{className:`contact-title`,children:`Contactez-nous`}),(0,C.jsx)(`p`,{className:`contact-description`,children:t?`Notre équipe vous accompagne pour vos achats et vos livraisons au Sénégal.`:`Notre service client est disponible pour répondre à toutes vos questions.`}),(0,C.jsxs)(`div`,{className:`contact-info-list`,children:[(0,C.jsxs)(`div`,{className:`contact-item`,children:[(0,C.jsx)(`div`,{className:`contact-icon`,children:(0,C.jsx)(je,{size:22,strokeWidth:1.5,color:`#1e3a8a`})}),(0,C.jsxs)(`div`,{className:`contact-text`,children:[(0,C.jsx)(`strong`,{children:`Téléphone`}),(0,C.jsx)(`a`,{href:`tel:+33600000000`,children:`+33 6 00 00 00 00`})]})]}),(0,C.jsxs)(`div`,{className:`contact-item`,children:[(0,C.jsx)(`div`,{className:`contact-icon`,children:(0,C.jsx)(Oe,{size:22,strokeWidth:1.5,color:`#1e3a8a`})}),(0,C.jsxs)(`div`,{className:`contact-text`,children:[(0,C.jsx)(`strong`,{children:`WhatsApp`}),(0,C.jsx)(`a`,{href:`https://wa.me/33600000000`,target:`_blank`,rel:`noopener noreferrer`,children:`+33 6 00 00 00 00`})]})]}),(0,C.jsxs)(`div`,{className:`contact-item`,children:[(0,C.jsx)(`div`,{className:`contact-icon`,children:(0,C.jsx)(Ee,{size:22,strokeWidth:1.5,color:`#1e3a8a`})}),(0,C.jsxs)(`div`,{className:`contact-text`,children:[(0,C.jsx)(`strong`,{children:`Email`}),(0,C.jsx)(`a`,{href:`mailto:contact@yobanteboutique.com`,children:`contact@yobanteboutique.com`})]})]})]})]}),(0,C.jsxs)(`div`,{className:`form-wrapper sr-r`,children:[(0,C.jsx)(`div`,{className:`form-glow`}),(0,C.jsxs)(`form`,{className:`contact-form`,onSubmit:async e=>{e.preventDefault(),a(`sending`);try{(await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({access_key:`a741136d-b23e-4891-a8b4-c6f4f8210215`,name:`${n.prenom} ${n.nom}`,email:n.email,telephone:n.telephone,subject:n.sujet,message:n.message})})).json()).success?(a(`success`),r({prenom:``,nom:``,email:``,telephone:``,sujet:``,message:``})):a(`error`)}catch{a(`error`)}},children:[(0,C.jsxs)(`div`,{className:`form-header`,children:[(0,C.jsx)(`h3`,{children:`Avez-vous une question ?`}),(0,C.jsx)(`p`,{children:`Notre équipe vous répondra dans les plus brefs délais.`})]}),(0,C.jsxs)(`div`,{className:`form-row`,children:[(0,C.jsx)(`div`,{className:`form-group`,children:(0,C.jsx)(`input`,{type:`text`,name:`prenom`,placeholder:`Prénom`,value:n.prenom,onChange:o,required:!0})}),(0,C.jsx)(`div`,{className:`form-group`,children:(0,C.jsx)(`input`,{type:`text`,name:`nom`,placeholder:`Nom`,value:n.nom,onChange:o,required:!0})})]}),(0,C.jsx)(`div`,{className:`form-group`,children:(0,C.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Votre adresse email`,value:n.email,onChange:o,required:!0})}),(0,C.jsx)(`div`,{className:`form-group`,children:(0,C.jsxs)(`div`,{className:`phone-input-wrapper`,children:[(0,C.jsx)(`span`,{className:`phone-prefix`,children:(0,C.jsx)(je,{size:14,strokeWidth:2})}),(0,C.jsx)(`input`,{type:`tel`,name:`telephone`,placeholder:`Votre numéro de téléphone ou WhatsApp`,value:n.telephone,onChange:o,className:`phone-input`})]})}),(0,C.jsx)(`div`,{className:`form-group`,children:(0,C.jsxs)(`select`,{name:`sujet`,value:n.sujet,onChange:o,required:!0,children:[(0,C.jsx)(`option`,{value:``,disabled:!0,hidden:!0,children:`Sélectionner un sujet`}),!t&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`option`,{value:`Demande de devis - Produit max 30kg`,children:`Demande de devis - Produit max 30kg`}),(0,C.jsx)(`option`,{value:`Demande de devis - Gros colis`,children:`Demande de devis - Gros colis`}),(0,C.jsx)(`option`,{value:`Envoi de documents`,children:`Envoi de documents`})]}),t&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`option`,{value:`Commande boutique`,children:`Commande boutique`}),(0,C.jsx)(`option`,{value:`Livraison au Sénégal`,children:`Livraison au Sénégal`}),(0,C.jsx)(`option`,{value:`Produit indisponible`,children:`Produit indisponible`})]}),(0,C.jsx)(`option`,{value:`Autres`,children:`Autres`})]})}),(0,C.jsx)(`div`,{className:`form-group`,children:(0,C.jsx)(`textarea`,{name:`message`,rows:`4`,placeholder:`Décrivez votre demande...`,value:n.message,onChange:o,required:!0})}),i===`success`&&(0,C.jsxs)(`div`,{className:`feedback success`,children:[(0,C.jsx)(fe,{size:15,strokeWidth:2,style:{marginRight:`7px`,verticalAlign:`middle`}}),`Message envoyé avec succès.`]}),i===`error`&&(0,C.jsxs)(`div`,{className:`feedback error`,children:[(0,C.jsx)(E,{size:15,strokeWidth:2,style:{marginRight:`7px`,verticalAlign:`middle`}}),`Une erreur s'est produite.`]}),(0,C.jsx)(`button`,{type:`submit`,className:`submit-btn`,disabled:i===`sending`,children:i===`sending`?`Envoi en cours...`:(0,C.jsxs)(C.Fragment,{children:[`Envoyer le message`,(0,C.jsx)(ue,{size:16,strokeWidth:2,style:{marginLeft:`8px`,verticalAlign:`middle`}})]})})]})]})]})}),(0,C.jsx)(`style`,{jsx:!0,children:`
        .contact-section {
          position: relative; overflow: hidden;
          padding: 100px 0; background: #f8fbff;
        }

        .container {
          position: relative; z-index: 5;
          max-width: 1250px; margin: 0 auto; padding: 0 24px;
        }

        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.15fr;
          gap: 70px; align-items: center;
        }

        .bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0.3;
        }

        .glow-1 { width: 400px; height: 400px; background: #1e3a8a; top: -90px; left: -90px; }
        .glow-2 { width: 320px; height: 320px; background: #F5C518; bottom: -90px; right: -70px; }

        .section-tag {
          display: inline-flex; align-items: center; gap: 12px;
          color: #1e3a8a; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 12px;
        }

        .tag-line { width: 28px; height: 2px; background: #F5C518; }

        .contact-title {
          font-size: clamp(32px, 4.5vw, 52px);
          line-height: 1.12; color: #1e3a8a; font-weight: 900; margin-bottom: 18px;
        }

        .contact-description {
          color: #64748b; font-size: 16px; line-height: 1.75;
          margin-bottom: 36px; max-width: 440px;
        }

        .contact-info-list { display: flex; flex-direction: column; gap: 16px; }

        .contact-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 18px;
          background: rgba(255,255,255,0.82);
          border-radius: 20px;
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.6);
          transition: transform 0.28s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.28s ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
          box-shadow: 0 12px 32px rgba(30,58,138,.09);
          border-color: rgba(30,58,138,.12);
        }

        .contact-icon {
          width: 54px; height: 54px; border-radius: 16px;
          background: linear-gradient(135deg, #EEF2FF, white);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 18px rgba(30,58,138,.08); flex-shrink: 0;
          border: 1px solid rgba(30,58,138,.08);
        }

        .contact-text { display: flex; flex-direction: column; }

        .contact-text strong { color: #1e3a8a; font-size: 14px; margin-bottom: 3px; }

        .contact-text a,
        .contact-text span {
          color: #475569; text-decoration: none; font-size: 15px;
        }

        .contact-text a:hover { color: #1e3a8a; }

        /* FORM */
        .form-wrapper {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(20px);
          border-radius: 30px; padding: 38px;
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 20px 56px rgba(30,58,138,.1);
        }

        .form-glow {
          position: absolute; width: 240px; height: 240px;
          background: rgba(30,58,138,.08); border-radius: 50%;
          filter: blur(70px); top: -90px; right: -70px;
        }

        .form-header { margin-bottom: 26px; }

        .form-header h3 { color: #1e3a8a; font-size: 24px; font-weight: 900; margin-bottom: 6px; }
        .form-header p  { color: #94a3b8; font-size: 14px; margin-bottom: 14px; }

        .form-contact-shortcuts {
          display: flex; gap: 10px; flex-wrap: wrap;
        }

        .shortcut-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 14px; border-radius: 50px;
          font-size: 13px; font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .shortcut-btn:hover { opacity: 0.85; }

        .shortcut-phone { background: rgba(30,58,138,.1); color: #1e3a8a; }
        .shortcut-wa    { background: rgba(37,211,102,.15); color: #15803d; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-group { margin-bottom: 14px; }

        input, select, textarea {
          width: 100%; padding: 14px 16px; border: none;
          border-radius: 14px; background: #f8fafc;
          font-size: 14px; outline: none; transition: 0.25s;
          font-family: inherit;
          border: 1px solid transparent;
        }

        input:focus, select:focus, textarea:focus {
          background: white;
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,.08);
        }

        /* PHONE INPUT */
        .phone-input-wrapper {
          display: flex; align-items: center;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid transparent;
          transition: 0.25s;
          overflow: hidden;
        }

        .phone-input-wrapper:focus-within {
          background: white;
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,.08);
        }

        .phone-prefix {
          display: flex; align-items: center; justify-content: center;
          padding: 0 14px;
          color: #25D366;
          flex-shrink: 0;
        }

        .phone-input {
          flex: 1; border: none !important;
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 14px 16px 14px 4px !important;
        }

        .phone-input:focus {
          background: transparent !important;
          border-color: transparent !important;
          box-shadow: none !important;
        }

        textarea { resize: none; }

        .feedback {
          padding: 12px 14px; border-radius: 12px;
          margin-bottom: 14px; font-size: 13px; font-weight: 600;
        }

        .success { background: #ecfdf5; color: #166534; }
        .error   { background: #fef2f2; color: #991b1b; }

        .submit-btn {
          width: 100%; border: none; padding: 16px; border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a 0%, #2a52c9 100%);
          color: white;
          font-size: 15px; font-weight: 800; cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 28px rgba(30,58,138,.25);
          letter-spacing: 0.2px;
        }

        .submit-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(30,58,138,.28); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        @media (max-width: 980px) { .contact-grid { grid-template-columns: 1fr; gap: 52px; } }

        @media (max-width: 520px) {
          .contact-section { padding: 76px 0; }
          .form-wrapper { padding: 26px 18px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-title { font-size: 38px; }
          .form-header h3 { font-size: 22px; }
          .contact-item { padding: 14px; gap: 12px; }
          .contact-icon { width: 46px; height: 46px; border-radius: 14px; }
          .contact-text a, .contact-text span { font-size: 14px; overflow-wrap: anywhere; }
        }

        @media (max-width: 360px) {
          .contact-section { padding: 64px 0; }
          .form-wrapper { padding: 22px 14px; border-radius: 22px; }
          .contact-title { font-size: 32px; }
        }
      `})]})},Id=({variant:e=`rek`})=>(0,C.jsxs)(`section`,{id:`about`,className:`about-section`,children:[(0,C.jsx)(`div`,{className:`about-bg-glow glow-1`}),(0,C.jsx)(`div`,{className:`about-bg-glow glow-2`}),(0,C.jsx)(`div`,{className:`about-quote-deco`,"aria-hidden":`true`,children:`"`}),(0,C.jsx)(`div`,{className:`container`,children:(0,C.jsx)(`div`,{className:`about-inner`,children:(0,C.jsxs)(`div`,{className:`about-header sr`,children:[(0,C.jsxs)(`div`,{className:`section-tag`,children:[(0,C.jsx)(`span`,{className:`tag-dot`}),`À propos`]}),(0,C.jsx)(`h2`,{className:`about-title`,children:`Qui sommes-nous ?`}),(0,C.jsx)(`div`,{className:`about-divider`}),(0,C.jsx)(`p`,{className:`about-description`,children:e===`boutique`?`YOBANTÉ Boutique facilite vos achats en France et leur livraison au Sénégal grâce à une sélection de produits fiables, accessibles et authentiques.`:`YOBANTÉ REK facilite l'envoi de colis entre la France et le Sénégal grâce à un service fiable, accessible et transparent.`}),(0,C.jsxs)(`div`,{className:`about-badges`,children:[(0,C.jsx)(`span`,{className:`about-badge`,children:`🇫🇷 France`}),(0,C.jsx)(`span`,{className:`about-badge-arrow`,children:`→`}),(0,C.jsx)(`span`,{className:`about-badge`,children:`🇸🇳 Sénégal`})]})]})})}),(0,C.jsx)(`style`,{jsx:!0,children:`
        .about-section {
          position: relative; overflow: hidden;
          padding: 100px 0;
          background: linear-gradient(135deg, #0a1535 0%, #1E3A8A 60%, #152E70 100%);
          color: white;
        }

        .about-bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(130px); opacity: 0.18; pointer-events: none;
        }

        .glow-1 { width: 420px; height: 420px; background: #2a52c9; top: -120px; right: -100px; }
        .glow-2 { width: 350px; height: 350px; background: #F5C518; bottom: -100px; left: -80px; }

        /* Déco grande guillemet */
        .about-quote-deco {
          position: absolute;
          font-size: 380px;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          top: -60px; right: 5%;
          pointer-events: none;
          font-family: Georgia, serif;
          user-select: none;
        }

        .container {
          position: relative; z-index: 2;
          max-width: 900px; margin: 0 auto; padding: 0 28px;
        }

        .about-inner { display: flex; flex-direction: column; }

        .about-header { max-width: 100%; }

        /* TAG */
        .section-tag {
          display: inline-flex; align-items: center; gap: 10px;
          color: #F5C518; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 11px;
          background: rgba(245,197,24,0.1);
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid rgba(245,197,24,0.2);
        }

        .tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #F5C518;
          box-shadow: 0 0 0 0 rgba(245,197,24,0.4);
          animation: pulse-gold 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-gold {
          0%   { box-shadow: 0 0 0 0 rgba(245,197,24,0.5); }
          60%  { box-shadow: 0 0 0 7px rgba(245,197,24,0); }
          100% { box-shadow: 0 0 0 0 rgba(245,197,24,0); }
        }

        .about-title {
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 900; line-height: 1.08;
          color: white; margin-bottom: 28px;
          letter-spacing: -0.5px;
        }

        /* Diviseur doré */
        .about-divider {
          width: 64px; height: 4px;
          background: linear-gradient(90deg, #F5C518, rgba(245,197,24,0.3));
          border-radius: 4px;
          margin-bottom: 28px;
        }

        .about-description {
          color: rgba(255,255,255,.78);
          font-size: 17px; line-height: 1.85;
          max-width: 720px;
          margin-bottom: 36px;
        }

        /* Badges pays */
        .about-badges {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap;
        }

        .about-badge {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 15px; font-weight: 700;
          backdrop-filter: blur(10px);
          letter-spacing: 0.2px;
        }

        .about-badge-arrow {
          font-size: 20px; color: #F5C518; font-weight: 800;
        }

        @media (max-width: 768px) {
          .about-section { padding: 80px 0; }
          .about-quote-deco { font-size: 240px; right: -20px; }
          .about-description { font-size: 15px; }
        }

        @media (max-width: 520px) {
          .about-section { padding: 68px 0; }
          .about-title { font-size: 30px; }
          .about-description { font-size: 14px; }
          .about-badges { gap: 10px; }
          .about-badge { font-size: 13px; padding: 8px 14px; }
        }
      `})]});function Ld(){let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(!1);(0,y.useEffect)(()=>{let e=window.scrollY,n=()=>{let n=window.scrollY;t(n>20),r(n>e&&n>80),e=n};return window.addEventListener(`scroll`,n,{passive:!0}),()=>window.removeEventListener(`scroll`,n)},[]),(0,y.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`sr-in`),e.unobserve(t.target))})},{threshold:.1,rootMargin:`0px 0px -48px 0px`});return document.querySelectorAll(`.sr, .sr-l, .sr-r`).forEach(t=>e.observe(t)),()=>e.disconnect()},[]);let i=e=>{let t=document.getElementById(e);t&&(t.classList.remove(`scroll-target`),t.scrollIntoView({behavior:`smooth`}),requestAnimationFrame(()=>t.classList.add(`scroll-target`)),window.setTimeout(()=>t.classList.remove(`scroll-target`),6e4))};return(0,C.jsxs)(`div`,{className:`app`,children:[(0,C.jsx)(w,{scrolled:e,hidden:n,scrollTo:i}),(0,C.jsx)(bd,{scrollTo:i,variant:`boutique`}),(0,C.jsx)(Sd,{variant:`boutique`}),(0,C.jsx)(Od,{scrollTo:i,variant:`boutique`}),(0,C.jsx)(Ad,{variant:`boutique`}),(0,C.jsx)(Pd,{variant:`boutique`}),(0,C.jsx)(Fd,{scrollTo:i,variant:`boutique`}),(0,C.jsx)(Id,{variant:`boutique`}),(0,C.jsx)(qe,{scrollTo:i}),(0,C.jsx)(Je,{})]})}b.createRoot(document.getElementById(`root`)).render((0,C.jsx)(y.StrictMode,{children:(0,C.jsx)(Ld,{})}));