(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(15),o=n.n(c),a=n(6),u=n(3),i=n(0),s=function(e){var t=e.handleSubmit,n=e.nameInputController,r=e.numberInputController,c=e.newName,o=e.newNumber;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsxs)("p",{children:["name:",Object(i.jsx)("input",{value:c,onChange:n})]}),Object(i.jsxs)("p",{children:["number:",Object(i.jsx)("input",{value:o,onChange:r})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:t,type:"submit",children:"add"})})]})},l=function(e){var t=e.persons,n=e.handleDelete;return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[t.name," ",t.number," ",Object(i.jsx)("button",{onClick:n,children:"delete"})]})})},d=function(e){var t=e.persons,n=e.filtered,r=e.filteredInput,c=e.handleDelete;return r?Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(i.jsx)(l,{persons:e,handleDelete:function(){return c(e)}},e.name)}))]}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),t.map((function(e){return Object(i.jsx)(l,{persons:e,handleDelete:function(){return c(e)}},e.name)}))]})},j=function(e){e.persons;var t=e.filterController;return Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:["filter shown with ",Object(i.jsx)("input",{onChange:t})]})})},b=function(e){var t=e.successMessage,n=e.failMessage,r={color:t?"green":"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return n?Object(i.jsx)("div",{style:r,children:n}):t?Object(i.jsx)("div",{style:r,children:t}):Object(i.jsx)(i.Fragment,{})},f=n(4),h=n.n(f),O="/api/notes",m={getAll:function(){return h.a.get(O).then((function(e){return e.data}))},createPerson:function(e){return h.a.post(O,e).then((function(e){return e.data}))},deletePerson:function(e){return h.a.delete(O+"/"+e.id,e)},updatePerson:function(e){return h.a.put(O+"/"+e.id,e).then((function(e){return e.data}))}},p=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),l=Object(u.a)(o,2),f=l[0],h=l[1],O=Object(r.useState)(""),p=Object(u.a)(O,2),v=p[0],x=p[1],g=Object(r.useState)(""),w=Object(u.a)(g,2),C=w[0],y=w[1],S=Object(r.useState)([]),k=Object(u.a)(S,2),D=k[0],I=k[1],P=Object(r.useState)(""),N=Object(u.a)(P,2),A=N[0],M=N[1],B=Object(r.useState)(""),E=Object(u.a)(B,2),J=E[0],L=E[1];Object(r.useEffect)((function(){m.getAll().then((function(e){c(e)}))}),[]);var z=function(){return setTimeout((function(){M(null),L(null)}),3e3)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(b,{successMessage:A,failMessage:J}),Object(i.jsx)(j,{filterController:function(e){y(e.target.value);var t=n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.number.includes(e.target.value)}));I(t)}}),Object(i.jsx)(s,{handleSubmit:function(e){e.preventDefault();for(var t=function(e){if(n[e].name===f)return window.confirm("".concat(f," is already added to the phonebook. Do you want to replace the old number with this new one?"))&&m.updatePerson(Object(a.a)(Object(a.a)({},n[e]),{},{number:v})).then((function(t){c(n.map((function(r){return r.id!==n[e].id?r:t}))),M("Changed ".concat(f,"'s number")),z(),h(""),x("")})).catch((function(e){L("Information of ".concat(f," has already been removed from the server.")),z()})),{v:void 0}},r=0;r<n.length;r++){var o=t(r);if("object"===typeof o)return o.v}var u={name:f,number:v};m.createPerson(u).then((function(e){return c(n.concat([e]))})),M("Added ".concat(f)),z(),h(""),x("")},nameInputController:function(e){h(e.target.value)},numberInputController:function(e){x(e.target.value)},newName:f,newNumber:v}),Object(i.jsx)(d,{persons:n,filtered:D,filteredInput:C,handleDelete:function(e){window.confirm("Are you sure you want to delete ".concat(e.name,"'s contact?"))&&(m.deletePerson(e),c(n.filter((function(t){return t!==e}))),M("Deleted ".concat(e.name)),z())}})]})};o.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.047a1f89.chunk.js.map