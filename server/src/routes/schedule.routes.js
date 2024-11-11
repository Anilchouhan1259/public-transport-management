const express = require("express");
const {
  createSchedule,
  getBusses,
  busDetail,
} = require("../controllers/schedule.controller");

const scheduleRoute = express.Router();

scheduleRoute.post("/postschedule", createSchedule);
scheduleRoute.post("/getbusses", getBusses);
scheduleRoute.get("/shedule/:scheduleId", busDetail);

module.exports = scheduleRoute;
