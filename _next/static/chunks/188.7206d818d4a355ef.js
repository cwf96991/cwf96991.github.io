"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{1584:function(e,t,n){n.d(t,{F:function(){return a},s:function(){return c}});var r=n(5893),a=function(e){var t=e.text,n=e.onClick,a=e.isTight;return a=null!==a&&void 0!==a&&a?"w-full md:w-[170px]":"md:w-[202px]",(0,r.jsx)("button",{onClick:n,className:"".concat(a," group hover:text-white normal-case flex btn bg-transparent text-center font-bold text-black border  border-black  rounded-lg h-12"),children:t})},c=function(e){var t=e.text,n=e.onClick,a=e.isTight;return a=null!==a&&void 0!==a&&a?"w-[98%] md:w-[120px] ":"w-[127.5px] md:w-[202px]",(0,r.jsx)("button",{onClick:n,className:"".concat(a,"  group hover:bg-white hover:text-black normal-case flex btn text-center font-bold bg-black border text-white rounded-lg h-12"),children:t})}},3123:function(e,t,n){n.d(t,{sd:function(){return c.s},e3:function(){return b},uo:function(){return s.Z},Fk:function(){return c.F},YX:function(){return k}});var r=n(5893),a=n(7294),c=n(1584),s=n(5367),l=n(4807),i=n(2632),o=function(e){var t=e.children,n=e.textLimit,c=t,l=(0,a.useState)(!0),o=l[0],x=l[1],d=(0,i.Z)();return n=null!==n&&void 0!==n?n:d?80:100,(0,r.jsxs)("p",{className:"text-black font-semibold",children:[(0,r.jsx)(s.Z,{text:o?c.slice(0,n):c}),c.length>n&&(0,r.jsx)("span",{onClick:function(){x(!o)},className:"read-or-hide text-yellow-500 cursor-pointer ".concat(o?"overflow-y-auto":"overflow-y-scroll"),children:o?" ...Read more":"  Show less"})]})},x=function(e){var t=e.text,n=e.textLimit;return(0,r.jsx)("div",{className:"container my-5",children:(0,r.jsx)("h2",{children:(0,r.jsx)(o,{textLimit:n,children:t})})})},d=n(9161);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f="normal-case  btn btn-sm btn-ghost  rounded-full px-6 py-0 border",h="bg-gray-400 hover:text-white hover:bg-black hover:border-black text-black",v=function(e){var t=e.text;return(0,r.jsx)("button",{className:"ml-4 ".concat(f," ").concat(h),children:t})},p=function(e){var t=e.previewLink,n=e.githubLink;return(0,r.jsxs)("div",{className:"flex flex-col md:flex-row my-4",children:[(0,r.jsx)("div",{className:"mr-4 w-full mb-5 ",children:t&&(0,r.jsx)(c.s,{onClick:function(){window.open(t)},text:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.hD,{}),(0,r.jsx)("div",{className:"ml-2",children:"Preview"})]}),isTight:!0})}),n&&(0,r.jsx)("div",{className:"w-d",children:(0,r.jsx)(c.F,{onClick:function(){window.open(n)},text:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.tu,{}),(0,r.jsx)("div",{className:"ml-2",children:"Github repo"})]}),isTight:!0})})]})},j=function(e){var t,n=e.work,a=n.image,c=n.title,l=n.labels,o=n.desc,d=n.previewLink,u=n.githubLink,m=null!==(t=n.bgColor)&&void 0!==t?t:"bg-white",f=null==d&&null==u,h=f?"max-h-[280px] md:max-h-[180px]":"max-h-[120px]",j=(0,i.Z)();return(0,r.jsxs)("div",{className:"card card-bordered w-[330px] md:w-[380px] h-[620px] shadow-lg mr-4 mb-4",children:[(0,r.jsx)("img",{src:a,className:"h-1/3 md:h-1/2 object-contain ".concat(m)}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title",children:(0,r.jsx)(s.Z,{text:c})}),(0,r.jsx)("div",{className:"flex mb-2",children:(0,r.jsx)("div",{className:"carousel ",children:l.map((function(e,t){return(0,r.jsx)("div",{className:"carousel-item",children:(0,r.jsx)(v,{text:e})},t)}))})}),(0,r.jsx)("div",{className:"text-left grow overflow-y-auto ".concat(h),children:(0,r.jsx)(x,{text:o,textLimit:f?j?220:150:null})}),(0,r.jsx)(p,{previewLink:d,githubLink:u})]})]})},b=function(){var e=(0,a.useState)("all"),t=e[0],n=e[1],c=(0,a.useState)([]),s=c[0],o=c[1],x=(0,i.Z)(),d=function(e){var a=e.text,c=e.isSelect,s=e.label;return c=s.toLowerCase()===t.toLowerCase(),(0,r.jsx)("button",{onClick:function(){n(s.toLowerCase())},className:"mr-4 ".concat(f," ").concat(null!==c&&void 0!==c&&c?"bg-black hover:text-black hover:border-black text-white":h),children:a})},u=function(e){return"all"==t?e:e.filter((function(e){return e.labels.map((function(e){return e.toLowerCase()})).includes(t.toLowerCase())}))};return(0,a.useEffect)((function(){!function(e){var t=[];e.map((function(e){return e.labels.map((function(e){var n=t.filter((function(t){return t.label.toLowerCase()===e.toLowerCase()}));n.length>0?n[0].count++:t.push({label:e,count:1})}))})),t.sort((function(e,t){return t.count-e.count})),t=[{label:"All",count:e.length}].concat(m(t)),o(t)}(l.Ir)}),[]),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("div",{className:"carousel ",children:s.map((function(e,t){var n=e.label,a=e.count;return(0,r.jsx)("div",{className:"carousel-item",children:(0,r.jsx)(d,{text:"".concat(n," (").concat(a,")"),label:n})},t)}))})}),x?(0,r.jsx)("div",{className:"flex my-4 carousel",children:u(l.Ir).map((function(e,t){return(0,r.jsx)("div",{className:"carousel-item",children:(0,r.jsx)(j,{work:e})},t)}))}):(0,r.jsx)("div",{className:"flex flex-wrap my-4",children:u(l.Ir).map((function(e,t){return(0,r.jsx)(j,{work:e},t)}))})]})},w=n(1089),y=function(e){var t=e.text,n=e.percent;return(0,r.jsxs)("div",{className:" text-left text-black font-bold font-italic",children:[(0,r.jsxs)("div",{className:"flex relative",children:[t,(0,r.jsxs)("div",{className:"absolute text-sm",style:{left:" ".concat(n-5,"%")},children:[n,"%"]})]}),(0,r.jsx)(w.x1,{percent:n,strokeWidth:"1",strokeColor:"black",trailColor:"#D3D3D3"})]})},N=[{text:"Flutter",percent:98},{text:"React + React Native",percent:90},{text:"Firebase",percent:95},{text:"MongoDb",percent:85},{text:"AWS",percent:90},{text:"GraphQL",percent:85},{text:"Solidity + Web3",percent:95},{text:"NFT Marketplace",percent:80},{text:"UI/UX + SEO (NextJs)",percent:90},{text:"Jenkins - Test Automation",percent:100},{text:"Github + Jira - Project Management",percent:95},{text:"Vercel App Store & Play Store deployments",percent:100}],g=function(e){var t=e.text,n=e.percent;return(0,r.jsx)("div",{className:"w-full md:w-1/2 pr-8 md:pr-4 mb-4",children:(0,r.jsx)(y,{text:t,percent:n})})},k=function(){return(0,r.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,r.jsx)("div",{className:"".concat("text-2xl md:text-4xl font-extrabold text-center md:text-left"," "),children:"Skill"}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:N.map((function(e,t){var n=e.text,a=e.percent;return(0,r.jsx)(g,{text:n,percent:a},t)}))})]})}},1188:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),a=n(5670),c=n(7294);async function s(e,...t){for(const n of t)switch(typeof n){case"string":await l(e,n);break;case"number":await i(n);break;case"function":await n(e,...t);break;default:await n}}async function l(e,t){const n=function(e,[...t]){return[...e,NaN].findIndex(((e,n)=>t[n]!==e))}(e.textContent,t);await async function(e,t,n=60){for(const r of function*(e){for(const t of e)yield e=>requestAnimationFrame((()=>e.textContent=t))}(t))r(e),await i(n+n*(Math.random()-.5))}(e,[...x(e.textContent,n),...o(t,n)])}async function i(e){await new Promise((t=>setTimeout(t,e)))}function*o([...e],t=0,n=e.length){for(;t<n;)yield e.slice(0,++t).join("")}function*x([...e],t=0,n=e.length){for(;n>t;)yield e.slice(0,--n).join("")}var d="styles_type__2Teeh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles_type__2Teeh::after {\r\n  content: '|';\r\n  animation: styles_cursor__14ty0 1.1s infinite step-start;\r\n}\r\n\r\n@keyframes styles_cursor__14ty0 {\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n}\r\n");var u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},m=(0,c.memo)((function(e){var t=e.sequence,n=e.repeat,r=e.className,a=e.wrapper,l=void 0===a?"p":a,i=e.cursor,o=void 0===i||i,x=(0,c.useRef)(null),m=d,f=void 0;f=r&&r.length>0?o?m+" "+r:r:o?m:"",(0,c.useEffect)((function(){n===1/0?s.apply(void 0,[x.current].concat(u(t),[s])):"number"===typeof n?s.apply(void 0,[x.current].concat(u(Array(n).fill(t).flat()))):s.apply(void 0,[x.current].concat(u(t)))}));var h=l;return c.createElement(h,{className:f,ref:x})})),f=n(4807),h=n(2632),v=n(7735),p=n(3123),j=function(){var e=(0,h.Z)(),t=(0,c.useRef)(null),n="text-2xl md:text-4xl font-extrabold text-center ";return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("div",{className:"flex jusitfy-center items-center mx-4 md:m-16 md:h-screen",children:[!e&&(0,r.jsx)(v.n,{animateIn:"animate__fadeInLeft",className:"w-[40%]",children:(0,r.jsx)("img",{className:"w-1/2 mx-auto",src:"/assets/icon.svg"})}),(0,r.jsxs)("div",{className:"flex flex-col w-full md:w-[60%] md:ml-8",children:[e&&(0,r.jsx)("img",{className:"px-20 h-[300px] my-10",src:"/assets/icon.svg"}),(0,r.jsxs)(v.n,{animateIn:e?"animate__fadeIn":"animate__fadeInRight",children:[(0,r.jsxs)("div",{className:n,children:["Hi, I'm Francis and I'm",(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex ",children:["a",(0,r.jsx)("div",{className:"bg-black text-white ml-2 md:ml-4",children:(0,r.jsx)(m,{cursor:!0,sequence:f.AQ,align:"center",className:"inline md:text-4xl text-xl grow",repeat:1/0})})]})]}),(0,r.jsx)("div",{className:"max-w-lg mt-4 text-center mx-auto",children:f.C8}),(0,r.jsxs)("div",{className:"flex mt-8 justify-center",children:[(0,r.jsx)("div",{className:"mr-4 ",children:(0,r.jsx)(p.sd,{onClick:function(){location.href="/resume/#contact"},text:"Contact me"})}),(0,r.jsx)(p.Fk,{onClick:function(){t.current.scrollIntoView({behavior:"smooth"})},text:"Check my work"})]})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col mt-4 md:mt-0 text-center mx-4 md:mx-16",children:[(0,r.jsxs)(v.n,{animateIn:"animate__fadeIn",children:[(0,r.jsx)("div",{ref:t,className:"".concat(n," "),children:"Work"}),(0,r.jsx)("div",{className:"text-gray-500 mt-4",children:(0,r.jsx)(p.uo,{text:"Check my commercial and non commercial projects.\nIf you have any questions feel free to ask me for more information. "})}),(0,r.jsx)("div",{children:(0,r.jsx)(p.e3,{})})]}),(0,r.jsx)(v.n,{animateIn:"animate__fadeIn",children:(0,r.jsx)(p.YX,{})})]})]})}}}]);