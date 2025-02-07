import { Module } from '@nestjs/common';
import { CurrencyModule } from './currency/currency.module';

// importo CurrencyModule
@Module({
  imports: [CurrencyModule],
})
export class AppModule {}
