(this["webpackJsonpcn-task-ui"]=this["webpackJsonpcn-task-ui"]||[]).push([[0],{103:function(t,e,n){},201:function(t,e,n){"use strict";n.r(e);var a=n(21),r=n(0),c=n.n(r),i=n(11),s=n.n(i),o=(n(97),n(1)),u=n(2),l=n(87),j=n.n(l),d=n(56),b=n.n(d),O=n(55),f=n.n(O),g=n(57),h=n.n(g),p=n(90),v=n.n(p),x=n(52),E=n(33),w=(n(103),"FETCH_NEWS_PENDING"),_="FETCH_NEWS_SUCCESS";function N(t,e){return function(n){n({type:w}),fetch("".concat("","/news?q=").concat(t,"&page=").concat(e)).then((function(t){return t.json()})).then((function(t){if(t.error)throw t.error;return n({type:_,data:t}),t})).catch((function(t){n(function(t){return{type:"FETCH_NEWS_ERROR",error:t}}(t))}))}}function S(t){return t.articles}function m(t){return t.isLoading}function y(t){return t.page}var C=n(203),L=n(89),R=n.n(L);var T=Object(x.b)((function(t){return{isLoading:m(t),pageNumber:y(t),news:S(t)}}),(function(t){return Object(o.a)({},Object(E.b)({getNews:N},t))}))((function(t){var e=t.getNews,n=t.news,r=t.pageNumber,i=t.isLoading,s=c.a.useState(""),o=Object(u.a)(s,2),l=o[0],d=o[1];c.a.useEffect((function(){!i&&e(l,r)}),[l]);var O=n.map((function(t,e){var n=t.urlToImage,r=t.title,c=t.description;return Object(a.jsx)(f.a,{span:7,children:Object(a.jsx)(j.a,{hoverable:!0,cover:n&&Object(a.jsx)("img",{alt:"example",src:n}),children:Object(a.jsx)(b.a,{title:r,description:c})})},e)})),g=Object(C.a)((function(t){var e;(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)&&d(t.target.value)}),300);return Object(a.jsxs)("div",{className:"App",style:{alignContent:"flex-start"},children:[i&&Object(a.jsx)("div",{id:"overlay",children:Object(a.jsx)(R.a,{size:"large"})}),Object(a.jsx)(v.a,{onChange:g,placeholder:"input search text",allowClear:!0,onSearch:function(t){t&&d(t)},size:"large",style:{width:600,margin:"30px auto"}}),Object(a.jsx)(h.a,{gutter:[16,16],justify:"center",wrap:!0,align:"stretch",children:O})]})})),k={articles:[],isLoading:!1,page:"1"},I=n(91),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c,F=Object(E.d)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(o.a)(Object(o.a)({},t),{},{isLoading:!0});case _:var n=e.data,a=n.articles,r=n.totalResults;return Object(o.a)(Object(o.a)({},t),{},{articles:a,totalResults:r,isLoading:!1});default:return t}}),D(Object(E.a)(I.a)));n(198);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x.a,{store:F,children:Object(a.jsx)(T,{})})}),document.getElementById("root"))},97:function(t,e,n){}},[[201,1,2]]]);
//# sourceMappingURL=main.0c9cd102.chunk.js.map