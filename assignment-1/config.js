const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  MONGO_LINK: process.env.MONGO_LINK,
  SECRET: process.env.SECRET,
  PORT: process.env.PORT
};