#  Amazon-Inspired E-commerce App

A front-end e-commerce application inspired by Amazon, built with vanilla JavaScript to practice asynchronous programming, API integration, and object-oriented design.

---


##  Features

* 📦 Fetch products from an external API
* 🛍️ Add items to cart
* 🔢 Dynamic cart updates
* 💳 Order summary interface
* ⚡ Fully dynamic UI rendering
* 🔄 Uses `fetch` and Promises for async operations

---

##  What This Project Demonstrates

* JavaScript fundamentals (ES6+)
* Asynchronous programming (Promises, fetch)
* Object-oriented programming (classes)
* State management (cart & products)
* DOM manipulation and rendering

---

##  Tech Stack

* HTML5
* CSS3
* JavaScript

---

##  Project Structure

```plaintext
.
├── amazon.html
├── checkout.html
├── orders.html
├── tracking.html
├── backend/
│   └── products.json
├── data/
│   ├── cart.js
│   ├── deliveryOptions.js
│   ├── orders.js
│   └── products.js
├── scripts/
│   ├── app.js
│   ├── checkout.js
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   └── utils/
│       └── money.js
├── styles/
│   ├── pages/
│   │   ├── amazon.css
│   │   ├── orders.css
│   │   ├── tracking.css
│   │   └── checkout/
│   │       ├── checkout.css
│   │       └── checkout-header.css
│   └── shared/
│       ├── amazon-header.css
│       └── general.css
├── images/
│   ├── icons/
│   ├── products/
│   └── ratings/
└── tests/
    ├── tests.html
    ├── data/
    │   └── cartTest.js
    └── utils/
        └── moneyTest.js
```


---

## ⚙️ Getting Started

```bash
git clone https://github.com/oussama-dalhi/amazon.git
cd amazon
```

Open `amazon.html` in your browser or use Live Server.

---


---

## ⚠️ Disclaimer

This project is inspired by Amazon's UI for educational purposes only.
It is not affiliated with or endorsed by Amazon.

---

## 🙌 Acknowledgements

* https://supersimplebackend.dev
