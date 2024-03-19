function divide() {
    var amountInput = parseInt(document.getElementById("amount-input").value);
    var daysInput = parseInt(document.getElementById("days-input").value);

    if (daysInput === 0) {
        document.getElementById("result").innerText = "Error: Division by zero";
        return;
    }

    var quotient = amountInput / daysInput;
    document.getElementById("budget").innerText = "Budget is: $" + quotient + " per day";
}
