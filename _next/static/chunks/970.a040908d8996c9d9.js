"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{60970:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(85893),a=n(96091),c=n(67294);function i(e,t,n,r){return new(n||(n=Promise))(function(a,c){function i(e){try{o(r.next(e))}catch(t){c(t)}}function s(e){try{o(r.throw(e))}catch(t){c(t)}}function o(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,s)}o((r=r.apply(e,t||[])).next())})}function s(e,t){var n,r,a,c,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(s){c=[6,s],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,c=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=c.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=c.return)&&n.call(c)}finally{if(a)throw a.error}}return i}function u(e,t,n){if(n||2==arguments.length)for(var r,a=0,c=t.length;a<c;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function f(e,t,n,r){for(var a=[],c=4;c<arguments.length;c++)a[c-4]=arguments[c];return i(this,void 0,void 0,function(){var c,f,m,h,x;return s(this,function(v){switch(v.label){case 0:v.trys.push([0,12,13,14]),f=(c=o(a)).next(),v.label=1;case 1:if(f.done)return[3,11];switch(typeof(m=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,n,r,a){return i(this,void 0,void 0,function(){var c;return s(this,function(f){switch(f.label){case 0:var m,h;return m=e.textContent,h=l(t).slice(0),c=u(u([],l(m),!1),[NaN],!1).findIndex(function(e,t){return h[t]!==e}),[4,function(e,t,n,r,a){return i(this,void 0,void 0,function(){var c,i,l,u,f,m,h,x,v,p,y;return s(this,function(b){switch(b.label){case 0:if(c=t,a){for(i=0,l=1;l<t.length;l++)if(u=t[l-1],(f=t[l]).length>u.length||""===f){i=l;break}c=t.slice(i,t.length)}b.label=1;case 1:b.trys.push([1,6,7,8]),h=(m=o(function(e){var t,n,r,a,c;return s(this,function(i){switch(i.label){case 0:t=function(e){return s(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},i.label=1;case 1:i.trys.push([1,6,7,8]),r=(n=o(e)).next(),i.label=2;case 2:return r.done?[3,5]:[5,t(r.value)];case 3:i.sent(),i.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return a={error:i.sent()},[3,8];case 7:try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(a)throw a.error}return[7];case 8:return[2]}})}(c))).next(),b.label=2;case 2:return h.done?[3,5]:(v="WRITING"===(x=h.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),x.op(e),[4,d(v)]);case 3:b.sent(),b.label=4;case 4:return h=m.next(),[3,2];case 5:return[3,8];case 6:return p={error:b.sent()},[3,8];case 7:try{h&&!h.done&&(y=m.return)&&y.call(m)}finally{if(p)throw p.error}return[7];case 8:return[2]}})})}(e,u(u([],l(function(e,t,n){var r=l(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),s(this,function(e){switch(e.label){case 0:return n>t?[4,r.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(e.textContent,c)),!1),l(function(e,t,n){var r=l(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),s(this,function(e){switch(e.label){case 0:return t<n?[4,r.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(t,c)),!1),n,r,a)];case 1:return f.sent(),[2]}})})}(e,m,t,n,r)];case 3:case 5:case 7:return v.sent(),[3,10];case 4:return[4,d(m)];case 6:return[4,m.apply(void 0,u([e,t,n,r],l(a),!1))];case 8:return[4,m];case 9:v.sent(),v.label=10;case 10:return f=c.next(),[3,1];case 11:return[3,14];case 12:return h={error:v.sent()},[3,14];case 13:try{f&&!f.done&&(x=c.return)&&x.call(c)}finally{if(h)throw h.error}return[7];case 14:return[2]}})})}function d(e){return i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var m=(0,c.memo)(function(e){var t=e.sequence,n=e.repeat,r=e.className,a=e.speed,i=void 0===a?40:a,s=e.deletionSpeed,o=e.omitDeletionAnimation,d=void 0!==o&&o,m=e.wrapper,h=e.cursor,x=void 0===h||h,v=e.style;i=Math.abs(i-100),s=s?Math.abs(s-100):i;var p,y,b,w,j,g,N=(0,c.useRef)(null),_="index-module_type__E-SaG";return p=r&&r.length>0?x?"".concat(_," ").concat(r):r:x?_:"",y=(0,c.useRef)(function(){return n===1/0?f.apply(void 0,u(u([N.current,i,s,d],l(t),!1),[f],!1)):"number"==typeof n?f.apply(void 0,u([N.current,i,s,d],l(Array(1+n).fill(t).flat()),!1)):f.apply(void 0,u([N.current,i,s,d],l(t),!1)),function(){N.current}}),b=(0,c.useRef)(),w=(0,c.useRef)(!1),j=(0,c.useRef)(!1),g=l((0,c.useState)(0),2)[1],w.current&&(j.current=!0),(0,c.useEffect)(function(){return w.current||(b.current=y.current(),w.current=!0),g(function(e){return e+1}),function(){j.current&&b.current&&b.current()}},[]),c.createElement(void 0===m?"div":m,{style:v,className:p,ref:N})},function(e,t){return!0}),h=n(79806),x=n(95823),v=n(77735),p=n(11163),y=n.n(p),b=n(65648);let w=()=>{let e=(0,x.Z)(),t=(0,c.useRef)(null),n="text-2xl md:text-4xl font-extrabold text-center ";return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("div",{className:"flex items-center mx-4 jusitfy-center md:m-16 md:h-screen",children:[!e&&(0,r.jsx)("div",{animateIn:"animate__fadeInLeft",className:"w-[40%]",children:(0,r.jsx)("img",{alt:"icon",className:"w-1/2 mx-auto",src:"/assets/icon.svg"})}),(0,r.jsxs)("div",{className:"flex flex-col w-full md:w-[60%] md:ml-8",children:[e&&(0,r.jsx)("img",{alt:"icon",className:"px-20 h-[300px] my-10",src:"/assets/icon.svg"}),(0,r.jsxs)("div",{animateIn:e?"animate__fadeIn":"animate__fadeInRight",children:[(0,r.jsxs)("div",{className:n,children:["Hi, I'm Francis and I'm",(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex ",children:["a",(0,r.jsx)("div",{className:"ml-2 text-white bg-black md:ml-4",children:(0,r.jsx)(m,{cursor:!0,sequence:h.AQ,align:"center",className:"inline text-xl md:text-4xl grow",repeat:1/0})})]})]}),(0,r.jsx)("div",{className:"max-w-lg mx-auto mt-4 text-center",children:h.C8}),(0,r.jsxs)("div",{className:"flex justify-center mt-8",children:[(0,r.jsx)("div",{className:"mr-4 ",children:(0,r.jsx)(b.sd,{onClick:()=>{y().push({pathname:"/resume",query:{to:"contact"}})},text:"Contact me"})}),(0,r.jsx)(b.Fk,{onClick:()=>{t.current.scrollIntoView({behavior:"smooth"})},text:"Check my work"})]})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col mx-4 mt-4 text-center md:mt-0 md:mx-16",children:[(0,r.jsxs)(v.n,{animateIn:"animate__fadeIn",children:[(0,r.jsx)("div",{ref:t,className:"".concat(n," "),children:"Work"}),(0,r.jsx)("div",{className:"mt-4 text-gray-500",children:(0,r.jsx)(b.uo,{text:"Check my commercial and non commercial projects.\nIf you have any questions feel free to ask me for more information. "})}),(0,r.jsx)("div",{children:(0,r.jsx)(b.e3,{})})]}),(0,r.jsx)(v.n,{animateIn:"animate__fadeIn",children:(0,r.jsx)(b.YX,{})}),(0,r.jsx)("div",{className:"flex justify-center mb-4",children:(0,r.jsx)(b.sd,{onClick:()=>{window.open("/chatRoom")},text:"Join our Real time chat room!",isTight:e})})]})]})};var j=w}}]);