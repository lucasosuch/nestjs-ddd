import { PrismaPostRepository } from './PrismaPostRepository';

export const Repositories = [
  {
    provide: 'PostRepository',
    useClass: PrismaPostRepository,
  },
];
