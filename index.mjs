// @ts-check
'use strict';

/**
 * Returns the absolute value of a BigInt.
 *
 * @param {bigint} x - The input BigInt value.
 * @returns {bigint} The absolute value of `x`.
 */
export function abs(x) {
  return (x >= 0n ? x : -x);
}

/**
 * Returns the logarithm base 2 of a BigInt.
 *
 * @param {bigint} x - The input BigInt value.
 * @returns {bigint} The logarithm base 2 of `x`.
 */
export function log2(x) {
  let lo = 0n;
  let hi = x;
  while (lo < hi) {
    const mid = ((lo + hi) / 2n);
    if ((2n ** mid) <= x) {
      lo = mid + 1n;
    } else {
      hi = mid;
    }
  }
  return lo - 1n;
}

/**
 * Returns the square root of a BigInt.
 *
 * @param {bigint} y - The input BigInt value.
 * @returns {bigint} The square root of `y`.
 */
export function sqrt(y) {
  let z = y;
  if (y > 3n) {
    let x = (y / 2n) + 1n;
    while (x < z) {
      z = x;
      x = ((y / x) + x) / 2n;
    }
  } else if (y != 0n) {
    z = 1n;
  }
  return z;
}

/**
 * Returns the smaller root of a quadratic equation given the coefficients.
 *
 * @param {bigint} a - The coefficient of the quadratic term.
 * @param {bigint} b - The coefficient of the linear term.
 * @param {bigint} c - The constant term.
 * @returns {bigint} The smaller root of the quadratic equation.
 */
export function getSmallerRootOfQuadEqn(a, b, c) {
  const root = (b * b) - (a * c);
  if (root < 0n) return 0n;
  return ((b - sqrt(root)) / a);
}

/**
 * Performs division rounding up to the nearest BigInt.
 *
 * @param {bigint} x - The dividend.
 * @param {bigint} y - The divisor.
 * @returns {bigint} The result of division rounded up.
 */
export function divRoundingUp(x, y) {
  return ((x / y) + (((x % y) > 0n) ? 1n : 0n));
}

/**
 * Returns the BigInt value obtained by rounding up a decimal number.
 *
 * @param {number|string} x - The input decimal number.
 * @returns {bigint} The BigInt value obtained by rounding up `x`.
 */
export function fromRoundingUp(x) {
  return BigInt(Math.ceil(+x));
}

/**
 * Returns the maximum value among the given arguments.
 *
 * @param {...bigint} args - The values to compare.
 * @returns {bigint} The maximum value.
 */
export function max(...args) {
  let ret = args[0];
  for (const val of args) {
    if (val > ret) {
      ret = val;
    }
  }
  return ret;
}

/**
 * Returns the minimum value among the given arguments.
 *
 * @param {...bigint} args - The values to compare.
 * @returns {bigint} The minimum value.
 */
export function min(...args) {
  let ret = args[0];
  for(const val of args) {
    if(val < ret) {
      ret = val;
    }
  }
  return ret;
}
