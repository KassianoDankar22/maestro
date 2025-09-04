import { Test, TestingModule } from '@nestjs/testing';
import { RabbuScrapperService } from './rabbu-scrapper.service';

describe('RabbuScrapperService', () => {
  let service: RabbuScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabbuScrapperService],
    }).compile();

    service = module.get<RabbuScrapperService>(RabbuScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
