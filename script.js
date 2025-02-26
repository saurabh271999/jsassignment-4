// Q1. Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of
// character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
// Note: You have to complete countCharacters function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return array B as output.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// AbaDd
// Sample Output
// 1 1

let S = "AABCDAD";

let countA = 0, countD = 0;

for (let char of S) {
    if (char === 'A')
         countA++;
    else if (char === 'D')
        countD++;
}

let B = [countA, countD];

console.log(B);
console.log('\n')
console.log('\n')
console.log('\n')

// Q2. Count the Heads
// Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how
// many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds
// out the count of characters that occur more than once in the string.
// Note: You have to complete Count Head function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S (with no space and contains only lowercase letters).
// Output Format
// Return updated String S as output, where the string contains the charcter followed by their occurrence (if greater than 1) in
// alphabetical order.

var str = "sauarbh bhardwaj";

// Count occurrences of each character
var charCount = {};
for (var char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
}

// Filter characters that appear more than once
var duplicates = Object.entries(charCount).filter(([char, count]) => count > 1);

console.log("Duplicate characters with count:", Object.fromEntries(duplicates));



console.log('\n')
console.log('\n')
console.log('\n')
// Q3. Count the Vowels
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the
// given string.
// Note: You have to complete Count_Vowel function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the number of Vowels in the string S as output.

var s = "Saurabh";
var count = 0;
var upperstr = s.toUpperCase();
var arrStr = s.split("")

for(var i=0; i<=arrStr.length; i++){
if (arrStr[i] == "a" || arrStr[i] == "e" || arrStr[i] == "i" || arrStr[i] == "e" || arrStr[i] == "i" || arrStr[i] == "u") {
    console.log(arrStr[i])
    count ++
}

}
console.log(`total vowels  is: ${count}`)

console.log('\n')
console.log('\n')
console.log('\n')

// Q4. Even Odd
// You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)),
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// Note: You have to compvare findEvenOdd function. No need to take any input.
// Input Format
// The first line of the input contains an integer N, denoting the number of elements in the array A. The second line of the input
// contains N space-separated integers, denoting the elements of array A.
// Output Format
// Return array B as output.
// Constraints
// 1≤N≤1001≤100 0≤Ai≤1000≤100
// Example
// Sample Input
// 7 1 2 3 4 5 6 7
// Sample Output
// 12 16

let arr = [12,23,23,34,45,56,67,11,9,3,]
let even = []
let odd = []
let sum = 0
let oddsum = 0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
       sum = sum + arr[i]
       even.push(arr[i])
    }
    else{
       odd.push(arr[i])
       oddsum = oddsum+arr[i]
    }
}

console.log(`${even}, and sum of all even is = ${sum}`)
console.log(`${odd}, and sum of all odd is = ${oddsum}`)

console.log('\n')
console.log('\n')
console.log('\n')
// Q4. Concatenate the Strings
// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the
// concatenation of both the given strings.
// Note: You have to complete Concatenate_Strings function. No need to take any input.
// Input Format
// The first line of the input contains the first string S1 and the second line of input contains the second string S2.
// Output Format
// Return the String S3 as output, which is the concatenation of given both strings.
// Constraints
// 1≤|S1|,|S2|≤100, where |S|denotes the length of string S.
// Example
// Sample Input
// Prep bytes
// Sample Output
// Prepbytes


var str = 'Saurabh'
var str_2 = 'Bhardwaj'

var upperstr = str.toUpperCase()
var upperstr_2 = str_2.toUpperCase()

var resStr = upperstr.concat(" ",upperstr_2)
console.log(resStr)

console.log('\n')
console.log('\n')
console.log('\n')
// Q5. Find Length
// You are given a string S, and your task is to return the length of the string S.
// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.

var str = 'hii iam ironman'

console.log(str.length)

console.log('\n')
console.log('\n')
console.log('\n')

// Q6. Find the Winner
// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which
// player wins the maximum number of games or there is a draw between them.
// Note: You have to complete Game_Winner function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the name of the player who have won the maximum number of games, if both player won same number of games return Draw.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. 


var str_6 = 'AAAAAADDAAADDDDD'

let Aditiyacount = 0
let Danishcount = 0
var arrStr = str_6.split('')
console.log(arrStr)

for(let i=0; i<arrStr.length; i++){
    if(arrStr[i] == 'A'){
        Aditiyacount ++
    }
    else{
Danishcount ++
    }
}
if(Aditiyacount > Danishcount){
    console.log(`Aditiya wins by: ${Aditiyacount}`)
}else{
    console.log(`Danish wins by: ${Danishcount}`)
}
console.log(Aditiyacount)
console.log(Danishcount)


