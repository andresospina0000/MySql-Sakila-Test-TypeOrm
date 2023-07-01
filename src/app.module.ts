import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { SakilaService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Country } from './country.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'admin',
      password: 'password',
      database: 'sakila',
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Country]), Repository
  ],
  controllers: [CountriesController],
  providers: [SakilaService,],
})
export class AppModule { }
