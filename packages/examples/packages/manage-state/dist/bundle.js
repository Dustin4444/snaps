(()=>{var e={12:e=>{e.exports=o,o.default=o,o.stable=d,o.stableStringify=d;var t="[...]",r="[Circular]",n=[],a=[];function i(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function o(e,t,r,o){var s;void 0===o&&(o=i()),c(e,"",0,[],void 0,0,o);try{s=0===a.length?JSON.stringify(e,t,r):JSON.stringify(e,p(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return s}function s(e,t,r,i){var o=Object.getOwnPropertyDescriptor(i,r);void 0!==o.get?o.configurable?(Object.defineProperty(i,r,{value:e}),n.push([i,r,t,o])):a.push([t,r,e]):(i[r]=e,n.push([i,r,t]))}function c(e,n,a,i,o,u,d){var l;if(u+=1,"object"==typeof e&&null!==e){for(l=0;l<i.length;l++)if(i[l]===e)return void s(r,e,n,o);if(void 0!==d.depthLimit&&u>d.depthLimit)return void s(t,e,n,o);if(void 0!==d.edgesLimit&&a+1>d.edgesLimit)return void s(t,e,n,o);if(i.push(e),Array.isArray(e))for(l=0;l<e.length;l++)c(e[l],l,l,i,e,u,d);else{var p=Object.keys(e);for(l=0;l<p.length;l++){var f=p[l];c(e[f],f,l,i,e,u,d)}}i.pop()}}function u(e,t){return e<t?-1:e>t?1:0}function d(e,t,r,o){void 0===o&&(o=i());var s,c=l(e,"",0,[],void 0,0,o)||e;try{s=0===a.length?JSON.stringify(c,t,r):JSON.stringify(c,p(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return s}function l(e,a,i,o,c,d,p){var f;if(d+=1,"object"==typeof e&&null!==e){for(f=0;f<o.length;f++)if(o[f]===e)return void s(r,e,a,c);try{if("function"==typeof e.toJSON)return}catch(e){return}if(void 0!==p.depthLimit&&d>p.depthLimit)return void s(t,e,a,c);if(void 0!==p.edgesLimit&&i+1>p.edgesLimit)return void s(t,e,a,c);if(o.push(e),Array.isArray(e))for(f=0;f<e.length;f++)l(e[f],f,f,o,e,d,p);else{var m={},h=Object.keys(e).sort(u);for(f=0;f<h.length;f++){var y=h[f];l(e[y],y,f,o,e,d,p),m[y]=e[y]}if(void 0===c)return m;n.push([c,a,e]),c[a]=m}o.pop()}}function p(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(a.length>0)for(var n=0;n<a.length;n++){var i=a[n];if(i[1]===t&&i[0]===r){r=i[2],a.splice(n,1);break}}return e.call(this,t,r)}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";function e(e){return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)}r.r(n),r.d(n,{onRpcRequest:()=>Ir});const t=(e,t)=>Object.hasOwnProperty.call(e,t);var a;!function(e){e[e.Null=4]="Null",e[e.Comma=1]="Comma",e[e.Wrapper=1]="Wrapper",e[e.True=4]="True",e[e.False=5]="False",e[e.Quote=1]="Quote",e[e.Colon=1]="Colon",e[e.Date=24]="Date"}(a=a||(a={}));function i(e){if("object"!=typeof e||null===e)return!1;try{let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}catch(e){return!1}}class o extends TypeError{constructor(e,t){let r;const{message:n,explanation:a,...i}=e,{path:o}=e,s=0===o.length?n:`At path: ${o.join(".")} -- ${n}`;super(a??s),null!=a&&(this.cause=s),Object.assign(this,i),this.name=this.constructor.name,this.failures=()=>r??(r=[e,...t()])}}function s(e){return"object"==typeof e&&null!==e}function c(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function u(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:i}=t,{type:o}=r,{refinement:s,message:u=`Expected a value of type \`${o}\`${s?` with refinement \`${s}\``:""}, but received: \`${c(n)}\``}=e;return{value:n,type:o,refinement:s,key:a[a.length-1],path:a,branch:i,...e,message:u}}function*d(e,t,r,n){(function(e){return s(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=u(a,t,r,n);e&&(yield e)}}function*l(e,t,r={}){const{path:n=[],branch:a=[e],coerce:i=!1,mask:o=!1}=r,c={path:n,branch:a};if(i&&(e=t.coercer(e,c),o&&"type"!==t.type&&s(t.schema)&&s(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let u="valid";for(const n of t.validator(e,c))n.explanation=r.message,u="not_valid",yield[n,void 0];for(let[d,p,f]of t.entries(e,c)){const t=l(p,f,{path:void 0===d?n:[...n,d],branch:void 0===d?a:[...a,p],coerce:i,mask:o,message:r.message});for(const r of t)r[0]?(u=null===r[0].refinement||void 0===r[0].refinement?"not_valid":"not_refined",yield[r[0],void 0]):i&&(p=r[1],void 0===d?e=p:e instanceof Map?e.set(d,p):e instanceof Set?e.add(p):s(e)&&(void 0!==p||d in e)&&(e[d]=p))}if("not_valid"!==u)for(const n of t.refiner(e,c))n.explanation=r.message,u="not_refined",yield[n,void 0];"valid"===u&&(yield[void 0,e])}class p{constructor(e){const{type:t,schema:r,validator:n,refiner:a,coercer:i=(e=>e),entries:o=function*(){}}=e;this.type=t,this.schema=r,this.entries=o,this.coercer=i,this.validator=n?(e,t)=>d(n(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>d(a(e,t),t,this,e):()=>[]}assert(e,t){return f(e,this,t)}create(e,t){return m(e,this,t)}is(e){return h(e,this)}mask(e,t){return function(e,t,r){const n=y(e,t,{coerce:!0,mask:!0,message:r});if(n[0])throw n[0];return n[1]}(e,this,t)}validate(e,t={}){return y(e,this,t)}}function f(e,t,r){const n=y(e,t,{message:r});if(n[0])throw n[0]}function m(e,t,r){const n=y(e,t,{coerce:!0,message:r});if(n[0])throw n[0];return n[1]}function h(e,t){return!y(e,t)[0]}function y(e,t,r={}){const n=l(e,t,r),a=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(n);if(a[0]){return[new o(a[0],(function*(){for(const e of n)e[0]&&(yield e[0])})),void 0]}return[void 0,a[1]]}function v(...e){const t="type"===e[0]?.type,r=e.map((({schema:e})=>e)),n=Object.assign({},...r);return t?function(e){const t=Object.keys(e);return new p({type:"type",schema:e,*entries(r){if(s(r))for(const n of t)yield[n,r[n],e[n]]},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>s(e)?{...e}:e})}(n):N(n)}function g(e,t){return new p({type:e,schema:null,validator:t})}function b(e){let t;return new p({type:"lazy",schema:null,*entries(r,n){t??(t=e()),yield*t.entries(r,n)},validator:(r,n)=>(t??(t=e()),t.validator(r,n)),coercer:(r,n)=>(t??(t=e()),t.coercer(r,n)),refiner:(r,n)=>(t??(t=e()),t.refiner(r,n))})}function w(e){return new p({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[r,n]of t.entries())yield[r,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${c(e)}`})}function S(){return g("boolean",(e=>"boolean"==typeof e))}function E(e){const t=c(e),r=typeof e;return new p({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||`Expected the literal \`${t}\`, but received: ${c(r)}`})}function x(){return g("never",(()=>!1))}function O(e){return new p({...e,validator:(t,r)=>null===t||e.validator(t,r),refiner:(t,r)=>null===t||e.refiner(t,r)})}function j(){return g("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${c(e)}`))}function N(e){const t=e?Object.keys(e):[],r=x();return new p({type:"object",schema:e??null,*entries(n){if(e&&s(n)){const a=new Set(Object.keys(n));for(const r of t)a.delete(r),yield[r,n[r],e[r]];for(const e of a)yield[e,n[e],r]}},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>s(e)?{...e}:e})}function A(e){return new p({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function I(e,t){return new p({type:"record",schema:null,*entries(r){if(s(r))for(const n in r){const a=r[n];yield[n,n,e],yield[n,a,t]}},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`})}function P(){return g("string",(e=>"string"==typeof e||`Expected a string, but received: ${c(e)}`))}function k(e){const t=x();return new p({type:"tuple",schema:null,*entries(r){if(Array.isArray(r)){const n=Math.max(e.length,r.length);for(let a=0;a<n;a++)yield[a,r[a],e[a]||t]}},validator:e=>Array.isArray(e)||`Expected an array, but received: ${c(e)}`})}function $(e){const t=e.map((e=>e.type)).join(" | ");return new p({type:"union",schema:null,coercer(t){for(const r of e){const[e,n]=r.validate(t,{coerce:!0});if(!e)return n}return t},validator(r,n){const a=[];for(const t of e){const[...e]=l(r,t,n),[i]=e;if(!i?.[0])return[];for(const[t]of e)t&&a.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${c(r)}`,...a]}})}function C(){return g("unknown",(()=>!0))}function R(e,t,r){return new p({...e,coercer:(n,a)=>h(n,t)?e.coercer(r(n,a),a):e.coercer(n,a)})}function T(e){return function(e){return function(e){return"object"==typeof e&&null!==e&&"message"in e}(e)&&"string"==typeof e.message?e.message:null==e?"":String(e)}(e).replace(/\.$/u,"")}function _(e,t){return r=e,Boolean("string"==typeof r?.prototype?.constructor?.name)?new e({message:t}):e({message:t});var r}class J extends Error{constructor(e){super(e.message),this.code="ERR_ASSERTION"}}function F(e,t,r="Assertion failed",n=J){try{f(e,t)}catch(e){throw _(n,`${r}: ${T(e)}.`)}}const M=e=>N(e);function q({path:e,branch:r}){const n=e[e.length-1];return t(r[r.length-2],n)}function z(e){return new p({...e,type:`optional ${e.type}`,validator:(t,r)=>!q(r)||e.validator(t,r),refiner:(t,r)=>!q(r)||e.refiner(t,r)})}const B=$([E(null),S(),g("finite number",(e=>h(e,j())&&Number.isFinite(e))),P(),w(b((()=>B))),I(P(),b((()=>B)))]),L=R(B,g("any",(()=>!0)),(e=>(F(e,B),JSON.parse(JSON.stringify(e,((e,t)=>{if("__proto__"!==e&&"constructor"!==e)return t}))))));function U(e){try{return function(e){m(e,L)}(e),!0}catch{return!1}}const D=E("2.0"),W=O($([j(),P()])),G=M({code:g("integer",(e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${c(e)}`)),message:P(),data:z(L),stack:z(P())}),V=$([I(P(),L),w(L)]);M({id:W,jsonrpc:D,method:P(),params:z(V)}),M({jsonrpc:D,method:P(),params:z(V)});N({id:W,jsonrpc:D,result:A(C()),error:A(G)});const H=M({id:W,jsonrpc:D,result:L}),Q=M({id:W,jsonrpc:D,error:G});$([H,Q]);function X(e,t){return K(e,"pattern",(r=>t.test(r)||`Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))}function K(e,t,r){return new p({...e,*refiner(n,a){yield*e.refiner(n,a);const i=d(r(n,a),a,e,n);for(const e of i)yield{...e,refinement:t}}})}var Y={invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},Z={userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901},ee={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}},te=Y.internal,re="Unspecified error message. This is a bug, please report it.",ne=(ae(te),"Unspecified server error.");function ae(e,r=re){if(function(e){return Number.isInteger(e)}(e)){const r=e.toString();if(t(ee,r))return ee[r].message;if(function(e){return e>=-32099&&e<=-32e3}(e))return ne}return r}function ie(t){return Array.isArray(t)?t.map((t=>U(t)?t:e(t)?oe(t):null)):e(t)?oe(t):U(t)?t:null}function oe(e){return Object.getOwnPropertyNames(e).reduce(((t,r)=>{const n=e[r];return U(n)&&(t[r]=n),t}),{})}var se=r(12),ce=class extends Error{constructor(r,n,a){var i=(...e)=>{super(...e)};if(!Number.isInteger(r))throw new Error('"code" must be an integer.');if(!n||"string"!=typeof n)throw new Error('"message" must be a non-empty string.');!function(r){return e(r)&&t(r,"cause")&&e(r.cause)}(a)?i(n):(i(n,{cause:a.cause}),t(this,"cause")||Object.assign(this,{cause:a.cause})),void 0!==a&&(this.data=a),this.code=r}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data,i(this.data)&&(e.data.cause=ie(this.data.cause))),this.stack&&(e.stack=this.stack),e}toString(){return se(this.serialize(),de,2)}},ue=class extends ce{constructor(e,t,r){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,t,r)}};function de(e,t){if("[Circular]"!==t)return t}var le=e=>Ae(Y.parse,e),pe=e=>Ae(Y.invalidRequest,e),fe=e=>Ae(Y.invalidParams,e),me=e=>Ae(Y.methodNotFound,e),he=e=>Ae(Y.internal,e),ye=e=>Ae(Y.invalidInput,e),ve=e=>Ae(Y.resourceNotFound,e),ge=e=>Ae(Y.resourceUnavailable,e),be=e=>Ae(Y.transactionRejected,e),we=e=>Ae(Y.methodNotSupported,e),Se=e=>Ae(Y.limitExceeded,e),Ee=e=>Ie(Z.userRejectedRequest,e),xe=e=>Ie(Z.unauthorized,e),Oe=e=>Ie(Z.unsupportedMethod,e),je=e=>Ie(Z.disconnected,e),Ne=e=>Ie(Z.chainDisconnected,e);function Ae(e,t){const[r,n]=Pe(t);return new ce(e,r??ae(e),n)}function Ie(e,t){const[r,n]=Pe(t);return new ue(e,r??ae(e),n)}function Pe(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:t,data:r}=e;if(t&&"string"!=typeof t)throw new Error("Must specify string message.");return[t??void 0,r]}}return[]}X(P(),/^(?:0x)?[0-9a-f]+$/iu),X(P(),/^0x[0-9a-f]+$/iu),X(P(),/^0x[0-9a-f]{40}$/u);const ke=X(P(),/^0x[0-9a-fA-F]{40}$/u);var $e,Ce,Re,Te,_e=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},Je=(e,t,r)=>(_e(e,t,"read from private field"),r?r.call(e):t.get(e)),Fe=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Me=(e,t,r,n)=>(_e(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),qe=class extends Error{constructor(r,n={}){const a=function(r){if(e(r)&&t(r,"message")&&"string"==typeof r.message)return r.message;return String(r)}(r);super(a),Fe(this,$e,void 0),Fe(this,Ce,void 0),Fe(this,Re,void 0),Fe(this,Te,void 0),Me(this,Ce,a),Me(this,$e,function(r){if(e(r)&&t(r,"code")&&"number"==typeof r.code&&Number.isInteger(r.code))return r.code;return-32603}(r));const i={...Ue(r),...n};Object.keys(i).length>0&&Me(this,Re,i),Me(this,Te,super.stack)}get name(){return"SnapError"}get code(){return Je(this,$e)}get message(){return Je(this,Ce)}get data(){return Je(this,Re)}get stack(){return Je(this,Te)}toJSON(){return{code:Be,message:Le,data:{cause:{code:this.code,message:this.message,stack:this.stack,...this.data?{data:this.data}:{}}}}}serialize(){return this.toJSON()}};function ze(e){return class extends qe{constructor(t,r){if("object"==typeof t){const r=e();return void super({code:r.code,message:r.message,data:t})}const n=e(t);super({code:n.code,message:n.message,data:r})}}}$e=new WeakMap,Ce=new WeakMap,Re=new WeakMap,Te=new WeakMap;var Be=-31002,Le="Snap Error";function Ue(r){return e(r)&&t(r,"data")&&"object"==typeof r.data&&null!==r.data&&U(r.data)&&!Array.isArray(r.data)?r.data:{}}function De(e){return g(JSON.stringify(e),E(e).validator)}function We(e){return De(e)}function Ge(e){return new p({type:"union",schema:null,*entries(r,n){if(!i(r)||!t(r,"type"))return;const{type:a}=r,o=e.find((({schema:e})=>h(a,e.type)));if(o)for(const e of o.entries(r,n))yield e},validator(r,n){const a=e.map((({schema:e})=>e.type.type));if(!i(r)||!t(r,"type")||"string"!=typeof r.type)return`Expected type to be one of: ${a.join(", ")}, but received: undefined`;const{type:o}=r,s=e.find((({schema:e})=>h(o,e.type)));return s?s.validator(r,n):`Expected type to be one of: ${a.join(", ")}, but received: "${o}"`}})}function Ve(e){return function([e,...t]){const r=$([e,...t]);return new p({...r,schema:[e,...t]})}(e)}function He(){return K(P(),"SVG",(e=>!!e.includes("<svg")||"Value is not a valid SVG."))}ze(he),ze(ye),ze(fe),ze(pe),ze(Se);var Qe=ze(me);ze(we),ze(le),ze(ve),ze(ge),ze(be),ze(Ne),ze(je),ze(xe),ze(Oe),ze(Ee);function Xe(e,t,r=[]){return(...n)=>{if(1===n.length&&i(n[0])){const r={...n[0],type:e};return F(r,t,`Invalid ${e} component`),r}const a=r.reduce(((e,t,r)=>void 0!==n[r]?{...e,[t]:n[r]}:e),{type:e});return F(a,t,`Invalid ${e} component`),a}}var Ke,Ye,Ze,et,tt,rt=((Ke=rt||{}).Copyable="copyable",Ke.Divider="divider",Ke.Heading="heading",Ke.Panel="panel",Ke.Spinner="spinner",Ke.Text="text",Ke.Image="image",Ke.Row="row",Ke.Address="address",Ke.Button="button",Ke.Input="input",Ke.Form="form",Ke),nt=N({type:P()}),at=v(nt,N({value:C()})),it=v(at,N({type:E("address"),value:ke})),ot=(Xe("address",it,["value"]),v(at,N({type:E("copyable"),value:P(),sensitive:A(S())}))),st=(Xe("copyable",ot,["value","sensitive"]),v(nt,N({type:E("divider")}))),ct=(Xe("divider",st),v(at,N({type:E("heading"),value:P()}))),ut=(Xe("heading",ct,["value"]),v(nt,N({type:E("image"),value:He()}))),dt=(Xe("image",ut,["value"]),(Ye=dt||{}).Primary="primary",Ye.Secondary="secondary",Ye),lt=((Ze=lt||{}).Button="button",Ze.Submit="submit",Ze),pt=v(at,N({type:E("button"),value:P(),variant:A($([We("primary"),We("secondary")])),buttonType:A($([We("button"),We("submit")])),name:A(P())})),ft=(Xe("button",pt,["value","buttonType","name","variant"]),(et=ft||{}).Text="text",et.Number="number",et.Password="password",et),mt=v(at,N({type:E("input"),value:A(P()),name:P(),inputType:A($([We("text"),We("password"),We("number")])),placeholder:A(P()),label:A(P()),error:A(P())})),ht=(Xe("input",mt,["name","inputType","placeholder","value","label"]),$([mt,pt])),yt=v(nt,N({type:E("form"),children:w(ht),name:P()})),vt=(Xe("form",yt,["name","children"]),v(at,N({type:E("text"),value:P(),markdown:A(S())}))),gt=(Xe("text",vt,["value","markdown"]),(tt=gt||{}).Default="default",tt.Critical="critical",tt.Warning="warning",tt),bt=$([ut,vt,it]),wt=v(at,N({type:E("row"),variant:A($([We("default"),We("critical"),We("warning")])),label:P(),value:bt})),St=(Xe("row",wt,["label","value","variant"]),v(nt,N({type:E("spinner")}))),Et=(Xe("spinner",St),v(nt,N({children:w(b((()=>Ot)))}))),xt=v(Et,N({type:E("panel")})),Ot=(Xe("panel",xt,["children"]),Ge([ot,st,ct,ut,xt,St,vt,wt,it,mt,yt,pt]));var jt,Nt,At,It,Pt,kt,$t=((jt=$t||{}).Critical="critical",jt),Ct=((Nt=Ct||{}).ButtonClickEvent="ButtonClickEvent",Nt.FormSubmitEvent="FormSubmitEvent",Nt.InputChangeEvent="InputChangeEvent",Nt.FileUploadEvent="FileUploadEvent",Nt),Rt=N({type:P(),name:A(P())}),Tt=v(Rt,N({type:E("ButtonClickEvent"),name:A(P())})),_t=N({name:P(),size:j(),contentType:P(),contents:P()}),Jt=v(Rt,N({type:E("FormSubmitEvent"),value:I(P(),O($([P(),_t,S()]))),name:P()})),Ft=v(Rt,N({type:E("InputChangeEvent"),name:P(),value:$([P(),S()])})),Mt=($([Tt,Jt,Ft,v(Rt,N({type:E("FileUploadEvent"),name:P(),file:O(_t)}))]),(At=Mt||{}).Alert="alert",At.Confirmation="confirmation",At.Prompt="prompt",At),qt=((It=qt||{}).Base64="base64",It.Hex="hex",It.Utf8="utf8",It),zt=((Pt=zt||{}).ClearState="clear",Pt.GetState="get",Pt.UpdateState="update",Pt),Bt=((kt=Bt||{}).InApp="inApp",kt.Native="native",kt),Lt=Ve([P(),j()]),Ut=Dt([P()]);N({type:P(),props:I(P(),L),key:O(Lt)});function Dt(e){return function(e){const t=Ve([e,w(b((()=>t)))]);return t}(O(Ve([...e,S()])))}function Wt(e,t={}){return N({type:De(e),props:N(t),key:O(Lt)})}var Gt=Wt("Button",{children:Ut,name:A(P()),type:A(Ve([De("button"),De("submit")])),variant:A(Ve([De("primary"),De("destructive")])),disabled:A(S())}),Vt=Wt("Checkbox",{name:P(),checked:A(S()),label:A(P()),variant:A(Ve([De("default"),De("toggle")]))}),Ht=Wt("Input",{name:P(),type:A(Ve([De("text"),De("password"),De("number")])),value:A(P()),placeholder:A(P())}),Qt=Wt("Option",{value:P(),children:P()}),Xt=Wt("Dropdown",{name:P(),value:A(P()),children:Dt([Qt])}),Kt=Wt("FileInput",{name:P(),accept:Ve([A(w(P()))]),compact:A(S())}),Yt=[Ht,Gt],Zt=[Ht,Xt,Kt,Vt],er=(Ve([...Zt,...Yt]),Ve([k(Yt),...Zt])),tr=Wt("Field",{label:A(P()),error:A(P()),children:er}),rr=Wt("Form",{children:Dt([tr,b((()=>xr))]),name:P()}),nr=Wt("Bold",{children:Dt([P(),b((()=>ar))])}),ar=Wt("Italic",{children:Dt([P(),b((()=>nr))])}),ir=Ve([nr,ar]),or=Wt("Address",{address:ke}),sr=Wt("Box",{children:Dt([b((()=>xr))]),direction:A(Ve([De("horizontal"),De("vertical")])),alignment:A(Ve([De("start"),De("center"),De("end"),De("space-between"),De("space-around")]))}),cr=Wt("Footer",{children:Ve([k([Gt,Gt]),Gt])}),ur=Wt("Container",{children:Ve([k([sr,cr]),sr])}),dr=Wt("Copyable",{value:P(),sensitive:A(S())}),lr=Wt("Divider"),pr=Wt("Value",{value:P(),extra:P()}),fr=Wt("Card",{image:A(P()),title:P(),description:A(P()),value:P(),extra:A(P())}),mr=Wt("Heading",{children:Ut}),hr=Wt("Image",{src:He(),alt:A(P())}),yr=Wt("Link",{href:P(),children:Dt([ir,P()])}),vr=Wt("Text",{children:Dt([P(),nr,ar,yr]),alignment:A(Ve([De("start"),De("center"),De("end")]))}),gr=Ve([vr,nr,ar,yr,hr,S()]),br=Ve([vr,nr,ar,yr,P()]),wr=Wt("Tooltip",{children:O(gr),content:br}),Sr=Wt("Row",{label:P(),children:Ve([or,hr,vr,pr]),variant:A(Ve([De("default"),De("warning"),De("critical")])),tooltip:A(P())}),Er=Wt("Spinner"),xr=Ge([or,nr,sr,Gt,dr,lr,Xt,Kt,rr,mr,Ht,hr,ar,yr,Sr,Er,vr,wr,Vt,fr]),Or=Ve([xr,ur]),jr=(Ge([Gt,Ht,Kt,tr,rr,nr,ar,or,sr,dr,lr,mr,hr,yr,Sr,Er,vr,Xt,Qt,pr,wr,Vt,cr,ur,fr]),$([_t,P(),S()])),Nr=I(P(),O(jr));I(P(),$([Nr,O(jr)])),$([Ot,Or]),I(P(),L);const Ar={items:[]};const Ir=async({request:e})=>{switch(e.method){case"setState":{const t=e.params;return t.items&&await async function(e,t){await snap.request({method:"snap_manageState",params:{operation:zt.UpdateState,newState:e,encrypted:t}})}({items:t.items},t.encrypted),!0}case"getState":{var t;const r=e.params;return await async function(e){return await snap.request({method:"snap_manageState",params:{operation:zt.GetState,encrypted:e}})??Ar}(null===(t=r)||void 0===t?void 0:t.encrypted)}case"clearState":{var r;const t=e.params;return await async function(e){await snap.request({method:"snap_manageState",params:{operation:zt.ClearState,encrypted:e}})}(null===(r=t)||void 0===r?void 0:r.encrypted),!0}default:throw new Qe({method:e.method})}}})();var a=exports;for(var i in n)a[i]=n[i];n.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();