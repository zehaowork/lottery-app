(this["webpackJsonplottery-app"]=this["webpackJsonplottery-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),s=c.n(a),r=(c(14),c(2)),u=(c(15),c(0));var o=function(e){return Object(u.jsxs)("div",{onClick:function(){e.switchTab()},class:"tab-item",children:[Object(u.jsx)("p",{children:e.name}),Object(u.jsx)("div",{className:e.currentIdx===e.index?"active":""})]})},b=c(8),l=function e(t,c,n,i,a,s){Object(b.a)(this,e),this.name=t,this.front=c,this.back=n,this.price=i},j=c(9),m=c(6);c(17);var f=function(e){return Object(u.jsx)("div",{onClick:e.onClick,class:function(){var t="ball";return e.isBack&&e.isSelected?t+=" back-ball back-active":e.isBack&&!e.isSelected?t+=" back-ball":!e.isBack&&e.isSelected&&(t+=" active"),t}(),children:Object(u.jsx)("p",{children:function(e,t){for(e=e.toString();e.length<t;)e="0"+e;return e}(e.num,2)})})},d=(c(18),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA5UlEQVQ4jd2TsUoDQRRFz5MtQqoUwVYsLIPfYR/wF6yClWiVyjJtPiGtra2Ff6DYiIVF2pCAGEI2J80ElmUMu60XBob73j3zpniQkfqoLtQf9VddqpNcb1RCp0AH6ALvwBT4SOUL4Ba4BFbAJiLm1Rdv1NLmKtURQJEY58BzbsQjOqt/YQhcNww/RcSsOgHAABg2BHwBM4CTTHGdYJ/AGHgAvpO3qjcXdQPYRcSbugbmCbhJ3rbenJuglf4ZoGyR2x0uRcYs1DugD1wBW6CXvM6fSHXUYhfuc4Ce+pLW99h5VfuH3B7G4Ng6L3BzlgAAAABJRU5ErkJggg==");c.p;var A=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(0),b=Object(r.a)(o,2),l=b[0],A=b[1],O=Object(n.useState)(0),g=Object(r.a)(O,2),x=g[0],h=g[1],v=Object(n.useState)(null),p=Object(r.a)(v,2),S=p[0],k=p[1],B=Object(n.useState)(0),C=Object(r.a)(B,2),w=C[0],N=C[1];function R(e){var t=e;if(0===e||1===e)return 1;for(;e>1;)t*=--e;return t}Object(n.useEffect)((function(){E()}),[x,l]);var E=function(){var t,c;l<e.game.front.min||x<e.game.back.min||(t=R(l)/(R(e.game.front.min)*R(l-e.game.front.min)),c=R(x)/(R(e.game.back.min)*R(x-e.game.back.min)),N(t*c))},J=function(){Q(e.game.front,!0),Q(e.game.back,!1),N(0),h(0),A(0)};Object(n.useEffect)((function(){Q(e.game.front,!0),Q(e.game.back,!1)}),[]);var Q=function(e,t){if(null!=e){for(var c=1,n=[];c<=e.maxNum;)n.push({num:c,isSelected:!1}),c+=1;t?s(n):k(n)}},F=function(t,c){var n=[];return t.forEach((function(t){n.push(Object(u.jsx)(f,{onClick:function(){!function(t,c){var n=t?Object(m.a)(S):Object(m.a)(a),i=Object(j.a)({},n[c-1]);i.isSelected=!i.isSelected,t&&x>=e.game.back.max&&!0===i.isSelected||!t&&l>=e.game.front.max&&!0===i.isSelected||(n[c-1]=i,t?(k(n),!0===i.isSelected?h(x+1):h(x-1)):(s(n),!0===i.isSelected?A(l+1):A(l-1)))}(c,t.num)},isBack:c,isSelected:t.isSelected,num:t.num}))})),n};return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)("div",{class:"content",children:Object(u.jsxs)("div",{class:"selection-area",children:[Object(u.jsx)("div",{children:F(a,!1)}),null!=S&&Object(u.jsx)("div",{children:F(S,!0)})]})}),Object(u.jsxs)("footer",{class:"footer",children:[Object(u.jsx)("img",{onClick:function(){J()},src:d,alt:"delete"}),Object(u.jsxs)("div",{children:["\u4e00\u5171",w,"\u6ce8,",w*e.game.price,"\u5143"]}),Object(u.jsx)("img",{onClick:function(){J()},src:d,alt:"delete"})]})]})};c(19);var O=function(){var e=[new l("\u53cc\u8272\u7403",{maxNum:33,min:6,max:20},{maxNum:15,min:1,max:5},2),new l("\u5927\u4e50\u900f",{maxNum:35,min:5,max:20},{maxNum:12,min:2,max:5},2)],t=Object(n.useState)(0),c=Object(r.a)(t,2),i=c[0],a=c[1],s=e.map((function(e,t){return Object(u.jsx)(o,{switchTab:function(){!function(e){a(e)}(t)},currentIdx:i,index:t,name:e.name})})),b=e.map((function(e,t){return i===t?Object(u.jsx)(A,{game:e}):null}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{class:"tab-bar",children:s}),b]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),g()}],[[20,1,2]]]);
//# sourceMappingURL=main.a55f0425.chunk.js.map