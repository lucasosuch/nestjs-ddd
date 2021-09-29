import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PostRepository } from '../../Domain/Repository/PostRepository';
import { GetAllPostsQuery } from '../../Domain/Queries/GetAllPostsQuery';

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
