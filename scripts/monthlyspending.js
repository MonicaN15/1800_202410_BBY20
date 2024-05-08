function displayAllSpending() {
    const monthlyBudgetRef = db.collection('users').doc(firebase.auth().currentUser.uid);

    monthlyBudgetRef.get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            const yearlyBudget = userData.totalMoneySpent || 0; // Use 0 if totalMoneySpent is not defined

            const januarySpent = userData.januaryMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const februarySpent = userData.februaryMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const marchSpent = userData.marchMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const aprilSpent = userData.aprilMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const maySpent = userData.mayMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const juneSpent = userData.juneMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            
            const julySpent = userData.julyMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const augustSpent = userData.augustMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const septemberSpent = userData.septemberMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const octoberSpent = userData.octoberMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const novemberSpent = userData.novemberMoneySpent || 0; // Use 0 if totalMoneySpent is not defined
            const decemberSpent = userData.decemberMoneySpent || 0; // Use 0 if totalMoneySpent is not defined



            const formattedBudget = parseFloat(yearlyBudget).toFixed(2);
            document.querySelector("#yearly-spent").innerText = `$${formattedBudget}`;

            const januaryFormattedSpent = parseFloat(januarySpent).toFixed(2);
            document.querySelector("#january-total-spent").innerText = `January: $${januaryFormattedSpent}`;
            const februaryFormattedSpent = parseFloat(februarySpent).toFixed(2);
            document.querySelector("#february-total-spent").innerText = `February: $${februaryFormattedSpent}`;
            const marchFormattedSpent = parseFloat(marchSpent).toFixed(2);
            document.querySelector("#march-total-spent").innerText = `March: $${marchFormattedSpent}`;
            const aprilFormattedSpent = parseFloat(aprilSpent).toFixed(2);
            document.querySelector("#april-total-spent").innerText = `April: $${aprilFormattedSpent}`;
            const mayFormattedSpent = parseFloat(maySpent).toFixed(2);
            document.querySelector("#may-total-spent").innerText = `May: $${mayFormattedSpent}`;
            const juneFormattedSpent = parseFloat(juneSpent).toFixed(2);
            document.querySelector("#june-total-spent").innerText = `June: $${juneFormattedSpent}`;

            const julyFormattedSpent = parseFloat(julySpent).toFixed(2);
            document.querySelector("#july-total-spent").innerText = `July: $${julyFormattedSpent}`;
            const augustFormattedSpent = parseFloat(augustSpent).toFixed(2);
            document.querySelector("#august-total-spent").innerText = `August: $${augustFormattedSpent}`;
            const septemberFormattedSpent = parseFloat(septemberSpent).toFixed(2);
            document.querySelector("#september-total-spent").innerText = `September: $${septemberFormattedSpent}`;
            const octoberFormattedSpent = parseFloat(octoberSpent).toFixed(2);
            document.querySelector("#october-total-spent").innerText = `October: $${octoberFormattedSpent}`;
            const novemberFormattedSpent = parseFloat(novemberSpent).toFixed(2);
            document.querySelector("#november-total-spent").innerText = `November: $${novemberFormattedSpent}`;
            const decemberFormattedSpent = parseFloat(decemberSpent).toFixed(2);
            document.querySelector("#december-total-spent").innerText = `December: $${decemberFormattedSpent}`;


        } else {
            console.log("User document not found");
            document.querySelector("#yearly-spent").innerText = "Budget not available";
        }
    }).catch((error) => {
        console.log("Error getting user document:", error);
        document.querySelector("#yearly-spent").innerText = "Error fetching budget";
    });
}

// Run the function when the page is loaded and whenever authentication state changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        displayAllSpending(); // Fetch and display budget if user is logged in
        
    } else {
        console.log("No user is logged in");
        document.querySelector("#yearly-spent").innerText = "User not logged in";
    }
});


