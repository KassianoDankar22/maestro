import { Test, TestingModule } from '@nestjs/testing';
import { ZillowScrapperController } from './zillow-scrapper.controller';
import { ZillowScrapperService } from './zillow-scrapper.service';

describe('ZillowScrapperController', () => {
  let controller: ZillowScrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZillowScrapperController],
      providers: [ZillowScrapperService],
    }).compile();

    controller = module.get<ZillowScrapperController>(ZillowScrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
