let paymentStatus = "PENDING";
let transactionResult = {};

function simulatePaymentProcessing(paymentMode) {

    // Returns a Promise
    return new Promise((resolve, reject) => {

        console.log("Processing payment...");
        console.log("Please wait...");

        // Simulate delay 
        setTimeout(() => {

            // Simulate success
            paymentStatus = "SUCCESS";
            // receipt of the payment
            transactionResult = {
                mode: paymentMode,
                status: paymentStatus,
                timestamp: new Date().toLocaleString()
            };

            resolve(transactionResult); //any call that is awaiting this fn will get transation result as output
            // promise complete

        }, 3000); // 3 seconds delay
    });
}

// Async function using await
async function confirmPaymentAsync() {
    try {
        // 1. Await payment result
        const result = await simulatePaymentProcessing(paymentMode);

        // 2. Display confirmation
        console.log("Payment Status:", result.status);
        console.log("Payment Mode:", result.mode);
        console.log("Transaction Time:", result.timestamp);

    } catch (error) {
        paymentStatus = "FAILED";
        console.log("Payment failed:", error.message);

    } finally {
        console.log("Payment process completed.");
    }
}



















// Lab 11: Asynchronous Payment Confirmation
/*
NOTES: Async allows non-blocking 
async function always returns a promise

Promise = represents a value that will be available in the future.
It has 3 states:
    PENDING → still processing
    FULFILLED → success
    REJECTED → failure
Why:
    You don’t get the result immediately
    You need a placeholder for future data
*/
