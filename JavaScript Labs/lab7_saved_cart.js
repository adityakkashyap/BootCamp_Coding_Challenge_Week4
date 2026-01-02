// Lab 7: Saving & Retrieving Cart Data

function saveCartAndInvoice() {
    // 1. Store cart and invoice info in localStorage
    const savedData = {
        cartItems: cart,
        invoiceData: {
            invoiceNumber: invoiceNumber,
            invoiceDate: invoiceDate,
            finalAmount: finalAmount
        },
        email: emailAddress,
        timestamp: new Date().toLocaleString()
    };

    if (typeof localStorage !== "undefined") {
        localStorage.setItem("karazon_saved_cart", JSON.stringify(savedData));
        console.log("Cart and invoice data saved.");
    }
}

function loadSavedCartIfExists() {
    // 2. Check for existing cart data
    if (typeof localStorage === "undefined") {
        return;
    }

    const savedCartJSON = localStorage.getItem("karazon_saved_cart");

    if (!savedCartJSON) {
        return;
    }

    // 3. Ask user if they want to resume
    let resume = prompt(
        "A previous cart was found. Do you want to resume it? (yes/no)"
    );

    if (!resume || resume.toLowerCase() !== "yes") {
        localStorage.removeItem("karazon_saved_cart");
        console.log("Previous cart cleared. Starting fresh.");
        return;
    }

    // 4. Load data into the system
    const savedData = JSON.parse(savedCartJSON); //convert string back into obj

    cart = savedData.cartItems || [];
    emailAddress = savedData.email || "";

    // Recalculate grand total
    grandTotal = 0;
    cart.forEach(item => {
        grandTotal += item.totalPrice;
    });

    console.log("Previous cart restored.");
    console.log("Saved on:", savedData.timestamp);

    // Display restored cart
    console.log("Restored Cart:");
    cart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.itemCode} - ${item.description} | Qty: ${item.quantity} | Total: ₹${item.totalPrice}`
        );
    });

    console.log("Restored Grand Total: ₹" + grandTotal);
}
