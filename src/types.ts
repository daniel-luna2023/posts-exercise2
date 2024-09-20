import { Dispatch, SetStateAction } from "react";

export interface PostProps {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export interface UserProps{
  id?: number;
  username?: string;
  name?: string,
  email?: string,
  street?: string,
  city?: string,
  zipcode?: string,

}
