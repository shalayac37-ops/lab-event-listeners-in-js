// Handle Button Clicks

function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

function displayKeyPress(event) {
  document.getElementById("keyPressDisplay").textContent =
    `Key pressed: ${event.key}`;
}

// Process Text Input

function displayUserInput() {
  const input = document.getElementById("textInput");
  const display = document.getElementById("textInputDisplay");

  display.textContent = `You typed: ${input.value}`;
}

// Attach Event Listeners

function setupEventListeners() {
  document
    .getElementById("changeColorButton")
    .addEventListener("click", changeBackgroundColor);

  document
    .getElementById("resetColorButton")
    .addEventListener("dblclick", resetBackgroundColor);

  document.addEventListener("keydown", displayKeyPress);

  document
    .getElementById("textInput")
    .addEventListener("input", displayUserInput);
}

// Initialize event listeners when the DOM is loaded

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};