function divide() {
    var amountInput = parseInt(document.getElementById("amount-input").value);
    var daysInput = parseInt(document.getElementById("days-input").value);

    if (daysInput === 0) {
        document.getElementById("result").innerText = "Error: Division by zero";
        return;
    }

    var quotient = amountInput / daysInput;
    document.getElementById("budget").innerText = "Budget is: $" + quotient + " per day";

    let totalBudget = amountInput;

    // Check if a user is signed in
    var user = firebase.auth().currentUser;
    if (user) {
        // Reference to the specific user document
        var userDocRef = db.collection("users").doc(user.uid);

        // Update the budget field of the user document
        userDocRef.update({
            budget: totalBudget
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
    } else {
        // If no user is signed in, redirect to the login page
        console.log("No user is signed in");
        window.location.href = 'index.html';
    }


}
