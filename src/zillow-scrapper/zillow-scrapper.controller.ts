import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZillowScrapperService } from './zillow-scrapper.service';
import { CreateZillowScrapperDto } from './dto/create-zillow-scrapper.dto';
import { UpdateZillowScrapperDto } from './dto/update-zillow-scrapper.dto';

@Controller('zillow-scrapper')
export class ZillowScrapperController {
  constructor(private readonly zillowScrapperService: ZillowScrapperService) {}

  @Post()
  create(@Body() createZillowScrapperDto: CreateZillowScrapperDto) {
    return this.zillowScrapperService.create(createZillowScrapperDto);
  }

  @Get()
  findAll() {
    return this.zillowScrapperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zillowScrapperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZillowScrapperDto: UpdateZillowScrapperDto) {
    return this.zillowScrapperService.update(+id, updateZillowScrapperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zillowScrapperService.remove(+id);
  }
}
