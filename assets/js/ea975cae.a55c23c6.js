"use strict";(self.webpackChunknextjs_course=self.webpackChunknextjs_course||[]).push([[6985],{8520:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5893),r=t(1151);const s={},i="Page router & App router",a={id:"how/3-1 Router",title:"Page router & App router",description:"In a Next.js application, you can implement page navigation using the built-in routing system. The primary tools for navigation are the Link component and the useRouter hook. Here's a step-by-step guide to implementing page navigation:",source:"@site/docs/3-how/3-1 Router.md",sourceDirName:"3-how",slug:"/how/3-1 Router",permalink:"/nextjs-course/docs/how/3-1 Router",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-how/3-1 Router.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How",permalink:"/nextjs-course/docs/category/how"},next:{title:"SSG, ISR & SSR Implementation",permalink:"/nextjs-course/docs/how/3-2 SSG ISR SSR"}},c={},l=[];function u(n){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"page-router--app-router",children:"Page router & App router"}),"\n",(0,o.jsxs)(e.p,{children:["In a Next.js application, you can implement page navigation using the built-in routing system. The primary tools for navigation are the ",(0,o.jsx)(e.code,{children:"Link"})," component and the ",(0,o.jsx)(e.code,{children:"useRouter"})," hook. Here's a step-by-step guide to implementing page navigation:"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Create Pages:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Create multiple pages in the ",(0,o.jsx)(e.code,{children:"pages"})," directory. For example, let's create two pages: ",(0,o.jsx)(e.code,{children:"index.js"})," and ",(0,o.jsx)(e.code,{children:"about.js"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"// pages/index.js\nfunction Home() {\n  return <h1>Home Page</h1>;\n}\n\nexport default Home;\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"// pages/about.js\nfunction About() {\n  return <h1>About Page</h1>;\n}\n\nexport default About;\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.strong,{children:["Use the ",(0,o.jsx)(e.code,{children:"Link"})," Component:"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Import the ",(0,o.jsx)(e.code,{children:"Link"})," component from ",(0,o.jsx)(e.code,{children:"next/link"})," in the component where you want to create navigation links."]}),"\n",(0,o.jsxs)(e.li,{children:["Use the ",(0,o.jsx)(e.code,{children:"Link"})," component to wrap the elements that should trigger navigation."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"// components/Navigation.js\nimport Link from \"next/link\";\n\nfunction Navigation() {\n  return (\n    <nav>\n      <Link href='/'>\n        <a>Home</a>\n      </Link>\n      {\" | \"}\n      <Link href='/about'>\n        <a>About</a>\n      </Link>\n    </nav>\n  );\n}\n\nexport default Navigation;\n"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Create a Layout Component:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"To keep the navigation consistent across pages, you might want to create a layout component that includes the navigation."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'// components/Layout.js\nimport Navigation from "./Navigation";\n\nfunction Layout({ children }) {\n  return (\n    <div>\n      <Navigation />\n      <main>{children}</main>\n    </div>\n  );\n}\n\nexport default Layout;\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Update Page Components:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Import the layout component and wrap the page content with it."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'// pages/index.js\nimport Layout from "../components/Layout";\n\nfunction Home() {\n  return (\n    <Layout>\n      <h1>Home Page</h1>\n    </Layout>\n  );\n}\n\nexport default Home;\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'// pages/about.js\nimport Layout from "../components/Layout";\n\nfunction About() {\n  return (\n    <Layout>\n      <h1>About Page</h1>\n    </Layout>\n  );\n}\n\nexport default About;\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.strong,{children:["Use the ",(0,o.jsx)(e.code,{children:"useRouter"})," Hook for Programmatic Navigation:"]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Import the ",(0,o.jsx)(e.code,{children:"useRouter"})," hook from ",(0,o.jsx)(e.code,{children:"next/router"})," to enable programmatic navigation."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'// pages/index.js\nimport { useRouter } from "next/router";\nimport Layout from "../components/Layout";\n\nfunction Home() {\n  const router = useRouter();\n\n  const handleButtonClick = () => {\n    router.push("/about");\n  };\n\n  return (\n    <Layout>\n      <h1>Home Page</h1>\n      <button onClick={handleButtonClick}>Go to About</button>\n    </Layout>\n  );\n}\n\nexport default Home;\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["The ",(0,o.jsx)(e.code,{children:"router.push"})," method allows you to navigate to a different page programmatically."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Start the Development Server:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Run ",(0,o.jsx)(e.code,{children:"npm run dev"})," or the appropriate command for your project setup to start the Next.js development server."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Visit the Application:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Open your browser and visit ",(0,o.jsx)(e.code,{children:"http://localhost:3000"}),". You should see the Home page."]}),"\n",(0,o.jsx)(e.li,{children:'Click on the "About" link in the navigation to navigate to the About page.'}),"\n",(0,o.jsx)(e.li,{children:"Click the button to navigate back to the Home page."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["By following these steps, you've implemented page navigation using Next.js's routing system. The ",(0,o.jsx)(e.code,{children:"Link"})," component provides a declarative way to create navigation links, and the ",(0,o.jsx)(e.code,{children:"useRouter"})," hook allows for programmatic navigation. The layout component ensures consistent navigation across pages."]})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);