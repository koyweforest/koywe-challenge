import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

// me aseguro que controlador y servicio esten registrados
@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService]
})
export class CurrencyModule {}
