import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ForbiddenException, Inject, NotImplementedException } from '@nestjs/common';
import { PostRepository } from '../../Domain/Repository/PostRepository';
import { GetSinglePostQuery } from '../../Domain/Queries/GetSinglePostQuery';

@QueryHandler(GetSinglePostQuery)
export class GetSinglePostHandler implements IQueryHandler<GetSinglePostQuery> {
  constructor(
    @Inject('PostRepository')
    private readonly postRepository: PostRepository,
  ) {}

  async execute(query: GetSinglePostQuery) {
    const { id } = query;

    if (isNaN(+id)) {
      throw new NotImplementedException();
    }

    const singlePost = await this.postRepository.fetchSinglePostWithAuthorAndComments(parseInt(id));

    if (singlePost === null) {
      throw new ForbiddenException();
    }

    return singlePost;
  }
}
