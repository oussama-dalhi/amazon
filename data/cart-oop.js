const carts = {
    cartItems: undefined,
    loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem('cart-oop')) || [];
    },
    saveToStorage() {
    localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },
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
    },
     removeFromCart(productId){
    this.cartItems = cart.filter(item => item.productId !== productId);
    this.saveToStorage();
   },
    updateDeliveryOption(productId, deliveryId) {
        const matching = this.cartItems.find(item => item.productId === productId);
        if (matching) {
            matching.deliveryId = deliveryId;
            this.saveToStorage();
        }
    }
};
carts.loadFromStorage();