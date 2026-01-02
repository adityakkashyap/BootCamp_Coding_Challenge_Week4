// Lab 9: Error Handling & Custom Exceptions

// Custom Error Type
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function safeAddItemsToCart() {
    try {
        addItemsToCart();
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Validation Error:", error.message);
        } else {
            console.log("Unexpected Error:", error.message);
        }
    } finally {
        console.log("Item entry process completed.");
    }
}

function safeApplyPaymentMode() {
    try {
        paymentMode = prompt("Enter payment mode (Card / UPI / Cash)");

        if (!paymentMode) {
            throw new ValidationError("Payment mode cannot be empty.");
        }

        paymentMode = paymentMode.trim().toLowerCase();

        if (!["card", "upi", "cash"].includes(paymentMode)) {
            throw new ValidationError("Invalid payment mode selected.");
        }

        applyPaymentModeCharges();

    } catch (error) {
        console.log(error.name + ":", error.message);
        throw error; // 🔑 VERY IMPORTANT: stop flow
    } finally {
        console.log("Payment mode validation completed.");
    }
}


function validateCartBeforeCheckout() {
    try {
        if (!Array.isArray(cart) || cart.length === 0) {
            throw new ValidationError("Cart is empty. Cannot proceed to checkout.");
        }
    } catch (error) {
        console.log(error.name + ":", error.message);
        throw error; // stop further processing
    } finally {
        console.log("Cart validation checked.");
    }
}

function validateEmailBeforeSend(email) {
    try {
        if (!email || !email.includes("@")) {
            throw new ValidationError("Invalid email address.");
        }
    } catch (error) {
        console.log(error.name + ":", error.message);
        return false;
    } finally {
        console.log("Email validation attempted.");
    }
    return true;
}
