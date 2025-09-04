import { Injectable } from '@nestjs/common';
import { CreateRabbuScrapperDto } from './dto/create-rabbu-scrapper.dto';
import { UpdateRabbuScrapperDto } from './dto/update-rabbu-scrapper.dto';

@Injectable()
export class RabbuScrapperService {
  create(createRabbuScrapperDto: CreateRabbuScrapperDto) {
    return 'This action adds a new rabbuScrapper';
  }

  findAll() {
    return `This action returns all rabbuScrapper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rabbuScrapper`;
  }

  update(id: number, updateRabbuScrapperDto: UpdateRabbuScrapperDto) {
    return `This action updates a #${id} rabbuScrapper`;
  }

  remove(id: number) {
    return `This action removes a #${id} rabbuScrapper`;
  }
}
