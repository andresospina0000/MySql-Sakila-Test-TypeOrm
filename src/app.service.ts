import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './country.entity';

@Injectable()
export class SakilaService {

  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) { }

  getCountries() {
    return this.countryRepository
      .find()//Select global
      .then((countries) => {//captura la respuesta
        return countries.map((country) => {
          return {//mapea la respuesta solo a los campos requeridos
            country_id: country.country_id,
            country: country.country,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
