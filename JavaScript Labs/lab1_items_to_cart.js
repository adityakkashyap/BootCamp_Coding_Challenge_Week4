let cart = [];
let grandTotal = 0;

function addItemsToCart() {

    let addMore = true;

    while (addMore) {
        // 1. Take item details
        let itemCode = prompt("Enter item code:");
        if (!itemCode) {
            alert("Item code cannot be empty.");
            continue;
        }

        let description = prompt("Enter item description:");
        if (!description) {
            alert("Description cannot be empty.");
            continue;
        }

        let quantity = Number(prompt("Enter quantity:"));
        if (isNaN(quantity) || quantity <= 0) {
            alert("Quantity must be a positive number.");
            continue;
        }

        let pricePerUnit = Number(prompt("Enter price per unit:"));
        if (isNaN(pricePerUnit) || pricePerUnit <= 0) {
            alert("Price must be a positive number.");
            continue;
        }

        // 2. Calculate total price for the item
        let totalPrice = quantity * pricePerUnit;

        // 3. Push item into cart
        item = {
            itemCode: itemCode,
            description: description,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            totalPrice: totalPrice
        };
        cart.push(item);

        // 4. Ask user if they want to continue
        let choice = prompt("Do you want to add another item? (yes/no)");
        if (!choice || choice.toLowerCase() !== "yes") {
            addMore = false;
        }
    }

    // 5. Calculate grand total
    grandTotal = 0;
    for (let item of cart) {
        grandTotal += item.totalPrice;
    }

    // let grandTotal = 0;
    // cart.forEach(item => {
    //     grandTotal += item.totalPrice;
    // });

    // 6. Display cart and grand total
    console.log("Cart Summary");
    console.log("----------------------");

    cart.forEach((item, index) => {
        console.log( //` backtick - string interpolation (allows multiline)
            `${index + 1}. ${item.itemCode} - ${item.description}
            Quantity: ${item.quantity}
            Price per unit: ₹${item.pricePerUnit}
            Total: ₹${item.totalPrice}`
        );
    });

    console.log("----------------------");
    console.log("Grand Total: ₹" + grandTotal);
}
