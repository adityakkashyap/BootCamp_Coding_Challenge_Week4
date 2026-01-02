// Lab 10: Closures for Membership Offers

function getDiscountFunction(membershipType) {

    let discountRate = 0; //local

    if (membershipType === "silver") {
        discountRate = 0.05;
    } else if (membershipType === "gold") {
        discountRate = 0.10;
    } else if (membershipType === "platinum") {
        discountRate = 0.15;
    }

    // Closure: this anonymous function remembers discountRate (memory)
    // which should have died after getDiscountFunction execution
    return function (baseAmount) {
        return baseAmount * discountRate;
    };
}

function applyMembershipDiscountUsingClosure() {

    try {
        let membershipType = "None";

        let isMember = prompt("Are you a member? (yes/no)");

        if (!isMember) {
            throw new ValidationError("Membership response cannot be empty.");
        }

        if (isMember.toLowerCase() === "yes") {
            membershipType = prompt("Enter membership type (Silver/Gold/Platinum)");

            if (!membershipType) {
                throw new ValidationError("Membership type is required.");
            }
        }
        membershipType = membershipType.trim().toLowerCase();

        const discountCalculator = getDiscountFunction(membershipType); //discountCalcualtor catches the retured function
        const discountAmount = discountCalculator(grandTotal);

        discountedTotal = grandTotal - discountAmount;

        console.log("Membership Type:", membershipType);
        console.log("Discount Amount (Closure):", discountAmount);
        console.log("Total After Discount:", discountedTotal);

    } catch (error) {

        if (error instanceof ValidationError) {
            console.log("Validation Error:", error.message);
        } else {
            console.log("Unexpected Error:", error.message);
        }

    } finally {
        console.log("Membership discount (closure) processing completed.");
    }
}

