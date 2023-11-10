"use strict";(self.webpackChunknextjs_course=self.webpackChunknextjs_course||[]).push([[3626],{8270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(5893),s=n(1151);const r={},o="What is Next.js: An Introduction to Next.js",a={id:"why/1-4 Introduction to Nextjs",title:"What is Next.js: An Introduction to Next.js",description:"Next.js is a popular framework for building modern web applications, focused on React-based applications. It was created by Vercel, formerly known as Zeit, and has gained significant traction in the web development community. Next.js simplifies the process of building robust, performant web applications by providing a set of powerful features and conventions.",source:"@site/docs/1-why/1-4 Introduction to Nextjs.md",sourceDirName:"1-why",slug:"/why/1-4 Introduction to Nextjs",permalink:"/nextjs-course/docs/why/1-4 Introduction to Nextjs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-why/1-4 Introduction to Nextjs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Issues with React",permalink:"/nextjs-course/docs/why/1-3 Issues with React"},next:{title:"How Next.js Works Behind the Scene?",permalink:"/nextjs-course/docs/why/1-5 How Nextjs works"}},l={},c=[{value:"Next.js core features",id:"nextjs-core-features",level:2},{value:"Different Rendering Solutions",id:"different-rendering-solutions",level:3},{value:"Server Rendering (SSR)",id:"server-rendering-ssr",level:4},{value:"Pre-rendering (Static site generation aka SSG)",id:"pre-rendering-static-site-generation-aka-ssg",level:4},{value:"Incremental static regeneration (ISR)",id:"incremental-static-regeneration-isr",level:4},{value:"App Router (React Server Components)",id:"app-router-react-server-components",level:4},{value:"File-Based Routing",id:"file-based-routing",level:3},{value:"Automatic Code Splitting",id:"automatic-code-splitting",level:3},{value:"Resource Optimization",id:"resource-optimization",level:3},{value:"Developing APIs",id:"developing-apis",level:3},{value:"Strong Ecosystem &amp; Extensibility",id:"strong-ecosystem--extensibility",level:3},{value:"In Industry",id:"in-industry",level:2}];function d(e){const t={br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"what-is-nextjs-an-introduction-to-nextjs",children:"What is Next.js: An Introduction to Next.js"}),"\n",(0,i.jsx)(t.p,{children:"Next.js is a popular framework for building modern web applications, focused on React-based applications. It was created by Vercel, formerly known as Zeit, and has gained significant traction in the web development community. Next.js simplifies the process of building robust, performant web applications by providing a set of powerful features and conventions."}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will explore the fundamental concepts of Next.js and why it is a valuable tool for web development. We will discuss its key features, benefits, and when you should consider using Next.js in your projects."}),"\n",(0,i.jsx)(t.h2,{id:"nextjs-core-features",children:"Next.js core features"}),"\n",(0,i.jsx)(t.p,{children:"Next.js is an open-source JavaScript framework that is built on top of React. It was designed to address many of the challenges and complexities associated with building modern web applications. Here are some of the key aspects that make Next.js stand out:"}),"\n",(0,i.jsx)(t.h3,{id:"different-rendering-solutions",children:"Different Rendering Solutions"}),"\n",(0,i.jsx)(t.p,{children:"Next.js offers different ways to render pages and components. Here is a walkthrough of each:"}),"\n",(0,i.jsx)(t.h4,{id:"server-rendering-ssr",children:"Server Rendering (SSR)"}),"\n",(0,i.jsx)(t.p,{children:"SSR allows Next.js to render requested React application page on the server and then send it to the client as HTML. This can improve performance and SEO."}),"\n",(0,i.jsx)(t.h4,{id:"pre-rendering-static-site-generation-aka-ssg",children:"Pre-rendering (Static site generation aka SSG)"}),"\n",(0,i.jsx)(t.p,{children:"SSG allows Next.js to generate static HTML files from React applications at build time. These files can then be served directly to users without the need for a server. This can further improve performance."}),"\n",(0,i.jsx)(t.h4,{id:"incremental-static-regeneration-isr",children:"Incremental static regeneration (ISR)"}),"\n",(0,i.jsxs)(t.p,{children:["ISR is a technique that combines the benefits of SSR and SSG. With ISR, static HTML files are generated ",(0,i.jsx)(t.strong,{children:"for pages that do not change frequently"}),", while pages that change frequently are rendered on the server. This allows Next.js to provide the best of both worlds: the performance of static HTML files with the dynamism of server-rendered applications."]}),"\n",(0,i.jsx)(t.h4,{id:"app-router-react-server-components",children:"App Router (React Server Components)"}),"\n",(0,i.jsx)(t.p,{children:"The Next.js App Router is a powerful tool that can be used to improve the performance, scalability, SEO, and flexibility of your Next.js applications. It is built on top of React Server Components, which allows you to pre-render routes and their associated components on the server without adding extra size of the server components to the client bundle."}),"\n",(0,i.jsx)(t.h3,{id:"file-based-routing",children:"File-Based Routing"}),"\n",(0,i.jsx)(t.p,{children:"Next.js provides a simple and intuitive routing system that is based on the file structure of your project. Each page in your application corresponds to a file in the pages or app directory. This approach makes it easy to create new routes and manage your application's navigation."}),"\n",(0,i.jsx)(t.h3,{id:"automatic-code-splitting",children:"Automatic Code Splitting"}),"\n",(0,i.jsx)(t.p,{children:"Code splitting is essential for optimizing the performance of web applications. Next.js takes care of code splitting automatically. It only loads the JavaScript necessary for the current page, reducing initial page load times and improving the overall user experience."}),"\n",(0,i.jsx)(t.h3,{id:"resource-optimization",children:"Resource Optimization"}),"\n",(0,i.jsx)(t.p,{children:"Next.js provides a number of features to help you optimize your application's resources, including images, fonts, scripts and more."}),"\n",(0,i.jsx)(t.h3,{id:"developing-apis",children:"Developing APIs"}),"\n",(0,i.jsx)(t.p,{children:"Next.js API feature is a powerful tool that allows you to build and expose APIs from within your Next.js application. It is server-side only and provides features like SSR, routing, data fetching, and authentication."}),"\n",(0,i.jsx)(t.h3,{id:"strong-ecosystem--extensibility",children:"Strong Ecosystem & Extensibility"}),"\n",(0,i.jsxs)(t.p,{children:["Next.js is highly extensible and provides a wide range of APIs and plugins to customize and enhance your development process. You can add serverless functions, middleware, and other custom features to your Next.js project.",(0,i.jsx)(t.br,{}),"\n","It also benefits from a strong and active community that constantly contributes to its development and maintains a vast ecosystem of libraries and resources."]}),"\n",(0,i.jsx)(t.h2,{id:"in-industry",children:"In Industry"}),"\n",(0,i.jsx)(t.p,{children:"Next.js is used by a number of large companies, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Netflix"}),"\n",(0,i.jsx)(t.li,{children:"Airbnb"}),"\n",(0,i.jsx)(t.li,{children:"GitHub"}),"\n",(0,i.jsx)(t.li,{children:"Hulu"}),"\n",(0,i.jsx)(t.li,{children:"Twitch"}),"\n",(0,i.jsx)(t.li,{children:"Discord"}),"\n",(0,i.jsx)(t.li,{children:"Stripe"}),"\n",(0,i.jsx)(t.li,{children:"Walmart"}),"\n",(0,i.jsx)(t.li,{children:"Nike"}),"\n",(0,i.jsx)(t.li,{children:"Adidas"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);