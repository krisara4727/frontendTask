(this.webpackJsonptask1=this.webpackJsonptask1||[]).push([[0],{113:function(e,a,t){},114:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),l=t.n(r),i=(t(113),t(114),t(51)),o=t(12),s=t(11),m=t(26),j=t(18),u=t(189),d=t(163),b=t(91),h=t(186),p=t(187),g=t(193),x=t(190),O=t(192),v=t(195),f=t(92),y=t(188),C=t(95),N=t.n(C),w=t(4);var D=function(){var e=Object(n.useState)({firstName:"",lastName:"",phoneNumber:null,age:null,gender:"male",email:"",state:"",city:"",pincode:null,occupation:"10",qualification:"20"}),a=Object(j.a)(e,2),t=a[0],c=a[1],r=function(e){console.log("%c for ".concat(e.target.name," , ").concat(e.target.value," "),"color:green"),c(Object(m.a)(Object(m.a)({},t),{},Object(s.a)({},e.target.name,e.target.value)))};return console.log("the full form ",t),Object(w.jsx)("div",{children:Object(w.jsxs)(u.a,{component:"div",maxWidth:"sm",style:{display:"flex",flexDirection:"column",marginBottom:"1rem"},children:[Object(w.jsx)(d.a,{variant:"h4",color:"primary",style:{margin:"1rem 0"},children:"Task-1"}),Object(w.jsx)(b.a,{type:"string",variant:"outlined",label:"First Name",color:"primary",value:t.firstName,onChange:r,name:"firstName",margin:"normal"}),Object(w.jsx)(b.a,{type:"string",variant:"outlined",label:"Last Name",value:t.lastName,color:"primary",name:"lastName",margin:"normal",onChange:r}),Object(w.jsx)(N.a,{name:"phoneNumber",label:"Phone Number","data-cy":"user-phone",defaultCountry:"ind",variant:"outlined",margin:"normal",value:t.phoneNumber,onChange:function(e){c(Object(m.a)(Object(m.a)({},t),{},{phoneNumber:e}))}}),Object(w.jsx)(b.a,{type:"email",variant:"outlined",value:t.email,onChange:r,label:"E-mail",color:"primary",margin:"normal",name:"email"}),Object(w.jsx)(b.a,{type:"string",value:t.state,onChange:r,variant:"outlined",label:"State",color:"primary",margin:"normal",name:"state"}),Object(w.jsx)(b.a,{type:"string",value:t.city,onChange:r,variant:"outlined",label:"City",color:"primary",margin:"normal",name:"city"}),Object(w.jsx)(b.a,{type:"number",value:t.pincode,onChange:r,variant:"outlined",label:"Pincode",color:"primary",margin:"normal",name:"pincode"}),Object(w.jsx)(b.a,{type:"number",value:t.age,onChange:r,variant:"outlined",label:"Age",color:"primary",margin:"normal",name:"age"}),Object(w.jsxs)(h.a,{component:"fieldset",style:{marginTop:"1rem"},children:[Object(w.jsx)(p.a,{component:"legend",align:"left",style:{fontSize:"1.3rem",display:"flex"},children:"Gender"}),Object(w.jsxs)(g.a,{row:!0,"aria-label":"gender",name:"gender",value:t.gender,onChange:r,children:[Object(w.jsx)(x.a,{value:"female",control:Object(w.jsx)(O.a,{}),label:"Female"}),Object(w.jsx)(x.a,{value:"male",control:Object(w.jsx)(O.a,{}),label:"Male"}),Object(w.jsx)(x.a,{value:"other",control:Object(w.jsx)(O.a,{}),label:"Other"})]})]}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(p.a,{id:"demo-simple-select-label",align:"left",style:{marginTop:"1rem"},children:"Occupation"}),Object(w.jsxs)(v.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",variant:"outlined",color:"primary",name:"occupation",value:t.occupation,onChange:r,children:[Object(w.jsx)(f.a,{value:10,children:"occupation1"}),Object(w.jsx)(f.a,{value:20,children:"occupation2"}),Object(w.jsx)(f.a,{value:30,children:"occupation3"})]})]}),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(p.a,{id:"demo-simple-select-label",align:"left",style:{marginTop:"1rem"},children:"Qualification"}),Object(w.jsxs)(v.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",variant:"outlined",color:"primary",name:"qualification",value:t.qualification,onChange:r,children:[Object(w.jsx)(f.a,{value:10,children:"occupation1"}),Object(w.jsx)(f.a,{value:20,children:"occupation2"}),Object(w.jsx)(f.a,{value:30,children:"occupation3"})]})]}),Object(w.jsx)(y.a,{})]})})},T=t(191),k=t(88),S=Object(T.a)((function(e){return{marginAbove:{marginTop:"1rem"},flexDown:{display:"flex",flexDirection:"column"},flexCenter:{alignItems:"center",justifyContent:"space-between"},marginDown:{marginBottom:"1rem"},containerWidth:{flexGrow:1}}}));var I=function(){var e=S();return Object(w.jsxs)("div",{className:e.flexDown,children:[Object(w.jsx)(d.a,{align:"center",variant:"h3",color:"textSecondary",gutterBottom:"true",className:e.marginAbove,children:"Assignment-1"}),Object(w.jsxs)(u.a,{className:" ".concat(e.flexDown,"  "),maxWidth:"sm",children:[Object(w.jsx)(i.b,{to:"/",className:" ".concat(e.flexDown," ").concat(e.marginDown),children:Object(w.jsx)(k.a,{color:"primary",variant:"contained",size:"large",disabled:"true",children:"Home"})}),Object(w.jsx)(i.b,{to:"/task1",className:"".concat(e.flexDown," ").concat(e.marginDown),children:Object(w.jsx)(k.a,{color:"primary",variant:"contained",size:"large",children:"Task-1(form)"})}),Object(w.jsx)(i.b,{to:"/task2",className:"".concat(e.flexDown," ").concat(e.marginDown),children:Object(w.jsx)(k.a,{color:"primary",variant:"contained",size:"large",children:"Task-2(redux)"})})]})]})},B="USER_INPUT",F=t(45);var A=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],c=a[1],r=Object(o.f)(),l=Object(F.b)();return Object(w.jsx)("div",{children:Object(w.jsxs)(u.a,{maxWidth:"sm",style:{display:"flex",flexDirection:"column",marginTop:"1rem"},children:[Object(w.jsx)(d.a,{variant:"h4",color:"secondary",margin:"normal",children:"This is the parent component"}),Object(w.jsx)(b.a,{type:"string",value:t,onChange:function(e){c(e.target.value)},variant:"outlined",margin:"normal",label:"enter input"}),Object(w.jsx)(k.a,{color:"primary",variant:"contained",onClick:function(){var e;l((e=t,function(a){a({type:B,payload:e})})),r.push("/child")},margin:"normal",disabled:!t,children:"Go to child"})]})})};var P=function(){var e=Object(F.c)((function(e){return e.userInput})).userString;return console.log("the suser input from redux ",e),Object(w.jsx)("div",{style:{minHeight:"100vh"},children:Object(w.jsxs)(u.a,{component:"div",maxWidth:"sm",style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"2rem"},children:[Object(w.jsx)(d.a,{gutterBottom:"true",variant:"subTitle",margin:"normal",children:"This is the child component.Below is the data fetched from the redux store."}),Object(w.jsx)(d.a,{variant:"h3",color:"secondary",gutterBottom:"true",children:e})]})})};var W=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{path:"/task1",component:D}),Object(w.jsx)(o.a,{path:"/task2",component:A}),Object(w.jsx)(o.a,{path:"/child",component:P}),Object(w.jsx)(o.a,{path:"/",component:I})]})})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,196)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),n(e),c(e),r(e),l(e)}))},q=t(98),E=t(56),G=E.c,L=Object(E.b)({userInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case B:return Object(m.a)(Object(m.a)({},e),{},{userString:a.payload});default:return e}}}),H=Object(E.d)(L,{userInput:{userString:""}},G(Object(E.a)(q.a)));l.a.render(Object(w.jsx)(F.a,{store:H,children:Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(W,{})})}),document.getElementById("root")),z()}},[[155,1,2]]]);
//# sourceMappingURL=main.5dc935df.chunk.js.map