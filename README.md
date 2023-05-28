# Big - BigInt Utils

```js
import * as Big from './Big';

// Example 1: Using the Big.abs() function
const num1 = -10n;
const absoluteValue1 = Big.abs(num1);
console.log(`Absolute value of ${num1} is ${absoluteValue1}`);

// Example 2: Using the Big.log2() function
const num2 = 16n;
const logarithm2 = Big.log2(num2);
console.log(`Log base 2 of ${num2} is ${logarithm2}`);

// Example 3: Using the Big.sqrt() function
const num3 = 25n;
const squareRoot3 = Big.sqrt(num3);
console.log(`Square root of ${num3} is ${squareRoot3}`);

// Example 4: Using the Big.getSmallerRootOfQuadEqn() function
const a = 1n;
const b = 6n;
const c = 8n;
const smallerRoot = Big.getSmallerRootOfQuadEqn(a, b, c);
console.log(`Smaller root of the quadratic equation ${a}x^2 + ${b}x + ${c} = 0 is ${smallerRoot}`);

// Example 5: Using the Big.divRoundingUp() function
const dividend = 17n;
const divisor = 5n;
const quotient = Big.divRoundingUp(dividend, divisor);
console.log(`Quotient of division ${dividend} / ${divisor} (rounded up) is ${quotient}`);

// Example 6: Using the Big.fromRoundingUp() function
const decimalNumber = 7.8;
const roundedUpBigInt = Big.fromRoundingUp(decimalNumber);
console.log(`Rounded up BigInt value of ${decimalNumber} is ${roundedUpBigInt}`);

// Example 7: Using the Big.max() function
const maximum = Big.max(10n, 5n, 20n, 15n);
console.log(`Maximum value is ${maximum}`);

// Example 8: Using the Big.min() function
const minimum = Big.min(10n, 5n, 20n, 15n);
console.log(`Minimum value is ${minimum}`);
```
