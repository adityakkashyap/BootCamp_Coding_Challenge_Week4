function showInvoice(invoiceData) {
    console.log("Invoice Details:");
    console.log("Amount:", invoiceData.amount);
    console.log("Date:", invoiceData.date);
}


// Lab 13: Callback Function for Billing Completion

function completeBilling(callbackFn) {

    console.log("Billing completed successfully.");

    const invoiceData = {
        amount: finalAmount,
        date: new Date().toLocaleString()
    };

    if (typeof callbackFn === "function") {
        callbackFn(invoiceData);
    }
}




