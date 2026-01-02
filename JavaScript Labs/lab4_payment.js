// Lab 4: Apply Payment Mode Charges

let paymentMode = "";
let surcharge = 0;
let convenienceFee = 0;
let finalTotalBeforeInvoice = 0;

function applyPaymentModeCharges() {
    // check previous total
    if (typeof totalWithTax !== "number" || totalWithTax <= 0) {
        console.log("Invalid total amount. Cannot apply payment charges.");
        return;
    }

    // 1. Ask for payment mode
    let modeInput = prompt("Enter payment mode (Card/UPI/Cash/etc.)").toLowerCase();

    if (!modeInput) {
        console.log("No payment mode entered. Defaulting to Cash.");
        paymentMode = "cash";
    } else {
        paymentMode = modeInput;
    }

    surcharge = 0;
    convenienceFee = 0;

    // 2. Card payment surcharge
    if (paymentMode === "card" && totalWithTax < 1000) {
        surcharge = totalWithTax * 0.025; // 2.5%
    }
    // 3. Other payment modes convenience fee
    else {
        convenienceFee = totalWithTax * 0.01; // 1%
    }

    // 4. Calculate final total before invoice
    finalTotalBeforeInvoice = totalWithTax + surcharge + convenienceFee;

    // 5. Display payment breakdown
    console.log("Payment Mode:", paymentMode);
    console.log("Surcharge: ₹" + surcharge);
    console.log("Convenience Fee: ₹" + convenienceFee);
    console.log("Final Total Before Invoice: ₹" + finalTotalBeforeInvoice);
}
