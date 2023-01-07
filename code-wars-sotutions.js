// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
//Question 1
function solution(number) {
  let counter = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i;
    }
  }
  return counter;
}
/*
Question 1 is asking me to find the multiples of 3 or 5 that is below the input which is "number"
On line 4 I declared a counter with the value of 0 so I can add each multiple to that counter 
On line 5 I iterated through the number by creating a for loop to find the multiples of 3 or 5. I set i to start at 3 because I wanted to avoid all edge cases that are less than 3.
On lines 6-7 I set a condition which is an if statement stating that if i is divisible by 3 or 5, I  would add the multiple to the counter.
Lastly line 10 I returned counter which is the sum of all multiples less than the argument.
*/

//Question 2
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
  }
}
/*
Question 2 is asking me to find how many people liked something. 
On lines 22-24 I set a condition which is an if statement staing that if the array has the length of 0 I would want it to  return "no one like this" which is a string with no names. 
On lines 25-33 I set a condition stating that if the array has a length of 1-3 I would return the name of the  index position within the string. 
On lines 34-35 I set a condition stating if the array length is greater than or equal to 4 I would return the first 2 names of the index position and the length of the array minus the first two names that is previously listed. 
*/
//Question 3
function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

}
console.log(findUniq([1, 0, 0]));
/*
Question 3 is asking me to find the number that is differnt from the list of numbers in the array.
On line 46 I iterated through the array by creating a for loop to find which number is different. 
On lines 47-48 I used the  higher order functions "indexOf,lastIndexOf" to state that if the first index of "arr" which is the arguments name is strictly equal to the last index in "arr" I would return the element of that index in the array. The higher order function "indexOf" is used to return the  position of the first occurrence of the specified element in the given array. "lastIndexOf" method is used to return the position of the last occurrence of a specific element in the given array. 
On line 53 I used "console.log" to test my code to see if it's correct.
*/

//Question 4
function findOutlier(integers) {
  let evens = [];
  let odds = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evens.push(integers[i]);
    }
    else {
      odds.push(integers[i]);
    }
  }
  if (evens.length > odds.length) {
    return odds[0];
  }
  else {
    return evens[0];
  }
}
/*
Question 4 is asking me to find the outlier of the array of integers given. 
On line 63 I declared a variable name "evens" and set it equal to an empty array. 
On line 64 I declared a variable name "odds" and set it equal to an empty array.
On line 66 I iterated through integers by creating a for loop to find which numbers are the outliers. 
On lines 67-68 I created an if statement stating that if the index of "integers" is divisible by 2 and the remainder is 0, I would push it to the "evens" array.
On lines 70-71 I created an else statement stating that if the index of integers is not divisible by 2 push it to the odds array. 
On lines 74-75 I created another if statement stating that if the length of the evens array is greater than the length of the odds array I would return the integers in the odds array which are the outliers.
On lines 77-78 I created an else statement stating that if it's the opposite, the length of the evens array  is less than the length of the odds array I would return the integers in the evens array which are the outlier.
*/

//Question 5
function duplicateCount(text) {
  let counter = 0;
  let object = {};

  for (let i = 0; i < text.length; i++) {
    if (object[text[i].toLowerCase()]) {
      object[text[i].toLowerCase()] += 1;
    }
    else {
      object[text[i].toLowerCase()] = 1;
    }
  }
  for (let i in object) {
    if (object[i] > 1) {
      counter++;
    }
  }
  return counter;

}
/*
Question 5 is asking me to find the amount of times an alphabet (both lower or upper case) or a number is repeated in a string.
On line 94 I declared a variable name "counter" with the value of 0.
On line 95 I created an object and set it equal to an empty curly bracket. I created an object  so that I can store all the alphabets or numbers that were repeated in any given string. 
On line 97 I iterated through the text by creating a for loop to find which alphabet or number is repeated in the string.
On lines 98-99 I created an if statement stating that if the index already exists in the object it would add a value of 1 to it 
On lines 101-102 I created an else statement staing that if it doesn't exists it would give it a value of one. I used the ".toLowerCase()" method because it returns the value of a string converted to lowercase.
On line 105 I created another for loop where it is iterating through the object. 
On line 106 I created an if statement stating that if I find a character with the value over 1 I add it to the counter.
On line 110 I returned counter, which is the amount of times alphabets or numbers was repeated in the string. 

*/

//Question 6
function moveZeros(arr) {
  let zerosArr = [];
  let othersArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zerosArr.push(arr[i]);
    }
    else {
      othersArr.push(arr[i]);
    }
  }
  let joinedArr = othersArr.concat(zerosArr);

  return joinedArr;
}
/*
Question 6 is asking me to move all the zeros to the end in any given array. 
On line 128 I declared a variable name "zerosArr" and set it equal to an empty array. This allows me to have an empty aray for all the zeros that are found in the array. 
On line 129 I declared a variable name "othersArr" and set it equal to an empty array. This allows me to have an empty array for the rest of the elements in the array that aren't zeros.
On line 131 I created a for loop which allows the computer to iterate through the array to see which elements are zeros.
On lines 132-133 I created an if statement stating that, if the index of (arr) which is the name of the argument, is equal to 0 I would push it to the zeros array.
On lines 135-136 I made else statement stating that if the element in the array is not a 0 I would push that element into the others array. 
On line 139 I created a new variable name "joinedArr" and set it equal to othersArr concat the zerosArr. The concat method allows both of the arrays to merge together and it would return both the arrays together.
Lastly on line 141 I returned "joined array" which is the merging of both the zerosArr and the othersArr.
*/

//Question 7
function pigIt(str) {
  let newArr = [];
  let strArr = str.split(" ");
  strArr.forEach(wrd => {
    let wordArr = wrd.split("");
    wordArr.push(wordArr[0], 'ay'), wordArr.shift();
    if (wrd === '!' || wrd === '?' || wrd === '.') {
      newArr.push(wrd);
    }
    else {
      newArr.push(wordArr.join(""));

    }
  });
  return newArr.join(" ");

}
  
/*
Question 7 is asking me to move the first letter of a word to the end of it and then add "ay" to it.
On line 156 I declared a variable name "newArr" and set it equal to an empty array.
On lines 157-158 I declared  a new variable name "strArr" and set it equal to "str.split (" ")" which converts the string into an array of words. I then use a high order method "forEach" to iterate through "strArr".
On line 159 I created a variable name "wordArr" and set it equal to "wrd.split("") which creates an aray of arrays.
On line 160 it  is pushing the first letter and "ay" to the end of the word. 
On lines 161-162 I created an if statement stating that if the "!,? or ." is found it would push the punctuation as it is. 
On line 164 I created an else statemment stating that if there is no punctuations there it would push "wrdArr" into "newArr" and it will be joined. 
On line 169 it would return the newArr as a string using join.


*/