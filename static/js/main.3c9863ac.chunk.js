(this["webpackJsonpgam-games"]=this["webpackJsonpgam-games"]||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){var r={"./GamePage":73,"./GamePage/":73,"./GamePage/index":73,"./GamePage/index.jsx":73,"./GamePage/styles":76,"./GamePage/styles.js":76,"./Home":72,"./Home/":72,"./Home/index":72,"./Home/index.jsx":72,"./Home/styles":77,"./Home/styles.js":77,"./PageNotFound":74,"./PageNotFound.jsx":74};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=160},168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);n(0);var r=n(13),a=n.n(r),i=n(11),o=n(107),c=n(31),s=n(91),l=n(108),d=n(109),u=n.n(d),p=n(110),m=n(7),f=n(46),b={failureSnackbarOpen:!1},g=n(22),x={gamesList:[],randomImagesList:{},page:1,totalPages:1,status:"LOADING"},h=n(34),j={platformField:"all",categoryField:"all",orderField:"all"},v=n(35),O={gameDetails:{},similarGames:[],status:"NOT_ASKED"},y=Object(c.combineReducers)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case f.b:return Object(m.a)(Object(m.a)({},e),{},{failureSnackbarOpen:!0});case f.a:return Object(m.a)(Object(m.a)({},e),{},{failureSnackbarOpen:!1});default:return e}},imagesSearchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case g.a:return Object(m.a)(Object(m.a)({},e),{},{gamesList:r});case g.c:return Object(m.a)(Object(m.a)({},e),{},{randomImagesList:r,status:"SUCCESS"});case g.b:return Object(m.a)(Object(m.a)({},e),{},{page:r});case g.f:return Object(m.a)(Object(m.a)({},e),{},{totalPages:r});case g.e:return Object(m.a)(Object(m.a)({},e),{},{status:"LOADING"});case g.d:return Object(m.a)(Object(m.a)({},e),{},{status:"FAILURE"});default:return Object(m.a)({},e)}},sortPanelReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case h.SET_PLATFORM_VALUE:return Object(m.a)(Object(m.a)({},e),{},{platformField:r});case h.SET_CATEGORY_VALUE:return Object(m.a)(Object(m.a)({},e),{},{categoryField:r});case h.SET_ORDER_VALUE:return Object(m.a)(Object(m.a)({},e),{},{orderField:r});case h.RESET_FIELDS:return j;default:return Object(m.a)({},e)}},gamePageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case v.c:return Object(m.a)(Object(m.a)({},e),{},{gameDetails:r,status:"SUCCESS"});case v.e:return Object(m.a)(Object(m.a)({},e),{},{status:"PENDING"});case v.d:return Object(m.a)(Object(m.a)({},e),{},{status:"FAILURE"});case v.b:return Object(m.a)(Object(m.a)({},e),{},{similarGames:r});case v.a:return Object(m.a)({},O);default:return Object(m.a)({},e)}}}),S={key:"root",storage:u.a},w=Object(s.a)(S,y),R=Object(c.createStore)(w,Object(l.composeWithDevTools)(Object(c.applyMiddleware)(p.a))),C=Object(s.b)(R),I=n(36),E=n(16),A=n(50),k=n(215),_=n(212),N=n(2);function T(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.appReducer})).failureSnackbarOpen;function n(){e(Object(f.c)())}return Object(N.jsx)(k.a,{open:t,autoHideDuration:4e3,onClose:n,children:Object(N.jsx)(_.a,{variant:"filled",severity:"error",onClose:n,children:"There are no results found according to the search parameters!"})})}var P=n(74);n(159);var F=function(){return Object(N.jsx)(i.a,{store:R,children:Object(N.jsxs)(o.a,{loading:null,persistor:C,children:[Object(N.jsx)(T,{}),Object(N.jsx)(I.a,{children:Object(N.jsxs)(E.c,{children:[A.c.map((function(e){var t=n(160)("./".concat(e.page)).default;return Object(N.jsx)(E.a,{exact:e.exact,path:e.link,children:Object(N.jsx)(t,{})},e.link)})),Object(N.jsx)(E.a,{component:P.default})]})})]})})};n(168);a.a.render(Object(N.jsx)(F,{}),document.getElementById("root"))},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return S}));var r=n(82),a=n(78),i=n(7),o=n(23),c=n.n(o),s=n(41),l=n(111),d=n(40),u=n(62),p=n(46),m="SET_IMAGES",f="SET_RANDOM_IMAGES",b="SET_PAGE",g="SET_TOTAL_PAGES",x="SET_SLIDE_DATA_LOADING",h="SET_SLIDE_DATA_FAILURE",j=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r,a,i,o,s,l,m,f,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(),a=r.sortPanelReducer,i=a.platformField,o=a.categoryField,s=a.orderField,e.prev=1,e.next=4,Object(d.b)({platformField:i,categoryField:o,orderField:s});case 4:l=e.sent,m=l.data,f=m.length,b=Math.ceil(f/u.a),t(v(m)),t(O(m)),t(w(b)),t(S(1)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t(Object(p.d)("Failure!"));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){var o,u,p,m,f,b,g,x;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o={},u=function(){var t=Object(s.a)(c.a.mark((function t(){var n,r,s,l,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Math.floor(Math.random()*e.length-1),s=null===(n=e[r])||void 0===n?void 0:n.id,t.prev=2,t.next=5,Object(d.d)(s);case 5:return l=t.sent,u=l.data,t.abrupt("return",o=Object(i.a)(Object(i.a)({},o),{},Object(a.a)({},null===u||void 0===u?void 0:u.id,u)));case 10:t.prev=10,t.t0=t.catch(2);case 12:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}(),p=Object(r.a)(Array(4).keys()).map(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u());case 1:case"end":return e.stop()}}),e)})))),m=!1,f=!1,t.prev=5,g=Object(l.a)(p);case 7:return t.next=9,g.next();case 9:if(!(m=!(x=t.sent).done)){t.next=14;break}x.value;case 11:m=!1,t.next=7;break;case 14:t.next=20;break;case 16:t.prev=16,t.t0=t.catch(5),f=!0,b=t.t0;case 20:if(t.prev=20,t.prev=21,!m||null==g.return){t.next=25;break}return t.next=25,g.return();case 25:if(t.prev=25,!f){t.next=28;break}throw b;case 28:return t.finish(25);case 29:return t.finish(20);case 30:n(y(o));case 31:case"end":return t.stop()}}),t,null,[[5,16,20,30],[21,,25,29]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return{type:"SET_IMAGES",payload:e}},y=function(e){return{type:"SET_RANDOM_IMAGES",payload:e}},S=function(e){return{type:"SET_PAGE",payload:e}},w=function(e){return{type:"SET_TOTAL_PAGES",payload:e}}},34:function(e,t,n){"use strict";n.r(t),n.d(t,"SET_PLATFORM_VALUE",(function(){return r})),n.d(t,"SET_CATEGORY_VALUE",(function(){return a})),n.d(t,"SET_ORDER_VALUE",(function(){return i})),n.d(t,"RESET_FIELDS",(function(){return o})),n.d(t,"setPlatformField",(function(){return c})),n.d(t,"setCategoryField",(function(){return s})),n.d(t,"setOrderField",(function(){return l})),n.d(t,"resetFields",(function(){return d}));var r="SET_PLATFORM_VALUE",a="SET_CATEGORY_VALUE",i="SET_ORDER_VALUE",o="RESET_FIELDS";function c(e){return{type:r,payload:e}}function s(e){return{type:a,payload:e}}function l(e){return{type:i,payload:e}}function d(){return{type:o}}},35:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return h}));var r=n(23),a=n.n(r),i=n(41),o=n(40),c="SET_SPECIFIC_DATA",s="SET_SPECIFIC_DATA_PENDING",l="SET_SPECIFIC_DATA_FAILURE",d="SET_SIMILAR_GAMES",u="CLEAR_GAME_PAGE_STATE",p=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(b()),t.prev=1,t.next=4,Object(o.d)(e);case 4:r=t.sent,i=r.data,n(f(i)),n(m()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n(g());case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,i,c,s,l,d,u,p,m,f,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(),i=r.gamePageReducer.gameDetails,e.prev=1,l=(null===i||void 0===i||null===(c=i.title)||void 0===c?void 0:c.length)?null===i||void 0===i?void 0:i.title:"",e.next=5,Object(o.c)(l);case 5:return d=e.sent,u=d.data.results,p=null===(s=u[0])||void 0===s?void 0:s.guid,e.next=10,Object(o.a)(p);case 10:m=e.sent,f=null===m||void 0===m?void 0:m.data.results,b=null===f||void 0===f?void 0:f.similar_games,t(x(b)),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(1);case 18:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t,n){return e.apply(this,arguments)}}()},f=function(e){return{type:"SET_SPECIFIC_DATA",payload:e}},b=function(){return{type:"SET_SPECIFIC_DATA_PENDING"}},g=function(){return{type:"SET_SPECIFIC_DATA_FAILURE"}},x=function(e){return{type:"SET_SIMILAR_GAMES",payload:e}},h=function(){return{type:"CLEAR_GAME_PAGE_STATE"}}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u}));var r=n(7),a=n(66),i=n.n(a),o=n(50),c="f5668327c6286caa4fa7af9f543f498652873f59";function s(e){var t=e.platformField,n=e.categoryField,a=e.orderField;return i.a.get("".concat(o.b,"/games"),{params:Object(r.a)(Object(r.a)({platform:t},"all"!==n&&{category:n}),"all"!==a&&{"sort-by":a})})}function l(e){return i.a.get("".concat(o.b,"/game"),{params:{id:Number(e)}})}function d(e){return i.a.get("".concat(o.a,"/search/"),{params:{api_key:c,format:"json",query:e,resources:"game"}})}function u(e){return i.a.get("".concat(o.a,"/game/").concat(e,"/?api_key=").concat(c,"&format=json"),{})}},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o}));var r="SHOW_SNACKBAR_FAILURE",a="CLEAR_SNACKBAR";function i(e){return{type:"SHOW_SNACKBAR_FAILURE",payload:e}}function o(){return{type:"CLEAR_SNACKBAR"}}},50:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=[{link:"/",page:"Home",exact:!0},{link:"/games/:id",page:"GamePage",exact:!0}],a="https://www.freetogame.com/api",i="https://www.giantbomb.com/api"},57:function(e,t,n){"use strict";var r=n(0),a=n(16),i=n(36),o=n(207),c=n(204),s=n(208),l=n(117),d=n.n(l),u=n(2),p=Object(o.a)((function(){return{rootPaper:{minHeight:"76px",padding:"0 24px","&.MuiPaper-elevation1":{boxShadow:"none"}},paperContent:{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:"1440px",height:"76px",margin:"0 auto","& > a:visited":{color:"#3f444e"}},logo:{textTransform:"uppercase",fontWeight:800,cursor:"pointer"},noBereak:{display:"inline-block"},buttonRoot:{width:"130px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",textDecoration:"none",boxShadow:"none","&:hover":{color:"#8b0000",textDecoration:"none"}},playIcon:{verticalAlign:"bottom"},flexContainer:{justifyContent:"space-around",width:"350px",maxWidth:"350px"},indicator:{backgroundColor:"transparent"},rootTab:{minWidth:"unset",color:"#9d9fa5","&:hover":{color:"#575b67"},"&.Mui-selected":{color:"#575b67"}},user:{display:"flex",alignItems:"center",fontSize:"15px",textTransform:"capitalize",fontWeight:800},userImage:{position:"relative",margin:"0 11px"},penIcon:{marginLeft:"15px"},badge:{top:"12%",right:"25%",background:"#8b0000",border:"1px solid #ffffff"},tooltip:{fontSize:"13px",color:"#ffffff",textTransform:"uppercase",backgroundColor:"#8b0000",height:"23px",lineHeight:1.7,"-webkitBoxShadow":"0px 0px 0px 2px #8b0000","-mozBoxShadow":"0px 0px 0px 2px #8b0000",boxShadow:"0px 0px 0px 2px #8b0000"},arrow:{"&::before":{backgroundColor:"#8b0000"}}}}));var m=function(){var e=Object(a.g)(),t=p();return Object(u.jsx)(c.a,{square:!0,classes:{root:t.rootPaper},children:Object(u.jsxs)("div",{className:t.paperContent,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsxs)("div",{className:t.logo,children:["FTP Game ",Object(u.jsxs)("span",{className:t.noBereak,children:["St",Object(u.jsx)(d.a,{classes:{root:t.playIcon}}),"re"]})]})}),"/"!==e.pathname&&Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)(s.a,{variant:"contained",classes:{root:t.buttonRoot},children:"Back home"})})]})})};t.a=function(e){var t=e.children,n=Object(a.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),t]})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=23},72:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n(0),i=n.n(a),o=n(120),c=n.n(o),s=n(207),l=n(57),d=n(7),u=n(11),p=n(216),m=n(208),f=n(118),b=n.n(f),g=n(119),x=n.n(g),h=n(89),j=n(84),v=n(2),O=Object(s.a)((function(){return{slider:{position:"relative",width:"100%",height:"425px",minHeight:"425px","& .carousel-root .carousel .control-dots":{top:"145px",width:"auto",display:"flex",flexDirection:"column"}},sliderItem:{maxHeight:"425px"},contentWrapper:{maxWidth:"1440px",margin:"0 auto"},indicatorWrap:{display:"flex",alignItems:"center"},title:{color:"#ffffff",width:"100%",background:"rgba(0,0,0,.5)",borderRadius:"4px",boxShadow:"7px 6px 7px rgba(0,0,0,.5)",whiteSpace:"nowrap",padding:"5px",marginLeft:"7px"},playNow:{position:"absolute",top:"145px",right:"12px",display:"flex",flexDirection:"column",alignItems:"center",width:"310px",zIndex:"1000","& > a:hover":{textDecoration:"none"}},gameLogo:{width:"300px",height:"100px",display:"inline-block"},buttonRoot:{width:"118px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",textDecoration:"none",boxShadow:"none","&:hover":{color:"#8b0000",textDecoration:"none"}},sliderBar:{position:"absolute",bottom:0,display:"flex",justifyContent:"center",width:"100%",minHeight:"49px",height:"49px",textTransform:"uppercase",fontSize:".75em",color:"#ffffff",background:"rgba(0, 0, 0, .7)",overflow:"hidden",padding:"0 24px",boxSizing:"border-box",zIndex:100},sliderBarContent:{display:"flex",justifyContent:"space-between",width:"1440px"},publicationInfo:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:.7},published:{marginRight:"10px"},releaseDate:{fontWeight:900,textShadow:"1px 1px 1px #000000",color:"#8b0000",marginTop:"0"},platformStatusInfoWrap:{display:"flex"},platformStatusInfo:{display:"flex",alignItems:"center",marginLeft:"25px"},svgRoot:{fill:"#8b0000",marginRight:"10px"},"@media(max-width: 768px)":{slider:{height:"240px","& .carousel-root .carousel .control-dots":{top:"45px"}},sliderItem:{maxHeight:"240px"},title:{fontSize:".7em"},playNow:{top:"40px",width:"200px"},gameLogo:{width:"200px",height:"75px"},sliderBar:{fontSize:".6em"},releaseDate:{display:"inline-block",marginTop:"5px"},platformStatusInfo:{lineHeight:"1",marginLeft:"10px"},svgRoot:{width:"0.75em",height:"0.75em",marginRight:"5px"}},"@media(max-width: 426px)":{slider:{height:"170px",marginBottom:"45px","& .carousel-root .carousel .control-dots":{top:"0",marginTop:"10px"}},sliderItem:{maxHeight:"170px"},playNow:{top:"unset",bottom:"10px",left:"24px",width:"118px",marginTop:"5px",marginBottom:"5px"},gameLogo:{display:"none"},sliderBar:{bottom:"-45px",background:"#000000"},sliderBarContent:{flexDirection:"column",justifyContent:"space-evenly"},platformStatusInfo:{marginLeft:0,marginRight:"10px"},svgRoot:{width:"0.65em",height:"0.65em"}}}}));var y=function(){var e=O(),t=Object(u.c)((function(e){return e.imagesSearchReducer})),n=t.randomImagesList,a=t.status,o=Object.values(n),c=i.a.useState(null),s=Object(r.a)(c,2),l=s[0],f=s[1],g={background:"rgba(0,0,0,.5)",width:"10px",height:"10px",borderRadius:"50%",outline:"2px solid #8b0000",padding:"5px",margin:"7px 7px 7px 24px",cursor:"pointer"};return Object(v.jsxs)("div",{className:e.slider,children:["LOADING"===a&&Object(v.jsx)(j.a,{}),"SUCCESS"===a&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:5e3,showStatus:!1,showArrows:!1,showThumbs:!1,animationHandler:"fade",swipeable:!1,renderIndicator:function(t,n,r,a){var i=o[r];return n?(queueMicrotask((function(){return f(i)})),Object(v.jsxs)("div",{className:e.indicatorWrap,children:[Object(v.jsx)("li",{style:Object(d.a)(Object(d.a)({},g),{},{background:"#fff"}),"aria-label":"Selected: ".concat(a," ").concat(r+1)}),Object(v.jsx)("span",{className:e.title,children:i.title})]})):Object(v.jsx)("li",{style:g,onClick:t,onKeyDown:t,value:r,role:"button",tabIndex:0,"aria-label":"".concat(a," ").concat(r+1)},r)},children:o.map((function(t){var n;return Object(v.jsx)("div",{className:e.sliderItem,children:Object(v.jsx)("img",{src:null===(n=t.screenshots[0])||void 0===n?void 0:n.image,alt:"",height:"100%",width:"100%"})},t.id)}))}),Object(v.jsx)("div",{className:e.contentWrapper,children:Object(v.jsxs)("div",{className:e.playNow,children:[Object(v.jsx)("img",{src:"".concat("/FTP-Game-Store","/images/be_a_hero.png"),alt:"",className:e.gameLogo}),Object(v.jsx)(p.a,{href:null===l||void 0===l?void 0:l.game_url,target:"_blank",children:Object(v.jsx)(m.a,{variant:"contained",classes:{root:e.buttonRoot},children:"Play now"})})]})}),Object(v.jsx)("div",{className:e.sliderBar,children:Object(v.jsxs)("div",{className:e.sliderBarContent,children:[Object(v.jsx)("div",{className:e.publicationInfo,children:Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:e.published,children:"Published"}),Object(v.jsx)("span",{className:e.releaseDate,children:null===l||void 0===l?void 0:l.release_date})]})}),Object(v.jsxs)("div",{className:e.platformStatusInfoWrap,children:[(null===l||void 0===l?void 0:l.platform)&&Object(v.jsxs)("div",{title:"Platform",className:e.platformStatusInfo,children:[Object(v.jsx)(b.a,{classes:{root:e.svgRoot}}),Object(v.jsx)("p",{children:null===l||void 0===l?void 0:l.platform})]}),(null===l||void 0===l?void 0:l.status)&&Object(v.jsxs)("div",{title:"Status",className:e.platformStatusInfo,children:[Object(v.jsx)(x.a,{classes:{root:e.svgRoot}}),Object(v.jsx)("p",{children:null===l||void 0===l?void 0:l.status})]})]})]})})]})]})},S=n(16),w=n(204),R=n(22),C=n(62),I=n(213),E=Object(s.a)({rootUl:{justifyContent:"center",padding:"0 24px",margin:"25px 0","& .MuiPaginationItem-root":{fontFamily:"Prompt"}},"@media(max-width: 576px)":{rootUl:{margin:"30px 40px","& .MuiPaginationItem-icon":{fontSize:"1rem"},"& .MuiPaginationItem-root":{height:"25px",minWidth:"25px",fontSize:"0.75rem"}}}});var A=function(){var e=E(),t=Object(u.b)(),n=Object(u.c)((function(e){return e.imagesSearchReducer})),r=n.page,a=n.totalPages;return Object(v.jsx)("div",{children:Object(v.jsx)(I.a,{onChange:function(e,n){t(Object(R.h)(n))},page:r,count:a,classes:{ul:e.rootUl}})})},k=Object(s.a)((function(){return{gridContainer:{display:"grid",gap:"10px",gridTemplateColumns:"[startline] minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) [midline] minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) [endline]",gridAutoRows:"120px",gridAutoFlow:"dense",background:"linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(139, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",padding:"10px 24px","&>div:nth-of-type(1)":{gridColumn:"startline / 3"},"&>div:nth-of-type(4)":{gridColumn:"5 / endline",gridRow:"1 / 3"},"&>div:nth-of-type(7)":{gridColumn:"3 / 5"},"&>div:nth-of-type(10)":{gridColumn:"3 / 5"},"&>div:nth-of-type(13)":{gridColumn:"startline / 3",gridRow:"4 / 6"},"&>div:nth-of-type(14)":{gridColumn:"5 / endline"},"&>div:nth-of-type(19)":{gridColumn:"5 / endline"},"&>div:nth-of-type(22)":{gridColumn:"midline / endline"}},gridItem:{position:"relative","&:hover":{backgroundSize:"115% !important",transition:"all 0.5s",cursor:"pointer","& $gameName":{display:"block"}}},gameName:{display:"none",position:"absolute",content:"",width:"100%",height:"auto",top:0,textTransform:"uppercase",textAlign:"center",lineHeight:1,color:"#ffffff",background:"rgba(0, 0, 0, .5)",borderTopLeftRadius:"4px",borderTopRightRadius:"4px",padding:"4px 0",zIndex:100},"@media(max-width: 1440px)":{gridContainer:{gridTemplateColumns:"[startline] minmax(130px, 1fr) minmax(130px, 1fr) [midline] minmax(130px, 1fr) minmax(130px, 1fr) [endline]","&>div:nth-of-type(4)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(6)":{gridColumn:"midline / endline"},"&>div:nth-of-type(7)":{gridColumn:"auto"},"&>div:nth-of-type(9)":{gridColumn:"midline / endline"},"&>div:nth-of-type(10)":{gridColumn:"startline / 3",gridRow:"4 / 6"},"&>div:nth-of-type(13)":{gridColumn:"midline / endline",gridRow:"auto"},"&>div:nth-of-type(14)":{gridColumn:"auto"},"&>div:nth-of-type(16)":{gridColumn:"midline / endline"},"&>div:nth-of-type(19)":{gridColumn:"auto"},"&>div:nth-of-type(21)":{gridColumn:"startline / midline"},"&>div:nth-of-type(20)":{gridColumn:"auto"},"&>div:nth-of-type(22)":{gridColumn:"auto"}}},"@media(max-width: 1024px)":{gridContainer:{gridTemplateColumns:"[startline] minmax(110px, 1fr) minmax(110px, 1fr) [midline] minmax(110px, 1fr) minmax(110px, 1fr) [endline]",gridAutoRows:"90px"}},"@media(max-width: 768px)":{gridContainer:{gridTemplateColumns:"[startline] 1fr 1fr 1fr [endline]",gridAutoRows:"60px","&>div:nth-of-type(6)":{gridColumn:"startline / 3",gridRow:"3 / 5"},"&>div:nth-of-type(9)":{gridColumn:"auto"},"&>div:nth-of-type(10)":{gridColumn:"2 / endline",gridRow:"5 / 7"},"&>div:nth-of-type(13)":{gridColumn:"auto"},"&>div:nth-of-type(16)":{gridColumn:"auto"},"&>div:nth-of-type(18)":{gridColumn:"startline / endline",gridRow:"9 / 10"},"&>div:nth-of-type(21)":{gridColumn:"auto"},"&>div:nth-of-type(23)":{gridColumn:"2 / endline"}},"@media(max-width: 425px)":{gridContainer:{gridTemplateColumns:"1fr",gridAutoRows:"150px","&>div:nth-of-type(1)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(6)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(10)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(18)":{gridColumn:"auto",gridRow:"auto"},"&>div:nth-of-type(23)":{gridColumn:"auto"}}}}}}));var _=function(){var e=k(),t=Object(S.f)(),n=Object(u.b)(),r=Object(u.c)((function(e){return e.imagesSearchReducer})),i=r.gamesList,o=r.page,c=1===o?0:(o-1)*C.a,s=i.slice(c,c+C.a);return Object(a.useEffect)((function(){n(Object(R.g)())}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:e.gridContainer,children:s.map((function(n){var r=n.id,a=n.thumbnail,i=n.title;return Object(v.jsx)(w.a,{onClick:function(){return function(e){t.push("/games/".concat(e))}(r)},style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"101%",backgroundRepeat:"no-repeat",backgroundPosition:"center"},className:e.gridItem,children:Object(v.jsx)("div",{className:e.gameName,children:i})},r)}))}),Object(v.jsx)(A,{})]})},N=[{id:"platformField",formLabel:"Platform",options:[{value:"all"},{value:"pc"},{value:"browser"}]},{id:"categoryField",formLabel:"Category",options:[{value:"all"},{value:"mmo"},{value:"mmorpg"},{value:"shooter"},{value:"strategy"},{value:"moba"},{value:"racing"},{value:"social"}]},{id:"orderField",formLabel:"Order",options:[{value:"all"},{value:"release-date"},{value:"popularity"},{value:"alphabetical"},{value:"relevance"}]}],T=n(210),P=n(218),F=n(211),L=n(219),D=n(34),G=function(){return{searchOptions:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",maxWidth:"1440px",padding:"38px 24px 30px",margin:"0 auto","& .MuiInputBase-root":{fontFamily:"Prompt"}},form:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",width:"70%",marginBottom:"20px"},formControl:{minWidth:"200px",marginRight:"70px","& .MuiFormLabel-root":{fontFamily:"Prompt"},"& .MuiFormLabel-root.Mui-focused":{color:"#8b0000"},"& .MuiInput-underline:after":{borderColor:"#8b0000"}},rootMenuItem:{fontFamily:"Prompt"},buttons:{display:"flex",justifyContent:"flex-end",width:"30%"},buttonRoot:{minWidth:"118px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",boxShadow:"none",marginLeft:"30px","&:hover":{color:"#8b0000",backgroundColor:"#ffffff"}},"@media(max-width: 576px)":{form:{width:"100%","& .MuiInputBase-root":{fontSize:"0.85rem"}},formControl:{marginBottom:"10px"},buttons:{width:"100%",justifyContent:"flex-start"},buttonRoot:{marginLeft:0,marginRight:"30px"}}}},U=Object(s.a)(G);var M=function(e){var t=e.id,n=e.formLabel,r=e.options,a=U(),i=Object(u.b)(),o=Object(u.c)((function(e){return e.sortPanelReducer[t]}));return Object(v.jsxs)(T.a,{className:a.formControl,children:[Object(v.jsx)(P.a,{id:t,children:n}),Object(v.jsx)(F.a,{labelId:n,id:n,value:o,onChange:function(e){var n=t.charAt(0).toUpperCase()+t.slice(1),r=D["set".concat(n)];i(r(e.target.value))},children:r.map((function(e){var t=e.value;return Object(v.jsx)(L.a,{value:t,classes:{root:a.rootMenuItem},children:t.toUpperCase()},t)}))})]})};var W=Object(s.a)(G);var z=function(){var e=W(),t=Object(u.b)(),n=Object(u.c)((function(e){return e.sortPanelReducer})),r=n.platformField,a=n.categoryField,i=n.orderField,o="all"===r&&"all"===a&&"all"===i,c=function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;return function(){if(!t){for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];e.apply(n,i)}clearTimeout(t),t=setTimeout((function(){t=void 0}),r)}}((function(){return t(Object(R.g)())}));return Object(v.jsx)(w.a,{elevation:0,square:!0,children:Object(v.jsxs)("div",{className:e.searchOptions,children:[Object(v.jsx)("h2",{children:"Featured games"}),Object(v.jsx)("form",{noValidate:!0,autoComplete:"off",className:e.form,children:N.map((function(e){return Object(v.jsx)(M,Object(d.a)({},e),e.id)}))}),Object(v.jsxs)("div",{className:e.buttons,children:[Object(v.jsx)(m.a,{variant:"contained",classes:{root:e.buttonRoot},onClick:c,children:"Sort"}),Object(v.jsx)(m.a,{variant:"contained",disabled:o,classes:{root:e.buttonRoot},onClick:function(){t(Object(D.resetFields)()),t(Object(R.g)())},children:"reset"})]})]})})},H=n(77),B=Object(s.a)(H.styles);t.default=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],o=B();return Object(a.useEffect)((function(){var e=function(){return i(window.scrollY>50)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(y,{}),Object(v.jsx)(z,{}),Object(v.jsx)(_,{}),Object(v.jsx)("div",{className:"".concat(o.buttonUp," ").concat(n?o.toShow:""),onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:Object(v.jsx)(c.a,{})})]})}},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(16),o=n(11),c=n(207),s=n(57),l=n(84),d=n(83),u=n(216),p=n(208),m=n(82),f=n(49),b=(n(89),n(2)),g=Object(c.a)((function(){return{thumbnailSlider:{"& .thumbs-wrapper":{marginBottom:0},"& .carousel .thumb":{padding:0,border:"none",borderRadius:"4px",marginTop:"1px"},"& .carousel .thumb:nth-child(1)":{marginLeft:"1px"},"& .carousel .thumbs .selected":{boxSizing:"border-box",outline:"1px solid #ffffff"},"& .carousel .thumbs img":{maxHeight:"45px"}},resizedImage:{backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minHeight:"500px"},"@media (min-width: 2560px)":{resizedImage:{minHeight:"750px"}},"@media (max-width: 768px)":{thumbnailSlider:{"& .thumbs-wrapper":{marginBottom:"30px"}},resizedImage:{minHeight:"300px",height:"auto"}},"@media (max-width: 426px)":{resizedImage:{minHeight:"200px"}}}}));var x=function(){var e=g(),t=Object(o.c)((function(e){return e.gamePageReducer})).gameDetails,n=a.a.useState([]),i=Object(f.a)(n,2),c=i[0],s=i[1],l=a.a.useState(null),d=Object(f.a)(l,2),u=(d[0],d[1]);return Object(r.useEffect)((function(){if(Object.keys(t).length){var e,n={id:"defaultImageId",image:null===t||void 0===t?void 0:t.thumbnail};u(n.image),(null===t||void 0===t||null===(e=t.screenshots)||void 0===e?void 0:e.length)&&s([n].concat(Object(m.a)(null===t||void 0===t?void 0:t.screenshots)))}}),[t]),Object(b.jsx)("div",{className:e.thumbnailSlider,children:0!==(null===c||void 0===c?void 0:c.length)?Object(b.jsx)(b.Fragment,{children:"hhh"}):Object(b.jsx)("div",{className:e.resizedImage,style:{backgroundImage:"url(".concat(null===t||void 0===t?void 0:t.thumbnail,")")}})})},h=Object(c.a)((function(){return{glanceInfoWrap:{display:"flex",justifyContent:"space-between",color:"#ffffff",background:"linear-gradient(45deg, #000000, #800000)",padding:"40px 24px"},screenshots:{minWidth:"60%",marginRight:"3%"},glance:{minWidth:"37%",background:"rgba(0.5, 0.5, 0.5, .4)",boxSizing:"border-box","&>a:hover":{textDecoration:"none"}},glanceInfo:{padding:"20px 15px",textAlign:"left","&>div":{lineHeight:1.2,marginBottom:"5px"},"& h4":{marginRight:"5px"}},info:{fontFamily:"Prompt",fontSize:"0.75em"},shortDescription:{textAlign:"left"},linkDecoration:{"&:hover":{textDecoration:"none"}},buttonRoot:{width:"180px",height:"38px",fontFamily:"'Iceland', cursive",color:"#ffffff",backgroundColor:"#8b0000",boxShadow:"none",marginTop:"15px","&:hover":{color:"#8b0000",textDecoration:"none"}},"@media (max-width: 768px)":{glanceInfoWrap:{flexDirection:"column"},screenshots:{minWidth:"100%",marginRight:0},glance:{minWidth:"100%"},glanceInfo:{"&>div":{lineHeight:1,marginBottom:"5px"}},info:{fontSize:"0.6em"}}}}));var j=function(){var e=h(),t=Object(o.c)((function(e){return e.gamePageReducer})).gameDetails;return Object(b.jsxs)("div",{className:e.glanceInfoWrap,children:[Object(b.jsx)("div",{className:e.screenshots,children:Object(b.jsx)(x,{})}),Object(b.jsx)("div",{className:e.glance,children:Object(b.jsxs)("div",{className:e.glanceInfo,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Short description: "}),Object(b.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.short_description})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Genre: "}),Object(b.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.genre})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Status: "}),Object(b.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.status})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Release date: "}),Object(b.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.release_date})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Developer: "}),Object(b.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.developer})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Publisher: "}),Object(b.jsx)("span",{className:e.info,children:null===t||void 0===t?void 0:t.publisher})]}),Object(b.jsx)(u.a,{href:null===t||void 0===t?void 0:t.game_url,target:"_blank",className:e.linkDecoration,children:Object(b.jsx)(p.a,{variant:"contained",classes:{root:e.buttonRoot},children:"Play now"})})]})})]})},v=Object(c.a)((function(){return{parallax:{backgroundImage:"url(".concat("/FTP-Game-Store","/images/parallax_bg.jpg)"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},description:{maxWidth:"1440px",fontWeight:800,textShadow:"2px 0 2px white",lineHeight:1.3,padding:"40px 24px",margin:"0 auto"},"@media(max-width: 768px)":{descriptionText:{fontSize:"0.75em"}}}}));var O=function(){var e=v(),t=Object(o.c)((function(e){return e.gamePageReducer})).gameDetails;return Object(b.jsxs)("div",{className:"".concat(e.description," ").concat(e.parallax),children:[Object(b.jsx)("h2",{children:null===t||void 0===t?void 0:t.title}),Object(b.jsx)("p",{className:e.descriptionText,children:null===t||void 0===t?void 0:t.description})]})},y=Object(c.a)((function(){return{requirements:{display:"flex",height:"auto",background:"linear-gradient(45deg, #000000, #800000)",padding:"40px 24px"},systemRequirementsWrap:{width:"100%",color:"#ffffff",background:"rgba(0.5, 0.5, 0.5, .4)",padding:"20px 15px",boxSizing:"border-box","&>h2":{color:"#ffffff",marginRight:"5px"}},systemRequirements:{display:"flex",justifyContent:"space-between"},systemRequirementsInfo:{textAlign:"left",width:"60%",marginRight:"3%","&>div":{lineHeight:1.2,marginBottom:"5px"},"& h4":{marginRight:"5px"},"& span":{fontFamily:"Prompt",fontSize:"0.75em"}},systemRequirementsImage:{width:"37%",height:"230px",background:"url(".concat("/FTP-Game-Store","/images/system_requirements.png)"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},"@media(max-width: 768px)":{systemRequirementsInfo:{width:"100%",marginRight:0,marginBottom:"20px","&>div":{lineHeight:1},"& span":{fontSize:"0.6em"}},systemRequirementsImage:{display:"none"}}}}));var S=function(){var e,t=y(),n=Object(o.c)((function(e){var t;return(null===(t=e.gamePageReducer.gameDetails)||void 0===t?void 0:t.minimum_system_requirements)||{}}));return Object(b.jsx)("div",{className:t.requirements,children:Object(b.jsxs)("div",{className:t.systemRequirementsWrap,children:[Object(b.jsx)("h2",{children:"Minimum system requirements"}),Object(b.jsxs)("div",{className:t.systemRequirements,children:[0!==(null===(e=Object.keys(n))||void 0===e?void 0:e.length)?Object(b.jsxs)("div",{className:t.systemRequirementsInfo,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Os: "}),Object(b.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.os)||null===(null===n||void 0===n?void 0:n.os)||"Not defined"===(null===n||void 0===n?void 0:n.os)?"Unavailable":null===n||void 0===n?void 0:n.os})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Processor: "}),Object(b.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.processor)||null===(null===n||void 0===n?void 0:n.processor)||"Not defined"===(null===n||void 0===n?void 0:n.processor)?"Unavailable":null===n||void 0===n?void 0:n.processor})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Memory: "}),Object(b.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.memory)||null===(null===n||void 0===n?void 0:n.memory)||"Not defined"===(null===n||void 0===n?void 0:n.memory)?"Unavailable":(null===n||void 0===n?void 0:n.memory)||"Unavailable"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Graphics: "}),Object(b.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.graphics)||null===(null===n||void 0===n?void 0:n.graphics)||"Not defined"===(null===n||void 0===n?void 0:n.graphics)?"Unavailable":(null===n||void 0===n?void 0:n.graphics)||"Unavailable"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Storage: "}),Object(b.jsx)("span",{children:"?"===(null===n||void 0===n?void 0:n.storage)||null===(null===n||void 0===n?void 0:n.storage)||"Not defined"===(null===n||void 0===n?void 0:n.storage)?"Unavailable":null===n||void 0===n?void 0:n.storage})]})]}):Object(b.jsx)("p",{children:"System requirements are unavailable"}),Object(b.jsx)("div",{className:t.systemRequirementsImage})]})]})})},w=n(217),R=Object(c.a)((function(){return{similarGames:{maxWidth:"1440px",lineHeight:1.5,padding:"40px 24px",margin:"0 auto"},chipRoot:{fontFamily:"Prompt",lineHeight:"24px",color:" #3f444e",marginRight:"10px",marginBottom:"10px"}}}));var C=function(){var e=R(),t=Object(o.c)((function(e){return e.gamePageReducer})).similarGames;return Object(b.jsxs)("div",{className:e.similarGames,children:[Object(b.jsx)("h2",{children:"Similar games"}),t?null===t||void 0===t?void 0:t.map((function(t){var n=t.id,r=t.name;return Object(b.jsx)(w.a,{label:r,classes:{root:e.chipRoot}},n)})):"No games in the list"]})},I=n(35),E=n(76),A=Object(c.a)(E.styles);t.default=function(){var e=A(),t=Object(o.b)(),n=Object(i.h)().id,a=Object(o.c)((function(e){return e.gamePageReducer})),c=a.status;return a.gameDetails,Object(r.useEffect)((function(){return t(Object(I.g)(n)),function(){t(Object(I.f)())}}),[]),Object(b.jsxs)(s.a,{children:["PENDING"===c&&Object(b.jsx)(l.a,{}),"FAILURE"===c&&Object(b.jsx)(d.a,{}),"SUCCESS"===c&&Object(b.jsxs)("div",{className:e.gameInfo,children:[Object(b.jsx)(j,{}),Object(b.jsx)(O,{}),Object(b.jsx)(S,{}),Object(b.jsx)(C,{})]})]})}},74:function(e,t,n){"use strict";n.r(t);n(0);var r=n(57),a=n(83),i=n(2);t.default=function(){return Object(i.jsx)(r.a,{children:Object(i.jsx)(a.a,{})})}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return r}));var r=function(){return{gameInfo:{width:"100%",textAlign:"justify",margin:"0 auto"}}}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"styles",(function(){return r}));var r=function(){return{buttonUp:{position:"fixed",bottom:"24px",right:"24px",width:"36px",height:"36px",background:"rgba(0, 0, 0, .5)",borderRadius:"4px",cursor:"pointer",opacity:0,zIndex:1e3,transition:"all .5s","& svg":{position:"absolute",top:"5px",left:"6px",color:"#ffffff"}},toShow:{opacity:1}}}},83:function(e,t,n){"use strict";n(0);var r=n(207),a=n(2),i=Object(r.a)((function(){return{error:{backgroundImage:"url(".concat("/FTP-Game-Store","/images/page_not_found.png)"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"calc(100vh - 76px)"}}}));t.a=function(){var e=i();return Object(a.jsx)("div",{className:e.error})}},84:function(e,t,n){"use strict";n(0);var r=n(209),a=n(207),i=n(2),o=Object(a.a)((function(){return{loadingWrapper:{display:"flex",justifyContent:"center",height:"100%"},root:{alignSelf:"center"},colorPrimary:{color:"rgba(0, 0, 0, .5)"}}}));t.a=function(){var e=o();return Object(i.jsx)("div",{className:e.loadingWrapper,children:Object(i.jsx)(r.a,{className:"".concat(e.root," ").concat(e.colorPrimary)})})}}},[[169,1,2]]]);
//# sourceMappingURL=main.3c9863ac.chunk.js.map