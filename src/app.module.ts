import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceModule } from './price/price.module';

@Module({
  imports: [HttpModule, PriceModule],
})
export class AppModule {}
