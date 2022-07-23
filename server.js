const express = require('express');
const connectDB = require('./database/db');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');


// Initialize express
const app = express();




// MiddleWare
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRoutes);


// Connect to database
connectDB();

app.get('/', (req, res) => {
    res.send('API Running');
});




// Init Middleware
const port  = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});