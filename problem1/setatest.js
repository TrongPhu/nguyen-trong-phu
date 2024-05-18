/*
Introduction:
1.	What is your responsibility, and contribution? 
•	What kind of API is your project using? Restful hay GraphQL?

Restful API: https://aws.amazon.com/what-is/restful-api/
https://www.redhat.com/en/topics/api/what-is-a-rest-api

GraphQL: https://www.wallarm.com/what/what-is-graphql-definition-with-example?utm_source=adwords&utm_medium=ppc&utm_term=&utm_campaign=retarget+24&hsa_src=x&hsa_acc=2801239276&hsa_ver=3&hsa_ad=&hsa_cam=21158819023&hsa_grp=&hsa_net=adwords&hsa_mt=&hsa_kw=&hsa_tgt=&gad_source=1&gclid=CjwKCAjwl4yyBhAgEiwADSEjeKMjsvVH6zI5mjawt5pY_AZhpthic3pZ8MUqLYQemo2birIiFbPBJRoC6doQAvD_BwE


2.	What is the difference between reactJS with other frameworks? Why do we use reactJS  instead of Angular, Vuejs?
https://radixweb.com/blog/react-vs-angular

3.	What is faster and why?
https://radixweb.com/blog/react-vs-angular

4.	What is the blueprint of reactjs? docker? material ui? micro front-end architecture?
5.	How to containerize apps? dockerfile?
https://docs.docker.com/guides/walkthroughs/containerize-your-app/

6.	What are Jenkin using for? Deployment pipeline, ci/cd?  integrate automated tests?
7.	Any cloud platform are you using?
8.	Landing page, how to implement?
9.	Lifecycle of React? What is the difference between state and props?
10.	When building docker, what needs to be noted in file docker?
11.	ES stands for? Difference between ES5, ES6, ES7, ES8? ES12
a.	https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4 
12.	What is polyfill in JS?
https://developer.mozilla.org/en-US/docs/Glossary/Polyfill

13.	CORS? JWT? JWT token data? How to call the security api calling?
 

14.	What is a virtual DOM?
https://legacy.reactjs.org/docs/faq-internals.html

15.	What is the function in JS to use Redux Saga? (Generator)
16.	Typescript? Benefit?
The Benefits of using TypeScript are:
TypeScript is fast, simple, easy to learn and runs on any browser or JavaScript engine.
It is similar to JavaScript and uses the same syntax and semantics.
This helps backend developers write front-end code faster.
You can call the TypeScript code from an existing JavaScript code. Also, it works with existing JavaScript frameworks and libraries without any issues.
The Definition file, with .d.ts extension, provides support for existing JavaScript libraries like Jquery, D3.js, etc.
It includes features from ES6 and ES7 that can run in ES5-level JavaScript engines like Node.js.


17.	 What are the Disadvantages of TypeScript?
TypeScript has the following disadvantages:
●	TypeScript takes a long time to compile the code.
●	It does not support abstract classes.
●	If we run the TypeScript application in the browser, a compilation step is required to transform TypeScript into JavaScript.
●	Web developers have been using JavaScript for decades and TypeScript doesn’t bring anything new.
●	To use any third party library, the definition file is a must.
●	Quality of type definition files is a concern.

18.	What are the Differences between TypeScript and JavaScript?
- JavaScript is a scripting language which helps you create interactive web pages whereas Typescript is a superset of JavaScript.
- Typescript code needs to be compiled while JavaScript code doesn’t need to be compiled.
- Comparing TypeScript and JS, Typescript supports a feature of prototyping while JavaScript doesn’t support this feature.
- Typescript uses concepts like types and interfaces to describe data being used whereas JavaScript has no such concept.

19.	 Why do we need TypeScript?
There are different reasons why a JavaScript developer should consider using TypeScript. Some of them include:
●	Using new features of ECMAScript: TypeScript supports new ECMAScript standards and transpile them to ECMAScript targets of your choice. So, you can use features of ES2015 and beyond.
●	Static Typing: JavaScript is dynamically typed and does not know what type a variable is until it is actually instantiated at run-time. TypeScript adds type support to JavaScript.
●	Type Inference: TypeScript makes typing a bit easier and a lot less explicit by the usage of type inference. Even if you don’t explicitly type the types, they are still there to save you from doing something which otherwise would result in a run-time error.
●	Better IDE Support: The development experience with TypeScript is a great improvement over JavaScript. There is a wide range of IDEs that have excellent support for TypeScript, like Visual Studio & VS code, Atom, Sublime, and IntelliJ/WebStorm.
●	Strict Null Checking: Errors, like cannot read property ‘x’ of undefined, is common in JavaScript programming. You can avoid most of these kinds of errors since one cannot use a variable that is not known to the TypeScript compiler.
●	Interoperability: TypeScript is closely related to JavaScript so it has great interoperability capabilities, but some extra work is required to work with JavaScript libraries in TypeScript.

21. Which types of  typescript cannot be run on  js es6?

*/

