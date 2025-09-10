import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TODO: implementar a rota para pegar todos os dados do banco de dados
  @Get('dadosDoBanco')
  dadosDoBanco() {
    return 'Essa rota ainda não foi implementada';
  }

  @Get()
  async loteColetarDados() {
    return await this.appService.loteColetarDados();
  }
}
