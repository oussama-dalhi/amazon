class Cart {
    cartItems;
    #localStorageKey;
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }
    #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [];
    }
    saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    addToCart(productId){
    const matching = this.cartItems.find(item => item.productId === productId);
        if(matching)
        {
            matching.quantity += 1;
        } 
        else {
            this.cartItems.push({
            productId,
            quantity: 1,
            deliveryId: '1'
        });
     }
    this.saveToStorage();
   }
    removeFromCart(productId){
    this.cartItems = cart.filter(item => item.productId !== productId);
    this.saveToStorage();
   }
    updateDeliveryOption(productId, deliveryId) {
    const matching = this.cartItems.find(item => item.productId === productId);
       if (matching) {
        matching.deliveryId = deliveryId;
        this.saveToStorage();
    }
  }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');
console.log(cart);
console.log(businessCart);