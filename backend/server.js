const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerconfig');
 
// Load environment variables
dotenv.config();
 
// Connect to database
connectDB();
 
const app = express();
 
// Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
 
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
 
// Register routes
app.use('/api/users', userRoutes);
 
const PORT = process.env.PORT || 5000;
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});