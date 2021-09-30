import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from '~/Articles/Infrastructure/Interfaces/Rest/Controllers/PostsController';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from '~/Articles/Application/Queries';
import { Prisma } from '~/Shared/Infrastructure/Database/Prisma';
import { Repositories } from '~/Articles/Infrastructure/Repository';

describe('PostsController', () => {
  let postsController: PostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [PostsController],
      providers: [...Repositories, ...QueryHandlers, Prisma],
    }).compile();

    postsController = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(postsController).toBeDefined();
  });
});
