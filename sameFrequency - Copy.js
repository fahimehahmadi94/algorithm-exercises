/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

function sameFrequency1(int1, int2) {
    if (int1 < 0 && int2 < 0 && int1.Length !== int2.Length) {
        return false;
    }
    for (let i = 0; i < int1.Length; i++) {
        for (let j = 0; j < int2; j++) {
            if (int1[i] === int2[j]) {
                return true;
            }
        }
    }
}
sameFrequency1(125, 521)

//Refactor

function sameFrequency(params1, params2) {
    let list1 = params1.toString();
    let list2 = params2.toString();

    if (list1.length !== list2.length) return false;

    let sameFrequencyCounter1 = {}
    let sameFrequencyCounter2 = {};

    for (let val of list1) {
        sameFrequencyCounter1[val] = (sameFrequencyCounter1[val] || 0) + 1
    }

    for (let val of list2) {
        sameFrequencyCounter2[val] = (sameFrequencyCounter2[val] || 0) + 1
    }


    for (let key in sameFrequencyCounter1) {
        if (sameFrequencyCounter1[key] !== sameFrequencyCounter2[key]) {
            return false;
        }
    }
    return true;

}
sameFrequency(123, 321);