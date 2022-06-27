import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientDTO } from './client.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':client')
  getHello(@Param('client') client: ClientDTO): string {
    console.log(client)
    return this.appService.getHello();
  }
}
