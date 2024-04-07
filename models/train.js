import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';
import Station from './station.js'; // Import the Station model

// Define the Train model
class Train extends Model {}

Train.init({
  // Define Train attributes
  train_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0 // Set initial value to 0
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Train',
  tableName: 'trains'
});

Train.belongsTo(Station, { as: 'sourceStation', foreignKey: 'sourceStationId' });
Train.belongsTo(Station, { as: 'destinationStation', foreignKey: 'destinationStationId' });


Train.addHook('beforeCreate', async (train) => {
  train.availableSeats = train.totalSeats; // Set availableSeats to totalSeats initially
});

Train.sync({ force: false });

export default Train;
