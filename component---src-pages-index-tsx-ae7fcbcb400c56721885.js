(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{QeBL:function(e,t,n){"use strict";n.r(t);var r=n("wTIg"),o=n("q1tI"),i=n.n(o),c=n("7cJT"),a=n("qKvR"),s=Object(a.b)({height:"10vh"}),l=function(e){var t=e.id;return Object(a.c)("div",{css:s,id:t})},p=function(e){return Object(a.b)({fontSize:e+"rem",textAlign:"center"})},u=function(e){var t=e.children,n=e.size;return Object(a.c)("h1",{css:p(n)},t)},d=function(e){return Object(a.b)({fontSize:e+"rem",textAlign:"center"})},b=function(e){var t=e.children,n=e.size;return Object(a.c)("h2",{css:d(n)},t)},f=Object(a.b)({width:"120px",height:"120px"}),m=Object(a.b)({maxWidth:"120px"}),g=Object(a.b)({display:"block",maxWidth:"120px",textAlign:"center",fontSize:"2.0rem"}),h=function(e){var t=e.filename,n=e.children;return Object(a.c)(i.a.Fragment,null,Object(a.c)("div",{css:f},Object(a.c)(c.a,{filename:t,css:m})),Object(a.c)("span",{css:g},n))},y=n("iYmT"),v=n("bFe0"),j=Object(a.b)({background:"linear-gradient(blue, white 25% 75%, red 100%)",display:"flex",justifyContent:"center",alignItems:"center"}),O=function(){return Object(a.c)("div",{css:Object(y.a)([v.b,j])},Object(a.c)("div",null,Object(a.c)(u,{size:4.8},"Woods At Web"),Object(a.c)(b,{size:2.4},"Welcome my web site!")))},x=(n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok"),n("Ff2n")),w=n("wx14"),k=(n("17x9"),n("iuhU")),S=n("H2TA"),E=[0,1,2,3,4,5,6,7,8,9,10],C=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var A=o.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,i=e.alignItems,c=void 0===i?"stretch":i,a=e.classes,s=e.className,l=e.component,p=void 0===l?"div":l,u=e.container,d=void 0!==u&&u,b=e.direction,f=void 0===b?"row":b,m=e.item,g=void 0!==m&&m,h=e.justify,y=void 0===h?"flex-start":h,v=e.lg,j=void 0!==v&&v,O=e.md,S=void 0!==O&&O,E=e.sm,C=void 0!==E&&E,R=e.spacing,A=void 0===R?0:R,W=e.wrap,T=void 0===W?"wrap":W,F=e.xl,I=void 0!==F&&F,M=e.xs,z=void 0!==M&&M,B=e.zeroMinWidth,P=void 0!==B&&B,N=Object(x.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),K=Object(k.a)(a.root,s,d&&[a.container,0!==A&&a["spacing-xs-".concat(String(A))]],g&&a.item,P&&a.zeroMinWidth,"row"!==f&&a["direction-xs-".concat(String(f))],"wrap"!==T&&a["wrap-xs-".concat(String(T))],"stretch"!==c&&a["align-items-xs-".concat(String(c))],"stretch"!==r&&a["align-content-xs-".concat(String(r))],"flex-start"!==y&&a["justify-xs-".concat(String(y))],!1!==z&&a["grid-xs-".concat(String(z))],!1!==C&&a["grid-sm-".concat(String(C))],!1!==S&&a["grid-md-".concat(String(S))],!1!==j&&a["grid-lg-".concat(String(j))],!1!==I&&a["grid-xl-".concat(String(I))]);return o.createElement(p,Object(w.a)({className:K,ref:t},N))})),W=Object(S.a)((function(e){return Object(w.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return E.forEach((function(r){var o=e.spacing(r);0!==o&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(R(o,2)),width:"calc(100% + ".concat(R(o),")"),"& > $item":{padding:R(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};C.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(w.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(A),T=(n("E5k/"),n("Ggvi"),n("7ljp"));function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I={_frontmatter:{}};function M(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(T.b)("wrapper",F({},I,n,{components:t,mdxType:"MDXLayout"}),Object(T.b)("p",null,"1991年、香川県に生まれたWebエンジニア。またの名をうずらさん。"),Object(T.b)("p",null,"早稲田大学在学中にWeb制作を、卒業後金融系SIerでエンジニアとして上流工程から下流工程まで一連の開発を経験。2019年にフリーランスへ転身。フロントエンド技術を中心にWebアプリケーション・システムの開発を行っている。"),Object(T.b)("p",null,"サンフランシスコ・上海への海外留学経験から、むしろ日本の良さを再認識。Webエンジニアという仕事を通して日本をより良くするシステム開発に携わっていきたい。"),Object(T.b)("p",null,"趣味はJリーグ。FC東京の大ファン。一生青と赤。隣の頭文字Vのクラブとの試合じゃ「緑は大っ○い、東京！」と歌っていたこともあったのに、何の因果か緑のVue.jsをメインで扱っている。"),Object(T.b)("p",null,"プライベートでは1児の父。可愛くてしょうがない！尋常じゃない成長力と未来を備えた我が子に負けないように、昨日よりも1レベルアップできるように精進している。"))}M.isMDXComponent=!0;var z=Object(a.b)({margin:"0 10vw"}),B=Object(a.b)({textAlign:"center"}),P=Object(a.b)({fontSize:"1.8rem"}),N=function(){return Object(a.c)("div",{css:Object(y.a)([v.b,z])},Object(a.c)(u,{size:4.8},"About Me"),Object(a.c)(W,{container:!0,spacing:3},Object(a.c)(W,{item:!0,xs:12,sm:6},Object(a.c)(c.a,{filename:"icon.png"})),Object(a.c)(W,{item:!0,xs:12,sm:6},Object(a.c)("div",{css:B},Object(a.c)(b,{size:4},"妹尾 弦"),Object(a.c)(b,{size:3.2},"Gen Senoo")),Object(a.c)("div",{css:P},Object(a.c)(M,null)),Object(a.c)("div",{css:P},Object(a.c)("p",null,"Twitter:",Object(a.c)("a",{href:"https://twitter.com/gengineer18",target:"_blank",rel:"noreferrer"},"@gengineer18")),Object(a.c)("p",null,"Facebook:",Object(a.c)("a",{href:"https://www.facebook.com/gen.senoo",target:"_blank",rel:"noreferrer"},"妹尾 弦")),Object(a.c)("p",null,"GitHub:",Object(a.c)("a",{href:"https://github.com/gengineer18",target:"_blank",rel:"noreferrer"},"gengineer18"))))))},K=(n("pJf4"),n("sc67"),n("KQm4")),D=n("bv9d");var G=function(e){var t=function(t){var n=e(t);return t.css?Object(w.a)(Object(w.a)({},Object(D.a)(n,e(Object(w.a)({theme:t.theme},t.css)))),function(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}(t.css,[e.filterProps])):n};return t.propTypes={},t.filterProps=["css"].concat(Object(K.a)(e.filterProps)),t};var L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=function(e){return t.reduce((function(t,n){var r=n(e);return r?Object(D.a)(t,r):t}),{})};return r.propTypes={},r.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),r},H=(n("MIFh"),n("HQhv"),n("rePB")),J=n("LybE");function V(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var q=function(e){var t=e.prop,n=e.cssProperty,r=void 0===n?e.prop:n,o=e.themeKey,i=e.transform,c=function(e){if(null==e[t])return null;var n=e[t],c=V(e.theme,o)||{};return Object(J.a)(e,n,(function(e){var t;return"function"==typeof c?t=c(e):Array.isArray(c)?t=c[e]||e:(t=V(c,e)||e,i&&(t=i(t))),!1===r?t:Object(H.a)({},r,t)}))};return c.propTypes={},c.filterProps=[t],c};function _(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var U=L(q({prop:"border",themeKey:"borders",transform:_}),q({prop:"borderTop",themeKey:"borders",transform:_}),q({prop:"borderRight",themeKey:"borders",transform:_}),q({prop:"borderBottom",themeKey:"borders",transform:_}),q({prop:"borderLeft",themeKey:"borders",transform:_}),q({prop:"borderColor",themeKey:"palette"}),q({prop:"borderRadius",themeKey:"shape"})),X=L(q({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),q({prop:"display"}),q({prop:"overflow"}),q({prop:"textOverflow"}),q({prop:"visibility"}),q({prop:"whiteSpace"})),Q=L(q({prop:"flexBasis"}),q({prop:"flexDirection"}),q({prop:"flexWrap"}),q({prop:"justifyContent"}),q({prop:"alignItems"}),q({prop:"alignContent"}),q({prop:"order"}),q({prop:"flex"}),q({prop:"flexGrow"}),q({prop:"flexShrink"}),q({prop:"alignSelf"}),q({prop:"justifyItems"}),q({prop:"justifySelf"})),Z=L(q({prop:"gridGap"}),q({prop:"gridColumnGap"}),q({prop:"gridRowGap"}),q({prop:"gridColumn"}),q({prop:"gridRow"}),q({prop:"gridAutoFlow"}),q({prop:"gridAutoColumns"}),q({prop:"gridAutoRows"}),q({prop:"gridTemplateColumns"}),q({prop:"gridTemplateRows"}),q({prop:"gridTemplateAreas"}),q({prop:"gridArea"})),Y=L(q({prop:"position"}),q({prop:"zIndex",themeKey:"zIndex"}),q({prop:"top"}),q({prop:"right"}),q({prop:"bottom"}),q({prop:"left"})),$=L(q({prop:"color",themeKey:"palette"}),q({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),ee=q({prop:"boxShadow",themeKey:"shadows"});function te(e){return e<=1?"".concat(100*e,"%"):e}var ne=q({prop:"width",transform:te}),re=q({prop:"maxWidth",transform:te}),oe=q({prop:"minWidth",transform:te}),ie=q({prop:"height",transform:te}),ce=q({prop:"maxHeight",transform:te}),ae=q({prop:"minHeight",transform:te}),se=(q({prop:"size",cssProperty:"width",transform:te}),q({prop:"size",cssProperty:"height",transform:te}),L(ne,re,oe,ie,ce,ae,q({prop:"boxSizing"}))),le=n("+Hmc"),pe=L(q({prop:"fontFamily",themeKey:"typography"}),q({prop:"fontSize",themeKey:"typography"}),q({prop:"fontStyle",themeKey:"typography"}),q({prop:"fontWeight",themeKey:"typography"}),q({prop:"letterSpacing"}),q({prop:"lineHeight"}),q({prop:"textAlign"})),ue=n("/P46"),de=n("cNwE"),be=function(e){var t=Object(ue.a)(e);return function(e,n){return t(e,Object(w.a)({defaultTheme:de.a},n))}},fe=G(L(U,X,Q,Z,Y,$,ee,se,le.b,pe)),me=be("div")(fe,{name:"MuiBox"}),ge=n("NqtD"),he={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},ye=o.forwardRef((function(e,t){var n=e.align,r=void 0===n?"inherit":n,i=e.classes,c=e.className,a=e.color,s=void 0===a?"initial":a,l=e.component,p=e.display,u=void 0===p?"initial":p,d=e.gutterBottom,b=void 0!==d&&d,f=e.noWrap,m=void 0!==f&&f,g=e.paragraph,h=void 0!==g&&g,y=e.variant,v=void 0===y?"body1":y,j=e.variantMapping,O=void 0===j?he:j,S=Object(x.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=l||(h?"p":O[v]||he[v])||"span";return o.createElement(E,Object(w.a)({className:Object(k.a)(i.root,c,"inherit"!==v&&i[v],"initial"!==s&&i["color".concat(Object(ge.a)(s))],m&&i.noWrap,b&&i.gutterBottom,h&&i.paragraph,"inherit"!==r&&i["align".concat(Object(ge.a)(r))],"initial"!==u&&i["display".concat(Object(ge.a)(u))]),ref:t},S))})),ve=Object(S.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(ye),je=n("Z3vd"),Oe=n("i8i4"),xe=n("aXM8"),we=n("A+CX");function ke(e){return e&&e.ownerDocument||document}var Se=n("GIek"),Ee=n("bfFb");var Ce="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var Re=o.forwardRef((function(e,t){var n=e.children,r=e.container,i=e.disablePortal,c=void 0!==i&&i,a=e.onRendered,s=o.useState(null),l=s[0],p=s[1],u=Object(Ee.a)(o.isValidElement(n)?n.ref:null,t);return Ce((function(){c||p(function(e){return e="function"==typeof e?e():e,Oe.findDOMNode(e)}(r)||document.body)}),[r,c]),Ce((function(){if(l&&!c)return Object(Se.a)(t,l),function(){Object(Se.a)(t,null)}}),[t,l,c]),Ce((function(){a&&(l||c)&&a()}),[a,l,c]),c?o.isValidElement(n)?o.cloneElement(n,{ref:u}):n:l?Oe.createPortal(n,l):l}));function Ae(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),(function(){}))}var We=n("Ovef"),Te=n("HwzS"),Fe=(n("wZFJ"),n("1OyB")),Ie=n("vuIU");function Me(e){var t,n=ke(e);return n.body===e?(t=n,ke(t).defaultView||window).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ze(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Be(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function Pe(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=[t,n].concat(Object(K.a)(r)),c=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===c.indexOf(e.tagName)&&ze(e,o)}))}function Ne(e,t){var n=-1;return e.some((function(e,r){return!!t(e)&&(n=r,!0)})),n}function Ke(e,t){var n,r=[],o=[],i=e.container;if(!t.disableScrollLock){if(Me(i)){var c=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}();r.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(Be(i)+c,"px"),n=ke(i).querySelectorAll(".mui-fixed"),[].forEach.call(n,(function(e){o.push(e.style.paddingRight),e.style.paddingRight="".concat(Be(e)+c,"px")}))}var a=i.parentElement,s="HTML"===a.nodeName&&"scroll"===window.getComputedStyle(a)["overflow-y"]?a:i;r.push({value:s.style.overflow,key:"overflow",el:s}),s.style.overflow="hidden"}return function(){n&&[].forEach.call(n,(function(e,t){o[t]?e.style.paddingRight=o[t]:e.style.removeProperty("padding-right")})),r.forEach((function(e){var t=e.value,n=e.el,r=e.key;t?n.style.setProperty(r,t):n.style.removeProperty(r)}))}}var De=function(){function e(){Object(Fe.a)(this,e),this.modals=[],this.containers=[]}return Object(Ie.a)(e,[{key:"add",value:function(e,t){var n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&ze(e.modalRef,!1);var r=function(e){var t=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);Pe(t,e.mountNode,e.modalRef,r,!0);var o=Ne(this.containers,(function(e){return e.container===t}));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:r}),n)}},{key:"mount",value:function(e,t){var n=Ne(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),r=this.containers[n];r.restore||(r.restore=Ke(r,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var n=Ne(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),r=this.containers[n];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&ze(e.modalRef,!0),Pe(r.container,e.mountNode,e.modalRef,r.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var o=r.modals[r.modals.length-1];o.modalRef&&ze(o.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var Ge=function(e){var t=e.children,n=e.disableAutoFocus,r=void 0!==n&&n,i=e.disableEnforceFocus,c=void 0!==i&&i,a=e.disableRestoreFocus,s=void 0!==a&&a,l=e.getDoc,p=e.isEnabled,u=e.open,d=o.useRef(),b=o.useRef(null),f=o.useRef(null),m=o.useRef(),g=o.useRef(null),h=o.useCallback((function(e){g.current=Oe.findDOMNode(e)}),[]),y=Object(Ee.a)(t.ref,h),v=o.useRef();return o.useEffect((function(){v.current=u}),[u]),!v.current&&u&&"undefined"!=typeof window&&(m.current=l().activeElement),o.useEffect((function(){if(u){var e=ke(g.current);r||!g.current||g.current.contains(e.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),g.current.focus());var t=function(){e.hasFocus()&&!c&&p()&&!d.current?g.current&&!g.current.contains(e.activeElement)&&g.current.focus():d.current=!1},n=function(t){!c&&p()&&9===t.keyCode&&e.activeElement===g.current&&(d.current=!0,t.shiftKey?f.current.focus():b.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var o=setInterval((function(){t()}),50);return function(){clearInterval(o),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),s||(m.current&&m.current.focus&&m.current.focus(),m.current=null)}}}),[r,c,s,p,u]),o.createElement(o.Fragment,null,o.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelStart"}),o.cloneElement(t,{ref:y}),o.createElement("div",{tabIndex:0,ref:f,"data-test":"sentinelEnd"}))},Le={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},He=o.forwardRef((function(e,t){var n=e.invisible,r=void 0!==n&&n,i=e.open,c=Object(x.a)(e,["invisible","open"]);return i?o.createElement("div",Object(w.a)({"aria-hidden":!0,ref:t},c,{style:Object(w.a)({},Le.root,r?Le.invisible:{},c.style)})):null}));var Je=new De,Ve=o.forwardRef((function(e,t){var n=Object(xe.a)(),r=Object(we.a)({name:"MuiModal",props:Object(w.a)({},e),theme:n}),i=r.BackdropComponent,c=void 0===i?He:i,a=r.BackdropProps,s=r.children,l=r.closeAfterTransition,p=void 0!==l&&l,u=r.container,d=r.disableAutoFocus,b=void 0!==d&&d,f=r.disableBackdropClick,m=void 0!==f&&f,g=r.disableEnforceFocus,h=void 0!==g&&g,y=r.disableEscapeKeyDown,v=void 0!==y&&y,j=r.disablePortal,O=void 0!==j&&j,k=r.disableRestoreFocus,S=void 0!==k&&k,E=r.disableScrollLock,C=void 0!==E&&E,R=r.hideBackdrop,A=void 0!==R&&R,W=r.keepMounted,T=void 0!==W&&W,F=r.manager,I=void 0===F?Je:F,M=r.onBackdropClick,z=r.onClose,B=r.onEscapeKeyDown,P=r.onRendered,N=r.open,K=Object(x.a)(r,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),D=o.useState(!0),G=D[0],L=D[1],H=o.useRef({}),J=o.useRef(null),V=o.useRef(null),q=Object(Ee.a)(V,t),_=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(r),U=function(){return ke(J.current)},X=function(){return H.current.modalRef=V.current,H.current.mountNode=J.current,H.current},Q=function(){I.mount(X(),{disableScrollLock:C}),V.current.scrollTop=0},Z=Object(We.a)((function(){var e=function(e){return e="function"==typeof e?e():e,Oe.findDOMNode(e)}(u)||U().body;I.add(X(),e),V.current&&Q()})),Y=o.useCallback((function(){return I.isTopModal(X())}),[I]),$=Object(We.a)((function(e){J.current=e,e&&(P&&P(),N&&Y()?Q():ze(V.current,!0))})),ee=o.useCallback((function(){I.remove(X())}),[I]);if(o.useEffect((function(){return function(){ee()}}),[ee]),o.useEffect((function(){N?Z():_&&p||ee()}),[N,ee,_,p,Z]),!T&&!N&&(!_||G))return null;var te=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:Te.a}),ne={};return void 0===s.props.tabIndex&&(ne.tabIndex=s.props.tabIndex||"-1"),_&&(ne.onEnter=Ae((function(){L(!1)}),s.props.onEnter),ne.onExited=Ae((function(){L(!0),p&&ee()}),s.props.onExited)),o.createElement(Re,{ref:$,container:u,disablePortal:O},o.createElement("div",Object(w.a)({ref:q,onKeyDown:function(e){"Escape"===e.key&&Y()&&(B&&B(e),v||(e.stopPropagation(),z&&z(e,"escapeKeyDown")))},role:"presentation"},K,{style:Object(w.a)({},te.root,!N&&G?te.hidden:{},K.style)}),A?null:o.createElement(c,Object(w.a)({open:N,onClick:function(e){e.target===e.currentTarget&&(M&&M(e),!m&&z&&z(e,"backdropClick"))}},a)),o.createElement(Ge,{disableEnforceFocus:h,disableAutoFocus:b,disableRestoreFocus:S,getDoc:U,isEnabled:Y,open:N},o.cloneElement(s,ne))))})),qe=n("kKAo"),_e=Object(a.b)({position:"absolute",minHeight:"70%",minWidth:"70%",maxWidth:"90%",padding:"16px",outline:"none",top:"50%",left:"50%",transform:"translate(-50%, -50%)",overflow:"scroll"}),Ue=Object(a.b)('{\n  &:not(:last-child):after {\n      content: " / "\n    }\n}'),Xe=Object(a.b)({margin:"10px"}),Qe=Object(a.b)({fontSize:"1.8rem"}),Ze=function(e){var t=e.work,n=Object(o.useState)(!1),r=n[0],i=n[1];return Object(a.c)("div",null,Object(a.c)(ve,{variant:"h4",display:"block",align:"center"},t.name),Object(a.c)(c.a,{filename:t.image}),Object(a.c)("div",{css:Xe},Object(a.c)(je.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:function(){i(!0)}},"Detail")),Object(a.c)(Ve,{open:r,onClose:function(){i(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},Object(a.c)(qe.a,{variant:"outlined",css:_e},Object(a.c)(W,{container:!0,spacing:3},Object(a.c)(W,{item:!0,xs:12,sm:6},Object(a.c)(c.a,{filename:t.image})),Object(a.c)(W,{item:!0,xs:12,sm:6},Object(a.c)(ve,{variant:"h3",display:"block",align:"center",id:"simple-modal-title",gutterBottom:!0},t.name),Object(a.c)("p",{id:"simple-modal-description",css:Qe},t.description),Object(a.c)(me,{mb:3},Object(a.c)(ve,{variant:"h4",display:"block",align:"center"},"DEMO"),Object(a.c)(ve,{variant:"h5",display:"block",align:"center",gutterBottom:!0},Object(a.c)("a",{href:t.url,target:"_blank",rel:"noreferrer"},t.url))),Object(a.c)(me,{mb:3},Object(a.c)(ve,{variant:"h4",display:"block",align:"center"},"GitHub"),Object(a.c)(ve,{variant:"h5",display:"block",align:"center",gutterBottom:!0},Object(a.c)("a",{href:t.git,target:"_blank",rel:"noreferrer"},"Link"))),Object(a.c)(me,{mb:3},Object(a.c)(ve,{variant:"h4",display:"block",align:"center"},"使用言語など"),Object(a.c)(ve,{variant:"h5",display:"block",align:"center",gutterBottom:!0},t.skills.map((function(e){return Object(a.c)("span",{css:Ue,key:e},e)})))))))))},Ye=Object(a.b)({margin:"0 15vw"}),$e=[{id:"stgrmeikan",name:"スタグル名鑑",url:"https://stgrmeikan.com",description:"サッカー・Jリーグのスタジアムグルメを共有できるWebアプリです。\n    「スタジアムグルメを通じてさらにJリーグを盛り上げていく」ことをコンセプトとし、作りました。\n    新型コロナウイルスのせいで2020シーズンは元来通りの試合運営が叶わないであろうことから、2020シーズンはβ版の公開とし、2021シーズンからの本格運用を計画しています。\n    Nuxtで作りましたがReactに置き換えることを検討中。\n    ",image:"works/stgrmeikan.png",git:"https://github.com/gengineer18/stadium-gourmet-list",skills:["Nuxt.js","TypeScript","Buefy","SCSS","Firebase","GAE(SE)","Figma"]},{id:"blog",name:"Woods At Web Log",url:"https://blog.woodsatweb.com",description:"JAMStack構成で作成した自前のブログです。\n    フリーランスエンジニアとしての働き方やフロントエンドエンジニアとして得た知識などの備忘を書いていきます。\n    Markdownで記述ができるため、記事をGit管理しやすいのも利点になっています。",image:"works/blog.png",git:"https://github.com/gengineer18/woods-at-web-log",skills:["Nuxt.js","TypeScript","Vuetify","SCSS","Contentful","Netlify","Figma"]},{id:"dachs",name:"Dogs 'n Dachs",url:"https://dogs-n-dachs.woodsatweb.com/",description:"ダックスが大好きな飼い主さん、ダックスを飼ってみたい方に向けたダックスフント専門の写真共有サイトです。\n    ジャンルをかなりニッチにしたインスタグラムをイメージしています。\n    #web1weekという1週間のハッカソンイベントで、スピード感を持って作りました。\n    LIKEボタンを何度でも上限なく連打できるのが特長です。",image:"works/dogsndachs.png",git:"https://github.com/gengineer18/dogs-n-dachs",skills:["Nuxt.js","Vuetify","SCSS","Firebase","Figma"]},{id:"portfolio",name:"Woods At Web Site",url:"https://woodsatweb.com/",description:"このサイトです。React/Gatsby.jsの練習を兼ねて作っています。こちらを大いに参考にさせていただきました。https://qiita.com/hppRC/items/b22e8426d021938601fd",image:"works/portfolio.png",git:"https://github.com/gengineer18/dogs-n-dachs",skills:["React","Gatsby.js","TypeScript","Material-UI","emotion","Netlify","Figma"]},{id:"kyufutter",name:"10万円給付ったー",url:"https://kyufutter10.web.app/",description:"SPAでのOGP画像生成の練習がてらに作ったものです。新型コロナウイルスの影響により給付された10万円で何がしたいかを画像つきで共有できるアプリです。",image:"works/kyufutter.png",git:"https://github.com/gengineer18/kyufutter",skills:["Nuxt.js","JavaScript","Vuetify","Firebase"]}],et=function(){return Object(a.c)("div",{css:Object(y.a)([v.b,Ye])},Object(a.c)(u,{size:4.8},"My Works"),Object(a.c)(me,{mb:4},Object(a.c)(ve,{variant:"h4",display:"block",align:"center"},"個人開発にて作成したものを掲載しています。")),Object(a.c)(W,{container:!0,spacing:3},$e.map((function(e){return Object(a.c)(W,{item:!0,xs:12,sm:4,key:e.name},Object(a.c)(Ze,{work:e}))}))))},tt=Object(a.b)({margin:"0 15vw"}),nt=[{icon:"javascript.png",tech:"JavaScript"},{icon:"typescript.png",tech:"TypeScript"},{icon:"vue.png",tech:"Vue.js"},{icon:"nuxt.jpg",tech:"Nuxt.js"},{icon:"react.png",tech:"React"},{icon:"gatsby.png",tech:"Gatsby"},{icon:"html.png",tech:"HTML"},{icon:"css.jpg",tech:"CSS"},{icon:"sass.png",tech:"Sass"},{icon:"stylus.png",tech:"Stylus"},{icon:"java.png",tech:"Java"},{icon:"firebase.png",tech:"Firebase"},{icon:"netlify.jpg",tech:"Netlify"},{icon:"contentful.png",tech:"Contentful"},{icon:"microcms.png",tech:"micro CMS"},{icon:"oracle.jpg",tech:"Oracle DB"},{icon:"git.png",tech:"Git"},{icon:"github.jpg",tech:"GitHub"},{icon:"slack.jpg",tech:"Slack"},{icon:"backlog.png",tech:"Backlog"},{icon:"figma.png",tech:"Figma"}],rt=function(){return Object(a.c)("div",{css:Object(y.a)([v.b,tt])},Object(a.c)(u,{size:4.8},"Skill Set"),Object(a.c)(W,{container:!0,spacing:3},nt.map((function(e){return Object(a.c)(W,{item:!0,xs:6,sm:2,key:e.tech},Object(a.c)(h,{filename:"icons/"+e.icon},e.tech))}))))},ot=Object(a.b)({margin:"0 15vw"}),it=function(){return Object(a.c)("div",{css:Object(y.a)([v.b,ot])},Object(a.c)(u,{size:4.8},"Contact Me"),Object(a.c)(me,{mb:3},Object(a.c)(ve,{variant:"h5",display:"block",align:"center"},"ご連絡・お仕事のご相談等は下記フォームまたは",Object(a.c)("a",{href:"https://twitter.com/gengineer18",target:"_blank",rel:"noreferrer"},"TwitterのDM"),"よりお願い致します。")),Object(a.c)(c.b,null))},ct=function(e){var t=e.className;return Object(a.c)("main",{className:t},Object(a.c)("section",null,Object(a.c)(l,{id:"top"}),Object(a.c)(O,null)),Object(a.c)("section",null,Object(a.c)(l,{id:"about"}),Object(a.c)(N,null)),Object(a.c)("section",null,Object(a.c)(l,{id:"works"}),Object(a.c)(et,null)),Object(a.c)("section",null,Object(a.c)(l,{id:"skills"}),Object(a.c)(rt,null)),Object(a.c)("section",null,Object(a.c)(l,{id:"contact"}),Object(a.c)(it,null)))},at=Object(r.a)(ct,{target:"e1ofi4ud0"})(v.a);t.default=function(e){var t=e.path;return Object(a.c)(i.a.Fragment,null,Object(a.c)(c.c,{title:"Top",pathname:t}),Object(a.c)(at,null))}},bFe0:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("qKvR"),o={name:"t3z0ht",styles:"flex:1;width:100%;margin:0 auto;@media screen and (max-width:1100px){}@media screen and (max-width:768px){}@media screen and (max-width:480px){}@media screen and (max-height:430px){}"},i=Object(r.b)({minHeight:"90vh"})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ae7fcbcb400c56721885.js.map