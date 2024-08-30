"use client"
import { useState, useEffect } from "react";
interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

function Posts(){
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts))
    console.log(posts)
  }, [])

  return (
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {posts.length === 0 ? (
        <p>Loading</p>
      ) : (
        posts.map(post => (
          <div className="border border-white rounded-lg p-4 shadow-md" key={post.id}>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  )
}
export default Posts;
       