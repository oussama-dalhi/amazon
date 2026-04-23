import {cart, addToCart, loadCart} from '../../data/cart.js';

describe('Test Suite: Add To Cart', () => {
    beforeEach(() => {
    localStorage.setItem('cart', JSON.stringify([]));
    cart.length = 0;
});
    it('Increase Quantity of products', () => {

    });
    it('Adds New product to the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
          loadCart  
        })
        console.log(localStorage.getItem('cart'));
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });
});