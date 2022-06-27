import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientDTO } from './client.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':client')
  getHello(@Param() client: ClientDTO): string {
    return this.appService.getHello();
  }
}
