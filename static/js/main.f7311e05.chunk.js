(this.webpackJsonpwordle=this.webpackJsonpwordle||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(9),u=n.n(o),s=(n(16),n(10)),a=n(2),i=n(7),l=n.n(i),d=n(11),f=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(c.useState)(t),r=Object(a.a)(n,2),o=r[0],u=r[1],s=function(e){u([].concat(Object(d.a)(o),[e]))},i=function(e){u(o.filter((function(t,n){return n!==e})))},l=function(){return 0===o.length},f=function(){return u([])};return{data:o,useArray:e,push:s,remove:i,reset:f,isEmpty:l}},b=n(5),v=n(8),j=function(){for(var e={},t="a".charCodeAt(0),n=t;n<t+26;n++)e[String.fromCharCode(n)]="init";return e},h=function(e,t){Object(c.useEffect)((function(){console.log(e,t)}),[e,t])},p=function(e,t){return e+Math.floor(Math.random()*(t-e+1))},O=function(){console.log("render useGame");var e=Object(c.useState)(6),t=Object(a.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),i=u[0],d=u[1],O=function(){var e=Object(c.useState)(j()),t=Object(a.a)(e,2),n=t[0],r=t[1],o=function(e,t){r((function(n){return Object(v.a)(Object(v.a)({},n),{},Object(b.a)({},e,t))}))};return{alphabet:n,updateNever:function(e){void 0!==(null===n||void 0===n?void 0:n[e])&&"never"!==(null===n||void 0===n?void 0:n[e])&&"almost"!==(null===n||void 0===n?void 0:n[e])&&"success"!==(null===n||void 0===n?void 0:n[e])&&o(e,"never")},updateAlmost:function(e){void 0!==(null===n||void 0===n?void 0:n[e])&&"almost"!==(null===n||void 0===n?void 0:n[e])&&"success"!==(null===n||void 0===n?void 0:n[e])&&o(e,"almost")},updateSuccess:function(e){void 0!==(null===n||void 0===n?void 0:n[e])&&"success"!==(null===n||void 0===n?void 0:n[e])&&o(e,"success")},reset:function(){r(j())}}}(),g=f([]),m=Object(c.useState)("ongoing"),x=Object(a.a)(m,2),w=x[0],S=x[1],y=Object(c.useRef)([]),C=Object(c.useRef)(new Set);h("history: ",g.data),h("alphabet: ",O.alphabet),Object(c.useEffect)((function(){var e=function(e){return fetch("".concat("/Wordle-TypeScript","/").concat(e)).then((function(e){return e.text()})).then((function(e){return e.split(/\r?\n/)}))},t=function(){var t=Object(s.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("answers.txt");case 2:return n=t.sent,t.next=5,e("words.txt");case 5:c=t.sent,y.current=n,C.current=new Set(c.concat(n));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().then((function(){var e=p(0,y.current.length);d(y.current[e])}))}),[]);var k=function(e){for(var t=[],n=new Set(i),c=0;c<e.length;c++){var r=e[c];r===i[c]?(t.push({ch:r,color:"success"}),O.updateSuccess(r)):n.has(r)?(t.push({ch:r,color:"almost"}),O.updateAlmost(r)):(t.push({ch:r,color:"never"}),O.updateNever(r))}return t};return{guesses:n,wordle:i,history:g,alphabet:O,status:w,newGame:function(){console.log("started new game"),r(6);var e=p(0,y.current.length);d(y.current[e]),g.reset(),O.reset(),S("ongoing")},guessWord:function(e){C.current.has(e)&&"ongoing"===w&&(g.push(k(e)),r(n-1),e===i?S("win"):n-1===0&&S("lose"))}}},g=n(1),m={success:"green",almost:"orange",never:"black"},x=r.a.memo((function(e){var t=e.pair;return Object(g.jsx)("span",{style:{color:m[t.color]},children:t.ch})})),w=r.a.memo((function(e){var t=e.handleSubmit,n=Object(c.useState)(""),r=Object(a.a)(n,2),o=r[0],u=r[1];return Object(g.jsxs)("form",{onSubmit:function(e){t(e,o)},children:[Object(g.jsx)("input",{onChange:function(e){return u(e.target.value)},value:o}),Object(g.jsx)("button",{children:" guess "})]})})),S=function(){console.log("render app");var e=O(),t=e.guesses,n=e.wordle,c=e.history,r=(e.alphabet,e.status),o=e.newGame,u=e.guessWord;return Object(g.jsxs)("div",{children:["status: ".concat(r),Object(g.jsx)("br",{}),"guesses left: ".concat(t),Object(g.jsx)("br",{}),"wordle: ".concat(n),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:o,children:" restart "}),Object(g.jsx)("br",{}),Object(g.jsx)(w,{handleSubmit:function(e,t){e.preventDefault(),u(t)}}),c.data.map((function(e,t){return Object(g.jsxs)("div",{children:["guess #".concat(t+1,": "),e.map((function(e,t){return Object(g.jsx)(x,{pair:e},"".concat(e.ch).concat(t))}))]},t)}))]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),o(e),u(e)}))};u.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.f7311e05.chunk.js.map