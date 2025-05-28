function nthUglyNumber(n) {
    const ugly = [1];
    let i2 = 0, i3 = 0, i5 = 0;
    
    for (let i = 1; i < n; i++) {
       const nextUgly = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
       ugly.push(nextUgly);
       if (nextUgly === ugly[i2] * 2) i2++;
       if (nextUgly === ugly[i3] * 3) i3++;
       if (nextUgly === ugly[i5] * 5) i5++;
   }
    return ugly[n - 1];
}

console.log(nthUglyNumber(10)); 
console.log(nthUglyNumber(1));
