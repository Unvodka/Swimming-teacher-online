(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(37),r=s.n(n),i=s(8),l=s(2),o=s(9),j=s.n(o),d=s(15),m=s(6),b=s(10),h=s(3),u=s(16),p=s.n(u),O=(s(31),s(7)),x=s.n(O),g=s(0),f=function(){var e=Object(a.useState)({email:"",password:""}),t=Object(h.a)(e,2),s=t[0],c=t[1],n=function(e){var t,a=e.target,n=a.name,r=a.email,i=a.password,l=a.value;c(Object(b.a)(Object(b.a)({},s),{},(t={},Object(m.a)(t,n,l),Object(m.a)(t,r,l),Object(m.a)(t,i,l),t)))},r=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("http://localhost:4005/user/login",s);case 4:a=e.sent,localStorage.setItem("firstLogin",!0),localStorage.setItem("accessToken",a.data.accesstoken),localStorage.setItem("user-info",s.email),sessionStorage.setItem("activeSession","true"),window.location.href="/home",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a,{duration:500,right:!0,opposite:!0,children:Object(g.jsx)("form",{onSubmit:r,className:"login-register",children:Object(g.jsxs)("fieldset",{className:"login",children:[Object(g.jsx)("legend",{children:"Login or Register"}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(g.jsx)("i",{class:"far fa-envelope"}),Object(g.jsx)("input",{type:"email",name:"email",value:s.email,onChange:n,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)("i",{class:"fas fa-key"}),Object(g.jsx)("input",{type:"password",name:"password",value:s.password,onChange:n,className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(g.jsx)("button",{className:"btn-form submit",type:"submit",children:"LOGIN"}),Object(g.jsx)("p",{children:"or"}),Object(g.jsx)(i.b,{to:"/register",children:Object(g.jsx)("button",{className:"btn-form",children:"Register"})})]})})}),Object(g.jsxs)(x.a,{duration:500,left:!0,opposite:!0,children:[Object(g.jsxs)("div",{className:"link-to-column",children:[Object(g.jsx)("p",{children:"Almost there"}),Object(g.jsx)("p",{children:"Have a look and take a training"}),Object(g.jsx)("p",{children:"Question ? Anything ?"})]}),Object(g.jsx)("button",{className:"btn-form",children:"SEE HERE"}),Object(g.jsx)("button",{className:"btn-form",children:"OR HERE"})]})]})},v=function(){var e=Object(a.useState)({name:"",email:"",password:""}),t=Object(h.a)(e,2),s=t[0],c=t[1],n=function(e){var t,a=e.target,n=a.name,r=a.email,i=a.password,l=a.value;c(Object(b.a)(Object(b.a)({},s),{},(t={},Object(m.a)(t,n,l),Object(m.a)(t,r,l),Object(m.a)(t,i,l),t)))},r=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("http://localhost:4005/user/register",s).then((function(e){return console.log(e.data)}));case 4:window.location.href="/login",e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)(x.a,{duration:500,left:!0,opposite:!0,children:Object(g.jsx)("form",{className:"login-register",onSubmit:r,children:Object(g.jsxs)("fieldset",{className:"login",children:[Object(g.jsx)("legend",{children:"Register or Click Login"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{type:"text",id:"name",name:"name",value:s.name,onChange:n,placeholder:"Enter your name",required:!0})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email"}),Object(g.jsx)("i",{class:"far fa-envelope"}),Object(g.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:n,placeholder:"Enter email",required:!0})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password"}),Object(g.jsx)("i",{class:"fas fa-key"}),Object(g.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:n,placeholder:"Password",required:!0})]}),Object(g.jsx)("button",{className:"btn-form submit",children:"REGISTER"}),Object(g.jsx)("p",{children:"or"}),Object(g.jsx)(i.b,{to:"/login",children:Object(g.jsx)("button",{className:"btn-form",type:"submit",children:"Login"})})]})})}),Object(g.jsx)(x.a,{duration:500,right:!0,opposite:!0,children:Object(g.jsxs)("div",{className:"link-to",children:[Object(g.jsx)("p",{children:"OR"}),Object(g.jsx)("p",{children:"Click here to go as visitor"}),Object(g.jsx)(i.b,{to:"/home",children:Object(g.jsx)("button",{className:"btn-form",children:"ENTER"})})]})})]})},w=(s(71),s(72),function(){var e=localStorage.getItem("user-info");return Object(g.jsx)("div",{className:"header",children:sessionStorage.getItem("activeSession")?Object(g.jsxs)("div",{className:"logout-dropdown",children:["Connected as ",e&&e,Object(g.jsx)("a",{href:"/login",children:Object(g.jsx)("button",{className:"logout",onClick:function(){localStorage.clear(),sessionStorage.clear()},children:"LOGOUT"})})]}):null})}),y=function(){return Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",children:Object(g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(g.jsx)(w,{}),Object(g.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link","aria-current":"page",href:"#aboutId",children:"About"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link",href:"#experiencesId",children:"Experiences"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link",href:"#servicesId",children:"Services"})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link",href:"#contactId",children:"Contact"})})]})]})})},N=s(17),k=s.n(N),S=s(38),I=s.n(S),C=(s(73),function(){return Object(g.jsxs)("div",{id:"aboutId",className:"about",children:[Object(g.jsxs)(k.a,{distance:"70vh",duration:500,top:!0,cascade:!0,children:[Object(g.jsx)("a",{href:"#contactId",children:Object(g.jsx)("h1",{children:"Your Swim'in Teacher Online"})}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:" - -  About me - - "}),Object(g.jsx)("p",{children:"Hi my name is Arnaud and i'm a 30 years old swimming teacher, aquafitness instructor and lifeguard since 5 years now. I'm also web developer since 2020. I worked for many different companies and i got lucky to work in many differents places like council pools, fitness centers, SPA and private properties. "}),Object(g.jsx)("p",{children:"Before 2016 i was employed at MacDonald, I worked for 4 years in there when i was a young pal. That was a really good experience and training, but i decided to change my activity because it was not my career path i would say. Then i started rescue training and then swimming."}),Object(g.jsx)("br",{})]}),Object(g.jsx)(I.a,{right:!0,big:!0,cascade:!0,children:Object(g.jsxs)("div",{className:"img-profil",children:[Object(g.jsx)("img",{src:"/butterfly.jpg",alt:"swimmer",width:"30%",height:"20%"}),Object(g.jsx)("img",{className:"profil",src:"/profil.jpg",alt:"profil",width:"300px"}),Object(g.jsx)("img",{src:"/swim.jpg",alt:"swimmer",width:"30%",height:"25%"})]})})]})}),E=(s(74),function(){return Object(g.jsx)("div",{id:"experiencesId",className:"experiences",children:Object(g.jsxs)(k.a,{duration:500,top:!0,cascade:!0,children:[Object(g.jsx)("h2",{children:" - -  Experiences  - - "}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"text-container",children:[Object(g.jsxs)("h3",{children:["2016-2021 ",Object(g.jsx)("br",{}),"Lifeguard To Swimming Teacher And Aquafitness Instructor :"]}),Object(g.jsxs)("p",{children:["I started to be an independent swimming teacher and aquafitness instructor right after diploma.",Object(g.jsx)("br",{}),"I worked in many different type of establishment: Council (or not) Pools, Fitness Centers, Aquabiking Centers, SPA and private pools.",Object(g.jsx)("br",{}),"I teached swimming but also an other part of sport: nutrition, mental, habbits etc... "]}),Object(g.jsx)("br",{}),Object(g.jsxs)("h3",{children:["2020 ",Object(g.jsx)("br",{})," Web Developer :"]}),Object(g.jsxs)("p",{children:["As it was a covid time lockdown for most of people and companies, i decided to do something during this time.",Object(g.jsx)("br",{}),"Then i trained to become a Javascript web developer wich is a language in development. I did this to work on web and mobile app and design. ",Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://www.mydeveloperwebsite.com",target:"_blank",rel:"noreferrer",className:"btn",children:"Here is my work:  www.mydeveloperwebsite.com"})]})]})]})})}),A=s(18),L=s(39),T=s(43),B=s(42),q=(s(75),s(40)),R=function(e){Object(T.a)(s,e);var t=Object(B.a)(s);function s(){return Object(A.a)(this,s),t.apply(this,arguments)}return Object(L.a)(s,[{key:"render",value:function(){return Object(g.jsxs)(q.Carousel,{className:"carousel-container",infiniteLoop:"true",children:[Object(g.jsxs)("div",{className:"carousel-img",children:[Object(g.jsx)("img",{src:"/nutrition.jpg",alt:"vegetables"}),Object(g.jsx)("p",{className:"legend",children:"Nutrition"})]}),Object(g.jsxs)("div",{className:"carousel-img",children:[Object(g.jsx)("img",{src:"/butterfly.jpg",alt:"swimmer"}),Object(g.jsx)("p",{className:"legend",children:"Swimming"})]}),Object(g.jsxs)("div",{className:"carousel-img",children:[Object(g.jsx)("img",{src:"/training2.jpg",alt:"body sculpt"}),Object(g.jsx)("p",{className:"legend",children:"Body Scultp"})]}),Object(g.jsxs)("div",{className:"carousel-img",children:[Object(g.jsx)("img",{src:"/diving.jpg",alt:"swimmer"}),Object(g.jsx)("p",{className:"legend",children:"Diving"})]}),Object(g.jsxs)("div",{className:"carousel-img",children:[Object(g.jsx)("img",{src:"/meditation2.jpg",alt:"meditation"}),Object(g.jsx)("p",{className:"legend",children:"Mental"})]}),Object(g.jsxs)("div",{className:"carousel-img",children:[Object(g.jsx)("img",{src:"/relaxation3.jpg",alt:"relaxation"}),Object(g.jsx)("p",{className:"legend",children:"Relaxation"})]})]})}}]),s}(a.Component),H=(s(83),function(){return Object(g.jsxs)("div",{id:"servicesId",className:"services",children:[Object(g.jsx)("h2",{children:" - -  Services  - - "}),Object(g.jsx)("br",{}),Object(g.jsx)(R,{})]})}),P=s(41);s(84);Object(P.a)("user_j0DBFik1bsTzzxgRJJoNa");var F=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(h.a)(n,2),i=r[0],l=r[1],o=Object(a.useState)(""),j=Object(h.a)(o,2),d=j[0],m=j[1],b=Object(a.useState)(""),u=Object(h.a)(b,2),p=u[0],O=u[1],x=Object(a.useState)(""),f=Object(h.a)(x,2),v=f[0],w=f[1],y=function(e,t){window.emailjs.send("gmail",e,t).then((function(e){!function(){var e=document.querySelector(".form-message");e.innerHTML="Succes, your message has been send",e.style.background="green",e.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),setTimeout((function(){e.style.opacity="0"}),5e3)}(),c(""),l(""),m(""),O(""),w("")})).catch((function(e){return document.querySelector(".form-message").innerHTML="An error occurs, please try again."}))};return Object(g.jsxs)("form",{id:"contactId",className:"contact",children:[Object(g.jsx)("h2",{children:" - -  Contact - - "}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"form-content",children:[Object(g.jsx)("input",{type:"text",id:"name",name:"name",onChange:function(e){return c(e.target.value)},placeholder:"name *",value:s,autoComplete:"off"}),Object(g.jsx)("input",{type:"text",id:"company",name:"company",onChange:function(e){return l(e.target.value)},placeholder:"company",value:i}),Object(g.jsx)("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return m(e.target.value)},placeholder:"phone",value:d}),Object(g.jsxs)("div",{className:"email-content",children:[Object(g.jsx)("label",{id:"not-mail",children:"Non valid email"}),Object(g.jsx)("input",{type:"mail",id:"email",name:"email",onChange:function(e){return O(e.target.value)},placeholder:"email *",value:p,autoComplete:"off"})]}),Object(g.jsx)("textarea",{id:"message",name:"message",onChange:function(e){return w(e.target.value)},placeholder:"message *",value:v})]}),Object(g.jsx)("input",{className:"button",type:"button",value:"Send ...",onClick:function(e){e.preventDefault(),s&&function(){var e=document.getElementById("not-mail");return p.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),2e3),!1)}()&&v?y("template_d9wvswt",{name:s,company:i,phone:d,email:p,message:v}):function(){var e=document.querySelector(".form-message");e.innerHTML="Please full fill require fields *",e.style.opacity="1",e.style.background="rgb(253,87,87)",document.getElementById("name").classList.add("error"),document.getElementById("email").classList.add("error"),document.getElementById("message").classList.add("error")}()}}),Object(g.jsx)("div",{className:"form-message"}),Object(g.jsx)("p",{className:"contactP",children:"If you prefer, you can contact me by phone directly (see below) "})]})};s(85);var M=function(){return Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsxs)("div",{className:"footer-left",children:[Object(g.jsx)("p",{children:"Contact : Arnaud Chevallier :"}),Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{class:"fas fa-map-marker-alt",children:" "})," Antibes, France"]}),Object(g.jsxs)("p",{children:[" ",Object(g.jsx)("i",{class:"fas fa-phone-square"})," +33 07 49 48 62 03"]}),Object(g.jsx)("a",{href:"mailto:chevallier.a06@gmail.com",children:Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{class:"far fa-envelope"})," chevallier.a06@gmail.com"]})})]}),Object(g.jsxs)("div",{className:"footer-center",children:[Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"bi icon",width:"32",height:"32",fill:"currentColor",role:"img",viewBox:"0 0 24 24",children:[Object(g.jsx)("title",{children:"AdBlock"}),Object(g.jsx)("path",{d:"M7.775 0a1.8 1.8 0 0 0-1.273.527L.528 6.503A1.8 1.8 0 0 0 0 7.775v8.45c0 .478.19.936.528 1.274l5.974 5.974A1.8 1.8 0 0 0 7.775 24h8.45a1.8 1.8 0 0 0 1.273-.527l5.975-5.974A1.8 1.8 0 0 0 24 16.225v-8.45a1.8 1.8 0 0 0-.527-1.272L17.498.527A1.8 1.8 0 0 0 16.225 0zm4.427 3c1.02 0 .958 1.108.958 1.108v6.784s-.009.218.16.218c.188 0 .175-.226.175-.226l-.002-5.63s-.05-.986.959-.986c1.01 0 .97.983.97.983v7.621s.014.158.141.158c.127 0 .944-2.122.944-2.122s.451-1.497 2.576-1.1c.038.008-.167.688-.167.688l-2.283 6.556S15.69 20.7 11.714 20.7c-5.044 0-4.808-5.407-4.814-5.405V7.562s-.016-.99.897-.99c.858 0 .849.99.849.99l.007 3.583s-.004.172.167.172c.16 0 .141-.172.141-.172l.01-5.926s-.055-1.162.966-1.162c1.04 0 .983 1.142.983 1.142v5.611s-.005.204.152.204c.168 0 .154-.206.154-.206l.01-6.693S11.18 3 12.202 3Z"})]}),Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",className:"bi bi-facebook",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})}),Object(g.jsx)("p",{children:"Copyright\xa9 2021 | All rights reserved."})]})]})};s(86);function z(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(y,{}),Object(g.jsx)(C,{}),Object(g.jsx)(E,{}),Object(g.jsx)(H,{}),Object(g.jsx)(F,{})]})}var D=function(){return Object(g.jsx)(i.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/",element:Object(g.jsx)(v,{})}),Object(g.jsx)(l.a,{path:"/login",element:Object(g.jsx)(f,{})}),Object(g.jsx)(l.a,{path:"/register",element:Object(g.jsx)(v,{})}),Object(g.jsx)(l.a,{path:"/home",element:Object(g.jsx)(z,{})})]}),Object(g.jsx)(M,{})]})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.a32a92e6.chunk.js.map