import { Module } from '@nestjs/common';
import { MatchScrapperService } from './match-scrapper.service';

@Module({
  providers: [MatchScrapperService],
  exports: [MatchScrapperService],
})
export class MatchScrapperModule {}
