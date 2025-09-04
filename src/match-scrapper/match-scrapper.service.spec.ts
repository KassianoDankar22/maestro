import { Test, TestingModule } from '@nestjs/testing';
import { MatchScrapperService } from './match-scrapper.service';

describe('MatchScrapperService', () => {
  let service: MatchScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchScrapperService],
    }).compile();

    service = module.get<MatchScrapperService>(MatchScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
