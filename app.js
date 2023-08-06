const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Dynamic routes
app.use('/api-chat', require('./routes'));

module.exports = app;