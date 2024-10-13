import { Injectable } from '@nestjs/common';

export interface BarData {
  time: number;
  low: number;
  high: number;
  open: number;
  close: number;
}

@Injectable()
export class PriceService {
  // Mock price data
  private mockPriceData: BarData[] = [
    { time: 1728707103, low: 100, high: 110, open: 105, close: 108 },
    { time: 1728796103, low: 101, high: 111, open: 106, close: 109 },
    { time: 1728798103, low: 102, high: 112, open: 107, close: 110 },
    // Add more mock data as needed
  ];

  async getTokenPrice(): Promise<BarData[]> {
    // Just return the mock data. In a real application, you would fetch the data from an API.
    return this.mockPriceData;
  }
}
