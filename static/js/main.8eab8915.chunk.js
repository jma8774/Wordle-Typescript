(this.webpackJsonpwordle=this.webpackJsonpwordle||[]).push([[0],{16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(9),u=n.n(o),s=(n(16),n(2)),a=n(10),i=n(7),l=n.n(i),d=n(11),f=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(c.useState)(e),r=Object(s.a)(n,2),o=r[0],u=r[1],a=function(t){u([].concat(Object(d.a)(o),[t]))},i=function(t){u(o.filter((function(e,n){return n!==t})))},l=function(){return 0===o.length};return{data:o,useArray:t,push:a,remove:i,isEmpty:l}},v=n(5),b=n(8),j=function(t,e){Object(c.useEffect)((function(){console.log(t,e)}),[t,e])},h=function(){var t=Object(c.useState)(function(){for(var t={},e="a".charCodeAt(0),n=e;n<e+26;n++)t[String.fromCharCode(n)]="init";return t}()),e=Object(s.a)(t,2),n=e[0],r=e[1];j("alphabet: ",n);var o=function(t,e){r((function(n){return Object(b.a)(Object(b.a)({},n),{},Object(v.a)({},t,e))}))};return{alphabet:n,updateNever:function(t){void 0!==(null===n||void 0===n?void 0:n[t])&&"never"!==(null===n||void 0===n?void 0:n[t])&&"almost"!==(null===n||void 0===n?void 0:n[t])&&"success"!==(null===n||void 0===n?void 0:n[t])&&o(t,"never")},updateAlmost:function(t){void 0!==(null===n||void 0===n?void 0:n[t])&&"almost"!==(null===n||void 0===n?void 0:n[t])&&"success"!==(null===n||void 0===n?void 0:n[t])&&o(t,"almost")},updateSuccess:function(t){void 0!==(null===n||void 0===n?void 0:n[t])&&"success"!==(null===n||void 0===n?void 0:n[t])&&o(t,"success")}}},O=function(){var t=Object(c.useState)(6),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),u=Object(s.a)(o,2),i=u[0],d=u[1],v=h(),b=f([]),O=Object(c.useState)("ongoing"),p=Object(s.a)(O,2),g=p[0],m=p[1],x=Object(c.useRef)([]),w=Object(c.useRef)(new Set);j("history: ",b.data),Object(c.useEffect)((function(){var t=function(t){return fetch("".concat("/wordle-ts","/").concat(t)).then((function(t){return t.text()})).then((function(t){return t.split("\n")}))},e=function(){var e=Object(a.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("answers.txt");case 2:return n=e.sent,e.next=5,t("words.txt");case 5:c=e.sent,x.current=n,w.current=new Set(c.concat(n)),S();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){console.log("New game"),r(6);var t,e,n=(t=0,e=x.current.length,t+Math.floor(Math.random()*(e-t+1)));d(x.current[n])},y=function(t){for(var e=[],n=new Set(i),c=0;c<t.length;c++){var r=t[c];r===i[c]?(e.push({ch:r,color:"success"}),v.updateSuccess(r)):n.has(r)?(e.push({ch:r,color:"almost"}),v.updateAlmost(r)):(e.push({ch:r,color:"never"}),v.updateNever(r))}return e};return{guesses:n,wordle:i,history:b,alphabet:v,status:g,newGame:S,guessWord:function(t){w.current.has(t)&&"ongoing"===g&&(b.push(y(t)),r(n-1),t===i?m("win"):n-1===0&&m("lose"))}}},p=n(1),g={success:"green",almost:"orange",never:"black"},m=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1],o=O();return Object(p.jsxs)("div",{children:[o.status,Object(p.jsx)("br",{}),o.guesses,Object(p.jsx)("br",{}),o.wordle,Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:o.newGame,children:" restart "}),Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),o.guessWord(n)}(t)},children:[Object(p.jsx)("input",{onChange:function(t){return r(t.target.value)}}),Object(p.jsx)("button",{children:" guess "})]}),o.history.data.map((function(t,e){return Object(p.jsx)("div",{children:t.map((function(t,e){return Object(p.jsx)("span",{style:{color:g[t.color]},children:t.ch},"".concat(t.ch).concat(e))}))},e)}))]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,u=e.getTTFB;n(t),c(t),r(t),o(t),u(t)}))};u.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.8eab8915.chunk.js.map