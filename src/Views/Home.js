import React, { useState, useEffect } from 'react'
import PostCards from '../Components/PostCards'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
      method: "GET",
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  console.log('fetched posts =', posts);
  return (
    <>
        <h2>Home Page</h2>
        {posts.map((post) => (
          <PostCards key={post.id} post={post} />
        ))}
    </>
  );
}
