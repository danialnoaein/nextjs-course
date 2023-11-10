# SSG, ISR & SSR Implementation

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
