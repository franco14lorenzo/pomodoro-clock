(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(3),r=c.n(i),a=(c(11),c(2)),o=(c(12),c(1));var j=function(){return Object(o.jsxs)("div",{class:"footer",children:["by ",Object(o.jsx)("a",{href:"https://github.com/franco14lorenzo",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("u",{children:"Franco Lorenzo"})})]})};var l=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(1500),r=Object(a.a)(i,2),l=r[0],b=r[1],d=Object(n.useState)(1500),u=Object(a.a)(d,2),O=u[0],f=u[1],h=Object(n.useState)(300),x=Object(a.a)(h,2),m=x[0],v=x[1],g=Object(n.useState)(!1),k=Object(a.a)(g,2),p=k[0],S=k[1],N=Object(n.useState)(!1),w=Object(a.a)(N,2),C=w[0],y=w[1],I=Object(n.useState)(1),E=Object(a.a)(I,2),B=E[0],D=E[1],L=Object(n.useRef)();Object(n.useEffect)((function(){O<=0?(y(!0),R()):p||O!==m||y(!1),console.log("test")}),[O,C,p,m,l,c,B]);var R=function(){L.current.play()},T=function(e){var t=Math.floor(e/60),c=e%60;return(t<10?"0"+t:t)+":"+(c<10?"0"+c:c)},z=function(e,t){if("break"===e){if(m<=60&&t<0)return;v((function(e){return e+t}))}else{if(l<=60&&t<0)return;b((function(e){return e+t})),!1===p&&f((function(e){return e+t}))}};return Object(o.jsx)("div",{className:"App",children:c?Object(o.jsxs)("div",{id:"cog",children:[Object(o.jsxs)("div",{id:"settings",children:[Object(o.jsx)("h1",{children:"Settings"}),Object(o.jsxs)("div",{id:"session-label",children:[Object(o.jsx)("h5",{children:"Session Length"}),Object(o.jsxs)("div",{className:"config",children:[Object(o.jsx)("button",{className:"button",id:"session-increment",onClick:function(){return z("session",60)},children:Object(o.jsx)("i",{class:"fas fa-arrow-up"})}),Object(o.jsx)("div",{id:"session-length",className:"block",children:T(l)}),Object(o.jsx)("button",{className:"button",id:"session-decrement",onClick:function(){return z("session",-60)},children:Object(o.jsx)("i",{class:"fas fa-arrow-down"})})]})]}),Object(o.jsxs)("div",{id:"break-label",children:[Object(o.jsx)("h5",{children:"Break Length"}),Object(o.jsxs)("div",{className:"config",children:[Object(o.jsx)("button",{className:"button",id:"break-increment",onClick:function(){return z("break",60)},children:Object(o.jsx)("i",{class:"fas fa-arrow-up"})}),Object(o.jsx)("div",{id:"break-length",className:"block",children:T(m)}),Object(o.jsx)("button",{className:"button",id:"break-decrement",onClick:function(){return z("break",-60)},children:Object(o.jsx)("i",{class:"fas fa-arrow-down"})})]})]})]}),Object(o.jsx)("div",{id:"panel",children:Object(o.jsxs)("button",{className:"button",id:"cog",onClick:function(){return s(!1)},children:[Object(o.jsx)("i",{class:"fas fa-arrow-left"})," Return"]})}),Object(o.jsx)(j,{})]}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{id:"timer",children:[Object(o.jsx)("h3",{id:"timer-label",children:C?"BREAK "+B:"SESSION "+B}),Object(o.jsx)("div",{id:"time-left",children:T(O)}),Object(o.jsx)("audio",{src:"https://actions.google.com/sounds/v1/alarms/beep_short.ogg",ref:L,id:"beep"}),Object(o.jsxs)("div",{id:"controls-buttons",children:[Object(o.jsx)("button",{id:"play-pause",className:"button",onClick:function(){return function(){(new Date).getTime();var e=(new Date).getTime()+1e3,t=C,c=B;if(!p){var n=setInterval((function(){(new Date).getTime()>e&&(f((function(e){return e<=0&&!t?(t=!0,c-=1,m):e<=0&&t?(t=!1,D(c+=1),c+=1,y(!1),l):e-1})),e+=1e3)}),30);localStorage.clear(),localStorage.setItem("interval-id",n)}p&&clearInterval(localStorage.getItem("interval-id")),S(!p)}()},children:p?Object(o.jsx)("i",{class:"fas fa-pause"}):Object(o.jsx)("i",{class:"fas fa-play"})}),p?"":Object(o.jsx)("button",{id:"reset",className:"button",onClick:function(){return v(300),b(1500),f(1500),void(p&&S(!1))},children:Object(o.jsx)("i",{class:"fas fa-history"})})]})]}),Object(o.jsx)("div",{id:"panel",children:Object(o.jsxs)("button",{className:"button",id:"config",onClick:function(){return s(!0)},children:[Object(o.jsx)("i",{class:"fas fa-cog"}),"Settings"]})}),Object(o.jsx)(j,{})]})})};c(18);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9e233bb9.chunk.js.map