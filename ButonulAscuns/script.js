let numbers = [1, 2, 3];

function getRandomNumber() {
    // If all numbers have been chosen, refill the array
    if (numbers.length === 0) {
        numbers = [1, 2, 3];
    }
    // Pick a random index
    let randomIndex = Math.floor(Math.random() * numbers.length);
    // Retrieves the number from that index
    let chosenNumber = numbers[randomIndex];
    // Removes the number from the array so it won't be picked again this cycle
    numbers.splice(randomIndex, 1);
    return chosenNumber;// Returns the chosen number
}

function alertText() {
    if (getRandomNumber() == 1) {
        window.alert("Winning Button");
    } else {
        window.alert("Loser Button");
    }
}

//BONUS

// let buttons = []; // Array to hold generated buttons
// let winningButtonIndex = -1; // Index of the winning button
// let buttonClickedCount = 0; // Counter for clicked buttons

// function generateButtons() {
//     // Get the number of buttons to create
//     let numButtons = parseInt(document.getElementById('numButtons').value);
//     // Check if the entered number is valid
//     if (isNaN(numButtons) || numButtons <= 0) {
//         alert("Please enter a valid number greater than 0.");
//         return;
//     }
//     // Get the container where buttons will be added
//     let container = document.getElementById('buttonsContainer');
//     // Clear the container before adding new buttons
//     container.innerHTML = '';

//     // Clear the array of buttons and reset the counter
//     buttons = [];
//     buttonClickedCount = 0;
//     // Create buttons
//     for (let i = 0; i < numButtons; i++) {
//         let button = document.createElement('button');
//         button.type = 'button';
//         button.className = 'btn btn-secondary m-1'; // Styling with Bootstrap
//         button.innerText = 'Button ' + (i + 1);
//         button.addEventListener('click', handleButtonClick);
//         // Add the button to the container and the array of buttons
//         container.appendChild(button);
//         buttons.push(button);
//     }
//     // Choose a winning button after all buttons have been created
//     winningButtonIndex = Math.floor(Math.random() * numButtons);
// }

// function handleButtonClick() {
//     // Determine the index of the clicked button
//     let buttonIndex = buttons.indexOf(this);
//     // Check if all buttons have been clicked
//     buttonClickedCount++;
//     if (buttonClickedCount === buttons.length) {
//         // All buttons have been clicked, choose a new winning button
//         winningButtonIndex = Math.floor(Math.random() * buttons.length);
//         buttonClickedCount = 0; // Reset the counter
//     }
//     // Display the message for the clicked button
//     if (buttonIndex === winningButtonIndex) {
//         alert("Congratulations! This is the winning button!");
//     } else {
//         alert("This button is not the winner. Try again!");
//     }
// }