var firstMissingPositive = function (nums) {
	const N = nums.length;
	for (let i = 0; i < N; i++) {
		if (nums[i] <= 0) nums[i] = N + 1;
	}
	for (let i = 0; i < N; i++) {
		let x = Math.abs(nums[i]);
		if (x >= 1 && x <= N) {
			nums[x - 1] = nums[x - 1] < 0 ? nums[x - 1] : -nums[x - 1];
		}
	}
	for (let i = 0; i < N; i++) {
		if (nums[i] >= 0) return i + 1;
	}
	return N + 1;
};