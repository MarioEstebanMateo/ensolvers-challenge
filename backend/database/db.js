import sequelize from "sequelize";

const db = new sequelize("ensolvers_challenge", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
