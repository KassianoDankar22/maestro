import { Injectable } from '@nestjs/common';
import { CreateNewhomesourceScrapperDto } from './dto/create-newhomesource-scrapper.dto';
import { UpdateNewhomesourceScrapperDto } from './dto/update-newhomesource-scrapper.dto';

@Injectable()
export class NewhomesourceScrapperService {
  create(createNewhomesourceScrapperDto: CreateNewhomesourceScrapperDto) {
    return 'This action adds a new newhomesourceScrapper';
  }

  findAll() {
    return `This action returns all newhomesourceScrapper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newhomesourceScrapper`;
  }

  update(id: number, updateNewhomesourceScrapperDto: UpdateNewhomesourceScrapperDto) {
    return `This action updates a #${id} newhomesourceScrapper`;
  }

  remove(id: number) {
    return `This action removes a #${id} newhomesourceScrapper`;
  }
}
