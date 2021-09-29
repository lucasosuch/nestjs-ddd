import { PrismaCommentRepository } from './PrismaCommentRepository';
import { PrismaPostRepository } from './PrismaPostRepository';
import { PrismaUserRepository } from './PrismaUserRepository';

export const Repositories = [
  {
    provide: 'CommentRepository',
    useClass: PrismaCommentRepository,
  },
  {
    provide: 'PostRepository',
    useClass: PrismaPostRepository,
  },
  {
    provide: 'UserRepository',
    useClass: PrismaUserRepository,
  },
];
