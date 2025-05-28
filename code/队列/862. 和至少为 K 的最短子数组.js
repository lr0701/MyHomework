/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
    let Sum = new Array(nums.length + 1).fill(0)
    Sum.forEach((v, i) => i && (Sum[i] = Sum[i - 1] + nums[i - 1]))
    let q = [], head = tail = 0, res = Infinity
    for (let i = 0; i < Sum.length; i++) {
        while (head < q.length && Sum[i] - Sum[q[head]] >= k) {
            res = Math.min(res, i - q[head])
            head++
        }
        while (q.length && Sum[i] < Sum[q[tail - 1]]) {
            q.pop()
            tail--
        }
        q.push(i)
        tail++
    }
    return res === Infinity ? -1 : res
};