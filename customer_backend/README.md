---

# Node.js RESTful API for Users and Orders

This Node.js application provides a RESTful API to manage users and their orders. It connects to a MongoDB database, implements secure authentication using JWT, and includes interactive API documentation via Swagger.

---

## 🚀 Features

* User registration and login
* JWT authentication middleware
* Create and fetch order history
* MongoDB for data persistence
* Secure routes for authorized access
* Swagger API documentation

---

## 🛠️ Setup and Installation

1. **Clone the Repository**

```bash
git clone <repository-url>
cd <repository-directory>
```

2. **Install Dependencies**

```bash
npm install
```

3. **Create `.env` File**

In the root directory, create a `.env` file with the following variables:

```
NODE_ENV=development
PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

4. **Run the Server**

```bash
npm server.js
```

---

## 📁 Project Structure

```
├── controllers/
│   ├── userController.js
│   └── orderController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── userModel.js
│   └── orderModel.js
├── routes/
│   ├── userRoutes.js
│   └── orderRoutes.js
├── swaggerconfig.js
├── config/
│   ├── db.js
├── server.js
├── .env
└── README.md
```

![image](https://github.com/user-attachments/assets/951e8644-f6a2-4b9a-b81c-7ed3ebb1a9c6)

---

## 📄 API Documentation (Swagger)

Swagger UI is available at:
**`http://localhost:3000/api-docs`**


![Screenshot (144)](https://github.com/user-attachments/assets/0d08de48-9db7-428d-82c4-2d43c2d0687a)



Ensure you have the following packages installed:

```bash
npm install swagger-ui-express swagger-jsdoc
```

---

## 🧩 Available Endpoints

### User Endpoints

| Method | Endpoint              | Description               |
| ------ | --------------------- | ------------------------- |
| POST   | `/api/users/register` | Register a new user       |
| POST   | `/api/users/login`    | Login and receive a token |
| GET    | `/api/users/all`         | Get all users |
| PUT    | `/api/users/:id`         | Update details of a user (protected) |
| DELETE    | `/api/users/:id`         | Delete a user (protected) |
| POST   | `/api/users/logout`         | Logs out a user and makes the token invalid (protected) |
| GET    | `/api/users/orders` | Get user’s orders (protected) |
| GET    | `/api/users/orders/{order_id}` | Get details of a specific order (protected) |

### Order Endpoints

| Method | Endpoint              | Description                          |
| ------ | --------------------- | ------------------------------------ |
| POST   | `/api/orders/create`  | Create a new order (protected)       |
| GET    | `/api/orders/history` | Get user’s order history (protected) |

---

## 🔐 Authentication

JWT-based authentication is used to protect routes. Send the token in the `Authorization` header as:


![Screenshot (138)](https://github.com/user-attachments/assets/8a5a72d5-845b-4349-9ef1-964d379a2667)


```
Authorization: Bearer <token>
```

---

## 📦 Models Overview

### User Model

* `name`: String
* `email`: String (unique)
* `password`: String (hashed)
* `orders`: \[Order references]

### Order Model

* `user`: Reference to User
* `products`: Array of product objects
* `total`: Number

---

## 🧪 Example Swagger Endpoint Doc

```js
/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
```

---
