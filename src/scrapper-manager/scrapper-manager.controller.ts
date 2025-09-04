import { Controller } from '@nestjs/common';
import { ScrapperManagerService } from './scrapper-manager.service';

@Controller('scrapper-manager')
export class ScrapperManagerController {
  constructor(private readonly scrapperManagerService: ScrapperManagerService) {}
}
