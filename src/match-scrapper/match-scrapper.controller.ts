import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchScrapperService } from './match-scrapper.service';
import { CreateMatchScrapperDto } from './dto/create-match-scrapper.dto';
import { UpdateMatchScrapperDto } from './dto/update-match-scrapper.dto';

@Controller('match-scrapper')
export class MatchScrapperController {
  constructor(private readonly matchScrapperService: MatchScrapperService) {}

  @Post()
  create(@Body() createMatchScrapperDto: CreateMatchScrapperDto) {
    return this.matchScrapperService.create(createMatchScrapperDto);
  }

  @Get()
  findAll() {
    return this.matchScrapperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchScrapperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchScrapperDto: UpdateMatchScrapperDto) {
    return this.matchScrapperService.update(+id, updateMatchScrapperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchScrapperService.remove(+id);
  }
}
