import { Controller, Get, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ChartData, transformCandlesTick } from 'src/lib';
import { PrismaService } from 'src/prisma/prisma.service';

// export interface BarData {
//   time: number;
//   low: number;
//   high: number;
//   open: number;
//   close: number;
// }

// const mockPriceData: BarData[] = [
//   { time: 1728707103, low: 100, high: 110, open: 105, close: 108 },
//   { time: 1728796103, low: 101, high: 111, open: 106, close: 109 },
//   { time: 1728798103, low: 102, high: 112, open: 107, close: 110 },
//   // Add more mock data as needed
// ];

@Controller('price')
export class PriceController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getPrice(
    @Query('address') address: string,
    @Query('limit') limit: string,
    @Query('toTs') toTs: string,
  ): Promise<{ data: ChartData[] }> {
    const priceData = await this.prisma.tokenPrice.findMany({
      select: {
        createdAt: true,
        price: true,
      },
      where: {
        token: {
          address: address,
        },
        createdAt: {
          gte: new Date(Number(toTs)),
        },
      },
      orderBy: {
        createdAt: Prisma.SortOrder.asc,
      },
    });

    const chartData = transformCandlesTick(
      priceData.map((data) => ({
        ...data,
        price: data.price.mul(100000000),
      })),
    );
    return { data: chartData };
  }
}
