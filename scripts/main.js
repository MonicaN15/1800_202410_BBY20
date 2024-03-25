// Get current date
var currentDate = new Date();

// Array of month names
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

// Get the current month
var currentMonth = monthNames[currentDate.getMonth()] + "'s Transactions";

// Display the current month
document.getElementById("currentMonth").innerHTML = currentMonth;