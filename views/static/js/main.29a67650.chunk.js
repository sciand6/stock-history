(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(4),i=s.n(a),l=(s(9),s(2)),r=(s(10),s(0));var j=function(e){var t=e.symbols,s=e.stocks;return Object(r.jsx)("div",{children:s.map((function(e,s){return Object(r.jsxs)("div",{className:"Row",children:[Object(r.jsx)("h2",{children:t[s]}),e.map((function(e){return Object(r.jsx)("div",{className:"RowItem",children:Object(r.jsxs)("div",{className:"Closing",children:[Object(r.jsx)("div",{className:"Column",children:e.date.substring(0,e.date.indexOf("T"))}),Object(r.jsxs)("div",{className:"Column",children:[Object(r.jsx)("strong",{className:"Column",children:"Close"}),Object(r.jsx)("span",{className:"Column",children:e.close})]}),Object(r.jsxs)("div",{className:"Column",children:[Object(r.jsx)("strong",{className:"Column",children:"High"}),Object(r.jsx)("span",{className:"Column",children:e.high})]}),Object(r.jsxs)("div",{className:"Column",children:[Object(r.jsx)("strong",{className:"Column",children:"Low"}),Object(r.jsx)("span",{className:"Column",children:e.low})]})]},e.date)})}))]})}))})};s(12);var o=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(l.a)(a,2),o=i[0],b=i[1],d=Object(c.useState)(new Date((new Date).getTime()-6048e5)),u=Object(l.a)(d,2),O=u[0],m=u[1],h=Object(c.useState)(new Date),x=Object(l.a)(h,2),p=x[0],v=x[1],N=Object(c.useState)([]),f=Object(l.a)(N,2),g=f[0],C=f[1],k=Object(c.useState)(""),y=Object(l.a)(k,2),S=y[0],w=y[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Historical Stock Data"}),S?Object(r.jsx)("div",{className:"Error",children:S}):"",Object(r.jsx)("label",{htmlFor:"ticker",children:"Tickers"}),Object(r.jsx)("input",{className:"TextInput",onChange:function(e){return n(e.target.value)},type:"text",id:"ticker"}),Object(r.jsx)("p",{children:"Examples of valid input: AAPL or AAPL,GOOGL,AMZN"}),Object(r.jsxs)("div",{className:"Dates",children:[Object(r.jsx)("label",{htmlFor:"period1",children:"From"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"DateInput",onChange:function(e){return m(e.target.value)},type:"date",id:"period1"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"period2",children:"To"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"DateInput",onChange:function(e){return v(e.target.value)},type:"date",id:"period2"})]}),Object(r.jsx)("input",{onClick:function(){return function(){if(s)if(new Date(O).getTime()>new Date(p).getTime())w("ERROR: Please enter a valid time range.");else{var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({symbols:s,period1:O,period2:p})};fetch("/historical",e).then((function(e){400!==e.status?e.json().then((function(e){C(e.stocks),b(s),w("")})):w("ERROR: Please enter a valid ticker list.")}))}else w("ERROR: Please enter the ticker symbol(s).")}()},type:"button",value:"SUBMIT",className:"Submit"}),Object(r.jsx)(j,{symbols:o.split(","),stocks:g})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.29a67650.chunk.js.map