(this["webpackJsonp@react-bratus/app"]=this["webpackJsonp@react-bratus/app"]||[]).push([[0],{344:function(e,t,n){var o={"./da/messages.js":[852,3],"./en/messages.js":[853,4]};function i(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return n.e(t[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(o)},i.id=344,e.exports=i},851:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(24),a=n.n(c),r=n(45),s=n(33),l=(n(337),n(76)),d=n(170),b=n(860),u=n(869),j=n(107),h=n.n(j),p=n(315);function f(){return(f=Object(p.a)(h.a.mark((function e(t){var o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(344)("./".concat(t,"/messages.js"));case 2:o=e.sent,i=o.messages,l.a.load(t,i),l.a.activate(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g="react-bratus:settings:locale",O=function(){var e,t=Object(o.useState)(null!==(e=localStorage.getItem(g))&&void 0!==e?e:(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage).split("-")[0]),n=Object(s.a)(t,2),i=n[0],c=n[1];return{locale:i,updateLocale:function(e){localStorage.setItem(g,e),c(e)}}},x=Object(o.createContext)({mode:"white",locReference:300}),m=function(e,t){var n=Object(o.useState)((function(){var n=window.localStorage.getItem(t);return null!==n?JSON.parse(n):e})),i=Object(s.a)(n,2),c=i[0],a=i[1];return Object(o.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,a]},v=n(5),y=function(e){var t=e.children,n=m({mode:"white",locReference:300},"componentBackground"),o=Object(s.a)(n,2),i=o[0],c=o[1];return Object(v.jsx)(x.Provider,{value:{componentBackground:i,setComponentBackground:c},children:t})},C=Object(o.createContext)({highlightedComponents:[]}),w=function(e){var t=e.children,n=Object(o.useState)([]),i=Object(s.a)(n,2),c=i[0],a=i[1];return Object(v.jsx)(C.Provider,{value:{highlightedComponents:c,setHighlightedComponents:a},children:t})},k=n(220),S=n(316),D=n.n(S);l.a.loadLocaleData("en",{plurals:k.b}),l.a.loadLocaleData("da",{plurals:k.a});var F=function(e){var t=e.children;return Object(d.b)().i18n.locale?Object(v.jsx)(v.Fragment,{children:t}):null};F.propTypes={children:D.a.any};var B,I,H,N,L,_,R,E,P,T,U,M,A,z,G,V=F,J=n(29),$=n(26),W={primary:"#00D8FF",secondary:"#001529"},q=Object($.b)(B||(B=Object(J.a)(["\n.ant-select-tree .ant-select-tree-treenode:not(.ant-select-tree .ant-select-tree-treenode-disabled).filter-node .ant-select-tree-title {\n  background-color: red;\n  color: white;\n}\n"]))),Y=function(e){var t=e.children;return Object(v.jsxs)($.a,{theme:W,children:[Object(v.jsx)(q,{}),t]})},Z=n(57),K=n(152),Q=n.n(K),X=n(31),ee=n(871),te=n(872),ne=n(873),oe=n(331),ie=n(870),ce=n(867),ae=n(164),re=n.n(ae),se=n(129),le=n.n(se),de=function(e){return e.replace(/^\s+|\s+$/gm,"")},be=12,ue=180,je=$.c.div(I||(I=Object(J.a)(["\n  height: ","px;\n  width: ","px;\n  padding: ","px;\n  border-radius: ","px;\n  border: ",";\n  background-color: ",";\n  color: ",";\n  position: relative;\n"])),(function(e){return 100+e.linesOfCode}),ue,be,8,(function(e){var t=e.isHighlighted,n=e.isLocked;return t?n?"3px solid black":"5px solid red":"1px solid black"}),(function(e){return e.bgColor}),(function(e){return e.fontColor})),he=Object($.c)(ie.a)(H||(H=Object(J.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),pe=function(e){var t=Object(o.useContext)(C),n=t.highlightedComponents,i=t.setHighlightedComponents,c=Object(o.useContext)(x).componentBackground,a=Object(X.h)((function(e){return e.nodes})),r=Object(X.g)((function(e){return e.setSelectedElements})),s=function(){var t=n.findIndex((function(t){return t.id===e.id})),o=Object(Z.a)(n);-1!==t&&n[t].locked?(o.splice(t,1),i(o)):-1!==t&&(o.splice(t,1),i([].concat(Object(Z.a)(o),[{id:e.id,componentName:e.data.label,locked:!0,search:!1}])),r(a.filter((function(t){return t.id.includes(e.id)}))))},l=function(){return n.some((function(t){return e.id.match("".concat(t.componentName,":+.+|").concat(t.componentName,"$"))}))},d=function(){return n.some((function(t){return t.locked&&e.id.match("".concat(t.componentName,":+.+|").concat(t.componentName,"$"))}))},b=function(){return d()?"red":"white"===c.mode?"#FFFFFFFF":"label_hash"===c.mode?new Q.a({lightness:.8,hue:{min:0,max:366}}).hex(e.data.label):"loc_reference"===c.mode?function(e){var t=e.substring(e.indexOf("(")).split(","),n=parseInt(de(t[0].substring(1)),10),o=parseInt(de(t[1]),10),i=parseInt(de(t[2]),10),c=parseFloat(de(t[3].substring(0,t[3].length-1))).toFixed(2),a=[n.toString(16),o.toString(16),i.toString(16),Math.round(255*c).toString(16).substring(0,2)];return a.forEach((function(e,t){1===e.length&&(a[t]="0"+e)})),"#"+a.join("")}("rgba(255,140,0,".concat(e.data.linesOfCode/c.locReference>1?1:e.data.linesOfCode/c.locReference,")")):"#FFFFFFFF"},u=function(){var e=b(),t="#"===e.charAt(0)?e.substring(9===e.length?2:1,7):e;return.299*parseInt(t.substring(0,2),16)+.587*parseInt(t.substring(2,4),16)+.114*parseInt(t.substring(4,6),16)>186?"#000":"#fff"};return Object(v.jsxs)(je,{linesOfCode:e.data.linesOfCode,isHighlighted:l(),isLocked:d(),bgColor:b,fontColor:u(),children:[e.data.inDegree>0&&Object(v.jsx)(X.b,{type:"target",position:"left"}),Object(v.jsx)("div",{style:{position:"absolute",zIndex:-1,top:0,left:0,height:"100%",width:"100%",backgroundColor:"white"}}),Object(v.jsxs)(he,{children:[Object(v.jsx)(ce.a,{children:Object(v.jsx)(le.a,{style:{color:u()},level:5,children:e.data.label})}),Object(v.jsx)(ce.a,{style:{flexGrow:1,paddingTop:"12px"},justify:"center",children:e.data.component.timesUsed>1&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ee.a,{style:{fontSize:"18px",color:u()}}),Object(v.jsxs)(re.a,{style:{fontSize:"18px",lineHeight:"18px",color:u()},children:["used: ",e.data.component.timesUsed]})]})}),l()&&Object(v.jsxs)(ce.a,{align:"middle",justify:"space-between",children:[d()?Object(v.jsx)(te.a,{onClick:s,style:{fontSize:"24px",cursor:"pointer"}}):Object(v.jsx)(ne.a,{onClick:s,style:{fontSize:"24px",cursor:"pointer"}}),Object(v.jsx)(oe.a,{onClick:function(){return e.data.onShowNodeDetail(e)},style:{fontSize:"24px",cursor:"pointer"}})]})]}),e.data.outDegree>0&&Object(v.jsx)(X.b,{type:"source",position:"right"})]})},fe=Object($.c)(X.c)(N||(N=Object(J.a)(["\n  position: absolute;\n  right: ","px;\n  top: ","px;\n"])),be,be),ge=function(e){var t=e.elements,n=Object(o.useContext)(C),i=n.highlightedComponents,c=n.setHighlightedComponents;return Object(v.jsx)(v.Fragment,{children:t&&Object(v.jsxs)(X.e,{elements:t,nodeTypes:{reactComponent:pe},onNodeMouseEnter:function(e,t){return function(e){var t=e?e.data.label:null;c([].concat(Object(Z.a)(i.filter((function(e){return e.locked}))),[{id:e.id,componentName:t,locked:!1,search:!1}]))}(t)},onNodeMouseLeave:function(e,t){return function(e){var t=i.findIndex((function(t){return t.id===e.id}));if(-1!==t&&!i[t].locked){var n=Object(Z.a)(i);n.splice(t,1),c(n)}}(t)},onPaneClick:function(){return c([])},children:[Object(v.jsx)(fe,{style:{minWidth:"300px",minHeight:"300px"},nodeColor:function(e){return function(e){return i.some((function(t){return e.id.match("".concat(t.componentName,":+.+|").concat(t.componentName,"$"))}))}(e)?"red":new Q.a({lightness:.8,hue:{min:0,max:366}}).hex(e.data.label)}}),Object(v.jsx)(X.a,{})]})})},Oe=n(874),xe=n(858),me=n(328),ve=n(864),ye=n(862),Ce=n(857),we=n(215),ke=n.n(we),Se=n(221),De=n.n(Se),Fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LR",n=new De.a.graphlib.Graph;n.setDefaultEdgeLabel((function(){return{}}));var o="LR"===t;n.setGraph({rankdir:t});var i=2;return e.forEach((function(e){Object(X.f)(e)?n.setNode(e.id,{width:ue*i,height:100+e.data.linesOfCode}):n.setEdge(e.source,e.target)})),De.a.layout(n),e.map((function(e){if(Object(X.f)(e)){var t=n.node(e.id);e.targetPosition=o?"left":"top",e.sourcePosition=o?"right":"bottom",e.position={x:t.x-ue*i/2+Math.random()/1e3,y:t.y-(36+e.data.linesOfCode)/2}}return e}))},Be=$.c.div(L||(L=Object(J.a)(["\n  width: 600px;\n  height: 500px;\n  background-color: lightgrey;\n"]))),Ie=ye.a.Title,He=ye.a.Paragraph,Ne=ye.a.Link,Le=[{id:"node-1",type:"reactComponent",data:{label:"I am a component",component:{timesUsed:1},linesOfCode:1,outDegree:1,inDegree:0},position:{x:0,y:0}},{id:"node-2",type:"reactComponent",data:{label:"Solid connections denote components that are rendered by default",component:{timesUsed:1},linesOfCode:80,outDegree:0,inDegree:1},position:{x:0,y:0}},{id:"node-3",type:"reactComponent",data:{label:"My height is proportional to how many lines of code I have.",component:{timesUsed:1},linesOfCode:120,outDegree:1,inDegree:0},position:{x:0,y:0}},{id:"node-4",type:"reactComponent",data:{label:"Red dashed connections denote a Route.",component:{timesUsed:1},linesOfCode:120,outDegree:0,inDegree:1},position:{x:0,y:0}},{id:"node-5",type:"reactComponent",data:{label:"This is how many times I have been used ->",component:{timesUsed:6},linesOfCode:40,outDegree:1,inDegree:0},position:{x:0,y:0}},{id:"node-6",type:"reactComponent",data:{label:"Black dashed connection denote a component rendered within an if-statement",component:{timesUsed:1},linesOfCode:240,outDegree:0,inDegree:1},position:{x:0,y:0}},{id:"Hover me to highlight",type:"reactComponent",data:{label:"Hover me to highlight",component:{timesUsed:1},linesOfCode:50,outDegree:0,inDegree:0},position:{x:0,y:0}},{id:"edge-1",source:"node-1",target:"node-2"},{id:"edge-2",source:"node-3",target:"node-4",label:"/route",animated:!0,labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#001529",fillOpacity:.7},labelStyle:{fill:"#fff"},style:{stroke:"red"}},{id:"edge-3",source:"node-5",target:"node-6",animated:!0}],_e=function(e){var t=e.isHelpVisible,n=e.hideHelpOnStartUp,i=e.setIsHelpVisible,c=e.setHideHelpOnStartUp,a=Object(o.useContext)(C),r=a.highlightedComponents,l=a.setHighlightedComponents,d=Object(o.useState)(!0),b=Object(s.a)(d,1)[0],u=function(e){var t=e?e.data.label:null;l([].concat(Object(Z.a)(r.filter((function(e){return e.locked}))),[{id:e.id,componentName:t,locked:!1,search:!1}]))};return Object(v.jsxs)(ve.a,{width:720,onClose:function(){return i(!1)},visible:t,bodyStyle:{paddingBottom:80},children:[Object(v.jsx)(Ie,{level:3,children:"Legend"}),Object(v.jsx)(He,{children:"Below this paragraph you can find the elements that are displayed and what they represent."}),Object(v.jsx)(Be,{children:Object(v.jsx)(X.e,{elements:Fe(Le),nodeTypes:{reactComponent:pe},onNodeMouseEnter:function(e,t){return u(t)},onNodeMouseLeave:function(e,t){return function(e){var t=r.findIndex((function(t){return t.id===e.id}));if(-1!==t&&!r[t].locked){var n=Object(Z.a)(r);n.splice(t,1),l(n)}}(t)},onElementClick:function(e,t){return u(t)},onPaneClick:function(){return l([])},defaultPosition:[150,0],defaultZoom:.5})}),Object(v.jsx)(Ce.a,{}),Object(v.jsx)(Ie,{level:5,children:"Thank you for installing react-bratus"}),Object(v.jsx)(He,{children:"Hopefully this tool can help you navigate your React.js code base."}),Object(v.jsx)(He,{children:"You can always click the Help button in navigation pane on the right to see this window again."}),Object(v.jsxs)(He,{children:["I hope that you have time to give me feedback. Any feature ideas, constructive criticism, or bugs are welcomed in the"," ",Object(v.jsx)(Ne,{href:"https://github.com/stephanboersma/react-bratus/issues/new?assignees=&labels=feedback&template=feedback.md&title=%5BFeedback%5D",children:"GitHub repository."})]}),Object(v.jsx)(ke.a,{checked:n,onChange:function(e){return c(e.target.checked)},children:"Don't show me this again"}),Object(v.jsx)(Ce.a,{}),Object(v.jsx)(Ie,{level:5,children:"Changelog"}),Object(v.jsxs)(He,{ellipsis:!!b&&{rows:2,expandable:!0,symbol:"more"},children:["- ",Object(v.jsx)("b",{children:"2.0.6"})," ",Object(v.jsx)("br",{}),"- Configurable component backgrounds ",Object(v.jsx)("br",{}),"- Improved logging ",Object(v.jsx)("br",{}),"- ",Object(v.jsx)("b",{children:"2.0.5"})," ",Object(v.jsx)("br",{}),"- Throws error if a circular reference is found",Object(v.jsx)("br",{}),"- Minor bug fixes",Object(v.jsx)("br",{}),"- Updated README",Object(v.jsx)("br",{}),"- ",Object(v.jsx)("b",{children:"2.0.4"})," ",Object(v.jsx)("br",{}),"- Added TreeSearch ",Object(v.jsx)("br",{}),"- Colored components based on the label hash",Object(v.jsx)("br",{})," - Added lock icon. Possibility to lock multiple components ",Object(v.jsx)("br",{})," ","- Added eye icon. Possibility to open details about component. ",Object(v.jsx)("br",{})," - Details page showing the path ",Object(v.jsx)("br",{}),"- Clicking on path will open vscode"," ",Object(v.jsx)("br",{})," - Details page showing the code ",Object(v.jsx)("br",{})," - Fixed some bugs ",Object(v.jsx)("br",{})," - CLI automatically opens browser when react-bratus is started ",Object(v.jsx)("br",{}),"- Size of MiniMap increased ",Object(v.jsx)("br",{}),"- ",Object(v.jsx)("b",{children:"2.0.3"})," ",Object(v.jsx)("br",{}),"- Added posibility to set options in `.bratusrc.json` file",Object(v.jsx)("br",{}),"- Handle multiple components - Highlight components feature ",Object(v.jsx)("br",{}),"- Lock highlighted component and move component including descendants at the same time ",Object(v.jsx)("br",{}),"- CLI command -c --compile has been changed to -p --parse ",Object(v.jsx)("br",{}),"-"," ","Removed Info section ",Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"2.0.2"})," ",Object(v.jsx)("br",{}),"- First release"]}),Object(v.jsx)(Ce.a,{})]})},Re=n(330),Ee=n(868),Pe=n(861),Te=n(863),Ue=n(865),Me=n(322),Ae=n.n(Me),ze=$.c.div(_||(_=Object(J.a)(["\n  padding-top: ","px;\n  padding-bottom: ","px;\n  padding-left: ","px;\n"])),24,be,24),Ge=$.c.h2(R||(R=Object(J.a)(["\n  color: white;\n  font-weight: 400;\n  text-align: right;\n  margin-bottom: ","px;\n  padding-right: ","px;\n"])),be,be),Ve=$.c.hr(E||(E=Object(J.a)(["\n  width: ","px;\n  color: blue;\n  margin: 0;\n  margin-left: auto;\n"])),280),Je=function(e){var t=e.children;return Object(v.jsxs)(ze,{children:[Object(v.jsx)(Ge,{children:t}),Object(v.jsx)(Ve,{})]})},$e=$.c.div(P||(P=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  height: auto;\n"]))),We=function(e){var t=e.children,n=e.title;return Object(v.jsxs)($e,{children:[Object(v.jsx)(Je,{children:n}),t]})},qe=ye.a.Title,Ye=Object($.c)(qe)(T||(T=Object(J.a)(["\n  color: #fff !important;\n  text-align: center;\n"]))),Ze=Object($.c)(Ae.a)(U||(U=Object(J.a)(["\n  color: #fff;\n  line-height: ","px;\n  font-size: ","px;\n  text-align: right;\n  padding: 0 ","px;\n"])),24,14,be),Ke=$.c.div(M||(M=Object(J.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  padding: ","px;\n  margin-left: auto;\n  width: 100%;\n\n  > * {\n    &:not(:last-child) {\n      margin-left: ","px;\n      margin-bottom: ","px;\n    }\n  }\n"])),be,be,be),Qe=xe.a.Sider,Xe=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)([]),a=Object(s.a)(c,2),l=a[0],d=a[1],b=Object(o.useContext)(C),u=b.highlightedComponents,j=b.setHighlightedComponents,h=Object(o.useContext)(x),p=h.componentBackground,f=h.setComponentBackground,g=Object(X.h)((function(e){return e.nodes})),O=Object(X.i)().setCenter;Object(o.useEffect)((function(){w()}),[g]);var m=function(e){var t=e.split(":");return 1==t.length?null:(t.pop(),t.join(":"))},y=function(e){return 0==e.data.outDegree},w=function(){g.length>0&&d(g.map((function(e){return{id:e.id,pId:m(e.id),title:e.data.label,value:e.id,isLeaf:y(e)}})))};return Object(v.jsxs)(Qe,{width:300,style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:[Object(v.jsx)(Ye,{level:1,children:"react-bratus"}),Object(v.jsxs)(Ee.a,{theme:"dark",mode:"inline",children:[Object(v.jsx)(We,{title:"Search",children:Object(v.jsx)(Pe.a,{showSearch:!0,style:{width:"100%",padding:"0 ".concat(be,"px")},value:n,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Search components",onChange:function(e){i(e);var t=e.split(":"),n=t[t.length-1],o=u.findIndex((function(t){return t.id===e}));Object(Z.a)(u).splice(o,1),j([{id:e,componentName:n,locked:!0,search:!1}]),function(e){var t=g.findIndex((function(t){return t.id==e})),n=g[t],o=n.__rf.position.x+n.__rf.width/2,i=n.__rf.position.y+n.__rf.height/2;O(o,i,1)}(e)},treeDataSimpleMode:!0,treeDefaultExpandAll:!1,treeData:l})}),Object(v.jsx)(We,{title:"Actions",children:Object(v.jsxs)(Ke,{children:[Object(v.jsx)(me.a,{onClick:function(){fetch("http://localhost:4444/compile",{method:"POST"}).then((function(){var e=Re.b.loading("Recompiling. Window will refresh soon..",0);setTimeout((function(){return e}),2e3),setTimeout((function(){location.reload()}),4e3)})).catch((function(e){return console.log("An error occurred ",e)}))},ghost:!0,children:"Recompile"}),Object(v.jsx)(me.a,{target:"_blank",href:"https://github.com/stephanboersma/react-bratus/issues/new?assignees=&labels=feedback&template=feedback.md&title=%5BFeedback%5D",ghost:!0,children:"Give feedback"}),Object(v.jsx)(me.a,{target:"_blank",href:"https://github.com/stephanboersma/react-bratus/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D+",ghost:!0,children:"Submit bug"}),Object(v.jsx)(me.a,{target:"_blank",href:"https://github.com/stephanboersma/react-bratus/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFeature%5D",ghost:!0,children:"Suggest new feature"})]})}),Object(v.jsxs)(We,{title:"Component Background",children:[Object(v.jsx)(Ze,{children:"Determine how to colour the components."}),Object(v.jsxs)(Te.a,{defaultValue:p.mode?p.mode:"white",style:{width:"100%",padding:"0 ".concat(be,"px")},onChange:function(e){return f(Object(r.a)(Object(r.a)({},p),{},{mode:e}))},children:[Object(v.jsx)(Te.a.Option,{value:"white",children:"White"}),Object(v.jsx)(Te.a.Option,{value:"label_hash",children:"Based on Label Hash"}),Object(v.jsx)(Te.a.Option,{value:"loc_reference",children:"Based on Lines of Code"})]}),"loc_reference"===p.mode&&Object(v.jsx)("div",{style:{width:"100%",padding:"0 ".concat(be,"px"),marginTop:"".concat(be,"px")},children:Object(v.jsx)(Ue.a,{addonBefore:"Baseline",placeholder:"LOC Reference",defaultValue:p.locReference,onChange:function(e){e.target.value<1?f(Object(r.a)(Object(r.a)({},p),{},{locReference:1})):f(Object(r.a)(Object(r.a)({},p),{},{locReference:e.target.value}))},type:"number",min:"1"})})]})]})]})},et=n(68),tt=n(866),nt=n(859),ot=Object($.c)(ce.a)(A||(A=Object(J.a)(["\n  pre {\n    width: 100%;\n  }\n"]))),it=function(e){var t=e.nodeDetail;return t.visible?Object(v.jsx)(ie.a,{children:Object(v.jsxs)(ot,{children:[Object(v.jsxs)(ie.a,{children:[Object(v.jsx)(le.a,{level:5,children:"Path"}),Object(v.jsx)(re.a,{copyable:!0,children:Object(v.jsx)("a",{href:"vscode://file/".concat(t.node.data.path),children:t.node.data.path})})]}),Object(v.jsx)(Ce.a,{}),Object(v.jsx)(le.a,{level:5,children:"Code"}),Object(v.jsx)(tt.a,{style:nt.a,language:"javascript",children:t.node.data.code})]})}):Object(v.jsx)(et.a,{spin:!0})},ct=Object($.c)(xe.a)(z||(z=Object(J.a)(["\n  margin-left: ","px;\n  padding: 1rem;\n  height: 100vh;\n"])),300),at=Object($.c)(me.a)(G||(G=Object(J.a)(["\n  position: absolute;\n  bottom: ","px;\n  left: ","px;\n"])),24,24),rt=function(e){var t=e.children,n=e.info,i=e.nodeDetail,c=e.setNodeDetail,a=m(!1,"react-bratus:hide-help"),r=Object(s.a)(a,2),l=r[0],d=r[1],b=Object(o.useState)(!l),u=Object(s.a)(b,2),j=u[0],h=u[1];return Object(v.jsxs)(xe.a,{children:[Object(v.jsxs)(X.d,{children:[Object(v.jsx)(Xe,{info:n}),Object(v.jsx)(ct,{children:t}),Object(v.jsx)(ve.a,{width:800,visible:i.visible,closable:!0,keyboard:!0,onClose:function(){return c({visible:!1,node:null})},title:i.node?i.node.data.label:"",children:Object(v.jsx)(it,{nodeDetail:i})})]}),Object(v.jsx)(X.d,{children:Object(v.jsx)(_e,{isHelpVisible:j,setIsHelpVisible:h,hideHelpOnStartUp:l,setHideHelpOnStartUp:d})}),Object(v.jsx)(at,{type:"primary",shape:"round",size:"large",icon:Object(v.jsx)(Oe.a,{}),onClick:function(){return h(!0)},children:"Open help"})]})},st=function(){var e=O().locale,t=Object(o.useState)(null),n=Object(s.a)(t,2),i=n[0],c=n[1],a=Object(o.useState)({visible:!1,node:null}),j=Object(s.a)(a,2),h=j[0],p=j[1],g=Object(o.useState)(null),x=Object(s.a)(g,2),m=x[0],C=x[1];return Object(o.useEffect)((function(){!function(e){f.apply(this,arguments)}(e),fetch("http://localhost:4444/parsedData").then((function(e){return e.json()})).then((function(e){C(e.info),c(Fe([].concat(e.nodes.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{data:Object(r.a)(Object(r.a)({},e.data),{},{onShowNodeDetail:function(e){return p({visible:!0,node:e})}})})})),e.edges.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#001529",fillOpacity:.7},labelStyle:{fill:"#fff"},style:{stroke:e.label?"red":"#000"}})})))))})).catch(console.log)}),[e]),Object(v.jsx)(d.a,{i18n:l.a,children:Object(v.jsx)(V,{children:Object(v.jsx)(Y,{children:Object(v.jsx)(w,{children:Object(v.jsx)(y,{children:Object(v.jsx)(rt,{info:m,nodeDetail:h,setNodeDetail:p,children:i?Object(v.jsx)(ge,{elements:i}):Object(v.jsx)(b.a,{spinning:!0,children:Object(v.jsx)(u.a,{message:"Nothing to show",description:"Could not find any components to display",type:"warning"})})})})})})})})},lt=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,875)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))};a.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(st,{})}),document.getElementById("root")),lt()}},[[851,1,2]]]);
//# sourceMappingURL=main.71b5a135.chunk.js.map