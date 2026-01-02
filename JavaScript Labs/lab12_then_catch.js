// Lab 12: Inventory System with Promises

// inventory database
const inventory = {
    I001: 50,
    I002: 10,
    I003: 5,
    I004: 0
};

// 1. inventory lookup function
function checkInventory(itemCode, requiredQty) {

    return new Promise((resolve, reject) => {

        console.log("Checking inventory for item:", itemCode);

        // Simulate API delay
        setTimeout(() => {

            const stockQuantity = inventory[itemCode];

            // Item does not exist
            if (stockQuantity === undefined) {
                reject("Item not found in inventory.");
                return;
            }

            // 2. Validate stock availability
            if (stockQuantity >= requiredQty) {
                resolve({
                    itemCode: itemCode,
                    availableStock: stockQuantity
                });
            } else {
                // 3. Reject if insufficient stock
                reject("Insufficient stock available.");
            }

        }, 1000); // 1 second delay
    });
}

function validateInventoryBeforeCheckout() {

    console.log("Validating inventory for cart items...");

    let checks = cart.map(item => {
        return checkInventory(item.itemCode, item.quantity);
    }); // checks is an array of promises

    // then / catch
    return Promise.all(checks) //await all promises to finish (None can fail)
        .then(results => {
            console.log("Inventory validation successful.");
            results.forEach(r =>
                console.log(`Item ${r.itemCode} available: ${r.availableStock}`)
            );
        })
        .catch(error => {
            console.log("Inventory Error:", error);
            throw error; //thow error here to stop exec and catch it in main
        });
}

