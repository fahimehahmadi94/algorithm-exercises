/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/

function areThereDuplicates1(...arguments) {
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arguments[i] === arguments[j] && i !== j) {
                return console.log('There Are Duplicates');
            }
        }
    }
    return false;
}

areThereDuplicates1(1, 2, 3, 1)



function areThereDuplicates(...arguments) {
    let frequencyCounter = {}

    for (let value of arguments) {
        if (frequencyCounter[value]) {
            console.log('There Are Duplicates');
            return true;
        }
        frequencyCounter[value] = 1;

    }
    return false;
}

areThereDuplicates(1, 2, 3, 3)