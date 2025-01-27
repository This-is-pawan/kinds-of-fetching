// import React from 'react'

// const ReactQuery = () => {
//   return (
//     <div>ReactQuery</div>
//   )
// }

// export default ReactQuery
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

// Create a client
const queryClient = new QueryClient();

// Fetch function
const fetchData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const Posts = () => {
  const { data, isLoading, isError, error } = useQuery(["posts"], fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
};

export default App;
