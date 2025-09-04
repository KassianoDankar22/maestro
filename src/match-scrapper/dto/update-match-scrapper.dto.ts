import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchScrapperDto } from './create-match-scrapper.dto';

export class UpdateMatchScrapperDto extends PartialType(CreateMatchScrapperDto) {}
