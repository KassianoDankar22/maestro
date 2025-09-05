import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { NewhomesourceScrapper } from './entities/newhomesource-scrapper.entity';

// TODO: Conectar com o API scrapper do Newhomesource

@Injectable()
export class NewhomesourceScrapperService {
  async scrapeNewhomesource() {
    const response: AxiosResponse<NewhomesourceScrapper> = await axios.get(
      process.env.NEWHOMESOURCE_API_URL || '',
    );
    return response.data;
  }
}
