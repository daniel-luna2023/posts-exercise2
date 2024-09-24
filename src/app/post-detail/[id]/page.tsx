'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import api from '@/utils/api';
import Comment from '@/components/Comment';
import { PostProps } from '@/types';
import { CommentProps } from '@/types';
import Post from '@/components/Post';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostProps | null>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);
  useEffect(() => {
    const fetchPost = async () => {
      try { 
        const postId = '1'
        const response = await api.get(`/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    const fetchComments = async () => {
      if (!post) return; 
      try {
        const response = await api.get(`/posts/${post?.id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchPost();
    fetchComments();
  }, [postId]);
  return (
    <div className="container mx-auto p-4">
      {post ? (
        <div className="mb-4 p-4">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              {/* SVG code */}
            </svg>
            <strong className="text-xl">Post title</strong>
          </div>
          <h1 className="mb-4 text-2xl font-bold">{post?.title}</h1>
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
              {/* SVG code */}
            </svg>
            <strong>Description</strong>
          </div>
          <p>{post?.body}</p><div>
            <ul>
              {comments.map((comment) => (
                <Comment key={comment?.id} comment={comment} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-xl font-bold">Post not found</p>
      )}
    </div>
  );
};

export default PostDetail;
