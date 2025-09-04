import { Injectable } from '@nestjs/common';
import { CreateZillowScrapperDto } from './dto/create-zillow-scrapper.dto';
import { UpdateZillowScrapperDto } from './dto/update-zillow-scrapper.dto';

// TODO: Conectar com o API scrapper do Zillow

@Injectable()
export class ZillowScrapperService {
  create(createZillowScrapperDto: CreateZillowScrapperDto) {
    return 'This action adds a new zillowScrapper';
  }

  findAll() {
    return `This action returns all zillowScrapper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zillowScrapper`;
  }

  update(id: number, updateZillowScrapperDto: UpdateZillowScrapperDto) {
    return `This action updates a #${id} zillowScrapper`;
  }

  remove(id: number) {
    return `This action removes a #${id} zillowScrapper`;
  }
}
