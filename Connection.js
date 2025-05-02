const { Sequelize, DataTypes } = require("sequelize");
// Import the book model

const sequelize = new Sequelize(
  "postgresql://postgres.iztllcfrmxltiuhzlojg:Kaya$th@572361@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

// Optional: Add code to test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize; // Make sure to export the sequelize instance


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./models/book.model.js") (sequelize, DataTypes);
db.users = require("./models/user.model.js") (sequelize, DataTypes);
db.students = require("./models/student.model.js") (sequelize, DataTypes);

sequelize.sync({ force: false }).then(() => {
  console.log("migrated successfully")
})
module.exports = db;
//module.exports = sequelize;
