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
