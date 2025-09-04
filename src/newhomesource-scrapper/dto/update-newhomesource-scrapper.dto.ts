import { PartialType } from '@nestjs/mapped-types';
import { CreateNewhomesourceScrapperDto } from './create-newhomesource-scrapper.dto';

export class UpdateNewhomesourceScrapperDto extends PartialType(CreateNewhomesourceScrapperDto) {}
