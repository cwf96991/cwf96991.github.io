"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{58931:function(e,t,l){l.d(t,{F:function(){return n},s:function(){return s}});var r=l(85893);let n=e=>{let{text:t,onClick:l,isTight:n}=e;return n=null!=n&&n?"w-full md:w-[170px]":"md:w-[202px]",(0,r.jsx)("button",{onClick:l,className:"".concat(n," group hover:text-white normal-case flex btn bg-transparent text-center font-bold text-black border  border-black  rounded-lg h-12"),children:t})},s=e=>{let{text:t,onClick:l,isTight:n}=e;return n=null!=n&&n?"w-[98%] md:w-[120px] ":"w-[127.5px] md:w-[202px]",(0,r.jsx)("button",{onClick:l,className:"".concat(n,"  group hover:bg-white hover:text-black normal-case flex btn text-center font-bold bg-black border text-white rounded-lg h-12"),children:t})}},65648:function(e,t,l){l.d(t,{sd:function(){return s.s},HO:function(){return y},a5:function(){return S},e3:function(){return w},oF:function(){return F},uo:function(){return c.Z},Fk:function(){return s.F},YX:function(){return g}});var r=l(85893),n=l(67294),s=l(58931),c=l(59570),a=l(79806),o=l(95823),i=l(88323),x=l(44815);let d="normal-case  btn btn-sm btn-ghost  rounded-full px-6 py-0 border",m="bg-gray-400 hover:text-white hover:bg-black hover:border-black text-black",u=e=>{let{text:t}=e;return(0,r.jsx)("button",{className:"ml-4 ".concat(d," ").concat(m),children:t})},h=e=>{let{previewLink:t,githubLink:l}=e;return(0,r.jsxs)("div",{className:"flex flex-col my-4 md:flex-row",children:[(0,r.jsx)("div",{className:"w-full mb-5 mr-4 ",children:t&&(0,r.jsx)(s.s,{onClick:()=>{window.open(t)},text:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(x.hD,{}),(0,r.jsx)("div",{className:"ml-2",children:"Preview"})]}),isTight:!0})}),l&&(0,r.jsx)("div",{className:"w-d",children:(0,r.jsx)(s.F,{onClick:()=>{window.open(l)},text:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(x.tu,{}),(0,r.jsx)("div",{className:"ml-2",children:"Github repo"})]}),isTight:!0})})]})},p=e=>{var t;let{work:l,callback:n}=e,{image:s,title:a,labels:x,desc:d,previewLink:m,githubLink:p}=l,b=null!==(t=l.bgColor)&&void 0!==t?t:"bg-white",w=null==m&&null==p,f=(0,o.Z)();return(0,r.jsxs)("div",{className:"card card-bordered border-white w-[330px] md:w-[380px] h-[640px] shadow-lg mr-4 mb-4",children:[(0,r.jsx)("img",{alt:a,src:s,className:"h-1/3 md:h-1/2 object-contain ".concat(b)}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("h2",{className:"card-title",children:(0,r.jsx)(c.Z,{text:a})}),(0,r.jsx)("div",{className:"flex mb-2",children:(0,r.jsx)("div",{className:"carousel ",children:x.map((e,t)=>(0,r.jsx)("div",{onClick:()=>{n(e)},className:"carousel-item",children:(0,r.jsx)(u,{text:e})},t))})}),(0,r.jsx)("div",{className:"text-left grow overflow-y-auto ".concat(w?"max-h-[280px] md:max-h-[180px]":"max-h-[120px]"),children:(0,r.jsx)(i.Z,{text:d,textLimit:w?f?220:150:null})}),(0,r.jsx)(h,{previewLink:m,githubLink:p})]})]})},b=()=>{let[e,t]=(0,n.useState)("all"),[l,s]=(0,n.useState)([]),c=(0,o.Z)(),i=l=>{let{text:n,isSelect:s,label:c}=l;return s=c.toLowerCase()===e.toLowerCase(),(0,r.jsx)("button",{onClick:()=>{t(c.toLowerCase())},className:"mr-4 ".concat(d," ").concat(null!=s&&s?"bg-black hover:text-black hover:border-black text-white":m),children:n})},x=t=>"all"==e?t:t.filter(t=>{let l=t.labels.map(e=>e.toLowerCase());return l.includes(e.toLowerCase())}),u=e=>{let t=[];e.map(e=>e.labels.map(e=>{let l=t.filter(t=>t.label.toLowerCase()===e.toLowerCase());l.length>0?l[0].count++:t.push({label:e,count:1})})),t.sort((e,t)=>t.count-e.count),s(t=[{label:"All",count:e.length},...t])};return(0,n.useEffect)(()=>{u(a.Ir)},[]),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("div",{className:"flex flex-wrap ",children:l.map((e,t)=>{let{label:l,count:n}=e;return(0,r.jsx)("div",{className:"mb-2 carousel-item",children:(0,r.jsx)(i,{text:"".concat(l," (").concat(n,")"),label:l})},t)})})}),c?(0,r.jsx)("div",{className:"flex my-4 carousel",children:x(a.Ir).map((e,l)=>(0,r.jsx)("div",{className:"carousel-item",children:(0,r.jsx)(p,{callback:e=>{t(e.toLowerCase())},work:e})},l))}):(0,r.jsx)("div",{className:"flex flex-wrap my-4",children:x(a.Ir).map((e,l)=>(0,r.jsx)(p,{callback:e=>{t(e.toLowerCase())},work:e},l))})]})};var w=b,f=l(71089);let j=e=>{let{text:t,percent:l}=e;return(0,r.jsxs)("div",{className:"font-bold text-left text-black font-italic",children:[(0,r.jsxs)("div",{className:"relative flex",children:[t,(0,r.jsxs)("div",{className:"absolute text-sm",style:{left:" ".concat(l-5,"%")},children:[l,"%"]})]}),(0,r.jsx)(f.x1,{percent:l,strokeWidth:"1",strokeColor:"black",trailColor:"#D3D3D3"})]})},v=[{text:"Flutter",percent:98},{text:"React + React Native",percent:100},{text:"Typescript",percent:100},{text:"tRPC",percent:90},{text:"Prisma",percent:90},{text:"NextAuth",percent:90},{text:"Firebase",percent:95},{text:"MongoDb",percent:85},{text:"AWS",percent:90},{text:"Java Spring",percent:85},{text:"GraphQL",percent:85},{text:"Solidity + Web3",percent:95},{text:"Web3Auth Profile",percent:100},{text:"Cross Chain Asset & NFT management",percent:90},{text:"NFT Marketplace",percent:95},{text:"UI/UX + SEO (NextJs)",percent:100},{text:"Jenkins - Test Automation",percent:100},{text:"Cucumber - BDD Tool",percent:100},{text:"Github + Jira - Project Management",percent:95},{text:"Vercel, App Store & Play Store deployments",percent:100}],N=e=>{let{text:t,percent:l}=e;return(0,r.jsx)("div",{className:"w-full pr-8 mb-4 md:w-1/2 md:pr-4",children:(0,r.jsx)(j,{text:t,percent:l})})},k=()=>(0,r.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,r.jsx)("div",{className:"".concat("text-2xl md:text-4xl font-extrabold text-center md:text-left"," "),children:"Skill"}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap",children:v.map((e,t)=>{let{text:l,percent:n}=e;return(0,r.jsx)(N,{text:l,percent:n},t)})})]});var g=k;let C=e=>{let{children:t,items:l,isHover:s}=e,[c,a]=(0,n.useState)(!1);return(0,r.jsxs)("div",{className:"dropdown ".concat(null!=s&&s?"dropdown-hover":""," m-0 dropdown-end"),children:[(0,r.jsx)("div",{tabIndex:"0",className:"p-0 m-0 bg-transparent border-0 cursor-pointer btn-sm",onClick:()=>{c&&document.activeElement.blur(),a(!c)},children:t}),(0,r.jsx)("ul",{tabIndex:"0",className:"flex p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 ",children:l})]})};var y=C;let L=e=>{let{src:t,onClick:l,tooltip:n,tooltipText:s}=e;n=null!=n?"tooltip-".concat(n):"";let c=null==s?"":"tooltip ".concat(n);return(0,r.jsx)("div",{"data-tip":s,className:c,children:(0,r.jsx)("button",{className:"p-0 btn btn-ghost btn-sm hover:bg-transparent ",children:(0,r.jsx)("img",{alt:null!=s?s:"button",className:"w-[20px]",src:t,onClick:()=>l()})})})};var S=L;let Z=e=>{let{size:t}=e;return t=null!=t?t:"h-5 w-5",(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 ".concat(t," text-white"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})};var F=Z},59570:function(e,t,l){var r=l(85893);t.Z=function(e){let{text:t,split:l}=e,n=t.split(null!=l?l:"\n").map((e,t)=>(0,r.jsxs)("span",{children:[e,(0,r.jsx)("br",{})]},t));return n}},88323:function(e,t,l){var r=l(85893),n=l(67294),s=l(95823),c=l(59570);let a=e=>{let{children:t,textLimit:l}=e,[a,o]=(0,n.useState)(!0),i=()=>{o(!a)},x=(0,s.Z)();return l=null!=l?l:x?80:100,(0,r.jsxs)("p",{className:"font-semibold text-black",children:[(0,r.jsx)(c.Z,{text:a?t.slice(0,l):t}),t.length>l&&(0,r.jsx)("span",{onClick:i,className:"read-or-hide text-blue-500 cursor-pointer ".concat(a?"overflow-y-auto":"overflow-y-scroll"),children:a?" ...Read more":"  Show less"})]})},o=e=>{let{text:t,textLimit:l}=e;return(0,r.jsx)("div",{className:"container my-5",children:(0,r.jsx)("h2",{children:(0,r.jsx)(a,{textLimit:l,children:t})})})};t.Z=o},95823:function(e,t,l){var r=l(67294);let n=()=>{let e=()=>{l(window.innerWidth<768)};(0,r.useEffect)(()=>{e(),window.addEventListener("resize",e)},[]);let[t,l]=(0,r.useState)(!1);return t};t.Z=n}}]);