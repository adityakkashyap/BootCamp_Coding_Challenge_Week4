// Lab 8: Email Validation & Notification

let email = "";
let message = "";

function validateAndSendEmail() {

    // regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
