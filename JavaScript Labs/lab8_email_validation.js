// Lab 8: Email Validation & Notification

let email = "";
let message = "";

function validateAndSendEmail() {

    // regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // [^]+ = negation of 1 or more chars; \s = white space
    //[^\s@]+ is repeated 3 times 1) start, 2) after @, 3) after .

    while (true) {
        // 1. Prompt for email
        email = prompt("Enter your email address:");

        // Handle cancel or empty input
        if (!email) {
            alert("Email cannot be empty. Please try again.");
            continue;
        }

        // 2. Validate format using regex
        if (!emailRegex.test(email)) {
            // 3. If invalid, show error and request again
            alert("Invalid email format. Please enter a valid email.");
            continue;
        }

        // Valid email → exit loop
        break;
    }

    // 4. Simulate sending thank-you message
    message = "Thank you for your purchase! A confirmation has been sent to " + email;
    console.log(message);
}
