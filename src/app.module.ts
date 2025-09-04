import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './supabase/supabase.module';
import { ScrapperManagerModule } from './scrapper-manager/scrapper-manager.module';
import { MatchScrapperModule } from './match-scrapper/match-scrapper.module';

@Module({
  imports: [SupabaseModule, ScrapperManagerModule, MatchScrapperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
