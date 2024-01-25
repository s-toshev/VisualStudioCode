function orders(product, qty) {
    let totalPrice = 0;

    switch (product) {
        case "coffee":
            totalPrice = 1.50 * qty;
            break;
        case "water":
            totalPrice = 1.00 * qty;
            break;
        case "coke":
            totalPrice = 1.40 * qty;
            break;
        case "snacks":
            totalPrice = 2.00 * qty;
            break;
        default:
            console.log("Error!")
            break;
    }

    console.log(`${totalPrice.toFixed(2)}`);
}

orders("water", 5);
orders("coffee", 2);