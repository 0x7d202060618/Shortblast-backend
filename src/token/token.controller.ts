import { Controller, Get, Logger } from '@nestjs/common';
import { Token } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenDto } from './dto/token.dto';

@Controller('token')
export class TokenController {
  private readonly logger = new Logger(TokenController.name);

  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getTokens(): Promise<{
    tokens: TokenDto[];
  }> {
    const tokens = await this.prisma.token.findMany();
    return {
      tokens: tokens.map((token) => ({
        ...token,
        id: token.id.toString(),
        unitAmount: Number(token.unitAmount.toString()),
      })),
    };
  }
}
