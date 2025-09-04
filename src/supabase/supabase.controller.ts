import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { CreateSupabaseDto } from './dto/create-supabase.dto';
import { UpdateSupabaseDto } from './dto/update-supabase.dto';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post()
  async create(@Body() createSupabaseDto: CreateSupabaseDto) {
    const data = await this.supabaseService.create(createSupabaseDto);
    return { message: 'This action adds a new supabase', data };
  }

  @Get()
  async findAll() {
    const data = await this.supabaseService.findAll();
    return { message: 'This action returns all supabase', data };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.supabaseService.findOne(+id);
    return { message: 'This action returns a #${id} supabase', data };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSupabaseDto: UpdateSupabaseDto,
  ) {
    const data = await this.supabaseService.update(+id, updateSupabaseDto);
    return { message: 'This action updates a #${id} supabase', data };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.supabaseService.remove(+id);
    return { message: 'This action removes a #${id} supabase', data };
  }
}
