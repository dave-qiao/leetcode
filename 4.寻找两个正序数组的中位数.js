/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const ret = [].concat(nums1).concat(nums2).sort((a, b) => a - b);
  const len = ret.length;
  const index = Math.floor(len / 2);
  if (len % 2 > 0) {
    return ret[index];
  } else {
    return (ret[index -1] + ret[index]) / 2
  }
};
// @lc code=end

