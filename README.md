
# Bite & Brew Restaurant App

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

> A multi-microservice restaurant application built with Java Spring Boot, Node.js, and Python Flask with a modern React frontend.

---

## 🚀 Project Overview
**Bite & Brew** is a full-stack restaurant web app with a microservices architecture. Customers can register, browse the menu, add items to the cart, place orders, and provide feedback. Admins can manage the menu users.

---

## 🧱 Microservices Architecture

| Service Name           | Tech Stack                        | Database   | Port  |
|------------------------|------------------------------------|------------|-------|
| Product Service        | Spring Boot (Java 21)              | H2         | 8081  |
| Feedback Service       | Python Flask                       | SQLite     | 1704  |
| Customer+ order Service| Node.js + Express.js + JWT Auth    | MongoDB    | 5000  |
| Eureka Server          | Spring Boot                        | -          | 8761  |
| Frontend               | React + Bootstrap + CSS Animations | -          | 3000  |

---
---

## 📂 Repository Structure
```
├── product-service
├── feedback_service
├── customer_backend
├── erureka-server
├── frontend
└── README.md
```

---

## 🧰 Tech Stack
- **Frontend**: React, Bootstrap, Axios
- **Backend**:
  - Spring Boot (Product)
  - Node.js + Express (Order & Customer)
  - Python Flask (Feedback)
- **Database**: H2, MongoDB, SQLite
- **Service Discovery**: Eureka
- **Authentication**: JWT (Customer Service)
- **Dev Tools**: Docker (optional), Bruno

---

## 🛠️ Setup Instructions

### Prerequisites
- Java 21+
- Node.js & npm
- Python 3.x & pip
- MongoDB (for local dev)
- Docker (optional)

### Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/maheshwar04/bite-brew-restaurant-app.git
cd bite-brew-restaurant-app
```

2. **Eureka Server**
```bash
cd erureka-server
mvn spring-boot:run
```

4. **Customer Service**
```bash
cd customer_backend
npm install
npm start
```
6. **Eureka Server**
```bash
cd product-service
mvn spring-boot:run
```

5. **Feedback Service**
```bash
cd feedback_service
python app.py
```


7. **Frontend**
```bash
cd frontend
npm install
npm start
```

---

## 📦 Docker Support (Coming Soon)
Docker Compose setup will be added to containerize the entire app.

---

## 🔁 API Routes Overview

### 🧍 Customer Service (Node.js)
- `POST /register`
- `POST /login`
- `GET /profile`

### 🍽️ Product Service (Spring Boot)
- `GET /products`
- `GET /product/{id}`

### 📦 Order Service (Node.js)
- `POST /orders`
- `GET /orders`
- `GET /order/:id`
- `GET /cart`

### 💬 Feedback Service (Flask)
- `POST /feedback`
- `GET /feedbacks`
- `GET /feedback/:productId`

---

## 🧑‍💻 How It Works
1. Customer signs up and logs in (JWT).
2. Browses products from Product Service.
3. Adds items to cart and places orders via Order Service.
4. Leaves feedback on orders via Feedback Service.
5. Admin can manage menu and users from frontend/admin panel.

---

## 📊 Future Enhancements
- Docker + Docker Compose support
- Role-based access (Admin vs User)
- Email notifications
- Analytics dashboard
- Payment integration

---

## 📸 Screenshots
_Add screenshots of your app here later._

---

## 🤝 Contribution
Contributions are welcome! Please fork the repo and open a pull request.

---

## 📄 License
MIT License

---

## 🔗 GitHub Repository
https://github.com/maheshwar04/bite-brew-restaurant-app

## 🔗 Additional
Each service has its own detailed README.md inside its directory. Please refer to those for specific installation and API usage instructions per microservice.
