import { Posts, Users } from "@prisma/client";

export type ApplicationError = {
    name: string;
    message: string;
  };

export type User = Omit<Users, 'id' | 'created_at' | 'updated_at'>

export type SignInUser = {
    email: string;
    password: string;
}

export type CreatePost = Omit<Posts, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
export type Post = {
  url: string;
  description: string;
}