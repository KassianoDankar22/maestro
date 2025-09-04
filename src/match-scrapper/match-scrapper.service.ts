import { Injectable } from '@nestjs/common';
import { CreateMatchScrapperDto } from './dto/create-match-scrapper.dto';
import { UpdateMatchScrapperDto } from './dto/update-match-scrapper.dto';

// TODO: Tratar os dados depois de extraidos dos scrapper

@Injectable()
export class MatchScrapperService {
  create(createMatchScrapperDto: CreateMatchScrapperDto) {
    return 'This action adds a new matchScrapper';
  }

  findAll() {
    return `This action returns all matchScrapper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matchScrapper`;
  }

  update(id: number, updateMatchScrapperDto: UpdateMatchScrapperDto) {
    return `This action updates a #${id} matchScrapper`;
  }

  remove(id: number) {
    return `This action removes a #${id} matchScrapper`;
  }
}
