// Select all elements of interest...

const txtMessage = document.getElementById('txtMessage');
const txtFeedback = document.getElementById('txtFeedback');

txtMessage.addEventListener('keypress', countWords);

// Define the event handler function,..

function countWords() {
	// Get message typed in the textarea
	let message = txtMessage.value;

	// Sanitize the retrieved message by taking away repeated spaces and replacing them with a single space.
	message = message.replace(/\s+/g, ' ');

	 // Split sanitized message into word pieces
	 let wordPieces = message.split(' ');

	 // Count the total number of words in wordPieces
	 let numWords = wordPieces.length;

	 let wordsRemanining = eval(250 - numWords);

	 if (wordsRemanining < 0) {
	 	txtFeedback.value = "Sorry, you have exceeded the maximum number of words allowed!";
	 } else {
	 	txtFeedback.value = `You have ${wordsRemanining} remaining...`;
	 }

}