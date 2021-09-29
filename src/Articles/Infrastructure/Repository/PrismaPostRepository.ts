import { Injectable } from '@nestjs/common';
import { Post } from 'Articles/Domain/Entity/Post';
import { Prisma } from '~/Shared/Infrastructure/Database/Prisma';
import { PostRepository } from '../../Domain/Repository/PostRepository';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private readonly prisma: Prisma) {}

  async fetchAllPostsWithAuthor(): Promise<Post[]> {
    return await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
  }

  async fetchSinglePostWithAuthorAndComments(id: number): Promise<Post> {
    return await this.prisma.post.findFirst({
      include: {
        author: true,
        comments: true,
      },
      where: {
        id: id,
      },
    });
  }
}
