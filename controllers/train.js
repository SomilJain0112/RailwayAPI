import Train from '../models/train.js';
import Station from '../models/station.js';

const handleRegisterTrain = async (req, res) => {
  try {
      const { source, destination, totalSeats, distance } = req.body;

      // Find the source and destination stations
      const sourceStation = await Station.findOne({ where: { name: source } });
      const destinationStation = await Station.findOne({ where: { name: destination } });
      if (!sourceStation || !destinationStation) {
          return res.status(404).json({ message: "Source or destination station not found" });
      }

      // Create the new train with appropriate sourceStationId and destinationStationId
      const newTrain = await Train.create({
          source,
          destination,
          totalSeats,
          distance,
          sourceStationId: sourceStation.station_id, // Use the correct attribute name for the ID
          destinationStationId: destinationStation.station_id // Use the correct attribute name for the ID
      });

      res.status(201).json({ message: "Train registered successfully", train: newTrain });
  } catch (error) {
      console.error("Error in registering train:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};



  
const handleGetSeatAvailability = async (req, res) => {
  try {
      const { source, destination } = req.query;

      // Find the distances of source and destination stations from the source station
      const sourceStation = await Station.findOne({ where: { name: source } });
      const destinationStation = await Station.findOne({ where: { name: destination } });
      if (!sourceStation || !destinationStation) {
          return res.status(404).json({ message: "Source or destination station not found" });
      }

      const trains = await Train.findAll({
          where: {
              sourceStationId: sourceStation.station_id,
              destinationStationId: destinationStation.station_id
          }
      });

      res.status(200).json({ trains });
  } catch (error) {
      console.error("Error getting seat availability:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};

export {handleRegisterTrain, handleGetSeatAvailability }


