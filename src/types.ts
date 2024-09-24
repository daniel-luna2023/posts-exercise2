import { Dispatch, ReactNode, SetStateAction } from "react";

export interface PostProps {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export interface UserProps{
  comments: any;
  todos: any;
  posts: any;
  company: any;
  website: string;
  phone: string;
  address: any;
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

export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

