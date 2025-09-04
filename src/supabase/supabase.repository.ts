import { supabase as supabaseClient } from '../../supabaseClient';
// import { Database } from '../../database.types';


export class SupabaseRepository {
  // constructor(private readonly supabase: SupabaseClient<Database>) {}
  constructor(private readonly supabase: typeof supabaseClient) {
    this.supabase = supabaseClient;
  }

  async create(data: any) {
    return this.supabase.from('scrapedData').insert(data);
  }

  async findAll() {
    return this.supabase.from('scrapedData').select('*');
  }
  
  async findOne(id: number) {
    return this.supabase.from('scrapedData').select('*').eq('id', id);
  }

  async update(id: number, data: any) {
    return this.supabase.from('scrapedData').update(data).eq('id', id);
  }
  
  async delete(id: number) {
    return this.supabase.from('scrapedData').delete().eq('id', id);
  }
}