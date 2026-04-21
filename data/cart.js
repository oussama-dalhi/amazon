const cart = [];
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
}
export {cart, addToCard};