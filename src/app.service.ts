import { Injectable } from '@nestjs/common';
import { ScrapperManagerService } from './scrapper-manager/scrapper-manager.service';
import { MatchScrapperService } from './match-scrapper/match-scrapper.service';

@Injectable()
export class AppService {
  constructor(
    private readonly scrapperManagerService: ScrapperManagerService,
    private readonly matchScrapperService: MatchScrapperService,
  ) {}

  async loteColetarDados() {
    try {
      const data = await this.scrapperManagerService.iniciarScrapper();

      const matchedData = this.matchScrapperService.matchData(data);

      // TODO: salvar os dados tratados no banco de dados pelo Prisma
      return matchedData;
    } catch (error) {
      console.error('Erro ao coletar dados: ', error.message);
      throw error;
    }
  }
}
