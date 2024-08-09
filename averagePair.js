/**
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: 0(1)

Sample Input:
averagePair ([1,2,3],2.5) // true 
averagePair ([1,3,3,5,6,7,10,12,19],8) // true 
averagePair ([-1,0,3,4,5,6], 4.1) // false 
averagePair([1],4) // false
**/

function averagePair1(arr, targetAvg) {
    if (arr.length < 2)
        return false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let avrge = arr[i] + arr[j] / 2
            if (avrge === targetAvg) {
                console.log('okay');
                return true;
            }
        }
    }

    return false;
}
averagePair1([1, 2, 3], 2.5);

function averagePair(arr, targetAvg) {
    if (arr.length < 2)
        return false;

    let left = 0;
    let right = arr.length - 1;

    while (left !== right) {
        let middle = (arr[left] + arr[right]) / 2;
        if (middle === targetAvg) {
            console.log(`left:${arr[left]}, right: ${arr[right]} = ${targetAvg}`);
            if (middle < targetAvg) {
                right--;
            } else {
                left++;
            }
        }
    }


}
averagePair([1, 2, 3], 2.5);