(this["webpackJsonptic-tac-toe-game"]=this["webpackJsonptic-tac-toe-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(5),i=c.n(r),s=c(8),o=c(2),u=(c(13),c(4));c(14);var l=function(e){setTimeout((function(){return e(Array(9).fill(""))}),1e3)},j=(c(15),c(16),c(1)),b=function(e){var t=e.value,c=e.onClick,n=e.index;return Object(j.jsx)("button",{className:"square",onClick:function(){return c(n)},children:t})},O=function(e){var t=e.indexWinRow,c=e.board,n=e.handleClick;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"board",children:[c.map((function(e,t){return Object(j.jsx)(b,{value:e,index:t,onClick:n},t)})),Object(j.jsx)("div",{className:"line".concat(t)})]})})},d=(c(18),function(e){var t=e.playersName,c=e.win1,n=e.win2,a=t.playerName1,r=t.playerName2;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"title",children:"Score"}),Object(j.jsxs)("p",{className:"score",children:["Player ",a," (X): ",c]}),Object(j.jsxs)("p",{className:"score",children:["Player 2 ",r," (O): ",n]})]})}),f=(c(19),function(e){var t=e.onSubmit,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],i=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),l=u[0],b=u[1];return Object(j.jsx)("div",{className:"overlay",children:Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t({playerName1:r,playerName2:l})},children:[Object(j.jsx)("h2",{children:"Welcome to the game of tic tac toe"}),Object(j.jsx)("p",{className:"text",children:"Enter the name of the player \u21161"}),Object(j.jsx)("input",{value:r,type:"text",onChange:function(e){return i(e.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Player \u0425"}),Object(j.jsx)("p",{className:"text",children:"Enter the name of the player \u21162"}),Object(j.jsx)("input",{value:l,type:"text",onChange:function(e){return b(e.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Player \u041e"}),Object(j.jsx)("button",{type:"submit",className:"buttonSubmit",children:"Start"})]})})})}),m=function(){var e=Object(n.useState)(Array(9).fill("")),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("X"),i=Object(o.a)(r,2),b=i[0],m=i[1],p=Object(n.useState)(0),x=Object(o.a)(p,2),h=x[0],v=x[1],y=Object(n.useState)(0),N=Object(o.a)(y,2),S=N[0],w=N[1],g=Object(n.useState)(!0),C=Object(o.a)(g,2),k=C[0],W=C[1],X=Object(n.useState)(""),E=Object(o.a)(X,2),P=E[0],R=E[1],A=Object(n.useState)(null),F=Object(o.a)(A,2),J=F[0],V=F[1];Object(n.useEffect)((function(){var e=P.playerName1,t=P.playerName2,n=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(o.a)(t[c],3),a=n[0],r=n[1],i=n[2];if(e[a]&&e[a]===e[r]&&e[a]===e[i])return{winValue:e[a],indexWinRow:c}}return[]}(c),r=n.winValue,i=n.indexWinRow;return V(i),r&&"X"===r?(v((function(e){return e+1})),u.b.success("\u041f\u043e\u0431\u0435\u0434\u0438\u043b ".concat(e)),void l(a)):r&&"O"===r?(w((function(e){return e+1})),u.b.success("\u041f\u043e\u0431\u0435\u0434\u0438\u043b ".concat(t)),void l(a)):void(c.every((function(e){return e}))&&(u.b.info("\u041d\u0438\u0447\u044c\u044f"),l(a)))}),[c,P]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{indexWinRow:J,board:c,handleClick:function(e){if(!(e<0||e>9||c[e])){var t=Object(s.a)(c);t.splice(e,1,b),a(t),m("X"===b?"O":"X")}}}),Object(j.jsx)(d,{playersName:P,win1:h,win2:S}),Object(j.jsx)(u.a,{position:"top-right",autoClose:3e3}),k&&Object(j.jsx)(f,{onSubmit:function(e){R(e),W(!1)}})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.73eedbb4.chunk.js.map