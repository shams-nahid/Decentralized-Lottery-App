const mongoose = require('mongoose');
const { dbUrl } = require('../config/keys');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports = () => {
  mongoose.connect(dbUrl, options, () => console.log('Database connected.'));
};
