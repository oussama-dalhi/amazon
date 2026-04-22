let cart = [
    {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
 }];
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

const removeFromCart = (productId) => {
   cart = cart.filter(item => item.productId !== productId);
}

export {cart, addToCard, removeFromCart};