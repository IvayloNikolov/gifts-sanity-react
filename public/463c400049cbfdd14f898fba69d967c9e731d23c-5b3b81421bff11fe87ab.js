(self.webpackChunkgifts=self.webpackChunkgifts||[]).push([[327],{6785:function(e,r,n){"use strict";var t=n(7294),i=n(5444);r.Z=function(){return t.createElement("nav",{id:"menu"},t.createElement("ul",{className:"flex"},t.createElement("li",{className:"pr-3 menu-item"},t.createElement(i.rU,{to:"/"},"Home")),t.createElement("li",{className:"pr-3 menu-item"},t.createElement(i.rU,{to:"/search"},"Search"))))}},6830:function(e,r,n){e.exports=n(6104)},9707:function(e,r,n){"use strict";n(5827);var t=n(6032),i=n(8756),l=n(5020),s=n(2020),o=n(4823),a=["projectId","dataset","imageOptions"],c={imageOptions:{}};function u(e){return"block"===e._type&&e.listItem}e.exports=function(e,r,n,f){var p=t({},c,r),d=Array.isArray(p.blocks)?p.blocks:[p.blocks],m=s(d),h=l(m,p.listNestMode),y=o(n,p.serializers||{}),v=a.reduce((function(e,r){var n=p[r];return void 0!==n&&(e[r]=n),e}),{});function k(r,n,t,l){return"list"===(d=r)._type&&d.listItem?(o=(s=r).listItem,a=s.level,c=s._key,p=s.children.map(k),e(y.list,{key:c,level:a,type:o,options:v},p)):u(r)?function(r,n){var t=r._key,l=i(r).map(k);return e(y.listItem,{node:r,serializers:y,index:n,key:t,options:v},l)}(r,function(e,r){for(var n=0,t=0;t<r.length;t++){if(r[t]===e)return n;u(r[t])&&n++}return n}(r,t)):function(e){return"string"==typeof e||e.marks||"span"===e._type}(r)?f(r,y,n,{serializeNode:k}):function(r,n,t){var l=i(r).map((function(e,r,n){return k(e,r,n,!0)})),s={key:r._key||"block-".concat(n),node:r,isInline:t,serializers:y,options:v};return e(y.block,s,l)}(r,n,l);var s,o,a,c,p,d}var g=Boolean(p.renderContainerOnSingleChild),b=h.map(k);if(g||b.length>1){var z=p.className?{className:p.className}:{};return e(y.container,z,b)}return b[0]?b[0]:"function"==typeof y.empty?e(y.empty):y.empty}},8756:function(e,r,n){"use strict";n(5827);var t=["strong","em","code","underline","strike-through"];function i(e,r,n){if(!e.marks||0===e.marks.length)return e.marks||[];var t=e.marks.reduce((function(e,t){e[t]=e[t]?e[t]+1:1;for(var i=r+1;i<n.length;i++){var l=n[i];if(!l.marks||!Array.isArray(l.marks)||-1===l.marks.indexOf(t))break;e[t]++}return e}),{}),i=l.bind(null,t);return e.marks.slice().sort(i)}function l(e,r,n){var i=e[r]||0,l=e[n]||0;if(i!==l)return l-i;var s=t.indexOf(r),o=t.indexOf(n);return s!==o?s-o:r<n?-1:r>n?1:0}e.exports=function(e){var r=e.children,n=e.markDefs;if(!r||!r.length)return[];var t=r.map(i),l={_type:"span",children:[]},s=[l];return r.forEach((function(e,r){var i=t[r];if(i){var l=1;if(s.length>1)for(;l<s.length;l++){var o=s[l].markKey,a=i.indexOf(o);if(-1===a)break;i.splice(a,1)}var c,u=function(e){for(var r=e.length-1;r>=0;r--){var n=e[r];if("span"===n._type&&n.children)return n}return}(s=s.slice(0,l));if(i.forEach((function(r){var t={_type:"span",_key:e._key,children:[],mark:n.find((function(e){return e._key===r}))||r,markKey:r};u.children.push(t),s.push(t),u=t})),"span"!==(c=e)._type||"string"!=typeof c.text||!Array.isArray(c.marks)&&void 0!==c.marks)u.children=u.children.concat(e);else{for(var f=e.text.split("\n"),p=f.length;p-- >1;)f.splice(p,0,"\n");u.children=u.children.concat(f)}}else{s[s.length-1].children.push(e)}})),l.children}},2020:function(e,r,n){"use strict";var t=n(6032);function i(e){var r=0,n=e.length;if(0===n)return r;for(var t=0;t<n;t++)r=(r<<5)-r+e.charCodeAt(t),r&=r;return r}e.exports=function(e){return e.map((function(e){return e._key?e:t({_key:(r=e,i(JSON.stringify(r)).toString(36).replace(/[^A-Za-z0-9]/g,""))},e);var r}))}},9014:function(e,r,n){"use strict";var t=n(5651),i=n(285),l=n(6032),s=encodeURIComponent,o="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(t("block-content-image-materializing"));e.exports=function(e){var r=e.node,n=e.options,t=n.projectId,a=n.dataset,c=r.asset;if(!c)throw new Error("Image does not have required `asset` property");if(c.url)return c.url+function(e){var r=e.imageOptions,n=Object.keys(r);if(!n.length)return"";var t=n.map((function(e){return"".concat(s(e),"=").concat(s(r[e]))}));return"?".concat(t.join("&"))}(n);if(!t||!a)throw new Error(o);if(!c._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return i(l({projectId:t,dataset:a},n.imageOptions||{})).image(r).toString()}},6104:function(e,r,n){"use strict";var t=n(7360),i=n(9707),l=n(9014),s=n(4823);e.exports={blocksToNodes:function(e,r,n,l){if(n)return i(e,r,n,l);var s=t(e);return i(e,r,s.defaultSerializers,s.serializeSpan)},getSerializers:t,getImageUrl:l,mergeSerializers:s}},4823:function(e,r,n){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(5827);var i=n(6032);e.exports=function(e,r){return Object.keys(e).reduce((function(n,l){var s=t(e[l]);return n[l]="function"===s?void 0!==r[l]?r[l]:e[l]:"object"===s?i({},e[l],r[l]):void 0===r[l]?e[l]:r[l],n}),{})}},5020:function(e,r,n){"use strict";var t=n(6032);function i(e){return Boolean(e.listItem)}function l(e,r){return e.level===r.level&&e.listItem===r.listItem}function s(e){return{_type:"list",_key:"".concat(e._key,"-parent"),level:e.level,listItem:e.listItem,children:[e]}}function o(e){return e.children&&e.children[e.children.length-1]}function a(e,r){var n="string"==typeof r.listItem;if("list"===e._type&&e.level===r.level&&n&&e.listItem===r.listItem)return e;var t=o(e);return!!t&&a(t,r)}e.exports=function(e){for(var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",c=[],u=0;u<e.length;u++){var f=e[u];if(i(f))if(r)if(l(f,r))r.children.push(f);else if(f.level>r.level){var p=s(f);if("html"===n){var d=o(r),m=t({},d,{children:d.children.concat(p)});r.children[r.children.length-1]=m}else r.children.push(p);r=p}else if(f.level<r.level){var h=a(c[c.length-1],f);if(h){(r=h).children.push(f);continue}r=s(f),c.push(r)}else if(f.listItem===r.listItem)console.warn("Unknown state encountered for block",f),c.push(f);else{var y=a(c[c.length-1],{level:f.level});if(y&&y.listItem===f.listItem){(r=y).children.push(f);continue}r=s(f),c.push(r)}else r=s(f),c.push(r);else c.push(f),r=null}return c}},7360:function(e,r,n){"use strict";var t=n(6032),i=n(9014);e.exports=function(e,r){var n=r||{useDashedStyles:!1};function l(r,n){return e(r,null,n.children)}return{defaultSerializers:{types:{block:function(r){var n=r.node.style||"normal";return/^h\d/.test(n)?e(n,null,r.children):e("blockquote"===n?"blockquote":"p",null,r.children)},image:function(r){if(!r.node.asset)return null;var n=e("img",{src:i(r)});return r.isInline?n:e("figure",null,n)}},marks:{strong:l.bind(null,"strong"),em:l.bind(null,"em"),code:l.bind(null,"code"),underline:function(r){var t=n.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return e("span",{style:t},r.children)},"strike-through":function(r){return e("del",null,r.children)},link:function(r){return e("a",{href:r.mark.href},r.children)}},list:function(r){var n="bullet"===r.type?"ul":"ol";return e(n,null,r.children)},listItem:function(r){var n=r.node.style&&"normal"!==r.node.style?e(r.serializers.types.block,r,r.children):r.children;return e("li",null,n)},block:function(r){var n=r.node,t=r.serializers,i=r.options,l=r.isInline,s=r.children,o=n._type,a=t.types[o];if(!a)throw new Error('Unknown block type "'.concat(o,'", please specify a serializer for it in the `serializers.types` prop'));return e(a,{node:n,options:i,isInline:l},s)},span:function(r){var n=r.node,t=n.mark,i=n.children,l="string"==typeof t?t:t._type,s=r.serializers.marks[l];return s?e(s,r.node,i):(console.warn('Unknown mark type "'.concat(l,'", please specify a serializer for it in the `serializers.marks` prop')),e(r.serializers.markFallback,null,i))},hardBreak:function(){return e("br")},container:"div",markFallback:"span",text:void 0,empty:""},serializeSpan:function(r,n,i,l){if("\n"===r&&n.hardBreak)return e(n.hardBreak,{key:"hb-".concat(i)});if("string"==typeof r)return n.text?e(n.text,{key:"text-".concat(i)},r):r;var s;r.children&&(s={children:r.children.map((function(e,n){return l.serializeNode(e,n,r.children,!0)}))});var o=t({},r,s);return e(n.span,{key:r._key||"span-".concat(i),node:o,serializers:n})}}}},5651:function(e){e.exports=function(e){return"https://docs.sanity.io/help/"+e}},8696:function(e,r,n){"use strict";var t=n(7294),i=n(5697),l=n(6830),s=n(3904),o=s.serializers,a=s.serializeSpan,c=s.renderProps,u=l.getImageUrl,f=l.blocksToNodes,p=l.mergeSerializers,d=t.createElement,m=function e(r){var n=p(e.defaultSerializers,r.serializers),t=Object.assign({},c,r,{serializers:n,blocks:r.blocks||[]});return f(d,t,o,a)};m.defaultSerializers=o,m.getImageUrl=u,m.propTypes={className:i.string,renderContainerOnSingleChild:i.bool,projectId:i.string,dataset:i.string,imageOptions:i.object,serializers:i.shape({types:i.object,marks:i.object,list:i.func,listItem:i.func,block:i.func,span:i.func}),blocks:i.oneOfType([i.arrayOf(i.shape({_type:i.string.isRequired})),i.shape({_type:i.string.isRequired})]).isRequired},m.defaultProps={renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},e.exports=m},3904:function(e,r,n){"use strict";var t=n(7294),i=(0,n(6830).getSerializers)(t.createElement),l=i.defaultSerializers,s=i.serializeSpan;e.exports={serializeSpan:s,serializers:l,renderProps:{nestMarks:!0}}}}]);
//# sourceMappingURL=463c400049cbfdd14f898fba69d967c9e731d23c-5b3b81421bff11fe87ab.js.map