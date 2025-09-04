import { Test, TestingModule } from '@nestjs/testing';
import { NewhomesourceScrapperService } from './newhomesource-scrapper.service';

describe('NewhomesourceScrapperService', () => {
  let service: NewhomesourceScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewhomesourceScrapperService],
    }).compile();

    service = module.get<NewhomesourceScrapperService>(NewhomesourceScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
