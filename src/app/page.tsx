import api from "@/utils/api";
import Post from "../components/Post";
import type { PostProps } from "@/types";

async function getAllPosts(): Promise<PostProps[]> {
  try {
    const res = await api.get('/get/posts');
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
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
