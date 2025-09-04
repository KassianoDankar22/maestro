import { Injectable } from '@nestjs/common';
import { CreateSupabaseDto } from './dto/create-supabase.dto';
import { UpdateSupabaseDto } from './dto/update-supabase.dto';

import { SupabaseRepository } from './supabase.repository';

@Injectable()
export class SupabaseService {
  constructor(private readonly supabaseRepository: SupabaseRepository) {}

  async create(createSupabaseDto: CreateSupabaseDto) {
    return await this.supabaseRepository.create(createSupabaseDto);
  }

  async findAll() {
    return await this.supabaseRepository.findAll();
  }

  async findOne(id: number) {
    return await this.supabaseRepository.findOne(id);
  }

  async update(id: number, updateSupabaseDto: UpdateSupabaseDto) {
    return await this.supabaseRepository.update(id, updateSupabaseDto);
  }

  async remove(id: number) {
    return await this.supabaseRepository.delete(id);
  }
}
