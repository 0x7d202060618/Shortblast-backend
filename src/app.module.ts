import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceModule } from './price/price.module';
import { PairController } from './pair/pair.controller';

@Module({
  imports: [HttpModule, PriceModule],
  controllers: [PairController],
})
export class AppModule {}
