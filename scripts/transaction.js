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
                        //var budgetLeft = userBudget - transactionAmount; // This works
                        var updatedTotalSpent = totalSpent + transactionAmount;
                        
                        var januaryOldSpent = parseFloat(doc.data().januaryMoneySpent);
                        var februaryOldSpent = parseFloat(doc.data().februaryMoneySpent);
                        var marchOldSpent = parseFloat(doc.data().marchMoneySpent);
                        var aprilOldSpent = parseFloat(doc.data().aprilMoneySpent);
                        var mayOldSpent = parseFloat(doc.data().mayMoneySpent);
                        var juneOldSpent = parseFloat(doc.data().juneMoneySpent);
                        var julyOldSpent = parseFloat(doc.data().julyMoneySpent);
                        var augustOldSpent = parseFloat(doc.data().augustMoneySpent);
                        var septemberOldSpent = parseFloat(doc.data().septemberMoneySpent);
                        var octoberOldSpent = parseFloat(doc.data().octoberMoneySpent);
                        var novemberOldSpent = parseFloat(doc.data().novemberMoneySpent);
                        var decemberOldSpent = parseFloat(doc.data().decemberMoneySpent);
                       
                        if (currentMonth == "January") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(januaryOldSpent)) {
                                // Calculate the remaining budget

                                var januaryOldBudget = parseFloat(doc.data().januaryBudget);
                                var budgetLeft = januaryOldBudget - transactionAmount; 

                                januaryUpdatedMoneySpent = januaryOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    januaryBudget: budgetLeft, // This upadates the budget left on firebase
                                    januaryMoneySpent: januaryUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("January budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }
                        
                        if (currentMonth == "February") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(februaryOldSpent)) {
                                // Calculate the remaining budget
                                //var budgetLeft = userBudget - transactionAmount; 
                                var februaryOldBudget = parseFloat(doc.data().februaryBudget);
                                var februaryBudgetLeft = februaryOldBudget - transactionAmount; 

                                februaryUpdatedMoneySpent = februaryOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    februaryBudget: februaryBudgetLeft, // This upadates the budget left on firebase
                                    februaryMoneySpent: februaryUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("February budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "March") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(marchOldSpent)) {
                                // Calculate the remaining budget
                                //var budgetLeft = userBudget - transactionAmount; 
                                var marchOldBudget = parseFloat(doc.data().marchBudget);
                                var marchBudgetLeft = marchOldBudget - transactionAmount; 

                                marchUpdatedMoneySpent = marchOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    marchBudget: marchBudgetLeft, // This updates the budget left on firebase
                                    marchMoneySpent: marchUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "April") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(aprilOldSpent)) {
                                // Calculate the remaining budget
                                var aprilOldBudget = parseFloat(doc.data().aprilBudget);
                                var budgetLeft = aprilOldBudget - transactionAmount;
                                
                                aprilUpdatedMoneySpent = aprilOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    aprilBudget: budgetLeft, // This upadates the budget left on firebase
                                    aprilMoneySpent: aprilUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("April budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "May") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(mayOldSpent)) {
                                // Calculate the remaining budget
                                var mayOldBudget = parseFloat(doc.data().mayBudget);
                                var budgetLeft = mayOldBudget - transactionAmount;
                                
                                mayUpdatedMoneySpent = mayOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    mayBudget: budgetLeft, // This upadates the budget left on firebase
                                    mayMoneySpent: mayUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "June") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(juneOldSpent)) {
                                // Calculate the remaining budget
                                var juneOldBudget = parseFloat(doc.data().juneBudget);
                                var budgetLeft = juneOldBudget - transactionAmount;
                                
                                juneUpdatedMoneySpent = juneOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    juneBudget: budgetLeft, // This upadates the budget left on firebase
                                    juneMoneySpent: juneUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }
                        
                        if (currentMonth == "July") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(julyOldSpent)) {
                                // Calculate the remaining budget
                                var julyOldBudget = parseFloat(doc.data().julyBudget);
                                var budgetLeft = julyOldBudget - transactionAmount;

                                julyUpdatedMoneySpent = julyOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    julyBudget: budgetLeft, // This upadates the budget left on firebase
                                    julyMoneySpent: julyUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "August") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(augustOldSpent)) {
                                // Calculate the remaining budget
                                var augustOldBudget = parseFloat(doc.data().augustBudget);
                                var budgetLeft = augustOldBudget - transactionAmount;
                                
                                augustUpdatedMoneySpent = augustOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    augustBudget: budgetLeft, // This upadates the budget left on firebase
                                    augustMoneySpent: augustUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "September") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(septemberOldSpent)) {
                                // Calculate the remaining budget
                                var septemberOldBudget = parseFloat(doc.data().septemberBudget);
                                var budgetLeft = septemberOldBudget - transactionAmount;

                                septemberUpdatedMoneySpent = septemberOldSpent + transactionAmount;

                                // Update the budget field of the user document
                                userDocRef.update({
                                    septemberBudget: budgetLeft, // This upadates the budget left on firebase
                                    septemberMoneySpent: septemberUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "October") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(octoberOldSpent)) {
                                // Calculate the remaining budget
                                var octoberOldBudget = parseFloat(doc.data().octoberBudget);
                                var budgetLeft = octoberOldBudget - transactionAmount;

                                octoberUpdatedMoneySpent = octoberOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    octoberBudget: budgetLeft, // This upadates the budget left on firebase
                                    octoberMoneySpent: octoberUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "November") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(novemberOldSpent)) {
                                // Calculate the remaining budget
                                var novemberOldBudget = parseFloat(doc.data().novemberBudget);
                                var budgetLeft = novemberOldBudget - transactionAmount;

                                novemberUpdatedMoneySpent = novemberOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    novemberBudget: budgetLeft, // This upadates the budget left on firebase
                                    novemberMoneySpent: novemberUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (currentMonth == "December") {
                            if (!isNaN(userBudget) && !isNaN(totalSpent) && !isNaN(decemberOldSpent)) {
                                // Calculate the remaining budget
                                var decemberOldBudget = parseFloat(doc.data().decemberBudget);
                                var budgetLeft = decemberOldBudget - transactionAmount;

                                decemberUpdatedMoneySpent = decemberOldSpent + transactionAmount;
                                
                                // Update the budget field of the user document
                                userDocRef.update({
                                    decemberBudget: budgetLeft, // This upadates the budget left on firebase
                                    decemberMoneySpent: decemberUpdatedMoneySpent,
                                    totalMoneySpent: updatedTotalSpent  // This upadates the total money spent on firebase
                                })
                                    .then(() => console.log("March budget updated successfully"))
                                    .catch(error => console.error("Error updating March budget:", error));
                            } else {
                                console.error("User budget is not a valid number.");
                            }
                        }

                        if (!isNaN(userBudget) && !isNaN(totalSpent)) {
                            // Calculate the remaining budget
                            
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