function divide() {
    var amountInput = parseInt(document.getElementById("amount-input").value);
    
    let totalBudget = amountInput;
    
    // Get current date
    var currentDate = new Date();

    // Array of month names
    var monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Get the current month
    var currentMonth = monthNames[currentDate.getMonth()];

    // Check if a user is signed in
    var user = firebase.auth().currentUser;

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "January") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    januaryBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "February") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    februaryBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "March") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    marchBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "April") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    aprilBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "May") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    mayBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "June") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    juneBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "July") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    julyBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "August") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    augustBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "September") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    septemberBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "October") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    octoberBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    // NEW MONTH

    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);
    
        if (currentMonth == "November") {
            // Update the budget field of the user document
            userDocRef.update({
                    budget: totalBudget,
                    novemberBudget: totalBudget
                })
                .then(() => {
                    // On successful update, log success message and redirect to main page
                    console.log("Budget successfully updated");
                    window.location.href = "main.html";
                })
                .catch((error) => {
                    // If there's an error updating the budget, log error message
                    console.error("Error updating budget: ", error);
                    // Handle error gracefully, e.g., display an error message to the user
                });
            }
        } else {
            // If no user is signed in, redirect to the login page
            console.log("No user is signed in");
            window.location.href = 'index.html';
        }

    if (user) {
    // Reference to the specific user document
    var userDocRef = db.collection("users").doc(user.uid);

    if (currentMonth == "December") {
        // Update the budget field of the user document
        userDocRef.update({
                budget: totalBudget,
                decemberBudget: totalBudget
            })
            .then(() => {
                // On successful update, log success message and redirect to main page
                console.log("Budget successfully updated");
                window.location.href = "main.html";
            })
            .catch((error) => {
                // If there's an error updating the budget, log error message
                console.error("Error updating budget: ", error);
                // Handle error gracefully, e.g., display an error message to the user
            });
        }
    } else {
        // If no user is signed in, redirect to the login page
        console.log("No user is signed in");
        window.location.href = 'index.html';
    }

}
