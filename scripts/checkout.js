import { cart, removeFromCart, updateDeliveryOption } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../data/deliveryOptions.js';

function renderOrderSummary() {
    let cartHTML = '';
    cart.forEach((cartItem) => {
        let matchingItem;
        const productId = cartItem.productId;
        products.forEach((product) => {
            if(product.id === productId)
            {
                matchingItem = product;
            }
        });

    
        const deliveryOptionId = cartItem.deliveryId;
        let deliveryOption;

        deliveryOptions.forEach((option) => {
            if(option.id === deliveryOptionId)
            {
                deliveryOption = option;
            }     
        });

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
        const dateString = deliveryDate.format('dddd, MMMM D');
        cartHTML += `
                <div class="cart-item-container 
                js-cart-item-container-${matchingItem.id}">
            <div class="delivery-date">Delivery date: ${dateString}</div>

            <div class="cart-item-details-grid">
                <img
                class="product-image"
                src="${matchingItem.image}"
                />

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingItem.name}
                </div>
                <div class="product-price">$${formatCurrency(matchingItem.priceCents)}</div>
                <div class="product-quantity">
                    <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link" 
                    data-product-id = "${matchingItem.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingItem, cartItem)}
                </div>
            </div>
            </div>
        `;
    });
    document.querySelector('.js-order-summary').innerHTML = cartHTML;



    function deliveryOptionsHTML(matchingItem, cartItem) {
        let deliveryHTML = '';

            deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'day');
            const dateString = deliveryDate.format('dddd, MMMM D');
            const priceString = deliveryOption.priceCents === 0 ? 
            'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

            const isChecked = deliveryOption.id === cartItem.deliveryId;
        deliveryHTML += `
            <div class="delivery-option js-delivery-options" 
            data-product-id="${matchingItem.id}"
            data-delivery-id="${deliveryOption.id}">
                    <input
                    type="radio"
                    ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}"
                    />
                    <div>
                    <div class="delivery-option-date">${dateString}</div>
                    <div class="delivery-option-price">
                    ${priceString} Shipping
                    </div>
                    </div>
                </div>
            `
        });
        return deliveryHTML;
    }

    document.querySelectorAll('.js-delivery-options').forEach((element) => {
        element.addEventListener('click', () => {
            const {productId, deliveryId} = element.dataset;
            updateDeliveryOption(productId, deliveryId);
            renderOrderSummary();
        });
    });

    const deleteButtons = document.querySelectorAll('.js-delete-link');
    deleteButtons.forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();
        })
    })
};
renderOrderSummary();
