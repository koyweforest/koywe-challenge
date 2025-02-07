import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
    createQuote(amount: number, from: string, to: string) {
        throw new Error('Method not implemented.');
    }
    async convertToCrypto(amount: number, currency: string, crypto: string): Promise<number> {
        const exchangeRate = await this.getExchangeRate(currency, crypto);
        return amount * exchangeRate;
    }

    async convertToFiat(amount: number, crypto: string, currency: string): Promise<number> {
        const exchangeRate = await this.getExchangeRate(crypto, currency);
        return amount * exchangeRate;
    }

    private async getExchangeRate(from: string, to: string): Promise<number> {
        //tasa de cambio simulada
        return 0.5;
    }
}
