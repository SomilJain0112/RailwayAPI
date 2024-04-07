import 'dotenv/config';
import { Sequelize, DataTypes, Model } from "sequelize";
const config =  {
    development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: 'localhost',
      dialect: 'postgres',
      port: 5432, 
      logging: true, 
    }
  };
  

const { username, password, database, host, dialect, port, logging } = config.development;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect, 
    port,
    logging
  });
export {sequelize}