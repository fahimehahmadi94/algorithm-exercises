/**
Sliding Window - minSubArrayLen

Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Examples:
minSubArrayLen([2, 3, 1, 2, 4, 31], 7); // 1 -> because [31] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [6,5] and [5,4] are the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 191], 52); // 1 -> because [62] and [191] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 101], 39); // 1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 101], 55); // 1
minSubArrayLen([4, 3, 3, 8, 1, 2, 31], 11); // 1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 101], 95); // 1

Time Complexity - O(n)
Space Complexity - O(1)
**/



function minSubArrayLen(arr, target) {
    let minLen = Infinity;
    let windowSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        windowSum += arr[end];


        while (windowSum >= target) {
            minLen = Math.min(minLen, end - start + 1)
            windowSum -= arr[start];
            start++;
        }
    }


    return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 31], 11));