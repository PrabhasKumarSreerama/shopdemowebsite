
# Add to Cart Task Using Modal

A ReactJS application that fetches product data from the Fake Store API and allows users to manage a shopping cart through a custom modal interface.

## Features

- Fetches product data from the **Fake Store API**.
- Displays a list of products with essential details (image, title, price, desciption, rating).
- Allows users to add products to the cart via an **Add to Cart** button.
- Displays an **alert** if a product is already in the cart.
- Shows the cart item count in a **responsive Navbar**.
- Opens a **custom modal** displaying cart contents when the "Cart" button is clicked.
- Includes a **Remove from Cart** button for each item in the modal.
- Updates the cart dynamically based on user actions.
- Fully responsive design for desktop and mobile devices.

---

## Technologies Used

- **ReactJS**: For building the user interface.
- **CSS**: For custom modal styling and responsive design.
- **Fetch API**: For making HTTP requests to the Fake Store API.
- **HTML**: Basic structure and layout.

---

## Usage

### 1. Main Features:
- **View Products**: Browse the list of products fetched from the Fake Store API.
- **Add to Cart**: Click the "Add to Cart" button on any product to add it to your cart.
- **Cart Overview**: Click on the "Cart" button in the Navbar to view the items in the cart via a modal.

### 2. Custom Modal:
- The modal shows a list of products in the cart.
- Each item has a "Remove" button to delete it from the cart.
- If the cart is empty, the modal displays a message indicating that.

### 3. Alerts:
- If you try to add a product already in the cart, you'll see an alert message: **"Item already added to the cart"**.

---

## API Used

**Fake Store API**:  
Base URL: `https://fakestoreapi.com/products`  
This API provides a list of fake e-commerce products for testing purposes.

---

## Responsive Design

- The application is designed to work seamlessly on both **desktop** and **mobile** devices.
- The layout adapts to different screen sizes for an optimal user experience.

---

