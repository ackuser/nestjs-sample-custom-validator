import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomValid, IsValidClient2Constraint, IsValidClientConstraint } from './custom.validator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IsValidClientConstraint, IsValidClient2Constraint, CustomValid],
})
export class AppModule { }
