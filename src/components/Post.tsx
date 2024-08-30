import {PostProps } from "./Types"

const Post = ({post}:{post: PostProps}) => {
  return (
    <li className="flex-1 min-w-[300px] rounded-lg p-4 shadow-md border border-white">
      <h1>{post.id}</h1>
      <h2>Body: {post.body}</h2>
      <p>Title: {post.title}</p>
    </li>
  );
}

export default Post;
