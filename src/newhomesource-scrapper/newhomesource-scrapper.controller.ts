import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewhomesourceScrapperService } from './newhomesource-scrapper.service';
import { CreateNewhomesourceScrapperDto } from './dto/create-newhomesource-scrapper.dto';
import { UpdateNewhomesourceScrapperDto } from './dto/update-newhomesource-scrapper.dto';

@Controller('newhomesource-scrapper')
export class NewhomesourceScrapperController {
  constructor(private readonly newhomesourceScrapperService: NewhomesourceScrapperService) {}

  @Post()
  create(@Body() createNewhomesourceScrapperDto: CreateNewhomesourceScrapperDto) {
    return this.newhomesourceScrapperService.create(createNewhomesourceScrapperDto);
  }

  @Get()
  findAll() {
    return this.newhomesourceScrapperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newhomesourceScrapperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewhomesourceScrapperDto: UpdateNewhomesourceScrapperDto) {
    return this.newhomesourceScrapperService.update(+id, updateNewhomesourceScrapperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newhomesourceScrapperService.remove(+id);
  }
}
