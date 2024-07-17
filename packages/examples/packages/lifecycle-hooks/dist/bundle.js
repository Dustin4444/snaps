(()=>{var e={12:e=>{e.exports=o,o.default=o,o.stable=d,o.stableStringify=d;var t="[...]",r="[Circular]",n=[],a=[];function i(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function o(e,t,r,o){var s;void 0===o&&(o=i()),c(e,"",0,[],void 0,0,o);try{s=0===a.length?JSON.stringify(e,t,r):JSON.stringify(e,p(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return s}function s(e,t,r,i){var o=Object.getOwnPropertyDescriptor(i,r);void 0!==o.get?o.configurable?(Object.defineProperty(i,r,{value:e}),n.push([i,r,t,o])):a.push([t,r,e]):(i[r]=e,n.push([i,r,t]))}function c(e,n,a,i,o,u,d){var l;if(u+=1,"object"==typeof e&&null!==e){for(l=0;l<i.length;l++)if(i[l]===e)return void s(r,e,n,o);if(void 0!==d.depthLimit&&u>d.depthLimit)return void s(t,e,n,o);if(void 0!==d.edgesLimit&&a+1>d.edgesLimit)return void s(t,e,n,o);if(i.push(e),Array.isArray(e))for(l=0;l<e.length;l++)c(e[l],l,l,i,e,u,d);else{var p=Object.keys(e);for(l=0;l<p.length;l++){var f=p[l];c(e[f],f,l,i,e,u,d)}}i.pop()}}function u(e,t){return e<t?-1:e>t?1:0}function d(e,t,r,o){void 0===o&&(o=i());var s,c=l(e,"",0,[],void 0,0,o)||e;try{s=0===a.length?JSON.stringify(c,t,r):JSON.stringify(c,p(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return s}function l(e,a,i,o,c,d,p){var f;if(d+=1,"object"==typeof e&&null!==e){for(f=0;f<o.length;f++)if(o[f]===e)return void s(r,e,a,c);try{if("function"==typeof e.toJSON)return}catch(e){return}if(void 0!==p.depthLimit&&d>p.depthLimit)return void s(t,e,a,c);if(void 0!==p.edgesLimit&&i+1>p.edgesLimit)return void s(t,e,a,c);if(o.push(e),Array.isArray(e))for(f=0;f<e.length;f++)l(e[f],f,f,o,e,d,p);else{var h={},m=Object.keys(e).sort(u);for(f=0;f<m.length;f++){var y=m[f];l(e[y],y,f,o,e,d,p),h[y]=e[y]}if(void 0===c)return h;n.push([c,a,e]),c[a]=h}o.pop()}}function p(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(a.length>0)for(var n=0;n<a.length;n++){var i=a[n];if(i[1]===t&&i[0]===r){r=i[2],a.splice(n,1);break}}return e.call(this,t,r)}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";function e(e){return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)}r.r(n),r.d(n,{onInstall:()=>Pr,onUpdate:()=>kr});const t=(e,t)=>Object.hasOwnProperty.call(e,t);var a;!function(e){e[e.Null=4]="Null",e[e.Comma=1]="Comma",e[e.Wrapper=1]="Wrapper",e[e.True=4]="True",e[e.False=5]="False",e[e.Quote=1]="Quote",e[e.Colon=1]="Colon",e[e.Date=24]="Date"}(a=a||(a={}));function i(e){if("object"!=typeof e||null===e)return!1;try{let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}catch(e){return!1}}class o extends TypeError{constructor(e,t){let r;const{message:n,explanation:a,...i}=e,{path:o}=e,s=0===o.length?n:`At path: ${o.join(".")} -- ${n}`;super(a??s),null!=a&&(this.cause=s),Object.assign(this,i),this.name=this.constructor.name,this.failures=()=>r??(r=[e,...t()])}}function s(e){return"object"==typeof e&&null!==e}function c(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function u(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:i}=t,{type:o}=r,{refinement:s,message:u=`Expected a value of type \`${o}\`${s?` with refinement \`${s}\``:""}, but received: \`${c(n)}\``}=e;return{value:n,type:o,refinement:s,key:a[a.length-1],path:a,branch:i,...e,message:u}}function*d(e,t,r,n){(function(e){return s(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=u(a,t,r,n);e&&(yield e)}}function*l(e,t,r={}){const{path:n=[],branch:a=[e],coerce:i=!1,mask:o=!1}=r,c={path:n,branch:a};if(i&&(e=t.coercer(e,c),o&&"type"!==t.type&&s(t.schema)&&s(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let u="valid";for(const n of t.validator(e,c))n.explanation=r.message,u="not_valid",yield[n,void 0];for(let[d,p,f]of t.entries(e,c)){const t=l(p,f,{path:void 0===d?n:[...n,d],branch:void 0===d?a:[...a,p],coerce:i,mask:o,message:r.message});for(const r of t)r[0]?(u=null===r[0].refinement||void 0===r[0].refinement?"not_valid":"not_refined",yield[r[0],void 0]):i&&(p=r[1],void 0===d?e=p:e instanceof Map?e.set(d,p):e instanceof Set?e.add(p):s(e)&&(void 0!==p||d in e)&&(e[d]=p))}if("not_valid"!==u)for(const n of t.refiner(e,c))n.explanation=r.message,u="not_refined",yield[n,void 0];"valid"===u&&(yield[void 0,e])}class p{constructor(e){const{type:t,schema:r,validator:n,refiner:a,coercer:i=(e=>e),entries:o=function*(){}}=e;this.type=t,this.schema=r,this.entries=o,this.coercer=i,this.validator=n?(e,t)=>d(n(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>d(a(e,t),t,this,e):()=>[]}assert(e,t){return f(e,this,t)}create(e,t){return h(e,this,t)}is(e){return m(e,this)}mask(e,t){return function(e,t,r){const n=y(e,t,{coerce:!0,mask:!0,message:r});if(n[0])throw n[0];return n[1]}(e,this,t)}validate(e,t={}){return y(e,this,t)}}function f(e,t,r){const n=y(e,t,{message:r});if(n[0])throw n[0]}function h(e,t,r){const n=y(e,t,{coerce:!0,message:r});if(n[0])throw n[0];return n[1]}function m(e,t){return!y(e,t)[0]}function y(e,t,r={}){const n=l(e,t,r),a=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(n);if(a[0]){return[new o(a[0],(function*(){for(const e of n)e[0]&&(yield e[0])})),void 0]}return[void 0,a[1]]}function v(...e){const t="type"===e[0]?.type,r=e.map((({schema:e})=>e)),n=Object.assign({},...r);return t?function(e){const t=Object.keys(e);return new p({type:"type",schema:e,*entries(r){if(s(r))for(const n of t)yield[n,r[n],e[n]]},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>s(e)?{...e}:e})}(n):N(n)}function g(e,t){return new p({type:e,schema:null,validator:t})}function b(e){let t;return new p({type:"lazy",schema:null,*entries(r,n){t??(t=e()),yield*t.entries(r,n)},validator:(r,n)=>(t??(t=e()),t.validator(r,n)),coercer:(r,n)=>(t??(t=e()),t.coercer(r,n)),refiner:(r,n)=>(t??(t=e()),t.refiner(r,n))})}function w(e){return new p({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[r,n]of t.entries())yield[r,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${c(e)}`})}function E(){return g("boolean",(e=>"boolean"==typeof e))}function x(e){const t=c(e),r=typeof e;return new p({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||`Expected the literal \`${t}\`, but received: ${c(r)}`})}function S(){return g("never",(()=>!1))}function O(e){return new p({...e,validator:(t,r)=>null===t||e.validator(t,r),refiner:(t,r)=>null===t||e.refiner(t,r)})}function j(){return g("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${c(e)}`))}function N(e){const t=e?Object.keys(e):[],r=S();return new p({type:"object",schema:e??null,*entries(n){if(e&&s(n)){const a=new Set(Object.keys(n));for(const r of t)a.delete(r),yield[r,n[r],e[r]];for(const e of a)yield[e,n[e],r]}},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>s(e)?{...e}:e})}function I(e){return new p({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function A(e,t){return new p({type:"record",schema:null,*entries(r){if(s(r))for(const n in r){const a=r[n];yield[n,n,e],yield[n,a,t]}},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`})}function P(){return g("string",(e=>"string"==typeof e||`Expected a string, but received: ${c(e)}`))}function k(e){const t=S();return new p({type:"tuple",schema:null,*entries(r){if(Array.isArray(r)){const n=Math.max(e.length,r.length);for(let a=0;a<n;a++)yield[a,r[a],e[a]||t]}},validator:e=>Array.isArray(e)||`Expected an array, but received: ${c(e)}`})}function $(e){const t=e.map((e=>e.type)).join(" | ");return new p({type:"union",schema:null,coercer(t){for(const r of e){const[e,n]=r.validate(t,{coerce:!0});if(!e)return n}return t},validator(r,n){const a=[];for(const t of e){const[...e]=l(r,t,n),[i]=e;if(!i?.[0])return[];for(const[t]of e)t&&a.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${c(r)}`,...a]}})}function C(){return g("unknown",(()=>!0))}function T(e,t,r){return new p({...e,coercer:(n,a)=>m(n,t)?e.coercer(r(n,a),a):e.coercer(n,a)})}function R(e){return function(e){return function(e){return"object"==typeof e&&null!==e&&"message"in e}(e)&&"string"==typeof e.message?e.message:null==e?"":String(e)}(e).replace(/\.$/u,"")}function J(e,t){return r=e,Boolean("string"==typeof r?.prototype?.constructor?.name)?new e({message:t}):e({message:t});var r}class _ extends Error{constructor(e){super(e.message),this.code="ERR_ASSERTION"}}function F(e,t,r="Assertion failed",n=_){try{f(e,t)}catch(e){throw J(n,`${r}: ${R(e)}.`)}}const M=e=>N(e);function z({path:e,branch:r}){const n=e[e.length-1];return t(r[r.length-2],n)}function U(e){return new p({...e,type:`optional ${e.type}`,validator:(t,r)=>!z(r)||e.validator(t,r),refiner:(t,r)=>!z(r)||e.refiner(t,r)})}const q=$([x(null),E(),g("finite number",(e=>m(e,j())&&Number.isFinite(e))),P(),w(b((()=>q))),A(P(),b((()=>q)))]),B=T(q,g("any",(()=>!0)),(e=>(F(e,q),JSON.parse(JSON.stringify(e,((e,t)=>{if("__proto__"!==e&&"constructor"!==e)return t}))))));function L(e){try{return function(e){h(e,B)}(e),!0}catch{return!1}}const D=x("2.0"),W=O($([j(),P()])),G=M({code:g("integer",(e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${c(e)}`)),message:P(),data:U(B),stack:U(P())}),V=$([A(P(),B),w(B)]);M({id:W,jsonrpc:D,method:P(),params:U(V)}),M({jsonrpc:D,method:P(),params:U(V)});N({id:W,jsonrpc:D,result:I(C()),error:I(G)});const H=M({id:W,jsonrpc:D,result:B}),Q=M({id:W,jsonrpc:D,error:G});$([H,Q]);function X(e,t){return K(e,"pattern",(r=>t.test(r)||`Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))}function K(e,t,r){return new p({...e,*refiner(n,a){yield*e.refiner(n,a);const i=d(r(n,a),a,e,n);for(const e of i)yield{...e,refinement:t}}})}var Y={invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},Z={userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901},ee={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}},te=Y.internal,re="Unspecified error message. This is a bug, please report it.",ne=(ae(te),"Unspecified server error.");function ae(e,r=re){if(function(e){return Number.isInteger(e)}(e)){const r=e.toString();if(t(ee,r))return ee[r].message;if(function(e){return e>=-32099&&e<=-32e3}(e))return ne}return r}function ie(t){return Array.isArray(t)?t.map((t=>L(t)?t:e(t)?oe(t):null)):e(t)?oe(t):L(t)?t:null}function oe(e){return Object.getOwnPropertyNames(e).reduce(((t,r)=>{const n=e[r];return L(n)&&(t[r]=n),t}),{})}var se=r(12),ce=class extends Error{constructor(r,n,a){var i=(...e)=>{super(...e)};if(!Number.isInteger(r))throw new Error('"code" must be an integer.');if(!n||"string"!=typeof n)throw new Error('"message" must be a non-empty string.');!function(r){return e(r)&&t(r,"cause")&&e(r.cause)}(a)?i(n):(i(n,{cause:a.cause}),t(this,"cause")||Object.assign(this,{cause:a.cause})),void 0!==a&&(this.data=a),this.code=r}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data,i(this.data)&&(e.data.cause=ie(this.data.cause))),this.stack&&(e.stack=this.stack),e}toString(){return se(this.serialize(),de,2)}},ue=class extends ce{constructor(e,t,r){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,t,r)}};function de(e,t){if("[Circular]"!==t)return t}var le=e=>Ie(Y.parse,e),pe=e=>Ie(Y.invalidRequest,e),fe=e=>Ie(Y.invalidParams,e),he=e=>Ie(Y.methodNotFound,e),me=e=>Ie(Y.internal,e),ye=e=>Ie(Y.invalidInput,e),ve=e=>Ie(Y.resourceNotFound,e),ge=e=>Ie(Y.resourceUnavailable,e),be=e=>Ie(Y.transactionRejected,e),we=e=>Ie(Y.methodNotSupported,e),Ee=e=>Ie(Y.limitExceeded,e),xe=e=>Ae(Z.userRejectedRequest,e),Se=e=>Ae(Z.unauthorized,e),Oe=e=>Ae(Z.unsupportedMethod,e),je=e=>Ae(Z.disconnected,e),Ne=e=>Ae(Z.chainDisconnected,e);function Ie(e,t){const[r,n]=Pe(t);return new ce(e,r??ae(e),n)}function Ae(e,t){const[r,n]=Pe(t);return new ue(e,r??ae(e),n)}function Pe(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:t,data:r}=e;if(t&&"string"!=typeof t)throw new Error("Must specify string message.");return[t??void 0,r]}}return[]}X(P(),/^(?:0x)?[0-9a-f]+$/iu),X(P(),/^0x[0-9a-f]+$/iu),X(P(),/^0x[0-9a-f]{40}$/u);const ke=X(P(),/^0x[0-9a-fA-F]{40}$/u);var $e,Ce,Te,Re,Je=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},_e=(e,t,r)=>(Je(e,t,"read from private field"),r?r.call(e):t.get(e)),Fe=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Me=(e,t,r,n)=>(Je(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),ze=class extends Error{constructor(r,n={}){const a=function(r){if(e(r)&&t(r,"message")&&"string"==typeof r.message)return r.message;return String(r)}(r);super(a),Fe(this,$e,void 0),Fe(this,Ce,void 0),Fe(this,Te,void 0),Fe(this,Re,void 0),Me(this,Ce,a),Me(this,$e,function(r){if(e(r)&&t(r,"code")&&"number"==typeof r.code&&Number.isInteger(r.code))return r.code;return-32603}(r));const i={...Le(r),...n};Object.keys(i).length>0&&Me(this,Te,i),Me(this,Re,super.stack)}get name(){return"SnapError"}get code(){return _e(this,$e)}get message(){return _e(this,Ce)}get data(){return _e(this,Te)}get stack(){return _e(this,Re)}toJSON(){return{code:qe,message:Be,data:{cause:{code:this.code,message:this.message,stack:this.stack,...this.data?{data:this.data}:{}}}}}serialize(){return this.toJSON()}};function Ue(e){return class extends ze{constructor(t,r){if("object"==typeof t){const r=e();return void super({code:r.code,message:r.message,data:t})}const n=e(t);super({code:n.code,message:n.message,data:r})}}}$e=new WeakMap,Ce=new WeakMap,Te=new WeakMap,Re=new WeakMap;var qe=-31002,Be="Snap Error";function Le(r){return e(r)&&t(r,"data")&&"object"==typeof r.data&&null!==r.data&&L(r.data)&&!Array.isArray(r.data)?r.data:{}}function De(e){return g(JSON.stringify(e),x(e).validator)}function We(e){return De(e)}function Ge(e){return new p({type:"union",schema:null,*entries(r,n){if(!i(r)||!t(r,"type"))return;const{type:a}=r,o=e.find((({schema:e})=>m(a,e.type)));if(o)for(const e of o.entries(r,n))yield e},validator(r,n){const a=e.map((({schema:e})=>e.type.type));if(!i(r)||!t(r,"type")||"string"!=typeof r.type)return`Expected type to be one of: ${a.join(", ")}, but received: undefined`;const{type:o}=r,s=e.find((({schema:e})=>m(o,e.type)));return s?s.validator(r,n):`Expected type to be one of: ${a.join(", ")}, but received: "${o}"`}})}function Ve(e){return function([e,...t]){const r=$([e,...t]);return new p({...r,schema:[e,...t]})}(e)}function He(){return K(P(),"SVG",(e=>!!e.includes("<svg")||"Value is not a valid SVG."))}Ue(me),Ue(ye),Ue(fe),Ue(pe),Ue(Ee),Ue(he),Ue(we),Ue(le),Ue(ve),Ue(ge),Ue(be),Ue(Ne),Ue(je),Ue(Se),Ue(Oe),Ue(xe);function Qe(e,t,r=[]){return(...n)=>{if(1===n.length&&i(n[0])){const r={...n[0],type:e};return F(r,t,`Invalid ${e} component`),r}const a=r.reduce(((e,t,r)=>void 0!==n[r]?{...e,[t]:n[r]}:e),{type:e});return F(a,t,`Invalid ${e} component`),a}}var Xe,Ke,Ye,Ze,et,tt=((Xe=tt||{}).Copyable="copyable",Xe.Divider="divider",Xe.Heading="heading",Xe.Panel="panel",Xe.Spinner="spinner",Xe.Text="text",Xe.Image="image",Xe.Row="row",Xe.Address="address",Xe.Button="button",Xe.Input="input",Xe.Form="form",Xe),rt=N({type:P()}),nt=v(rt,N({value:C()})),at=v(nt,N({type:x("address"),value:ke})),it=(Qe("address",at,["value"]),v(nt,N({type:x("copyable"),value:P(),sensitive:I(E())}))),ot=(Qe("copyable",it,["value","sensitive"]),v(rt,N({type:x("divider")}))),st=(Qe("divider",ot),v(nt,N({type:x("heading"),value:P()}))),ct=Qe("heading",st,["value"]),ut=v(rt,N({type:x("image"),value:He()})),dt=(Qe("image",ut,["value"]),(Ke=dt||{}).Primary="primary",Ke.Secondary="secondary",Ke),lt=((Ye=lt||{}).Button="button",Ye.Submit="submit",Ye),pt=v(nt,N({type:x("button"),value:P(),variant:I($([We("primary"),We("secondary")])),buttonType:I($([We("button"),We("submit")])),name:I(P())})),ft=(Qe("button",pt,["value","buttonType","name","variant"]),(Ze=ft||{}).Text="text",Ze.Number="number",Ze.Password="password",Ze),ht=v(nt,N({type:x("input"),value:I(P()),name:P(),inputType:I($([We("text"),We("password"),We("number")])),placeholder:I(P()),label:I(P()),error:I(P())})),mt=(Qe("input",ht,["name","inputType","placeholder","value","label"]),$([ht,pt])),yt=v(rt,N({type:x("form"),children:w(mt),name:P()})),vt=(Qe("form",yt,["name","children"]),v(nt,N({type:x("text"),value:P(),markdown:I(E())}))),gt=Qe("text",vt,["value","markdown"]),bt=((et=bt||{}).Default="default",et.Critical="critical",et.Warning="warning",et),wt=$([ut,vt,at]),Et=v(nt,N({type:x("row"),variant:I($([We("default"),We("critical"),We("warning")])),label:P(),value:wt})),xt=(Qe("row",Et,["label","value","variant"]),v(rt,N({type:x("spinner")}))),St=(Qe("spinner",xt),v(rt,N({children:w(b((()=>Nt)))}))),Ot=v(St,N({type:x("panel")})),jt=Qe("panel",Ot,["children"]),Nt=Ge([it,ot,st,ut,Ot,xt,vt,Et,at,ht,yt,pt]);var It,At,Pt,kt,$t,Ct,Tt=((It=Tt||{}).Critical="critical",It),Rt=((At=Rt||{}).ButtonClickEvent="ButtonClickEvent",At.FormSubmitEvent="FormSubmitEvent",At.InputChangeEvent="InputChangeEvent",At.FileUploadEvent="FileUploadEvent",At),Jt=N({type:P(),name:I(P())}),_t=v(Jt,N({type:x("ButtonClickEvent"),name:I(P())})),Ft=N({name:P(),size:j(),contentType:P(),contents:P()}),Mt=v(Jt,N({type:x("FormSubmitEvent"),value:A(P(),O($([P(),Ft,E()]))),name:P()})),zt=v(Jt,N({type:x("InputChangeEvent"),name:P(),value:$([P(),E()])})),Ut=($([_t,Mt,zt,v(Jt,N({type:x("FileUploadEvent"),name:P(),file:O(Ft)}))]),(Pt=Ut||{}).Alert="alert",Pt.Confirmation="confirmation",Pt.Prompt="prompt",Pt),qt=((kt=qt||{}).Base64="base64",kt.Hex="hex",kt.Utf8="utf8",kt),Bt=(($t=Bt||{}).ClearState="clear",$t.GetState="get",$t.UpdateState="update",$t),Lt=((Ct=Lt||{}).InApp="inApp",Ct.Native="native",Ct),Dt=Ve([P(),j()]),Wt=Gt([P()]);N({type:P(),props:A(P(),B),key:O(Dt)});function Gt(e){return function(e){const t=Ve([e,w(b((()=>t)))]);return t}(O(Ve([...e,E()])))}function Vt(e,t={}){return N({type:De(e),props:N(t),key:O(Dt)})}var Ht=Vt("Button",{children:Wt,name:I(P()),type:I(Ve([De("button"),De("submit")])),variant:I(Ve([De("primary"),De("destructive")])),disabled:I(E())}),Qt=Vt("Checkbox",{name:P(),checked:I(E()),label:I(P()),variant:I(Ve([De("default"),De("toggle")]))}),Xt=Vt("Input",{name:P(),type:I(Ve([De("text"),De("password"),De("number")])),value:I(P()),placeholder:I(P())}),Kt=Vt("Option",{value:P(),children:P()}),Yt=Vt("Dropdown",{name:P(),value:I(P()),children:Gt([Kt])}),Zt=Vt("FileInput",{name:P(),accept:Ve([I(w(P()))]),compact:I(E())}),er=[Xt,Ht],tr=[Xt,Yt,Zt,Qt],rr=(Ve([...tr,...er]),Ve([k(er),...tr])),nr=Vt("Field",{label:I(P()),error:I(P()),children:rr}),ar=Vt("Form",{children:Gt([nr,b((()=>jr))]),name:P()}),ir=Vt("Bold",{children:Gt([P(),b((()=>or))])}),or=Vt("Italic",{children:Gt([P(),b((()=>ir))])}),sr=Ve([ir,or]),cr=Vt("Address",{address:ke}),ur=Vt("Box",{children:Gt([b((()=>jr))]),direction:I(Ve([De("horizontal"),De("vertical")])),alignment:I(Ve([De("start"),De("center"),De("end"),De("space-between"),De("space-around")]))}),dr=Vt("Footer",{children:Ve([k([Ht,Ht]),Ht])}),lr=Vt("Container",{children:Ve([k([ur,dr]),ur])}),pr=Vt("Copyable",{value:P(),sensitive:I(E())}),fr=Vt("Divider"),hr=Vt("Value",{value:P(),extra:P()}),mr=Vt("Card",{image:I(P()),title:P(),description:I(P()),value:P(),extra:I(P())}),yr=Vt("Heading",{children:Wt}),vr=Vt("Image",{src:He(),alt:I(P())}),gr=Vt("Link",{href:P(),children:Gt([sr,P()])}),br=Vt("Text",{children:Gt([P(),ir,or,gr]),alignment:I(Ve([De("start"),De("center"),De("end")]))}),wr=Ve([br,ir,or,gr,vr,E()]),Er=Ve([br,ir,or,gr,P()]),xr=Vt("Tooltip",{children:O(wr),content:Er}),Sr=Vt("Row",{label:P(),children:Ve([cr,vr,br,hr]),variant:I(Ve([De("default"),De("warning"),De("critical")])),tooltip:I(P())}),Or=Vt("Spinner"),jr=Ge([cr,ir,ur,Ht,pr,fr,Yt,Zt,ar,yr,Xt,vr,or,gr,Sr,Or,br,xr,Qt,mr]),Nr=Ve([jr,lr]),Ir=(Ge([Ht,Xt,Zt,nr,ar,ir,or,cr,ur,pr,fr,yr,vr,gr,Sr,Or,br,Yt,Kt,hr,xr,Qt,dr,lr,mr]),$([Ft,P(),E()])),Ar=A(P(),O(Ir));A(P(),$([Ar,O(Ir)])),$([Nt,Nr]),A(P(),B);const Pr=async()=>{await snap.request({method:"snap_dialog",params:{type:"alert",content:jt([ct("Installation successful"),gt('The snap was installed successfully, and the "onInstall" handler was called.')])}})},kr=async()=>{await snap.request({method:"snap_dialog",params:{type:"alert",content:jt([ct("Update successful"),gt('The snap was updated successfully, and the "onUpdate" handler was called.')])}})}})();var a=exports;for(var i in n)a[i]=n[i];n.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();