/*
Algorithm
1.	Two sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

 
Constraints:
●	2 <= nums.length <= 104
●	-109 <= nums[i] <= 109
●	-109 <= target <= 109
●	Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

var checkTwoSum = function (array, target){
  let res = [];
  for(let i = 0; i < array.length; i++){
      if(array[i] + array[i+1] === target){
          res.push(i, i+1);
      }
  }
  return res;
}

console.log(checkTwoSum([2,7,11,15], 9));
console.log(checkTwoSum([3,2,4], 6));
console.log(checkTwoSum([3,3], 6));

/*
2.	Longest substring without repeating
Given a string s, find the length of the longest substring without repeating characters.
 
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
Abcabdab

*/

var checkLongestSubstring = function (str){
  let res = [];
  let strArr = str.split('');
  for(let i = 0; i < strArr.length; i++){
      if(!rs.includes(strArr[i])){
          res.push(strArr[i]);
      }
  }
  return res.join('');
}

var subString = checkLongestSubstring('abcabcbb');
console.log(subString);
console.log(subString.length);


/*
3.	Integer to roman
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numerals, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.
 
Example 1:
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.

Example 2:
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 3:
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

 
Constraints:
1 <= num <= 3999

	….
	M = 1000 
	CM = 900
	D = 500
	CD= 400
C = 100
XC = 90
L =50
XL = 40
X = 10
IX = 9
V = 5
IV = 4
I = 1

3999%1000 = 3/999 %900 = 1/99 %90 = 1/9
MMMCMXCIX = 3999

324 %100 = 3/24 =
CCCXXIV

25 -> XXV
24- >XXIV
*/

const numberToRoman = function(num){
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(numberToRoman(24));

/*
4.	ATM
The ATM is having 2000 (5 notes), 500 (10 notes), 200 (10 notes), 100 (10 notes)

Input: Withdraw amount
Output: Number of each notes

Ex:
6000 - 3 notes of 2000
1600 - 3 notes of 500 and 1 note of 100
1650 - Not a valid amount
32000 - Amount not available in ATM

13000 %2000 = 6>5?5/6   3000
3000/500 = 6<10

*/

function countCurrency(amount) {
  var notes = [2000, 500, 200, 100];
  var noteCounter = [0, 0, 0, 0];

  for (var i = 0; i < 4; i++) {
    if (amount >= notes[i]) {
      noteCounter[i] = Math.floor(amount / notes[i]);
      amount = amount - noteCounter[i] * notes[i];
    }
  }
  
  if(amount > 0){
    console.log('Not a valid amount');
    return;
  }

  // Print notes denomination
  console.log("Denomination Count:");
  for (var j = 0; j < 4; j++) {
    if (noteCounter[j] !== 0) {
      console.log(notes[j] + " : " + noteCounter[j]);
    }
  }
}

countCurrency(32000);
