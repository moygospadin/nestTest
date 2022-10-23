import { Module } from '@nestjs/common';
import { WhiteCatModule } from 'src/whiteCats/whitecat.module';
import { CatsService } from './cat.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [WhiteCatModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatModule {}
