(self.webpackChunkgifts=self.webpackChunkgifts||[]).push([[744],{6494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ke}});var r=n(7294),i=n(8696),o=n.n(i),a={types:{code:function(e){return r.createElement("span",null,e.node.code)}}};var c=function(e){return r.createElement("div",{className:"gift "+e.classList},r.createElement("img",{src:e.imageUrl,alt:"grow"}),r.createElement("div",{className:"floated-text"},r.createElement("div",{className:"gift-title"},e.name),r.createElement("div",{className:"gift-price"},"$ ",e.price),r.createElement("hr",{className:"w-40 mr-5 bg-black mt-0 pt-0 mb-0"}),r.createElement("div",{className:"description"},r.createElement(o(),{blocks:e.description,serializers:a,className:"description"})),r.createElement("a",{href:e.link,className:"shop-link"},"$ ",e.price," at ",e.at),r.createElement("div",{className:"clear"})),r.createElement("hr",{className:"dotted intro"}))},u=n(4934),s=n(285),l=n.n(s),f=l()(u.Z);var d=function(e){var t,n=(0,r.useState)(!1),i=n[0],o=n[1],a=(0,r.useState)(null),c=a[0],s=a[1],l="book-now p1";return(0,r.useEffect)((function(){u.Z.fetch('*[_type=="gift"]',{}).then((function(e){s(e[Math.floor(7*Math.random(e.length))])}))}),[]),i&&(l="book-now-hover p1"),r.createElement("div",{className:"gift "+e.classList},r.createElement("div",{className:"border-black border text-xs p-3 font-thin"},"Every product is independently selected by (obsessive) editors. Things you buy through our links may earn us a commission."),r.createElement("div",{className:"relative"},r.createElement("img",{src:c&&(t=c.Image,f.image(t)),alt:"grow"}),r.createElement("div",{className:l,onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)}},"$ ",c&&c.Price)),r.createElement("div",{className:"font-light mt-5 text-xs text-center"},"DEAL OF THE DAY"),r.createElement("div",{className:"font-extra-bold text-s text-center mt-1"},c&&c.Name))},p={types:{code:function(e){return r.createElement("span",null,e.node.code)}}},m=l()(u.Z);function y(e){return m.image(e)}var g=function(e){return r.createElement("article",null,function(e){return r.createElement(r.Fragment,null,r.createElement("h1",null,e.title),r.createElement("img",{id:"header",src:y(e.Image),width:"100%",alt:"design"}),r.createElement("div",{className:"subtitle"},r.createElement(o(),{blocks:e._rawIntroduction,serializers:p,className:"description"})),r.createElement("hr",{className:"dotted intro"}))}(e.data.page),r.createElement(d,{classList:"absolute"}),e.data.gifts.map((function(e){return r.createElement(r.Fragment,null,r.createElement(c,{key:e.node.Name,classList:"floated",link:e.node.Link,name:e.node.Name,price:e.node.Price,description:e.node._rawDescription,at:e.node.Shop,imageUrl:y(e.node.Image).width(200)}))})))},h=n(6785),T=n(5444);var w,b,M,E,N=function(){return r.createElement("header",{className:"text-black flex justify-between items-centered blog-navigation"},r.createElement("div",{id:"header",className:"flex"},r.createElement(T.rU,{to:"/"},r.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5NjAgOTYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NjAgOTYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0U4ODE1RDt9Cgkuc3Qxe2ZpbGw6I0Y2OUI3Njt9Cgkuc3Qye2ZpbGw6I0Q4Mzk0NTt9Cgkuc3Qze2ZpbGw6I0VBM0Q1Mzt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcyNS44LDc4OC45SDIzNC4yYy04LjksMC0xNi4xLTcuMi0xNi4xLTE2LjFWMzk3LjljMC04LjksNy4yLTE2LjEsMTYuMS0xNi4xaDQ5MS42YzguOSwwLDE2LjEsNy4yLDE2LjEsMTYuMQoJCXYzNzQuOUM3NDEuOSw3ODEuNyw3MzQuNyw3ODguOSw3MjUuOCw3ODguOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03NTQuMSw0MzlIMjA1LjljLTguOSwwLTE2LjEtNy4yLTE2LjEtMTYuMVYyOTZjMC04LjksNy4yLTE2LjEsMTYuMS0xNi4xaDU0OC4yYzguOSwwLDE2LjEsNy4yLDE2LjEsMTYuMQoJCXYxMjYuOUM3NzAuMiw0MzEuOCw3NjMsNDM5LDc1NC4xLDQzOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00OTUuNywyOTEuNWgtMjBjLTE2LjUsMC0zMC0xMy40LTMwLTMwdi02LjJjMC0xNi41LDEzLjQtMzAsMzAtMzBoMjBjMTYuNSwwLDMwLDEzLjQsMzAsMzB2Ni4yCgkJQzUyNS43LDI3OC4xLDUxMi4zLDI5MS41LDQ5NS43LDI5MS41eiIvPgoJPHJlY3QgeD0iNDA5LjciIHk9IjQzOSIgY2xhc3M9InN0MiIgd2lkdGg9IjE0MC4zIiBoZWlnaHQ9IjM0OS45Ii8+Cgk8cmVjdCB4PSIzOTcuMiIgeT0iMjc5LjkiIGNsYXNzPSJzdDMiIHdpZHRoPSIxNjUuMyIgaGVpZ2h0PSIxNTkuMSIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTQ2Ny41LDIzOS41bC04OS4zLTU3LjdjLTQ0LjEtMjguNS0xMDIuMywzLjItMTAyLjMsNTUuN2wwLDBjMCwyMy40LDE5LDQyLjQsNDIuNCw0Mi40SDQ1OAoJCWM5LjcsMCwxNy42LTcuOSwxNy42LTE3LjZ2LTguMUM0NzUuNSwyNDguMyw0NzIuNSwyNDIuNyw0NjcuNSwyMzkuNXogTTQxNi4zLDI2MC41SDMzOWMtOS40LDAtMTctNy42LTE3LTE3bDAsMAoJCWMwLTMwLjgsMzQuMS00OS4zLDU5LjktMzIuNmw0MS45LDI3LjFjNC42LDIuOSw2LjgsOC42LDUsMTQuMUM0MjcuMSwyNTcuMyw0MjEuOCwyNjAuNSw0MTYuMywyNjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00OTMsMjU0LjN2OC4xYzAsOS43LDcuOSwxNy42LDE3LjYsMTcuNmgxMzkuN2MyMy40LDAsNDIuNC0xOSw0Mi40LTQyLjRsMCwwYzAtNTIuNS01OC4yLTg0LjItMTAyLjMtNTUuNwoJCUw1MDEsMjM5LjVDNDk2LDI0Mi43LDQ5MywyNDguMyw0OTMsMjU0LjN6IE01MzkuNywyNTIuMWMtMS43LTUuNSwwLjUtMTEuMiw1LTE0LjFsNDEuOS0yNy4xYzI1LjgtMTYuNyw1OS45LDEuOSw1OS45LDMyLjZsMCwwCgkJYzAsOS40LTcuNiwxNy0xNywxN2gtNzcuM0M1NDYuNywyNjAuNSw1NDEuMywyNTcuMyw1MzkuNywyNTIuMXoiLz4KPC9nPgo8L3N2Zz4K",width:"50px",height:"50px",className:"gift-animate"}),r.createElement("span",{id:"logo"},"pickgiftfor.com"))),r.createElement(h.Z,null))},L=(n(5827),n(5697)),v=n.n(L),C=n(6556),j=n.n(C),S=n(7928),O=n.n(S),I=n(6032),A=n.n(I),x="bodyAttributes",D="htmlAttributes",k="titleAttributes",z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},P=(Object.keys(z).map((function(e){return z[e]})),"charset"),Y="cssText",U="href",Q="http-equiv",H="innerHTML",Z="itemprop",B="name",R="property",G="rel",J="src",F="target",X={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",W="defer",V="encodeSpecialCharacters",q="onChangeClientState",K="titleTemplate",$=Object.keys(X).reduce((function(e,t){return e[X[t]]=t,e}),{}),ee=[z.NOSCRIPT,z.SCRIPT,z.STYLE],te="data-react-helmet",ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ce=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ue=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},se=function(e){var t=me(e,z.TITLE),n=me(e,K);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=me(e,_);return t||r||void 0},le=function(e){return me(e,q)||function(){}},fe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return oe({},e,t)}),{})},de=function(e,t){return t.filter((function(e){return void 0!==e[z.BASE]})).map((function(e){return e[z.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},pe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&we("Helmet: "+e+' should be of type "Array". Instead found type "'+ne(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===G&&"canonical"===e[n].toLowerCase()||u===G&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==H&&c!==Y&&c!==Z||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=A()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},me=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ye=(w=Date.now(),function(e){var t=Date.now();t-w>16?(w=t,e(t)):setTimeout((function(){ye(e)}),0)}),ge=function(e){return clearTimeout(e)},he="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ye:n.g.requestAnimationFrame||ye,Te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ge:n.g.cancelAnimationFrame||ge,we=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},be=null,Me=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;Le(z.BODY,r),Le(z.HTML,i),Ne(f,d);var p={baseTag:ve(z.BASE,n),linkTags:ve(z.LINK,o),metaTags:ve(z.META,a),noscriptTags:ve(z.NOSCRIPT,c),scriptTags:ve(z.SCRIPT,s),styleTags:ve(z.STYLE,l)},m={},y={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=p[e].oldTags)})),t&&t(),u(e,m,y)},Ee=function(e){return Array.isArray(e)?e.join(""):e},Ne=function(e,t){void 0!==e&&document.title!==e&&(document.title=Ee(e)),Le(z.TITLE,t)},Le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(te),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(te):n.getAttribute(te)!==a.join(",")&&n.setAttribute(te,a.join(","))}},ve=function(e,t){var n=document.head||document.querySelector(z.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===H)n.innerHTML=t.innerHTML;else if(r===Y)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(te,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},Ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},je=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[X[n]||n]=e[n],t}),t)},Se=function(e,t,n){switch(e){case z.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(i={key:e})[te]=!0,o=je(n,i),[r.createElement(z.TITLE,o,e)];var e,n,i,o},toString:function(){return function(e,t,n,r){var i=Ce(n),o=Ee(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+ue(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ue(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case x:case D:return{toComponent:function(){return je(t)},toString:function(){return Ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var i,o=((i={key:n})[te]=!0,i);return Object.keys(t).forEach((function(e){var n=X[e]||e;if(n===H||n===Y){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===H||e===Y)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+ue(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===ee.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Oe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:Se(z.BASE,t,r),bodyAttributes:Se(x,n,r),htmlAttributes:Se(D,i,r),link:Se(z.LINK,o,r),meta:Se(z.META,a,r),noscript:Se(z.NOSCRIPT,c,r),script:Se(z.SCRIPT,u,r),style:Se(z.STYLE,s,r),title:Se(z.TITLE,{title:f,titleAttributes:d},r)}},Ie=j()((function(e){return{baseTag:de([U,F],e),bodyAttributes:fe(x,e),defer:me(e,W),encode:me(e,V),htmlAttributes:fe(D,e),linkTags:pe(z.LINK,[G,U],e),metaTags:pe(z.META,[B,P,Q,R,Z],e),noscriptTags:pe(z.NOSCRIPT,[H],e),onChangeClientState:le(e),scriptTags:pe(z.SCRIPT,[J,H],e),styleTags:pe(z.STYLE,[Y],e),title:se(e),titleAttributes:fe(k,e)}}),(function(e){be&&Te(be),e.defer?be=he((function(){Me(e,(function(){be=null}))})):(Me(e),be=null)}),Oe)((function(){return null})),Ae=(b=Ie,E=M=function(e){function t(){return re(this,t),ce(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!O()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case z.SCRIPT:case z.NOSCRIPT:return{innerHTML:t};case z.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return oe({},r,((t={})[n.type]=[].concat(r[n.type]||[],[oe({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case z.TITLE:return oe({},i,((t={})[r.type]=a,t.titleAttributes=oe({},o),t));case z.BODY:return oe({},i,{bodyAttributes:oe({},o)});case z.HTML:return oe({},i,{htmlAttributes:oe({},o)})}return oe({},i,((n={})[r.type]=oe({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=oe({},t);return Object.keys(e).forEach((function(t){var r;n=oe({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,i={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[$[n]||n]=e[n],t}),t)}(ae(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case z.LINK:case z.META:case z.NOSCRIPT:case z.SCRIPT:case z.STYLE:i=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(i,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ae(e,["children"]),i=oe({},n);return t&&(i=this.mapChildrenToProps(t,i)),r.createElement(b,i)},ie(t,null,[{key:"canUseDOM",set:function(e){b.canUseDOM=e}}]),t}(r.Component),M.propTypes={base:v().object,bodyAttributes:v().object,children:v().oneOfType([v().arrayOf(v().node),v().node]),defaultTitle:v().string,defer:v().bool,encodeSpecialCharacters:v().bool,htmlAttributes:v().object,link:v().arrayOf(v().object),meta:v().arrayOf(v().object),noscript:v().arrayOf(v().object),onChangeClientState:v().func,script:v().arrayOf(v().object),style:v().arrayOf(v().object),title:v().string,titleAttributes:v().object,titleTemplate:v().string},M.defaultProps={defer:!0,encodeSpecialCharacters:!0},M.peek=b.peek,M.rewind=function(){var e=b.rewind();return e||(e=Oe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);Ae.renderStatic=Ae.rewind;var xe=function(e){var t=e.title,n=e.description,i=e.image,o=e.url;return r.createElement(T.i1,{query:De,render:function(e){var a=n||e.site.siteMetadata.description,c=t||e.site.siteMetadata.title,u=i||e.site.siteMetadata.image,s=o||e.site.siteMetadata.url;return r.createElement(Ae,{title:c,meta:[{name:"description",content:a},{name:"og:image",content:u},{name:"og:description",content:a},{name:"og:type",content:"website"},{name:"og:url",content:s}]})}})},De="1885421697";var ke=function(e){var t=e.pageContext;return r.createElement(r.Fragment,null,r.createElement("div",{id:"linktest"},e.pageContext.gifts.length),r.createElement(xe,{title:"title",image:"",description:""}),r.createElement(N,null),r.createElement("div",{id:"wrap"},r.createElement("hr",{className:"intro"}),r.createElement("div",{className:"relative"},r.createElement(g,{data:t}))))}},7928:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6556:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=component---src-templates-blog-js-2ee114cacb1d7da78362.js.map