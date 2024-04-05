/**
 * Function to add a transaction to the database.
 * Retrieves transaction details from the input fields,
 * saves them to the database, and redirects to the transaction page.
 */
function addTransaction() {
    console.log("saving transactions and redirecting");

    // Retrieve transaction details from input fields
    let transactionDate = document.getElementById("transdate").value;
    let transactionDescription = document.getElementById("transdescription").value;
    let transactionAmount = parseFloat(document.getElementById("transamount").value);
    let transactionCategory = document.getElementById("transcategory").value;


    // Get current date
    var currentDate = new Date();

    // Array of month names
    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Get the current month
    var currentMonth = monthNames[currentDate.getMonth()];



    // This gets the old user budget from firebase and updates it and returns it to firebase 
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
                        var userBudget = parseFloat(doc.data().budget);
                        var monthlySpent = parseFloat(doc.data().currentMonthMoneySpent);
                        var totalSpent = parseFloat(doc.data().totalMoneySpent); // Added this

                        if (currentMonth == "March") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent)) {
                                // Calculate the remaining budget
                                //var budgetLeft = userBudget - transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    marchBudget: 16.6, // This upadates the budget left on firebase
                                    //totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "April") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent)) {
                                // Calculate the remaining budget
                                //var budgetLeft = userBudget - transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    aprilBudget: 18.6, // This updates the budget left on firebase
                                    //totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("April budget updated successfully"))
                                    .catch(error => console.error("Error updating April budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        
                        if (!isNaN(userBudget) && !isNaN(totalSpent)) {
                            // Calculate the remaining budget
                            var budgetLeft = userBudget - transactionAmount;
                            
                            // Update the budget field of the user document
                            userDocRef.update({
                                budget: budgetLeft, // This updates the budget left on firebase
                                currentMonthMoneySpent: updatedMonthlySpent, // This updates the current monthly budget 
                                totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase 
                            })
                                .then(() => console.log("Budget updated successfully"))
                                .catch(error => console.error("Error updating budget:", error));
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



    // Log transaction details for debugging
    console.log(transactionDate, transactionDescription, transactionAmount, transactionCategory);

    // Check if a user is signed in
    var user = firebase.auth().currentUser;
    if (user) {

        // Add transaction to the 'transactions' collection in Firestore
        db.collection("transactions").add({
            amount: transactionAmount,
            category: transactionCategory,
            date: transactionDate,
            description: transactionDescription,
        })
            .then(() => {
                // On successful addition, log success message and redirect to transaction page
                console.log("Transaction successfully added");
                window.location.href = "main.html";
            })
            .catch((error) => {
                // If there's an error adding the transaction, log error message
                console.error("Error adding transaction: ", error);
                window.alert("Transaction error");
                // Handle error gracefully, e.g., display an error message to the user
            });
    } else {
        // If no user is signed in, redirect to the login page
        console.log("No user is signed in");
        window.location.href = 'index.html';
    }
}

/*
// This gets the old user budget from firebase and updates it and returns it to firebase 
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
                        var userBudget = parseFloat(doc.data().budget);
                        var monthlySpent = parseFloat(doc.data().currentMonthMoneySpent);
                        var totalSpent = parseFloat(doc.data().totalMoneySpent); // Added this
                        if (!isNaN(userBudget) && !isNaN(totalSpent)) {
                            // Calculate the remaining budget
                            var budgetLeft = userBudget - transactionAmount;
                            
                            // Update the budget field of the user document
                            userDocRef.update({
                                budget: budgetLeft, // This upadates the budget left on firebase
                                currentMonthMoneySpent: updatedMonthlySpent, // This updates the current monthly budget 
                                totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase 
                            })
                                .then(() => console.log("Budget updated successfully"))
                                .catch(error => console.error("Error updating budget:", error));
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


 */