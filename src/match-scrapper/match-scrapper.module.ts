import { Module } from '@nestjs/common';
import { MatchScrapperService } from './match-scrapper.service';
import { MatchScrapperController } from './match-scrapper.controller';

@Module({
  controllers: [MatchScrapperController],
  providers: [MatchScrapperService],
})
export class MatchScrapperModule {}
