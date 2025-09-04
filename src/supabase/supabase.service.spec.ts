import { Test, TestingModule } from '@nestjs/testing';
import { SupabaseService } from './supabase.service';
import { SupabaseRepository } from './supabase.repository';

describe('SupabaseService', () => {
  let service: SupabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupabaseService, SupabaseRepository],
    }).compile();

    service = module.get<SupabaseService>(SupabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
