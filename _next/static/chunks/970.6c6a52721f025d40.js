"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{60970:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),a=n(96091),s=n(67294);function c(e,t,n,r){return new(n||(n=Promise))(function(a,s){function c(e){try{o(r.next(e))}catch(t){s(t)}}function i(e){try{o(r.throw(e))}catch(t){s(t)}}function o(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(c,i)}o((r=r.apply(e,t||[])).next())})}function i(e,t){var n,r,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,r=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){c=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){c.label=s[1];break}if(6===s[0]&&c.label<a[1]){c.label=a[1],a=s;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(s);break}a[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(i){s=[6,i],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}function o(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,s=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)c.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(a)throw a.error}}return c}function u(e,t,n){if(n||2==arguments.length)for(var r,a=0,s=t.length;a<s;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function f(e,t,n,r){for(var a=[],s=4;s<arguments.length;s++)a[s-4]=arguments[s];return c(this,void 0,void 0,function(){var s,f,h,m,x;return i(this,function(v){switch(v.label){case 0:v.trys.push([0,12,13,14]),f=(s=o(a)).next(),v.label=1;case 1:if(f.done)return[3,11];switch(typeof(h=f.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,n,r,a){return c(this,void 0,void 0,function(){var s;return i(this,function(f){switch(f.label){case 0:var h,m;return h=e.textContent,m=l(t).slice(0),s=u(u([],l(h),!1),[NaN],!1).findIndex(function(e,t){return m[t]!==e}),[4,function(e,t,n,r,a){return c(this,void 0,void 0,function(){var s,c,l,u,f,h,m,x,v,p,y;return i(this,function(b){switch(b.label){case 0:if(s=t,a){for(c=0,l=1;l<t.length;l++)if(u=t[l-1],(f=t[l]).length>u.length||""===f){c=l;break}s=t.slice(c,t.length)}b.label=1;case 1:b.trys.push([1,6,7,8]),m=(h=o(function(e){var t,n,r,a,s;return i(this,function(c){switch(c.label){case 0:t=function(e){return i(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){return""===e||t.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},c.label=1;case 1:c.trys.push([1,6,7,8]),r=(n=o(e)).next(),c.label=2;case 2:return r.done?[3,5]:[5,t(r.value)];case 3:c.sent(),c.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return a={error:c.sent()},[3,8];case 7:try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(a)throw a.error}return[7];case 8:return[2]}})}(s))).next(),b.label=2;case 2:return m.done?[3,5]:(v="WRITING"===(x=m.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),x.op(e),[4,d(v)]);case 3:b.sent(),b.label=4;case 4:return m=h.next(),[3,2];case 5:return[3,8];case 6:return p={error:b.sent()},[3,8];case 7:try{m&&!m.done&&(y=h.return)&&y.call(h)}finally{if(p)throw p.error}return[7];case 8:return[2]}})})}(e,u(u([],l(function(e,t,n){var r=l(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),i(this,function(e){switch(e.label){case 0:return n>t?[4,r.slice(0,--n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(e.textContent,s)),!1),l(function(e,t,n){var r=l(e).slice(0);return void 0===t&&(t=0),void 0===n&&(n=r.length),i(this,function(e){switch(e.label){case 0:return t<n?[4,r.slice(0,++t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}})}(t,s)),!1),n,r,a)];case 1:return f.sent(),[2]}})})}(e,h,t,n,r)];case 3:case 5:case 7:return v.sent(),[3,10];case 4:return[4,d(h)];case 6:return[4,h.apply(void 0,u([e,t,n,r],l(a),!1))];case 8:return[4,h];case 9:v.sent(),v.label=10;case 10:return f=s.next(),[3,1];case 11:return[3,14];case 12:return m={error:v.sent()},[3,14];case 13:try{f&&!f.done&&(x=s.return)&&x.call(s)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function d(e){return c(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var h=(0,s.memo)(function(e){var t=e.sequence,n=e.repeat,r=e.className,a=e.speed,c=void 0===a?40:a,i=e.deletionSpeed,o=e.omitDeletionAnimation,d=void 0!==o&&o,h=e.wrapper,m=e.cursor,x=void 0===m||m,v=e.style;c=Math.abs(c-100),i=i?Math.abs(i-100):c;var p,y,b,j,w,g,N=(0,s.useRef)(null),_="index-module_type__E-SaG";return p=r&&r.length>0?x?"".concat(_," ").concat(r):r:x?_:"",y=(0,s.useRef)(function(){return n===1/0?f.apply(void 0,u(u([N.current,c,i,d],l(t),!1),[f],!1)):"number"==typeof n?f.apply(void 0,u([N.current,c,i,d],l(Array(1+n).fill(t).flat()),!1)):f.apply(void 0,u([N.current,c,i,d],l(t),!1)),function(){N.current}}),b=(0,s.useRef)(),j=(0,s.useRef)(!1),w=(0,s.useRef)(!1),g=l((0,s.useState)(0),2)[1],j.current&&(w.current=!0),(0,s.useEffect)(function(){return j.current||(b.current=y.current(),j.current=!0),g(function(e){return e+1}),function(){w.current&&b.current&&b.current()}},[]),s.createElement(void 0===h?"div":h,{style:v,className:p,ref:N})},function(e,t){return!0}),m=n(79806),x=n(95823),v=n(77735),p=n(11163),y=n.n(p),b=n(65648);let j=s.lazy(()=>Promise.all([n.e(918),n.e(849)]).then(n.bind(n,9849))),w=()=>(0,r.jsx)("img",{alt:"icon",className:"w-1/2 mx-auto py-auto h-full",src:"/assets/icon.svg"}),g=()=>{let e=(0,x.Z)(),t=(0,s.useRef)(null),n="text-2xl md:text-4xl font-extrabold text-center ";return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("div",{className:"jusitfy-center mx-4 flex items-center md:m-16 md:h-screen",children:[!e&&(0,r.jsx)("div",{animateIn:"animate__fadeInLeft",className:"h-full w-[40%]",children:(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(w,{}),children:(0,r.jsx)("div",{className:"h-full",children:(0,r.jsx)(j,{scene:"https://prod.spline.design/64VQaZi0kDzAgcnx/scene.splinecode"})})})}),(0,r.jsxs)("div",{className:"flex w-full flex-col md:ml-8 md:w-[60%]",children:[e&&(0,r.jsx)("img",{alt:"icon",className:"my-10 h-[300px] px-20",src:"/assets/icon.svg"}),(0,r.jsxs)("div",{animateIn:e?"animate__fadeIn":"animate__fadeInRight",children:[(0,r.jsxs)("div",{className:n,children:["Hi, I'm Francis and I'm",(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex ",children:["a",(0,r.jsx)("div",{className:"ml-2 bg-black text-white md:ml-4",children:(0,r.jsx)(h,{cursor:!0,sequence:m.AQ,align:"center",className:"inline grow text-xl md:text-4xl",repeat:1/0})})]})]}),(0,r.jsx)("div",{className:"mx-auto mt-4 max-w-lg text-center",children:m.C8}),(0,r.jsxs)("div",{className:"mt-8 flex justify-center",children:[(0,r.jsx)("div",{className:"mr-4 ",children:(0,r.jsx)(b.sd,{onClick:()=>{y().push({pathname:"/resume",query:{to:"contact"}})},text:"Contact me"})}),(0,r.jsx)(b.Fk,{onClick:()=>{t.current.scrollIntoView({behavior:"smooth"})},text:"Check my work"})]})]})]})]}),(0,r.jsxs)("div",{className:"mx-4 mt-4 flex flex-col text-center md:mx-16 md:mt-0",children:[(0,r.jsxs)(v.n,{animateIn:"animate__fadeIn",children:[(0,r.jsx)("div",{ref:t,className:"".concat(n," "),children:"Work"}),(0,r.jsx)("div",{className:"mt-4 text-gray-500",children:(0,r.jsx)(b.uo,{text:"Check my commercial and non commercial projects.\nIf you have any questions feel free to ask me for more information. "})}),(0,r.jsx)("div",{children:(0,r.jsx)(b.e3,{})})]}),(0,r.jsx)(v.n,{animateIn:"animate__fadeIn",children:(0,r.jsx)(b.YX,{})}),(0,r.jsx)("div",{className:"mb-4 flex justify-center",children:(0,r.jsx)(b.sd,{onClick:()=>{window.open("/chatRoom")},text:"Join our Real time chat room!",isTight:e})})]})]})};var N=g}}]);