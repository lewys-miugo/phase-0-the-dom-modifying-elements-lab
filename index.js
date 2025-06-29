// Write your code here!
// Step 1: Remove the <main id="main">
const main = document.getElementById("main");
main.remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Assign it an id of 'victory'
newHeader.id = "victory";

// Step 4: Set the innerHTML to "[Your Name] is the champion"
newHeader.innerHTML = "Lewis Wambugu is the champion";

// Step 5: Append the new header to the document body
document.body.appendChild(newHeader);
