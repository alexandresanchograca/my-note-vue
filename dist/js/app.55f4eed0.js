(()=>{"use strict";var e={5550:(e,n,t)=>{t(3792),t(3362),t(9085),t(9391);var r=t(5130),a=t(6768),u={class:"content"};function o(e,n,t,r,o,i){var s=(0,a.g2)("Navbar"),c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(s),(0,a.Lk)("div",u,[(0,a.bF)(c)])],64)}var i=t(4232),s={class:"navbar"},c={class:"links"},l={key:0},p={class:"user-status"},d={key:1};function v(e,n,t,r,u,o){var v=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("nav",null,[(0,a.Lk)("h1",null,[(0,a.bF)(v,{to:{name:"home"}},{default:(0,a.k6)((function(){return[(0,a.eW)("My-Note")]})),_:1})]),(0,a.Lk)("div",c,[r.user?((0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(v,{to:{name:"home"}},{default:(0,a.k6)((function(){return[(0,a.eW)("Forever Note")]})),_:1}),(0,a.bF)(v,{to:{name:"daily"}},{default:(0,a.k6)((function(){return[(0,a.eW)("Daily Notes")]})),_:1}),(0,a.Lk)("span",p,"Logged in "+(0,i.v_)(r.user.email),1),(0,a.Lk)("button",{onClick:n[0]||(n[0]=function(){return r.handleLogout&&r.handleLogout.apply(r,arguments)})},"Logout")])):((0,a.uX)(),(0,a.CE)("div",d,[(0,a.bF)(v,{class:"btn",to:{name:"signup"}},{default:(0,a.k6)((function(){return[(0,a.eW)("Signup")]})),_:1}),(0,a.bF)(v,{class:"btn",to:{name:"login"}},{default:(0,a.k6)((function(){return[(0,a.eW)("Login")]})),_:1})]))])])])}var f=t(4048),h=t(388),m=(t(4114),t(6280),t(6918),t(6400)),w=t(8822),k=t(2126),b=t(7844),g={apiKey:"AIzaSyDT8G6-tLNkusP1UpAe8Ix5rqE_7Yjb4Ok",authDomain:"my-notes-app-224e4.firebaseapp.com",projectId:"my-notes-app-224e4",storageBucket:"my-notes-app-224e4.appspot.com",messagingSenderId:"447538367879",appId:"1:447538367879:web:ea462636db079dc6585722"},y=(0,m.Wp)(g),A=(0,k.xI)(y),x=(0,w.aU)(),C=((0,b.c7)(y),t(144)),D=(0,C.KR)(null),L=(0,C.KR)(!1),S=function(){var e=(0,h.A)((0,f.A)().mark((function e(n,t){var r;return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return D.value=null,L.value=!0,e.prev=2,e.next=5,(0,k.x9)(A,n,t);case 5:if(r=e.sent,r){e.next=8;break}throw new Error("Couldn't sign in...");case 8:return e.abrupt("return",r);case 11:e.prev=11,e.t0=e["catch"](2),D.value=e.t0.message;case 14:return e.prev=14,L.value=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(n,t){return e.apply(this,arguments)}}(),E=function(){var e=(0,h.A)((0,f.A)().mark((function e(n,t){var r;return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return D.value=null,L.value=!0,e.prev=2,e.next=5,(0,k.eJ)(A,n,t);case 5:if(r=e.sent,r){e.next=8;break}throw new Error("Couldn't sign up...");case 8:return e.abrupt("return",r);case 11:e.prev=11,e.t0=e["catch"](2),D.value=e.t0.message;case 14:return e.prev=14,L.value=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(n,t){return e.apply(this,arguments)}}(),_=function(){var e=(0,h.A)((0,f.A)().mark((function e(){return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return D.value=null,e.prev=1,e.next=4,(0,k.CI)(A);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1),D.value=e.t0.message;case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){return{error:D,isPending:L,login:S,logout:_,signup:E}};const V=K;var R=t(1387),X=(0,C.KR)(A.currentUser);(0,k.hg)(A,(function(e){X.value=e}));var P=function(){return{user:X}};const I=P,N={setup:function(){var e=V(),n=e.error,t=e.logout,r=(0,R.rd)(),a=I(),u=a.user,o=function(){var e=(0,h.A)((0,f.A)().mark((function e(){return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(e.sent,!n.value){e.next=5;break}return e.abrupt("return");case 5:r.push({name:"login"});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{user:u,handleLogout:o}}};var F=t(1241);const O=(0,F.A)(N,[["render",v],["__scopeId","data-v-2d2e2efa"]]),U=O,j={components:{Navbar:U},setup:function(){}},W=(0,F.A)(j,[["render",o]]),H=W;function J(e,n,t,r,u,o){var i=(0,a.g2)("PersistentNote");return(0,a.uX)(),(0,a.Wv)(i)}var Q=function(e){return(0,a.Qi)("data-v-1360ff01"),e=e(),(0,a.jt)(),e},q={class:"note-content"},B={class:"saved-status"},T=Q((function(){return(0,a.Lk)("label",{class:"note-label"},"Forever note:",-1)})),G={key:0},M={key:1},$={key:2,disabled:""};function z(e,n,t,u,o,s){return(0,a.uX)(),(0,a.CE)("div",q,[(0,a.Lk)("button",{onClick:n[0]||(n[0]=function(){return u.handleView&&u.handleView.apply(u,arguments)})},"View in markdown"),(0,a.Lk)("form",{onSubmit:n[2]||(n[2]=(0,r.D$)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[(0,a.bo)((0,a.Lk)("h4",B,"Unsaved note",512),[[r.aG,!u.isNoteSaved]]),T,(0,a.bo)((0,a.Lk)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=function(e){return u.note=e})},null,512),[[r.Jo,u.note]]),u.error?((0,a.uX)(),(0,a.CE)("div",G,(0,i.v_)(u.error),1)):(0,a.Q3)("",!0),u.isPending?((0,a.uX)(),(0,a.CE)("button",$,"Saving...")):((0,a.uX)(),(0,a.CE)("button",M,"Save"))],32)])}t(3288),t(8706);var Y=function(e,n){var t=(0,C.KR)(""),r=(0,C.KR)(!1),a=function(){var a=(0,h.A)((0,f.A)().mark((function a(u,o){var i,s,c;return(0,f.A)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.value="",r.value=!0,a.prev=2,i=e,s=u,n&&o&&(i="".concat(e,"/").concat(u,"/").concat(n),s=o),c=(0,w.H9)(x,i,s),a.next=9,(0,w.x7)(c);case 9:return a.abrupt("return",a.sent);case 12:a.prev=12,a.t0=a["catch"](2),t.value="Couldn't retrieve note, try again later...";case 15:return a.prev=15,r.value=!1,a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[2,12,15,18]])})));return function(e,n){return a.apply(this,arguments)}}(),u=function(){var a=(0,h.A)((0,f.A)().mark((function a(u,o,i){var s,c,l;return(0,f.A)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.value="",r.value=!0,a.prev=2,s=e,c=u,n&&i&&(s="".concat(e,"/").concat(u,"/").concat(n),c=i),l=(0,w.H9)(x,s,c),a.next=9,(0,w.BN)(l,o);case 9:return a.abrupt("return",a.sent);case 12:a.prev=12,a.t0=a["catch"](2),t.value=a.t0.message;case 15:return a.prev=15,r.value=!1,a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[2,12,15,18]])})));return function(e,n,t){return a.apply(this,arguments)}}(),o=function(){var a=(0,h.A)((0,f.A)().mark((function a(u,o){var i,s,c;return(0,f.A)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.value="",r.value=!0,a.prev=2,i=e,s=u,n&&o&&(i="".concat(e,"/").concat(u,"/").concat(n),s=o),c=(0,w.H9)(x,i,s),a.next=9,(0,w.kd)(c);case 9:return a.abrupt("return",a.sent);case 12:a.prev=12,a.t0=a["catch"](2),t.value=a.t0.message;case 15:return a.prev=15,r.value=!1,a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[2,12,15,18]])})));return function(e,n){return a.apply(this,arguments)}}(),i=function(){var n=(0,h.A)((0,f.A)().mark((function n(a,u){var o;return(0,f.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.value="",r.value=!0,n.prev=2,o=(0,w.H9)(x,e,a),n.next=6,(0,w.mZ)(o,u);case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n["catch"](2),t.value=n.t0.message;case 12:return n.prev=12,r.value=!1,n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,9,12,15]])})));return function(e,t){return n.apply(this,arguments)}}();return{getDocument:a,addDocument:u,deleteDocument:o,updateDocument:i,error:t,isPending:r}};const Z=Y;var ee=t(7981);const ne={setup:function(){var e=(0,C.KR)(""),n=(0,C.KR)(!0),t=(0,R.rd)(),r=I(),u=r.user,o=Z("notes"),i=o.getDocument,s=o.addDocument,c=(o.deleteDocument,o.updateDocument,o.error),l=o.isPending,p=function(){var t=(0,h.A)((0,f.A)().mark((function t(){var r;return(0,f.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={payload:e.value,modifiedAt:ee.Dc.fromDate(new Date)},t.next=3,s(u.value.uid,r);case 3:if(!c.value){t.next=5;break}return t.abrupt("return");case 5:n.value=!0;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var e=(0,h.A)((0,f.A)().mark((function e(){return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t.push({name:"viewer"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.KC)((0,h.A)((0,f.A)().mark((function t(){var r;return(0,f.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i(u.value.uid);case 2:r=t.sent,r.exists()&&(e.value=r.data().payload),(0,a.wB)(e,(function(){n.value=!1}));case 5:case"end":return t.stop()}}),t)})))),{error:c,isPending:l,note:e,isNoteSaved:n,handleSubmit:p,handleView:d}}},te=(0,F.A)(ne,[["render",z],["__scopeId","data-v-1360ff01"]]),re=te,ae={name:"HomeView",components:{PersistentNote:re}},ue=(0,F.A)(ae,[["render",J]]),oe=ue;var ie=function(e){return(0,a.Qi)("data-v-04e01b1c"),e=e(),(0,a.jt)(),e},se={class:"welcome"},ce=ie((function(){return(0,a.Lk)("h3",null,"Login",-1)})),le={key:0},pe={key:1,disabled:""},de=ie((function(){return(0,a.Lk)("div",null,null,-1)}));function ve(e,n,t,u,o,i){var s=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",se,[(0,a.Lk)("form",{onSubmit:n[2]||(n[2]=(0,r.D$)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[ce,(0,a.bo)((0,a.Lk)("input",{type:"email",placeholder:"email","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.email=e}),required:""},null,512),[[r.Jo,u.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password",placeholder:"password","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.password=e}),required:""},null,512),[[r.Jo,u.password]]),(0,a.Lk)("p",null,[(0,a.eW)(" Not a user yet? "),(0,a.bF)(s,{class:"welcome-alt",to:"signup"},{default:(0,a.k6)((function(){return[(0,a.eW)("Signup now!")]})),_:1})]),u.isPending?((0,a.uX)(),(0,a.CE)("button",pe,"Logging in...")):((0,a.uX)(),(0,a.CE)("button",le,"Login"))],32),de])}const fe={setup:function(){var e=(0,C.KR)(""),n=(0,C.KR)(""),t=(0,R.rd)(),r=V(),a=r.error,u=r.isPending,o=r.login,i=function(){var r=(0,h.A)((0,f.A)().mark((function r(){return(0,f.A)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o(e.value,n.value);case 2:if(r.sent,!a.value){r.next=6;break}return console.log(a.value),r.abrupt("return");case 6:return r.next=8,t.push({name:"home"});case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{email:e,password:n,error:a,isPending:u,handleSubmit:i}}},he=(0,F.A)(fe,[["render",ve],["__scopeId","data-v-04e01b1c"]]),me=he;var we=function(e){return(0,a.Qi)("data-v-2cc9f753"),e=e(),(0,a.jt)(),e},ke={class:"welcome"},be=we((function(){return(0,a.Lk)("h3",null,"Sign up",-1)})),ge={key:0},ye={key:1,disabled:""};function Ae(e,n,t,u,o,i){var s=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",ke,[(0,a.Lk)("form",{onSubmit:n[2]||(n[2]=(0,r.D$)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[be,(0,a.bo)((0,a.Lk)("input",{type:"email",placeholder:"email","onUpdate:modelValue":n[0]||(n[0]=function(e){return u.email=e}),required:""},null,512),[[r.Jo,u.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password",placeholder:"password","onUpdate:modelValue":n[1]||(n[1]=function(e){return u.password=e}),required:""},null,512),[[r.Jo,u.password]]),(0,a.Lk)("p",null,[(0,a.eW)(" Already a user? "),(0,a.bF)(s,{class:"welcome-alt",to:"login"},{default:(0,a.k6)((function(){return[(0,a.eW)("Login now!")]})),_:1})]),u.isPending?((0,a.uX)(),(0,a.CE)("button",ye,"Signing up...")):((0,a.uX)(),(0,a.CE)("button",ge,"Signup"))],32)])}const xe={setup:function(){var e=(0,C.KR)(""),n=(0,C.KR)(""),t=(0,R.rd)(),r=V(),a=r.error,u=r.isPending,o=r.signup,i=function(){var r=(0,h.A)((0,f.A)().mark((function r(){return(0,f.A)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o(e.value,n.value);case 2:if(r.sent,!a.value){r.next=6;break}return console.log(a.value),r.abrupt("return");case 6:t.push({name:"home"});case 7:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{email:e,password:n,error:a,isPending:u,handleSubmit:i}}},Ce=(0,F.A)(xe,[["render",Ae],["__scopeId","data-v-2cc9f753"]]),De=Ce;var Le={class:"daily-content"},Se={class:"daily-notes"};function Ee(e,n,t,r,u,o){var i=(0,a.g2)("NoteCalendar"),s=(0,a.g2)("DailyNote");return(0,a.uX)(),(0,a.CE)("div",Le,[(0,a.Lk)("button",{onClick:n[0]||(n[0]=function(e){return r.wasViewClicked=!0})},"View in markdown"),(0,a.Lk)("div",Se,[(0,a.bF)(i,{class:"calendar-col",onChangedDate:r.handleDate},null,8,["onChangedDate"]),(0,a.bF)(s,{class:"note-col",selectedDate:r.selectedDate,wasViewClicked:r.wasViewClicked},null,8,["selectedDate","wasViewClicked"])])])}var _e=function(e){return(0,a.Qi)("data-v-4b5a154a"),e=e(),(0,a.jt)(),e},Ke={key:0,class:"saved-status"},Ve=_e((function(){return(0,a.Lk)("label",{class:"note-label"},"Daily Note:",-1)})),Re={key:1},Xe={key:2},Pe={key:3,disabled:""};function Ie(e,n,t,u,o,s){return(0,a.uX)(),(0,a.CE)("form",{onSubmit:n[1]||(n[1]=(0,r.D$)((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"]))},[u.isNoteSaved?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("h4",Ke,"Unsaved note")),Ve,(0,a.bo)((0,a.Lk)("textarea",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return u.note=e})},null,512),[[r.Jo,u.note]]),u.error?((0,a.uX)(),(0,a.CE)("div",Re,(0,i.v_)(u.error),1)):(0,a.Q3)("",!0),u.isPending?((0,a.uX)(),(0,a.CE)("button",Pe,"Saving...")):((0,a.uX)(),(0,a.CE)("button",Xe,"Save"))],32)}const Ne={props:["selectedDate","wasViewClicked"],setup:function(e,n){var t=(0,C.KR)(""),r=(0,C.KR)(!0),u=(0,C.KR)(!0),o=I(),i=o.user,s=Z("notes","daily"),c=s.getDocument,l=s.addDocument,p=s.deleteDocument,d=s.error,v=s.isPending,m=(0,R.rd)(),w=function(){var n=(0,h.A)((0,f.A)().mark((function n(){var a;return(0,f.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.value){n.next=8;break}return n.next=3,p(i.value.uid,e.selectedDate);case 3:if(!d.value){n.next=5;break}return n.abrupt("return");case 5:r.value=!0,n.next=14;break;case 8:return a={payload:t.value},n.next=11,l(i.value.uid,a,e.selectedDate);case 11:if(!d.value){n.next=13;break}return n.abrupt("return");case 13:r.value=!0;case 14:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=(0,h.A)((0,f.A)().mark((function n(){var a;return(0,f.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c(i.value.uid,e.selectedDate);case 2:a=n.sent,a.exists()?t.value=a.data().payload:t.value="",u.value=!0,r.value=!0;case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=function(){var n=(0,h.A)((0,f.A)().mark((function n(){return(0,f.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,w();case 2:m.push({name:"dailyViewer",params:{id:e.selectedDate}});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){e.wasViewClicked?b():k()};return(0,a.KC)((0,h.A)((0,f.A)().mark((function n(){return(0,f.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:(0,a.wB)(e,g),(0,a.wB)(t,(function(){u.value?u.value=!1:r.value=!1}));case 2:case"end":return n.stop()}}),n)})))),{error:d,note:t,isNoteSaved:r,handleSubmit:w,handleView:b,isPending:v}}},Fe=(0,F.A)(Ne,[["render",Ie],["__scopeId","data-v-4b5a154a"]]),Oe=Fe;var Ue={class:"note-calendar"};function je(e,n,t,r,u,o){var i=(0,a.g2)("DatePicker");return(0,a.uX)(),(0,a.CE)("div",Ue,[(0,a.bF)(i,{transparent:"",onClick:r.emitSelectedDate,attributes:r.attrs,modelValue:r.date,"onUpdate:modelValue":n[0]||(n[0]=function(e){return r.date=e}),"is-required":!0},null,8,["onClick","attributes","modelValue"])])}t(1688);var We=t(9479),He=(t(2062),function(){var e=function(){var e=(0,h.A)((0,f.A)().mark((function e(n){var t,r,a,u,o;return(0,f.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=(0,C.KR)(null),r=(0,C.KR)([]),e.prev=2,a=(0,w.rJ)(x,n),u=(0,w.P)(a),e.next=7,(0,w.GG)(u);case 7:return o=e.sent,r.value=o.docs.map((function(e){return e.id})),e.abrupt("return",{iDs:r.value});case 12:e.prev=12,e.t0=e["catch"](2),t.value=e.t0.message;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}();return{getDocumentIds:e}});const Je=He,Qe={components:{DatePicker:We.lr},setup:function(e,n){var t=(0,C.KR)(new Date),r=(0,C.KR)(null),u=(0,C.KR)(t.value.toISOString().substring(0,10)),o=I(),i=o.user,s=Je(),c=s.getDocumentIds,l=function(){u.value=t.value.toISOString().substring(0,10),n.emit("changedDate",u.value),c("notes/".concat(i.value.uid,"/daily")).then((function(e){r.value=[{dot:!0,dates:e.iDs}]}))};return(0,a.sV)(l),{date:t,selectedDate:u,emitSelectedDate:l,attrs:r}}},qe=(0,F.A)(Qe,[["render",je]]),Be=qe,Te={name:"HomeView",components:{DailyNote:Oe,NoteCalendar:Be},setup:function(){var e=(0,C.KR)(null),n=(0,C.KR)(!1),t=function(n){e.value=n};return{handleDate:t,wasViewClicked:n,selectedDate:e}}},Ge=(0,F.A)(Te,[["render",Ee],["__scopeId","data-v-49386788"]]),Me=Ge;var $e={class:"markdown-view"},ze=["innerHTML"];function Ye(e,n,t,r,u,o){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("button",{onClick:n[0]||(n[0]=function(){return r.handleClick&&r.handleClick.apply(r,arguments)})},"Back"),(0,a.Lk)("div",$e,[(0,a.Lk)("div",{class:"line-numbers language-markup",innerHTML:r.formattedContent},null,8,ze)])],64)}var Ze=t(6824),en=t(1017),nn=t.n(en);t(7316),t(924),t(5140),t(6847);const tn={props:["id"],components:{},setup:function(e){var n=(0,C.KR)(""),t=(0,C.KR)(""),r=I(),u=r.user,o=Z("notes","daily"),i=o.getDocument,s=o.error,c=(0,R.rd)();Ze.xI.use({highlight:function(e,n){return nn().languages[n]?nn().highlight(e,nn().languages[n],n):e}}),(0,a.sV)((0,h.A)((0,f.A)().mark((function r(){var a;return(0,f.A)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i(u.value.uid,e.id);case 2:a=r.sent,a.exists()&&(n.value=a.data().payload,t.value=Ze.xI.parse(n.value),nn().highlightAll());case 4:case"end":return r.stop()}}),r)}))));var l=function(){c.go(-1)};return{error:s,formattedContent:t,handleClick:l}}},rn=(0,F.A)(tn,[["render",Ye]]),an=rn;function un(e,n,t){A.currentUser?t():t({name:"login"})}var on=[{path:"/",name:"home",component:oe,beforeEnter:un},{path:"/daily",name:"daily",component:Me},{path:"/viewer",name:"viewer",component:an},{path:"/viewer/:id",name:"dailyViewer",component:an,props:!0},{path:"/login",name:"login",component:me},{path:"/signup",name:"signup",component:De}],sn=(0,R.aE)({history:(0,R.LA)("/"),routes:on});const cn=sn;var ln=null;(0,k.hg)(A,(function(e){ln||(ln=(0,r.Ef)(H).use(cn).mount("#app"))}))}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var u=n[r]={exports:{}};return e[r].call(u.exports,u,u.exports,t),u.exports}t.m=e,(()=>{var e=[];t.O=(n,r,a,u)=>{if(!r){var o=1/0;for(l=0;l<e.length;l++){for(var[r,a,u]=e[l],i=!0,s=0;s<r.length;s++)(!1&u||o>=u)&&Object.keys(t.O).every((e=>t.O[e](r[s])))?r.splice(s--,1):(i=!1,u<o&&(o=u));if(i){e.splice(l--,1);var c=a();void 0!==c&&(n=c)}}return n}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,a,u]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={524:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var a,u,[o,i,s]=r,c=0;if(o.some((n=>0!==e[n]))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var l=s(t)}for(n&&n(r);c<o.length;c++)u=o[c],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(l)},r=self["webpackChunkmy_note_app"]=self["webpackChunkmy_note_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[504],(()=>t(5550)));r=t.O(r)})();
//# sourceMappingURL=app.55f4eed0.js.map