const express = require('express');

const app = express();

const logger = require('./middleware/logger');
const userRoutes = require('./routes/userrouter');

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server Started on Port 3000');
}); 