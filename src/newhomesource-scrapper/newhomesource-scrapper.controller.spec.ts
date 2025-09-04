import { Test, TestingModule } from '@nestjs/testing';
import { NewhomesourceScrapperController } from './newhomesource-scrapper.controller';
import { NewhomesourceScrapperService } from './newhomesource-scrapper.service';

describe('NewhomesourceScrapperController', () => {
  let controller: NewhomesourceScrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewhomesourceScrapperController],
      providers: [NewhomesourceScrapperService],
    }).compile();

    controller = module.get<NewhomesourceScrapperController>(NewhomesourceScrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
