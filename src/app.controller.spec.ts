import { Test, TestingModule } from '@nestjs/testing';
import { SakilaController as SakilaController } from './app.controller';
import { AppService } from './app.service';

describe('SakilaController', () => {
  let appController: SakilaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SakilaController],
      providers: [AppService],
    }).compile();

    appController = app.get<SakilaController>(SakilaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
