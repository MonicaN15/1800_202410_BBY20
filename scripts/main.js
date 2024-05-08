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
            //document.querySelector("#monthy-user-budget").innerText = uBudget;
            
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
var currentMonth = monthNames[currentDate.getMonth()] + "'s Budget";

function displayMonthlyBudget() {
    // Get current date and month name
    var currentDate = new Date();
    var currentMonth = monthNames[currentDate.getMonth()];

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            const usersRef = db.collection('users');
            const currentUserUid = user.uid;

            // Retrieve the document for the current user
            usersRef.doc(currentUserUid).get()
                .then(doc => {
                    if (doc.exists) {
                        const userData = doc.data();

                        // Get the budget based on the current month
                        let currentBudget;

                        // Use the current month to determine which budget to retrieve
                        switch (currentMonth) {
                            case "January":
                                currentBudget = userData.januaryBudget;
                                break;
                            case "February":
                                currentBudget = userData.februaryBudget;
                                break;
                            case "March":
                                currentBudget = userData.marchBudget;
                                break;
                            case "April":
                                currentBudget = userData.aprilBudget;
                                break;
                            case "May":
                                currentBudget = userData.mayBudget;
                                break;
                            case "June":
                                currentBudget = userData.juneBudget;
                                break;
                            case "July":
                                currentBudget = userData.julyBudget;
                                break;
                            case "August":
                                currentBudget = userData.augustBudget;
                                break;
                            case "September":
                                currentBudget = userData.septemberBudget;
                                break;
                            case "October":
                                currentBudget = userData.octoberBudget;
                                break;
                            case "November":
                                currentBudget = userData.novemberBudget;
                                break;
                            case "December":
                                currentBudget = userData.decemberBudget;
                                break;
                            default:
                                currentBudget = 0; // Default value or handle as appropriate
                                break;
                        }

                        // Display the budget in the specified element with 2 decimal places
                        const formattedBudget = parseFloat(currentBudget).toFixed(2);
                        document.querySelector("#monthly-budget-left").innerText = `$${formattedBudget}`;
                    } else {
                        console.log("User document not found");
                        document.querySelector("#monthly-budget-left").innerText = "Budget not available";
                    }
                })
                .catch(error => {
                    console.log("Error getting user document:", error);
                    document.querySelector("#monthly-budget-left").innerText = "Error fetching budget";
                });
        } else {
            console.log("No user is logged in");
            document.querySelector("#monthly-budget-left").innerText = "User not logged in";
        }
    });
}

// Run the function to retrieve and display the monthly budget
displayMonthlyBudget();

// Display the current month's name in HTML
document.getElementById("currentMonth").innerHTML = monthNames[new Date().getMonth()] + "'s Budget Remaining";
