(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),d=n(2),l=n(0),j=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};j.defaultPropTypes={color:"yellow"};var u=j,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(u,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var h=b,m=n(8),O=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text," ",Object(l.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(O,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),j=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),m=h[0],O=h[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:m}),o(""),u(""),O(!1)):alert("Please Add Task")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",value:a,placeholder:"Add Task",onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day & Time"}),Object(l.jsx)("input",{type:"text",value:j,placeholder:"Add Day & Time",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",value:m,checked:m,onChange:function(e){return O(e.target.checked)}})]}),Object(l.jsx)("input",{type:"submit",className:"btn btn-block",value:"Save Task"})]})})},p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"March 1 at 2:30pm",reminder:!0},{id:2,text:"Doctors Appointment",day:"March 1 at 2:30pm",reminder:!0},{id:3,text:"Doctors Appointment",day:"March 1 at 2:30pm",reminder:!0},{id:4,text:"Doctors Appointment",day:"March 1 at 2:30pm",reminder:!1}]),o=Object(d.a)(a,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(l.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);u([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(l.jsx)(x,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Task to show"]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.2de64493.chunk.js.map