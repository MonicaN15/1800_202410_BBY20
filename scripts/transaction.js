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
            // Handle error gracefully, e.g., display an error message to the user
        });
    } else {
        // If no user is signed in, redirect to the login page
        console.log("No user is signed in");
        window.location.href = 'index.html';
    }
}