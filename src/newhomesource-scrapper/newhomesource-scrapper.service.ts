import { Injectable } from '@nestjs/common';
import { NewhomesourceScrapper } from './entities/newhomesource-scrapper.entity';

import axios, { AxiosResponse } from 'axios';

@Injectable()
export class NewhomesourceScrapperService {
  async scrapeNewhomesource() {
    const response: AxiosResponse<NewhomesourceScrapper> = await axios.get(
      process.env.NEWHOMESOURCE_API_URL || '',
    );
    return response.data;
  }
}
