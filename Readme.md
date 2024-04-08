# IRCTC - RailwayAPI

## Requirements
Ensure that you have node.js and PostgreSQL installed in your environment.

## Setup Project

1. Clone the repository:
    ```bash
    git clone https://github.com/SomilJain0112/RailwayAPI
    ```

2. Navigate to the project directory:
    ```bash
    cd TEST_DB_REPO-MAIN
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the project root directory.

5. Add the following environment variables to the `.env` file:
    ```bash
    DB_NAME=your_database_name
    DB_PASS=your_database_password
    DB_HOST=your_database_host
    API_KEY=your_api_key
    ```

6. You are now ready to use the API.

## API Endpoints

### User Authentication

#### [POST] "/user/signup"
Register a new user.

#### [POST] "/user/login"
Login with existing credentials.

**Response Example:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTI1MjM4MDB9.mNhjMKGoar4LENDHnov5sj7lHbHfucn4fPn2047olfA"
}
```


Train Operations

### [POST] "/train/registerTrain"


Register a new train (include headers[x-api-key] = API_KEY).


### [GET] "/train/getSeatAvailability"

Get seat availability information (include Bearer {token}).


Response Example:

```
{
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
      "destinationStationId": 4
    }
  ]
}
```

Booking Operations

### [POST] "/booking/bookSeat"

Book seats on a train (include Bearer {token}).


### [GET] "/booking/getBookingDetails/:bookingId"
Get booking details by ID (include Bearer {token}).

Response Example:


```
{
  "booking": {
    "booking_id": 1,
    "seatsBooked": 2,
    "train_id": 1,
    "user_id": 1,
    "createdAt": "2024-04-07T23:21:22.630Z",
    "updatedAt": "2024-04-07T23:21:22.630Z"
  }
}
```

Station Operations
### [POST] "/station/registerStations"
Register new stations (include headers[x-api-key] = API_KEY).

Response Example:

```
{
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
```