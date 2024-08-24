// Assignment 4 Chapter 30 to 34:

var heading = "<center><br><h1>Assignment 4 Date Method</h1>"
var Chapter = "<h2>Chapter 30 to 34</center><br></h2>"
document.write(heading + Chapter)

//Question No 1:
var date = new Date();
document.write("<blockquote><h3>Q1) " + date);

//Question No 2:
// Get the current date
var currentDate = new Date();

// Array of month names
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Get the current month (0-indexed, so we add 1)
var currentMonth = monthNames[currentDate.getMonth()];

// Alert the current month
alert("Q2) Current Month: " + currentMonth);

//Question No 3:
// Get the current date
var currentDate = new Date();

// Array of day names
var dayNames = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

// Get the current day (0-indexed)
var currentDay = dayNames[currentDate.getDay()];

// Alert the first 3 letters of the current day
alert("Q3) Today is " + currentDay);

//Question No 4:
// Get the current date
var currentDate = new Date();

// Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var currentDay = currentDate.getDay();

// Check if it's Saturday (6) or Sunday (0)
if (currentDay === 0 || currentDay === 6) {
  alert("Q4) It’s Fun day");
}

//Question No 5:
var CurrentDate = new Date();

var currentDay = CurrentDate.getDate();

if(currentDate < 16){
   alert("Q5) First Fifteen days of the month")
} else {
   alert("Q5) Last days of the month")
}

//Question No 6:
// Create a new Date object representing the current date and time
var currentDate = new Date();
document.write("<br><br>Q6) Current Date" + currentDate);


// Calculate the number of milliseconds since midnight, Jan. 1, 1970
var millisecondsSinceEpoch = currentDate.getTime();
document.write("<br>Elapsed milliseconds since junuary 1, 1970: " + millisecondsSinceEpoch);

// Convert milliseconds to minutes (1 minute = 60,000 milliseconds)
var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));

// Assign the result to a variable that hasn't been declared beforehand
var minutesSinceMidnight1970 = minutesSinceEpoch;
document.write("<br>Elapsed minutes since junuary 1, 1970: " + minutesSinceMidnight1970);


//Question No 7:
// Get the current hour
var currentHour = new Date().getHours();

// Check if the current time is before noon
if (currentHour < 12) {
    alert("Q7) It's AM");
} else {
    alert("Q7) It's PM");
}

//Question No 8:
// Create a Date object for December 31, 2020
var laterDate = new Date(2020, 11, 31);

// Output the date to confirm
document.write("<br><br>Q8) Later Date: " + laterDate);


//Question No 9:
// Create a Date object for the 1st Ramadan, June 18, 2015
var firstRamadan = new Date(2015, 5, 18); // Months are 0-indexed, so 5 represents June

// Get the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDifference = currentDate - firstRamadan;

// Convert the time difference from milliseconds to days
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the number of days passed since 1st Ramadan
alert("Q9) " + daysPassed + " of days passed since 1st Ramadan (June 18, 2015) ");

//Question 10:

    // Reference date (example: August 18, 2024)
    var referenceDate = new Date('2024-08-18T00:00:00');

    // Beginning of 2015 (January 1, 2015)
    var startOf2015 = new Date('2015-01-01T00:00:00');
 
    // Calculate the difference in milliseconds
    var elapsedMilliseconds = referenceDate - startOf2015;

    // Convert milliseconds to seconds
    var elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

    // Display the result in the browser
    document.write("<br><br>Q10) On reference date " + referenceDate);
    document.write("<br>" + elapsedSeconds + " seconds had passed since beginning of 2015");
  
    //Question No 11:
       // Create a Date object for the current date and time
var currentDate = new Date();
document.write("<br><br>Q11) Current Date: " + currentDate);


// // Extract the hours (optional, if you need to use it)
// var currentHours = currentDate.getHours();

// // Set the date object an hour ahead
// DateAgo.setHours(currentHours);

// // Display the updated date object in the browser
// document.write("<br>1 hour ago, it was: " + DateAgo);
    
    //Question No 12:

    // Create a new Date object representing the current date and time
var currentDate = new Date();
alert("Q12) Current Date: " + currentDate )

// Set the date to 100 years in the past
currentDate.setFullYear(currentDate.getFullYear() - 100);

// Display the date in an alert box
alert("Q12) 100 years is back, it was " + currentDate);

//Question No 13:

// Ask the user for their age
var age = prompt("Q13) Please enter your age:");

// Get the current year
var currentYear = new Date().getFullYear();

// Calculate the birth year
var birthYear = currentYear - age;

// Display the birth year in the browser
alert("Ans13) Your birth year is: " + birthYear);


// Question No 14:

// Define variables for the bill
var customerName = "ABC customer"; // You can replace this with a prompt to ask the user for their name
var currentMonth = "August 2024"; // You can also dynamically generate this using JavaScript's Date object
var numberOfUnits = 350; // You can replace this with a prompt to ask the user for the number of units
var chargesPerUnit = 18.50; // Charges per unit in currency
var latePaymentSurcharge = 250.00; // Late payment surcharge in currency

// Calculate the Net Amount Payable (within Due Date)
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// Calculate the Gross Amount Payable (after Due Date)
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// Display the bill in the browser
document.write("<br><h1>K-Electric Bill</h1>");
document.write("<h4><strong>Customer Name:</strong> " + customerName + "</h4>");
document.write("<h4><strong>Current Month:</strong> " + currentMonth + "</h4>");
document.write("<h4><strong>Number of Units:</strong> " + numberOfUnits + "</h4>");
document.write("<h4><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</h4>");
document.write("<h4><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable + "</h4>");
document.write("<h4><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</h4>");
document.write("<h4><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable + "</h4>");