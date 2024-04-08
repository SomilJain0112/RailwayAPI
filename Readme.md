Project Tile
IRCTC

Requirements
Install node.js , PostgreSQL, in environment.

#Setup Project

1. git clone https://github.com/SomilJain0112/RailwayAPI
2. cd TEST_DB_REPO-MAIN
3. npm i
4. Create .env file in TEST_DB_REPO-MAIN/ 
5. Create DB_NAME , DB_PASS , DB_HOST, API_KEY in .env file using your own credential for PostgreSQl .
6. We are ready to use our API

[POST] "/user/signup"

[POST] "/user/login"

Response while testing - {
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTI1MjM4MDB9.mNhjMKGoar4LENDHnov5sj7lHbHfucn4fPn2047olfA"
}

[POST] "/train/registerTrain" include headers[x-api-key] = API_KEY


[GET]  "train/getSeatAvailability" include Bearer {token}


Response while testing - {
  "trains": [
    {
      "train_id": 1,
      "source": "Station C",
      "destination": "Station D",
      "totalSeats": 100,
      "availableSeats": 100,
      "distance": 50,
      "createdAt": "2024-04-07T22:09:10.599Z",
      "updatedAt": "2024-04-07T22:09:10.599Z",
      "sourceStationId": 3,
      "destinationStationId": 4
    }
  ]
}
### test


[POST] "/booking/bookSeat" include Bearer {token}

[GET] "/booking/getBookingDetails/:bookingId" include Bearer {token}

Response while testing - {
  "booking": {
    "booking_id": 1,
    "seatsBooked": 2,
    "train_id": 1,
    "user_id": 1,
    "createdAt": "2024-04-07T23:21:22.630Z",
    "updatedAt": "2024-04-07T23:21:22.630Z"
  }
}

[POST] "/staion/registerStations" include headers[x-api-key] = API_KEY


Response while testing - {
  "message": "Train registered successfully",
  "train": {
    "availableSeats": 100,
    "train_id": 1,
    "source": "Station C",
    "destination": "Station D",
    "totalSeats": 100,
    "distance": 50,
    "sourceStationId": 3,
    "destinationStationId": 4,
    "updatedAt": "2024-04-07T22:09:10.599Z",
    "createdAt": "2024-04-07T22:09:10.599Z"
  }
}