import{S as D,o as H,m as V,q as y,v as J,w,U as _,x as T,g as P,y as U,z as Q,A as W,B as X,C as k,D as ee,e as q,E as re,F as j,G as F,H as ne,I as ie,J as se,K as te,L as ue,M as fe,P as z,N as ae,O as K,Q as le,R as de,T as Y,V as ce,W as ve,X as _e,Y as oe,Z as be,k as $,_ as Pe,$ as we}from"./index-client.lSnMUFNj.js";function S(e,r=null,a){if(typeof e!="object"||e===null||D in e)return e;const d=W(e);if(d!==H&&d!==V)return e;var t=new Map,l=X(e),g=y(0);l&&t.set("length",y(e.length));var h;return new Proxy(e,{defineProperty(f,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&J();var u=t.get(n);return u===void 0?(u=y(i.value),t.set(n,u)):w(u,S(i.value,h)),!0},deleteProperty(f,n){var i=t.get(n);if(i===void 0)n in f&&t.set(n,y(_));else{if(l&&typeof n=="string"){var u=t.get("length"),s=Number(n);Number.isInteger(s)&&s<u.v&&w(u,s)}w(i,_),p(g)}return!0},get(f,n,i){var o;if(n===D)return e;var u=t.get(n),s=n in f;if(u===void 0&&(!s||(o=T(f,n))!=null&&o.writable)&&(u=y(S(s?f[n]:_,h)),t.set(n,u)),u!==void 0){var c=P(u);return c===_?void 0:c}return Reflect.get(f,n,i)},getOwnPropertyDescriptor(f,n){var i=Reflect.getOwnPropertyDescriptor(f,n);if(i&&"value"in i){var u=t.get(n);u&&(i.value=P(u))}else if(i===void 0){var s=t.get(n),c=s==null?void 0:s.v;if(s!==void 0&&c!==_)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return i},has(f,n){var c;if(n===D)return!0;var i=t.get(n),u=i!==void 0&&i.v!==_||Reflect.has(f,n);if(i!==void 0||U!==null&&(!u||(c=T(f,n))!=null&&c.writable)){i===void 0&&(i=y(u?S(f[n],h):_),t.set(n,i));var s=P(i);if(s===_)return!1}return u},set(f,n,i,u){var R;var s=t.get(n),c=n in f;if(l&&n==="length")for(var o=i;o<s.v;o+=1){var I=t.get(o+"");I!==void 0?w(I,_):o in f&&(I=y(_),t.set(o+"",I))}s===void 0?(!c||(R=T(f,n))!=null&&R.writable)&&(s=y(void 0),w(s,S(i,h)),t.set(n,s)):(c=s.v!==_,w(s,S(i,h)));var b=Reflect.getOwnPropertyDescriptor(f,n);if(b!=null&&b.set&&b.set.call(u,i),!c){if(l&&typeof n=="string"){var E=t.get("length"),x=Number(n);Number.isInteger(x)&&x>=E.v&&w(E,x+1)}p(g)}return!0},ownKeys(f){P(g);var n=Reflect.ownKeys(f).filter(s=>{var c=t.get(s);return c===void 0||c.v!==_});for(var[i,u]of t)u.v!==_&&!(i in f)&&n.push(i);return n},setPrototypeOf(){Q()}})}function p(e,r=1){w(e,e.v+r)}function G(e,r){return e===r||(e==null?void 0:e[D])===r}function Re(e={},r,a,d){return k(()=>{var t,l;return ee(()=>{t=l,l=[],q(()=>{e!==a(...l)&&(r(e,...l),t&&G(a(...t),e)&&r(null,...t))})}),()=>{re(()=>{l&&G(a(...l),e)&&r(null,...l)})}}),e}let A=!1,B=Symbol();function Oe(e,r,a){const d=a[r]??(a[r]={store:null,source:j(void 0),unsubscribe:F});if(d.store!==e&&!(B in a))if(d.unsubscribe(),d.store=e??null,e==null)d.source.v=void 0,d.unsubscribe=F;else{var t=!0;d.unsubscribe=ne(e,l=>{t?d.source.v=l:w(d.source,l)}),t=!1}return e&&B in a?ie(e):P(d.source)}function Se(e,r){return e.set(r),r}function Ee(){const e={};function r(){se(()=>{for(var a in e)e[a].unsubscribe();te(e,B,{enumerable:!1,value:!0})})}return[e,r]}function ye(e){var r=A;try{return A=!1,[e(),A]}finally{A=r}}const ge={get(e,r){if(!e.exclude.includes(r))return P(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,a){return r in e.special||(e.special[r]=he({get[r](){return e.props[r]}},r,z)),e.special[r](a),K(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),K(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function xe(e,r){return new Proxy({props:e,exclude:r,special:{},version:y(0)},ge)}function Z(e){for(var r=U,a=U;r!==null&&!(r.f&(le|de));)r=r.parent;try{return Y(r),e()}finally{Y(a)}}function he(e,r,a,d){var M;var t=(a&ce)!==0,l=!ve||(a&_e)!==0,g=(a&oe)!==0,h=(a&we)!==0,f=!1,n;g?[n,f]=ye(()=>e[r]):n=e[r];var i=D in e||be in e,u=g&&(((M=T(e,r))==null?void 0:M.set)??(i&&r in e&&(v=>e[r]=v)))||void 0,s=d,c=!0,o=!1,I=()=>(o=!0,c&&(c=!1,h?s=q(d):s=d),s);n===void 0&&d!==void 0&&(u&&l&&ue(),n=I(),u&&u(n));var b;if(l)b=()=>{var v=e[r];return v===void 0?I():(c=!0,o=!1,v)};else{var E=Z(()=>(t?$:Pe)(()=>e[r]));E.f|=fe,b=()=>{var v=P(E);return v!==void 0&&(s=void 0),v===void 0?s:v}}if(!(a&z))return b;if(u){var x=e.$$legacy;return function(v,O){return arguments.length>0?((!l||!O||x||f)&&u(O?b():v),v):b()}}var R=!1,C=!1,L=j(n),N=Z(()=>$(()=>{var v=b(),O=P(L);return R?(R=!1,C=!0,O):(C=!1,L.v=v)}));return t||(N.equals=ae),function(v,O){if(arguments.length>0){const m=O?P(N):l&&g?S(v):v;return N.equals(m)||(R=!0,w(L,m),o&&s!==void 0&&(s=m),q(()=>P(N))),v}return P(N)}}export{Oe as a,S as b,Re as c,Se as d,xe as l,he as p,Ee as s};
