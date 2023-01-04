const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  pool: { max: 5, main: 0, ideal: 10000 }
});

db.sync();
db.authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("Error" + 'err');
  })
module.exports = db;