import { Controller, Get } from '@nestjs/common';
import { PriceService, BarData } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  async getPrice(): Promise<{ price: BarData[] }> {
    const price = await this.priceService.getTokenPrice();
    return { price };
  }
}
