(this["webpackJsonpgam-games"]=this["webpackJsonpgam-games"]||[]).push([[0],{156:function(e,t,n){},157:function(e,t,n){var a={"./GamePage":72,"./GamePage/":72,"./GamePage/index":72,"./GamePage/index.jsx":72,"./GamePage/styles":75,"./GamePage/styles.js":75,"./Home":71,"./Home/":71,"./Home/index":71,"./Home/index.jsx":71,"./Home/styles":76,"./Home/styles.js":76,"./PageNotFound":73,"./PageNotFound.jsx":73};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=157},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);n(0);var a=n(13),r=n.n(a),i=n(11),o=n(105),c=n(31),s=n(89),l=n(106),d=n(107),u=n.n(d),p=n(108),m=n(8),f=n(46),b={failureSnackbarOpen:!1},g=n(19),x={gamesList:[],randomImagesList:[],page:1,totalPages:1,status:"LOADING"},h=n(34),j={platformField:"all",categoryField:"all",orderField:"all"},v=n(35),O={gameDetails:{},similarGames:[],status:"NOT_ASKED"},y=Object(c.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case f.b:return Object(m.a)(Object(m.a)({},e),{},{failureSnackbarOpen:!0});case f.a:return Object(m.a)(Object(m.a)({},e),{},{failureSnackbarOpen:!1});default:return e}},imagesSearchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case g.b:return Object(m.a)(Object(m.a)({},e),{},{gamesList:a});case g.d:return Object(m.a)(Object(m.a)({},e),{},{randomImagesList:a,status:"SUCCESS"});case g.c:return Object(m.a)(Object(m.a)({},e),{},{page:a});case g.g:return Object(m.a)(Object(m.a)({},e),{},{totalPages:a});case g.f:return Object(m.a)(Object(m.a)({},e),{},{status:"LOADING"});case g.e:return Object(m.a)(Object(m.a)({},e),{},{status:"FAILURE"});case g.a:return Object(m.a)(Object(m.a)({},e),{},{randomImagesList:[],status:"LOADING"});default:return Object(m.a)({},e)}},sortPanelReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h.SET_PLATFORM_VALUE:return Object(m.a)(Object(m.a)({},e),{},{platformField:a});case h.SET_CATEGORY_VALUE:return Object(m.a)(Object(m.a)({},e),{},{categoryField:a});case h.SET_ORDER_VALUE:return Object(m.a)(Object(m.a)({},e),{},{orderField:a});case h.RESET_FIELDS:return j;default:return Object(m.a)({},e)}},gamePageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v.c:return Object(m.a)(Object(m.a)({},e),{},{gameDetails:a,status:"SUCCESS"});case v.e:return Object(m.a)(Object(m.a)({},e),{},{status:"PENDING"});case v.d:return Object(m.a)(Object(m.a)({},e),{},{status:"FAILURE"});case v.b:return Object(m.a)(Object(m.a)({},e),{},{similarGames:a});case v.a:return Object(m.a)({},O);default:return Object(m.a)({},e)}}}),S={key:"root",storage:u.a},w=Object(s.a)(S,y),R=Object(c.createStore)(w,Object(l.composeWithDevTools)(Object(c.applyMiddleware)(p.a))),C=Object(s.b)(R),I=n(36),E=n(16),A=[{link:"/",page:"Home",exact:!0},{link:"/games/:id",page:"GamePage",exact:!0}],_=n(212),N=n(209),k=n(2);function T(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.appReducer})).failureSnackbarOpen;function n(){e(Object(f.c)())}return Object(k.jsx)(_.a,{open:t,autoHideDuration:4e3,onClose:n,children:Object(k.jsx)(N.a,{variant:"filled",severity:"error",onClose:n,children:"There are no results found according to the search parameters!"})})}var P=n(73);n(156);var F=function(){return Object(k.jsx)(i.a,{store:R,children:Object(k.jsxs)(o.a,{loading:null,persistor:C,children:[Object(k.jsx)(T,{}),Object(k.jsx)(I.a,{children:Object(k.jsxs)(E.c,{children:[A.map((function(e){var t=n(157)("./".concat(e.page)).default;return Object(k.jsx)(E.a,{exact:e.exact,path:e.link,children:Object(k.jsx)(t,{})},e.link)})),Object(k.jsx)(E.a,{component:P.default})]})})]})})};n(165);r.a.render(Object(k.jsx)(F,{}),document.getElementById("root"))},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"i",(function(){return x})),n.d(t,"j",(function(){return O})),n.d(t,"h",(function(){return S}));var a=n(81),r=n(23),i=n.n(r),o=n(41),c=n(40),s=n(61),l=n(46),d="SET_IMAGES",u="SET_RANDOM_IMAGES",p="SET_PAGE",m="SET_TOTAL_PAGES",f="SET_SLIDE_DATA_LOADING",b="SET_SLIDE_DATA_FAILURE",g="CLEAR_RANDOM_IMAGES_STATE",x=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a,r,o,d,u,p,m,f,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(),r=a.sortPanelReducer,o=r.platformField,d=r.categoryField,u=r.orderField,e.prev=1,e.next=4,Object(c.b)({platformField:o,categoryField:d,orderField:u});case 4:p=e.sent,m=p.data,f=m.length,b=Math.ceil(f/s.a),t(h(m)),t(j(m)),t(y(b)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t(Object(l.d)("Failure!"));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var t=Object(o.a)(i.a.mark((function t(){var n,a,r,o,s,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Math.floor(Math.random()*e.length-1),r=null===(n=e[a])||void 0===n?void 0:n.id,t.prev=2,t.next=5,Object(c.d)(r);case 5:if(s=t.sent,!(null===(l=s.data)||void 0===l||null===(o=l.screenshots)||void 0===o?void 0:o.length)){t.next=9;break}return t.abrupt("return",l);case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(2);case 13:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(){return t.apply(this,arguments)}}(),t.next=3,Promise.all(Object(a.a)(Array(4).keys()).map(Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r());case 1:case"end":return e.stop()}}),e)})))));case 3:return t.next=5,t.sent.filter(Boolean);case 5:s=t.sent,n(v(s));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return{type:"SET_IMAGES",payload:e}},v=function(e){return{type:"SET_RANDOM_IMAGES",payload:e}},O=function(e){return{type:"SET_PAGE",payload:e}},y=function(e){return{type:"SET_TOTAL_PAGES",payload:e}},S=function(){return{type:"CLEAR_RANDOM_IMAGES_STATE"}}},34:function(e,t,n){"use strict";n.r(t),n.d(t,"SET_PLATFORM_VALUE",(function(){return a})),n.d(t,"SET_CATEGORY_VALUE",(function(){return r})),n.d(t,"SET_ORDER_VALUE",(function(){return i})),n.d(t,"RESET_FIELDS",(function(){return o})),n.d(t,"setPlatformField",(function(){return c})),n.d(t,"setCategoryField",(function(){return s})),n.d(t,"setOrderField",(function(){return l})),n.d(t,"resetFields",(function(){return d}));var a="SET_PLATFORM_VALUE",r="SET_CATEGORY_VALUE",i="SET_ORDER_VALUE",o="RESET_FIELDS";function c(e){return{type:a,payload:e}}function s(e){return{type:r,payload:e}}function l(e){return{type:i,payload:e}}function d(){return{type:o}}},35:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return h}));var a=n(23),r=n.n(a),i=n(41),o=n(40),c="SET_SPECIFIC_DATA",s="SET_SPECIFIC_DATA_PENDING",l="SET_SPECIFIC_DATA_FAILURE",d="SET_SIMILAR_GAMES",u="CLEAR_GAME_PAGE_STATE",p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(b()),t.prev=1,t.next=4,Object(o.d)(e);case 4:a=t.sent,i=a.data,n(f(i)),n(m()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n(g());case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t,n){var a,i,c,s,l,d,u,p,m,f,b;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(),i=a.gamePageReducer.gameDetails,e.prev=1,l=(null===i||void 0===i||null===(c=i.title)||void 0===c?void 0:c.length)?null===i||void 0===i?void 0:i.title:"",e.next=5,Object(o.c)(l);case 5:return d=e.sent,u=d.data.results,p=null===(s=u[0])||void 0===s?void 0:s.guid,e.next=10,Object(o.a)(p);case 10:m=e.sent,f=null===m||void 0===m?void 0:m.data.results,b=null===f||void 0===f?void 0:f.similar_games,t(x(b)),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(1);case 18:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}()},f=function(e){return{type:"SET_SPECIFIC_DATA",payload:e}},b=function(){return{type:"SET_SPECIFIC_DATA_PENDING"}},g=function(){return{type:"SET_SPECIFIC_DATA_FAILURE"}},x=function(e){return{type:"SET_SIMILAR_GAMES",payload:e}},h=function(){return{type:"CLEAR_GAME_PAGE_STATE"}}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m}));var a=n(8),r=n(65),i=n.n(r),o="https://www.giantbomb.com/api",c="https://free-to-play-games-database.p.rapidapi.com/api/",s="f5668327c6286caa4fa7af9f543f498652873f59",l="5db4280bd3mshca81f831bbf3e4bp179b52jsn70eca4b3aac8";function d(e){var t=e.platformField,n=e.categoryField,r=e.orderField;return i.a.get("".concat(c,"/games"),{headers:{"x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com","x-rapidapi-key":l},params:Object(a.a)(Object(a.a)({platform:t},"all"!==n&&{category:n}),"all"!==r&&{"sort-by":r})})}function u(e){return i.a.get("".concat(c,"/game"),{headers:{"x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com","x-rapidapi-key":l},params:{id:Number(e)}})}function p(e){return i.a.get("".concat(o,"/search/?api_key=").concat(s,"&format=json&query=").concat(e,"&resources=game"),{})}function m(e){return i.a.get("".concat(o,"/game/").concat(e,"/?api_key=").concat(s,"&format=json"),{})}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o}));var a="SHOW_SNACKBAR_FAILURE",r="CLEAR_SNACKBAR";function i(e){return{type:"SHOW_SNACKBAR_FAILURE",payload:e}}function o(){return{type:"CLEAR_SNACKBAR"}}},56:function(e,t,n){"use strict";var a=n(0),r=n(16),i=n(36),o=n(204),c=n(201),s=n(205),l=n(114),d=n.n(l),u=n(2),p=Object(o.a)((function(){return{rootPaper:{minHeight:"76px",padding:"0 24px","&.MuiPaper-elevation1":{boxShadow:"none"}},paperContent:{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:"1440px",height:"76px",margin:"0 auto","& > a:visited":{color:"#3f444e"}},logo:{textTransform:"uppercase",fontWeight:800,cursor:"pointer"},noBereak:{display:"inline-block"},buttonRoot:{width:"130px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",textDecoration:"none",boxShadow:"none","&:hover":{color:"#8b0000",textDecoration:"none"}},playIcon:{verticalAlign:"bottom"},flexContainer:{justifyContent:"space-around",width:"350px",maxWidth:"350px"},indicator:{backgroundColor:"transparent"},rootTab:{minWidth:"unset",color:"#9d9fa5","&:hover":{color:"#575b67"},"&.Mui-selected":{color:"#575b67"}},user:{display:"flex",alignItems:"center",fontSize:"15px",textTransform:"capitalize",fontWeight:800},userImage:{position:"relative",margin:"0 11px"},penIcon:{marginLeft:"15px"},badge:{top:"12%",right:"25%",background:"#8b0000",border:"1px solid #ffffff"},tooltip:{fontSize:"13px",color:"#ffffff",textTransform:"uppercase",backgroundColor:"#8b0000",height:"23px",lineHeight:1.7,"-webkitBoxShadow":"0px 0px 0px 2px #8b0000","-mozBoxShadow":"0px 0px 0px 2px #8b0000",boxShadow:"0px 0px 0px 2px #8b0000"},arrow:{"&::before":{backgroundColor:"#8b0000"}}}}));var m=function(){var e=Object(r.g)(),t=p();return Object(u.jsx)(c.a,{square:!0,classes:{root:t.rootPaper},children:Object(u.jsxs)("div",{className:t.paperContent,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsxs)("div",{className:t.logo,children:["FTP Game ",Object(u.jsxs)("span",{className:t.noBereak,children:["St",Object(u.jsx)(d.a,{classes:{root:t.playIcon}}),"re"]})]})}),"/"!==e.pathname&&Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)(s.a,{variant:"contained",classes:{root:t.buttonRoot},children:"Back home"})})]})})};t.a=function(e){var t=e.children,n=Object(r.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),t]})}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=23},71:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(0),i=n.n(r),o=n(117),c=n.n(o),s=n(204),l=n(56),d=n(11),u=n(213),p=n(205),m=n(115),f=n.n(m),b=n(116),g=n.n(b),x=n(80),h=n(83),j=n(19),v=n(2),O=Object(s.a)((function(){return{slider:{position:"relative",width:"100%",height:"425px","& .carousel-root .carousel .control-dots":{top:"145px",width:"auto",display:"flex",flexDirection:"column"}},indicatorStyles:{background:"#fff",width:"10px",height:"10px",borderRadius:"50%",outline:"2px solid #8b0000",padding:"5px",margin:"7px 7px 7px 24px",cursor:"pointer","&.active":{background:"#000"}},sliderItem:{maxHeight:"425px"},contentWrapper:{maxWidth:"1440px",margin:"0 auto"},indicatorWrap:{display:"flex",alignItems:"center"},title:{color:"#ffffff",width:"100%",background:"rgba(0,0,0,.5)",borderRadius:"4px",boxShadow:"7px 6px 7px rgba(0,0,0,.5)",whiteSpace:"nowrap",padding:"5px",marginLeft:"7px"},playNow:{position:"absolute",top:"145px",right:"12px",display:"flex",flexDirection:"column",alignItems:"center",width:"310px",zIndex:"1000","& > a:hover":{textDecoration:"none"}},gameLogo:{width:"300px",height:"100px",display:"inline-block"},buttonRoot:{width:"118px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",textDecoration:"none",boxShadow:"none","&:hover":{color:"#8b0000",textDecoration:"none"}},sliderBar:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%",minHeight:"49px",height:"49px",textTransform:"uppercase",fontSize:".75em",color:"#ffffff",background:"rgba(0, 0, 0, .7)",overflow:"hidden",padding:"0 24px",boxSizing:"border-box",zIndex:100},sliderBarContent:{display:"flex",justifyContent:"space-between",width:"1440px"},publicationInfo:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:.7},published:{marginRight:"10px"},releaseDate:{fontWeight:900,textShadow:"1px 1px 1px #000000",color:"#8b0000",marginTop:"0"},platformStatusInfoWrap:{display:"flex"},platformStatusInfo:{display:"flex",alignItems:"center",marginLeft:"25px"},svgRoot:{fill:"#8b0000",marginRight:"10px"},"@media(max-width: 768px)":{slider:{height:"240px","& .carousel-root .carousel .control-dots":{top:"45px"}},sliderItem:{maxHeight:"240px"},title:{fontSize:".7em"},playNow:{top:"40px",width:"200px"},gameLogo:{width:"200px",height:"75px"},sliderBar:{fontSize:".6em"},releaseDate:{display:"inline-block",marginTop:"5px"},platformStatusInfo:{lineHeight:"1",marginLeft:"10px"},svgRoot:{width:"0.75em",height:"0.75em",marginRight:"5px"}},"@media(max-width: 426px)":{slider:{height:"170px",marginBottom:"45px","& .carousel-root .carousel .control-dots":{top:"0",marginTop:"10px"}},sliderItem:{maxHeight:"170px"},playNow:{top:"unset",bottom:"10px",left:"24px",width:"118px",marginTop:"5px",marginBottom:"5px"},gameLogo:{display:"none"},sliderBar:{bottom:"-45px",background:"#000000"},sliderBarContent:{flexDirection:"column",justifyContent:"space-evenly"},platformStatusInfo:{marginLeft:0,marginRight:"10px"},svgRoot:{width:"0.65em",height:"0.65em"}}}}));var y=function(){var e=O(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.imagesSearchReducer})),o=n.randomImagesList,c=n.status,s=i.a.useState(null),l=Object(a.a)(s,2),m=l[0],b=l[1];return Object(r.useEffect)((function(){return function(){t(Object(j.h)())}}),[]),Object(v.jsxs)("div",{className:e.slider,children:["LOADING"===c&&Object(v.jsx)(h.a,{}),"SUCCESS"===c&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:"5000",showStatus:!1,showArrows:!1,showThumbs:!1,animationHandler:"fade",swipeable:!1,renderIndicator:function(t,n,a,r){var i=o[a];return n?(queueMicrotask((function(){return b(i)})),Object(v.jsxs)("div",{className:e.indicatorWrap,children:[Object(v.jsx)("li",{className:"".concat(e.indicatorStyles," active"),"aria-label":"Selected: ".concat(r," ").concat(a+1)}),Object(v.jsx)("span",{className:e.title,children:i.title})]})):Object(v.jsx)("li",{className:e.indicatorStyles,onClick:t,onKeyDown:t,value:a,role:"button",tabIndex:0,"aria-label":"".concat(r," ").concat(a+1)},a)},children:o.map((function(t){var n;return Object(v.jsx)("div",{className:e.sliderItem,children:Object(v.jsx)("img",{src:null===(n=t.screenshots[0])||void 0===n?void 0:n.image,alt:"",height:"100%",width:"100%"})},t.id)}))}),Object(v.jsx)("div",{className:e.contentWrapper,children:Object(v.jsxs)("div",{className:e.playNow,children:[Object(v.jsx)("img",{src:"".concat("/FTP-Game-Store","/images/be_a_hero.png"),alt:"",className:e.gameLogo}),Object(v.jsx)(u.a,{href:null===m||void 0===m?void 0:m.game_url,target:"_blank",children:Object(v.jsx)(p.a,{variant:"contained",classes:{root:e.buttonRoot},children:"Play now"})})]})}),Object(v.jsx)("div",{className:e.sliderBar,children:Object(v.jsxs)("div",{className:e.sliderBarContent,children:[Object(v.jsx)("div",{className:e.publicationInfo,children:Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:e.published,children:"Published"}),Object(v.jsx)("span",{className:e.releaseDate,children:null===m||void 0===m?void 0:m.release_date})]})}),Object(v.jsxs)("div",{className:e.platformStatusInfoWrap,children:[(null===m||void 0===m?void 0:m.platform)&&Object(v.jsxs)("div",{title:"Platform",className:e.platformStatusInfo,children:[Object(v.jsx)(f.a,{classes:{root:e.svgRoot}}),Object(v.jsx)("p",{children:null===m||void 0===m?void 0:m.platform})]}),(null===m||void 0===m?void 0:m.status)&&Object(v.jsxs)("div",{title:"Status",className:e.platformStatusInfo,children:[Object(v.jsx)(g.a,{classes:{root:e.svgRoot}}),Object(v.jsx)("p",{children:null===m||void 0===m?void 0:m.status})]})]})]})})]})]})},S=n(16),w=n(201),R=n(61),C=n(210),I=Object(s.a)({rootUl:{justifyContent:"center",padding:"0 24px",margin:"25px 0","& .MuiPaginationItem-root":{fontFamily:"Prompt"}},"@media(max-width: 576px)":{rootUl:{margin:"30px 40px","& .MuiPaginationItem-icon":{fontSize:"1rem"},"& .MuiPaginationItem-root":{height:"25px",minWidth:"25px",fontSize:"0.75rem"}}}});var E=function(){var e=I(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.imagesSearchReducer})),a=n.page,r=n.totalPages;return Object(v.jsx)("div",{children:Object(v.jsx)(C.a,{onChange:function(e,n){t(Object(j.j)(n))},page:a,count:r,classes:{ul:e.rootUl}})})},A=Object(s.a)((function(){return{gridContainer:{display:"grid",gap:"10px",gridTemplateColumns:"[startline] minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) [midline] minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) [endline]",gridAutoRows:"120px",gridAutoFlow:"dense",background:"linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(139, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",padding:"10px 24px","&>div:nth-of-type(1)":{gridColumn:"startline / 3"},"&>div:nth-of-type(4)":{gridColumn:"5 / endline",gridRow:"1 / 3"},"&>div:nth-of-type(7)":{gridColumn:"3 / 5"},"&>div:nth-of-type(10)":{gridColumn:"3 / 5"},"&>div:nth-of-type(13)":{gridColumn:"startline / 3",gridRow:"4 / 6"},"&>div:nth-of-type(14)":{gridColumn:"5 / endline"},"&>div:nth-of-type(19)":{gridColumn:"5 / endline"},"&>div:nth-of-type(22)":{gridColumn:"midline / endline"}},gridItem:{position:"relative","&:hover":{backgroundSize:"115% !important",transition:"all 0.5s",cursor:"pointer","& $gameName":{display:"block"}}},gameName:{display:"none",position:"absolute",content:"",width:"100%",height:"auto",top:0,textTransform:"uppercase",textAlign:"center",lineHeight:1,color:"#ffffff",background:"rgba(0, 0, 0, .5)",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",padding:"4px 0",zIndex:100},"@media(max-width: 1440px)":{gridContainer:{gridTemplateColumns:"[startline] minmax(130px, 1fr) minmax(130px, 1fr) [midline] minmax(130px, 1fr) minmax(130px, 1fr) [endline]","&>div:nth-of-type(4)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(6)":{gridColumn:"midline / endline"},"&>div:nth-of-type(7)":{gridColumn:"auto"},"&>div:nth-of-type(9)":{gridColumn:"midline / endline"},"&>div:nth-of-type(10)":{gridColumn:"startline / 3",gridRow:"4 / 6"},"&>div:nth-of-type(13)":{gridColumn:"midline / endline",gridRow:"auto"},"&>div:nth-of-type(14)":{gridColumn:"auto"},"&>div:nth-of-type(16)":{gridColumn:"midline / endline"},"&>div:nth-of-type(19)":{gridColumn:"auto"},"&>div:nth-of-type(21)":{gridColumn:"startline / midline"},"&>div:nth-of-type(20)":{gridColumn:"auto"},"&>div:nth-of-type(22)":{gridColumn:"auto"}}},"@media(max-width: 1024px)":{gridContainer:{gridTemplateColumns:"[startline] minmax(110px, 1fr) minmax(110px, 1fr) [midline] minmax(110px, 1fr) minmax(110px, 1fr) [endline]",gridAutoRows:"90px"}},"@media(max-width: 768px)":{gridContainer:{gridTemplateColumns:"[startline] 1fr 1fr 1fr [endline]",gridAutoRows:"60px","&>div:nth-of-type(6)":{gridColumn:"startline / 3",gridRow:"3 / 5"},"&>div:nth-of-type(9)":{gridColumn:"auto"},"&>div:nth-of-type(10)":{gridColumn:"2 / endline",gridRow:"5 / 7"},"&>div:nth-of-type(13)":{gridColumn:"auto"},"&>div:nth-of-type(16)":{gridColumn:"auto"},"&>div:nth-of-type(18)":{gridColumn:"startline / endline",gridRow:"9 / 10"},"&>div:nth-of-type(21)":{gridColumn:"auto"},"&>div:nth-of-type(23)":{gridColumn:"2 / endline"}},"@media(max-width: 425px)":{gridContainer:{gridTemplateColumns:"1fr",gridAutoRows:"150px","&>div:nth-of-type(1)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(6)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(10)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(18)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(23)":{gridColumn:"auto"}}}}}}));var _=function(){var e=A(),t=Object(S.f)(),n=Object(d.b)(),a=Object(d.c)((function(e){return e.imagesSearchReducer})),i=a.gamesList,o=a.page,c=1===o?0:(o-1)*R.a,s=i.slice(c,c+R.a);return Object(r.useEffect)((function(){n(Object(j.i)())}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:e.gridContainer,children:s.map((function(n){var a=n.id,r=n.thumbnail,i=n.title;return Object(v.jsx)(w.a,{onClick:function(){return function(e){t.push("/games/".concat(e))}(a)},style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"101%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:e.gridItem,children:Object(v.jsx)("div",{className:e.gameName,children:i})},a)}))}),Object(v.jsx)(E,{})]})},N=n(8),k=[{id:"platformField",formLabel:"Platform",options:[{value:"all"},{value:"pc"},{value:"browser"}]},{id:"categoryField",formLabel:"Category",options:[{value:"all"},{value:"mmo"},{value:"mmorpg"},{value:"shooter"},{value:"strategy"},{value:"moba"},{value:"racing"},{value:"social"}]},{id:"orderField",formLabel:"Order",options:[{value:"all"},{value:"release-date"},{value:"popularity"},{value:"alphabetical"},{value:"relevance"}]}],T=n(207),P=n(215),F=n(208),L=n(216),D=n(34),G=function(){return{searchOptions:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",maxWidth:"1440px",padding:"38px 24px 30px",margin:"0 auto","& .MuiInputBase-root":{fontFamily:"Prompt"}},form:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",width:"70%",marginBottom:"20px"},formControl:{minWidth:"200px",marginRight:"70px","& .MuiFormLabel-root":{fontFamily:"Prompt"},"& .MuiFormLabel-root.Mui-focused":{color:"#8b0000"},"& .MuiInput-underline:after":{borderColor:"#8b0000"}},rootMenuItem:{fontFamily:"Prompt"},buttons:{display:"flex",justifyContent:"flex-end",width:"30%"},buttonRoot:{minWidth:"118px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",boxShadow:"none",marginLeft:"30px","&:hover":{color:"#8b0000",backgroundColor:"#ffffff"}},"@media(max-width: 576px)":{form:{width:"100%","& .MuiInputBase-root":{fontSize:"0.85rem"}},formControl:{marginBottom:"10px"},buttons:{width:"100%",justifyContent:"flex-start"},buttonRoot:{marginLeft:0,marginRight:"30px"}}}},M=Object(s.a)(G);var U=function(e){var t=e.id,n=e.formLabel,a=e.options,r=M(),i=Object(d.b)(),o=Object(d.c)((function(e){return e.sortPanelReducer[t]}));return Object(v.jsxs)(T.a,{className:r.formControl,children:[Object(v.jsx)(P.a,{id:t,children:n}),Object(v.jsx)(F.a,{labelId:n,id:n,value:o,onChange:function(e){var n=t.charAt(0).toUpperCase()+t.slice(1),a=D["set".concat(n)];i(a(e.target.value))},children:a.map((function(e){var t=e.value;return Object(v.jsx)(L.a,{value:t,classes:{root:r.rootMenuItem},children:t.toUpperCase()},t)}))})]})};var W=Object(s.a)(G);var z=function(){var e=W(),t=Object(d.b)(),n=Object(d.c)((function(e){return e.sortPanelReducer})),a=n.platformField,r=n.categoryField,i=n.orderField,o="all"===a&&"all"===r&&"all"===i,c=function(e){var t,n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;return function(){if(!t){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e.apply(n,i)}clearTimeout(t),t=setTimeout((function(){t=void 0}),a)}}((function(){t(Object(j.i)()),t(Object(j.j)(1))}));return Object(v.jsx)(w.a,{elevation:0,square:!0,children:Object(v.jsxs)("div",{className:e.searchOptions,children:[Object(v.jsx)("h2",{children:"Featured games"}),Object(v.jsx)("form",{noValidate:!0,autoComplete:"off",className:e.form,children:k.map((function(e){return Object(v.jsx)(U,Object(N.a)({},e),e.id)}))}),Object(v.jsxs)("div",{className:e.buttons,children:[Object(v.jsx)(p.a,{variant:"contained",classes:{root:e.buttonRoot},onClick:c,children:"Sort"}),Object(v.jsx)(p.a,{variant:"contained",disabled:o,classes:{root:e.buttonRoot},onClick:function(){t(Object(D.resetFields)()),t(Object(j.i)()),t(Object(j.j)(1))},children:"reset"})]})]})})},H=n(76),B=Object(s.a)(H.styles);t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],o=B();return Object(r.useEffect)((function(){var e=function(){return i(window.scrollY>50)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(y,{}),Object(v.jsx)(z,{}),Object(v.jsx)(_,{}),Object(v.jsx)("div",{className:"".concat(o.buttonUp," ").concat(n?o.toShow:""),onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(v.jsx)(c.a,{})})]})}},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n(11),c=n(204),s=n(56),l=n(83),d=n(82),u=n(213),p=n(205),m=n(81),f=n(49),b=n(80),g=n(2),x=Object(c.a)((function(){return{thumbnailSlider:{"& .thumbs-wrapper":{marginBottom:0},"& .carousel .thumb":{padding:0,border:"none",borderRadius:"4px",marginTop:"1px"},"& .carousel .thumb:nth-child(1)":{marginLeft:"1px"},"& .carousel .thumbs .selected":{boxSizing:"border-box",outline:"1px solid #ffffff"},"& .carousel .thumbs img":{maxHeight:"45px"}},resizedImage:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"500px"},"@media (min-width: 2560px)":{resizedImage:{minHeight:"750px"}},"@media (max-width: 768px)":{thumbnailSlider:{"& .thumbs-wrapper":{marginBottom:"30px"}},resizedImage:{minHeight:"300px",height:"auto"}},"@media (max-width: 426px)":{resizedImage:{minHeight:"200px"}}}}));var h=function(){var e=x(),t=Object(o.c)((function(e){return e.gamePageReducer})).gameDetails,n=r.a.useState([]),i=Object(f.a)(n,2),c=i[0],s=i[1],l=r.a.useState(null),d=Object(f.a)(l,2),u=(d[0],d[1]);return Object(a.useEffect)((function(){if(Object.keys(t).length){var e,n={id:"defaultImageId",image:null===t||void 0===t?void 0:t.thumbnail};u(n.image),(null===t||void 0===t||null===(e=t.screenshots)||void 0===e?void 0:e.length)&&s([n].concat(Object(m.a)(null===t||void 0===t?void 0:t.screenshots)))}}),[t]),Object(g.jsx)("div",{className:e.thumbnailSlider,children:0!==(null===c||void 0===c?void 0:c.length)?Object(g.jsx)(b.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:"10000",showStatus:!1,showArrows:!1,showIndicators:!1,children:c.map((function(e){var t=e.id,n=e.image;return Object(g.jsx)("img",{src:n,alt:""},t)}))}):Object(g.jsx)("div",{className:e.resizedImage,style:{backgroundImage:"url(".concat(null===t||void 0===t?void 0:t.thumbnail,")")}})})},j=Object(c.a)((function(){return{glanceInfoWrap:{display:"flex",justifyContent:"space-between",color:"#ffffff",background:"linear-gradient(45deg, #000000, #800000)",padding:"40px 24px"},screenshots:{minWidth:"60%",marginRight:"3%"},glance:{minWidth:"37%",background:"rgba(0.5, 0.5, 0.5, .4)",boxSizing:"border-box","&>a:hover":{textDecoration:"none"}},glanceInfo:{padding:"20px 15px",textAlign:"left","&>div":{lineHeight:1.2,marginBottom:"5px"},"& h4":{marginRight:"5px"}},info:{fontFamily:"Prompt",fontSize:"0.75em"},shortDescription:{textAlign:"left"},linkDecoration:{"&:hover":{textDecoration:"none"}},buttonRoot:{width:"180px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",boxShadow:"none",marginTop:"15px","&:hover":{color:"#8b0000",textDecoration:"none"}},"@media (max-width: 768px)":{glanceInfoWrap:{flexDirection:"column"},screenshots:{minWidth:"100%",marginRight:0},glance:{minWidth:"100%"},glanceInfo:{"&>div":{lineHeight:1,marginBottom:"5px"}},info:{fontSize:"0.6em"}}}}));var v=function(){var e=j(),t=Object(o.c)((function(e){return e.gamePageReducer})).gameDetails;return Object(g.jsxs)("div",{className:e.glanceInfoWrap,children:[Object(g.jsx)("div",{className:e.screenshots,children:Object(g.jsx)(h,{})}),Object(g.jsx)("div",{className:e.glance,children:Object(g.jsxs)("div",{className:e.glanceInfo,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Short description: "}),Object(g.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.short_description})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Genre: "}),Object(g.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.genre})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Status: "}),Object(g.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.status})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Release date: "}),Object(g.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.release_date})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Developer: "}),Object(g.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.developer})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Publisher: "}),Object(g.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.publisher})]}),Object(g.jsx)(u.a,{href:null===t||void 0===t?void 0:t.game_url,target:"_blank",className:e.linkDecoration,children:Object(g.jsx)(p.a,{variant:"contained",classes:{root:e.buttonRoot},children:"Play now"})})]})})]})},O=Object(c.a)((function(){return{parallax:{backgroundImage:"url(".concat("/FTP-Game-Store","/images/parallax_bg.jpg)"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},description:{maxWidth:"1440px",fontWeight:800,textShadow:"2px 0 2px white",lineHeight:1.3,padding:"40px 24px",margin:"0 auto"},"@media(max-width: 768px)":{descriptionText:{fontSize:"0.75em"}}}}));var y=function(){var e=O(),t=Object(o.c)((function(e){return e.gamePageReducer})).gameDetails;return Object(g.jsxs)("div",{className:"".concat(e.description," ").concat(e.parallax),children:[Object(g.jsx)("h2",{children:null===t||void 0===t?void 0:t.title}),Object(g.jsx)("p",{className:e.descriptionText,children:null===t||void 0===t?void 0:t.description})]})},S=Object(c.a)((function(){return{requirements:{display:"flex",height:"auto",background:"linear-gradient(45deg, #000000, #800000)",padding:"40px 24px"},systemRequirementsWrap:{width:"100%",color:"#ffffff",background:"rgba(0.5, 0.5, 0.5, .4)",padding:"20px 15px",boxSizing:"border-box","&>h2":{color:"#ffffff",marginRight:"5px"}},systemRequirements:{display:"flex",justifyContent:"space-between"},systemRequirementsInfo:{textAlign:"left",width:"60%",marginRight:"3%","&>div":{lineHeight:1.2,marginBottom:"5px"},"& h4":{marginRight:"5px"},"& span":{fontFamily:"Prompt",fontSize:"0.75em"}},systemRequirementsImage:{width:"37%",height:"230px",background:"url(".concat("/FTP-Game-Store","/images/system_requirements.png)"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},"@media(max-width: 768px)":{systemRequirementsInfo:{width:"100%",marginRight:0,marginBottom:"20px","&>div":{lineHeight:1},"& span":{fontSize:"0.6em"}},systemRequirementsImage:{display:"none"}}}}));var w=function(){var e,t=S(),n=Object(o.c)((function(e){var t;return(null===(t=e.gamePageReducer.gameDetails)||void 0===t?void 0:t.minimum_system_requirements)||{}}));return Object(g.jsx)("div",{className:t.requirements,children:Object(g.jsxs)("div",{className:t.systemRequirementsWrap,children:[Object(g.jsx)("h2",{children:"Minimum system requirements"}),Object(g.jsxs)("div",{className:t.systemRequirements,children:[0!==(null===(e=Object.keys(n))||void 0===e?void 0:e.length)?Object(g.jsxs)("div",{className:t.systemRequirementsInfo,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Os: "}),Object(g.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.os)||null===(null===n||void 0===n?void 0:n.os)||"Not defined"===(null===n||void 0===n?void 0:n.os)?"Unavailable":null===n||void 0===n?void 0:n.os})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Processor: "}),Object(g.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.processor)||null===(null===n||void 0===n?void 0:n.processor)||"Not defined"===(null===n||void 0===n?void 0:n.processor)?"Unavailable":null===n||void 0===n?void 0:n.processor})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Memory: "}),Object(g.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.memory)||null===(null===n||void 0===n?void 0:n.memory)||"Not defined"===(null===n||void 0===n?void 0:n.memory)?"Unavailable":(null===n||void 0===n?void 0:n.memory)||"Unavailable"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Graphics: "}),Object(g.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.graphics)||null===(null===n||void 0===n?void 0:n.graphics)||"Not defined"===(null===n||void 0===n?void 0:n.graphics)?"Unavailable":(null===n||void 0===n?void 0:n.graphics)||"Unavailable"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{children:"Storage: "}),Object(g.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.storage)||null===(null===n||void 0===n?void 0:n.storage)||"Not defined"===(null===n||void 0===n?void 0:n.storage)?"Unavailable":null===n||void 0===n?void 0:n.storage})]})]}):Object(g.jsx)("p",{children:"System requirements are unavailable"}),Object(g.jsx)("div",{className:t.systemRequirementsImage})]})]})})},R=n(214),C=Object(c.a)((function(){return{similarGames:{maxWidth:"1440px",lineHeight:1.5,padding:"40px 24px",margin:"0 auto"},chipRoot:{fontFamily:"Prompt",lineHeight:"24px",color:" #3f444e",marginRight:"10px",marginBottom:"10px"}}}));var I=function(){var e=C(),t=Object(o.c)((function(e){return e.gamePageReducer})).similarGames;return Object(g.jsxs)("div",{className:e.similarGames,children:[Object(g.jsx)("h2",{children:"Similar games"}),t?null===t||void 0===t?void 0:t.map((function(t){var n=t.id,a=t.name;return Object(g.jsx)(R.a,{label:a,classes:{root:e.chipRoot}},n)})):"No games in the list"]})},E=n(35),A=n(75),_=Object(c.a)(A.styles);t.default=function(){var e=_(),t=Object(o.b)(),n=Object(i.h)().id,r=Object(o.c)((function(e){return e.gamePageReducer})).status;return Object(a.useEffect)((function(){return t(Object(E.g)(n)),function(){t(Object(E.f)())}}),[]),Object(g.jsxs)(s.a,{children:["PENDING"===r&&Object(g.jsx)(l.a,{}),"FAILURE"===r&&Object(g.jsx)(d.a,{}),"SUCCESS"===r&&Object(g.jsxs)("div",{className:e.gameInfo,children:[Object(g.jsx)(v,{}),Object(g.jsx)(y,{}),Object(g.jsx)(w,{}),Object(g.jsx)(I,{})]})]})}},73:function(e,t,n){"use strict";n.r(t);n(0);var a=n(56),r=n(82),i=n(2);t.default=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(r.a,{})})}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return a}));var a=function(){return{gameInfo:{width:"100%",textAlign:"justify",margin:"0 auto"}}}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return a}));var a=function(){return{buttonUp:{position:"fixed",bottom:"24px",right:"24px",width:"36px",height:"36px",background:"rgba(0, 0, 0, .5)",borderRadius:"4px",cursor:"pointer",opacity:0,zIndex:1e3,transition:"all .5s","& svg":{position:"absolute",top:"5px",left:"6px",color:"#ffffff"}},toShow:{opacity:1}}}},82:function(e,t,n){"use strict";n(0);var a=n(204),r=n(2),i=Object(a.a)((function(){return{error:{backgroundImage:"url(".concat("/FTP-Game-Store","/images/page_not_found.png)"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"calc(100vh - 76px)"}}}));t.a=function(){var e=i();return Object(r.jsx)("div",{className:e.error})}},83:function(e,t,n){"use strict";n(0);var a=n(206),r=n(204),i=n(2),o=Object(r.a)((function(){return{loadingWrapper:{display:"flex",justifyContent:"center",height:"100%"},root:{alignSelf:"center"},colorPrimary:{color:"rgba(0, 0, 0, .5)"}}}));t.a=function(){var e=o();return Object(i.jsx)("div",{className:e.loadingWrapper,children:Object(i.jsx)(a.a,{className:"".concat(e.root," ").concat(e.colorPrimary)})})}}},[[166,1,2]]]);
//# sourceMappingURL=main.4c5e245c.chunk.js.map