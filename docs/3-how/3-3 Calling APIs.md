# Calling APIs in NextJS

To fetch data from APIs and display it in a Next.js application, you can use the `fetch` API or a library like Axios. I'll demonstrate using the `fetch` API for simplicity. Let's assume you want to fetch and display data from the JSONPlaceholder API.

### Step 1: Create a new Next.js project

```bash
npx create-next-app next-api-example
cd next-api-example
```

### Step 2: Create a component to fetch and display data

Create a new file `components/PostList.js`:

```jsx
// components/PostList.js
import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("API Error:", error));
  }, []);

  return (
    <div>
      <h2>Posts from API:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
```

### Step 3: Use the component in a page

Edit `pages/index.js`:

```jsx
// pages/index.js
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div>
      <h1>Next.js API Example</h1>
      <PostList />
    </div>
  );
};

export default Home;
```

### Step 4: Run the Next.js app

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

You'll see a list of posts fetched from the JSONPlaceholder API displayed on the page. The `PostList` component fetches data from the API using the `fetch` API and updates the state to render the posts dynamically.

Feel free to modify the example according to your API requirements. If you need to handle dynamic routes or additional data, you can explore more advanced Next.js features. Additionally, consider error handling, loading states, and other UI/UX considerations based on your application's needs.
