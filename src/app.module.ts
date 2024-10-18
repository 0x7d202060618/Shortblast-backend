import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PairController } from './pair/pair.controller';
import { PrismaService } from './prisma/prisma.service';
import { TokenController } from './token/token.controller';
import { PriceController } from './price/price.controller';

@Module({
  imports: [HttpModule],
  controllers: [PairController, TokenController, PriceController],
  providers: [PrismaService],
})
export class AppModule {}
