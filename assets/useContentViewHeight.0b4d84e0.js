var H=(t,i,e)=>new Promise((u,o)=>{var f=n=>{try{a(e.next(n))}catch(s){o(s)}},m=n=>{try{a(e.throw(n))}catch(s){o(s)}},a=n=>n.done?u(n.value):Promise.resolve(n.value).then(f,m);a((e=e.apply(t,i)).next())});import{t as w}from"./index.3976a6ae.js";import{u as d}from"./useWindowSizeFn.011a8160.js";import{r,j as p,u as c}from"./vendor.bf608252.js";const l=Symbol();function v(t){return w(t,l,{native:!0})}const g=r(0),h=r(0);function P(){function t(e){g.value=e}function i(e){h.value=e}return{headerHeightRef:g,footerHeightRef:h,setHeaderHeight:t,setFooterHeight:i}}function R(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(h)||0);d(()=>{t.value=window.innerHeight},100,{immediate:!0});function u(o){return H(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:u,pageHeight:i})}export{P as a,R as u};
