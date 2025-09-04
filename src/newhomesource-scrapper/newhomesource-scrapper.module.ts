import { Module } from '@nestjs/common';
import { NewhomesourceScrapperService } from './newhomesource-scrapper.service';
import { NewhomesourceScrapperController } from './newhomesource-scrapper.controller';

@Module({
  controllers: [NewhomesourceScrapperController],
  providers: [NewhomesourceScrapperService],
})
export class NewhomesourceScrapperModule {}
