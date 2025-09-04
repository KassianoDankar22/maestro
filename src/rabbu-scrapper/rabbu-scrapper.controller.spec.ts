import { Test, TestingModule } from '@nestjs/testing';
import { RabbuScrapperController } from './rabbu-scrapper.controller';
import { RabbuScrapperService } from './rabbu-scrapper.service';

describe('RabbuScrapperController', () => {
  let controller: RabbuScrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RabbuScrapperController],
      providers: [RabbuScrapperService],
    }).compile();

    controller = module.get<RabbuScrapperController>(RabbuScrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
