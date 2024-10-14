import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceModule } from './price/price.module';
import { PairController } from './pair/pair.controller';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [HttpModule, PriceModule],
  controllers: [PairController],
  providers: [PrismaService],
})
export class AppModule {}
