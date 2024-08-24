// Assignment 4 Chapter 35 to 38:

var heading = "<center><br><h1>Assignment 4 Date Method</h1>"
var Chapter = "<h2>Chapter 30 to 34</center></h2>"
document.write(heading + Chapter)


//Question No 1:
function displayDateTime() {
    var date = new Date()
    document.write("<blockquote><br><h3>Q1) " + date)
    
}
displayDateTime();

//Question No 2:
function greetUser() {
    var firstName = "Miss Fatima ";
    var lastName = "Shahzad!";
    var fullName = firstName + lastName;
    alert("Q2) Good Morning " + fullName)
    
}
greetUser();

//Question No 3:
function addition(a,b) {
    return a + b;
}

alert("Ans3) 2 + 3 = " + addition(2,3));
var add = addition(3,6)
alert("Ans3) 3 + 6 = " + add);

//Question No 4:


function calculate(num1, num2, operator) {
     var result;
    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    } else {
        return "Invalid operator";
    }

    return result;
}

// Example usage:
var num1 = 10;
var num2 = 5;
var operator = '+';
var result = calculate(num1, num2, operator);

// Display the result in the browser console
alert("Q4) The result is: " + result);

//Question No 5: 
function square(num) {
    return num * num;
}

// Example usage:
var result = square(5);
alert("Q5) The square is: " + result);

//Question No 6:
function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
var result = factorial(5);
alert("Q6) The factorial is: " + result);

//Question No 7:
function displayCounting(start, end) {
    // Create a string to hold the counting sequence
    var countingSequence = "";

    // Loop from start to end and append each number to the sequence
    for (var i = start; i <= end; i++) {
        countingSequence += i + " ";
    }

    // Display the counting sequence in the browser
    document.write("<br><br>Q7) " + countingSequence);
}

// Example usage:
displayCounting(1, 10);

function calculateHypotenuse(base, perpendicular) {
    // Inner function to calculate the square of a number
    function calculateSquare(num) {
        return num * num;
    }

    // Calculate squares of base and perpendicular
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    // Calculate the hypotenuse using the formula
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    // Return the hypotenuse
    return hypotenuse;
}

// Example usage:
var base = 3;
var perpendicular = 4;
var hypotenuse = calculateHypotenuse(base, perpendicular);
document.write("<br><br>Q8) The hypotenuse is: " + hypotenuse);


//Question No 9:
//Argument as value:
function calculateArea(width, height) {
    return width * height;
}

// Example usage:
var area1 = calculateArea(5, 10); // Passing values directly
document.write("<br><br>Q9) The area (values as arguments) is: " + area1);

//Argument as Variable:
function calculateArea(width, height) {
    return width * height;
}

// Example usage:
var rectWidth = 7;
var rectHeight = 12;
var area2 = calculateArea(rectWidth, rectHeight); // Passing variables as arguments
document.write("<br> The area (variables as arguments) is: " + area2);

//Question No 10:
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    var reversedStr = str.split('').reverse().join('');

    // Check if the original string is the same as the reversed string
    return str === reversedStr;
}

// Example usage:
var word1 = "madam";
var word2 = "hello";

document.write(`<br><br>Q10) Is "${word1}" a palindrome? ${isPalindrome(word1)}`); // true
document.write(`<br>Is "${word2}" a palindrome? ${isPalindrome(word2)}`); // false


//Question No 11:
function capitalizeFirstLetterOfEachWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');
    
    // Map over each word to capitalize the first letter
    var capitalizedWords = words.map(word => {
        // Capitalize the first letter and combine it with the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the array of words back into a single string
    return capitalizedWords.join(' ');
}

// Example usage:
var exampleString = 'the quick brown fox';
document.write("<br><br>Q11 " + capitalizeFirstLetterOfEachWord(exampleString));
// Output: 'The Quick Brown Fox'


//Question No 12:
function findLongestWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');

    // Use the reduce method to find the longest word
    var longestWord = words.reduce((longest, current) => {
        // Return the word with the greater length
        return current.length > longest.length ? current : longest;
    }, '');

    return longestWord;
}

// Example usage:
var exampleString = 'Web Development Tutorial';
document.write("<br><br>Q12)" + findLongestWord(exampleString));
// Output: 'Development'


//Question No 13:
function countLetterOccurrences(str, letter) {
    // Initialize a counter for occurrences
    var count = 0;

    // Convert the string to lowercase if the search is case-insensitive
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    // Loop through each character in the string
    for (var i = 0; i < str.length; i++) {
        // Increment the counter if the character matches the specified letter
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

// Example usage:
var sampleString = 'JSResourceS.com';
var letterToFind = 'o';
document.write("<br><br>Q13) " + countLetterOccurrences(sampleString, letterToFind));
// Output: 2

// Question No 14:
// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write(`<br><br>Q14) The circumference is ${circumference.toFixed(2)}`);
}

// Function to calculate the area of a circle
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write(`<br>The area is ${area.toFixed(2)}`);
}

// Example usage:
var radius = 5;
calcCircumference(radius); // Output: The circumference is 31.42
calcArea(radius);          // Output: The area is 78.54










