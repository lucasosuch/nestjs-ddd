import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCommentCommand } from 'Articles/Domain/Commands/CreateCommentCommand';
import { CommentRepository } from 'Articles/Domain/Repository/CommentRepository';

@CommandHandler(CreateCommentCommand)
export class CreateCommentHandler implements ICommandHandler<CreateCommentCommand> {
  constructor(
    @Inject('PostRepository')
    private readonly postRepository: CommentRepository,
  ) {}

  async execute(command: CreateCommentCommand) {}
}
