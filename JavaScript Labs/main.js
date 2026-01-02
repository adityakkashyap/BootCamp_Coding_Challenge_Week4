async function main() {
        loadSavedCartIfExists();       // Lab 7 – resume cart if available

        safeAddItemsToCart();          // Lab 1 + 9
        saveCartAndInvoice();          // Lab 7 – save active cart

        validateCartBeforeCheckout();  // Lab 9

        try {
            await validateInventoryBeforeCheckout(); // lab 12
        }
        catch (error) {
            console.log("Checkout aborted due to inventory or validation error.");
            return;            
        }
        //applyMembershipDiscount();    // Lab 2
        applyMembershipDiscountUsingClosure(); // Lab 10 (using closure)
        applyGSTAndPlatformFee();              // Lab 3

        safeApplyPaymentMode();        // Lab 4 + 9
        await confirmPaymentAsync();   // Lab 11 (ASYNC) - wait for payment to confirm to move further

        generateFinalInvoice();        // Lab 5 

        completeBilling(showInvoice); // lab 13

        validateAndSendEmail();        // Lab 8 email validation
        simulateEmailAndSaveInvoice(); // Lab 6 email simulation + local save
}

main();

