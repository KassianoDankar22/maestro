import { Module } from '@nestjs/common';
import { RabbuScrapperService } from './rabbu-scrapper.service';

@Module({
  providers: [RabbuScrapperService],
  exports: [RabbuScrapperService],
})
export class RabbuScrapperModule {}
