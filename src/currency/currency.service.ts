import { Injectable } from '@nestjs/common';
import { CurrencyRateService } from './currency-rate.service';


@Injectable()
export class CurrencyService {
    constructor(private readonly currencyRateService: CurrencyRateService) {}

    async convertToCrypto(amount: number, currency: string, crypto: string): Promise<number> {
        const exchangeRate = await this.currencyRateService.getExchangeRate(currency, crypto);
        return amount * exchangeRate;
    }

    async convertToFiat(amount: number, crypto: string, currency: string): Promise<number> {
        const exchangeRate = await this.currencyRateService.getExchangeRate(crypto, currency);
        return amount * exchangeRate;
    }

    async createQuote(amount: number, from: string, to: string): Promise<{ amount: number; from: string; to: string }> {
        const exchangeRate = await this.currencyRateService.getExchangeRate(from, to);
        const convertedAmount = amount * exchangeRate;

        return {
            amount: convertedAmount,
            from,
            to,
        };
    }
}
