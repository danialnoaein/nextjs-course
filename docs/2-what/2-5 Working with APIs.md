# Working with APIs

## Client-Side Rendering (CSR)

You can use this practice for CSR get and mutation requests. This is the react good old practice for SPA sites.

In a Next.js application, you can create serverless API routes using the built-in API feature. These routes allow you to handle API requests and responses without the need for an external server. Here's a demonstration of how to make API calls in a Next.js application using the Next.js API feature:

1. Create an API route in your Next.js project:

   - In your project's root directory, create a folder named `pages/api` if it doesn't already exist. This is where you'll define your API routes.

   - Inside the `api` folder, create a new file for your API route, e.g., `getData.js`.

2. Define your API route in the created file. In this example, we'll create a simple API route that responds with JSON data:

   ```jsx
   // pages/api/getData.js

   export default (req, res) => {
     // Simulate fetching data from a database or an external API
     const data = { message: "Hello from the API!" };

     res.status(200).json(data);
   };
   ```

3. Now, you have an API endpoint available at `/api/getData`.

4. In your Next.js application, you can make API calls to this endpoint using the `fetch` API or any other HTTP client library. Here's an example of how to fetch data from your custom API route:

   ```jsx
   // pages/index.js
   "use client";

   import { useEffect, useState } from "react";

   function Home() {
     const [data, setData] = useState(null);

     useEffect(() => {
       // Make an API call to your custom API route
       fetch("/api/getData")
         .then((response) => response.json())
         .then((data) => {
           setData(data);
         })
         .catch((error) => {
           console.error("API Error:", error);
         });
     }, []);

     return (
       <div>
         <h1>API Data:</h1>
         {data ? (
           <pre>{JSON.stringify(data, null, 2)}</pre>
         ) : (
           <p>Loading data...</p>
         )}
       </div>
     );
   }

   export default Home;
   ```

5. Start your Next.js development server using `npm run dev` or the appropriate command for your project setup.

6. Visit your application in a browser, and you should see the fetched data from your custom API

## Server-Side Rendering (SSR)

Next.js recommend fetching data on the server. This allows you to:

- Have direct access to backend data resources (e.g. databases).
- Keep your application more secure by preventing sensitive information,
- Fetch data and render in the same environment. This reduces both the back-and-forth communication between client and server, as well as the work on the main thread on the client.
- Perform multiple data fetches with single round-trip instead of multiple individual requests on the client.
- Reduce client-server waterfalls.

Next.js let you handle cache with `fetch` api under the hood:

If you need to use the same data (e.g. current user) in multiple components in a tree, you do not have to `fetch` data globally, nor forward props between components. Instead, you can use `fetch` or React cache in the component that needs the data without worrying about the performance implications of making multiple requests for the same data.

This is possible because `fetch` requests are automatically memoized. Learn more about [request memoization](https://nextjs.org/docs/app/building-your-application/caching#request-memoization).

here is a small example of how you can use fetch api with your SSR next.js application:

```js
async function Home() {
  const res = await fetch(`/api/getData`);
  return res.json();

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In this example as you can see there is no need to handle loading, setting states or anything, by making your component an async component you can await on async function inside react components! but what if you want to stream your page and handle loading state? The short answer is [`React.Suspense`](https://react.dev/reference/react/Suspense) component:

Here is a small example:

```js
<Suspense fallback={<Loading />}>
  <Home />
</Suspense>
```

Learn more about next.js rendering patters and best practices [here](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns).

Latest version of next.js practices tells us to use use client directive for mutation, This is actually a logical decision because mutations are closely coupled with user action.

Learn more about [Forms and Mutations
](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations) in next.js
