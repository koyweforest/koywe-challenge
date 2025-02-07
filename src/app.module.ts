import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyController } from './currency/currency.controller';
import { CurrencyModule } from './currency/currency.module';

// importo CurrencyModule
@Module({
  imports: [CurrencyModule],
  controllers: [AppController, CurrencyController],
  providers: [AppService],
})
export class AppModule {}
