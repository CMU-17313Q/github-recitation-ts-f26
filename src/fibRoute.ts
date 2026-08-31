import type { Request, Response } from "express-serve-static-core";
import fibonacci from "./fib";
// Endpoint for querying the fibonacci numbers
export default (
  req: Request<{ num: string }>,
  res: Response
): void => {
  const { num } = req.params;
  const fibN = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
