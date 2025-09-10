import { Injectable } from '@nestjs/common';
import { ZillowScrapper } from './entities/zillow-scrapper.entity';

import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ZillowScrapperService {
  async scrapeZillow() {
    try {
      const response: AxiosResponse<ZillowScrapper> = await axios.get(
        process.env.ZILLOW_API_URL || '',
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do Zillow: ', error.message);
      throw error;
    }
  }
}
