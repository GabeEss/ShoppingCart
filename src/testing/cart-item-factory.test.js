import createShoppingItem from '../logic/cart-item-factory';

describe('createShoppingItem', () => {
  test('should create a shopping item with the correct properties', () => {
    const data = {
      name: 'Test Item',
      price: 19.99,
      type: 'Electronics',
    };

    const shoppingItem = createShoppingItem(data);
    // console.log(shoppingItem);
    expect(shoppingItem).toEqual(data);
  });
});