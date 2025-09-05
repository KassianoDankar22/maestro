// TODO: Verificar se as entidades funcionam em execução

import { RabbuScrapper } from 'src/rabbu-scrapper/entities/rabbu-scrapper.entity';
import { ZillowScrapper } from 'src/zillow-scrapper/entities/zillow-scrapper.entity';
import { NewhomesourceScrapper } from 'src/newhomesource-scrapper/entities/newhomesource-scrapper.entity';

export class MatchScrapper {
  NewHomeSource: NewhomesourceScrapper;
  Zillow: ZillowScrapper;
  Rabbu: RabbuScrapper;
}
