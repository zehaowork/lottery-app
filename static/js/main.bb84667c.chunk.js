(this["webpackJsonplottery-app"]=this["webpackJsonplottery-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),A=n.n(i),r=(n(14),n(2)),s=(n(15),n(0));var m=function(e){return Object(s.jsxs)("div",{onClick:function(){e.switchTab()},class:"tab-item",children:[Object(s.jsx)("p",{children:e.name}),Object(s.jsx)("div",{className:e.currentIdx===e.index?"active":""})]})},o=n(8),b=function e(t,n,c,a,i){Object(o.a)(this,e),this.id=t,this.name=n,this.front=c,this.back=a,this.price=i},l=n(9),u=n(6);n(17);var f=function(e){return Object(s.jsx)("div",{onClick:e.onClick,class:function(){var t="ball";return e.isBack&&e.isSelected?t+=" back-ball back-active":e.isBack&&!e.isSelected?t+=" back-ball":!e.isBack&&e.isSelected&&(t+=" active"),t}(),children:Object(s.jsx)("p",{children:function(e,t){for(e=e.toString();e.length<t;)e="0"+e;return e}(e.num,2)})})},j=(n(18),function(e){var t=e;if(0===e||1===e)return 1;for(;e>1;)t*=--e;return t});var g=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),i=n[0],A=n[1],m=Object(c.useState)(0),o=Object(r.a)(m,2),b=o[0],g=o[1],d=Object(c.useState)(0),B=Object(r.a)(d,2),O=B[0],S=B[1],v=Object(c.useState)(null),h=Object(r.a)(v,2),x=h[0],C=h[1],w=Object(c.useState)(0),k=Object(r.a)(w,2),E=k[0],p=k[1];Object(c.useEffect)((function(){Q(e.game.front,!0),Q(e.game.back,!1)}),[]),Object(c.useEffect)((function(){N()}),[O,b]);var N=function(){var t=0,n=0;try{if(b<e.game.front.min||O<e.game.back.min)return;t=j(b)/(j(e.game.front.min)*j(b-e.game.front.min)),n=j(O)/(j(e.game.back.min)*j(O-e.game.back.min)),p(t*n)}catch(c){if(b<e.game.front.min)return;t=j(b)/(j(e.game.front.min)*j(b-e.game.front.min)),p(t)}},Q=function(e,t){if(null!=e){for(var n=1,c=[];n<=e.maxNum;)c.push({num:n,isSelected:!1}),n+=1;t?A(c):C(c)}},G=function(t,n){var c=[];return t.forEach((function(t){c.push(Object(s.jsx)(f,{onClick:function(){!function(t,n){var c=t?Object(u.a)(x):Object(u.a)(i),a=Object(l.a)({},c[n-1]);a.isSelected=!a.isSelected,t&&O>=e.game.back.max&&!0===a.isSelected?alert("\u60a8\u5df2\u9009\u62e9\u7684\u53f7\u7801\u6570\u91cf\u5df2\u7ecf\u8fbe\u5230\u4e0a\u9650.\uff08"+O+"\uff09"):!t&&b>=e.game.front.max&&!0===a.isSelected?alert("\u60a8\u5df2\u9009\u62e9\u7684\u53f7\u7801\u6570\u91cf\u5df2\u7ecf\u8fbe\u5230\u4e0a\u9650.\uff08"+b+"\uff09"):(c[n-1]=a,t?(C(c),!0===a.isSelected?S(O+1):S(O-1)):(A(c),!0===a.isSelected?g(b+1):g(b-1)))}(n,t.num)},isBack:n,isSelected:t.isSelected,num:t.num},t.num))})),c};return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("div",{class:"content",children:Object(s.jsxs)("div",{class:"selection-area",children:[Object(s.jsx)("div",{children:G(i,!1)}),null!=x&&Object(s.jsx)("div",{children:G(x,!0)})]})}),Object(s.jsxs)("footer",{class:"footer",children:[Object(s.jsx)("img",{onClick:function(){Q(e.game.front,!0),Q(e.game.back,!1),p(0),S(0),g(0)},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADC0lEQVR4nO2bzWvUQBjGf+9aliJSSqlaLwrFgopn0ZMoXoTePIgfRy+Civ+B+CeIeBVFr6IHQVAQryJFKGJFRKsUES1+UUW2ZR8PyWKMs5vZmN1ptvlBIEzeDM88mXknm50xeoSkGnAIOAZMAhuAOjAUHy2GgGbiWAEawE/gHXALuGNmK73SWjiSxiU9UHHMSJoM3S4vJNUlPS6w8S3eSBoP3b5MJJ3rQeNbXC5arxVdoaQ5YEfR9cYsARvN7FdRFRZqgKStwFvHpQvAXaLk5kpmraRYi8+Hgd3AFf5OmAAHzOxREXoLR9JBR7f9pGhGyFPfE0d9p4rUnHbXJWIMmAZG+TON1RLHusT5dkcVTeCipDz6RhxlRyRt87j3B3DNzD50Cuo4BCSNAjNE83gZ+QzsM7OX7QKcXVPSsKRh4CTlbTzAGHC61R7XUHT2AEnL8Wmra5eZ1hsmwJSZzScvtssBmbmhRHR8iGV/uv/NmjegXVd/0VcV/aMRWkDFasPrt4CkIeAG5Zodzma9BYK/AXWiV8syGTBlZq+ygtb8LFAZEFpAaCoDQgsITdFZfQl4mCqbAPakyl4Dz1Jlk0SfwZLMAvOpsr3ApvwSc6DoU/eyx1fbOce90464S4648464M464ex46JMn1deof1vwQqAwILSA0lQGhBYSmMiC0gNBUBoQWEJrKgNACQlMZEFpAaCoDQgsITWVAaAGhqQwILaCHNLNDKgMG2gAvujHAy9Gy4WtAcqXVQFENgdACekjhSbAaAoPIICdBr01WvmuEasA3op1fnWgAC6my9UT/ECf5DiymykaA9J6gxTg2yURcZxZbilwkVQO+4F6/v1rZbGYfs4K8hoCZtfbzlQkvvd0kwTItM23iqbcbA9ruuliFvCfaeZpJNwZcz6clCDfjYZuJ97a5eLXoU2BXXlV9YhHYaWbpWcaJdw8wswbRRuivOYX1gwZwwrfx0OWboJnNAvuB510K6wcLwGEzu9/NTbl2jsbD4ThwlGh5Wz1PPQWwQtTw28BVM1vqtoLfPUVaUUszhtIAAAAASUVORK5CYII=",alt:"\u6e05\u7a7a"}),E>0&&Object(s.jsxs)("div",{children:["\u4e00\u5171",E,"\u6ce8,",E*e.game.price,"\u5143"]}),0===E&&Object(s.jsx)("div",{children:void 0===e.game.back?"\u81f3\u5c11\u9009\u62e9 "+e.game.front.min+" \u4e2a\u53f7\u7801":"\u8bf7\u81f3\u5c11\u9009\u62e9\u524d\u533a\u9009\u62e9 "+e.game.front.min+" \u4e2a\u53f7\u7801, \u5728\u540e\u533a\u9009\u62e9 "+e.game.back.min+"\u4e2a\u53f7\u7801"}),Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADt0lEQVR4nO2bTYiNURjH/+cmSZIsJEmSkK+QJimTpEwWFhaykCQLaVJkMYkkSfIxi0mSkCwspEQSQtIshKQJC/luEhZIPqfxszj3Ttd1Z+7H+5z3vDd+y3un//v8z5z3Oc95zrnSfxoXYBLQCXwDbgCLY8eUGsBQ4Cl/cxGYEju+4AC7ypgv8AM4AAyPHWcQgIn5aV+JbmAVkIsdsynAhSrMF9MJzIkdtwnA0hrNF+gBDgEjY3uoG2AI8KTOASjwFlhDI74WwNaE5ou5CYxzsU1VCzBW0mNJwwxlzzfSNNgnW/OSNLUhBgBYKGlFAOkXmX8FgEGS7kmaGUB+QQBNW4BWw8RXzBlJyvQMAEbJJz7rtfu7pGnOuWdZzwG7ZW9ekg46554F0LUDmIuv3qzpBqxXE1uAHL5+D8Gq2P4qgt/BhaCTrJfAwHD8NLWmF5hb+rwsjsZ2SWMC6B53zt0t/TBTyyC+lfVA0mBj6Y+SJjvn3pV+kbUZ0C5785K0o5z5TAEsC/DeA3QBIQbVDmwaHf2xKLa/imDb6CjmTKVnR0+ChGl0SNJX+Xr/xUB/lIUkGKLRIUn7K5mPDtAcaOo/B4bG9jcgwCDgfqABWB7bX0WA9YHMX7UOtA04Aow31BwJvA9g/gcw3SpOAStLxDvwXZqkuocDmAdot/BdCHI05f9Ln4Bt1NlUAGYRptHxBhhhOQCnKzywG1iH79rWonszgHmAtZbmazmA7AJaqtRdWUmsTm5j1egAhuHX0Vq5BPTbu8/rvrTz3EcvMM/EfD7Q9gTB9ADH8OVtqe5ANzqScMLSfBM2CeoLsIf8WTwwgepudNTKB2C0lfnB2FdmH/BL5y1j3QKbk/ru2w0CbZL2JBVMkUeSZjvnfiYRcZK/dCTfi8v2BuJPljjnriQVKSwdh9RY5s9ZmJckh985nbUQS4mvkmZYne3lJG2yEEoR04PNnKTrkn5ZCQbmlaS95qrAfOBOoKXKkhDXZPoGIQesBl5HNtkf10jjYBNfs+8EPsf1+wc9DLDPCDUQY4GT+M1GbDpSNV8yEE2EK2Wr4S2x7/fi88MKyv9AITTropovBn+G14Zvi6XBHbJ4owPfLzxGmN5eAdtGRwiAOfgfK4XArtEREnx+WI7t8bZdoyMt8PlhSz74pGyM7adugFH4g49688MDamy1ZxJgOnC5RvO9QHPs2E0BWoCHVQ7AqdjxBgF/FL4BX9X1R+MlvloBRgB7Kd8ib40dX2rgN1pH8SfO34B9ZLHi+xf4DXB4Tlqve0ocAAAAAElFTkSuQmCC",alt:"\u786e\u5b9a"})]})]})};n(19);var d=function(){var e=[new b("1","\u53cc\u8272\u7403",{maxNum:33,min:6,max:20},{maxNum:16,min:1,max:5},2),new b("2","\u5927\u4e50\u900f",{maxNum:35,min:5,max:20},{maxNum:12,min:2,max:5},2),new b("3","\u5355\u533a\u6570\u5b57\u5f69",{maxNum:35,min:5,max:20},void 0,2)],t=Object(c.useState)(0),n=Object(r.a)(t,2),a=n[0],i=n[1],A=e.map((function(e,t){return Object(s.jsx)(m,{switchTab:function(){!function(e){i(e)}(t)},currentIdx:a,index:t,name:e.name},e.id)})),o=e.map((function(e,t){return a===t?Object(s.jsx)(g,{game:e}):null}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{class:"tab-bar",children:A}),o]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,A=t.getTTFB;n(e),c(e),a(e),i(e),A(e)}))};A.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),B()}],[[20,1,2]]]);
//# sourceMappingURL=main.bb84667c.chunk.js.map