const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

require('./startup/db')();
require('./startup/route')(app);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
