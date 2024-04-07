import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';

class Station extends Model {}

Station.init({
  station_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  distanceFromSource: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Station',
  tableName: 'stations'
});

Station.sync({ force: false });

export default Station;
