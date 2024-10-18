import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  decimals: number;

  @ApiProperty()
  unitAmount: number;

  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  symbol?: string;

  @ApiPropertyOptional()
  image?: string;
}
