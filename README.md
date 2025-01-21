
# BG-Frontend (E-Commerce Web Application)

## Overview
This is a fully functional E-Commerce web application built with React. The application allows users to view products, add them to the cart, and proceed to a mock checkout. Additionally, users can view their order history on the "My Orders" page.

## Key Features

1. **Product Listing Page**
   - Fetches product data from an external API (EscuelaJS).
   - Displays a list of products with details such as product title, image, and price.
   - Implements a search functionality for filtering products by title.

2. **Product Modal**
   - Displays detailed information about a selected product.
   - Allows users to view the product's image, description, and price.

3. **Add to Cart Functionality**
   - Allows users to add products to the cart.
   - Cart context is used to manage the cart state across the application.
   - Users can view added products in the cart and proceed to checkout.

4. **Mock Checkout**
   - A mock checkout process that simulates an order being placed.
   - After completing the checkout, users are redirected to the "My Orders" page.

5. **My Orders Page**
   - Displays a list of orders placed by the user.
   - Users can see the details of their past orders, including the products, prices, and order date.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Bootstrap, custom CSS
- **State Management**: React Context API (for Cart Management)
- **API**: External API for fetching product data (EscuelaJS)
- **Icons**: React-Icons (CiCirclePlus)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/e-commerce-app.git
```

### 2. Navigate to the project directory

```bash
cd e-commerce-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm start
```


## Folder Structure

```
/src
  /components
    AddProductModal.jsx      - Modal for adding products to the cart
    ProductModal.jsx         - Modal for displaying product details
    Cart.jsx                 - Cart component to manage products in the cart
  /context
    CartContextProvider.jsx  - Context provider for managing cart state
  /pages
    Home.jsx                 - Home page displaying the product listing and search bar
    MyOrders.jsx             - Page for displaying past orders
  /utils
    api.js                   - Utility functions for API calls
```

## How to Use

1. **Viewing Products**: 
   - Upon opening the app, you will see a list of products fetched from the API.
   - Use the search bar to filter products based on title.

2. **Product Details**: 
   - Click on any product to view its details in a modal.
   
3. **Adding to Cart**: 
   - To add a product to the cart, click the "+" button on the product card.
   
4. **Mock Checkout**: 
   - After adding products to the cart, proceed to checkout (simulated) from the cart page.
   - Upon successful checkout, you will be redirected to the "My Orders" page.

5. **Viewing Orders**: 
   - On the "My Orders" page, you will see a list of all the orders placed.
   - Each order will show the products ordered, their prices, and the order date.
