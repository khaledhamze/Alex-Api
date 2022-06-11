const express = require('express');
const bodyParser = require('bodyParser');


const app = express();
app.use(bodyParser.json());
const dotenv = require('dotenv');

// app.get('/', (req, res) => {
//     res.send("Hello World");
// });


// app.get('/employees', (req, res) => {
//     res.send("Employees");
// });

const connectDB = require(`./config/db`);

// load Config

dotenv.config({ path: './config/config.env' });

connectDB();

// Routes
app.use('/', require('./routes/inex'))

app.listen(3000);
