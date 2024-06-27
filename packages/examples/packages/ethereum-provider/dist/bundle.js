(()=>{var e={12:e=>{e.exports=o,o.default=o,o.stable=d,o.stableStringify=d;var t="[...]",r="[Circular]",n=[],i=[];function a(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function o(e,t,r,o){var s;void 0===o&&(o=a()),c(e,"",0,[],void 0,0,o);try{s=0===i.length?JSON.stringify(e,t,r):JSON.stringify(e,f(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return s}function s(e,t,r,a){var o=Object.getOwnPropertyDescriptor(a,r);void 0!==o.get?o.configurable?(Object.defineProperty(a,r,{value:e}),n.push([a,r,t,o])):i.push([t,r,e]):(a[r]=e,n.push([a,r,t]))}function c(e,n,i,a,o,u,d){var l;if(u+=1,"object"==typeof e&&null!==e){for(l=0;l<a.length;l++)if(a[l]===e)return void s(r,e,n,o);if(void 0!==d.depthLimit&&u>d.depthLimit)return void s(t,e,n,o);if(void 0!==d.edgesLimit&&i+1>d.edgesLimit)return void s(t,e,n,o);if(a.push(e),Array.isArray(e))for(l=0;l<e.length;l++)c(e[l],l,l,a,e,u,d);else{var f=Object.keys(e);for(l=0;l<f.length;l++){var p=f[l];c(e[p],p,l,a,e,u,d)}}a.pop()}}function u(e,t){return e<t?-1:e>t?1:0}function d(e,t,r,o){void 0===o&&(o=a());var s,c=l(e,"",0,[],void 0,0,o)||e;try{s=0===i.length?JSON.stringify(c,t,r):JSON.stringify(c,f(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return s}function l(e,i,a,o,c,d,f){var p;if(d+=1,"object"==typeof e&&null!==e){for(p=0;p<o.length;p++)if(o[p]===e)return void s(r,e,i,c);try{if("function"==typeof e.toJSON)return}catch(e){return}if(void 0!==f.depthLimit&&d>f.depthLimit)return void s(t,e,i,c);if(void 0!==f.edgesLimit&&a+1>f.edgesLimit)return void s(t,e,i,c);if(o.push(e),Array.isArray(e))for(p=0;p<e.length;p++)l(e[p],p,p,o,e,d,f);else{var h={},m=Object.keys(e).sort(u);for(p=0;p<m.length;p++){var v=m[p];l(e[v],v,p,o,e,d,f),h[v]=e[v]}if(void 0===c)return h;n.push([c,i,e]),c[i]=h}o.pop()}}function f(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(i.length>0)for(var n=0;n<i.length;n++){var a=i[n];if(a[1]===t&&a[0]===r){r=a[2],i.splice(n,1);break}}return e.call(this,t,r)}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";function e(e){return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)}r.r(n),r.d(n,{onRpcRequest:()=>Cr});const t=(e,t)=>Object.hasOwnProperty.call(e,t);var i;!function(e){e[e.Null=4]="Null",e[e.Comma=1]="Comma",e[e.Wrapper=1]="Wrapper",e[e.True=4]="True",e[e.False=5]="False",e[e.Quote=1]="Quote",e[e.Colon=1]="Colon",e[e.Date=24]="Date"}(i=i||(i={}));function a(e){if("object"!=typeof e||null===e)return!1;try{let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}catch(e){return!1}}class o extends TypeError{constructor(e,t){let r;const{message:n,explanation:i,...a}=e,{path:o}=e,s=0===o.length?n:`At path: ${o.join(".")} -- ${n}`;super(i??s),null!=i&&(this.cause=s),Object.assign(this,a),this.name=this.constructor.name,this.failures=()=>r??(r=[e,...t()])}}function s(e){return"object"==typeof e&&null!==e}function c(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function u(e,t,r,n){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:i,branch:a}=t,{type:o}=r,{refinement:s,message:u=`Expected a value of type \`${o}\`${s?` with refinement \`${s}\``:""}, but received: \`${c(n)}\``}=e;return{value:n,type:o,refinement:s,key:i[i.length-1],path:i,branch:a,...e,message:u}}function*d(e,t,r,n){(function(e){return s(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const i of e){const e=u(i,t,r,n);e&&(yield e)}}function*l(e,t,r={}){const{path:n=[],branch:i=[e],coerce:a=!1,mask:o=!1}=r,c={path:n,branch:i};if(a&&(e=t.coercer(e,c),o&&"type"!==t.type&&s(t.schema)&&s(e)&&!Array.isArray(e)))for(const r in e)void 0===t.schema[r]&&delete e[r];let u="valid";for(const n of t.validator(e,c))n.explanation=r.message,u="not_valid",yield[n,void 0];for(let[d,f,p]of t.entries(e,c)){const t=l(f,p,{path:void 0===d?n:[...n,d],branch:void 0===d?i:[...i,f],coerce:a,mask:o,message:r.message});for(const r of t)r[0]?(u=null===r[0].refinement||void 0===r[0].refinement?"not_valid":"not_refined",yield[r[0],void 0]):a&&(f=r[1],void 0===d?e=f:e instanceof Map?e.set(d,f):e instanceof Set?e.add(f):s(e)&&(void 0!==f||d in e)&&(e[d]=f))}if("not_valid"!==u)for(const n of t.refiner(e,c))n.explanation=r.message,u="not_refined",yield[n,void 0];"valid"===u&&(yield[void 0,e])}class f{constructor(e){const{type:t,schema:r,validator:n,refiner:i,coercer:a=(e=>e),entries:o=function*(){}}=e;this.type=t,this.schema=r,this.entries=o,this.coercer=a,this.validator=n?(e,t)=>d(n(e,t),t,this,e):()=>[],this.refiner=i?(e,t)=>d(i(e,t),t,this,e):()=>[]}assert(e,t){return p(e,this,t)}create(e,t){return h(e,this,t)}is(e){return m(e,this)}mask(e,t){return function(e,t,r){const n=v(e,t,{coerce:!0,mask:!0,message:r});if(n[0])throw n[0];return n[1]}(e,this,t)}validate(e,t={}){return v(e,this,t)}}function p(e,t,r){const n=v(e,t,{message:r});if(n[0])throw n[0]}function h(e,t,r){const n=v(e,t,{coerce:!0,message:r});if(n[0])throw n[0];return n[1]}function m(e,t){return!v(e,t)[0]}function v(e,t,r={}){const n=l(e,t,r),i=function(e){const{done:t,value:r}=e.next();return t?void 0:r}(n);if(i[0]){return[new o(i[0],(function*(){for(const e of n)e[0]&&(yield e[0])})),void 0]}return[void 0,i[1]]}function y(...e){const t="type"===e[0]?.type,r=e.map((({schema:e})=>e)),n=Object.assign({},...r);return t?function(e){const t=Object.keys(e);return new f({type:"type",schema:e,*entries(r){if(s(r))for(const n of t)yield[n,r[n],e[n]]},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>s(e)?{...e}:e})}(n):N(n)}function g(e,t){return new f({type:e,schema:null,validator:t})}function b(e){let t;return new f({type:"lazy",schema:null,*entries(r,n){t??(t=e()),yield*t.entries(r,n)},validator:(r,n)=>(t??(t=e()),t.validator(r,n)),coercer:(r,n)=>(t??(t=e()),t.coercer(r,n)),refiner:(r,n)=>(t??(t=e()),t.refiner(r,n))})}function w(e){return new f({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[r,n]of t.entries())yield[r,n,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${c(e)}`})}function E(){return g("boolean",(e=>"boolean"==typeof e))}function S(e){const t=c(e),r=typeof e;return new f({type:"literal",schema:"string"===r||"number"===r||"boolean"===r?e:null,validator:r=>r===e||`Expected the literal \`${t}\`, but received: ${c(r)}`})}function x(){return g("never",(()=>!1))}function O(e){return new f({...e,validator:(t,r)=>null===t||e.validator(t,r),refiner:(t,r)=>null===t||e.refiner(t,r)})}function j(){return g("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${c(e)}`))}function N(e){const t=e?Object.keys(e):[],r=x();return new f({type:"object",schema:e??null,*entries(n){if(e&&s(n)){const i=new Set(Object.keys(n));for(const r of t)i.delete(r),yield[r,n[r],e[r]];for(const e of i)yield[e,n[e],r]}},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`,coercer:e=>s(e)?{...e}:e})}function A(e){return new f({...e,validator:(t,r)=>void 0===t||e.validator(t,r),refiner:(t,r)=>void 0===t||e.refiner(t,r)})}function P(e,t){return new f({type:"record",schema:null,*entries(r){if(s(r))for(const n in r){const i=r[n];yield[n,n,e],yield[n,i,t]}},validator:e=>s(e)||`Expected an object, but received: ${c(e)}`})}function I(){return g("string",(e=>"string"==typeof e||`Expected a string, but received: ${c(e)}`))}function k(e){const t=x();return new f({type:"tuple",schema:null,*entries(r){if(Array.isArray(r)){const n=Math.max(e.length,r.length);for(let i=0;i<n;i++)yield[i,r[i],e[i]||t]}},validator:e=>Array.isArray(e)||`Expected an array, but received: ${c(e)}`})}function $(e){const t=e.map((e=>e.type)).join(" | ");return new f({type:"union",schema:null,coercer(t){for(const r of e){const[e,n]=r.validate(t,{coerce:!0});if(!e)return n}return t},validator(r,n){const i=[];for(const t of e){const[...e]=l(r,t,n),[a]=e;if(!a?.[0])return[];for(const[t]of e)t&&i.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${c(r)}`,...i]}})}function C(){return g("unknown",(()=>!0))}function T(e,t,r){return new f({...e,coercer:(n,i)=>m(n,t)?e.coercer(r(n,i),i):e.coercer(n,i)})}function R(e){return function(e){return function(e){return"object"==typeof e&&null!==e&&"message"in e}(e)&&"string"==typeof e.message?e.message:null==e?"":String(e)}(e).replace(/\.$/u,"")}function _(e,t){return r=e,Boolean("string"==typeof r?.prototype?.constructor?.name)?new e({message:t}):e({message:t});var r}class J extends Error{constructor(e){super(e.message),this.code="ERR_ASSERTION"}}function F(e,t="Assertion failed.",r=J){if(!e){if(t instanceof Error)throw t;throw _(r,t)}}function q(e,t,r="Assertion failed",n=J){try{p(e,t)}catch(e){throw _(n,`${r}: ${R(e)}.`)}}const M=e=>N(e);function z({path:e,branch:r}){const n=e[e.length-1];return t(r[r.length-2],n)}function U(e){return new f({...e,type:`optional ${e.type}`,validator:(t,r)=>!z(r)||e.validator(t,r),refiner:(t,r)=>!z(r)||e.refiner(t,r)})}const B=$([S(null),E(),g("finite number",(e=>m(e,j())&&Number.isFinite(e))),I(),w(b((()=>B))),P(I(),b((()=>B)))]),L=T(B,g("any",(()=>!0)),(e=>(q(e,B),JSON.parse(JSON.stringify(e,((e,t)=>{if("__proto__"!==e&&"constructor"!==e)return t}))))));function W(e){try{return function(e){h(e,L)}(e),!0}catch{return!1}}const D=S("2.0"),V=O($([j(),I()])),G=M({code:g("integer",(e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${c(e)}`)),message:I(),data:U(L),stack:U(I())}),H=$([P(I(),L),w(L)]);M({id:V,jsonrpc:D,method:I(),params:U(H)}),M({jsonrpc:D,method:I(),params:U(H)});N({id:V,jsonrpc:D,result:A(C()),error:A(G)});const X=M({id:V,jsonrpc:D,result:L}),Q=M({id:V,jsonrpc:D,error:G});$([X,Q]);function K(e,t){return Y(e,"pattern",(r=>t.test(r)||`Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))}function Y(e,t,r){return new f({...e,*refiner(n,i){yield*e.refiner(n,i);const a=d(r(n,i),i,e,n);for(const e of a)yield{...e,refinement:t}}})}var Z={invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},ee={userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901},te={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}},re=Z.internal,ne="Unspecified error message. This is a bug, please report it.",ie=(ae(re),"Unspecified server error.");function ae(e,r=ne){if(function(e){return Number.isInteger(e)}(e)){const r=e.toString();if(t(te,r))return te[r].message;if(function(e){return e>=-32099&&e<=-32e3}(e))return ie}return r}function oe(t){return Array.isArray(t)?t.map((t=>W(t)?t:e(t)?se(t):null)):e(t)?se(t):W(t)?t:null}function se(e){return Object.getOwnPropertyNames(e).reduce(((t,r)=>{const n=e[r];return W(n)&&(t[r]=n),t}),{})}var ce=r(12),ue=class extends Error{constructor(e,t,r){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a non-empty string.');super(t),this.code=e,void 0!==r&&(this.data=r)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data,a(this.data)&&(e.data.cause=oe(this.data.cause))),this.stack&&(e.stack=this.stack),e}toString(){return ce(this.serialize(),le,2)}},de=class extends ue{constructor(e,t,r){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,t,r)}};function le(e,t){if("[Circular]"!==t)return t}var fe=e=>Pe(Z.parse,e),pe=e=>Pe(Z.invalidRequest,e),he=e=>Pe(Z.invalidParams,e),me=e=>Pe(Z.methodNotFound,e),ve=e=>Pe(Z.internal,e),ye=e=>Pe(Z.invalidInput,e),ge=e=>Pe(Z.resourceNotFound,e),be=e=>Pe(Z.resourceUnavailable,e),we=e=>Pe(Z.transactionRejected,e),Ee=e=>Pe(Z.methodNotSupported,e),Se=e=>Pe(Z.limitExceeded,e),xe=e=>Ie(ee.userRejectedRequest,e),Oe=e=>Ie(ee.unauthorized,e),je=e=>Ie(ee.unsupportedMethod,e),Ne=e=>Ie(ee.disconnected,e),Ae=e=>Ie(ee.chainDisconnected,e);function Pe(e,t){const[r,n]=ke(t);return new ue(e,r??ae(e),n)}function Ie(e,t){const[r,n]=ke(t);return new de(e,r??ae(e),n)}function ke(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:t,data:r}=e;if(t&&"string"!=typeof t)throw new Error("Must specify string message.");return[t??void 0,r]}}return[]}K(I(),/^(?:0x)?[0-9a-f]+$/iu),K(I(),/^0x[0-9a-f]+$/iu),K(I(),/^0x[0-9a-f]{40}$/u);const $e=K(I(),/^0x[0-9a-fA-F]{40}$/u);var Ce,Te,Re,_e,Je=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},Fe=(e,t,r)=>(Je(e,t,"read from private field"),r?r.call(e):t.get(e)),qe=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Me=(e,t,r,n)=>(Je(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),ze=class extends Error{constructor(r,n={}){const i=function(r){if(e(r)&&t(r,"message")&&"string"==typeof r.message)return r.message;return String(r)}(r);super(i),qe(this,Ce,void 0),qe(this,Te,void 0),qe(this,Re,void 0),qe(this,_e,void 0),Me(this,Te,i),Me(this,Ce,function(r){if(e(r)&&t(r,"code")&&"number"==typeof r.code&&Number.isInteger(r.code))return r.code;return-32603}(r));const a={...We(r),...n};Object.keys(a).length>0&&Me(this,Re,a),Me(this,_e,super.stack)}get name(){return"SnapError"}get code(){return Fe(this,Ce)}get message(){return Fe(this,Te)}get data(){return Fe(this,Re)}get stack(){return Fe(this,_e)}toJSON(){return{code:Be,message:Le,data:{cause:{code:this.code,message:this.message,stack:this.stack,...this.data?{data:this.data}:{}}}}}serialize(){return this.toJSON()}};function Ue(e){return class extends ze{constructor(t,r){if("object"==typeof t){const r=e();return void super({code:r.code,message:r.message,data:t})}const n=e(t);super({code:n.code,message:n.message,data:r})}}}Ce=new WeakMap,Te=new WeakMap,Re=new WeakMap,_e=new WeakMap;var Be=-31002,Le="Snap Error";function We(r){return e(r)&&t(r,"data")&&"object"==typeof r.data&&null!==r.data&&W(r.data)&&!Array.isArray(r.data)?r.data:{}}function De(e){return g(JSON.stringify(e),S(e).validator)}function Ve(e){return De(e)}function Ge(e){return function([e,...t]){const r=$([e,...t]);return new f({...r,schema:[e,...t]})}(e)}function He(){return Y(I(),"SVG",(e=>!!e.includes("<svg")||"Value is not a valid SVG."))}Ue(ve),Ue(ye),Ue(he),Ue(pe),Ue(Se);var Xe=Ue(me);Ue(Ee),Ue(fe),Ue(ge),Ue(be),Ue(we),Ue(Ae),Ue(Ne),Ue(Oe),Ue(je),Ue(xe);function Qe(e,t,r=[]){return(...n)=>{if(1===n.length&&a(n[0])){const r={...n[0],type:e};return q(r,t,`Invalid ${e} component`),r}const i=r.reduce(((e,t,r)=>void 0!==n[r]?{...e,[t]:n[r]}:e),{type:e});return q(i,t,`Invalid ${e} component`),i}}var Ke,Ye,Ze,et,tt,rt=((Ke=rt||{}).Copyable="copyable",Ke.Divider="divider",Ke.Heading="heading",Ke.Panel="panel",Ke.Spinner="spinner",Ke.Text="text",Ke.Image="image",Ke.Row="row",Ke.Address="address",Ke.Button="button",Ke.Input="input",Ke.Form="form",Ke),nt=N({type:I()}),it=y(nt,N({value:C()})),at=y(it,N({type:S("address"),value:$e})),ot=(Qe("address",at,["value"]),y(it,N({type:S("copyable"),value:I(),sensitive:A(E())}))),st=(Qe("copyable",ot,["value","sensitive"]),y(nt,N({type:S("divider")}))),ct=(Qe("divider",st),y(it,N({type:S("heading"),value:I()}))),ut=(Qe("heading",ct,["value"]),y(nt,N({type:S("image"),value:He()}))),dt=(Qe("image",ut,["value"]),(Ye=dt||{}).Primary="primary",Ye.Secondary="secondary",Ye),lt=((Ze=lt||{}).Button="button",Ze.Submit="submit",Ze),ft=y(it,N({type:S("button"),value:I(),variant:A($([Ve("primary"),Ve("secondary")])),buttonType:A($([Ve("button"),Ve("submit")])),name:A(I())})),pt=(Qe("button",ft,["value","buttonType","name","variant"]),(et=pt||{}).Text="text",et.Number="number",et.Password="password",et),ht=y(it,N({type:S("input"),value:A(I()),name:I(),inputType:A($([Ve("text"),Ve("password"),Ve("number")])),placeholder:A(I()),label:A(I()),error:A(I())})),mt=(Qe("input",ht,["name","inputType","placeholder","value","label"]),$([ht,ft])),vt=y(nt,N({type:S("form"),children:w(mt),name:I()})),yt=(Qe("form",vt,["name","children"]),y(it,N({type:S("text"),value:I(),markdown:A(E())}))),gt=(Qe("text",yt,["value","markdown"]),(tt=gt||{}).Default="default",tt.Critical="critical",tt.Warning="warning",tt),bt=$([ut,yt,at]),wt=y(it,N({type:S("row"),variant:A($([Ve("default"),Ve("critical"),Ve("warning")])),label:I(),value:bt})),Et=(Qe("row",wt,["label","value","variant"]),y(nt,N({type:S("spinner")}))),St=(Qe("spinner",Et),y(nt,N({children:w(b((()=>Ot)))}))),xt=y(St,N({type:S("panel")})),Ot=(Qe("panel",xt,["children"]),$([ot,st,ct,ut,xt,Et,yt,wt,at,ht,vt,ft]));var jt,Nt,At,Pt,It,kt,$t=((jt=$t||{}).Critical="critical",jt),Ct=((Nt=Ct||{}).ButtonClickEvent="ButtonClickEvent",Nt.FormSubmitEvent="FormSubmitEvent",Nt.InputChangeEvent="InputChangeEvent",Nt.FileUploadEvent="FileUploadEvent",Nt),Tt=N({type:I(),name:A(I())}),Rt=y(Tt,N({type:S("ButtonClickEvent"),name:A(I())})),_t=N({name:I(),size:j(),contentType:I(),contents:I()}),Jt=y(Tt,N({type:S("FormSubmitEvent"),value:P(I(),O($([I(),_t,E()]))),name:I()})),Ft=y(Tt,N({type:S("InputChangeEvent"),name:I(),value:$([I(),E()])})),qt=($([Rt,Jt,Ft,y(Tt,N({type:S("FileUploadEvent"),name:I(),file:O(_t)}))]),(At=qt||{}).Alert="alert",At.Confirmation="confirmation",At.Prompt="prompt",At),Mt=((Pt=Mt||{}).Base64="base64",Pt.Hex="hex",Pt.Utf8="utf8",Pt),zt=((It=zt||{}).ClearState="clear",It.GetState="get",It.UpdateState="update",It),Ut=((kt=Ut||{}).InApp="inApp",kt.Native="native",kt),Bt=Ge([I(),j()]),Lt=Wt([I()]);N({type:I(),props:P(I(),L),key:O(Bt)});function Wt(e){return function(e){const t=Ge([e,w(b((()=>t)))]);return t}(O(Ge([...e,E()])))}function Dt(e,t={}){return N({type:De(e),props:N(t),key:O(Bt)})}var Vt=Dt("Button",{children:Lt,name:A(I()),type:A(Ge([De("button"),De("submit")])),variant:A(Ge([De("primary"),De("destructive")])),disabled:A(E())}),Gt=Dt("Checkbox",{name:I(),checked:A(E()),label:A(I()),variant:A(Ge([De("default"),De("toggle")]))}),Ht=Dt("Input",{name:I(),type:A(Ge([De("text"),De("password"),De("number")])),value:A(I()),placeholder:A(I())}),Xt=Dt("Option",{value:I(),children:I()}),Qt=Dt("Dropdown",{name:I(),value:A(I()),children:Wt([Xt])}),Kt=Dt("FileInput",{name:I(),accept:Ge([A(w(I()))]),compact:A(E())}),Yt=[Ht,Vt],Zt=[Ht,Qt,Kt,Gt],er=(Ge([...Zt,...Yt]),Ge([k(Yt),...Zt])),tr=Dt("Field",{label:A(I()),error:A(I()),children:er}),rr=Dt("Form",{children:Wt([tr,b((()=>Sr))]),name:I()}),nr=Dt("Bold",{children:Wt([I(),b((()=>ir))])}),ir=Dt("Italic",{children:Wt([I(),b((()=>nr))])}),ar=Ge([nr,ir]),or=Dt("Address",{address:$e}),sr=Dt("Box",{children:Wt([b((()=>Sr))]),direction:A(Ge([De("horizontal"),De("vertical")])),alignment:A(Ge([De("start"),De("center"),De("end"),De("space-between"),De("space-around")]))}),cr=Dt("Footer",{children:Ge([k([Vt,Vt]),Vt])}),ur=Dt("Container",{children:Ge([k([sr,cr]),sr])}),dr=Dt("Copyable",{value:I(),sensitive:A(E())}),lr=Dt("Divider"),fr=Dt("Value",{value:I(),extra:I()}),pr=Dt("Heading",{children:Lt}),hr=Dt("Image",{src:He(),alt:A(I())}),mr=Dt("Link",{href:I(),children:Wt([ar,I()])}),vr=Dt("Text",{children:Wt([I(),nr,ir,mr]),alignment:A(Ge([De("start"),De("center"),De("end")]))}),yr=Ge([vr,nr,ir,mr,hr,E()]),gr=Ge([vr,nr,ir,mr,I()]),br=Dt("Tooltip",{children:O(yr),content:gr}),wr=Dt("Row",{label:I(),children:Ge([or,hr,vr,fr]),variant:A(Ge([De("default"),De("warning"),De("critical")])),tooltip:A(I())}),Er=Dt("Spinner"),Sr=Ge([or,nr,sr,Vt,dr,lr,Qt,Kt,rr,pr,Ht,hr,ir,mr,wr,Er,vr,br,Gt]),xr=Sr,Or=(Ge([Vt,Ht,Kt,tr,rr,nr,ir,or,sr,dr,lr,pr,hr,mr,wr,Er,vr,Qt,Xt,fr,br,Gt,cr,ur]),$([_t,I(),E()])),jr=P(I(),O(Or));P(I(),$([jr,O(Or)])),$([Ot,xr]),P(I(),L);const Nr=function(){const e=[];return()=>{if(0===e.length)for(let t=0;t<256;t++)e.push(t.toString(16).padStart(2,"0"));return e}}();function Ar(e){return e instanceof Uint8Array}function Pr(e){F(Ar(e),"Value must be a Uint8Array.")}function Ir(e){if(Pr(e),0===e.length)return"0x";const t=Nr(),r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=t[e[n]];return function(e){return e.startsWith("0x")?e:e.startsWith("0X")?`0x${e.substring(2)}`:`0x${e}`}(r.join(""))}function kr(e){return F("string"==typeof e,"Value must be a string."),(new TextEncoder).encode(e)}async function $r(){const e=await ethereum.request({method:"eth_requestAccounts"});return F(e,"Ethereum provider did not return accounts."),e}const Cr=async({request:e})=>{switch(e.method){case"getGasPrice":return await async function(){const e=await ethereum.request({method:"eth_gasPrice"});return F(e,"Ethereum provider did not return a gas price."),e}();case"getVersion":return await async function(){const e=await ethereum.request({method:"net_version"});return F(e,"Ethereum provider did not return a version."),e}();case"getAccounts":return await $r();case"personalSign":{const t=e.params,r=await $r();return await async function(e,t){const r=await ethereum.request({method:"personal_sign",params:[Ir(kr(e)),t]});return F(r,"Ethereum provider did not return a signature."),r}(t.message,r[0])}default:throw new Xe({method:e.method})}}})();var i=exports;for(var a in n)i[a]=n[a];n.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})();