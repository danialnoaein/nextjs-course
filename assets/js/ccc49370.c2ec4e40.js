"use strict";(self.webpackChunknextjs_course=self.webpackChunknextjs_course||[]).push([[6103],{5203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(7294);var s=t(6010),a=t(1944),i=t(5281),o=t(9460),l=t(1460),r=t(390),c=t(5999),d=t(2244),u=t(5893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,o.C)(),{title:t,description:s,date:i,tags:l,authors:r,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.d,{title:t,description:s,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:i}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=t(9407),f=t(2212);function v(e){let{sidebar:n,children:t}=e;const{metadata:s,toc:a}=(0,o.C)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:g}=s,{hide_table_of_contents:v,toc_min_heading_level:x,toc_max_heading_level:p}=d;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!v&&a.length>0?(0,u.jsx)(h.Z,{toc:a,minHeadingLevel:x,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(r.Z,{children:t}),(i||c)&&(0,u.jsx)(m,{nextItem:i,prevItem:c})]})}function x(e){const n=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var s=t(6010),a=t(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(5893);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(a.Z,{...t,linkClassName:l,linkActiveClassName:r})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>f});var s=t(7294),a=t(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(9960),m=t(5893);function g(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const h=s.memo(g);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,a.L)(),v=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:x}}),[l,r,v,x])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:l,...g})}},2212:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var s=t(6010),a=t(5999),i=t(5742),o=t(5893);function l(){return(0,o.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){let{className:n}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);