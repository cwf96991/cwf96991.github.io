(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{3162:function(e,t,n){var i,s,l;s=[],void 0===(l="function"===typeof(i=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function i(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){o(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function s(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(i){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,n){var c=a.URL||a.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener","string"==typeof e?(o.href=e,o.origin===location.origin?l(o):s(o.href)?i(e,t,n):l(o,o.target="_blank")):(o.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(o.href)}),4e4),setTimeout((function(){l(o)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(s(e))i(e,n,a);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){l(c)}))}}:function(e,t,n,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return i(e,t,n);var l="application/octet-stream"===e.type,o=/constructor/i.test(a.HTMLElement)||a.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||l&&o||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=r?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},d.readAsDataURL(e)}else{var x=a.URL||a.webkitURL,m=x.createObjectURL(e);s?s.location=m:location.href=m,s=null,setTimeout((function(){x.revokeObjectURL(m)}),4e4)}});a.saveAs=o.saveAs=o,e.exports=o})?i.apply(t,s):i)||(e.exports=l)},2416:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return n(7115)}])},7115:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var i=n(5893),s=n(5670),l=n(1584),a=n(4807),c=n(9161),o=n(2632),r=n(231),d=n(7294),x=n(3162),m="text-2xl md:text-4xl font-extrabold text-center ",u="my-4 bg-black text-extrabold text-white text-2xl",v=function(e){var t=e.title,n=e.desc,s=e.time;return(0,i.jsxs)("div",{className:"flex flex-col items-center mb-5",children:[(0,i.jsx)("div",{className:"text-black text-extrabold text-xl",children:t}),(0,i.jsx)("div",{className:"",children:n}),(0,i.jsx)("div",{className:"text-gray-500",children:s})]})},f=[{title:"Intern React Native Engineer",company:"Flow Entertainment Limited",time:"Jun 2020 - Aug 2020"},{title:"Flutter Engineer",company:"Flowsophic Limited",time:"Oct 2020 - Jan 2021"},{title:"Flutter Engineer",company:"Sonivy Technology Limited",time:"Jan 2021 - Now"}],h=function(){var e=(0,o.Z)(),t=(0,d.useRef)(null);return(0,d.useEffect)((function(){window.location.href.includes("#contact")&&t.current.scrollIntoView({behavior:"smooth"})}),[]),(0,i.jsx)(s.Z,{title:"Resume",children:(0,i.jsxs)("div",{className:"flex flex-col items-center px-4",children:[(0,i.jsx)("div",{className:m,children:"Resume"}),(0,i.jsx)("div",{className:"max-w-lg mt-4 text-center ",children:a.GF}),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsx)("div",{className:u,children:"Education"}),(0,i.jsx)(v,{title:"The University Of Hong Kong",desc:"Computer Science",time:"2018 - 2022"}),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsx)("div",{className:u,children:"Work Experience"}),f.map((function(e,t){var n=e.title,s=e.company,l=e.time;return(0,i.jsx)(v,{title:n,desc:s,time:l},t)})),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsx)("div",{className:u,children:"Skill and Tools"}),(0,i.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 mx-4 md:mx-16",children:[(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{children:"Flutter"}),(0,i.jsx)("div",{children:"React Native"}),(0,i.jsx)("div",{children:"NextJs"}),(0,i.jsx)("div",{children:"ReactJs"}),(0,i.jsx)("div",{children:"HTML&CSS"})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{children:"NodeJs"}),(0,i.jsx)("div",{children:"Firebase"}),(0,i.jsx)("div",{children:"AWS"}),(0,i.jsx)("div",{children:"Google Cloud Platform"}),(0,i.jsx)("div",{children:"MongoDB"}),(0,i.jsx)("div",{children:"MySQL"}),(0,i.jsx)("div",{children:"GraphQL"}),(0,i.jsx)("div",{children:"PHP"})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{children:"Solidity"}),(0,i.jsx)("div",{children:"Web3"}),(0,i.jsx)("div",{children:"SEO"}),(0,i.jsx)("div",{children:"NFT Marketplace"}),(0,i.jsx)("div",{children:"NFT Launch Pad"})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{children:"GIT"}),(0,i.jsx)("div",{children:"Jira"}),(0,i.jsx)("div",{children:"Jenkins - Test Automation"}),(0,i.jsx)("div",{children:"Unit Testing"})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{children:"AWS Amplify"}),(0,i.jsx)("div",{children:"Vercel"}),(0,i.jsxs)("div",{children:["App Store &",(0,i.jsx)("br",{})," Play Store Deployments"]})]})]}),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsx)("div",{children:"Download my resume as PDF file."}),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsx)(l.s,{onClick:function(){x.saveAs("/assets/cv.pdf","cwf_CV.pdf")},text:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"w-[30px] h-[30px]",children:(0,i.jsx)(c.QC,{})}),(0,i.jsx)("div",{className:"ml-2 ",children:"Download (229KB)"})]}),isTight:e}),(0,i.jsx)("div",{className:"mb-10"}),(0,i.jsx)("div",{ref:t,className:m,children:"Contact"}),(0,i.jsx)("div",{className:" mt-4 text-center ",children:(0,i.jsx)(r.uo,{text:a.By})}),(0,i.jsx)("div",{className:"mb-5"}),(0,i.jsxs)("div",{className:"form-control w-4/5",children:[(0,i.jsx)("input",{type:"text",placeholder:"Enter your name",className:" input input-bordered bg-gray-100 border-black text-gray-700"}),(0,i.jsx)("textarea",{className:"my-5 textarea textarea-bordered h-24 bg-gray-100 border-black text-gray-700",placeholder:"Tell me"})]}),(0,i.jsx)(l.s,{onClick:function(){window.open("mailto:cwfflutter@gmail.com?subject=I am interested in &body=Testing")},text:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("div",{className:"w-[30px] h-[30px]",children:(0,i.jsx)(c.bf,{})}),(0,i.jsx)("div",{className:"ml-2 ",children:"Send"})]}),isTight:e}),(0,i.jsx)("div",{className:"mb-5"})]})})},j=function(){return(0,i.jsx)(h,{})}}},function(e){e.O(0,[774,41,670,231,888,179],(function(){return t=2416,e(e.s=t);var t}));var t=e.O();_N_E=t}]);