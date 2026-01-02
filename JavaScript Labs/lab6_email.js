// Lab 6: Bonus – Email Simulation and Local Save

let emailAddress = "";
let invoiceData = {};
let confirmationMessage = "";

function simulateEmailAndSaveInvoice() {

    // 1. Prompt user for email and validate domain
    emailAddress = prompt("Enter your email address (must end with @karunya.edu)");

    if (!emailAddress || !emailAddress.endsWith("@karunya.edu")) {
        console.log("Invalid email address. Invoice email not sent.");
        return;
    }

    // Prepare invoice data object
    invoiceData = {
        invoiceNumber: invoiceNumber,
        invoiceDate: invoiceDate,
        items: cart,
        subtotal: grandTotal,
        discount: discountAmount,
        gst: gstAmount,
        platformFee: platformFee,
        surcharge: surcharge,
        convenienceFee: convenienceFee,
        finalAmount: finalAmount
    };

    // 2. Simulate sending email
    console.log("Invoice sent to:", emailAddress);

    // 3. Display invoice as JSON
    console.log("Invoice Data (JSON):");
    console.log(JSON.stringify(invoiceData, null, 2)); //pretty indenting

    // 4. Save to localStorage
    if (typeof localStorage !== "undefined") {
        //store the stringified object into browsers local storage
        localStorage.setItem("karazon_invoice_" + invoiceNumber, JSON.stringify(invoiceData));
        console.log("Invoice saved locally.");
    }

    // 5. Display thank-you message
    confirmationMessage = "Thank you for shopping with Karazon!";
    console.log(confirmationMessage);
}
