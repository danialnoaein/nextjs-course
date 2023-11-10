# Routing

Routing in Next.js is a fundamental aspect of building web applications. Next.js provides a powerful and easy-to-use routing system that allows you to define routes and navigate between pages within your application. Here's a detailed explanation of how routing works in Next.js:

## Pages Router

1. **File-Based Routing:**

   - Next.js follows a file-based routing system, which means that the file structure of your project's `pages` directory defines the routes in your application.
   - Each JavaScript file within the `pages` directory corresponds to a specific route or page. The file name determines the route path. For example, a file named `about.js` corresponds to the `/about` route.

2. **Nested Routes:**

   - You can create nested routes by organizing your files into subdirectories within the `pages` directory. The nested file structure represents nested routes. For example, if you have a file at `pages/blog/post.js`, it corresponds to the `/blog/post` route.

3. **Dynamic Routes:**

   - Next.js supports dynamic routing using square brackets `[]`. By placing square brackets around a part of the file name, you can create dynamic routes that match different values in the URL segment. For example, a file named `[id].js` can match routes like `/products/123` and `/products/456`, capturing the dynamic `id` value.

4. **Link Component:**

   - Next.js provides the `Link` component to create navigation links within your application. This component enables client-side navigation, which means that when a user clicks on a link, the page transition occurs without a full page reload. It's highly performant and improves the user experience.
   - Example of using the `Link` component:

   ```jsx
   import Link from "next/link";

   function MyComponent() {
     return (
       <Link href='/about'>
         <a>About</a>
       </Link>
     );
   }
   ```

5. **Programmatic Routing:**

   - You can perform programmatic routing by using the `Router` object from Next.js's `next/router` package. This allows you to navigate to a different page programmatically, typically in response to user actions, form submissions, or other events.
   - Example of programmatic routing:

   ```jsx
   import { useRouter } from "next/router";

   function handleButtonClick() {
     const router = useRouter();
     router.push("/about");
   }
   ```

6. **Custom 404 Pages:**

   - Next.js allows you to create custom 404 error pages by defining a file named `404.js` within the `pages` directory. When a route is not found, this custom 404 page is displayed.

7. **Route Parameters:**

   - You can capture route parameters using query parameters by using the `useRouter` hook. This allows you to access and use query parameters in your components.
   - Example of accessing query parameters:

   ```jsx
   import { useRouter } from "next/router";

   function MyComponent() {
     const router = useRouter();
     const id = router.query.id;

     return <p>Product ID: {id}</p>;
   }
   ```

8. **Catch-All Routes:**
   - In addition to dynamic routes, you can create catch-all routes using `[]` with an ellipsis `...`. This allows you to match multiple segments of the URL and capture them as a single array.
   - Example of a catch-all route: `[...path].js` matches routes like `/products/item1/item2/item3` and captures them as `path`.

Next.js's routing system is simple to use and flexible, making it easy to define and navigate between pages in your web application. It also integrates well with the various rendering methods Next.js offers, including Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).

## App Router

In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.

The App directory works in a new directory names `app`. It uses a file-system based router like Pages Router but unlike that specific files in the `app` directory will define your application's routes not all the files.

> **Note:** Duo to performance optimization purposes, components inside `app` directory are React Server Components, by default.

1. **Route Segments**
   
   Each folder in `app` directory represents a route segment. For example, the folder structure below will create `/dashboard/settings` route in the application.
   
   ```tree
   ├── app
   │   └── dashboard
   │       └── settings
   ```

2. **Nested Routes**
   
   To create a nested route, you can nest folders inside each other. In the above example, `settings` segment will be a **Nested Route**.

3. **File Conventions**
   
   To create UI with specific behaviour Next.js provides a set of special files.

   | file name      | What it does?                                            |
   |----------------|----------------------------------------------------------|
   | `layout`       | Shared UI for a segment and its children                 |
   | `page`         | Unique UI of a route and make routes publicly accessible |
   | `loading`      | Loading UI for a segment and its children                |
   | `not-found`    | Not found UI for a segment and its children              |
   | `error`        | Error UI for a segment and its children                  |
   | `global-error` | Global Error UI                                          |
   | `route`        | Server-side API endpoint                                 |
   | `template`     | Specialized re-rendered Layout UI                        |
   | `default`      | Fallback UI for Parallel Routes                          |
   
   > **Note:** `.js`, `.jsx`, or `.tsx` file extensions can be used for each file.
   >
   > **Note:** `page` file is required for defining a segment for application route.
