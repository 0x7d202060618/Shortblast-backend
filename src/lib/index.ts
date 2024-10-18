import Decimal from 'decimal.js';

export type PriceData = {
  createdAt: Date;
  price: Decimal;
};

export type ChartData = {
  time: number;
  low: Decimal;
  high: Decimal;
  open: Decimal;
  close: Decimal;
};

export const transformCandlesTick = (
  data: PriceData[],
  interval: number = 20 * 60 * 1000,
): ChartData[] => {
  const result: ChartData[] = [];
  let currentCandlestick: ChartData | null = null;
  let intervalStart: number = new Date(data[0].createdAt).getTime();

  data.forEach(({ createdAt, price }) => {
    const timestamp = new Date(createdAt).getTime();

    // Check if we need to start a new candlestick
    if (timestamp >= intervalStart + interval) {
      if (currentCandlestick) {
        result.push(currentCandlestick);
      }

      // Start a new candlestick
      intervalStart = timestamp - (timestamp % interval);
      currentCandlestick = {
        time: intervalStart / 1000,
        open: price,
        high: price,
        low: price,
        close: price,
      };
    }

    // Update current candlestick
    if (currentCandlestick) {
      currentCandlestick.high = Decimal.max(currentCandlestick.high, price);
      currentCandlestick.low = Decimal.min(currentCandlestick.low, price);
      currentCandlestick.close = price;
    }
  });

  // Push the last candlestick
  if (currentCandlestick) {
    result.push(currentCandlestick);
  }

  return result;
};
