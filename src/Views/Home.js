import React, { useState, useEffect } from 'react'
import PostCard from '../Components/PostCard';

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

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
