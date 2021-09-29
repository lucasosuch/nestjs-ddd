import { Comment } from './Comment';
import { User } from './User';

export type Post = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  authorId: number;
  author?: User;
  comments?: Comment[];
};
