// bookingController.js
import Booking from '../models/booking.js';
import Train from '../models/train.js';
import User from '../models/user.js';
const handleBookSeat = async (req, res) => {
  try {
    const { userId, trainId, seatsToBook } = req.body;
    const train = await Train.findByPk(trainId);
    const user = await User.findByPk(userId);

    console.log(train, "thisis the ", user)
    if (!train) {
      return res.status(404).json({ message: "Train not found" });
    }
    if (train.availableSeats < seatsToBook) {
      return res.status(400).json({ message: "Insufficient seats available" });
    }
    const booking = await Booking.create({ train_id: train.train_id, user_id: user.user_id, seatsBooked: seatsToBook }); // Adjusted keys

    train.availableSeats -= seatsToBook;
    await train.save();

    res.status(200).json({ message: "Seat(s) booked successfully", booking });
  } catch (error) {
    console.error("Error booking seat:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleGetBookingDetails = async (req, res) => {
  try {
    const { bookingId } = req.params;
    console.log(bookingId)
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Check if the user is authorized to view this booking
    if (booking.userId !== req.user.user_id) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    res.status(200).json({ booking });
  } catch (error) {
    console.error("Error getting booking details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { handleGetBookingDetails, handleBookSeat };
