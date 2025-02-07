import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {
    convertToFiat(amount: number, crypto: string, currency: string) {
        throw new Error('Method not implemented.');
    }
    convertToCrypto(amount: number, currency: string, crypto: string) {
        throw new Error('Method not implemented.');
    }
}
