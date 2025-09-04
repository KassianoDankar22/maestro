import { Test, TestingModule } from '@nestjs/testing';
import { MatchScrapperController } from './match-scrapper.controller';
import { MatchScrapperService } from './match-scrapper.service';

describe('MatchScrapperController', () => {
  let controller: MatchScrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchScrapperController],
      providers: [MatchScrapperService],
    }).compile();

    controller = module.get<MatchScrapperController>(MatchScrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
