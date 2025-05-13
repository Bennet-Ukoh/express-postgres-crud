// index.js
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/", userRoutes);

// Start the server
app.get("/", (req, res) => {
  res.send("Welcome to the User API");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});
// Middleware to handle 500 errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
