import{B as _,aS as C,c6 as y,a as F,r as g,j as v,a1 as m,D as L,a2 as S,a6 as h,J as a,K as c,w,L as u,ad as R,u as n,N as b,O as $}from"./vendor.bf608252.js";import{D as I,G as D,S as U}from"./siteSetting.ba391e39.js";import{_ as k,N as B,a as G,D as H,b as N}from"./index.3976a6ae.js";import{a as T}from"./useContentViewHeight.0b4d84e0.js";import"./useWindowSizeFn.011a8160.js";const V=_({name:"LayoutFooter",components:{Footer:C.Footer,GithubFilled:y},setup(){const{t:o}=N(),{getShowFooter:e}=B(),{currentRoute:p}=F(),{prefixCls:d}=G("layout-footer"),r=g(null),{setFooterHeight:i}=T();return{getShowLayoutFooter:v(()=>{var s,t;if(n(e)){const l=(s=n(r))==null?void 0:s.$el;i((l==null?void 0:l.offsetHeight)||0)}else i(0);return n(e)&&!((t=n(p).meta)==null?void 0:t.hiddenFooter)}),prefixCls:d,t:o,DOC_URL:I,GITHUB_URL:D,SITE_URL:U,openWindow:H,footerRef:r}}}),W=o=>(b("data-v-54b37d8b"),o=o(),$(),o),O=W(()=>a("div",null,"Copyright \xA92020 Vben Admin",-1));function A(o,e,p,d,r,i){const f=m("GithubFilled"),s=m("Footer");return o.getShowLayoutFooter?(L(),S(s,{key:0,class:u(o.prefixCls),ref:"footerRef"},{default:h(()=>[a("div",{class:u(`${o.prefixCls}__links`)},[a("a",{onClick:e[0]||(e[0]=t=>o.openWindow(o.SITE_URL))},c(o.t("layout.footer.onlinePreview")),1),w(f,{onClick:e[1]||(e[1]=t=>o.openWindow(o.GITHUB_URL)),class:u(`${o.prefixCls}__github`)},null,8,["class"]),a("a",{onClick:e[2]||(e[2]=t=>o.openWindow(o.DOC_URL))},c(o.t("layout.footer.onlineDocument")),1)],2),O]),_:1},8,["class"])):R("",!0)}var P=k(V,[["render",A],["__scopeId","data-v-54b37d8b"]]);export{P as default};
