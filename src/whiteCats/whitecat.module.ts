import { Module } from '@nestjs/common';
import { WhiteCatsController } from './whitecats.controller';

@Module({
  imports: [],
  controllers: [WhiteCatsController],
  providers: [],
})
export class WhiteCatModule {}
