import { Test, TestingModule } from '@nestjs/testing';
import { ScrapperManagerController } from './scrapper-manager.controller';
import { ScrapperManagerService } from './scrapper-manager.service';

describe('ScrapperManagerController', () => {
  let controller: ScrapperManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrapperManagerController],
      providers: [ScrapperManagerService],
    }).compile();

    controller = module.get<ScrapperManagerController>(ScrapperManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
