import { Module } from '@nestjs/common';
import { ZillowScrapperService } from './zillow-scrapper.service';
import { ZillowScrapperController } from './zillow-scrapper.controller';

@Module({
  controllers: [ZillowScrapperController],
  providers: [ZillowScrapperService],
})
export class ZillowScrapperModule {}
