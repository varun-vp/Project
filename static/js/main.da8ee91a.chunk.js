(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t.n(i),r=t(6),o=t.n(r),a=(t(15),t.p,t(16),t(2)),s=(t(4),t(24),t(0)),l=t(3),u=(t(18),3600),j=86400,d={isPlaying:!0,size:100,strokeWidth:5},m=function(e,n){return Object(s.jsxs)("div",{className:"time-wrapper",children:[Object(s.jsx)("div",{className:"time",children:n}),Object(s.jsx)("div",{children:e})]})};function b(){console.log(Date.now());var e=new Date,n=new Date("07/23/2021");console.log("startTime -> ",e),console.log("endTime -> ",n);var t=(n.getTime()-e.getTime())/1e3;console.log("remaining Time",t);var i=Math.ceil(t/j);return Object(s.jsxs)("div",{className:"countDown",children:[Object(s.jsx)(l.CountdownCircleTimer,Object(a.a)(Object(a.a)({},d),{},{colors:[["#7E2E84"]],duration:i,initialRemainingTime:t,children:function(e){var n=e.elapsedTime;return m("days",(i-n)/j|0)}})),Object(s.jsx)(l.CountdownCircleTimer,Object(a.a)(Object(a.a)({},d),{},{colors:[["#D14081"]],duration:j,initialRemainingTime:t%j,onComplete:function(e){return[t-e>u]},children:function(e){var n=e.elapsedTime;return m("hours",(j-n)%j/u|0)}})),Object(s.jsx)(l.CountdownCircleTimer,Object(a.a)(Object(a.a)({},d),{},{colors:[["#EF798A"]],duration:u,initialRemainingTime:t%u,onComplete:function(e){return[t-e>60]},children:function(e){var n=e.elapsedTime;return m("minutes",(u-n)%u/60|0)}})),Object(s.jsx)(l.CountdownCircleTimer,Object(a.a)(Object(a.a)({},d),{},{colors:[["#218380"]],duration:60,initialRemainingTime:t%60,onComplete:function(e){return[t-e>0]},children:function(e){var n=e.elapsedTime;return m("seconds",60-n|0)}}))]})}var p=t(8),O=t.n(p);function h(){return Object(s.jsx)(O.a,{width:2e3,height:3e3})}var g=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(h,{}),Object(s.jsx)(b,{})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),c(e),r(e),o(e)}))};o.a.render(Object(s.jsxs)(c.a.StrictMode,{children:[Object(s.jsx)("script",{src:"https://unpkg.com/react-popper/dist/index.umd.js"}),Object(s.jsx)(g,{})]}),document.getElementById("root")),T()}},[[19,1,2]]]);
//# sourceMappingURL=main.da8ee91a.chunk.js.map