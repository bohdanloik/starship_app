(this.webpackJsonpstarship_app=this.webpackJsonpstarship_app||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,s=n(1),r=n.n(s),i=n(10),a=n.n(i),j=(n(15),n(16),n(8)),u=n(32),l=n(24),o=n(25),d=n(26),b=n(2),x=function(e){return Object(b.jsxs)(l.a,{size:"lg",className:"d-flex justify-content-center",children:[Object(b.jsx)(o.a,{disabled:!e.prev,children:Object(b.jsx)(d.a,{previous:!0,href:"#",onClick:function(){e.onClick(c.prev)}})}),Object(b.jsx)(o.a,{disabled:!e.next,children:Object(b.jsx)(d.a,{next:!0,href:"#",onClick:function(){e.onClick(c.next)}})})]})},f=n(27),h=n(28),p=n(29),O=n(30),v=n(31),m=(n(20),function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(f.a,{className:"border border-danger border-2 ",children:Object(b.jsxs)(h.a,{className:"text-center",children:[Object(b.jsx)(p.a,{className:"text-truncate fw-bold",tag:"h5",children:e.item.name}),Object(b.jsx)(O.a,{tag:"h6",className:"mb-2 text-muted text-truncate ",children:e.item.model}),Object(b.jsxs)(v.a,{className:"text-truncate text-uppercase fw-bold",children:["Starship Class: ",e.item.starship_class," ",Object(b.jsx)("br",{}),"Hyperdriive Rating: ",e.item.hyperdrive_rating,Object(b.jsx)("br",{}),"Pessengers: ",e.item.passengers,Object(b.jsx)("br",{}),"Manufacturer: ",e.item.manufacturer]})]})})})});n(21);!function(e){e.next="next",e.prev="prev"}(c||(c={}));var g=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(s.useState)(null),a=Object(j.a)(i,2),l=a[0],o=a[1];Object(s.useEffect)((function(){fetch(l||"https://swapi.dev/api/starships/").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[l]);return n?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"d-flex flex-wrap justify-content-center cards-gaps pt-3 pb-3",children:n.results.map((function(e,t){return Object(b.jsx)(m,{item:e},t)}))}),Object(b.jsx)(x,{next:n.next,prev:n.previous,onClick:function(e){switch(e){case c.prev:o(null===n||void 0===n?void 0:n.previous);break;case c.next:o(null===n||void 0===n?void 0:n.next)}}})]}):Object(b.jsx)("div",{className:"d-flex justify-content-center vh-100",children:Object(b.jsx)(u.a,{color:"danger",children:"",className:"m-auto"})})};var C=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};n(22);a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),N()}},[[23,1,2]]]);
//# sourceMappingURL=main.7effed05.chunk.js.map