import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllPostsQuery, GetSinglePostQuery } from '~/Articles/Domain/Queries';
import { SearchForPostDTO } from '../DTO/SearchForPostDTO';

@Controller('posts')
export class PostsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('/')
  async findAll() {
    return await this.queryBus.execute(new GetAllPostsQuery());
  }

  @Get(':id')
  async findOne(@Param() params: SearchForPostDTO) {
    return await this.queryBus.execute(new GetSinglePostQuery(params.id));
  }
}
