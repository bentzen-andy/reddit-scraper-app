(this["webpackJsonpreddit-scraper"]=this["webpackJsonpreddit-scraper"]||[]).push([[0],[,,,function(t,e,r){t.exports={searchbar__label:"SearchBar_searchbar__label__1aEKd",searchbar__input:"SearchBar_searchbar__input__1UQUp","searchbar__input--box":"SearchBar_searchbar__input--box__ffnvL",invalid:"SearchBar_invalid__202AO","searchbar__input--error":"SearchBar_searchbar__input--error__3fk3J",searchbar__btn:"SearchBar_searchbar__btn__9s5ct"}},function(t,e,r){t.exports={navbar:"Navbar_navbar__31-FB",navbar__title:"Navbar_navbar__title__3-7CC","navbar__logo-container":"Navbar_navbar__logo-container__3oNuj",navbar__logo:"Navbar_navbar__logo__2ou9Y"}},function(t,e,r){t.exports={"popular-search-list":"PopularSearchList_popular-search-list__1c3Fc","popular-search-list__heading":"PopularSearchList_popular-search-list__heading__35FaZ","popular-search-list__subreddit":"PopularSearchList_popular-search-list__subreddit__1gELa","popular-search-list__no-data":"PopularSearchList_popular-search-list__no-data__y0bIb"}},,,function(t,e,r){t.exports={btn:"Button_btn__Liofu"}},function(t,e,r){t.exports={"grid-square":"GridSquare_grid-square__cQ_Rq","color-0":"GridSquare_color-0__1H8ex","color-1":"GridSquare_color-1__2AOH0","color-2":"GridSquare_color-2__3f6Tx","color-3":"GridSquare_color-3__E6IfZ","color-4":"GridSquare_color-4__1mIqN","color-5":"GridSquare_color-5__2eI04","color-6":"GridSquare_color-6__3aZJ3"}},,function(t,e,r){t.exports={instructions:"Instructions_instructions__1imUA"}},function(t,e,r){t.exports={"error-text":"ErrorMessage_error-text__1C2R-"}},,function(t,e,r){t.exports={msg:"NoDataMessage_msg__1EkxO"}},function(t,e,r){t.exports={title:"HeatmapTitle_title__1OAgH"}},function(t,e,r){t.exports={app:"App_app__1kX79"}},,,,,function(t,e,r){},,function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),c=r(10),s=r.n(c),i=(r(21),r(2)),o=r(4),d=r.n(o),l=r(0),u=function(){return Object(l.jsxs)("div",{className:d.a.navbar,children:[Object(l.jsx)("a",{className:d.a["navbar__logo-container"],href:"/react-scraper-app",children:Object(l.jsx)("div",{className:d.a.navbar__logo,children:"R"})}),Object(l.jsx)("div",{className:d.a.navbar__title,children:"Reddit Scraper App"})]})},b=r(11),j=r.n(b),h=function(){return Object(l.jsx)("div",{className:j.a.instructions,children:"Search for your favorite subreddit below to find the best times to post."})},_=function(t){var e=Object(a.useState)(""),r=Object(i.a)(e,2),n=r[0],c=r[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),d=o[0],l=o[1],u=t(n);return{value:n,isTouched:d,isValid:u,valueChangeHandler:function(t){c(t.target.value)},valueBlurHandler:function(){l(!0)},reset:function(){u&&(c(""),l(!1))}}},f=r(8),p=r.n(f),x=function(t){var e=t.className?"".concat(t.className," ").concat(p.a.btn):p.a.btn;return Object(l.jsx)("button",{className:e,onClick:t.onClick,disabled:t.disabled,children:t.btnText})},O=r(3),m=r.n(O),v=function(t){var e=_((function(t){return 0===t.length||t.trim().length>0})),r=e.value,a=e.isValid,n=e.isTouched,c=e.valueChangeHandler,s=e.valueBlurHandler,i=e.reset,o=!a&&n?Object(l.jsx)("div",{className:m.a["searchbar__input--error"],children:"Please enter a valid subreddit."}):null,d=!a&&n?"".concat(m.a["searchbar__input--box"]," ").concat(m.a.invalid):m.a["searchbar__input--box"];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSubmit(r.toLowerCase().trim()),i()},children:[Object(l.jsx)("label",{className:m.a.searchbar__label,htmlFor:"subreddit",children:"www.reddit.com/r/"}),Object(l.jsxs)("div",{className:m.a.searchbar__input,children:[o,Object(l.jsx)("input",{className:d,type:"text",id:"subreddit",name:"subreddit",placeholder:"askreddit",value:r,onChange:c,onBlur:s})]}),Object(l.jsx)(x,{className:m.a.searchbar__btn,btnText:"Submit",type:"submit",disabled:!a})]})},g=function(t){return Object(l.jsx)("div",{title:"loading-spinner",children:Object(l.jsxs)("svg",{width:t.width,height:t.height,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg","aria-label":t.label,children:[Object(l.jsx)("defs",{children:Object(l.jsxs)("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[Object(l.jsx)("stop",{stopColor:t.color,stopOpacity:"0",offset:"0%"}),Object(l.jsx)("stop",{stopColor:t.color,stopOpacity:".631",offset:"63.146%"}),Object(l.jsx)("stop",{stopColor:t.color,offset:"100%"})]})}),Object(l.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(l.jsxs)("g",{transform:"translate(1 1)",children:[Object(l.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:t.color,strokeWidth:"2",children:Object(l.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(l.jsx)("circle",{fill:"#fff",cx:"36",cy:"18",r:t.radius,children:Object(l.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})};g.defaultProps={height:80,width:80,color:"green",radius:1,label:"audio-loading"};var y=r(12),S=r.n(y),w=function(t){return Object(l.jsx)("div",{className:S.a["error-text"],children:t.msg})},N=r(13),P=function(){var t=window;return{width:t.innerWidth,height:t.innerHeight}},T=function(){var t=Object(a.useState)(P()),e=Object(i.a)(t,2),r=e[0],n=e[1];return Object(a.useEffect)((function(){function t(){n(P())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),r},C=r(9),L=r.n(C),D=function(t){var e=function(){if(0===t.maxDailyPosts)return"color-1";var e=t.numPosts/1;return e=(e=e/t.maxDailyPosts*6)<1&&e>0?1:e,e=Math.round(e),"color-".concat(e)}();return Object(l.jsx)("td",{className:"".concat(L.a["grid-square"]," ").concat(L.a[e]),children:0===t.numPosts?"-":t.numPosts})},E=function(t){var e=t.dayHour,r=t.maxDailyPosts,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"heatmap",cellSpacing:"0",cellPadding:"0",border:"0",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),e[0].map((function(t,e){return Object(l.jsxs)("th",{children:[Object(l.jsx)("div",{children:e%12===0?12:e%12}),Object(l.jsx)("div",{children:e<12?"AM":"PM"})]},e)}))]})}),Object(l.jsx)("tbody",{children:e.map((function(t,e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{style:{textAlign:"right"},children:a[e]}),t.map((function(t,e){return Object(l.jsx)(D,{numPosts:t,maxDailyPosts:r},e)}))]},e)}))})]})})},I=function(t){var e=t.dayHour,r=t.screenWidth,a=t.maxDailyPosts,n=function(t){for(var e=new Array(24),r=0;r<e.length;r++)e[r]=new Array(7).fill(0);for(var a=0;a<e.length;a++)for(var n=0;n<e[a].length;n++)e[a][n]=t[n][a];return e}(e);return Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"heatmap",cellSpacing:"0",cellPadding:"0",border:"0",children:[Object(l.jsx)("thead",{children:r>=480?Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{children:"Sun"}),Object(l.jsx)("th",{children:"Mon"}),Object(l.jsx)("th",{children:"Tue"}),Object(l.jsx)("th",{children:"Wed"}),Object(l.jsx)("th",{children:"Thr"}),Object(l.jsx)("th",{children:"Fri"}),Object(l.jsx)("th",{children:"Sat"})]}):Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{children:"S"}),Object(l.jsx)("th",{children:"M"}),Object(l.jsx)("th",{children:"T"}),Object(l.jsx)("th",{children:"W"}),Object(l.jsx)("th",{children:"T"}),Object(l.jsx)("th",{children:"F"}),Object(l.jsx)("th",{children:"S"})]})}),Object(l.jsx)("tbody",{children:n.map((function(t,e){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[e%12===0?12:e%12," ",e<12?"AM":"PM"]}),t.map((function(t,e){return Object(l.jsx)(D,{numPosts:t,maxDailyPosts:a},e)}))]},e)}))})]})})},F=r(14),H=r.n(F),B=function(){return Object(l.jsx)("div",{className:H.a.msg,children:"No Data..."})},q=function(t){var e=T(),r=e.height,n=e.width,c=function(){for(var e=[],r=0;r<7;r++)e.push(new Array(24).fill(0));var a,n=Object(N.a)(t.data);try{for(n.s();!(a=n.n()).done;){var c=a.value;0===c.day?e[0][parseInt(c.hour,10)]++:1===c.day?e[1][parseInt(c.hour,10)]++:2===c.day?e[2][parseInt(c.hour,10)]++:3===c.day?e[3][parseInt(c.hour,10)]++:4===c.day?e[4][parseInt(c.hour,10)]++:5===c.day?e[5][parseInt(c.hour,10)]++:6===c.day&&e[6][parseInt(c.hour,10)]++}}catch(s){n.e(s)}finally{n.f()}return e}(),s=c.flat().reduce((function(t,e){return Math.max(t,e)}),0);return Object(a.useEffect)((function(){return t.data&&0!==t.data.length?n>r?Object(l.jsx)(E,{dayHour:c,max:s}):Object(l.jsx)(I,{dayHour:c,screenWidth:n,maxDailyPosts:s}):Object(l.jsx)(B,{})}),[r,n,c,t.data,s]),t.data&&0!==t.data.length?n>r?Object(l.jsx)(E,{dayHour:c,maxDailyPosts:s}):Object(l.jsx)(I,{dayHour:c,screenWidth:n,maxDailyPosts:s}):Object(l.jsx)(B,{})},M=r(15),A=r.n(M),k=function(t){return Object(l.jsxs)("div",{className:A.a.title,children:["Top rated Reddit posts for: www.reddit.com/r/",t.subreddit]})},G=function(t){var e=Object(a.useState)(null),r=Object(i.a)(e,2),c=r[0],s=r[1],o=Object(a.useState)(!1),d=Object(i.a)(o,2),u=d[0],b=d[1],j=Object(a.useState)(null),h=Object(i.a)(j,2),_=h[0],f=h[1],p=function(t,e,r){return t.toLocaleString(e,{timeZone:r}).split(", ")[0]},x=function(t,e,r){return t.toLocaleString(e,{timeZone:r}).split(", ")[1]},O=function(t,e,r){return t.toLocaleString(e,{timeZone:r,hour12:!1}).split(", ")[1].split(":")[0]%24};return Object(a.useEffect)((function(){t.subreddit&&0!==t.subreddit.length&&(f(null),b(!0),fetch("https://www.reddit.com/r/".concat(t.subreddit,"/top.json?t=month&limit=100")).then((function(t){return t.json()})).then((function(e){if(function(t){return!(!t.data.children||0===t.data.children.length)&&t.data.children.map((function(t){return t.data.over_18})).every((function(t){return!0===t}))}(e))return b(!1),void f("Explicit content not allowed. Please try a different subreddit.");var r={clientTimeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,clientLocale:Intl.DateTimeFormat().resolvedOptions().locale},a=r.clientTimeZone,n=r.clientLocale,c=e.data.children.map((function(e){var r=new Date(1e3*e.data.created_utc);return{subreddit:t.subreddit,upvote_ratio:e.data.upvote_ratio,unix_time:r,day:r.getDay(),date:p(r,n,a),time:x(r,n,a),hour:O(r,n,a)}}));b(!1),s(c||null)})).catch((function(e){b(!1),f('Error: No data available for subreddit: "'.concat(t.subreddit,'"'))})))}),[t.subreddit]),Object(a.useEffect)((function(){c&&c.length>0&&fetch("https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json",{method:"POST",body:JSON.stringify({subreddit:c[0].subreddit.toLowerCase(),count:1}),headers:{"Content-Type":"application/json"}})}),[c]),t.subreddit,u?Object(l.jsx)(g,{color:"#6200ee"}):_?Object(l.jsx)(w,{msg:_}):c?Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(k,{subreddit:t.subreddit}),Object(l.jsx)(q,{data:c})]}):Object(l.jsx)(w,{msg:_})},Z=function(t){var e=Object(a.useState)(""),r=Object(i.a)(e,2),c=r[0],s=r[1];return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(v,{onSubmit:function(e){s(e),t.onEnteredSubreddit(e)}}),c&&Object(l.jsx)(G,{subreddit:c})]})},W=r(5),R=r.n(W),J=function(t){return Object(l.jsxs)("div",{className:R.a["popular-search-list"],children:[Object(l.jsx)("div",{className:R.a["popular-search-list__heading"],children:"Popular Searches"}),t.data&&0!==t.data.length?t.data.map((function(t){return Object(l.jsx)("div",{className:R.a["popular-search-list__subreddit"],children:t.subreddit},t.subreddit)})):Object(l.jsx)("p",{className:R.a["popular-search-list__no-data"],children:"no data..."})]})},U=function(t){var e=Object(a.useState)(null),r=Object(i.a)(e,2),n=r[0],c=r[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),d=o[0],u=o[1],b=Object(a.useState)(null),j=Object(i.a)(b,2),h=j[0],_=j[1];return Object(a.useEffect)((function(){u(!0),fetch("https://reddit-scraper-app-default-rtdb.firebaseio.com/subreddits.json").then((function(t){return t.json()})).then((function(t){if(t){var e;e=function(t){for(var e={},r=0,a=Object.entries(t);r<a.length;r++){var n=a[r],c=n[1].subreddit,s=n[1].count;e[c]?e[c]++:e[c]=s}return e}(t);var r=[];r=function(t){return Object.entries(t).map((function(t){return{subreddit:t[0],count:t[1]}}))}(e),r.sort((function(t,e){return e.count-t.count})),r.splice(5,r.length),u(!1),c(r)}else u(!1)})).catch((function(t){return _("Something went wrong...")}))}),[]),d?Object(l.jsx)(g,{color:"#6200ee"}):h?Object(l.jsx)(w,{msg:h}):Object(l.jsx)(J,{data:n})},z=r(16),Q=r.n(z),V=function(){var t=Object(a.useState)(null),e=Object(i.a)(t,2),r=e[0],n=e[1];return Object(l.jsxs)("div",{className:Q.a.app,children:[Object(l.jsx)(u,{}),Object(l.jsx)(h,{}),Object(l.jsx)(Z,{onEnteredSubreddit:function(t){n(t)}}),Object(l.jsx)(U,{subreddit:r})]})},K=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(e){var r=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,s=e.getTTFB;r(t),a(t),n(t),c(t),s(t)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root")),K()}],[[23,1,2]]]);
//# sourceMappingURL=main.761bc23a.chunk.js.map