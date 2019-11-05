const geoIp = require('geoip-lite');
const { UserTraceInfo } = require('../model/userTraceInfo');
module.exports = async (req, res, next) => {
  if (req.originalUrl !== '/') {
    return next();
  }
  const xForwardedFor = (req.headers['x-forwarded-for'] || '').replace(
    /:\d+$/,
    ''
  );
  const ip = xForwardedFor || req.connection.remoteAddress;
  const userTraceInfo = new UserTraceInfo({
    ...geoIp.lookup(ip)
  });
  await userTraceInfo.save();
  next();
};
