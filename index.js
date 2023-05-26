'use strict';

Object.assign(BigInt, {
  abs(x) {
    return (x >= 0n ? x : -x);
  },
  log2(x) {
    let lo = 0n;
    let hi = x;
    while (lo < hi) {
      const mid = ((lo + hi) / 2n);
      if((2n ** mid) <= x) {
        lo = mid + 1n;
      } 
      else {
        hi = mid;
      }
    }
    return lo - 1n;
  },
  sqrt(y) {
    let z = y;
    if(y > 3n) {
      let x = (y / 2n) + 1n;
      while(x < z) {
        z = x;
        x = ((y / x) + x) / 2n;
      }
    }
    else if(y != 0n) {
      z = 1n;
    }
    return z;
  },
  getSmallerRootOfQuadEqn(a, b, c) {
    const root = (b * b) - (a * c);
    if(root < 0n) return 0n;
    return ((b - BigInt.sqrt(root)) / a);
  },
  divRoundingUp(x, y) {
    return ((x / y) + (((x % y) > 0n) ? 1n : 0n));
  },
  fromRoundingUp(x) {
    return BigInt(Math.ceil(x));
  },
  max(...args) {
    let ret = args[0];
    for(const val of args) {
      if(val > ret) {
        ret = val;
      }
    }
    return ret;
  },
  min(...args) {
    let ret = args[0];
    for(const val of args) {
      if(val < ret) {
        ret = val;
      }
    }
    return ret;
  },
});
