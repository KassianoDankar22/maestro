import { Injectable } from '@nestjs/common';
import { NewhomesourceScrapperService } from 'src/newhomesource-scrapper/newhomesource-scrapper.service';
import { ZillowScrapperService } from 'src/zillow-scrapper/zillow-scrapper.service';
import { RabbuScrapperService } from 'src/rabbu-scrapper/rabbu-scrapper.service';

@Injectable()
export class ScrapperManagerService {
  constructor(
    private readonly newhomesourceScrapperService: NewhomesourceScrapperService,
    private readonly zillowScrapperService: ZillowScrapperService,
    private readonly rabbuScrapperService: RabbuScrapperService,
  ) {}

  async iniciarScrapper() {
    try {
      const [newhomesourceData, zillowData, rabbuData] = await Promise.all([
        this.newhomesourceScrapperService.scrapeNewhomesource(),
        this.zillowScrapperService.scrapeZillow(),
        this.rabbuScrapperService.scrapeRabbu(),
      ]);

      return {
        NewHomeSource: newhomesourceData,
        Zillow: zillowData,
        Rabbu: rabbuData,
      };
    } catch (error) {
      console.error('Erro ao iniciar scrapper: ', error.message);
      throw error;
    }
  }
}
