(function(){"use strict";var e={1370:function(e,n,t){var a=t(5130),o=t(6768);const r={class:"content"};function u(e,n,t,a,u,l){const i=(0,o.g2)("Navbar"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(i),(0,o.Lk)("div",r,[(0,o.bF)(s)])],64)}var l=t(4232);const i={class:"navbar"},s={class:"links"},d={key:0},c={key:1};function v(e,n,t,a,r,u){const v=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("nav",null,[(0,o.Lk)("h1",null,[(0,o.bF)(v,{to:{name:"home"}},{default:(0,o.k6)((()=>[(0,o.eW)("My-Note")])),_:1})]),(0,o.Lk)("div",s,[a.user?((0,o.uX)(),(0,o.CE)("div",d,[(0,o.bF)(v,{to:{name:"home"}},{default:(0,o.k6)((()=>[(0,o.eW)("Forever Note")])),_:1}),(0,o.bF)(v,{to:{name:"daily"}},{default:(0,o.k6)((()=>[(0,o.eW)("Daily Notes")])),_:1}),(0,o.Lk)("span",null,"Logged in "+(0,l.v_)(a.user.email),1),(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>a.handleLogout&&a.handleLogout(...e))},"Logout")])):((0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(v,{class:"btn",to:{name:"signup"}},{default:(0,o.k6)((()=>[(0,o.eW)("Signup")])),_:1}),(0,o.bF)(v,{class:"btn",to:{name:"login"}},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})]))])])])}t(4114);var p=t(6400),m=t(8822),g=t(2621),h=t(7844);const y={apiKey:"AIzaSyDT8G6-tLNkusP1UpAe8Ix5rqE_7Yjb4Ok",authDomain:"my-notes-app-224e4.firebaseapp.com",projectId:"my-notes-app-224e4",storageBucket:"my-notes-app-224e4.appspot.com",messagingSenderId:"447538367879",appId:"1:447538367879:web:ea462636db079dc6585722"},b=(0,p.Wp)(y),f=(0,g.xI)(b),w=(0,m.aU)();(0,h.c7)(b);var k=t(144);const D=(0,k.KR)(null),C=(0,k.KR)(!1),L=async(e,n)=>{D.value=null,C.value=!0;try{const t=await(0,g.x9)(f,e,n);if(!t)throw new Error("Couldn't sign in...");return t}catch(t){D.value=t.message}finally{C.value=!1}},S=async(e,n)=>{D.value=null,C.value=!0;try{const t=await(0,g.eJ)(f,e,n);if(!t)throw new Error("Couldn't sign up...");return t}catch(t){D.value=t.message}finally{C.value=!1}},E=async()=>{D.value=null;try{return await(0,g.CI)(f)}catch(e){D.value=e.message}},_=()=>({error:D,isPending:C,login:L,logout:E,signup:S});var V=_,K=t(1387);const P=(0,k.KR)(f.currentUser);(0,g.hg)(f,(e=>{P.value=e}));const X=()=>({user:P});var R=X,F={setup(){const{error:e,logout:n}=V(),t=(0,K.rd)(),{user:a}=R(),o=async()=>{await n();e.value||t.push({name:"login"})};return{user:a,handleLogout:o}}},I=t(1241);const x=(0,I.A)(F,[["render",v]]);var A=x,N={components:{Navbar:A},setup(){}};const O=(0,I.A)(N,[["render",u]]);var $=O;function j(e,n,t,a,r,u){const l=(0,o.g2)("PersistentNote");return(0,o.uX)(),(0,o.Wv)(l)}const U=e=>((0,o.Qi)("data-v-94d0c33e"),e=e(),(0,o.jt)(),e),W=U((()=>(0,o.Lk)("label",null,"Forever note:",-1))),H={key:0},J={key:1},q={key:2,disabled:""};function Q(e,n,t,r,u,i){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>r.handleView&&r.handleView(...e))},"View in markdown"),(0,o.Lk)("form",{onSubmit:n[2]||(n[2]=(0,a.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[W,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.note=e)},null,512),[[a.Jo,r.note]]),r.error?((0,o.uX)(),(0,o.CE)("div",H,(0,l.v_)(r.error),1)):(0,o.Q3)("",!0),r.isPending?((0,o.uX)(),(0,o.CE)("button",q,"Saving...")):((0,o.uX)(),(0,o.CE)("button",J,"Save"))],32)],64)}const T=(e,n)=>{const t=(0,k.KR)(""),a=(0,k.KR)(!1),o=async(o,r)=>{t.value="",a.value=!0;try{let t=e,a=o;n&&r&&(t=`${e}/${o}/${n}`,a=r);const u=(0,m.H9)(w,t,a);return await(0,m.x7)(u)}catch(u){t.value="Couldn't retrieve note, try again later..."}finally{a.value=!1}},r=async(o,r,u)=>{t.value="",a.value=!0;try{let t=e,a=o;n&&u&&(t=`${e}/${o}/${n}`,a=u);const l=(0,m.H9)(w,t,a);return await(0,m.BN)(l,r)}catch(l){t.value=l.message}finally{a.value=!1}},u=async(o,r)=>{t.value="",a.value=!0;try{let t=e,a=o;n&&r&&(t=`${e}/${o}/${n}`,a=r);const u=(0,m.H9)(w,t,a);return await(0,m.kd)(u)}catch(u){t.value=u.message}finally{a.value=!1}},l=async(n,o)=>{t.value="",a.value=!0;try{const t=(0,m.H9)(w,e,n);return await(0,m.mZ)(t,o)}catch(r){t.value=r.message}finally{a.value=!1}};return{getDocument:o,addDocument:r,deleteDocument:u,updateDocument:l,error:t,isPending:a}};var M=T,B=t(1274),G={setup(){const e=(0,k.KR)(""),n=(0,K.rd)(),{user:t}=R(),{getDocument:a,addDocument:r,deleteDocument:u,updateDocument:l,error:i,isPending:s}=M("notes"),d=async()=>{let n={payload:e.value,modifiedAt:B.Dc.fromDate(new Date)};await r(t.value.uid,n)},c=async()=>{await d(),n.push({name:"viewer"})};return(0,o.sV)((async()=>{const n=await a(t.value.uid);n.exists()&&(e.value=n.data().payload)})),{error:i,isPending:s,note:e,handleSubmit:d,handleView:c}}};const z=(0,I.A)(G,[["render",Q],["__scopeId","data-v-94d0c33e"]]);var Y=z,Z={name:"HomeView",components:{PersistentNote:Y}};const ee=(0,I.A)(Z,[["render",j]]);var ne=ee;const te=e=>((0,o.Qi)("data-v-4195a422"),e=e(),(0,o.jt)(),e),ae={class:"welcome"},oe={key:0},re={key:1,disabled:""},ue=te((()=>(0,o.Lk)("div",null,null,-1)));function le(e,n,t,r,u,l){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",ae,[(0,o.Lk)("form",{onSubmit:n[2]||(n[2]=(0,a.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{type:"email",placeholder:"email","onUpdate:modelValue":n[0]||(n[0]=e=>r.email=e),required:""},null,512),[[a.Jo,r.email]]),(0,o.bo)((0,o.Lk)("input",{type:"password",placeholder:"password","onUpdate:modelValue":n[1]||(n[1]=e=>r.password=e),required:""},null,512),[[a.Jo,r.password]]),(0,o.Lk)("p",null,[(0,o.eW)(" Not a user yet? "),(0,o.bF)(i,{class:"welcome-alt",to:"signup"},{default:(0,o.k6)((()=>[(0,o.eW)("Signup now!")])),_:1})]),r.isPending?((0,o.uX)(),(0,o.CE)("button",re,"Logging in...")):((0,o.uX)(),(0,o.CE)("button",oe,"Login"))],32),ue])}var ie={setup(){const e=(0,k.KR)(""),n=(0,k.KR)(""),t=(0,K.rd)(),{error:a,isPending:o,login:r}=V(),u=async()=>{await r(e.value,n.value);a.value?console.log(a.value):await t.push({name:"home"})};return{email:e,password:n,error:a,isPending:o,handleSubmit:u}}};const se=(0,I.A)(ie,[["render",le],["__scopeId","data-v-4195a422"]]);var de=se;const ce={class:"welcome"},ve={key:0},pe={key:1,disabled:""};function me(e,n,t,r,u,l){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",ce,[(0,o.Lk)("form",{onSubmit:n[2]||(n[2]=(0,a.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{type:"email",placeholder:"email","onUpdate:modelValue":n[0]||(n[0]=e=>r.email=e),required:""},null,512),[[a.Jo,r.email]]),(0,o.bo)((0,o.Lk)("input",{type:"password",placeholder:"password","onUpdate:modelValue":n[1]||(n[1]=e=>r.password=e),required:""},null,512),[[a.Jo,r.password]]),(0,o.Lk)("p",null,[(0,o.eW)(" Already a user? "),(0,o.bF)(i,{class:"welcome-alt",to:"login"},{default:(0,o.k6)((()=>[(0,o.eW)("Login now!")])),_:1})]),r.isPending?((0,o.uX)(),(0,o.CE)("button",pe,"Signing up...")):((0,o.uX)(),(0,o.CE)("button",ve,"Signup"))],32)])}var ge={setup(){const e=(0,k.KR)(""),n=(0,k.KR)(""),t=(0,K.rd)(),{error:a,isPending:o,signup:r}=V(),u=async()=>{await r(e.value,n.value);a.value?console.log(a.value):t.push({name:"home"})};return{email:e,password:n,error:a,isPending:o,handleSubmit:u}}};const he=(0,I.A)(ge,[["render",me],["__scopeId","data-v-358ce3c8"]]);var ye=he;const be={class:"daily-notes"};function fe(e,n,t,a,r,u){const l=(0,o.g2)("NoteCalendar"),i=(0,o.g2)("DailyNote");return(0,o.uX)(),(0,o.CE)("div",be,[(0,o.bF)(l,{onChangedDate:a.handleDate},null,8,["onChangedDate"]),(0,o.bF)(i,{selectedDate:a.selectedDate},null,8,["selectedDate"])])}const we=e=>((0,o.Qi)("data-v-725d81e4"),e=e(),(0,o.jt)(),e),ke=we((()=>(0,o.Lk)("label",null,"Daily Note:",-1))),De={key:0},Ce={key:1},Le={key:2,disabled:""};function Se(e,n,t,r,u,i){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>r.handleView&&r.handleView(...e))},"View in markdown"),(0,o.Lk)("form",{onSubmit:n[2]||(n[2]=(0,a.D$)(((...e)=>r.handleSubmit&&r.handleSubmit(...e)),["prevent"]))},[ke,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.note=e)},null,512),[[a.Jo,r.note]]),r.error?((0,o.uX)(),(0,o.CE)("div",De,(0,l.v_)(r.error),1)):(0,o.Q3)("",!0),r.isPending?((0,o.uX)(),(0,o.CE)("button",Le,"Saving...")):((0,o.uX)(),(0,o.CE)("button",Ce,"Save"))],32)],64)}var Ee={props:["selectedDate"],setup(e,n){const t=(0,k.KR)(""),{user:a}=R(),{getDocument:r,addDocument:u,deleteDocument:l,error:i,isPending:s}=M("notes","daily"),d=(0,K.rd)(),c=async()=>{if(!t.value)return void await l(a.value.uid,e.selectedDate);let n={payload:t.value};await u(a.value.uid,n,e.selectedDate)},v=async()=>{const n=await r(a.value.uid,e.selectedDate);n.exists()?t.value=n.data().payload:t.value=""},p=async()=>{await c(),d.push({name:"dailyViewer",params:{id:e.selectedDate}})};return(0,o.sV)(v),(0,o.wB)(e,v),{error:i,note:t,handleSubmit:c,handleView:p,isPending:s}}};const _e=(0,I.A)(Ee,[["render",Se],["__scopeId","data-v-725d81e4"]]);var Ve=_e;const Ke={class:"note-calendar"};function Pe(e,n,t,a,r,u){const l=(0,o.g2)("DatePicker");return(0,o.uX)(),(0,o.CE)("div",Ke,[(0,o.bF)(l,{onClick:a.emitSelectedDate,attributes:a.attrs,modelValue:a.date,"onUpdate:modelValue":n[0]||(n[0]=e=>a.date=e),"is-required":!0},null,8,["onClick","attributes","modelValue"])])}var Xe=t(1999);const Re=()=>{const e=async e=>{const n=(0,k.KR)(null),t=(0,k.KR)([]);try{const n=(0,m.rJ)(w,e),a=(0,m.P)(n),o=await(0,m.GG)(a);return t.value=o.docs.map((e=>e.id)),{iDs:t.value}}catch(a){n.value=a.message}};return{getDocumentIds:e}};var Fe=Re,Ie={components:{DatePicker:Xe.lr},setup(e,n){const t=(0,k.KR)(new Date),a=(0,k.KR)(null),r=(0,k.KR)(t.value.toISOString().substring(0,10)),{user:u}=R(),{getDocumentIds:l}=Fe(),i=()=>{r.value=t.value.toISOString().substring(0,10),n.emit("changedDate",r.value),l(`notes/${u.value.uid}/daily`).then((e=>{a.value=[{dot:!0,dates:e.iDs}]}))};return(0,o.sV)(i),{date:t,selectedDate:r,emitSelectedDate:i,attrs:a}}};const xe=(0,I.A)(Ie,[["render",Pe]]);var Ae=xe,Ne={name:"HomeView",components:{DailyNote:Ve,NoteCalendar:Ae},setup(){const e=(0,k.KR)(null),n=n=>{e.value=n};return{handleDate:n,selectedDate:e}}};const Oe=(0,I.A)(Ne,[["render",fe]]);var $e=Oe;const je={class:"markdown-view"},Ue=["innerHTML"];function We(e,n,t,a,r,u){return(0,o.uX)(),(0,o.CE)("div",je,[(0,o.Lk)("div",{class:"line-numbers language-markup",innerHTML:a.formattedContent},null,8,Ue)])}var He=t(6824),Je=t(1017),qe=t.n(Je),Qe=(t(7316),t(924),t(5140),t(9228),{props:["id"],components:{},setup(e){const n=(0,k.KR)(""),t=(0,k.KR)(""),{user:a}=R(),{getDocument:r,error:u}=M("notes","daily");return He.xI.use({highlight:(e,n)=>qe().languages[n]?qe().highlight(e,qe().languages[n],n):e}),(0,o.sV)((async()=>{const o=await r(a.value.uid,e.id);o.exists()&&(n.value=o.data().payload,t.value=He.xI.parse(n.value),qe().highlightAll())})),{error:u,formattedContent:t}}});const Te=(0,I.A)(Qe,[["render",We],["__scopeId","data-v-db286042"]]);var Me=Te;function Be(e,n,t){f.currentUser?t():t({name:"login"})}const Ge=[{path:"/",name:"home",component:ne,beforeEnter:Be},{path:"/daily",name:"daily",component:$e},{path:"/viewer",name:"viewer",component:Me},{path:"/viewer/:id",name:"dailyViewer",component:Me,props:!0},{path:"/login",name:"login",component:de},{path:"/signup",name:"signup",component:ye}],ze=(0,K.aE)({history:(0,K.LA)("/"),routes:Ge});var Ye=ze;let Ze=null;(0,g.hg)(f,(e=>{Ze||(Ze=(0,a.Ef)($).use(Ye).mount("#app"))}))}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var u=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],r=e[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&r||u>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[i])}))?a.splice(i--,1):(l=!1,r<u&&(u=r));if(l){e.splice(d--,1);var s=o();void 0!==s&&(n=s)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,u=a[0],l=a[1],i=a[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(i)var d=i(t)}for(n&&n(a);s<u.length;s++)r=u[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},a=self["webpackChunkmy_note_app"]=self["webpackChunkmy_note_app"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(1370)}));a=t.O(a)})();
//# sourceMappingURL=app.6e55f425.js.map