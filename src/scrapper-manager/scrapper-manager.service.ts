import { Injectable } from '@nestjs/common';
import { NewhomesourceScrapperService } from 'src/newhomesource-scrapper/newhomesource-scrapper.service';
import { ZillowScrapperService } from 'src/zillow-scrapper/zillow-scrapper.service';
import { RabbuScrapperService } from 'src/rabbu-scrapper/rabbu-scrapper.service';

@Injectable()
export class ScrapperManagerService {
  async iniciarScrapper() {
    const newhomesourceScrapper = new NewhomesourceScrapperService();
    const newhomesourceData = await newhomesourceScrapper.scrapeNewhomesource();

    const zillowScrapper = new ZillowScrapperService();
    const zillowData = await zillowScrapper.scrapeZillow();

    const rabbuScrapper = new RabbuScrapperService();
    const rabbuData = await rabbuScrapper.scrapeRabbu();

    return {
      NewHomeSource: newhomesourceData,
      Zillow: zillowData,
      Rabbu: rabbuData,
    };
  }
}