// Q7. Join Strings
// You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
// Note: You have to complete joinStrings function. No need to take any input.
// Input Format
// The first and the only line of the input contains two space-separated strings S and P.
// Output Format
// Return the final concatenated string.

function concat(str_1, str_2){
  return res_str = str_1.concat(str_2)

}
console.log(concat('saurabh', 'bhardwaj'))

console.log('\n')
console.log('\n')
console.log('\n')

// Q8. Plaindrome Check
// You are given a string S, Your task is to check wether the given string is a Palindrome or not.
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain
// both upppercase lowercase letters.
// Note: You have to complete Plain_Check function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return "True" if the given string is Palindrome else return "False" (without " ") .

var user_name = 'naman';
var split_name = user_name.split(''); 
var reverse_name = split_name.slice().reverse().join(''); 

if (reverse_name === user_name) { 
    console.log(`${user_name} \n${reverse_name} \nIt is a palindrome`);
} else {
    console.log(`${user_name} \n${reverse_name} \nIt is not a palindrome`);
}
console.log('\n')
console.log('\n')
console.log('\n')

// Q9. Reverse the String
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to
// complete Reverse_String function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return the reversed String.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// I am utkarsh raj
// Sample Output
// jar hsraktu ma I

var str = "hi iam saurabh mern dev"
var sliced_str = str.slice()
console.log(sliced_str.split('').reverse().join(''))

console.log('\n')
console.log('\n')
console.log('\n')


// Q10. Match the Strings
// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.
// Note: You have to complete String_Match function. No need to take any input.
// Input Format
// The first line of the input contains a string S1. The second line of the input contains a string S2.
// Output Format
// Return YES if S1 and S2 are same, else return NO.
// Constraints
// 1≤|S1|,|S2|≤100, where |S| denotes the length of string S. S1 and S2 contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// Prepbytes Prepbytes
// Sample Outp

var str_1 = 'saurabh'
var str_2 = 'saurabh'

var splited_str1 = str_1.split('').slice().join('')
var splited_str2 = str_2.split('').slice().join('')

if(splited_str1 === splited_str2){
    console.log('true')
}
else{
    console.log('false')
}

console.log('\n')
console.log('\n')
console.log('\n')



// Q11. String Replace
// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
// Note: You have to complete Replace function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.
// Output Format
// Return updated String S as output.
// Constraints
// 1≤|S|≤100, where |S| denotes the length of string S. S contains both lowercase and uppercase alphabets.
// Example
// Sample Input
// Hi, I am You. You Prepbytes
// Sample Output
// Hi, I am Prepbytes.

// function samestr(){
// let words = str.split(' ')
// return words.filter((word, index) => words.indexOf(word) === index).join(' ')

// }
// var str_10 = "hello world iam iam learning javascript";

// console.log(samestr(str_10))

var str_10 = "hello world iam iam learning javascript";

var ArrStr = str_10.split(' ')


  let resStr_1 =   ArrStr.filter((word, index) => ArrStr.indexOf(word) === index).join(' ')
  console.log(resStr_1)

console.log('\n')
console.log('\n')
console.log('\n')
//   Q12. Split the String
// You are given a string S, Your task is to split the string with respect to spaces.
// Note: You have to complete Split_the_String function. No need to take any input.
// Input Format
// The first and the only line of the input contains a string S.


var str_12 = 'hi iam saurabh mern dev'

var Arrstr_12 = str_12.split(' ').slice(' ').join('\n')

console.log(Arrstr_12)

// Q13. Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of
// consonants in the given string.
// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
// Input Format
// The first and only line of the input contains string S.
// Output Format
// Return the number of Vowels and the number of Consonants in the string S in the functions.
// Constraints
// 1≤|S|≤100, where |S|denotes the length of string S.
// Example
// Sample Input
// Prepbytes
// Sample Output
// 2 7


var str_13 = 'Preeepbytes'
var vowelCount = 0
var consCount = 0
let Arrcount = []
var Arrstr_13 = str_13.toLowerCase().split('')
for(let i=0; i<Arrstr_13.length; i++){
    if(Arrstr_13[i] === 'a' ||
        Arrstr_13[i] === 'e' ||
        Arrstr_13[i] === 'i' ||
        Arrstr_13[i] === 'o' ||
        Arrstr_13[i] === 'u' 
    ){
        vowelCount ++
       
    }
    else{
consCount ++

    }
}
Arrcount.push(vowelCount, consCount)
console.log(Arrcount)

