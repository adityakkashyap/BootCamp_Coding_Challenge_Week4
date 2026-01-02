// Lab 3: Add GST and Platform Fee

let gstRate = 0.18;
let platformFeeRate = 0.002;

let gstAmount = 0;
let platformFee = 0;
let totalWithTax = 0;

function applyGSTAndPlatformFee() {

    // 1. Use discounted total from Lab 2
    if (typeof discountedTotal !== "number" || discountedTotal <= 0) {
        console.log("Invalid discounted total. Cannot apply GST and platform fee.");
        return;
    }

    // 2. Compute GST
    gstAmount = discountedTotal * gstRate;

    // 3. Compute platform fee
    platformFee = discountedTotal * platformFeeRate;

    // 4. Add GST and platform fee to discounted total
    totalWithTax = discountedTotal + gstAmount + platformFee;

    // 5. Display updated total
    console.log("GST (18%): ₹" + gstAmount);
    console.log("Platform Fee (0.2%): ₹" + platformFee);
    console.log("Total After GST & Platform Fee: ₹" + totalWithTax);
}
