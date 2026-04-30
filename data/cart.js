let cart;
loadFromStorage();
function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
}
const addToCart = (productId) => {
    const matching = cart.find(item => item.productId === productId);
            if(matching)
            {
                matching.quantity += 1;
            } 
            else {
                cart.push({
                productId,
                quantity: 1,
                deliveryId: '1'
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

function updateDeliveryOption(productId, deliveryId) {
    const matching = cart.find(item => item.productId === productId);
    if (matching) {
        matching.deliveryId = deliveryId;
        saveToStorage();
    }
}
export {cart, addToCart, removeFromCart, loadFromStorage, updateDeliveryOption, saveToStorage};