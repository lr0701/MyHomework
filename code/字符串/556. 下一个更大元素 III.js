function nextGreaterElement(n) {
    // 将数字转换为字符数组，方便操作每一位数字
    const nums = n.toString().split('').map(Number);
    const len = nums.length;
    let i = len - 2;
    // 从后往前找，找到第一个升序对的较小数
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i < 0) {
        return -1; 
    }
    let j = len - 1;
    // 从后往前找，找到第一个比nums[i]大的数
    while (nums[j] <= nums[i]) {
        j--;
    }
    // 交换这两个数
    [nums[i], nums[j]] = [nums[j], nums[i]];
    // 反转i后面的数字，得到最小的排列
    reverse(nums, i + 1);
    const result = parseInt(nums.join(''), 10);
    // 判断是否为 32 位整数，2^31 - 1 是最大的 32 位有符号整数
    return result > 2147483647? -1 : result;
}

function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}