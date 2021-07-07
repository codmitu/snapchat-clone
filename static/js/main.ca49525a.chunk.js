(this["webpackJsonpsnapchat-clone"]=this["webpackJsonpsnapchat-clone"]||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var c,a,i,o,r=t(2),s=t.n(r),l=t(32),j=t.n(l),d=(t(86),t(6)),p=t(12),b=t(34),u=t(13),h=t(7),m=t(36),g=t(120),f=t(64),O=t.n(f),x=t(65),v=t.n(x),w=t(37),y=w.a.initializeApp({apiKey:"AIzaSyAxnTXnMxgolw314eMkRKZubPWLrn_IQrM",authDomain:"linkedin-demo-7c68a.firebaseapp.com",projectId:"linkedin-demo-7c68a",storageBucket:"linkedin-demo-7c68a.appspot.com",messagingSenderId:"266113936266",appId:"1:266113936266:web:0373c6a50ce1b711cdb673"}).firestore(),k=w.a.storage(),I=w.a.auth(),C=new w.a.auth.GoogleAuthProvider,S=t(60),P=t.n(S),z=t(79),F=t(40),U=Object(F.b)({name:"app",initialState:{user:null,selectedImage:null},reducers:{login:function(e,n){e.user=n.payload},logout:function(e){e.user=null},selectImage:function(e,n){e.selectedImage=n.payload},resetImage:function(e){e.selectedImage=null}}}),A=U.actions,B=A.login,E=A.logout,L=A.selectImage,M=(A.resetImage,function(e){return e.app.user}),T=function(e){return e.app.selectedImage},W=U.reducer,J=t(4);function R(e){var n=e.timestamp,t=e.id,c=e.profilePic,a=e.read,i=e.imageUrl,o=e.username,r=Object(p.b)(),s=Object(u.f)();return Object(J.jsxs)(K,{onClick:function(){a||(r(L(i)),y.collection("snaps").doc(t).set({read:!0},{merge:!0}),s.push("/chats/view"))},children:[Object(J.jsx)(g.a,{src:c}),Object(J.jsxs)(N,{children:[Object(J.jsx)(Q,{children:o}),Object(J.jsxs)(V,{children:[a?" ":"Tap to view - ",Object(J.jsx)(z.a,{date:new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()})]})]}),!a&&Object(J.jsx)(P.a,{})]})}var _,D,q,G,H,K=h.a.section(c||(c=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px;\n    border: 1px solid whitesmoke;\n    cursor: pointer;\n    > div {\n        height: 35px;\n        width: 35px;\n    }\n    > svg {\n        color: crimson;\n    }\n    &:hover {\n            opacity: 0.8;\n    }\n"]))),N=h.a.section(a||(a=Object(d.a)(["\n    padding-left: 5px;\n    flex: 1;\n"]))),Q=h.a.h4(i||(i=Object(d.a)(["\n    font-size: 0.8rem;\n    font-weight: 500;\n"]))),V=h.a.p(o||(o=Object(d.a)(["\n    font-size: 0.7rem;\n"]))),X=t(66),Y=t.n(X),Z=Object(F.b)({name:"cam",initialState:{camImage:null},reducers:{setCamImage:function(e,n){e.camImage=n.payload},resetCamImage:function(e){e.camImage=null}}}),$=Z.actions,ee=$.setCamImage,ne=$.resetCamImage,te=function(e){return e.cam.camImage},ce=Z.reducer;function ae(){var e=Object(r.useState)([]),n=Object(m.a)(e,2),t=n[0],c=n[1],a=Object(p.c)(M),i=Object(p.b)(),o=Object(u.f)();Object(r.useEffect)((function(){return y.collection("snaps").orderBy("timestamp","desc").onSnapshot((function(e){return c(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(J.jsxs)(se,{children:[Object(J.jsxs)(le,{children:[Object(J.jsx)(g.a,{src:a.profilePic,onClick:function(){return I.signOut()}}),Object(J.jsxs)(je,{children:[Object(J.jsx)(O.a,{}),Object(J.jsx)(de,{placeholder:"Friends",type:"text"})]}),Object(J.jsx)(v.a,{})]}),Object(J.jsx)(pe,{children:t.map((function(e){var n=e.id,t=e.data,c=t.profilePic,a=t.username,i=t.timestamp,o=t.imageUrl,r=t.read;return Object(J.jsx)(R,{id:n,username:a,timestamp:i,imageUrl:o,read:r,profilePic:c},n)}))}),Object(J.jsx)(Y.a,{onClick:function(){i(ne()),o.push("/")}})]})}var ie,oe,re,se=h.a.section(_||(_=Object(d.a)(["\n    position: relative;\n    height: 400px;\n    width: 250px;\n    >svg {\n        font-size: 2rem;\n        position: absolute;\n        background-color: white;\n        border-radius: 50%;\n        color: gray;\n        cursor: pointer;\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%, 100%);\n        &:hover {\n            opacity: 0.8;\n        }\n    }\n"]))),le=h.a.div(D||(D=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-left: 10px;\n    padding-right: 10px;\n    background-color: #059ee0;\n    height: 50px;\n    >div {\n        height: 25px;\n        width: 25px;\n    }\n    >svg {\n        color: white;\n        font-size: 1.1rem;\n    }\n"]))),je=h.a.section(q||(q=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    flex: 1;\n    padding-left: 8px;\n    >svg {\n        color: white;\n        font-size: 0.9rem;\n    }\n"]))),de=h.a.input(G||(G=Object(d.a)(["\n    background-color: transparent;\n    border: none;\n    font-size: 0.8rem;\n    color: white;\n    &::placeholder {\n        color: white;\n        opacity: 1;\n    }\n"]))),pe=h.a.div(H||(H=Object(d.a)(["\n    height: 400px;\n    background-color: white;\n    box-shadow: 1px -7px 7px -6px rgba(0,0,0,0.44);\n    margin-top: -9px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    overflow: scroll;\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n"]))),be=t(118),ue=t.p+"static/media/logo.0f94b43f.png";function he(){var e=Object(p.b)();return Object(J.jsx)(ve,{children:Object(J.jsxs)(we,{children:[Object(J.jsx)(ye,{src:ue}),Object(J.jsx)(be.a,{variant:"outlined",onClick:function(){I.signInWithPopup(C).then((function(n){e(B({username:n.user.displayName,profilePic:n.user.photoURL,id:n.user.uid}))})).catch((function(e){return alert(e.message)}))},children:"Sign in"})]})})}var me,ge,fe,Oe,xe,ve=h.a.section(ie||(ie=Object(d.a)(["\n    background-color: #feff00;\n    display: grid;\n    place-items: center;\n    height: 100vh;\n"]))),we=h.a.div(oe||(oe=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),ye=h.a.img(re||(re=Object(d.a)(["\n    height: 300px;\n    object-fit: container;\n"]))),ke=t(67),Ie=t.n(ke),Ce=t(68),Se=t.n(Ce),Pe=t(69),ze=t.n(Pe),Fe=t(70),Ue=t.n(Fe),Ae=t(71),Be=t.n(Ae),Ee=t(72),Le=t.n(Ee),Me=t(73),Te=t.n(Me),We=t(74),Je=t.n(We),Re=t(75),_e=t.n(Re),De=t(119);function qe(){var e=Object(p.c)(te),n=Object(u.f)(),t=Object(p.b)(),c=Object(p.c)(M);Object(r.useEffect)((function(){e||n.replace("/")}),[e,n]);return Object(J.jsxs)(Ne,{children:[Object(J.jsx)(Ie.a,{onClick:function(){t(ne())}}),Object(J.jsxs)(Qe,{children:[Object(J.jsx)(Se.a,{}),Object(J.jsx)(ze.a,{}),Object(J.jsx)(Ue.a,{}),Object(J.jsx)(Be.a,{}),Object(J.jsx)(Le.a,{}),Object(J.jsx)(Te.a,{}),Object(J.jsx)(Je.a,{})]}),Object(J.jsx)(Ve,{src:e}),Object(J.jsxs)(Xe,{onClick:function(){var t=Object(De.a)();k.ref("snaps/".concat(t)).putString(e,"data_url").on("state_changed",null,(function(e){console.log(e)}),(function(){k.ref("snaps").child(t).getDownloadURL().then((function(e){y.collection("snaps").add({imageUrl:e,username:"Codmitu",read:!1,profilePic:c.profilePic,timestamp:w.a.firestore.FieldValue.serverTimestamp()}),n.replace("/chats")}))}))},children:[Object(J.jsx)(Ye,{children:"Send now"}),Object(J.jsx)(_e.a,{})]})]})}var Ge,He,Ke,Ne=h.a.section(me||(me=Object(d.a)(["\n    position: relative;\n    >svg {\n        position: absolute;\n        top: 0;\n        margin: 5px;\n        cursor: pointer;\n        color: white;\n    }\n"]))),Qe=h.a.div(ge||(ge=Object(d.a)(["\n    color: white;\n    position: absolute;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    margin: 5px;\n    >svg {\n        font-size: 1.2rem;\n        margin-bottom: 8px;\n        cursor: pointer;\n    }\n"]))),Ve=h.a.img(fe||(fe=Object(d.a)(["\n\n"]))),Xe=h.a.footer(Oe||(Oe=Object(d.a)(["\n    background-color: yellow;\n    color: black;\n    display: flex;\n    justify-content: space-evenly;\n    border-radius: 30px;\n    align-items: center;\n    cursor: pointer;\n    padding: 7px;\n    position: absolute;\n    bottom: 0;\n    right: -25px;\n    transform: translate(-50%, -50%);\n    >svg {\n        font-size: 0.8rem;\n    }\n"]))),Ye=h.a.h2(xe||(xe=Object(d.a)(["\n    font-size: 0.5rem;\n    margin-right: 3px;\n"]))),Ze=t(76);function $e(){var e=Object(p.c)(T),n=Object(u.f)();Object(r.useEffect)((function(){if(!e)return t()}),[]);var t=function(){n.replace("/chats")};return Object(J.jsxs)(nn,{children:[Object(J.jsx)(tn,{src:e,onClick:t}),Object(J.jsx)(cn,{children:Object(J.jsx)(Ze.CountdownCircleTimer,{isPlaying:!0,duration:10,strokeWidth:6,size:50,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],children:function(e){var n=e.remainingTime;return 0===n&&t(),n}})})]})}var en,nn=h.a.section(Ge||(Ge=Object(d.a)(["\n    position: relative;\n"]))),tn=h.a.img(He||(He=Object(d.a)(["\n    cursor: pointer;\n    top: 0;\n    right: 0;\n"]))),cn=h.a.div(Ke||(Ke=Object(d.a)(["\n\n"]))),an=t(77),on=t.n(an),rn=t(78),sn=t.n(rn),ln={width:252,height:440,facingMode:"user"};function jn(){var e=Object(r.useRef)(null),n=Object(p.b)(),t=Object(u.f)(),c=Object(r.useCallback)((function(){var c=e.current.getScreenshot();n(ee(c)),t.push("/preview")}),[e]);return Object(J.jsxs)(hn,{children:[Object(J.jsx)(on.a,{audio:!1,height:ln.height,ref:e,screenshotFormat:"image/jpeg",width:ln.width,videoConstraints:ln}),Object(J.jsx)(sn.a,{onClick:c})]})}var dn,pn,bn,un,hn=h.a.section(en||(en=Object(d.a)(["\n    position: relative;\n\n    >video {\n\n    }\n    >svg {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        cursor: pointer;\n        color: white;\n    }\n"])));var mn=function(){var e=Object(p.c)(M),n=Object(p.b)();return Object(r.useEffect)((function(){I.onAuthStateChanged((function(e){n(e?B({username:e.displayName,profilePic:e.photoURL,id:e.uid}):E())}))}),[]),Object(J.jsx)(gn,{children:Object(J.jsx)(b.a,{basename:"/snapchat-clone",children:e?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(On,{src:ue}),Object(J.jsx)(fn,{children:Object(J.jsx)(xn,{children:Object(J.jsxs)(u.c,{children:[Object(J.jsx)(u.a,{path:"/chats/view",component:$e}),Object(J.jsx)(u.a,{path:"/chats",component:ae}),Object(J.jsx)(u.a,{path:"/preview",component:qe}),Object(J.jsx)(u.a,{exact:!0,path:"/",component:jn})]})})})]}):Object(J.jsx)(he,{})})})},gn=h.a.main(dn||(dn=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: yellow;\n  min-height: 100vh;\n"]))),fn=h.a.div(pn||(pn=Object(d.a)(['\n  background: url("https://lh3.googleusercontent.com/proxy/9ujtJnbLysb2bL0BwcwT57m4UHgGO0bLqSfFGUFspM63AcfWbxHqutiKfn9OshN18uF1sOAIPVVw3mBap_e9E6BdksaJFoSg645YgMFnQ_ojq5zdPoJIc-WEaHhJxItCE6Q")no-repeat top 0% left 47% /cover;\n  height: 400px;\n  padding:114px;\n']))),On=h.a.img(bn||(bn=Object(d.a)(["\n  height: 100px;\n  object-fit: contain;\n"]))),xn=h.a.div(un||(un=Object(d.a)(["\n  background-color: white;\n  height: 440px;\n  margin-top: -20px;\n"]))),vn=Object(F.a)({reducer:{app:W,cam:ce}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.render(Object(J.jsx)(s.a.StrictMode,{children:Object(J.jsx)(p.a,{store:vn,children:Object(J.jsx)(mn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,n,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.ca49525a.chunk.js.map