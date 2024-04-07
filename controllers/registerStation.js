import Station from '../models/station.js';

const handleRegisterStation = async (req, res) => {
    try {
        const { name, distanceFromSource } = req.body;

        const newStation = await Station.create({ name, distanceFromSource });

        res.status(201).json({ message: "Station registered successfully", station: newStation });
    } catch (error) {
        console.error("Error in registering station:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export { handleRegisterStation };
