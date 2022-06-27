import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsValidClientConstraint } from './custom.validator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IsValidClientConstraint],
})
export class AppModule { }
