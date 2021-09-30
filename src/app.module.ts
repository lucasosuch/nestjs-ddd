import { Module } from '@nestjs/common';
import { ArticlesModule } from '~/Articles/articles.module';

@Module({
  imports: [ArticlesModule],
})
export class AppModule {}
