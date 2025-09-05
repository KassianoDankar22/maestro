import { Injectable } from '@nestjs/common';
import { MatchScrapper } from './entities/match-scrapper.entity';

@Injectable()
export class MatchScrapperService {
  matchData(data: MatchScrapper) {
    // TODO: Tratar os dados depois de extraidos dos scrapper
    return data;
  }
}
