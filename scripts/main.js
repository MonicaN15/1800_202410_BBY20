/**
 * Function to retrieve the name of the currently authenticated user from Firebase Authentication.
 * It listens for changes in the authentication state and updates the UI accordingly.
 */
function getNameFromAuth() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid); // Print the UID in the browser console
            console.log(user.displayName);  // Print the user name in the browser console
            userName = user.displayName;

            // Method #1: Insert with JavaScript
            // document.getElementById("name-goes-here").innerText = userName;    

            // Method #2: Insert using jQuery
            // $("#name-goes-here").text(userName); // Using jQuery

            // Method #3: Insert using querySelector
            document.querySelector("#name-goes-here").innerText = userName;
        } else {
            // No user is signed in.
            console.log("No user is logged in");
        }
    });
}

// Run the function to retrieve the name from authentication
getNameFromAuth();

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