import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperManagerModule } from './scrapper-manager/scrapper-manager.module';
import { MatchScrapperModule } from './match-scrapper/match-scrapper.module';

@Module({
  imports: [ScrapperManagerModule, MatchScrapperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
