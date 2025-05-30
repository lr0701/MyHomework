var subarraySum = function(nums, k) {
    let ans = 0, s = 0;
    const cnt = new Map();
    cnt.set(0, 1); 
    for (const x of nums) {
        s += x;
        ans += cnt.get(s - k) ?? 0;
        cnt.set(s, (cnt.get(s) ?? 0) + 1);
    }
    return ans;
};