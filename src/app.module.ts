import { Module } from '@nestjs/common';
import { SakilaController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [SakilaController],
  providers: [AppService],
})
export class AppModule {}
