/* ==============================
   PART 2: JavaScript Functions
   Demonstrating Scope, Parameters, Return
================================= */

// Global variable
let globalVar = "I am global";

// Display global variable on page load
document.getElementById("globalValue").textContent = globalVar;

// Function to demonstrate local vs global scope
function showScopeExample() {
  let localVar = "I am local"; // local scope
  document.getElementById("scopeText").innerHTML =
    "Global variable: " + globalVar + " | Local variable: " + localVar;
}

// Function with parameters & return value
function calculateSum(a, b) {
  let result = a + b; // calculation using parameters
  document.getElementById("sumResult").textContent = "Result: " + result;
  return result; // returning value
}

/* ==============================
   PART 3: JS Triggering CSS Animations
================================= */

// Function to trigger box animation
function triggerBoxAnimation() {
  let box = document.getElementById("triggerBox");

  // Remove class if already present (reset animation)
  box.classList.remove("animate");

  // Trigger reflow so animation can restart
  void box.offsetWidth;

  // Add animation class
  box.classList.add("animate");
}
