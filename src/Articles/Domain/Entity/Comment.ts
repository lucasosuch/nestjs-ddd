import { Post } from './Post';
import { User } from './User';

export type Comment = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  authorId: number;
  postId: number;
  author?: User;
  post?: Post;
};
