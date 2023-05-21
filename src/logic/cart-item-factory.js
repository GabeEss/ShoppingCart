const createShoppingItem = (data) => {
    const { name, price, type } = data;

    return {
      name,
      price,
      type
    };
}

export default createShoppingItem;