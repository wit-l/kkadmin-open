var L=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var M=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&M(e,r,t[r]);if($)for(var r of $(t))z.call(t,r)&&M(e,r,t[r]);return e},B=(e,t)=>T(e,V(t));var P=(e,t,r)=>new Promise((h,d)=>{var g=l=>{try{f(r.next(l))}catch(c){d(c)}},p=l=>{try{f(r.throw(l))}catch(c){d(c)}},f=l=>l.done?h(l.value):Promise.resolve(l.value).then(g,p);f((r=r.apply(e,t)).next())});import{B as F,c9 as w,r as G,a as J,am as K,a1 as I,D as b,F as E,w as Z,a6 as A,a2 as D,ad as j,K as N,ae as q,L as H}from"./vendor.bf608252.js";/* empty css               */import{_ as Q,I as U,p as W,a as X,N as Y,i as x,b as ee,R as te,J as ne,o as ae,aZ as re,ab as se}from"./index.3976a6ae.js";const oe=F({name:"LayoutBreadcrumb",components:{Icon:U,[w.name]:w},props:{theme:W.oneOf(["dark","light"])},setup(){const e=G([]),{currentRoute:t}=J(),{prefixCls:r}=X("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=Y(),d=x(),{t:g}=ee();K(()=>P(this,null,function*(){var C,y,R;if(t.value.name===te)return;const s=yield ne(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const u=ae(s,o),m=s.filter(S=>S.path===u[0]),i=p(m,u);if(!i||i.length===0)return;const _=f(i);((y=t.value.meta)==null?void 0:y.currentActiveMenu)&&_.push(B(k({},t.value),{name:((R=t.value.meta)==null?void 0:R.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var u,m;n.includes(o.path)&&a.push(B(k({},o),{name:((u=o.meta)==null?void 0:u.title)||o.name})),((m=o.children)==null?void 0:m.length)&&a.push(...p(o.children,n))}),a}function f(s){return re(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:u,hideBreadcrumb:m,hideMenu:i}=a;return!(!u||m||i)}).filter(n=>{var a;return!((a=n.meta)==null?void 0:a.hideBreadcrumb)})}function l(s,n,a){a==null||a.preventDefault();const{children:o,redirect:u,meta:m}=s;if((o==null?void 0:o.length)&&!u){a==null||a.stopPropagation();return}if(!(m==null?void 0:m.carryParam))if(u&&se(u))d(u);else{let i="";n.length===1?i=n[0]:i=`${n.slice(1).pop()||""}`,i=/^\//.test(i)?i:`/${i}`,d(i)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:l,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,d,g){const p=I("Icon"),f=I("router-link"),l=I("a-breadcrumb");return b(),E("div",{class:H([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[Z(l,{routes:e.routes},{itemRender:A(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),D(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):j("",!0),e.hasRedirect(v,c)?(b(),D(f,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:A(()=>[q(N(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),E("span",ce,N(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var de=Q(oe,[["render",ie]]);export{de as default};
