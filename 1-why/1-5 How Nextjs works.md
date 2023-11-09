# How Next.js Works Behind the Scene?

Next.js is a powerful framework for building web applications, and understanding how it works is essential for effectively developing with it. In this section, we'll explore the core concepts and processes that drive the functionality of Next.js in this section.

## Workflow of Serving a Page

When a request is made for a page, Next.js will first check to see if there is a static HTML file for that page. If there is, then Next.js will serve the static HTML file directly to the client.

If there is no static HTML file for the page, then Next.js will render the page on the server using the server bundle. This process is called Server-Side Rendering (SSR).

Once the page has been rendered, Next.js will send the HTML, CSS, and JavaScript to the client. The client will then render the page and make it interactive that is called hydration. This process is handled by Node.js under the hood.

> What is Hydration
> Once the initial HTML page is received by the client's browser, the JavaScript code for the React components is also sent to the browser. The client-side JavaScript then "hydrates" the page, which means it takes over the rendering process. This allows for interactivity and dynamic updates on the client side, while the initial page load benefits from server-side rendering.

## Why Next.js uses Node.js

Next.js uses Node.js under the hood. This means that Next.js applications can benefit from all of the features that Node.js has to offer.

### Server-side Rendering

One of the main ways that Next.js uses Node.js is for server-side rendering (SSR).

### Data Fetching

Next.js also uses Node.js for data fetching. When a Next.js page needs to fetch data from an API, the Node.js process will make the request and return the data to the page. This can be done using a variety of methods, such as getStaticProps, getServerSideProps, etc.

### Serverless Functions

Node.js is a common runtime for serverless functions, and Next.js provides support for serverless functions, allowing developers to build and deploy serverless API endpoints and other functions as part of their web applications.

## File-Based Routing

One of the key features of Next.js is its file-based routing system. In a Next.js project, the pages of your application correspond to files in the `pages` directory. For example, if you create a file named `about.js` in the `pages` directory, you automatically get a route for `/about` in your application.
File-based routing simplifies navigation and helps you organize your project intuitively. You don't need to set up complex routing configurations, making it easy to add new pages to your application.

```
- pages/
  - index.js        // This is your app's home page accessible at '/'
  - about.js        // Accessible at '/about'
  - products/
    - index.js      // Accessible at '/products'
    - detail.js     // Accessible at '/products/detail'
```

### Dynamic Routes

Dynamic routes are often used to create applications that have a personalized user experience, such as e-commerce websites or social media platforms. They can also be used to create applications that are more interactive and responsive, such as search engines or real-time chat applications.

Here are some examples of dynamic routes:

- `/products/:id`: This route would match a request for a specific product page, where the `:id` placeholder is replaced with the ID of the product.

- `/users/:username/profile`: This route would match a request for a user profile page, where the `:username` placeholder is replaced with the username of the user.

- `/search?q=query`: This route would match a request for a search results page, where the `q` query parameter specifies the search query.

### Client-Side Navigation

In Next.js client-side navigation is possible with the `Link` component from the `next/link` package. This component allows you to create client-side transitions between pages, providing a smooth and responsive user experience.

## Data Fetching

In many web applications, data fetching is a critical part of the development process. Next.js provides several methods for fetching data, depending on your needs:

### `getServerSideProps`

This function allows you to fetch data on the server before rendering a page. It's commonly used for Server-Side Rendering (SSR) to get dynamic data.

### `getStaticProps`

For Static Site Generation (SSG), you can use this function to fetch data at build time. The data is then embedded into the page during the generation process.

### `getInitialProps`

(legacy): This is an older method that works with both SSR and SSG. However, it's recommended to
