(this["webpackJsonpcivil-mcq"]=this["webpackJsonpcivil-mcq"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(14),s=n.n(i),o=(n(107),n(108),n(16)),r=n.n(o),l=n(22),u=n(12),j=n(157),d=n(162),b=n(164),h=n(90),p=n(91),f=n(74),x=(n(110),n(112),{apiKey:"AIzaSyCQvY05zxNwBf6FOeQkccGbOOhIY1UIIJ0",authDomain:"civil-mcq-45d89.firebaseapp.com",projectId:"civil-mcq-45d89",storageBucket:"civil-mcq-45d89.appspot.com",messagingSenderId:"948388795290",appId:"1:948388795290:web:34a69ce8d39a5240746023",measurementId:"G-S76Y78YD7G"}),O=new(function(){function e(){Object(h.a)(this,e),f.a.initializeApp(x),this.auth=f.a.auth(),this.db=f.a.firestore()}return Object(p.a)(e,[{key:"dbreturns",value:function(){return this.db}},{key:"addQuestion",value:function(e,t,n,c,a,i,s,o){var r={id:e,question:t,category:n,optionA:c,optionB:a,optionC:i,optionD:s,correct:o,uid:(new Date).getTime()};this.db.collection("questions").doc(r.uid.toString()).set(r).then((function(){alert("Sucess : New Question Added")})).catch((function(e){alert("Failure : New Question NOT Added  "+e)}))}},{key:"addTopics",value:function(e,t){var n={Topicname:e,countsection:t,uid:(new Date).getTime()};this.db.collection("Topics").doc(n.uid.toString()).set(n).then((function(){alert("Success : New Topic Added")})).catch((function(e){alert("Failure : New Question NOT Added  "+e)}))}},{key:"addTopics2",value:function(e,t){var n={Topicname2:e,countsection2:t,uid:(new Date).getTime()};this.db.collection("Topics2").doc(n.uid.toString()).set(n).then((function(){alert("Success : New Topic Added")})).catch((function(e){alert("Failure : New Question NOT Added  "+e)}))}},{key:"isInitialized",value:function(){var e=this;return new Promise((function(t){e.auth.onAuthStateChanged(t)}))}}]),e}()),m=n(2),v=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function g(){var e=v(),t=a.a.useState(""),n=Object(u.a)(t,2),c=n[0],i=n[1],s=a.a.useState(""),o=Object(u.a)(s,2),j=o[0],h=o[1],p=a.a.useState(""),f=Object(u.a)(p,2),x=f[0],g=f[1],w=a.a.useState(""),y=Object(u.a)(w,2),S=y[0],N=y[1],T=a.a.useState(""),C=Object(u.a)(T,2),k=C[0],F=C[1],I=a.a.useState(""),q=Object(u.a)(I,2),A=q[0],D=q[1],B=a.a.useState(""),M=Object(u.a)(B,2),Q=M[0],z=M[1],W=a.a.useState(""),L=Object(u.a)(W,2),E=L[0],V=L[1];function H(){return(H=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.addQuestion(c,j,x,S,k,A,Q,E);case 3:i(""),h(""),g(""),N(""),F(""),D(""),z(""),V(""),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(m.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{id:"standard-multiline-flexible",label:"Question--ID",multiline:!0,placeholder:"Id",rowsMax:4,value:c,onChange:function(e){i(e.target.value)}}),Object(m.jsx)(d.a,{id:"standard-multiline-static",label:"Questions",multiline:!0,rows:4,placeholder:"Question",value:j,onChange:function(e){h(e.target.value)}}),Object(m.jsx)(d.a,{id:"standard-multiline-flexible",label:"Category",multiline:!0,placeholder:"Category",rowsMax:4,value:x,onChange:function(e){g(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{id:"filled-multiline-flexible",label:"Aoption",multiline:!0,rowsMax:4,placeholder:"OptionA",value:S,onChange:function(e){N(e.target.value)},variant:"filled"}),Object(m.jsx)(d.a,{id:"filled-textarea",label:"Boption",placeholder:"OptionB",multiline:!0,value:k,onChange:function(e){F(e.target.value)},variant:"filled"}),Object(m.jsx)(d.a,{id:"filled-multiline-static",label:"Coption",multiline:!0,rows:4,placeholder:"optionc",value:A,onChange:function(e){D(e.target.value)},variant:"filled"}),Object(m.jsx)(d.a,{id:"filled-multiline-static",label:"Doption",multiline:!0,rows:4,placeholder:"optiond",value:Q,onChange:function(e){z(e.target.value)},variant:"filled"}),Object(m.jsx)(d.a,{id:"filled-multiline-static",label:"Correct-answer",multiline:!0,rows:4,placeholder:"correct answer",value:E,onChange:function(e){V(e.target.value)},variant:"filled"})]}),Object(m.jsx)(b.a,{onClick:function(){!function(){H.apply(this,arguments)}()},children:"ADD"})]})}var w=n(27),y=n(19),S=(n(78),n(166)),N=n(81),T=n.n(N),C=(n(118),n(163)),k=n(165),F=n(161);n(119);function I(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(C.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(m.jsx)(C.a.Brand,{href:"/",children:"CIVIL-MCQ"}),Object(m.jsx)(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(C.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsxs)(k.a,{className:"mr-auto",children:[Object(m.jsx)(k.a.Link,{href:"/",children:"Home"}),Object(m.jsx)(k.a.Link,{href:"/",children:"Paid-Material"}),Object(m.jsxs)(F.a,{title:"Sections",id:"collasible-nav-dropdown",children:[Object(m.jsx)(F.a.Item,{href:"/Building-Materials",children:"Building-Materials"}),Object(m.jsx)(F.a.Item,{href:"#action/3.2",children:"Section-2"}),Object(m.jsx)(F.a.Item,{href:"#action/3.3",children:"Section-3"})]})]}),Object(m.jsx)(k.a,{children:Object(m.jsx)(k.a.Link,{eventKey:2,href:"#memes",children:"Login"})})]})]})})}var q=Object(y.g)((function(e){e.history;var t,n,i=a.a.useState([]),s=Object(u.a)(i,2),o=s[0],j=s[1],d=a.a.useState([]),b=Object(u.a)(d,2),h=b[0],p=b[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.db.collection("Topics").get().then((function(e){t=e.docs.map((function(e){return e.data()})),console.log(t),console.log(t[0]),j(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.db.collection("Topics2").get().then((function(e){n=e.docs.map((function(e){return e.data()})),console.log(n),console.log(n[0]),p(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),c()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)(S.a,{style:{fontSize:"14px",fontFamily:"arial",fontWeight:"bold"},children:[Object(m.jsx)(S.a.Item,{href:"#",children:"Home"}),Object(m.jsx)(S.a.Item,{active:!0,style:{color:"green"},children:"List of Topics"})]}),Object(m.jsxs)("div",{className:"row ",style:{marginTop:"15px"},children:[Object(m.jsx)("div",{className:"col-lg-6 col-sm-12  d-flex justify-content-center topics",children:o.map((function(e){return Object(m.jsxs)(w.b,{className:"formargin",to:"/1/".concat(e.Topicname),children:[Object(m.jsx)(T.a,{}),e.Topicname]})}))}),Object(m.jsx)("div",{className:"col-lg-6 col-sm-12  d-flex justify-content-center topics",children:h.map((function(e){return Object(m.jsxs)(w.b,{className:"formargin",to:"/2/".concat(e.Topicname2),children:[Object(m.jsx)(T.a,{}),e.Topicname2]})}))})]})]})]})})),A=(n(89),n(71)),D=n.n(A),B=n(72);var M=Object(y.g)((function(e){e.history;var t,n=Object(y.f)().topic,i=a.a.useState([]),s=Object(u.a)(i,2),o=s[0],j=s[1],d=a.a.useState(null),h=Object(u.a)(d,2),p=h[0],f=h[1],x=a.a.useState([]),v=Object(u.a)(x,2),g=v[0],N=v[1],T=a.a.useState(null),C=Object(u.a)(T,2),k=C[0],F=C[1];return Object(c.useEffect)((function(){var e,c=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.db.collection("questions").where("category","==","".concat(n)).get().then((function(e){t=e.docs.map((function(e){return e.data()})),console.log(t),console.log(t[0]),j(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var t=Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.db.collection("Topics").where("Topicname","==","".concat(n)).get().then((function(t){e=t.docs.map((function(e){return e.data()})),console.log(e),console.log(e[0]),N(e[0]),F(e[0].countsection),console.log(g.Topicname),console.log(k)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c(),a()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)(S.a,{style:{fontSize:"14px",fontFamily:"arial",fontWeight:"bold"},children:[Object(m.jsx)(S.a.Item,{href:"/",children:"Home"}),Object(m.jsx)(S.a.Item,{href:"#",children:n}),Object(m.jsx)(S.a.Item,{active:!0,style:{color:"green"},children:"Section 1"})]}),Object(m.jsx)("div",{className:"row d-flex justify-content-center",children:Object(m.jsxs)("div",{className:" sectionbox",children:[Object(m.jsxs)("h3",{class:"overview",style:{fontSize:"20px",fontFamily:"arial",fontWeight:"bold"},children:[Object(m.jsx)("span",{class:"ib-gray",children:"Exercise :: "}),n," - Section 1"]}),function(){var e=[];return B.a.times(k,(function(t){e.push(Object(m.jsxs)(w.b,{className:"formargin1",to:"/".concat(g.Topicname,"/").concat(t+1),children:[Object(m.jsx)(D.a,{}),n," - Section ",t+1]}))})),Object(m.jsx)(m.Fragment,{children:e})}()]})}),o&&o.map((function(e){return Object(m.jsxs)("div",{className:"ques-container",children:[Object(m.jsxs)("p",{children:[e.id,". ",e.question]}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"A."})," ",Object(m.jsx)("span",{children:e.optionA})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"B."})," ",Object(m.jsx)("span",{children:e.optionB})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"C."})," ",Object(m.jsx)("span",{children:e.optionC})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"D."})," ",Object(m.jsx)("span",{children:e.optionD})]})]}),p===e.id?Object(m.jsx)("p",{style:{color:"green",fontSize:"15px",fontFamily:"arial",fontWeight:"bold"},children:e.correct}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)(b.a,{variant:"outlined",style:{background:"white",color:"#007bff",border:"1",fontWeight:"bold"},onClick:function(){f(e.id)},children:"View Answer"}),Object(m.jsx)("hr",{className:"solid"})]})}))]})]})})),Q=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function z(){var e=Q(),t=a.a.useState(""),n=Object(u.a)(t,2),c=n[0],i=n[1],s=a.a.useState(""),o=Object(u.a)(s,2),j=o[0],h=o[1];function p(){return(p=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.addTopics(c,j);case 3:i(""),h(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(m.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{id:"standard-multiline-flexible",label:"Topic name",multiline:!0,placeholder:"topicname",rowsMax:4,value:c,onChange:function(e){i(e.target.value)}}),Object(m.jsx)(d.a,{id:"standard-multiline-static",label:"sections count",multiline:!0,rows:4,placeholder:"cs",value:j,onChange:function(e){h(e.target.value)}})]}),Object(m.jsx)(b.a,{onClick:function(){!function(){p.apply(this,arguments)}()},children:"ADD"})]})}var W=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function L(){var e=W(),t=a.a.useState(""),n=Object(u.a)(t,2),c=n[0],i=n[1],s=a.a.useState(""),o=Object(u.a)(s,2),j=o[0],h=o[1];function p(){return(p=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.addTopics2(c,j);case 3:i(""),h(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(m.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{id:"standard-multiline-flexible",label:"Topic name",multiline:!0,placeholder:"topicname",rowsMax:4,value:c,onChange:function(e){i(e.target.value)}}),Object(m.jsx)(d.a,{id:"standard-multiline-static",label:"sections count",multiline:!0,rows:4,placeholder:"cstwo",value:j,onChange:function(e){h(e.target.value)}})]}),Object(m.jsx)(b.a,{onClick:function(){!function(){p.apply(this,arguments)}()},children:"ADD"})]})}var E=Object(y.g)((function(e){e.history;var t,n=Object(y.f)().topic,i=a.a.useState([]),s=Object(u.a)(i,2),o=s[0],j=s[1],d=a.a.useState(null),h=Object(u.a)(d,2),p=h[0],f=h[1],x=a.a.useState([]),v=Object(u.a)(x,2),g=v[0],N=v[1],T=a.a.useState(null),C=Object(u.a)(T,2),k=C[0],F=C[1];return Object(c.useEffect)((function(){var e,c=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.db.collection("questions").where("category","==","".concat(n)).get().then((function(e){t=e.docs.map((function(e){return e.data()})),console.log(t),console.log(t[0]),j(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var t=Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.db.collection("Topics2").where("Topicname2","==","".concat(n)).get().then((function(t){e=t.docs.map((function(e){return e.data()})),console.log(e),console.log(e[0]),N(e[0]),F(e[0].countsection2),console.log(g.Topicname2),console.log(k)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c(),a()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(I,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)(S.a,{style:{fontSize:"14px",fontFamily:"arial",fontWeight:"bold"},children:[Object(m.jsx)(S.a.Item,{href:"/",children:"Home"}),Object(m.jsx)(S.a.Item,{href:"#",children:n}),Object(m.jsx)(S.a.Item,{active:!0,style:{color:"green"},children:"Section 1"})]}),Object(m.jsx)("div",{className:"row d-flex justify-content-center",children:Object(m.jsxs)("div",{className:" sectionbox",children:[Object(m.jsxs)("h3",{class:"overview",style:{fontSize:"20px",fontFamily:"arial",fontWeight:"bold"},children:[Object(m.jsx)("span",{class:"ib-gray",children:"Exercise :: "}),n," - Section 1"]}),function(){var e=[];return B.a.times(k,(function(t){e.push(Object(m.jsxs)(w.b,{className:"formargin1",to:"/2/".concat(g.Topicname2,"/").concat(t+1),children:[Object(m.jsx)(D.a,{}),n," - Section ",t+1]}))})),Object(m.jsx)(m.Fragment,{children:e})}()]})}),o&&o.map((function(e){return Object(m.jsxs)("div",{className:"ques-container",children:[Object(m.jsxs)("p",{children:[e.id,". ",e.question]}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"A."})," ",Object(m.jsx)("span",{children:e.optionA})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"B."})," ",Object(m.jsx)("span",{children:e.optionB})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"C."})," ",Object(m.jsx)("span",{children:e.optionC})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"question-style",children:"D."})," ",Object(m.jsx)("span",{children:e.optionD})]})]}),p===e.id?Object(m.jsx)("p",{style:{color:"green",fontSize:"15px",fontFamily:"arial",fontWeight:"bold"},children:e.correct}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)(b.a,{variant:"outlined",style:{background:"white",color:"#007bff",border:"1",fontWeight:"bold"},onClick:function(){f(e.id)},children:"View Answer"}),Object(m.jsx)("hr",{className:"solid"})]})}))]})]})}));var V=function(){return Object(m.jsx)(w.a,{children:Object(m.jsxs)(y.c,{children:[Object(m.jsx)(y.a,{exact:!0,path:"/",children:Object(m.jsx)(q,{})}),Object(m.jsx)(y.a,{exact:!0,path:"/add",children:Object(m.jsx)(g,{})}),Object(m.jsx)(y.a,{exact:!0,path:"/addtopics",children:Object(m.jsx)(z,{})}),Object(m.jsx)(y.a,{exact:!0,path:"/addtopics2",children:Object(m.jsx)(L,{})}),Object(m.jsx)(y.a,{exact:!0,path:"/1/:topic",children:Object(m.jsx)(M,{})}),Object(m.jsx)(y.a,{exact:!0,path:"/2/:topic",children:Object(m.jsx)(E,{})}),Object(m.jsx)(y.a,{exact:!0,path:"/:topic/:section",children:Object(m.jsx)(M,{})})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(V,{})}),document.getElementById("root")),H()},89:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.d518b7b1.chunk.js.map