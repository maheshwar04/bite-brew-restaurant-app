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
      ├── AboutUs.js
      ├── ProductDetailsPage.js
      ├── ProductsNavbar.js
      ├── Orders.js
      ├── Navigation.js
      ├── CartPage.js
      └── ShowAllUsers.js
  └── /Dashboard
      ├── AdminNavBar.js
      ├── AdminPanrl.js
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
