"use strict";(self.webpackChunknextjs_course=self.webpackChunknextjs_course||[]).push([[9586],{2595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=t(5893),r=t(1151);const s={},i="SSG, ISR & SSR Implementation",d={id:"how/3-2 SSG ISR SSR",title:"SSG, ISR & SSR Implementation",description:"Let's walk through hands-on examples of Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) using Next.js.",source:"@site/docs/3-how/3-2 SSG ISR SSR.md",sourceDirName:"3-how",slug:"/how/3-2 SSG ISR SSR",permalink:"/nextjs-course/docs/how/3-2 SSG ISR SSR",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-how/3-2 SSG ISR SSR.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Page router & App router",permalink:"/nextjs-course/docs/how/3-1 Router"},next:{title:"Calling APIs in NextJS",permalink:"/nextjs-course/docs/how/3-3 Calling APIs"}},c={},l=[{value:"1. Server-Side Rendering (SSR):",id:"1-server-side-rendering-ssr",level:3},{value:"Step 1: Create a new Next.js project",id:"step-1-create-a-new-nextjs-project",level:4},{value:"Step 2: Create a server-side rendered page",id:"step-2-create-a-server-side-rendered-page",level:4},{value:"Step 3: Run the Next.js app",id:"step-3-run-the-nextjs-app",level:4},{value:"2. Static Site Generation (SSG):",id:"2-static-site-generation-ssg",level:3},{value:"Step 1: Create a new Next.js project",id:"step-1-create-a-new-nextjs-project-1",level:4},{value:"Step 2: Create a statically generated page",id:"step-2-create-a-statically-generated-page",level:4},{value:"Step 3: Run the Next.js app",id:"step-3-run-the-nextjs-app-1",level:4},{value:"3. Incremental Static Regeneration (ISR):",id:"3-incremental-static-regeneration-isr",level:3},{value:"Step 1: Create a new Next.js project",id:"step-1-create-a-new-nextjs-project-2",level:4},{value:"Step 2: Create an incrementally statically regenerated page",id:"step-2-create-an-incrementally-statically-regenerated-page",level:4},{value:"Step 3: Run the Next.js app",id:"step-3-run-the-nextjs-app-2",level:4}];function p(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ssg-isr--ssr-implementation",children:"SSG, ISR & SSR Implementation"}),"\n",(0,a.jsx)(n.p,{children:"Let's walk through hands-on examples of Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) using Next.js."}),"\n",(0,a.jsx)(n.h3,{id:"1-server-side-rendering-ssr",children:"1. Server-Side Rendering (SSR):"}),"\n",(0,a.jsx)(n.h4,{id:"step-1-create-a-new-nextjs-project",children:"Step 1: Create a new Next.js project"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx create-next-app next-ssr-example\ncd next-ssr-example\n"})}),"\n",(0,a.jsx)(n.h4,{id:"step-2-create-a-server-side-rendered-page",children:"Step 2: Create a server-side rendered page"}),"\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"pages/index.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'// pages/index.js\nfunction Home({ serverRenderedData }) {\n  return (\n    <div>\n      <h1>Server-Side Rendering (SSR)</h1>\n      <p>Data fetched at server side: {serverRenderedData}</p>\n    </div>\n  );\n}\n\nexport async function getServerSideProps() {\n  // Simulate fetching data from an API at the server side\n  const serverRenderedData = "Hello from Server!";\n  return {\n    props: { serverRenderedData },\n  };\n}\n\nexport default Home;\n'})}),"\n",(0,a.jsx)(n.h4,{id:"step-3-run-the-nextjs-app",children:"Step 3: Run the Next.js app"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.code,{children:"http://localhost:3000"})," in your browser."]}),"\n",(0,a.jsx)(n.p,{children:'You\'ll see "Server-Side Rendering (SSR)" with the data fetched on the server side.'}),"\n",(0,a.jsx)(n.h3,{id:"2-static-site-generation-ssg",children:"2. Static Site Generation (SSG):"}),"\n",(0,a.jsx)(n.h4,{id:"step-1-create-a-new-nextjs-project-1",children:"Step 1: Create a new Next.js project"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx create-next-app next-ssg-example\ncd next-ssg-example\n"})}),"\n",(0,a.jsx)(n.h4,{id:"step-2-create-a-statically-generated-page",children:"Step 2: Create a statically generated page"}),"\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"pages/index.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'// pages/index.js\nfunction Home({ staticGeneratedData }) {\n  return (\n    <div>\n      <h1>Static Site Generation (SSG)</h1>\n      <p>Static data generated at build time: {staticGeneratedData}</p>\n    </div>\n  );\n}\n\nexport async function getStaticProps() {\n  // Simulate fetching data from an API at build time\n  const staticGeneratedData = "Hello from Static Generation!";\n  return {\n    props: { staticGeneratedData },\n  };\n}\n\nexport default Home;\n'})}),"\n",(0,a.jsx)(n.h4,{id:"step-3-run-the-nextjs-app-1",children:"Step 3: Run the Next.js app"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.code,{children:"http://localhost:3000"})," in your browser."]}),"\n",(0,a.jsx)(n.p,{children:'You\'ll see "Static Site Generation (SSG)" with the data generated at build time.'}),"\n",(0,a.jsx)(n.h3,{id:"3-incremental-static-regeneration-isr",children:"3. Incremental Static Regeneration (ISR):"}),"\n",(0,a.jsx)(n.h4,{id:"step-1-create-a-new-nextjs-project-2",children:"Step 1: Create a new Next.js project"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx create-next-app next-isr-example\ncd next-isr-example\n"})}),"\n",(0,a.jsx)(n.h4,{id:"step-2-create-an-incrementally-statically-regenerated-page",children:"Step 2: Create an incrementally statically regenerated page"}),"\n",(0,a.jsxs)(n.p,{children:["Edit ",(0,a.jsx)(n.code,{children:"pages/index.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'// pages/index.js\nfunction Home({ dynamicallyGeneratedData }) {\n  return (\n    <div>\n      <h1>Incremental Static Regeneration (ISR)</h1>\n      <p>Data dynamically regenerated at runtime: {dynamicallyGeneratedData}</p>\n    </div>\n  );\n}\n\nexport async function getStaticProps() {\n  // Simulate fetching data from an API at build time\n  const dynamicallyGeneratedData = "Hello from ISR!";\n  return {\n    props: { dynamicallyGeneratedData },\n    revalidate: 10, // Regenerate the page every 10 seconds\n  };\n}\n\nexport default Home;\n'})}),"\n",(0,a.jsx)(n.h4,{id:"step-3-run-the-nextjs-app-2",children:"Step 3: Run the Next.js app"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.code,{children:"http://localhost:3000"})," in your browser."]}),"\n",(0,a.jsxs)(n.p,{children:['You\'ll see "Incremental Static Regeneration (ISR)" with the data dynamically regenerated at runtime. The page will be regenerated every 10 seconds due to the ',(0,a.jsx)(n.code,{children:"revalidate"})," option."]}),"\n",(0,a.jsx)(n.p,{children:"These examples showcase Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) in Next.js, each with its respective use case for fetching and rendering data."})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var a=t(7294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);