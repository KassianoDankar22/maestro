import { Module } from '@nestjs/common';
import { NewhomesourceScrapperService } from './newhomesource-scrapper.service';

@Module({
  providers: [NewhomesourceScrapperService],
  exports: [NewhomesourceScrapperService],
})
export class NewhomesourceScrapperModule {}
