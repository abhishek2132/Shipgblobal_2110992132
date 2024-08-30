let randomNumber;
let attempts;
const maxAttempts = 10;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent = '';
    document.getElementById("attempts").textContent = `Attempts Left: ${maxAttempts}`;
    document.getElementById("userGuess").value = '';
    document.getElementById("restartButton").style.display = 'none';
}

function submitGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    
    // Validate input
    if (isNaN(userGuess)) {
        document.getElementById("feedback").textContent = 'Please enter a valid number.';
        return;
    }
    if (userGuess < 1 || userGuess > 100) {
        document.getElementById("feedback").textContent = 'Please enter a number between 1 and 100.';
        return;
    }
    
    attempts++;
    
    if (userGuess < randomNumber) {
        document.getElementById("feedback").textContent = 'Your number is Low!';
    } else if (userGuess > randomNumber) {
        document.getElementById("feedback").textContent = 'Your number is High!';
    } else {
        alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
        if (confirm("Would you like to start a new game?")) {
            restartGame();
        }
        return;
    }
    
    if (attempts >= maxAttempts) {
        alert(`Better luck next time! The correct number was ${randomNumber}.`);
        if (confirm("Would you like to start a new game?")) {
            restartGame();
        }
    } else {
        document.getElementById("attempts").textContent = `Attempts Left: ${maxAttempts - attempts}`;
    }
}

function restartGame() {
    initializeGame();
}

// Initialize the game when the page loads
window.onload = initializeGame;
