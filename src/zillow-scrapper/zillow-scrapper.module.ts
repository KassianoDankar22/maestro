import { Module } from '@nestjs/common';
import { ZillowScrapperService } from './zillow-scrapper.service';

@Module({
  providers: [ZillowScrapperService],
  exports: [ZillowScrapperService],
})
export class ZillowScrapperModule {}
