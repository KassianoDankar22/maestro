import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TODO: pegar todos os dados do banco de dados
  @Get('dadosDoBanco')
  dadosDoBanco() {
    return 'Essa rota ainda não foi implementada';
  }

  // TODO: pegar todos os dados dos scrappers e trata-los
  @Get()
  async loteColetarDados() {
    return await this.appService.loteColetarDados();
  }
}
