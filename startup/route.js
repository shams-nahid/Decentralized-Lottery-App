const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const userTraceMiddleware = require('../middleware/userTraceMiddleware');

const contractInfoRouter = require('../router/contractInfoRouter');

module.exports = app => {
  app.use(express.json());
  app.use(bodyParser.json({ extended: false }));
  app.use(userTraceMiddleware);

  app.use(cors());

  app.use('/api/contract-info', contractInfoRouter);
};
