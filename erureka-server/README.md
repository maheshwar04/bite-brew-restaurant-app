---

# 🌐 BiteBrew Eureka Server

This is the **Service Discovery Server** for the **BiteBrew** microservices architecture. It uses **Netflix Eureka** (via Spring Cloud) to allow microservices such as Product Service, Feedback Service, and others to register themselves and discover each other dynamically.

---

## 📌 Purpose

In a distributed microservice-based architecture, services need a way to find and communicate with each other. The **Eureka Server** acts as a **registry** that keeps track of all the available services and their instances.

---

## 🛠️ Tech Stack

- Java 21
- Spring Boot 3.4.5
- Spring Cloud 2024.0.1
- Eureka Server (Netflix OSS)
- Maven

---

## 📁 Project Structure

```

erureka-server/
├── src/
│   └── main/
│       └── java/com/bite\_brew/erureka\_server/
│           ├── ErurekaServerApplication.java
│           └── ServletInitializer.java
├── pom.xml
└── README.md

````

---

## 🚀 How It Works

- Runs on a configurable port (default: `8761`)
- Accepts service registration and status heartbeats from clients (e.g., Product and Feedback services)
- Provides a web dashboard to view registered services

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/erureka-server.git
cd erureka-server
````

### 2. Configure `application.properties`

Create a file at:
`src/main/resources/application.properties`

Add:

```properties
server.port=8761
spring.application.name=eureka-server
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
```

### 3. Build and Run

```bash
mvn clean install
mvn spring-boot:run
```

The Eureka Server dashboard will be available at:

> 🔗 [http://localhost:8761](http://localhost:8761)

---

## 🧩 Integration with Microservices

Your microservices (e.g., Product and Feedback services) should have this in their `application.properties`:

```properties
eureka.client.service-url.defaultZone=http://localhost:8761/eureka
spring.application.name=your-service-name
```

And register themselves using:

```java
@EnableDiscoveryClient
```

---

## 🔄 Example Services Registered

* `product-service`
* `feedback-service`
* `order-service` (planned)
* `user-service` (planned)

---

## ⚠️ Notes

* The name `ErurekaServerApplication` appears to be a typo. It should likely be `EurekaServerApplication` for clarity and convention.
* Port `8761` is the default for Eureka but can be customized.

---

## 🧪 Testing

Once up, go to:
🔗 `http://localhost:8761`
You should see your registered services listed under **Instances currently registered with Eureka**.

---

## 🧰 Maven Info

### Key Dependencies in `pom.xml`

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

Make sure to use:

```xml
<spring-cloud.version>2024.0.1</spring-cloud.version>
```

With:

```xml
<packaging>war</packaging>
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributions

Issues and pull requests are welcome. Please fork the repo and help improve the BiteBrew ecosystem!

---
