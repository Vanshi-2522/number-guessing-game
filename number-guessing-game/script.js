let max = parseInt(prompt("Enter the max number:"));
let random = Math.floor(Math.random() * max) + 1;
document.getElementById("range").textContent = `1 and ${max}`;

function checkGuess() {
  const guess = parseInt(document.getElementById("userGuess").value);
  const message = document.getElementById("message");

  if (!guess) {
    message.textContent = "Please enter a valid number!";
    return;
  }

  if (guess === random) {
    message.textContent = `You guessed it right! The number was ${random}.`;
  } else if (guess < random) {
    message.textContent = "Too low! Try a higher number.";
  } else if (guess > random) {
    message.textContent = "Too high! Try a smaller number.";
  }
}

function resetGame() {
  max = parseInt(prompt("Enter the max number:"));
  random = Math.floor(Math.random() * max) + 1;
  document.getElementById("range").textContent = `1 and ${max}`;
  document.getElementById("message").textContent = "";
  document.getElementById("userGuess").value = "";
}
