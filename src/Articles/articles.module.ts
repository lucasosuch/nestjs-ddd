import { CacheModule, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { Controllers } from './Infrastructure/Interfaces/Rest/Controllers';
import { Repositories } from './Infrastructure/Repository';
import { QueryHandlers } from './Application/Queries';
import { Prisma } from '~/Shared/Infrastructure/Database/Prisma';

@Module({
  imports: [CqrsModule, CacheModule.register()],
  controllers: Controllers,
  providers: [...Repositories, ...QueryHandlers, Prisma],
})
export class ArticlesModule {}
