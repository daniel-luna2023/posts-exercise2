import Post from "../components/Post";
import type { PostProps } from "@/types";

async function getAllPosts(): Promise<PostProps[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Posts() {
  const posts = await getAllPosts();
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
