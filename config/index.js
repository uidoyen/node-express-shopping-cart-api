process.env.NODE_ENV = 'production';
const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9000,
  jwtExpiresIn: 86400,
  secretOrKeys: 'secret'
};

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  config.mongoUri =
    'mongodb://yahya:mnm1b98Q9z76xH5c7adodiq@ds017173.mlab.com:17173/shopping-cart';
} else {
  console.log('DEV');
  config.mongoUri =
    'mongodb://yahya:mnm1b98Q9z76xH5c7adodiq@ds017173.mlab.com:17173/shopping-cart';
}
module.exports = config;
