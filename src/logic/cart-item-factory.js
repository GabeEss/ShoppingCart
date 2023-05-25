const createShoppingItem = (data) => {
    const { name, price, type, gallery, id } = data;

    return {
      name,
      price,
      type,
      gallery: gallery || [],
      id,
    };
}

export default createShoppingItem;