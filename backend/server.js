const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json()); // For parsing JSON bodies

// Path to the JSON file
const DATA_FILE_PATH = path.join(__dirname, "data.json");

// Utility function to read the data file
function readDataFile() {
  try {
    const data = fs.readFileSync(DATA_FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data file:", error);
    // Return a default structure if file reading fails
    return { lastPeriodDate: null };
  }
}

// Utility function to write to the data file
function writeDataFile(data) {
  try {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing data file:", error);
  }
}

/**
 * GET /api/period
 * Returns the last period date
 */
app.get("/api/period", (req, res) => {
  const data = readDataFile();
  // You could add logic to handle if data is null
  res.json({
    lastPeriodDate: data.lastPeriodDate,
  });
});

/**
 * POST /api/period
 * Updates the last period date with a date provided in the request body
 * If no date is provided, default to the current date
 *
 * Expects JSON body:
 * {
 *   "lastPeriodDate": "2025-03-20T00:00:00.000Z"
 * }
 */
app.post("/api/period", (req, res) => {
  const { lastPeriodDate } = req.body;
  const data = readDataFile();

  // If no date is provided, set to today's date
  data.lastPeriodDate = lastPeriodDate || new Date().toISOString();

  // Write back to the file
  writeDataFile(data);

  res.json({
    success: true,
    message: "Last period date updated",
    lastPeriodDate: data.lastPeriodDate,
  });
});

/**
 * POST /api/period/reset
 * Resets the last period date to the current date
 */
app.post("/api/period/reset", (req, res) => {
  const data = readDataFile();

  // Reset to today's date
  data.lastPeriodDate = new Date().toISOString();

  writeDataFile(data);

  res.json({
    success: true,
    message: "Last period date reset to today",
    lastPeriodDate: data.lastPeriodDate,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
