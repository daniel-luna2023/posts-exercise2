'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import api from '@/utils/api';
import Comment from '@/components/Comment';
import { PostProps } from '@/types';
import { CommentProps } from '@/types';
import PostLogo from '@/icons/PostLogo';
import DescriptionLogo from '@/icons/DescriptionLogo';

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostProps | null>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);
  useEffect(() => {
    if (postId){
      const fetchPost = async () => {
        try { 
          const response = await api.get(`/posts/${parseInt(postId)}`);
          setPost(response.data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
    
  

    const fetchComments = async () => {
      try {
        const response = await api.get(`/posts/${parseInt(postId)}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    
    fetchPost();
    fetchComments();
  }
  }, [postId]);
  return (
    <div className="container mx-auto p-4">
      {post ? (
        <div className="mb-4 p-4">
          <div className="flex items-center mb-2">
          <PostLogo />
          </div>
          <h1 className="mb-4 text-2xl font-bold">{post?.title}</h1>
          <div className="flex items-center mb-2">
          <DescriptionLogo />
          </div>
          <p> {post?.body} </p>
          <div>
            <ul>
              {comments?.map((comment) => (
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
