import { Module } from '@nestjs/common';
import { ScrapperManagerService } from './scrapper-manager.service';
import { ScrapperManagerController } from './scrapper-manager.controller';
import { NewhomesourceScrapperModule } from 'src/newhomesource-scrapper/newhomesource-scrapper.module';
import { ZillowScrapperModule } from 'src/zillow-scrapper/zillow-scrapper.module';
import { RabbuScrapperModule } from 'src/rabbu-scrapper/rabbu-scrapper.module';

@Module({
  imports: [
    NewhomesourceScrapperModule,
    ZillowScrapperModule,
    RabbuScrapperModule,
  ],
  controllers: [ScrapperManagerController],
  providers: [ScrapperManagerService],
})
export class ScrapperManagerModule {}
