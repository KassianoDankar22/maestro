import { PartialType } from '@nestjs/mapped-types';
import { CreateZillowScrapperDto } from './create-zillow-scrapper.dto';

export class UpdateZillowScrapperDto extends PartialType(CreateZillowScrapperDto) {}
