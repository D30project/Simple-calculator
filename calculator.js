// Get the display element by its ID
let displayResult = document.getElementById('display');
// Function to enter input into the display
function enterInput(value){
    displayResult.value += value;
    // displayResult+=value;
}
function clearDisplay(){
    displayResult.value = "";
}
function deleteLast() {
    displayResult.value = displayResult.value.slice(0, -1);
}
function percentage() {
    try {
        displayResult.value = eval(displayResult.value) / 100;
    } catch (error) {
        displayResult.value = "error";
    }
}
function calculateSquareRoot() {
    try {
        displayResult.value = Math.sqrt(eval(displayResult.value));
    } catch (error) {
        displayResult.value = 'error'
    }
}
function calculate(){
    try {
        displayResult.value = eval(displayResult.value);
    } catch (error) {
        displayResult.value = "error";
    }
}
