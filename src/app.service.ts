import { Injectable } from '@nestjs/common';
import { ScrapperManagerService } from './scrapper-manager/scrapper-manager.service';
import { MatchScrapperService } from './match-scrapper/match-scrapper.service';

@Injectable()
export class AppService {
  async loteColetarDados() {
    const scrapperManager = new ScrapperManagerService();
    const data = await scrapperManager.iniciarScrapper();

    const matchScrapper = new MatchScrapperService();
    const matchedData = matchScrapper.matchData(data);

    // TODO: salvar os dados tratados no banco de dados pelo Prisma
    return matchedData;
  }
}
