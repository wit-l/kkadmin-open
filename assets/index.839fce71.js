var ge=Object.defineProperty,me=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var ee=(e,o,a)=>o in e?ge(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,M=(e,o)=>{for(var a in o||(o={}))ye.call(o,a)&&ee(e,a,o[a]);if(x)for(var a of x(o))be.call(o,a)&&ee(e,a,o[a]);return e},W=(e,o)=>me(e,he(o));var V=(e,o,a)=>new Promise((i,l)=>{var c=u=>{try{n(a.next(u))}catch(d){l(d)}},t=u=>{try{n(a.throw(u))}catch(d){l(d)}},n=u=>u.done?i(u.value):Promise.resolve(u.value).then(c,t);n((a=a.apply(e,o)).next())});import{b as se,m as ve,ae as Ce,ay as Me,t as He,v as Se,S as Fe,_ as j,a as re,az as ke,r as ie,aw as $e,ah as Be,av as ce,ad as Oe}from"./index.3976a6ae.js";import{am as q,u as s,B as w,X as Pe,w as H,bi as Te,v as we,r as m,bI as De,j as S,T as ue,$ as Re,aj as Ne,a0 as B,a1 as y,b8 as We,D as v,a2 as P,a6 as g,G as _e,F as z,a7 as O,Y as Ee,a9 as je,b3 as Le,b4 as Ie,bJ as Ve,ab as Ae,ad as Y,L as ze,ae as K,K as G,a5 as E,an as qe,o as X,aD as te,ap as ne,aC as oe,aR as le,ai as Q,Q as de,t as A,bK as Xe}from"./vendor.bf608252.js";import{u as Ye}from"./useWindowSizeFn.011a8160.js";const{t:ae}=se(),Ke={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ae("common.cancelText")},okText:{type:String,default:ae("common.okText")},closeFunc:Function},U=Object.assign({},Ke,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ge(e){const o=(l,c)=>getComputedStyle(l)[c],a=l=>{if(!l)return;l.setAttribute("data-drag",s(e.draggable));const c=l.querySelector(".ant-modal-header"),t=l.querySelector(".ant-modal");!c||!t||!s(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const u=n.clientX,d=n.clientY,f=document.body.clientWidth,p=document.documentElement.clientHeight,h=t.offsetWidth,C=t.offsetHeight,F=t.offsetLeft,k=f-t.offsetLeft-h,$=t.offsetTop,L=p-t.offsetTop-C,T=o(t,"left"),D=o(t,"top");let R=+T,N=+D;T.includes("%")?(R=+document.body.clientWidth*(+T.replace(/%/g,"")/100),N=+document.body.clientHeight*(+D.replace(/%/g,"")/100)):(R=+T.replace(/px/g,""),N=+D.replace(/px/g,"")),document.onmousemove=function(I){let r=I.clientX-u,b=I.clientY-d;-r>F?r=-F:r>k&&(r=k),-b>$?b=-$:b>L&&(b=L),t.style.cssText+=`;left:${r+R}px;top:${b+N}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const l=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(l)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||s(e.destroyOnClose))&&a(c)}};q(()=>{!s(e.visible)||!s(e.draggable)||ve(()=>{i()},30)})}function Je(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Te(e)}var Qe=w({name:"Modal",inheritAttrs:!1,props:U,emits:["cancel"],setup(e,{slots:o,emit:a}){const{visible:i,draggable:l,destroyOnClose:c}=Pe(e),t=Ce();Ge({visible:i,destroyOnClose:c,draggable:l});const n=u=>{a("cancel",u)};return()=>{let u;const d=W(M(M({},s(t)),e),{onCancel:n});return H(we,d,Je(u=Me(o))?u:{default:()=>[u]})}}});const fe=Symbol();function Ue(e){return He(e,fe)}function Ct(){return Se(fe)}const Ze={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},xe=w({name:"ModalWrapper",components:{ScrollContainer:Fe},inheritAttrs:!1,props:Ze,emits:["height-change","ext-height"],setup(e,{emit:o}){const a=m(null),i=m(null),l=m(0),c=m(0);let t=0;Ye(d.bind(null,!1)),De(i,()=>{d()},{attributes:!0,subtree:!0}),Ue({redoModalHeight:d});const n=S(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(l)}px`}));q(()=>{e.useWrapper&&d()}),ue(()=>e.fullScreen,f=>{d(),f?c.value=l.value:l.value=c.value}),Re(()=>{const{modalHeaderHeight:f,modalFooterHeight:p}=e;o("ext-height",f+p)}),Ne(()=>{});function u(){return V(this,null,function*(){B(()=>{var p;const f=s(a);!f||(p=f==null?void 0:f.scrollTo)==null||p.call(f,0)})})}function d(){return V(this,null,function*(){if(!e.visible)return;const f=s(a);if(!f)return;const p=f.$el.parentElement;if(!!p){p.style.padding="0",yield B();try{const h=p.parentElement&&p.parentElement.parentElement;if(!h)return;const C=getComputedStyle(h).top,F=Number.parseInt(C);let k=window.innerHeight-F*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;F<40&&(k-=26),yield B();const $=s(i);if(!$)return;yield B(),t=$.scrollHeight,e.fullScreen?l.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:l.value=e.height?e.height:t>k?k:t,o("height-change",s(l))}catch(h){}}})}return{wrapperRef:a,spinRef:i,spinStyle:n,scrollTop:u,setModalHeight:d}}}),et=["loading-tip"];function tt(e,o,a,i,l,c){const t=y("ScrollContainer"),n=We("loading");return v(),P(t,{ref:"wrapperRef"},{default:g(()=>[_e((v(),z("div",{ref:"spinRef",style:Ee(e.spinStyle),"loading-tip":e.loadingTip},[O(e.$slots,"default")],12,et)),[[n,e.loading]])]),_:3},512)}var nt=j(xe,[["render",tt]]);const ot=w({name:"ModalClose",components:{Tooltip:je,FullscreenExitOutlined:Le,FullscreenOutlined:Ie,CloseOutlined:Ve},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:a}=re("basic-modal-close"),{t:i}=se(),l=S(()=>[a,`${a}--custom`,{[`${a}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:l,prefixCls:a,handleCancel:c,handleFullScreen:t}}});function lt(e,o,a,i,l,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),u=y("FullscreenOutlined"),d=y("CloseOutlined");return v(),z("div",{class:ze(e.getClass)},[e.canFullscreen?(v(),z(Ae,{key:0},[e.fullScreen?(v(),P(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:g(()=>[H(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(v(),P(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:g(()=>[H(u,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):Y("",!0),H(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:g(()=>[H(d,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}var at=j(ot,[["render",lt]]);const st=w({name:"BasicModalFooter",props:U,emits:["ok","cancel"],setup(e,{emit:o}){function a(l){o("ok",l)}function i(l){o("cancel",l)}return{handleOk:a,handleCancel:i}}});function rt(e,o,a,i,l,c){const t=y("a-button");return v(),z("div",null,[O(e.$slots,"insertFooter"),e.showCancelBtn?(v(),P(t,E({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:g(()=>[K(G(e.cancelText),1)]),_:1},16,["onClick"])):Y("",!0),O(e.$slots,"centerFooter"),e.showOkBtn?(v(),P(t,E({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:g(()=>[K(G(e.okText),1)]),_:1},16,["type","onClick","loading"])):Y("",!0),O(e.$slots,"appendFooter")])}var it=j(st,[["render",rt]]);const ct=w({name:"BasicModalHeader",components:{BasicTitle:ke},props:{helpMessage:{type:[String,Array]},title:{type:String}},emits:["dblclick"]});function ut(e,o,a,i,l,c){const t=y("BasicTitle");return v(),P(t,{helpMessage:e.helpMessage},{default:g(()=>[K(G(e.title),1)]),_:1},8,["helpMessage"])}var dt=j(ct,[["render",ut]]);function ft(e){const o=m(!1),a=S(()=>{const l=s(e.wrapClassName)||"";return s(o)?`fullscreen-modal ${l} `:s(l)});function i(l){l&&l.stopPropagation(),o.value=!s(o)}return{getWrapClassName:a,handleFullScreen:i,fullScreenRef:o}}const pt=w({name:"BasicModal",components:{Modal:Qe,ModalWrapper:nt,ModalClose:at,ModalFooter:it,ModalHeader:dt},inheritAttrs:!1,props:U,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:o,attrs:a}){const i=m(!1),l=m(null),c=m(null),{prefixCls:t}=re("basic-modal"),n=m(0),u={setModalProps:T,emitVisible:void 0,redoModalHeight:()=>{B(()=>{s(c)&&s(c).setModalHeight()})}},d=Q();d&&o("register",u,d.uid);const f=S(()=>M(M({},e),s(l))),{handleFullScreen:p,getWrapClassName:h,fullScreenRef:C}=ft({modalWrapperRef:c,extHeightRef:n,wrapClassName:qe(f.value,"wrapClassName")}),F=S(()=>{const r=W(M({},s(f)),{visible:s(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return W(M({},r),{wrapClassName:s(h)})}),k=S(()=>{const r=W(M(M({},a),s(f)),{visible:s(i),wrapClassName:s(h)});return s(C)?X(r,["height","title"]):X(r,"title")}),$=S(()=>{if(!s(C))return s(F).height});q(()=>{i.value=!!e.visible,C.value=!!e.defaultFullscreen}),ue(()=>s(i),r=>{var b;o("visible-change",r),o("update:visible",r),d&&((b=u.emitVisible)==null||b.call(u,r,d.uid)),B(()=>{e.scrollTop&&r&&s(c)&&s(c).scrollTop()})},{immediate:!1});function L(r){return V(this,null,function*(){var b,Z;if(r==null||r.stopPropagation(),!((Z=(b=r.target)==null?void 0:b.classList)==null?void 0:Z.contains(t+"-close--custom"))){if(e.closeFunc&&ie(e.closeFunc)){const pe=yield e.closeFunc();i.value=!pe;return}i.value=!1,o("cancel",r)}})}function T(r){l.value=$e(s(l)||{},r),Reflect.has(r,"visible")&&(i.value=!!r.visible),Reflect.has(r,"defaultFullscreen")&&(C.value=!!r.defaultFullscreen)}function D(r){o("ok",r)}function R(r){o("height-change",r)}function N(r){n.value=r}function I(r){!e.canFullscreen||(r.stopPropagation(),p(r))}return{handleCancel:L,getBindValue:k,getProps:F,handleFullScreen:p,fullScreenRef:C,getMergeProps:f,handleOk:D,visibleRef:i,omit:X,modalWrapperRef:c,handleExtHeight:N,handleHeightChange:R,handleTitleDbClick:I,getWrapperHeight:$}}});function gt(e,o,a,i,l,c){const t=y("ModalClose"),n=y("ModalHeader"),u=y("ModalFooter"),d=y("ModalWrapper"),f=y("Modal");return v(),P(f,E(e.getBindValue,{onCancel:e.handleCancel}),te({default:g(()=>[H(d,E({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:g(()=>[O(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:g(()=>[H(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])},e.$slots.title?void 0:{name:"title",fn:g(()=>[H(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])])},e.$slots.footer?void 0:{name:"footer",fn:g(()=>[H(u,E(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),te({_:2},[ne(Object.keys(e.$slots),p=>({name:p,fn:g(h=>[O(e.$slots,p,oe(le(h||{})))])}))]),1040,["onOk","onCancel"])])},ne(Object.keys(e.omit(e.$slots,"default")),p=>({name:p,fn:g(h=>[O(e.$slots,p,oe(le(h||{})))])}))]),1040,["onCancel"])}var mt=j(pt,[["render",gt]]);const _=de({}),J=de({});function Mt(){const e=m(null),o=m(!1),a=m("");function i(t,n){if(!Q())throw new Error("useModal() can only be used inside setup() or functional components!");a.value=n,!(s(o)&&Be()&&t===s(e))&&(e.value=t,o.value=!0,t.emitVisible=(u,d)=>{J[d]=u})}const l=()=>{const t=s(e);return t||ce("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},getVisible:S(()=>J[~~s(a)]),redoModalHeight:()=>{var t,n;(n=(t=l())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,u=!0)=>{var p;if((p=l())==null||p.setModalProps({visible:t}),!n)return;const d=s(a);if(u){_[d]=null,_[d]=A(n);return}Xe(A(_[d]),A(n))||(_[d]=A(n))},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})}};return[i,c]}const Ht=e=>{const o=m(null),a=Q(),i=m(""),l=()=>{const t=s(o);return t||ce("useModalInner instance is undefined!"),t},c=(t,n)=>{i.value=n,o.value=t,a==null||a.emit("register",t,n)};return q(()=>{const t=_[s(i)];!t||!e||!ie(e)||B(()=>{e(t)})}),[c,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({loading:t})},getVisible:S(()=>J[~~s(i)]),changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})},setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=l())==null?void 0:n.redoModalHeight;t&&t()}}]},St=Oe(mt);export{St as B,Ct as a,Ht as b,Mt as u};
