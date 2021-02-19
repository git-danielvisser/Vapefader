(this.webpackJsonpvapefade=this.webpackJsonpvapefade||[]).push([[0],{157:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),c=a(12),s=a.n(c),l=(a(156),a(157),a(21));function j(){return new Worker(a.p+"static/js/generateSchema.worker.6110e6cb.worker.js")}function o(e,t){return e/100*t}var d=a(286),b=a(306),h=a(34),x=Object(d.a)({brand:{color:"#fff",fontFamily:"'Sarabun', sans-serif",fontSize:"2.4rem",letterSpacing:"unset",marginBottom:"30px"},tagline:{color:"#fff",fontSize:"1rem"}});var u=function(e){var t=e.brand,a=e.tagline,i=x();return Object(n.jsxs)(b.a,{align:"center",children:[Object(n.jsx)(h.a,{variant:"h1",className:i.brand,children:t}),a&&Object(n.jsx)(h.a,{variant:"h2",className:i.tagline,children:a})]})},m=a(261),O=a(289),g=a(310),p=a(290),v=a(291),f=a(292);function y(e){var t=e.strength,a=e.percentage,i=e.ml;return Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{p:1,children:Object(n.jsxs)(O.a,{container:!0,spacing:1,alignItems:"baseline",children:[Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(g.a,{label:"".concat(t," mg/ml"),icon:Object(n.jsx)(p.a,{}),size:"small",color:"primary"})}),Object(n.jsx)(O.a,{item:!0,xs:!0,children:Object(n.jsx)(g.a,{label:"".concat(a,"%"),icon:100===a?Object(n.jsx)(v.a,{}):Object(n.jsx)(f.a,{}),size:"small",variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(h.a,{variant:"body2",children:"".concat(i,"ml")})})]})})})}function S(e){var t=e.bottleML,a=e.strength,i=e.liquids;return Object(n.jsxs)(O.a,{container:!0,alignItems:"center",justify:"center",children:[Object(n.jsx)(O.a,{item:!0,xs:12,md:!0,children:Object(n.jsx)(y,{strength:i[0].strength,percentage:i[0].percentage,ml:o(t,i[0].percentage).toFixed(1)})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(b.a,{px:2,py:1,children:Object(n.jsx)(h.a,{align:"center",children:"+"})})}),Object(n.jsx)(O.a,{item:!0,xs:12,md:!0,children:Object(n.jsx)(y,{strength:i[1].strength,percentage:i[1].percentage,ml:o(t,i[1].percentage).toFixed(1)})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(b.a,{px:2,py:1,children:Object(n.jsx)(h.a,{align:"center",children:"="})})}),Object(n.jsx)(O.a,{item:!0,xs:12,md:!0,children:Object(n.jsx)(y,{strength:a.toFixed(2),percentage:100,ml:t})})]})}var q=a(305),w=a(293),F=Object(d.a)({gridBox:{background:"#eee"}});function C(e){var t=F(),a=Object(i.useState)(10),c=Object(l.a)(a,2),s=c[0],j=c[1];return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(b.a,{p:3,children:Object(n.jsx)(q.a,{label:"ML per bottle",type:"number",inputProps:{min:0,max:100,step:1},value:s,onChange:function(e){var t=e.target.value;t.length<5&&j(t)},variant:"outlined",fullWidth:!0})}),Object(n.jsx)(b.a,{py:3,className:t.gridBox,children:Object(n.jsx)(O.a,{container:!0,spacing:3,children:e.liquidMixes.map((function(e,t){var a=e.strength,i=e.liquids;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{px:3,children:Object(n.jsx)(S,{bottleML:s,strength:a,liquids:i})})}),Object(n.jsx)(O.a,{item:!0,xs:12,md:!0,children:Object(n.jsx)(w.a,{})})]},function(e){return"".concat(e[0].strength,"-").concat(e[1].strength)}(i))}))})})]})}var M=a(294),k=a(309),I=a(295),L=a(296),z=Object(d.a)({dialogContent:{padding:"0px",overflowX:"hidden",overflowY:"auto"}});function D(e){var t=e.strength,a=e.liquidMixes,r=Object(i.useState)(!1),c=Object(l.a)(r,2),s=c[0],j=c[1],o=z();return Object(n.jsx)(b.a,{children:Object(n.jsxs)(O.a,{container:!0,spacing:2,children:[Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsxs)(h.a,{component:"p",variant:"body2",children:["Mix your own liquids to ",t,"mg/ml."]})}),Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(h.a,{component:"h5",children:Object(n.jsx)(M.a,{onClick:function(){j(!0)},variant:"outlined",color:"primary",endIcon:Object(n.jsx)(p.a,{}),children:"Liquid mixes"})}),Object(n.jsxs)(k.a,{maxWidth:"md",open:s,onClose:function(){j(!1)},children:[Object(n.jsx)(I.a,{children:"Liquid mixes"}),Object(n.jsx)(w.a,{}),Object(n.jsx)(L.a,{className:o.dialogContent,children:Object(n.jsx)(C,{liquidMixes:a})})]})]})})]})})}var W=a(297),N=a(298),T=a(299),B=a(300),P=Object(d.a)({schemaItem:{height:"100%"}});function V(e){var t=e.date,a=e.strength,i=e.sessions,c=e.message,s=e.liquidMixes,l=P(),j=t.toLocaleString("default",{day:"numeric",month:"long"}),o=t.toLocaleString("default",{weekday:"long"});return Object(n.jsxs)(W.a,{align:"center",className:l.schemaItem,children:[Object(n.jsx)(N.a,{title:j,subheader:o}),Object(n.jsx)(w.a,{}),Object(n.jsx)(T.a,{children:Object(n.jsx)(b.a,{p:1,children:Object(n.jsxs)(O.a,{container:!0,spacing:3,children:[Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsxs)(O.a,{container:!0,spacing:1,justify:"center",children:[void 0!==i&&Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(g.a,{label:"".concat(i," sessions"),icon:Object(n.jsx)(B.a,{}),color:0!==i?"secondary":"default"})}),void 0!==a&&Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(g.a,{label:"".concat(a," mg/ml"),icon:Object(n.jsx)(p.a,{}),color:0!==a?"primary":"default"})})]})}),void 0!==c&&Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(h.a,{component:"p",children:c})})]})})}),s&&Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(w.a,{}),Object(n.jsx)(b.a,{p:3,children:Object(n.jsx)(D,{strength:a,liquidMixes:s})})]})]})}function Y(e){return Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",children:[Object(n.jsx)(b.a,{flexGrow:1,children:Object(n.jsx)(w.a,{})}),Object(n.jsx)(b.a,{px:2,children:e.children}),Object(n.jsx)(b.a,{flexGrow:1,children:Object(n.jsx)(w.a,{})})]})}function A(e){return Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{mb:5,children:Object(n.jsx)(h.a,{align:"center",variant:"h5",component:"h2",children:"Your quitting schema!"})})}),Object(n.jsx)(O.a,{item:!0,xs:12,children:G(e.schemaItems)})]})}function G(e){if(Array.isArray(e)&&!(e.length<1)){var t=[],a=null;return e.forEach((function(e,i){var r=e.date,c=e.strength,s=e.sessions,l=e.message,j=e.liquidMixes;if(!a||r.getMonth()>a.getMonth()||r.getFullYear()>a.getFullYear()){var o=r.toLocaleString("default",{month:"long",year:"numeric"});t.push(Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{mt:2,mb:2,children:Object(n.jsx)(Y,{children:Object(n.jsx)(h.a,{variant:"body2",component:"h5",children:o})})})},"divider-".concat(r.getTime())))}a=r,t.push(Object(n.jsx)(O.a,{item:!0,xs:12,md:4,children:Object(n.jsx)(V,{date:r,strength:c,sessions:s,message:l,liquidMixes:j||!1})},"item-".concat(r.getTime())))})),Object(n.jsx)(O.a,{container:!0,spacing:2,alignItems:"stretch",children:t})}}var E=a(129),R=a(44),J=a(130),H=a(312),K=a(16),X=a(304),Q=a(308),U=a(302);function Z(e){var t=e.id,a=e.name,i=e.label,r=e.placeholder,c=e.value,s=e.error,l=e.options,j=e.onChange,o=e.variant;return Object(n.jsx)(q.a,{select:!0,SelectProps:{multiple:!0,renderValue:function(e){return e.join(", ")}},id:t,name:a,label:i,placeholder:r,value:c,error:s,helperText:s,onChange:function(e){var t=[];l.forEach((function(a){e.target.value.includes(a.value)&&t.push(a.value)})),e.target.value=t,j(e)},variant:o,fullWidth:!0,children:l.map((function(e){return Object(n.jsxs)(H.a,{alignItems:"center",value:e.value,children:[Object(n.jsx)(Q.a,{checked:c.indexOf(e.value)>-1}),Object(n.jsx)(U.a,{primary:e.label})]},e.value)}))})}var $=Array(25).fill().map((function(e,t){return{label:t+" mg/ml",value:t}})).reverse(),_=[{label:"Vaping",value:"vaporizer"},{label:"Smoking",value:"cigarette"}];var ee=function(e){var t="This field is required!",a=Object(E.a)({initialValues:{device:"vaporizer",startDate:new Date,sessions:20,strengths:[12,11,10,9,8,7,6,5,4,3,2,1,0],decreaseFrequentie:7},validationSchema:R.e({device:R.c().oneOf(["vaporizer","cigarette"]),startDate:R.b().required(t),sessions:R.d().required(t).min(0).max(100),strengths:R.a().of(R.d().min(0).max(24)).min(3),decreaseFrequentie:R.d().required(t).min(0).max(100)}),onSubmit:function(t){e.onSubmit(t)}}),i=a.values,r=a.errors,c=a.handleChange,s="vaporizer"===i.device;return Object(n.jsx)("form",{className:"schema-form",onSubmit:a.handleSubmit,children:Object(n.jsxs)(O.a,{container:!0,spacing:5,justify:"center",children:[Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(q.a,{select:!0,id:"device",name:"device",value:i.device,error:r.device,onChange:c,label:"I want to quit",variant:"outlined",fullWidth:!0,children:_.map((function(e){return Object(n.jsx)(H.a,{value:e.value,children:e.label},e.value)}))})}),Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(K.a,{utils:J.a,children:Object(n.jsx)(X.a,{id:"startDate",name:"startDate",label:"Start date",value:i.startDate,error:r.startDate,onChange:function(e){return a.setFieldValue("startDate",e)},format:"dd/MM/yyyy",KeyboardButtonProps:{"aria-label":"change date"},variant:"inline",inputVariant:"outlined",disableToolbar:!0,fullWidth:!0})})}),Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(q.a,{type:"number",id:"sessions",name:"sessions",value:i.sessions,error:r.sessions,onChange:c,inputProps:{min:0,max:100,step:1},placeholder:"20 sessions",label:(s?"Vape":"Smoke")+" sessions a day",variant:"outlined",fullWidth:!0})}),s&&Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(Z,{id:"strengths",name:"strengths",value:i.strengths,error:r.strengths,onChange:c,options:$,label:"Decrease nicotine mg/ml in steps",placeholder:"12, 10, 8 , 7, 3, 0",variant:"outlined"})}),Object(n.jsx)(O.a,{item:!0,xs:12,children:Object(n.jsx)(q.a,{type:"number",id:"decreaseFrequentie",name:"decreaseFrequentie",value:i.decreaseFrequentie,error:r.decreaseFrequentie,onChange:c,inputProps:{min:0,max:100,step:1},placeholder:"7",label:"Decrease every x days",variant:"outlined",fullWidth:!0})}),Object(n.jsx)(O.a,{item:!0,children:Object(n.jsx)(M.a,{type:"submit",size:"large",variant:"contained",color:"primary",disabled:e.isLoading,children:"Generate schema!"})})]})})},te=a(303),ae=Object(d.a)({formSlide:{background:"linear-gradient(166deg, rgba(245,0,87,1) 10%, rgba(63,81,181,1) 90%)",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",boxSizing:"border-box",minHeight:"100vh"}});var ne=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)(!1),s=Object(l.a)(c,2),o=s[0],d=s[1],h=ae(),x=Object(i.useRef)(null);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b.a,{className:h.formSlide,children:Object(n.jsxs)(te.a,{maxWidth:"sm",children:[Object(n.jsx)("header",{className:"header",children:Object(n.jsx)(b.a,{p:5,children:Object(n.jsx)(u,{brand:"Vapefader",tagline:"Gradually quit vaping or smoking  with a generated schema."})})}),Object(n.jsx)(b.a,{children:Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{p:5,children:Object(n.jsx)(ee,{onSubmit:function(e){d(!0);var t=new j;t.postMessage(e),t.onmessage=function(e){r(e.data),d(!1),function(e,t){var a=e.getBoundingClientRect().top+window.pageYOffset+t;window.scrollTo({top:a,behavior:"smooth"})}(x.current,-40)}},isLoading:o})})})})]})}),a&&Object(n.jsx)(b.a,{p:2,mt:5,children:Object(n.jsx)(te.a,{ref:x,maxWidth:"md",children:Object(n.jsx)(A,{schemaItems:a})})})]})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,315)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ne,{})}),document.getElementById("root")),ie()}},[[259,1,2]]]);
//# sourceMappingURL=main.1521efd5.chunk.js.map