
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
Backend:
![Screenshot 2025-05-09 162645](https://github.com/user-attachments/assets/d1fffad9-0c84-48db-bae6-bf472f444e62)
![Screenshot 2025-05-09 162726](https://github.com/user-attachments/assets/d1cfd8bd-d1c8-44aa-8914-3bcb4d819fe7)
![Screenshot 2025-05-09 162805](https://github.com/user-attachments/assets/dbabaf02-b58e-42a3-8a43-2ae231489062)
![Screenshot 2025-05-09 162914](https://github.com/user-attachments/assets/cc5c40f7-4e59-4005-8a90-085d929e5f95)


---

# Future Scope
In future we can containerize these microservices using Docker

----

## 📁 Project Folder Structure (`bites&brew`)

```
bites&brew/
│
├── customer_service/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env.example
│   ├── db.js
│   ├── auth.js
│   ├── server.js
│   ├── userController.js
│   ├── orderController.js
│   ├── userModel.js
│   ├── orderModel.js
│   ├── userRoutes.js
│   ├── orderRoutes.js
│   └── package.json
│
├── product-services/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── pom.xml
│   ├── target/your-product-app.jar
│   └── src/
│       └── main/java/... (your Java code)
│
├── feedback_services/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── requirements.txt
│   ├── app.py
│   └── feedback.db (optional placeholder)
│
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── public/
│   └── src/
│
├── eureka-server/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── pom.xml
│   ├── target/eureka-server.jar
│   └── src/
│
├── docker-compose.yml
└── README.md
```

---

## 🐳 Step-by-Step: Containerizing Microservices

---

### 1. **customer\_service (Node.js + MongoDB)**

**Dockerfile** – Place inside `customer_service/`

```dockerfile
# customer_service/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=5000
EXPOSE 5000

CMD ["node", "server.js"]
```

Make sure `server.js` starts the app and uses `process.env` to get DB connection.

---

### 2. **product-services (Spring Boot + H2)**

**Dockerfile** – Place inside `product-services/`

```dockerfile
# product-services/Dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Before building, make sure to run `mvn clean package` to create the `.jar`.

---

### 3. **feedback\_services (Python + SQLite)**

**Dockerfile** – Place inside `feedback_services/`

```dockerfile
# feedback_services/Dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5001

CMD ["python", "app.py"]
```

Make sure `app.py` starts your Flask/FastAPI app and listens on port `5001`.

---

### 4. **eureka-server (Spring Boot)**

**Dockerfile** – Place inside `eureka-server/`

```dockerfile
# eureka-server/Dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8761
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Build the `.jar` before Docker builds.

---

### 5. **frontend (React)**

**Dockerfile** – Place inside `frontend/`

```dockerfile
# frontend/Dockerfile
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🧱 Docker Compose File

Create this in the root directory (`bites&brew/docker-compose.yml`):

```yaml
version: '3.9'

services:
  mongo:
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"

  customer_service:
    build: ./customer_service
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/bnb
    depends_on:
      - mongo
    networks:
      - bnb-network

  product_services:
    build: ./product-services
    ports:
      - "8081:8081"
    depends_on:
      - eureka-server
    networks:
      - bnb-network

  feedback_services:
    build: ./feedback_services
    ports:
      - "5001:5001"
    networks:
      - bnb-network

  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"
    networks:
      - bnb-network

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - customer_service
      - product_services
      - feedback_services
    networks:
      - bnb-network

networks:
  bnb-network:
    driver: bridge
```

---

## ⚙️ Implementation Steps

1. **Build & Run**

```bash
cd bites&brew
docker-compose build
docker-compose up
```

2. **Ensure Mongo URI** is `mongodb://mongo:27017/bnb` in `.env` for `customer_service`.

3. **Spring Boot Eureka Clients**

In each Spring Boot app (`product-services`, `eureka-server`), ensure application properties are properly set to discover via Eureka:

```properties
eureka.client.serviceUrl.defaultZone=http://eureka-server:8761/eureka/
```

---

## ✅ Final Notes

| Component        | URL                                            |
| ---------------- | ---------------------------------------------- |
| Frontend (React) | [http://localhost:3000](http://localhost:3000) |
| Customer API     | [http://localhost:5000](http://localhost:5000) |
| Product API      | [http://localhost:8081](http://localhost:8081) |
| Feedback API     | [http://localhost:5001](http://localhost:5001) |
| Eureka Dashboard | [http://localhost:8761](http://localhost:8761) |

---

# Orchestrating using Kubernetes and uploading to AWS S3
We can use kubernetes to orchestrate the docker containers and we can upload the images to AWS S3

---


## 🧱 Kubernetes Orchestration for Microservices

---

### 📁 Project Directory Setup for Kubernetes YAMLs

Inside your `bites&brew/` directory, create a folder:

```bash
mkdir k8s
```

### 🗂️ Directory Structure (after K8s)

```
bites&brew/
│
├── k8s/
│   ├── customer-service.yaml
│   ├── product-service.yaml
│   ├── feedback-service.yaml
│   ├── eureka-server.yaml
│   ├── frontend.yaml
│   └── mongo.yaml
```

---

### ✅ Common Kubernetes Configuration Steps

Each service will have a:

* **Deployment**
* **Service**
* **(Optional) ConfigMap or Secret**

---

### 🧩 Example: `mongo.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mongo
spec:
  ports:
    - port: 27017
  selector:
    app: mongo
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mongo
spec:
  selector:
    matchLabels:
      app: mongo
  template:
    metadata:
      labels:
        app: mongo
    spec:
      containers:
        - name: mongo
          image: mongo
          ports:
            - containerPort: 27017
```

---

### 🧩 Example: `customer-service.yaml`

```yaml
apiVersion: v1
kind: Service
metadata:
  name: customer-service
spec:
  selector:
    app: customer-service
  ports:
    - port: 5000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: customer-service
spec:
  replicas: 1
  selector:
    matchLabels:
      app: customer-service
  template:
    metadata:
      labels:
        app: customer-service
    spec:
      containers:
        - name: customer-service
          image: your-dockerhub-username/customer_service:latest
          ports:
            - containerPort: 5000
          env:
            - name: MONGO_URI
              value: mongodb://mongo:27017/bnb
```

> 🔁 Repeat similar format for `product-service.yaml`, `feedback-service.yaml`, `eureka-server.yaml`, and `frontend.yaml`

---

### 🏗 Deploy to Kubernetes

If you're using `minikube`, `kind`, or AWS EKS:

```bash
kubectl apply -f k8s/
```

---

## 🚀 Upload Docker Images to S3 (as tarballs)

---

### 🧱 Step 1: Save Docker Images

```bash
docker save -o customer_service.tar your-dockerhub-username/customer_service:latest
docker save -o product_service.tar your-dockerhub-username/product_service:latest
docker save -o feedback_service.tar your-dockerhub-username/feedback_service:latest
docker save -o frontend.tar your-dockerhub-username/frontend:latest
docker save -o eureka_server.tar your-dockerhub-username/eureka_server:latest
```

---

### ☁️ Step 2: Upload to AWS S3

Make sure your AWS CLI is configured with:

```bash
aws configure
```

Then:

```bash
aws s3 cp customer_service.tar s3://your-bucket-name/docker-images/
aws s3 cp product_service.tar s3://your-bucket-name/docker-images/
aws s3 cp feedback_service.tar s3://your-bucket-name/docker-images/
aws s3 cp frontend.tar s3://your-bucket-name/docker-images/
aws s3 cp eureka_server.tar s3://your-bucket-name/docker-images/
```

---

### 🧪 (Optional) Load Docker image from tar

On another machine or server:

```bash
docker load -i customer_service.tar
```

---

## 📝 Summary

| Task                          | Status                            |
| ----------------------------- | --------------------------------- |
| Dockerfiles in place          | ✅                                 |
| Docker Compose defined        | ✅                                 |
| Kubernetes YAMLs              | ✅ (in `k8s/`)                     |
| Upload Docker images to S3    | ✅ via `docker save` + `aws s3 cp` |
| Load image from S3 (optional) | ✅ via `docker load -i`            |

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
