(self.webpackChunkgifts=self.webpackChunkgifts||[]).push([[744],{746:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(7294),i=a(8696),c=a.n(i),s={types:{code:function(e){return n.createElement("span",null,e.node.code)}}};var l=function(e){return n.createElement("div",{className:"gift "+e.classList},n.createElement("img",{src:e.imageUrl,alt:"grow"}),n.createElement("div",{className:"floated-text"},n.createElement("div",{className:"gift-title"},e.name),n.createElement("div",{className:"gift-price"},"$ ",e.price),n.createElement("hr",{className:"w-40 mr-5 bg-black mt-0 pt-0 mb-0"}),n.createElement("div",{className:"description"},n.createElement(c(),{blocks:e.description,serializers:s,className:"description"})),n.createElement("a",{href:e.link,className:"shop-link"},"$ ",e.price," at ",e.at),n.createElement("div",{className:"clear"})),n.createElement("hr",{className:"dotted intro"}))},r=a(4934),M=a(285),N=a.n(M),u=N()(r.Z);var L=function(e){var t,a=(0,n.useState)(!1),i=a[0],c=a[1],s=(0,n.useState)(null),l=s[0],M=s[1],N="book-now p1";return(0,n.useEffect)((function(){r.Z.fetch('*[_type=="gift"]',{}).then((function(e){M(e[Math.floor(7*Math.random(e.length))])}))}),[]),i&&(N="book-now-hover p1"),n.createElement("div",{className:"gift "+e.classList},n.createElement("div",{className:"border-black border text-xs p-3 font-thin"},"Every product is independently selected by (obsessive) editors. Things you buy through our links may earn us a commission."),n.createElement("div",{className:"relative"},n.createElement("img",{src:l&&(t=l.Image,u.image(t)),alt:"grow"}),n.createElement("div",{className:N,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)}},"$ ",l&&l.Price)),n.createElement("div",{className:"font-light mt-5 text-xs text-center"},"DEAL OF THE DAY"),n.createElement("div",{className:"font-extra-bold text-s text-center mt-1"},l&&l.Name))},m={types:{code:function(e){return n.createElement("span",null,e.node.code)}}},o=N()(r.Z);function g(e){return o.image(e)}var E=function(e){return n.createElement("article",null,function(e){return n.createElement(n.Fragment,null,n.createElement("h1",null,e.title),n.createElement("img",{id:"header",src:g(e.Image),width:"100%",alt:"design"}),n.createElement("div",{className:"subtitle"},n.createElement(c(),{blocks:e._rawIntroduction,serializers:m,className:"description"})),n.createElement("hr",{className:"dotted intro"}))}(e.data.page),n.createElement(L,{classList:"absolute"}),e.data.gifts.map((function(e){return n.createElement(n.Fragment,null,n.createElement(l,{key:e.node.Name,classList:"floated",link:e.node.Link,name:e.node.Name,price:e.node.Price,description:e.node._rawDescription,at:e.node.Shop,imageUrl:g(e.node.Image).width(200)}))})))},d=a(6785),w=a(5444);var I=function(){return n.createElement("header",{className:"text-black flex justify-between items-centered blog-navigation"},n.createElement("div",{id:"header",className:"flex"},n.createElement(w.rU,{to:"/"},n.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5NjAgOTYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NjAgOTYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0U4ODE1RDt9Cgkuc3Qxe2ZpbGw6I0Y2OUI3Njt9Cgkuc3Qye2ZpbGw6I0Q4Mzk0NTt9Cgkuc3Qze2ZpbGw6I0VBM0Q1Mzt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcyNS44LDc4OC45SDIzNC4yYy04LjksMC0xNi4xLTcuMi0xNi4xLTE2LjFWMzk3LjljMC04LjksNy4yLTE2LjEsMTYuMS0xNi4xaDQ5MS42YzguOSwwLDE2LjEsNy4yLDE2LjEsMTYuMQoJCXYzNzQuOUM3NDEuOSw3ODEuNyw3MzQuNyw3ODguOSw3MjUuOCw3ODguOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03NTQuMSw0MzlIMjA1LjljLTguOSwwLTE2LjEtNy4yLTE2LjEtMTYuMVYyOTZjMC04LjksNy4yLTE2LjEsMTYuMS0xNi4xaDU0OC4yYzguOSwwLDE2LjEsNy4yLDE2LjEsMTYuMQoJCXYxMjYuOUM3NzAuMiw0MzEuOCw3NjMsNDM5LDc1NC4xLDQzOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00OTUuNywyOTEuNWgtMjBjLTE2LjUsMC0zMC0xMy40LTMwLTMwdi02LjJjMC0xNi41LDEzLjQtMzAsMzAtMzBoMjBjMTYuNSwwLDMwLDEzLjQsMzAsMzB2Ni4yCgkJQzUyNS43LDI3OC4xLDUxMi4zLDI5MS41LDQ5NS43LDI5MS41eiIvPgoJPHJlY3QgeD0iNDA5LjciIHk9IjQzOSIgY2xhc3M9InN0MiIgd2lkdGg9IjE0MC4zIiBoZWlnaHQ9IjM0OS45Ii8+Cgk8cmVjdCB4PSIzOTcuMiIgeT0iMjc5LjkiIGNsYXNzPSJzdDMiIHdpZHRoPSIxNjUuMyIgaGVpZ2h0PSIxNTkuMSIvPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTQ2Ny41LDIzOS41bC04OS4zLTU3LjdjLTQ0LjEtMjguNS0xMDIuMywzLjItMTAyLjMsNTUuN2wwLDBjMCwyMy40LDE5LDQyLjQsNDIuNCw0Mi40SDQ1OAoJCWM5LjcsMCwxNy42LTcuOSwxNy42LTE3LjZ2LTguMUM0NzUuNSwyNDguMyw0NzIuNSwyNDIuNyw0NjcuNSwyMzkuNXogTTQxNi4zLDI2MC41SDMzOWMtOS40LDAtMTctNy42LTE3LTE3bDAsMAoJCWMwLTMwLjgsMzQuMS00OS4zLDU5LjktMzIuNmw0MS45LDI3LjFjNC42LDIuOSw2LjgsOC42LDUsMTQuMUM0MjcuMSwyNTcuMyw0MjEuOCwyNjAuNSw0MTYuMywyNjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00OTMsMjU0LjN2OC4xYzAsOS43LDcuOSwxNy42LDE3LjYsMTcuNmgxMzkuN2MyMy40LDAsNDIuNC0xOSw0Mi40LTQyLjRsMCwwYzAtNTIuNS01OC4yLTg0LjItMTAyLjMtNTUuNwoJCUw1MDEsMjM5LjVDNDk2LDI0Mi43LDQ5MywyNDguMyw0OTMsMjU0LjN6IE01MzkuNywyNTIuMWMtMS43LTUuNSwwLjUtMTEuMiw1LTE0LjFsNDEuOS0yNy4xYzI1LjgtMTYuNyw1OS45LDEuOSw1OS45LDMyLjZsMCwwCgkJYzAsOS40LTcuNiwxNy0xNywxN2gtNzcuM0M1NDYuNywyNjAuNSw1NDEuMywyNTcuMyw1MzkuNywyNTIuMXoiLz4KPC9nPgo8L3N2Zz4K",width:"50px",height:"50px",className:"gift-animate"}),n.createElement("span",{id:"logo"},"pickgiftfor.com"))),n.createElement(d.Z,null))},y=a(1007);var j=function(e){var t=e.pageContext;return n.createElement(n.Fragment,null,n.createElement("div",{id:"linktest"},e.pageContext.gifts.length),n.createElement(y.Z,{title:"title",image:"",description:""}),n.createElement(I,null),n.createElement("div",{id:"wrap"},n.createElement("hr",{className:"intro"}),n.createElement("div",{className:"relative"},n.createElement(E,{data:t}))))}}}]);
//# sourceMappingURL=component---src-templates-blog-js-e97527ac2ff90a9f6746.js.map