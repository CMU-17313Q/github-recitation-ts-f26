// Endpoint for querying the fibonacci numbers

import fibonacciModule from "./fib";

const fibonacci = fibonacciModule as (n: number) => number;

interface Request {
  params: {
    num: string;
  };
}

interface Response {
  send: (result: string) => void;
}

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};