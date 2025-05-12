
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
| Feedback Service       | Python Flask                       | SQLite     | 7004  |
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
Before login:
![Screenshot 2025-05-13 003931](https://github.com/user-attachments/assets/dc738a17-b550-4980-a7b6-3d3bd8a6f252)
![Screenshot 2025-05-13 003946](https://github.com/user-attachments/assets/eae6a6c0-c8ad-468f-800e-70ad39b0e207)
![Screenshot 2025-05-13 004408](https://github.com/user-attachments/assets/96133e99-2926-46de-95e2-46ca39f743b9)
![Screenshot 2025-05-13 004421](https://github.com/user-attachments/assets/d4ee01b9-b121-4c2d-b3dc-15e7116efef2)

After login:Users can't see Admin Page
![Screenshot 2025-05-13 004539](https://github.com/user-attachments/assets/d38ac411-fdb4-4d19-a13f-be1d1bb0461f)
![Screenshot 2025-05-13 004616](https://github.com/user-attachments/assets/2d13bbdf-23e6-4111-9cd6-d913c1418077)
![Screenshot 2025-05-13 004731](https://github.com/user-attachments/assets/91c0f592-b16c-4503-aad2-a3f928755a7d)
![Screenshot 2025-05-13 004653](https://github.com/user-attachments/assets/730df2bc-d429-4b58-b417-fd717decc6da)
![Screenshot 2025-05-13 004741](https://github.com/user-attachments/assets/6f0f23e5-57c8-4410-ad89-2ddfac12ab9b)
Admin DashBoard:
![Screenshot 2025-05-13 004829](https://github.com/user-attachments/assets/9dfff5fb-a973-460d-a0a4-7fce0ca112e3)
![Screenshot 2025-05-13 004836](https://github.com/user-attachments/assets/25398985-dca1-4582-8ec7-f41b883eed28)
![Screenshot 2025-05-13 004947](https://github.com/user-attachments/assets/86892b11-d1a5-42e4-90b6-468691641c90)
![Screenshot 2025-05-13 005001](https://github.com/user-attachments/assets/03ca54ba-ba08-4328-aa52-e6f6fe1ee979)
![Screenshot 2025-05-13 005014](https://github.com/user-attachments/assets/7ea1aee5-1d80-41eb-b8e7-7eeb702f3a7f)
![Screenshot 2025-05-13 005033](https://github.com/user-attachments/assets/de735361-b272-4ed5-9f3a-154464be51e9)
![Screenshot 2025-05-13 005049](https://github.com/user-attachments/assets/8f2c37b7-82e0-4456-ae2f-20fec58d4741)

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
