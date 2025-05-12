const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes"); // Import orderRoutes
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swaggerconfig");
const Eureka = require("eureka-js-client").Eureka;
require("dotenv").config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Or, configure CORS for specific origins and methods:
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your React app's origin
  methods: "GET,POST,DELETE",
  credentials: true, // Allow cookies and authorization headers
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Swagger setup - add this before your routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/status", (req, res) => {
  res.send("Node.js is running");
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});
// Configure Eureka client
const host =
  Object.values(require("os").networkInterfaces())
    .flat()
    .find((i) => i.family === "IPv4" && !i.internal)?.address || "127.0.0.1";
const port = 5000;
const client = new Eureka({
  instance: {
    app: "customer-service",
    instanceId: `${host}:customer-service:${port}`,
    hostName: "customer-service",
    ipAddr: `${host}`,
    port: {
      $: 5000,
      "@enabled": "true",
    },
    vipAddress: "customer-service",
    statusPageUrl: `http://${host}:${port}/status`,
    healthCheckUrl: `http://${host}:${port}/health`,
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    host: "localhost",
    port: 8761,
    servicePath: "/eureka/apps",
  },
});
// Start Eureka client
client.start((error) => {
  console.log(error || "Registered to Eureka without any Error");
});
