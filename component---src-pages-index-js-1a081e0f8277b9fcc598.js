webpackJsonp([35783957827783],{102:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var o=a(24),l=i(o),s=a(43),r=i(s),d=a(42),u=i(d),c=a(76),f=i(c),p=a(75),m=i(p),h=a(2),y=i(h),g=a(7),b=i(g),w=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},v={},E=function(e){var t=w(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!v[a]||(v[a]=!0,!1)},S=void 0,L=[],j=function(e,t){n().observe(e),L.push([e,t])},C=null,I=function(){if(null!==C)return C;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return C=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",r=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+s+t+a+o+n+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+r+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},z=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,m.default)({},i,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};z.propTypes={style:b.default.object,onLoad:b.default.func};var _=function(e){function t(a){(0,l.default)(this,t);var i=(0,r.default)(this,e.call(this,a)),n=!0,o=!0,s=!1,d=E(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!1,s=!0),"undefined"==typeof window&&(n=!1,o=!1),i.state={isVisible:n,imgLoaded:o,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=w(this.props),a=t.title,i=t.alt,n=t.className,o=t.outerWrapperClassName,l=t.style,s=void 0===l?{}:l,r=t.imgStyle,d=void 0===r?{}:r,u=t.placeholderStyle,c=void 0===u?{}:u,f=t.sizes,p=t.resolutions,h=t.backgroundColor,g=t.Tag,b=void 0;b="boolean"==typeof h?"lightgray":h;var v=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,c),E=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var S=f;return S.srcWebp&&S.srcSetWebp&&I()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),y.default.createElement(g,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},y.default.createElement(g,{className:(n?n:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},y.default.createElement(g,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&y.default.createElement(z,{alt:i,title:a,src:S.base64,style:v}),S.tracedSVG&&y.default.createElement(z,{alt:i,title:a,src:S.tracedSVG,style:v}),b&&y.default.createElement(g,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(z,{alt:i,title:a,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,m.default)({alt:i,title:a},S))}})))}if(p){var L=p,j=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},s);return"inherit"===s.display&&delete j.display,L.srcWebp&&L.srcSetWebp&&I()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),y.default.createElement(g,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},y.default.createElement(g,{className:(n?n:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},L.base64&&y.default.createElement(z,{alt:i,title:a,src:L.base64,style:v}),L.tracedSVG&&y.default.createElement(z,{alt:i,title:a,src:L.tracedSVG,style:v}),b&&y.default.createElement(g,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&y.default.createElement(z,{alt:i,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,m.default)({alt:i,title:a,width:L.width,height:L.height},L))}})))}return null},t}(y.default.Component);_.defaultProps={fadeIn:!0,alt:"",Tag:"div"},_.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=_},208:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(2),r=i(s),d=a(35),u=(i(d),a(303)),c=i(u),f=a(54),p=i(f),m=a(102),h=i(m),y=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:c.default.indexContainer},r.default.createElement(p.default,null,r.default.createElement("title",null,"emlylam")),r.default.createElement("div",{className:c.default.twoColumns},r.default.createElement("div",{className:c.default.row},r.default.createElement("div",{className:c.default.column+" "+c.default.left},r.default.createElement("h1",null,"Emily Lam"),r.default.createElement("p",null,"I'm currently a master's student studying Digital Business Strategy at accadis Hochschule Bad Homburg."),r.default.createElement("p",null,"Before moving to Germany, I graduated from the University of Hong Kong with a Bachelor of Business Administration, double majoring in Information Systems and Computer Science."),r.default.createElement("p",null,"In case you were wondering - I call myself 'emly' or 'emlylam' on the Internet because the username 'emilylam' is always taken. So no, I didn't ",r.default.createElement("i",null,"stylize")," it just to look cool.")),r.default.createElement("div",{className:c.default.column+" "+c.default.right,style:{padding:"30px",marginTop:"3rem"}},r.default.createElement(h.default,{sizes:this.props.data.imgEmily.sizes})))))},t}(r.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"},303:function(e,t){e.exports={indexContainer:"src-pages----index-module---indexContainer---3yIQV",twoColumns:"src-pages----index-module---twoColumns---3JCnh",row:"src-pages----index-module---row---iPaCs",column:"src-pages----index-module---column---30rVy",left:"src-pages----index-module---left---2t5Y8",right:"src-pages----index-module---right---3EWLN"}}});
//# sourceMappingURL=component---src-pages-index-js-1a081e0f8277b9fcc598.js.map