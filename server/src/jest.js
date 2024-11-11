// app.test.js
const request = require("supertest");
const app = require("./app"); // Assuming your Express app is exported from app.js or similar
const mongoose = require("mongoose");

beforeAll(async () => {
  // Connect to a test database
  await mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Close the database connection after tests
  await mongoose.connection.close();
});

describe("Testing API Endpoints", () => {
  // Test for POST /postbusses
  it("should create a new bus", async () => {
    const response = await request(app)
      .post("/postbusses")
      .send({ bus_number: "1234", capacity: 50 });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.bus_number).toBe("1234");
  });

  // Test for GET /locations
  it("should get all locations", async () => {
    const response = await request(app).get("/locations");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Expect an array of locations
  });

  // Test for POST /postschedule
  it("should create a new schedule", async () => {
    const response = await request(app).post("/postschedule").send({
      bus_id: "some_bus_id",
      departure_date: "2024-12-01T08:00:00Z",
      departure_time: "2024-12-01T08:00:00Z",
      arrival_time: "2024-12-01T12:00:00Z",
      available_seats: 30,
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
  });

  // Test for POST /getbusses
  it("should get busses based on schedule or criteria", async () => {
    const response = await request(app)
      .post("/getbusses")
      .send({ scheduleId: "some_schedule_id" });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Expect an array of buses
  });

  // Test for GET /schedule/:scheduleId
  it("should get details of a schedule by ID", async () => {
    const scheduleId = "some_existing_schedule_id";
    const response = await request(app).get(`/schedule/${scheduleId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", scheduleId);
  });
});
