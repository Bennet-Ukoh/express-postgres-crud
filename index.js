// index.js
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
