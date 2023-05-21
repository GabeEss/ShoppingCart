const createShoppingCart = () => {
    const items = [];

    const addItem = (item) => {
        items.push(item);
    };

    const subtractItem = (item) => {
        const index = items.findIndex((i) => i === item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    };

    const isEmpty = () => items.length === 0;

    const getItemQuantity = (item) => {
        return items.filter((i) => i === item).length;
    };

    const getShoppingSize = () => items.length;

    const getItem = (item) => {
        const index = items.findIndex((i) => i === item);
        if(index !== -1) {
            return items[index];
        }
    }

    return{
        items,
        addItem,
        subtractItem,
        isEmpty,
        getItemQuantity,
        getShoppingSize,
        getItem
    }
}

export default createShoppingCart;