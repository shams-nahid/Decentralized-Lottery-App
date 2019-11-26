const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

require('./startup/db')();
require('./startup/route')(app);

app.use(express.static(path.join(__dirname, 'public')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
