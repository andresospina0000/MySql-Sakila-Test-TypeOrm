import { Controller, Get } from '@nestjs/common';
import { SakilaService } from './app.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly appService: SakilaService) { }

  @Get()
  getCountries() {
    return this.appService.getCountries();
  }
}
