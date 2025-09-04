import { PartialType } from '@nestjs/mapped-types';
import { CreateRabbuScrapperDto } from './create-rabbu-scrapper.dto';

export class UpdateRabbuScrapperDto extends PartialType(CreateRabbuScrapperDto) {}
