import calculateCost from '../logic/calculator';

describe('calculator', () => {
  test('calculateCost should update the total correctly', () => {
    const shoppingCart = {
      items: [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
        { name: 'Item 3', price: 30 },
      ],
    };

    let total = calculateCost(shoppingCart);
    expect(total).toBe(60);

    shoppingCart.items.push({ name: 'Item 4', price: 40 });
    shoppingCart.items.push({ name: 'Item 5', price: 50 });

    total = calculateCost(shoppingCart);
    expect(total).toBe(150);
  });

  test('empty cart', () => {
    const shoppingCart = {
        items: []
    };

    let total = calculateCost(shoppingCart);
    expect(total).toBe(0);
  })
});