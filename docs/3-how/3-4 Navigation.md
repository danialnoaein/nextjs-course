# Navigation in Next.js

In a Next.js application, you can implement page navigation using the built-in routing system. The primary tools for navigation are the `Link` component and the `useRouter` hook. Here's a step-by-step guide to implementing page navigation:

1. **Create Pages:**

    - Create multiple pages in the `pages` directory. For example, let's create two pages: `index.js` and `about.js`.

   ```jsx
   // pages/index.js
   function Home() {
     return <h1>Home Page</h1>;
   }

   export default Home;
   ```

   ```jsx
   // pages/about.js
   function About() {
     return <h1>About Page</h1>;
   }

   export default About;
   ```

2. **Use the `Link` Component:**

    - Import the `Link` component from `next/link` in the component where you want to create navigation links.
    - Use the `Link` component to wrap the elements that should trigger navigation.

   ```jsx
   // components/Navigation.js
   import Link from "next/link";

   function Navigation() {
     return (
       <nav>
         <Link href='/'>
           <a>Home</a>
         </Link>
         {" | "}
         <Link href='/about'>
           <a>About</a>
         </Link>
       </nav>
     );
   }

   export default Navigation;
   ```

3. **Create a Layout Component:**

    - To keep the navigation consistent across pages, you might want to create a layout component that includes the navigation.

   ```jsx
   // components/Layout.js
   import Navigation from "./3-4 Navigation";

   function Layout({ children }) {
     return (
       <div>
         <Navigation />
         <main>{children}</main>
       </div>
     );
   }

   export default Layout;
   ```

4. **Update Page Components:**

    - Import the layout component and wrap the page content with it.

   ```jsx
   // pages/index.js
   import Layout from "../components/Layout";

   function Home() {
     return (
       <Layout>
         <h1>Home Page</h1>
       </Layout>
     );
   }

   export default Home;
   ```

   ```jsx
   // pages/about.js
   import Layout from "../components/Layout";

   function About() {
     return (
       <Layout>
         <h1>About Page</h1>
       </Layout>
     );
   }

   export default About;
   ```

5. **Use the `useRouter` Hook for Programmatic Navigation:**

    - Import the `useRouter` hook from `next/router` to enable programmatic navigation.

   ```jsx
   // pages/index.js
   import { useRouter } from "next/router";
   import Layout from "../components/Layout";

   function Home() {
     const router = useRouter();

     const handleButtonClick = () => {
       router.push("/about");
     };

     return (
       <Layout>
         <h1>Home Page</h1>
         <button onClick={handleButtonClick}>Go to About</button>
       </Layout>
     );
   }

   export default Home;
   ```

    - The `router.push` method allows you to navigate to a different page programmatically.

6. **Start the Development Server:**

    - Run `npm run dev` or the appropriate command for your project setup to start the Next.js development server.

7. **Visit the Application:**
    - Open your browser and visit `http://localhost:3000`. You should see the Home page.
    - Click on the "About" link in the navigation to navigate to the About page.
    - Click the button to navigate back to the Home page.

By following these steps, you've implemented page navigation using Next.js's routing system. The `Link` component provides a declarative way to create navigation links, and the `useRouter` hook allows for programmatic navigation. The layout component ensures consistent navigation across pages.


