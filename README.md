# Burger-Shop-Order

# BurgerShop - Order Management Application

BurgerShop is a Node.js application designed for managing customer orders in an imaginary burger restaurant. It leverages the Express framework, UUID for unique order identification, and Nodemon for development convenience. This README provides an overview of the application's features and how to test its functionality using the Insomnia tool.

## Key Features

- **GET (Read All Orders):** Retrieve a list of all orders made within the restaurant.

- **POST (Create an Order):** Add a new order with details such as the customer's name, burger selection, and special instructions.

- **PUT (Update an Order):** Modify existing orders, allowing updates to customer details, burger selection, or special instructions.

- **GET (Read Specific Order):** Retrieve a specific order using its unique UUID.

- **PATCH (Update Order Status):** Update the status of an order to "READY-TO-GO."

- **DELETE (Delete an Order):** Remove an order from the system, useful for canceled or obsolete orders.

## Development Tools

- **Node.js:** The core platform for building the web application and handling server-side logic.

- **Express:** A Node.js web application framework that simplifies the creation of robust, scalable, and feature-rich applications.

- **UUID:** Generate unique identifiers for each order, ensuring no two orders have the same identifier.

- **Nodemon:** A development utility that automatically restarts the server whenever code changes are detected, reducing downtime during development.

- **Insomnia:** A REST API client that assists in testing and debugging the application by allowing you to send various HTTP requests and inspect the responses.

## Getting Started

1. Clone the repository to your local machine.

2. Install the required dependencies using `npm install`.

3. Start the application using `npm start`.

4. Use Insomnia to replicate HTTP requests and review the responses, testing the application's functionality.

## Example API Endpoints

- **GET All Orders:**
  - Endpoint: `/orders`
  - Description: Retrieve a list of all orders.

- **POST Create an Order:**
  - Endpoint: `/orders`
  - Description: Add a new order.

- **PUT Update an Order:**
  - Endpoint: `/orders/:Id`
  - Description: Update an existing order.

- **GET Specific Order:**
  - Endpoint: `/api/orders/:Id`
  - Description: Retrieve a specific order.

- **PATCH Update Order Status:**
  - Endpoint: `/api/orders/:Id`
  - Description: Update the status of an order to "READY-TO-GO."

- **DELETE an Order:**
  - Endpoint: `/api/orders/:Id`
  - Description: Delete an order.
