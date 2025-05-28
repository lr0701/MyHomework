var nextGreaterElements = function(nums) {
    const n = nums.length;
    const ans = Array(n).fill(-1);
    const st = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        const x = nums[i % n];
        while (st.length && x >= st[st.length - 1]) {
            st.pop();
        }
        if (i < n && st.length) {
            ans[i] = st[st.length - 1];
        }
        st.push(x);
    }
    return ans;
};