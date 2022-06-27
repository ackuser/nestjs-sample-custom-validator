import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsValidClient } from './custom.validator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IsValidClient],
})
export class AppModule {}
