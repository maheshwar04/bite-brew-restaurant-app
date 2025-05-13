
---
# 🛍️ BiteBrew Product Service

This is the **Product Service** for the **BiteBrew** platform, built using **Spring Boot**. It manages product-related operations such as creation, retrieval, updating, deletion, and filtering based on `ProductType` and `price`.

---

## 📦 Features

- Add, update, delete, and view products
- Filter products by type (`VEG`, `NON_VEG`, `EGG`) and/or maximum price
- Cross-origin requests support for frontend (CORS enabled)
- Timestamps for product creation and updates
- Microservices ready with Eureka Discovery Client

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL (or any JPA-compatible DB)
- Maven
- Lombok
- Spring Cloud Eureka

---

## 🚀 Getting Started

### Prerequisites

- Java 17+
- Maven
- MySQL or PostgreSQL (or your preferred DB)
- Eureka Server (if running in microservices setup)

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/bitebrew-product-service.git
cd bitebrew-product-service
````

2. **Configure `application.properties`**

Add your DB configuration and Eureka details in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bitebrew
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

eureka.client.service-url.defaultZone=http://localhost:8761/eureka
```

3. **Build and run**

```bash
mvn clean install
mvn spring-boot:run
```

The service will run on: `http://localhost:8080`

---

## 📚 API Endpoints

Base URL: `/api/products`

### ➕ Create Product

```
POST /api/products
```

**Request Body (JSON):**

```json
{
  "name": "Paneer Pizza",
  "description": "Cheesy and spicy vegetarian pizza",
  "price": 399.99,
  "brand": "BiteBrew",
  "category": "Pizza",
  "imageUrl": "http://example.com/pizza.jpg",
  "stockQuantity": 50,
  "isAvailable": true,
  "productType": "VEG"
}
```

---

### 📄 Get All Products

```
GET /api/products
```

---

### 🔍 Filter Products

```
GET /api/products/filter?type=VEG&maxPrice=500.00
```

*Parameters are optional*

---

### 📦 Get Product by ID

```
GET /api/products/{id}
```

---

### ✏️ Update Product

```
PUT /api/products/{id}
```

**Request Body:** same as create

---

### ❌ Delete Product

```
DELETE /api/products/{id}
```

---

## 🧱 Entities

### Product

```java
public class Product {
    private Long productId;
    private String name;
    private String description;
    private Double price;
    private String brand;
    private String category;
    private String imageUrl;
    private Integer stockQuantity;
    private Boolean isAvailable;
    private ProductType productType;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
```

### ProductType Enum

```java
public enum ProductType {
    VEG,
    NON_VEG,
    EGG
}
```

---

## 📁 Project Structure

```
com.bite_brew.product_service
├── Controller
├── Entity
├── Enum
├── Repository
├── Service
└── ProductServiceApplication.java
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

---

Let me know if you'd like a Docker setup, Postman collection, or to customize this for a multi-module microservice project.
```
