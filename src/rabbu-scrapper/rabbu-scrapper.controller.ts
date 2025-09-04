import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RabbuScrapperService } from './rabbu-scrapper.service';
import { CreateRabbuScrapperDto } from './dto/create-rabbu-scrapper.dto';
import { UpdateRabbuScrapperDto } from './dto/update-rabbu-scrapper.dto';

@Controller('rabbu-scrapper')
export class RabbuScrapperController {
  constructor(private readonly rabbuScrapperService: RabbuScrapperService) {}

  @Post()
  create(@Body() createRabbuScrapperDto: CreateRabbuScrapperDto) {
    return this.rabbuScrapperService.create(createRabbuScrapperDto);
  }

  @Get()
  findAll() {
    return this.rabbuScrapperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rabbuScrapperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRabbuScrapperDto: UpdateRabbuScrapperDto) {
    return this.rabbuScrapperService.update(+id, updateRabbuScrapperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rabbuScrapperService.remove(+id);
  }
}
