import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("eksekusi 1");

  useEffect(() => {
    //tulis code
    //dieksekusi setelah render
    //dijalankan pertama sekali, kemudian jika ada perubahan value pada dependencies maka effect dijalankan kembali
    //componentDidMount & componentDidUpdate spesifik

    console.log("eksekusi 2 dari effect");
  }, [counter]);

  useEffect(() => {
    //dijalankan setiap kali ada render pada aplikasi
    //componentDidMount & componentDidUpdate all
  });

  useEffect(() => {
    //dijalankan hanya sekali meski ada rerender pada aplikasi
    //componentDidMount
  }, []);

  useEffect(() => {
    //coding kita
    //timer

    return () => {
      //cleanup function
      //jika component diunrender
      //componentDidUnmount
    };
  }, []);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts();
    setLoading(false);
  }, []);

  console.log("posts state", posts);

  console.log("eksekusi 3");

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>TAMBAH</button>
      <h1>List posts</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
      )}
    </div>
  );
};

export default App;
