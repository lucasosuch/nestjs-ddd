import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PostRepository } from '~/Articles/Domain/Repository/PostRepository';
import { GetAllPostsQuery } from '~/Articles/Domain/Queries/GetAllPostsQuery';

@QueryHandler(GetAllPostsQuery)
export class GetAllPostsHandler implements IQueryHandler<GetAllPostsQuery> {
  constructor(
    @Inject('PostRepository')
    private readonly postRepository: PostRepository,
  ) {}

  async execute() {
    return await this.postRepository.fetchAllPostsWithAuthor();
  }
}
