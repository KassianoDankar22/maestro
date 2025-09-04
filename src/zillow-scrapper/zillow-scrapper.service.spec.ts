import { Test, TestingModule } from '@nestjs/testing';
import { ZillowScrapperService } from './zillow-scrapper.service';

describe('ZillowScrapperService', () => {
  let service: ZillowScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZillowScrapperService],
    }).compile();

    service = module.get<ZillowScrapperService>(ZillowScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
