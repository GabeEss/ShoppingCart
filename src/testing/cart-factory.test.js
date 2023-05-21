import createShoppingCart from "../logic/cart-factory";

describe('createShoppingCart', () => {
  let cart;

  beforeEach(() => {
    // Create a new shopping cart before each test
    cart = createShoppingCart();
  });

  test('addItem should add an item to the shopping cart', () => {
    cart.addItem('Apple');
    expect(cart.getShoppingSize()).toBe(1);
  });

  test('subtractItem should remove an item from the shopping cart', () => {
    cart.addItem('Apple');
    cart.addItem('Banana');
    cart.subtractItem('Apple');
    expect(cart.getShoppingSize()).toBe(1);
  });

  test('getItemQuantity should return the correct quantity of an item in the shopping cart', () => {
    cart.addItem('Apple');
    cart.addItem('Apple');
    cart.addItem('Banana');
    expect(cart.getItemQuantity('Apple')).toBe(2);
    expect(cart.getItemQuantity('Banana')).toBe(1);
    expect(cart.getItemQuantity('Orange')).toBe(0);
  });

  test('isEmpty should return true when the shopping cart is empty', () => {
    expect(cart.isEmpty()).toBe(true);
    cart.addItem('Apple');
    expect(cart.isEmpty()).toBe(false);
    cart.subtractItem('Apple');
    expect(cart.isEmpty()).toBe(true);
  });

  test('getShoppingSize should return the correct size of the shopping cart', () => {
    expect(cart.getShoppingSize()).toBe(0);
    cart.addItem('Apple');
    cart.addItem('Banana');
    expect(cart.getShoppingSize()).toBe(2);
    cart.subtractItem('Apple');
    expect(cart.getShoppingSize()).toBe(1);
    cart.subtractItem('Banana');
    expect(cart.getShoppingSize()).toBe(0);
  });

  test('getItem should return the item if it exists in the shopping cart', () => {
    cart.addItem('Apple');
    cart.addItem('Banana');
    cart.addItem('Orange');

    expect(cart.getItem('Apple')).toBe('Apple');
    expect(cart.getItem('Banana')).toBe('Banana');
    expect(cart.getItem('Orange')).toBe('Orange');
  });

  test('getItem should return undefined if the item does not exist in the shopping cart', () => {
    cart.addItem('Apple');
    cart.addItem('Banana');
    cart.addItem('Orange');

    expect(cart.getItem('Mango')).toBeUndefined();
    expect(cart.getItem('Grapes')).toBeUndefined();
  });
});
