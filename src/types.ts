import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PostProps {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export interface UserProps{
  comments: string;
  todos: string;
  posts: string;
  company: string;
  website: string;
  phone: string;
  id?: number;
  username?: string;
  name?: string,
  email?: string,
  street?: string,
  city?: string,
  zipcode?: string, 
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  userId: number;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface CommentProps{
  userId?: number;
  postId?: number;
  id?: number;
  body?: string;
}