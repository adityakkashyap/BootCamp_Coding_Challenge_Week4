// Lab 5: Generate Final Invoice
let invoiceNumber;
let invoiceDate;
let finalAmount;
let billSummary;

function generateFinalInvoice() {

    // Basic validation
    if (!Array.isArray(cart) || cart.length === 0) {
        console.log("Cart is empty. Invoice cannot be generated.");
        return;
    }

    if (typeof finalTotalBeforeInvoice !== "number" || finalTotalBeforeInvoice <= 0) {
        console.log("Invalid final amount. Invoice cannot be generated.");
        return;
    }

    // 1. Generate invoice number
    invoiceNumber = "INV" + Math.floor(Math.random() * 1000000);

    // 2. Generate invoice date
    invoiceDate = new Date();

    finalAmount = finalTotalBeforeInvoice;

    // 3. Display formatted invoice
    console.log("\n================= INVOICE =================");
    console.log("Invoice No:", invoiceNumber);
    console.log("Invoice Date:", invoiceDate.toLocaleString()); //pretty print
    console.log("--------------------------------------------------");

    console.log("Items:");
    cart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.itemCode} | ${item.description} | Qty: ${item.quantity} | ` +
            `Price Per Unit: ₹${item.pricePerUnit} | Total: ₹${item.totalPrice}`
        );
    });

    console.log("--------------------------------------------------");
    console.log("Subtotal: ₹" + grandTotal);
    console.log("Discount Applied: ₹" + discountAmount);
    console.log("GST: ₹" + gstAmount);
    console.log("Platform Fee: ₹" + platformFee);
    console.log("Payment Surcharge: ₹" + surcharge);
    console.log("Convenience Fee: ₹" + convenienceFee);
    console.log("--------------------------------------------------");
    console.log("Final Amount Payable: ₹" + finalAmount);
    console.log("--------------------------------------------------");

    // 4. Final messages
    console.log("Invoice Generated");
    console.log("==================================================");
}
