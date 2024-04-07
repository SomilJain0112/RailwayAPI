import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config.js';
import User from './user.js';
import Train from './train.js';

class Booking extends Model {}

Booking.init({
  booking_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  seatsBooked: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  train_id: { // Corrected column name
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'train_id' // Specify the correct column name in the database
  },
  user_id: { // Corrected column name
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id' // Specify the correct column name in the database
  }
}, {
  sequelize,
  modelName: 'Booking',
  tableName: 'bookings'
});

Booking.belongsTo(Train, { foreignKey: 'train_id' }); // Remove 'as' alias
Booking.belongsTo(User, { foreignKey: 'user_id' }); // Remove 'as' alias

Booking.sync({ force: false });

export default Booking;
