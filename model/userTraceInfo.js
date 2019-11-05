const mongoose = require('mongoose');

const userTraceInfoSchema = new mongoose.Schema({
  range: [Number],
  country: String,
  region: String,
  eu: String,
  timezone: String,
  city: String,
  ll: [Number],
  metro: Number,
  area: Number
});

const UserTraceInfo = mongoose.model('UserTraceInfo', userTraceInfoSchema);

exports.userTraceInfoSchema = userTraceInfoSchema;
exports.UserTraceInfo = UserTraceInfo;
