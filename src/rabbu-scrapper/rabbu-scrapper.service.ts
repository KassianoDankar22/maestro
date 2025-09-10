import { Injectable } from '@nestjs/common';
import { RabbuScrapper } from './entities/rabbu-scrapper.entity';

import axios, { AxiosResponse } from 'axios';

@Injectable()
export class RabbuScrapperService {
  async scrapeRabbu() {
    try {
      const response: AxiosResponse<RabbuScrapper> = await axios.get(
        process.env.RABBU_API_URL || '',
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados do Rabbu: ', error.message);
      throw error;
    }
  }
}
