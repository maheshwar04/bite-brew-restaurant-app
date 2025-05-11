---

# ☕ Bites & Brew – Full Stack App

Bites & Brew is a full-stack café management application built with React, Node.js, Express, and MongoDB. Users can register, log in, and view a list of food and beverage products. Admin users can also view all registered users. The app includes protected routes with JWT authentication and a styled UI with a cozy café-themed design.

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

## ☕ Bites & Brew - Frontend

Bites & Brew Frontend is the React-based user interface for the full-stack café management application. It allows users to register, log in, view products, and interact with the app's backend via a sleek, user-friendly UI. It communicates with the backend API to handle authentication, registration, product display, and order history.

---

## 📸 Preview 

![Screenshot 2025-05-08 114436](https://github.com/user-attachments/assets/7dc66258-d987-4493-bf04-fa8007434850)

![Screenshot 2025-05-08 114416](https://github.com/user-attachments/assets/64805db3-ee4a-4fde-b988-96a8c61b9684)

![Screenshot 2025-05-08 114406](https://github.com/user-attachments/assets/f392d1e3-26ea-4c36-bdb5-6e9b5a52e719)

![Screenshot 2025-05-08 114456](https://github.com/user-attachments/assets/1fecd486-c8aa-4a52-96e9-e8b1a5796f07)


---

## 🧰 Technologies Used

### Frontend

* React
* React Router DOM
* Bootstrap 
* Axios
* CSS for styling

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (JSON Web Token)
* Swagger (API docs)

---

## 📂 Project Structure

```
/client
  └── /components
      ├── Login.js
      ├── Register.js
      ├── ProductsPage.js
      └── ShowAllUsers.js
  └── products.js
  └── App.js
  └── styles.css

/server
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── db.js
  ├── swaggerconfig.js
  └── server.js
```

---

## ⚙️ Setup Instructions

### Backend

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd <repository-folder>
   ```

2. Set up the backend:

   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file in the `/server` directory:

   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Frontend

1. Go to the frontend directory:

   ```bash
   cd client
   npm install
   ```

2. Start the React app:

   ```bash
   npm start
   ```

---

## 🔐 Authentication Flow

* Users register via `/register`
* On login via `/login`, they receive a JWT token
* Protected routes (like `/users`) require the JWT token in the request header:

  ```
  Authorization: Bearer <token>
  ```

---

## 🛒 Features

### ✅ User Features

* Register and log in
* Access products page after logging in
* View beautiful UI with café background and styled components

### ✅ Admin/Viewer Features

* View list of all registered users

---

## 🔗 Routes Overview

### 🔒 Backend API Endpoints

| Method | Endpoint              | Description               | Auth Required |
| ------ | --------------------- | ------------------------- | ------------- |
| POST   | `/api/users/register` | Register a new user       | No            |
| POST   | `/api/users/login`    | Login user, get JWT token | No            |
| GET    | `/api/users`          | Get all users             | ✅ Yes         |
| POST   | `/api/orders/create`  | Create new order          | ✅ Yes         |
| GET    | `/api/orders/history` | Get user order history    | ✅ Yes         |

---

## 🎨 UI Design

* Background: `background_cafe.png`
* Font: Algerian-style for title, Open Sans for text
* Navigation links styled for clarity and interaction

---

## 🧪 API Documentation

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

> Make sure to install `swagger-ui-express` and `swagger-jsdoc` for documentation support.

---

## 🙋 Contributing

Contributions, suggestions, and improvements are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a new Pull Request


---



