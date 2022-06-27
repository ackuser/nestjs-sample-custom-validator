import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientDTO } from './client.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':client')
  getHello(@Param('client', new ValidationPipe({validateCustomDecorators: true})) client: ClientDTO): string {
    // const clientDTO = new ClientDTO();
    // clientDTO.client = client;
    return this.appService.getHello();
  }
}
