// 1) Sum Zero
// Write a function that takes in an array of numbers. 
// The function should return True if any two numbers in list sum to 0, and false otherwise.

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === 0) {
                    return true
                } 
            }
        }
    }
    return false
}

let arr = [3,5,6,7,-6];
console.log(sumZero(arr));

// Runtime = O(n^2)

// -----------------------------------------------------------------------------------------------

function uniqueChars(string) {
    for(let i = 0; i < string.length; i++) {
        for(let j = i + 1; j < string.length; j++) {
            if (string[i] == string[j])
            return false;
        }
    }
    return true;
}

console.log(uniqueChars('Monday'))
console.log(uniqueChars('Moonday'))

// Runtime = O(n^2)

// -----------------------------------------------------------------------------------------------

// 3) Pangram 
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like
// “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

function isItAPangram(str) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (!str.includes(letter)) {
            return false
        }
    }
    return true
}

console.log(isItAPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isItAPangram("I like cats, but not mice"));

// Runtime = O(n)

// -----------------------------------------------------------------------------------------------

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {
    let longWord = arr[0].length;
    for (i = 1; i < arr.length; i++) {
       longWord = Math.max(arr[i].length, longWord)
    }
    return longWord
};

const array = ['hi', 'hello']
console.log(findLongestWord(array))

// Runtime = O(n)