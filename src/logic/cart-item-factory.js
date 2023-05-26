const createShoppingItem = (data) => {
    const { name, price, type, gallery, id, quantity } = data;

    return {
      name,
      price,
      type,
      gallery: gallery || [],
      id,
      quantity,
    };
}

export default createShoppingItem;