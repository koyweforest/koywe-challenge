import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
    async convertToCrypto(amount: number, currency: string, crypto: string): Promise<number> {
        const exchangeRate = await this.getExchangeRate(currency, crypto);
        return amount * exchangeRate;
    }

    async convertToFiat(amount: number, crypto: string, currency: string): Promise<number> {
        const exchangeRate = await this.getExchangeRate(crypto, currency);
        return amount * exchangeRate;
    }

    async createQuote(amount: number, from: string, to: string): Promise<{ amount: number; from: string; to: string }> {
        const exchangeRate = await this.getExchangeRate(from, to);
        const convertedAmount = amount * exchangeRate;

        return {
            amount: convertedAmount,
            from,
            to,
        };
    }

    private async getExchangeRate(from: string, to: string): Promise<number> {
        //tasa de cambio simulada
        return 0.5;
    }
}
