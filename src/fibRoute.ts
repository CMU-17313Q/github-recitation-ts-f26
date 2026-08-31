// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import * as fibonacciModule from "./fib";

const fibonacci = fibonacciModule as unknown as (n: number) => number;

export default (req: Request, res: Response): void => {
  const { num } = req.params as { num: string };

  const fibN = fibonacci(Number(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
