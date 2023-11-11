# SSG, ISR & SSR Implementation

## Using `pages` directory

Let's walk through hands-on examples of Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) using Next.js.

### 1. Server-Side Rendering (SSR):

#### Step 1: Create a new Next.js project

```bash
npx create-next-app next-ssr-example
cd next-ssr-example
```

#### Step 2: Create a server-side rendered page

Edit `pages/index.js`:

```jsx
// pages/index.js
function Home({ serverRenderedData }) {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Data fetched at server side: {serverRenderedData}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulate fetching data from an API at the server side
  const serverRenderedData = "Hello from Server!";
  return {
    props: { serverRenderedData },
  };
}

export default Home;
```

#### Step 3: Run the Next.js app

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

You'll see "Server-Side Rendering (SSR)" with the data fetched on the server side.

### 2. Static Site Generation (SSG):

#### Step 1: Create a new Next.js project

```bash
npx create-next-app next-ssg-example
cd next-ssg-example
```

#### Step 2: Create a statically generated page

Edit `pages/index.js`:

```jsx
// pages/index.js
function Home({ staticGeneratedData }) {
  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>Static data generated at build time: {staticGeneratedData}</p>
    </div>
  );
}

export async function getStaticProps() {
  // Simulate fetching data from an API at build time
  const staticGeneratedData = "Hello from Static Generation!";
  return {
    props: { staticGeneratedData },
  };
}

export default Home;
```

#### Step 3: Run the Next.js app

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

You'll see "Static Site Generation (SSG)" with the data generated at build time.

### 3. Incremental Static Regeneration (ISR):

#### Step 1: Create a new Next.js project

```bash
npx create-next-app next-isr-example
cd next-isr-example
```

#### Step 2: Create an incrementally statically regenerated page

Edit `pages/index.js`:

```jsx
// pages/index.js
function Home({ dynamicallyGeneratedData }) {
  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>Data dynamically regenerated at runtime: {dynamicallyGeneratedData}</p>
    </div>
  );
}

export async function getStaticProps() {
  // Simulate fetching data from an API at build time
  const dynamicallyGeneratedData = "Hello from ISR!";
  return {
    props: { dynamicallyGeneratedData },
    revalidate: 10, // Regenerate the page every 10 seconds
  };
}

export default Home;
```

#### Step 3: Run the Next.js app

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

You'll see "Incremental Static Regeneration (ISR)" with the data dynamically regenerated at runtime. The page will be regenerated every 10 seconds due to the `revalidate` option.

These examples showcase Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) in Next.js, each with its respective use case for fetching and rendering data.

## Using `app` directory

In `app` directory there are a composition of Server Components and Client Components, so we'll dive into each of them separately.

### Server Components

React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:
- Static Rendering
- Dynamic Rendering 
- Streaming

#### Static Rendering
In this method of rendering Next.js will render routes at build time. The result is cached and can be shared between users and server requests.

Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.

> **Note:** Static Rendering is the default render method for Server Components in Next.js 

#### Dynamic Rendering 
With Dynamic Rendering, routes are rendered for each user at request time.

Dynamic rendering is useful when a route has data that is personalized to the user or has information that can only be known at request time, such as cookies or the URL search params.

> With Dynamic Rendering each route will be rendered at **request time**, similar to using `getServerSideProps` in `pages` directory.
>
> **Note:** Refer to [this link](https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering) for more information on "How to switch to Dynamic Rendering in Server Components"

#### Streaming
In this method UI will be progressively rendered from the server and will be split and served as chunks to the client. This way UI will be visible part by part and user will be able to see the UI before it's completely rendered.

> **Note:** Refer to [this link](https://nextjs.org/docs/app/building-your-application/rendering/server-components#streaming) for more information on "Streaming"


### Client Components

Client Components allows you to write interactive UI that can be rendered on the client at request time. In Next.js, client rendering is **opt-in**, meaning you have to explicitly decide what components React should render on the client.

To specify a component as a Client Component you need to use React [`"use client"` directive](https://react.dev/reference/react/use-client)  

> **Note:** For a full detailed description on how Client Components render [check the official Next.js documentation](https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered). 
