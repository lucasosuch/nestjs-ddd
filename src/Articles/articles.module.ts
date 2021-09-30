import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { Controllers } from '~/Articles/Infrastructure/Interfaces/Rest/Controllers';
import { Repositories } from '~/Articles/Infrastructure/Repository';
import { QueryHandlers } from '~/Articles/Application/Queries';
import { Prisma } from '~/Shared/Infrastructure/Database/Prisma';

@Module({
  imports: [CqrsModule],
  controllers: Controllers,
  providers: [...Repositories, ...QueryHandlers, Prisma],
})
export class ArticlesModule {}
