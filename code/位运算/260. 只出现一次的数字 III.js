var singleNumber = function(nums) {
    let xorsum = 0;
    
    for (const num of nums) {
        xorsum ^= num;
    }
    let type1 = 0, type2 = 0;
    const lsb = xorsum & (-xorsum);
    for (const num of nums) {
        if (num & lsb) {
            type1 ^= num;
        } else {
            type2 ^= num;
        }
    }
    return [type1, type2];
};
