(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(e,t,n){e.exports=n(6029)},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2654)}])},6029:function(e,t,n){"use strict";var o,r=(o=n(4051))&&o.__esModule?o:{default:o};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}t.default=void 0;var h=function(e){return e&&e.__esModule?e:{default:e}}(n(7294)),d=n(3794);function f(e,t,n,o,r,a,i){try{var p=e[a](i),l=p.value}catch(c){return void n(c)}p.done?t(l):Promise.resolve(l).then(o,r)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){f(a,o,r,i,p,"next",e)}function p(e){f(a,o,r,i,p,"throw",e)}i(void 0)}))}}function g(){return(g=m(r.default.mark((function e(t){var n,o,a;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,d.loadGetInitialProps(n,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(p,e);var t,n,o,r=u(p);function p(){return a(this,p),r.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return h.default.createElement(t,Object.assign({},n))}}])&&i(t.prototype,n),o&&i(t,o),p}(h.default.Component);v.origGetInitialProps=y,v.getInitialProps=y,t.default=v},2724:function(e,t,n){"use strict";n.d(t,{h:function(){return f}});var o=n(5893),r=n(9008),a=n(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},c=function(e,t,n){void 0===t&&(t=[]);var o=void 0===n?{}:n,r=o.defaultWidth,i=o.defaultHeight;return t.reduce((function(t,n,o){return t.push(a.createElement("meta",{key:"og:"+e+":0"+o,property:"og:"+e,content:n.url})),n.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+o,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+o,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+o,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:n.width.toString()})):r&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+o,property:"og:"+e+":width",content:r.toString()})),n.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(a.createElement("meta",{key:"og:"+e+":height"+o,property:"og:"+e+":height",content:i.toString()})),t}),[])},s=function(e){var t,n,o,r=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,l.templateTitle&&(p=l.templateTitle.replace(/%s/g,(function(){return p})))):e.defaultTitle&&(p=e.defaultTitle),p&&r.push(a.createElement("title",{key:"title"},p));var s,u,h=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,d=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,f=e.disableGooglebot||l.disableGooglebot||e.dangerouslyDisableGooglebot,m="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,v=g.maxSnippet,b=g.maxImagePreview,k=g.maxVideoPreview,G=g.noarchive,w=g.noimageindex,E=g.notranslate,_=g.unavailableAfter;m=(y?",nosnippet":"")+(v?",max-snippet:"+v:"")+(b?",max-image-preview:"+b:"")+(G?",noarchive":"")+(_?",unavailable_after:"+_:"")+(w?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(E?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(l.disableGooglebot=!0),h||d?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),r.push(a.createElement("meta",{key:"robots",name:"robots",content:(h?"noindex":"index")+","+(d?"nofollow":"follow")+m})),f||r.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:(h?"noindex":"index")+","+(d?"nofollow":"follow")+m}))):(r.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),f||r.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+m}))),e.description&&r.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&r.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){r.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&r.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&r.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&r.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&r.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&r.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(s=e.openGraph)?void 0:s.title)||p}));(null!=(n=e.openGraph)&&n.description||e.description)&&r.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&r.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var x=e.openGraph.type.toLowerCase();r.push(a.createElement("meta",{key:"og:type",property:"og:type",content:x})),"profile"===x&&e.openGraph.profile?(e.openGraph.profile.firstName&&r.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&r.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&r.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&r.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===x&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){r.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&r.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&r.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===x&&e.openGraph.article?(e.openGraph.article.publishedTime&&r.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&r.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&r.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){r.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&r.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==x&&"video.episode"!==x&&"video.tv_show"!==x&&"video.other"!==x||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&r.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&r.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&r.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&r.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){r.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&r.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&r.push.apply(r,c("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&r.push.apply(r,c("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.locale&&r.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&r.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&r.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,o;r.push(a.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=(o=e.keyOverride)?o:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(o=e.additionalLinkTags)&&o.length&&e.additionalLinkTags.forEach((function(e){var t;r.push(a.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),r},u=(a.Component,function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,o=void 0!==n&&n,i=e.nofollow,p=e.robotsProps,l=e.description,c=e.canonical,u=e.openGraph,h=e.facebook,d=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags,b=e.disableGooglebot;return a.createElement(r.default,null,s({title:t,noindex:o,nofollow:i,robotsProps:p,description:l,canonical:c,facebook:h,openGraph:u,additionalMetaTags:f,twitter:d,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v,disableGooglebot:b}))},t}(a.Component)),h=n(1163),d=n(1305),f=function(e){var t=(0,h.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,o.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/afavicon.ico")},"apple"),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon.ico")},"icon32"),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon.ico")},"icon16"),(0,o.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,o.jsx)(u,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:d.X.locale,site_name:d.X.site_name,images:[{url:d.X.image,width:192,height:192,alt:d.X.site_name}]}})]})}},2654:function(e,t,n){"use strict";n.r(t);var o=n(4051),r=n.n(o),a=n(5893),i=n(7544),p=(n(9885),n(15),n(8322),n(2739),n(2724)),l=n(1305);function c(e,t,n,o,r,a,i){try{var p=e[a](i),l=p.value}catch(c){return void n(c)}p.done?t(l):Promise.resolve(l).then(o,r)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}var h=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.h,{title:l.X.title,description:l.X.description,canonical:l.X.canonical}),(0,a.jsx)(t,u({},n))]})};h.getInitialProps=function(){var e,t=(e=r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.default.getInitialProps(t);case 2:return n=e.sent,e.abrupt("return",u({},n));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){c(a,o,r,i,p,"next",e)}function p(e){c(a,o,r,i,p,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),t.default=h},1305:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var o={site_name:"CWF",title:"CWF | Flutter & react Developer",description:"Forward-thinking Software Engineer with a background working in dynamic environments. Fluent in Flutter and Javascript programming languages used to develop Cross-platform Applications. A proud team player focused on achieving project objectives with speed and accuracy.",locale:"en",url:"https://cwf96991.github.io/",image:"https://cwf96991.github.io/assets/assets/cwfateLogo.png",canonical:"https://cwf96991.github.io/",ogTitle:"CWF | Flutter & react Developer",ogDesc:"Forward-thinking Software Engineer with a background working in dynamic environments. Fluent in Flutter and Javascript programming languages used to develop Cross-platform Applications. A proud team player focused on achieving project objectives with speed and accuracy."}},15:function(){},2739:function(){},8322:function(){},9885:function(){},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);