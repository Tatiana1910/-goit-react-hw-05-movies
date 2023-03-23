"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{875:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,o,i,c,s,p=t(439),l=t(791),d=t(168),u=t(444),x=u.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  justify-content: space-evenly;\n  gap: 30px;\n  color: black;\n  padding: 0;\n"]))),h=u.ZP.section(a||(a=(0,d.Z)(["\n  padding: 15px;\n  background-color: beige;\n\n  @media (min-width: 768px) {\n    padding: 30px;\n  }\n"]))),f=t(87),g=u.ZP.li(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* gap: 15px; */\n  list-style: none;\n  height: auto;\n  width: 240px;\n  background-color: rgb(201 27 108 / 25%);\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 10px 10px 8px 1px rgba(0, 0, 0, 0.2);\n  transform: scale(1);\n  transition: transform 250ms linear;\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),m=u.ZP.img(i||(i=(0,d.Z)(["\n  display: block;\n  /* height: 360px; */\n  width: 100%;\n  height: 360px;\n  border-radius: 10px;\n  color: black;\n"]))),b=u.ZP.p(c||(c=(0,d.Z)(["\n  margin: 0;\n  padding: 10px;\n  font-size: 18px;\n"]))),v=(0,u.ZP)(f.rU)(s||(s=(0,d.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),Z=t(311),y=t(184);var w=function(n){var e=n.movie,t=e.id,r=e.title,a=e.poster_path,o=n.query;return(0,y.jsx)(g,{children:(0,y.jsxs)(v,{to:"/movies/".concat(t,"/"),state:{from:"/movies?name=".concat(o)},children:[null===a?(0,y.jsx)(m,{src:Z,alt:r}):(0,y.jsx)(m,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,y.jsx)(b,{children:r})]})})};var j,k,P,q,_=function(n){var e=n.movies;return(0,y.jsx)(h,{children:(0,y.jsx)(x,{children:e&&e.map((function(n){return(0,y.jsx)(w,{movie:n},n.id)}))})})},S=t(683),z=t(689),U=t(126),C=u.ZP.form(j||(j=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  border: 1px solid black;\n  margin: auto;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: rgb(134 42 46) 0px 8px 8px 4px;\n"]))),E=u.ZP.input(k||(k=(0,d.Z)(["\n  display: inline-flex;\n  width: 100%;\n  padding: 8px 32px 8px 8px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 18px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),H=(0,u.ZP)(U.dVI)(P||(P=(0,d.Z)(["\n  width: 25px;\n  height: 25px;\n"]))),T=u.ZP.button(q||(q=(0,d.Z)(["\n  width: 60px;\n  height: 40px;\n  background-color: inherit;\n  border-radius: 10px;\n  cursor: pointer;\n  border: 0;\n  transition: background-color 250ms linear;\n  :hover,\n  :focus-visible {\n    background-color: rgb(232 45 45 / 13%);\n  }\n"])));function D(){var n=(0,z.TH)(),e=(0,z.s0)();return(0,y.jsxs)(C,{onSubmit:function(t){t.preventDefault();var r=t.target.elements.query.value;e((0,S.Z)((0,S.Z)({},n),{},{search:"query=".concat(r)}))},children:[(0,y.jsx)(E,{name:"query",type:"text",placeholder:"SearchMovies"}),(0,y.jsx)(T,{type:"submit",children:(0,y.jsx)(H,{})})]})}var I=t(861),L=t(757),M=t.n(L);function R(){return R=(0,I.Z)(M().mark((function n(e){var t,r,a,o,i,c=arguments;return M().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,r="https://api.themoviedb.org/3/search/movie",a="?api_key=".concat("9f20d64b7d570e0ac3d9098807701877","&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"),n.next=6,fetch("".concat(r).concat(a));case 6:return o=n.sent,n.next=9,o.json();case 9:return i=n.sent,n.abrupt("return",i.results);case 11:case"end":return n.stop()}}),n)}))),R.apply(this,arguments)}var V=function(n){return R.apply(this,arguments)},A=function(){var n,e=(0,z.TH)().search,t=null!==(n=new URLSearchParams(e).get("query"))&&void 0!==n?n:"",r=(0,l.useState)(null),a=(0,p.Z)(r,2),o=a[0],i=a[1];return(0,l.useEffect)((function(){t&&V(t).then(i).catch((function(n){console.log("Error: "+n)}))}),[t]),(0,y.jsxs)("main",{children:[(0,y.jsx)(D,{}),o&&(0,y.jsx)(_,{query:t,movies:o})]})}},311:function(n,e,t){n.exports=t.p+"static/media/no-thumb.09ea9f6b1352b3452d9d.jpg"}}]);
//# sourceMappingURL=875.cb9c5cf8.chunk.js.map