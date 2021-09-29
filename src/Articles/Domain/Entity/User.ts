import { Comment } from './Comment';
import { Post } from './Post';

export type User = {
  id: number;
  createdAt: Date;
  email: string;
  name: string;
  role: string;
  posts?: Post[];
  comments?: Comment[];
};
