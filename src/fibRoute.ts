// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

interface Request {
params: {
num: string;
};
}

interface Response {
send: (result: string) => void;
}

export default (req: Request, res: Response): void => {
const { num } = req.params;

const fibN = fibonacci(parseInt(num, 10));
let result = `fibonacci(${num}) is ${fibN}`;

if (fibN < 0) {
result = `fibonacci(${num}) is undefined`;
}

res.send(result);
};
