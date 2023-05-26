function calculateCost(shoppingCart) {
    let total = 0;

    shoppingCart.items.forEach(item => {
        if(item.quantity > 1) {
            total += (item.price * item.quantity);
        }
        else {
            total += item.price;
        }
    });

    return total.toFixed(2);
}

export default calculateCost;