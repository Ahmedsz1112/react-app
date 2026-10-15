// import { useState } from "react";
// import useFetch from "./components/useFetch";

import { memo, useCallback, useMemo, useState } from "react";
import { AuthProvider } from "./components/auth-provider";
import Nav from "./components/nav";

// const url = "https://jsonplaceholder.typicode.com/posts";

const Child = memo(function Child({ onAdd }) {
  console.log("Child rendered");
  return <button onClick={onAdd}>Add from Child</button>;


});

function App() {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [editId, setEditId] = useState(null);

  // const { data, loading, error, post, put, del } = useFetch(url);

  // if (loading) {
  //   <div className="text-center text-3xl font-bold mt-28">Loading......</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // const handelSubmit = async (e) => {
  //   e.preventDefault();

  //   const newPost = {
  //     title,
  //     body,
  //   };

  //   try {
  //     if (editId) {
  //       await put( newPost , editId );
  //       setEditId(null);
  //     } else {
  //       await post(newPost);
  //     }

  //     setTitle("");
  //     setBody("");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const user = {
  //   name: "Ahmed",
  //   job: "web dev"
  // }
  const [count, setCount] = useState(0);

    const handleAdd = useCallback(() => {
      setCount((prev) => prev + 2)
    }, [])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add from Parent</button>

      <Child onAdd={handleAdd} />
    </div>
  );
}

export default App;
