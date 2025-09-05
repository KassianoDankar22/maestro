import { Module } from '@nestjs/common';
import { ScrapperManagerService } from './scrapper-manager.service';
import { NewhomesourceScrapperModule } from 'src/newhomesource-scrapper/newhomesource-scrapper.module';
import { ZillowScrapperModule } from 'src/zillow-scrapper/zillow-scrapper.module';
import { RabbuScrapperModule } from 'src/rabbu-scrapper/rabbu-scrapper.module';

@Module({
  imports: [
    NewhomesourceScrapperModule,
    ZillowScrapperModule,
    RabbuScrapperModule,
  ],
  providers: [ScrapperManagerService],
  exports: [ScrapperManagerService],
})
export class ScrapperManagerModule {}
