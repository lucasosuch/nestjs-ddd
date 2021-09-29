import { Body, Controller, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateCommentDTO } from '../DTO/CreateCommentDTO';

@Controller('comments')
export class CommentsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Post('/add')
  async create(@Body() createCommentDto: CreateCommentDTO) {
    console.log({ createCommentDto });

    // return await this.queryBus.execute(
    //   new GetPlacesQuery(query.find, query.language, query.spaceType, clientLocation, locationResponse),
    // );
  }
}
