(this["webpackJsonp@react-bratus/app"]=this["webpackJsonp@react-bratus/app"]||[]).push([[0],{391:function(e,t,n){var a={"./da/messages.js":[398,3],"./en/messages.js":[399,4]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return n.e(t[1]).then((function(){return n.t(c,7)}))}c.keys=function(){return Object.keys(a)},c.id=391,e.exports=c},397:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),o=n(124),s=n(100),l=n(31),d=(n(205),n(41)),h=n(101),j=n(402),b=n(404),u=n(403),g=n(125),p=n.n(g),f=n(36),O=n(22),x=n(62),m=n.n(x),v=n(186);function y(){return(y=Object(v.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(391)("./".concat(t,"/messages.js"));case 2:a=e.sent,c=a.messages,d.a.load(t,c),d.a.activate(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w="escooter-reporter:settings:locale",L=function(){var e,t=Object(a.useState)(null!==(e=localStorage.getItem(w))&&void 0!==e?e:(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage).split("-")[0]),n=Object(s.a)(t,2),c=n[0],r=n[1];return{locale:c,updateLocale:function(e){localStorage.setItem(w,e),r(e)}}},k=n(126),S=n(187),C=n.n(S),D=n(6);d.a.loadLocaleData("en",{plurals:k.b}),d.a.loadLocaleData("da",{plurals:k.a});var F=function(e){var t=e.children;return Object(h.b)().i18n.locale?Object(D.jsx)(D.Fragment,{children:t}):null};F.propTypes={children:C.a.any};var A,E,P,T,B,I,R,M=F,N={primary:"#3e3e3e",secondary:"#000000"},U=function(e){var t=e.children;return Object(D.jsx)(O.a,{theme:N,children:t})},G=O.b.div(A||(A=Object(l.a)(["\n  height: ","px;\n  background-color: green;\n"])),(function(e){return 20+e.height})),J=function(e){var t=e.data;return Object(D.jsxs)(G,{height:t.linesOfCode,children:[t.inDegree>0&&Object(D.jsx)(f.b,{type:"target",position:"left"}),Object(D.jsxs)("div",{children:[t.label," - ",t.component.timesUsed]}),t.outDegree>0&&Object(D.jsx)(f.b,{type:"source",position:"right",id:"a"})]})},_=12,q=O.b.div(E||(E=Object(l.a)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n"])),24,_,24),z=O.b.h2(P||(P=Object(l.a)(["\n  color: white;\n  font-weight: 400;\n  text-align: right;\n  margin-bottom: ","px;\n  padding-right: ","px;\n"])),_,_),H=O.b.hr(T||(T=Object(l.a)(["\n  width: ","px;\n  color: blue;\n  margin: 0;\n  margin-left: auto;\n"])),230),K=function(e){var t=e.children;return Object(D.jsxs)(q,{children:[Object(D.jsx)(z,{children:t}),Object(D.jsx)(H,{})]})},Q=Object(O.b)(j.a)(B||(B=Object(l.a)(["\n  margin-left: ","px;\n  padding: 1rem;\n  height: 100vh;\n"])),250),V=Object(O.b)(f.c)(I||(I=Object(l.a)(["\n  position: absolute;\n  left: ","px;\n"])),38),W=O.b.div(R||(R=Object(l.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  padding: ","px;\n  margin-left: auto;\n  width: 100%;\n\n  > * {\n    &:not(:last-child) {\n      margin-left: ","px;\n      margin-bottom: ","px;\n    }\n  }\n"])),_,_,_),X=function(){var e=L().locale,t=Object(a.useState)(null),n=Object(s.a)(t,2),c=n[0],r=n[1],i=j.a.Sider,l=new p.a.graphlib.Graph;l.setDefaultEdgeLabel((function(){return{}}));Object(a.useEffect)((function(){!function(e){y.apply(this,arguments)}(e),fetch("http://localhost:3000/data").then((function(e){return e.json()})).then((function(e){r(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LR",n="LR"===t;return l.setGraph({rankdir:t}),e.forEach((function(e){Object(f.e)(e)?l.setNode(e.id,{width:192,height:36+e.data.linesOfCode}):l.setEdge(e.source,e.target)})),p.a.layout(l),e.map((function(e){if(Object(f.e)(e)){var t=l.node(e.id);e.targetPosition=n?"left":"top",e.sourcePosition=n?"right":"bottom",e.position={x:t.x-96+Math.random()/1e3,y:t.y-(36+e.data.linesOfCode)/2}}return e}))}([].concat(e.nodes,e.edges.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#001529",fillOpacity:.7},labelStyle:{fill:"#fff"},style:{stroke:e.label?"#00D8FF":"#000"}})})))))})).catch(console.log)}),[e]);return Object(D.jsx)(h.a,{i18n:d.a,children:Object(D.jsx)(M,{children:Object(D.jsx)(U,{children:Object(D.jsxs)(j.a,{children:[Object(D.jsx)(i,{width:250,style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:Object(D.jsxs)(b.a,{theme:"dark",mode:"inline",children:[Object(D.jsx)(K,{children:"Info"}),Object(D.jsx)(K,{children:"Filters"}),Object(D.jsx)(K,{children:"Actions"}),Object(D.jsxs)(W,{children:[Object(D.jsx)(u.a,{onClick:function(){fetch("http://localhost:3000/compile",{method:"POST"})},ghost:!0,children:"Recompile"}),Object(D.jsx)(u.a,{ghost:!0,children:"Action"}),Object(D.jsx)(u.a,{ghost:!0,children:"Action"}),Object(D.jsx)(u.a,{ghost:!0,children:"Action"}),Object(D.jsx)(u.a,{ghost:!0,children:"Action"}),Object(D.jsx)(u.a,{ghost:!0,children:"Action"}),Object(D.jsx)(u.a,{ghost:!0,children:"Action"})]})]})}),Object(D.jsx)(Q,{children:c&&Object(D.jsxs)(f.d,{elements:c,connectionLineType:"smoothstep",nodeTypes:{reactComponent:J},children:[Object(D.jsx)(V,{}),Object(D.jsx)(f.a,{})]})})]})})})})},Y=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,405)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(D.jsx)(c.a.StrictMode,{children:Object(D.jsx)(X,{})}),document.getElementById("root")),Y()}},[[397,1,2]]]);
//# sourceMappingURL=main.6ab530fe.chunk.js.map