import { Test, TestingModule } from '@nestjs/testing';
import { ScrapperManagerService } from './scrapper-manager.service';

describe('ScrapperManagerService', () => {
  let service: ScrapperManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapperManagerService],
    }).compile();

    service = module.get<ScrapperManagerService>(ScrapperManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
