const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

const userTraceMiddleware = require('./middleware/userTraceMiddleware');
require('./startup/db')();

app.use(userTraceMiddleware);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Server is running on port: ${port}`));
