import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController as CountriesController } from './countries.controller';
import { SakilaService } from './app.service';

describe('CountriesController', () => {
  let appController: CountriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [SakilaService],
    }).compile();

    appController = app.get<CountriesController>(CountriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getCountries()).toBe('Hello World!');
    });
  });
});
