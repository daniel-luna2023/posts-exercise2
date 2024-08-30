"use client"
import { useState, useEffect } from "react";
import Post from "../components/Post";
import type { PostProps } from "@/types";

function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <ul className="flex flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
export default Posts;
