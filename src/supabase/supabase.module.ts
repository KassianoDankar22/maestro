import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SupabaseController } from './supabase.controller';
import { SupabaseRepository } from './supabase.repository';

@Module({
  controllers: [SupabaseController],
  providers: [SupabaseService, SupabaseRepository],
})
export class SupabaseModule {}
