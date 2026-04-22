let cart = JSON.parse(localStorage.getItem('cart')) || [];
const addToCard = (productId) => {
        let matching;
        cart.forEach( (cartItem) => {
            if(productId === cartItem.productId)
            {
                matching = cartItem;
            }
            });
            if(matching)
            {
                matching.quantity += 1;
            } 
            else {
                cart.push({
                productId,
                quantity: 1
            });
        }
        saveToStorage();
}

const removeFromCart = (productId) => {
   cart = cart.filter(item => item.productId !== productId);
   saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export {cart, addToCard, removeFromCart, saveToStorage};