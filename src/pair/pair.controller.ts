import { Controller, Get } from '@nestjs/common';

@Controller('pair')
export class PairController {
  @Get()
  async getPairs(): Promise<{
    pairs: Array<{ name: string; address: string }>;
  }> {
    return {
      pairs: [
        {
          name: 'Test',
          address: '0xddddadsfasdfsdf',
        },
      ],
    };
  }
}
