function calculateCost(shoppingCart) {
    let total = 0;

    shoppingCart.items.forEach(item => {
        total += item.price;
    });

    return total;
}

export default calculateCost;