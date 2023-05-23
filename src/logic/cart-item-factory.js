const createShoppingItem = (data) => {
    const { name, price, type, gallery } = data;

    return {
      name,
      price,
      type,
      gallery: gallery || []
    };
}

export default createShoppingItem;