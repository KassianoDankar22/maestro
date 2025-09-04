import { Module } from '@nestjs/common';
import { RabbuScrapperService } from './rabbu-scrapper.service';
import { RabbuScrapperController } from './rabbu-scrapper.controller';

@Module({
  controllers: [RabbuScrapperController],
  providers: [RabbuScrapperService],
})
export class RabbuScrapperModule {}
