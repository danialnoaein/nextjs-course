# Page router & App router

Next.js provides a powerful and easy-to-use routing system that allows you to define routes and navigate between pages within your application.
In this section we'll dive into Next.js main routing systems, Pages Router and App Router.

## Pages Router

Next.js employs a file system-based routing system, where the structure of the `pages` directory dictates the routes in your application. 

For more details about Pages Router read [Routing](/docs/what/2-3%20Routing#pages-router).

## App Router

In version 13, Next.js introduced a new App Router built on React Server Components, which supports shared layouts, nested routing, loading states, error handling, and more.

The App directory works in a new directory names `app`. It uses a file-system based router like Pages Router but unlike that specific files in the `app` directory will define your application's routes not all the files.

For more details about App Router read [Routing](/docs/what/2-3%20Routing#app-router).


## Pages Router or App Router?

After Next.js introduced the App Router an important question came up to minds? Which one should we pick not?

Next.js has released the App Router without any breaking changes with Pages Router, so you still can use `page` directory, but The App Router takes priority over the Pages Router. 

> **Note:** Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict. 

Pages and App routers can be used together. Common sense would suggest you only use both when migrating from Pages Router to the new App Router. Otherwise, in a new project, you ought to stick to one router for consistency and interoperability between your pages and components unless you have special circumstances where you need features from both paradigms.

Pick a router which works best for your app. Although `pages` will eventually be sunset, Next has promised to maintain it for a long time. Remember features like server-side components, layouts, templates, error components, loading components, etc. are not available in the pages directory so if you are going to use them you should create those routes in `app` directory. Besides using `app` directory will enable you to use latest features of React Server Components.

Here is a brief comparison:

| Pages Router            | App Router               |
|:------------------------|:-------------------------|
| Simpler and easy-to-use | More flexible            |
| Good for smaller apps   | Better for larger apps   |
| Good for static pages   | Better for dynamic pages |


For a better decision you can consider the following:
- Use the Pages directory if you want simple and straightforward routing, automatic routing based on file structure, and easy creation of pages as React components.
- Use the App directory if you need more advanced routing and layout capabilities, want to leverage React’s server components for better performance, and want to customize your app’s behavior or layout.
- Consider using both directories if you want to incrementally adopt the App directory while still using the Pages directory for simpler pages.
- Keep in mind that the App directory is experimental and not yet considered stable for production use, and may require additional learning and understanding of the new paradigm.

#### Server Components and benefits of Server Rendering

Main feature of App Router is that it uses React Server Components. There are a couple of benefits to doing the rendering work on the server, according to [official Next.js documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering) this includes:
>- **Data Fetching:** Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.
>- **Security:** Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
>- **Caching:** By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
>- **Bundle Sizes:** Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.
>- **Initial Page Load and First Contentful Paint (FCP)**: On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
>- **Search Engine Optimization and Social Network Shareability:** The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
>- **Streaming:** Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.
