webpackJsonp([0xc260c743ec7c],{24:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(26),s=n(25),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},25:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},26:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},27:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},110:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof g&&"undefined"!=typeof window&&window.IntersectionObserver&&(g=new window.IntersectionObserver(function(e){e.forEach(function(e){v.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(g.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),g}t.__esModule=!0;var i=n(34),a=r(i),u=n(52),s=r(u),l=n(51),c=r(l),f=n(84),d=r(f),p=n(83),T=r(p),E=n(1),h=r(E),y=n(6),A=r(y),b=function(e){var t=(0,T.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},m={},S=function(e){var t=b(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!m[n]||(m[n]=!0,!1)},g=void 0,v=[],_=function(e,t){o().observe(e),v.push([e,t])},w=null,O=function(){if(null!==w)return w;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return w=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',a=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",l=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+a+u+t+n+i+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+l+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},P=function(e){var t=e.style,n=e.onLoad,r=(0,d.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,T.default)({},r,{onLoad:n,style:(0,T.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};P.propTypes={style:A.default.object,onLoad:A.default.func};var M=function(e){function t(n){(0,a.default)(this,t);var r=(0,s.default)(this,e.call(this,n)),o=!0,i=!0,u=!1,l=S(n);return!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,u=!0),"undefined"==typeof window&&(o=!1,i=!1),r.state={isVisible:o,imgLoaded:i,IOSupported:u},r.handleRef=r.handleRef.bind(r),r}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),n=t.title,r=t.alt,o=t.className,i=t.outerWrapperClassName,a=t.style,u=void 0===a?{}:a,s=t.imgStyle,l=void 0===s?{}:s,c=t.placeholderStyle,f=void 0===c?{}:c,d=t.sizes,p=t.resolutions,E=t.backgroundColor,y=t.Tag,A=void 0;A="boolean"==typeof E?"lightgray":E;var m=(0,T.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},l,f),S=(0,T.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},l);if(d){var g=d;return g.srcWebp&&g.srcSetWebp&&O()&&(g.src=g.srcWebp,g.srcSet=g.srcSetWebp),h.default.createElement(y,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},h.default.createElement(y,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,T.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},h.default.createElement(y,{style:{width:"100%",paddingBottom:100/g.aspectRatio+"%"}}),g.base64&&h.default.createElement(P,{alt:r,title:n,src:g.base64,style:m}),g.tracedSVG&&h.default.createElement(P,{alt:r,title:n,src:g.tracedSVG,style:m}),A&&h.default.createElement(y,{title:n,style:{backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(P,{alt:r,title:n,srcSet:g.srcSet,src:g.src,sizes:g.sizes,style:S,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,T.default)({alt:r,title:n},g))}})))}if(p){var v=p,_=(0,T.default)({position:"relative",overflow:"hidden",display:"inline-block",width:v.width,height:v.height},u);return"inherit"===u.display&&delete _.display,v.srcWebp&&v.srcSetWebp&&O()&&(v.src=v.srcWebp,v.srcSet=v.srcSetWebp),h.default.createElement(y,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},h.default.createElement(y,{className:(o?o:"")+" gatsby-image-wrapper",style:_,ref:this.handleRef},v.base64&&h.default.createElement(P,{alt:r,title:n,src:v.base64,style:m}),v.tracedSVG&&h.default.createElement(P,{alt:r,title:n,src:v.tracedSVG,style:m}),A&&h.default.createElement(y,{title:n,style:{backgroundColor:A,width:v.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:v.height}}),this.state.isVisible&&h.default.createElement(P,{alt:r,title:n,width:v.width,height:v.height,srcSet:v.srcSet,src:v.src,style:S,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,T.default)({alt:r,title:n,width:v.width,height:v.height},v))}})))}return null},t}(h.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:A.default.object,responsiveSizes:A.default.object,resolutions:A.default.object,sizes:A.default.object,fadeIn:A.default.bool,title:A.default.string,alt:A.default.string,className:A.default.oneOfType([A.default.string,A.default.object]),outerWrapperClassName:A.default.oneOfType([A.default.string,A.default.object]),style:A.default.object,imgStyle:A.default.object,placeholderStyle:A.default.object,position:A.default.string,backgroundColor:A.default.oneOfType([A.default.string,A.default.bool]),onLoad:A.default.func,Tag:A.default.string},t.default=M},30:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),d=n(6),p=r(d),T=n(32),E=r(T),h=n(24),y=r(h),A=n(31),b=n(15),m=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return s({},o,(t={},t[r.type]=a,t.titleAttributes=s({},i),t));case b.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},i)});case b.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},i)})}return s({},o,(n={},n[r.type]=s({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),s=(0,A.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=s({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,A.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},g=(0,E.default)(A.reducePropsToState,A.handleClientStateChange,A.mapStateOnServer)(S),v=m(g);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},15:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},31:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),s=n(5),l=r(s),c=n(15),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,c.TAG_NAMES.TITLE),n=y(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},h=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],s=u.toLowerCase();t.indexOf(s)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(u)===-1||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],s=(0,l.default)({},r[u],o[u]);r[u]=s}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:y(e,c.HELMET_PROPS.DEFER),encode:y(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:h(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:h(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),m=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,w=function(e){_&&g(_),e.defer?_=S(function(){O(e,function(){_=null})}):(O(e),_=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,o),P(d,p);var T={baseTag:I(c.TAG_NAMES.BASE,n),linkTags:I(c.TAG_NAMES.LINK,i),metaTags:I(c.TAG_NAMES.META,a),noscriptTags:I(c.TAG_NAMES.NOSCRIPT,u),scriptTags:I(c.TAG_NAMES.SCRIPT,l),styleTags:I(c.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=T[e].oldTags)}),t&&t(),s(e,E,h)},R=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=R(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var s=a[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),o.indexOf(s)===-1&&o.push(s);var f=i.indexOf(s);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},I=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},C=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},L=function(e,t,n,r){var o=C(n),i=R(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(c.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return L(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return N(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,o,r),link:x(c.TAG_NAMES.LINK,i,r),meta:x(c.TAG_NAMES.META,a,r),noscript:x(c.TAG_NAMES.NOSCRIPT,u,r),script:x(c.TAG_NAMES.SCRIPT,s,r),style:x(c.TAG_NAMES.STYLE,l,r),title:x(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=w,t.mapStateOnServer=U,t.reducePropsToState=A,t.requestAnimationFrame=S,t.warn=v}).call(t,function(){return this}())},32:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),s=r(u),l=n(27),c=r(l),f=n(33),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return s.default.createElement(l,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(l)+")",E.canUseDOM=c.default.canUseDOM,E}}},33:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!u(l))return!1;var c=e[l],f=t[l];if(o=n?n.call(r,c,f,l):void 0,o===!1||void 0===o&&c!==f)return!1}return!0}},216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),s=r(u),l=n(28),c=(r(l),n(305)),f=r(c),d=n(30),p=r(d),T=n(110),E=r(T),h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement(p.default,null,s.default.createElement("title",null,"Projects")),s.default.createElement("div",{className:f.default.projectContainer},s.default.createElement("h1",null,"Delay No More Productivity App"),s.default.createElement("p",{className:f.default.projectsP},"During my final semester, my group and I built a Chrome extension to help students work more productively on the Internet. Our app utilizes gamification to help users build a good long-term habit and minimize distractions. I was mainly in charge of frontend development and documentation, where I used Material-UI to build UI components with ReactJS."),s.default.createElement("br",null),s.default.createElement(E.default,{sizes:this.props.data.imgDelayNoMore.sizes}),s.default.createElement("br",null),s.default.createElement("p",{className:f.default.projectsP},"In a nutshell, the main objective of Delay No More for the users is to grow and level-up their own virtual farm by avoiding their own self-defined 'blacklisted' websites (such as Facebook & YouTube) that distract them from their work. The browsing analytics feature also helps users visualize their browsing habits. Click ",s.default.createElement("a",{href:"https://github.com/IIMT4601/delay-no-more",target:"_blank",style:{textDecoration:"none",color:"#2196F3"}},"here")," to view the source code on GitHub.")),s.default.createElement("br",null))},t}(s.default.Component);t.default=h;t.pageQuery="** extracted graphql fragment **"},305:function(e,t){e.exports={projectContainer:"src-pages----projects-module---projectContainer----Mp9L",projectsP:"src-pages----projects-module---projectsP---2lAec"}}});
//# sourceMappingURL=component---src-pages-projects-js-5a74b9d85dc6bb0e4cba.js.map