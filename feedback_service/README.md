---

# 💬 BiteBrew Feedback Service

This is the **Feedback Service** for the **BiteBrew** platform, built with **Flask**. It allows customers to submit feedback for products and enables retrieval of feedback for specific products. It supports CORS, service discovery via Eureka, and automatic API documentation via Swagger.

---

## 🚀 Features

- Submit product feedback with ratings and comments
- Retrieve all feedback for a specific product
- Swagger UI integration for easy API testing
- SQLite for lightweight data storage
- Eureka Client for service discovery
- CORS support for integration with frontend apps (e.g., React)

---

## 🛠️ Tech Stack

- Python 3.x
- Flask
- Flask-SQLAlchemy
- Flasgger (Swagger UI)
- Flask-CORS
- SQLite
- Eureka (via `py-eureka-client`)

---

## 📁 Project Structure

```

feedback-service/
├── app.py                  # Main application entry point
├── ecommerce.db            # SQLite database (auto-generated)
└── requirements.txt        # Python dependencies

````

---

## ⚙️ Setup Instructions

### Prerequisites

- Python 3.8+
- pip (Python package manager)
- Eureka Server running (e.g., on `http://localhost:8761`)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/feedback-service.git
cd feedback-service
````

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the Server

```bash
python app.py
```

The server will be running at: `http://localhost:7004`

Swagger UI will be available at: `http://localhost:7004/apidocs`

---

## 🔧 Configuration

* **SQLite Database**: `ecommerce.db` is created automatically.
* **Eureka**: The service registers with Eureka using local IP and port `7004`.

---

## 📚 API Endpoints

### 🔍 Service Info

```
GET /info
```

Returns basic metadata about the service.

---

### ❤️ Health Check

```
GET /health
```

Returns service health status.

---

### ➕ Submit Feedback

```
POST /feedback
```

**Request Body:**

```json
{
  "customer_name": "John Doe",
  "customer_id": 123,
  "product_id": 456,
  "rating": 5,
  "comments": "Great product!"
}
```

**Responses:**

* `201 Created`: Feedback submitted
* `400 Bad Request`: Missing required fields

---

### 📄 Get Feedback for a Product

```
GET /feedback?product_id=456
```

**Responses:**

* `200 OK`: List of feedback entries
* `400 Bad Request`: No product ID provided
* `404 Not Found`: No feedback found

---

## 🧪 API Docs (Swagger UI)

Visit: [http://localhost:7004/apidocs](http://localhost:7004/apidocs)

Powered by **Flasgger**, includes interactive documentation and testing.

---

## 🌐 Eureka Service Discovery

This service registers itself with Eureka under the name: `feedback-service`

Make sure Eureka is running at: `http://localhost:8761`

---

## 📦 Requirements

Include this in your `requirements.txt`:

```
Flask
Flask-SQLAlchemy
Flask-Cors
flasgger
py_eureka_client
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributions

Pull requests and issues are welcome. Feel free to contribute or suggest improvements!

