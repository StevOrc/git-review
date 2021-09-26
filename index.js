import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./src/config/config.env" });
const PORT = process.env.PORT || 3001;

const init = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to mongodb...");

  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
};

init();
