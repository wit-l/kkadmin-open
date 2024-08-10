var q=Object.defineProperty,R=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(e,u,t)=>u in e?q(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,b=(e,u)=>{for(var t in u||(u={}))k.call(u,t)&&v(e,t,u[t]);if(g)for(var t of g(u))T.call(u,t)&&v(e,t,u[t]);return e},I=(e,u)=>R(e,y(u));var h=(e,u,t)=>new Promise((o,n)=>{var f=a=>{try{l(t.next(a))}catch(s){n(s)}},c=a=>{try{l(t.throw(a))}catch(s){n(s)}},l=a=>a.done?o(a.value):Promise.resolve(a.value).then(f,c);l((t=t.apply(e,u)).next())});import{B as j,u as L}from"./useForm.e0ee1f44.js";import{V as M,A as i,c1 as W,bd as w,B as O,r as E,u as C,j as V,a1 as D,D as $,a2 as G,a6 as N,w as U,a5 as z}from"./vendor.bf608252.js";/* empty css               *//* empty css               */import{T as H}from"./index.63ebf85a.js";import{c as _,e as J,f as K}from"./friend.99ab5133.js";import{G as Q,_ as X}from"./index.3976a6ae.js";import{B as Y,a as Z}from"./index.76b180af.js";const{permCodeList:A}=Q(),ee="",fe=[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,customRender:({record:e})=>i(W,{src:e.avatar})},{title:"\u94FE\u63A5",dataIndex:"link",customRender:({record:e})=>i("a",{href:e.link,target:"target"},"\u67E5\u770B")},{title:"\u6807\u7B7E",dataIndex:"tag",width:100,customRender:({record:e})=>{const u=e.tag;if(u.length>=0){const t=u[0].bgColor,o=u[0].name;return i(w,{color:t},()=>o)}else return""}},{title:"\u63CF\u8FF0",dataIndex:"description",width:150},{title:"from",dataIndex:"from",customRender:({record:e})=>i("span",{},e.from[0].userName)},{title:"to",dataIndex:"to",customRender:({record:e})=>i("span",{},e.to[0].userName)},{title:"\u72B6\u6001",dataIndex:"status",width:80,customRender:({record:e})=>{const u=e.status;let t="",o="";return u==="0"?(t="green",o="\u542F\u7528"):u==="1"?(t="yellow",o="\u5F85\u5BA1\u6838"):u==="2"&&(t="red",o="\u5C4F\u853D"),i(w,{color:t},()=>o)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180,customRender:({record:e})=>i(H,{value:e.createTime,mode:"date"})}],Fe=[{field:"name",label:"\u53CB\u94FE\u540D\u79F0",component:"Input",colProps:{span:6},labelWidth:"80px"},{field:"link",label:"\u94FE\u63A5",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"from",label:"\u6765\u81EA",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"to",label:"\u53BB\u5F80",component:"Input",colProps:{span:6},labelWidth:"50px"},{field:"tag",label:"\u6807\u7B7E",component:"ApiSelect",componentProps:{api:_,labelField:"name",valueField:"_id",params:{user:ee}},labelWidth:"50px",colProps:{span:6}},{field:"status",label:"\u72B6\u6001",component:"Select",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u5F85\u5BA1\u6838",value:"1"},{label:"\u5C4F\u853D",value:"2"}]},colProps:{span:6},labelWidth:"50px"}],te=[{field:"name",label:"\u53CB\u94FE\u540D\u79F0",component:"Input",required:!0},{field:"avatar",label:"\u5934\u50CF",component:"Input",required:!0},{field:"description",label:"\u63CF\u8FF0",component:"Input",required:!0},{field:"link",label:"\u5730\u5740",component:"Input",required:!0},{field:"tag",label:"\u6807\u7B7E",component:"Select",helpMessage:"\u8F93\u5165\u53BB\u5F80\u540E\u53EF\u663E\u793A\u5BF9\u65B9\u7684\u6807\u7B7E"},{field:"status",label:"\u72B6\u6001",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"\u5DF2\u542F\u7528",value:"0"},{label:"\u5F85\u5BA1\u6838",value:"1"},{label:"\u5DF2\u5C4F\u853D",value:"2"}]}},{field:"from",label:"\u6765\u81EA",component:"Input",required:!0,ifShow:A.includes("update:allFriendList")||A.includes("add:allFriendList")},{field:"to",label:"\u53BB\u5F80",component:"Input",required:!0,componentProps:({formActionType:e})=>({onChange:M(u=>h(void 0,null,function*(){const o=(yield _({userId:u.target.value})).map(n=>({label:n.name,value:n._id}));e.updateSchema({field:"tag",componentProps:{options:o}})}),500)})},{field:"theme.borderStyle",label:"\u8FB9\u6846\u6837\u5F0F",component:"Input",required:!1},{field:"theme.hoverBgColor",label:"\u9F20\u6807\u60AC\u6D6E\u6837\u5F0F",component:"Input",required:!1},{field:"theme.hoverAvatarRotate",label:"\u5934\u50CF\u65CB\u8F6C\u89D2\u5EA6",component:"Input",required:!1},{field:"theme.boderAnimation",label:"\u8FB9\u6846\u52A8\u753B",component:"Input",required:!1},{field:"theme.avatarAnimation",label:"\u5934\u50CF\u52A8\u753B",component:"Input",required:!1},{field:"theme.cardStyle",label:"\u5361\u7247\u6837\u5F0F",component:"Input",required:!1,helpMessage:"\u76EE\u524D\u53EA\u652F\u6301card\u548Citem\u54E6"},{field:"theme.screenshot",label:"\u5C4F\u5E55\u622A\u56FE",component:"Input",required:!1}],ue=O({name:"MenuDrawer",components:{BasicDrawer:Y,BasicForm:j},emits:["success","register"],setup(e,{emit:u}){const t=E(!0),o=E(null),[n,{resetFields:f,setFieldsValue:c,validate:l}]=L({labelWidth:100,schemas:te,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[a,{setDrawerProps:s,closeDrawer:x}]=Z(r=>h(this,null,function*(){if(f(),s({confirmLoading:!1}),t.value=!!(r==null?void 0:r.isUpdate),t.value?o.value=r.record._id:o.value=null,C(t)){const d=r.record.theme;let m={};Object.keys(d).forEach(p=>{m["theme."+p]=d[p]}),c(b(I(b({},r.record),{tag:r.record.tag[0]._id,from:r.record.from[0]._id,to:r.record.from[0]._id}),m))}else c(b({},r.record))})),P=V(()=>C(t)?"\u7F16\u8F91\u53CB\u94FE":"\u6DFB\u52A0\u53CB\u94FE");function S(){return h(this,null,function*(){try{const r=yield l();s({confirmLoading:!0});const d=m=>{let p={_id:o.value,theme:{}};return Object.keys(m).forEach(F=>{const B=m[F];F.includes("theme")?p.theme[F.split(".")[1]]=B:p[F]=B}),p};o.value?yield J(d(r)):(d(r),yield K(d(r))),x(),u("success")}finally{s({confirmLoading:!1})}})}return{registerDrawer:a,registerForm:n,getTitle:P,handleSubmit:S}}});function oe(e,u,t,o,n,f){const c=D("BasicForm"),l=D("BasicDrawer");return $(),G(l,z(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:N(()=>[U(c,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var re=X(ue,[["render",oe]]),be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});export{re as M,be as a,fe as c,Fe as s};
