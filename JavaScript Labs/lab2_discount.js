// Lab 2: Apply Membership Discount (with basic error handling)

let membershipType = "None";
let discountRate = 0;
let discountAmount = 0;
let discountedTotal = 0;

function applyMembershipDiscount() {

    // 1. Ask user if they are a member
    let isMember = prompt("Are you a member? (yes/no)");

    if (!isMember) { // handles Cancel or empty input
        console.log("No input provided. Proceeding without membership discount.");
        discountedTotal = grandTotal;
        return;
    }

    isMember = isMember.toLowerCase();

    // 2. If yes, ask membership type
    if (isMember === "yes") {

        let typeInput = prompt("Enter membership type (Silver/Gold/Platinum)").toLowerCase();

        if (!typeInput) {
            console.log("No membership type entered. No discount applied.");
            discountedTotal = grandTotal;
            return;
        }

        membershipType = typeInput;

        // 3. Assign discount rate
        if (membershipType === "silver") {
            discountRate = 0.05;
        } else if (membershipType === "gold") {
            discountRate = 0.10;
        } else if (membershipType === "platinum") {
            discountRate = 0.15;
        } else {
            console.log("Invalid membership type. No discount applied.");
            membershipType = "None";
            discountRate = 0;
        }
    } else {
        discountedTotal = grandTotal;
    }

    // 4. Calculate discount amount
    discountAmount = grandTotal * discountRate;

    // 5. Calculate discounted total
    discountedTotal = grandTotal - discountAmount;

    // 6. Display result
    console.log("Membership Type:", membershipType);
    console.log("Discount Rate:", discountRate * 100 + "%");
    console.log("Discount Amount: ₹" + discountAmount);
    console.log("Total After Discount: ₹" + discountedTotal);
}
