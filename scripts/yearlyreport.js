// Assign specific values to the top three spending amounts
var topSpending1 = 300;
var topSpending2 = 200;
var topSpending3 = 400;

// Create an array to hold the top spending amounts
var topSpendings = [topSpending1, topSpending2, topSpending3];

// Sort the array in descending order
topSpendings.sort(function (a, b) {
    return b - a;
});

// Get the <ul> element by its ID
var ul = document.getElementById("top-spending-list");

// Loop through the array and create <li> elements for each top spending amount
for (var i = 0; i < topSpendings.length; i++) {
    // Create a new <li> element
    var li = document.createElement("li");
    // Set the text content of the <li> to the current top spending amount
    li.textContent = "$" + topSpendings[i];
    // Append the <li> to the <ul>
    ul.appendChild(li);
}

firebase.auth().onAuthStateChanged(user => {
    // Check if a user is signed in:
    if (user) {
        // Do something for the currently logged-in user here: 
        
        // Retrieve the user's budget from Firestore
        var userDocRef = db.collection("users").doc(user.uid);
        userDocRef.get()
            .then(doc => {
                if (doc.exists) {
                    // Ensure budget is retrieved and parsed as a number
                    var totalSpent = parseFloat(doc.data().totalMoneySpent); // Added this
                    if (!isNaN(totalSpent)) {
                        return totalSpent;
                    } else {
                        console.error("User budget is not a valid number.");
                    }
                } else {
                    console.error("User document does not exist.");
                }
            })
            .catch(error => console.error("Error getting user document:", error));
    } else {
        // No user is signed in.
        console.log("No user is logged in");
    }
});

